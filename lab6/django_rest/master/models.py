# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models
from utils.years import year_choices, current_year


class Pc(models.Model):
    title = models.CharField(max_length=30)
    proc = models.ForeignKey('Processor', models.DO_NOTHING)
    price = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'PC'


class Processor(models.Model):
    title = models.CharField(max_length=30)
    numb_cores = models.IntegerField()
    freq = models.IntegerField()
    price = models.IntegerField()
    year = models.IntegerField(('year'), choices=year_choices(), default=current_year, null=None)

    class Meta:
        managed = True
        db_table = 'Processor'
