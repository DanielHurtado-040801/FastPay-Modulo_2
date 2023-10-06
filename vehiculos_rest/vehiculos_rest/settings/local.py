from .base import *
import dj_database_url
# Database
# https://docs.djangoproject.com/en/4.1/ref/settings/#databases

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = []

""" DATABASES = {
    'default': dj_database_url.config(        
    default='sqlite:///db.sqlite3',        
    conn_max_age=600    
    )
} """
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'fastpay',
        'USER': 'danielhurtado',
        'PASSWORD': 'wilson2001',
        'HOST': 'localhost',
        'PORT': '5433',
    }
}

# MONGODB_DATABASES = {
#     'default': {
#         'NAME': 'FastPay',
#         'HOST': 'localhost',
#         'PORT': 27017,
#         'USERNAME': 'dehurtado',
#         'PASSWORD': 'wilson2001',
#         'AUTHENTICATION_SOURCE': 'admin'
#     }
# }


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/4.1/howto/static-files/

STATIC_URL = 'static/'