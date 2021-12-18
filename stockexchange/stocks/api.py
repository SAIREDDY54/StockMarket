from rest_framework import generics, permissions
from rest_framework.response import Response
from rest_framework.renderers import JSONRenderer
from django.http import JsonResponse, Http404

from .serializers import StocksSerializer, MutualFundsSerializer, USStocksSerializer, FixedDepositsSerializer
from .models import Stocks, MutualFunds, USStocks, FixedDeposits

import yfinance as yf
import requests

class StocksAPI(generics.RetrieveAPIView):
  seralizer_class = StocksSerializer
  def get_object(self, name):
    try:
      return Stocks.objects.get(name=name)
    except Stocks.DoesNotExist:
      raise Http404
  def get(self, request, name, format=None):
    stocks = self.get_object(name)
    serializer = StocksSerializer(stocks)
    return Response(serializer.data)

class ALLStocksAPI(generics.RetrieveAPIView):
  def get(self, request, format=None):
    stocks = Stocks.objects.all()
    serializer = StocksSerializer(stocks, many=True)
    return Response(serializer.data)


class MutualFundsAPI(generics.RetrieveAPIView):
  seralizer_class = MutualFundsSerializer
  def get_object(self, name):
    try:
      return MutualFunds.objects.get(name=name)
    except MutualFunds.DoesNotExist:
      raise Http404
  def get(self, request, name, format=None):
    mutualfunds = self.get_object(name)
    serializer = MutualFundsSerializer(mutualfunds)
    return Response(serializer.data)

class ALLMutualFundsAPI(generics.RetrieveAPIView):
  def get(self, request, format=None):
    mutualfunds = MutualFunds.objects.all()
    serializer = MutualFundsSerializer(mutualfunds, many=True)
    return Response(serializer.data)

class USStocksAPI(generics.RetrieveAPIView):
  seralizer_class = USStocksSerializer
  def get_object(self, name):
    try:
      return USStocks.objects.get(name=name)
    except USStocks.DoesNotExist:
      raise Http404
  def get(self, request, name, format=None):
    usstocks = self.get_object(name)
    serializer = USStocksSerializer(usstocks)
    return Response(serializer.data)

class ALLUSStocksAPI(generics.RetrieveAPIView):
  def get(self, request, format=None):
    usstocks = USStocks.objects.all()
    serializer = USStocksSerializer(usstocks, many=True)
    return Response(serializer.data)

class FixedDepositsAPI(generics.RetrieveAPIView):
  seralizer_class = FixedDepositsSerializer
  def get_object(self, name):
    try:
      return FixedDeposits.objects.get(name=name)
    except FixedDeposits.DoesNotExist:
      raise Http404
  def get(self, request, name, format=None):
    fds = self.get_object(name)
    serializer = FixedDepositsSerializer(fds)
    return Response(serializer.data)

class ALLFixedDepositsAPI(generics.RetrieveAPIView):
  def get(self, request, format=None):
    fds = FixedDeposits.objects.all()
    serializer = FixedDepositsSerializer(fds, many=True)
    return Response(serializer.data)

# class RapidAPI(generics.RetrieveAPIView):
  