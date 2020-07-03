# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render

# Create your views here.

from django.http import HttpResponse

from .models import Video

def index(request):
    video_list = Video.objects.all()
    context = {
        'video_list': video_list,
    }
    return render(request, 'videos/index.html', context)