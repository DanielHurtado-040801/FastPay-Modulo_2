from vehiculosApp.models import Vehiculo
from rest_framework import serializers

class VehiculoSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Vehiculo
        exclude = ('state', )