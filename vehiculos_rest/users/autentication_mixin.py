from users.autentication import ExpiringTokenAutentication
from rest_framework.authentication import get_authorization_header

class Authentication(object):
    
    def get_user(self, request):
        token = get_authorization_header(request).split()
        if token:
            print(token)

        return None

    def dispatch(self, request, *args, **kwargs):
        user = self.get_user(request)
        return super().dispatch(request, *args, **kwargs)