from rest_framework.views import APIView
from rest_framework.decorators import api_view
from users.api.serializers import UserSerializer
from users.models import User
from rest_framework.response import Response

@api_view(['GET', 'POST'])
def user_api_view(request):
    if request.method == 'GET':        
        users = User.objects.all()
        users_serializer  = UserSerializer(users, many = True)
        return  Response(users_serializer.data)
    

    elif request.method == 'POST':
        users_serializer = UserSerializer(data = request.data)
        if users_serializer.is_valid():
            users_serializer.save()
            return Response(users_serializer.data)
        return Response(users_serializer.errors)
