from django.shortcuts import redirect, reverse
from django.core.cache import cache 
from django.contrib.auth.models import User
from game.models.player.player import Player
from random import randint
from rest_framework_simplejwt.tokens import RefreshToken
import requests


def receive_code(request):
    data = request.GET
    code = data.get('code')
    state = data.get('state')

    if not cache.has_key(state):
        return redirect('index')
    
    cache.delete(state)

    apply_access_token_url = 'https://www.acwing.com/third_party/api/oauth2/access_token/'
    params = {
        'appid': '5593',
        'secret': '7947432e9f5f4c68aaffde8dd41fed4f',
        'code': code
    }

    access_token_res = requests.get(apply_access_token_url, params=params).json()
    access_token = access_token_res['access_token']
    openid = access_token_res['openid']

    players = Player.objects.filter(openid=openid)
    if players.exists():    # if the user already exists, he does not need to register 
        refresh = RefreshToken.for_user(players[0].user)
        return redirect(reverse('index') + f'?access={str(refresh.access_token)}&refresh={str(refresh)}')

    get_userinfo_url = 'https://www.acwing.com/third_party/api/meta/identity/getinfo/'
    params = {
        'access_token': access_token,
        'openid': openid
    }

    userinfo_res = requests.get(get_userinfo_url, params=params).json()
    username = userinfo_res['username']
    photo = userinfo_res['photo']

    while User.objects.filter(username=username).exists():  # find a new username
        username += str(randint(0, 9))

    user = User.objects.create(username=username)
    player = Player.objects.create(user=user, photo=photo, openid=openid)

    refresh = RefreshToken.for_user(user)
    return redirect(reverse('index') + f'?access={str(refresh.access_token)}&refresh={str(refresh)}')
