from rest_framework import serializers
from .models import Processor

class ProcSerializer(serializers):
    class Meta:
        # Модель, которую мы сериализуем
        model = Processor
        # Поля, которые мы сериализуем
        fields = ["id", "title", "numb_cores", "freq", "price", "year"]