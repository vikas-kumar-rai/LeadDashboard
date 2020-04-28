from django.shortcuts import render
from .models import Accounts, Comments, Reject, Sources, Domains, Technologys, AssignTo
from .serializers import AccountsSerializer, CommentsSerializer, RejectSerializer, SourceSerializer, DomainSerializer, TechnologySerializer, AssignToSerializer
from rest_framework import generics, viewsets
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.shortcuts import get_list_or_404, get_object_or_404
# from django.contrib.auth.decorators import  login_required
from rest_framework import viewsets
from rest_framework.parsers import JSONParser
from django.http import HttpResponse
from rest_framework.parsers import MultiPartParser, FormParser,FileUploadParser
from django.contrib.auth.models import User, auth


class AccountsListCreate(APIView):

    def get(self, request, format=None):
        account = Accounts.objects.all().order_by("-last_modified")
        serializer = AccountsSerializer(account, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        print("data is going to post")
        print(request.data)
        request.data['attachment']=None

        if request.data['secondary_email2']:
            if len(request.data['secondary_email2']) > 1:
                request.data['secondary_email1'] = request.data['secondary_email2'][0]
                request.data['secondary_email2'] = request.data['secondary_email2'][1]
            elif len(request.data['secondary_email2']) == 1:
                request.data['secondary_email1'] = request.data['secondary_email2'][0]
                request.data['secondary_email2'] = " "
        else:
            request.data['secondary_email2'] = " "
        if request.data['secondary_phone2']:
            if len(request.data['secondary_phone2']) > 1:
                request.data['secondary_phone1'] = request.data['secondary_phone2'][0]
                request.data['secondary_phone2'] = request.data['secondary_phone2'][1]
            elif len(request.data['secondary_phone2']) == 1:
                request.data['secondary_phone1'] = request.data['secondary_phone2'][0]
                request.data['secondary_phone2'] = " "
        else:
            request.data['secondary_phone2'] = ""

        serializer = AccountsSerializer(data=request.data)
        print("hellooo",serializer)
        print("serializer")
        if serializer.is_valid():
            print("serializer is  valid")
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        print("error at:",serializer.errors)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class AccountsListPut(viewsets.ModelViewSet):
    queryset = Accounts.objects.all()
    serializer_class = AccountsSerializer


class CommentsListCreate(APIView):

    def get(self, request, format=None):
        comment = Comments.objects.all()
        serializer = CommentsSerializer(comment, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = CommentsSerializer(data=request.data)
        print(serializer)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class RejectListCreate(APIView):

    def get(self, request, format=None):
        reject = Reject.objects.all()
        serializer = RejectSerializer(reject, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = RejectSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



class SourceListCreate(APIView):

    def get(self, request, format=None):
        source = Sources.objects.all()
        serializer = SourceSerializer(source, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = SourceSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)




class DomainListCreate(APIView):

    def get(self, request, format=None):
        domain = Domains.objects.all()
        serializer = DomainSerializer(domain, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = DomainSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



class TechnologyListCreate(APIView):

    def get(self, request, format=None):
        tech = Technologys.objects.all()
        serializer = TechnologySerializer(tech, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = TechnologySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



class AssignToListCreate(APIView):

    def get(self, request, format=None):
        assign = AssignTo.objects.all()
        serializer = AssignToSerializer(assign, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = AssignToSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

from django.conf import settings
import os, uuid, json
def handle_uploaded_file(f):
    ext = f.name.split('.')[-1]
    upload = False
    file_path = os.path.join(settings.BASE_DIR, 'media/upload/'+str(uuid.uuid4())+"."+ext)
    with open(file_path, 'wb+') as destination:
        for chunk in f.chunks():
            destination.write(chunk)
        upload = True
        destination.close()
    return upload

class LeadAPIView(APIView):

    def post(self, request, format="json"):
        print("Going to created new Lead!!!!!!!!!!!!!!!")
        data = json.loads(request.data['data'])
        upload = handle_uploaded_file(request.FILES['file'])
        # print(request.FILES['file'])
        print("upload : ",upload)
        return Response(True, status=status.HTTP_201_CREATED)
