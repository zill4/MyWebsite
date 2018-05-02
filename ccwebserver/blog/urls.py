from django.conf.urls import url
from rest_framework.urlpatterns import format_suffix_patterns
from blog import views
 
urlpatterns = [
    url(r'^blog/$', views.BlogList.as_view(), name='blog-list'),
    url(r'^blog/(?P<pk>[0-9]+)/$', views.BlogDetail.as_view(), name='blog-detail'),
]