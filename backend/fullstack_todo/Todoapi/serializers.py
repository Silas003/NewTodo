from .models import Task
from rest_framework import serializers

class TodoSerializer(serializers.ModelSerializer):
    class Meta:
        model=Task
        fields=['id','title','completed']