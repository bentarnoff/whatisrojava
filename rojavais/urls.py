from django.conf.urls import include, url
import views

urlpatterns = [
    url(r'^next/', 'rojavais.views.next'),
    url(r'^contact/', 'rojavais.views.contact'),
    url(r'^', 'rojavais.views.intro'),
]