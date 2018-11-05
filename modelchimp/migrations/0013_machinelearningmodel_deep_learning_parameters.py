# -*- coding: utf-8 -*-
# Generated by Django 1.11.5 on 2018-04-04 16:50
from __future__ import unicode_literals

import django.contrib.postgres.fields.jsonb
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('modelchimp', '0012_machinelearningmodel_platform_library'),
    ]

    operations = [
        migrations.AddField(
            model_name='machinelearningmodel',
            name='deep_learning_parameters',
            field=django.contrib.postgres.fields.jsonb.JSONField(default=list),
        ),
    ]