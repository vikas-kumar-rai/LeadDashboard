from django.shortcuts import render
from .models import accounts
from .serializers import accountsSerializer
from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.parsers import FileUploadParser

# class accountsListCreate(generics.ListCreateAPIView):
#     queryset = accounts.objects.all()
#     serializer_class = accountsSerializer


# class accountsListCreate(APIView):
#     def get(self, request, format=None):
#         account = accounts.objects.all()
#         serializer_class = accountsSerializer(accounts, many=True)
#         return Response(serializer_class.data)
#
#     def post(self, request, format=None):
#         print("data is going to post")
#         serializer = accountsSerializer(data=request.data)
#         print("serializer")
#         if serializer.is_valid():
#             print("serializer is  valid")
#             serializer.save()
#             return Response(serializer.data, status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class accountsListCreate(APIView):
    """
    View to list all users in the system.

    * Requires token authentication.
    * Only admin users are able to access this view.
    """
    # authentication_classes = [authentication.TokenAuthentication]
    # permission_classes = [permissions.IsAdminUser]

    # def get(self, request, format=None):
    #     """
    #     Return a list of all users.
    #     """
    #     return Response({"hello":"world"})
    parser_class = (FileUploadParser,)

    def get(self, request, format=None):
        account = accounts.objects.all()
        serializer = accountsSerializer(account, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        print("data is going to post")
        serializer = accountsSerializer(data=request.data)
        print("serializer")
        if serializer.is_valid():
            print("serializer is  valid")
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)




