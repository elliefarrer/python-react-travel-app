from .models import City
from .serializers import CitySerializer

from rest_framework import generics

class CityListIndex(generics.ListCreateAPIView):
    queryset = City.objects.all()
    serializer_class = CitySerializer

class CityElementShow(generics.RetrieveAPIView):
    serializer_class = CitySerializer
    lookup_field = 'pk'

    def getObject(self):
        pk = self.kwargs('pk')
        return get_object_or_404(City, pk=pk)

    # queryset = City.objects.all()
    # serializer_class = CitySerializer

# TODO: put something in here to tell it to just return one object instead of a massive object of stuff. What's the show equiv of ListCreateAPIView? Then use this in urls.py in this folder. Also get a logger!!!!
