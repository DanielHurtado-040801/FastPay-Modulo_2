from django.db import models

class Parking(models.Model):
    
    valor_minuto = models.DecimalField(verbose_name='Valor Minuto', null=False, blank=False, default=85, max_digits=4, decimal_places=2) 
    tarifa_minima = models.DecimalField(verbose_name='Valor Tarifa Minima', null=False, blank=False, default=800, max_digits=7, decimal_places=2) #No puede ser menor de 800 debido a que el valor de transacción en mercado pago es de 800
    tarifa_maxima = models.DecimalField(verbose_name='Valor Tarifa Maxima', null=False, blank=False, default=25000, max_digits=7, decimal_places=2)

    def __str__(self):
        return f'Parametros Parqueadero: {self.valor_minuto} - {self.tarifa_minima} - {self.tarifa_maxima}'