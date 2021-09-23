from django.db import models

class CarType(models.Model):
    title = models.CharField('Тип', max_length=20)

class Car(models.Model):
    name = models.CharField('Название', max_length=20)
    type = CarType