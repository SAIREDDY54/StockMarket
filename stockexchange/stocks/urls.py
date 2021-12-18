from django.urls import path, include
from .api import StocksAPI, ALLStocksAPI, MutualFundsAPI, ALLMutualFundsAPI, ALLFixedDepositsAPI, ALLUSStocksAPI, FixedDepositsAPI, USStocksAPI
from knox import views as knox_views
from . import views
urlpatterns = [
  path('api/stocks', ALLStocksAPI.as_view()),
  path('api/stocks/<str:name>', StocksAPI.as_view()),
  path('api/mutual-funds', ALLMutualFundsAPI.as_view()),
  path('api/mutual-funds/<str:name>', MutualFundsAPI.as_view()),
  path('api/fixed-deposits', ALLFixedDepositsAPI.as_view()),
  path('api/fixed-deposits/<str:name>', FixedDepositsAPI.as_view()),
  path('api/usstocks', ALLUSStocksAPI.as_view()),
  path('api/usstocks/<str:name>', USStocksAPI.as_view()),
  path('api/getRapidAPI/get-charts/<str:interval>/<str:symbol>/<str:rangee>/<str:region>', views.get_charts, name = 'stocks'),
  path('api/getRapidAPI/get-analysis/<str:symbol>/<str:region>', views.get_analysis, name = 'stocksAnalyis'),
  path('api/getRapidAPI/get-summary/<str:symbol>/<str:region>', views.get_summary, name = 'stocksSummary')
  # path('api/charts/stocks/<str:name>?<str:period>', get_charts_stocks())
]