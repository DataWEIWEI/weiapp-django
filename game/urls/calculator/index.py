from django.urls import path, re_path
from game.views.calculator.getinfo import InfoView
from game.views.calculator.register import Register
from game.views.calculator.logout import Logout
from game.views.calculator.get_status import get_status
from game.views.calculator.index import index
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
    path("token/", TokenObtainPairView.as_view(), name="calculator_token"),
    path("token/refresh", TokenRefreshView.as_view(), name="calculator_token_refresh"),
    path("getinfo/", InfoView.as_view(), name="calculator_getinfo"),
    path("register/", Register, name="calculator_register"),
    path("logout/", Logout, name="calculator_logout"),
    path("get_status/", get_status, name="get_status"),
    re_path(r'.*', index, name='calculator_index')
]