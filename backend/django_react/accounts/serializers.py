from rest_framework import serializers
from .models import accounts

class accountsSerializer(serializers.ModelSerializer):
    class Meta:
        model = accounts
        # fields = ('Title','Description','Source','Url','Domain','Tags','Technology','AssignTo','EstimatedBudget','ReferredBy','Attachment','FullName','Email','Company','Designation','SkypeID','StreetAddress','City','State','Country','Phone','Status')
        fields = '__all__'