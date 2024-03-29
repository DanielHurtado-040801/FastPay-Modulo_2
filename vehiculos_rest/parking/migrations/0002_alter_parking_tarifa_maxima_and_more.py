# Generated by Django 4.1.7 on 2023-09-21 05:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('parking', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='parking',
            name='tarifa_maxima',
            field=models.DecimalField(decimal_places=2, default=25000, max_digits=7, verbose_name='Valor Tarifa Maxima'),
        ),
        migrations.AlterField(
            model_name='parking',
            name='tarifa_minima',
            field=models.DecimalField(decimal_places=2, default=800, max_digits=7, verbose_name='Valor Tarifa Minima'),
        ),
        migrations.AlterField(
            model_name='parking',
            name='valor_minuto',
            field=models.DecimalField(decimal_places=2, default=85, max_digits=4, verbose_name='Valor Minuto'),
        ),
    ]
