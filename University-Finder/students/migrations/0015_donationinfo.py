# Generated by Django 3.1.1 on 2021-05-14 21:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('students', '0014_auto_20210429_1038'),
    ]

    operations = [
        migrations.CreateModel(
            name='DonationInfo',
            fields=[
                ('auto_increment_id', models.AutoField(primary_key=True, serialize=False)),
                ('email', models.CharField(max_length=200, null=True)),
                ('first_name', models.CharField(max_length=200, null=True)),
                ('last_name', models.CharField(max_length=200, null=True)),
                ('street', models.CharField(max_length=200, null=True)),
                ('zip_code', models.IntegerField(null=True)),
                ('city', models.CharField(max_length=200, null=True)),
                ('country', models.CharField(max_length=200, null=True)),
            ],
        ),
    ]
