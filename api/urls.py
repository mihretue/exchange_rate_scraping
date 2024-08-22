from django.urls import path, include
from .views import get_scraped_data
urlpatterns = [
    path('scraped/info/', get_scraped_data, name='get_scraped_data')
]
