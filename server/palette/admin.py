from django.contrib import admin

from .models import Spritesheet, Palette, Wardrobe

@admin.register(Spritesheet)
class SpritesheetAdmin(admin.ModelAdmin):
    pass


@admin.register(Palette)
class PaletteAdmin(admin.ModelAdmin):
    pass


@admin.register(Wardrobe)
class WardrobeAdmin(admin.ModelAdmin):
    list_display = ['__str__', 'spritesheet', 'user']