from django.contrib import admin
from vehiculosApp.models import Vehiculo

class VehiculosAdmin(admin.ModelAdmin):
    readonly_fields = ('id',)

# Register your models here.
admin.site.register(Vehiculo, VehiculosAdmin)
