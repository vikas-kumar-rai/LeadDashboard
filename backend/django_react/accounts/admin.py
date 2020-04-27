from django.contrib import admin
from .models import Accounts, Comments,Reject, Sources, Domains, Technologys, AssignTo

admin.site.register(Accounts)
admin.site.register(Comments)
admin.site.register(Reject)
admin.site.register(Sources)
admin.site.register(Domains)
admin.site.register(Technologys)
admin.site.register(AssignTo)