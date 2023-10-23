from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('student_forms/', views.student_forms, name='student_forms'),  # The new URL pattern
]