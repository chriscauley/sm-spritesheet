from django.conf import settings
from django.contrib.sessions.models import Session
from django.db import models
import cv2
import hashlib


class Palette(models.Model):
    name = models.CharField(max_length=128)
    image = models.ImageField(upload_to="palette_images")
    colors = models.JSONField(default=list)
    counts = models.JSONField(default=list)
    def __str__(self):
        return self.name


class Spritesheet(models.Model):
    class Meta:
        ordering = ('name',)
    name = models.CharField(max_length=128)
    def __str__(self):
        return self.name


class Wardrobe(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    name = models.CharField(max_length=128, null=True, blank=True)
    spritesheet = models.ForeignKey(Spritesheet, on_delete=models.CASCADE)
    data = models.JSONField(default=dict)
