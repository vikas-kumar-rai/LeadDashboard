from django.db import models

def upload_path(filname):
    return '/'.join([filname])

class accounts(models.Model):

    Title = models.CharField(unique=True, max_length=100, null=True, blank=True)
    Description = models.CharField(max_length=1000, null=True, blank=True)
    Source = models.CharField(max_length=300, null=True, blank=True)
    Url = models.URLField(max_length=300, null=True, blank=True)
    Domain = models.CharField(max_length=300, null=True, blank=True)
    Tags = models.CharField(max_length=3000, null=True, blank=True)
    Technology = models.CharField(max_length=300, null=True, blank=True)
    AssignTo = models.CharField(max_length=300, null=True, blank=True)
    EstimatedBudget = models.IntegerField(null=True, blank=True)
    ReferredBy = models.CharField(max_length=300, null=True, blank=True)
    Attachment = models.FileField(blank=True, null=True, upload_to = 'media/')
    FullName = models.CharField(max_length=300, null=True, blank=True)
    Email = models.EmailField(null=True, blank=True)
    Company = models.CharField(max_length=300, null=True, blank=True)
    Designation = models.CharField(max_length=300, null=True, blank=True)
    SkypeID = models.CharField(max_length=300, null=True, blank=True)
    StreetAddress = models.CharField(max_length=300, null=True, blank=True)
    City = models.CharField(max_length=300, null=True, blank=True)
    State = models.CharField(max_length=300, null=True, blank=True)
    Country = models.CharField(max_length=300, null=True, blank=True)
    Phone = models.CharField(max_length=300, null=True, blank=True)
    Status = models.CharField(max_length=100, null = True, blank=True)

    def __str__(self):
        return self.title
