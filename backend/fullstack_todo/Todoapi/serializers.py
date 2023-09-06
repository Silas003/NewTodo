from .models import Task
from rest_framework import serializers

#converted the model into data format readable by client
class TodoSerializer(serializers.ModelSerializer):
    class Meta:
        model=Task
        fields=['id','title','completed']