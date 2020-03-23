from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone


def upload_path(filname):
    return '/'.join([filname])


class Accounts(models.Model):

    title = models.CharField(unique=True, max_length=50, null=True, blank=True)
    description = models.CharField(max_length=100, null=True, blank=True)
    source = models.CharField(max_length=100, null=True, blank=True)
    url = models.URLField(max_length=100, null=True, blank=True)
    domain = models.CharField(max_length=100, null=True, blank=True)
    tags = models.CharField(max_length=70, null=True, blank=True)
    technology = models.CharField(max_length=100, null=True, blank=True)
    assign_to = models.CharField(max_length=50, null=True, blank=True)
    estimated_budget = models.IntegerField(null=True, blank=True)
    referred_by = models.CharField(max_length=100, null=True, blank=True)
    attachment = models.FileField(blank=True, null=True, upload_to = 'media/')
    full_name = models.CharField(max_length=100, null=True, blank=True)
    email = models.EmailField(null=True, blank=True)
    values = models.EmailField(null=True, blank=True)
    company = models.CharField(max_length=100, null=True, blank=True)
    designation = models.CharField(max_length=100, null=True, blank=True)
    skypeid = models.CharField(max_length=50, null=True, blank=True)
    streetaddress = models.CharField(max_length=100, null=True, blank=True)
    city = models.CharField(max_length=50, null=True, blank=True)
    state = models.CharField(max_length=50, null=True, blank=True)
    country = models.CharField(max_length=30, null=True, blank=True)
    phone = models.CharField(max_length=10, null=True, blank=True)
    valuesphone = models.CharField(max_length=10, null=True, blank=True)
    status = models.CharField(max_length=20, null = True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    last_modified = models.DateTimeField(auto_now=True, null=True)

    def __str__(self):
        return self.title

class Comments(models.Model):
    comment = models.CharField(max_length=180)
    accounts = models.ForeignKey(Accounts, related_name='Accounts_Comments', on_delete=models.CASCADE)
    created_date = models.DateField(auto_now_add=True)
    def __str__(self):
        return self.created_date

class Reject(models.Model):
    reject_reason = models.CharField(max_length=250)
    account_id = models.ForeignKey(Accounts, related_name='Accounts_Reject', on_delete=models.CASCADE)
    status = models.CharField(max_length=20, null=True)
    rejected_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.account_id


