from django.contrib import admin
from django.urls import include, path, re_path
from unrest.views import index

from palette.views import new_wardrobe
from palette.forms import *

app_urls = [
    'app',
    'new-sprite',
    '$',
]

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/new-wardrobe/<str:spritesheet_name>/", new_wardrobe),
    re_path(f'^({"|".join(app_urls)})', index),
    path('', include('unrest.urls')),
]
