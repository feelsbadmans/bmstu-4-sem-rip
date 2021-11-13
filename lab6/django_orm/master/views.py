from django.shortcuts import render

from .serializers import ProcSerializer
from .models import Pc, Processor
from rest_framework import viewsets

def index(request):
    return render(request, 'index.html')

def pcs(request):
    pcs = Pc.objects.all()
    return render(request, 'pcs.html', {'pcs': pcs})

def pc_detail(request, id):
    pc = Pc.objects.get(id=id)
    proc = Processor.objects.get(id=pc.proc_id)
    return render(request, 'pc_detail.html', {'pc': pc, 'proc': proc})

def processors(request):
    processors = Processor.objects.all()
    return render(request, 'processors.html', {'processors': processors})

def proc_detail(request, id):
    proc = Processor.objects.get(id=id)
    return render(request, 'proc_detail.html', {'proc': proc})

class ProcViewSet(viewsets.ModelViewSet):
    '''API endpoint'''
    queryset = Processor.objects.all()
    serializer_class = ProcSerializer