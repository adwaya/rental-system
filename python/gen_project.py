import os
import subprocess
from pathlib import Path

PROJECT_NAME = "smart_rental"
APP_NAME = "properties"

def run(cmd):
    subprocess.run(cmd, shell=True, check=True)

def write_file(path, content):
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(content.strip() + "\n")

print("🚀 Creating Django project...")
run(f"django-admin startproject {PROJECT_NAME}")

os.chdir(PROJECT_NAME)

print("📦 Creating app...")
run(f"python manage.py startapp {APP_NAME}")

# -----------------------------
# settings.py update
# -----------------------------
settings_path = Path(PROJECT_NAME) / "settings.py"
settings = settings_path.read_text()

if APP_NAME not in settings:
    settings = settings.replace(
        "INSTALLED_APPS = [",
        "INSTALLED_APPS = [\n    'properties',"
    )

settings_path.write_text(settings)

# -----------------------------
# models.py
# -----------------------------
write_file(
    Path(APP_NAME) / "models.py",
    """
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
    property_type = models.CharField(max_length=10, choices=TYPE_CHOICES)
    bedrooms = models.IntegerField()
    bathrooms = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
"""
)

# -----------------------------
# admin.py
# -----------------------------
write_file(
    Path(APP_NAME) / "admin.py",
    """
from django.contrib import admin
from .models import Property

@admin.register(Property)
class PropertyAdmin(admin.ModelAdmin):
    list_display = ("title", "location", "price", "property_type")
    list_filter = ("property_type", "location")
"""
)

# -----------------------------
# views.py
# -----------------------------
write_file(
    Path(APP_NAME) / "views.py",
    """
from django.shortcuts import render, get_object_or_404
from .models import Property

def home(request):
    properties = Property.objects.all()
    return render(request, "properties/home.html", {"properties": properties})

def property_detail(request, pk):
    property = get_object_or_404(Property, pk=pk)
    return render(request, "properties/detail.html", {"property": property})
"""
)

# -----------------------------
# app urls.py
# -----------------------------
write_file(
    Path(APP_NAME) / "urls.py",
    """
from django.urls import path
from . import views

urlpatterns = [
    path("", views.home, name="home"),
    path("property/<int:pk>/", views.property_detail, name="property_detail"),
]
"""
)

# -----------------------------
# main urls.py
# -----------------------------
write_file(
    Path(PROJECT_NAME) / "urls.py",
    """
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path("admin/", admin.site.urls),
    path("", include("properties.urls")),
]
"""
)

# -----------------------------
# templates
# -----------------------------
write_file(
    Path(APP_NAME) / "templates/properties/home.html",
    """
<!DOCTYPE html>
<html>
<head>
  <title>Smart Rental System</title>
</head>
<body>
  <h1>Available Properties</h1>

  {% if properties %}
    <ul>
      {% for p in properties %}
        <li>
          <a href="{% url 'property_detail' p.id %}">
            {{ p.title }} – {{ p.location }} – £{{ p.price }}
          </a>
        </li>
      {% endfor %}
    </ul>
  {% else %}
    <p>No properties available.</p>
  {% endif %}
</body>
</html>
"""
)

write_file(
    Path(APP_NAME) / "templates/properties/detail.html",
    """
<!DOCTYPE html>
<html>
<head>
  <title>{{ property.title }}</title>
</head>
<body>
  <h1>{{ property.title }}</h1>
  <p><strong>Location:</strong> {{ property.location }}</p>
  <p><strong>Price:</strong> £{{ property.price }}</p>
  <p><strong>Type:</strong> {{ property.get_property_type_display }}</p>
  <p><strong>Bedrooms:</strong> {{ property.bedrooms }}</p>
  <p><strong>Bathrooms:</strong> {{ property.bathrooms }}</p>
  <p>{{ property.description }}</p>

  <a href="/">← Back</a>
</body>
</html>
"""
)

print("✅ Django Smart Rental System generated successfully!")
print("➡ Next steps:")
print("   python manage.py makemigrations")
print("   python manage.py migrate")
print("   python manage.py createsuperuser")
print("   python manage.py runserver")
