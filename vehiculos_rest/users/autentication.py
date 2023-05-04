from rest_framework.authentication import TokenAuthentication
from rest_framework.exceptions import AuthenticationFailed    
from django.utils import timezone
from datetime import timedelta
from django.conf import settings

class ExpiringTokenAutentication(TokenAuthentication):

    #calcula el tiempo de expiracion
    def expires_in(self, token):
        time_elapsed = timezone.now() - token.created
        left_time = timedelta(seconds = settings.TOKEN_EXPIRED_AFTER_SECONDS - time_elapsed)
        return left_time

    #calcula si el token ha expirado
    def is_token_expired(self, token):
        return self.expires_in(token) < timedelta(seconds=0)

    #crea la variable que valida si ha expirado el token y luego obtenemos el valor de lo que ha pasado
    def token_expire_handler(self, token):
        is_expire = self.is_token_expired(token)
        if is_expire:
            print('token expirado')
        return is_expire


    def authenticate_credentials(self, key):
        try:
            token = self.get_model().objects.select_related('user').get(key=key)
        except self.get_model().DoesNotExist:
            raise AuthenticationFailed('Token invalido.')
        
        if not token.user.is_active:
            raise AuthenticationFailed('Usuario inactivo o eliminado')
        
        is_expired = self.token_expire_handler(token)
        if is_expired:
            raise AuthenticationFailed('Su token ha expirado')
        
        return (token.user, token)