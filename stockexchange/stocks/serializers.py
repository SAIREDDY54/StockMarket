from rest_framework import serializers
from .models import Stocks, MutualFunds, USStocks, FixedDeposits

class StocksSerializer(serializers.ModelSerializer):
  class Meta:
    model = Stocks
    fields = ('name', 'price', 'openPrice', 'prevPrice', 'volume', 'value',
    'marketCap', 'peRatio', 'pbRatio', 'roe', 'eps', 'dividendYield',
    'industryPE', 'bookValue', 'todayslow', 'todayshigh', 'about', 'parentOrg', 'director', 'NSE', 'founded')


class MutualFundsSerializer(serializers.ModelSerializer):
  class Meta:
    model = MutualFunds
    fields = ('name', 'returns', 'returnsThree', 'returnsFive', 'category', 
    'categoryThree', 'categoryFive', 'risk', 'minSIP', 'expenseRatio', 
    'nav', 'fundStarted', 'fundSize')

class USStocksSerializer(serializers.ModelSerializer):
  class Meta:
    model = USStocks
    fields = ('name', 'price', 'openPrice', 'prevPrice', 'volume', 'avgVolume',
    'marketCap', 'peRatio', 'pbRatio', 'roe', 'eps', 'dividendYield',
    'enterpriseValue', 'bookValue', 'todayslow', 'todayshigh', 'about', 'organisation', 'industry', 'headquarters')

class FixedDepositsSerializer(serializers.ModelSerializer):
  class Meta:
    model = FixedDeposits
    fields = ('name', 'percentage', 'minAmount', 'compounding', 'preWithdrawal',
    'about', 'crisilRating', 'CEO', 'headquaters')