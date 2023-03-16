from rest_framework.views import APIView
from users.api.serializers import UserSerializer
from users.models import User
from rest_framework.response import Response

class UserApiView(APIView):

    def get(self, request):
        users = User.objects.all()
        users_serializer  = UserSerializer(users, may = True)
        return  Response(users_serializer)