from django import forms
import unrest_schema

from palette.models import Palette, Spritesheet, Outfit

def check_owner_by_request(self, instance, user):
    return instance.user_id == user.id or \
        instance.session_id == self.request.session.id

class UserOrSessionForm(forms.ModelForm):
    user_can_GET = check_owner_by_request
    user_can_PUT = check_owner_by_request
    user_can_DELETE = check_owner_by_request
    user_can_POST = True
    user_can_LIST = True

@unrest_schema.register
class PalettForm(UserOrSessionForm):
    class Meta:
        model = Palette
        fields = ('name', 'image', 'colors', 'counts')


@unrest_schema.register
class OutfitForm(UserOrSessionForm):
    class Meta:
        model = Outfit
        fields = ('name', 'colors', 'spritesheet')

@unrest_schema.register
class SpritesheetForm(forms.ModelForm):
    class Meta:
        model = Spritesheet
        fields = ('name',)