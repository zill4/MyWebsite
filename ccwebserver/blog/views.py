from django.shortcuts import render

from blog.models import Blog
from rest_framework import generics
from rest_framework.response import Response
from rest_framework.reverse import reverse
 
from blog.serializers import BlogSerializer
 
 
class BlogList(generics.ListCreateAPIView):
    queryset = Blog.objects.all()
    serializer_class = BlogSerializer
 
    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
 
 
class BlogDetail(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = BlogSerializer
 
    def get_queryset(self):
        return Blog.objects.all().filter(user=self.request.user)