# Generated by Django 4.1.7 on 2023-09-22 04:23

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('vehiculosApp', '0002_vehiculo_comentario'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='vehiculo',
            options={'verbose_name': 'Vehiculo', 'verbose_name_plural': 'Vehiculos'},
        ),
    ]