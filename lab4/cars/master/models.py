from django.db import models
from django.db.models.fields.related import ForeignKey
from django.utils.translation import gettext as _
from utils.years import year_choices, current_year
class Body(models.Model):
    title = models.CharField('Тип кузова', max_length=20)

    def __str__(self):
        return self.title

class Car(models.Model):
    name = models.CharField('Название', max_length=20)
    body = ForeignKey(Body, on_delete=models.CASCADE)
    year = models.IntegerField(('year'), choices=year_choices(), default=current_year)
    passengers = models.IntegerField('Число пассажиров')
    cost = models.IntegerField('Стоимость')
    color = models.CharField('Цвет', max_length=30)

    def __str__(self):
        return self.name