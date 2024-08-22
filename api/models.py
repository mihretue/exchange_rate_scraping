from django.db import models

class ScrapedData(models.Model):
    data = models.JSONField()
    created_at = models.DateTimeField(auto_now_add=True)
# Create your models here.
