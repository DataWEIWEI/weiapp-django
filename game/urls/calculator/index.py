from django.urls import path, include
from game.views.calculator.getinfo import InfoView
from game.views.calculator.register import Register
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
    path("token/", TokenObtainPairView.as_view(), name="calculator_token"),
    path("token/refresh", TokenRefreshView.as_view(), name="calculator_token_refresh"),
    path("getinfo/", InfoView.as_view(), name="calculator_getinfo"),
    path("register/", Register, name="calculator_register"),
]