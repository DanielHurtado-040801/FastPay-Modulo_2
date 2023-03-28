from .base import *

# Database
# https://docs.djangoproject.com/en/4.1/ref/settings/#databases

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = []

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}
# DATABASES = {
#     'default': {
#         'ENGINE': 'pymongo',
#     },
#     'mongo': {
#         'ENGINE': 'pymongo',
#         'NAME': 'FastPay',
#         'HOST': 'localhost',
#         'PORT': 27017,
#         'USERNAME': 'dehurtado',
#         'PASSWORD': 'wilson2001'
#     }
# }

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