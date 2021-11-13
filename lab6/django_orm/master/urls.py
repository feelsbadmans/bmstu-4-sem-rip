from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path('pc', views.pcs),
    path('pc/<int:id>/', views.pc_detail),
    path('proc', views.processors),
    path('proc/<int:id>/', views.proc_detail),
]
