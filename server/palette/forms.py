from django import forms
import unrest_schema

from palette.models import Palette, Spritesheet, Outfit, Wardrobe

@unrest_schema.register
class PalettForm(forms.ModelForm):
    class Meta:
        model = Palette
        fields = ('name', 'image', 'colors', 'counts')


class OwnerForm(forms.ModelForm):
    user_can_GET = 'OWN'
    user_can_LIST = 'OWN'
    user_can_POST = 'OWN'
    user_can_PUT = 'OWN'
    user_can_DELETE = None
    def get_queryset(self, request):
        return self._meta.model.objects.filter(user=request.user)

@unrest_schema.register
class OutfitForm(OwnerForm):
    filter_fields = ['id__in']
    class Meta:
        model = Outfit
        fields = ('name', 'colors')


@unrest_schema.register
class WardrobeForm(OwnerForm):
    filter_fields = ['spritesheet__name']
    class Meta:
        model = Wardrobe
        fields = ('name', 'spritesheet', 'data')


@unrest_schema.register
class SpritesheetForm(forms.ModelForm):
    class Meta:
        model = Spritesheet
        fields = ('name',)