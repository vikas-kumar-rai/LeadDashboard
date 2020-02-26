from django.db import models


class accounts(models.Model):
    Title = models.CharField(max_length=100)
    Description = models.CharField(max_length=1000)
    Source = models.CharField(max_length=300)
    Url = models.CharField(max_length=300)
    Domain = models.CharField(max_length=300)
    Tags = models.CharField(max_length=3000)
    Technology = models.CharField(max_length=300)
    AssignTo = models.CharField(max_length=300)
    EstimatedBudget = models.IntegerField()
    ReferredBy = models.CharField(max_length=300)
    Attachment = models.FileField()
    FullName = models.CharField(max_length=300)
    Email = models.EmailField()
    Company = models.CharField(max_length=300)
    Designation = models.CharField(max_length=300)
    SkypeID = models.CharField(max_length=300)
    StreetAddress = models.CharField(max_length=300)
    City = models.CharField(max_length=300)
    State = models.CharField(max_length=300)
    Country = models.CharField(max_length=300)
    Phone = models.CharField(max_length=300)

    def __str__(self):
        return self.title

