from django.conf.urls import *
from django.contrib import admin
admin.autodiscover()
from . import views

urlpatterns = [
    url(r'^cities/$', views.city_collection, name="city_index"),
    url(r'^cities/(?P<pk>[0-9]+)$', views.city_element, name="city_show")
]
