from django.db import models

class ScrapedData(models.Model):
    currency_code = models.CharField(max_length=10)
    currency_name = models.CharField(max_length=10)
    cash_buying = models.DecimalField(max_digits=14, decimal_places=6)
    cash_selling = models.DecimalField(max_digits=14, decimal_places=6)
    
    def __str__(self):
        return self.currency_code
    
# Create your models here.
