from parking.models import Parking
from rest_framework import serializers

class ParkingSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Parking
        fields = '__all__' 