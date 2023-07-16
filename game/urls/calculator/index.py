from django.urls import path
from game.views.calculator.login import Login
from game.views.calculator.logout import Logout
from game.views.calculator.register import Register

urlpatterns = [
    path("login/", Login, name="calculator_login"),
    path("logout/", Logout, name="calculator_logout"),
    path("register/", Register, name="calculator_register"),
]