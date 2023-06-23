from django.http import HttpResponse


def index(request):
    line1 = '<h1 style="text-align: center">Warlock wars</h1>'
    line2 = '<img src="https://img0.baidu.com/it/u=2857096089,2095994689&fm=253&fmt=auto&app=138&f=JPEG?w=1070&h=500" width=1500>'
    return HttpResponse(line1 + line2)
