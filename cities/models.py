from django.db import models

class City(models.Model):
    name = models.CharField(max_length=50)
    country = models.CharField(max_length=50)
    population = models.IntegerField()
    img = models.CharField(max_length=400)
    def __str__(self):
        return self.name
