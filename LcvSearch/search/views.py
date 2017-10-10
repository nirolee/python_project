from django.shortcuts import render
from django.views.generic.base import View
# Create your views here.
from search.models import ArticleType

class search_suggest(View):
    def get(self, request):
        key_words = request.GET.get('s', '')

        if key_words:
            s = ArticleType.search()
            s.suggest()