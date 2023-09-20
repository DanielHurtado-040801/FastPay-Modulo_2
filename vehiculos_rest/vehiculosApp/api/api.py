from rest_framework.views import APIView
from rest_framework.decorators import api_view
from vehiculosApp.api.serializers import VehiculoSerializer
from vehiculosApp.models import Vehiculo
from rest_framework.response import Response
import pytz
from datetime import datetime, timedelta
from django.utils.timezone import make_aware
from rest_framework import status
from audit.models import Auditoria




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
    

@api_view(['GET','PUT','DELETE'])
def vehiculo_detail_view(request, pk):
    if request.method == 'GET':
        vehiculo = Vehiculo.objects.filter(id=pk).first()
        vehiculo_serializer = VehiculoSerializer(vehiculo)
        return Response(vehiculo_serializer.data)
    elif request.method == 'PUT': 
        request.data
        vehiculo = Vehiculo.objects.filter(id=pk).first()
        vehiculo_serializer = VehiculoSerializer(vehiculo, data=request.data)
        if vehiculo_serializer.is_valid():
            vehiculo_serializer.save()
            vehiculo = vehiculo_serializer.save()  # Guarda el vehículo en la base de datos

            # Crea el registro de auditoría después de guardar el vehículo
            Auditoria.objects.create(
                usuario_id = request.query_params.get('userId'),
                vehiculo_afectado=vehiculo,  # Utiliza la instancia guardada del vehículo
                accion='U',  # Modificación
                detalles=vehiculo.comentario + '- Vehiculo: ' + vehiculo.placa
            )
            return Response(vehiculo_serializer.data)
        else: 
            return Response("Datos invalidos")
        return Response(vehiculo_serializer.errors)
    elif request.method == 'DELETE':
        vehiculo = Vehiculo.objects.filter(id=pk).first()
        vehiculo.delete()
        # Crea el registro de auditoría después de guardar el vehículo
        Auditoria.objects.create(
                usuario_id = request.query_params.get('userId'),
                vehiculo_afectado=vehiculo,  # Utiliza la instancia guardada del vehículo
                accion='D',  # Modificación
                detalles=f'Se actualizo el vehiculo con placa {vehiculo.placa}.'
                )
        return Response("Vehiculo eliminado correctamente")
    
from django.utils import timezone

@api_view(['GET', 'PUT'])
def valor_a_pagar(request, pk):
    if request.method == 'GET':
        vehiculo = Vehiculo.objects.filter(id=pk).first()

        if vehiculo.salida:  # Verifica si ya se registró la salida del vehículo
            return Response({'error': 'La salida ya ha sido registrada'})

        hora_actual = make_aware(datetime.now() - timedelta(hours=5))  # Convertir la hora actual en un objeto con zona horaria
        tiempo_estacionado = hora_actual - vehiculo.hora_ingreso
        minutos_estacionado = tiempo_estacionado.total_seconds() / 60  # Convierte a horas
        valor_pagar = 85 * minutos_estacionado
        tarifa_fija = 25000
        if valor_pagar > 25000:
            valor_pagar = tarifa_fija
        vehiculo.hora_pago = hora_actual
        vehiculo.valor_pagar = valor_pagar
        vehiculo_serializer = VehiculoSerializer(vehiculo)
        return Response(vehiculo_serializer.data)
    
    elif request.method == 'PUT':
        vehiculo = Vehiculo.objects.filter(id=pk).first()
        vehiculo_serializer = VehiculoSerializer(vehiculo, data=request.data)

        if vehiculo_serializer.is_valid():

            hora_actual = make_aware(datetime.now() - timedelta(hours=5))  # Convertir la hora actual en un objeto con zona horaria
            tiempo_estacionado = hora_actual - vehiculo.hora_ingreso
            minutos_estacionado = tiempo_estacionado.total_seconds() / 60

            pagar = 85 * minutos_estacionado
            print(pagar)
            tarifa_fija = 25000
            if pagar > 25000:
                pagar = tarifa_fija
            else:
                pagar = 85 * minutos_estacionado
            vehiculo.hora_pago = hora_actual
            vehiculo.valor_pagar = pagar
            vehiculo_serializer._validated_data['hora_pago'] = hora_actual
            vehiculo_serializer.validated_data['valor_pagar'] = pagar
            vehiculo_serializer.validated_data['salida'] = True
            vehiculo_serializer.save()
            return Response(vehiculo_serializer.data)
        else: 
            return Response(vehiculo_serializer.errors)
        
@api_view(['GET'])
def vehiculo_detail_view_placa(request, plate):
    if request.method == 'GET':
        vehiculo = Vehiculo.objects.filter(placa=plate).first()

        if vehiculo is not None:
            vehiculo_serializer = VehiculoSerializer(vehiculo)
            return Response(vehiculo_serializer.data)
        else:
            return Response({'message': 'No se encontró ningún vehículo con esta placa.'}, status=status.HTTP_404_NOT_FOUND)