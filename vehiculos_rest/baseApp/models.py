from django.db import models

# Create your models here.
class BaseModel(models.Model):
    id = models.AutoField(primary_key=True)
    state = models.BooleanField(default=True)
    created_date = models.DateTimeField('Fecha de creacion', auto_now_add=True, auto_now=False)
    modified_date = models.DateTimeField('Fecha de modificacion', auto_now_add=False, auto_now=True, null=True)
    delete_date = models.DateTimeField('Fecha de eliminacion', auto_now_add=False, auto_now=True, null=True)

    class Meta:
        abstract = True
        verbose_name = 'Modelo Base'
        verbose_name_plural = 'Modelos Base'