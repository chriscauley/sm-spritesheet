from django.contrib import admin

from .models import Spritesheet, Palette, Outfit

@admin.register(Spritesheet)
class SpritesheetAdmin(admin.ModelAdmin):
    pass


@admin.register(Palette)
class PaletteAdmin(admin.ModelAdmin):
    pass


@admin.register(Outfit)
class OutfitAdmin(admin.ModelAdmin):
    pass
