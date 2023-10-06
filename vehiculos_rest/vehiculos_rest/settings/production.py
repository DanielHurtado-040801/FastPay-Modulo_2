from .base import *
import dj_database_url
# Database
# https://docs.djangoproject.com/en/4.1/ref/settings/#databases

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = []

DATABASES = {
    'default': dj_database_url.config(        
    default='sqlite:///db.sqlite3',        
    conn_max_age=600    
    )
}


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/4.1/howto/static-files/

STATIC_URL = 'static/'