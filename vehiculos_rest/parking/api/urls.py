from django.urls import path
from parking.api.api import parameters_parking_all, parameters

urlpatterns = [
    path('parking/', parameters_parking_all, name='parameters_parking'),
    path('parking/1', parameters, name='parameters'),
]