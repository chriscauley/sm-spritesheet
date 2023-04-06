from django.conf import settings
from django.contrib.sessions.models import Session
from django.db import models
import cv2
import hashlib

_nullable = dict(blank=True, null=True, on_delete=models.SET_NULL)
class UserOrSessionModel(models.Model):
    class Meta:
        abstract = True
    session = models.ForeignKey(Session, **_nullable)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, **_nullable)


class Spritesheet(models.Model):
    class Meta:
        ordering = ('name',)
    name = models.CharField(max_length=128)
    def __str__(self):
        return self.name


class Palette(UserOrSessionModel):
    name = models.CharField(max_length=128)
    image = models.ImageField(upload_to="palette_images")
    colors = models.JSONField(default=list)
    counts = models.JSONField(default=list)
    def __str__(self):
        return self.name


class Outfit(UserOrSessionModel):
    name = models.CharField(max_length=128)
    colors = models.JSONField(default=list)
    spritesheet = models.ForeignKey('Spritesheet', on_delete=models.CASCADE)
    def __str__(self):
        return self.name
