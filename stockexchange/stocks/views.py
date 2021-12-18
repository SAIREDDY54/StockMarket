from django.shortcuts import render
from django.http import JsonResponse, Http404, HttpResponse
import yfinance as yf
from rest_framework.response import Response
import requests
# Create your views here.
# def get_charts_stocks(name, period, request, format=None):
#   company = yf.Ticker(name)
#   stock_data = company.history(period=period)
#   return JsonResponse(stock_data)

def get_charts(request, interval, symbol, rangee, region):
  # querystring = {"interval":"5m","symbol":"LUPIN.NS","range":"1d","region":"IN"}
  url = 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-chart'
  querystring = {"interval": interval,"symbol": symbol,"range": rangee,"region": region}

  headers = {
    'x-rapidapi-key': "e959383f51msh8857ba7b56b56ffp129494jsn218404dd237e",
    'x-rapidapi-host': "apidojo-yahoo-finance-v1.p.rapidapi.com"
    }
  response = requests.request("GET", url, headers=headers, params = querystring)
  data = response.json()
  return JsonResponse(data)

def get_analysis(request, symbol, region):
  url = "https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-analysis"
  querystring = {"symbol": symbol, "region": region}
  headers = {
    'x-rapidapi-key': "e959383f51msh8857ba7b56b56ffp129494jsn218404dd237e",
    'x-rapidapi-host': "apidojo-yahoo-finance-v1.p.rapidapi.com"
  }
  response = requests.request("GET", url, headers=headers, params=querystring)
  data = response.json()
  return JsonResponse(data)

def get_summary(request, symbol, region):
  url = "https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-summary"
  querystring = {"symbol": symbol, "region": region}
  headers = {
    'x-rapidapi-key': "e959383f51msh8857ba7b56b56ffp129494jsn218404dd237e",
    'x-rapidapi-host': "apidojo-yahoo-finance-v1.p.rapidapi.com"
  }
  response = requests.request("GET", url, headers=headers, params=querystring)
  data = response.json()
  return JsonResponse(data)