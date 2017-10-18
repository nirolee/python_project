from django.shortcuts import render
from django.views.generic.base import View
# Create your views here.
from search.models import ArticleType
from django.http import HttpResponse
from elasticsearch import Elasticsearch
import json
client = Elasticsearch(hosts='127.0.0.1')

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
    def get(self, request):
        key_words = request.GET.get('q', '')
        response = client.search(
            index= "jobbole",
            body= {
                "query": {
                    "multi_match": {
                        "query": key_words,
                        "fields": ["title", "tags", "content"]
                    }
                },
                "from": 0,
                "size": 10,
                "highlight": {
                    "pre_tags": ["<span class='keyword'>"],
                    "post_tags": ["</span>"],
                    "fields": {
                        "title": {},
                        "content": {}
                    }
                }
            }
        )
        hits_list = []
        total_nums = response["hits"]["total"]
        for hit in response["hits"]["hits"]:
            hit_dict = {}
            if "title" in hit["highlight"]:
                hit_dict["title"] = hit["highlight"]["title"][0]
            if "content" in hit["highlight"]:
                hit_dict["content"] = hit["highlight"]["content"][0]
            else:
                hit_dict["content"] = hit["_source"]["content"][0]
            hit_dict["create_time"] = hit["_source"]["create_time"]
            hit_dict["url"] = hit["_source"]["url"]
            hit_dict["score"] = hit["_score"]
            hits_list.append(hit_dict)

        return render(request, "result.html", {"all_hits": hits_list, "key_words": key_words, "total_nums": total_nums,
           "page_nums": total_nums/10})
