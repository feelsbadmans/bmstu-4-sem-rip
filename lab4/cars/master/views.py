from django.shortcuts import render

def index(request):
    return render(request, 'master/index.html')

def details(request):
    return render(request, 'master/details.html')
