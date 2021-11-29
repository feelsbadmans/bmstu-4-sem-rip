from rest_framework import serializers
from .models import Pc, Processor

class ProcSerializer(serializers.ModelSerializer):
    class Meta:
        # Модель, которую мы сериализуем
        model = Processor
        # Поля, которые мы сериализуем
        fields = ["id", "title", "numb_cores", "freq", "price", "year"]

class PcSerializer(serializers.ModelSerializer):
    proc = ProcSerializer()
    class Meta:
        # Модель, которую мы сериализуем
        model = Pc
        # Поля, которые мы сериализуем
        fields = ["id", "title", "proc", "price"]