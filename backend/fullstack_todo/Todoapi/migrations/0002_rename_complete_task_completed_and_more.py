# Generated by Django 4.2.2 on 2023-09-06 01:01

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('Todoapi', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='task',
            old_name='complete',
            new_name='completed',
        ),
        migrations.RenameField(
            model_name='task',
            old_name='Title',
            new_name='title',
        ),
    ]
