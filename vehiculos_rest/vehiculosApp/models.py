from django.db import models
from baseApp.models import BaseModel


# Create your models here.
class Vehiculo(BaseModel):
    placa = models.CharField('Placa identificada',max_length=10, unique=True)
    img_placa = models.ImageField('Imagen Placa', upload_to='placas/', max_length=255, null=True)
    hora_ingreso = models.DateTimeField('Hora de ingreso', auto_now_add=True, null=False)
    hora_salida = models.DateTimeField('Hora de salida', auto_now_add=False, null=True)
    salida = models.BooleanField(default=False)

class Meta:

    verbose_name = 'Vehiculo'
    verbose_name_prural = 'Vehiculos'

    def __str__(self):
        return self.placa