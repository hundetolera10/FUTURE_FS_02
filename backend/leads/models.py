from django.db import models

class Lead(models.Model):
    STATUS_CHOICES = [
        ('new', 'New'),
        ('contacted', 'Contacted'),
        ('converted', 'Converted'),
    ]
    name = models.CharField(max_length=255)
    email = models.EmailField(unique=True)
    source = models.CharField(max_length=255, blank=True, null=True)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='new')
    notes = models.TextField(blank=True , null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
