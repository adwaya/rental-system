from django.shortcuts import render, get_object_or_404
from .models import Property

def home(request):
    properties = Property.objects.all()

    # Get filters from query params
    location = request.GET.get("location")
    property_type = request.GET.get("type")
    max_price = request.GET.get("max_price")

    if location:
        properties = properties.filter(location__icontains=location)

    if property_type:
        properties = properties.filter(property_type=property_type)

    if max_price:
        try:
            properties = properties.filter(price__lte=int(max_price))
        except ValueError:
            pass

    return render(request, "properties/home.html", {
        "properties": properties,
        "filters": {
            "location": location or "",
            "type": property_type or "",
            "max_price": max_price or "",
        }
    })

def property_detail(request, pk):
    property = get_object_or_404(Property, pk=pk)
    return render(request, "properties/detail.html", {
        "property": property
    })
