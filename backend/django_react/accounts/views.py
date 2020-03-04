from django.shortcuts import render
from .models import accounts
from .serializers import accountsSerializer
from rest_framework import generics, viewsets
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.shortcuts import get_list_or_404, get_object_or_404

from rest_framework import viewsets
from rest_framework.parsers import JSONParser
from django.http import HttpResponse
from rest_framework.parsers import MultiPartParser, FormParser,FileUploadParser

class accountsListCreate(generics.ListCreateAPIView):
    queryset = accounts.objects.all()
    serializer_class = accountsSerializer







# class accountsListCreate(APIView):

#     def get(self, request, format=None):
#         account = accounts.objects.all()
#         serializer = accountsSerializer(account, many=True)
#         return Response(serializer.data)

#     def post(self, request, format=None):
#         print("data is going to post")
#         print("data is going to post")
#         print(request.data['Attachment'])
#         request.data['Attachment']=None

#         serializer = accountsSerializer(data=request.data)
#         print("hellooo",serializer)
#         print("serializer")
#         if serializer.is_valid():
#             print("serializer is  valid")
#             serializer.save()
#             return Response(serializer.data, status=status.HTTP_201_CREATED)
#         print("error at:",serializer.errors)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    #
    # def put(self, request, format=None):
    #     print("I am hiting here")
    #     # print(request.__dict__)
    #     print("going to update")
    #     print(request.data)
    #     pk = request.data['Title']
    #     # pk = accounts.objects.get(Title = pk)
    #     # snippet = self.get_object(pk)
    #     stat = request.data['Status']
    #     print("pk is: ", pk, 'status is: ',stat)
    #     serializer = accountsSerializer(pk, data=stat, partial= True)
    #     print("serializer is: ",serializer)
    #     if serializer.is_valid():
    #         print("****** valid ******")
    #         serializer.save()
    #         return Response(serializer.data)
    #     return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    #







    #
    # def put(self, request, *args, **kwargs):
    #     print(request.__dict__)
    #     # pk = self.kwargs.get('pk')
    #     pk = request.data['id']
    #     print("pk: ", pk)
    #     save_allowance = get_object_or_404(accounts.objects.all(), pk=pk)
    #     data = request.data.get('allowance')
    #     serializer = accountsSerializer(instance=save_allowance, data=data, partial=True)
    #
    #     if serializer.is_valid():
    #         allowance_saved = serializer.save()
    #         return Response({"success": "Allowance '{}' updated successfully".format(allowance_saved.AllowID)})
    #     else:
    #         return Response({"fail": "'{}'".format(serializer.errors)})







# class accountsListCreate(viewsets.ModelViewSet):
#     queryset = accounts.objects.all()
#     serializer_class = accountsSerializer
#     print("getting data")
#     def post(self, request, *args, **kwargs):
#         #cover = request.data
#         print("posting data")
#         accounts.objects.create(request.data)
#         return HttpResponse({'message': 'Book created'}, status=200)







class accountsListPut(viewsets.ModelViewSet):
    """
    update user budget
    """

    queryset = accounts.objects.all()
    serializer_class = accountsSerializer