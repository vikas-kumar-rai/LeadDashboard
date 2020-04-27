from rest_framework import serializers
from .models import Accounts, Comments, Reject, Sources, Domains, Technologys, AssignTo
from drf_extra_fields.fields import Base64FileField


class AccountsSerializer(serializers.ModelSerializer):
    attachment = Base64FileField()
    class Meta:
        model = Accounts
        fields= '__all__'


class CommentsSerializer(serializers.ModelSerializer):

    class Meta:
        model = Comments
        fields = "__all__"

class RejectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reject
        fields = "__all__"

class SourceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sources
        fields = "__all__"


class DomainSerializer(serializers.ModelSerializer):
    class Meta:
        model = Domains
        fields = "__all__"


class TechnologySerializer(serializers.ModelSerializer):
    class Meta:
        model = Technologys
        fields = "__all__"


class AssignToSerializer(serializers.ModelSerializer):
    class Meta:
        model = AssignTo
        fields = "__all__"