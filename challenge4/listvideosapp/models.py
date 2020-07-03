from django.db import models

# Create your models here.
class Video(models.Model):
    title = models.CharField(max_length=500)
    image_url = models.TextField('image url')
    def __str__(self):
      return self.title 
    def __unicode__(self):
      return self.title
