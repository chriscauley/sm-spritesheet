from django.http import JsonResponse
from django.shortcuts import get_object_or_404
from django.contrib.auth.decorators import login_required

from .models import Wardrobe, Spritesheet


@login_required
def new_wardrobe(request, spritesheet_name):
    spritesheet = get_object_or_404(Spritesheet, name=spritesheet_name)
    wardrobe = Wardrobe.objects.create(
        spritesheet=spritesheet,
        user=request.user,
    )
    return JsonResponse({ 'wardrobe_id': wardrobe.id })