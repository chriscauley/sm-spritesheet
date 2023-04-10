# Generated by Django 4.1.5 on 2023-04-07 00:11

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ("palette", "0001_initial"),
    ]

    operations = [
        migrations.AlterModelOptions(
            name="spritesheet",
            options={"ordering": ("name",)},
        ),
        migrations.RemoveField(
            model_name="outfit",
            name="session",
        ),
        migrations.RemoveField(
            model_name="palette",
            name="session",
        ),
        migrations.RemoveField(
            model_name="palette",
            name="user",
        ),
        migrations.AlterField(
            model_name="outfit",
            name="user",
            field=models.ForeignKey(
                default=1,
                on_delete=django.db.models.deletion.CASCADE,
                to=settings.AUTH_USER_MODEL,
            ),
            preserve_default=False,
        ),
        migrations.CreateModel(
            name="Wardrobe",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("name", models.CharField(blank=True, max_length=128, null=True)),
                (
                    "gravity_suit",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.PROTECT,
                        related_name="+",
                        to="palette.outfit",
                    ),
                ),
                (
                    "power_suit",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.PROTECT,
                        related_name="+",
                        to="palette.outfit",
                    ),
                ),
                (
                    "spritesheet",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        to="palette.spritesheet",
                    ),
                ),
                (
                    "user",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        to=settings.AUTH_USER_MODEL,
                    ),
                ),
                (
                    "varia_suit",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.PROTECT,
                        related_name="+",
                        to="palette.outfit",
                    ),
                ),
            ],
        ),
    ]
