from django.http import JsonResponse
from django.shortcuts import get_object_or_404
from django.contrib.auth.decorators import login_required

from .models import Wardrobe, Spritesheet, Outfit


@login_required
def new_wardrobe(request, spritesheet_name):
    spritesheet = get_object_or_404(Spritesheet, name=spritesheet_name)
    def new_outfit():
        return Outfit.objects.create(
            spritesheet=spritesheet,
            user=request.user,
        )
    wardrobe = Wardrobe.objects.create(
        spritesheet=spritesheet,
        user=request.user,
        power_suit=new_outfit(),
        varia_suit=new_outfit(),
        gravity_suit=new_outfit(),
    )
    return JsonResponse({ 'wardrobe_id': wardrobe.id })