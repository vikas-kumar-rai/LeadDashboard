from django.conf.urls import url
from django.contrib import admin
from django.urls import path
from . import views
from rest_framework_jwt.views import obtain_jwt_token
from rest_framework_jwt.views import refresh_jwt_token
from rest_framework_jwt.views import verify_jwt_token

urlpatterns = [
    url(r'^new-lead/', views.LeadAPIView.as_view(), name="Create Lead"),
    path('', views.AccountsListCreate.as_view() ),
    url('accounts/(?P<pk>\d+)/$', views.AccountsListPut.as_view({'get': 'retrieve', 'put': 'update'}),name='edit_accounts'),
    path('comment', views.CommentsListCreate.as_view() ),
    path('reject', views.RejectListCreate.as_view() ),
    url(r'^auth-jwt/', obtain_jwt_token),
    url(r'^auth-jwt-refresh/', refresh_jwt_token),
    url(r'^auth-jwt-verify/', verify_jwt_token),
    path('source', views.SourceListCreate.as_view() ),
    path('technology', views.TechnologyListCreate.as_view() ),
    path('domain', views.DomainListCreate.as_view() ),
    path('assign-to', views.AssignToListCreate.as_view() ),
]