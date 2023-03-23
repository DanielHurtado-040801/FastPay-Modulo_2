from django.urls import path
from vehiculosApp.api.api import vehiculo_api_view

urlpatterns = [
    path('vehiculo/', vehiculo_api_view, name='vehiculo_api')
]