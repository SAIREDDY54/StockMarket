# Generated by Django 3.1.3 on 2021-05-14 06:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('stocks', '0003_auto_20210514_1130'),
    ]

    operations = [
        migrations.AddField(
            model_name='stocks',
            name='founded',
            field=models.CharField(blank=True, max_length=200),
        ),
    ]
