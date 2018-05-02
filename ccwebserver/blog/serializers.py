from rest_framework import serializers
 
from blog.models import Blog
 
class BlogSerializer(serializers.HyperlinkedModelSerializer):
    user = serializers.ReadOnlyField(source='user.username')
 
    class Meta:
        model = Blog
        fields = ('url', 'id', 'created', 'name', 'user')
        extra_kwargs = {
            'url': {
                'view_name': 'blog:blog-detail',
            }
}