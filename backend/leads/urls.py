from rest_framework.routers import DefaultRouter
from .views import LeadViewSet

router = DefaultRouter()
router.register(r'', LeadViewSet)
urlpatterns = router.urls