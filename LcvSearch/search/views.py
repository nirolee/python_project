from django.shortcuts import render
from django.views.generic.base import View
# Create your views here.
from search.models import ArticleType


class SearchSuggest(View):
    def get(self, request):
        key_words = request.GET.get('s', '')

        if key_words:
            s = ArticleType.search()
            s = s.suggest('my_suggest', key_words, completion={
                "field": "suggest", "fuzzy": {
                    "fuzzness": 2
                },
                "size": 10
            })
            suggestions = s.execute_suggest()
            for match in suggestions:
                pass