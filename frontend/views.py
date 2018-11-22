# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response

from cities.models import City
from cities.serializers import CitySerializer

def index(request):
    return render(request, 'frontend/index.html')

@api_view(['GET'])
def city_collection(req):
    print("GET City collection running")
    if req.method == 'GET':
        cities = City.objects.all()
        serializer = CitySerializer(cities, many=True)
        return Response(serializer.data)

@api_view(['GET'])
def city_element(req, pk):
    print("GET City element running")
    try:
        city = City.objects.filter(id=pk)
    except City.DoesNotExist:
        return HttpResponse(status=404)

    if req.method == 'GET':
        serializer = CitySerializer(city)
        return Response(serializer.data)
