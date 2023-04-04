from django.contrib import admin
from django.urls import include, path, re_path

from unrest.views import index

app_urls = [
    'app',
    'new-sprite',
    '$',
]

urlpatterns = [
    path("admin/", admin.site.urls),
    re_path(f'^({"|".join(app_urls)})', index),
    path('', include('unrest.urls')),
]
