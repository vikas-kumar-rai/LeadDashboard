from django.conf.urls import url
from django.contrib import admin
from django.urls import path, include
from . import views

urlpatterns = [

    path('', views.accountsListCreate.as_view() ),
    url(r'accounts/(?P<pk>\d+)/$', views.accountsListPut.as_view({'get': 'retrieve', 'put': 'update'}),name='edit_accounts'),
    # path('accounts/(?P<pk>\d+)/$', views.accountsListCreate.as_view() ),
]
