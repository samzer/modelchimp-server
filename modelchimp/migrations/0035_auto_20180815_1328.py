# Generated by Django 2.0.6 on 2018-08-15 13:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('modelchimp', '0034_auto_20180808_0826'),
    ]

    operations = [
        migrations.AlterField(
            model_name='machinelearningmodel',
            name='code_file',
            field=models.FileField(null=True, upload_to='code/'),
        ),
    ]