from users.models import User
from rest_framework import serializers


class UserTokenSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'email', 'name')

#Serializador para crear y actualizar con encriptacion de contraseña
class UserSerializer(serializers.ModelSerializer):
    class Meta: 
        model = User
        fields = '__all__'

    def create(self, validated_data):
        user = User(**validated_data)
        user.set_password(validated_data['password']) #Encriptamos contraseña
        user.save()
        return user
    
    def update(self, instance, validated_data):
        update_user = super().update(instance, validated_data) #Validamos la data para actualizar
        update_user.set_password(validated_data['password'])
        update_user.save()
        return update_user

#Este serializador es para listar los usuarios con el .values()
class UserListSerializer(serializers.ModelSerializer):
    class Meta: 
        model = User

    #Esta funcion se usa para determinar que valores se van a mostrar en la consulta de uno o varios usuarios
    def to_representation(self, instance):
        return {
            'id': instance['id'],
            'username': instance['username'],
            'email': instance['email'],
            'password': instance['password']
        }