from django.db import models
from vehiculosApp.models import Vehiculo

class Auditoria(models.Model):
    ACCIONES = (
        ('C', 'Creación'),
        ('U', 'Actualización'),
        ('D', 'Eliminación'),
    )
    
    usuario_id = models.IntegerField()  # Campo para almacenar el ID del usuario
    vehiculo_afectado = models.ForeignKey(Vehiculo, on_delete=models.SET_NULL, null=True)
    fecha_hora = models.DateTimeField(auto_now_add=True)
    accion = models.CharField(max_length=1, choices=ACCIONES)
    detalles = models.TextField()

    def __str__(self):
        return f'Usuario ID: {self.usuario_id} - {self.accion} - {self.fecha_hora}'
