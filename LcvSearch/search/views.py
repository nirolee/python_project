from django.shortcuts import render
from django.views.generic.base import View
# Create your views here.
from search.models import ArticleType
from django.http import HttpResponse
import json

class SearchSuggest(View):
    def get(self, request):
        key_words = request.GET.get('s', '')
        re_datas = []
        if key_words:
            s = ArticleType.search()
            s = s.suggest('my_suggest', key_words, completion={
                "field": "suggest",
                "fuzzy": {
                    "fuzziness": 1
                },
                "size": 10
            })
        suggestions = s.execute_suggest()
        # elasticsearch-dsl 官网有说明这些方法 获取suggest
        for match in suggestions.my_suggest[0].options:
            source = match._source
            re_datas.append(source.title)
        return HttpResponse(json.dumps(re_datas), content_type="application/json")


class SearchView(View):