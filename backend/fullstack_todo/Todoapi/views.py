from rest_framework import generics,permissions,viewsets
from .serializers import TodoSerializer
from .models import Task



class TaskViewSet(viewsets.ModelViewSet):
    queryset=Task.objects.all()
    serializer_class=TodoSerializer


