from rest_framework import serializers
from .models import ScrapedData

class DynamicDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = ScrapedData
        fields = '__all__'