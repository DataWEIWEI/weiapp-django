A DJANGO PROJECT.
```shell
// start nginx service
sudo /etc/init.d/nginx start

uwsgi --ini scripts/uwsgi.ini
```

if you are in debug, please change `DEBUG=TRUE` in settings.py file.

python3 manage.py makemigrations
python3 manage.py migrate

uwsgi --reload uwsgi/uwsgi.pid

views: function realization and data processing

urls: modify router

js: interface