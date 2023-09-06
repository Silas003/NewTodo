from django.db import models

#creating models for  django's ORM to it into a databse for the api to consume
class Task(models.Model):
    title=models.CharField(max_length=200)
    completed=models.BooleanField(default=False)
    created=models.DateField(auto_now_add=True)

    def __str__(self):
        return self.Title
