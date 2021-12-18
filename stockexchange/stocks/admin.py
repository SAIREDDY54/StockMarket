from django.contrib import admin

# Register your models here.
from .models import Stocks, MutualFunds, FixedDeposits, USStocks

admin.site.register(Stocks)
admin.site.register(MutualFunds)
admin.site.register(FixedDeposits)
admin.site.register(USStocks)