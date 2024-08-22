from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import ScrapedData
from .serializers import DynamicDataSerializer


@api_view(["GET"])
def  get_scraped_data(request):
    try:
        scraped_data = ScrapedData.objects.all()
        serializer = DynamicDataSerializer(scraped_data, many=True)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    except Exception:
        return Response(status=status.HTTP_404_NOT_FOUND)
# @api_view(["POST"])
# def create_scraped_data(request):
#     try:
#         requested_data = request.data
#         serializer = DynamicDataSerializer(data = requested_data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data, status=status.HTTP_200_OK)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# Create your views here
