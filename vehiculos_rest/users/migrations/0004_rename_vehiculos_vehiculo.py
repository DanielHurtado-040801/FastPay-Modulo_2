# Generated by Django 4.1.7 on 2023-03-22 22:41

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0003_vehiculos'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Vehiculos',
            new_name='Vehiculo',
        ),
    ]
