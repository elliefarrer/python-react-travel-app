from django.urls import path
from . import views

urlpatterns = [
    path('api/city/', views.CityListCreate.as_view())
]
