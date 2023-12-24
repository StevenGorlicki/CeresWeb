"""
WSGI config for mysite project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/4.2/howto/deployment/wsgi/
"""

import os
import sys
from django.core.wsgi import get_wsgi_application
from django.core.management import call_command
from django.conf import settings

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'mysite.settings')

# Check if we are in a production environment
if not settings.DEBUG:
    # Run collectstatic programmatically
    call_command('collectstatic', '--noinput', verbosity=0)

# Continue with the normal execution of the WSGI application
application = get_wsgi_application()