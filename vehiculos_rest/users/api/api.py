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
    
@api_view(['GET', 'PUT', 'DELETE'])
def user_detail_view(request, pk):
    if request.method == 'GET':
        user = User.objects.filter(id=pk).first()
        user_serializer = UserSerializer(user)
        return Response(user_serializer.data)
    
    elif request.method == 'PUT':
        request.data
        user = User.objects.filter(id=pk).first()
        user_serializer = UserSerializer(user, data = request.data)
        if user_serializer.is_valid():
            user_serializer.save()
            return Response(user_serializer.data)
        return Response(user_serializer.errors)
    
    elif request.method == 'DELETE':
        user = User.objects.filter(id=pk).first()
        user.delete()
        return Response("Usuario eliminado correctamente")