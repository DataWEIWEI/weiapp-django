from django.http import JsonResponse
from django.contrib.auth import login
from django.contrib.auth.models import User
from game.models.player.player import Player

def Register(resquest):
    data = resquest.GET
    username = data.get('username', '').strip()
    password = data.get('password', '').strip()
    password_confirm = data.get('password_confirm', '').strip()

    if not username or not password:
        return JsonResponse({
            'result': 'the username and password can not be empty'
        })
    if password != password_confirm:
        return JsonResponse({
            'result': 'two passwords do not match'
        })
    if User.objects.filter(username=username).exists():
        return JsonResponse({
            'result': 'the username has exited'
        })
    
    user = User(username=username)
    user.set_password(password)
    user.save()
    Player.objects.create(user=user, photo=r'https://app5593.acapp.acwing.com.cn/static/image/player/%E6%98%9F%E9%87%8E%E9%9C%B2%E6%AF%94.jpg')
    login(resquest, user)
    return JsonResponse({
        'result': 'success'
    })