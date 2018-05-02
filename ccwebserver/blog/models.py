from djongo import models
from users.models import User
 
 
class Blog(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    name = models.CharField(max_length=100, unique=True, blank=False, null=False)
    user = models.ForeignKey('users.User', related_name='blog', on_delete=models.CASCADE, null=False)
 
    class Meta:
        ordering = ('created',)