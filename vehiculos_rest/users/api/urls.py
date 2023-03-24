from django.urls import path
from users.api.api import user_api_view, user_detail_view

urlpatterns = [
    path('usuario/', user_api_view, name='usuarios_api'),
    path("usuario/<int:pk>/", user_detail_view, name="Usuario_detail_view")
]
