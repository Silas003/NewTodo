from django.urls import path
from rest_framework import routers
from .views import TaskViewSet

router=routers.DefaultRouter()
router.register(r'api/todos',TaskViewSet,'todos')


urlpatterns=router.urls