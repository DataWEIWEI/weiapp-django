from django.urls import path, include
from game.views.settings.getinfo import getinfo
from game.views.settings.login import Login
from game.views.settings.logout import Logout
from game.views.settings.register import Register

urlpatterns = [
    path("getinfo/", getinfo, name="settings_getinfo"),
    path("login/", Login, name="settings_login"),
    path("logout/", Logout, name="settings_logout"),
    path("register/", Register, name="settings_register")
]