# -*- coding: utf-8 -*-
# Generated by Django 1.11.5 on 2018-03-22 01:01
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('modelchimp', '0008_remove_machinelearningmodel_detail_hash'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='avatar',
            field=models.ImageField(default='/profile/profile_pic.png', upload_to='profile/'),
        ),
    ]