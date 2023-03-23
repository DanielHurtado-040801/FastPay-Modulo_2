from rest_framework.views import APIView
from rest_framework.decorators import api_view
from vehiculosApp.api.serializers import VehiculoSerializer
from vehiculosApp.models import Vehiculo
from rest_framework.response import Response

@api_view(['GET', 'POST'])
def vehiculo_api_view(request):
    if request.method == 'GET':        
        vehiculos = Vehiculo.objects.all()
        vehiculos_serializer  = VehiculoSerializer(vehiculos, many = True)
        return  Response(vehiculos_serializer.data)
    

    elif request.method == 'POST':
        vehiculos_serializer = VehiculoSerializer(data = request.data)
        if vehiculos_serializer.is_valid():
            vehiculos_serializer.save()
            return Response(vehiculos_serializer.data)
        return Response(vehiculos_serializer.errors)