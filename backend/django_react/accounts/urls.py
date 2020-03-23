from django.conf.urls import url
from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [

    path('', views.AccountsListCreate.as_view() ),
    url('accounts/(?P<pk>\d+)/$', views.AccountsListPut.as_view({'get': 'retrieve', 'put': 'update'}),name='edit_accounts'),
    path('comment', views.CommentsListCreate.as_view() ),
    path('reject', views.RejectListCreate.as_view() ),
]