from django.urls import path
from vehiculosApp.api.api import vehiculo_api_view, vehiculo_detail_view, valor_a_pagar, vehiculo_detail_view_placa

urlpatterns = [
    path('vehiculo/', vehiculo_api_view, name='vehiculo_api'),
    path('vehiculo/<int:pk>', vehiculo_detail_view, name='vehiculo_detail_placa'),
    path('vehiculo/pagar/<int:pk>', valor_a_pagar, name='valor_a_pagar'),
    path('vehiculo/<str:plate>', vehiculo_detail_view_placa, name='vehiculo_detail_placa'),
]