from django.db import models

# Create your models here.
class Vehiculo(models.Model):
    placa = models.CharField('Placa identificada',max_length=10, unique=True)
    img_placa = models.ImageField('Imagen Placa', upload_to='placas/', max_length=255, unique=True, null=True)
    hora_ingreso = models.TimeField('Hora de ingreso', auto_now_add=True, null=False)
    hora_salida = models.TimeField('Hora de salida', auto_now_add=True, null=False)
    salida = models.BooleanField(default=False)

    def __str__(self):
        return f'{self.placa} {self.hora_ingreso}'