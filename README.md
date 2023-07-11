A DJANGO PROJECT.
```shell
// start nginx service
sudo /etc/init.d/nginx start
```

if you are in debug, please change `DEBUG=TRUE` in settings.py file.

> update database
python3 manage.py makemigrations
python3 manage.py migrate

python3 manage.py shell

> load uwsgi service
uwsgi --ini scripts/uwsgi.ini
uwsgi --reload uwsgi/uwsgi.pid
uwsgi --stop uwsgi/uwsgi.pid

> load wss service
```
daphne -b 0.0.0.0 -p 5015 weiapp.asgi:application
```

> introductions of files
views: function realization and data processing

urls: modify router

js: interface