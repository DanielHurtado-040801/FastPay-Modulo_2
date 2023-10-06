from rest_framework.views import APIView
from rest_framework.decorators import api_view
from parking.api.serializers import ParkingSerializer
from parking.models import Parking
from rest_framework.response import Response
import pytz
from datetime import datetime, timedelta
from django.utils.timezone import make_aware
from rest_framework import status




@api_view(['GET'])
def parameters_parking_all(request):
    if request.method == 'GET':        
        parameters = Parking.objects.all()
        parking_serializer  = ParkingSerializer(parameters, many = True)
        return  Response(parking_serializer.data)
    

@api_view(['GET','PUT'])
def parameters(request):
    if request.method == 'GET':
        parameters = Parking.objects.filter(id=1).first()
        parking_serializer = ParkingSerializer(parameters)
        return Response(parking_serializer.data)
    elif request.method == 'PUT': 
        request.data
        parameters = Parking.objects.filter(id=1).first()
        parking_serializer = ParkingSerializer(parameters, data=request.data)
        if parking_serializer.is_valid():
            parking_serializer.save()
            vehiculo = parking_serializer.save()  # Guarda el vehículo en la base de datos

            # # Crea el registro de auditoría después de guardar el vehículo
            # Auditoria.objects.create(
            #     usuario_id = request.query_params.get('userId'),
            #     vehiculo_afectado=vehiculo,  # Utiliza la instancia guardada del vehículo
            #     accion='U',  # Modificación
            #     detalles=vehiculo.comentario + '- Vehiculo: ' + vehiculo.placa
            # )
            return Response(parking_serializer.data)
        else: 
            return Response("Datos invalidos")
        return Response(vehiculo_serializer.errors)