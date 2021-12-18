from django.db import models

# Create your models here.
class Stocks(models.Model):
  name = models.CharField(max_length=200)
  price = models.DecimalField(decimal_places=2, max_digits=7)
  openPrice = models.DecimalField(decimal_places=2, max_digits=7)
  prevPrice = models.DecimalField(decimal_places=2, max_digits=7)
  volume = models.IntegerField()
  value = models.IntegerField()
  marketCap = models.IntegerField()
  peRatio = models.DecimalField(decimal_places=2, max_digits=7)
  pbRatio = models.DecimalField(decimal_places=2, max_digits=7)
  roe = models.DecimalField(decimal_places=2, max_digits=7)
  eps = models.DecimalField(decimal_places=2, max_digits=7)
  dividendYield = models.DecimalField(decimal_places=2, max_digits=7)
  industryPE = models.DecimalField(decimal_places=2, max_digits=7)
  bookValue = models.DecimalField(decimal_places=2, max_digits=7)
  todayslow = models.DecimalField(decimal_places=2, max_digits=7)
  todayshigh = models.DecimalField(decimal_places=2, max_digits=7)
  about = models.CharField(max_length=2048)
  parentOrg = models.CharField(max_length=250)
  director = models.CharField(max_length=250)
  NSE = models.CharField(max_length=200)
  founded = models.IntegerField()
  # substocks = SubStocks()

  def __str__(self):
    return self.name


class MutualFunds(models.Model):
  name = models.CharField(max_length=200)
  returns = models.DecimalField(decimal_places=2, max_digits=7)
  returnsThree = models.DecimalField(decimal_places=2, max_digits=7)
  returnsFive = models.DecimalField(decimal_places=2, max_digits=7)
  category = models.DecimalField(decimal_places=2, max_digits=7)
  categoryThree = models.DecimalField(decimal_places=2, max_digits=7)
  categoryFive = models.DecimalField(decimal_places=2, max_digits=7)
  risk = models.CharField(max_length=30)
  minSIP = models.IntegerField()
  expenseRatio = models.DecimalField(decimal_places=2, max_digits=7)
  nav = models.DecimalField(decimal_places=2, max_digits=7)
  fundStarted = models.DateField(auto_now=False, auto_now_add=False)
  fundSize = models.IntegerField()
  
  def __str__(self):
    return self.name

# class SubStocks(models.Model):
#   date = models.DateTimeField(auto_now=False, auto_now_add=False)
#   stockPrice = models.DecimalField(decimal_places=2, max_digits=7)

class FixedDeposits(models.Model):
  name = models.CharField(max_length=200)
  percentage = models.DecimalField(decimal_places=2, max_digits=7)
  minAmount = models.IntegerField()
  compounding = models.CharField(max_length=200)
  preWithdrawal = models.CharField(max_length=200)
  about = models.CharField(max_length=2048)
  crisilRating = models.CharField(max_length=200)
  CEO = models.CharField(max_length=250)
  headquaters = models.CharField(max_length=250)

  def __str__(self):
    return self.name

class USStocks(models.Model):
  name = models.CharField(max_length=200)
  price = models.DecimalField(decimal_places=2, max_digits=7)
  openPrice = models.DecimalField(decimal_places=2, max_digits=7)
  prevPrice = models.DecimalField(decimal_places=2, max_digits=7)
  volume = models.IntegerField()
  avgVolume = models.IntegerField()
  marketCap = models.DecimalField(decimal_places=2, max_digits=7)
  peRatio = models.DecimalField(decimal_places=2, max_digits=7)
  pbRatio = models.DecimalField(decimal_places=2, max_digits=7)
  roe = models.DecimalField(decimal_places=2, max_digits=7)
  eps = models.DecimalField(decimal_places=2, max_digits=7)
  dividendYield = models.DecimalField(decimal_places=2, max_digits=7)
  enterpriseValue = models.DecimalField(decimal_places=2, max_digits=7)
  bookValue = models.DecimalField(decimal_places=2, max_digits=7)
  todayslow = models.DecimalField(decimal_places=2, max_digits=7)
  todayshigh = models.DecimalField(decimal_places=2, max_digits=7)
  about = models.CharField(max_length=2048)
  organisation = models.CharField(max_length=250)
  industry = models.CharField(max_length=250)
  headquarters = models.CharField(max_length=250)

  def __str__(self):
    return self.name
