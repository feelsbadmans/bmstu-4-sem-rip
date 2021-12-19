# Generated by Django 3.2.7 on 2021-11-11 14:06

from django.db import migrations, models
import utils.years


class Migration(migrations.Migration):

    dependencies = [
        ('master', '0002_auto_20211111_1404'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='pc',
            options={'managed': False},
        ),
        migrations.AddField(
            model_name='processor',
            name='year',
            field=models.IntegerField(choices=[(1984, 1984), (1985, 1985), (1986, 1986), (1987, 1987), (1988, 1988), (1989, 1989), (1990, 1990), (1991, 1991), (1992, 1992), (1993, 1993), (1994, 1994), (1995, 1995), (1996, 1996), (1997, 1997), (1998, 1998), (1999, 1999), (2000, 2000), (2001, 2001), (2002, 2002), (2003, 2003), (2004, 2004), (2005, 2005), (2006, 2006), (2007, 2007), (2008, 2008), (2009, 2009), (2010, 2010), (2011, 2011), (2012, 2012), (2013, 2013), (2014, 2014), (2015, 2015), (2016, 2016), (2017, 2017), (2018, 2018), (2019, 2019), (2020, 2020), (2021, 2021)], default=utils.years.current_year, null=None, verbose_name='year'),
        ),
    ]
