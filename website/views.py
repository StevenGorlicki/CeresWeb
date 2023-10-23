from django.shortcuts import render

# Create your views here.

def index(request):
    return render(request, 'index.html', {})


def student_forms(request):
    return render(request, 'student_forms.html', {})


