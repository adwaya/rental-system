from django.db import models

class Property(models.Model):
    RENT = "rent"
    SALE = "sale"

    TYPE_CHOICES = [
        (RENT, "Rent"),
        (SALE, "Sale"),
    ]

    title = models.CharField(max_length=200)
    description = models.TextField()
    price = models.IntegerField()
    location = models.CharField(max_length=100)

    latitude = models.FloatField(null=True, blank=True)
    longitude = models.FloatField(null=True, blank=True)

    property_type = models.CharField(max_length=10, choices=TYPE_CHOICES)
    bedrooms = models.IntegerField()
    bathrooms = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
