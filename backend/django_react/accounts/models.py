from django.db import models


class accounts(models.Model):
    Title = models.CharField(max_length=100, blank=True, null = True)
    Description = models.CharField(max_length=1000, blank=True, null = True)
    Source = models.CharField(max_length=300, blank=True, null = True)
    Url = models.CharField(max_length=300, blank=True, null = True)
    Domain = models.CharField(max_length=300, blank=True, null = True)
    Tags = models.CharField(max_length=3000, blank=True, null = True)
    Technology = models.CharField(max_length=300, blank=True, null = True)
    AssignTo = models.CharField(max_length=300, blank=True, null = True)
    EstimatedBudget = models.IntegerField(blank=True, null = True)
    ReferredBy = models.CharField(max_length=300, blank=True, null = True)
    # Attachment = models.FileField(blank=True, null = True)
    FullName = models.CharField(max_length=300, blank=True, null = True)
    Email = models.EmailField(blank=True, null = True)
    Company = models.CharField(max_length=300, blank=True, null = True)
    Designation = models.CharField(max_length=300, blank=True, null = True)
    SkypeID = models.CharField(max_length=300, blank=True, null = True)
    StreetAddress = models.CharField(max_length=300, blank=True, null = True)
    City = models.CharField(max_length=300, blank=True, null = True)
    State = models.CharField(max_length=300, blank=True, null = True)
    Country = models.CharField(max_length=300, blank=True, null = True)
    Phone = models.CharField(max_length=300, blank=True, null = True)
    Status = models.CharField(max_length=300, blank=True, null = True)

    def __str__(self):
        return self.title

