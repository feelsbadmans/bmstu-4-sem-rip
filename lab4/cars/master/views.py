from django.shortcuts import render
from .models import Car

def index(request):
    cars = Car.objects.all()
    return render(request, 'index.html', {'cars': cars})

def details(request, id):
    car = Car.objects.get(id=id)
    return render(request, 'details.html', {'car': car})
