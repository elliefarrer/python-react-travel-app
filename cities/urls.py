from django.conf.urls import url
from . import views

urlpatterns = [
    url('api/city/', views.CityListCreate.as_view()),
    url('api/city/:id', views.CityListCreate.as_view())
]
