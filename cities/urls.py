from django.conf.urls import url
from . import views

urlpatterns = [
    url('api/city/', views.CityListIndex.as_view(), name="cities_list"),
    url('api/city/(?P<pk>\d+)/$', views.CityElementShow.as_view(), name="cities_element")
    # url(r'^city/$', views.CityListIndex.as_view(), name="cities_list"),
    # url(r'^city/(?P<pk>\d+)/$', views.CityElementShow.as_view(), name="cities_element")
]
