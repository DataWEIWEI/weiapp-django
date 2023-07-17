from django.urls import path, include
from game.views.settings.getinfo import InfoView
# from game.views.settings.login import Login
# from game.views.settings.logout import Logout
from game.views.settings.register import Register
from game.views.settings.ranklist import RanklistView
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
    path("token/", TokenObtainPairView.as_view(), name="settings_token"),
    path("token/refresh", TokenRefreshView.as_view(), name="settings_token_refresh"),
    path("getinfo/", InfoView.as_view(), name="settings_getinfo"),
    # path("login/", Login, name="settings_login"),
    # path("logout/", Logout, name="settings_logout"),
    path("register/", Register, name="settings_register"),
    path("ranklist/", RanklistView.as_view(), name="settings_ranklist"),
    path("acwing/", include('game.urls.settings.acwing.index'))
]