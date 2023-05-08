from rest_framework.views import APIView
from rest_framework.decorators import api_view
from users.api.serializers import UserSerializer, UserListSerializer
from users.models import User
from rest_framework import status
from rest_framework.response import Response

@api_view(['GET', 'POST'])
def user_api_view(request, *args, **kwargs ):

    #List users
    if request.method == 'GET':        
        users = User.objects.all().values('id', 'username','email', 'name','last_name',  'password')
        users_serializer  = UserListSerializer(users, many = True)
        return  Response(users_serializer.data, status= status.HTTP_200_OK)
    
    #Create user
    elif request.method == 'POST':
        users_serializer = UserSerializer(data = request.data)
        if users_serializer.is_valid():
            users_serializer.save()
            return Response(users_serializer.data,status= status.HTTP_201_CREATED)
        
        return Response(users_serializer.errors, status = status.HTTP_400_BAD_REQUEST)
    
@api_view(['GET', 'PUT', 'DELETE'])
def user_detail_view(request, pk):

    #Queryset (Consultar si el usuario existe)
    user = User.objects.filter(id=pk).first()
    if user:

        #Find user by id
        if request.method == 'GET':
            user_serializer = UserSerializer(user)
            return Response(user_serializer.data, status=status.HTTP_200_OK)
        
        #Update user
        elif request.method == 'PUT':
            request.data
            user = User.objects.filter(id=pk).first()
            user_serializer = UserSerializer(user, data = request.data)
            if user_serializer.is_valid():
                user_serializer.save()
                return Response(user_serializer.data , status= status.HTTP_200_OK)
            return Response(user_serializer.errors, status = status.HTTP_400_BAD_REQUEST)
        
        #Delete user
        elif request.method == 'DELETE':
            user = User.objects.filter(id=pk).first()
            user.delete()
            return Response({'message': 'Usuario eliminado correctamente!'} , status= status.HTTP_200_OK)
    return Response({'message': 'No se ha encontrado un usuario con estos datos'}, status = status.HTTP_400_BAD_REQUEST)