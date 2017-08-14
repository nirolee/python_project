define("./app_movie", ["../../common/service/pingback/QoEPingback", "../../common/behavior/onScroll2Bottom/onScroll2Bottom", "../../common/behavior/horizontalScroll/horizontalScroll", "../../common/behavior/vfrm/vfrm", "../../common/behavior/QoeWatcher/QoeWatcher", "../../common/component/player/video", "../../common/component/player/poster", "../../common/component/player/playBtn", "../../common/component/player/dashboard", "../../common/component/player/fullScreen", "./behavior/player", "./behavior/VVPingback", "./behavior/autoContinuous", "./behavior/historyState", "./behavior/SkipPtPw", "./behavior/showDiver", "./behavior/playHistoryRecord", "./behavior/resumePlay", "./behavior/vip_noAD_pingback", "./behavior/tvguo", "./behavior/cardController", "./component/errorTip", "./component/accountErrorTips", "./component/buyVideoBtn", "./component/downloadAppBtn", "./component/accountErrorTips", "../../common/service/video/videoStrategy", "../../common/service/player/advertisement", "./service/qiyiVideoSource", "./component/thirdPartyTip", "./component/playerResolutionSwitcher", "./component/share", "./component/weChatShareCover", "../../common/component/header/headContainer", "../../common/component/user/userInfo", "../../common/component/header/headerBar", "../../common/component/search/searchBtn", "../../common/component/search/searchFlow", "../../common/component/header/headNav", "../../common/component/playDownLink/callOrDownloadLink", "../../common/component/playDownLink/downLink", "../../common/component/playDownLink/NativeAppPop", "../../common/component/banner/AdBanner", "../../common/component/scroll/scrollShow", "../../common/component/popup/popup", "./component/thirdPartyTip", "./component/playerResolutionSwitcher", "./component/share", "./component/favorite", "./component/videoExtendBarTips", "./component/weChatShareCover", "../../common/component/cover/cover", "../../common/component/base/backTop", "./component/paopaoCommentBtn", "./component/showComments", "./component/favorite", "./component/videoInfo", "./component/upDown", "./component/voteTip", "./component/score", "./component/chart", "./component/subOrAd", "./component/subscription", "./component/comment", "./component/series", "./component/recommend", "./component/soundtrack", "./component/videoAround", "./component/tabMenu", "./component/albumList", "./component/wonderful", "./component/recommend", "./component/videoAround", "./component/soundtrack", "./component/focus", "./component/sourceList", "./component/pk", "./component/recommend", "./component/videoAround", "./component/playList", "./component/hotEnter", "../bodan/service/bodanList", "../bodan/component/bodanInfo", "../bodan/component/bodanList", "../bodan/component/hotBodan", "./service/chart", "../../common/service/playDownLink/downLink", "../../common/service/utils/videoInfo", "../bubble/service/BubbleCommonInterface.js", "../bubble/service/BubblePingback", "../bubble/service/ParamFacility.js", "../../common/component/pager/DotPager", "../../common/component/mask/deleteMask", "../bubble/component/login", "../bubble/component/feedList", "../bubble/component/feedCard", "../bubble/component/agree", "../bubble/component/share", "../bubble/component/report", "../bubble/component/originalPicture", "../bubble/component/playJoiner", "../../common/service/pingback/WebRTCPingback", "../../common/service/user/user", "../../common/service/pingback/pvPingback", "../../common/service/pingback/longyuan4_clickpingback", "../../common/component/scroll/scrollShow", "./service/showPingback", "../../common/service/advertisement/adPingbackCallback", "../../common/service/statistic/fv", "./service/vipPingback", "../../common/service/config/velocityExtend"],
function(a, b, c) {
    var d = a("../../common/service/pingback/QoEPingback").init(Q.PageInfo.page);
    d.mark("scriptLoadedStart");
    var e = Q.PageInfo.playInfo;
    a("../../common/behavior/onScroll2Bottom/onScroll2Bottom"),
    a("../../common/behavior/horizontalScroll/horizontalScroll"),
    a("../../common/behavior/vfrm/vfrm"),
    a("../../common/behavior/QoeWatcher/QoeWatcher"),
    a("../../common/component/player/video"),
    a("../../common/component/player/poster"),
    a("../../common/component/player/playBtn"),
    a("../../common/component/player/dashboard"),
    a("../../common/component/player/fullScreen"),
    a("./behavior/player"),
    a("./behavior/VVPingback"),
    a("./behavior/autoContinuous"),
    a("./behavior/historyState"),
    a("./behavior/SkipPtPw"),
    a("./behavior/showDiver"),
    a("./behavior/playHistoryRecord"),
    a("./behavior/resumePlay"),
    a("./behavior/vip_noAD_pingback"),
    a("./behavior/tvguo"),
    a("./behavior/cardController"),
    a("./component/errorTip"),
    a("./component/accountErrorTips"),
    a("./component/buyVideoBtn"),
    a("./component/downloadAppBtn"),
    a("./component/accountErrorTips"),
    a("../../common/service/video/videoStrategy").setSyncCache(e.tvid, $.cookie.get("QC015") || "", Q.template_code, Q.PageInfo.packageUrl);
    var f = a("../../common/service/player/advertisement").init(),
    g = a("./service/qiyiVideoSource");
    APP.postMessage("PLAYER_SET_SOURCE", g),
    a("./component/thirdPartyTip"),
    a("./component/playerResolutionSwitcher"),
    a("./component/share"),
    a("./component/weChatShareCover"),
    a("../../common/component/header/headContainer"),
    a("../../common/component/user/userInfo"),
    a("../../common/component/header/headerBar"),
    a("../../common/component/search/searchBtn"),
    a("../../common/component/search/searchFlow"),
    a("../../common/component/header/headNav"),
    a("../../common/component/playDownLink/callOrDownloadLink"),
    a("../../common/component/playDownLink/downLink"),
    a("../../common/component/playDownLink/NativeAppPop"),
    a("../../common/component/banner/AdBanner"),
    a("../../common/component/scroll/scrollShow"),
    a("../../common/component/popup/popup"),
    a("./component/thirdPartyTip"),
    a("./component/playerResolutionSwitcher"),
    a("./component/share"),
    a("./component/favorite"),
    a("./component/videoExtendBarTips"),
    a("./component/weChatShareCover"),
    a("../../common/component/cover/cover"),
    a("../../common/component/base/backTop"),
    a("./component/paopaoCommentBtn"),
    a("./component/showComments"),
    e.templateType !== "BODAN" && (a("./component/favorite"), a("./component/videoInfo"), a("./component/upDown"), a("./component/voteTip"), a("./component/score"), a("./component/chart"), a("./component/subOrAd"), a("./component/subscription")),
    a("./component/comment");
    switch (e.templateType) {
    case "MOVIE":
        a("./component/series"),
        a("./component/recommend"),
        a("./component/soundtrack"),
        a("./component/videoAround");
        break;
    case "ALBUM":
        a("./component/tabMenu"),
        a("./component/albumList"),
        a("./component/wonderful"),
        a("./component/recommend"),
        a("./component/videoAround"),
        a("./component/soundtrack");
        break;
    case "SOURCE":
        a("./component/focus"),
        a("./component/sourceList"),
        a("./component/pk"),
        a("./component/recommend"),
        a("./component/videoAround");
        break;
    case "SHORT":
        a("./component/playList"),
        a("./component/hotEnter");
        break;
    case "BODAN":
        a("../bodan/service/bodanList").init({
            collectionCount:
            Q.PageInfo.collectionInfo.count,
            recId: Q.PageInfo.collectionInfo.id
        }),
        a("../bodan/component/bodanInfo"),
        a("../bodan/component/bodanList"),
        a("../bodan/component/hotBodan")
    }
    a("./service/chart").init({
        playComText: Q.PageInfo.playCounter.plyCom
    }),
    a("../../common/service/playDownLink/downLink").init({
        callType: "PLAY"
    });
    var h = a("../../common/service/utils/videoInfo"),
    i = function(a) {
        var b = [];
        return a && a.forEach(function(a) {
            b.push({
                name: a
            })
        }),
        b
    };
    h.setCache({
        startTime: +e.startTime,
        endTime: +e.endTime,
        tvid: +e.tvid,
        vid: e.vid,
        sid: +e.sid,
        vu: e.videoUrl,
        cid: +e.cid,
        c: e.c,
        vpic: e.vpic,
        supId: e.supId,
        subType: e.subType,
        info: e.info,
        aid: +e.aid,
        qitanid: e.qitanId,
        desc: e.desc,
        videoName: e.videoName,
        imageUrl: e.imageUrl,
        bossStatus: e.bossStatus,
        uid: e.uid,
        sDate: e.sDate,
        period: e.period,
        cType: +e.cType,
        voteId: e.voteId,
        sourceId: +e.sourceId,
        albumName: e.albumName,
        order: +e.order,
        bossMixerAlbum: e.bossMixer,
        updateStrategy: e.updateStrategy,
        templateType: e.templateType,
        channelId: +e.cid,
        tvId: +e.tvid,
        vote: {
            id: e.voteId,
            type: 2
        },
        userId: e.userId || 0,
        user: {
            profileUrl: e.profileUrl,
            avatar: e.avatar,
            name: e.name || e.videoName,
            recommendation: e.recommendation,
            videoCount: +e.videoCount,
            followerCount: +e.followerCount,
            id: e.userId || 0,
            copyright: e.copyright === "" ? "": +e.copyright,
            verifyState: e.verifyState === "" ? "": +e.verifyState
        },
        albumId: +e.aid,
        issueTime: e.issueTime * 1,
        shortTime: e.shortTime,
        name: e.videoName,
        description: e.description,
        score: e.score,
        sourceName: e.sourceName,
        shortTitle: e.shortTitle,
        categories: e.newTags ? i(e.newTags.split(",")) : [],
        isPurchase: e.isVip === "true" ? 1 : 0,
        qipuId: e.qipuId,
        cast: {
            directors: e.directors ? i(e.directors.split(",")) : [],
            mainActors: e.mainActors ? i(e.mainActors.split(",")) : [],
            hosts: e.hosts ? i(e.hosts.split(",")) : [],
            guests: e.guests ? i(e.guests.split(",")) : []
        }
    },
    {
        tvid: +e.tvid
    }),
    a("../bubble/service/BubbleCommonInterface.js").init(),
    a("../bubble/service/BubblePingback").setParams({
        src: "plyfooter"
    });
    var j = a("../bubble/service/ParamFacility.js").init({
        vid: e.vid,
        tvid: e.tvid,
        aid: +e.sourceId || e.aid,
        cid: e.cid,
        wallId: e.circleId,
        platform: "15",
        backUrl: location.pathname.substr(1)
    });
    a("../../common/component/pager/DotPager"),
    a("../../common/component/mask/deleteMask"),
    a("../bubble/component/login"),
    a("../bubble/component/feedList"),
    a("../bubble/component/feedCard"),
    a("../bubble/component/agree"),
    a("../bubble/component/share"),
    a("../bubble/component/report"),
    a("../bubble/component/originalPicture"),
    a("../bubble/component/playJoiner"),
    a("../../common/service/pingback/WebRTCPingback").init();
    var k = a("../../common/service/user/user"),
    l = Q.PageInfo.collectionInfo && Q.PageInfo.collectionInfo.id || "";
    APP.postMessage("PLAYER_LOAD_AND_PLAY", {
        player: $("#video"),
        ADPlayerID: f.getAdId(),
        tvid: e.tvid,
        vid: e.vid,
        aid: e.aid,
        isUGC: e.isUGC,
        qipuId: e.qipuId,
        publicLevel: e.publicLevel,
        rate: $.cookie.get("play_stream") || 1,
        templateType: e.templateType,
        plid: l
    });
    var m = location.origin + "/user.html",
    n = location.origin + "/m5/bubble/publish.html?" + j.getBackParam(location.href),
    o = m + "?redirect_url=" + encodeURIComponent(n),
    p = $.url.queryToJson(location.href),
    q = {};
    p.fv && (q.bstp = 56, q.v_plf = "97ae2982356f69d8", q.v_fv = p.fv),
    a("../../common/service/pingback/pvPingback").init(q);
    var r = {
        channelId: e.cid,
        templateType: e.templateType
    };
    a("../../common/service/pingback/longyuan4_clickpingback").init(r).bind("data-rseat"),
    a("../../common/component/scroll/scrollShow");
    var s = a("./service/showPingback").init();
    d.mark("scriptLoadedEnd"),
    APP.ready(function() {
        d.mark("scriptInit")
    });
    var t = {
        debug: !0,
        scrollElement: {
            templateType: Q.PageInfo.playInfo.templateType,
            onScrollShow: function(a) {
                s.sendShowPingback(a.nodes)
            }
        },
        searchFlow: {
            hotQuery: Q.PageInfo.hot_search
        },
        headerBar: {
            nodeForShowDiver: "functionalZone"
        },
        headContainer: {
            refreshAfterInit: !0
        },
        dotpager: {
            isAuto: !1
        },
        bubbleLogin: {
            logonUrl: "",
            anonymousUrl: "",
            logonText: "我来冒个泡",
            anonymousText: "立即登录参与冒泡"
        },
        feedList: {
            feedsParam: {
                wallId: e.circleId,
                count: 20,
                version: 1,
                hasRecomFeed: 1,
                top: 1,
                snsTime: 1,
                feedTypes: "1,4,8,9",
                needTotalUser: 1,
                needTotal: 1
            },
            pingbackParam: {
                s1: "playpg1",
                s2: "plyfooter",
                t: ["505231_1"]
            }
        },
        bubbleLogin: {
            logonUrl: n,
            anonymousUrl: o,
            logonText: "我来冒个泡",
            anonymousText: "立即登录参与冒泡"
        },
        playJoiner: {
            feedsParam: {
                wallId: e.circleId,
                count: 20,
                version: 1,
                hasRecomFeed: 1,
                top: 1,
                snsTime: 1,
                feedTypes: "1,4,8",
                needTotalUser: 1,
                needTotal: 1
            }
        }
    };
    e.templateType == "BODAN" && (t = $.extend(t, {
        hotBodan: {
            bodanId: Q.PageInfo.collectionInfo && Q.PageInfo.collectionInfo.id
        },
        bodanInfo: {
            bodanName: Q.PageInfo.collectionInfo.bodanName
        },
        bodanList: {
            templateType: e.templateType
        }
    })),
    APP.init(t),
    a("../../common/service/advertisement/adPingbackCallback").init("convide"),
    a("../../common/service/statistic/fv").init(),
    a("./service/vipPingback").send(),
    a("../../common/service/config/velocityExtend").init()
});
define("../../common/service/pingback/QoEPingback", ["../useTiming/usertiming.min", "../user/user", "../utils/util", "../session/session"],
function(a, b, c) {
    a("../useTiming/usertiming.min");
    var d = a("../user/user"),
    e = a("../utils/util"),
    f = a("../session/session"),
    g = location.protocol,
    h = performance.timing,
    i = {},
    j = {
        common: {
            lib: g + "//static.qiyi.com/js/html5/js/lib/lib.1.1.1.min.js?sea1.2.min.js",
            comscore: (g === "https:" ? "https://sb": "http://b") + ".scorecardresearch.com/beacon.js",
            hm: g + "//hm.baidu.com/hm.js?5df871ab99f94347b23ca224fc7d013f"
        },
        cashier: {
            cashierReady: g + "//i.vip.iqiyi.com/client/store/h5/goldSetCheckout.action"
        },
        payResult: {
            orderStatus: g + "//i.vip.iqiyi.com/H5/payconfirm/confirmOrderStat.action"
        }
    },
    k = {
        cashier: g + "//i.vip.iqiyi.com/client/store/h5/goldSetCheckout.action"
    },
    l = function(a) {
        return a != null && a != undefined ? typeof a == "number" && (a = a.toFixed(0), a < 0 && (a = null)) : a = null,
        a
    };
    c.exports = APP.createService({
        init: function(a) {
            var b = this;
            if (this.checkHit()) {
                var c = {},
                d = $.Deferred(function(a) {
                    return $(window).on("load",
                    function() {
                        b.mark("onLoad"),
                        a.resolve()
                    }),
                    a
                }),
                e = $.Deferred(function(a) {
                    $(document).on("ajaxStop",
                    function(c, d, e) {
                        b.mark("ajaxStop"),
                        a.resolve()
                    })
                });
                $.when(d, e).done(function() {
                    window.__Qoe__ = b.getData(a),
                    b.send(window.__Qoe__.pageData, a);
                    var c = document.createEvent("HTMLEvents");
                    c.initEvent("onQoeLoad", !0, !0),
                    c.eventType = "message",
                    document.dispatchEvent(c),
                    console.log("[QOE] ready")
                })
            }
            return this
        },
        send: function(a, b) {
            var c = {
                libLoaded: "lib",
                comscoreLoaded: "comscore",
                baiduLoaded: "hm",
                domRender: "domready",
                scriptLoaded: "scriptloaded",
                scriptInitialised: "scriptinit",
                allLoaded: "firstpage",
                pageAjaxInteractive: "ajaxready",
                docLoaded: "docload"
            };
            if (!b || !a) return;
            var e = {
                type: "qoe",
                groupname: "m_page_" + b,
                _: (new Date).getTime()
            };
            d.isLogin() && $.extend(e, {
                uid: d.getUid(),
                ppuid: d.getAuthcookie()
            });
            for (var f in c) {
                var g = c[f],
                h = l(a[f]);
                h ? e[g] = h: console.log("[QOE] missing " + f)
            }
            var i = new Image;
            i.src = "http://activity.m.iqiyi.com/qoe.gif?" + $.param(e),
            console.log("[QOE] sent:" + i.src)
        },
        sendInterface: function(a, b) {
            var c = {};
            c.groupname = "m_if_" + a,
            c[a] = l(b || window.QoE.getMeasureTime(a));
            var d = new Image;
            d.src = "http://activity.m.iqiyi.com/qoe.gif?" + $.param(c),
            console.log("[QOE] sent:" + d.src)
        },
        mark: function(a) {
            performance.mark(a)
        },
        checkHit: function() {
            var a = "_QOE_HIT_",
            b = f.read(a);
            return b ? b = b === "true": (b = Math.round(Math.random() * 100) < 10, f.write(a, b)),
            b
        },
        getData: function(a) {
            var b = {},
            c = {},
            d = QoE.getMonitorTime(j.common);
            c.libLoaded = d.lib && d.lib.duration,
            c.comscoreLoaded = d.comscore && d.comscore.duration,
            c.baiduLoaded = d.hm && d.hm.duration;
            var e = QoE.scriptTarget;
            c.scriptLoaded = e.scriptLoaded,
            c.scriptInitialised = e.scriptInitialised,
            c.allLoaded = QoE.allLoaded,
            c.docLoaded = Timing.responseEnd,
            c.domComplete = Timing.domComplete,
            c.domRender = Timing.domRender,
            c.pageAjaxInteractive = QoE.getPageReadyTime(k[a]),
            c.pageInteractive = QoE.pageInteractive;
            var f = QoE.request;
            c.count = {
                beacon: f.beacon.length,
                js: f.js.length,
                html: f.iframe.length,
                css: f.css.length,
                http: f.http.length,
                image: f.img.length,
                ajax: f.ajax.length,
                "interface": f.ajax.length + QoE.jsonPInterface.length
            };
            if (j[a]) {
                var g = QoE.getMonitorTime(j[a]);
                for (var h in g) this.sendInterface(h, g[h].duration)
            }
            return b.pageData = c,
            b.interfaceData = QoE.jsonPInterface.concat(f.ajax),
            b
        }
    }),
    window.Timing = {
        get responseEnd() {
            return h.responseEnd - h.navigationStart
        },
        get domRender() {
            return h.domInteractive - h.domLoading
        },
        get resourceLoading() {
            return h.domComplete - h.domContentLoadedEventEnd
        },
        get domLoaded() {
            return h.domContentLoadedEventEnd - h.responseEnd
        },
        get domComplete() {
            return h.domComplete - h.responseEnd
        },
        get jsInit() {
            return performance.measure("jsinit", "jsinit_start", "jsinit_end"),
            performance.getEntriesByName("jsinit")[0].duration
        },
        get pageInteractive() {
            return performance.getEntriesByName("pageInteractiveReady")[0].startTime - h.navigationStart
        },
        get asyncHttpDuration() {
            var a = [],
            b = httpCounts;
            httpCounts = performance.getEntries().length;
            var c = performance.getEntriesByType("resource").splice(b, httpCounts - b);
            return c.forEach(function(b) { (b.initiatorType === "script" || b.initiatorType === "xmlhttprequest") && a.push(b.fetchStart, b.responseEnd)
            }),
            a.sort(),
            a[a.length - 1] - a[0]
        },
        get httpRequest() {
            return performance.getEntriesByType("resource")
        },
        get iframeRequest() {
            return performance.getEntriesByType("resource").filter(function(a) {
                return a.initiatorType === "iframe"
            })
        },
        get jsRequest() {
            return performance.getEntriesByType("resource").filter(function(a) {
                return a.initiatorType === "script"
            })
        },
        get ajaxRequest() {
            return performance.getEntriesByType("resource").filter(function(a) {
                return a.initiatorType === "xmlhttprequest"
            })
        },
        get imageRequest() {
            return performance.getEntriesByType("resource").filter(function(a) {
                return (a.initiatorType === "img" || a.initiatorType === "css") && !/msg\.video\.qiyi\.com/.test(a.name)
            })
        },
        get cssRequest() {
            return performance.getEntriesByType("resource").filter(function(a) {
                return a.initiatorType === "link" && /\.css$/.test(a.name.split("?")[0])
            })
        },
        get beaconRequest() {
            return performance.getEntriesByType("resource").filter(function(a) {
                return a.initiatorType === "img" && /msg\.video\.qiyi\.com/.test(a.name)
            })
        },
        get asyncCounts() {
            var a = httpCounts;
            return httpCounts = performance.getEntriesByType("resource").length,
            httpCounts - a
        }
    },
    window.QoE = {
        getEntriesByReg: function(a) {
            var b = [],
            c = performance.getEntriesByType("resource"),
            d = !1,
            e = function(a) {
                if (Object.prototype.toString.call(a) === "[object RegExp]") return function(b) {
                    return a.test(b)
                };
                if (typeof a == "string") return function(b) {
                    return b.indexOf(a) !== -1
                }
            } (a);
            return e && c.forEach(function(a) {
                e(a.name) && b.push(a)
            }),
            b
        },
        getMonitorTime: function(a) {
            var b = {};
            for (var c in a) {
                var d = null,
                e = a[c];
                if ($.isArray(e)) {
                    var f = 3e4,
                    g = 0;
                    e.forEach(function(a, b) {
                        var c = QoE.getEntriesByReg(a);
                        c && (c = c[0], f = f > c.startTime ? c.startTime: f, g = g < c.responseEnd ? c.responseEnd: g)
                    }),
                    d = {
                        startTime: f,
                        responseEnd: g,
                        duration: g - f
                    }
                } else if (typeof e == "string") {
                    var h = QoE.getEntriesByReg(e);
                    h && h[0] && (d = {
                        startTime: h[0].startTime,
                        responseEnd: h[0].responseEnd,
                        duration: h[0].duration
                    })
                }
                b[c] = d
            }
            return b
        },
        getPageReadyTime: function(a) {
            if (a) {
                var b = this.getMonitorTime({
                    anony: a
                });
                return b.anony.responseEnd
            }
            return this.scriptTarget.scriptInit
        },
        getMeasureTime: function(a) {
            performance.measure(a, a + "Start", a + "End");
            var b = performance.getEntriesByName(a);
            return b && b[0].duration
        },
        get jsonPInterface() {
            return performance.getEntriesByType("resource").filter(function(a) {
                return a.initiatorType === "script" && /callback=/.test(a.name)
            })
        },
        get timing() {
            var a = Timing.responseEnd,
            b = Timing.domRender,
            c = Timing.domComplete,
            d = Timing.jsInit,
            e = Timing.pageInteractive;
            return a + " " + b + " " + c + " " + d + " " + e
        },
        get allLoaded() {
            var a = performance.getEntriesByName("onLoad");
            a = a && a.startTime;
            var b = performance.getEntriesByName("ajaxStop");
            b = b && b.startTime,
            performance.measure("allLoaded", "navigationStart", a > b ? "onLoad": "ajaxStop");
            var c = performance.getEntriesByName("allLoaded");
            return c && c[0].duration
        },
        get scriptTarget() {
            performance.measure("scriptLoaded", "scriptLoadedStart", "scriptLoadedEnd"),
            performance.measure("scriptInitialised", "scriptLoadedEnd", "scriptInit");
            var a = performance.getEntriesByName("scriptLoaded"),
            b = performance.getEntriesByName("scriptInitialised"),
            c = performance.getEntriesByName("scriptInit"),
            d = performance.getEntriesByName("scriptLoadedEnd"),
            e = performance.getEntriesByName("scriptLoadedStart");
            return {
                scriptLoadedStart: d && d[0].startTime,
                scriptLoadedEnd: e && e[0].startTime,
                scriptInit: c && c[0].startTime,
                scriptLoaded: a && a[0].duration,
                scriptInitialised: b && b[0].duration
            }
        },
        get request() {
            return {
                http: Timing.httpRequest,
                iframe: Timing.iframeRequest,
                js: Timing.jsRequest,
                css: Timing.cssRequest,
                img: Timing.imageRequest,
                ajax: Timing.ajaxRequest,
                beacon: Timing.beaconRequest
            }
        }
    }
});
define("../../common/service/useTiming/usertiming.min", [],
function(a, b, c) { !
    function(a) {
        "use strict",
        "undefined" == typeof a && (a = {}),
        "undefined" == typeof a.performance && (a.performance = {}),
        a._perfRefForUserTimingPolyfill = a.performance,
        a.performance.userTimingJsNow = !1,
        a.performance.userTimingJsNowPrefixed = !1,
        a.performance.userTimingJsUserTiming = !1,
        a.performance.userTimingJsUserTimingPrefixed = !1,
        a.performance.userTimingJsPerformanceTimeline = !1,
        a.performance.userTimingJsPerformanceTimelinePrefixed = !1;
        var b, d, e = [],
        f = [],
        g = null;
        if ("function" != typeof a.performance.now) {
            for (a.performance.userTimingJsNow = !0, f = ["webkitNow", "msNow", "mozNow"], b = 0; b < f.length; b++) if ("function" == typeof a.performance[f[b]]) {
                a.performance.now = a.performance[f[b]],
                a.performance.userTimingJsNowPrefixed = !0;
                break
            }
            var h = +(new Date);
            a.performance.timing && a.performance.timing.navigationStart ? h = a.performance.timing.navigationStart: "undefined" != typeof process && "function" == typeof process.hrtime && (h = process.hrtime(), a.performance.now = function() {
                var a = process.hrtime(h);
                return 1e3 * a[0] + 1e-6 * a[1]
            }),
            "function" != typeof a.performance.now && (Date.now ? a.performance.now = function() {
                return Date.now() - h
            }: a.performance.now = function() {
                return + (new Date) - h
            })
        }
        var i = function() {},
        j = function() {},
        k = [],
        l = !1,
        m = !1;
        if ("function" != typeof a.performance.getEntries || "function" != typeof a.performance.mark) {
            for ("function" == typeof a.performance.getEntries && "function" != typeof a.performance.mark && (m = !0), a.performance.userTimingJsPerformanceTimeline = !0, e = ["webkit", "moz"], f = ["getEntries", "getEntriesByName", "getEntriesByType"], b = 0; b < f.length; b++) for (d = 0; d < e.length; d++) g = e[d] + f[b].substr(0, 1).toUpperCase() + f[b].substr(1),
            "function" == typeof a.performance[g] && (a.performance[f[b]] = a.performance[g], a.performance.userTimingJsPerformanceTimelinePrefixed = !0);
            i = function(a) {
                k.push(a),
                "measure" === a.entryType && (l = !0)
            };
            var n = function() {
                l && (k.sort(function(a, b) {
                    return a.startTime - b.startTime
                }), l = !1)
            };
            if (j = function(a, c) {
                for (b = 0; b < k.length;) k[b].entryType !== a || "undefined" != typeof c && k[b].name !== c ? b++:k.splice(b, 1)
            },
            "function" != typeof a.performance.getEntries || m) {
                var o = a.performance.getEntries;
                a.performance.getEntries = function() {
                    n();
                    var b = k.slice(0);
                    return m && o && (Array.prototype.push.apply(b, o.call(a.performance)), b.sort(function(a, b) {
                        return a.startTime - b.startTime
                    })),
                    b
                }
            }
            if ("function" != typeof a.performance.getEntriesByType || m) {
                var p = a.performance.getEntriesByType;
                a.performance.getEntriesByType = function(c) {
                    if ("undefined" == typeof c || "mark" !== c && "measure" !== c) return m && p ? p.call(a.performance, c) : [];
                    "measure" === c && n();
                    var d = [];
                    for (b = 0; b < k.length; b++) k[b].entryType === c && d.push(k[b]);
                    return d
                }
            }
            if ("function" != typeof a.performance.getEntriesByName || m) {
                var q = a.performance.getEntriesByName;
                a.performance.getEntriesByName = function(c, d) {
                    if (d && "mark" !== d && "measure" !== d) return m && q ? q.call(a.performance, c, d) : [];
                    "undefined" != typeof d && "measure" === d && n();
                    var e = [];
                    for (b = 0; b < k.length; b++)("undefined" == typeof d || k[b].entryType === d) && k[b].name === c && e.push(k[b]);
                    return m && q && (Array.prototype.push.apply(e, q.call(a.performance, c, d)), e.sort(function(a, b) {
                        return a.startTime - b.startTime
                    })),
                    e
                }
            }
        }
        if ("function" != typeof a.performance.mark) {
            for (a.performance.userTimingJsUserTiming = !0, e = ["webkit", "moz", "ms"], f = ["mark", "measure", "clearMarks", "clearMeasures"], b = 0; b < f.length; b++) for (d = 0; d < e.length; d++) g = e[d] + f[b].substr(0, 1).toUpperCase() + f[b].substr(1),
            "function" == typeof a.performance[g] && (a.performance[f[b]] = a.performance[g], a.performance.userTimingJsUserTimingPrefixed = !0);
            var r = {};
            "function" != typeof a.performance.mark && (a.performance.mark = function(b) {
                var c = a.performance.now();
                if ("undefined" == typeof b) throw new SyntaxError("Mark name must be specified");
                if (a.performance.timing && b in a.performance.timing) throw new SyntaxError("Mark name is not allowed");
                r[b] || (r[b] = []),
                r[b].push(c),
                i({
                    entryType: "mark",
                    name: b,
                    startTime: c,
                    duration: 0
                })
            }),
            "function" != typeof a.performance.clearMarks && (a.performance.clearMarks = function(a) {
                a ? r[a] = [] : r = {},
                j("mark", a)
            }),
            "function" != typeof a.performance.measure && (a.performance.measure = function(b, c, d) {
                var e = a.performance.now();
                if ("undefined" == typeof b) throw new SyntaxError("Measure must be specified");
                if (!c) return void i({
                    entryType: "measure",
                    name: b,
                    startTime: 0,
                    duration: e
                });
                var f = 0;
                if (a.performance.timing && c in a.performance.timing) {
                    if ("navigationStart" !== c && 0 === a.performance.timing[c]) throw new Error(c + " has a timing of 0");
                    f = a.performance.timing[c] - a.performance.timing.navigationStart
                } else {
                    if (! (c in r)) throw new Error(c + " mark not found");
                    f = r[c][r[c].length - 1]
                }
                var g = e;
                if (d) if (g = 0, a.performance.timing && d in a.performance.timing) {
                    if ("navigationStart" !== d && 0 === a.performance.timing[d]) throw new Error(d + " has a timing of 0");
                    g = a.performance.timing[d] - a.performance.timing.navigationStart
                } else {
                    if (! (d in r)) throw new Error(d + " mark not found");
                    g = r[d][r[d].length - 1]
                }
                var h = g - f;
                i({
                    entryType: "measure",
                    name: b,
                    startTime: f,
                    duration: h
                })
            }),
            "function" != typeof a.performance.clearMeasures && (a.performance.clearMeasures = function(a) {
                j("measure", a)
            })
        }
        "function" == typeof define && define.amd ? define([],
        function() {
            return a.performance
        }) : "undefined" != typeof c && "undefined" != typeof c.exports && (c.exports = a.performance)
    } ("undefined" != typeof window ? window: void 0)
});
define("../../common/service/user/user", ["./interface/isLogin", "./interface/login"],
function(require, exports, module) {
    var customEvent = $.customEvent,
    isLogin = require("./interface/isLogin"),
    login = require("./interface/login"),
    ic = console,
    callbackList = [],
    userInfo = APP.createService({
        init: function() {
            this.isNewUser = !1,
            this.uid = "",
            this.name = "",
            this.email = "",
            this.vipType = "",
            this.payType = "",
            this.status = "",
            this.isLoginInfo = null,
            this.qy_info = null,
            this.bindEvent(),
            this.checkUserInfo()
        },
        bindEvent: function() {
            customEvent.on("login", this.doLogin.bind(this)),
            customEvent.on("logout", this.doLogout.bind(this))
        },
        doLogin: function() {
            this.checkUserInfo()
        },
        doLogout: function() {
            this.clearUserInfo()
        },
        checkUserInfo: function() {
            if (this.isLogin()) {
                var p00002 = APP.$.cookie.get("P00002");
                p00002 !== null && p00002 !== "" && (p00002 = window.JSON ? window.JSON.parse(p00002) : eval("(" + p00002 + ")"), this.uid = p00002.uid, this.name = p00002.nickname, this.email = p00002.email)
            }
        },
        checkVipInfo: function(a, b) {
            this.isLogin() && (this.hasVipInfo ? a && a(b ? this[b] : "") : this.getInfoFromInterface(a, b))
        },
        getVipLevel: function(a) {
            return this.checkVipInfo(a, "level"),
            this.level
        },
        getVipDeadline: function(a) {
            return this.checkVipInfo(a, "vipDeadline"),
            this.vipDeadline
        },
        getInfoFromInterface: function(a, b) {
            var c = this;
            c.isLoginInfo ? a && a(b ? c[b] : "") : c.isLogin() && isLogin.sendInfoAction({},
            function(d) {
                d.code != "A00005" && (d.code == "A00000" ? (c.setVipInfo(d.data || {}), c.isLoginInfo = d.data.userinfo || {},
                c.qy_info = d.data.qiyi_vip_info || {},
                a(b ? c[b] : "")) : (ic.warn("调用vip信息接口失败"), c.clearVipInfo()))
            })
        },
        setVipInfo: function(a) {
            var b = a.pps_vip_info || {},
            c = a.qiyi_vip_info || {},
            d = parseInt(b.vip_type, 10),
            e = parseFloat(c.type, 10),
            f = 0,
            g = 0,
            h = 0,
            i = "";
            b.vip_remain_day && (f = new Date, g = f.setDate(f.getDate() + b.vip_remain_day), i = APP.$.date.format(new Date(g), "yyyy年MM月dd日")),
            e || parseInt(c.vipType, 10) && !d ? (c.deadline && (h = c.deadline.t), this.vipType = c.vipType + "", this.payType = c.payType + "", this.status = c.status + "", this.level = c.level + "", this.hasVipInfo = !0, this.isValidVip = c.status == "1", this.vipDeadline = c.deadline) : d && (this.level = b.pps_level + "", this.vipType = "1", this.payType = "0", this.status = "1", this.hasVipInfo = !0, this.isValidVip = !0)
        },
        clearUserInfo: function() {
            this.uid = "",
            this.name = "",
            this.email = "",
            this.clearVipInfo()
        },
        clearVipInfo: function() {
            this.level = "",
            this.vipType = "",
            this.payType = "",
            this.status = "",
            this.type = "",
            this.hasVipInfo = !1,
            this.isValidVip = !1
        },
        isLogin: function() {
            return APP.$.cookie.get("P00002") !== "" && APP.$.cookie.get("P00002") !== null && APP.$.cookie.get("P00002") !== "deleted" && APP.$.cookie.get("P00003") !== "" && APP.$.cookie.get("P00003") !== null && APP.$.cookie.get("P00003") !== "deleted"
        },
        getUid: function() {
            return this.uid
        },
        getAnonymousUid: function() {
            var a = $.cookie.get("QC006");
            return a || (this.isNewUser = !0, a = $.crypto.md5(window.navigator.userAgent + document.cookie + Math.random() + (new Date).getTime() * 1), $.cookie.set("QC006", a, {
                expires: 31536e6,
                path: "/",
                domain: "iqiyi.com"
            })),
            a
        },
        checkNewUser: function() {
            var a = $.cookie.get("QC006"),
            b = !1;
            return a ? b = this.isNewUser: b = !0,
            b
        },
        getName: function() {
            return this.name
        },
        getEmail: function() {
            return this.email
        },
        getVipType: function(a) {
            return this.checkVipInfo(a, "vipType"),
            this.vipType
        },
        getPayType: function(a) {
            return this.checkVipInfo(a, "payType"),
            this.payType
        },
        getStatus: function(a) {
            return this.checkVipInfo(a, "status"),
            this.status
        },
        getIsValidVip: function(a) {
            return this.checkVipInfo(a, "isValidVip"),
            this.isValidVip
        },
        getAutoRenew: function(a) {
            var b = "http://serv.vip.iqiyi.com/services/autoRenewQuery.action",
            c = {};
            c.param = {
                cid: "afbe8fd3d73448c9",
                P00001: APP.$.cookie.get("P00001"),
                qyid: APP.$.cookie.get("QC006") || "",
                cb: "__pc__getAutoRenew__"
            },
            $.ajax({
                url: b,
                dataType: "jsonp",
                data: c.param,
                success: function(b) {
                    var c = 0;
                    b.status && (c = b.status),
                    a && a(c)
                }
            })
        },
        getUserIcon: function(a) {
            var b = "";
            a = a ||
            function() {};
            if (this.isLogin()) {
                var c = {},
                d = "http://passport.iqiyi.com/apis/user/info.action";
                c.param = {},
                c.param.qyid = APP.$.cookie.get("QC006") || "",
                c.param.agenttype = APP.$.browser.iPhone ? 12 : 13,
                c.param.authcookie = c.param.authcookie || APP.$.cookie.get("P00001"),
                c.param.antiCsrf = APP.$.crypto.md5(c.param.authcookie),
                $.ajax({
                    url: d,
                    dataType: "jsonp",
                    data: c.param,
                    success: function(c) {
                        if (c.code === "A00000") {
                            var c = c.data;
                            c.userinfo && c.userinfo.icon && (b = c.userinfo.icon.replace("_130x130", "_70x70"), a(b))
                        }
                    }
                })
            }
        },
        getUserAvatar: function(a) {
            this.isLogin() ? this.getInfoFromInterface(function(b) {
                a(b.icon.replace("_130x130", "_70x70"))
            },
            "isLoginInfo") : a(null)
        },
        getAccountType: function(a) {
            var b = {
                1 : "BAIDU",
                2 : "SINA",
                3 : "RENREN",
                4 : "QQ",
                5 : "ALIPAY",
                6 : "KAIXIN",
                7 : "LENOVO",
                8 : "FEIXIN",
                9 : "WEIXIN",
                10 : "QIYI_EMAIL",
                11 : "QIYI_PHONE",
                12 : "QISHENG",
                13 : "PPS",
                14 : "PPS_BIND"
            };
            this.getInfoFromInterface(function(c) {
                a(b[c.accountType])
            },
            "isLoginInfo")
        },
        getAuthcookie: function() {
            return APP.$.cookie.get("P00001") || null
        },
        loginWithAuthcookie: function(a, b, c) {
            login.loginWithAuthcookie(a,
            function(a) {
                a.code == "A00000" && ($.customEvent.fire({
                    type: "login"
                }), b())
            },
            c)
        },
        PPSLoginWithAuthcookie: function(a, b, c) {
            login.PPSLoginWithAuthcookie(a,
            function(a) {
                a.code == "A00000" && ($.customEvent.fire({
                    type: "login"
                }), b())
            },
            c)
        },
        logout: function(a) {
            var b = encodeURIComponent(a || window.location.href);
            window.location.href = "http://passport.iqiyi.com/user/logout.php?url=" + b + "&logoutcb=Q.__logoutcb"
        },
        getVIPStatus: function(a) {
            var b = "NOVIP",
            c = {
                1 : "GOLD",
                3 : "SILVER",
                4 : "PLATINUM"
            };
            this.isLogin() ? this.getInfoFromInterface(function(d) {
                if (d) if (d.status == 0 || d.status == 2) b = "BANNED";
                else if (d.status == 3) b = "NOVIP";
                else if (d.status == 1) {
                    b = "VALID";
                    if (d.surplus > 0 || d.surplus == "") b = c[d.vipType] || "VALID"
                }
                a(b)
            },
            "qy_info") : a(b)
        }
    });
    userInfo.hasVipInfo = !1,
    userInfo.isValidVip = !1,
    userInfo.init(),
    module.exports = userInfo
});
define("../../common/service/user/interface/isLogin", [],
function(a, b, c) {
    var d = {
        isLogin: "http://passport.iqiyi.com/apis/user/islogin.php",
        userInfo: "http://passport.iqiyi.com/apis/user/info.action"
    },
    e = APP.createService({
        send: function(a, b) {
            a.param = a.param || {},
            a.param.agenttype = APP.$.browser.iPhone ? 12 : 13,
            a.param.authcookie = APP.$.cookie.get("P00001"),
            a.param.antiCsrf = APP.$.crypto.md5(a.param.authcookie),
            $.ajax({
                url: d.isLogin,
                data: a.param,
                dataType: "jsonp",
                headers: {
                    withCredentials: !0
                },
                success: function(a, c, d) {
                    b && b(a)
                }
            })
        },
        sendInfoAction: function(a, b, c) {
            var e = {};
            $.extend(e, a),
            e.authcookie || (e.authcookie = APP.$.cookie.get("P00001")),
            e.antiCsrf = APP.$.crypto.md5(e.authcookie),
            $.ajax({
                url: d.userInfo,
                data: e,
                dataType: "jsonp",
                timeout: 1e3,
                cache: !0,
                headers: {
                    withCredentials: !0
                },
                success: function(a, c, d) {
                    b && b(a)
                },
                error: function() {
                    c && c()
                }
            })
        }
    });
    c.exports = e
});
define("../../common/service/user/interface/login", ["../../config/config"],
function(a, b, c) {
    var d = a("../../config/config"),
    e = function(a, b, c, d) {
        var e = b.param,
        f = b.method || "GET",
        g = b.jsonp,
        h = b.timeout || 5e3,
        i = this;
        $.ajax({
            url: a,
            dataType: "jsonp",
            data: e,
            type: f,
            timeout: h,
            success: function(a) {
                c && c(a)
            },
            error: function(a) {
                d && d({
                    code: "E0000"
                })
            }
        })
    };
    c.exports = APP.createService({
        loginWithAuthcookie: function(a, b, c) {
            e(d.interfaces.user.loginWithAuthcookie, {
                param: {
                    keep: 0,
                    authcookie: a,
                    agenttype: $.os.android ? 13 : 12
                }
            },
            b, c)
        },
        PPSLoginWithAuthcookie: function(a, b, c) {
            e(d.interfaces.user.PPSLoginWithAuthcookie, {
                param: {
                    authcookie: a,
                    agenttype: $.os.android ? 13 : 12
                }
            },
            b, c)
        }
    })
});
define("../../common/service/config/config", [],
function(a, b, c) {
    var d = APP.createService({
        domain: "iqiyi.com",
        mobileRoot: "/",
        videoId: "video",
        defaultRate: 1,
        mtMap: {
            96 : {
                name: "极速"
            },
            1 : {
                name: "流畅"
            },
            2 : {
                name: "高清"
            }
        },
        http: {
            timeout: 1e4
        },
        cookie: {
            pc: "QC020"
        },
        filterBrowsers: {
            fullScreen: ["mbaidu", "mqq", "muc", "iPhone"]
        },
        downLink: {
            ios: {
                url: "http://ota.iqiyi.com/adf/57e9653f79764d1b840b1ebeb776bd3e"
            },
            android: {
                url: "http://ota.iqiyi.com/adf/83cf0f0d5479422f947688e58c22b2b6"
            }
        },
        searchDownLink: {
            ios: {
                url: "http://ota.iqiyi.com/adf/c5ea53395d574e88b2838ef1be7f4402"
            },
            android: {
                url: "http://ota.iqiyi.com/adf/00b345c8144145aba21afa55a135037b"
            }
        },
        replaceURL: function(a, b) {
            return a ? (a = a.replace(/(http:\/\/)?(yule|vip|www)\.(i)?qiyi\.com/i, ""), a) : ""
        },
        addAnchor: function(a, b) {
            var c = b.anchor;
            return c ? a + "#" + c: a
        },
        interfaces: {
            tm: "http://cache.m.iqiyi.com/h5/tmm/",
            mm: "http://qisu.video.qiyi.com/r/qisu/mac/mm/",
            a: "http://cache.m.iqiyi.com/h5/a/",
            ss: "http://cache.m.iqiyi.com/h5/s/",
            sc: "http://cache.m.iqiyi.com/h5/sd/",
            cp: "http://cache.m.iqiyi.com/h5/qiyichupin/",
            index: "http://cache.m.iqiyi.com/h5/index/",
            ch: "http://cache.m.iqiyi.com/h5/c/",
            p: "http://cache.m.iqiyi.com/p/",
            pc: "http://cache.video.iqiyi.com/jp/pc/",
            v: "http://cache.m.iqiyi.com/h5/vlist/",
            vj: "http://cache.video.iqiyi.com/jp/vi/",
            nAdInfo: "http://pub.m.iqiyi.com/api/getNewAdInfo",
            qipaweixininfo: "https://papaq.iqiyi.com/papaq-api/video/h5_info",
            topicAlbum: "http://cache.m.iqiyi.com/h5/tal/",
            topicInfo: "http://cache.m.iqiyi.com/h5/ti/",
            topicList: "http://cache.m.iqiyi.com/h5/tl/",
            playList: "http://cache.m.iqiyi.com/h5/pl/",
            qitanQxApi: "http://api.t.iqiyi.com/qx_api/qitan/get_movie_by_aid",
            qx: "http://api.t.iqiyi.com/qx_api/activity/h5popularize/feedback",
            search: "http://search.video.iqiyi.com/o",
            search_hot: "http://search.video.iqiyi.com/m",
            suggest: "http://suggest.video.iqiyi.com/",
            p13n: "http://qiyu.iqiyi.com/p13n20",
            ultraAlbum: "http://cache.video.qiyi.com/jp/collection/",
            avlist: "http://cache.video.iqiyi.com/jp/avlist/",
            vlist: "http://cache.m.iqiyi.com/h5/vlist/",
            sdate: "http://cache.video.iqiyi.com/jp/sdlst/",
            slist: "http://cache.video.iqiyi.com/jp/sdvlst/",
            slistTrailers: "http://cache.video.iqiyi.com/jp/sdvlst/nf/",
            ugcVI: "http://mixer.video.iqiyi.com/jp/mixin/videos/",
            albumInfo: "http://mixer.video.iqiyi.com/jp/albums/",
            sound: "http://mixer.video.iqiyi.com/jp/mixin/",
            mixer: "http://mixer.video.iqiyi.com/jp/recommend/videos",
            platformCount: "http://cache.video.qiyi.com/jp/pc/pr/",
            activity: "http://cache.m.iqiyi.com/h5/kszt/200343212/23423asdf.html",
            collect: "http://subscription.iqiyi.com/dingyue/api/",
            othlist: "http://cache.video.qiyi.com/jp/othlist/",
            resys30: "http://qiyu.iqiyi.com/portal/resys30",
            playLists: "http://mixer.video.iqiyi.com/jp/mixin/playlists/",
            updown: {
                updown: "http://up.video.iqiyi.com/ugc-updown/aud.do",
                query_is_updown: "http://up.video.iqiyi.com/ugc-updown/quud.do",
                query_num: "http://up.video.iqiyi.com/ugc-updown/ud.do"
            },
            score: {
                getScore: "http://score.video.iqiyi.com/beaver-api/external/get_user_movie_score",
                setScore: "http://score.video.iqiyi.com/beaver-api/external/add_movie_score"
            },
            buyLayer: "http://serv.vip.iqiyi.com/pay/buyLayer.action",
            ticket: "http://piao.iqiyi.com",
            nologin_collect_list: "http://nlwl.iqiyi.com/apis/urc/getqd",
            nologin_collect_merge: "http://nlwl.iqiyi.com/apis/uwl/merge",
            nologin_collect_clear: "http://nlwl.iqiyi.com/apis/uwl/deleteAllSubscriptions.action",
            appstore_indexlist: "http://store.iqiyi.com/apis/gphone/collection.action",
            appstore_downlist: "http://store.iqiyi.com/apis/gphone/category/apps.action",
            notice: {
                getNotice: "http://notice.iqiyi.com/apis/msg/list_messages.action",
                getNoticeCount: "http://notice.iqiyi.com/apis/msg/count_messages.action",
                getAllNoticeCount: "http://notice.iqiyi.com/apis/msg/count_all_messages.action",
                getAllNoticeCountAnony: "http://nl.notice.iqiyi.com/apis/msg/count_all_messages.action",
                hasNewNotice: "http://notice.iqiyi.com/apis/msg/hasnew.action",
                relatedToMe: "http://notice.iqiyi.com/apis/msg/mixer/navall.action",
                readNotice: "http://notice.iqiyi.com/apis/msg/update_status.action",
                updateAllNotice: "http://notice.iqiyi.com/apis/msg/update_all_status.action"
            },
            router: {
                BindRouterDevice: "http://router.iqiyi.com/apis/bind/",
                UnbindRouterDevice: "http://router.iqiyi.com/apis/unbind/",
                NeedBindRouterDevice: "http://router.iqiyi.com/apis/needBind/",
                SwitchUserBindRouterDevice: "http://router.iqiyi.com/apis/replaceUser/"
            },
            subscription: {
                unSubscribe: "http://sns.uc.iqiyi.com/apis/friend/remove_friends.action",
                subscribe: "http://sns.uc.iqiyi.com/apis/friend/add_friends.action",
                isSubscribed: "http://sns.uc.iqiyi.com/apis/friend/are_friends.action"
            },
            security: {
                resetMailBox: "https://passport.iqiyi.com/apis/user/replace_email.action",
                resetPhone: "http://passport.iqiyi.com/apis/phone/replace_phone.action",
                resendActivationMail: "https://passport.iqiyi.com/apis/secure/resend_activate_email.action",
                sendActivationMail: "http://passport.iqiyi.com/apis/secure/send_verify_email.action",
                resendVerifyMail: "http://passport.iqiyi.com/apis/secure/resend_verify_email.action",
                resetPassword: "https://passport.iqiyi.com/apis/user/reset_passwd.action",
                resendResetPasswordMail: "http://passport.iqiyi.com/apis/secure/resend_verify_email.action",
                getPasswordScore: "http://passport.iqiyi.com/apis/secure/get_pwd_score.action",
                retrievePassword: "http://passport.iqiyi.com/pages/secure/password/save_pwd.action",
                checkPhoneVerify: "https://passport.iqiyi.com/apis/phone/verify_cellphone_authcode.action",
                locationList: "https://passport.iqiyi.com/pages/secure/login_history_list.action"
            },
            user: {
                loginWithAuthcookie: "https://passport.iqiyi.com/apis/user/authlogin.action",
                PPSLoginWithAuthcookie: "http://passport.pps.tv/apis/user/setcookie.action",
                bindPhone: "https://BEA3AA1908656AABCCFF76582C4C6660/apis/phone/bind_phone.action",
                testReBindPhone: "https://passport.iqiyi.com/apis/phone/check_switch_account.action",
                thirdPartyCheck: "http://passport.iqiyi.com/apis/user/check_account.action",
                rebindInfo: "https://passport.iqiyi.com/apis/phone/get_switch_info.action",
                rebindPhone: "https://passport.iqiyi.com/apis/phone/switch_account.action",
                login: "https://BEA3AA1908656AABCCFF76582C4C6660/apis/reglogin/login.action",
                checkUserName: "https://passport.iqiyi.com/apis/user/check_account.action",
                getPhoneVerify: "http://passport.iqiyi.com/apis/phone/send_cellphone_authcode.action",
                getPhonePicVerify: "http://passport.iqiyi.com/apis/phone/send_cellphone_authcode_vcode.action",
                thirdPartyLogin: "http://passport.iqiyi.com/apis/thirdparty/nlogin.action",
                phoneRegister: "https://BEA3AA1908656AABCCFF76582C4C6660/apis/reglogin/cellphone_reg.action",
                mailRegister: "https://passport.iqiyi.com/apis/reglogin/register.action",
                bindPhoneForThirdAccountInFirstTime: "https://BEA3AA1908656AABCCFF76582C4C6660/apis/thirdparty/bind_account.action",
                bindPhoneForThirdAccount: "https://BEA3AA1908656AABCCFF76582C4C6660/apis/secure/bind_account.action",
                userInfo: "https://passport.iqiyi.com/apis/user/info.action",
                verify: "http://renzheng.iqiyi.com/services/verify/veryfyInfo.htm"
            },
            userCenter: {
                getFavorite: "http://subscription.iqiyi.com/apis/watchlater/list.action",
                getFavoriteTW: "http://subscription.iqiyi.com/apis/watchlater/zh_tw/list.action",
                mergeFavorite: "http://subscription.iqiyi.com/apis/uwl/merge",
                favorite: "http://subscription.iqiyi.com/dingyue/api/subscribe.action",
                cancelFavorite: "http://subscription.iqiyi.com/dingyue/api/unsubscribe.action",
                isFavorite: "http://subscription.iqiyi.com/dingyue/api/isSubscribed.action",
                setPcLogin: "http://l.rcd.iqiyi.com/apis/qiyirc/setrc",
                setPcUnLogin: "http://nl.rcd.iqiyi.com/apis/urc/setrc"
            },
            history: {
                get: "http://passport.m.iqiyi.com/apis/qiyirc/getrc.php",
                set: "http://passport.m.iqiyi.com/apis/qiyirc/setrc.php",
                getLogin: "http://l.rcd.iqiyi.com/apis/qiyirc/getrc.php",
                getUnlogin: "http://nl.rcd.iqiyi.com/apis/urc/getrc",
                setLogin: "http://l.rcd.iqiyi.com/apis/qiyirc/setrc.php",
                setUnlogin: "http://nl.rcd.iqiyi.com/apis/urc/setrc",
                delLogin: "http://l.rcd.iqiyi.com/apis/qiyirc/delrc.php",
                delUnlogin: "http://nl.rcd.iqiyi.com/apis/urc/delrc",
                clearLogin: "http://l.rcd.iqiyi.com/apis/qiyirc/delall.php",
                clearUnlogin: "http://nl.rcd.iqiyi.com/apis/urc/delall",
                importLogin: "http://nl.rcd.iqiyi.com/apis/urc/merge",
                importSearchLogin: "http://l.rcd.iqiyi.com/apis/qiyirc/setsrc",
                importSearchUnlogin: "http://l.rcd.iqiyi.com/apis/urc/setsrc",
                getSinglePlayRecord: "http://l.rcd.iqiyi.com/apis/qiyirc/getvplay"
            },
            updateVideo: "http://l.rcd.iqiyi.com/apis/qiyirc/getUpdateReminder",
            locateWithIP: "http://data.video.qiyi.com/v.mp4",
            rankingLike: "http://bird.sns.iqiyi.com/wechat-api/like.do",
            iplocation: "http://iplocation.geo.qiyi.com/cityjson",
            runningVote: {
                vote: "http://vote.i.iqiyi.com/eagle/runman/join_h5web_lot_vote",
                getInfo: "http://vote.i.iqiyi.com/eagle/runman/get_vote"
            },
            regLogin: "https://passport.iqiyi.com/apis/reglogin/login.action",
            cloudControl: {
                barrageComment: "http://control.i.iqiyi.com/control/content_config",
                platformStrategy: "http://m.iqiyi.com/api/cloud/code"
            },
            cloudDisk: {
                paopaoUpload: "http://upload.iqiyi.com/paopao_upload",
                feedUpload: "http://api.t.iqiyi.com/feed/upload_pic"
            },
            comment: {
                getComments: "http://api.t.iqiyi.com/qx_api/framework/all_in_one",
                getSortType: "http://api.t.iqiyi.com/qx_api/comment/query_configfile",
                submitComment: "http://api.t.iqiyi.com/qx_api/comment/publish",
                like: "http://api.t.iqiyi.com/qx_api/comment/like",
                replyComment: "http://api.t.iqiyi.com/qx_api/comment/reply",
                getReplies: "http://api.t.iqiyi.com/qx_api/comment/get_replies"
            },
            voucher: {
                takeVoucher: "http://serv.vip.iqiyi.com/vms/api/process-jsonp.action",
                getBanner: "http://info.vip.iqiyi.com/promotion/push.action"
            },
            vipNotice: "http://info.vip.iqiyi.com/promotion/push.action",
            vipActGift: "http://serv.vip.iqiyi.com/vms/gift/queryActGift.action",
            activationCode: "http://036A7038F83161DF6823775AA428F46F/pay/exp_pay.action",
            cashier: {
                getSalesTips: "http://serv.vip.iqiyi.com/pay/h5-fragment.action",
                getPrice: "http://i.vip.iqiyi.com/pay/h5/fee.action",
                exchangeCoupon: "//i.vip.iqiyi.com/client/store/h5/exchangeCoupon.action",
                getPayType: "http://i.vip.iqiyi.com/pay/h5/paytype.action",
                pay: "http://i.vip.iqiyi.com/pay/wappay.action",
                getMobilePayVD: "http://i.vip.iqiyi.com/pay/mobile-pay-vd.action",
                orderStatus: "http://i.vip.iqiyi.com/H5/payconfirm/confirmOrderStat.action",
                getPackage: "http://i.vip.iqiyi.com/checkout/queryH5CustomSuites.action",
                getVipAutoRenew: "http://serv.vip.iqiyi.com/vip/getVipAutoRenew.action",
                getCashierData: "//i.vip.iqiyi.com/client/store/h5/goldSetCheckout.action"
            },
            commonCashier: {
                cashierInfo: "//pub.m.iqiyi.com/cashier/web/info",
                checkStatus: "//pub.m.iqiyi.com/cashier/order/query",
                doPay: "//pub.m.iqiyi.com/cashier/order/redirect"
            },
            weChatJsSDK: {
                getTicket: "http://bird.sns.iqiyi.com/wechat/jsapi_ticket"
            },
            ipLookup: "http://ip.geo.iqiyi.com/cityjson",
            bubble: {
                getFeeds: "http://api.t.iqiyi.com/feed/get_feeds",
                getComments: "http://api.t.iqiyi.com/feed/get_comments",
                addOrReplyComment: "http://api.t.iqiyi.com/feed/comment",
                publish: "http://api.t.iqiyi.com/feed/publish",
                reportFeed: "http://api.t.iqiyi.com/feed/report_feed",
                agree: "http://api.t.iqiyi.com/feed/agree",
                feedDetail: "http://api.t.iqiyi.com/feed/get_feed",
                collect: "http://paopao.iqiyi.com/apis/e/starwall/collect.action",
                list: "http://paopao.iqiyi.com/apis/e/paopao/list.action",
                starlightWall: "http://pub.m.iqiyi.com/h5/bubble/starlightWall.json",
                deleteFeed: "http://api.t.iqiyi.com/feed/delete",
                deleteComment: "http://api.t.iqiyi.com/feed/delete_comment",
                eventFeedList: "http://pub.m.iqiyi.com/h5/bubble/eventInfo.json",
                listTotal: "http://pub.m.iqiyi.com/h5/bubble/totalTopList.json",
                listHistory: "http://pub.m.iqiyi.com/h5/bubble/historyTopList.json",
                listDynamic: "http://pub.m.iqiyi.com/h5/bubble/dynamicTopList.json",
                getImageText: "http://paopao.iqiyi.com/apis/e/paopao/getImageText.action",
                cellphoneAuthcode: "https://passport.iqiyi.com/apis/phone/secure_send_cellphone_authcode.action",
                saveApplyInfo: "http://paopao.iqiyi.com/apis/e/circlemaster/saveapplyinfo.action",
                submitpaper: "http://paopao.iqiyi.com/apis/e/circlemaster/submitpaper.action",
                verifyAuthCode: "http://passport.iqiyi.com/apis/phone/verify_cellphone_authcode.action",
                applymobile: "http://paopao.iqiyi.com/apis/e/circlemaster/applymobile.action",
                atoken: "http://paopao.iqiyi.com/apis/e/paopao/list.action",
                vcInfo: "http://paopao.iqiyi.com/apis/e/videoCollection/info.action",
                nativeImageText: "http://api.t.iqiyi.com/feed/getImageText",
                wallInfos: "http://paopao.iqiyi.com/apis/e/starwall/wallBaseInfos.action",
                wallIds: "http://pub.m.iqiyi.com/h5/bubble/influence.json"
            },
            emoji: {
                feedStatic: "http://emoticon.sns.iqiyi.com/jaguar-core/query_config?bussiness=feedStatic"
            },
            hotComment: "http://api.t.iqiyi.com/feed/outline",
            favorite: {
                getFavorite: "http://subscription.iqiyi.com/apis/watchlater/list.action",
                getFavoriteTW: "http://subscription.iqiyi.com/apis/watchlater/zh_tw/list.action",
                mergeFavorite: "http://subscription.iqiyi.com/apis/uwl/merge",
                favorite: "http://subscription.iqiyi.com/dingyue/api/subscribe.action",
                cancelFavorite: "http://subscription.iqiyi.com/dingyue/api/unsubscribe.action",
                isFavorite: "http://subscription.iqiyi.com/dingyue/api/isSubscribed.action"
            },
            keepalive: "http://cm.passport.iqiyi.com/apis/cmonitor/keepalive.action",
            feedback: {
                ticketUrl: "http://feedback.iqiyi.com/f/b/g.html?format=json",
                submitUrl: "http://feedback.iqiyi.com/f/b/s.html?format=json"
            }
        },
        channel: {
            DIAN_YING: 1,
            DIAN_SHI_JU: 2,
            JI_LU_PIAN: 3,
            DONG_MAN: 4,
            YIN_YUE: 5,
            ZONG_YI: 6,
            YU_LE: 7,
            GAME: 8,
            LV_YOU: 9,
            PIAN_HUA: 10,
            GONG_KAI_KE: 11,
            JIAO_YU: 12,
            SHI_SHANG: 13,
            SHI_SHANG_ZONG_YI: 14,
            SHAO_ER: 15,
            WEI_DIAN_YING: 16,
            TI_YU: 17,
            AO_YUN: 18,
            ZHI_BO: 19,
            GUANG_GAO: 20,
            SHENG_HUO: 21,
            GAO_XIAO: 22,
            QI_PA: 23,
            CAI_JING: 24,
            ZI_XUN: 25,
            QI_CHE: 26,
            YUAN_CHUANG: 27,
            TAO_MI: 91,
            LIAN_XIANG_HE_ZUO: 92,
            PIAN_MA_QI_CE_SHI: 96,
            OTHER: 97,
            CE_SHI: 99,
            VIP: 120,
            QI_YI_CHU_PIN: 111,
            PAIKE: "",
            JUNSHI: 28,
            MU_YING: 29,
            KE_JI: 30,
            TUO_KOU_XIU: 31,
            JIAN_KANG: 32
        },
        securitySrcKey: "bfc434ba2fa1457f8c42f824ff26aa7d",
        callAppVideo: {
            203173101 : {
                name: "罪恶之家第1季",
                browser: "all",
                location: "all",
                download: {
                    android: "http://mbdapp.iqiyi.com/j/ap/iqiyi_699.apk",
                    ios: "http://ota.iqiyi.com/adf/781a99e96c5540c0aaa96cb3ffe35958"
                }
            },
            204523201 : {
                name: "追爱",
                browser: "all",
                location: "all",
                download: {
                    android: "http://mbdapp.iqiyi.com/j/ap/iqiyi_1817.apk",
                    ios: "http://ota.iqiyi.com/adf/781a99e96c5540c0aaa96cb3ffe35958"
                }
            },
            204397501 : {
                name: "傻根进城",
                browser: "all",
                location: "all",
                download: {
                    android: "http://mbdapp.iqiyi.com/j/ap/iqiyi_1839.apk",
                    ios: "http://ota.iqiyi.com/adf/781a99e96c5540c0aaa96cb3ffe35958"
                }
            },
            204384801 : {
                name: "校花的贴身高手3",
                browser: "all",
                location: "all",
                download: {
                    android: "http://mbdapp.iqiyi.com/j/ap/iqiyi_1816.apk",
                    ios: "http://ota.iqiyi.com/adf/781a99e96c5540c0aaa96cb3ffe35958"
                }
            },
            204264301 : {
                name: "灰姑娘与四骑士",
                browser: "all",
                location: "all",
                download: {
                    android: "http://mbdapp.iqiyi.com/j/ap/iqiyi_1717.apk",
                    ios: "http://ota.iqiyi.com/adf/781a99e96c5540c0aaa96cb3ffe35958"
                }
            },
            204386701 : {
                name: "青春鸡尾酒",
                browser: "all",
                location: "all",
                download: {
                    android: "http://mbdapp.iqiyi.com/j/ap/iqiyi_1842.apk",
                    ios: "http://ota.iqiyi.com/adf/781a99e96c5540c0aaa96cb3ffe35958"
                }
            },
            204263601 : {
                name: "校花的贴身高手2",
                browser: "all",
                location: "all",
                download: {
                    android: "http://mbdapp.iqiyi.com/j/ap/iqiyi_1816.apk",
                    ios: "http://ota.iqiyi.com/adf/781a99e96c5540c0aaa96cb3ffe35958"
                }
            },
            202666201 : {
                name: "陷入纯情",
                browser: "all",
                location: "all",
                download: {
                    android: "http://mbdapp.iqiyi.com/j/ap/iqiyi_10200.apk",
                    ios: "http://ota.iqiyi.com/adf/781a99e96c5540c0aaa96cb3ffe35958"
                }
            },
            204313501 : {
                name: "亲爱的恩东啊",
                browser: "all",
                location: "all",
                download: {
                    android: "http://mbdapp.iqiyi.com/j/ap/iqiyi_699.apk",
                    ios: "http://ota.iqiyi.com/adf/781a99e96c5540c0aaa96cb3ffe35958"
                }
            },
            204259301 : {
                name: "没有承诺的爱",
                browser: "all",
                location: "all",
                download: {
                    android: "http://mbdapp.iqiyi.com/j/ap/iqiyi_1840.apk",
                    ios: "http://ota.iqiyi.com/adf/781a99e96c5540c0aaa96cb3ffe35958"
                }
            },
            204177901 : {
                name: "灭罪师",
                browser: "all",
                location: "all",
                download: {
                    android: "http://mbdapp.iqiyi.com/j/ap/iqiyi_1719.apk",
                    ios: "http://ota.iqiyi.com/adf/781a99e96c5540c0aaa96cb3ffe35958"
                }
            },
            204268101 : {
                name: "江湖麻辣烫之尊上驾到",
                browser: "all",
                location: "all",
                download: {
                    android: "http://mbdapp.iqiyi.com/j/ap/iqiyi_1841.apk",
                    ios: "http://ota.iqiyi.com/adf/781a99e96c5540c0aaa96cb3ffe35958"
                }
            },
            203164301 : {
                name: "老九门",
                browser: "all",
                location: "all",
                download: {
                    android: "http://mbdapp.iqiyi.com/j/ap/iqiyi_1843.apk",
                    ios: "http://ota.iqiyi.com/adf/781a99e96c5540c0aaa96cb3ffe35958"
                }
            },
            204107701 : {
                name: "命运规则",
                browser: "all",
                location: "all",
                download: {
                    android: "http://mbdapp.iqiyi.com/j/ap/iqiyi_1817.apk",
                    ios: "http://ota.iqiyi.com/adf/781a99e96c5540c0aaa96cb3ffe35958"
                }
            },
            203326001 : {
                name: "请回答1988",
                browser: "all",
                location: "all",
                download: {
                    android: "http://mbdapp.iqiyi.com/j/ap/iqiyi_1839.apk",
                    ios: "http://ota.iqiyi.com/adf/781a99e96c5540c0aaa96cb3ffe35958"
                }
            },
            204101201 : {
                name: "超能快递侠",
                browser: "all",
                location: "all",
                download: {
                    android: "http://mbdapp.iqiyi.com/j/ap/iqiyi_1841.apk",
                    ios: "http://ota.iqiyi.com/adf/781a99e96c5540c0aaa96cb3ffe35958"
                }
            },
            204067501 : {
                name: "狭路",
                browser: "all",
                location: "all",
                download: {
                    android: "http://mbdapp.iqiyi.com/j/ap/iqiyi_1719.apk",
                    ios: "http://ota.iqiyi.com/adf/781a99e96c5540c0aaa96cb3ffe35958"
                }
            },
            204064201 : {
                name: "余罪第二季",
                browser: "all",
                location: "all",
                download: {
                    android: "http://mbdapp.iqiyi.com/j/ap/iqiyi_1717.apk",
                    ios: "http://ota.iqiyi.com/adf/781a99e96c5540c0aaa96cb3ffe35958"
                }
            },
            203556701 : {
                name: "陈白露",
                browser: "all",
                location: "all",
                download: {
                    android: "http://mbdapp.iqiyi.com/j/ap/iqiyi_1842.apk",
                    ios: "http://ota.iqiyi.com/adf/781a99e96c5540c0aaa96cb3ffe35958"
                }
            },
            203966401 : {
                name: "余罪第1季",
                browser: "all",
                location: "all",
                download: {
                    android: "http://mbdapp.iqiyi.com/j/ap/iqiyi_1717.apk ",
                    ios: "http://ota.iqiyi.com/adf/781a99e96c5540c0aaa96cb3ffe35958"
                }
            },
            203853401 : {
                name: "废柴兄弟4",
                browser: "all",
                location: "all",
                download: {
                    android: "http://mbdapp.iqiyi.com/j/ap/iqiyi_1839.apk",
                    ios: "http://ota.iqiyi.com/adf/781a99e96c5540c0aaa96cb3ffe35958"
                }
            },
            203897301 : {
                name: "乾隆秘史",
                browser: "all",
                location: "all",
                download: {
                    android: "http://mbdapp.iqiyi.com/j/ap/iqiyi_1719.apk",
                    ios: "http://ota.iqiyi.com/adf/781a99e96c5540c0aaa96cb3ffe35958"
                }
            },
            203278201 : {
                name: "最好的我们",
                browser: "all",
                location: "all",
                download: {
                    android: "http://mbdapp.iqiyi.com/j/ap/iqiyi_1816.apk",
                    ios: "http://ota.iqiyi.com/adf/781a99e96c5540c0aaa96cb3ffe35958"
                }
            },
            203636501 : {
                name: "穿越谜团",
                browser: "all",
                location: "all",
                download: {
                    android: "http://mbdapp.iqiyi.com/j/ap/iqiyi_1842.apk",
                    ios: "http://ota.iqiyi.com/adf/781a99e96c5540c0aaa96cb3ffe35958"
                }
            },
            202938201 : {
                name: "太阳的后裔",
                browser: "all",
                location: "all",
                download: {
                    android: "http://mbdapp.iqiyi.com/j/ap/iqiyi_10201.apk",
                    ios: "http://ota.iqiyi.com/adf/781a99e96c5540c0aaa96cb3ffe35958"
                },
                special: !0
            },
            203325501 : {
                name: "都市妖奇谈",
                browser: "all",
                location: "all",
                download: {
                    android: "http://mbdapp.iqiyi.com/j/ap/iqiyi_1719.apk",
                    ios: "http://ota.iqiyi.com/adf/781a99e96c5540c0aaa96cb3ffe35958"
                }
            },
            202437601 : {
                name: "灵魂摆渡2",
                browser: "all",
                location: "all",
                download: {
                    android: "http://mbdapp.iqiyi.com/j/ap/iqiyi_1842.apk",
                    ios: "http://ota.iqiyi.com/adf/781a99e96c5540c0aaa96cb3ffe35958"
                }
            },
            202112301 : {
                name: "新济公活佛",
                browser: "all",
                location: "all",
                download: {
                    android: "http://mbdapp.iqiyi.com/j/ap/iqiyi_10201.apk",
                    ios: "http://ota.iqiyi.com/adf/781a99e96c5540c0aaa96cb3ffe35958"
                }
            },
            202112401 : {
                name: "新济公活佛未删减版",
                browser: "all",
                location: "all",
                download: {
                    android: "http://mbdapp.iqiyi.com/j/ap/iqiyi_10201.apk",
                    ios: "http://ota.iqiyi.com/adf/781a99e96c5540c0aaa96cb3ffe35958"
                }
            },
            203114101 : {
                name: "新济公活佛下部",
                browser: "all",
                location: "all",
                download: {
                    android: "http://mbdapp.iqiyi.com/j/ap/iqiyi_10201.apk",
                    ios: "http://ota.iqiyi.com/adf/781a99e96c5540c0aaa96cb3ffe35958"
                }
            },
            203114801 : {
                name: "新济公活佛下部未删减版",
                browser: "all",
                location: "all",
                download: {
                    android: "http://mbdapp.iqiyi.com/j/ap/iqiyi_10201.apk",
                    ios: "http://ota.iqiyi.com/adf/781a99e96c5540c0aaa96cb3ffe35958"
                }
            },
            203062601 : {
                name: "蜀山战纪第2季",
                browser: "all",
                location: "all",
                download: {
                    android: "http://mbdapp.iqiyi.com/j/ap/iqiyi_1841.apk",
                    ios: "http://ota.iqiyi.com/adf/781a99e96c5540c0aaa96cb3ffe35958"
                }
            },
            202550601 : {
                name: "蜀山战纪第1季",
                browser: "all",
                location: "all",
                download: {
                    android: "http://mbdapp.iqiyi.com/j/ap/iqiyi_1841.apk",
                    ios: "http://ota.iqiyi.com/adf/781a99e96c5540c0aaa96cb3ffe35958"
                }
            },
            203166401 : {
                name: "蜀山战纪第3季",
                browser: "all",
                location: "all",
                download: {
                    android: "http://mbdapp.iqiyi.com/j/ap/iqiyi_1841.apk",
                    ios: "http://ota.iqiyi.com/adf/781a99e96c5540c0aaa96cb3ffe35958"
                }
            },
            203166501 : {
                name: "蜀山战纪第4季",
                browser: "all",
                location: "all",
                download: {
                    android: "http://mbdapp.iqiyi.com/j/ap/iqiyi_1841.apk",
                    ios: "http://ota.iqiyi.com/adf/781a99e96c5540c0aaa96cb3ffe35958"
                }
            },
            203166601 : {
                name: "蜀山战纪第5季",
                browser: "all",
                location: "all",
                download: {
                    android: "http://mbdapp.iqiyi.com/j/ap/iqiyi_1841.apk",
                    ios: "http://ota.iqiyi.com/adf/781a99e96c5540c0aaa96cb3ffe35958"
                }
            },
            203152901 : {
                name: "替身",
                browser: "all",
                location: "all",
                download: {
                    android: "http://mbdapp.iqiyi.com/j/ap/iqiyi_1719.apk",
                    ios: "http://ota.iqiyi.com/adf/781a99e96c5540c0aaa96cb3ffe35958"
                }
            },
            202467501 : {
                name: "心理罪",
                browser: "all",
                location: "all",
                download: {
                    android: "http://mbdapp.iqiyi.com/j/ap/iqiyi_1717.apk",
                    ios: "http://ota.iqiyi.com/adf/781a99e96c5540c0aaa96cb3ffe35958"
                }
            },
            202635601 : {
                name: "校花的贴身高手",
                browser: "all",
                location: "all",
                download: {
                    android: "http://mbdapp.iqiyi.com/j/ap/iqiyi_1717.apk",
                    ios: "http://ota.iqiyi.com/adf/781a99e96c5540c0aaa96cb3ffe35958"
                }
            },
            259247 : {
                name: "非常宅",
                browser: "all",
                location: "all",
                download: {
                    android: "http://mbdapp.iqiyi.com/j/ap/iqiyi_1717.apk",
                    ios: "http://ota.iqiyi.com/adf/781a99e96c5540c0aaa96cb3ffe35958"
                }
            },
            115924701 : {
                name: "非常宅",
                browser: "all",
                location: "all",
                download: {
                    android: "http://mbdapp.iqiyi.com/j/ap/iqiyi_1717.apk",
                    ios: "http://ota.iqiyi.com/adf/781a99e96c5540c0aaa96cb3ffe35958"
                }
            },
            202536601 : {
                name: "错配搭档第1季",
                browser: "all",
                location: "all",
                download: {
                    android: "http://mbdapp.iqiyi.com/j/ap/iqiyi_1717.apk",
                    ios: "http://ota.iqiyi.com/adf/781a99e96c5540c0aaa96cb3ffe35958"
                }
            },
            202989601 : {
                name: "活着再见",
                browser: "all",
                location: "all",
                download: {
                    android: "http://mbdapp.iqiyi.com/j/ap/iqiyi_1719.apk",
                    ios: "http://ota.iqiyi.com/adf/781a99e96c5540c0aaa96cb3ffe35958"
                }
            },
            203034501 : {
                name: "美梦成真",
                browser: "all",
                location: "all",
                download: {
                    android: "http://mbdapp.iqiyi.com/j/ap/iqiyi_1816.apk",
                    ios: "http://ota.iqiyi.com/adf/781a99e96c5540c0aaa96cb3ffe35958"
                }
            },
            202842701 : {
                name: "废柴兄弟3",
                browser: "all",
                location: "all",
                download: {
                    android: "http://mbdapp.iqiyi.com/j/ap/iqiyi_1717.apk",
                    ios: "http://ota.iqiyi.com/adf/781a99e96c5540c0aaa96cb3ffe35958"
                }
            },
            203325801 : {
                name: "哦我的鬼神大人",
                browser: "all",
                location: "all",
                download: {
                    android: "http://mbdapp.iqiyi.com/j/ap/iqiyi_1816.apk",
                    ios: "http://ota.iqiyi.com/adf/781a99e96c5540c0aaa96cb3ffe35958"
                }
            },
            203276301 : {
                name: "老师晚上好",
                browser: "all",
                location: "all",
                download: {
                    android: "http://mbdapp.iqiyi.com/j/ap/iqiyi_1816.apk",
                    ios: "http://ota.iqiyi.com/adf/781a99e96c5540c0aaa96cb3ffe35958"
                }
            },
            203440801 : {
                name: "百变五侠之我是大明星",
                browser: "all",
                location: "all",
                download: {
                    android: "http://mbdapp.iqiyi.com/j/ap/iqiyi_1842.apk",
                    ios: "http://ota.iqiyi.com/adf/781a99e96c5540c0aaa96cb3ffe35958"
                }
            },
            203589101 : {
                name: "灵域2",
                browser: "all",
                location: "all",
                download: {
                    android: "http://mbdapp.iqiyi.com/j/ap/iqiyi_1717.apk",
                    ios: "http://ota.iqiyi.com/adf/781a99e96c5540c0aaa96cb3ffe35958"
                }
            },
            203564601 : {
                name: "龙心战纪",
                browser: "all",
                location: "all",
                download: {
                    android: "http://mbdapp.iqiyi.com/j/ap/iqiyi_1840.apk ",
                    ios: "http://ota.iqiyi.com/adf/781a99e96c5540c0aaa96cb3ffe35958"
                }
            },
            203709401 : {
                name: "假如我有超能力",
                browser: "all",
                location: "all",
                download: {
                    android: "http://mbdapp.iqiyi.com/j/ap/iqiyi_1839.apk",
                    ios: "http://ota.iqiyi.com/adf/781a99e96c5540c0aaa96cb3ffe35958"
                }
            },
            202203201 : {
                name: "盗墓笔记",
                browser: "all",
                location: "all",
                download: {
                    android: "http://mbdapp.iqiyi.com/j/ap/iqiyi_1891.apk",
                    ios: "http://ota.iqiyi.com/adf/781a99e96c5540c0aaa96cb3ffe35958"
                }
            },
            202321601 : {
                name: "花千骨",
                browser: "all",
                location: "all",
                download: {
                    android: "http://mbdapp.iqiyi.com/j/ap/iqiyi_1838.apk",
                    ios: "http://ota.iqiyi.com/adf/781a99e96c5540c0aaa96cb3ffe35958"
                }
            },
            202328401 : {
                name: "加油吧实习生",
                browser: "all",
                location: "all",
                download: {
                    android: "http://mbdapp.iqiyi.com/j/ap/iqiyi_699.apk",
                    ios: "http://ota.iqiyi.com/adf/781a99e96c5540c0aaa96cb3ffe35958"
                }
            },
            202437701 : {
                name: "克拉恋人",
                browser: "all",
                location: "all",
                download: {
                    android: "http://mbdapp.iqiyi.com/j/ap/iqiyi_1843.apk",
                    ios: "http://ota.iqiyi.com/adf/781a99e96c5540c0aaa96cb3ffe35958"
                }
            },
            384616e3: {
                name: "我去上学啦",
                browser: "all",
                location: "all",
                download: {
                    android: "http://mbdapp.iqiyi.com/j/ap/iqiyi_1842.apk",
                    ios: "http://ota.iqiyi.com/adf/781a99e96c5540c0aaa96cb3ffe35958"
                }
            },
            202945101 : {
                name: "多情江山",
                browser: "all",
                location: "all",
                download: {
                    android: "http://mbdapp.iqiyi.com/j/ap/iqiyi_10201.apk",
                    ios: "http://ota.iqiyi.com/adf/781a99e96c5540c0aaa96cb3ffe35958"
                }
            },
            202121101 : {
                name: "琅琊榜",
                browser: "all",
                location: "all",
                download: {
                    android: "http://mbdapp.iqiyi.com/j/ap/iqiyi_10200.apk",
                    ios: "http://ota.iqiyi.com/adf/781a99e96c5540c0aaa96cb3ffe35958"
                }
            },
            203067201 : {
                name: "大秧歌",
                browser: "all",
                location: "all",
                download: {
                    android: "http://mbdapp.iqiyi.com/j/ap/iqiyi_1817.apk",
                    ios: "http://ota.iqiyi.com/adf/781a99e96c5540c0aaa96cb3ffe35958"
                }
            },
            203067101 : {
                name: "北上广不相信眼泪",
                browser: "all",
                location: "all",
                download: {
                    android: "http://mbdapp.iqiyi.com/j/ap/iqiyi_1719.apk",
                    ios: "http://ota.iqiyi.com/adf/781a99e96c5540c0aaa96cb3ffe35958"
                }
            },
            203386201 : {
                name: "少帅",
                browser: "all",
                location: "all",
                download: {
                    android: "http://mbdapp.iqiyi.com/j/ap/iqiyi_1843.apk",
                    ios: "http://ota.iqiyi.com/adf/781a99e96c5540c0aaa96cb3ffe35958"
                }
            },
            202744901 : {
                name: "奇葩说2",
                browser: "all",
                location: "all",
                download: {
                    android: "http://mbdapp.iqiyi.com/j/ap/iqiyi_1840.apk",
                    ios: "http://ota.iqiyi.com/adf/781a99e96c5540c0aaa96cb3ffe35958"
                }
            },
            204346701 : {
                name: "天机迷",
                browser: "all",
                location: "all",
                download: {
                    android: "http://mbdapp.iqiyi.com/j/ap/iqiyi_1841.apk",
                    ios: "http://ota.iqiyi.com/adf/781a99e96c5540c0aaa96cb3ffe35958"
                }
            },
            204147201 : {
                name: "警花与警犬",
                browser: "all",
                location: "all",
                download: {
                    android: "http://mbdapp.iqiyi.com/j/ap/iqiyi_1845.apk",
                    ios: "http://ota.iqiyi.com/adf/781a99e96c5540c0aaa96cb3ffe35958"
                }
            },
            202548801 : {
                name: "秀丽江山之长歌行",
                browser: "all",
                location: "all",
                download: {
                    android: "http://mbdapp.iqiyi.com/j/ap/iqiyi_1845.apk",
                    ios: "http://ota.iqiyi.com/adf/781a99e96c5540c0aaa96cb3ffe35958"
                }
            },
            204185301 : {
                name: "神犬小七第二季",
                browser: "all",
                location: "all",
                download: {
                    android: "http://mbdapp.iqiyi.com/j/ap/iqiyi_1845.apk",
                    ios: "http://ota.iqiyi.com/adf/781a99e96c5540c0aaa96cb3ffe35958"
                }
            },
            204284801 : {
                name: "多少爱可以重来",
                browser: "all",
                location: "all",
                download: {
                    android: "http://mbdapp.iqiyi.com/j/ap/iqiyi_1845.apk",
                    ios: "http://ota.iqiyi.com/adf/781a99e96c5540c0aaa96cb3ffe35958"
                }
            },
            203288701 : {
                name: "幻城",
                browser: "all",
                location: "all",
                download: {
                    android: "http://mbdapp.iqiyi.com/j/ap/iqiyi_1845.apk",
                    ios: "http://ota.iqiyi.com/adf/781a99e96c5540c0aaa96cb3ffe35958"
                }
            },
            204274901 : {
                name: "硬骨头",
                browser: "all",
                location: "all",
                download: {
                    android: "http://mbdapp.iqiyi.com/j/ap/iqiyi_1845.apk",
                    ios: "http://ota.iqiyi.com/adf/781a99e96c5540c0aaa96cb3ffe35958"
                }
            },
            203316801 : {
                name: "好先生",
                browser: "all",
                location: "all",
                download: {
                    android: "http://mbdapp.iqiyi.com/j/ap/iqiyi_1845.apk",
                    ios: "http://ota.iqiyi.com/adf/781a99e96c5540c0aaa96cb3ffe35958"
                }
            },
            151646701 : {
                name: "爱情公寓4",
                browser: "all",
                location: "all",
                download: {
                    android: "http://mbdapp.iqiyi.com/j/ap/iqiyi_1845.apk",
                    ios: "http://ota.iqiyi.com/adf/781a99e96c5540c0aaa96cb3ffe35958"
                }
            },
            204042201 : {
                name: "跨界歌王",
                browser: "all",
                location: "all",
                download: {
                    android: "http://mbdapp.iqiyi.com/j/ap/iqiyi_1845.apk",
                    ios: "http://ota.iqiyi.com/adf/781a99e96c5540c0aaa96cb3ffe35958"
                }
            },
            203902301 : {
                name: "我去上学啦第2季",
                browser: "all",
                location: "all",
                download: {
                    android: "http://mbdapp.iqiyi.com/j/ap/iqiyi_1845.apk",
                    ios: "http://ota.iqiyi.com/adf/781a99e96c5540c0aaa96cb3ffe35958"
                }
            },
            "default": {
                name: "default",
                browser: "all",
                location: "all",
                download: {
                    android: "http://mbdapp.iqiyi.com/j/ap/iqiyi_1845.apk ",
                    ios: "http://ota.iqiyi.com/adf/781a99e96c5540c0aaa96cb3ffe35958"
                }
            }
        },
        specialFlowTipVideo: {
            202938201 : {
                name: "太阳的后裔",
                browser: "all",
                location: "all",
                download: {
                    android: "http://mbdapp.iqiyi.com/j/ap/iqiyi_10201.apk",
                    ios: "http://ota.iqiyi.com/adf/781a99e96c5540c0aaa96cb3ffe35958"
                }
            }
        },
        flowTipVideo: {
            seriesList: {},
            active_sid: {}
        },
        pidPackage: {
            HUANG_JIN: "a0226bd958843452",
            BAI_YIN: "a232698bebb30ebd",
            BAI_JIN: "adb3376b039b970b",
            a0226bd958843452: "HUANG_JIN",
            a232698bebb30ebd: "BAI_YIN",
            adb3376b039b970b: "BAI_JIN"
        },
        playListOrder: {
            albumList: 1,
            sourceList: 1,
            playList: 1,
            wonderful: 2,
            focus: 2,
            videoAround: 3,
            soundtrack: 4,
            series: 5,
            recommend: 6
        }
    });
    c.exports = d
});
define("../../common/service/utils/util", ["../useragent/detect"],
function(a, b, c) {
    var d = a("../useragent/detect");
    c.exports = APP.createService({
        uuidTick: 0,
        isInPlayPage: function() {
            return ["play", "splay", "playlist"].indexOf((Q.PageInfo.page || "").toLowerCase()) === -1 ? !1 : !0
        },
        domain: function() {
            return {
                pps: /pps.tv/i.test(document.domain),
                iqiyi: /qiyi.com/i.test(document.domain)
            }
        },
        getMsrcCode: function() {
            return $.url.getQueryValue(location.href, "vfm") || $.url.getQueryValue(location.href, "msrc") || $.cookie.get("QC015") || ""
        },
        jsonToQuery: function(a) {
            var b = [];
            for (var c in a) b.push(c + "=" + encodeURIComponent(a[c]) || "");
            return b.join("&")
        },
        formatTime: function(a) {
            a = +a;
            var b = a / 3600 >> 0,
            c = a % 3600 / 60 >> 0,
            d = a % 3600 % 60,
            e = b ? b.toString().length === 1 ? "0" + b + ":": b + ":": "";
            return e += c ? c.toString().length === 1 ? "0" + c + ":": c + ":": "00:",
            e += d.toString().length === 1 ? "0" + d: d,
            e
        },
        getVfm: function() {
            var a = $.url.getQueryValue(location.href, "vfm");
            return a ? $.cookie.set("QC015", a, {
                path: "/",
                domain: "iqiyi.com"
            }) : a = $.cookie.get("QC015"),
            a || ""
        },
        getMsrc: function() {
            var a = $.url.getQueryValue(location.href, "msrc");
            return a ? $.cookie.set("QC015", a) : a = $.cookie.get("QC015"),
            a || ""
        },
        getVfrm: function() {
            return $.url.getQueryValue(location.href, "vfrm") || ""
        },
        getRefer: function() {
            var a = document.referrer;
            return a
        },
        getUuid: function() {
            return Zepto.crypto.md5(window.navigator.userAgent + document.cookie + Math.random() + (new Date).getTime() * this.uuidTick++)
        },
        getCooperId: function() {
            return $.url.getQueryValue(location.href, "coop", !0)
        },
        getOpenid: function() {
            return $.url.getQueryValue(location.href, "appKey", !0)
        },
        formatNum: function(a, b) {
            return a > 1e4 ? a < 1e8 ? (a / 1e4).toFixed(b) + "萬": (a / 1e8).toFixed(b) + "億": APP.$.string.divideNumber(a)
        },
        parseUrl: function(a) {
            var b = {
                protocol: /([^\/]*:?)\/\/(.*)/i,
                host: /(^[^\:\/]+)((?:\/|:|$)?.*)/,
                port: /\:?([^\/]*)(\/?.*)/,
                pathname: /([^\?#]+)(\??[^#]*)(#?.*)/
            },
            c,
            d = {};
            d.href = a;
            for (regName in b) c = b[regName].exec(a),
            c || (c = ["", "", a]),
            d[regName] = c[1],
            a = c[2],
            a === "" && (a = "/"),
            regName === "pathname" && (d.pathname = c[1], d.search = c[2], d.hash = c[3]);
            return d
        },
        getDate: function(a) {
            return typeof a == "string" && a.length == 8 ? new Date(a.slice(0, 4) + "-" + a.slice(4, 6) + "-" + a.slice(6, 8)) : typeof a == "number" && a > 19000101 && a < 29991231 ? this.getDate(a + "") : new Date(a)
        },
        videoFormat: function() {
            var a = navigator.userAgent;
            return $.os.ios ? "m3u8": d.qq && !/mqqbrowser\/([0-4]|5\.[01])/.test(a) && /android [^0-3]/.test(a) ? "m3u8": "mp4"
        },
        padNum: function(b, c) {
            var d = b.toString().length;
            while (d < c) b = "0" + b,
            d++;
            return b
        },
        formatDate: function(a) {
            var b = +(new Date) / 1e3,
            a = +a,
            c = b - a;
            if (c < 60) return "刚刚";
            if (c < 3600) return [c / 60 >> 0, "分钟前"].join("");
            if (c < 86400) return [c / 3600 >> 0, "小时前"].join("");
            if (c < 2592e3) return [c / 86400 >> 0, "天前"].join("");
            var d = new Date(a * 1e3),
            e = d.getMonth() + 1,
            f = d.getDate();
            return e = e < 10 ? "0" + e: e,
            f = f < 10 ? "0" + f: f,
            [d.getFullYear(), e, f].join("-")
        },
        formatCount: function(a, b) {
            return a > 1e4 ? a < 1e8 ? (a / 1e4).toFixed(b) + "万": (a / 1e8).toFixed(b) + "亿": $.string.divideNumber(a)
        },
        scrollTop: function(a, b) {
            c && clearTimeout(c);
            var c = setTimeout(function() {
                window.scrollTo(a, b)
            },
            200)
        },
        getDateDiff: function(a, b) {
            function c(a) {
                return {
                    y: a.getFullYear(),
                    m: a.getMonth(),
                    d: a.getDate()
                }
            }
            a instanceof Date || (a = new Date( + a)),
            b instanceof Date || (b = new Date( + b));
            var d = c(a),
            e = c(b),
            f = new Date(d.y, d.m, d.d),
            g = new Date(e.y, e.m, e.d),
            h = Math.abs(g - f) / 864e5 >> 0;
            return h
        },
        paopaoFormatCount: function(a, b) {
            return a > 1e5 && (a = (a / 1e5).toFixed(b) + "万"),
            a
        },
        getTmtsVf: function(a, b, c) {
            var d = window.cmd5xtmts ? window.cmd5xtmts() : {},
            e = "02020031010000000000";
            $.extend(c || {},
            d, {
                src: e
            });
            var f = "/jp/tmts/" + a + "/" + b + "/?" + $.param(c) + "&callback=tmtsCallback";
            return c.vf = window.cmd5x ? window.cmd5x(f) : "",
            c
        }
    })
});
define("../../common/service/useragent/detect", [],
function(a, b, c) {
    var d = navigator.userAgent,
    e = {
        qq: /qqbrowser/i.test(d),
        uc: /ucbrowser|ucweb/i.test(d),
        weixin: /MicroMessenger/i.test(d),
        baidubox: /baiduboxapp/i.test(d),
        baidubrowser: /baidubrowser/i.test(d),
        baiduvideo: /videoandroid/i.test(d),
        miuibrowser: /miuibrowser/i.test(d),
        miuivideo: /miuivideo/i.test(d),
        oppo: /oppobrowser/i.test(d),
        wk: /wkbroswer/i.test(d),
        le: /lebrowser/i.test(d),
        sogou: /sogoumobilebrowser/i.test(d),
        b360: /360browser/i.test(d),
        hao123: /hao123/i.test(d),
        vivo: /vivo/i.test(d),
        qq_gt_5_2: !/mqqbrowser\/([0-4]|5\.[01])/.test(d),
        android_gt_4: /android [^0-3]/.test(d),
        huawei_c8812: /HW-HUAWEI_C8812/i.test(d),
        weibo: /weibo/i.test(d),
        qqSns: /mobile\smqqbrowser/i.test(d),
        qqZone: /qzone/i.test(d),
        aliapp: /aliapp/i.test(d)
    };
    e.androidChrome = $.browser.chrome && /android/i.test(d) && !e.qq && !e.uc && !e.weixin && !e.baidubrowser && !e.baiduvideo && !e.miuibrowser && !e.miuivideo && !e.oppo && !e.wk && !e.le && !e.sogou && !e.b360 && !e.hao123 && !e.vivo,
    e.iosSafari = $.os.ios && $.browser.safari && !e.qq && !e.baidubox && !e.uc && !e.weixin && !e.baidubrowser && !e.baiduvideo && !e.sogou && !e.b360,
    e.thirdPartSNS = e.weibo || e.qqSns || e.weixin || e.qqZone,
    $.extend($.browser, e),
    c.exports = e
});
define("../../common/service/session/session", [],
function(a, b, c) {
    function f() {
        try {
            return window.sessionStorage.removeItem("_Q_test_"),
            window.sessionStorage.setItem("_Q_test_", 1),
            window.sessionStorage.removeItem("_Q_test_"),
            window.sessionStorage
        } catch(a) {
            console.error("sessionStorage error: " + JSON.stringify(a))
        }
        return e
    }
    var d = {},
    e = {
        getItem: function(a) {
            return d[a]
        },
        setItem: function(a, b) {
            d[a] = b
        },
        removeItem: function(a) {
            delete d[a]
        }
    },
    g = f();
    c.exports = APP.createService({
        read: function(a) {
            try {
                return g.getItem(a)
            } catch(b) {
                console.error("sessionStorage read error: " + JSON.stringify(b))
            }
        },
        write: function(a, b) {
            try {
                g.removeItem(a),
                g.setItem(a, b)
            } catch(c) {
                console.error("sessionStorage write error: " + JSON.stringify(c))
            }
        },
        remove: function(a) {
            try {
                g.removeItem(a)
            } catch(b) {
                console.error("sessionStorage remove error: " + JSON.stringify(b))
            }
        }
    })
});
define("../../common/behavior/onScroll2Bottom/onScroll2Bottom", [],
function(a, b, c) {
    var d = {},
    e = !1,
    f = function() {
        var a = this;
        if (e) return;
        var b = this.rootElement,
        c = b.offset().top + b.height(),
        d = this._scrollPadding | 0 === this._scrollPadding ? this._scrollPadding: 0,
        f = c + d;
        f <= window.scrollY + $(window).height() && f > $(window).height() && (e = !0, APP.postMessage("SCROLL2BOTTOM_TRIGGER"))
    },
    g = {
        time: 200,
        timer: null,
        handleEvent: function(a) {
            clearTimeout(this.timer),
            this.timer = setTimeout(function() {
                d._scroll2Bottom()
            },
            this.time)
        }
    };
    window.addEventListener("scroll", g, !1),
    APP.createBehavior("common.behavior.onScroll2Bottom.onScroll2Bottom", {
        init: function() {
            d._scroll2Bottom = f.bind(this)
        },
        message: ["SCROLL2BOTTOM_COMPELETE", "SCROLL2BOTTOM_DESTROY"],
        onMessage: function(a, b) {
            a === "SCROLL2BOTTOM_COMPELETE" ? e = !1 : a === "SCROLL2BOTTOM_DESTROY" && window.removeEventListener("scroll", g, !1)
        }
    })
});
define("../../common/behavior/horizontalScroll/horizontalScroll", ["../../service/iscroll/iscroll-probe-compress"],
function(a, b, c) {
    var d = a("../../service/iscroll/iscroll-probe-compress"),
    e = {};
    APP.createBehavior("common.behavior.horizontalScroll.horizontalScroll", {
        init: function() {
            var a = this,
            b = this.id,
            c = this.nodes.horizontalScroll || this.rootElement,
            f = e[b] = new d(c[0], {
                scrollX: !0,
                scrollY: !1,
                click: !0,
                eventPassthrough: !0,
                probeType: 3
            });
            f.on("scrollEnd",
            function() {
                APP.postMessage("HORIZONTALSCROLL", {
                    id: b,
                    x: this.x
                })
            })
        },
        message: ["HORIZONTALSCROLL_TO_ELEMENT", "HORIZONTALSCROLL_TO", "HORIZONTALSCROLL_BY", "HORIZONTALSCROLL_REFRESH", "HORIZONTALSCROLL_BIND_EVENT"],
        onMessage: function(a, b) {
            var c = e[b.id];
            if (!c) return;
            switch (a) {
            case "HORIZONTALSCROLL_REFRESH":
                c.refresh();
                break;
            case "HORIZONTALSCROLL_TO_ELEMENT":
                c.scrollToElement(b.element);
                break;
            case "HORIZONTALSCROLL_TO":
                c.scrollTo(b.x, 0);
                break;
            case "HORIZONTALSCROLL_BY":
                c.scrollBy(b.x, 0);
                break;
            case "HORIZONTALSCROLL_BIND_EVENT":
                var d = APP.getComponentInstance(b.id);
                c.on(b.type,
                function() {
                    b.callback.call(d, this)
                });
                break;
            default:
            }
        }
    })
});
define("../../common/service/iscroll/iscroll-probe-compress", [],
function(a, b, c) {
    function f(a, b) {
        this.wrapper = typeof a == "string" ? document.querySelector(a) : a,
        this.scroller = this.wrapper.children[0],
        this.scrollerStyle = this.scroller.style,
        this.options = {
            resizeScrollbars: !0,
            mouseWheelSpeed: 20,
            snapThreshold: .334,
            disablePointer: !e.hasPointer,
            disableTouch: e.hasPointer || !e.hasTouch,
            disableMouse: e.hasPointer || e.hasTouch,
            startX: 0,
            startY: 0,
            scrollY: !0,
            directionLockThreshold: 5,
            momentum: !0,
            bounce: !0,
            bounceTime: 600,
            bounceEasing: "",
            preventDefault: !0,
            preventDefaultException: {
                tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT)$/
            },
            HWCompositing: !0,
            useTransition: !0,
            useTransform: !0,
            bindToWrapper: typeof window.onmousedown == "undefined"
        };
        for (var c in b) this.options[c] = b[c];
        this.translateZ = this.options.HWCompositing && e.hasPerspective ? " translateZ(0)": "",
        this.options.useTransition = e.hasTransition && this.options.useTransition,
        this.options.useTransform = e.hasTransform && this.options.useTransform,
        this.options.eventPassthrough = this.options.eventPassthrough === !0 ? "vertical": this.options.eventPassthrough,
        this.options.preventDefault = !this.options.eventPassthrough && this.options.preventDefault,
        this.options.scrollY = this.options.eventPassthrough == "vertical" ? !1 : this.options.scrollY,
        this.options.scrollX = this.options.eventPassthrough == "horizontal" ? !1 : this.options.scrollX,
        this.options.freeScroll = this.options.freeScroll && !this.options.eventPassthrough,
        this.options.directionLockThreshold = this.options.eventPassthrough ? 0 : this.options.directionLockThreshold,
        this.options.bounceEasing = typeof this.options.bounceEasing == "string" ? e.ease[this.options.bounceEasing] || e.ease.circular: this.options.bounceEasing,
        this.options.resizePolling = this.options.resizePolling === undefined ? 60 : this.options.resizePolling,
        this.options.tap === !0 && (this.options.tap = "tap"),
        !this.options.useTransition && !this.options.useTransform && (/relative|absolute/i.test(this.scrollerStyle.position) || (this.scrollerStyle.position = "relative")),
        this.options.shrinkScrollbars == "scale" && (this.options.useTransition = !1),
        this.options.invertWheelDirection = this.options.invertWheelDirection ? -1 : 1,
        this.options.probeType == 3 && (this.options.useTransition = !1),
        this.x = 0,
        this.y = 0,
        this.directionX = 0,
        this.directionY = 0,
        this._events = {},
        this._init(),
        this.refresh(),
        this.scrollTo(this.options.startX, this.options.startY),
        this.enable()
    }
    function g(a, b, c) {
        var d = document.createElement("div"),
        e = document.createElement("div");
        return c === !0 && (d.style.cssText = "position:absolute;z-index:9999", e.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px"),
        e.className = "iScrollIndicator",
        a == "h" ? (c === !0 && (d.style.cssText += ";height:7px;left:2px;right:2px;bottom:0", e.style.height = "100%"), d.className = "iScrollHorizontalScrollbar") : (c === !0 && (d.style.cssText += ";width:7px;bottom:2px;top:2px;right:1px", e.style.width = "100%"), d.className = "iScrollVerticalScrollbar"),
        d.style.cssText += ";overflow:hidden",
        b || (d.style.pointerEvents = "none"),
        d.appendChild(e),
        d
    }
    function h(a, b) {
        this.wrapper = typeof b.el == "string" ? document.querySelector(b.el) : b.el,
        this.wrapperStyle = this.wrapper.style,
        this.indicator = this.wrapper.children[0],
        this.indicatorStyle = this.indicator.style,
        this.scroller = a,
        this.options = {
            listenX: !0,
            listenY: !0,
            interactive: !1,
            resize: !0,
            defaultScrollbars: !1,
            shrink: !1,
            fade: !1,
            speedRatioX: 0,
            speedRatioY: 0
        };
        for (var c in b) this.options[c] = b[c];
        this.sizeRatioX = 1,
        this.sizeRatioY = 1,
        this.maxPosX = 0,
        this.maxPosY = 0,
        this.options.interactive && (this.options.disableTouch || (e.addEvent(this.indicator, "touchstart", this), e.addEvent(window, "touchend", this)), this.options.disablePointer || (e.addEvent(this.indicator, e.prefixPointerEvent("pointerdown"), this), e.addEvent(window, e.prefixPointerEvent("pointerup"), this)), this.options.disableMouse || (e.addEvent(this.indicator, "mousedown", this), e.addEvent(window, "mouseup", this)));
        if (this.options.fade) {
            this.wrapperStyle[e.style.transform] = this.scroller.translateZ;
            var f = e.style.transitionDuration;
            if (!f) return;
            this.wrapperStyle[f] = e.isBadAndroid ? "0.0001ms": "0ms";
            var g = this;
            e.isBadAndroid && d(function() {
                g.wrapperStyle[f] === "0.0001ms" && (g.wrapperStyle[f] = "0s")
            }),
            this.wrapperStyle.opacity = "0"
        }
    }
    var d = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
    function(a) {
        window.setTimeout(a, 1e3 / 60)
    },
    e = function() {
        function d(a) {
            return c === !1 ? !1 : c === "" ? a: c + a.charAt(0).toUpperCase() + a.substr(1)
        }
        var a = {},
        b = document.createElement("div").style,
        c = function() {
            var a = ["t", "webkitT", "MozT", "msT", "OT"],
            c,
            d = 0,
            e = a.length;
            for (; d < e; d++) {
                c = a[d] + "ransform";
                if (c in b) return a[d].substr(0, a[d].length - 1)
            }
            return ! 1
        } ();
        a.getTime = Date.now ||
        function() {
            return (new Date).getTime()
        },
        a.extend = function(a, b) {
            for (var c in b) a[c] = b[c]
        },
        a.addEvent = function(a, b, c, d) {
            a.addEventListener(b, c, !!d)
        },
        a.removeEvent = function(a, b, c, d) {
            a.removeEventListener(b, c, !!d)
        },
        a.prefixPointerEvent = function(a) {
            return window.MSPointerEvent ? "MSPointer" + a.charAt(7).toUpperCase() + a.substr(8) : a
        },
        a.momentum = function(a, b, c, d, e, f) {
            var g = a - b,
            h = Math.abs(g) / c,
            i,
            j;
            return f = f === undefined ? 6e-4: f,
            i = a + h * h / (2 * f) * (g < 0 ? -1 : 1),
            j = h / f,
            i < d ? (i = e ? d - e / 2.5 * (h / 8) : d, g = Math.abs(i - a), j = g / h) : i > 0 && (i = e ? e / 2.5 * (h / 8) : 0, g = Math.abs(a) + i, j = g / h),
            {
                destination: Math.round(i),
                duration: j
            }
        };
        var e = d("transform");
        return a.extend(a, {
            hasTransform: e !== !1,
            hasPerspective: d("perspective") in b,
            hasTouch: "ontouchstart" in window,
            hasPointer: !!window.PointerEvent || !!window.MSPointerEvent,
            hasTransition: d("transition") in b
        }),
        a.isBadAndroid = function() {
            var a = window.navigator.appVersion;
            if (/Android/.test(a) && !/Chrome\/\d/.test(a)) {
                var b = a.match(/Safari\/(\d+.\d)/);
                return b && typeof b == "object" && b.length >= 2 ? parseFloat(b[1]) < 535.19 : !0
            }
            return ! 1
        } (),
        a.extend(a.style = {},
        {
            transform: e,
            transitionTimingFunction: d("transitionTimingFunction"),
            transitionDuration: d("transitionDuration"),
            transitionDelay: d("transitionDelay"),
            transformOrigin: d("transformOrigin")
        }),
        a.hasClass = function(a, b) {
            var c = new RegExp("(^|\\s)" + b + "(\\s|$)");
            return c.test(a.className)
        },
        a.addClass = function(b, c) {
            if (a.hasClass(b, c)) return;
            var d = b.className.split(" ");
            d.push(c),
            b.className = d.join(" ")
        },
        a.removeClass = function(b, c) {
            if (!a.hasClass(b, c)) return;
            var d = new RegExp("(^|\\s)" + c + "(\\s|$)", "g");
            b.className = b.className.replace(d, " ")
        },
        a.offset = function(a) {
            var b = -a.offsetLeft,
            c = -a.offsetTop;
            while (a = a.offsetParent) b -= a.offsetLeft,
            c -= a.offsetTop;
            return {
                left: b,
                top: c
            }
        },
        a.preventDefaultException = function(a, b) {
            for (var c in b) if (b[c].test(a[c])) return ! 0;
            return ! 1
        },
        a.extend(a.eventType = {},
        {
            touchstart: 1,
            touchmove: 1,
            touchend: 1,
            mousedown: 2,
            mousemove: 2,
            mouseup: 2,
            pointerdown: 3,
            pointermove: 3,
            pointerup: 3,
            MSPointerDown: 3,
            MSPointerMove: 3,
            MSPointerUp: 3
        }),
        a.extend(a.ease = {},
        {
            quadratic: {
                style: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                fn: function(a) {
                    return a * (2 - a)
                }
            },
            circular: {
                style: "cubic-bezier(0.1, 0.57, 0.1, 1)",
                fn: function(a) {
                    return Math.sqrt(1 - --a * a)
                }
            },
            back: {
                style: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                fn: function(a) {
                    var b = 4;
                    return (a -= 1) * a * ((b + 1) * a + b) + 1
                }
            },
            bounce: {
                style: "",
                fn: function(a) {
                    return (a /= 1) < 1 / 2.75 ? 7.5625 * a * a: a < 2 / 2.75 ? 7.5625 * (a -= 1.5 / 2.75) * a + .75 : a < 2.5 / 2.75 ? 7.5625 * (a -= 2.25 / 2.75) * a + .9375 : 7.5625 * (a -= 2.625 / 2.75) * a + .984375
                }
            },
            elastic: {
                style: "",
                fn: function(a) {
                    var b = .22,
                    c = .4;
                    return a === 0 ? 0 : a == 1 ? 1 : c * Math.pow(2, -10 * a) * Math.sin((a - b / 4) * 2 * Math.PI / b) + 1
                }
            }
        }),
        a.tap = function(a, b) {
            var c = document.createEvent("Event");
            c.initEvent(b, !0, !0),
            c.pageX = a.pageX,
            c.pageY = a.pageY,
            a.target.dispatchEvent(c)
        },
        a.click = function(a) {
            var b = a.target,
            c;
            /(SELECT|INPUT|TEXTAREA)/i.test(b.tagName) || (c = document.createEvent(window.MouseEvent ? "MouseEvents": "Event"), c.initEvent("click", !0, !0), c.view = a.view || window, c.detail = 1, c.screenX = b.screenX || 0, c.screenY = b.screenY || 0, c.clientX = b.clientX || 0, c.clientY = b.clientY || 0, c.ctrlKey = !!a.ctrlKey, c.altKey = !!a.altKey, c.shiftKey = !!a.shiftKey, c.metaKey = !!a.metaKey, c.button = 0, c.relatedTarget = null, c._constructed = !0, b.dispatchEvent(c))
        },
        a
    } ();
    f.prototype = {
        version: "5.2.0",
        _init: function() {
            this._initEvents(),
            (this.options.scrollbars || this.options.indicators) && this._initIndicators(),
            this.options.mouseWheel && this._initWheel(),
            this.options.snap && this._initSnap(),
            this.options.keyBindings && this._initKeys()
        },
        destroy: function() {
            this._initEvents(!0),
            clearTimeout(this.resizeTimeout),
            this.resizeTimeout = null,
            this._execEvent("destroy")
        },
        _transitionEnd: function(a) {
            if (a.target != this.scroller || !this.isInTransition) return;
            this._transitionTime(),
            this.resetPosition(this.options.bounceTime) || (this.isInTransition = !1, this._execEvent("scrollEnd"))
        },
        _start: function(a) {
            if (e.eventType[a.type] != 1) {
                var b;
                a.which ? b = a.button: b = a.button < 2 ? 0 : a.button == 4 ? 1 : 2;
                if (b !== 0) return
            }
            if (!this.enabled || this.initiated && e.eventType[a.type] !== this.initiated) return;
            this.options.preventDefault && !e.isBadAndroid && !e.preventDefaultException(a.target, this.options.preventDefaultException) && a.preventDefault();
            var c = a.touches ? a.touches[0] : a,
            d;
            this.initiated = e.eventType[a.type],
            this.moved = !1,
            this.distX = 0,
            this.distY = 0,
            this.directionX = 0,
            this.directionY = 0,
            this.directionLocked = 0,
            this.startTime = e.getTime(),
            this.options.useTransition && this.isInTransition ? (this._transitionTime(), this.isInTransition = !1, d = this.getComputedPosition(), this._translate(Math.round(d.x), Math.round(d.y)), this._execEvent("scrollEnd")) : !this.options.useTransition && this.isAnimating && (this.isAnimating = !1, this._execEvent("scrollEnd")),
            this.startX = this.x,
            this.startY = this.y,
            this.absStartX = this.x,
            this.absStartY = this.y,
            this.pointX = c.pageX,
            this.pointY = c.pageY,
            this._execEvent("beforeScrollStart")
        },
        _move: function(a) {
            if (!this.enabled || e.eventType[a.type] !== this.initiated) return;
            this.options.preventDefault && a.preventDefault();
            var b = a.touches ? a.touches[0] : a,
            c = b.pageX - this.pointX,
            d = b.pageY - this.pointY,
            f = e.getTime(),
            g,
            h,
            i,
            j;
            this.pointX = b.pageX,
            this.pointY = b.pageY,
            this.distX += c,
            this.distY += d,
            i = Math.abs(this.distX),
            j = Math.abs(this.distY);
            if (f - this.endTime > 300 && i < 10 && j < 10) return; ! this.directionLocked && !this.options.freeScroll && (i > j + this.options.directionLockThreshold ? this.directionLocked = "h": j >= i + this.options.directionLockThreshold ? this.directionLocked = "v": this.directionLocked = "n");
            if (this.directionLocked == "h") {
                if (this.options.eventPassthrough == "vertical") a.preventDefault();
                else if (this.options.eventPassthrough == "horizontal") {
                    this.initiated = !1;
                    return
                }
                d = 0
            } else if (this.directionLocked == "v") {
                if (this.options.eventPassthrough == "horizontal") a.preventDefault();
                else if (this.options.eventPassthrough == "vertical") {
                    this.initiated = !1;
                    return
                }
                c = 0
            }
            c = this.hasHorizontalScroll ? c: 0,
            d = this.hasVerticalScroll ? d: 0,
            g = this.x + c,
            h = this.y + d;
            if (g > 0 || g < this.maxScrollX) g = this.options.bounce ? this.x + c / 3 : g > 0 ? 0 : this.maxScrollX;
            if (h > 0 || h < this.maxScrollY) h = this.options.bounce ? this.y + d / 3 : h > 0 ? 0 : this.maxScrollY;
            this.directionX = c > 0 ? -1 : c < 0 ? 1 : 0,
            this.directionY = d > 0 ? -1 : d < 0 ? 1 : 0,
            this.moved || this._execEvent("scrollStart"),
            this.moved = !0,
            this._translate(g, h),
            f - this.startTime > 300 && (this.startTime = f, this.startX = this.x, this.startY = this.y, this.options.probeType == 1 && this._execEvent("scroll")),
            this.options.probeType > 1 && this._execEvent("scroll")
        },
        _end: function(a) {
            if (!this.enabled || e.eventType[a.type] !== this.initiated) return;
            this.options.preventDefault && !e.preventDefaultException(a.target, this.options.preventDefaultException) && a.preventDefault();
            var b = a.changedTouches ? a.changedTouches[0] : a,
            c,
            d,
            f = e.getTime() - this.startTime,
            g = Math.round(this.x),
            h = Math.round(this.y),
            i = Math.abs(g - this.startX),
            j = Math.abs(h - this.startY),
            k = 0,
            l = "";
            this.isInTransition = 0,
            this.initiated = 0,
            this.endTime = e.getTime();
            if (this.resetPosition(this.options.bounceTime)) return;
            this.scrollTo(g, h);
            if (!this.moved) {
                this.options.tap && e.tap(a, this.options.tap),
                this.options.click && e.click(a),
                this._execEvent("scrollCancel");
                return
            }
            if (this._events.flick && f < 200 && i < 100 && j < 100) {
                this._execEvent("flick");
                return
            }
            this.options.momentum && f < 300 && (c = this.hasHorizontalScroll ? e.momentum(this.x, this.startX, f, this.maxScrollX, this.options.bounce ? this.wrapperWidth: 0, this.options.deceleration) : {
                destination: g,
                duration: 0
            },
            d = this.hasVerticalScroll ? e.momentum(this.y, this.startY, f, this.maxScrollY, this.options.bounce ? this.wrapperHeight: 0, this.options.deceleration) : {
                destination: h,
                duration: 0
            },
            g = c.destination, h = d.destination, k = Math.max(c.duration, d.duration), this.isInTransition = 1);
            if (this.options.snap) {
                var m = this._nearestSnap(g, h);
                this.currentPage = m,
                k = this.options.snapSpeed || Math.max(Math.max(Math.min(Math.abs(g - m.x), 1e3), Math.min(Math.abs(h - m.y), 1e3)), 300),
                g = m.x,
                h = m.y,
                this.directionX = 0,
                this.directionY = 0,
                l = this.options.bounceEasing
            }
            if (g != this.x || h != this.y) {
                if (g > 0 || g < this.maxScrollX || h > 0 || h < this.maxScrollY) l = e.ease.quadratic;
                this.scrollTo(g, h, k, l);
                return
            }
            this._execEvent("scrollEnd")
        },
        _resize: function() {
            var a = this;
            clearTimeout(this.resizeTimeout),
            this.resizeTimeout = setTimeout(function() {
                a.refresh()
            },
            this.options.resizePolling)
        },
        resetPosition: function(a) {
            var b = this.x,
            c = this.y;
            return a = a || 0,
            !this.hasHorizontalScroll || this.x > 0 ? b = 0 : this.x < this.maxScrollX && (b = this.maxScrollX),
            !this.hasVerticalScroll || this.y > 0 ? c = 0 : this.y < this.maxScrollY && (c = this.maxScrollY),
            b == this.x && c == this.y ? !1 : (this.scrollTo(b, c, a, this.options.bounceEasing), !0)
        },
        disable: function() {
            this.enabled = !1
        },
        enable: function() {
            this.enabled = !0
        },
        refresh: function() {
            var a = this.wrapper.offsetHeight;
            this.wrapperWidth = this.wrapper.clientWidth,
            this.wrapperHeight = this.wrapper.clientHeight,
            this.scrollerWidth = this.scroller.offsetWidth,
            this.scrollerHeight = this.scroller.offsetHeight,
            this.maxScrollX = this.wrapperWidth - this.scrollerWidth,
            this.maxScrollY = this.wrapperHeight - this.scrollerHeight,
            this.hasHorizontalScroll = this.options.scrollX && this.maxScrollX < 0,
            this.hasVerticalScroll = this.options.scrollY && this.maxScrollY < 0,
            this.hasHorizontalScroll || (this.maxScrollX = 0, this.scrollerWidth = this.wrapperWidth),
            this.hasVerticalScroll || (this.maxScrollY = 0, this.scrollerHeight = this.wrapperHeight),
            this.endTime = 0,
            this.directionX = 0,
            this.directionY = 0,
            this.wrapperOffset = e.offset(this.wrapper),
            this._execEvent("refresh"),
            this.resetPosition()
        },
        on: function(a, b) {
            this._events[a] || (this._events[a] = []),
            this._events[a].push(b)
        },
        off: function(a, b) {
            if (!this._events[a]) return;
            var c = this._events[a].indexOf(b);
            c > -1 && this._events[a].splice(c, 1)
        },
        _execEvent: function(a) {
            if (!this._events[a]) return;
            var b = 0,
            c = this._events[a].length;
            if (!c) return;
            for (; b < c; b++) this._events[a][b].apply(this, [].slice.call(arguments, 1))
        },
        scrollBy: function(a, b, c, d) {
            a = this.x + a,
            b = this.y + b,
            c = c || 0,
            this.scrollTo(a, b, c, d)
        },
        scrollTo: function(a, b, c, d) {
            d = d || e.ease.circular,
            this.isInTransition = this.options.useTransition && c > 0;
            var f = this.options.useTransition && d.style; ! c || f ? (f && (this._transitionTimingFunction(d.style), this._transitionTime(c)), this._translate(a, b)) : this._animate(a, b, c, d.fn)
        },
        scrollToElement: function(a, b, c, d, f) {
            a = a.nodeType ? a: this.scroller.querySelector(a);
            if (!a) return;
            var g = e.offset(a);
            g.left -= this.wrapperOffset.left,
            g.top -= this.wrapperOffset.top,
            c === !0 && (c = Math.round(a.offsetWidth / 2 - this.wrapper.offsetWidth / 2)),
            d === !0 && (d = Math.round(a.offsetHeight / 2 - this.wrapper.offsetHeight / 2)),
            g.left -= c || 0,
            g.top -= d || 0,
            g.left = g.left > 0 ? 0 : g.left < this.maxScrollX ? this.maxScrollX: g.left,
            g.top = g.top > 0 ? 0 : g.top < this.maxScrollY ? this.maxScrollY: g.top,
            b = b === undefined || b === null || b === "auto" ? Math.max(Math.abs(this.x - g.left), Math.abs(this.y - g.top)) : b,
            this.scrollTo(g.left, g.top, b, f)
        },
        _transitionTime: function(a) {
            if (!this.options.useTransition) return;
            a = a || 0;
            var b = e.style.transitionDuration;
            if (!b) return;
            this.scrollerStyle[b] = a + "ms";
            if (!a && e.isBadAndroid) {
                this.scrollerStyle[b] = "0.0001ms";
                var c = this;
                d(function() {
                    c.scrollerStyle[b] === "0.0001ms" && (c.scrollerStyle[b] = "0s")
                })
            }
            if (this.indicators) for (var f = this.indicators.length; f--;) this.indicators[f].transitionTime(a)
        },
        _transitionTimingFunction: function(a) {
            this.scrollerStyle[e.style.transitionTimingFunction] = a;
            if (this.indicators) for (var b = this.indicators.length; b--;) this.indicators[b].transitionTimingFunction(a)
        },
        _translate: function(a, b) {
            this.options.useTransform ? this.scrollerStyle[e.style.transform] = "translate(" + a + "px," + b + "px)" + this.translateZ: (a = Math.round(a), b = Math.round(b), this.scrollerStyle.left = a + "px", this.scrollerStyle.top = b + "px"),
            this.x = a,
            this.y = b;
            if (this.indicators) for (var c = this.indicators.length; c--;) this.indicators[c].updatePosition()
        },
        _initEvents: function(a) {
            var b = a ? e.removeEvent: e.addEvent,
            c = this.options.bindToWrapper ? this.wrapper: window;
            b(window, "orientationchange", this),
            b(window, "resize", this),
            this.options.click && b(this.wrapper, "click", this, !0),
            this.options.disableMouse || (b(this.wrapper, "mousedown", this), b(c, "mousemove", this), b(c, "mousecancel", this), b(c, "mouseup", this)),
            e.hasPointer && !this.options.disablePointer && (b(this.wrapper, e.prefixPointerEvent("pointerdown"), this), b(c, e.prefixPointerEvent("pointermove"), this), b(c, e.prefixPointerEvent("pointercancel"), this), b(c, e.prefixPointerEvent("pointerup"), this)),
            e.hasTouch && !this.options.disableTouch && (b(this.wrapper, "touchstart", this), b(c, "touchmove", this), b(c, "touchcancel", this), b(c, "touchend", this)),
            b(this.scroller, "transitionend", this),
            b(this.scroller, "webkitTransitionEnd", this),
            b(this.scroller, "oTransitionEnd", this),
            b(this.scroller, "MSTransitionEnd", this)
        },
        getComputedPosition: function() {
            var a = window.getComputedStyle(this.scroller, null),
            b,
            c;
            return this.options.useTransform ? (a = a[e.style.transform].split(")")[0].split(", "), b = +(a[12] || a[4]), c = +(a[13] || a[5])) : (b = +a.left.replace(/[^-\d.]/g, ""), c = +a.top.replace(/[^-\d.]/g, "")),
            {
                x: b,
                y: c
            }
        },
        _initIndicators: function() {
            function i(a) {
                if (e.indicators) for (var b = e.indicators.length; b--;) a.call(e.indicators[b])
            }
            var a = this.options.interactiveScrollbars,
            b = typeof this.options.scrollbars != "string",
            c = [],
            d,
            e = this;
            this.indicators = [],
            this.options.scrollbars && (this.options.scrollY && (d = {
                el: g("v", a, this.options.scrollbars),
                interactive: a,
                defaultScrollbars: !0,
                customStyle: b,
                resize: this.options.resizeScrollbars,
                shrink: this.options.shrinkScrollbars,
                fade: this.options.fadeScrollbars,
                listenX: !1
            },
            this.wrapper.appendChild(d.el), c.push(d)), this.options.scrollX && (d = {
                el: g("h", a, this.options.scrollbars),
                interactive: a,
                defaultScrollbars: !0,
                customStyle: b,
                resize: this.options.resizeScrollbars,
                shrink: this.options.shrinkScrollbars,
                fade: this.options.fadeScrollbars,
                listenY: !1
            },
            this.wrapper.appendChild(d.el), c.push(d))),
            this.options.indicators && (c = c.concat(this.options.indicators));
            for (var f = c.length; f--;) this.indicators.push(new h(this, c[f]));
            this.options.fadeScrollbars && (this.on("scrollEnd",
            function() {
                i(function() {
                    this.fade()
                })
            }), this.on("scrollCancel",
            function() {
                i(function() {
                    this.fade()
                })
            }), this.on("scrollStart",
            function() {
                i(function() {
                    this.fade(1)
                })
            }), this.on("beforeScrollStart",
            function() {
                i(function() {
                    this.fade(1, !0)
                })
            })),
            this.on("refresh",
            function() {
                i(function() {
                    this.refresh()
                })
            }),
            this.on("destroy",
            function() {
                i(function() {
                    this.destroy()
                }),
                delete this.indicators
            })
        },
        _initWheel: function() {
            e.addEvent(this.wrapper, "wheel", this),
            e.addEvent(this.wrapper, "mousewheel", this),
            e.addEvent(this.wrapper, "DOMMouseScroll", this),
            this.on("destroy",
            function() {
                clearTimeout(this.wheelTimeout),
                this.wheelTimeout = null,
                e.removeEvent(this.wrapper, "wheel", this),
                e.removeEvent(this.wrapper, "mousewheel", this),
                e.removeEvent(this.wrapper, "DOMMouseScroll", this)
            })
        },
        _wheel: function(a) {
            if (!this.enabled) return;
            a.preventDefault();
            var b, c, d, e, f = this;
            this.wheelTimeout === undefined && f._execEvent("scrollStart"),
            clearTimeout(this.wheelTimeout),
            this.wheelTimeout = setTimeout(function() {
                f.options.snap || f._execEvent("scrollEnd"),
                f.wheelTimeout = undefined
            },
            400);
            if ("deltaX" in a) a.deltaMode === 1 ? (b = -a.deltaX * this.options.mouseWheelSpeed, c = -a.deltaY * this.options.mouseWheelSpeed) : (b = -a.deltaX, c = -a.deltaY);
            else if ("wheelDeltaX" in a) b = a.wheelDeltaX / 120 * this.options.mouseWheelSpeed,
            c = a.wheelDeltaY / 120 * this.options.mouseWheelSpeed;
            else if ("wheelDelta" in a) b = c = a.wheelDelta / 120 * this.options.mouseWheelSpeed;
            else {
                if (! ("detail" in a)) return;
                b = c = -a.detail / 3 * this.options.mouseWheelSpeed
            }
            b *= this.options.invertWheelDirection,
            c *= this.options.invertWheelDirection,
            this.hasVerticalScroll || (b = c, c = 0);
            if (this.options.snap) {
                d = this.currentPage.pageX,
                e = this.currentPage.pageY,
                b > 0 ? d--:b < 0 && d++,
                c > 0 ? e--:c < 0 && e++,
                this.goToPage(d, e);
                return
            }
            d = this.x + Math.round(this.hasHorizontalScroll ? b: 0),
            e = this.y + Math.round(this.hasVerticalScroll ? c: 0),
            this.directionX = b > 0 ? -1 : b < 0 ? 1 : 0,
            this.directionY = c > 0 ? -1 : c < 0 ? 1 : 0,
            d > 0 ? d = 0 : d < this.maxScrollX && (d = this.maxScrollX),
            e > 0 ? e = 0 : e < this.maxScrollY && (e = this.maxScrollY),
            this.scrollTo(d, e, 0),
            this.options.probeType > 1 && this._execEvent("scroll")
        },
        _initSnap: function() {
            this.currentPage = {},
            typeof this.options.snap == "string" && (this.options.snap = this.scroller.querySelectorAll(this.options.snap)),
            this.on("refresh",
            function() {
                var a = 0,
                b, c = 0,
                d, e, f, g = 0,
                h, i = this.options.snapStepX || this.wrapperWidth,
                j = this.options.snapStepY || this.wrapperHeight,
                k;
                this.pages = [];
                if (!this.wrapperWidth || !this.wrapperHeight || !this.scrollerWidth || !this.scrollerHeight) return;
                if (this.options.snap === !0) {
                    e = Math.round(i / 2),
                    f = Math.round(j / 2);
                    while (g > -this.scrollerWidth) {
                        this.pages[a] = [],
                        b = 0,
                        h = 0;
                        while (h > -this.scrollerHeight) this.pages[a][b] = {
                            x: Math.max(g, this.maxScrollX),
                            y: Math.max(h, this.maxScrollY),
                            width: i,
                            height: j,
                            cx: g - e,
                            cy: h - f
                        },
                        h -= j,
                        b++;
                        g -= i,
                        a++
                    }
                } else {
                    k = this.options.snap,
                    b = k.length,
                    d = -1;
                    for (; a < b; a++) {
                        if (a === 0 || k[a].offsetLeft <= k[a - 1].offsetLeft) c = 0,
                        d++;
                        this.pages[c] || (this.pages[c] = []),
                        g = Math.max( - k[a].offsetLeft, this.maxScrollX),
                        h = Math.max( - k[a].offsetTop, this.maxScrollY),
                        e = g - Math.round(k[a].offsetWidth / 2),
                        f = h - Math.round(k[a].offsetHeight / 2),
                        this.pages[c][d] = {
                            x: g,
                            y: h,
                            width: k[a].offsetWidth,
                            height: k[a].offsetHeight,
                            cx: e,
                            cy: f
                        },
                        g > this.maxScrollX && c++
                    }
                }
                this.goToPage(this.currentPage.pageX || 0, this.currentPage.pageY || 0, 0),
                this.options.snapThreshold % 1 === 0 ? (this.snapThresholdX = this.options.snapThreshold, this.snapThresholdY = this.options.snapThreshold) : (this.snapThresholdX = Math.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].width * this.options.snapThreshold), this.snapThresholdY = Math.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].height * this.options.snapThreshold))
            }),
            this.on("flick",
            function() {
                var a = this.options.snapSpeed || Math.max(Math.max(Math.min(Math.abs(this.x - this.startX), 1e3), Math.min(Math.abs(this.y - this.startY), 1e3)), 300);
                this.goToPage(this.currentPage.pageX + this.directionX, this.currentPage.pageY + this.directionY, a)
            })
        },
        _nearestSnap: function(a, b) {
            if (!this.pages.length) return {
                x: 0,
                y: 0,
                pageX: 0,
                pageY: 0
            };
            var c = 0,
            d = this.pages.length,
            e = 0;
            if (Math.abs(a - this.absStartX) < this.snapThresholdX && Math.abs(b - this.absStartY) < this.snapThresholdY) return this.currentPage;
            a > 0 ? a = 0 : a < this.maxScrollX && (a = this.maxScrollX),
            b > 0 ? b = 0 : b < this.maxScrollY && (b = this.maxScrollY);
            for (; c < d; c++) if (a >= this.pages[c][0].cx) {
                a = this.pages[c][0].x;
                break
            }
            d = this.pages[c].length;
            for (; e < d; e++) if (b >= this.pages[0][e].cy) {
                b = this.pages[0][e].y;
                break
            }
            return c == this.currentPage.pageX && (c += this.directionX, c < 0 ? c = 0 : c >= this.pages.length && (c = this.pages.length - 1), a = this.pages[c][0].x),
            e == this.currentPage.pageY && (e += this.directionY, e < 0 ? e = 0 : e >= this.pages[0].length && (e = this.pages[0].length - 1), b = this.pages[0][e].y),
            {
                x: a,
                y: b,
                pageX: c,
                pageY: e
            }
        },
        goToPage: function(a, b, c, d) {
            d = d || this.options.bounceEasing,
            a >= this.pages.length ? a = this.pages.length - 1 : a < 0 && (a = 0),
            b >= this.pages[a].length ? b = this.pages[a].length - 1 : b < 0 && (b = 0);
            var e = this.pages[a][b].x,
            f = this.pages[a][b].y;
            c = c === undefined ? this.options.snapSpeed || Math.max(Math.max(Math.min(Math.abs(e - this.x), 1e3), Math.min(Math.abs(f - this.y), 1e3)), 300) : c,
            this.currentPage = {
                x: e,
                y: f,
                pageX: a,
                pageY: b
            },
            this.scrollTo(e, f, c, d)
        },
        next: function(a, b) {
            var c = this.currentPage.pageX,
            d = this.currentPage.pageY;
            c++,
            c >= this.pages.length && this.hasVerticalScroll && (c = 0, d++),
            this.goToPage(c, d, a, b)
        },
        prev: function(a, b) {
            var c = this.currentPage.pageX,
            d = this.currentPage.pageY;
            c--,
            c < 0 && this.hasVerticalScroll && (c = 0, d--),
            this.goToPage(c, d, a, b)
        },
        _initKeys: function(a) {
            var b = {
                pageUp: 33,
                pageDown: 34,
                end: 35,
                home: 36,
                left: 37,
                up: 38,
                right: 39,
                down: 40
            },
            c;
            if (typeof this.options.keyBindings == "object") for (c in this.options.keyBindings) typeof this.options.keyBindings[c] == "string" && (this.options.keyBindings[c] = this.options.keyBindings[c].toUpperCase().charCodeAt(0));
            else this.options.keyBindings = {};
            for (c in b) this.options.keyBindings[c] = this.options.keyBindings[c] || b[c];
            e.addEvent(window, "keydown", this),
            this.on("destroy",
            function() {
                e.removeEvent(window, "keydown", this)
            })
        },
        _key: function(a) {
            if (!this.enabled) return;
            var b = this.options.snap,
            c = b ? this.currentPage.pageX: this.x,
            d = b ? this.currentPage.pageY: this.y,
            f = e.getTime(),
            g = this.keyTime || 0,
            h = .25,
            i;
            this.options.useTransition && this.isInTransition && (i = this.getComputedPosition(), this._translate(Math.round(i.x), Math.round(i.y)), this.isInTransition = !1),
            this.keyAcceleration = f - g < 200 ? Math.min(this.keyAcceleration + h, 50) : 0;
            switch (a.keyCode) {
            case this.options.keyBindings.pageUp:
                this.hasHorizontalScroll && !this.hasVerticalScroll ? c += b ? 1 : this.wrapperWidth: d += b ? 1 : this.wrapperHeight;
                break;
            case this.options.keyBindings.pageDown:
                this.hasHorizontalScroll && !this.hasVerticalScroll ? c -= b ? 1 : this.wrapperWidth: d -= b ? 1 : this.wrapperHeight;
                break;
            case this.options.keyBindings.end:
                c = b ? this.pages.length - 1 : this.maxScrollX,
                d = b ? this.pages[0].length - 1 : this.maxScrollY;
                break;
            case this.options.keyBindings.home:
                c = 0,
                d = 0;
                break;
            case this.options.keyBindings.left:
                c += b ? -1 : 5 + this.keyAcceleration >> 0;
                break;
            case this.options.keyBindings.up:
                d += b ? 1 : 5 + this.keyAcceleration >> 0;
                break;
            case this.options.keyBindings.right:
                c -= b ? -1 : 5 + this.keyAcceleration >> 0;
                break;
            case this.options.keyBindings.down:
                d -= b ? 1 : 5 + this.keyAcceleration >> 0;
                break;
            default:
                return
            }
            if (b) {
                this.goToPage(c, d);
                return
            }
            c > 0 ? (c = 0, this.keyAcceleration = 0) : c < this.maxScrollX && (c = this.maxScrollX, this.keyAcceleration = 0),
            d > 0 ? (d = 0, this.keyAcceleration = 0) : d < this.maxScrollY && (d = this.maxScrollY, this.keyAcceleration = 0),
            this.scrollTo(c, d, 0),
            this.keyTime = f
        },
        _animate: function(a, b, c, f) {
            function l() {
                var m = e.getTime(),
                n,
                o,
                p;
                if (m >= k) {
                    g.isAnimating = !1,
                    g._translate(a, b),
                    g.resetPosition(g.options.bounceTime) || g._execEvent("scrollEnd");
                    return
                }
                m = (m - j) / c,
                p = f(m),
                n = (a - h) * p + h,
                o = (b - i) * p + i,
                g._translate(n, o),
                g.isAnimating && d(l),
                g.options.probeType == 3 && g._execEvent("scroll")
            }
            var g = this,
            h = this.x,
            i = this.y,
            j = e.getTime(),
            k = j + c;
            this.isAnimating = !0,
            l()
        },
        handleEvent: function(a) {
            switch (a.type) {
            case "touchstart":
            case "pointerdown":
            case "MSPointerDown":
            case "mousedown":
                this._start(a);
                break;
            case "touchmove":
            case "pointermove":
            case "MSPointerMove":
            case "mousemove":
                this._move(a);
                break;
            case "touchend":
            case "pointerup":
            case "MSPointerUp":
            case "mouseup":
            case "touchcancel":
            case "pointercancel":
            case "MSPointerCancel":
            case "mousecancel":
                this._end(a);
                break;
            case "orientationchange":
            case "resize":
                this._resize();
                break;
            case "transitionend":
            case "webkitTransitionEnd":
            case "oTransitionEnd":
            case "MSTransitionEnd":
                this._transitionEnd(a);
                break;
            case "wheel":
            case "DOMMouseScroll":
            case "mousewheel":
                this._wheel(a);
                break;
            case "keydown":
                this._key(a);
                break;
            case "click":
                this.enabled && !a._constructed && (a.preventDefault(), a.stopPropagation())
            }
        }
    },
    h.prototype = {
        handleEvent: function(a) {
            switch (a.type) {
            case "touchstart":
            case "pointerdown":
            case "MSPointerDown":
            case "mousedown":
                this._start(a);
                break;
            case "touchmove":
            case "pointermove":
            case "MSPointerMove":
            case "mousemove":
                this._move(a);
                break;
            case "touchend":
            case "pointerup":
            case "MSPointerUp":
            case "mouseup":
            case "touchcancel":
            case "pointercancel":
            case "MSPointerCancel":
            case "mousecancel":
                this._end(a)
            }
        },
        destroy: function() {
            this.options.fadeScrollbars && (clearTimeout(this.fadeTimeout), this.fadeTimeout = null),
            this.options.interactive && (e.removeEvent(this.indicator, "touchstart", this), e.removeEvent(this.indicator, e.prefixPointerEvent("pointerdown"), this), e.removeEvent(this.indicator, "mousedown", this), e.removeEvent(window, "touchmove", this), e.removeEvent(window, e.prefixPointerEvent("pointermove"), this), e.removeEvent(window, "mousemove", this), e.removeEvent(window, "touchend", this), e.removeEvent(window, e.prefixPointerEvent("pointerup"), this), e.removeEvent(window, "mouseup", this)),
            this.options.defaultScrollbars && this.wrapper.parentNode.removeChild(this.wrapper)
        },
        _start: function(a) {
            var b = a.touches ? a.touches[0] : a;
            a.preventDefault(),
            a.stopPropagation(),
            this.transitionTime(),
            this.initiated = !0,
            this.moved = !1,
            this.lastPointX = b.pageX,
            this.lastPointY = b.pageY,
            this.startTime = e.getTime(),
            this.options.disableTouch || e.addEvent(window, "touchmove", this),
            this.options.disablePointer || e.addEvent(window, e.prefixPointerEvent("pointermove"), this),
            this.options.disableMouse || e.addEvent(window, "mousemove", this),
            this.scroller._execEvent("beforeScrollStart")
        },
        _move: function(a) {
            var b = a.touches ? a.touches[0] : a,
            c,
            d,
            f,
            g,
            h = e.getTime();
            this.moved || this.scroller._execEvent("scrollStart"),
            this.moved = !0,
            c = b.pageX - this.lastPointX,
            this.lastPointX = b.pageX,
            d = b.pageY - this.lastPointY,
            this.lastPointY = b.pageY,
            f = this.x + c,
            g = this.y + d,
            this._pos(f, g),
            this.scroller.options.probeType == 1 && h - this.startTime > 300 ? (this.startTime = h, this.scroller._execEvent("scroll")) : this.scroller.options.probeType > 1 && this.scroller._execEvent("scroll"),
            a.preventDefault(),
            a.stopPropagation()
        },
        _end: function(a) {
            if (!this.initiated) return;
            this.initiated = !1,
            a.preventDefault(),
            a.stopPropagation(),
            e.removeEvent(window, "touchmove", this),
            e.removeEvent(window, e.prefixPointerEvent("pointermove"), this),
            e.removeEvent(window, "mousemove", this);
            if (this.scroller.options.snap) {
                var b = this.scroller._nearestSnap(this.scroller.x, this.scroller.y),
                c = this.options.snapSpeed || Math.max(Math.max(Math.min(Math.abs(this.scroller.x - b.x), 1e3), Math.min(Math.abs(this.scroller.y - b.y), 1e3)), 300);
                if (this.scroller.x != b.x || this.scroller.y != b.y) this.scroller.directionX = 0,
                this.scroller.directionY = 0,
                this.scroller.currentPage = b,
                this.scroller.scrollTo(b.x, b.y, c, this.scroller.options.bounceEasing)
            }
            this.moved && this.scroller._execEvent("scrollEnd")
        },
        transitionTime: function(a) {
            a = a || 0;
            var b = e.style.transitionDuration;
            if (!b) return;
            this.indicatorStyle[b] = a + "ms";
            if (!a && e.isBadAndroid) {
                this.indicatorStyle[b] = "0.0001ms";
                var c = this;
                d(function() {
                    c.indicatorStyle[b] === "0.0001ms" && (c.indicatorStyle[b] = "0s")
                })
            }
        },
        transitionTimingFunction: function(a) {
            this.indicatorStyle[e.style.transitionTimingFunction] = a
        },
        refresh: function() {
            this.transitionTime(),
            this.options.listenX && !this.options.listenY ? this.indicatorStyle.display = this.scroller.hasHorizontalScroll ? "block": "none": this.options.listenY && !this.options.listenX ? this.indicatorStyle.display = this.scroller.hasVerticalScroll ? "block": "none": this.indicatorStyle.display = this.scroller.hasHorizontalScroll || this.scroller.hasVerticalScroll ? "block": "none",
            this.scroller.hasHorizontalScroll && this.scroller.hasVerticalScroll ? (e.addClass(this.wrapper, "iScrollBothScrollbars"), e.removeClass(this.wrapper, "iScrollLoneScrollbar"), this.options.defaultScrollbars && this.options.customStyle && (this.options.listenX ? this.wrapper.style.right = "8px": this.wrapper.style.bottom = "8px")) : (e.removeClass(this.wrapper, "iScrollBothScrollbars"), e.addClass(this.wrapper, "iScrollLoneScrollbar"), this.options.defaultScrollbars && this.options.customStyle && (this.options.listenX ? this.wrapper.style.right = "2px": this.wrapper.style.bottom = "2px"));
            var a = this.wrapper.offsetHeight;
            this.options.listenX && (this.wrapperWidth = this.wrapper.clientWidth, this.options.resize ? (this.indicatorWidth = Math.max(Math.round(this.wrapperWidth * this.wrapperWidth / (this.scroller.scrollerWidth || this.wrapperWidth || 1)), 8), this.indicatorStyle.width = this.indicatorWidth + "px") : this.indicatorWidth = this.indicator.clientWidth, this.maxPosX = this.wrapperWidth - this.indicatorWidth, this.options.shrink == "clip" ? (this.minBoundaryX = -this.indicatorWidth + 8, this.maxBoundaryX = this.wrapperWidth - 8) : (this.minBoundaryX = 0, this.maxBoundaryX = this.maxPosX), this.sizeRatioX = this.options.speedRatioX || this.scroller.maxScrollX && this.maxPosX / this.scroller.maxScrollX),
            this.options.listenY && (this.wrapperHeight = this.wrapper.clientHeight, this.options.resize ? (this.indicatorHeight = Math.max(Math.round(this.wrapperHeight * this.wrapperHeight / (this.scroller.scrollerHeight || this.wrapperHeight || 1)), 8), this.indicatorStyle.height = this.indicatorHeight + "px") : this.indicatorHeight = this.indicator.clientHeight, this.maxPosY = this.wrapperHeight - this.indicatorHeight, this.options.shrink == "clip" ? (this.minBoundaryY = -this.indicatorHeight + 8, this.maxBoundaryY = this.wrapperHeight - 8) : (this.minBoundaryY = 0, this.maxBoundaryY = this.maxPosY), this.maxPosY = this.wrapperHeight - this.indicatorHeight, this.sizeRatioY = this.options.speedRatioY || this.scroller.maxScrollY && this.maxPosY / this.scroller.maxScrollY),
            this.updatePosition()
        },
        updatePosition: function() {
            var a = this.options.listenX && Math.round(this.sizeRatioX * this.scroller.x) || 0,
            b = this.options.listenY && Math.round(this.sizeRatioY * this.scroller.y) || 0;
            this.options.ignoreBoundaries || (a < this.minBoundaryX ? (this.options.shrink == "scale" && (this.width = Math.max(this.indicatorWidth + a, 8), this.indicatorStyle.width = this.width + "px"), a = this.minBoundaryX) : a > this.maxBoundaryX ? this.options.shrink == "scale" ? (this.width = Math.max(this.indicatorWidth - (a - this.maxPosX), 8), this.indicatorStyle.width = this.width + "px", a = this.maxPosX + this.indicatorWidth - this.width) : a = this.maxBoundaryX: this.options.shrink == "scale" && this.width != this.indicatorWidth && (this.width = this.indicatorWidth, this.indicatorStyle.width = this.width + "px"), b < this.minBoundaryY ? (this.options.shrink == "scale" && (this.height = Math.max(this.indicatorHeight + b * 3, 8), this.indicatorStyle.height = this.height + "px"), b = this.minBoundaryY) : b > this.maxBoundaryY ? this.options.shrink == "scale" ? (this.height = Math.max(this.indicatorHeight - (b - this.maxPosY) * 3, 8), this.indicatorStyle.height = this.height + "px", b = this.maxPosY + this.indicatorHeight - this.height) : b = this.maxBoundaryY: this.options.shrink == "scale" && this.height != this.indicatorHeight && (this.height = this.indicatorHeight, this.indicatorStyle.height = this.height + "px")),
            this.x = a,
            this.y = b,
            this.scroller.options.useTransform ? this.indicatorStyle[e.style.transform] = "translate(" + a + "px," + b + "px)" + this.scroller.translateZ: (this.indicatorStyle.left = a + "px", this.indicatorStyle.top = b + "px")
        },
        _pos: function(a, b) {
            a < 0 ? a = 0 : a > this.maxPosX && (a = this.maxPosX),
            b < 0 ? b = 0 : b > this.maxPosY && (b = this.maxPosY),
            a = this.options.listenX ? Math.round(a / this.sizeRatioX) : this.scroller.x,
            b = this.options.listenY ? Math.round(b / this.sizeRatioY) : this.scroller.y,
            this.scroller.scrollTo(a, b)
        },
        fade: function(a, b) {
            if (b && !this.visible) return;
            clearTimeout(this.fadeTimeout),
            this.fadeTimeout = null;
            var c = a ? 250 : 500,
            d = a ? 0 : 300;
            a = a ? "1": "0",
            this.wrapperStyle[e.style.transitionDuration] = c + "ms",
            this.fadeTimeout = setTimeout(function(a) {
                this.wrapperStyle.opacity = a,
                this.visible = +a
            }.bind(this, a), d)
        }
    },
    f.utils = e,
    c.exports = f
});
define("../../common/behavior/vfrm/vfrm", ["../../../common/service/utils/util"],
function(a, b, c) {
    var d = a("../../../common/service/utils/util");
    APP.createBehavior("common.behavior.vfrm.vfrm", {
        message: ["AUTOCONTINUOUS_NEXT"],
        onMessage: function(a, b) {
            if (a === "AUTOCONTINUOUS_NEXT") {
                var c = location.hash,
                d = this.resetVfrm();
                c && /#vfrm/g.test(c) && d && (b.vfrm = "vfrm=" + d)
            }
        },
        init: function() {
            var a = this.rootElement.attr("data-vfrm"),
            b = this.rootElement.find("a[href]");
            a && b.forEach(function(b) {
                var b = $(b),
                c = b.attr("href");
                /javascript:/.test(c) || (c += /#/.test(c) ? "&": "#" + $.param({
                    vfrm: a
                }), b.attr("href", c))
            })
        },
        resetVfrm: function() {
            var a = d.getVfrm();
            if (a) {
                var b = a.split("-");
                if (b.length) return len = b.length,
                b[len - 1] = "0",
                b.join("-")
            }
        }
    })
});
define("../../common/behavior/QoeWatcher/QoeWatcher", ["../../service/pingback/QoEPingback"],
function(a, b, c) {
    var d = a("../../service/pingback/QoEPingback");
    APP.createBehavior("common.behavior.QoeWatcher.QoeWatcher", {
        message: ["VIDEO_PLAY", "PLAYER_PLAYING"],
        onMessage: function(a, b) {
            a === "VIDEO_PLAY" ? d.mark("videoLoadStart") : a == "PLAYER_PLAYING" && (d.mark("videoLoadEnd"), d.checkHit() && d.sendInterface("videoLoad"))
        },
        init: function() {}
    })
});
define("../../common/component/player/video", ["../../service/useragent/detect"],
function(a, b, c) {
    var d = a("../../service/useragent/detect");
    APP.define("common.component.player.video", {
        videoList: [],
        videoIndex: 0,
        isDisableSeek: !1,
        __beforeSeekTime: 0,
        message: ["PLAYER_AFTER_INIT", "VIDEO_WAITING", "PLAYER_BEFORE_PLAY", "VIDEO_SEEKED", "VIDEO_SEEKING", "VIDEO_PROGRESS", "VIDEO_DURATIONCHANGE", "VIDEO_TIMEUPDATE", "VIDEO_ENDED", "VIDEO_CANPLAY", "PLAYER_PLAY", "PLAYER_PAUSE", "PLAYER_SEEK", "PLAYER_LOAD_VIDEO", "PLAYER_FULLSCREEN", "PLAYER_END", "PLAYER_DISABLE_SEEK", "PLAYER_ENABLE_SEEK", "PLAYER_DURATION_AVALIABLE", "PLAYER_CLEAR", "PLAYER_TO_REMOVE", "PLAYER_TO_RECOVER", "PLAYER_TO_END"],
        onMessage: function(a, b) {
            a == "PLAYER_DISABLE_SEEK" && (this.isDisableSeek = !0),
            a == "PLAYER_ENABLE_SEEK" && (this.isDisableSeek = !1),
            a == "PLAYER_AFTER_INIT" && $.os.ios && !d.weixin && !$.os.ipad && this.player.css({
                display: "block",
                top: "-1000px"
            });
            if (a == "PLAYER_DURATION_AVALIABLE") {
                var c = this.videoList[this.videoIndex];
                c && c.startTime > this.getCurrentTime() && c.startTime < this.getDuration() && this.seek(c.startTime)
            }
            a == "VIDEO_WAITING" && $.os.ios && !$.os.ipad && $.os.ios && !this._player.webkitDisplayingFullscreen && this._isFirstPlay && !this._player.currentTime && (this._player.networkState !== 2 || this._player.readyState === 0) && this.load();
            if (a == "PLAYER_BEFORE_PLAY") {
                var e = this;
                $.os.android && (this.pause(), this.show())
            }
            a == "VIDEO_SEEKED" && this.show(),
            a == "VIDEO_SEEKING" && this.isDisableSeek == 1 && this.seek(this.__beforeSeekTime);
            if (a == "VIDEO_PROGRESS") {
                var f = this.getBufferPercent();
                f === 1 && APP.postMessage("PLAYER_LOADED_ALL_DATA"),
                APP.postMessage("PLAYER_BUFFER_UPDATE", f)
            }
            if (a == "VIDEO_DURATIONCHANGE") {
                var e = this;
                this.checkDurationVaild(),
                $.os.ios || (this.show(), this._validDuration || this._autoPlay && setTimeout(function() {
                    e.play()
                },
                0))
            }
            if (a == "VIDEO_TIMEUPDATE") {
                this._isFirstPlay && (APP.postMessage("PLAYER_PLAYING", this.videoList[this.videoIndex]), this._isFirstPlay = !1),
                this._newVideoPlay && (APP.postMessage("PLAYER_NEWVIDEOPLAYING", this.videoList[this.videoIndex]), this._newVideoPlay = !1),
                this.checkDurationVaild(),
                this.endTime && !this._isEnded && this.getCurrentTime() > this.endTime && this.end();
                var g = this.getCurrentTime();
                Math.abs(g - this.__beforeSeekTime) < 3 ? this.__beforeSeekTime = this.getCurrentTime() : this.isDisableSeek == 1 && this.seek(this.__beforeSeekTime),
                APP.postMessage("PLAYER_TIME_UPDATE", this.getCurrentTime())
            }
            a == "VIDEO_ENDED" && this.end(),
            a == "VIDEO_CANPLAY" && this._autoPlay && this.play(),
            a == "PLAYER_PLAY" && this.play(),
            a == "PLAYER_PAUSE" && this.pause(),
            a == "PLAYER_SEEK" && this.seek(b),
            a == "PLAYER_LOAD_VIDEO" && (this.videoIndex = 0, this._newVideoPlay = !0, $.isArray(b) ? this.videoList = b: this.videoList = [b], this.loadVideo(this.videoList[this.videoIndex])),
            a == "PLAYER_FULLSCREEN" && this.fullScreen(),
            a == "PLAYER_END" && (this.videoIndex++, this.videoList.length > this.videoIndex && this.loadVideo(this.videoList[this.videoIndex])),
            a == "PLAYER_TO_END" && this.end(),
            a == "PLAYER_CLEAR" && this.clear(),
            a == "PLAYER_TO_REMOVE" && this.remove(),
            a == "PLAYER_TO_RECOVER" && this.recover()
        },
        init: function() {
            this.player = this.nodes.video || this.rootElement,
            this._player = this.player[0],
            $.os.ios && d.weixin && this._player.setAttribute("webkit-playsinline", ""),
            this.initPlayer({
                defaultDuration: 0,
                isAutoPlay: !1,
                endTime: 0
            }),
            this._bindEvent(),
            APP.postMessage("PLAYER_AFTER_INIT")
        },
        initPlayer: function(a) {
            this._validDuration = !1,
            this._isFirstPlay = !0,
            this._isEnded = !1,
            this._defaultDuration = a.defaultDuration,
            this._currentTime = 0,
            this._autoPlay = a.isAutoPlay,
            this.endTime = a.endTime,
            this._newVideoPlay = !0
        },
        _bindEvent: function() {
            var a = this; ["click", "timeupdate", "progress", "seeked", "pause", "play", "loadstart", "canplay", "suspend", "canplaythrough", "seeking", "playing", "loadedmetadata", "waiting", "durationchange", "ended", "canplay", "operating", "operated", "error"].forEach(function(b) {
                a._player.addEventListener(b,
                function(c) {
                    b.toUpperCase() == "SEEKED" && (c.__beforeSeekTime = a.__beforeSeekTime),
                    APP.postMessage("VIDEO_" + b.toUpperCase(), c)
                },
                !1)
            })
        },
        _seek: function(a) {
            var b = this;
            if (Math.abs(b.getCurrentTime() - a) < 1) return ! 1;
            var c = this.getSeekable();
            if (c.length > 0) {
                var d = Math.ceil(c.start(c.length - 1)),
                e = Math.floor(c.end(c.length - 1));
                a = a < d ? d: a,
                a = a > e ? e: a
            }
            this.setCurrentTime(a),
            this.play(),
            APP.postMessage("PLAYER_SEEK_END")
        },
        setCurrentTime: function(a) {
            try {
                this._player.currentTime = a
            } catch(b) {
                var c = !1;
                this.player.one("canplay",
                function() {
                    c || (c = !0, this._player.currentTime = a)
                })
            }
        },
        checkDurationVaild: function() {
            if (!this._validDuration) {
                var a = this.getSeekable();
                this._defaultDuration ? a.length >= 1 && a.end(a.length - 1) != 1 && a.end(a.length - 1) != 100 && a.end(a.length - 1) != 60 ? (this._validDuration = !0, APP.postMessage("PLAYER_DURATION_AVALIABLE", this.getDuration() || this._defaultDuration)) : a.length === 1 && this.getCurrentTime() > 3 && (this._validDuration = !0, APP.postMessage("PLAYER_DURATION_AVALIABLE", this.getDuration() || this._defaultDuration)) : a.length === 1 && (this._validDuration = !0, APP.postMessage("PLAYER_DURATION_AVALIABLE", this.getDuration() || this._defaultDuration))
            }
            return this._validDuration
        },
        getSeekable: function() {
            return this._player.seekable
        },
        getCurrentTime: function() {
            return this._player.currentTime
        },
        play: function() {
            var a = this;
            APP.postMessage("PLAYER_BEFORE_PLAY");
            try {
                this._player.play(),
                $.os.ios || setTimeout(function() {
                    a._player.play()
                },
                1e3)
            } catch(b) {}
        },
        pause: function() {
            try {
                APP.postMessage("PLAYER_BEFORE_PAUSE"),
                this._player.pause()
            } catch(a) {}
        },
        show: function() {
            this.player.css("display") === "none" && this.player.css("display", "block")
        },
        remove: function() {
            this.player.css("top", "-1000px")
        },
        recover: function() {
            this.player.css("top", "0px")
        },
        getBufferPercent: function() {
            var a = this.getDuration();
            return a ? this.getBuffered() / a: 0
        },
        getDuration: function() {
            return this._player.duration
        },
        getBuffered: function() {
            var a = this._player.buffered.length - 1;
            return a < 0 ? 0 : this._player.buffered.end(a)
        },
        fullScreen: function() {
            var a = this;
            if ($.os.ios && !d.weixin) return this.play(),
            !1;
            try {
                this._player.webkitRequestFullScreen ? this._player.webkitRequestFullScreen() : this._player.webkitEnterFullscreen && this._player.webkitEnterFullscreen()
            } catch(b) {}
            this.play()
        },
        loadVideo: function(a) {
            this.clear(),
            this.initPlayer({
                defaultDuration: a.duration,
                isAutoPlay: a.isAutoPlay,
                endTime: a.endTime
            }),
            this.player.attr("src", a.src),
            this.load(),
            APP.postMessage("PLAYER_AFTER_SET_SRC", a),
            this.__beforeSeekTime = 0;
            if ($.os.ios && !$.os.ipad) {
                var b = this;
                this.pause(),
                this.show(),
                setTimeout(function() {
                    b._autoPlay && b.play()
                },
                200)
            }
            this._autoPlay && this.play()
        },
        load: function() {
            this._player.load()
        },
        seek: function(a) {
            this.show();
            var b = this.getDuration();
            APP.postMessage("PLAYER_BEFORE_SEEK"),
            this.checkDurationVaild() && this._seek(a)
        },
        end: function() {
            this._isEnded = !0,
            this._status = "END",
            this.__beforeSeekTime = 0,
            APP.postMessage("PLAYER_END", this.videoList[this.videoIndex])
        },
        clear: function() {
            this.pause(),
            this.player.attr("src", "#")
        }
    })
});
define("../../common/component/player/poster", ["../../service/utils/videoInfo", "../../service/useragent/detect"],
function(a, b, c) {
    var d = a("../../service/utils/videoInfo"),
    e = a("../../service/useragent/detect");
    APP.define("common.component.player.poster", {
        isDisable: !1,
        message: ["VIDEO_PAUSE", "VIDEO_PLAY", "PLAYINFO_VIDEO_INFO", "PLAYER_LOAD_AND_PLAY", "VIDEO_CANPLAY", "PLAYER_END"],
        onMessage: function(a, b) {
            if (a == "VIDEO_PLAY")(!$.os.ios || !!e.weixin || $.os.ipad) && this.rootElement.hide();
            else if (a == "PLAYER_END") this.isDisable = !1;
            else if (a == "VIDEO_PAUSE")(!$.os.ios || !!e.weixin || $.os.ipad) && this.rootElement.hide(),
            $.os.ios && !e.weixin && this.rootElement.attr("hasimg") === "true" && this.rootElement.show();
            else if (a == "PLAYER_LOAD_AND_PLAY") {
                var c = this;
                d.getVideoInfo(b.tvid, b.vid,
                function(a) {
                    c.setImage(a.vpic),
                    c.onShow()
                })
            } else a == "VIDEO_CANPLAY" ? this.isDisable = !0 : a === "PLAYER_VIDEO_ERROR" && b.type == "video.error" && (this.isDisable = !0, this.rootElement.hide())
        },
        init: function() {
            var a = this;
            this.nodes.image.on("error",
            function() {
                a.rootElement.attr("hasimg", "false"),
                a.rootElement.hide()
            }),
            this.nodes.image.on("click",
            function() {
                APP.postMessage("DASHBOARD_TO_SHOW"),
                APP.postMessage("PLAYBTN_TO_SHOW")
            })
        },
        setImage: function(a) {
            a && (a = a.replace(/(_\d{3}_\d{3})?(\.jpg|bmp|gif)/i,
            function(a, b, c) {
                return "_320_180" + c
            }), this.nodes.image.attr("src", a))
        },
        onShow: function() {
            this.isDisable || (this.rootElement.show(), this.rootElement.removeClass("dn"), this.nodes.image.show())
        }
    })
});
define("../../common/service/utils/videoInfo", ["../../../common/service/config/config", "../../../common/service/user/user"],
function(a, b, c) {
    var d = a("../../../common/service/config/config"),
    e = a("../../../common/service/user/user");
    c.exports = APP.createService({
        _cache: {},
        _handle: {},
        format: function(a) {
            return a.cid = a.cid || a.channelId,
            a.videoName = a.vn || a.videoName || a.name,
            a.imageUrl = a.apic || a.imageUrl || a.albumImageUrl,
            a.shareCount = a.sc || a.shareCount,
            a.qitanId = a.qitanid || a.qitanId,
            a.sourceName = a.s || a.sourceName,
            a.userId = a.uid || a.userId,
            a.userName = a.un || a.user && a.user.name,
            a.order = a.pd || a.order,
            a.period = a.ty || a.period,
            a.commentCount = a.cc || a.commentCount,
            a.albumName = a.an || a.albumName || a.videoName,
            a.sid = a.sourceId == "0" ? !1 : a.sourceId,
            a.userVideoCount = a.user && a.user.videoCount,
            a.followerCount = a.user && a.user.followerCount,
            a.isUploadVideo = a.isUploadVideo || !!(a.userId && a.userName && a.userVideoCount && a.followerCount),
            a.commentAllowed = a.commentAllowed ? "true": "false",
            a.desc = a.info || a.description,
            a.tvId = a.tvId == a.qipuId ? a.tvId: a.qipuId,
            a.tvid = a.tvid || a.tvId,
            a.vu = a.vu || a.url,
            a.aid = a.aid || a.ablumQipuId || a.albumId,
            a.vn = a.name,
            a.vpic = a.vpic || a.videoImageUrl,
            a.subt = a.subtitle,
            a.plg = a.duration,
            a.c = a.cid,
            a.cType = a.contentType || a.cType,
            a.vType = a.videoType || a.vType,
            !a.sourceId && a.solo == 1 ? a.subType = 7 : !a.sourceId && a.solo == 0 ? a.subType = 1 : !a.sourceId || (a.subType = 2),
            (a.tvid + "").length < 7 && (a.vrsid = a.tvid),
            a.bossMixerAlbum = a.bossMixerAlbum || (a.albumBossStatus == 2 ? !0 : !1),
            a.bossStatus = a.bossStatus || a.isPurchase,
            a
        },
        setCache: function(a, b) {
            var c = JSON.stringify({
                url: d.interfaces.ugcVI + b.tvid,
                dataType: "jsonp",
                cache: !0,
                data: {
                    select: b.select || "cast"
                },
                success: function(a) {
                    callback({
                        code: "A00000",
                        data: a
                    })
                },
                error: function(a) {
                    failure && failure(a)
                }
            });
            a.vType = a.userId && a.userId != "" ? a.vType != 2 : -1,
            this._cache[c] = a
        },
        getVideoInfo: function(a, b, c, d) {
            var e = this;
            this.VJInterface({
                tvid: a,
                vid: b || ""
            },
            function(a) {
                c(e.format(a.data))
            },
            d)
        },
        VJInterface: function(a, b, c) {
            var e = this;
            this.ajax({
                url: d.interfaces.ugcVI + a.tvid,
                dataType: "jsonp",
                cache: !0,
                data: {
                    select: a.select || "cast"
                },
                success: function(a) {
                    b({
                        code: "A00000",
                        data: a
                    })
                },
                error: function(a) {
                    c && c(a)
                }
            })
        },
        ajax: function(a) {
            var b = this,
            c = JSON.stringify(a);
            if (this._cache[c] && this._cache[c] != "waiting") a.success && a.success(this._cache[c]),
            a.complete && a.complete(this._cache[c]);
            else if (this._cache[c] == "waiting") this._handle[c].push({
                success: a.success,
                error: a.error,
                complete: a.complete
            });
            else if (this._cache[c] == undefined || this._cache[c] == "failed") this._handle[c] = [{
                success: a.success,
                error: a.error,
                complete: a.complete
            }],
            a.success = function(a) {
                b._cache[c] = a,
                b._handle[c].forEach(function(b) {
                    b.success && b.success(a)
                })
            },
            a.error = function(a) {
                b._cache[c] = "failed",
                b._handle[c].forEach(function(b) {
                    b.error && b.error(a)
                })
            },
            a.complete = function(a) {
                b._handle[c].forEach(function(b) {
                    b.complete && b.complete(a)
                })
            },
            $.ajax(a),
            this._cache[c] = "waiting"
        }
    })
});
define("../../common/component/player/playBtn", ["../../service/useragent/detect"],
function(a, b, c) {
    var d = a("../../service/useragent/detect"),
    e = 3e3,
    f = {
        NORMAL: 1,
        TRAIL: 2
    },
    g = {
        PLAY: 1,
        PAUSE: 2
    };
    APP.define("common.component.player.playBtn", {
        timer: null,
        message: ["VIDEO_PLAY", "VIDEO_PAUSE", "VIDEO_OPERATED", "VIDEO_CLICK", "DASHBOARD_HIDE", "PLAYBTN_TO_SHOW", "PLAYER_AFTER_SET_SRC", "PLAYER_PLAYING", "PLAYER_END"],
        onMessage: function(a, b) {
            a == "VIDEO_PLAY" && ((!$.os.ios || !!d.weixin) && this.onPlay(), this.autoHide()),
            a == "VIDEO_PAUSE" && this.onPause(),
            a == "VIDEO_OPERATED" && this.autoHide(),
            a == "VIDEO_CLICK" && this.toggleShowPlayBtn();
            if (a == "DASHBOARD_HIDE") {
                var c = this.rootElement.attr("playSign");
                c !== "play" && this.autoHide(1)
            }
            a == "PLAYBTN_TO_SHOW" && this.onShow(),
            a == "PLAYER_AFTER_SET_SRC" && (b.vtype == "TRIALVIDEOPLAYING" ? (this.model.btnStyle = f.TRAIL, this.rootElement.addClass("selected")) : this.model.btnStyle = f.NORMAL, this.onShow(), this.onPause()),
            a == "PLAYER_PLAYING" && (this.isFirstPlay = !0),
            a === "PLAYER_END" && (this.nodes.playBtn.hide(), this.nodes.pauseBtn.hide())
        },
        init: function() {
            var a = this;
            this.isFirstPlay = !1,
            this.btnType = this.rootElement.attr("playSign"),
            this.rootElement.on("click",
            function() {
                APP.postMessage("PLAYERBTN_CLICK", {
                    btnType: a.btnType
                }),
                a.btnType === "play" ? (a.onPlay(), APP.postMessage("PLAYER_PLAY")) : (a.onPause(), APP.postMessage("PLAYER_PAUSE"))
            })
        },
        autoHide: function(a) {
            var b = this;
            if ($.os.ios && !d.weixin) return ! 1;
            this.timer && clearTimeout(this.timer),
            a = a || e,
            this.timer = setTimeout(function(a) {
                b.isFirstPlay && b.rootElement.hide()
            },
            a)
        },
        onPlay: function() {
            if ($.os.ios && !d.weixin) return ! 1;
            this.rootElement.attr("playSign", "pause"),
            this.btnType = "pause",
            clearTimeout(this.timer),
            this.model.btnStyle == f.TRAIL ? (this.nodes.playBtn.hide(), this.nodes.pauseBtn.show()) : this.model.btnStyle == f.NORMAL && (this.nodes.playBtn.hide(), this.nodes.pauseBtn.hide(), this.rootElement.addClass("selected"))
        },
        onPause: function() {
            clearTimeout(this.timer),
            this.rootElement.show(),
            this.rootElement.attr("playSign", "play"),
            this.btnType = "play",
            this.model.btnStyle == f.TRAIL ? (this.nodes.playBtn.show(), this.nodes.pauseBtn.hide()) : this.model.btnStyle == f.NORMAL && (this.nodes.playBtn.hide(), this.nodes.pauseBtn.hide(), this.rootElement.removeClass("selected"))
        },
        onShow: function() {
            this.rootElement.show();
            var a = this.rootElement.attr("playSign");
            a === "pause" && this.autoHide()
        },
        toggleShowPlayBtn: function() {
            var a = this.rootElement[0].style.display;
            a === "none" || a === "" ? this.onShow() : (clearTimeout(this.timer), this.autoHide(100))
        }
    })
});
define("../../common/component/player/dashboard", ["../../service/useragent/detect"],
function(a, b, c) {
    var d = a("../../service/useragent/detect"),
    e = 3e3;
    APP.define("common.component.player.dashboard", {
        isDisable: !1,
        isDragLock: !1,
        message: ["PLAYER_AFTER_SET_SRC", "PLAYER_BUFFER_UPDATE", "PLAYER_TIME_UPDATE", "VIDEO_CANPLAY", "PLAYER_DURATION_AVALIABLE", "VIDEO_PAUSE", "VIDEO_PLAY", "VIDEO_OPERATING", "VIDEO_OPERATED", "VIDEO_CLICK", "DASHBOARD_TO_SHOW", "PLAYER_VIDEO_PLAY", "PLAYER_PLAYING", "PLAYER_CLEAR"],
        onMessage: function(a, b) {
            a == "DASHBOARD_TO_SHOW" && (this.showDashBoard(), this.autoHideDashBoard());
            if (a == "PLAYER_AFTER_SET_SRC") {
                if (b.vtype == "ADPLAYING" || b.vtype == "VIDEOWITHADPLAYING") this.isDragLock = !0,
                this.isDisable = !0,
                this.hideDashBoard();
                this.updateCurrentTime(0)
            }
            a == "PLAYER_VIDEO_PLAY" && (this.isDragLock = !1, this.isDisable = !1, this.autoHideDashBoard()),
            a == "PLAYER_DURATION_AVALIABLE" && (this.duration = parseInt(b, 10), this.duration > -1 && this.nodes.totalTime.html($.date.formatSeconds(this.duration))),
            a == "PLAYER_BUFFER_UPDATE" && this.updateLoadedProgress(b);
            if (a == "PLAYER_TIME_UPDATE" && !this.isDraging) {
                var c = parseInt(b > this.duration ? this.duration: b, 10);
                isNaN(c) || this.updateCurrentTime(c);
                var d = c / this.duration;
                this.updatePlayedProgress(d)
            }
            if (a == "VIDEO_CANPLAY") {
                if (this.isBindLock) return;
                this.isBindLock = !0;
                var e = this,
                f = -1;
                this.rootElement.on("click",
                function(a) {
                    var b = a.pageX - e.progressLeft,
                    c = b / e.durationWidth,
                    d = parseInt(c * e.duration, 10);
                    e.isDragLock || APP.postMessage("PLAYER_SEEK", d)
                });
                var g = null,
                h = null,
                i = null,
                j = null;
                this.rootElement.on("touchstart",
                function(a) {
                    g = a.touches[0].pageX,
                    h = a.touches[0].pageY,
                    console.log("dur:" + e.durationWidth)
                }),
                this.rootElement.on("touchmove",
                function(a) {
                    a.preventDefault(),
                    a.stopPropagation();
                    if (e.isDraging) {
                        var b = a.touches[0].pageX - e.progressLeft,
                        c = a.touches[0].pageY - e.progressLeft;
                        i = i == null ? g: i,
                        j = j == null ? h: j;
                        var d = b - i,
                        k = c - j,
                        l = Math.max(b, 0),
                        m = l / e.durationWidth;
                        e.isDragLock || m < 1 && (f = parseInt(m * e.duration, 10), setTimeout(function() {
                            e.updatePlayedProgress(m),
                            !isNaN(f) && !isNaN(e.duration) && e.updateCurrentTime(f)
                        },
                        0))
                    }
                    i = b - e.progressLeft,
                    j = c - e.progressLeft
                }),
                this.rootElement.on("touchend",
                function(a) {
                    g = null,
                    h = null,
                    i = null,
                    j = null
                }),
                this.nodes.btn.on("touchstart",
                function() {
                    e.isDraging = !0,
                    e.isDragLock || APP.postMessage("VIDEO_OPERATING")
                }),
                this.nodes.btn.on("touchend",
                function(a) {
                    var b = Math.max(a.pageX - e.progressLeft, 0);
                    if (b > e.durationWidth) return ! 1;
                    e.isDraging = !1,
                    e.isDragLock || (APP.postMessage("PLAYER_SEEK", f), APP.postMessage("VIDEO_OPERATED"))
                })
            }
            a == "VIDEO_PLAY" && (this.autoHideDashBoard(), APP.postMessage("DASHBOARD_AFTER_HIDE")),
            a == "VIDEO_PAUSE" && (clearTimeout(this.timer), this.showDashBoard()),
            a == "VIDEO_OPERATING" && clearTimeout(this.timer),
            a == "VIDEO_OPERATED" && (clearTimeout(this.timer), this.autoHideDashBoard()),
            a == "VIDEO_CLICK" && this.toggleDashBoard(),
            a == "PLAYER_PLAYING" && (this.isFirstPlay = !0),
            a == "PLAYER_CLEAR" && this.updateCurrentTime(0)
        },
        init: function() {
            this.duration = -1,
            this.isDraging = !1,
            this.isBindLock = !1,
            this.durationWidth = this.nodes.progress.width(),
            this.btnWidth = this.nodes.btn.width(),
            this.progressLeft = this.nodes.progress.offset().left,
            this.isDragLock = !0,
            this.isDisable = !0,
            this.isFirstPlay = !1
        },
        updatePlayedProgress: function(a) {
            var b = a * 100 + "%";
            this.nodes.played.css("width", b),
            this.nodes.btn.css("left", b)
        },
        updateLoadedProgress: function(a) {
            var b = a * 100 + "%";
            this.nodes.loaded.css("width", b)
        },
        updateCurrentTime: function(a) {
            a >= 0 && this.nodes.currentTime.html($.date.formatSeconds(a))
        },
        autoHideDashBoard: function(a) {
            var b = this;
            if ($.os.ios && !d.weixin) return ! 1;
            clearTimeout(this.timer),
            a = a || e,
            this.timer = setTimeout(function(a) {
                b.hideDashBoard()
            },
            a)
        },
        hideDashBoard: function() {
            var a = this;
            setTimeout(function() {
                a.isFirstPlay && a.rootElement.hide()
            },
            100),
            APP.postMessage("DASHBOARD_HIDE")
        },
        showDashBoard: function() {
            var a = this;
            a.rootElement.show(),
            APP.postMessage("DASHBOARD_SHOW")
        },
        toggleDashBoard: function(a) {
            var b = this,
            c = b.rootElement[0].style.display;
            c === "none" || c === "" ? (b.showDashBoard(), b.autoHideDashBoard()) : (clearTimeout(this.timer), b.hideDashBoard())
        }
    })
});
define("../../common/component/player/fullScreen", [],
function(a, b, c) {
    APP.define("common.component.player.fullScreen", {
        message: ["PLAYER_VIDEO_ERROR"],
        onMessage: function(a, b) {
            a !== "PLAYER_VIDEO_ERROR" || b.type !== "video.checkVip" || b.code !== "concurrentTip" && b.code !== "forbidTip" ? this.rootElement.removeClass("hide") : this.rootElement.addClass("hide")
        },
        init: function() {
            this.rootElement.on("click",
            function(a) {
                a.stopPropagation(),
                APP.postMessage("PLAYER_FULLSCREEN")
            })
        }
    })
});
define("./behavior/player", ["../../../common/service/player/advertisement", "../../../common/service/utils/videoInfo", "../../../common/service/useragent/detect", "../service/qiyiVideoSource"],
function(a, b, c) {
    var d = a("../../../common/service/player/advertisement").init(),
    e = a("../../../common/service/utils/videoInfo"),
    f = a("../../../common/service/useragent/detect"),
    g = {},
    h = null,
    i = f.weixin,
    j = !1;
    APP.createBehavior("common.behavior.player", {
        init: function() {},
        getVideoSourceModel: function(b) {
            if (typeof b == "string") switch (b) {
            case "taiwan":
                return a("../service/qiyiVideoSource")
            }
        },
        bindTimeupdate: function(a, b) {
            g = {
                handle: a,
                time: b
            }
        },
        message: ["PLAYER_LOAD_AND_PLAY", "PLAYER_AFTER_SET_SRC", "PLAYER_PLAYING", "PLAYER_TIME_UPDATE", "PLAYER_VIDEO_PLAY", "PLAYER_SET_SOURCE"],
        onMessage: function(a, b) {
            a == "PLAYER_SET_SOURCE" && (h = b);
            if (a == "PLAYER_PLAYING") { (b.vtype == "VIDEOPLAYING" || b.vtype == "TRIALVIDEOPLAYING") && APP.postMessage("PLAYER_VIDEO_PLAY", b);
                if (b.vtype == "VIDEOWITHADPLAYING") if (b.adTime) {
                    var c = !0,
                    e = setTimeout(function() {
                        c = !1
                    },
                    (b.adTime - 1) * 1e3);
                    this.bindTimeupdate(function() {
                        c || APP.postMessage("PLAYER_VIDEO_PLAY", b)
                    },
                    b.adTime)
                } else APP.postMessage("PLAYER_VIDEO_PLAY", b)
            }
            a == "PLAYER_TIME_UPDATE" && g.time && g.time <= b && (g.handle(), g = {}),
            a == "PLAYER_AFTER_SET_SRC" && (b.vtype == "ADPLAYING" || b.vtype == "VIDEOWITHADPLAYING") && APP.postMessage("PLAYER_DISABLE_SEEK"),
            a == "PLAYER_VIDEO_PLAY" && APP.postMessage("PLAYER_ENABLE_SEEK"),
            a == "PLAYER_LOAD_AND_PLAY" && h.init({
                player: $("#video"),
                ADPlayerID: d.getAdId(),
                tvid: b.tvid,
                vid: b.vid,
                aid: b.aid,
                isUGC: b.isUGC,
                qipuId: b.qipuId,
                publicLevel: b.publicLevel,
                rate: b.rate,
                startTime: b.startTime,
                endTime: b.endTime,
                noAD: b.noAD || !1
            },
            function(a) {
                for (var c in a) {
                    var d = a[c];
                    $.extend(d, {
                        isAutoPlay: j
                    }),
                    j = !0,
                    b.noPtPW || ((d.startTime || d.endTime) && APP.postMessage("SKIPPTPW_VIDEO_PTPW_INFO", {
                        ptTime: d.startTime || 0,
                        pwTime: d.endTime || 999999999
                    }), d.startTime = 0, d.endTime = 999999999)
                }
                APP.postMessage("PLAYER_LOAD_VIDEO", a)
            },
            function(a, b, c) {
                APP.postMessage("PLAYER_CLEAR"),
                APP.postMessage("PLAYER_VIDEO_ERROR", {
                    type: a,
                    code: b,
                    param: c
                })
            },
            function() {})
        }
    })
});
define("../../common/service/player/advertisement", ["../useragent/detect"],
function(a, b, c) {
    var d = a("../useragent/detect");
    c.exports = APP.createService({
        init: function() {
            return this
        },
        getAdId: function() {
            return d.weixin ? $.os.ios ? "qc_105092_300415": "qc_105092_300415": $.os.ios ? "qc_100001_100102": "qc_100001_100186"
        }
    })
});
define("./service/qiyiVideoSource", ["../../../common/service/RHF8VG/index", "../../../common/service/useragent/detect", "../../../common/service/user/user", "../../../common/service/utils/videoInfo", "../../../common/service/video/videoStrategy", "../../../common/service/utils/util"],
function(a, b, c) {
    var d = a("../../../common/service/RHF8VG/index"),
    e = a("../../../common/service/useragent/detect"),
    f = a("../../../common/service/user/user"),
    g = a("../../../common/service/utils/videoInfo"),
    h = a("../../../common/service/video/videoStrategy"),
    i = a("../../../common/service/utils/util"),
    j = {
        A00012: "需要前端请求广告mixer接口",
        A00015: "会员鉴权成功",
        A00000: "不请求广告直接播放"
    },
    k = {
        A00001: "参数错误",
        A00004: "数据不存在",
        A00013: "IP限制",
        A00110: "平台受限",
        A00111: "地域受限",
        A00002: "请求无权限",
        A00003: "内部请求异常",
        A00010: "调用passport获取用户信息失败",
        A00011: "调用会员鉴权接口失败",
        A00101: "ua错误",
        Q00201: "无版权(紧急处理已下线视频@20140806)",
        Q00202: "版权下线(紧急处理已下线视频@20140806)",
        Q00203: "其他原因下线(紧急处理已下线视频@20140806)",
        A00113: "UGC 视频审核未通过",
        A00114: "不允许合作(bd)播放(站外播放器)",
        A00115: "不允许分享(sns)播放(站外播放器)",
        A00301: "私密视频-仅自己可见",
        A00302: "私密视频-密码错误"
    },
    l = [],
    m = null;
    c.exports = APP.createService({
        init: function(a, b, c, d) {
            this.load(a, b, c, d)
        },
        bindAdParam: function(a) {
            var b = "iphone";
            Zepto.os.ipad ? b = "ipad": Zepto.os.android && (b = "gphone");
            var c = $.cookie.get("QC006") || "",
            d = JSON.parse($.cookie.get("P00002") || "{}").uid,
            e = Zepto.crypto.md5(c + "webEventId" + (new Date).getTime()),
            f = Zepto.crypto.md5(c + "videoEventId" + (new Date).getTime());
            return {
                playerId: a.adId,
                tvId: (a.tvid || "") + "",
                vId: (a.vid || "") + "",
                userId: c,
                passportId: d || "",
                clientIP: "10.0.1.12",
                resIndex: a.rate || "",
                albumId: (a.aid || "") + "",
                deviceType: b,
                deviceVersion: "3.2",
                location: location.href,
                webEventId: e,
                channelId: (a.cid || "") + "",
                videoEventId: f,
                isUGC: !!a.isUGC,
                duration: a.duration,
                formatType: this.videoFormat()
            }
        },
        videoFormat: function() {
            return $.os.ios || e.qq && e.qq_gt_5_2 && e.android_gt_4 ? "m3u8": "mp4"
        },
        load: function(a, b, c, d) {
            a.ADPlayerID = a.ADPlayerID;
            var e = this;
            this.ads = [],
            this.vfrm = a.vfrm || "",
            this.aid = a.aid,
            this.tvid = a.tvid,
            this.vid = a.vid,
            this.player = a.player,
            this.qipuId = a.qipuId,
            this.publicLevel = a.publicLevel,
            this.play_vd = a.rate,
            this.startTime = a.startTime > 0 ? a.startTime: 0,
            this.endTime = a.endTime > 0 ? a.endTime: 0,
            this.noAD = a.noAD || !1,
            e.STATE = {
                ADPLAYING: 1,
                VIDEOPLAYING: 2,
                VIDEOPLAYINGWITHNOAD: 3
            },
            e.NEXTSTATE = {
                PLAYAD: 1,
                PLAYADEND: 2,
                PLAYVIDEOEND: 3
            },
            m && m.stop(),
            h.validPlatform(this.tvid, this.vfrm, this.aid, this.vid).then(function(f, g) {
                e.loadVideoInfo(a,
                function(c) {
                    c[0].pubLevel = a.publicLevel;
                    for (var d in c) c[d].index = +d;
                    b(c),
                    (g === "1" || g === "2") && APP.postMessage("FORCE_DIVERSION", {
                        templateCode: g,
                        aid: f
                    })
                },
                c, d)
            },
            function(a, b, d) {
                c("video.error", "forceDiversion", {
                    tvid: a,
                    aid: b,
                    vid: d,
                    code: "A00110"
                })
            })
        },
        auth: function(a, b, c, d) {
            var e = a.ADPlayerID,
            g = f.getUid(),
            h = {
                uid: a.uid || f.getUid() || "",
                cupid: a.cupid || e || "",
                platForm: "h5",
                qyid: f.getAnonymousUid() || "",
                agenttype: $.os.ios ? 12 : 13
            };
            $.cookie.get("QC004") === "0" && (h.nolimit = 1);
            var k = a.tvid,
            l = a.vid,
            m = "http://cache.m.iqiyi.com/jp/tmts/" + k + "/" + l + "/";
            h.type = this.videoFormat(),
            h.rate = a.rate || 1,
            h = i.getTmtsVf(k, l, h),
            console.track.dot("请求tmts接口传参数为, tvid: " + k + " vid: " + l + " options: " + JSON.stringify(h)),
            window.__getvideourl_start = (new Date).getTime() - window.__page_start;
            var n = $.Deferred(function(a) {
                $.ajax({
                    url: m,
                    dataType: "jsonp",
                    timeout: 3e3,
                    cache: !0,
                    data: h,
                    jsonpCallback: "tmtsCallback",
                    complete: function(a, b) {
                        console.track.dot("tmts接口调用完毕，执行complete事件, data: " + JSON.stringify(m))
                    },
                    success: function(b, c, d) {
                        o = 0,
                        window.__getvideourl_end = (new Date).getTime() - window.__page_start,
                        console.track.dot("tmts接口调用成功， data: " + JSON.stringify(b)),
                        a.resolve(b)
                    },
                    error: function(b, c, d) {
                        console.track.dot("tmts接口调用失败， url: , " + JSON.stringify(m) + " error: " + d),
                        console.error({
                            t: "interface_failure_internal",
                            name: "TmtsError",
                            methods: "all",
                            msg: JSON.stringify({
                                code: c,
                                tvid: k,
                                vid: l
                            })
                        }),
                        a.reject(d)
                    }
                })
            }),
            o = 2; (function() {
                var a = arguments.callee;
                n.then(function(a) {
                    a && a.code === "A00000" ? (a && a.data && a.data.ds in j && (a.src = a.data.m3u + (a.data.m3u.indexOf("?") !== -1 ? "&": "?") + "qypid=" + k + "_31", a.status = a.data.ds), d(a), b(a)) : (d(a), c(a))
                },
                function(b) {
                    o > 0 && (o--, console.track.dot("tmts接口调用失败， retry"), d(b), c(b), a())
                })
            })()
        },
        initAd: function(a, b) {
            var c = this,
            d = (new Date).getTime(),
            e = window.CupidAdSdk.AdPadding,
            f = a.player || null;
            m && m.stop(),
            m = new e(f, this.bindAdParam(a)),
            window.Q.PageInfo.adPlayerLoaded = !0;
            var g = function(a) {
                if (a.type == e.EVENT_CUPID_NO_AD) console.track.dot("广告sdk执行完毕，没有广告播放内容"),
                b && b();
                else {
                    console.track.dot("广告sdk执行完毕，广告数据：" + JSON.stringify(a.data));
                    if (b) {
                        var f = a.data.ads,
                        g = null,
                        h = c.videoFormat();
                        if (h === "mp4") b(f);
                        else if (h === "m3u8") {
                            var i = [];
                            f[0].adTime = f[0].duration - f[0].startTime,
                            f[0].url = a.data.src,
                            i.push(f[0]),
                            b(i)
                        }
                    }
                }
                console.log({
                    t: "interface_success",
                    name: "adRequestTime",
                    methods: "random 5",
                    tm: (new Date).getTime() - d
                })
            };
            f && (m.addEventListener(e.EVENT_CUPID_READY, g), m.addEventListener(e.EVENT_CUPID_NO_AD, g)),
            m.start && m.start()
        },
        loadVideoInfo: function(a, b, c, d) {
            var f = a.ADPlayerID,
            h = this,
            i = {},
            j = {},
            k = a.tvid,
            l = a.vid,
            m = a.aid,
            n = a.isUGC,
            o = a.duration,
            f = f,
            p = {},
            q = a.rate || this.user_set_stream || 1,
            q = $.cookie.get("play_stream") || q,
            r = h.videoFormat(),
            s = $.Deferred(),
            t = $.Deferred();
            g.getVideoInfo(k, l,
            function(a) {
                t.resolve(a)
            },
            function() {
                t.resolve({})
            }),
            $.when(s, t, a).done(function(a, c, d) {
                for (index in a) {
                    var e = a[index];
                    if (e.vtype == "VIDEOPLAYING" || e.vtype == "VIDEOWITHADPLAYING" || e.vtype == "TRIALVIDEOPLAYING") e.startTime = d.startTime ? d.startTime > 0 ? d.startTime: 0 : c.startTime == -1 ? 0 : c.startTime,
                    e.endTime = d.endTime ? d.endTime > 0 ? d.endTime: 0 : c.endTime == -1 ? 0 : c.endTime
                }
                b(a)
            });
            var u = (new Date).getTime();
            h.auth({
                rate: q,
                tvid: k,
                vid: l,
                cupid: f
            },
            function(b) {
                i = b.data,
                m = m || i.aid,
                p.duration = i.playInfo.plg || i.duration,
                j = i.playInfo || {},
                p.adTime = 0,
                p.tvid = k,
                p.vid = l,
                p.__vInfo = i,
                p.__rate = q,
                h.play_vd = b.data.vd,
                APP.postMessage("PLAYER_DURATION_AVALIABLE", p.duration),
                !$.os.ios && e.miuivideo && (b.status = "A00000"),
                h.noAD && (b.status = "A00000", APP.postMessage("VIP_NOAD_VIDEO", {
                    tvid: k
                }));
                if (b.data && b.data.vipInfo) {
                    var d = b.data.vipInfo,
                    g = d.status;
                    if (g === "A00000") APP.postMessage("VIDEOSOURCE_HEARTBEAT", {
                        tvid: k,
                        param: d.keepalive
                    });
                    else {
                        if (g === "A10001") {
                            c("video.checkVip", "concurrentTip", {
                                tvid: k,
                                param: d.keepalive,
                                text: d.text
                            }),
                            s.reject({
                                tvid: k,
                                param: d.keepalive,
                                text: d.text
                            });
                            return
                        }
                        if (g === "A10002") {
                            c("video.checkVip", "forbidTip", {
                                tvid: k,
                                param: d.unfeeze_times,
                                text: d.text
                            }),
                            s.reject({
                                tvid: k,
                                param: d.unfeeze_times,
                                text: d.text
                            });
                            return
                        }
                    }
                }
                b.status !== "A00012" && APP.postMessage("NO_VIDEO_AD");
                if (b.status === "A00000") {
                    console.track.dot("tmts接口调用完毕，播放地址：" + b.src),
                    h.videoSign = h.STATE.VIDEOPLAYINGWITHNOAD,
                    window.__withoutadvideourlready = (new Date).getTime(),
                    p.src = b.src,
                    p.vtype = "VIDEOPLAYING",
                    s.resolve([p]);
                    if (!b.src) {
                        console.error({
                            t: "interface_failure_internal",
                            name: "TmtsNoSrc",
                            methods: "all",
                            msg: JSON.stringify({
                                code: b.code,
                                tvid: k,
                                vid: l
                            })
                        }),
                        c("video.error", "noSrc", {
                            code: b.code,
                            tvid: k,
                            vid: l
                        }),
                        s.reject({
                            code: b.code,
                            tvid: k,
                            vid: l
                        });
                        return
                    }
                } else b.status === "A00012" ? (console.track.dot("tmts接口调用完毕，需要请求广告sdk"), window.__ad_start = new Date, h.initAd({
                    adId: f,
                    aid: m,
                    cid: i.cid,
                    rate: q,
                    tvid: k,
                    vid: l,
                    isUGC: n,
                    duration: p.duration,
                    player: h.player[0] || h.player
                },
                function(c) {
                    var d = [];
                    if (r == "mp4") if (c && c.length > 0) {
                        for (var e = 0,
                        f = c.length; e < f; e++) {
                            var g = {},
                            h = c[e];
                            h.url && (g.src = h.url, g.adTime = h.duration - h.startTime || 0, g.duration = h.duration, g.vtype = "ADPLAYING", d.push(g))
                        }
                        p.src = b.src,
                        p.adTime = 0,
                        p.pubLevel = a.pubLevel,
                        p.__vInfo = i,
                        p.__rate = q,
                        p.vtype = "VIDEOPLAYING",
                        d.push(p)
                    } else p.src = b.src,
                    p.__vInfo = i,
                    p.__rate = q,
                    p.vtype = "VIDEOPLAYING",
                    d.push(p);
                    else r == "m3u8" && (c && c.length > 0 ? (p.src = c[0].url, p.adTime = c[0].duration - c[0].startTime || 0, p.vtype = "VIDEOWITHADPLAYING") : (p.src = b.src, p.adTime = 0, p.vtype = "VIDEOPLAYING"), p.pubLevel = a.pubLevel, p.__vInfo = i, p.__rate = q, d.push(p));
                    s.resolve(d)
                })) : b.status === "A00015" && (b.data.prv == "1" ? (c("video.vipckfail", "vipckfail", {
                    aid: m || b.data.playInfo && b.data.playInfo.aid,
                    pre: !0,
                    previewType: b.data.previewType == "2" ? "whole": "6min"
                }), h.videoSign = h.STATE.VIDEOPLAYINGWITHNOAD, p.src = b.src, p.__vInfo = i, p.__rate = q, b.data.previewType == "2" ? p.vtype = "VIDEOPLAYING": p.vtype = "TRIALVIDEOPLAYING", window.__withoutadvideourlready = (new Date).getTime(), s.resolve([p])) : (console.track.dot("会员鉴权成功，播放地址：" + b.src), h.videoSign = h.STATE.VIDEOPLAYINGWITHNOAD, p.src = b.src, p.__vInfo = i, p.__rate = q, p.vtype = "VIDEOPLAYING", window.__withoutadvideourlready = (new Date).getTime(), s.resolve([p])));
                i.__rate = q
            },
            function(a) {
                APP.postMessage("NO_VIDEO_AD");
                if (a.data && a.data.vipInfo) {
                    var b = a.data.vipInfo,
                    d = b.status;
                    if (d === "A10001") {
                        c("video.checkVip", "concurrentTip", {
                            tvid: k,
                            param: b.keepalive,
                            text: b.text
                        }),
                        s.reject({
                            tvid: k,
                            param: b.keepalive,
                            text: b.text
                        });
                        return
                    }
                    if (d === "A10002") {
                        c("video.checkVip", "forbidTip", {
                            tvid: k,
                            param: b.keepalive,
                            text: b.text
                        }),
                        s.reject({
                            tvid: k,
                            param: b.keepalive,
                            text: b.text
                        });
                        return
                    }
                }
                a.code === "A00001" || a.code === "A00002" || a.code === "A00003" ? (c("video.error", "noSrc", {
                    tvid: k,
                    code: a.code
                }), s.reject({
                    tvid: k,
                    code: a.code
                })) : a.code === "A00004" ? a.data && a.data.prv == "1" ? (c("video.vipckfail", "vipckfail", {
                    aid: m || a.data.playInfo && a.data.playInfo.aid,
                    pre: !0,
                    previewType: "noSrc"
                }), s.reject({
                    aid: m || a.data.playInfo && a.data.playInfo.aid,
                    pre: !0,
                    previewType: "noSrc"
                })) : (c("video.error", "offline", {
                    tvid: k,
                    code: a.code
                }), s.reject({
                    tvid: k,
                    code: a.code
                })) : a.code === "A00011" ? (c("video.vipckfail", "vipckfail", {
                    aid: m || a.data.playInfo && a.data.playInfo.aid,
                    pre: !1,
                    code: a.code
                }), s.reject({
                    aid: m || a.data.playInfo && a.data.playInfo.aid,
                    pre: !1,
                    code: a.code
                })) : a.code === "A00013" ? (c("video.error", "oversea", {
                    tvid: k,
                    code: a.code
                }), s.reject({
                    tvid: k,
                    code: a.code
                })) : a.code === "Q00201" || a.code === "Q00202" || a.code === "Q00203" ? (c("video.error", "offline", {
                    tvid: k,
                    code: a.code
                }), s.reject({
                    tvid: k,
                    code: a.code
                })) : a.code == "A00101" ? (c("video.error", "mtexpire", {
                    tvid: k,
                    code: a.code
                }), s.reject({
                    tvid: k,
                    code: a.code
                })) : a.code === "A00110" ? (c("video.error", "platformLimit", {
                    tvid: k,
                    aid: m,
                    vid: l,
                    code: a.code
                }), s.reject({
                    tvid: k,
                    aid: m,
                    vid: l,
                    code: a.code
                })) : a.code === "A00111" ? (a.ctl && a.ctl.area == 301 ? c("video.error", "oversea", {
                    tvid: k,
                    code: a.code
                }) : c("video.error", "domestic", {
                    tvid: k,
                    code: a.code
                }), s.reject({
                    tvid: k,
                    code: a.code
                })) : a.code === "A00113" ? (c("video.error", "ugcUnpass", {
                    tvid: k,
                    code: a.code
                }), s.reject({
                    tvid: k,
                    code: a.code
                })) : a.code === "A00114" || a.code === "A00115" ? (c("video.error", "playerForbidden", {
                    tvid: k,
                    code: a.code
                }), s.reject({
                    tvid: k,
                    code: a.code
                })) : a.code === "A00301" || a.code === "A00302" ? (c("video.error", "private", {
                    tvid: k,
                    code: a.code
                }), s.reject({
                    tvid: k,
                    code: a.code
                })) : a.code === "A00116" || a.code === "A00117" ? (c("video.error", "drmLimit", {
                    tvid: k,
                    aid: m,
                    vid: l,
                    code: a.code
                }), s.reject({
                    tvid: k,
                    aid: m,
                    vid: l,
                    code: a.code
                })) : (c("video.error", "noSrc", {
                    tvid: k
                }), s.reject({
                    tvid: k
                }))
            },
            function(a) {
                d()
            })
        }
    })
});
define("../../common/service/RHF8VG/index", [],
function(require, exports, module) {
    var _RHF8VG = {},
    topDomain = location.href.replace(/.+[\.\/]([A-z]+\.[A-z]+)\/[^\/].+/, "$1"),
    ajaxWithRHF8VG = function(url, options, success, failure) {
        var method = options.method || "GET",
        jsonp = options.jsonp,
        timeout = options.timeout || 5e3,
        reg = /\/\/([^\/]+)(\/.+)$/,
        urlList = reg.exec(url);
        if (urlList.length != 0) {
            var server = urlList[1];
            url = urlList[2]
        }
        var params = {
            server: server,
            bird_src: options.srcKey,
            url: url + "?" + $.url.jsonToQuery(options.param)
        };
        $.ajax({
            url: "http://apollo.iqiyi.com/get_token",
            dataType: "jsonp",
            jsonp: "callback",
            success: function(data) {
                if (data.code == "A00000") {
                    var ip = data.ip,
                    target = decodeURIComponent(params.url),
                    input = target,
                    timeStamp = Math.floor((new Date).getTime() / 1e3),
                    sign = eval(data.sdk),
                    options = {
                        target: target,
                        server: params.server,
                        token: data.token,
                        bird_src: params.bird_src,
                        sign: sign,
                        bird_t: timeStamp
                    },
                    requestUrl = "http://apollo." + topDomain + "/validate?" + $.param(options);
                    success && request(requestUrl, success, failure)
                }
            }
        });
        var request = function(a, b, c) {
            $.ajax({
                url: a,
                dataType: "jsonp",
                data: {},
                type: method,
                timeout: timeout,
                success: function(a) {
                    b && b(a)
                },
                error: function(a, b) {
                    c && c({
                        code: "E0000"
                    })
                }
            })
        }
    };
    _RHF8VG.ajax = ajaxWithRHF8VG,
    module.exports = _RHF8VG
});
define("../../common/service/video/videoStrategy", ["../config/config", "../deferredRequest/deferredRequest", "../utils/videoInfo"],
function(a, b, c) {
    function k(a, b, c, d) {
        b = l(b),
        a = a || "";
        var e = $.Deferred();
        return $.when(n(a, b), m(a, d, c)).then(function(b, c) {
            s(b.packageUrl),
            b.strategy == k.strategyDiver ? e.reject(a, c, d) : e.resolve(c, b.strategy)
        },
        e.resolve),
        e
    }
    function l(a) {
        return a ? APP.$.cookie.set("QC015", a) : a = APP.$.cookie.get("QC015"),
        a || ""
    }
    function m(a, b, c) {
        var d = $.Deferred();
        return c ? d.resolve(c) : f.getVideoInfo(a, b,
        function(a) {
            d.resolve(a.aid)
        },
        function() {
            d.reject()
        }),
        d
    }
    function n(a, b) {
        return p(a, b).then(function(a) {
            return o(a.strategy),
            a
        })
    }
    function o(a) {
        a && (Q.template_code = a)
    }
    function p(a, b) {
        var c = $.Deferred(),
        f = Array.prototype.slice.call(arguments).join("");
        return g[f] ? setTimeout(function() {
            c.resolve({
                strategy: g[f].strategy
            })
        },
        100) : e.jsonp(d.interfaces.cloudControl.platformStrategy, {
            _tv_id_: a,
            vfm: b
        }).then(function(a) {
            a.code === "A00000" ? (c.resolve(a.data || {}), g[f] = {
                strategy: a.data ? a.data.strategy: ""
            }) : c.reject()
        },
        c.reject),
        c
    }
    function q(a, b, c, d) {
        var e = [a, b].join("");
        g[e] = {
            strategy: c,
            packageUrl: d
        },
        s(d)
    }
    function r() {
        return i[j] || h[j]
    }
    function s(a) {
        a && (i[j] = a)
    }
    "use strict";
    var d = a("../config/config"),
    e = a("../deferredRequest/deferredRequest"),
    f = a("../utils/videoInfo"),
    g = {},
    h = {
        android: "http://mbdapp.iqiyi.com/j/ap/iqiyi_1845.apk",
        ios: "http://ota.iqiyi.com/adf/781a99e96c5540c0aaa96cb3ffe35958"
    },
    i = {},
    j = $.os.android ? "android": "ios";
    c.exports = APP.createService({
        validPlatform: k,
        setSyncCache: q,
        getPackageUrl: r
    }),
    k.strategyDiver = "3"
});
define("../../common/service/deferredRequest/deferredRequest", [],
function(a, b, c) {
    c.exports = APP.createService({
        get: function(a, b) {
            return $.ajax({
                url: a,
                data: b || {},
                type: "GET"
            })
        },
        post: function(a, b) {
            return $.ajax({
                url: a,
                data: b || {},
                type: "POST"
            })
        },
        jsonp: function(a, b) {
            return $.ajax({
                url: a,
                data: b || {},
                dataType: "jsonp"
            })
        }
    })
});
define("./behavior/VVPingback", ["../../../common/service/pingback/vvPingback"],
function(a) {
    var b = a("../../../common/service/pingback/vvPingback"),
    c = null,
    d = null,
    e = 0,
    f = !1;
    APP.createBehavior("page.playMovie.behavior.VVPingback", {
        message: ["PLAYER_LOAD_AND_PLAY", "PLAYER_AFTER_SET_SRC", "PLAYER_TIME_UPDATE", "PLAYER_PAUSE", "PLAYER_END", "PLAYER_PLAYING", "PLAYER_VIDEO_PLAY", "VIDEO_PAUSE", "VIDEO_PLAY"],
        onMessage: function(a, g) {
            a === "PLAYER_VIDEO_PLAY" && (f || this.sendStartPingback(), this.sendTimingPingback()),
            a === "PLAYER_AFTER_SET_SRC" && g.index === 0 && (b.refreshEid(), this.sendReadyPingback()),
            a === "PLAYER_LOAD_AND_PLAY" && (clearTimeout(c), g.videoFrom == "ResolutionSwitch" ? f = !0 : (f = !1, e = 0), this.tvid = g.tvid, this.vid = g.vid, this.plid = g.plid || this.plid || ""),
            a === "PLAYER_TIME_UPDATE" && (this.currentTime = g),
            a === "VIDEO_PLAY" && (this.playerStatus = "PLAY");
            if (a === "VIDEO_PAUSE" || a == "PLAYER_BEFORE_PAUSE") {
                clearTimeout(d);
                var h = this;
                d = setTimeout(function() {
                    h.playerStatus === "PAUSE" && h.sendPausePingback()
                },
                1e3),
                this.playerStatus = "PAUSE"
            }
            a === "PLAYER_END" && (this.playerStatus = "END", g.vtype != "ADPLAYING" && (this.sendPausePingback(), this.sendEndPingback()))
        },
        init: function() {
            this.tvid = "-1",
            this.vid = "-1",
            this.playerStatus = "PLAY",
            this.isPlaying = !1
        },
        sendReadyPingback: function() {
            this.sendVV({
                t: "15"
            })
        },
        sendStartPingback: function() {
            this.sendVV({
                t: "1"
            })
        },
        sendTimingPingback: function() {
            var a = this,
            b = 1e3;
            c && clearTimeout(c),
            c = setTimeout(function d() {
                c = setTimeout(d, b);
                if (a.playerStatus == "END" || a.playerStatus == "PAUSE") return;
                e++,
                e === 15 || e === 75 ? a.sendVV({
                    t: "2",
                    tm: Math.min(e, 60)
                }) : (e - 75) % 120 == 0 && (a.sendVV({
                    t: "2",
                    tm: 120
                }), e = 75)
            },
            b)
        },
        sendEndPingback: function() {
            this.sendVV({
                t: "13"
            })
        },
        sendPausePingback: function() {
            var a = 0;
            if (e > 75) a = e - 75;
            else if (e > 15) a = e - 15;
            else {
                if (! (e > 0)) return;
                a = e
            }
            this.sendVV({
                t: "2",
                tm: a
            }),
            e = 75
        },
        sendVV: function(a) {
            a.rfr = a.rfr || this.getRefer(),
            a.tvid = a.tvid || this.tvid,
            a.vid = a.vid || this.vid,
            this.plid && (a.plid = this.plid),
            b.send(a)
        },
        getRefer: function g() {
            return g.refer = g.refer || document.referrer,
            g.href = g.href || location.href,
            !g.useHref && g.href !== location.href && (g.refer = g.href, g.useHref = !0),
            g.refer
        }
    })
});
define("../../common/service/pingback/vvPingback", ["../utils/util", "../user/user", "../useragent/detect", "../utils/videoInfo"],
function(a, b, c) {
    var d = a("../utils/util"),
    e = a("../user/user"),
    f = a("../useragent/detect"),
    g = a("../utils/videoInfo");
    c.exports = APP.createService({
        init: function() {
            this.veid = 0,
            this.os = "unknown",
            this.sum = 0,
            this.timer = null
        },
        getWeid: function() {
            var a = $.cookie.get("QC112");
            return a || (a = $.crypto.md5(e.getAnonymousUid() + "weid" + new Date * 1), $.cookie.set("QC112", a, {
                path: "/",
                domain: "iqiyi.com"
            })),
            a
        },
        removeWeid: function() {
            $.cookie.remove("QC112", {
                path: "/",
                domain: "iqiyi.com"
            })
        },
        getEid: function() {
            var a = "";
            return this.veid || (a = e.getAnonymousUid(), this.veid = $.crypto.md5(a + "veid" + new Date * 1)),
            this.veid
        },
        refreshEid: function() {
            return this.veid = 0,
            this.getEid()
        },
        getPlatform: function() {
            var a, b = "2",
            c = "20",
            d = "201",
            e = "1011";
            return $.url.getQueryValue(location.href, "version") && (a = "noauth"),
            a == "live" ? e = "2016": a == "noauth" && (e = "1015"),
            {
                pf: b,
                p: c,
                p1: d,
                p2: e
            }
        },
        getOS: function() {
            return ! $.os.ios && !f.windowphone ? this.os = "android": $.os.ios && !f.windowphone ? this.os = "ios": f.windowphone ? this.os = "windows": f.blackberry && (this.os = "blackberry"),
            this.os || ""
        },
        getAuthKey: function(a, b, c, d) {
            return window.cmd5ly ? window.cmd5ly(a + b + c + d) : ""
        },
        getVIPStatus: function(a) {
            var b = {
                NOVIP: "-1",
                BANNED: "0",
                VALID: "1",
                SILVER: "2",
                GOLD: "3",
                PLATINUM: "4"
            };
            e.getVIPStatus(function(c) {
                a(b[c] || "-1")
            })
        },
        _send: function(a, b) {
            a = a || "http://msg.iqiyi.com/b";
            var c = new Image;
            c.onload = c.onerror = c.onabort = function() {
                c.onload = c.onerror = c.onabort = null,
                c = null
            };
            var d = [];
            for (var e in b) d.push(e + "=" + encodeURIComponent(b[e]));
            c.src = a + "?" + d.join("&")
        },
        send: function(a) {
            var b = this,
            c = {
                s1: 1,
                s2: location.href,
                rfr: d.getRefer(),
                msrc: d.getMsrc(),
                vfm: d.getVfm(),
                ve: this.getEid(),
                ce: this.getWeid(),
                r: a.tvid,
                vfrm: d.getVfrm(),
                u: e.getAnonymousUid(),
                nu: e.checkNewUser() ? 1 : 0,
                pu: e.getUid(),
                rn: (new Date).getTime(),
                os: this.getOS(),
                ft: d.videoFormat()
            },
            f = d.getMsrc(),
            h = d.getVfm(),
            i = $.url.getQueryValue(location.href, "coop", !0),
            j = $.url.getQueryValue(location.href, "appKey", !0),
            k = this.getPlatform();
            f && (c.msrc = f),
            h && (c.vfm = h),
            i ? c.coop = i: c.openid = j,
            $.extend(c, k);
            var l = this.getAuthKey(a.tvid, k.p1, e.getAnonymousUid(), this.getEid());
            $.extend(c, {
                __sigC: l
            },
            window.cmd5xly ? window.cmd5xly() : {});
            for (var m in a) m != "tvid" && (c[m] = a[m]);
            g.getVideoInfo(a.tvid, a.vid,
            function(a) {
                c.c1 = a.c,
                c.upderid = a.uid || "",
                console.log("send:" + c.t),
                b.getVIPStatus(function(a) {
                    c.hu = a,
                    b._send("http://msg.iqiyi.com/b", c)
                })
            })
        }
    })
});
define("./behavior/autoContinuous", ["../../../common/service/useragent/detect", "../../../common/service/utils/util", "../../../common/service/pingback/qiyuPingback"],
function(a, b, c) {
    var d = a("../../../common/service/useragent/detect"),
    e = a("../../../common/service/utils/util"),
    f = (new(a("../../../common/service/pingback/qiyuPingback"))).getInstance("short"),
    g = !1,
    h = !0;
    APP.createBehavior("page.play.behavior.autoContinuous", {
        "continue": !0,
        idList: [],
        videoList: [],
        videoIndex: 0,
        init: function() {
            h = $.url.getQueryValue(location.href, "isPlayNext", true) != "0"
        },
        addVideoList: function(a, b, c) {
            a.forEach(function(a, d) {
                a.priority = b,
                a.index = d,
                a.id = c
            });
            if (c) {
                this.videoList = this.videoList.filter(function(a) {
                    return a.id !== c
                });
                var d = a[a.length - 1];
                d && this.idList.push({
                    id: c,
                    tvid: d.tvid,
                    vid: d.vid
                })
            }
            this.videoList = this.videoList.concat(a),
            this.videoList.sort(function(a, b) {
                return a.priority == b.priority ? a.index - b.index: a.priority - b.priority
            })
        },
        doPlayNext: function() {
            if (!this.
            continue) return;
            if (d.huawei_c8812 || d.weixin || !h) return ! 1;
            if (this.videoList.length > this.videoIndex) {
                var a = this.videoList[this.videoIndex];
                if (a.tvid && a.vid) {
                    var b = {};
                    this.videoIndex++,
                    APP.postMessage("AUTOCONTINUOUS_NEXT", a),
                    b = a,
                    b.isAutoPlay = !0,
                    APP.postMessage("PLAYER_LOAD_AND_PLAY", b);
                    if (this.pingback) {
                        var c = this.videoList.getCurrent(),
                        f = e.domain().pps ? 2031 : 31;
                        this.pingback.send({
                            usract: "ctplay",
                            tvid: this.videoInfo.tvid,
                            platform: f
                        })
                    }
                } else a.url && (APP.postMessage("AUTOCONTINUOUS_NEXT", a), setTimeout(function() {
                    location.href = a.url
                },
                500))
            }
        },
        messageHandlers: {
            PLAYER_END: function(a) {
                if (a.vtype != "ADPLAYING" && a.vtype != "TRIALVIDEOPLAYING") {
                    var b = "";
                    this.idList.some(function(c) {
                        return b = c.id,
                        c.vid === a.vid && +c.tvid === +a.tvid
                    }) && APP.postMessage("AUTOCONTINUOUS_PLAY_LIST_END", {
                        id: b
                    }),
                    g ? g = !1 : this.doPlayNext()
                }
            },
            AUTOCONTINUOUS_PLAY_STOP: function() {
                this.
                continue = !1,
                g = !0
            },
            AUTOCONTINUOUS_PLAY_NEXT: function() {
                this.
                continue = !0,
                this.doPlayNext()
            },
            PLAYER_VIDEO_ERROR: function(a) {
                a.code == "noSrc" && this.doPlayNext()
            },
            PLAYER_AFTER_SET_SRC: function(a) {
                a.publicLevel && this.doPlayNext()
            },
            AUTOCONTINUOUS_ADD_LIST: function(a) {
                this.addVideoList(a.list, a.priority, a.id)
            },
            AUTOCONTINUOUS_SET_PLAY_INDEX: function(a) {
                for (var b = 0,
                c = this.videoList.length; b < c; b++) {
                    var d = this.videoList[b];
                    if (d.id === a.id) {
                        this.videoIndex = b + a.index;
                        break
                    }
                }
            }
        },
        message: ["PLAYER_END", "PLAYER_VIDEO_ERROR", "PLAYER_AFTER_SET_SRC", "AUTOCONTINUOUS_ADD_LIST", "AUTOCONTINUOUS_SET_PLAY_INDEX", "AUTOCONTINUOUS_PLAY_STOP", "AUTOCONTINUOUS_PLAY_NEXT"],
        onMessage: function(a, b) {
            this.messageHandlers[a] && this.messageHandlers[a].call(this, b)
        }
    })
});
define("../../common/service/pingback/qiyuPingback", ["../user/user"],
function(a, b, c) {
    var d = a("../user/user"),
    e = {},
    f = function() {
        this.list = null,
        this.index = 0,
        this.tvidMap = {},
        this.cItem = null
    };
    f.prototype = {
        getInstance: function(a) {
            return e[a] || (e[a] = new f),
            e[a]
        },
        init: function(a) {
            a = a || {},
            this.list = a.list || [],
            this.tvid = a.tvid + "",
            this.attributes = a.attributes || {},
            this.indexDistance = a.indexDistance || 0
        },
        render: function() {
            var a = this.list,
            b = null,
            c = this.tvidMap,
            d = null,
            e = this.tvid,
            f = this.indexDistance;
            for (var g = 0,
            h = a.length; g < h; g++) b = a[g],
            d = (b.album_tvid || b.tvid || b.tvId) + "",
            b.index = g + f,
            c[d] = b,
            d == e && (this.index = g);
            this.cItem = a[this.index]
        },
        send: function(a, b) {
            a = a || {};
            var c = this.attributes,
            e = this.cItem,
            f = "",
            g = "",
            h = "",
            i = "";
            if (a.tvid) {
                var j = this.tvidMap[a.tvid + ""];
                if (!j) return console.debug("发送奇遇pingback出错！，tvid=" + a.tvid + "在列表中不存在"),
                !1;
                f = c.tag || "",
                g = j.index,
                h = j.id || j.albumId,
                i = j.album_channel || j.channelId,
                this.cItem = j
            }
            if (a.fragment) var k = a.fragment[0],
            l = a.fragment[1];
            else var k = 0,
            l = this.list.length;
            var m = [];
            for (; k < l; k++) {
                var e = this.list[k];
                e.index >= 0 && m.push(e.album_tvid || e.tvid || e.tvId)
            }
            var n = {
                usract: a.usract || "userclick",
                event_id: c.event_id || c.eventId || "",
                bkt: c.bkt || c.bucket || "",
                area: c.area || "",
                tag: f,
                aid: a.aid || e.id,
                cid: a.cid || e.album_channel,
                rank: g,
                taid: h,
                tcid: i,
                type: "recctplay20121226",
                ppuid: d.getUid(),
                uid: $.cookie.get("QC006"),
                albumlist: a.tvid ? "": m.join(","),
                url: "",
                t: (new Date).getTime(),
                platform: a.platform || "31"
            },
            o = "http://msg.video.qiyi.com/tmpstats.gif"; (new Image).src = o + "?" + $.url.jsonToQuery(n),
            b && b()
        }
    },
    c.exports = f
});
define("./behavior/historyState", ["../../../common/service/utils/videoInfo", "../../../common/service/utils/util"],
function(a, b, c) {
    var d = a("../../../common/service/utils/videoInfo"),
    e = a("../../../common/service/utils/util"),
    f = [{
        tvid: Q.PageInfo.playInfo.tvid,
        vid: Q.PageInfo.playInfo.vid
    }];
    APP.createBehavior("page.play.behavior.historyState", {
        message: ["PLAYER_LOAD_AND_PLAY"],
        onMessage: function(a, b) {
            var c = this;
            if (a == "PLAYER_LOAD_AND_PLAY") {
                var g = f[f.length - 1],
                h = location.search;
                g.tvid != b.tvid && g.vid != b.vid && d.getVideoInfo(b.tvid, b.vid,
                function(a) {
                    var c = e.parseUrl(a.vu),
                    d = c.protocol + "//" + location.host + c.pathname + c.search + c.hash,
                    g = {
                        tvid: a.tvid,
                        vid: a.vid,
                        key: a.groupKey,
                        url: d,
                        sourceName: "taiwan"
                    };
                    b.vfrm && (g.url += /#/.test(d) ? "&": "#" + b.vfrm),
                    h && (g.url += d.indexOf("?") > -1 ? "&": "?" + h.substr(1)),
                    window.history.pushState(g, "", g.url),
                    f.push(g)
                })
            }
        },
        init: function() {
            $(window).on("popstate",
            function(a) {
                var b = history.state || a.state;
                if (b) {
                    var c = f[f.length - 1];
                    b.tvid != c.tvid && b.vid != c.vid && APP.postMessage("PLAYER_LOAD_AND_PLAY", b)
                }
            })
        }
    })
});
define("./behavior/SkipPtPw", [],
function(a, b, c) {
    var d = 0,
    e = 99999999,
    f = 0,
    g = !0;
    APP.createBehavior("page.play.behavior.SkipPtPw", {
        message: ["PLAYER_VIDEO_PLAY", "SKIPPTPW_VIDEO_PTPW_INFO", "PLAYER_TIME_UPDATE", "PLAYER_LOAD_AND_PLAY", "PLAYER_DURATION_AVALIABLE", "VIDEO_CANPLAY", "PLAYER_AFTER_GET_RECORD", "RESOLUTIONSWITCHER_SEEK"],
        onMessage: function(a, b) {
            var c = this;
            a == "PLAYER_TIME_UPDATE" && (f = b, e && f >= e && APP.postMessage("PLAYER_TO_END")),
            a == "PLAYER_VIDEO_PLAY" && d && b.startTime < d && setTimeout(function() {
                g && APP.postMessage("PLAYER_SEEK", f + parseInt(d * 1) - 3),
                g = !0
            },
            2e3),
            a == "PLAYER_AFTER_GET_RECORD" && b && b > d && (g = !1),
            a == "RESOLUTIONSWITCHER_SEEK" && (g = !1),
            a == "SKIPPTPW_VIDEO_PTPW_INFO" && (d = +b.ptTime, e = +b.pwTime, f = 0),
            a == "PLAYER_LOAD_AND_PLAY" && (d = 0, e = 9999999, f = 0)
        },
        init: function() {}
    })
});
define("./behavior/showDiver", ["../../../common/service/utils/util"],
function(a, b, c) {
    function f() {
        g() || (this.nodeForShowDiver ? this.nodes[this.nodeForShowDiver].remove() : this.rootElement.remove())
    }
    function g() {
        return e.getVfm() !== d
    }
    "use strict";
    var d = "m_319_nmdy",
    e = a("../../../common/service/utils/util");
    APP.createBehavior("page.play.behavior.showDiver", {
        init: f
    })
});
define("./behavior/playHistoryRecord", ["../../../common/service/user/user", "../../../common/service/utils/videoInfo", "../../../common/service/playHistory/playhistory"],
function(a, b, c) {
    var d = a("../../../common/service/user/user"),
    e = a("../../../common/service/utils/videoInfo"),
    f = a("../../../common/service/playHistory/playhistory"),
    g = 12e4,
    h = null,
    i = {},
    j = 0,
    k = !1,
    l = !1,
    m = {};
    APP.createBehavior("page.play.behavior.playHistoryRecord", {
        vvCanSend: null,
        init: function() {
            var a = this;
            APP.postMessage("PLAY_RECORD_INIT")
        },
        message: ["VIDEO_PAUSE", "PLAYER_END", "PLAYER_VIDEO_PLAY", "PLAYER_TIME_UPDATE", "PLAY_RECORD_INIT", "PLAYER_AFTER_GET_RECORD"],
        onMessage: function(a, b) {
            var c = this;
            a == "PLAY_RECORD_INIT" && ($(window).on("beforeunload",
            function() {
                c._recording()
            }), $(window).on(window.onpagehide ? "pagehide": "unload",
            function() {
                l = !0,
                c._recording()
            })),
            a == "PLAYER_VIDEO_PLAY" && (m.tvid = b.tvid, m.vid = b.vid, k = !1, c._startTimer()),
            a == "PLAYER_AFTER_GET_RECORD" && (this.vvCanSend = !0),
            a == "PLAYER_TIME_UPDATE" && (i.videoPlayTime = parseInt(b, 10));
            if (a == "VIDEO_PAUSE" && this.vvCanSend) {
                if (l) return;
                if (k) return;
                c._recording()
            }
            a == "PLAYER_END" && this.vvCanSend && (k = !0, c._stopTimer(), c._stoped(), this.vvCanSend = !1)
        },
        _startTimer: function() {
            var a = d.isLogin();
            a && !h && (h = setInterval(this._recording.bind(this), g))
        },
        _stopTimer: function() {
            h && (clearInterval(h), h = null)
        },
        _stoped: function() {
            var a = this;
            k = !0,
            this._getData(function(b) {
                i.videoPlayTime = 0,
                a._recording()
            })
        },
        _getData: function(a) {
            var b = this,
            c = {};
            e.getVideoInfo(m.tvid, m.vid,
            function(b) {
                i.lastRecordTime = i.videoPlayTime,
                c.videoPlayTime = i.videoPlayTime,
                c.tvId = i.tvId = b.tvid,
                c.videoName = i.videoName = b.videoName,
                c.terminalId = "31",
                c.agent_type = $.os.ios ? "12": "13",
                a(c)
            })
        },
        _recording: function() {
            var a = this;
            i.videoPlayTime != i.lastRecordTime && this._getData(function(a) {
                f.setPlayhistory({
                    data: a
                })
            })
        }
    })
});
define("../../common/service/playHistory/playhistory", ["../config/config", "../storage/storage", "../user/user"],
function(a, b, c) {
    var d = a("../config/config"),
    e = a("../storage/storage"),
    f = a("../user/user");
    c.exports = APP.createService({
        setPlayhistory: function(a) {
            var b = f.isLogin(),
            c = a.data || [];
            b ? this.setLoginPlayHistory(a) : this.setUnLoginPlayHistory(a)
        },
        setLoginPlayHistory: function(a) {
            a = a || {};
            var b = a.data || {};
            b.terminalId = b.terminalId,
            b.uid = f.getUid();
            var c = a.onsuccess,
            d = a.onfailure;
            this.setPcLogin(b,
            function(a) {
                a.code == "A00000" ? c && c(a.data) : d && d(a)
            })
        },
        setUnLoginPlayHistory: function(a) {
            a = a || {};
            var b = a.data || {};
            b.terminalId = b.terminalId,
            f.getAnonymousUid() && (b.ckuid = f.getAnonymousUid());
            var c = a.onsuccess,
            d = a.onfailure;
            this.setPcUnLogin(b,
            function(a) {
                a.code == "A00000" ? c && c(a.data) : d && d(a)
            })
        },
        setPcLogin: function(a, b) {
            $.ajax({
                url: d.interfaces.userCenter.setPcLogin,
                data: a,
                type: "GET",
                dataType: "jsonp",
                cache: !1,
                success: function(a) {
                    b(a)
                },
                error: function() {}
            })
        },
        setPcUnLogin: function(a, b) {
            $.ajax({
                url: d.interfaces.userCenter.setPcUnLogin,
                data: a,
                type: "GET",
                dataType: "jsonp",
                cache: !1,
                success: function(a) {
                    b(a)
                },
                error: function() {}
            })
        }
    })
});
define("../../common/service/storage/storage", [],
function(a, b, c) {
    function f() {
        try {
            return window.localStorage.removeItem("_Q_test_"),
            window.localStorage.setItem("_Q_test_", 1),
            window.localStorage.removeItem("_Q_test_"),
            window.localStorage
        } catch(a) {
            console.error("localStorage error: " + JSON.stringify(a))
        }
        return e
    }
    var d = {},
    e = {
        getItem: function(a) {
            return d[a]
        },
        setItem: function(a, b) {
            d[a] = b
        },
        removeItem: function(a) {
            delete d[a]
        }
    },
    g = f();
    c.exports = APP.createService({
        read: function(a) {
            try {
                return g.getItem(a)
            } catch(b) {
                console.error("localStorage read error: " + JSON.stringify(b))
            }
        },
        write: function(a, b) {
            try {
                g.removeItem(a),
                g.setItem(a, b)
            } catch(c) {
                console.error("localStorage write error: " + JSON.stringify(c))
            }
        },
        remove: function(a) {
            try {
                g.removeItem(a)
            } catch(b) {
                console.error("localStorage remove error: " + JSON.stringify(b))
            }
        }
    })
});
define("./behavior/resumePlay", ["../../../common/service/config/config", "../../../common/service/deferredRequest/deferredRequest"],
function(a, b, c) {
    var d = a("../../../common/service/config/config"),
    e = a("../../../common/service/deferredRequest/deferredRequest"),
    f = !0;
    APP.createBehavior("page.play.behavior.resumePlay", {
        message: ["PLAYER_VIDEO_PLAY", "RESOLUTIONSWITCHER_SEEK"],
        onMessage: function(a, b) {
            a === "PLAYER_VIDEO_PLAY" && (f && this.getSinglePlayRecord(b.tvid).then(function(a) {
                a && APP.postMessage("PLAYER_SEEK", a),
                setTimeout(function() {
                    APP.postMessage("PLAYER_AFTER_GET_RECORD", a)
                },
                300)
            }), f = !0),
            a == "RESOLUTIONSWITCHER_SEEK" && (f = !1)
        },
        init: function() {},
        getSinglePlayRecord: function(a, b) {
            var c = this,
            f = d.interfaces.history.getSinglePlayRecord,
            g = {
                tvId: a || "",
                agent_type: $.os.android ? 13 : 12
            };
            return e.jsonp(f, g).then(function(a) {
                return a.code == "A00000" && a.data ? a.data.videoPlayTime: 0
            })
        }
    })
});
define("./behavior/vip_noAD_pingback", ["../../../common/service/weid/weid", "../../../common/service/user/user"],
function(a, b, c) {
    var d = a("../../../common/service/weid/weid"),
    e = a("../../../common/service/user/user");
    APP.createBehavior("page.play.behavior.vipNoAdPingback", {
        message: ["VIP_NOAD_VIDEO"],
        onMessage: function(a, b) {
            a === "VIP_NOAD_VIDEO" && e.getIsValidVip(function(a) {
                a && d.get(function(a) {
                    var c = ["type=skipad131210", "pf=2", "p=20", "ppuid=" + JSON.parse($.cookie.get("P00002") || "{}").uid || "", "flshuid=" + a, "tvid=" + b.tvid, "tn=" + (new Date).getTime()]; (new Image).src = "http://msg.71.am/tmpstats.gif?" + c.join("&")
                })
            })
        }
    })
});
define("../../common/service/weid/weid", ["../uid/jsuid"],
function(a, b, c) {
    var d = a("../uid/jsuid"),
    e = "",
    f = function() {
        APP.$.cookie.remove("QC112", {
            path: "/",
            domain: "iqiyi.com"
        })
    };
    APP.$(window).on("unload", f),
    APP.$(window).on("beforeunload", f),
    c.exports = APP.createService({
        get: function(a) {
            e = APP.$.cookie.get("QC112");
            if (e) {
                a(e);
                return
            }
            this.gen(a)
        },
        gen: function(a) {
            d.get(function(b) {
                e = APP.$.crypto.md5(b + "weid" + new Date * 1),
                APP.$.cookie.set("QC112", e, {
                    path: "/",
                    domain: "iqiyi.com"
                }),
                a(e)
            })
        },
        destroy: function() {
            e = null
        }
    })
});
define("../../common/service/uid/jsuid", ["./uuid"],
function(a, b, c) {
    var d = a("./uuid");
    c.exports = APP.createService({
        get: function(a) {
            var b = APP.$.cookie.get("QC006");
            if (b) {
                a(b);
                return
            }
            Q.__newuser = !0;
            var c = function(a) {
                APP.$.cookie.set("QC006", a, {
                    expires: 31536e6,
                    path: "/",
                    domain: "iqiyi.com"
                })
            };
            d.get(function(b) {
                c(b),
                a(b)
            })
        }
    })
});
define("../../common/service/uid/uuid", [],
function(a, b, c) {
    var d = 0;
    c.exports = APP.createService({
        get: function(a) {
            a(APP.$.crypto.md5(window.navigator.userAgent + document.cookie + Math.random() + (new Date).getTime() * d++))
        }
    })
});
define("./behavior/tvguo", ["../../../common/service/user/user", "../service/videoInfo"],
function(a, b, c) {
    function f() {
        "liveplay" === Q.PageInfo.page && h()
    }
    function g(a, b) {
        switch (a) {
        case "SWITCHVIDEO_SWITCH":
            i(b.tvid);
            break;
        case "PLAYER_LOAD_AND_PLAY":
            i(b.tvid)
        }
    }
    function h() {
        try {
            if (!window.QYQD || !window.QYQD.cb) return;
            var a = Q.PageInfo.playInfo || {};
            window.QYQD.cb(JSON.stringify({
                aid: a.resourceId || a.lcid,
                tvid: a.resourceId || a.lcid,
                title: a.vn,
                auth: d.getAuthcookie(),
                channel_id: a.lcid
            }))
        } catch(b) {}
    }
    function i(a) {
        try {
            if (!window.QYQD || !window.QYQD.cb) return;
            return e.getVideoParams({
                tvid: a
            }).then(function(a) {
                return {
                    aid: a.aid,
                    tvid: a.tvId,
                    title: a.shortTitle,
                    auth: d.getAuthcookie(),
                    channel_id: a.cid
                }
            }).then(function(a) {
                a && window.QYQD.cb(JSON.stringify(a))
            })
        } catch(b) {}
    }
    "use strict";
    var d = a("../../../common/service/user/user"),
    e = a("../service/videoInfo");
    c.exports = APP.createBehavior("page.play.behavior.tvguo", {
        init: f,
        message: ["SWITCHVIDEO_SWITCH", "PLAYER_LOAD_AND_PLAY"],
        onMessage: g
    })
});
define("./service/videoInfo", ["../../../common/service/config/config", "../../../common/service/utils/videoInfo"],
function(a, b, c) {
    var d = a("../../../common/service/config/config").interfaces,
    e = a("../../../common/service/utils/videoInfo");
    c.exports = APP.createService({
        _cache: {},
        _handle: {},
        getAlbumOrSourceInfo: function(a) {
            var b = this,
            c = a.id,
            e = d.albumInfo + c,
            f = $.Deferred();
            return this.ajax({
                url: e,
                dataType: "jsonp",
                cache: !0,
                success: function(a) {
                    f.resolve(a)
                },
                error: function(a, b, c) {
                    f.reject(c)
                }
            }),
            f
        },
        getVideoParams: function(a) {
            var b = this;
            return $.Deferred(function(c) {
                e.getVideoInfo(a.tvid, a.vid,
                function(a) {
                    a.templateType = b.getVideoTemplateType(a),
                    c.resolve(a)
                })
            }).promise()
        },
        getVideoTemplateType: function(a) {
            var b = "";
            return a.subType == 1 ? b = "ALBUM": a.subType == 2 ? b = "SOURCE": a.c == 1 && a.vType != 2 ? b = "MOVIE": b = "SHORT",
            b
        },
        ajax: function(a) {
            var b = this,
            c = JSON.stringify(a);
            if (this._cache[c] && this._cache[c] != "waiting") a.success && a.success(this._cache[c]),
            a.complete && a.complete(this._cache[c]);
            else if (this._cache[c] == "waiting") this._handle[c].push({
                success: a.success,
                error: a.error,
                complete: a.complete
            });
            else if (this._cache[c] == undefined || this._cache[c] == "failed") this._handle[c] = [{
                success: a.success,
                error: a.error,
                complete: a.complete
            }],
            a.success = function(a) {
                b._cache[c] = a,
                b._handle[c].forEach(function(b) {
                    b.success && b.success(a)
                })
            },
            a.error = function(a) {
                b._cache[c] = "failed",
                b._handle[c].forEach(function(b) {
                    b.error && b.error(a)
                })
            },
            a.complete = function(a) {
                b._handle[c].forEach(function(b) {
                    b.complete && b.complete(a)
                })
            },
            $.ajax(a),
            this._cache[c] = "waiting"
        }
    })
});
define("./behavior/cardController", [],
function(a, b, c) {
    var d = {},
    e = null;
    glue.createBehavior("page.playMovie.behavior.cardController", {
        init: function() {
            e = this.templateType
        },
        messageHandlers: {
            PLAYER_LOAD_AND_PLAY: function(a) {
                d = a,
                e == "MOVIE" && APP.postMessage("RENDER_VIDEOAROUND", d),
                APP.postMessage("VIDEOAROUND_CHANGE_SELECTED", d)
            },
            WONDERFUL_NO_DATA: function() {
                APP.postMessage("RENDER_VIDEOAROUND", d)
            },
            FORCUS_NO_DATA: function() {
                APP.postMessage("RENDER_VIDEOAROUND", d)
            }
        },
        message: ["PLAYER_LOAD_AND_PLAY", "WONDERFUL_NO_DATA", "FORCUS_NO_DATA"],
        onMessage: function(a, b) {
            this.messageHandlers[a] && this.messageHandlers[a].call(this, b)
        }
    })
});
define("./component/errorTip", ["../service/vipTip", "../../../common/service/config/config", "../../../common/service/user/user", "../../../common/service/useragent/detect", "../../../common/service/utils/videoInfo", "../../../common/service/video/videoStrategy", "../../../common/service/native/callNative"],
function(a, b, c) {
    var d = a("../service/vipTip"),
    e = a("../../../common/service/config/config"),
    f = a("../../../common/service/user/user"),
    g = a("../../../common/service/useragent/detect"),
    h = a("../../../common/service/utils/videoInfo"),
    i = a("../../../common/service/video/videoStrategy");
    APP.define("page.playMovie.component.errorTip", {
        onEndHandle: [],
        onPlayHandle: [],
        btns: ["returnHome", "callApp", "qiyiChuPin"],
        TIP_STYLE: {
            COMMON_TIP: 1,
            FORCE_APP_TIP: 2,
            VIP_LAYER_TIP: 3
        },
        message: ["PLAYERROR_CLOUDTIP", "PLAYER_VIDEO_ERROR", "PLAYER_END", "PLAYER_LOAD_AND_PLAY", "PLAYER_PLAY"],
        onMessage: function(a, b) {
            var c = this;
            a == "PLAYER_LOAD_AND_PLAY" && (APP.postMessage("PLAYER_TO_RECOVER"), this.onEndHandle = [], this.hideTip()),
            a == "PLAYERROR_CLOUDTIP" && (this.isVipTipAvailable = !1),
            a == "PLAYER_VIDEO_ERROR" && (b.type == "video.vipckfail" ? (APP.postMessage("RESOLUTIONSWITCHER_DISABLE"), this.checkVipFailedHandle(b.param)) : b.type == "video.error" && (APP.postMessage("RESOLUTIONSWITCHER_DISABLE"), this.videoErrorHandle(b.code, b.param)));
            if (a == "PLAYER_END") {
                var c = this;
                b.vtype !== "ADPLAYING" && this.onEndHandle.forEach(function(a) {
                    a.call(c)
                })
            }
            if (a == "PLAYER_PLAY") {
                var c = this;
                this.onPlayHandle.forEach(function(a) {
                    a.call(c)
                })
            }
        },
        onEnd: function(a) {
            this.onEndHandle.push(a)
        },
        onPlay: function(a) {
            this.onPlayHandle.push(a)
        },
        videoErrorHandle: function(a, b) {
            a == "platformLimit" ? this.showTip("很抱歉，该平台无法观看本视频<br>下载爱奇艺APP观看海量高清视频", ["callApp"]) : a == "oversea" ? this.showTip("很抱歉，由于版权限制，<br>该视频暂时只对中国大陆地区提供服务", ["qiyiChuPin"]) : a == "mtexpire" ? this.showTip("浏览器或应用播放视频出错了，去客户端试试", ["returnHome"]) : a == "offline" ? this.showTip("很抱歉<br>您所查看的视频已下线", ["returnHome"]) : a == "ugcUnpass" ? this.showTip("很抱歉<br>该视频尚未通过审核，暂时无法观看", ["returnHome"]) : a == "playerForbidden" ? this.showTip("很抱歉<br>由于视频版权限制，你无法观看该视频", ["callApp"], "去爱奇艺APP观看") : a == "private" ? this.showTip("很抱歉<br>该视频为私密视频，仅上传者可见", ["returnHome"]) : a == "noSrc" ? this.showTip("很抱歉<br>您所查看的视频不存在", ["returnHome"]) : a == "domestic" ? this.showTip("很抱歉，由于版权限制，<br>您所在的地区暂时无法观看该视频", ["returnHome"]) : a == "forceDiversion" ? (this.showTip("很抱歉，<br>该视频仅支持APP专享，望您谅解", ["callApp"], "下载客户端观看"), this.forceCallAppHandle(a, b)) : a == "drmLimit" && this.showTip("很抱歉，<br>应版权方要求，当前节目只能在客户端观看", ["callApp"], "去爱奇艺APP观看"),
            this.nodes.errorCode.text(b.code)
        },
        forceCallAppHandle: function(b, c) {
            var d, e, f, g;
            c && (d = c.aid, e = c.tvid, f = c.vid);
            var h = this;
            e && f && this.getParams(e, f).then(function(b) {
                d = d || b.aid,
                g = i.getPackageUrl();
                var c = a("../../../common/service/native/callNative");
                APP.postMessage("PLAYERROR_MANUALEXPIRE");
                var e = {
                    aid: b.aid,
                    vid: b.vid,
                    tvid: b.tvid,
                    cid: b.cid,
                    offset: 0,
                    down: "0"
                };
                c.startPlay(e, g,
                function() {})
            }),
            this.model.errorTipShow = 0
        },
        getParams: function(a, b) {
            return $.Deferred(function(c) {
                h.getVideoInfo(a, b,
                function(a) {
                    c.resolve(a)
                })
            }).promise()
        },
        checkVipFailedHandle: function(a) {
            var b = this;
            f.isLogin() ? f.getIsValidVip(function(c) {
                c ? f.getVipType(function(c) {
                    b.showVipLayer(a)
                }) : f.getStatus(function(c) {
                    c == "2" ? this.showTip("提示：已暂停您的VIP服务，请与客服联系") : b.showVipLayer(a)
                })
            }) : b.showVipLayer(a)
        },
        showVipLayer: function(a) {
            var b = this,
            c = a.aid;
            a.pre ? (b.hideTip(), a.previewType === "6min" ? b.onEnd(function() {
                b.getVipLayer(c)
            }) : a.previewType === "noSrc" && b.getVipLayer(c)) : b.getVipLayer(c)
        },
        getVipLayer: function(a) {
            var b = this;
            d.getVipLayer({
                aid: a,
                layCode: "middle_tip_v3"
            },
            function(a) {
                b.showTip(a.data.data.data.html)
            })
        },
        showTip: function(a, b, c) {
            APP.postMessage("PLAYER_TO_REMOVE");
            var d = this;
            b ? (this.btns.forEach(function(a) {
                d.nodes[a].addClass("hide")
            }), this.model.vipClass = "", this.nodes.tips.html(a), b.forEach(function(a) {
                d.nodes[a].removeClass("hide"),
                c && c != "" && d.nodes[a].html(c)
            }), this.model.tipStyle = this.TIP_STYLE.COMMON_TIP) : (this.model.tipStyle = this.TIP_STYLE.VIP_LAYER_TIP, this.model.vipClass = "m-vipPlayer-tip", this.nodes.vipLayer.html(a)),
            this.model.errorTipShow = 1,
            this.rootElement.removeClass("hide")
        },
        showForceAppTip: function() {
            APP.postMessage("PLAYER_TO_REMOVE"),
            this.model.tipStyle = this.TIP_STYLE.FORCE_APP_TIP,
            this.rootElement.removeClass("hide")
        },
        hideTip: function() {
            this.rootElement.addClass("hide")
        },
        init: function() {
            this.nodes.returnHome.on("click",
            function() {
                location.href = "/"
            }),
            window.VIP_DIANBOQUAN_CLICK = function() {
                event.preventDefault(),
                event.stopPropagation(),
                $.ajax({
                    url: event.target.getAttribute("href"),
                    dataType: "jsonp",
                    jsonp: "callback" + (new Date).getTime(),
                    data: {},
                    timeout: 5e3,
                    success: function(a, b, c) {
                        a.code == "A00000" && location.reload()
                    },
                    error: function(a, b) {
                        location.reload()
                    }
                })
            }
        },
        listeners: {
            click: function(a, b, c) {
                c == "qiyiChuPin" && (location.href = "/qiyichupin/")
            }
        }
    })
});
define("./service/vipTip", ["../../../common/service/config/config"],
function(a, b, c) {
    var d = a("../../../common/service/config/config"),
    e = {
        android_main_tip: "bb43f26a40b84c20",
        ios_main_tip: "8311d57b4ac7db57",
        ios_head_tip: "97a2bfcbc8bb0bf8",
        android_head_tip: "97a2bfcbc8bb0bf8",
        bottom_btn_v3: "97c05f5d6139adab",
        middle_tip_v3: "ab810cbc0e8e88f5",
        sale_tip_v3: "bece4aa7b69a44a8"
    },
    f = d.interfaces.buyLayer,
    g = "1.0";
    c.exports = APP.createService({
        getVipLayer: function(a, b) {
            a.layCode = e[a.layCode],
            a.version = g,
            $.ajax({
                url: f,
                dataType: "jsonp",
                data: a,
                timeout: 5e3,
                success: function(a, c, d) {
                    b && b({
                        code: "A00000",
                        data: a
                    })
                },
                error: function(a, c) {
                    b && b({
                        code: "E00000",
                        data: c
                    })
                }
            })
        }
    })
});
define("../../common/service/native/callNative", ["../config/config", "./paopaoSchema"],
function(a, b, c) {
    var d = console,
    e = a("../config/config"),
    f = a("./paopaoSchema"),
    g = {
        Android: "qiyimobile://self/com_qiyi_video/res.made?key=69842642483add0a63503306d63f0443&identifier=qymobile&from_type=27&from_sub_type=10&",
        AndroidChrome: "intent://self/res.made?key=69842642483add0a63503306d63f0443&[[params]]&identifier=qymobile&other=&from_sub_type=10#Intent;scheme=qiyimobile;action=android.intent.action.qiyivideo.player;package=com.qiyi.video;end",
        iPhone: "qiyi-iphone://?ftype=27&subtype=10&",
        AndroidApphome: "qiyimobile://self/qiyi.madeindexpage"
    },
    h = null,
    i = navigator.userAgent,
    j = /Chrome\//.test(i) && !/Version\/4/.test(i);
    c.exports = APP.createService({
        startApp: function(a, b, c) {
            var e = (new Date).getTime();
            d.log("callNative appurl: " + a + ", appstore: " + b);
            var f = $("#open_app_iframe");
            f.length || (f = $("<iframe>"), f.attr("id", "open_app_iframe"), f.attr("name", "open_app_iframe"), f.attr("class", "dn"), $("body").append(f));
            var g = /iPhone OS (\d+)/i.exec(i);
            if (/Chrome/i.test(i) && j) {
                var k = /Chrome\/(\d{2})/i.exec(navigator.userAgent);
                if (k && parseInt(k[1]) < 35) location.href = a;
                else {
                    var l = window.open(a);
                    setTimeout(function() {
                        l.close()
                    },
                    1e3)
                }
            } else g && g[1] >= 9 ? location.href = a: f.attr("src", a);
            h = setTimeout(function() { (new Date).getTime() - e < 2e3 && (c && c(), b && setTimeout(function() {
                    location.href = b
                },
                200))
            },
            1e3)
        },
        startPlay: function(a, b, c) {
            var d, e = $.os.ios ? "iPhone": "Android";
            if (/Chrome/i.test(i) && APP.$.os.android && j) {
                var f = /Chrome\/(\d{2})/i.exec(i);
                f && parseInt(f[1]) < 35 ? d = g.AndroidChrome.replace("[[params]]", APP.$.url.jsonToQuery(a)) : d = g[e] + APP.$.url.jsonToQuery(a)
            } else d = g[e] + APP.$.url.jsonToQuery(a);
            this.startApp(d, b, c)
        },
        goToAppHome: function(a, b, c) {
            var d, e = $.os.ios ? "iPhone": "Android";
            if (/Chrome/i.test(i) && APP.$.os.android && j) {
                var f = /Chrome\/(\d{2})/i.exec(i);
                f && parseInt(f[1]) < 35 ? d = g.AndroidChrome.replace("[[params]]", APP.$.url.jsonToQuery(a)) : d = g.AndroidApphome + APP.$.url.jsonToQuery(a)
            } else e == "iPhone" ? d = g[e] + APP.$.url.jsonToQuery(a) : d = g.AndroidApphome + APP.$.url.jsonToQuery(a);
            this.startApp(d, b, c)
        },
        goToPaoPage: function(a, b, c) {
            var d = f.getSchemaUrl(a);
            this.startApp(d, b, c)
        }
    })
});
define("../../common/service/native/paopaoSchema", [],
function(a, b, c) {
    function h(a) {
        var b = d[a.biz_sub_id],
        c = g[b] && g[b](a);
        return c
    }
    function i(a, b, c, d) {
        var f = b ? b: "",
        g = c ? c: "",
        h = d ? d: {};
        return $.extend(h, e),
        {
            biz_params: {
                biz_params: "",
                biz_statistics: j(h),
                biz_extend_params: j(g),
                biz_sub_id: a,
                biz_dynamic_params: j(f)
            },
            biz_plugin: "com.iqiyi.paopao",
            biz_id: "7"
        }
    }
    function j(a) {
        if (!a) return "";
        var b = [];
        for (var c in a) a.hasOwnProperty(c) && b.push(c + "=" + a[c]);
        return b.join("&")
    }
    var d = {
        fightList: "fightList",
        17 : "17",
        4 : "pluginRegistry"
    },
    e = {
        from_type: "outshr_re",
        from_subtype: "outshr_re"
    },
    f = "iqiyi://mobile/register_business/paopao?pluginParams=",
    g = {
        fightList: function(a) {
            var b = "iqiyi://mobile/paopao";
            return delete a.biz_sub_id,
            b + "?" + j(a)
        },
        pluginRegistry: function(a) {
            var b = i(a.biz_sub_id, a.biz_dynamic_params, a.biz_extend_params, a.biz_statistics);
            return f + encodeURIComponent(encodeURIComponent(JSON.stringify(b)))
        },
        17 : function(a) {
            var b = "http://iface2.iqiyi.com/views_sns/3.0/paopao_rank_list",
            c = "http://iface2.iqiyi.com/views_sns/3.0/paopao_rank_time_list",
            d = a.identity,
            g = "";
            d === "listDynamic" || d === "listTotal" ? g = encodeURIComponent(b + "?" + j({
                list_type: d === "listDynamic" ? "1021": "1020"
            })) : d === "listHistory" && (g = encodeURIComponent(c));
            if ($.os.ios) {
                var h = {
                    topUrl: g
                };
                return "iqiyi://mobile/home?page=starList&" + j(h) + "&" + j(e)
            }
            var k = {
                baseline_second_page_url: g
            },
            l = i(a.biz_sub_id, k);
            return f + encodeURIComponent(encodeURIComponent(JSON.stringify(l)))
        }
    };
    c.exports = {
        getSchemaUrl: h
    }
});
define("./component/accountErrorTips", ["../../../common/service/pingback/pingbackHtml5", "../../../common/service/user/user", "../../../common/service/config/config", "../../../common/service/deferredRequest/deferredRequest"],
function(a, b, c) {
    var d = a("../../../common/service/pingback/pingbackHtml5"),
    e = a("../../../common/service/user/user"),
    f = a("../../../common/service/config/config").interfaces.keepalive,
    g = a("../../../common/service/deferredRequest/deferredRequest"),
    h = function(a) {
        var b = "jfaljluixn39012$#",
        c = "";
        for (var d in a) c += d + "=" + a[d] + "|";
        return c += b,
        $.crypto.md5(c)
    };
    APP.define("page.playMovie.component.accountErrorTips", {
        _url: "",
        keepalive: 3e4,
        heartBeatInterval: null,
        message: ["PLAYER_VIDEO_ERROR", "VIDEOSOURCE_HEARTBEAT", "VIDEO_PAUSE", "VIDEO_PLAY", "PLAYER_LOAD_VIDEO"],
        messageHandlers: {
            PLAYER_VIDEO_ERROR: function(a) {
                if (a.type === "video.checkVip" && (a.code === "concurrentTip" || a.code === "forbidTip")) {
                    this.nodes.tips.html(a.param.text),
                    this.rootElement.removeClass("hide");
                    var b = a.code === "concurrentTip" ? "1504121_1": a.code === "forbidTip" ? "1504121_2": "";
                    d.send(null, {
                        t: 21,
                        pf: 2,
                        p: 20,
                        p1: 201,
                        block: b,
                        u: d.getUid(),
                        pu: d.getPuid(),
                        rn: Date.now(),
                        bstp: 0
                    })
                }
            },
            VIDEOSOURCE_HEARTBEAT: function(a) {
                this.setHeartBeatUrl(a)
            },
            VIDEO_PLAY: function() {
                var a = this._url;
                if (!a) return;
                var b = this.keepalive;
                this.heartBeatInterval = setInterval(function() {
                    g.get(a)
                },
                b)
            },
            VIDEO_PAUSE: function() {
                clearInterval(this.heartBeatInterval)
            },
            PLAYER_LOAD_VIDEO: function() {
                this.rootElement.addClass("hide")
            }
        },
        onMessage: function(a, b) {
            this.messageHandlers[a] && this.messageHandlers[a].call(this, b)
        },
        init: function() {},
        setHeartBeatUrl: function(a) {
            var b = f,
            c = {};
            c.agenttype = $.browser.iPhone ? 12 : 13,
            c.authcookie = e.getAuthcookie(),
            c.device_id = e.getAnonymousUid(),
            c.tv_id = a.tvid;
            var d = h(c);
            c.sign = d,
            this._url = b + "?" + $.url.jsonToQuery(c),
            this.keepalive = ( + a.param || 30) * 1e3
        }
    })
});
define("../../common/service/pingback/pingbackHtml5", ["../user/user", "../uid/uid", "../weid/weid", "../utils/page"],
function(a, b, c) {
    var d = a("../user/user"),
    e = a("../uid/uid"),
    f = a("../weid/weid"),
    g = a("../utils/page"),
    h = location.protocol === "https:" ? "https://msg.iqiyi.com/jpb.gif": "http://msg.video.qiyi.com/jpb.gif";
    c.exports = APP.createService({
        _domain: function(a) {
            return a.protocol + "//" + a.host
        } (window.location),
        _url: h,
        page: function(a, b) {
            var c = this,
            a = a || 31,
            h = g.url(),
            i = APP.$.url.getQueryValue(h, "msrc");
            i && APP.$.cookie.set("QC015", i),
            i = APP.$.cookie.get("QC015"),
            i || (i = "");
            var j = APP.$.url.getQueryValue(h, "vfm");
            j && APP.$.cookie.set("QC015", j),
            j = APP.$.cookie.get("QC015"),
            j || (j = ""),
            e.get(function(e) {
                f.get(function(f) {
                    var g = {
                        rdm: String(Math.floor(999999999 * Math.random())),
                        qtcurl: c._getUrl(),
                        rfr: c._getRfr(),
                        flshuid: e,
                        lrfr: c._getLrfr(),
                        ppuid: d.getUid(),
                        platform: a,
                        weid: f,
                        msrc: i,
                        vfm: j,
                        re: screen.width * window.devicePixelRatio + "*" + screen.height * window.devicePixelRatio,
                        os: c.getOS(),
                        as: c.getAS(a, f)
                    };
                    b && (g = $.extend(g, b));
                    var h = APP.$.url.jsonToQuery(g, c._encodeURI),
                    k = new Image(1, 1);
                    k.src = c._url + "?" + h
                })
            })
        },
        _getUrl: function() {
            var a = g.url();
            return APP.$.url.isUrl(a) || (a = this._domain + a),
            a
        },
        _getRfr: function(a) {
            var b = g.referrer();
            return b
        },
        _getLrfr: function() {
            var a = window.document,
            b = this._getDomain();
            try {
                var c, d = ["so", "list"],
                e = this,
                f = a.referrer.match(/http[s]?:\/\/([^\/]*)/);
                f = f ? f[1] : "",
                c = APP.$.cookie.get("QC007"),
                c = c ? c: "";
                var g = c.match(/http[s]?:\/\/([^\/]*)/);
                g = g ? g[1] : "";
                if (!c) a.referrer ? c = a.referrer: c = "DIRECT";
                else if (function(c) {
                    for (var d = 0,
                    e = c.length; d < e; d++) return a.referrer.indexOf(c[d] + "." + b) > -1 ? !0 : !1
                } (d) && f != g) c = a.referrer;
                return APP.$.cookie.set("QC007", c, {
                    domain: b
                }),
                c
            } catch(h) {
                return ""
            }
        },
        _encodeURI: function(a) {
            try {
                var b = encodeURIComponent;
                return b instanceof Function ? b(a) : escape(a)
            } catch(c) {
                return ""
            }
        },
        getJsuid: function() {
            var a = APP.$.cookie.get("QC006");
            if (!a) {
                Q.__newuser = !0;
                var b = function(a) {
                    APP.$.cookie.set("QC006", a, {
                        expires: 31536e6,
                        path: "/",
                        domain: "iqiyi.com"
                    })
                };
                a = this.getUuid(),
                b(a)
            }
            return a
        },
        getUid: function() {
            return this.getJsuid()
        },
        getPuid: function() {
            return JSON.parse(APP.$.cookie.get("P00002") || "{}").uid || ""
        },
        _getDomain: function() {
            var a = 2,
            b = window.location.hostname.split(".");
            return b = b.slice(b.length - a),
            b.join(".")
        },
        send: function(a, b) {
            a = a || "//msg.iqiyi.com/b";
            var c = new Image;
            c.onload = c.onerror = c.onabort = function() {
                c.onload = c.onerror = c.onabort = null,
                c = null
            };
            var d = [];
            for (var e in b) d.push(e + "=" + encodeURIComponent(b[e]));
            c.src = a + "?" + d.join("&")
        },
        destroy: function() {
            f.destroy()
        },
        getOS: function() {
            var a = navigator.userAgent.toLowerCase(),
            b;
            return /android/.test(a) && !/windows phone/.test(a) ? b = "android": /iphone/.test(a) && !/windows phone/.test(a) ? b = "ios": /windows phone/.test(a) ? b = "windows": /blackberry/.test(a) && (b = "blackberry"),
            b || ""
        },
        getAS: function(a, b) {
            var c = "ChEnYH0415dadrrEDFf2016",
            e = d.getAnonymousUid();
            return $.crypto.md5(a + e + b + c)
        }
    })
});
define("../../common/service/uid/uid", ["./uuid"],
function(a, b, c) {
    var d = a("./uuid");
    c.exports = APP.createService({
        newsur: !1,
        get: function(a) {
            var b = APP.$.cookie.get("QC006");
            if (b) {
                a(b);
                return
            }
            this.newsur = !0,
            Q.__newuser = !0,
            d.get(function(b) {
                APP.$.cookie.set("QC006", b, {
                    expires: 31536e6,
                    path: "/",
                    domain: "iqiyi.com"
                }),
                a(b)
            })
        },
        getnewusr: function() {
            return this.newsur ? this.newsur: APP.$.cookie.get("QC006") ? !1 : !0
        }
    })
});
define("../../common/service/utils/page", [],
function(a, b, c) {
    var d = ["load", "unload", "beforeunload"];
    c.exports = APP.createService({
        $: function(a) {
            return APP.$(a)
        },
        title: function(a) {
            if (!a) return document.title;
            document.title = a
        },
        url: function(a) {
            return a && (window.location.href = a),
            window.location.href
        },
        search: function() {
            return window.location.search
        },
        origin: function() {
            return window.location.origin
        },
        hostname: function() {
            return window.location.hostname
        },
        pathname: function() {
            return window.location.pathname
        },
        referrer: function(a) {
            return window.document.referrer
        },
        setTimeout: function(a, b) {
            return setTimeout(a, b)
        },
        clearTimeout: function(a) {
            clearTimeout(a)
        },
        on: function(a, b) {
            if (d.indexOf(a) == -1) throw "不支持事件：" + a;
            APP.$(window).on(a, b)
        },
        un: function(a, b) {
            if (d.indexOf(a) == -1) throw "不支持事件：" + a;
            APP.$(window).un(a, b)
        },
        pushState: function(a, b, c) {
            window.history.pushState && window.history.pushState(b || {},
            c || "", a)
        },
        replaceState: function(a, b, c) {
            window.history.replaceState && window.history.replaceState(b || {},
            c || "", a)
        }
    })
});
define("./component/buyVideoBtn", ["../service/vipTip", "../../../common/service/config/config", "../../../common/service/user/user", "../../../common/service/user/user", "../../../common/service/pingback/longyuan4_clickpingback", "../service/videoInfo"],
function(a, b, c) {
    var d = a("../service/vipTip"),
    e = a("../../../common/service/config/config"),
    f = a("../../../common/service/user/user"),
    f = a("../../../common/service/user/user"),
    g = a("../../../common/service/pingback/longyuan4_clickpingback"),
    h = a("../service/videoInfo");
    APP.define("page.playMovie.component.buyVideoBtn", {
        message: ["PLAYERROR_CLOUDTIP", "PLAYER_VIDEO_ERROR", "PLAYER_LOAD_AND_PLAY"],
        _templateType: "",
        _deferred: new $.Deferred,
        onMessage: function(a, b) {
            var c = this;
            a == "PLAYER_LOAD_AND_PLAY" && (this.getVideoType(b).then(function(a) {
                c._templateType = a,
                c._deferred.resolve()
            }), APP.postMessage("PLAYER_TO_RECOVER"), this.hide()),
            a == "PLAYERROR_CLOUDTIP" && (this.isVipTipAvailable = !1),
            a == "PLAYER_VIDEO_ERROR" && (b.type == "video.vipckfail" ? (APP.postMessage("RESOLUTIONSWITCHER_DISABLE"), this._deferred.done(function() {
                c._templateType === "MOVIE" ? c.checkVipFailedHandle(b.param) : APP.postMessage("PLAYDOWNLOADAPPBTN_SHOW")
            })) : APP.postMessage("PLAYDOWNLOADAPPBTN_SHOW"))
        },
        checkVipFailedHandle: function(a) {
            var b = this,
            c = a.aid;
            f.isLogin() ? f.getIsValidVip(function(d) {
                d ? f.getVipType(function(d) {
                    a.pre ? b.showVipLayer(c) : b.showVipLayer(c)
                }) : f.getStatus(function(a) {
                    a == "2" ? this.show("提示：已暂停您的VIP服务，请与客服联系") : b.showVipLayer(c)
                })
            }) : a.pre ? (a.previewType === "6min" || a.previewType === "noSrc") && b.showVipLayer(c) : b.showVipLayer(c)
        },
        showVipLayer: function(a) {
            var b = this;
            d.getVipLayer({
                aid: a,
                layCode: "bottom_btn_v3"
            },
            function(a) {
                b.show(a.data.data.data.html)
            })
        },
        show: function(a) {
            APP.postMessage("PLAYDOWNLOADAPPBTN_HIDE"),
            this.rootElement.html(a),
            this.rootElement.removeClass("hide")
        },
        hide: function() {
            this.rootElement.addClass("hide")
        },
        listeners: {
            click: function(a, b, c) {
                g.send({
                    rseat: "605091_vip"
                })
            }
        },
        init: function() {
            window.VIP_DIANBOQUAN_CLICK = function() {
                event.preventDefault(),
                event.stopPropagation(),
                $.ajax({
                    url: event.target.getAttribute("href"),
                    dataType: "jsonp",
                    jsonp: "callback" + (new Date).getTime(),
                    data: {},
                    timeout: 5e3,
                    success: function(a, b, c) {
                        a.code == "A00000" && location.reload()
                    },
                    error: function(a, b) {
                        location.reload()
                    }
                })
            }
        },
        getVideoType: function(a) {
            return h.getVideoParams({
                tvid: a.tvid,
                vid: a.vid
            }).then(function(a) {
                return a.templateType
            })
        }
    })
});
define("../../common/service/pingback/longyuan4_clickpingback", ["../user/user"],
function(a, b, c) {
    var d = location.protocol === "https:" ? "https://msg.iqiyi.com/b": "http://msg.71.am/b",
    e = a("../user/user"),
    f = {
        A: "a",
        IMG: "i",
        OTHER: "o"
    },
    g = {};
    c.exports = APP.createService({
        init: function(a) {
            return g.c1 = a.channelId || "",
            g.tmplt = this.convertTmpltName(a.templateType),
            this
        },
        sendProbe: function(a) {
            var b = {
                t: 20,
                pf: /pps.tv/i.test(document.domain) ? 202 : 2,
                p: "20",
                p1: "201",
                u: APP.$.cookie.get("QC006"),
                pu: JSON.parse(APP.$.cookie.get("P00002") || "{}").uid || "",
                rn: (new Date).getTime(),
                rseat: a
            },
            c = [];
            for (i in b) b[i] === 0 && (b[i] = "0"),
            c.push(i + "=" + encodeURIComponent(b[i] || ""));
            var e = new Image;
            e.src = d + "?" + c.join("&")
        },
        send: function(a, b) {
            var c = {
                t: 20,
                pf: /pps.tv/i.test(document.domain) ? 202 : 2,
                p: "20",
                p1: "201",
                u: APP.$.cookie.get("QC006"),
                pu: JSON.parse(APP.$.cookie.get("P00002") || "{}").uid || "",
                jsuid: APP.$.cookie.get("QC006"),
                ce: APP.$.cookie.get("QC112"),
                rn: (new Date).getTime(),
                rt: a.rt,
                rlink: a.rlink
            };
            this.addParam(c);
            for (var e in a) a[e] == undefined || a[e] === "" || (c[e] = a[e]);
            var f = [];
            for (e in c) c[e] === 0 && (c[e] = "0"),
            f.push(e + "=" + encodeURIComponent(c[e] || ""));
            var g = new Image;
            g.src = d + "?" + f.join("&")
        },
        bind: function(a) {
            var b = this;
            $(document).on("click", "[" + a + "]",
            function(c) {
                c.preventDefault();
                var d = $(this),
                e = d.attr("href");
                if (e == "#" || /javascript\:/i.test(e)) e = "";
                b.send({
                    rseat: $.trim(d.attr(a)),
                    rt: tag_name = f[d[0].tagName || "OTHER"],
                    rlink: e,
                    block: d.attr("data-block") || ""
                }),
                e && !/javascript\:/i.test(e) && setTimeout(function() {
                    location.href = e
                },
                500)
            })
        },
        sendBlock: function(a) {
            var b = this,
            c = {
                t: "21",
                bstp: "0",
                pf: /pps.tv/i.test(document.domain) ? 202 : 2,
                p: "20",
                p1: "201",
                u: e.getAnonymousUid(),
                pu: e.getUid(),
                block: a,
                rn: "" + Math.floor(999999999 * Math.random())
            };
            this.addParam(c);
            var f = new Image;
            f.src = d + "?" + $.url.jsonToQuery(c)
        },
        addParam: function(a) {
            for (var b in g) g[b] && (a[b] = g[b])
        },
        convertTmpltName: function(a) {
            var b = "";
            switch (a) {
            case "MOVIE":
                b = "longmovietplt";
                break;
            case "ALBUM":
                b = "longseriestplt";
                break;
            case "SOURCE":
                b = "longsourcetplt";
                break;
            case "SHORT":
                b = "shortvideotplt";
                break;
            case "BODAN":
                b = "bodantplt"
            }
            return b
        }
    })
});
define("./component/downloadAppBtn", ["../service/vipTip", "../../../common/service/config/config", "../../../common/service/user/user", "../../../common/service/user/user", "../service/videoInfo"],
function(a, b, c) {
    var d = a("../service/vipTip"),
    e = a("../../../common/service/config/config"),
    f = a("../../../common/service/user/user"),
    f = a("../../../common/service/user/user"),
    g = a("../service/videoInfo");
    APP.define("page.playMovie.component.downloadAppBtn", {
        _templateType: "",
        _deferred: new $.Deferred,
        message: ["PLAYDOWNLOADAPPBTN_SHOW", "PLAYDOWNLOADAPPBTN_HIDE", "PLAYER_LOAD_AND_PLAY", "PLAYER_LOAD_VIDEO"],
        onMessage: function(a, b) {
            var c = this;
            a == "PLAYDOWNLOADAPPBTN_SHOW" && this.show(),
            a == "PLAYDOWNLOADAPPBTN_HIDE" && this.hide(),
            a == "PLAYER_LOAD_AND_PLAY" && this.getVideoType(b).then(function(a) {
                a !== "MOVIE" ? c.show() : c.hide(),
                c._templateType = a,
                c._deferred.resolve()
            }),
            a === "PLAYER_LOAD_VIDEO" && this._deferred.done(function() {
                if (c._templateType === "MOVIE") {
                    var a = b[b.length - 1]; (a.vtype == "VIDEOPLAYING" || a.vtype == "VIDEOWITHADPLAYING") && c.show()
                }
            })
        },
        show: function() {
            this.rootElement.removeClass("hide")
        },
        hide: function() {
            this.rootElement.addClass("hide")
        },
        getVideoType: function(a) {
            return g.getVideoParams({
                tvid: a.tvid,
                vid: a.vid
            }).then(function(a) {
                return a.templateType
            })
        }
    })
});
define("./component/thirdPartyTip", ["../../../common/service/config/config", "../../../common/service/useragent/detect"],
function(a, b, c) {
    var d = a("../../../common/service/config/config"),
    e = a("../../../common/service/useragent/detect");
    APP.define("page.playMovie.component.thirdPartyTip", {
        showTemplateCode: {
            1 : !0,
            2 : !0
        },
        SHOW_CLOSE_PLATFORM: ["m_123_wifi"],
        messageHandlers: {
            FORCE_DIVERSION: function(a) {
                this.open(a.templateCode, a.aid)
            }
        },
        message: ["POPUPDIALOG_SHOW", "POPUPDIALOG_HIDE", "FORCE_DIVERSION"],
        onMessage: function(a, b) {
            this.messageHandlers[a] && this.messageHandlers[a].call(this, b)
        },
        init: function() {
            this.id = this.rootElement.attr("glue-id");
            var a = this.rootElement.attr("data-template"),
            b = $.url.getQueryValue(location.href, "msrc") || $.url.getQueryValue(location.href, "vfm") || $.cookie.get("QC015");
            this.open(a)
        },
        open: function(a, b) {
            var c = this,
            d = window.localStorage;
            e.qq && APP.postMessage("PLAYER_REMOVE");
            var f = !!this.showTemplateCode[a],
            g = +(new Date),
            h = 864e5;
            b = b ? b: "ans";
            try {
                var i = JSON.parse(d.getItem("_ThirdPartyDLTip_")) || {}
            } catch(j) {
                var i = {}
            }
            f && (!i[b] || i[b] > g + h) && $.cookie.set("QC034", "", {
                expires: 1,
                path: "/",
                domain: "iqiyi.com"
            });
            if (!f || APP.$.cookie.get("QC034") === "true") return;
            APP.postMessage("PLAYER_PAUSE"),
            c.rootElement.removeClass("hide"),
            APP.postMessage("COMMON_COVER_SHOW"),
            a == "2" ? (c.nodes.download.removeClass("hide"), c.nodes.forceClose.removeClass("hide"), c.nodes.forceClose.on("click",
            function(a) {
                c.close(b)
            }), c.nodes.close.addClass("hide")) : a == "1" && (c.nodes.close.removeClass("hide"), c.nodes.download.addClass("hide"), c.nodes.forceClose.addClass("hide")),
            c.nodes.close.on("click",
            function(a) {
                APP.postMessage("PLAYER_PLAY"),
                c.close(b)
            }),
            c.nodes.callApp.on("click",
            function(a) {
                c.close(b)
            }),
            c.nodes.download.on("click",
            function(a) {
                c.close(b)
            })
        },
        close: function(a) {
            this.rootElement.addClass("hide"),
            APP.postMessage("COMMON_COVER_HIDE");
            var b = window.localStorage,
            c = +(new Date);
            a = a ? a: "ans";
            try {
                var d = JSON.parse(b.getItem("_ThirdPartyDLTip_")) || {};
                d[a] = c,
                b.setItem("_ThirdPartyDLTip_", JSON.stringify(d))
            } catch(e) {}
            APP.$.cookie.set("QC034", "true", {
                expires: 864e5,
                path: "/",
                domain: "iqiyi.com"
            })
        }
    })
});
define("./component/playerResolutionSwitcher", ["../../../common/service/message/message", "../../../common/service/user/user", "../../../common/service/config/config", "../../../common/service/utils/videoInfo", "../../../common/service/pingback/vvPingback"],
function(a, b, c) {
    var d = a("../../../common/service/message/message"),
    e = a("../../../common/service/user/user"),
    f = a("../../../common/service/config/config"),
    g = a("../../../common/service/utils/videoInfo"),
    h = a("../../../common/service/pingback/vvPingback");
    APP.define("page.playMovie.component.playerResolutionSwitcher", {
        videoRate: null,
        videoInfo: null,
        isAvaliable: 2,
        afterSwitchSeek: !1,
        swithSeekTime: 0,
        message: ["RESOLUTIONSWITCHER_DISABLE", "PLAYER_AFTER_SET_SRC", "PLAYER_PLAYING", "PLAYER_TIME_UPDATE", "PLAYER_LOAD_AND_PLAY", "PLAYER_VIDEO_PLAY", "RESOLUTIONSWITCHER_SEEK"],
        onMessage: function(a, b) {
            a == "RESOLUTIONSWITCHER_DISABLE" && (this.nodes.btn.hasClass("disabled") || this.nodes.btn.addClass("disabled")),
            a == "PLAYER_LOAD_AND_PLAY" && (this.isAvaliable = 2, this.videoInfo = b, this.videoRate = b.rate || this.videoRate, this.nodes.btn.html(f.mtMap[this.videoRate].name), this.checkVIP()),
            a == "PLAYER_VIDEO_PLAY" && (b.vtype != "TRIALVIDEOPLAYING" && this.setAviliable(!0), this.afterSwitchSeek && (this.swithSeekTime && APP.postMessage("PLAYER_SEEK", parseInt(this.swithSeekTime * 1)), this.afterSwitchSeek = !1));
            if (a == "PLAYER_AFTER_SET_SRC") {
                this.videoRate = b.rate || $.cookie.get("play_stream") || 1;
                var c = b,
                b = b.__vInfo;
                if (b && b.vidl) {
                    var d = b.vidl,
                    e = [],
                    g = []; [96, 1, 2].forEach(function(a) {
                        for (var b = 0,
                        c = d.length; b < c; b++) if (d[b].vd == a) {
                            e.push(d[b]),
                            g.push(d[b].vd + "");
                            break
                        }
                    }),
                    g.indexOf(this.videoRate + "") == -1 && (this.videoRate = g[0]),
                    this.nodes.btn.html(f.mtMap[this.videoRate].name),
                    this.updateResolutionList(e),
                    c.vtype == "VIDEOPLAYING" && this.setAviliable(!0)
                }
            }
            a == "PLAYER_TIME_UPDATE" && this.videoInfo && (this.videoInfo.currentTime = b),
            a == "RESOLUTIONSWITCHER_SEEK" && (this.swithSeekTime = +b.seekTime, this.afterSwitchSeek = !0)
        },
        setAviliable: function(a) {
            this.isAvaliable -= a ? 1 : 0,
            this.isAvaliable <= 0 ? this.nodes.btn.removeClass("disabled") : this.nodes.btn.addClass("disabled")
        },
        checkVIP: function() {
            var a = this;
            g.getVideoInfo(Q.PageInfo.playInfo.tvid, Q.PageInfo.playInfo.vid,
            function(b) {
                b.bossStatus == 2 ? e.isLogin() ? e.getVipType(function(b) {
                    b == 1 || b == 4 ? a.setAviliable(!0) : a.setAviliable(!1)
                }) : a.setAviliable(!1) : a.setAviliable(!0)
            })
        },
        updateResolutionList: function(a) {
            var b = [],
            c = f.mtMap,
            d = $.cookie.get("play_stream") || 1;
            a.forEach(function(a) {
                var e = a.vd + "";
                if (c[e]) {
                    var f = c[e].name;
                    a._vd = f,
                    a._fle = "",
                    a.selected = d == e ? "selected": "",
                    a.isCallApp = !1,
                    b.push(a)
                }
            }),
            $.os.ios || b.push({
                isCallApp: !0,
                _vd: "APP超清",
                tvid: this.videoInfo.tvid,
                vid: this.videoInfo.vid
            }),
            b.reverse(),
            this.nodes.list.html($.plugins.Mustache.render($("#tpl_resolutionList").html(), {
                list: b
            })),
            APP.initComponent(this.rootElement),
            !(a.length < 2)
        },
        init: function() {
            var a = this;
            this.nodes.btn.on("click",
            function(b) {
                b.preventDefault();
                if (a.nodes.btn.hasClass("disabled")) return ! 1;
                a.nodes.list.css("display") === "none" ? (a.rootElement.addClass("selected"), a.nodes.list.removeClass("dn")) : (a.rootElement.removeClass("selected"), a.nodes.list.addClass("dn"))
            }),
            this.nodes.list.on("click", ["li", "a"],
            function(b) {
                a.rootElement.removeClass("selected"),
                a.nodes.list.addClass("dn");
                var c = $(b.target);
                b.target.nodeName.toLowerCase() == "li" && (c = $(b.target).find("a"));
                var d = c.attr("data-rate");
                if (d) {
                    if (d == a.videoInfo.rate) return ! 1;
                    a.nodes.btn.html(c.attr("data-rate-name")),
                    $.cookie.set("play_stream", d, {
                        expires: 31536e6,
                        path: "/",
                        domain: "iqiyi.com"
                    }),
                    APP.postMessage("PLAYER_RATE_CHANGE", {
                        formRate: a.videoInfo.rate,
                        toRate: d
                    }),
                    h.send({
                        t: "5",
                        a: "4",
                        from_ra: a.videoInfo.rate || a.videoRate,
                        to_ra: d,
                        tvid: a.videoInfo.tvid,
                        vid: a.videoInfo.vid
                    });
                    var e = a.videoInfo.currentTime;
                    APP.postMessage("PLAYER_LOAD_AND_PLAY", {
                        tvid: a.videoInfo.tvid,
                        vid: a.videoInfo.vid,
                        rate: d,
                        no_ad: 1,
                        aid: a.videoInfo.aid,
                        startTime: e,
                        noAD: !0,
                        noPtPW: !0,
                        videoFrom: "ResolutionSwitch"
                    }),
                    APP.postMessage("RESOLUTIONSWITCHER_SEEK", {
                        seekTime: e
                    })
                }
            }),
            $(document).on("click",
            function(b) {
                b.target != a.nodes.btn[0] && (a.nodes.list.addClass("dn"), a.rootElement.removeClass("selected"))
            })
        }
    })
});
define("../../common/service/message/message", ["../config/config", "../user/user", "../uid/jsuid"],
function(a, b, c) {
    var d = a("../config/config"),
    e = a("../user/user"),
    f = a("../uid/jsuid"),
    g = {
        2 : "update",
        3 : "comment",
        4 : "praise",
        5 : "fans",
        6 : "system",
        7 : "upload",
        8 : "vote",
        9 : "UGC",
        update: "2",
        comment: "3",
        praise: "4",
        fans: "5",
        system: "6",
        upload: "7",
        vote: "8",
        UGC: "9"
    },
    h = function(a, b, c) {
        var d = this;
        b.param.agentType = b.param.agentType || (APP.$.browser.ios ? 12 : 13),
        $.ajax({
            url: a,
            dataType: "jsonp",
            data: b.param,
            type: b.method || "GET",
            timeout: b.timeout || 5e3,
            success: function(a) {
                c && (a.code == "A00000" ? c.success(a) : c.failure(a))
            },
            error: function(a) {
                c && c.failure({
                    code: "E0000"
                })
            }
        })
    };
    c.exports = APP.createService({
        read: function(a, b, c) {
            var f = d.interfaces.notice.readNotice;
            b || (b = {
                param: {}
            }),
            b.param.status = 1,
            b.param.msgids = a,
            e.isLogin() ? b.param.authcookie = APP.$.cookie.get("P00001") || "": b.param.device_id = APP.$.cookie.get("QC006") || "",
            h(f, b, c)
        },
        show: function(a, b, c) {
            var e = d.interfaces.notice.readNotice;
            b || (b = {
                param: {}
            }),
            b.param.show = 1,
            b.param.msgids = a,
            h(e, b, c)
        },
        getAllCount: function(a, b) {
            var c = d.interfaces.notice[e.isLogin() ? "getAllNoticeCount": "getAllNoticeCountAnony"];
            a || (a = {
                param: {}
            });
            var i = a.param.types.split(",");
            for (var j in i) i[j] = g[i[j]];
            a.param.types = i.join(","),
            e.isLogin() ? (a.param.authcookie = APP.$.cookie.get("P00001") || "", h(c, a, b)) : f.get(function() {
                a.param.device_id = APP.$.cookie.get("QC006") || "",
                h(c, a, b)
            })
        },
        readAll: function(a, b) {
            var c = d.interfaces.notice.updateAllNotice;
            options = {
                param: {}
            },
            e.isLogin() ? options.param.authcookie = APP.$.cookie.get("P00001") || "": options.param.device_id = APP.$.cookie.get("QC006") || "",
            options.param.types = g[a],
            options.param.status = 1,
            options.agent_type = APP.$.browser.ios ? 12 : 13,
            h(c, options, b)
        },
        getNewMessage: function(a, b, c, f) {
            var i = d.interfaces.notice.getNotice;
            options = {
                param: {}
            },
            e.isLogin() ? options.param.authcookie = APP.$.cookie.get("P00001") || "": options.param.device_id = APP.$.cookie.get("QC006") || "",
            options.param.types = g[a],
            options.param.status = 0,
            options.param.page = b,
            options.param.pagesize = c,
            options.agent_type = APP.$.browser.ios ? 12 : 13,
            h(i, options, f)
        },
        showAll: function(a, b) {
            var c = [];
            for (var f = a.length - 1; f >= 0; f--) c.push(g[a[f]]);
            var i = d.interfaces.notice.updateAllNotice;
            options = {
                param: {}
            },
            e.isLogin() ? options.param.authcookie = APP.$.cookie.get("P00001") || "": options.param.device_id = APP.$.cookie.get("QC006") || "",
            options.param.types = c.join(","),
            options.param.flag = 1,
            options.param.show = 1,
            options.agent_type = APP.$.browser.ios ? 12 : 13,
            h(i, options, b)
        }
    })
});
define("./component/share", ["../../../common/service/utils/videoInfo", "../../../common/service/shareSDK/share", "../../../common/service/weChatJsSDK/weChatJsSDK", "../../../common/service/storage/storage", "../../../common/service/useragent/detect"],
function(a, b, c) {
    var d = a("../../../common/service/utils/videoInfo"),
    e = a("../../../common/service/shareSDK/share"),
    f = a("../../../common/service/weChatJsSDK/weChatJsSDK"),
    g = a("../../../common/service/storage/storage"),
    h = a("../../../common/service/useragent/detect"),
    i = "h5_add_play_shareGuide_status",
    j = h.weixin,
    k = /iqiyiH5WEB/i.test(navigator.userAgent),
    l = function(a) {
        var b = (new RegExp("[?&]" + a + "=([^&#]*)")).exec(window.location.href);
        return b == null ? undefined: b[1] || 0
    },
    m = function(a, b) {
        var c = (new RegExp("[?&](" + b + "=[^&#]*)")).exec(a);
        if (c == null) return a;
        var d = c[1] + "&",
        e = "&" + c[1];
        a = a.replace(d, ""),
        a = a.replace(e, ""),
        a = a.replace(c[1], "");
        var f = a.split("?");
        return f[1] == "" || typeof f[1] != "string" ? f[0] : a
    },
    n = function(a) {
        var b = a.split("?");
        return b[1] == "" || typeof b[1] != "string" ? b[0] + "?dummy=": a
    },
    o = function(a, b, c) {
        var d = l("wx_uid1"),
        e = l("wx_uid2");
        if (a.length <= 7) return undefined;
        a = m(a, "wx_uid1"),
        a = m(a, "wx_uid2"),
        a = m(a, "wx_ticket"),
        a = m(a, "wx_appid"),
        a = n(a);
        var f = "http://bird.sns.iqiyi.com/jump?jump_url=" + encodeURIComponent(a.substring(7));
        return d != undefined && (f = f + "&u1=" + d),
        e != undefined && (f = f + "&u2=" + e),
        c && !d && (f = f + "&u1=wxid" + c),
        b == "MSG" ? f += "&share=MSG": f += "&share=TLN",
        f
    },
    p = {
        hide: {
            trigger: function() {
                this.rootElement.addClass("selected"),
                this.sendPingback({
                    shrtgt: "",
                    rseat: "1503231_shr"
                }),
                this.status = p.show
            }
        },
        show: {
            trigger: function() {
                this.rootElement.removeClass("selected"),
                this.status = p.hide
            }
        }
    },
    q = {
        weibo: "2",
        renren: "3",
        qzone: "4",
        qweibo: "5",
        qq: "6",
        weixin: "7",
        pyq: "8"
    };
    APP.define("page.playMovie.component.share", {
        _videoInfo: {},
        message: ["PLAYER_LOAD_AND_PLAY"],
        messageHandlers: {
            PLAYER_LOAD_AND_PLAY: function(a) {
                this._videoInfo.tvid = a.tvid,
                this._videoInfo.vid = a.vid,
                this.setParams()
            }
        },
        onMessage: function(a, b) {
            this.messageHandlers[a] && this.messageHandlers[a].call(this, b)
        },
        sendPingback: function(a) {
            function b(a) {
                $.extend(a, {
                    t: 20,
                    pf: 2,
                    p: 20,
                    p1: 201,
                    s1: 1,
                    bstp: "30_shr",
                    u: $.cookie.get("QC006") || "",
                    e: $.crypto.md5($.cookie.get("QC006") + "share_pingback" + new Date * 1),
                    pu: JSON.parse($.cookie.get("P00002") || "{}").uid || "",
                    rn: (new Date).getTime(),
                    shrtp: 1
                });
                var b = new Image;
                b.src = "http://msg.71.am/b?" + $.url.jsonToQuery(a)
            }
            $.extend(a, {
                a: "dockshr",
                s2: "2_1",
                s3: location.href
            }),
            b(a)
        },
        setWechatShare: function() {
            var a = this._videoInfo,
            b = o(a.url, "TLN", ""),
            c = o(a.url, "MSG", ""),
            d = {
                title: a.title,
                imgUrl: a.imgUrl,
                desc: a.desc
            };
            f.shareTimeline($.extend(d, {
                link: b
            })).shareAppMessage($.extend(d, {
                link: c
            }))
        },
        setParams: function() {
            var a = this,
            b = this._videoInfo;
            d.getVideoInfo(b.tvid, b.vid,
            function(c) {
                var d = a._videoInfo = $.extend(a._videoInfo, {
                    url: c.videoUrl || location.href,
                    desc: c.info || c.desc || "",
                    title: c.videoName || c.vn || "",
                    imgUrl: c.imageUrl || c.vpic || "",
                    cid: c.cid,
                    tvid: c.tvid
                });
                b.desc.length > 50 && (b.desc = b.desc.slice(0, 50) + "..."),
                j && a.setWechatShare()
            })
        },
        getUrlByType: function(a) {
            var b = this._videoInfo,
            c = $.extend({},
            {
                url: b.url,
                desc: b.desc,
                title: b.title,
                imgUrl: b.imgUrl
            });
            return e.getShareUrl(a, c)
        },
        showShareGuide: function() {
            var a = ["求分享这种话银家怎么说的出口~", "快把人家分享出去嘛~", "据说10秒内分享的人，会马上转运哒！", "点分享会瘦十斤喔！", "据说颜值高的人都分享了~", "万水千山总是情，分享一次行不行"],
            b = a[[Math.floor(Math.random() * a.length)]];
            APP.postMessage("VIDEOEXTENDBAR_TIPS_SHOW", b)
        },
        setDisappearTime: function() {
            APP.postMessage("VIDEOEXTENDBAR_TIPS_HIDE"),
            g.write(i, Date.now() + 1728e5)
        },
        init: function() {
            this.status = p.hide;
            var a = this,
            b = this.nodes;
            j && (b.normalIcon.addClass("hide"), b.shareBtn.addClass("hide")),
            k && b.shareList.removeClass("m-share-four");
            var c = g.read(i);
            c && c > (new Date).getTime() || this.showShareGuide(),
            $(document).on("click",
            function(b) {
                b.target != a.nodes.normalIcon[0] && b.target != a.nodes.weixinIcon[0] && b.target != a.nodes.shareBtn[0] && (a.rootElement.removeClass("selected"), a.status = p.hide)
            })
        },
        doShare: function(a) {
            var b = "",
            c = this._videoInfo;
            this.sendPingback({
                c1: c.cid,
                r: c.tvid,
                shrtgt: q[a],
                rseat: "clkshr_" + q[a]
            });
            switch (a) {
            case "weibo":
            case "renren":
            case "qzone":
            case "qweibo":
            case "qq":
                b = this.getUrlByType(a),
                setTimeout(function() {
                    a != "qq" && a != "qzone" || !!h.qq ? location.href = b: window.open(b, "_blank")
                },
                200);
                break;
            case "weixin":
            case "pyq":
                b = location.protocol + "//" + location.host + location.pathname + (location.search == "" ? "?share_from=iqiyiH5WEB": location.search + "&share_from=iqiyiH5WEB") + location.hash;
                var d = c.title,
                e = {
                    weixin: "WXShareFriends",
                    pyq: "WXShareTimeline"
                },
                f = e[shrtgt];
                typeof iqiyiH5WEB != "undefined" && iqiyiH5WEB[f](b, d);
                break;
            default:
            }
        },
        eventHandlers: {
            weibo: function() {
                this.doShare("weibo")
            },
            renren: function() {
                this.doShare("renren")
            },
            qzone: function() {
                this.doShare("qzone")
            },
            qweibo: function() {
                this.doShare("qweibo")
            },
            qq: function() {
                this.doShare("qq")
            },
            weixin: function() {
                this.doShare("weixin")
            },
            pyq: function() {
                this.doShare("pyq")
            },
            shareBtn: function() {
                this.setDisappearTime(),
                j ? APP.postMessage("_SHARE_WECHAT_TRIGGER_") : this.status.trigger.call(this)
            },
            normalIcon: function() {
                this.setDisappearTime(),
                this.status.trigger.call(this)
            },
            weixinIcon: function() {
                this.setDisappearTime(),
                APP.postMessage("_SHARE_WECHAT_TRIGGER_")
            }
        },
        listeners: {
            click: function(a, b, c) {
                this.eventHandlers[c] && this.eventHandlers[c].call(this)
            }
        }
    })
});
define("../../common/service/shareSDK/share", ["../utils/util"],
function(a, b, c) {
    var d = a("../utils/util");
    c.exports = APP.createService({
        init: function() {
            var a = document.getElementsByTagName("head")[0],
            b = document.createElement("script");
            b.src = "http://connect.qq.com/widget/loader/loader.js",
            b.setAttribute("widget", "shareqq"),
            b.charset = "utf-8",
            a.appendChild(b)
        },
        getShareUrl: function(a, b) {
            return this.shareTarget(a)(b)
        },
        shareTarget: function(a) {
            var b = {
                qq: function(a) {
                    var b = "http://connect.qq.com/widget/shareqq/index.html";
                    return b + "?" + d.jsonToQuery({
                        url: a.url,
                        desc: a.desc,
                        title: a.title || " ",
                        summary: a.summary || " ",
                        pics: a.imgUrl || " ",
                        flash: "",
                        site: a.site || "爱奇艺",
                        style: "201",
                        width: 32,
                        height: 32
                    })
                },
                renren: function(a) {
                    var b = "http://widget.renren.com/dialog/share";
                    return b + "?" + d.jsonToQuery({
                        resourceUrl: a.url,
                        srcUrl: a.url,
                        title: a.title || "",
                        description: a.desc || "",
                        pic: a.imgUrl || "",
                        summary: a.summary || ""
                    })
                },
                qzone: function(a) {
                    var b = "http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey",
                    c = a.title;
                    return c = (c && c.length > 50 ? c.substring(0, 50) + "...": c) || "",
                    b + "?" + d.jsonToQuery({
                        url: a.url,
                        showcount: "1",
                        site: a.site || "爱奇艺",
                        title: c,
                        pics: a.imgUrl || "",
                        summary: a.desc || ""
                    })
                },
                weibo: function(a) {
                    var b = "http://v.t.sina.com.cn/share/share.php";
                    return b + "?" + d.jsonToQuery({
                        appkey: "1925825497",
                        url: a.url,
                        title: a.title || "",
                        pic: a.imgUrl || ""
                    })
                }
            };
            return b[a]
        }
    })
});
define("../../common/service/weChatJsSDK/weChatJsSDK", ["./authorize", "./SDK"],
function(a, b, c) {
    var d = a("./authorize"),
    e = a("./SDK"),
    f = {
        preProcessShareData: function(a) {
            var b = {
                title: "爱奇艺-中国领先的视频门户，高清影视剧，网络视频在线观看"
            };
            for (var c in a) b[c] = a[c];
            return b
        }
    },
    g = function(a, b) {
        return f[a](b)
    };
    c.exports = APP.createService({
        shareTimeline: function(a) {
            return a = g("preProcessShareData", a),
            $.when(d.ready).done(function() {
                e.onMenuShareTimeline(a)
            }),
            this
        },
        shareAppMessage: function(a) {
            return a = g("preProcessShareData", a),
            $.when(d.ready).done(function() {
                e.onMenuShareAppMessage(a)
            }),
            this
        }
    })
});
define("../../common/service/weChatJsSDK/authorize", ["../config/config", "./SDK"],
function(a, b, c) {
    var d = a("../config/config").interfaces.weChatJsSDK,
    e = a("./SDK"),
    f = {
        ready: new $.Deferred,
        ticket: ""
    };
    f._utils = {},
    function(a, b) {
        function c(a, b, c) {
            var i = 0,
            m = [0],
            n = "",
            o = null,
            n = c || "UTF8";
            if ("UTF8" !== n && "UTF16" !== n) throw "encoding must be UTF8 or UTF16";
            if ("HEX" === b) {
                if (0 !== a.length % 2) throw "srcString of HEX type must be in byte increments";
                o = e(a),
                i = o.binLen,
                m = o.value
            } else if ("TEXT" === b) o = d(a, n),
            i = o.binLen,
            m = o.value;
            else if ("B64" === b) o = g(a),
            i = o.binLen,
            m = o.value;
            else {
                if ("BYTES" !== b) throw "inputFormat must be HEX, TEXT, B64, or BYTES";
                o = f(a),
                i = o.binLen,
                m = o.value
            }
            this.getHash = function(a, b, c, d) {
                var e = null,
                f = m.slice(),
                g = i,
                n;
                3 === arguments.length ? "number" != typeof c && (d = c, c = 1) : 2 === arguments.length && (c = 1);
                if (c !== parseInt(c, 10) || 1 > c) throw "numRounds must a integer >= 1";
                switch (b) {
                case "HEX":
                    e = h;
                    break;
                case "B64":
                    e = j;
                    break;
                case "BYTES":
                    e = k;
                    break;
                default:
                    throw "format must be HEX, B64, or BYTES"
                }
                if ("SHA-1" !== a) throw "Chosen SHA variant is not supported";
                for (n = 0; n < c; n += 1) f = p(f, g),
                g = 160;
                return e(f, l(d))
            },
            this.getHMAC = function(a, b, c, o, q) {
                var r, t, u, D, E = [],
                F = [];
                r = null;
                switch (o) {
                case "HEX":
                    o = h;
                    break;
                case "B64":
                    o = j;
                    break;
                case "BYTES":
                    o = k;
                    break;
                default:
                    throw "outputFormat must be HEX, B64, or BYTES"
                }
                if ("SHA-1" !== c) throw "Chosen SHA variant is not supported";
                t = 64,
                D = 160;
                if ("HEX" === b) r = e(a),
                u = r.binLen,
                r = r.value;
                else if ("TEXT" === b) r = d(a, n),
                u = r.binLen,
                r = r.value;
                else if ("B64" === b) r = g(a),
                u = r.binLen,
                r = r.value;
                else {
                    if ("BYTES" !== b) throw "inputFormat must be HEX, TEXT, B64, or BYTES";
                    r = f(a),
                    u = r.binLen,
                    r = r.value
                }
                a = 8 * t,
                b = t / 4 - 1;
                if (t < u / 8) {
                    if ("SHA-1" !== c) throw "Unexpected error in HMAC implementation";
                    r = p(r, u),
                    r[b] &= 4294967040
                } else t > u / 8 && (r[b] &= 4294967040);
                for (t = 0; t <= b; t += 1) E[t] = r[t] ^ 909522486,
                F[t] = r[t] ^ 1549556828;
                if ("SHA-1" !== c) throw "Unexpected error in HMAC implementation";
                return c = p(F.concat(p(E.concat(m), a + i)), a + D),
                o(c, l(q))
            }
        }
        function d(a, b) {
            var c = [],
            d,
            e = [],
            f = 0,
            g;
            if ("UTF8" === b) for (g = 0; g < a.length; g += 1) for (d = a.charCodeAt(g), e = [], 128 > d ? e.push(d) : 2048 > d ? (e.push(192 | d >>> 6), e.push(128 | d & 63)) : 55296 > d || 57344 <= d ? e.push(224 | d >>> 12, 128 | d >>> 6 & 63, 128 | d & 63) : (g += 1, d = 65536 + ((d & 1023) << 10 | a.charCodeAt(g) & 1023), e.push(240 | d >>> 18, 128 | d >>> 12 & 63, 128 | d >>> 6 & 63, 128 | d & 63)), d = 0; d < e.length; d += 1)(f >>> 2) + 1 > c.length && c.push(0),
            c[f >>> 2] |= e[d] << 24 - f % 4 * 8,
            f += 1;
            else if ("UTF16" === b) for (g = 0; g < a.length; g += 1)(f >>> 2) + 1 > c.length && c.push(0),
            c[f >>> 2] |= a.charCodeAt(g) << 16 - f % 4 * 8,
            f += 2;
            return {
                value: c,
                binLen: 8 * f
            }
        }
        function e(a) {
            var b = [],
            c = a.length,
            d,
            e;
            if (0 !== c % 2) throw "String of HEX type must be in byte increments";
            for (d = 0; d < c; d += 2) {
                e = parseInt(a.substr(d, 2), 16);
                if (isNaN(e)) throw "String of HEX type contains invalid characters";
                b[d >>> 3] |= e << 24 - d % 8 * 4
            }
            return {
                value: b,
                binLen: 4 * c
            }
        }
        function f(a) {
            var b = [],
            c,
            d;
            for (d = 0; d < a.length; d += 1) c = a.charCodeAt(d),
            (d >>> 2) + 1 > b.length && b.push(0),
            b[d >>> 2] |= c << 24 - d % 4 * 8;
            return {
                value: b,
                binLen: 8 * a.length
            }
        }
        function g(a) {
            var b = [],
            c = 0,
            d,
            e,
            f,
            g,
            h;
            if ( - 1 === a.search(/^[a-zA-Z0-9=+\/]+$/)) throw "Invalid character in base-64 string";
            d = a.indexOf("="),
            a = a.replace(/\=/g, "");
            if ( - 1 !== d && d < a.length) throw "Invalid '=' found in base-64 string";
            for (e = 0; e < a.length; e += 4) {
                h = a.substr(e, 4);
                for (f = g = 0; f < h.length; f += 1) d = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".indexOf(h[f]),
                g |= d << 18 - 6 * f;
                for (f = 0; f < h.length - 1; f += 1) b[c >> 2] |= (g >>> 16 - 8 * f & 255) << 24 - c % 4 * 8,
                c += 1
            }
            return {
                value: b,
                binLen: 8 * c
            }
        }
        function h(a, b) {
            var c = "",
            d = 4 * a.length,
            e, f;
            for (e = 0; e < d; e += 1) f = a[e >>> 2] >>> 8 * (3 - e % 4),
            c += "0123456789abcdef".charAt(f >>> 4 & 15) + "0123456789abcdef".charAt(f & 15);
            return b.outputUpper ? c.toUpperCase() : c
        }
        function j(a, b) {
            var c = "",
            d = 4 * a.length,
            e, f, g;
            for (e = 0; e < d; e += 3) for (g = (a[e >>> 2] >>> 8 * (3 - e % 4) & 255) << 16 | (a[e + 1 >>> 2] >>> 8 * (3 - (e + 1) % 4) & 255) << 8 | a[e + 2 >>> 2] >>> 8 * (3 - (e + 2) % 4) & 255, f = 0; 4 > f; f += 1) c = 8 * e + 6 * f <= 32 * a.length ? c + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(g >>> 6 * (3 - f) & 63) : c + b.b64Pad;
            return c
        }
        function k(a) {
            var b = "",
            c = 4 * a.length,
            d, e;
            for (d = 0; d < c; d += 1) e = a[d >>> 2] >>> 8 * (3 - d % 4) & 255,
            b += String.fromCharCode(e);
            return b
        }
        function l(a) {
            var b = {
                outputUpper: !1,
                b64Pad: "="
            };
            try {
                a.hasOwnProperty("outputUpper") && (b.outputUpper = a.outputUpper),
                a.hasOwnProperty("b64Pad") && (b.b64Pad = a.b64Pad)
            } catch(c) {}
            if ("boolean" != typeof b.outputUpper) throw "Invalid outputUpper formatting option";
            if ("string" != typeof b.b64Pad) throw "Invalid b64Pad formatting option";
            return b
        }
        function m(a, b) {
            return a << b | a >>> 32 - b
        }
        function n(a, b) {
            var c = (a & 65535) + (b & 65535);
            return ((a >>> 16) + (b >>> 16) + (c >>> 16) & 65535) << 16 | c & 65535
        }
        function o(a, b, c, d, e) {
            var f = (a & 65535) + (b & 65535) + (c & 65535) + (d & 65535) + (e & 65535);
            return ((a >>> 16) + (b >>> 16) + (c >>> 16) + (d >>> 16) + (e >>> 16) + (f >>> 16) & 65535) << 16 | f & 65535
        }
        function p(a, b) {
            var c = [],
            d,
            e,
            f,
            g,
            h,
            i,
            j,
            k,
            l,
            p = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
            a[b >>> 5] |= 128 << 24 - b % 32,
            a[(b + 65 >>> 9 << 4) + 15] = b,
            l = a.length;
            for (j = 0; j < l; j += 16) {
                d = p[0],
                e = p[1],
                f = p[2],
                g = p[3],
                h = p[4];
                for (k = 0; 80 > k; k += 1) c[k] = 16 > k ? a[k + j] : m(c[k - 3] ^ c[k - 8] ^ c[k - 14] ^ c[k - 16], 1),
                i = 20 > k ? o(m(d, 5), e & f ^ ~e & g, h, 1518500249, c[k]) : 40 > k ? o(m(d, 5), e ^ f ^ g, h, 1859775393, c[k]) : 60 > k ? o(m(d, 5), e & f ^ e & g ^ f & g, h, 2400959708, c[k]) : o(m(d, 5), e ^ f ^ g, h, 3395469782, c[k]),
                h = g,
                g = f,
                f = m(e, 30),
                e = d,
                d = i;
                p[0] = n(d, p[0]),
                p[1] = n(e, p[1]),
                p[2] = n(f, p[2]),
                p[3] = n(g, p[3]),
                p[4] = n(h, p[4])
            }
            return p
        }
        a.sha1 = function(a) {
            var b = new c(a, "TEXT");
            return b.getHash("SHA-1", "HEX")
        },
        a.timestamp = function() {
            return + (new Date) / 1e3 >> 0
        },
        a.noncestr = function(a) {
            a = a || 16;
            var b = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz012345678+=-_",
            c = b.length,
            d = "";
            for (i = 0; i < a; i++) d += b.charAt(Math.floor(Math.random() * c));
            return d
        },
        a.jsonp = function(a, c) {
            return b.Deferred(function(d) {
                b.ajax({
                    url: a,
                    data: c,
                    dataType: "jsonp",
                    success: d.resolve,
                    error: d.reject
                })
            }).promise()
        }
    } (f._utils, window.$),
    function(a, b, c) {
        var d = ["checkJsApi", "onMenuShareTimeline", "onMenuShareAppMessage", "onMenuShareQQ", "onMenuShareWeibo", "onMenuShareQZone", "hideMenuItems", "showMenuItems", "hideAllNonBaseMenuItem", "showAllNonBaseMenuItem", "translateVoice", "startRecord", "stopRecord", "onVoiceRecordEnd", "playVoice", "onVoicePlayEnd", "pauseVoice", "stopVoice", "uploadVoice", "downloadVoice", "chooseImage", "previewImage", "uploadImage", "downloadImage", "getNetworkType", "openLocation", "getLocation", "hideOptionMenu", "showOptionMenu", "closeWindow", "scanQRCode", "chooseWXPay", "openProductSpecificView", "addCard", "chooseCard", "openCard"],
        f = "wx85e5e7f44c7cc50e",
        g = a._utils,
        h = a.ready,
        i = c.$,
        j = {
            appid: f
        };
        i.when(g.jsonp(b, j)).done(function(b) {
            if (b.code === "A0000") {
                var i = b.jsapi_ticket,
                j = g.noncestr(),
                k = g.timestamp(),
                l = "jsapi_ticket=" + i + "&noncestr=" + j + "&timestamp=" + k + "&url=" + c.location.href.split("#")[0],
                m = g.sha1(l);
                a.signature = m,
                e.config({
                    debug: !1,
                    appId: f,
                    timestamp: k,
                    nonceStr: j,
                    signature: m,
                    jsApiList: d
                }),
                e.ready(function() {
                    h.resolve()
                }),
                e.error(function() {
                    h.reject()
                })
            } else h.reject()
        }).fail(function() {
            h.reject()
        })
    } (f, d.getTicket, window),
    delete f._utils,
    c.exports = APP.createService(f)
});
define("../../common/service/weChatJsSDK/SDK", [],
function(a, b, c) {
    var d = function(a, b) {
        function c(b, c, d) {
            a.WeixinJSBridge ? WeixinJSBridge.invoke(b, e(c),
            function(a) {
                g(b, a, d)
            }) : j(b, d)
        }
        function d(b, c, d) {
            a.WeixinJSBridge ? WeixinJSBridge.on(b,
            function(a) {
                d && d.trigger && d.trigger(a),
                g(b, a, c)
            }) : d ? j(b, d) : j(b, c)
        }
        function e(a) {
            return a = a || {},
            a.appId = E.appId,
            a.verifyAppId = E.appId,
            a.verifySignType = "sha1",
            a.verifyTimestamp = E.timestamp + "",
            a.verifyNonceStr = E.nonceStr,
            a.verifySignature = E.signature,
            a
        }
        function f(a) {
            return {
                timeStamp: a.timestamp + "",
                nonceStr: a.nonceStr,
                "package": a.package,
                paySign: a.paySign,
                signType: a.signType || "SHA1"
            }
        }
        function g(a, b, c) {
            var d, e, f;
            switch (delete b.err_code, delete b.err_desc, delete b.err_detail, d = b.errMsg, d || (d = b.err_msg, delete b.err_msg, d = h(a, d), b.errMsg = d), c = c || {},
            c._complete && (c._complete(b), delete c._complete), d = b.errMsg || "", E.debug && !c.isInnerInvoke && alert(JSON.stringify(b)), e = d.indexOf(":"), f = d.substring(e + 1)) {
            case "ok":
                c.success && c.success(b);
                break;
            case "cancel":
                c.cancel && c.cancel(b);
                break;
            default:
                c.fail && c.fail(b)
            }
            c.complete && c.complete(b)
        }
        function h(a, b) {
            var c, d, e = a,
            f = p[e];
            return f && (e = f),
            c = "ok",
            b && (d = b.indexOf(":"), c = b.substring(d + 1), "confirm" == c && (c = "ok"), "failed" == c && (c = "fail"), -1 != c.indexOf("failed_") && (c = c.substring(7)), -1 != c.indexOf("fail_") && (c = c.substring(5)), c = c.replace(/_/g, " "), c = c.toLowerCase(), ("access denied" == c || "no permission to execute" == c) && (c = "permission denied"), "config" == e && "function not exist" == c && (c = "ok"), "" == c && (c = "fail")),
            b = e + ":" + c
        }
        function i(a) {
            var b, c, d, e;
            if (a) {
                for (b = 0, c = a.length; c > b; ++b) d = a[b],
                e = o[d],
                e && (a[b] = e);
                return a
            }
        }
        function j(a, b) {
            if (! (!E.debug || b && b.isInnerInvoke)) {
                var c = p[a];
                c && (a = c),
                b && b._complete && delete b._complete,
                console.log('"' + a + '",', b || "")
            }
        }
        function k() {
            0 != D.preVerifyState && (u || v || E.debug || "6.0.2" > z || D.systemType < 0 || A || (A = !0, D.appId = E.appId, D.initTime = C.initEndTime - C.initStartTime, D.preVerifyTime = C.preVerifyEndTime - C.preVerifyStartTime, H.getNetworkType({
                isInnerInvoke: !0,
                success: function(a) {
                    var b, c;
                    D.networkType = a.networkType,
                    b = "http://open.weixin.qq.com/sdk/report?v=" + D.version + "&o=" + D.preVerifyState + "&s=" + D.systemType + "&c=" + D.clientVersion + "&a=" + D.appId + "&n=" + D.networkType + "&i=" + D.initTime + "&p=" + D.preVerifyTime + "&u=" + D.url,
                    c = new Image,
                    c.src = b
                }
            })))
        }
        function l() {
            return (new Date).getTime()
        }
        function m(b) {
            w && (a.WeixinJSBridge ? b() : q.addEventListener && q.addEventListener("WeixinJSBridgeReady", b, !1))
        }
        function n() {
            H.invoke || (H.invoke = function(b, c, d) {
                a.WeixinJSBridge && WeixinJSBridge.invoke(b, e(c), d)
            },
            H.on = function(b, c) {
                a.WeixinJSBridge && WeixinJSBridge.on(b, c)
            })
        }
        var o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H;
        if (!a.jWeixin) return o = {
            config: "preVerifyJSAPI",
            onMenuShareTimeline: "menu:share:timeline",
            onMenuShareAppMessage: "menu:share:appmessage",
            onMenuShareQQ: "menu:share:qq",
            onMenuShareWeibo: "menu:share:weiboApp",
            onMenuShareQZone: "menu:share:QZone",
            previewImage: "imagePreview",
            getLocation: "geoLocation",
            openProductSpecificView: "openProductViewWithPid",
            addCard: "batchAddCard",
            openCard: "batchViewCard",
            chooseWXPay: "getBrandWCPayRequest"
        },
        p = function() {
            var a, b = {};
            for (a in o) b[o[a]] = a;
            return b
        } (),
        q = a.document,
        r = q.title,
        s = navigator.userAgent.toLowerCase(),
        t = navigator.platform.toLowerCase(),
        u = !!t.match("mac") || !!t.match("win"),
        v = -1 != s.indexOf("wxdebugger"),
        w = -1 != s.indexOf("micromessenger"),
        x = -1 != s.indexOf("android"),
        y = -1 != s.indexOf("iphone") || -1 != s.indexOf("ipad"),
        z = function() {
            var a = s.match(/micromessenger\/(\d+\.\d+\.\d+)/) || s.match(/micromessenger\/(\d+\.\d+)/);
            return a ? a[1] : ""
        } (),
        A = !1,
        B = !1,
        C = {
            initStartTime: l(),
            initEndTime: 0,
            preVerifyStartTime: 0,
            preVerifyEndTime: 0
        },
        D = {
            version: 1,
            appId: "",
            initTime: 0,
            preVerifyTime: 0,
            networkType: "",
            preVerifyState: 1,
            systemType: y ? 1 : x ? 2 : -1,
            clientVersion: z,
            url: encodeURIComponent(location.href)
        },
        E = {},
        F = {
            _completes: []
        },
        G = {
            state: 0,
            data: {}
        },
        m(function() {
            C.initEndTime = l()
        }),
        H = {
            config: function(a) {
                E = a,
                j("config", a);
                var b = E.check === !1 ? !1 : !0;
                m(function() {
                    var a, d, e;
                    if (b) c(o.config, {
                        verifyJsApiList: i(E.jsApiList)
                    },
                    function() {
                        F._complete = function(a) {
                            C.preVerifyEndTime = l(),
                            G.state = 1,
                            G.data = a
                        },
                        F.success = function() {
                            D.preVerifyState = 0
                        },
                        F.fail = function(a) {
                            F._fail ? F._fail(a) : G.state = -1
                        };
                        var a = F._completes;
                        return a.push(function() {
                            k()
                        }),
                        F.complete = function() {
                            for (var b = 0,
                            c = a.length; c > b; ++b) a[b]();
                            F._completes = []
                        },
                        F
                    } ()),
                    C.preVerifyStartTime = l();
                    else {
                        for (G.state = 1, a = F._completes, d = 0, e = a.length; e > d; ++d) a[d]();
                        F._completes = []
                    }
                }),
                E.beta && n()
            },
            ready: function(a) {
                0 != G.state ? a() : (F._completes.push(a), !w && E.debug && a())
            },
            error: function(a) {
                "6.0.2" > z || B || (B = !0, -1 == G.state ? a(G.data) : F._fail = a)
            },
            checkJsApi: function(a) {
                var b = function(a) {
                    var b, c, d = a.checkResult;
                    for (b in d) c = p[b],
                    c && (d[c] = d[b], delete d[b]);
                    return a
                };
                c("checkJsApi", {
                    jsApiList: i(a.jsApiList)
                },
                function() {
                    return a._complete = function(a) {
                        if (x) {
                            var c = a.checkResult;
                            c && (a.checkResult = JSON.parse(c))
                        }
                        a = b(a)
                    },
                    a
                } ())
            },
            onMenuShareTimeline: function(a) {
                d(o.onMenuShareTimeline, {
                    complete: function() {
                        c("shareTimeline", {
                            title: a.title || r,
                            desc: a.title || r,
                            img_url: a.imgUrl || "",
                            link: a.link || location.href,
                            type: a.type || "link",
                            data_url: a.dataUrl || ""
                        },
                        a)
                    }
                },
                a)
            },
            onMenuShareAppMessage: function(a) {
                d(o.onMenuShareAppMessage, {
                    complete: function() {
                        c("sendAppMessage", {
                            title: a.title || r,
                            desc: a.desc || "",
                            link: a.link || location.href,
                            img_url: a.imgUrl || "",
                            type: a.type || "link",
                            data_url: a.dataUrl || ""
                        },
                        a)
                    }
                },
                a)
            },
            onMenuShareQQ: function(a) {
                d(o.onMenuShareQQ, {
                    complete: function() {
                        c("shareQQ", {
                            title: a.title || r,
                            desc: a.desc || "",
                            img_url: a.imgUrl || "",
                            link: a.link || location.href
                        },
                        a)
                    }
                },
                a)
            },
            onMenuShareWeibo: function(a) {
                d(o.onMenuShareWeibo, {
                    complete: function() {
                        c("shareWeiboApp", {
                            title: a.title || r,
                            desc: a.desc || "",
                            img_url: a.imgUrl || "",
                            link: a.link || location.href
                        },
                        a)
                    }
                },
                a)
            },
            onMenuShareQZone: function(a) {
                d(o.onMenuShareQZone, {
                    complete: function() {
                        c("shareQZone", {
                            title: a.title || r,
                            desc: a.desc || "",
                            img_url: a.imgUrl || "",
                            link: a.link || location.href
                        },
                        a)
                    }
                },
                a)
            },
            startRecord: function(a) {
                c("startRecord", {},
                a)
            },
            stopRecord: function(a) {
                c("stopRecord", {},
                a)
            },
            onVoiceRecordEnd: function(a) {
                d("onVoiceRecordEnd", a)
            },
            playVoice: function(a) {
                c("playVoice", {
                    localId: a.localId
                },
                a)
            },
            pauseVoice: function(a) {
                c("pauseVoice", {
                    localId: a.localId
                },
                a)
            },
            stopVoice: function(a) {
                c("stopVoice", {
                    localId: a.localId
                },
                a)
            },
            onVoicePlayEnd: function(a) {
                d("onVoicePlayEnd", a)
            },
            uploadVoice: function(a) {
                c("uploadVoice", {
                    localId: a.localId,
                    isShowProgressTips: 0 == a.isShowProgressTips ? 0 : 1
                },
                a)
            },
            downloadVoice: function(a) {
                c("downloadVoice", {
                    serverId: a.serverId,
                    isShowProgressTips: 0 == a.isShowProgressTips ? 0 : 1
                },
                a)
            },
            translateVoice: function(a) {
                c("translateVoice", {
                    localId: a.localId,
                    isShowProgressTips: 0 == a.isShowProgressTips ? 0 : 1
                },
                a)
            },
            chooseImage: function(a) {
                c("chooseImage", {
                    scene: "1|2",
                    count: a.count || 9,
                    sizeType: a.sizeType || ["original", "compressed"],
                    sourceType: a.sourceType || ["album", "camera"]
                },
                function() {
                    return a._complete = function(a) {
                        if (x) {
                            var b = a.localIds;
                            b && (a.localIds = JSON.parse(b))
                        }
                    },
                    a
                } ())
            },
            previewImage: function(a) {
                c(o.previewImage, {
                    current: a.current,
                    urls: a.urls
                },
                a)
            },
            uploadImage: function(a) {
                c("uploadImage", {
                    localId: a.localId,
                    isShowProgressTips: 0 == a.isShowProgressTips ? 0 : 1
                },
                a)
            },
            downloadImage: function(a) {
                c("downloadImage", {
                    serverId: a.serverId,
                    isShowProgressTips: 0 == a.isShowProgressTips ? 0 : 1
                },
                a)
            },
            getNetworkType: function(a) {
                var b = function(a) {
                    var b, c, d, e = a.errMsg;
                    if (a.errMsg = "getNetworkType:ok", b = a.subtype, delete a.subtype, b) a.networkType = b;
                    else switch (c = e.indexOf(":"), d = e.substring(c + 1)) {
                    case "wifi":
                    case "edge":
                    case "wwan":
                        a.networkType = d;
                        break;
                    default:
                        a.errMsg = "getNetworkType:fail"
                    }
                    return a
                };
                c("getNetworkType", {},
                function() {
                    return a._complete = function(a) {
                        a = b(a)
                    },
                    a
                } ())
            },
            openLocation: function(a) {
                c("openLocation", {
                    latitude: a.latitude,
                    longitude: a.longitude,
                    name: a.name || "",
                    address: a.address || "",
                    scale: a.scale || 28,
                    infoUrl: a.infoUrl || ""
                },
                a)
            },
            getLocation: function(a) {
                a = a || {},
                c(o.getLocation, {
                    type: a.type || "wgs84"
                },
                function() {
                    return a._complete = function(a) {
                        delete a.type
                    },
                    a
                } ())
            },
            hideOptionMenu: function(a) {
                c("hideOptionMenu", {},
                a)
            },
            showOptionMenu: function(a) {
                c("showOptionMenu", {},
                a)
            },
            closeWindow: function(a) {
                a = a || {},
                c("closeWindow", {},
                a)
            },
            hideMenuItems: function(a) {
                c("hideMenuItems", {
                    menuList: a.menuList
                },
                a)
            },
            showMenuItems: function(a) {
                c("showMenuItems", {
                    menuList: a.menuList
                },
                a)
            },
            hideAllNonBaseMenuItem: function(a) {
                c("hideAllNonBaseMenuItem", {},
                a)
            },
            showAllNonBaseMenuItem: function(a) {
                c("showAllNonBaseMenuItem", {},
                a)
            },
            scanQRCode: function(a) {
                a = a || {},
                c("scanQRCode", {
                    needResult: a.needResult || 0,
                    scanType: a.scanType || ["qrCode", "barCode"]
                },
                function() {
                    return a._complete = function(a) {
                        var b, c;
                        y && (b = a.resultStr, b && (c = JSON.parse(b), a.resultStr = c && c.scan_code && c.scan_code.scan_result))
                    },
                    a
                } ())
            },
            openProductSpecificView: function(a) {
                c(o.openProductSpecificView, {
                    pid: a.productId,
                    view_type: a.viewType || 0,
                    ext_info: a.extInfo
                },
                a)
            },
            addCard: function(a) {
                var b, d, e, f, g = a.cardList,
                h = [];
                for (b = 0, d = g.length; d > b; ++b) e = g[b],
                f = {
                    card_id: e.cardId,
                    card_ext: e.cardExt
                },
                h.push(f);
                c(o.addCard, {
                    card_list: h
                },
                function() {
                    return a._complete = function(a) {
                        var b, c, d, e = a.card_list;
                        if (e) {
                            for (e = JSON.parse(e), b = 0, c = e.length; c > b; ++b) d = e[b],
                            d.cardId = d.card_id,
                            d.cardExt = d.card_ext,
                            d.isSuccess = d.is_succ ? !0 : !1,
                            delete d.card_id,
                            delete d.card_ext,
                            delete d.is_succ;
                            a.cardList = e,
                            delete a.card_list
                        }
                    },
                    a
                } ())
            },
            chooseCard: function(a) {
                c("chooseCard", {
                    app_id: E.appId,
                    location_id: a.shopId || "",
                    sign_type: a.signType || "SHA1",
                    card_id: a.cardId || "",
                    card_type: a.cardType || "",
                    card_sign: a.cardSign,
                    time_stamp: a.timestamp + "",
                    nonce_str: a.nonceStr
                },
                function() {
                    return a._complete = function(a) {
                        a.cardList = a.choose_card_info,
                        delete a.choose_card_info
                    },
                    a
                } ())
            },
            openCard: function(a) {
                var b, d, e, f, g = a.cardList,
                h = [];
                for (b = 0, d = g.length; d > b; ++b) e = g[b],
                f = {
                    card_id: e.cardId,
                    code: e.code
                },
                h.push(f);
                c(o.openCard, {
                    card_list: h
                },
                a)
            },
            chooseWXPay: function(a) {
                c(o.chooseWXPay, f(a), a)
            }
        },
        b && (a.wx = a.jWeixin = H),
        H
    } (window, !0);
    c.exports = APP.createService(d)
});
define("./component/weChatShareCover", [],
function(a, b, c) {
    APP.define("page.playMovie.component.weChatShareCover", {
        timer: null,
        message: ["_SHARE_WECHAT_TRIGGER_"],
        messageHandlers: {
            _SHARE_WECHAT_TRIGGER_: function() {
                APP.postMessage("COMMON_COVER_SHOW"),
                this.rootElement.removeClass("hide"),
                this.setDelayHide()
            }
        },
        init: function() {},
        setDelayHide: function() {
            var a = this;
            clearTimeout(this.timer),
            this.timer = setTimeout(function() {
                a.rootElement.addClass("hide"),
                APP.postMessage("COMMON_COVER_HIDE")
            },
            5e3)
        },
        onMessage: function(a, b) {
            this.messageHandlers[a] && this.messageHandlers[a].call(this, b)
        },
        listeners: {
            click: function() {
                this.rootElement.addClass("hide"),
                APP.postMessage("COMMON_COVER_HIDE"),
                clearTimeout(this.timer)
            }
        }
    })
});
define("../../common/component/header/headContainer", [],
function(a, b, c) {
    APP.define("page.home.component.headContainer", {
        message: ["SEARCHFLOW_SHOW", "SEARCHFLOW_HIDE"],
        onMessage: function(a, b) {
            a == "SEARCHFLOW_SHOW" && this.nodes.headerContianer.removeClass("header-fixed"),
            a == "SEARCHFLOW_HIDE" && this.nodes.headerContianer.addClass("header-fixed")
        },
        init: function() {
            this.refreshAfterInit && this.refresh()
        },
        refresh: function() {
            this.rootElement.css("height", this.nodes.headerContianer.css("height"))
        }
    })
});
define("../../common/component/user/userInfo", ["../../service/user/user.js"],
function(a, b, c) {
    var d = a("../../service/user/user.js");
    APP.define("page.home.component.userInfo", {
        init: function() {
            var a = this;
            d.isLogin() ? d.getUserAvatar(function(b) {
                a.nodes.userIcon.removeClass("hide"),
                a.nodes.userIcon.css("background-image", "url(" + b + ")")
            }) : this.nodes.loginBtn.removeClass("hide")
        },
        listeners: {
            click: function(a, b, c) {
                var d = this;
                c == "loginBtn" ? location.href = "/user.html": c == "userIcon" && (location.href = "/u/")
            }
        }
    })
});
define("../../common/component/header/headerBar", ["../../service/user/user.js"],
function(a, b, c) {
    var d = a("../../service/user/user.js");
    APP.define("page.home.component.headerBar", {
        message: ["HEADERBAR_HIDE", "HEADERBAR_SHOW"],
        onMessage: function(a, b) {
            a != "HEADERBAR_HIDE",
            a == "HEADERBAR_SHOW" && (this.rootElement.show(), setTimeout(function() {
                window.scrollTo(0, 1)
            },
            100))
        },
        listeners: {
            click: function(a, b, c) {
                c == "history" && setTimeout(function() {
                    location.href = "/u/record/"
                },
                300),
                c == "search" && APP.postMessage("SEARCHFLOW_SHOW"),
                c == "logo" && (a.stopPropagation(), setTimeout(function() {
                    location.href = "/"
                },
                300))
            }
        },
        init: function() {}
    })
});
define("../../common/component/search/searchBtn", [],
function(a, b, c) {
    APP.define("page.home.component.searchBtn", {
        hotKey: "",
        message: ["SEARCHBTN_KEY_REFRESH"],
        onMessage: function(a, b) {
            a == "SEARCHBTN_KEY_REFRESH" && this.hotQuery && this.hotQuery.length > 0 && (this.hotKey = this.hotQuery[Math.floor(Math.random() * this.hotQuery.length)], this.nodes.hotKey.html(this.hotKey))
        },
        listeners: {
            click: function(a, b, c) {
                c == "search" && APP.postMessage("SEARCHFLOW_SHOW", this.hotKey)
            }
        },
        init: function() {
            this.hotQuery && this.hotQuery.length > 0 && (this.hotKey = this.hotQuery[Math.floor(Math.random() * this.hotQuery.length)], this.nodes.hotKey.html(this.hotKey))
        }
    })
});
define("../../common/component/search/searchFlow", ["../../service/user/user.js", "../../service/suggest/index.js"],
function(a, b, c) {
    var d = a("../../service/user/user.js"),
    e = a("../../service/suggest/index.js");
    APP.define("page.home.component.searchFlow", {
        message: ["SEARCHFLOW_HIDE", "SEARCHFLOW_SHOW", "SEARCHFLOW_SETINPUTVALUE"],
        onMessage: function(a, b) {
            a == "SEARCHFLOW_HIDE" && (this.rootElement.removeClass("m-search-fixed "), this.rootElement.addClass("hide"), this.nodes.input.blur()),
            a == "SEARCHFLOW_SHOW" && (this.rootElement.addClass("m-search-fixed"), this.rootElement.removeClass("hide"), b && this.nodes.input.attr("placeholder", b), this.nodes.input.focus(), setTimeout(function() {
                window.scrollTo(0, 1)
            },
            200)),
            a == "SEARCHFLOW_SEARCH" && this.onSearch(b.key),
            a == "SEARCHFLOW_SETINPUTVALUE" && (location.href = b.href)
        },
        listeners: {
            click: function(a, b, c) {
                if (c == "btnBox") {
                    APP.postMessage("SEARCHBTN_KEY_REFRESH");
                    var d = b.attr("data-type");
                    d == "cancel" ? (APP.postMessage("HEADERBAR_SHOW"), APP.postMessage("SEARCHFLOW_HIDE")) : d == "search" && this.onSearch(this.nodes.input.val())
                } else if (c == "suggest") {
                    var e = $(a.target).attr("data-value");
                    this.onSearch(e)
                } else c == "search" ? (a.stopPropagation(), this.onSearch(this.nodes.input.val())) : c == "input" && APP.postMessage("SEARCHFLOW_SHOW")
            }
        },
        init: function() {
            var a = this,
            b = Q.PageInfo.hot_search || [],
            c = b[Math.floor(Math.random() * b.length)];
            this.nodes.input.attr("placeholder", c),
            APP.postMessage("SEARCHFLOW_HOT_KEY", {
                key: c
            }),
            this.bindEvents()
        },
        bindEvents: function() {
            var a = this;
            APP.$(document).on("touchstart",
            function() {
                APP.postMessage("SEARCHFLOW_HIDE")
            }),
            this.rootElement.on("touchstart",
            function(a) {
                a.stopPropagation()
            }),
            this.nodes.cancel.on("click",
            function() {
                APP.postMessage("HEADERBAR_SHOW"),
                APP.postMessage("SEARCHFLOW_HIDE")
            }),
            $(window).on("popstate",
            function() {
                APP.postMessage("SEARCHFLOW_HIDE"),
                a.nodes.input.val("")
            }),
            this.nodes.input.on("search",
            function(b) {
                var c = a.nodes.input.val();
                c == "" && (c = a.nodes.input.attr("placeholder")),
                a.onSearch(c)
            }),
            this.nodes.input.on("focus",
            function() {
                a.doInput()
            }),
            this.nodes.input.on("blur",
            function() {
                this.controlClearBtn()
            }.bind(this)),
            this.nodes.clear.on("touchend",
            function() {
                a.nodes.input.val(""),
                a.btnStatusToggle("empty"),
                APP.postMessage("SHOWINFO", {
                    val: ""
                }),
                a.doInput()
            }.bind(this)),
            this.nodes.input.on("input",
            function() {
                a.doInput()
            })
        },
        btnStatusToggle: function(a) {
            a == "empty" ? (this.nodes.cancel.show(), this.nodes.clear.hide(), this.nodes.search.hide(), this.nodes.btnBox.attr("data-type", "cancel")) : (this.nodes.cancel.hide(), this.nodes.clear.show(), this.nodes.search.show(), this.nodes.btnBox.attr("data-type", "search"))
        },
        controlClearBtn: function(a) {
            a ? this.nodes.clear.show() : this.nodes.clear.hide()
        },
        doInput: function() {
            var a = 5,
            b = 3,
            c = this,
            d = this.nodes.input.val(),
            f = c.nodes.input.attr("autovalue");
            this.controlClearBtn(d),
            d ? (this.btnStatusToggle("full"), e.getSuggest({
                key: d.trim()
            },
            function(a) {
                var b = $.plugins.Mustache.render(c.nodes.suggestListItem.html(), a);
                c.nodes.suggest.html(b),
                c.nodes.suggest.show()
            },
            function() {
                c.nodes.suggest.hide()
            })) : (this.btnStatusToggle("empty"), e.getHotAndHistorySearchSuggest({},
            function(a) {
                var b = $.plugins.Mustache.render(c.nodes.suggestListItem.html(), a);
                c.nodes.suggest.html(b),
                c.nodes.suggest.show()
            },
            function() {
                c.nodes.suggest.hide()
            }))
        },
        onSearch: function(a) {
            e.insertSearchHistory(a),
            this.nodes.input.val(""),
            location.href = "/search.html?source=input&vfrm=2-3-0-1&key=" + encodeURIComponent(a)
        }
    })
});
define("../../common/service/suggest/index", ["../config/config.js", "../storage/storage.js"],
function(a, b, c) {
    var d = a("../config/config.js"),
    e = a("../storage/storage.js");
    c.exports = APP.createService({
        suggestCache: {},
        getSuggest: function(a, b, c) {
            this.suggestCache[a.key] && b(this.suggestCache[a.key]);
            var e = this,
            f = 5,
            g = {};
            g.
            if = "mobile",
            g.platform = 31,
            g.uid = $.cookie.get("QC006") || "",
            g.ppuid = "",
            g.key = a.key,
            $.ajax({
                url: d.interfaces.suggest,
                dataType: "json",
                data: g,
                success: function(a) {
                    if (a.code == "A00000") {
                        var d = a.data;
                        d.length = Math.min(d.length, f),
                        d.forEach(function(a, b) {
                            a.source = "suggest",
                            a.vfrm = "2-3-3-1",
                            a.key = encodeURIComponent(a.name),
                            a.index = b + 1
                        }),
                        e.suggestCache[g.key] = {
                            list: d,
                            setbtn: !0
                        },
                        b({
                            list: d,
                            setbtn: !0
                        })
                    } else c()
                }
            })
        },
        getHotAndHistorySearchSuggest: function(a, b, c) {
            var d = 5,
            e = this;
            this.getHotKey({},
            function(a) {
                var c = e.getSearchHistory();
                c.forEach(function(b) {
                    a.list.forEach(function(c, d) {
                        c.name == b.name && a.list.splice(d, 1)
                    })
                }),
                a.list = c.concat(a.list),
                a.list.length = d,
                b(a)
            },
            function() {
                c()
            })
        },
        getHotKey: function(a, b, c) {
            this.suggestCache.__hot_keys && b(this.suggestCache.__hot_keys);
            var e = this,
            f = 5,
            g = {};
            g.
            if = "hotQuery",
            g.p = 10,
            g.is_qipu_platform = 1,
            $.ajax({
                url: d.interfaces.search_hot,
                dataType: "json",
                data: g,
                success: function(a) {
                    if (a.data.length > 0) {
                        var d = a.data;
                        d.length = Math.min(d.length, f),
                        d.forEach(function(a, b) {
                            a.name = a.query,
                            a.key = encodeURIComponent(a.name),
                            a.index = b + 1
                        }),
                        e.suggestCache.__hot_keys = {
                            list: d
                        },
                        b({
                            list: d
                        })
                    } else c()
                }
            })
        },
        getSearchHistory: function() {
            var a = [],
            b = 3,
            c = e.read("phone-search-history") || "";
            if (c) {
                var d = c.split("^");
                for (i = 0, len = d.length; i < len; i++) {
                    if (i > b - 1) break;
                    a.push({
                        name: d[i],
                        source: "suggest",
                        key: encodeURIComponent(d[i]),
                        vfrm: "2-3-0-1"
                    })
                }
            }
            return a
        },
        insertSearchHistory: function(a) {
            if (!a) return;
            var b = e.read("phone-search-history") || "",
            c = b ? b.split("^") : [],
            d = c.indexOf(a);
            d >= 0 && c.splice(d, 1),
            c = [a].concat(c),
            e.write("phone-search-history", c.join("^"))
        }
    })
});
define("../../common/component/header/headNav", ["../../service/scrollbar/index.js"],
function(a, b, c) {
    var d = a("../../service/scrollbar/index.js");
    APP.define("page.home.component.headNav", {
        init: function() {
            var a = this,
            b = new d(a.nodes.naviBar[0], {
                hScroll: !0,
                vScroll: !1,
                bounce: !0,
                bounceLock: !1,
                momentum: !0,
                lockDirection: !0,
                useTransform: !0,
                useTransition: !1,
                checkDOMChanges: !1,
                handleClick: !0,
                hScrollbar: !1,
                vScrollbar: !1
            }),
            c = this.getChannelId(Q.PageInfo.title || Q.PageInfo.cid),
            e = this.nodes["channel_" + c];
            if (e) {
                e.addClass("selected");
                var f = e.offset().left;
                b.scrollTo(document.body.clientWidth / 2 - f - e.width() / 2, 0)
            }
        },
        message: [],
        onMessage: function(a, b) {
            var c = this
        },
        listeners: {
            click: function(a, b, c) {
                var d = this;
                c == "channelListBtn" && setTimeout(function() {
                    location.href = "/channel_list.html"
                },
                300)
            }
        },
        getChannelId: function(a) {
            return a == "首页" ? "home": Q.PageInfo.cid
        }
    })
});
define("../../common/service/scrollbar/index", ["./src/iscroll/iscroll"],
function(a, b, c) {
    function e(a, b) {
        b = b || {},
        this._iscroll = new d(a, b)
    }
    var d = a("./src/iscroll/iscroll");
    e.prototype = {
        refresh: function() {
            this._iscroll.refresh()
        },
        scrollTo: function() {
            this._iscroll.scrollTo.apply(this._iscroll, arguments)
        },
        scrollToElement: function() {
            this._iscroll.scrollToElement.apply(this._iscroll, arguments)
        }
    },
    c.exports = e
});
define("../../common/service/scrollbar/src/iscroll/iscroll", [],
function(a, b, c) { (function(a, b) {
        function d(a) {
            return g === "" ? a: (a = a.charAt(0).toUpperCase() + a.substr(1), g + a)
        }
        var e = Math,
        f = b.createElement("div").style,
        g = function() {
            var a = "t,webkitT,MozT,msT,OT".split(","),
            b,
            c = 0,
            d = a.length;
            for (; c < d; c++) {
                b = a[c] + "ransform";
                if (b in f) return a[c].substr(0, a[c].length - 1)
            }
            return ! 1
        } (),
        h = g ? "-" + g.toLowerCase() + "-": "",
        i = d("transform"),
        j = d("transitionProperty"),
        k = d("transitionDuration"),
        l = d("transformOrigin"),
        m = d("transitionTimingFunction"),
        n = d("transitionDelay"),
        o = /android/gi.test(navigator.appVersion),
        p = /iphone|ipad/gi.test(navigator.appVersion),
        q = /hp-tablet/gi.test(navigator.appVersion),
        r = !1,
        s = "ontouchstart" in a && !q,
        t = g !== !1,
        u = d("transition") in f,
        v = "onorientationchange" in a ? "orientationchange": "resize",
        w = s ? "touchstart": "mousedown",
        x = s ? "touchmove": "mousemove",
        y = s ? "touchend": "mouseup",
        z = s ? "touchcancel": "mouseup",
        A = function() {
            if (g === !1) return ! 1;
            var a = {
                "": "transitionend",
                webkit: "webkitTransitionEnd",
                Moz: "transitionend",
                O: "otransitionend",
                ms: "MSTransitionEnd"
            };
            return a[g]
        } (),
        B = function() {
            return a.requestAnimationFrame || a.webkitRequestAnimationFrame || a.mozRequestAnimationFrame || a.oRequestAnimationFrame || a.msRequestAnimationFrame ||
            function(a) {
                return setTimeout(a, 1)
            }
        } (),
        C = function() {
            return a.cancelRequestAnimationFrame || a.webkitCancelAnimationFrame || a.webkitCancelRequestAnimationFrame || a.mozCancelRequestAnimationFrame || a.oCancelRequestAnimationFrame || a.msCancelRequestAnimationFrame || clearTimeout
        } (),
        D = r ? " translateZ(0)": "",
        E = function(c, d) {
            var e = this,
            f;
            e.wrapper = typeof c == "object" ? c: b.getElementById(c),
            e.scroller = e.wrapper.children[0],
            e.options = {
                hScroll: !0,
                vScroll: !0,
                x: 0,
                y: 0,
                bounce: !0,
                bounceLock: !1,
                momentum: !0,
                lockDirection: !0,
                useTransform: !0,
                useTransition: !1,
                topOffset: 0,
                checkDOMChanges: !1,
                handleClick: !0,
                hScrollbar: !0,
                vScrollbar: !0,
                fixedScrollbar: o,
                hideScrollbar: p,
                fadeScrollbar: p && r,
                scrollbarClass: "",
                zoom: !1,
                zoomMin: 1,
                zoomMax: 4,
                doubleTapZoom: 2,
                wheelAction: "scroll",
                snap: !1,
                snapThreshold: 1,
                onRefresh: null,
                onBeforeScrollStart: function(a) {
                    a.preventDefault()
                },
                onScrollStart: null,
                onBeforeScrollMove: null,
                onScrollMove: null,
                onBeforeScrollEnd: null,
                onScrollEnd: null,
                onTouchEnd: null,
                onDestroy: null,
                onZoomStart: null,
                onZoom: null,
                onZoomEnd: null,
                overflow: "hidden"
            };
            for (f in d) e.options[f] = d[f];
            e.wrapper.style.overflow = e.options.overflow,
            e.x = e.options.x,
            e.y = e.options.y,
            e.options.useTransform = t && e.options.useTransform,
            e.options.hScrollbar = e.options.hScroll && e.options.hScrollbar,
            e.options.vScrollbar = e.options.vScroll && e.options.vScrollbar,
            e.options.zoom = e.options.useTransform && e.options.zoom,
            e.options.useTransition = u && e.options.useTransition,
            e.options.zoom && o && (D = ""),
            e.scroller.style[j] = e.options.useTransform ? h + "transform": "top left",
            e.scroller.style[k] = "0",
            e.scroller.style[l] = "0 0",
            e.options.useTransition && (e.scroller.style[m] = "cubic-bezier(0.33,0.66,0.66,1)"),
            e.options.useTransform ? e.scroller.style[i] = "translate(" + e.x + "px," + e.y + "px)" + D: e.scroller.style.cssText += ";position:absolute;top:" + e.y + "px;left:" + e.x + "px",
            e.options.useTransition && (e.options.fixedScrollbar = !0),
            e.refresh(),
            e._bind(v, a),
            e._bind(w),
            s || e.options.wheelAction != "none" && (e._bind("DOMMouseScroll"), e._bind("mousewheel")),
            e.options.checkDOMChanges && (e.checkDOMTime = setInterval(function() {
                e._checkDOMChanges()
            },
            500))
        };
        E.prototype = {
            enabled: !0,
            x: 0,
            y: 0,
            steps: [],
            scale: 1,
            currPageX: 0,
            currPageY: 0,
            pagesX: [],
            pagesY: [],
            aniTime: null,
            wheelZoomCount: 0,
            handleEvent: function(a) {
                var b = this;
                switch (a.type) {
                case w:
                    if (!s && a.button !== 0) return;
                    b._start(a);
                    break;
                case x:
                    b._move(a);
                    break;
                case y:
                case z:
                    b._end(a);
                    break;
                case v:
                    b._resize();
                    break;
                case "DOMMouseScroll":
                case "mousewheel":
                    b._wheel(a);
                    break;
                case A:
                    b._transitionEnd(a)
                }
            },
            _checkDOMChanges: function() {
                if (this.moved || this.zoomed || this.animating || this.scrollerW == this.scroller.offsetWidth * this.scale && this.scrollerH == this.scroller.offsetHeight * this.scale) return;
                this.refresh()
            },
            _scrollbar: function(a) {
                var c = this,
                d;
                if (!c[a + "Scrollbar"]) {
                    c[a + "ScrollbarWrapper"] && (t && (c[a + "ScrollbarIndicator"].style[i] = ""), c[a + "ScrollbarWrapper"].parentNode.removeChild(c[a + "ScrollbarWrapper"]), c[a + "ScrollbarWrapper"] = null, c[a + "ScrollbarIndicator"] = null);
                    return
                }
                c[a + "ScrollbarWrapper"] || (d = b.createElement("div"), c.options.scrollbarClass ? d.className = c.options.scrollbarClass + a.toUpperCase() : d.style.cssText = "position:absolute;z-index:100;" + (a == "h" ? "height:7px;bottom:1px;left:2px;right:" + (c.vScrollbar ? "7": "2") + "px": "width:7px;bottom:" + (c.hScrollbar ? "7": "2") + "px;top:2px;right:1px"), d.style.cssText += ";pointer-events:none;" + h + "transition-property:opacity;" + h + "transition-duration:" + (c.options.fadeScrollbar ? "350ms": "0") + ";overflow:hidden;opacity:" + (c.options.hideScrollbar ? "0": "1"), c.wrapper.appendChild(d), c[a + "ScrollbarWrapper"] = d, d = b.createElement("div"), c.options.scrollbarClass || (d.style.cssText = "position:absolute;z-index:100;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);" + h + "background-clip:padding-box;" + h + "box-sizing:border-box;" + (a == "h" ? "height:100%": "width:100%") + ";" + h + "border-radius:3px;border-radius:3px"), d.style.cssText += ";pointer-events:none;" + h + "transition-property:" + h + "transform;" + h + "transition-timing-function:cubic-bezier(0.33,0.66,0.66,1);" + h + "transition-duration:0;" + h + "transform: translate(0,0)" + D, c.options.useTransition && (d.style.cssText += ";" + h + "transition-timing-function:cubic-bezier(0.33,0.66,0.66,1)"), c[a + "ScrollbarWrapper"].appendChild(d), c[a + "ScrollbarIndicator"] = d),
                a == "h" ? (c.hScrollbarSize = c.hScrollbarWrapper.clientWidth, c.hScrollbarIndicatorSize = e.max(e.round(c.hScrollbarSize * c.hScrollbarSize / c.scrollerW), 8), c.hScrollbarIndicator.style.width = c.hScrollbarIndicatorSize + "px", c.hScrollbarMaxScroll = c.hScrollbarSize - c.hScrollbarIndicatorSize, c.hScrollbarProp = c.hScrollbarMaxScroll / c.maxScrollX) : (c.vScrollbarSize = c.vScrollbarWrapper.clientHeight, c.vScrollbarIndicatorSize = e.max(e.round(c.vScrollbarSize * c.vScrollbarSize / c.scrollerH), 8), c.vScrollbarIndicator.style.height = c.vScrollbarIndicatorSize + "px", c.vScrollbarMaxScroll = c.vScrollbarSize - c.vScrollbarIndicatorSize, c.vScrollbarProp = c.vScrollbarMaxScroll / c.maxScrollY),
                c._scrollbarPos(a, !0)
            },
            _resize: function() {
                var a = this;
                setTimeout(function() {
                    a.refresh()
                },
                o ? 200 : 0)
            },
            _pos: function(a, b) {
                if (this.zoomed) return;
                a = this.hScroll ? a: 0,
                b = this.vScroll ? b: 0,
                this.options.useTransform ? this.scroller.style[i] = "translate(" + a + "px," + b + "px) scale(" + this.scale + ")" + D: (a = e.round(a), b = e.round(b), this.scroller.style.left = a + "px", this.scroller.style.top = b + "px"),
                this.x = a,
                this.y = b,
                this._scrollbarPos("h"),
                this._scrollbarPos("v")
            },
            _scrollbarPos: function(a, b) {
                var c = this,
                d = a == "h" ? c.x: c.y,
                f;
                if (!c[a + "Scrollbar"]) return;
                d = c[a + "ScrollbarProp"] * d,
                d < 0 ? (c.options.fixedScrollbar || (f = c[a + "ScrollbarIndicatorSize"] + e.round(d * 3), f < 8 && (f = 8), c[a + "ScrollbarIndicator"].style[a == "h" ? "width": "height"] = f + "px"), d = 0) : d > c[a + "ScrollbarMaxScroll"] && (c.options.fixedScrollbar ? d = c[a + "ScrollbarMaxScroll"] : (f = c[a + "ScrollbarIndicatorSize"] - e.round((d - c[a + "ScrollbarMaxScroll"]) * 3), f < 8 && (f = 8), c[a + "ScrollbarIndicator"].style[a == "h" ? "width": "height"] = f + "px", d = c[a + "ScrollbarMaxScroll"] + (c[a + "ScrollbarIndicatorSize"] - f))),
                c[a + "ScrollbarWrapper"].style[n] = "0",
                c[a + "ScrollbarWrapper"].style.opacity = b && c.options.hideScrollbar ? "0": "1",
                c[a + "ScrollbarIndicator"].style[i] = "translate(" + (a == "h" ? d + "px,0)": "0," + d + "px)") + D
            },
            _start: function(b) {
                var c = this,
                d = s ? b.touches[0] : b,
                f,
                g,
                h,
                j,
                k;
                if (!c.enabled) return;
                c.options.onBeforeScrollStart && c.options.onBeforeScrollStart.call(c, b),
                (c.options.useTransition || c.options.zoom) && c._transitionTime(0),
                c.moved = !1,
                c.animating = !1,
                c.zoomed = !1,
                c.distX = 0,
                c.distY = 0,
                c.absDistX = 0,
                c.absDistY = 0,
                c.dirX = 0,
                c.dirY = 0,
                c.options.zoom && s && b.touches.length > 1 && (j = e.abs(b.touches[0].pageX - b.touches[1].pageX), k = e.abs(b.touches[0].pageY - b.touches[1].pageY), c.touchesDistStart = e.sqrt(j * j + k * k), c.originX = e.abs(b.touches[0].pageX + b.touches[1].pageX - c.wrapperOffsetLeft * 2) / 2 - c.x, c.originY = e.abs(b.touches[0].pageY + b.touches[1].pageY - c.wrapperOffsetTop * 2) / 2 - c.y, c.options.onZoomStart && c.options.onZoomStart.call(c, b));
                if (c.options.momentum) {
                    c.options.useTransform ? (f = getComputedStyle(c.scroller, null)[i].replace(/[^0-9\-.,]/g, "").split(","), g = +(f[12] || f[4]), h = +(f[13] || f[5])) : (g = +getComputedStyle(c.scroller, null).left.replace(/[^0-9-]/g, ""), h = +getComputedStyle(c.scroller, null).top.replace(/[^0-9-]/g, ""));
                    if (g != c.x || h != c.y) c.options.useTransition ? c._unbind(A) : C(c.aniTime),
                    c.steps = [],
                    c._pos(g, h),
                    c.options.onScrollEnd && c.options.onScrollEnd.call(c)
                }
                c.absStartX = c.x,
                c.absStartY = c.y,
                c.startX = c.x,
                c.startY = c.y,
                c.pointX = d.pageX,
                c.pointY = d.pageY,
                c.startTime = b.timeStamp || Date.now(),
                c.options.onScrollStart && c.options.onScrollStart.call(c, b),
                c._bind(x, a),
                c._bind(y, a),
                c._bind(z, a)
            },
            _move: function(a) {
                var b = this,
                c = s ? a.touches[0] : a,
                d = c.pageX - b.pointX,
                f = c.pageY - b.pointY,
                g = b.x + d,
                h = b.y + f,
                j,
                k,
                l,
                m = a.timeStamp || Date.now();
                b.options.onBeforeScrollMove && b.options.onBeforeScrollMove.call(b, a);
                if (b.options.zoom && s && a.touches.length > 1) {
                    j = e.abs(a.touches[0].pageX - a.touches[1].pageX),
                    k = e.abs(a.touches[0].pageY - a.touches[1].pageY),
                    b.touchesDist = e.sqrt(j * j + k * k),
                    b.zoomed = !0,
                    l = 1 / b.touchesDistStart * b.touchesDist * this.scale,
                    l < b.options.zoomMin ? l = .5 * b.options.zoomMin * Math.pow(2, l / b.options.zoomMin) : l > b.options.zoomMax && (l = 2 * b.options.zoomMax * Math.pow(.5, b.options.zoomMax / l)),
                    b.lastScale = l / this.scale,
                    g = this.originX - this.originX * b.lastScale + this.x,
                    h = this.originY - this.originY * b.lastScale + this.y,
                    this.scroller.style[i] = "translate(" + g + "px," + h + "px) scale(" + l + ")" + D,
                    b.options.onZoom && b.options.onZoom.call(b, a);
                    return
                }
                b.pointX = c.pageX,
                b.pointY = c.pageY;
                if (g > 0 || g < b.maxScrollX) g = b.options.bounce ? b.x + d / 2 : g >= 0 || b.maxScrollX >= 0 ? 0 : b.maxScrollX;
                if (h > b.minScrollY || h < b.maxScrollY) h = b.options.bounce ? b.y + f / 2 : h >= b.minScrollY || b.maxScrollY >= 0 ? b.minScrollY: b.maxScrollY;
                b.distX += d,
                b.distY += f,
                b.absDistX = e.abs(b.distX),
                b.absDistY = e.abs(b.distY);
                if (b.absDistX < 6 && b.absDistY < 6) return;
                b.options.lockDirection && (b.absDistX > b.absDistY + 5 ? (h = b.y, f = 0) : b.absDistY > b.absDistX + 5 && (g = b.x, d = 0)),
                b.moved = !0,
                b._pos(g, h),
                b.dirX = d > 0 ? -1 : d < 0 ? 1 : 0,
                b.dirY = f > 0 ? -1 : f < 0 ? 1 : 0,
                m - b.startTime > 300 && (b.startTime = m, b.startX = b.x, b.startY = b.y),
                b.options.onScrollMove && b.options.onScrollMove.call(b, a)
            },
            _end: function(c) {
                if (s && c.touches.length !== 0) return;
                var d = this,
                f = s ? c.changedTouches[0] : c,
                g,
                h,
                j = {
                    dist: 0,
                    time: 0
                },
                l = {
                    dist: 0,
                    time: 0
                },
                m = (c.timeStamp || Date.now()) - d.startTime,
                n = d.x,
                o = d.y,
                p,
                q,
                r,
                t,
                u;
                d._unbind(x, a),
                d._unbind(y, a),
                d._unbind(z, a),
                d.options.onBeforeScrollEnd && d.options.onBeforeScrollEnd.call(d, c);
                if (d.zoomed) {
                    u = d.scale * d.lastScale,
                    u = Math.max(d.options.zoomMin, u),
                    u = Math.min(d.options.zoomMax, u),
                    d.lastScale = u / d.scale,
                    d.scale = u,
                    d.x = d.originX - d.originX * d.lastScale + d.x,
                    d.y = d.originY - d.originY * d.lastScale + d.y,
                    d.scroller.style[k] = "200ms",
                    d.scroller.style[i] = "translate(" + d.x + "px," + d.y + "px) scale(" + d.scale + ")" + D,
                    d.zoomed = !1,
                    d.refresh(),
                    d.options.onZoomEnd && d.options.onZoomEnd.call(d, c);
                    return
                }
                if (!d.moved) {
                    s && (d.doubleTapTimer && d.options.zoom ? (clearTimeout(d.doubleTapTimer), d.doubleTapTimer = null, d.options.onZoomStart && d.options.onZoomStart.call(d, c), d.zoom(d.pointX, d.pointY, d.scale == 1 ? d.options.doubleTapZoom: 1), d.options.onZoomEnd && setTimeout(function() {
                        d.options.onZoomEnd.call(d, c)
                    },
                    200)) : this.options.handleClick && (d.doubleTapTimer = setTimeout(function() {
                        d.doubleTapTimer = null,
                        g = f.target;
                        while (g.nodeType != 1) g = g.parentNode;
                        g.tagName != "SELECT" && g.tagName != "INPUT" && g.tagName != "TEXTAREA" && (h = b.createEvent("MouseEvents"), h.initMouseEvent("click", !0, !0, c.view, 1, f.screenX, f.screenY, f.clientX, f.clientY, c.ctrlKey, c.altKey, c.shiftKey, c.metaKey, 0, null), h._fake = !0, g.dispatchEvent(h))
                    },
                    d.options.zoom ? 250 : 0))),
                    d._resetPos(400),
                    d.options.onTouchEnd && d.options.onTouchEnd.call(d, c);
                    return
                }
                if (m < 600 && d.options.momentum) {
                    j = n ? d._momentum(n - d.startX, m, -d.x, d.scrollerW - d.wrapperW + d.x, d.options.bounce ? d.wrapperW: 0) : j,
                    l = o ? d._momentum(o - d.startY, m, -d.y, d.maxScrollY < 0 ? d.scrollerH - d.wrapperH + d.y - d.minScrollY: 0, d.options.bounce ? d.wrapperH: 0) : l,
                    n = d.x + j.dist,
                    o = d.y + l.dist;
                    if (d.x > 0 && n > 0 || d.x < d.maxScrollX && n < d.maxScrollX) j = {
                        dist: 0,
                        time: 0
                    };
                    if (d.y > d.minScrollY && o > d.minScrollY || d.y < d.maxScrollY && o < d.maxScrollY) l = {
                        dist: 0,
                        time: 0
                    }
                }
                if (j.dist || l.dist) {
                    r = e.max(e.max(j.time, l.time), 10),
                    d.options.snap && (p = n - d.absStartX, q = o - d.absStartY, e.abs(p) < d.options.snapThreshold && e.abs(q) < d.options.snapThreshold ? d.scrollTo(d.absStartX, d.absStartY, 200) : (t = d._snap(n, o), n = t.x, o = t.y, r = e.max(t.time, r))),
                    d.scrollTo(e.round(n), e.round(o), r),
                    d.options.onTouchEnd && d.options.onTouchEnd.call(d, c);
                    return
                }
                if (d.options.snap) {
                    p = n - d.absStartX,
                    q = o - d.absStartY,
                    e.abs(p) < d.options.snapThreshold && e.abs(q) < d.options.snapThreshold ? d.scrollTo(d.absStartX, d.absStartY, 200) : (t = d._snap(d.x, d.y), (t.x != d.x || t.y != d.y) && d.scrollTo(t.x, t.y, t.time)),
                    d.options.onTouchEnd && d.options.onTouchEnd.call(d, c);
                    return
                }
                d._resetPos(200),
                d.options.onTouchEnd && d.options.onTouchEnd.call(d, c)
            },
            _resetPos: function(a) {
                var b = this,
                c = b.x >= 0 ? 0 : b.x < b.maxScrollX ? b.maxScrollX: b.x,
                d = b.y >= b.minScrollY || b.maxScrollY > 0 ? b.minScrollY: b.y < b.maxScrollY ? b.maxScrollY: b.y;
                if (c == b.x && d == b.y) {
                    b.moved && (b.moved = !1, b.options.onScrollEnd && b.options.onScrollEnd.call(b)),
                    b.hScrollbar && b.options.hideScrollbar && (g == "webkit" && (b.hScrollbarWrapper.style[n] = "300ms"), b.hScrollbarWrapper.style.opacity = "0"),
                    b.vScrollbar && b.options.hideScrollbar && (g == "webkit" && (b.vScrollbarWrapper.style[n] = "300ms"), b.vScrollbarWrapper.style.opacity = "0");
                    return
                }
                b.scrollTo(c, d, a || 0)
            },
            _wheel: function(a) {
                var b = this,
                c, d, e, f, g;
                if ("wheelDeltaX" in a) c = a.wheelDeltaX / 12,
                d = a.wheelDeltaY / 12;
                else if ("wheelDelta" in a) c = d = a.wheelDelta / 12;
                else {
                    if (! ("detail" in a)) return;
                    c = d = -a.detail * 3
                }
                if (b.options.wheelAction == "zoom") {
                    g = b.scale * Math.pow(2, 1 / 3 * (d ? d / Math.abs(d) : 0)),
                    g < b.options.zoomMin && (g = b.options.zoomMin),
                    g > b.options.zoomMax && (g = b.options.zoomMax),
                    g != b.scale && (!b.wheelZoomCount && b.options.onZoomStart && b.options.onZoomStart.call(b, a), b.wheelZoomCount++, b.zoom(a.pageX, a.pageY, g, 400), setTimeout(function() {
                        b.wheelZoomCount--,
                        !b.wheelZoomCount && b.options.onZoomEnd && b.options.onZoomEnd.call(b, a)
                    },
                    400));
                    return
                }
                e = b.x + c,
                f = b.y + d,
                e > 0 ? e = 0 : e < b.maxScrollX && (e = b.maxScrollX),
                f > b.minScrollY ? f = b.minScrollY: f < b.maxScrollY && (f = b.maxScrollY),
                b.maxScrollY < 0 && b.scrollTo(e, f, 0)
            },
            _transitionEnd: function(a) {
                var b = this;
                if (a.target != b.scroller) return;
                b._unbind(A),
                b._startAni()
            },
            _startAni: function() {
                var a = this,
                b = a.x,
                c = a.y,
                d = Date.now(),
                f,
                g,
                h;
                if (a.animating) return;
                if (!a.steps.length) {
                    a._resetPos(400);
                    return
                }
                f = a.steps.shift(),
                f.x == b && f.y == c && (f.time = 0),
                a.animating = !0,
                a.moved = !0;
                if (a.options.useTransition) {
                    a._transitionTime(f.time),
                    a._pos(f.x, f.y),
                    a.animating = !1,
                    f.time ? a._bind(A) : a._resetPos(0);
                    return
                }
                h = function() {
                    var i = Date.now(),
                    j,
                    k;
                    if (i >= d + f.time) {
                        a._pos(f.x, f.y),
                        a.animating = !1,
                        a.options.onAnimationEnd && a.options.onAnimationEnd.call(a),
                        a._startAni();
                        return
                    }
                    i = (i - d) / f.time - 1,
                    g = e.sqrt(1 - i * i),
                    j = (f.x - b) * g + b,
                    k = (f.y - c) * g + c,
                    a._pos(j, k),
                    a.animating && (a.aniTime = B(h))
                },
                h()
            },
            _transitionTime: function(a) {
                a += "ms",
                this.scroller.style[k] = a,
                this.hScrollbar && (this.hScrollbarIndicator.style[k] = a),
                this.vScrollbar && (this.vScrollbarIndicator.style[k] = a)
            },
            _momentum: function(a, b, c, d, f) {
                var g = 6e-4,
                h = e.abs(a) / b,
                i = h * h / (2 * g),
                j = 0,
                k = 0;
                return a > 0 && i > c ? (k = f / (6 / (i / h * g)), c += k, h = h * c / i, i = c) : a < 0 && i > d && (k = f / (6 / (i / h * g)), d += k, h = h * d / i, i = d),
                i *= a < 0 ? -1 : 1,
                j = h / g,
                {
                    dist: i,
                    time: e.round(j)
                }
            },
            _offset: function(a) {
                var b = -a.offsetLeft,
                c = -a.offsetTop;
                a = a.offsetParent;
                while (a) b -= a.offsetLeft,
                c -= a.offsetTop,
                a = a.offsetParent;
                return a != this.wrapper && (b *= this.scale, c *= this.scale),
                {
                    left: b,
                    top: c
                }
            },
            _snap: function(a, b) {
                var c = this,
                d, f, g, h, i, j;
                g = c.pagesX.length - 1;
                for (d = 0, f = c.pagesX.length; d < f; d++) if (a >= c.pagesX[d]) {
                    g = d;
                    break
                }
                g == c.currPageX && g > 0 && c.dirX < 0 && g--,
                a = c.pagesX[g],
                i = e.abs(a - c.pagesX[c.currPageX]),
                i = i ? e.abs(c.x - a) / i * 500 : 0,
                c.currPageX = g,
                g = c.pagesY.length - 1;
                for (d = 0; d < g; d++) if (b >= c.pagesY[d]) {
                    g = d;
                    break
                }
                return g == c.currPageY && g > 0 && c.dirY < 0 && g--,
                b = c.pagesY[g],
                j = e.abs(b - c.pagesY[c.currPageY]),
                j = j ? e.abs(c.y - b) / j * 500 : 0,
                c.currPageY = g,
                h = e.round(e.max(i, j)) || 200,
                {
                    x: a,
                    y: b,
                    time: h
                }
            },
            _bind: function(a, b, c) { (b || this.scroller).addEventListener(a, this, !!c)
            },
            _unbind: function(a, b, c) { (b || this.scroller).removeEventListener(a, this, !!c)
            },
            destroy: function() {
                var b = this;
                b.scroller.style[i] = "",
                b.hScrollbar = !1,
                b.vScrollbar = !1,
                b._scrollbar("h"),
                b._scrollbar("v"),
                b._unbind(v, a),
                b._unbind(w),
                b._unbind(x, a),
                b._unbind(y, a),
                b._unbind(z, a),
                b.options.hasTouch || (b._unbind("DOMMouseScroll"), b._unbind("mousewheel")),
                b.options.useTransition && b._unbind(A),
                b.options.checkDOMChanges && clearInterval(b.checkDOMTime),
                b.options.onDestroy && b.options.onDestroy.call(b)
            },
            refresh: function() {
                var a = this,
                b, c, d, f, g = 0,
                h = 0;
                a.scale < a.options.zoomMin && (a.scale = a.options.zoomMin),
                a.wrapperW = a.wrapper.clientWidth || 1,
                a.wrapperH = a.wrapper.clientHeight || 1,
                a.minScrollY = -a.options.topOffset || 0,
                a.scrollerW = e.round(a.scroller.offsetWidth * a.scale),
                a.scrollerH = e.round((a.scroller.offsetHeight + a.minScrollY) * a.scale),
                a.maxScrollX = a.wrapperW - a.scrollerW,
                a.maxScrollY = a.wrapperH - a.scrollerH + a.minScrollY,
                a.dirX = 0,
                a.dirY = 0,
                a.options.onRefresh && a.options.onRefresh.call(a),
                a.hScroll = a.options.hScroll && a.maxScrollX < 0,
                a.vScroll = a.options.vScroll && (!a.options.bounceLock && !a.hScroll || a.scrollerH > a.wrapperH),
                a.hScrollbar = a.hScroll && a.options.hScrollbar,
                a.vScrollbar = a.vScroll && a.options.vScrollbar && a.scrollerH > a.wrapperH,
                b = a._offset(a.wrapper),
                a.wrapperOffsetLeft = -b.left,
                a.wrapperOffsetTop = -b.top;
                if (typeof a.options.snap == "string") {
                    a.pagesX = [],
                    a.pagesY = [],
                    f = a.scroller.querySelectorAll(a.options.snap);
                    for (c = 0, d = f.length; c < d; c++) g = a._offset(f[c]),
                    g.left += a.wrapperOffsetLeft,
                    g.top += a.wrapperOffsetTop,
                    a.pagesX[c] = g.left < a.maxScrollX ? a.maxScrollX: g.left * a.scale,
                    a.pagesY[c] = g.top < a.maxScrollY ? a.maxScrollY: g.top * a.scale
                } else if (a.options.snap) {
                    a.pagesX = [];
                    while (g >= a.maxScrollX) a.pagesX[h] = g,
                    g -= a.wrapperW,
                    h++;
                    a.maxScrollX % a.wrapperW && (a.pagesX[a.pagesX.length] = a.maxScrollX - a.pagesX[a.pagesX.length - 1] + a.pagesX[a.pagesX.length - 1]),
                    g = 0,
                    h = 0,
                    a.pagesY = [];
                    while (g >= a.maxScrollY) a.pagesY[h] = g,
                    g -= a.wrapperH,
                    h++;
                    a.maxScrollY % a.wrapperH && (a.pagesY[a.pagesY.length] = a.maxScrollY - a.pagesY[a.pagesY.length - 1] + a.pagesY[a.pagesY.length - 1])
                }
                a._scrollbar("h"),
                a._scrollbar("v"),
                a.zoomed || (a.scroller.style[k] = "0", a._resetPos(400))
            },
            scrollTo: function(a, b, c, d) {
                var e = this,
                f = a,
                g, h;
                e.stop(),
                f.length || (f = [{
                    x: a,
                    y: b,
                    time: c,
                    relative: d
                }]);
                for (g = 0, h = f.length; g < h; g++) f[g].relative && (f[g].x = e.x - f[g].x, f[g].y = e.y - f[g].y),
                e.steps.push({
                    x: f[g].x,
                    y: f[g].y,
                    time: f[g].time || 0
                });
                e._startAni()
            },
            scrollToElement: function(a, b) {
                var c = this,
                d;
                a = a.nodeType ? a: c.scroller.querySelector(a);
                if (!a) return;
                d = c._offset(a),
                d.left += c.wrapperOffsetLeft,
                d.top += c.wrapperOffsetTop,
                d.left = d.left > 0 ? 0 : d.left < c.maxScrollX ? c.maxScrollX: d.left,
                d.top = d.top > c.minScrollY ? c.minScrollY: d.top < c.maxScrollY ? c.maxScrollY: d.top,
                b = b === undefined ? e.max(e.abs(d.left) * 2, e.abs(d.top) * 2) : b,
                c.scrollTo(d.left, d.top, b)
            },
            scrollToPage: function(a, b, c) {
                var d = this,
                e, f;
                c = c === undefined ? 400 : c,
                d.options.onScrollStart && d.options.onScrollStart.call(d),
                d.options.snap ? (a = a == "next" ? d.currPageX + 1 : a == "prev" ? d.currPageX - 1 : a, b = b == "next" ? d.currPageY + 1 : b == "prev" ? d.currPageY - 1 : b, a = a < 0 ? 0 : a > d.pagesX.length - 1 ? d.pagesX.length - 1 : a, b = b < 0 ? 0 : b > d.pagesY.length - 1 ? d.pagesY.length - 1 : b, d.currPageX = a, d.currPageY = b, e = d.pagesX[a], f = d.pagesY[b]) : (e = -d.wrapperW * a, f = -d.wrapperH * b, e < d.maxScrollX && (e = d.maxScrollX), f < d.maxScrollY && (f = d.maxScrollY)),
                d.scrollTo(e, f, c)
            },
            disable: function() {
                this.stop(),
                this._resetPos(0),
                this.enabled = !1,
                this._unbind(x, a),
                this._unbind(y, a),
                this._unbind(z, a)
            },
            enable: function() {
                this.enabled = !0
            },
            stop: function() {
                this.options.useTransition ? this._unbind(A) : C(this.aniTime),
                this.steps = [],
                this.moved = !1,
                this.animating = !1
            },
            zoom: function(a, b, c, d) {
                var e = this,
                f = c / e.scale;
                if (!e.options.useTransform) return;
                e.zoomed = !0,
                d = d === undefined ? 200 : d,
                a = a - e.wrapperOffsetLeft - e.x,
                b = b - e.wrapperOffsetTop - e.y,
                e.x = a - a * f + e.x,
                e.y = b - b * f + e.y,
                e.scale = c,
                e.refresh(),
                e.x = e.x > 0 ? 0 : e.x < e.maxScrollX ? e.maxScrollX: e.x,
                e.y = e.y > e.minScrollY ? e.minScrollY: e.y < e.maxScrollY ? e.maxScrollY: e.y,
                e.scroller.style[k] = d + "ms",
                e.scroller.style[i] = "translate(" + e.x + "px," + e.y + "px) scale(" + c + ")" + D,
                e.zoomed = !1
            },
            isReady: function() {
                return ! this.moved && !this.zoomed && !this.animating
            }
        },
        f = null,
        c.exports = E
    })(window, document)
});
define("../../common/component/playDownLink/callOrDownloadLink", ["../../service/playDownLink/downLink", "../../service/pingback/downloadPingback", "../../service/utils/util"],
function(a, b, c) {
    var d = a("../../service/playDownLink/downLink"),
    e = a("../../service/pingback/downloadPingback"),
    f = a("../../service/utils/util");
    APP.define("common.component.playDownLink.callOrDownloadLink", {
        message: ["PLAYER_LOAD_AND_PLAY"],
        onMessage: function(a, b) {
            if (a == "PLAYER_LOAD_AND_PLAY") {
                var c = this.rootElement;
                c.attr("data-tvid", b.tvid),
                c.attr("data-vid", b.vid)
            }
        },
        init: function() {
            var a = this.rootElement,
            b = f.domain(),
            c = {
                rt: {
                    A: "a",
                    IMG: "i"
                } [a[0].nodeName] || "e",
                rseat: a.attr("data-download-rseat") || "",
                rlink: a.attr("data-href") || a.attr("href") || "",
                platform: b.pps ? "202": b.iqiyi ? "2": "-1",
                "data-download-pos": a.attr("data-download-pos") || "",
                videoSeriesId: this.videoSeriesId || (Q.PageInfo.playInfo ? Q.PageInfo.playInfo.aid || Q.PageInfo.playInfo.sid: ""),
                pageType: this.pageType || Q.PageInfo.page || null,
                msrc: f.getMsrcCode(),
                templateCode: this.templateCode || a.attr("data-templateCode") || Q.template_code || -1
            };
            return a.on("click",
            function(b) {
                var f = a.attr("data-tvid"),
                g = a.attr("data-vid");
                f && (c.tvid = f),
                g && (c.vid = g),
                d.callApp(c,
                function() {
                    e.sendPingback({
                        rt: c.rt,
                        rlink: c.rlink,
                        rseat: c.rseat
                    })
                })
            }),
            this
        }
    })
});
define("../../common/service/playDownLink/downLink", ["../../service/native/callNative", "../../service/user/user", "../utils/videoInfo", "../video/videoStrategy"],
function(a, b, c) {
    var d = a("../../service/native/callNative"),
    e = a("../../service/user/user"),
    f = a("../utils/videoInfo"),
    g = a("../video/videoStrategy"),
    h = {
        PLAY: {
            homeOrPlay: "play",
            isDownload: !0,
            getPlayParam: function(a, b) {
                f.getVideoInfo(a.tvid, a.vid,
                function(c) {
                    b({
                        aid: c.aid,
                        vid: c.vid,
                        tvid: c.tvid,
                        cid: c.cid,
                        offset: a.currentTime || 0,
                        down: a["data-download"] || "0"
                    })
                })
            }
        },
        SEARCH: {
            homeOrPlay: "both",
            isDownload: !0,
            getPlayParam: function(a, b) {
                b({
                    aid: a.albumid,
                    tvid: a.tvid,
                    vid: a.vid,
                    cid: a.cid,
                    down: a["data-download"] || "0"
                })
            }
        },
        LIVE: {
            homeOrPlay: "both",
            isDownload: !0,
            getPlayParam: function(a, b) {
                b({
                    tvid: a.tvid,
                    aid: a.albumid
                })
            }
        },
        HOME: {
            homeOrPlay: "home",
            isDownload: !0
        },
        DEFAULT: {
            homeOrPlay: "play",
            isDownload: !1,
            getPlayParam: function(a, b) {
                b({
                    down: a["data-download"] || "0"
                })
            }
        }
    };
    c.exports = APP.createService({
        init: function(a) {
            this.callType = a.callType || "DEFAULT"
        },
        callApp: function(a, b) {
            var c = h[this.callType];
            if (c) {
                var e = c.isDownload ? this.getDownloadUrl(a["data-download-pos"], a.msrc) : null,
                f = a["data-isGoToAppHome-flag"] ? "home": "play",
                g = c.homeOrPlay == "both" ? f: c.homeOrPlay;
                g == "home" ? d.goToAppHome({},
                e, b) : g == "play" && typeof c.getPlayParam == "function" && c.getPlayParam(a,
                function(a) {
                    d.startPlay(a, e, b)
                })
            }
        },
        downloadApp: function(a, b) {
            var c = a["data-download-pos"];
            if (a.templateCode == 1 && c == "play_3rdparty_open") return ! 1;
            var d = this.getDownloadUrl(c, a.msrc);
            d && setTimeout(function() {
                location.href = d
            },
            200),
            b && b()
        },
        getDownloadUrl: function(a, b) {
            var c = this.createOTAUrl(a, b),
            d = c;
            return a == "play_3rdparty_open" && (d = g.getPackageUrl()),
            d
        },
        createOTAUrl: function(a, b) {
            var c = location.href,
            d = b || "",
            f = "http://ota.iqiyi.com/f2.jsp",
            g = APP.$.url.jsonToQuery({
                pos: a,
                msrc: d,
                vfm: d,
                qyid: e.getAnonymousUid(),
                qypid: "-1_2031"
            }),
            h = f + "?" + g;
            return h
        }
    })
});
define("../../common/service/pingback/downloadPingback", ["../user/user"],
function(a, b, c) {
    var d = a("../user/user");
    c.exports = APP.createService({
        sendPingback: function(a) {
            var b = {
                t: 20,
                pf: a.platform || "2",
                p: "20",
                p1: "201",
                u: d.getAnonymousUid(),
                pu: d.getUid(),
                jsuid: d.getAnonymousUid(),
                ce: $.cookie.get("QC112") || "",
                rt: a.rt,
                r: a.r || "",
                rlink: a.rlink,
                rseat: a.rseat,
                packgtype: $.os.android ? "androidphone": "iphone",
                rn: (new Date).getTime()
            },
            c = $.url.jsonToQuery(b),
            e = new Image;
            e.src = "http://msg.iqiyi.com/b?" + c
        }
    })
});
define("../../common/component/playDownLink/downLink", ["../../service/playDownLink/downLink", "../../service/pingback/downloadPingback", "../../service/utils/util"],
function(a, b, c) {
    var d = a("../../service/playDownLink/downLink"),
    e = a("../../service/pingback/downloadPingback"),
    f = a("../../service/utils/util");
    APP.define("common.component.playDownLink.downLink", {
        message: ["PLAYER_LOAD_AND_PLAY"],
        onMessage: function(a, b) {
            if (a == "PLAYER_LOAD_AND_PLAY") {
                var c = this.rootElement;
                c.attr("data-tvid", b.tvid),
                c.attr("data-vid", b.vid)
            }
        },
        init: function() {
            var a = this.rootElement,
            b = f.domain(),
            c = {
                rt: {
                    A: "a",
                    IMG: "i"
                } [a[0].nodeName] || "e",
                rseat: a.attr("data-download-rseat") || "",
                rlink: a.attr("data-href") || a.attr("href") || "",
                platform: b.pps ? "202": b.iqiyi ? "2": "-1",
                "data-download-pos": a.attr("data-download-pos") || "",
                msrc: f.getMsrcCode(),
                templateCode: a.attr("data-templateCode") || Q.template_code || -1
            };
            a.on("click",
            function(a) {
                d.downloadApp(c,
                function() {
                    e.sendPingback({
                        rt: c.rt,
                        rlink: c.rlink,
                        rseat: c.rseat
                    })
                })
            })
        }
    })
});
define("../../common/component/playDownLink/NativeAppPop", ["../../../common/service/storage/storage", "../../../common/service/utils/scroll", "../../../common/service/pingback/pingbackHtml5", "../../../common/service/useragent/detect"],
function(a, b, c) {
    var d = a("../../../common/service/storage/storage"),
    e = a("../../../common/service/utils/scroll"),
    f = a("../../../common/service/pingback/pingbackHtml5"),
    g = a("../../../common/service/useragent/detect"),
    h = "h5_native_app_pop_close";
    APP.define("common.component.playDownLink.bottomNativePopup", {
        init: function() {
            var a = this,
            b = "mcltclose_4bfydwn";
            a.nodes.close.on("click",
            function(c) {
                c.preventDefault(),
                c.stopPropagation(),
                a.rootElement.hide(),
                d.write(h, Date.now() + 1728e5),
                f.send(null, {
                    t: 20,
                    pf: 2,
                    p: 20,
                    p1: 201,
                    rseat: b,
                    u: f.getUid(),
                    pu: f.getPuid(),
                    rn: Date.now(),
                    bstp: 0
                })
            });
            var c = function(b) {
                window.setTimeout(function() {
                    var b = e.getTop();
                    b > 110 && (a.rootElement.removeClass("dn"), e.un("scrollend", c))
                },
                0)
            },
            i = "6_55_97",
            j = location.href,
            k = APP.$.url.getQueryValue(j, "msrc") || APP.$.cookie.get("QC015"),
            l = d.read(h),
            m = "http://data.video.qiyi.com/v.mp4";
            $.ajax({
                url: m,
                dataType: "jsonp",
                success: function(a) {
                    if (a.code === "A00000") {
                        var b = /beijing|shanghai|guangzhou/i,
                        d = a.data.t,
                        e = b.test(d); ! (l && l > (new Date).getTime()) && (i !== k || !e) && !g.weixin && APP.$(document).on("scroll", c)
                    }
                },
                error: function(a, b) {}
            })
        }
    })
});
define("../../common/service/utils/scroll", [],
function(a, b, c) {
    function f(a) {
        var b = this;
        e && window.clearTimeout(e),
        e = window.setTimeout(function() {
            d.forEach(function(b) {
                b(a)
            })
        },
        200)
    }
    var d = [],
    e;
    APP.$(window).on("scroll", f),
    c.exports = APP.createService({
        scrollTo: function(a, b) {
            window.scrollTo(a, b)
        },
        scrollBy: function(a, b) {
            window.scrollTo(a, b)
        },
        on: function(a, b) {
            a === "scrollend" ? d.push(b) : APP.$(window).on(a, b)
        },
        un: function(a, b) {
            a === "scrollend" ? d.forEach(function(a, c) {
                a === b && d.splice(c, 1)
            }) : APP.$(window).off(a, b)
        },
        getTop: function() {
            return APP.$.page.getScrollTop()
        }
    })
});
define("../../common/component/banner/AdBanner", ["../../service/advertisement/ad", "../../service/advertisement/adPlayerId"],
function(a, b, c) {
    var d = a("../../service/advertisement/ad"),
    e = a("../../service/advertisement/adPlayerId");
    APP.define("common.component.banner.AdBanner", {
        init: function() {},
        message: ["NO_VIDEO_AD"],
        onMessage: function(a, b) {
            if (a === "NO_VIDEO_AD") {
                var c = e.get();
                if (!c) return;
                if (Q.PageInfo.adPlayerLoaded) return ! 1;
                d.init({
                    adId: c
                })
            }
        }
    })
});
define("../../common/service/advertisement/ad", [],
function(a, b, c) {
    var d = function(a) {
        var b = "iphone";
        APP.$.browser.iPad && (b = "ipad");
        var c = APP.$.cookie.get("QC006") || "",
        d = JSON.parse(APP.$.cookie.get("P00002") || "{}").uid,
        e = APP.$.crypto.md5(c + "webEventId" + (new Date).getTime()),
        f = APP.$.crypto.md5(c + "videoEventId" + (new Date).getTime());
        return {
            playerId: a.adId,
            tvId: (a.tvid || "") + "",
            vId: (a.vid || "") + "",
            userId: c,
            passportId: d || "",
            clientIP: "10.0.1.12",
            resIndex: a.rate || "",
            albumId: (a.aid || "") + "",
            deviceType: b,
            deviceVersion: "3.2",
            location: location.href,
            webEventId: e,
            channelId: (a.cid || "") + "",
            videoEventId: f,
            isUGC: !!a.isUGC,
            duration: a.duration
        }
    },
    e = Q.PageInfo.ad_sdk_url,
    f = function(a) {
        if (e) {
            a(e);
            return
        }
    },
    g,
    h = function(a, b) {
        a = a || {},
        f(function(c) {
            var e = d(a);
            seajs.use(c,
            function(c) {
                var d = a.player || null;
                g && g.stop(),
                g = new c(d, e);
                var f = function(a) {
                    if (a.type == c.EVENT_CUPID_NO_AD) b && b();
                    else {
                        $.customEvent.fire({
                            type: "adloaded",
                            data: a.data
                        });
                        if (b) {
                            var d = a.data.ads[0].duration - a.data.ads[0].startTime;
                            b(a.data.src, d)
                        }
                    }
                };
                d && (g.addEventListener(c.EVENT_CUPID_READY, f), g.addEventListener(c.EVENT_CUPID_NO_AD, f)),
                g.start && g.start()
            })
        })
    };
    c.exports = APP.createService({
        init: function(a, b) {
            a = a || {};
            var c = Q.PageInfo.playInfo;
            c && $.extend(a, {
                tvid: c.tvid,
                vid: c.vid,
                aid: c.aid,
                cid: c.channelId,
                isUGC: c.isUgcvideo,
                duration: c.duration
            }),
            h(a, b)
        }
    })
});
define("../../common/service/advertisement/adPlayerId", [],
function(a, b, c) {
    var d = {
        home: {
            ios: "qc_100001_100162",
            android: "qc_100001_100190"
        },
        play: {
            ios: "qc_100001_100102",
            android: "qc_100001_100186",
            weixin: {
                ios: "qc_105092_300415",
                android: "qc_105092_300415"
            }
        },
        search: {
            ios: "qc_100001_100598",
            android: "qc_100001_100597",
            weixin: {
                ios: "qc_105092_300415",
                android: "qc_105092_300415"
            }
        },
        hotspot: {
            ios: "qc_100001_100102",
            android: "qc_100001_100186"
        },
        playList: {
            ios: "qc_100001_100102",
            android: "qc_100001_100186"
        },
        splay: {
            ios: "",
            android: ""
        },
        liveplay: {
            ios: "",
            android: ""
        },
        channelHome: {
            ios: "qc_100001_100163",
            android: "qc_100001_100189"
        },
        details: {
            ios: "qc_100001_100164",
            android: "qc_100001_100187"
        }
    };
    c.exports = APP.createService({
        get: function() {
            if (Q.PageInfo && Q.PageInfo.page) {
                var a, b;
                Q.PageInfo.page != "play" && Q.PageInfo.page != "search" || !/MicroMessenger/i.test(navigator.userAgent) ? b = d[Q.PageInfo.page] : b = d[Q.PageInfo.page].weixin,
                APP.$.os.ios && (a = b.ios),
                APP.$.os.android && (a = b.android)
            }
            return a
        }
    })
});
define("../../common/component/scroll/scrollShow", [],
function(a, b, c) {
    APP.define("page.common.component.scrollShow", {
        init: function() {
            var a = this;
            a.targetAttr = "data-scroll-show",
            a.delayTime = 500,
            a.timer = null,
            a.tagObjs = [],
            a.initParams(),
            a.onShow(),
            a.bind()
        },
        initParams: function(a) {
            var b = this,
            c = this.rootElement.find("[" + b.targetAttr + "]");
            for (var d = 0,
            e = c.length; d < e; d++) {
                var f = c.eq(d);
                b.tagObjs.push({
                    top: f.offset().top,
                    isShow: f.attr(b.targetAttr) != "true",
                    ele: f
                })
            }
        },
        onShow: function() {
            var a = this,
            b = document.documentElement.clientHeight + document.body.scrollTop,
            c = a.getElements(b);
            c.length > 0 && (APP.postMessage("SCROLLSHOW_SHOW", {
                nodes: c
            }), this.onScrollShow && $.isFunction(this.onScrollShow) && this.onScrollShow({
                nodes: c
            }))
        },
        scrollToElement: function(a) {
            var b = this.rootElement.find(a.id).offset().top + a.offset;
            window.scrollTo(0, b)
        },
        showInScreen: function(a) {
            var b = a.getBoundingClientRect(),
            c = b.top,
            d = b.bottom,
            e = document.documentElement.clientHeight;
            return d <= 0 || c >= e ? !1 : !0
        },
        getElements: function(a) {
            var b = this,
            c = [];
            for (var d = 0,
            e = b.tagObjs.length; d < e; d++) {
                var f = b.tagObjs[d];
                b.showInScreen(f.ele[0]) && f.isShow === !1 && (f.isShow = !0, c.push(f))
            }
            return c
        },
        bind: function() {
            var a = this;
            $(window).on("scroll",
            function(b) {
                clearTimeout(a.timer),
                a.timer = setTimeout(function() {
                    a.onShow()
                },
                a.delayTime)
            })
        },
        message: ["SCROLLSHOW_CHECK", "COMMON_SCROLL_TO_ELEMENT"],
        onMessage: function(a, b) {
            var c = this;
            a === "SCROLLSHOW_CHECK" ? c.onShow() : a === "COMMON_SCROLL_TO_ELEMENT" && c.scrollToElement(b)
        }
    })
});
define("../../common/component/popup/popup", ["../../../common/service/storage/storage"],
function(a, b, c) {
    var d = a("../../../common/service/storage/storage");
    APP.define("common.component.popup.popup", {
        messageHandlers: {
            COMMON_POPUP_SHOW: function(a) {
                this.setConfig(a),
                this.show()
            },
            COMMON_POPUP_HIDE: function(a) {
                this.hide()
            }
        },
        message: ["COMMON_POPUP_SHOW", "COMMON_POPUP_HIDE"],
        init: function() {},
        setConfig: function(a) {
            var b = this.nodes;
            b.title.html(a.title),
            b.tip.html(a.tip),
            b.text1.html(a.text1),
            b.text2.html(a.text2),
            this.callback1 = a.callback1,
            this.callback2 = a.callback2,
            this.storagePrefix = a.name || "COMMON"
        },
        show: function() {
            var a = +d.read("_" + this.storagePrefix + "_POPUP_CLOSE_");
            if ( + (new Date) - a < 864e5) return;
            APP.postMessage("COMMON_COVER_SHOW"),
            this.rootElement.removeClass("hide")
        },
        hide: function() {
            d.write("_" + this.storagePrefix + "_POPUP_CLOSE_", +(new Date)),
            APP.postMessage("COMMON_COVER_HIDE"),
            this.rootElement.addClass("hide")
        },
        onMessage: function(a, b) {
            this.messageHandlers[a] && this.messageHandlers[a].call(this, b)
        },
        doClick: function(a) {
            a === "close" ? this.hide() : /^https?\:\/\//.test(a) ? window.location = a: typeof a == "function" && a()
        },
        listenerHandlers: {
            text1: function() {
                this.doClick(this.callback1)
            },
            text2: function() {
                this.doClick(this.callback2)
            }
        },
        listeners: {
            click: function(a, b, c) {
                this.listenerHandlers[c] && this.listenerHandlers[c].call(this)
            }
        }
    })
});
define("./component/favorite", ["../../../common/service/user/user", "../../../common/service/pingback/longyuan4_clickpingback", "../../../common/service/config/config", "../../../common/service/storage/storage", "../service/favorite", "../service/videoInfo"],
function(a, b, c) {
    var d = a("../../../common/service/user/user"),
    e = a("../../../common/service/pingback/longyuan4_clickpingback"),
    f = a("../../../common/service/config/config"),
    g = a("../../../common/service/storage/storage"),
    h = a("../service/favorite"),
    i = a("../service/videoInfo"),
    j = {},
    k = "A00200",
    l = {
        album: 1,
        source: 2,
        other: 7
    },
    m = {
        favorited: {
            trigger: function() {
                this.cancelFavorite()
            }
        },
        canceled: {
            trigger: function() {
                this.doFavorite()
            }
        }
    };
    APP.define("page.playMovie.component.favorite", {
        subType: "",
        subKey: "",
        message: ["PLAYER_LOAD_AND_PLAY"],
        onMessage: function(a, b) {
            var c = this;
            a == "PLAYER_LOAD_AND_PLAY" && i.getVideoParams({
                tvid: b.tvid,
                vid: b.vid
            }).then(function(a) {
                j = {
                    cid: a.cid,
                    sid: a.sid,
                    aid: a.aid,
                    tvid: a.tvid,
                    templateType: a.templateType
                },
                c.checkTypeKey(),
                c.checkFavorite()
            })
        },
        init: function() {
            this.status = m.canceled
        },
        getParams: function() {
            return {
                subType: this.subType,
                subKey: this.subKey,
                channelId: +j.cid
            }
        },
        checkTypeKey: function() {
            var a = +j.cid,
            b = +j.sid,
            c = +j.aid,
            d = +j.tvid,
            e = "",
            g = j.templateType;
            switch (g) {
            case "ALBUM":
                e = l.album;
                break;
            case "SOURCE":
                f.channel.JIAO_YU == a ? e = c ? l.album: l.other: b ? e = l.source: e = l.other;
                break;
            default:
                e = l.other
            }
            this.subType = e,
            this.subKey = e === l.album ? c: e === l.source ? b: d
        },
        afterFavorited: function(a) {
            this.rootElement.addClass("selected"),
            this.nodes.text.text("已收藏"),
            this.status = m.favorited;
            if (a === "check") return;
            d.isLogin() || this.setLocalStorage();
            var b = a === "A00000" ? {
                title: "收藏成功！",
                tip: "您可以进入“我的-收藏”中<br/>查看所有收藏列表",
                text1: "知道了",
                text2: "收藏",
                callback1: "close",
                callback2: "http://m.iqiyi.com/u/fav/"
            }: {
                title: null,
                tip: "您还沒有登录，最多能收藏5跳视频，为避免数据丟失，赶快登录后导入收藏记录吧！",
                text1: "知道了",
                text2: "马上登录",
                callback1: "close",
                callback2: "http://m.iqiyi.com/user.html?redirect_url=http%3A%2F%2Fm.iqiyi.com%2Fu%2Ffav%2F"
            };
            APP.postMessage("COMMON_POPUP_SHOW", b),
            e.send({
                rseat: "605091_favclk"
            })
        },
        afterCanceled: function(a) {
            this.rootElement.removeClass("selected"),
            this.nodes.text.text("收藏"),
            this.status = m.canceled;
            if (a === "check") return;
            e.send({
                rseat: "605091_favccel"
            })
        },
        setLocalStorage: function() {
            g.read("hasNoLoginCollect") == null && g.write("hasNoLoginCollect", "true")
        },
        checkFavorite: function() {
            var a = this;
            h.isFavorite(this.getParams()).done(function(b) {
                b ? a.afterFavorited("check") : a.afterCanceled("check")
            })
        },
        doFavorite: function() {
            var a = this;
            h.doFavorite(this.getParams()).done(function(b) {
                b && a.afterFavorited(b)
            })
        },
        cancelFavorite: function() {
            var a = this;
            h.cancelFavorite(this.getParams()).done(function(b) {
                b && a.afterCanceled()
            })
        },
        listeners: {
            click: function(a, b, c) {
                this.status.trigger.call(this)
            }
        }
    })
});
define("./service/favorite", ["../../../common/service/config/config", "../../../common/service/user/user", "../../../common/service/deferredRequest/deferredRequest"],
function(a, b, c) {
    var d = a("../../../common/service/config/config").interfaces.favorite,
    e = a("../../../common/service/user/user"),
    f = a("../../../common/service/deferredRequest/deferredRequest"),
    g = function(a) {
        var b = e.isLogin() ? {
            authcookie: $.cookie.get("P00001"),
            antiCsrf: $.crypto.md5($.cookie.get("P00001"))
        }: {
            ckuid: $.cookie.get("QC006"),
            antiCsrf: $.crypto.md5($.cookie.get("QC006"))
        };
        return $.extend({
            agent_type: $.os.android ? 13 : 12
        },
        a, b)
    };
    c.exports = APP.createService({
        doFavorite: function(a) {
            var b = d.favorite;
            return a = g(a),
            f.jsonp(b, a).then(function(a) {
                return a.code === "A00000" || a.code === "A00200" ? a.code: !1
            })
        },
        cancelFavorite: function(a) {
            var b = d.cancelFavorite;
            return a = g(a),
            f.jsonp(b, a).then(function(a) {
                return a.code === "A00000" ? !0 : !1
            })
        },
        isFavorite: function(a) {
            var b = d.isFavorite;
            return a = g(a),
            delete a.antiCsrf,
            f.jsonp(b, a).then(function(a) {
                return a.code === "A00000" ? !0 : !1
            })
        }
    })
});
define("./component/videoExtendBarTips", ["../../../common/service/storage/storage"],
function(a, b, c) {
    var d = a("../../../common/service/storage/storage"),
    e = "h5_add_play_shareGuide_status";
    APP.define("page.playMovie.component.videoExtendBarTips", {
        init: function() {},
        message: ["VIDEOEXTENDBAR_TIPS_SHOW", "VIDEOEXTENDBAR_TIPS_HIDE"],
        onMessage: function(a, b) {
            switch (a) {
            case "VIDEOEXTENDBAR_TIPS_SHOW":
                this.nodes.guiderText.text(b),
                this.rootElement.removeClass("hide");
                break;
            case "VIDEOEXTENDBAR_TIPS_HIDE":
                this.rootElement.addClass("hide");
                break;
            default:
            }
        },
        listeners: {
            click: function(a, b, c) {
                c === "close" && (this.rootElement.addClass("hide"), d.write(e, Date.now() + 1728e5))
            }
        }
    })
});
define("../../common/component/cover/cover", [],
function(a, b, c) {
    APP.define("common.component.cover.cover", {
        messageHandlers: {
            COMMON_COVER_SHOW: function(a) {
                this.show()
            },
            COMMON_COVER_HIDE: function(a) {
                this.hide()
            }
        },
        message: ["COMMON_COVER_SHOW", "COMMON_COVER_HIDE"],
        onMessage: function(a, b) {
            this.messageHandlers[a] && this.messageHandlers[a].call(this, b)
        },
        init: function() {
            this.hide()
        },
        show: function() {
            this.rootElement.removeClass("hide")
        },
        hide: function() {
            this.rootElement.addClass("hide")
        }
    })
});
define("../../common/component/base/backTop", [],
function(a, b, c) {
    APP.define("page.home.fragment.backTop", {
        forceHide: !1,
        init: function() {
            var a = this;
            a.bind(),
            a.controlIcon()
        },
        bind: function() {
            var a = this;
            $(window).on("scroll",
            function(b) {
                a.controlIcon()
            })
        },
        controlIcon: function() {
            var a = this;
            document.body.scrollTop <= 2e3 ? a.nodes.nodeLink.addClass("hide") : a.forceHide || a.nodes.nodeLink.removeClass("hide")
        },
        message: ["BACK_TOP_SHOW", "BACK_TOP_HIDE"],
        onMessage: function(a, b) {
            var c = this;
            a === "BACK_TOP_SHOW" ? (c.forceHide = !1, b.forseShow ? c.nodes.nodeLink.removeClass("hide") : document.body.scrollTop > 0 && c.nodes.nodeLink.removeClass("hide")) : a === "BACK_TOP_HIDE" && (c.forceHide = !!b.forceHide, c.nodes.nodeLink.addClass("hide"))
        },
        listeners: {
            click: function(a, b, c) {
                $(window).scrollTop(0)
            }
        }
    })
});
define("./component/paopaoCommentBtn", ["../service/paopaoCommentBtn", "../../../common/service/cloudControl/comment", "../../../common/service/utils/videoInfo", "../../../common/service/user/user"],
function(a, b, c) {
    var d = a("../service/paopaoCommentBtn"),
    e = a("../../../common/service/cloudControl/comment"),
    f = a("../../../common/service/utils/videoInfo"),
    g = a("../../../common/service/user/user"),
    h = Q.PageInfo,
    i = h.playInfo,
    j = !!i.circleId;
    APP.define("page.playMovie.component.paopaoCommentBtn", {
        _videoInfo: {},
        message: ["PLAYER_LOAD_AND_PLAY"],
        messageHandlers: {
            PLAYER_LOAD_AND_PLAY: function(a) {
                var b = this;
                this.getParams({
                    tvid: a.tvid,
                    vid: a.vid
                }).then(function(a) {
                    return b.cloudControl({
                        tvid: a.tvid,
                        albumid: a.sid ? a.sid: a.aid,
                        categoryid: a.cid,
                        wallId: i.circleId
                    })
                }).then(function(a) {
                    return j ? +a.paopaoWall: +a.contentDisplayEnable
                }).then(function(a) {
                    var c = {
                        0 : function() {
                            b.rootElement.addClass("hide");
                            return
                        },
                        1 : function() {
                            b.getHotData().then(function() {
                                b.rootElement.removeClass("hide")
                            })
                        }
                    };
                    c[a]()
                })
            }
        },
        onMessage: function(a, b) {
            this.messageHandlers[a] && this.messageHandlers[a].call(this, b)
        },
        init: function() {},
        getParams: function(a) {
            var b = this._videoInfo;
            return (new $.Deferred(function(c) {
                f.getVideoInfo(a.tvid, a.vid,
                function(a) {
                    b.tvid = a.tvid;
                    var d = {
                        aid: a.aid || a.tvid,
                        qitanid: a.qitanId,
                        cid: a.cid,
                        tvid: a.tvid,
                        sid: a.sid
                    };
                    c.resolve(d)
                })
            })).promise()
        },
        cloudControl: function(a) {
            var b = "";
            j ? b = "paopao_wall": b = h.pageType == "liveplay" ? "comment_live": "comment";
            var c = {
                business: b,
                is_video_page: h.pageType == "play" || h.pageType == "liveplay",
                tvid: a.tvid,
                albumid: a.albumid,
                categoryid: a.categoryid,
                wallId: a.wallId
            },
            d = this;
            return (new $.Deferred(function(a) {
                e.getCommentRule("", c,
                function(b) {
                    d._status = b,
                    a.resolve(b)
                })
            })).promise()
        },
        getHotData: function() {
            var a = this.nodes,
            b = j ? {
                circleid: i.circleId
            }: {
                tvid: this._videoInfo.tvid
            };
            return d.getData(b).then(function(b) {
                b.count ? (a.count.text(b.count + "条"), a.tips.removeClass("hide"), a.tipsNoCount.addClass("hide"), a.count.removeClass("hide"), a.countDot.removeClass("hide")) : (a.tips.addClass("hide"), a.tipsNoCount.removeClass("hide"), a.count.addClass("hide"), a.countDot.addClass("hide"))
            })
        },
        listeners: {
            click: function() {
                this.nodes.countDot.addClass("hide"),
                APP.postMessage("CLICK_TO_COMMENT_TRIGGER", {
                    id: "#paopao_comment",
                    offset: -0.252 * screen.width
                })
            }
        }
    })
});
define("./service/paopaoCommentBtn", ["../../../common/service/deferredRequest/deferredRequest", "../../../common/service/config/config"],
function(a, b, c) {
    var d = a("../../../common/service/deferredRequest/deferredRequest"),
    e = a("../../../common/service/config/config").interfaces,
    f = function(a, b) {
        return a >= 1e4 ? (a < 1e8 ? (a / 1e4).toFixed(b) + "万": (a / 1e8).toFixed(b) + "亿").replace(/\.0/, "") : a
    };
    c.exports = APP.createService({
        getData: function(a) {
            var b = e.hotComment;
            return a = $.extend({
                hasRecomFeed: 1,
                feedTypes: "1,4,8"
            },
            a),
            d.jsonp(b, a).then(function(a) {
                var b = {
                    count: 0,
                    portrait: "",
                    hasRecomFeed: 1,
                    top: 1,
                    sourceType: 0,
                    ext: 2
                };
                return a.code === "A00000" && (a = a.data, b.count = f(a.feedCount || a.commentCount || 0, 1), b.portrait = a.userIcon || ""),
                b
            })
        }
    })
});
define("../../common/service/cloudControl/comment", ["../../service/config/config.js"],
function(a, b, c) {
    var d = a("../../service/config/config.js"),
    e = APP.createService({
        _cache: {},
        _handle: {},
        _barrageParams: {
            business: "comment",
            is_iqiyi: !0,
            is_video_page: !1,
            tvid: "",
            albumid: "",
            categoryid: "",
            qypid: "02000021010000000000",
            wallId: ""
        },
        getCommentRule: function(a, b, c, e) {
            var f = this,
            g = a || d.interfaces.cloudControl.barrageComment,
            h = f._barrageParams;
            for (var i in h) h.hasOwnProperty(i) && b[i] && (h[i] = "" + b[i]);
            this.ajax({
                url: g,
                data: h,
                dataType: "jsonp",
                success: function(a) {
                    a && a.code === "A00000" ? c && c(a.data) : e && e(a)
                },
                error: function(a) {
                    e && e(a)
                }
            })
        },
        ajax: function(a) {
            var b = this,
            c = JSON.stringify(a);
            if (this._cache[c] && this._cache[c] != "waiting") a.success && a.success(this._cache[c]),
            a.complete && a.complete(this._cache[c]);
            else if (this._cache[c] == "waiting") this._handle[c].push({
                success: a.success,
                error: a.error,
                complete: a.complete
            });
            else if (this._cache[c] == undefined || this._cache[c] == "failed") this._handle[c] = [{
                success: a.success,
                error: a.error,
                complete: a.complete
            }],
            a.success = function(a) {
                b._cache[c] = a,
                b._handle[c].forEach(function(b) {
                    b.success && b.success(a)
                })
            },
            a.error = function(a) {
                b._cache[c] = "failed",
                b._handle[c].forEach(function(b) {
                    b.error && b.error(a)
                })
            },
            a.complete = function(a) {
                b._handle[c].forEach(function(b) {
                    b.complete && b.complete(a)
                })
            },
            $.ajax(a),
            this._cache[c] = "waiting"
        }
    });
    return e
});
define("./component/showComments", ["../../../common/service/cloudControl/comment", "../../../common/service/utils/videoInfo"],
function(a, b, c) {
    var d = a("../../../common/service/cloudControl/comment"),
    e = a("../../../common/service/utils/videoInfo"),
    f = Q.PageInfo,
    g = f.playInfo,
    h = !!g.circleId;
    APP.define("page.playMovie.component.showComments", {
        message: ["PLAYER_LOAD_AND_PLAY"],
        messageHandlers: {
            PLAYER_LOAD_AND_PLAY: function(a) {
                var b = this;
                this.getParams({
                    tvid: a.tvid,
                    vid: a.vid
                }).then(function(a) {
                    return b.cloudControl({
                        tvid: a.tvid,
                        albumid: a.sid ? a.sid: a.aid,
                        categoryid: a.cid
                    })
                }).then(function(a) { ! h && !a.contentDisplayEnable ? b.rootElement.hide() : h && !a.paopaoWall ? b.rootElement.hide() : b.rootElement.show()
                })
            }
        },
        onMessage: function(a, b) {
            this.messageHandlers[a] && this.messageHandlers[a].call(this, b)
        },
        init: function() {},
        getParams: function(a) {
            return (new $.Deferred(function(b) {
                e.getVideoInfo(a.tvid, a.vid,
                function(a) {
                    var c = {
                        aid: a.aid || a.tvid,
                        qitanid: a.qitanid,
                        cid: a.cid,
                        tvid: a.tvid,
                        sid: a.sid
                    };
                    b.resolve(c)
                })
            })).promise()
        },
        cloudControl: function(a) {
            var b = "";
            h ? b = "paopao_wall": b = f.pageType == "liveplay" ? "comment_live": "comment";
            var c = {
                business: b,
                is_video_page: f.pageType == "play" || f.pageType == "liveplay",
                tvid: a.tvid,
                albumid: a.albumid,
                categoryid: a.categoryid
            },
            e = this;
            return (new $.Deferred(function(a) {
                d.getCommentRule("", c,
                function(b) {
                    e._status = b,
                    a.resolve(b)
                })
            })).promise()
        }
    })
});
define("./component/videoInfo", ["../../../common/service/config/config", "../service/videoInfo", "../../../common/service/user/user", "../../../common/service/pingback/longyuan4_clickpingback", "../service/series", "../../../common/service/utils/videoInfo"],
function(a, b, c) {
    var d = a("../../../common/service/config/config"),
    e = a("../service/videoInfo"),
    f = a("../../../common/service/user/user"),
    g = a("../../../common/service/pingback/longyuan4_clickpingback"),
    h = a("../service/series"),
    i = a("../../../common/service/utils/videoInfo"),
    j = {},
    k = {
        MOVIE: "电影",
        ALBUM: "电视剧",
        SOURCE: "综艺",
        SHORT: ""
    };
    APP.define("page.playMovie.component.videoInfo", {
        templateType: "SHORT",
        message: ["PLAYER_LOAD_AND_PLAY"],
        _videoInfo: {},
        onMessage: function(a, b) {
            var c = this;
            a == "PLAYER_LOAD_AND_PLAY" && this.refresh(b)
        },
        init: function() {
            var a = this
        },
        refresh: function(a) {
            var b = this;
            this._videoInfo.tvId = a.tvid,
            this._videoInfo.vid = a.vid,
            e.getVideoParams({
                tvid: a.tvid,
                vid: a.vid
            }).then(function(a) {
                b.templateType = a.templateType;
                var c = {
                    tvid: a.tvId,
                    aid: a.albumId
                };
                if (b.templateType == "ALBUM" || b.templateType == "SOURCE") {
                    var d = {
                        id: b.templateType == "ALBUM" ? a.albumId: a.sourceId
                    },
                    f = e.getAlbumOrSourceInfo(d);
                    if (b.templateType == "ALBUM") {
                        var g = b.getParams().then(function(a) {
                            return a.id ? b.getSeries(a) : null
                        });
                        Promise.all([g, f]).then(function(d) {
                            var e = {};
                            d.forEach(function(a) {
                                e = $.extend(e, a)
                            }),
                            b.renderAlbumOrSource(a, e, c)
                        })
                    } else f.then(function(d) {
                        b.renderAlbumOrSource(a, d, c)
                    })
                } else {
                    var h = b.formatData(a);
                    b.buildAll(h, c, c)
                }
            })
        },
        getParams: function() {
            var a = this,
            b = this._videoInfo;
            return (new $.Deferred(function(c) {
                i.getVideoInfo(b.tvId, b.vid,
                function(b) {
                    var d = a._videoInfo = $.extend(a._videoInfo, {
                        id: b.supId,
                        albumId: b.aid || b.tvid,
                        tvId: b.tvid
                    });
                    c.resolve(d)
                })
            })).promise()
        },
        getSeries: function(a) {
            var b = this;
            return h.getData(a).then(function(a) {
                return b._playList = a.playList,
                b._currentVideoIndex = a.currentVideoIndex,
                {
                    title: a.title,
                    list: a.list
                }
            })
        },
        renderAlbumOrSource: function(a, b, c) {
            b && b.latestVideo && APP.postMessage("ALBUM_LATEST_DATE", b.latestVideo.period);
            var d = this.formatData(a, b);
            this.buildAll(d, c)
        },
        buildAll: function(a, b) {
            var c = this,
            d = c.nodes["videoInfoTPL_" + c.templateType].html();
            c.nodes.content.html($.plugins.Mustache.render(d, a)),
            c.updateNodes(),
            this.bind(),
            document.title = a.name,
            APP.initComponent(c.rootElement),
            c.getCounts(b),
            f.isLogin() ? APP.postMessage("UPDATE_SCORE", {
                aid: b.aid,
                tvid: b.tvid
            }) : APP.postMessage("HIDE_SCORE"),
            APP.postMessage("REFRESH_VIDEO_INFO", {
                aid: b.aid,
                tvid: b.tvid
            }),
            this.rootElement.show()
        },
        bind: function() {
            var a = this;
            this.nodes.desBtn.on("click",
            function() {
                a.nodes.moreInfo.hasClass("hide") ? (a.nodes.mainActors && a.nodes.mainActors.removeClass("main-actors"), a.nodes.desBtn.addClass("selected"), a.nodes.moreInfo.removeClass("hide"), a.nodes.updateStrategy && a.nodes.updateStrategy.removeClass("tx-oneline"), g.send({
                    rseat: "507141_1"
                })) : (a.nodes.mainActors && a.nodes.mainActors.addClass("main-actors"), a.nodes.desBtn.removeClass("selected"), a.nodes.moreInfo.addClass("hide"), a.nodes.updateStrategy && a.nodes.updateStrategy.addClass("tx-oneline"), g.send({
                    rseat: "507141_2"
                }))
            })
        },
        getCounts: function(a) {
            var b = this,
            c = b.nodes.count,
            e = "";
            if (c.length > 0) {
                var f = a.aid || a.tvid,
                g = j[f];
                g ? (e = b.formatNum(g, 1), c.html(e), c.attr("data-allplaycount", g), APP.postMessage("SHOW_CHART_COUNT", {
                    count: e
                })) : $.ajax({
                    url: d.interfaces.pc + a.aid + "/" + "?qyid=" + $.cookie.get("QC006"),
                    dataType: "jsonp",
                    success: function(d) {
                        d.length > 0 && (g = j[f] = d[0][a.aid], e = b.formatNum(g, 1), APP.postMessage("SHOW_CHART_COUNT", {
                            count: e
                        }), c.html(e + ""), c.attr("data-allplaycount", g))
                    }
                })
            }
        },
        formatNum: function(a, b) {
            return a > 1e4 ? a < 1e8 ? (a / 1e4).toFixed(b) + "万": (a / 1e8).toFixed(b) + "亿": APP.$.string.divideNumber(a)
        },
        formatData: function(a, b) {
            if (!a) return;
            b && (a.cast = b.cast, a.albumUrl = b.url, self.templateType == "ALBUM" && b.firstVideo ? a.updateStrategy = b.firstVideo.updateFlag ? "更新" + b.latestOrder + "集全": b.updateStrategy: a.updateStrategy = b.updateStrategy);
            var c = a.cast;
            if (c) {
                c.directors = this.getItem(c.directors, 1, !0),
                c.mainActors = this.getItem(c.mainActors, 4, !0);
                if (c.hosts.length) {
                    var d = c.hosts.length;
                    c.hosts = this.getItem(c.hosts, d, !0)
                }
                c.guests = this.getItem(c.guests, 4, !0)
            }
            return a.categories && (a.categories = this.getItem(a.categories, 6, !1)),
            b && b.list && (a.list = this.getSeriesItem(b.list, !1)),
            a.period && (a.releaseTime = a.period.toString().substring(0, 4)),
            a.issueTime && (a.issueTime = $.date.format(new Date(a.issueTime), "yyyy-MM-dd")),
            a.shortTitle = a.shortTitle || a.subtitle,
            a
        },
        getItem: function(a, b, c) {
            var d = [],
            e = b,
            f = 0,
            g = c ? " " + (k[this.templateType] || "") : "",
            h = "/search.html?key=";
            if (a && a.length) {
                e = a.length < b ? a.length: b;
                for (f = 0; f < e; f++) d.push({
                    name: a[f].name,
                    url: h + a[f].name + g
                })
            }
            return d
        },
        getSeriesItem: function(a) {
            var b = [],
            c = a.length,
            d = 0;
            if (a && a.length) for (d = 0; d < c; d++) b.push({
                name: a[d].title,
                url: a[d].url
            });
            return b
        }
    })
});
define("./service/series", ["../../../common/service/config/config", "../../../common/service/deferredRequest/deferredRequest"],
function(a, b, c) {
    var d = a("../../../common/service/config/config").interfaces,
    e = a("../../../common/service/deferredRequest/deferredRequest"),
    f = {
        NONE_MARK: 0,
        VIP_MARK: 1,
        PAY_ON_DEMAND_MARK: 2,
        COUPONS_ON_DEMAND_MARK: 3
    };
    c.exports = APP.createService({
        getData: function(a) {
            var b = this,
            c = [d.ultraAlbum, a.id, "1/"].join("/");
            return e.jsonp(c, {
                src: "d846d0c32d664d32b6b54ea48997a589"
            }).then(function(b) {
                var c = {
                    title: ""
                },
                d = c.list = [],
                e = c.playList = [],
                g = 0;
                if (b.code === "A00000") {
                    var h = b.data.colls;
                    h.forEach(function(b, c) {
                        var h = b.tvType ? b.tvId === +a.tvId: b.albumId === +a.albumId;
                        h && (g = c);
                        var i = {
                            title: b.contentName,
                            url: b.playUrl,
                            tvId: b.tvId,
                            albumId: b.albumId,
                            vid: b.vid,
                            tvType: b.tvType,
                            isCurrent: h
                        },
                        j = "nomarl";
                        switch (b.payMark) {
                        case f.VIP_MARK:
                            j = "isVip";
                            break;
                        case f.PAY_ON_DEMAND_MARK:
                            j = "isPurchase";
                            break;
                        case f.COUPONS_ON_DEMAND_MARK:
                            j = "isCoupon";
                            break;
                        default:
                            j = b.qiyiProduced ? "isQiyiProduced": b.exclusive ? "isExclusive": ""
                        }
                        i[j] = !0,
                        d.push(i),
                        e.push({
                            tvid: b.tvId,
                            vid: b.vid,
                            url: b.playUrl
                        })
                    }),
                    c.title = b.data.name,
                    c.currentVideoIndex = g
                }
                return c
            })
        }
    })
});
define("./component/upDown", ["../service/upDown"],
function(a, b, c) {
    var d = a("../service/upDown");
    APP.define("page.playMovie.component.upDown", {
        aid: null,
        message: ["REFRESH_VIDEO_INFO"],
        onMessage: function(a, b) {
            a == "REFRESH_VIDEO_INFO" && (b.templateType == "SOURCE" ? this.aid = b.tvid || b.albumId || b.aid: this.aid = b.albumId || b.aid, this.update(this.aid))
        },
        init: function() {
            var a = this;
            this.bind()
        },
        bind: function() {
            var a = this;
            this.nodes.up.on("click",
            function() {
                a.rootElement.attr("data-locker") != "true" ? d.up(a.aid,
                function(b) {
                    b && (a.nodes.up.addClass("selected"), a.rootElement.attr("data-locker", !0), a.nodes.upNum.html(a.nodes.upNum.html() * 1 + 1))
                }) : APP.postMessage("SHOW_VOTE_TIP", a.hasUpDown())
            }),
            this.nodes.down.on("click",
            function() {
                a.rootElement.attr("data-locker") != "true" ? d.down(a.aid,
                function(b) {
                    b && (a.nodes.down.addClass("selected"), a.rootElement.attr("data-locker", !0), a.nodes.downNum.html(a.nodes.downNum.html() * 1 + 1))
                }) : APP.postMessage("SHOW_VOTE_TIP", a.hasUpDown())
            })
        },
        update: function(a) {
            var b = this;
            this.aid = a,
            b.nodes.up.removeClass("selected"),
            b.nodes.down.removeClass("selected"),
            d.showUpDown(a,
            function(a) {
                b.nodes.upNum.html(a.up),
                b.nodes.downNum.html(a.down)
            }),
            d.isUpDown(a,
            function(a) {
                switch (a) {
                case - 1 : b.nodes.down.addClass("selected"),
                    b.rootElement.attr("data-locker", !0);
                    break;
                case 1:
                    b.nodes.up.addClass("selected"),
                    b.rootElement.attr("data-locker", !0);
                    break;
                default:
                    b.rootElement.attr("data-locker", !1)
                }
            })
        },
        hasUpDown: function() {
            return this.nodes.down.hasClass("selected") ? "down": this.nodes.up.hasClass("selected") ? "up": ""
        }
    })
});
define("./service/upDown", ["./upDownService"],
function(a, b, c) {
    var d = a("./upDownService");
    c.exports = APP.createService({
        DEFAULT_NUM: 0,
        isUpDown: function(a, b) {
            d.check(a, $.cookie.get("P00001"), $.cookie.get("QC006"), {
                success: function(a) {
                    a && a.data && b(a.data.action)
                },
                failure: function(a) {
                    b(null)
                }
            })
        },
        showUpDown: function(a, b) {
            d.query(a, {
                success: function(a) {
                    b(a)
                },
                failure: function() {
                    b(DEFAULT_NUM)
                }
            })
        },
        up: function(a, b) {
            d.up(a, $.cookie.get("P00001"), $.cookie.get("QC006"), {
                success: function(a) {
                    b(a.data.action == 1)
                },
                failure: function(a) {
                    b(null)
                }
            })
        },
        down: function(a, b) {
            d.down(a, $.cookie.get("P00001"), $.cookie.get("QC006"), {
                success: function(a) {
                    b(a.data.action == -1)
                },
                failure: function(a) {
                    b(null)
                }
            })
        }
    })
});
define("./service/upDownService", ["../../../common/service/config/config"],
function(a, b, c) {
    var d = console,
    e = a("../../../common/service/config/config"),
    f = function(a, b) {
        var c = a.url,
        d = a.param,
        e = a.method || "GET",
        f = a.timeout || 1e3,
        g = this;
        d = $.extend({
            qyid: APP.$.cookie.get("QC006") || ""
        },
        d || {}),
        $.ajax({
            url: c,
            dataType: "jsonp",
            data: d,
            type: e,
            timeout: f,
            success: function(a) {
                if (b) {
                    a = a || window.ud;
                    if (a.code) {
                        var c = /A\d+/.exec(a.code);
                        c && (a.code = c[0])
                    }
                    b(a)
                }
            },
            error: function(a, c) {
                if (b) {
                    c = window.ud || {
                        code: "E0000"
                    };
                    if (c.code) {
                        var d = /A\d+/.exec(c.code);
                        d && (c.code = d[0])
                    }
                    b(c)
                }
            }
        })
    };
    c.exports = APP.createService({
        up: function(a, b, c, d) {
            var g = {
                type: 1,
                dataid: a,
                action: 1,
                appid: 24
            };
            b && (g.userid = b),
            c && (g.flashuid = c),
            f({
                url: e.interfaces.updown.updown,
                param: g
            },
            d.success, d.failure)
        },
        down: function(a, b, c, d) {
            var g = {
                type: 1,
                dataid: a,
                action: -1,
                appid: 24
            };
            b && (g.userid = b),
            c && (g.flashuid = c),
            f({
                url: e.interfaces.updown.updown,
                param: g
            },
            d.success, d.failure)
        },
        check: function(a, b, c, d) {
            var g = {
                type: 1,
                dataid: a,
                appid: 24
            };
            b && (g.userid = b),
            c && (g.flashuid = c),
            f({
                url: e.interfaces.updown.query_is_updown,
                param: g
            },
            d.success, d.failure)
        },
        query: function(a, b) {
            var c = {
                albumId: a,
                appid: 24
            };
            f({
                url: e.interfaces.updown.query_num,
                param: c
            },
            function(a) {
                a.data && b.success({
                    down: a.data.down,
                    up: a.data.up
                })
            },
            b.failure)
        }
    })
});
define("./component/voteTip", [],
function(a, b, c) {
    var d = 500,
    e = {
        up: "您已顶过",
        down: "您已踩过"
    };
    APP.define("page.playMovie.component.voteTip", {
        message: ["SHOW_VOTE_TIP", "HIDE_VOTE_TIP"],
        onMessage: function(a, b) {
            var c = this;
            a == "SHOW_VOTE_TIP" && (c.showTip(b), setTimeout(function() {
                c.hideTip()
            },
            d)),
            a == "HIDE_VOTE_TIP" && c.hideTip()
        },
        init: function() {
            var a = this
        },
        showTip: function(a) {
            a && this.rootElement.html(e[a] || ""),
            this.rootElement.removeClass("hide")
        },
        hideTip: function() {
            this.rootElement.addClass("hide")
        }
    })
});
define("./component/score", ["../service/score"],
function(a, b, c) {
    var d = a("../service/score"),
    e = ["未打分", "讨厌", "不喜欢", "喜欢", "非常喜欢", "超赞"];
    APP.define("page.playMovie.component.score", {
        message: ["HIDE_SCORE", "UPDATE_SCORE", "HIDE_SCORE_LIST"],
        onMessage: function(a, b) {
            var c = this;
            a == "UPDATE_SCORE" && (c.rootElement.removeClass("hide"), c.getVideoScore(b.aid, $.cookie.get("P00010")), c.aid = b.aid),
            a == "HIDE_SCORE_LIST" && c.hideScoreList(),
            a == "HIDE_SCORE" && c.rootElement.addClass("hide")
        },
        init: function() {
            var a = this;
            a.bind()
        },
        bind: function() {
            var a = this,
            b = this.nodes.heartWrap.find(".c-glyphicon"),
            c = a.nodes.scoreTip;
            b && b.on("click",
            function(f) {
                f.preventDefault(),
                f.stopPropagation();
                var g = b.indexOf(f.currentTarget) + 1;
                a.nodes.heartWrap.attr("class", "heart score-heart-" + g),
                c.html(e[g]);
                var h = {
                    aid: a.aid,
                    score: g
                };
                d.setVideoScore(h,
                function(b) {
                    b.succeed && a.nodes.scoreBtn.html("已打分")
                })
            }),
            $(document.body).on("click",
            function(a) {
                $(a.target).attr("data-rseat") !== "605091_score" && APP.postMessage("HIDE_SCORE_LIST")
            })
        },
        listeners: {
            click: function(a, b, c) {
                c == "scoreBtn" && this.rootElement.toggleClass("selected")
            }
        },
        hideScoreList: function() {
            var a = this.rootElement;
            a.hasClass("selected") && a.removeClass("selected")
        },
        getVideoScore: function(a, b) {
            var c = this,
            f = c.nodes.scoreBtn,
            g = {
                aid: a,
                uid: b
            };
            d.getVideoScore(g,
            function(a) {
                a.score != -1 ? (f.attr("data-is-score", "true"), f.html("已打分"), c.nodes.heartWrap.attr("class", "heart score-heart-" + a.score), c.nodes.scoreTip.html(e[a.score])) : (f.attr("data-is-score", "false"), c.nodes.heartWrap.attr("class", "heart score-heart-0"), c.nodes.scoreTip.html(e[0]))
            })
        }
    })
});
define("./service/score", ["../../../common/service/config/config"],
function(a, b, c) {
    var d = a("../../../common/service/config/config"),
    e = function(a, b) {
        var c = a.url,
        d = a.param,
        e = a.method || "GET",
        f = a.timeout || 1e3,
        g = this;
        d = $.extend({
            qyid: $.cookie.get("QC006") || "",
            authcookie: $.cookie.get("P00001") || ""
        },
        d || {}),
        $.ajax({
            url: c,
            dataType: "jsonp",
            data: d,
            timeout: f,
            success: function(a, c) {
                if (b) {
                    a = a || window.ud;
                    if (a.code) {
                        var d = /A\d+/.exec(a.code);
                        d && (a.code = d[0])
                    }
                    b(a)
                }
            },
            error: function(a, c) {
                if (b) {
                    a = a || window.ud || {
                        code: "E0000"
                    };
                    if (a.code) {
                        var d = /A\d+/.exec(a.code);
                        d && (a.code = d[0])
                    }
                    b(a)
                }
            }
        })
    };
    c.exports = APP.createService({
        getScore: function(a, b, c) {
            var f = {
                qipu_id: a,
                uid: b,
                appid: 24
            };
            e({
                url: d.interfaces.score.getScore,
                param: f
            },
            c.success, c.failure)
        },
        setScore: function(a, b, c) {
            var f = {
                qipu_id: a,
                score: b,
                appid: 24
            };
            e({
                url: d.interfaces.score.setScore,
                param: f
            },
            c.success, c.failure)
        },
        getVideoScore: function(a, b) {
            this.getScore(a.aid, a.uid, {
                success: function(a) { (a.code = "A00000") ? a.data && b({
                        score: a.data[0].score[0]
                    }) : b({
                        score: -1
                    })
                },
                failure: function(a) {
                    b({
                        score: -1
                    })
                }
            })
        },
        setVideoScore: function(a, b) {
            this.setScore(a.aid, a.score, {
                success: function(a) { (a.code = "A00000") ? b({
                        succeed: a.data.succeed
                    }) : b({
                        succeed: !1
                    })
                },
                failure: function(a) {
                    b({
                        succeed: !1
                    })
                }
            })
        }
    })
});
define("./component/chart", ["../service/chart"],
function(a, b, c) {
    var d = a("../service/chart"),
    e = ["爱奇艺、PPS全", "爱奇艺", "PPS"],
    f = {
        mobile: "#56AAEF",
        pc: "#0BBE06"
    },
    g = {
        x: 90,
        y: 90,
        r: 79
    };
    APP.define("page.playMovie.component.chart", {
        message: ["REFRESH_VIDEO_INFO", "SHOW_CHART_COUNT"],
        onMessage: function(a, b) {
            var c = this;
            a == "REFRESH_VIDEO_INFO" && c.getChart(b),
            a == "SHOW_CHART_COUNT" && c.nodes.count.html(b.count)
        },
        init: function() {
            var a = this
        },
        getChart: function(a) {
            var b = this;
            d.getChart({
                tvid: a.tvid,
                aid: a.aid
            },
            {
                success: function(a) {
                    b.draw(a.data, a.data.p == 100 || a.data.m == 100 ? !1 : !0)
                },
                failure: function(a) {
                    b.draw({
                        p: 34,
                        m: 66,
                        f: 2
                    },
                    !0)
                }
            })
        },
        draw: function(a, b) {
            var c = a.p / 100,
            d = a.m / 100,
            g = (a.m * 1.8 < 90 ? 90 - a.m * 1.8 : -(a.m * 1.8 - 90)) / 180 * Math.PI,
            h = this.nodes.chart[0],
            i = -Math.PI / 2;
            this.drawSector(h, i, i + 2 * Math.PI * d, f.mobile, b, g),
            this.drawSector(h, i + 2 * Math.PI * d, 2 * Math.PI + i, f.pc, b, g),
            this.nodes.percentMobile.html(a.m + "%"),
            this.nodes.percentPC.html(a.p + "%");
            var j = a.playComText || "注：数据来自" + e[a.f * 1 - 1] + "平台";
            this.nodes.dataFrom.html(j)
        },
        drawSector: function(a, b, c, d, e, f) {
            b = b || 0,
            a.getContext && (ctx = a.getContext("2d"), ctx.beginPath(), ctx.arc(g.x, g.y, g.r, b + f, c - (e ? .1 : 0) + f), ctx.strokeStyle = d, ctx.lineWidth = 20, ctx.stroke())
        }
    })
});
define("./service/chart", ["../../../common/service/config/config"],
function(a, b, c) {
    var d = a("../../../common/service/config/config");
    c.exports = APP.createService({
        init: function(a) {
            this.playComText = a.playComText
        },
        getChart: function(a, b) {
            var c = this;
            $.ajax({
                url: d.interfaces.platformCount + (a.aid || a.tvid) + "/",
                dataType: "jsonp",
                data: {
                    src: "d846d0c32d664d32b6b54ea48997a589",
                    qyid: $.cookie.get("QC006") || ""
                },
                timeout: 5e3,
                success: function(a) {
                    a.code === "A00000" ? (a.data.playComText = c.playComText, b.success && b.success(a)) : b.failure && b.failure(a)
                },
                error: function(a) {
                    b.failure && b.failure(a)
                }
            })
        }
    })
});
define("./component/subOrAd", ["../../../common/service/utils/videoInfo", "../../../common/service/utils/util"],
function(a, b, c) {
    var d = a("../../../common/service/utils/videoInfo"),
    e = a("../../../common/service/utils/util");
    APP.define("page.playMovie.component.subOrAd", {
        message: ["PLAYER_LOAD_AND_PLAY"],
        onMessage: function(a, b) {
            var c = this;
            a == "PLAYER_LOAD_AND_PLAY" && this.refresh(b)
        },
        init: function() {
            var a = this
        },
        refresh: function(a) {
            var b = this,
            c = {
                tvid: a.tvid,
                vid: a.vid
            };
            d.getVideoInfo(a.tvid, a.vid,
            function(a) {
                a.userId == 0 ? (b.nodes.ad.show(), b.nodes.sub.hide()) : (b.nodes.ad.hide(), b.buildSub(a.user, c))
            })
        },
        buildSub: function(a) {
            var b = +a.verifyState === 4 && +a.copyright !== 2,
            c = b ? this.nodes.subPGCTPL: this.nodes.subUGCTPL;
            b || (a.videoCountFmt = e.formatCount(a.videoCount, 1), a.followerCountFmt = e.formatCount(a.followerCount, 1)),
            a.recommendation = a.recommendation || "爱奇艺爱频道",
            this.nodes.sub.html($.plugins.Mustache.render(c.html(), a)),
            glue.postMessage("REFRESH_SUBSCRIPTION", a.id),
            this.nodes.sub.show(),
            glue.postMessage("SCROLLSHOW_CHECK")
        }
    })
});
define("./component/subscription", ["../../../common/service/pingback/longyuan4_clickpingback", "../../../common/service/user/user", "../service/subscription"],
function(a, b, c) {
    var d = a("../../../common/service/pingback/longyuan4_clickpingback"),
    e = a("../../../common/service/user/user"),
    f = a("../service/subscription");
    APP.define("page.playMovie.component.subscription", {
        message: ["REFRESH_SUBSCRIPTION"],
        onMessage: function(a, b) {
            var c = this;
            a == "REFRESH_SUBSCRIPTION" && this.refresh(b)
        },
        init: function() {
            this.isSubscript = !1,
            this.userid = this.rootElement.attr("data-userId") || "",
            this.userUrl = "",
            this.refresh(this.userid)
        },
        refresh: function(a) {
            var b = this;
            b.updateNodes();
            if (!a || !this.nodes.content || !this.nodes.subBtn || !this.nodes.subBtnTxt) return;
            this.userid = a,
            this.userUrl = this.nodes.content.attr("data-userUrl"),
            this.subType = this.nodes.content.attr("data-subtype") || "",
            a && e.isLogin() ? f.isSubscript(a,
            function(a) {
                b.renderBtn(a)
            }) : b.renderBtn(!1)
        },
        renderBtn: function(a) {
            this.isSubscript = a;
            var b = this.nodes.subBtn;
            a ? (this.nodes.subBtnTxt.html(b.attr("data-subed")), b.find("i").addClass("hide")) : (this.nodes.subBtnTxt.html("订阅"), b.find("i").removeClass("hide")),
            this.bind(b, a)
        },
        linkToUserHome: function() {
            this.userUrl && (location.href = this.userUrl)
        },
        subscribe: function() {
            var a = this;
            f.subscript({
                param: {
                    uids: a.userid
                },
                subType: a.subType
            },
            {
                success: function(b) {
                    a.renderBtn(!0),
                    b.callDialog && APP.postMessage("COMMON_POPUP_SHOW", {
                        title: "订阅成功！",
                        tip: "您可以进入“发现>我的订阅”中查看所有订阅动态",
                        text1: "知道了",
                        text2: "订阅更新",
                        callback1: "close",
                        callback2: "http://m.iqiyi.com/u/sub/"
                    })
                },
                failure: function(b) {
                    var c = a.nodes.subBtn;
                    this.nodes.subBtnTxt.html("订阅失败"),
                    c.find("i").addClass("hide"),
                    setTimeout(function() {
                        a.renderBtn(!1)
                    },
                    2e3)
                }
            })
        },
        unSubscribe: function() {
            var a = this;
            f.unsubscript({
                param: {
                    uids: a.userid
                },
                subType: a.subType
            },
            {
                success: function(b) {
                    a.renderBtn(!1)
                },
                failure: function(b) {
                    var c = a.nodes.subBtn;
                    this.nodes.subBtnTxt.html("取消订阅失败"),
                    c.find("i").addClass("hide"),
                    setTimeout(function() {
                        a.renderBtn(!0)
                    },
                    2e3)
                }
            })
        },
        listeners: {
            click: function(a, b, c) { (c == "userImg" || c == "userInfo") && this.linkToUserHome()
            }
        },
        bind: function(a, b) {
            var c = this;
            a.unbind("click"),
            a.on("click",
            function() {
                e.isLogin() ? b ? (d.send({
                    rseat: "605251_more_space"
                }), c.linkToUserHome()) : (d.send({
                    rseat: "605251_desclk"
                }), c.subscribe()) : location.href = "/user.html"
            })
        }
    })
});
define("./service/subscription", ["../../../common/service/user/user"],
function(a, b, c) {
    var d = a("../../../common/service/user/user"),
    e = APP.createService({
        subscript: function(a, b) {
            var c = "add_friends.action";
            a.param.source = a.param.source || APP.$.os.android ? 5 : 7,
            a.param.types = 1,
            a.param.agent_type = 201,
            $.extend(a.param, this.getLongyuanParam(a.subType)),
            this._send(c, a, {
                success: function(a) {
                    a.callDialog = !0,
                    b.success(a)
                },
                failure: function(a) {
                    b.failure(a)
                }
            })
        },
        unsubscript: function(a, b) {
            var c = "remove_friends.action";
            a.param.source = a.param.source || APP.$.os.android ? 5 : 7,
            a.param.type = 1,
            a.param.agent_type = 201,
            $.extend(a.param, this.getLongyuanParam(a.subType)),
            this._send(c, a, b)
        },
        isSubscript: function(a, b) {
            var c = this;
            d.isLogin() && c.isSubscripted({
                param: {
                    uids: a
                }
            },
            {
                success: function(a) {
                    b(a)
                },
                failure: function(a) {}
            })
        },
        isSubscripted: function(a, b) {
            var c = "are_friends.action";
            this._send(c, a, {
                success: function(a) {
                    a.data && a.data.length != 0 ? b.success(!0) : b.success(!1)
                },
                failure: function(a) {
                    b.failure(a)
                }
            })
        },
        getLongyuanParam: function(a) {
            var b = {};
            return b.p1 = "2_20_201",
            b.dsc_tp = a == "pgc" ? "1": "3",
            b.u = d.getAnonymousUid(),
            b
        },
        _send: function(a, b, c) {
            var d = this.baseUrl + a,
            e = this;
            b.param.authcookie = b.param.authcookie || APP.$.cookie.get("P00001"),
            $.ajax({
                url: d,
                dataType: "jsonp",
                data: b.param,
                type: b.method || "GET",
                timeout: b.timeout || 5e3,
                success: function(a) {
                    c && (a.code == "A00000" ? c.success(a) : c.failure(a))
                },
                error: function(a, b) {
                    c && c.failure({
                        code: "E0000"
                    })
                }
            })
        }
    });
    e.baseUrl = "http://sns.uc.iqiyi.com/apis/friend/",
    c.exports = e
});
define("./component/comment", ["../service/comment", "../../../common/service/cloudControl/comment", "../../../common/service/user/user", "../../../common/service/utils/videoInfo"],
function(a, b, c) {
    var d = a("../service/comment"),
    e = a("../../../common/service/cloudControl/comment"),
    f = a("../../../common/service/user/user"),
    g = a("../../../common/service/utils/videoInfo"),
    h = $.plugins.Mustache,
    i = Q.PageInfo,
    j = function(a) {
        return a.replace(/[^\x00-\xff]/g, "**").length
    };
    APP.define("page.playMovie.component.comment", {
        _lock: !1,
        _page: 1,
        _commentsPerPage: 20,
        _replyPageSize: 3,
        _videoInfo: {},
        _status: {},
        _isOpen: {},
        message: ["SCROLL2BOTTOM_TRIGGER", "PLAYER_LOAD_AND_PLAY", "CLICK_TO_COMMENT_TRIGGER"],
        messageHandlers: {
            CLICK_TO_COMMENT_TRIGGER: function(a) {
                var b = this;
                this._lock ? APP.postMessage("COMMON_SCROLL_TO_ELEMENT", a) : this.steps().done(function() {
                    APP.postMessage("COMMON_SCROLL_TO_ELEMENT", a),
                    b._lock = !0
                })
            },
            SCROLL2BOTTOM_TRIGGER: function() {
                var a = this;
                this._lock || this.steps().done(function() {
                    a._lock = !0
                })
            },
            PLAYER_LOAD_AND_PLAY: function(a) {
                this._videoInfo.tvid = a.tvid,
                this._videoInfo.vid = a.vid,
                this.reset()
            }
        },
        eventHandlers: {
            click: {
                commentTips: function() {
                    var a = this;
                    this.getComments().then(function(b) {
                        return a.renderComments(b)
                    }).then(function(b) {
                        a.afterRender(b)
                    })
                },
                cancel: function() {
                    var a = this.nodes;
                    a.input.val("").blur(),
                    a.inputTips.addClass("hide"),
                    a.currentCount.text(0).removeClass("c-num-tip")
                },
                submit: function() {
                    if (!this.checkLogin()) return;
                    this.unbind();
                    var a = this,
                    b = this._status,
                    c = this.nodes,
                    e = c.input.val();
                    if (j(e) > 280) {
                        this.flashCoverTips("评论最多可写140个字"),
                        this.bind();
                        return
                    }
                    d.submitComment({
                        tvid: this._videoInfo.tvid,
                        qitanid: this._videoInfo.qitanid,
                        cid: this._videoInfo.cid,
                        text: e
                    }).then(function(d) {
                        d.list.length && (b.fakeWriteEnable && f.getUserIcon(function(a) {
                            d.list[0].portrait = a;
                            var b = c.tpl_comment_normal.html(),
                            e = h.render(b, d);
                            c.commentList.prepend(e).removeClass("dn")
                        }), b.auditStrategyEnable ? a.flashCoverTips("评论发布成功") : a.flashCoverTips("评论正在审核，请耐心等待呦~")),
                        c.input.val(""),
                        c.inputTips.addClass("hide"),
                        c.currentCount.text(0).removeClass("c-num-tip"),
                        a.bind()
                    })
                },
                like: function(a) {
                    if (!this.checkLogin()) return;
                    this.unbind();
                    var b = this._videoInfo,
                    c = $(a.target),
                    e = c.attr("data-contentid"),
                    f = this;
                    d.like({
                        contentid: e,
                        aid: b.aid,
                        qitanid: b.qitanId,
                        tvid: b.tvid
                    }).then(function(a) {
                        var b = f.rootElement.find('[data-type="' + e + '"]');
                        if (a.code === "A00000") {
                            var d = +b.text();
                            b.text(++d),
                            c.addClass("selected")
                        } else a.code === "B02001" && (f.flashCoverTips("喜欢过了哦~"), c.addClass("selected"));
                        f.bind()
                    })
                }
            },
            focus: {
                input: function() {
                    this.nodes.inputTips.removeClass("hide"),
                    document.body.addEventListener("touchmove", this, !1)
                }
            },
            blur: {
                input: function() {
                    document.body.removeEventListener("touchmove", this, !1)
                }
            },
            input: {
                input: function() {
                    var a = this.nodes,
                    b = a.input.val(),
                    c = Math.ceil(j(b) / 2);
                    c <= 140 ? a.currentCount.text(c).removeClass("c-num-tip") : a.currentCount.text(c).addClass("c-num-tip")
                }
            },
            touchmove: {
                root: function() {
                    this.nodes.input.blur(),
                    this.nodes.inputTips.addClass("hide")
                }
            }
        },
        init: function() {
            this.bind();
            var a = this.nodes.portrait;
            f.getUserIcon(function(b) {
                a.css("background-image", "url(" + b + ")")
            })
        },
        bind: function() {
            this.rootElement[0].addEventListener("click", this, !1),
            this.nodes.input[0].addEventListener("focus", this, !1),
            this.nodes.input[0].addEventListener("blur", this, !1),
            this.nodes.input[0].addEventListener("input", this, !1)
        },
        unbind: function() {
            this.rootElement[0].removeEventListener("click", this, !1),
            this.nodes.input[0].removeEventListener("focus", this, !1),
            this.nodes.input[0].removeEventListener("blur", this, !1),
            this.nodes.input[0].removeEventListener("input", this, !1)
        },
        onMessage: function(a, b) {
            this.messageHandlers[a] && this.messageHandlers[a].call(this, b)
        },
        checkLogin: function() {
            if (!f.isLogin()) {
                var a = location.protocol,
                b = location.host,
                c = location.pathname,
                d = location.search,
                e = location.hash,
                g = a + "//" + b + c + d + e;
                location.href = "/user.html?redirect_url=" + encodeURIComponent(g)
            }
            return f.isLogin()
        },
        handleEvent: function(a) {
            var b = a.type,
            c = a.target.getAttribute("data-node") || a.target.getAttribute("data-type") || "root";
            this.eventHandlers[b] && this.eventHandlers[b][c] && this.eventHandlers[b][c].call(this, a)
        },
        reset: function() {
            var a = this.nodes;
            a.commentList.html(""),
            a.commentTips.html("查看更多"),
            this._page = 1,
            this._lock = !1,
            this.eventHandlers.click.commentTips = function() {
                var a = this;
                this.getComments().then(function(b) {
                    return a.renderComments(b)
                }).then(function(b) {
                    a.afterRender(b)
                })
            },
            APP.postMessage("SCROLL2BOTTOM_COMPELETE")
        },
        steps: function() {
            var a = this;
            return this.getParams().then(function(b) {
                return a.cloudControl(b)
            }).then(function(b) {
                return a.setControl(b)
            }).then(function(b) {
                return b ? a.getComments() : null
            }).then(function(b) {
                return a.renderComments(b)
            }).then(function(b) {
                a.afterRender(b)
            })
        },
        getParams: function() {
            var a = this,
            b = this._videoInfo;
            return (new $.Deferred(function(c) {
                g.getVideoInfo(b.tvid, b.vid,
                function(b) {
                    var d = a._videoInfo = $.extend(a._videoInfo, {
                        aid: b.aid || b.tvid,
                        qitanid: b.qitanid,
                        cid: b.cid,
                        tvid: b.tvid,
                        sid: b.sid
                    });
                    c.resolve(d)
                })
            })).promise()
        },
        cloudControl: function(a) {
            var a = {
                business: i.pageType == "liveplay" ? "comment_live": "comment",
                is_video_page: i.pageType == "play" || i.pageType == "liveplay",
                tvid: a.tvid,
                albumid: a.sid ? a.sid: a.aid,
                categoryid: a.cid
            },
            b = this;
            return (new $.Deferred(function(c) {
                e.getCommentRule("", a,
                function(a) {
                    b._status = a,
                    c.resolve(a)
                })
            })).promise()
        },
        setControl: function(a) {
            var b = this.nodes,
            c = !0;
            return a.inputBoxEnable ? b.userArea.removeClass("hide") : b.userArea.addClass("hide"),
            a.contentDisplayEnable ? (b.commentTips.text("查看更多").removeClass("dn"), c = !0, this.bind()) : (b.commentTips.text("评论不可使用").removeClass("dn"), c = !1, this.unbind()),
            (new $.Deferred(function(a) {
                a.resolve(c)
            })).promise()
        },
        getComments: function() {
            var a = this,
            b = this._videoInfo,
            c = {
                tvid: b.tvid,
                qitanid: b.qitanid,
                cid: b.cid,
                page: this._page++,
                page_size: this._commentsPerPage,
                dataType: "comment",
                need_reply: !0,
                page_size_reply: this._replyPageSize
            };
            return d.getComments(c).then(function(b) {
                return b.comments.isEnable = a._status.inputBoxEnable,
                b
            })
        },
        renderComments: function(a) {
            var b = !1;
            if (a) {
                var c = a.comments.count,
                d = this.nodes,
                e = d.tpl_comment_normal.html(),
                f = h.render(e, a.comments);
                d.commentList.append(f),
                b = c <= this._commentsPerPage * (this._page - 1)
            }
            return (new $.Deferred(function(a) {
                a.resolve(b)
            })).promise()
        },
        afterRender: function(a) {
            a && this._status.contentDisplayEnable && (this.nodes.commentTips.text("没有更多评论了"), this.eventHandlers.click.commentTips = function() {})
        },
        flashCoverTips: function(a) {
            var b = this;
            this.nodes.coverTips.text(a).fadeIn(100),
            setTimeout(function() {
                b.nodes.coverTips.fadeOut(100)
            },
            2e3)
        },
        renderReplies: function(a, b, c) {
            if (a) {
                var d = a.totalCount || 0,
                e = !1;
                this._status && (e = this._status.inputBoxEnable);
                var f = this.nodes.moreReplyTpl.html(),
                g = h.render(f, {
                    replyList: a.list,
                    isEnable: e
                });
                b.before(g),
                b.attr("data-page", c),
                d -= this._replyPageSize * c,
                d <= 0 && b.addClass("hide")
            }
        },
        initReply: function(a, b, c) {
            var d = this;
            this.nodes.inputTips.addClass("hide");
            if (!this.checkLogin()) return;
            var e = a.data("contentid"),
            g = a.data("replyid"),
            i = g || e;
            if (d._isOpen[i]) return;
            var j = "回复：",
            k;
            g && c ? j = j + "@" + c: (k = "m-comment-form-full", b.next(".reply-info-list").children().length == 0 && (k = "m-comment-form-full m-nocomment-form")),
            d.listenerHandlers.cancel.call(d),
            f.getUserIcon(function(a) {
                var c = h.render(d.nodes.replyTpl.html(), {
                    contentid: e,
                    portrait: a,
                    replyid: g,
                    needClass: k,
                    tip: j
                });
                b.after(c),
                d.updateNodes(),
                d._isOpen[i] = !0
            })
        },
        submitReply: function(a, b) {
            var c = a.data("contentid"),
            e = a.data("replyid"),
            g = this.nodes,
            i = g.replyText.val(),
            k = this._status,
            l = this;
            if (!i || j(i) <= 0) {
                this.flashCoverTips("请输入评论");
                return
            }
            if (j(i) > 280) {
                this.flashCoverTips("评论最多可写140个字");
                return
            }
            e && (i = g.replyText.data("tip") + " " + i),
            d.replyComment({
                contentid: c,
                replyid: e,
                text: i,
                business_type: 0
            }).then(function(a) {
                a.list.length && (k.fakeWriteEnable && f.getUserIcon(function(c) {
                    a.list[0].portrait = c;
                    if (!/^回复(：|\s+)@/g.test(a.list[0].content)) var d = "回复：";
                    a.list[0].replyName = d;
                    var e = g.replyContTpl.html(),
                    f = h.render(e, a);
                    b.prepend(f),
                    b.removeClass("hide"),
                    l.listenerHandlers.cancel.call(l)
                }), k.auditStrategyEnable ? l.flashCoverTips("评论发布成功") : l.flashCoverTips("评论正在审核，请耐心等待呦~"))
            })
        },
        listenerHandlers: {
            openReply: function(a) {
                var b = this,
                c = a.parents(".time-reply");
                b.initReply(a, c)
            },
            otherReply: function(a) {
                var b = this,
                c = a.parents(".reply-info"),
                d = c.find(".c-name").html();
                b.initReply(a, c, d)
            },
            cancel: function() {
                this.nodes.replyForm && (this.nodes.replyForm.remove(), this.updateNodes(), this._isOpen = {})
            },
            mainReply: function(a) {
                var b = a.data("replyid"),
                c = a.closest(".m-comment-form").next(".reply-info-list");
                b && (c = a.closest(".reply-info-list")),
                this.submitReply(a, c)
            },
            replyMore: function(a) {
                var b = a.attr("data-page") || 1,
                c = a.data("contentid"),
                e = this,
                f = {
                    contentid: c,
                    page: ++b,
                    page_size: this._replyPageSize
                };
                d.getReplies(f).then(function(c) {
                    e.renderReplies(c, a, b)
                })
            }
        },
        checkInputNum: function(a) {
            var b = this.nodes,
            c = a.val(),
            d = Math.ceil(j(c) / 2);
            d <= 140 ? b.counts.text(d).removeClass("c-num-tip") : b.counts.text(d).addClass("c-num-tip")
        },
        listeners: {
            click: function(a, b, c) {
                this.listenerHandlers[c] && this.listenerHandlers[c].call(this, b)
            },
            input: function(a, b, c) {
                c == "replyText" && this.checkInputNum(b)
            },
            touchmove: function(a, b, c) {
                this.listenerHandlers.cancel && this.listenerHandlers.cancel.call(this)
            }
        }
    })
});
define("./service/comment", ["../../../common/service/config/config", "../../../common/service/deferredRequest/deferredRequest", "../../../common/service/user/user"],
function(a, b, c) {
    var d = a("../../../common/service/config/config").interfaces.comment,
    e = a("../../../common/service/deferredRequest/deferredRequest"),
    f = a("../../../common/service/user/user"),
    g = f.getAuthcookie() || "",
    h = $.crypto.md5(g),
    i = f.getName(),
    j = f.getUid(),
    k = f.isLogin(),
    l = function(a) {
        var b = +(new Date) / 1e3,
        a = +a,
        c = b - a;
        if (c < 60) return "刚刚";
        if (c < 3600) return [c / 60 >> 0, "分钟前"].join("");
        if (c < 86400) return [c / 3600 >> 0, "小时前"].join("");
        if (c < 2592e3) return [c / 86400 >> 0, "天前"].join("");
        var d = new Date(a * 1e3);
        return [d.getFullYear(), d.getMonth() + 1, d.getDate()].join("-")
    };
    c.exports = APP.createService({
        getComments: function(a) {
            var b = this,
            c = d.getComments,
            f = {
                uri: "/comment/get_video_comments",
                params: {
                    tvid: a.tvid,
                    qitanid: a.qitanid,
                    categoryid: a.cid,
                    page_size: a.page_size || 20,
                    page: a.page || 1,
                    qitan_comment_type: 7,
                    need_total: !0,
                    sort: "add_time"
                }
            },
            i = a.need_reply || !1;
            i && (f.params = $.extend(f.params, {
                need_reply: i,
                page_reply: a.page_reply || 1,
                page_size_reply: a.page_size_reply || 2,
                reply_sort: a.reply_sort || "add_time"
            }));
            var j = {
                uri: "/comment/review/get_review_list",
                params: {
                    aid: a.qitanid,
                    sort: "hot",
                    page_size: 1,
                    page: 1,
                    need_total: 1
                }
            },
            m = {
                uri: "/comment/get_user_simple_info",
                params: {
                    tvid: a.tvid,
                    qitanid: a.qitanid,
                    escape: a.escape || !0
                }
            },
            n = {
                requests: [],
                publicParams: {
                    tvid: a.tvid,
                    qitanid: a.qitanid,
                    usecache: a.usecache || !0,
                    antiCsrf: h
                }
            },
            o = {
                data: "",
                antiCsrf: h,
                authcookie: g,
                t: +(new Date)
            },
            p = a.dataType || "all";
            p === "all" ? n.requests.push(f, j, m) : (/comment/ig.test(p) && n.requests.push(f), /review/ig.test(p) && n.requests.push(j), /userInfo/ig.test(p) && n.requests.push(m));
            var q = a.cmtSortType ? (new $.Deferred(function(b) {
                b.resolve({
                    cmtSortType: a.cmtSortType,
                    reviewSortType: "hot"
                })
            })).promise() : this.getSortType({
                categoryid: a.cid,
                qitanid: a.qitanid
            });
            return q.then(function(a) {
                return f.params.sort = a.cmtSortType,
                j.params.sort = a.reviewSortType,
                o.data = JSON.stringify(n),
                e.jsonp(c, o)
            }).then(function(a) {
                var b = {
                    userInfo: null,
                    comments: null,
                    reviewList: null
                };
                if (a.code === "A00000") {
                    var b = {},
                    c = a.data.$comment$get_user_simple_info,
                    d = a.data.$comment$get_video_comments,
                    e = a.data.$comment$review$get_review_list;
                    if (c && c.code === "A00000") if (k) {
                        var g = c.data.user;
                        b.userInfo = {
                            username: g.uname,
                            userPortrait: g.icon,
                            userid: g.uid
                        }
                    } else b.userInfo = {
                        username: "",
                        userPortrait: "http://www.qiyipic.com/common/fix/passport_images/passport50_male.png",
                        userid: ""
                    };
                    if (d && d.code === "A00000") {
                        var h = [],
                        g = d.data.comments;
                        g.forEach(function(a) {
                            if (a.replyList && a.replyList.length) {
                                var b = [];
                                a.replyList.forEach(function(a) {
                                    if (!/^回复(：|\s+)@/g.test(a.content)) var c = "回复：";
                                    b.push({
                                        uname: a.userInfo.uname,
                                        uicon: a.userInfo.icon,
                                        content: a.content,
                                        time: l(a.addTime),
                                        replyName: c,
                                        replyid: a.id
                                    })
                                })
                            }
                            var c = a.counterList.replies - f.params.page_size_reply;
                            c = c > 0 ? c: 0,
                            h.push({
                                portrait: a.userInfo.icon,
                                username: a.userInfo.uname,
                                date: l(a.addTime),
                                contentid: a.contentId,
                                likeNum: a.counterList.likes,
                                content: a.content,
                                replyList: b || null,
                                replies: c,
                                replyTotal: a.counterList.replies
                            })
                        }),
                        b.comments = {
                            list: h,
                            count: d.data.count
                        }
                    }
                    if (e && e.code === "A00000" && e.data.reviewList) {
                        var g = e.data.reviewList[0];
                        b.reviewList = {
                            username: g.userInfo.uname,
                            date: l(g.addTime),
                            contentid: g.contentId,
                            likeNum: g.counterList.likes,
                            content: g.content,
                            summary: g.reviewSummary,
                            title: g.title,
                            score: g.score
                        }
                    }
                }
                return b
            })
        },
        getSortType: function(a) {
            var b = this,
            c = d.getSortType;
            return a = $.extend({
                type: 7,
                usecache: !0
            },
            a),
            e.jsonp(c, a).then(function(a) {
                var b = {
                    cmtSortType: "add_time",
                    reviewSortType: "hot"
                };
                return a.code === "A00000" && (b.cmtSortType = a.data.base.part[0].sorttype === "time" ? "add_time": a.data.base.part[0].sorttype, b.reviewSortType = a.data.base.part[3].sorttype),
                b
            })
        },
        submitComment: function(a) {
            var b = this,
            c = d.submitComment;
            return a = $.extend({
                qitan_comment_type: 7,
                appid: 24,
                antiCsrf: h,
                authcookie: g
            },
            a),
            e.post(c, a).then(function(a) {
                var b = {
                    list: []
                },
                a = JSON.parse(a);
                if (a.code === "A00000") {
                    var a = a.data;
                    b.list.push({
                        username: i,
                        date: l(a.addTime),
                        contentid: a.contentId,
                        fadeData: !0,
                        content: a.content
                    })
                }
                return b
            })
        },
        replyComment: function(a) {
            var b = d.replyComment;
            return a = $.extend({
                appid: 24,
                authcookie: g
            },
            a),
            e.post(b, a).then(function(b) {
                var c = {
                    list: []
                },
                b = JSON.parse(b);
                if (b.code === "A00000") {
                    var b = b.data;
                    c.list.push({
                        username: i,
                        date: l(b.addTime),
                        contentid: a.contentid,
                        replyid: b.id,
                        fadeData: !0,
                        content: b.content
                    })
                }
                return c
            })
        },
        getReplies: function(a) {
            var b = d.getReplies;
            return a = $.extend({
                page: 1,
                page_size: 2,
                sort: "add_time"
            },
            a),
            e.post(b, a).then(function(a) {
                var b = {
                    list: []
                },
                a = JSON.parse(a);
                if (a.code === "A00000") {
                    var c = a.data.replies;
                    c && c.length && c.forEach(function(a) {
                        var c = a.content.replace(/<[^>]+>/g, "");
                        if (!/^回复(：|\s+)@/g.test(c)) var d = "回复：";
                        b.list.push({
                            replyid: a.id,
                            contentid: a.mainContentId,
                            uname: a.userInfo.uname,
                            uicon: a.userInfo.icon,
                            content: c,
                            time: l(a.addTime),
                            replyName: d
                        })
                    }),
                    b.totalCount = a.data.totalCount
                }
                return b
            })
        },
        like: function(a) {
            var b = this,
            c = d.like;
            return a = $.extend({
                uid: j,
                appid: 24,
                antiCsrf: h
            },
            a),
            e.jsonp(c, a).then(function(a) {
                return a
            })
        }
    })
});
define("./component/series", ["../../../common/service/utils/videoInfo", "../service/series", "../../../common/service/config/config"],
function(a, b, c) {
    var d = a("../../../common/service/utils/videoInfo"),
    e = a("../service/series"),
    f = a("../../../common/service/config/config"),
    g = $.plugins.Mustache;
    APP.define("page.playMovie.component.series", {
        _lock: !1,
        _currentVideoIndex: 0,
        _playList: [],
        _videoInfo: {},
        _templateType: "",
        message: ["PLAYER_LOAD_AND_PLAY"],
        messageHandlers: {
            PLAYER_LOAD_AND_PLAY: function(a) {
                this._videoInfo.tvId = a.tvid,
                this._videoInfo.vid = a.vid,
                this._templateType = a.templateType,
                this.steps()
            }
        },
        init: function() {},
        onMessage: function(a, b) {
            this.messageHandlers[a] && this.messageHandlers[a].call(this, b)
        },
        steps: function() {
            var a = this;
            if (this._lock) return;
            this._lock = !0,
            this.getParams().then(function(b) {
                return b.id ? a.getSeries(b) : null
            }).then(function(b) {
                return a.renderSeries(b)
            }).then(function(b) {
                a.afterRender(b)
            }).fail(function() {
                a._lock = !1
            })
        },
        getParams: function() {
            var a = this,
            b = this._videoInfo;
            return (new $.Deferred(function(c) {
                d.getVideoInfo(b.tvId, b.vid,
                function(b) {
                    var d = a._videoInfo = $.extend(a._videoInfo, {
                        id: b.supId,
                        albumId: b.aid || b.tvid,
                        tvId: b.tvid
                    });
                    c.resolve(d)
                })
            })).promise()
        },
        getSeries: function(a) {
            var b = this;
            return e.getData(a).then(function(a) {
                return b._playList = a.playList,
                b._currentVideoIndex = a.currentVideoIndex,
                {
                    title: a.title,
                    list: a.list
                }
            })
        },
        renderSeries: function(a) {
            var b = this.nodes,
            c = !1;
            if (a && a.list.length) {
                b.title.text(a.title);
                var d = b.tpl_series.html(),
                e = g.render(d, a);
                b.seriesList.append(e),
                this.rootElement.removeClass("hide"),
                c = !0
            } else this.rootElement.addClass("hide");
            return (new $.Deferred(function(a) {
                a.resolve(c)
            })).promise()
        },
        afterRender: function(a) {
            if (a) {
                var b = this.nodes.seriesList.find("li.selected");
                APP.postMessage("HORIZONTALSCROLL_REFRESH", {
                    id: this.id
                }),
                b && b.length && APP.postMessage("HORIZONTALSCROLL_TO_ELEMENT", {
                    id: this.id,
                    element: b[0]
                });
                var c = f.playListOrder.series || 1;
                this._templateType == "MOVIE" && (c = 1);
                var d = {
                    priority: c,
                    id: "seriesList"
                },
                e = this._playList.slice(this._currentVideoIndex + 1);
                d.list = e.map(function(a) {
                    return {
                        url: a.url
                    }
                }),
                APP.postMessage("AUTOCONTINUOUS_ADD_LIST", d)
            }
        }
    })
});
define("./component/recommend", ["../service/recommend", "../../../common/service/utils/videoInfo", "../service/videoInfo", "../../../common/service/pingback/qiyuPingback", "../../../common/service/config/config"],
function(a, b, c) {
    var d = a("../service/recommend"),
    e = a("../../../common/service/utils/videoInfo"),
    f = a("../service/videoInfo"),
    g = new(a("../../../common/service/pingback/qiyuPingback")),
    h = a("../../../common/service/config/config"),
    i = $.plugins.Mustache;
    APP.define("page.playMovie.component.recommend", {
        _lock: !1,
        _playList: [],
        _videoInfo: {},
        _templateType: "",
        message: ["PLAYER_LOAD_AND_PLAY", "SCROLL_TO_RECOMMEND"],
        messageHandlers: {
            PLAYER_LOAD_AND_PLAY: function(a) {
                this._videoInfo.tvid = a.tvid,
                this._videoInfo.vid = a.vid,
                this._templateType = a.templateType,
                this.steps()
            },
            SCROLL_TO_RECOMMEND: function() {
                this.showPingback()
            }
        },
        init: function() {},
        onMessage: function(a, b) {
            this.messageHandlers[a] && this.messageHandlers[a].call(this, b)
        },
        steps: function() {
            var a = this;
            if (this._lock) return;
            this._lock = !0,
            this.getParams().then(function(b) {
                return a.getRecommend(b)
            }).then(function(b) {
                return a.renderRecommend(b)
            }).then(function(b) {
                a.afterRender(b)
            }).fail(function() {
                a._lock = !1
            })
        },
        getParams: function() {
            var a = this,
            b = this._videoInfo;
            return (new $.Deferred(function(c) {
                e.getVideoInfo(b.tvid, b.vid,
                function(d) {
                    b.templateType = f.getVideoTemplateType(d),
                    b.templateType === "SOURCE" && a.nodes.horizontalScroll.removeClass("m-pic-vercital m-pic-vercital-sliding").addClass("m-pic-horizontal m-pic-horizontal-sliding");
                    var e = a._videoInfo = $.extend(a._videoInfo, {
                        tvid: d.tvid,
                        albumId: d.aid || d.tvid,
                        channelId: d.cid,
                        area: "h_bee",
                        entitySource: Q.PageInfo.playInfo.isUGC ? "ugc": "pgc",
                        size: 16
                    });
                    c.resolve(e)
                })
            })).promise()
        },
        getRecommend: function(a) {
            var b = this;
            return d.getData(a).then(function(a) {
                return b._playList = a.playList,
                {
                    list: b.formatData(a.list)
                }
            })
        },
        formatData: function(a) {
            var b = this._videoInfo.templateType;
            return b === "MOVIE" ? a.forEach(function(a) {
                a.movieScore = a.score
            }) : b === "ALBUM" ? a.forEach(function(a) {
                a.updateFlag === 1 ? a.updateInfo = a.latestOrder + "集全": a.updateInfo = "更新至" + a.latestOrder + "集"
            }) : b === "SOURCE" && a.forEach(function(a) {
                a.updateInfo = a.period && a.period.length === 8 ? a.period.slice(0, 4) + "-" + a.period.slice(4, 6) + "-" + a.period.slice(6, 8) + "期": "",
                a.imgUrl = a.imgUrl.replace(".jpg", "_160_90.jpg")
            }),
            a
        },
        renderRecommend: function(a) {
            var b = this.nodes,
            c = !1;
            if (a && a.list.length >= 3) {
                var d = b.tpl_recommend.html(),
                e = i.render(d, a);
                b.recommendList.append(e),
                this.rootElement.removeClass("hide"),
                c = !0
            } else this.rootElement.addClass("hide");
            return (new $.Deferred(function(a) {
                a.resolve(c)
            })).promise()
        },
        afterRender: function(a) {
            if (a) {
                APP.postMessage("HORIZONTALSCROLL_REFRESH", {
                    id: this.id
                });
                var b = h.playListOrder.recommend || 1;
                this._templateType === "MOVIE" && (b = 2);
                var c = {
                    priority: b,
                    list: [{
                        url: this._playList[0].url
                    }]
                };
                APP.postMessage("AUTOCONTINUOUS_ADD_LIST", c);
                var e = d.cache;
                g.init({
                    list: e.mixinVideos,
                    attributes: e.attribute
                }),
                g.render()
            }
        },
        showPingback: function() {
            var a = this._videoInfo;
            g.send({
                usract: "show",
                cid: a.channelId,
                aid: a.albumId
            })
        },
        listeners: {
            click: function(a, b, c) {
                var d = $(a.target);
                d.attr("data-tvid") && g.send({
                    tvid: d.attr("data-tvid"),
                    cid: this._videoInfo.channelId,
                    aid: this._videoInfo.albumId
                },
                function() {
                    window.setTimeout(function() {
                        location.href = d.attr("data-href")
                    },
                    200)
                })
            }
        }
    })
});
define("./service/recommend", ["../../../common/service/config/config", "../../../common/service/deferredRequest/deferredRequest"],
function(a, b, c) {
    var d = a("../../../common/service/config/config").interfaces,
    e = a("../../../common/service/deferredRequest/deferredRequest"),
    f = {},
    g = {
        NONE_MARK: 0,
        VIP_MARK: 1,
        PAY_ON_DEMAND_MARK: 2,
        COUPONS_ON_DEMAND_MARK: 3
    };
    c.exports = APP.createService({
        cache: null,
        getData: function(a) {
            var b = d.mixer;
            a = {
                type: a.type || "video",
                page: a.page || 1,
                size: a.size || 8,
                area: a.area || "h_bee",
                entitySource: a.entitySource || "pgc",
                referenceId: a.tvid,
                channelId: a.channelId,
                albumId: a.albumId
            };
            var c = this;
            return e.jsonp(b, a).then(function(a) {
                c.cache = a;
                var b = {},
                d = b.list = [],
                e = b.playList = [],
                f = a.mixinVideos;
                return f.forEach(function(a) {
                    var b = {
                        imgUrl: a.imageUrl,
                        url: a.url,
                        score: a.score ? ( + a.score).toFixed(1) : "",
                        title: a.sourceId ? a.sourceName || a.name: a.albumName || a.name,
                        tvid: a.tvId,
                        latestOrder: a.latestOrder,
                        updateFlag: a.updateFlag,
                        period: a.period
                    },
                    c = "nomarl";
                    switch (a.payMark) {
                    case g.VIP_MARK:
                        c = "isVip";
                        break;
                    case g.PAY_ON_DEMAND_MARK:
                        c = "isPurchase";
                        break;
                    case g.COUPONS_ON_DEMAND_MARK:
                        c = "isCoupon";
                        break;
                    default:
                        c = a.qiyiProduced ? "isQiyiProduced": a.exclusive ? "isExclusive": ""
                    }
                    b[c] = !0,
                    d.push(b),
                    e.push({
                        tvid: a.tvId,
                        vid: a.vid,
                        url: a.url
                    })
                }),
                b
            })
        }
    })
});
define("./component/soundtrack", ["../service/soundtrack", "../../../common/service/utils/util", "../../../common/service/config/config"],
function(a, b, c) {
    var d = a("../service/soundtrack"),
    e = a("../../../common/service/utils/util"),
    f = a("../../../common/service/config/config"),
    g = {
        MOVIE: "videos",
        ALBUM: "albums"
    },
    h = {
        min: 3,
        max: 8
    };
    APP.define("page.playMovie.component.soundtrack", {
        _lock: !1,
        currentTvid: 0,
        _currentIndex: 0,
        message: ["PLAYER_LOAD_AND_PLAY"],
        onMessage: function(a, b) {
            var c = this;
            a == "PLAYER_LOAD_AND_PLAY" && (this._lock || c.getSound(b), c.currentTvid = b.tvid, c.changeSelected(b.tvid))
        },
        init: function() {
            var a = this
        },
        getSound: function(a) {
            var b = this;
            d.getSound({
                tvid: a.tvid,
                aid: a.aid,
                type: g[a.templateType] || "videos"
            },
            {
                success: function(a) {
                    b._lock = !0;
                    var c = b.format(a);
                    if (c) {
                        b.nodes.soundList.html($.plugins.Mustache.render(b.nodes.soundtrackTPL.html(), c)),
                        b.updateNodes(),
                        b.rootElement.show(),
                        APP.postMessage("HORIZONTALSCROLL_REFRESH", {
                            id: b.id
                        });
                        var d = c.list.map(function(a) {
                            return {
                                tvid: a.id,
                                vid: a.video.vid
                            }
                        });
                        b.autoPlay(d)
                    } else b.rootElement.hide()
                },
                failure: function() {
                    b.rootElement.hide()
                }
            })
        },
        autoPlay: function(a) {
            if (a) {
                var b = {
                    priority: f.playListOrder.soundtrack || 1,
                    list: a,
                    id: "soundtrack"
                };
                APP.postMessage("AUTOCONTINUOUS_ADD_LIST", b),
                this.resetPlayIndex()
            }
        },
        format: function(a) {
            var b = {},
            c = [];
            if (!a || a.length < h.min) return null;
            for (var d = 0; d < a.length && c.length <= h.max; d++) a[d].video.name && (a[d].video.formatCount = e.formatCount(a[d].video.playCount, 0), a[d].video.tvId == this.currentTvid && (a[d].isCurrent = !0), c.push(a[d]));
            return c.length < h.min ? null: (b.list = c, b)
        },
        changeSelected: function(a) {
            var b = this.nodes.soundList,
            c = b.find("[data-tvid='" + a + "']");
            b.find("li").removeClass("selected"),
            c && c.length && c.addClass("selected")
        },
        resetPlayIndex: function() {
            APP.postMessage("AUTOCONTINUOUS_SET_PLAY_INDEX", {
                id: "soundtrack",
                index: this._currentIndex
            })
        },
        listeners: {
            click: function(a, b, c) {
                if (c == "soundPlay") {
                    var d = b.data("tvid"),
                    f = b.data("vid");
                    this._currentIndex = b.index() + 1,
                    APP.postMessage("PLAYER_LOAD_AND_PLAY", {
                        tvid: d,
                        vid: f
                    }),
                    this.resetPlayIndex(),
                    e.scrollTop(0, 0)
                }
            }
        }
    })
});
define("./service/soundtrack", ["../../../common/service/config/config"],
function(a, b, c) {
    var d = a("../../../common/service/config/config"),
    e = {
        videos: "tvid",
        albums: "aid"
    },
    f = function(a, b) {
        $.ajax({
            url: a.url,
            dataType: "jsonp",
            timeout: 5e3,
            success: function(a) {
                b.success && b.success(a)
            },
            error: function(a) {
                b.failure && b.failure()
            }
        })
    };
    c.exports = APP.createService({
        getSound: function(a, b) {
            var c = e[a.type],
            g = d.interfaces.sound + a.type + "/" + a[c] + "/songs";
            f({
                url: g
            },
            b)
        }
    })
});
define("./component/videoAround", ["../../../common/service/utils/videoInfo", "../service/mixerVideos", "../../../common/service/config/config", "../../../common/service/utils/util", "../../../common/service/pingback/qiyuPingback"],
function(a, b, c) {
    var d = a("../../../common/service/utils/videoInfo"),
    e = a("../service/mixerVideos"),
    f = a("../../../common/service/config/config"),
    g = a("../../../common/service/utils/util"),
    h = new(a("../../../common/service/pingback/qiyuPingback"));
    APP.define("page.playMovie.component.VideoAround", {
        _videoInfo: {},
        _lock: !1,
        _playList: [],
        message: ["SCROLL_TO_AROUNDVIDEO", "RENDER_VIDEOAROUND", "VIDEOAROUND_CHANGE_SELECTED"],
        onMessage: function(a, b) {
            a === "SCROLL_TO_AROUNDVIDEO" ? this.showPingback() : a === "RENDER_VIDEOAROUND" ? (this._videoInfo = {
                tvid: b.tvid,
                vid: b.vid
            },
            this._lock ? this.getParams() : this.getVideoAround(), this.changeSelected(b.tvid)) : a === "VIDEOAROUND_CHANGE_SELECTED" && this.changeSelected(b.tvid)
        },
        showPingback: function() {
            var a = this._videoInfo;
            h.send({
                usract: "show",
                cid: a.cid,
                aid: a.aid
            })
        },
        init: function() {
            var a = this
        },
        getParams: function() {
            var a = this,
            b = this._videoInfo,
            c = {
                area: "h_zebra",
                size: 8,
                type: "video"
            };
            return $.Deferred(function(e) {
                d.getVideoInfo(b.tvid, b.vid,
                function(b) {
                    c = $.extend(c, {
                        cid: b.cid,
                        aid: b.aid,
                        tvid: b.tvid,
                        referenceId: b.tvid,
                        albumId: b.aid
                    }),
                    a._videoInfo.aid = b.aid,
                    a._videoInfo.cid = b.cid,
                    e.resolve(c)
                })
            }).promise()
        },
        getVideoAround: function() {
            var a = this;
            a.getParams().then(function(a) {
                return e.getData(a)
            }).then(function(b) {
                a.render(b)
            })
        },
        render: function(a) {
            var b = this,
            c = a.list;
            b._lock = !0;
            if (c && c.length >= 8) {
                var d = $.plugins.Mustache.render(b.nodes.aroundVideoTpl.html(), {
                    list: b.setData(c, 4, 8)
                });
                b.nodes.list.html(d),
                b.rootElement.show(),
                APP.postMessage("HORIZONTALSCROLL_REFRESH", {
                    id: b.id
                }),
                b.autoPlay(c),
                b.pingback(a)
            } else b.rootElement.hide()
        },
        pingback: function(a) {
            h.init({
                list: a.list,
                attributes: a.attributes
            }),
            h.render()
        },
        clickPlay: function(a) {
            var b = a.data("tvid"),
            c = a.data("vid");
            APP.postMessage("PLAYER_LOAD_AND_PLAY", {
                tvid: b,
                vid: c
            });
            var d = this.getPlayIndex(b, c);
            this.resetPlayIndex(d),
            g.scrollTop(0, 0)
        },
        getPlayIndex: function(a, b) {
            var c = this,
            d = this._playList;
            for (var e = 0; e < d.length; e++) {
                var f = d[e];
                if (f.tvid == a && f.vid == b) return e + 1
            }
        },
        resetPlayIndex: function(a) {
            APP.postMessage("AUTOCONTINUOUS_SET_PLAY_INDEX", {
                id: "videoAroundList",
                index: a || 0
            })
        },
        autoPlay: function(a) {
            if (a) {
                var b = this._playList = this.getAutoList(a),
                c = {
                    priority: f.playListOrder.videoAround || 1,
                    list: b,
                    id: "videoAroundList"
                };
                APP.postMessage("AUTOCONTINUOUS_ADD_LIST", c)
            }
        },
        getAutoList: function(a) {
            return a ? a.map(function(a, b) {
                return {
                    tvid: a.tvId,
                    vid: a.vid
                }
            }) : null
        },
        setData: function(a, b, c) {
            var d = [],
            e,
            f = a.length;
            if (!a || f == 0) return null;
            b = b || 1,
            c = c || f,
            f = f > c ? c: f;
            if (b <= 1) return a;
            for (var g = 0; g < f; g++) g % b == 0 ? (e = {},
            e.left = a[g], e.right = []) : (e.right.push(a[g]), g % b == b - 1 && d.push(e)),
            g == f - 1 && g % b != b - 1 && d.push(e);
            return d
        },
        changeSelected: function(a) {
            var b = this.nodes.list,
            c = b.find("[data-tvid='" + a + "']");
            b.find("[glue-type='aroundVideo']").removeClass("selected"),
            c && c.length && c.addClass("selected")
        },
        listeners: {
            click: function(a, b, c) {
                var d = this._videoInfo;
                c == "aroundVideo" && (this.clickPlay(b), h.send({
                    tvid: b.data("tvid"),
                    cid: d.cid,
                    aid: d.aid
                }))
            }
        }
    })
});
define("./service/mixerVideos", ["../../../common/service/deferredRequest/deferredRequest", "../../../common/service/config/config", "../../../common/service/utils/util"],
function(a, b, c) {
    var d = a("../../../common/service/deferredRequest/deferredRequest"),
    e = a("../../../common/service/config/config"),
    f = a("../../../common/service/utils/util");
    c.exports = APP.createService({
        dataChache: null,
        getData: function(a) {
            var b = e.interfaces.mixer;
            params = $.extend(a || {},
            {
                trimUser: !1,
                qyid: $.cookie.get("QC006") || ""
            });
            var c = this;
            return d.jsonp(b, params).then(function(a) {
                c.dataChache = a;
                var b = {},
                d = a.mixinVideos,
                g = a.attribute;
                return d.forEach(function(a) {
                    a.duration = $.date.formatSeconds(a.duration),
                    a.imageUrl = a.imageUrl.replace(".jpg", "_284_160.jpg"),
                    a.name = a.name ? a.name: a.subtitle,
                    a.url = e.addAnchor(e.replaceURL(a.url, {
                        tvid: a.tvId,
                        vid: a.vid
                    }), {
                        anchor: "vfrm=3-2-3005-1"
                    }),
                    a.issueTime = f.formatDate(a.issueTime / 1e3)
                }),
                b.list = d,
                b.attributes = {
                    event_id: g.eventId,
                    bkt: g.bucket,
                    area: g.area
                },
                b
            })
        },
        getVideoCount: function(a) {
            return d.jsonp(e.interfaces.pc + a.aid + "/" + "?qyid=" + $.cookie.get("QC006"), {}).then(function(a) {
                return a.length > 0 ? a: null
            })
        }
    })
});
define("./component/tabMenu", ["../service/albumList", "../../../common/service/storage/storage"],
function(a, b, c) {
    var d = a("../service/albumList"),
    e = a("../../../common/service/storage/storage");
    APP.define("page.playMovie.component.tabMenu", {
        _videoInfo: {},
        message: ["PLAYER_LOAD_AND_PLAY"],
        onMessage: function(a, b) {
            a == "PLAYER_LOAD_AND_PLAY" && b.tvid && b.vid && (this._videoInfo.tvid = b.tvid, this._videoInfo.vid = b.vid)
        },
        init: function() {
            var a = this,
            b = a.nodes;
            a.getData().then(function(c) {
                if (c) {
                    c.updatedNum == c.pn ? b.albumNum.html("共" + c.pn + "集全") : (a.model.total = c, c.pn == 1 && (a.model.totalHide = " ")),
                    b.albumNum.removeClass("hide");
                    var d = c.vlist[0]; ! d.vt || d.vt == "" ? b.tabLabel.hide() : b.tabLabel.show(),
                    a.rootElement.show(),
                    a.initTab()
                } else a.rootElement.hide()
            }),
            this.nodes.selectTip.addClass("hide")
        },
        initTab: function(a) {
            var b = a && a.attr("data-widget-tab-label") || "DIGIT";
            b === "TEXT" && this.closeMask(),
            APP.postMessage("ALBUMMENU_SWICH", {
                labelName: b,
                videoInfo: this._videoInfo
            })
        },
        getData: function() {
            return d.getVideoParams().then(function(a) {
                return d.getAlbumTotal({
                    aid: a.aid,
                    isNoTrailer: !1
                })
            })
        },
        closeMask: function() {},
        listeners: {
            click: function(a, b, c) {
                c == "closeMask" ? this.closeMask() : c == "changeTab" && (b.addClass("selected").siblings().removeClass("selected"), this.initTab(b))
            }
        }
    })
});
define("./service/albumList", ["../../../common/service/config/config", "./albumDataSource", "../../../common/service/deferredRequest/deferredRequest", "../../../common/service/utils/videoInfo"],
function(a, b, c) {
    var d = a("../../../common/service/config/config"),
    e = a("./albumDataSource"),
    f = a("../../../common/service/deferredRequest/deferredRequest"),
    g = a("../../../common/service/utils/videoInfo"),
    h = {},
    i = {},
    j = {},
    k = {},
    l = [10, 30, 50];
    c.exports = APP.createService({
        request: function(a, b) {
            var c = {},
            e = d.interfaces.avlist + a + "/" + 1 + "/";
            return f.jsonp(e, c).then(function(c) {
                if (c.code == "A00000") {
                    var d = c.data,
                    e = d.allNum;
                    return b && (e = d.pt),
                    h[a] = {
                        updatedNum: d.pt,
                        pt: e,
                        pn: d.pm || 1,
                        vlist: d.vlist
                    }
                }
            })
        },
        getGroup: function(a, b) {
            var c = 0,
            d = [],
            e = a / b;
            for (; c < e; c++) d.push({
                from: c * b + 1,
                to: Math.min((c + 1) * b, a),
                index: c
            });
            return d
        },
        getAlbumTotal: function(a) {
            var b = a.aid,
            c = a.isNoTrailer || !1;
            return this.request(b, c)
        },
        getAlbumGroup: function(a) {
            var b = this,
            c = a.aid,
            d = h[c] || 0,
            e = null;
            return a = a || {},
            a.devide = a.devide || {
                devNum: 100,
                sNum: 10,
                bNum: 100,
                maxNum: 600,
                minNum: 200
            },
            h[c] ? $.Deferred(function(d) {
                var e = b.formatGroup(h[c], a.devide.minNum, a.devide.maxNum);
                d.resolve(e)
            }).promise() : b.getAlbumTotal(a).then(function(c) {
                return b.formatGroup(c, a.devide.minNum, a.devide.maxNum)
            })
        },
        formatGroup: function(a, b, c) {
            var d = a.pt || 0,
            e = a.vlist,
            f = null,
            g = this;
            return d <= b ? f = g.getGroup(d, l[0]) : d <= c ? f = g.getGroup(d, l[1]) : f = g.getGroup(d, l[2]),
            {
                code: "A00000",
                data: {
                    total: a,
                    list: f
                }
            }
        },
        getAlbumList: function(a) {
            a = a || {};
            var b = a.aid,
            c = "" + b + "-" + a.from + "-" + a.to,
            d, e = this;
            return j[c] && j[c].length ? $.Deferred(function(a) {
                d = {
                    list: j[c],
                    id: c
                },
                a.resolve(d)
            }).promise() : e.getAlbumData(c, b, a)
        },
        getAlbumData: function(a, b, c) {
            var f = i[b],
            g = {};
            if (!f) {
                e.init({
                    url: d.interfaces.avlist,
                    albumId: b,
                    pageSize: 75
                });
                var h = k[b];
                h && f.copyData(0, h),
                i[b] = a
            }
            return $.Deferred(function(b) {
                e.getData(c.from - 1, c.to - 1,
                function(c) {
                    j[a] = c,
                    g = {
                        list: c,
                        id: a
                    },
                    b.resolve(g)
                })
            }).promise()
        },
        getVideoParams: function() {
            return $.Deferred(function(a) {
                g.getVideoInfo(Q.PageInfo.playInfo.tvid, Q.PageInfo.playInfo.vid,
                function(b) {
                    a.resolve(b)
                })
            }).promise()
        }
    })
});
define("./service/albumDataSource", ["../../../common/service/config/config"],
function(a, b, c) {
    var d = a("../../../common/service/config/config"),
    e = d.interfaces.avlist;
    c.exports = APP.createService({
        init: function(a) {
            this.params = a,
            this.pageSize = a.pageSize || 75,
            this.url = a.url || e,
            this.callback = [],
            this.data = [],
            this.chachePage = {}
        },
        getData: function(a, b, c) {
            if (this.checkData(a, b, !1)) c(this.data.slice(a, b + 1));
            else {
                this.callback.push({
                    from: a,
                    to: b,
                    callback: c
                });
                var d = parseInt(a / this.pageSize, 10) + 1,
                e = parseInt(b / this.pageSize, 10) + 1;
                while (d <= e) this.getPageData(d++)
            }
        },
        getPageData: function(a) {
            var b = this;
            this.chachePage[a] ? b.copyData(b.chachePage[a], !1) : $.ajax({
                url: this.url + this.params.albumId + "/" + a + "/",
                dataType: "jsonp",
                cache: !0,
                data: {
                    qyid: $.cookie.get("QC006") || ""
                },
                type: "GET",
                success: function(c) {
                    if (c.code === "A00000") {
                        c = c.data;
                        var d = c.allNum || c.pt,
                        e = c.pn,
                        f = !0;
                        d = Math.min(d, b.pageSize),
                        d === e && (f = !1),
                        b.copyData(c.vlist, f),
                        b.chachePage[a] = c.vlist
                    } else if (c.code === "A00004") {
                        var g = b.callback;
                        for (var h = 0; h < g.length; h++) g[h] && b.checkData(g[h].from, g[h].to, !0) && (g[h].callback(null), g[h] = null)
                    }
                },
                error: function(a, b) {}
            })
        },
        dataChanged: function(a) {
            var b = this.callback;
            for (var c = 0; c < b.length; c++) b[c] && this.checkData(b[c].from, b[c].to, a) && (b[c].callback(this.data.slice(b[c].from, b[c].to + 1)), b[c] = null)
        },
        checkData: function(a, b, c) {
            return c || this.data[a] && this.data[b]
        },
        copyData: function(a, b) {
            var c = a.length;
            for (var d = 0; d < a.length; d++) {
                var e = a[d].pd - 1;
                this.data[e] = a[d]
            }
            this.dataChanged(b)
        }
    })
});
define("./component/albumList", ["../service/albumList", "../../../common/service/config/config", "../../../common/service/utils/util"],
function(a, b, c) {
    var d = a("../service/albumList"),
    e = a("../../../common/service/config/config"),
    f = a("../../../common/service/utils/util"),
    g = $.plugins.Mustache;
    APP.define("page.playMovie.component.albumList", {
        _curTabIndex: 0,
        _TYPE: "DIGIT",
        albumData: {},
        albumAuto: {},
        _videoInfo: {},
        _albumTpl: {
            DIGIT: "episodeDIGIT",
            TEXT: "episodeTEXT"
        },
        message: ["ALBUMMENU_SWICH", "PLAYER_LOAD_AND_PLAY", "AUTOCONTINUOUS_PLAY_LIST_END"],
        onMessage: function(a, b) {
            this.messageHandlers[a] && this.messageHandlers[a].call(this, b)
        },
        messageHandlers: {
            ALBUMMENU_SWICH: function(a) {
                this._TYPE = a.labelName,
                this._videoInfo = a.videoInfo,
                this.build()
            },
            PLAYER_LOAD_AND_PLAY: function(a) {
                a.tvid && a.vid && (this._videoInfo.tvid = a.tvid, this._videoInfo.vid = a.vid, this.changeSelected(a))
            },
            AUTOCONTINUOUS_PLAY_LIST_END: function(a) {
                var b = this; ++this._curTabIndex,
                a.id === "albumList" && this._curTabIndex < b.groupLen && this.selectTab(this._curTabIndex).then(function(a) {
                    var c = b._videoInfo.autoListId;
                    b.autoContinuous(c),
                    b.setIndexOfContinuous(0)
                })
            }
        },
        init: function() {},
        build: function() {
            var a = this,
            b = 0;
            this._isGroup ? (b = a.getIndex(), a.selectTab(b)) : d.getVideoParams().then(function(b) {
                var c = {
                    isNoTrailer: !1,
                    aid: b.aid
                };
                return a._videoInfo.aid = b.aid,
                a._videoInfo.tvid = b.tvid,
                a.getGroup(c, +b.order || 1)
            }).then(function(c) {
                return a.render(c),
                b = a.getIndex(),
                a.selectTab(b)
            }).then(function() {
                var b = a._videoInfo.autoListId,
                c = a.getPlayIndex(a._videoInfo.tvid, a._videoInfo.vid);
                a.autoContinuous(b),
                a.setIndexOfContinuous(c + 1)
            }),
            this._curTabIndex = b
        },
        getIndex: function() {
            var a = this.nodes.groupTitle.find("span.selected"),
            b = 0;
            return ! a.length || (b = parseInt(a.attr("tab-index"), 10)),
            b
        },
        selectTab: function(a) {
            var b = this.nodes.groupTitle.find("[tab-index='" + a + "']");
            return APP.postMessage("HORIZONTALSCROLL_TO_ELEMENT", {
                id: this.id,
                element: b[0]
            }),
            b.addClass("selected").siblings().removeClass("selected"),
            this.switchTab(b)
        },
        render: function(a) {
            var b = this.nodes;
            if (a) {
                var c = b.groupTpl.html(),
                d = g.render(c, {
                    list: a
                });
                b.groupTitle.html(d),
                APP.postMessage("HORIZONTALSCROLL_REFRESH", {
                    id: this.id
                }),
                this._isGroup = !0
            } else this.rootElement.hide()
        },
        getGroup: function(a, b) {
            var c = this;
            return d.getAlbumGroup(a).then(function(a) {
                var d = a.data.list,
                e = null,
                f = null;
                return c.total = a.data.total,
                c.groupLen = d.length,
                d.forEach(function(a) {
                    e = a.from,
                    f = a.to,
                    b >= e && b <= f && (a.selected = "selected"),
                    a.viewName = a.name = e + "-" + f
                }),
                d
            })
        },
        switchTab: function(a) {
            var b = this,
            c = parseInt(a.attr("from"), 10),
            e = parseInt(a.attr("to"), 10);
            return d.getAlbumList({
                aid: b._videoInfo.aid,
                from: c,
                to: e
            }).then(function(a) {
                if (a) {
                    var c = a.list,
                    d = b._videoInfo.autoListId = a.id;
                    c && c.length && (c = c.filter(function(a) {
                        return a
                    }), b.albumData[d] = c.map(function(a) {
                        return {
                            tvid: a.id,
                            vid: a.vid
                        }
                    }), b.albumAuto[d] = !1),
                    b.subRender(c)
                }
            })
        },
        subRender: function(a) {
            var b = this,
            c = b._albumTpl[b._TYPE],
            d = b.nodes[c];
            a && a.length && (a = b.formatAlbumList(a), b._TYPE == "TEXT" && (a = b.formatText(a))),
            this.nodes.albumlist.html(g.render(d.html(), {
                list: a
            })),
            this.changeSelected(this._videoInfo)
        },
        changeSelected: function(a) {
            var b = this.nodes.albumlist,
            c = b.find("[data-tvid='" + a.tvid + "']");
            c.length == 0 && (c = b.find("[data-vid='" + a.vid + "']")),
            b.find(".album-current.show").removeClass("show").addClass("hide"),
            b.find(".c-album-link.selected").removeClass("selected");
            if (!c || c.length == 0) return;
            c.hasClass("c-album-item") ? c.find(".album-current.hide").removeClass("hide").addClass("show") : c.addClass("selected")
        },
        formatText: function(a) {
            if (a && a.length > 0) return a.forEach(function(a) {
                a.vtitle = a.vt ? a.vt: a.shortTitle
            }),
            a
        },
        formatAlbumList: function(a) {
            var b = this,
            c = null,
            d = null,
            e = b.total.pt,
            f = b.total.pn,
            g = e < f ? !0 : !1;
            return a.forEach(function(a, f) {
                a.id == b._videoInfo.tvid ? (a.selected = "selected", a.playIcon = "show") : (a.selected = "", a.playIcon = "hide"),
                c = a.pds,
                d = a.freeProbation,
                g && a.pd == e && (a.isNew = !0),
                c && c.indexOf("预") != -1 && (a.isFore = !0),
                parseInt(d, 10) === 0 && (a.isPay = !0)
            }),
            a
        },
        autoContinuous: function(a) {
            if (!this.albumAuto[a]) {
                var b = {
                    priority: e.playListOrder.albumList || 1,
                    list: this.albumData[a],
                    id: "albumList"
                };
                APP.postMessage("AUTOCONTINUOUS_ADD_LIST", b),
                this.albumAuto[a] = !0
            }
        },
        setIndexOfContinuous: function(a) {
            APP.postMessage("AUTOCONTINUOUS_SET_PLAY_INDEX", {
                id: "albumList",
                index: a || 0
            })
        },
        clickPlay: function(a, b) {
            APP.postMessage("PLAYER_LOAD_AND_PLAY", {
                tvid: a,
                vid: b
            }),
            f.scrollTop(0, 0)
        },
        getPlayIndex: function(a, b) {
            var c = this._videoInfo.autoListId,
            d = this.albumData[c];
            if (!d || d.length == 0) return - 1;
            for (var e = 0; e < d.length; e++) {
                var f = d[e];
                if (f.tvid == a || f.vid == b) return e
            }
        },
        listeners: {
            click: function(a, b, c) {
                if (c == "play") {
                    var d = b.data("tvid"),
                    e = b.data("vid"),
                    f = b.index() + 1;
                    this.autoContinuous(this._videoInfo.autoListId),
                    this.setIndexOfContinuous(f);
                    var g = this.getIndex();
                    this._curTabIndex != g && (this._curTabIndex = g),
                    this.clickPlay(d, e)
                } else if (c == "switchTab") {
                    var h = b.attr("date"),
                    i = this._videoInfo.aid + "-" + h;
                    i != this._videoInfo.autoListId && (b.addClass("selected").siblings().removeClass("selected"), this.switchTab(b))
                }
            }
        }
    })
});
define("./component/wonderful", ["../../../common/service/utils/videoInfo", "../service/othlist", "../../../common/service/config/config", "../../../common/service/utils/util"],
function(a, b, c) {
    var d = a("../../../common/service/utils/videoInfo"),
    e = a("../service/othlist"),
    f = a("../../../common/service/config/config"),
    g = a("../../../common/service/utils/util"),
    h = {
        min: 3,
        max: 12
    };
    APP.define("page.playMovie.component.wonderful", {
        _playList: [],
        _videoInfo: {},
        _lock: !1,
        message: ["PLAYER_LOAD_AND_PLAY"],
        onMessage: function(a, b) {
            a == "PLAYER_LOAD_AND_PLAY" && b.tvid && b.vid && (this._videoInfo = {
                tvid: b.tvid,
                vid: b.vid
            },
            !this._lock && this.render(), this.changeSelected(b.tvid))
        },
        init: function() {},
        render: function() {
            var a = this;
            this.getOthlist().then(function(b) {
                var c = a.formatData(b);
                if (c) {
                    APP.postMessage("WONDERFUL_DATA_READY");
                    var d = $.plugins.Mustache.render(a.nodes.wonderfulTpl.html(), {
                        list: c
                    });
                    a.nodes.wapper.html(d),
                    a.rootElement.show(),
                    a._lock = !0,
                    APP.postMessage("HORIZONTALSCROLL_REFRESH", {
                        id: a.id
                    }),
                    a.continuePlay(c)
                } else APP.postMessage("WONDERFUL_NO_DATA"),
                a.rootElement.hide()
            },
            function() {
                APP.postMessage("WONDERFUL_NO_DATA"),
                a.rootElement.hide()
            })
        },
        formatData: function(a) {
            var b = [];
            if (!a || a.length < h.min) return null;
            var c = a.length;
            c = c > h.max ? h.max: c;
            for (var d = 0; d < c; d++) {
                var e = a[d];
                e.vtitle = e.vn ? e.vn: e.vt,
                b.push(e)
            }
            return b
        },
        getOthlist: function() {
            return this.getParams().then(function(a) {
                var b = {
                    albumId: a.aid,
                    idType: "album"
                };
                return e.getData(b)
            })
        },
        getParams: function() {
            var a = this._videoInfo;
            return $.Deferred(function(b) {
                d.getVideoInfo(a.tvid, a.vid,
                function(a) {
                    b.resolve(a)
                })
            }).promise()
        },
        continuePlay: function(a) {
            this._playList = a.map(function(a) {
                return {
                    tvid: a.id,
                    vid: a.vid
                }
            });
            var b = {
                priority: f.playListOrder.wonderful || 1,
                list: this._playList,
                id: "wonderfulList"
            };
            APP.postMessage("AUTOCONTINUOUS_ADD_LIST", b)
        },
        changeSelected: function(a) {
            var b = this.nodes.wapper,
            c = b.find("[data-tvid='" + a + "']");
            b.find(".playIcon").addClass("hide"),
            b.find("li").removeClass("selected"),
            c && c.length && (c.addClass("selected"), c.find(".playIcon").removeClass("hide"))
        },
        resetIndex: function(a) {
            APP.postMessage("AUTOCONTINUOUS_SET_PLAY_INDEX", {
                id: "wonderfulList",
                index: a || 0
            })
        },
        listeners: {
            click: function(a, b, c) {
                if (c == "wonderful") {
                    var d = b.data("tvid"),
                    e = b.data("vid"),
                    f = b.index() + 1;
                    this.resetIndex(f),
                    APP.postMessage("PLAYER_LOAD_AND_PLAY", {
                        tvid: d,
                        vid: e
                    }),
                    g.scrollTop(0, 0)
                }
            }
        }
    })
});
define("./service/othlist", ["../../../common/service/deferredRequest/deferredRequest", "../../../common/service/config/config"],
function(a, b, c) {
    var d = a("../../../common/service/deferredRequest/deferredRequest"),
    e = a("../../../common/service/config/config");
    c.exports = APP.createService({
        getData: function(a) {
            var b = e.interfaces.othlist;
            params = $.extend({
                src: "00000021010000000000",
                contentType: "4"
            },
            a || {}),
            params.albumId && params.contentType && (b = b + params.albumId + "/" + params.contentType + "/");
            var c = {
                src: params.src,
                idType: a.idType || ""
            };
            return d.jsonp(b, c).then(function(a) {
                if (a.code == "A00000") {
                    var b = a.data.list;
                    return b.forEach(function(a) {
                        a.timeLength = $.date.formatSeconds(a.timeLength)
                    }),
                    b
                }
            })
        }
    })
});
define("./component/focus", ["../service/videoInfo", "../service/sourceList", "../../../common/service/config/config"],
function(a, b, c) {
    var d = a("../service/videoInfo"),
    e = a("../service/sourceList"),
    f = a("../../../common/service/config/config"),
    g = 0;
    APP.define("page.playMovie.component.focus", {
        sourceId: "",
        message: ["PLAYER_LOAD_AND_PLAY"],
        onMessage: function(a, b) {
            if (a == "PLAYER_LOAD_AND_PLAY") {
                var c = this;
                d.getVideoParams({
                    tvid: b.tvid,
                    vid: b.vid
                }).then(function(a) { ! c.sourceId && a.sid && (c.sourceId = +a.sid),
                    c.sourceId === +a.sid && +a.cType === 1 ? c.refresh(a) : c.resetSelected(b.tvid)
                })
            }
        },
        init: function() {
            var a = this,
            b = {};
            APP.postMessage("HORIZONTALSCROLL_BIND_EVENT", {
                id: a.id,
                type: "scroll",
                callback: a.onScroll
            })
        },
        refresh: function(a) {
            var b = this;
            b.setTitle(a.issueTime),
            b.fullEdition = {
                aid: a.albumId,
                tvid: a.tvId,
                vid: a.vid,
                qipuId: a.qipuId,
                name: a.name || a.subtitle,
                url: a.url
            };
            var c = "";
            if (a.issueTime) {
                var d = a.issueTime + "";
                c = d.indexOf("-") > 0 ? d.replace(/-/g, "") : $.date.format(new Date(a.issueTime), "yyyyMMdd")
            } else c = a.period;
            return e.getSourceTrailers({
                cid: a.channelId,
                sid: a.sourceId,
                sDate: c
            }).then(function(c) {
                if (c && c.length) {
                    var d = b.formatData(c);
                    b.nodes.content.html($.plugins.Mustache.render(b.nodes.focusTPL.html(), {
                        list: d,
                        fullEdition: b.fullEdition
                    })),
                    b.updateNodes(),
                    b.resetSelected(a.tvid),
                    b.rootElement.show(),
                    APP.postMessage("HORIZONTALSCROLL_REFRESH", {
                        id: b.id
                    }),
                    g = b.nodes.fullEdition.width(),
                    b.addContinuousList(d)
                } else b.rootElement.hide(),
                b.addContinuousList([]),
                APP.postMessage("FORCUS_NO_DATA")
            },
            function() {
                b.rootElement.hide(),
                b.addContinuousList([]),
                APP.postMessage("FORCUS_NO_DATA")
            })
        },
        addContinuousList: function(a) {
            var b = {
                priority: f.playListOrder.focus || 1,
                id: "focus"
            };
            b.list = a.map(function(a) {
                return {
                    tvid: a.tvid,
                    vid: a.vid
                }
            }),
            APP.postMessage("AUTOCONTINUOUS_ADD_LIST", b)
        },
        formatData: function(a) {
            if (a && a.length > 0) return a.forEach(function(a) {
                a.tvid = a.tvId,
                a.vtitle = a.shortTitle || a.videoName
            }),
            a
        },
        setTitle: function(a) {
            if (a) {
                var b = $.date.format(new Date(a), "yyyy-MM-dd"),
                c = b ? b + "期": "";
                this.nodes.title.html(c)
            }
        },
        playVideo: function(a) {
            a.addClass("selected").siblings().removeClass("selected");
            var b = this.nodes.content.find("[data-node='focusItem']"),
            c = b.indexOf(a[0]);
            c !== -1 && APP.postMessage("AUTOCONTINUOUS_SET_PLAY_INDEX", {
                id: "focus",
                index: c + 1
            }),
            APP.postMessage("PLAYER_LOAD_AND_PLAY", {
                tvid: a.attr("data-tvid"),
                vid: a.attr("data-vid")
            }),
            setTimeout(function() {
                window.scrollTo(0, 0)
            },
            100)
        },
        listeners: {
            click: function(a, b, c) {
                c == "fullEditionIcon" && (APP.postMessage("HORIZONTALSCROLL_TO", {
                    id: this.id,
                    x: 0
                }), this.nodes.fullEditionIcon.addClass("hide"), this.playVideo(this.nodes.fullEdition)),
                (c == "focusItem" || c == "fullEdition") && this.playVideo(b)
            }
        },
        resetSelected: function(a) {
            var b = this.nodes.content.find("[data-tvid]");
            b.removeClass("selected");
            if (a) {
                var c = this.nodes.content.find("[data-tvid='" + a + "']");
                c && c.length && (c.addClass("selected"), APP.postMessage("HORIZONTALSCROLL_TO_ELEMENT", {
                    id: this.id,
                    element: c[0]
                }))
            }
        },
        onScroll: function(a) {
            a.x < -g ? this.nodes.fullEditionIcon.removeClass("hide") : this.nodes.fullEditionIcon.addClass("hide")
        }
    })
});
define("./service/sourceList", ["../../../common/service/config/config", "../../../common/service/deferredRequest/deferredRequest", "../../../common/service/utils/videoInfo"],
function(a, b, c) {
    var d = a("../../../common/service/config/config"),
    e = a("../../../common/service/deferredRequest/deferredRequest"),
    f = a("../../../common/service/utils/videoInfo"),
    g = {},
    h = {},
    i = {};
    c.exports = APP.createService({
        getSourceDate: function(a) {
            var b = this,
            c = "" + a.cid + "-" + a.sid;
            return g[c] ? $.Deferred(function(a) {
                a.resolve(g[c])
            }).promise() : e.jsonp(d.interfaces.sdate + a.cid + "/" + a.sid + "/", {}).then(function(a) {
                if (a.code == "A00000") {
                    var d = b.formatSourceDate(a);
                    return g[c] = d,
                    d
                }
                return null
            })
        },
        getSource: function(a) {
            var b = this;
            if (typeof a.sDate == "undefined") return;
            var c = "" + a.cid + "-" + a.sid + "-" + a.sDate;
            return h[c] ? $.Deferred(function(a) {
                a.resolve(h[c])
            }).promise() : e.jsonp(d.interfaces.slist + a.cid + "/" + a.sid + "/" + a.sDate + "/", {}).then(function(a) {
                if (a.code == "A00000" && a.data.length > 0) {
                    var d = b.formatSource(a);
                    return h[c] = d,
                    d
                }
                return null
            })
        },
        getSourceTrailers: function(a) {
            var b = this;
            if (typeof a.sDate == "undefined") return;
            var c = "" + a.cid + "-" + a.sid + "-" + a.sDate;
            return i[c] ? $.Deferred(function(a) {
                a.resolve(i[c])
            }).promise() : e.jsonp(d.interfaces.slistTrailers + a.cid + "/" + a.sid + "/" + a.sDate + "/", {}).then(function(a) {
                return a.code == "A00000" && a.data.length > 0 ? i[c] = a.data: null
            })
        },
        getSourceAll: function(a) {
            var b = this,
            c = "" + a.cid + "-" + a.sid;
            return h[c] ? $.Deferred(function(a) {
                a.resolve(h[c])
            }).promise() : e.jsonp(d.interfaces.slist + a.cid + "/" + a.sid + "/", {}).then(function(a) {
                if (a.code == "A00000" && a.data.length > 0) {
                    var d = b.formatSource(a);
                    return h[c] = d,
                    d
                }
                return null
            })
        },
        getVideoCount: function(a) {
            return e.jsonp(d.interfaces.pc + a.aid + "/" + "?qyid=" + $.cookie.get("QC006"), {}).then(function(a) {
                return a.length > 0 ? a: null
            })
        },
        getVideoParams: function(a) {
            return $.Deferred(function(b) {
                f.getVideoInfo(a.tvid, a.vid,
                function(a) {
                    b.resolve(a)
                })
            }).promise()
        },
        formatSourceDate: function(a) {
            var b = [],
            c = [],
            d = null;
            for (var e in a.data) b.push(e);
            b.sort(function(a, b) {
                return b - a
            });
            for (var f = 0,
            g = b.length; f < g; f++) {
                d = a.data[b[f]];
                for (var h = d.length - 1; h > -1; h--) c.push(b[f] + d[h])
            }
            var i = {
                list: c
            };
            return i
        },
        formatSource: function(a) {
            var b = [];
            for (var c = 0,
            d = a.data.length; c < d; c++) {
                var e = a.data[c],
                f = e.tvId == e.tvQipuId ? e.tvId: e.tvQipuId;
                b.push({
                    aId: e.aId,
                    aName: e.shortTitle || e.videoName,
                    duration: e.timeLength,
                    pubtime: e.tvYear,
                    tvId: f,
                    vid: e.vid,
                    isVip: e.isPur == 2,
                    videoURL: e.vUrl,
                    vpic: e.tvPicUrl
                })
            }
            var g = {
                list: b
            };
            return g
        }
    })
});
define("./component/sourceList", ["../service/sourceList", "../service/videoInfo", "../../../common/service/config/config", "../../../common/service/iscroll/iscroll-probe-compress"],
function(a, b, c) {
    var d = a("../service/sourceList"),
    e = a("../service/videoInfo"),
    f = a("../../../common/service/config/config"),
    g = a("../../../common/service/iscroll/iscroll-probe-compress"),
    h = null;
    APP.define("page.playMovie.component.sourceList", {
        _curTabIndex: 0,
        _firstScrollEnd: !1,
        _isFirstBuild: !0,
        _curListDate: "",
        message: ["PLAYER_LOAD_AND_PLAY", "AUTOCONTINUOUS_PLAY_LIST_END"],
        onMessage: function(a, b) {
            var c = this;
            if (a === "PLAYER_LOAD_AND_PLAY") {
                var d = {
                    tvid: b.tvid,
                    vid: b.vid
                };
                this._isFirstBuild ? (this.build(d), this._isFirstBuild = !1) : this.resetSelected(d)
            } else if (a === "AUTOCONTINUOUS_PLAY_LIST_END" && b.id === "sourceList") {
                var e = this.nodes.slider.find("[data-index='" + this._curTabIndex + "']").next();
                e && e.attr("date") && (++this._curTabIndex, APP.postMessage("AUTOCONTINUOUS_PLAY_STOP"), this.addContinuousList(e.attr("date")).then(function() {
                    c.setIndexOfContinuousList(0),
                    APP.postMessage("AUTOCONTINUOUS_PLAY_NEXT")
                }))
            }
        },
        init: function() {
            var a = this;
            a.videoInfo = {}
        },
        build: function(a) {
            var b = this;
            d.getVideoParams(a).then(function(a) {
                b.setVideoInfo(a),
                b.rootElement.show()
            }).then(function() {
                return b.getSourceDate()
            }).then(function(a) {
                if (a) {
                    b.setLatestDate();
                    var c = $.extend({},
                    b.videoInfo, {
                        sDate: b.videoInfo.period.slice(0, 6)
                    });
                    return b.getSource(c)
                }
                return b.rootElement.hide(),
                !1
            }).then(function() {
                setTimeout(function() {
                    var a = b.videoInfo.period.slice(0, 6);
                    b.addContinuousList(a).then(function(a) {
                        if (a) {
                            var c = -1;
                            a.forEach(function(a, d) {
                                if (a.tvId === b.videoInfo.tvid || a.vid === b.videoInfo.vid) c = d
                            }),
                            b.setIndexOfContinuousList(c + 1)
                        }
                    })
                },
                1e3)
            })
        },
        getSourceDate: function() {
            var a = this,
            b = {
                cid: a.videoInfo.cid,
                sid: a.videoInfo.sid
            };
            return d.getSourceDate(b).then(function(b) {
                if (!b) return ! 1;
                var c = [],
                d = {},
                e = 0,
                f = 0,
                g = a.videoInfo.period.slice(0, 6);
                return b && b.list.forEach(function(a) {
                    d[a] = e;
                    var b = {
                        date: a,
                        month: a.substring(4, 6),
                        index: e++
                    };
                    a == g ? (b.selected = "selected", f = e - 1) : b.selected = "",
                    c.push(b)
                }),
                a._curTabIndex = +f,
                a.nodes.dateBar.html($.plugins.Mustache.render(a.nodes.dateBarTpl.html(), {
                    dateList: c
                })),
                a.updateNodes(),
                a.initScrollBar(b.list.length),
                a.model.year = g.slice(0, 4) + "年",
                !0
            })
        },
        getSource: function(a) {
            var b = this;
            return d.getSource(a).then(function(a) {
                if (!a) return null;
                if (a && a.list) {
                    var b = a.list,
                    c = [];
                    return b.forEach(function(a) {
                        c.push(a.aId)
                    }),
                    {
                        list: b,
                        aids: c
                    }
                }
            }).then(function(a) {
                if (a) return b.getVideoCount(a);
                b.nodes.itemList.html($.plugins.Mustache.render(b.nodes.itemListTpl.html(), {
                    list: null
                }))
            })
        },
        getVideoCount: function(a) {
            var b = this,
            c = a.list,
            e = a.aids,
            f = this.videoInfo.tvid,
            g = this.videoInfo.vid,
            h = {},
            i = {
                aid: a.aids.join(",")
            };
            return d.getVideoCount(i).then(function(a) {
                var d = null;
                for (var i = 0,
                j = e.length; i < j; i++) d = e[i],
                h[d] = a[i][d];
                var k = null;
                c.forEach(function(a, c) {
                    k = a.pubtime,
                    k && (a.ty = (k + "").substring(0, 7)),
                    a.tvId == f || a.vid == g ? a.selected = "selected": a.selected = "",
                    a.playCount = b.formatNum(h[a.aId] || 0, 1),
                    b.formatList(a)
                }),
                b.nodes.itemList.html($.plugins.Mustache.render(b.nodes.itemListTpl.html(), {
                    list: c
                })),
                b.updateNodes()
            })
        },
        resetSelected: function(a) {
            var b = this,
            c = {
                tvid: a.tvid,
                vid: a.vid
            };
            d.getVideoParams(c).then(function(a) {
                var d = !1,
                e = c.tvid,
                f = c.vid,
                g = b.nodes.itemList.find("[glue-node='item']");
                g.removeClass("selected");
                for (var h = 0; h < g.length; h++) {
                    var i = $(g[h]);
                    if (i.attr("data-tvid") == e || i.attr("data-vid") == f) {
                        i.addClass("selected"),
                        b.setVideoInfo(a),
                        d = !0;
                        break
                    }
                }
                if (!d && b.videoInfo.sid === a.sid && a.cType === 1) {
                    var j = (a.period + "").slice(0, 6),
                    k = b.nodes.slider.find(".c-tab-item");
                    for (var l = 0; l < k.length; l++) {
                        var m = k[l];
                        $(m).attr("date") == j && (b.setVideoInfo(a), b.onMonthClick($(m)))
                    }
                }
            })
        },
        setVideoInfo: function(a) {
            this.videoInfo = {
                cid: +a.cid || "",
                sid: +a.sid || "",
                tvid: +a.tvid || "",
                vid: a.vid || "",
                period: a.period + ""
            }
        },
        setLatestDate: function() {
            var a = this;
            d.getVideoParams({
                tvid: a.videoInfo.tvid,
                vid: a.videoInfo.vid
            }).then(function(b) {
                e.getAlbumOrSourceInfo({
                    id: b.sourceId
                }).then(function(b) {
                    if (b && b.latestVideo) {
                        var c = b.latestVideo.period;
                        if (c && c.length >= 8) {
                            var d = c.slice(4, 6) + "-" + c.slice(6, 8);
                            a.model.currentDate = ""
                        }
                    }
                })
            })
        },
        formatList: function(a) {
            a.url = f.replaceURL(a.videoURL, {
                tvid: a.tvId,
                vid: a.vid
            }),
            a._subTitle = a.aName || a.subName,
            a._timeLength = $.date.formatSeconds(a.duration),
            a.picUrl = a.vpic.replace(".jpg", "_160_90.jpg")
        },
        listeners: {
            click: function(a, b, c) {
                var d = this;
                c === "month" && this.onMonthClick(b);
                if (c === "item") {
                    var e = this.nodes.itemList.find("[glue-node='item']"),
                    f = e.indexOf(b[0]),
                    g = this.nodes.slider.find(".c-tab-item.selected"),
                    h = g.attr("date");
                    h && this._curListDate !== h ? (this._curTabIndex = +g.attr("data-index"), this.addContinuousList(h).then(function() {
                        d.setIndexOfContinuousList(f + 1)
                    })) : this.setIndexOfContinuousList(f + 1);
                    var i = {
                        tvid: b.attr("data-tvid"),
                        vid: b.attr("data-vid")
                    };
                    APP.postMessage("PLAYER_LOAD_AND_PLAY", i),
                    setTimeout(function() {
                        window.scrollTo(0, 0)
                    },
                    100)
                }
            }
        },
        onMonthClick: function(a) {
            var b = a.attr("date");
            this.model.year = b.slice(0, 4) + "年";
            var c = $.extend({},
            this.videoInfo, {
                sDate: b
            });
            this.getSource(c),
            a.addClass("selected").siblings().removeClass("selected")
        },
        initScrollBar: function(a) {
            var b = this,
            c = this.nodes.slider,
            d = c.find(".c-tab-item"),
            e = $(c.children()[0]),
            f = e.width() / a;
            h = new g(c[0], {
                scrollX: !0,
                scrollY: !1,
                click: !0,
                eventPassthrough: !0,
                probeType: 3
            });
            var i = c.find(".c-tab-item.selected");
            i.length > 0 && h.scrollToElement(i[0]),
            h.on("scrollEnd",
            function() {
                b._firstScrollEnd || (this.on("scroll",
                function() {
                    var a = this.x < 0 ? Math.floor(Math.abs(this.x) / f) : 0;
                    b.model.year = $(d[a]).attr("date").slice(0, 4) + "年"
                }), b._firstScrollEnd = !0)
            })
        },
        addContinuousList: function(a) {
            var b = this;
            this._curListDate = a;
            var c = [],
            e = {
                cid: this.videoInfo.cid,
                sid: this.videoInfo.sid,
                sDate: a
            };
            return d.getSource(e).then(function(a) {
                if (a && a.list) {
                    c = a.list;
                    var b = {
                        priority: f.playListOrder.sourceList || 1,
                        id: "sourceList"
                    };
                    return b.list = c.map(function(a) {
                        return {
                            tvid: a.tvId,
                            vid: a.vid
                        }
                    }),
                    APP.postMessage("AUTOCONTINUOUS_ADD_LIST", b),
                    c
                }
            })
        },
        setIndexOfContinuousList: function(a) {
            APP.postMessage("AUTOCONTINUOUS_SET_PLAY_INDEX", {
                id: "sourceList",
                index: a
            })
        },
        resetContinuousPlayIndex: function(a) {
            APP.postMessage("AUTOCONTINUOUS_SET_PLAY_INDEX", {
                id: "sourceList",
                index: a || 0
            })
        },
        formatNum: function(a, b) {
            return a > 1e4 ? a < 1e8 ? (a / 1e4).toFixed(b) + "万": (a / 1e8).toFixed(b) + "亿": APP.$.string.divideNumber(a)
        }
    })
});
define("./component/pk", ["../service/pk", "../service/videoInfo", "../../../common/service/storage/storage", "../../../common/service/utils/util"],
function(a, b, c) {
    var d = a("../service/pk"),
    e = a("../service/videoInfo"),
    f = a("../../../common/service/storage/storage"),
    g = a("../../../common/service/utils/util"),
    h = "h5_pk_add_date",
    i = {};
    APP.define("page.playMovie.component.pk", {
        message: ["PLAYER_LOAD_AND_PLAY"],
        onMessage: function(a, b) {
            var c = this;
            a === "PLAYER_LOAD_AND_PLAY" && e.getVideoParams({
                tvid: b.tvid,
                vid: b.vid
            }).then(function(a) {
                var b = a.votes,
                d = a.voteId || ""; ! d && b && b.length && b.forEach(function(a) {
                    a.type === 2 && (d = a.id)
                }),
                c.refresh(d)
            })
        },
        refresh: function(a) {
            var b = this.rootElement;
            a ? (b.attr("data-voteId", a), this.build(), b.show()) : b.hide()
        },
        build: function() {
            this.data = {},
            this.eles = {};
            var a = this,
            b = a.rootElement.attr("data-voteId"),
            c = $("#tpl_voteTpl");
            b && d.getVoteInfo({
                voteId: b,
                onsuccess: function(d) {
                    a.render(d, c.html());
                    var e = d.options[0].userCouldJoinTimes * d.options[1].userCouldJoinTimes;
                    i = JSON.parse(f.read(h) || "{}") || {};
                    var j = i[b] || 0,
                    k = !j || e && g.getDateDiff(j, Date.now()) >= 1;
                    $.extend(a.data, {
                        voteId: b,
                        showNumTotal: +d.showJoinTimes,
                        showNumLeft: +d.options[0].showNum,
                        showNumRight: +d.options[1].showNum
                    }),
                    $.extend(a.eles, {
                        btns: a.rootElement.find('[data-node="btn"]'),
                        showNumEles: a.rootElement.find('[data-node="showNum"]'),
                        totalEle: a.rootElement.find('[data-node="total"]'),
                        canvas: a.rootElement.find('[data-node="canvas"]')[0],
                        plusEles: a.rootElement.find('[data-node="plus"]')
                    }),
                    a.draw(a.data.showNumLeft, a.data.showNumRight),
                    a.refreshHotNum(a.data.showNumLeft, a.data.showNumRight, a.data.showNumTotal),
                    k ? a.bind() : a.disableVote(),
                    a.show()
                },
                onerror: function() {
                    a.hide()
                }
            })
        },
        show: function() {
            var a = this.rootElement.parent('[data-block="pk"]');
            a.length && a.show(),
            this.rootElement.show()
        },
        hide: function() {
            var a = this.rootElement.parent('[data-block="pk"]');
            a.length && a.hide(),
            this.rootElement.hide()
        },
        render: function(a, b) {
            this.rootElement.html($.plugins.Mustache.render(b, a))
        },
        bind: function() {
            var a = this;
            this.eles.btns.one("click",
            function(b) {
                var c = b.target,
                d = a.data.voteId,
                e = c.getAttribute("data-oid") || c.parentNode.getAttribute("data-oid"),
                f = c.getAttribute("data-type") || c.parentNode.getAttribute("data-type");
                a.vote({
                    voteId: d,
                    oid: e,
                    type: f
                })
            })
        },
        disableVote: function() {
            this.eles.btns.addClass("disabled").removeAttr("data-rseat")
        },
        vote: function(a) {
            var b = this;
            d.joinVote({
                voteId: a.voteId,
                oid: a.oid,
                onsuccess: function() {
                    switch (a.type) {
                    case "left":
                        ++b.data.showNumLeft,
                        $(b.eles.plusEles[0]).addClass("active");
                        break;
                    case "right":
                        ++b.data.showNumRight,
                        $(b.eles.plusEles[1]).addClass("active");
                        break;
                    default:
                    }++b.data.showNumTotal,
                    b.draw(b.data.showNumLeft, b.data.showNumRight),
                    b.refreshHotNum(b.data.showNumLeft, b.data.showNumRight, b.data.showNumTotal),
                    b.disableVote(),
                    i[a.voteId] = Date.now(),
                    f.write(h, JSON.stringify(i)),
                    b.eles.btns.off("click")
                },
                onerror: function(a) {
                    b.disableVote()
                }
            })
        },
        draw: function(a, b) {
            var c = this,
            d = c.eles.canvas;
            if (d.getContext) {
                var e = d.getContext("2d"),
                f = Math.PI,
                g = d.width / 2,
                h = d.height / 2,
                i = 92,
                j = function(a, b, c, d) {
                    e.beginPath(),
                    e.strokeStyle = a,
                    e.arc(g, h, i, b, c, d),
                    e.stroke()
                },
                k = -f / 2,
                l = 2 * f * (b / (a + b)) - f / 2,
                m = f / 135;
                d.width = d.width,
                e.lineWidth = 16,
                a === 0 ? b === 0 ? j("#ccc", k, 1.5 * f, !1) : j("#fe6e27", k, 1.5 * f, !1) : b === 0 ? j("#699f00", k, 1.5 * f, !1) : j("#fe6e27", k + m, l - m, !1) || j("#699f00", k - m, l + m, !0)
            }
        },
        formatNumber: function(a) {
            var b = /(\d{1,3})(?=(\d{3})+(?:$|\.))/g,
            c = +a,
            d = "";
            return a < 1e4 || (a < 1e8 - 500 ? (c /= 1e4, d = "万") : (c /= 1e8, d = "亿")),
            c = c.toFixed(1).replace(b, "$1,"),
            [c.replace(/\.0$/g, ""), d].join("")
        },
        refreshHotNum: function(a, b, c) {
            $(this.eles.showNumEles[0]).text(this.formatNumber(a)),
            $(this.eles.showNumEles[1]).text(this.formatNumber(b)),
            this.eles.totalEle.text(this.formatNumber(c))
        }
    })
});
define("./service/pk", ["../../../common/service/config/config"],
function(a, b, c) {
    var d = a("../../../common/service/config/config").interfaces.runningVote;
    c.exports = APP.createService({
        _config: {
            appid: $.os.phone ? $.os.ios ? 1 : 4 : $.os.tablet ? $.os.ios ? 2 : 5 : 0,
            openudid: $.cookie.get("P00002") ? "": $.cookie.get("QC005") || $.cookie.get("QC006"),
            uid: $.cookie.get("P00002") ? JSON.parse($.cookie.get("P00002")).uid: "",
            resType: 0,
            num: 1
        },
        setConfig: function() {
            $.extend(this._config, {
                openudid: $.cookie.get("P00002") ? "": $.cookie.get("QC005") || $.cookie.get("QC006"),
                uid: $.cookie.get("P00002") ? JSON.parse($.cookie.get("P00002")).uid: ""
            })
        },
        getVoteInfo: function(a) {
            this.setConfig();
            var b = this._config;
            $.ajax({
                url: d.getInfo,
                dataType: "jsonp",
                data: {
                    vids: a.voteId,
                    appid: b.appid,
                    openudid: b.openudid,
                    uid: b.uid
                },
                type: a.method || "GET",
                timeout: a.timeout || 5e3,
                success: function(b) {
                    if (b.code == "A00000") {
                        var c = b.data[0],
                        d = c.childs[0],
                        e = c.endTime * 1e3,
                        f = c.showJoinTimes,
                        g = d.options,
                        h = +(new Date) < e ? !1 : !0;
                        g.map(function(a, b) {
                            a._index_ = b
                        }),
                        b = {},
                        $.extend(b, {
                            options: g,
                            title: d.title,
                            isOver: h,
                            showJoinTimes: f
                        }),
                        a.onsuccess && a.onsuccess(b)
                    } else a.onerror && a.onerror()
                },
                error: function(b) {
                    a.onerror && a.onerror()
                }
            })
        },
        joinVote: function(a) {
            this.setConfig();
            var b = this._config,
            c = {};
            c[a.voteId] = [a.oid.toString()],
            $.ajax({
                url: d.vote,
                dataType: "jsonp",
                data: {
                    vid: a.voteId,
                    options: JSON.stringify(c),
                    resType: b.resType,
                    openudid: b.openudid,
                    num: b.num,
                    appid: b.appid
                },
                type: a.method || "GET",
                timeout: a.timeout || 5e3,
                success: function(b) {
                    b.code == "A00000" ? a.onsuccess && a.onsuccess() : a.onerror && a.onerror(b.msg)
                },
                error: function(a) {}
            })
        }
    })
});
define("./component/playList", ["../../../common/service/utils/videoInfo", "../service/mixerVideos", "../../../common/service/config/config", "../../../common/service/utils/util", "../../../common/service/useragent/detect", "../../../common/service/pingback/qiyuPingback"],
function(a, b, c) {
    var d = a("../../../common/service/utils/videoInfo"),
    e = a("../service/mixerVideos"),
    f = a("../../../common/service/config/config"),
    g = a("../../../common/service/utils/util"),
    h = a("../../../common/service/useragent/detect"),
    i = new(a("../../../common/service/pingback/qiyuPingback"));
    APP.define("page.playMovie.component.playList", {
        _firstBuild: !0,
        _playList: [],
        _videoInfo: {},
        message: ["PLAYER_LOAD_AND_PLAY", "SCROLL_TO_PLAYLIST"],
        onMessage: function(a, b) {
            a == "PLAYER_LOAD_AND_PLAY" && b.tvid && b.vid && (this._videoInfo.tvid = b.tvid, this._videoInfo.vid = b.vid, this._firstBuild && this.render(), this.rootElement.find("[data-tvid='" + b.tvid + "']").addClass("selected").siblings().removeClass("selected")),
            a === "SCROLL_TO_PLAYLIST" && this.sendPingback()
        },
        init: function() {
            var a = this
        },
        render: function() {
            var a = this;
            a.getParams().then(function(b) {
                return a.getPlayList(b)
            }).then(function(b) {
                if (b && b.length > 0) {
                    var c = $.plugins.Mustache.render(a.nodes.shortPlayTpl.html(), {
                        list: b
                    });
                    a.nodes.playList.html(c),
                    a.rootElement.show(),
                    flag = !0
                } else a.rootElement.hide();
                return flag
            }).then(function(b) {
                a._firstBuild = !1,
                a.afterRender(b),
                APP.postMessage("SCROLLSHOW_CHECK")
            })
        },
        getParams: function() {
            var a = this,
            b = this._videoInfo,
            c = {
                area: "h_swan",
                size: 15,
                type: "video"
            };
            return $.Deferred(function(e) {
                d.getVideoInfo(b.tvid, b.vid,
                function(b) {
                    c = $.extend(c, {
                        tvid: b.tvid,
                        referenceId: b.tvid,
                        albumId: b.aid,
                        cookieId: b.userId,
                        channelId: b.cid
                    }),
                    a._videoInfo.aid = b.aid,
                    a._videoInfo.cid = b.cid,
                    e.resolve(c)
                })
            }).promise()
        },
        getPlayList: function(a) {
            var b = this,
            c = h.weixin;
            return e.getData(a).then(function(a) {
                var d = a.list,
                e = [];
                return d.forEach(function(a, b) {
                    b == 0 && !c && (a.selected = "m-toplist-borderT"),
                    e.push(a.albumId)
                }),
                b._playList = d.map(function(a) {
                    return {
                        tvid: a.tvId,
                        vid: a.vid
                    }
                }),
                {
                    list: d,
                    aids: e
                }
            }).then(function(a) {
                return b.getVideoCount(a)
            })
        },
        getVideoCount: function(a) {
            var b = {
                aid: a.aids.join(",")
            },
            c = a.aids,
            d = {},
            f = a.list;
            return e.getVideoCount(b).then(function(a) {
                for (var b = 0,
                e = c.length; b < e; b++) aid = c[b],
                d[aid] = a[b][aid];
                return f.forEach(function(a, b) {
                    a.playCount = g.formatCount(d[a.albumId], 1)
                }),
                f
            })
        },
        afterRender: function(a) {
            if (a) {
                var b = {
                    priority: f.playListOrder.playList || 1,
                    list: this._playList,
                    id: "playList"
                };
                APP.postMessage("AUTOCONTINUOUS_ADD_LIST", b),
                this.pingback(e.dataChache)
            }
        },
        resetPlayIndex: function(a) {
            APP.postMessage("AUTOCONTINUOUS_SET_PLAY_INDEX", {
                id: "playList",
                index: a || 0
            })
        },
        pingback: function(a) {
            i.init({
                list: a.mixinVideos,
                attributes: a.attribute
            }),
            i.render()
        },
        sendPingback: function(a) {
            var b = this._videoInfo,
            c = {
                cid: b.cid,
                aid: b.aid
            };
            c = a ? $.extend(c, {
                tvid: a.data("tvid")
            }) : $.extend(c, {
                usract: "show"
            }),
            i.send(c)
        },
        listeners: {
            click: function(a, b, c) {
                if (c == "currentPlay") {
                    var d = b.data("tvid"),
                    e = b.data("vid");
                    b.addClass("selected").siblings().removeClass("selected");
                    var f = b.index() + 1;
                    this.resetPlayIndex(f),
                    APP.postMessage("PLAYER_LOAD_AND_PLAY", {
                        tvid: d,
                        vid: e
                    }),
                    g.scrollTop(0, 0),
                    this.sendPingback(b)
                }
            }
        }
    })
});
define("./component/hotEnter", ["../../../common/service/useragent/detect", "../../../common/service/utils/util"],
function(a, b, c) {
    var d = a("../../../common/service/useragent/detect"),
    e = a("../../../common/service/utils/util");
    APP.define("page.playMovie.component.hotEnter", {
        init: function() {
            d.weixin ? this.hotEnter() : this.rootElement.hide()
        },
        hotEnter: function() {
            var a = [],
            b = this,
            c = Q.PageInfo.promotionInfo || {};
            a.push({
                title: "大家都在看",
                description: c.title,
                picUrl: c.picUrl || "http://www.qiyipic.com/common/fix/h5-images/wx-top1.jpg",
                pageUrl: c.pageUrl,
                playCount: e.formatCount(c.playCount, 1)
            });
            var d = $.plugins.Mustache.render(b.nodes.hotEnter.html(), {
                list: a
            });
            b.rootElement.html(d)
        },
        listeners: {
            click: function(a, b, c) {
                c === "hotlistEnter" && (location.href = b.data("href"))
            }
        }
    })
});
define("../bodan/service/bodanList", ["../../../common/service/deferredRequest/deferredRequest", "../../../common/service/config/config", "../../../common/service/utils/util"],
function(a, b, c) {
    var d = a("../../../common/service/deferredRequest/deferredRequest"),
    e = a("../../../common/service/config/config"),
    f = a("../../../common/service/utils/util"),
    g = {
        NONE_MARK: 0,
        VIP_MARK: 1,
        PAY_MARK: 2,
        COUPONS_MARK: 3
    };
    c.exports = glue.createService({
        bodanList: {},
        init: function(a) {
            this.collectionCount = a.collectionCount,
            this.recId = a.recId,
            this.itemList = a.playList || []
        },
        getGroup: function(a, b) {
            var c = [],
            a = a || this.collectionCount,
            b = b || 10,
            d = a / b;
            for (var e = 0; e < d; e++) c.push({
                from: e * b + 1,
                to: Math.min((e + 1) * b, a),
                index: e
            });
            return c
        },
        getBodanList: function(a) {
            var b = {
                src: "d846d0c32d664d32b6b54ea48997a589",
                page: a.pageNo || 1,
                size: a.pageSize || 10
            },
            c = a.recId || this.recId,
            f = e.interfaces.playLists + c,
            g = c + "-" + a.pageNo,
            h = this;
            if (h.bodanList[g]) return $.Deferred(function(a) {
                a.resolve(h.bodanList[g])
            }).promise();
            if (this.itemList.length > 0) {
                var i = h.getItemList(g, b.page, b.size);
                return $.Deferred(function(a) {
                    a.resolve(i)
                }).promise()
            }
            return d.jsonp(f, b).then(function(a) {
                if (a && a.pagedVideos) {
                    var b = a.pagedVideos.mixinVideos;
                    return h.bodanList[g] = {
                        id: g,
                        list: h.formatData(b)
                    },
                    h.bodanList[g]
                }
            })
        },
        formatData: function(a) {
            return ! a || a.length == 0 ? null: (a.forEach(function(a) {
                a.tvId = a.tvId == a.qipuId ? a.tvId: a.qipuId,
                a.duration = $.date.formatSeconds(a.duration),
                a.imageUrl = a.videoImageUrl.replace(".jpg", "_160_90.jpg"),
                a.name = a.shortTitle ? a.shortTitle: a.name,
                a.url = e.addAnchor(e.replaceURL(a.url, {
                    tvid: a.tvId,
                    vid: a.vid
                }), {
                    anchor: "vfrm=3-2-3005-1"
                }),
                a.issueTime = f.formatDate(a.issueTime / 1e3),
                a.playCounts = f.formatCount(a.playCount, 1);
                var b = "normal";
                switch (a.payMark) {
                case g.VIP_MARK:
                    b = "isVip";
                    break;
                case g.PAY_MARK:
                    b = "isPaid";
                    break;
                case g.COUPONS_MARK:
                    b = "isCoupon";
                    break;
                default:
                    b = a.qiyiProduced ? "isQiyiProduced": a.exclusive ? "isExclusive": ""
                }
                a[b] = !0
            }), a)
        },
        getItemList: function(a, b, c) {
            c = c || 10;
            var d = (b - 1) * c,
            e = c * b,
            f = this;
            e = e > this.itemList.length ? this.itemList.length: e;
            var g = f.formatItemList(this.itemList.slice(d, e));
            return this.bodanList[a] = {
                id: a,
                list: g
            }
        },
        formatItemList: function(a) {
            var b = [];
            return a.forEach(function(a) {
                var c = {
                    aid: a.albumId,
                    videoCounts: a.videoCount,
                    duration: a.showContent,
                    imageUrl: a.imageUrl,
                    name: a.mainTitle,
                    url: a.pageUrl,
                    issueTime: f.formatDate(a.issueTime / 1e3),
                    playCounts: f.formatCount(a.count, 1),
                    isVip: a.isVip,
                    isCoupon: a.isCoupon,
                    isPaid: a.isPaid,
                    isExclusive: a.isExclusive,
                    isQiyiProduced: a.isQiyiProduced
                };
                b.push(c)
            }),
            b
        }
    })
});
define("../bodan/component/bodanInfo", ["../../../common/service/utils/videoInfo"],
function(a, b, c) {
    var d = a("../../../common/service/utils/videoInfo");
    glue.define("page.bodan.component.bodanInfo", {
        message: ["PLAYER_LOAD_AND_PLAY"],
        onMessage: function(a, b) {
            if (a == "PLAYER_LOAD_AND_PLAY") {
                var c = this;
                d.getVideoInfo(b.tvid, b.vid,
                function(a) {
                    var b = a.shortTitle ? a.shortTitle: a.name;
                    c.nodes.currPlayName.html(b),
                    c.rootElement.show()
                })
            }
        },
        init: function() {
            this.model.bodanName = this.bodanNameSub = this.bodanName.substr(0, 14)
        },
        listeners: {
            click: function(a, b, c) {
                c === "moreBtn" && (b.toggleClass("selected"), b.hasClass("selected") ? this.model.bodanName = this.bodanName: this.model.bodanName = this.bodanNameSub, this.nodes.moreInfo.toggleClass("hide"))
            }
        }
    })
});
define("../bodan/component/bodanList", ["../../../common/service/config/config", "../../../common/service/utils/util", "../service/bodanList"],
function(a, b, c) {
    var d = a("../../../common/service/config/config"),
    e = a("../../../common/service/utils/util"),
    f = a("../service/bodanList");
    glue.define("page.bodan.component.bodanList", {
        _curTabIndex: 0,
        _videoInfo: {},
        bodanList: {},
        bodanListAuto: {},
        message: ["PLAYER_LOAD_AND_PLAY", "AUTOCONTINUOUS_PLAY_LIST_END"],
        onMessage: function(a, b) {
            if (a === "PLAYER_LOAD_AND_PLAY") b.tvid && b.vid && (this._videoInfo.tvid = b.tvid, this._videoInfo.vid = b.vid, this._lock ? this.changeSelected(b) : this.build());
            else if (a === "AUTOCONTINUOUS_PLAY_LIST_END") {
                var c = this; ++this._curTabIndex;
                if (b.id === "bodanList" && this._curTabIndex <= c.groupLen) {
                    var d = this.nodes.groupTitle.find("[data-index='" + this._curTabIndex + "']");
                    d.addClass("selected").siblings().removeClass("selected"),
                    APP.postMessage("AUTOCONTINUOUS_PLAY_STOP"),
                    this.switchTab(this._curTabIndex).then(function() {
                        var a = c._videoInfo.autoListId;
                        c.autoContinuous(a),
                        APP.postMessage("AUTOCONTINUOUS_PLAY_NEXT")
                    })
                }
            }
        },
        init: function() {
            if (!this.templateType) {
                this.pingbackVal = "609021_4";
                var a = this;
                a.switchTab(0).then(function(b) {
                    if (!b) return;
                    a.rootElement.show(),
                    glue.postMessage("HORIZONTALSCROLL_REFRESH", {
                        id: a.id
                    })
                })
            } else this.groupLen = parseInt(this.nodes.groupTitle.attr("data-groupNum"), 10),
            this.pingbackVal = "609021_2"
        },
        build: function() {
            var a = this,
            b = this.getIndex();
            a.switchTab(b).then(function(b) {
                if (!b) return;
                a.rootElement.show(),
                a._lock = !0,
                a.initHorizonScroll();
                var c = a.getPlayIndex(a._videoInfo.tvid, a._videoInfo.vid);
                a.autoContinuous(a._videoInfo.autoListId, c + 1)
            }),
            this._curTabIndex = b
        },
        initHorizonScroll: function() {
            var a = this.nodes.groupTitle.find("span.selected");
            glue.postMessage("HORIZONTALSCROLL_REFRESH", {
                id: this.id
            }),
            glue.postMessage("HORIZONTALSCROLL_TO_ELEMENT", {
                id: this.id,
                element: a[0]
            })
        },
        getIndex: function() {
            var a = this.nodes.groupTitle.find("span.selected"),
            b = 0;
            return ! a.length || (b = parseInt(a.attr("data-index"), 10)),
            b
        },
        getPlayIndex: function(a, b) {
            var c = this._videoInfo.autoListId,
            d = this.bodanList[c];
            if (!d || d.length == 0) return - 1;
            for (var e = 0; e < d.length; e++) {
                var f = d[e];
                if (f.tvid == a || f.vid == b) return e
            }
        },
        switchTab: function(a) {
            var b = this,
            c = a + 1;
            return f.getBodanList({
                pageNo: c
            }).then(function(a) {
                var c = a.list,
                d = b._videoInfo.autoListId = a.id;
                if (c && c.length > 0) return c.forEach(function(a) {
                    a.tvId && b._videoInfo.tvid && a.tvId == b._videoInfo.tvid ? a.selected = "selected": a.selected = "",
                    a.pingbackVal = b.pingbackVal
                }),
                b.bodanList[d] = c.map(function(a) {
                    return {
                        tvid: a.tvId,
                        vid: a.vid
                    }
                }),
                b.bodanListAuto[d] = !1,
                b.renderContent(c),
                !0;
                b.rootElement.hide()
            })
        },
        renderContent: function(a) {
            var b = this.nodes,
            c = new Velocity(b.bodanListTpl.html()),
            d = c.render({
                bodanList: a
            });
            b.bodanList.html(d)
        },
        autoContinuous: function(a, b) {
            if (!this.bodanListAuto[a]) {
                var c = {
                    priority: 1,
                    list: this.bodanList[a],
                    id: "bodanList"
                };
                APP.postMessage("AUTOCONTINUOUS_ADD_LIST", c),
                this.bodanListAuto[a] = !0
            }
            APP.postMessage("AUTOCONTINUOUS_SET_PLAY_INDEX", {
                id: "bodanList",
                index: b || 0
            })
        },
        changeSelected: function(a) {
            var b = this.nodes.bodanList,
            c = b.find("[data-tvid='" + a.tvid + "']");
            c.length == 0 && (c = b.find("[data-vid='" + a.vid + "']")),
            c.addClass("selected").siblings().removeClass("selected")
        },
        clickPlay: function(a, b) {
            APP.postMessage("PLAYER_LOAD_AND_PLAY", {
                tvid: a,
                vid: b
            }),
            e.scrollTop(0, 0)
        },
        listeners: {
            click: function(a, b, c) {
                if (c == "currentPlay") {
                    var d = b.data("tvid"),
                    e = b.data("vid");
                    if (!d && !e) window.setTimeout(function() {
                        location.href = b.attr("data-href")
                    },
                    200);
                    else {
                        var f = b.index() + 1;
                        this.autoContinuous(this._videoInfo.autoListId, f);
                        var g = this.getIndex();
                        this._curTabIndex != g && (this._curTabIndex = g),
                        this.clickPlay(d, e)
                    }
                } else if (c === "switchTab") {
                    b.addClass("selected").siblings().removeClass("selected");
                    var h = b.data("index"),
                    i = b.data("key");
                    i != this._videoInfo.autoListId && this.switchTab(h)
                }
            }
        }
    })
});
define("../bodan/component/hotBodan", ["../service/hotBodan", "../../../common/service/pingback/resys30Pingback"],
function(a, b, c) {
    var d = a("../service/hotBodan"),
    e = a("../../../common/service/pingback/resys30Pingback"),
    f = {
        min: 4,
        max: 6
    };
    glue.define("page.bodan.component.hotBodan", {
        message: ["PLAYER_LOAD_AND_PLAY", "SCROLL_TO_HOTBODAN"],
        onMessage: function(a, b) {
            a === "PLAYER_LOAD_AND_PLAY" ? b.tvid && b.vid && (this._videoInfo = {
                tvid: b.tvid,
                vid: b.vid
            },
            !this._lock && this.build()) : a === "SCROLL_TO_HOTBODAN" && e.showPingback(this.nodes.hotList, {
                aid: this.bodanId
            })
        },
        init: function() {
            this.bodanId = this.bodanId
        },
        build: function() {
            var a = this;
            a.getHotbodan().then(function(b) {
                if (b) {
                    var c = new Velocity(a.nodes.hotBodan.html()),
                    d = c.render({
                        hotList: b
                    });
                    a.nodes.hotList.append(d),
                    a.rootElement.show(),
                    a._lock = !0,
                    APP.postMessage("HORIZONTALSCROLL_REFRESH", {
                        id: a.id
                    }),
                    a.autoContinuous(b),
                    a.initPingback()
                } else a.rootElement.hide()
            })
        },
        getHotbodan: function() {
            var a = this,
            b = {
                rec_id: a.bodanId
            };
            return d.getVideoParams({
                tvid: a._videoInfo.tvid
            }).then(function(b) {
                a._videoInfo = $.extend(a._videoInfo, {
                    albumId: b.aid || b.tvid,
                    channelId: b.cid
                })
            }),
            d.getData(b).then(function(b) {
                if (b) return a.formatData(b.list)
            })
        },
        formatData: function(a) {
            var b = [];
            if (!a || a.length < f.min) return null;
            var c = a.length;
            c = c > f.max ? f.max: c;
            for (var d = 0; d < c; d++) {
                var e = a[d];
                b.push(e)
            }
            return b
        },
        autoContinuous: function(a) {
            this.hotBodanList = a.map(function(a) {
                return {
                    url: a.pageUrl
                }
            });
            var b = {
                priority: 2,
                list: this.hotBodanList
            };
            APP.postMessage("AUTOCONTINUOUS_ADD_LIST", b)
        },
        initPingback: function() {
            var a = d.dataChache;
            e.init(a.attribute)
        },
        listeners: {
            click: function(a, b, c) {
                if (c === "hotClick") {
                    var d = {
                        aid: this.bodanId,
                        cid: this._videoInfo.channelId,
                        rank: b.data("index"),
                        taid: b.data("qipuid"),
                        tcid: b.data("channelid"),
                        source: ""
                    };
                    e.clickPingback(d),
                    setTimeout(function() {
                        location.href = b.data("href")
                    },
                    200)
                }
            }
        }
    })
});
define("../bodan/service/hotBodan", ["../../../common/service/deferredRequest/deferredRequest", "../../../common/service/config/config", "../../../common/service/utils/videoInfo"],
function(a, b, c) {
    var d = a("../../../common/service/deferredRequest/deferredRequest"),
    e = a("../../../common/service/config/config"),
    f = a("../../../common/service/utils/videoInfo");
    c.exports = glue.createService({
        dataChache: null,
        getData: function(a) {
            var b = e.interfaces.resys30,
            c = $.extend({
                area: "h_sheep",
                rltnum: 6,
                rltfmt: "json",
                play_platform: "H5_QIYI"
            },
            a),
            f = this;
            return d.jsonp(b, c).then(function(a) {
                if (a.code == "A00000") {
                    var b = a.data,
                    c = [];
                    return b.forEach(function(a) {
                        if (a.display_fields) var b = {
                            pageUrl: a.display_fields.page_url + "?list=" + a.display_fields.id_url_hashcode,
                            name: a.name,
                            imageUrl: a.display_fields.picture_url.replace(".jpg", "_160_90.jpg"),
                            recId: a.id,
                            total: a.display_fields.total_episode_num,
                            cid: a.channel_id,
                            tvid: a.id
                        };
                        c.push(b)
                    }),
                    f.dataChache = {
                        list: c,
                        attribute: a.rec_cookie
                    },
                    f.dataChache
                }
            })
        },
        getVideoParams: function(a) {
            var b = this;
            return $.Deferred(function(b) {
                f.getVideoInfo(a.tvid, a.vid,
                function(a) {
                    b.resolve(a)
                })
            }).promise()
        }
    })
});
define("../../common/service/pingback/resys30Pingback", ["../user/user"],
function(a, b, c) {
    var d = a("../user/user");
    c.exports = APP.createService({
        init: function(a) {
            return this.source_event_id = a.event_id,
            this.bkt = a.bucket,
            this.area = a.area,
            this
        },
        showPingback: function(a, b) {
            var c = this,
            d = a.find("[data-channelId][data-qipuid]"),
            e = [],
            f = [],
            g = [];
            b = b || {};
            for (var h = 0; h < d.length; h++) {
                var i = d.eq(h);
                f.push(i.attr("data-channelid")),
                e.push(i.attr("data-qipuid")),
                g.push(i.attr("data-sourceid"))
            }
            c._showPingback({
                aid: b.aid || "",
                usract: b.usract || "show",
                cids: f.join(","),
                albums: e.join(","),
                sourceId: g.join(",") || ""
            })
        },
        _showPingback: function(a, b, c) {
            var e = this,
            f = {
                type: "recctplay20121226",
                usract: a.usract,
                ppuid: d.getUid(),
                uid: d.getAnonymousUid(),
                aid: a.aid,
                event_id: e.source_event_id,
                cid: a.cids,
                bkt: e.bkt,
                area: e.area,
                platform: 31,
                albumlist: a.albums,
                source: a.sourceId
            },
            g = $.url.jsonToQuery(f),
            h = new Image;
            h.src = "http://msg.video.qiyi.com/tmpstats.gif?" + g
        },
        clickPingback: function(a) {
            var b = this,
            c = {
                type: "recctplay20121226",
                usract: a.usract || "userclick",
                ppuid: d.getUid(),
                uid: d.getAnonymousUid(),
                aid: a.aid,
                event_id: b.source_event_id,
                cid: a.cid,
                bkt: b.bkt,
                area: b.area,
                rank: a.rank,
                platform: 31,
                taid: a.taid,
                tcid: a.tcid,
                source: a.source
            },
            e = $.url.jsonToQuery(c),
            f = new Image;
            f.src = "http://msg.video.qiyi.com/tmpstats.gif?" + e
        }
    })
});
define("../bubble/service/BubbleCommonInterface", ["../../../common/service/config/config", "../../../common/service/user/user", "./DataFormat"],
function(a, b, c) {
    var d = a("../../../common/service/config/config").interfaces.bubble,
    e = a("../../../common/service/user/user"),
    f = a("./DataFormat");
    c.exports = APP.createService({
        init: function(a) {
            return this.commonParam = {
                authcookie: e.getAuthcookie(),
                device_id: e.getAnonymousUid(),
                agenttype: 119
            },
            $.extend(this.commonParam, a),
            this
        },
        getFeeds: function(a, b, c) {
            var e = this,
            g = JSON.stringify(a);
            this.getFeeds.cache = this.getFeeds.cache || {},
            this.getFeeds.cache[g] ? b && b(this.getFeeds.cache[g]) : $.ajax({
                url: d.getFeeds,
                type: "get",
                data: $.extend(a, this.commonParam),
                dataType: "jsonp",
                success: function(a) {
                    a.code == "A00000" ? (e.getFeeds.cache[g] = f.getFormatFeeds(a.data), b && b(e.getFeeds.cache[g])) : c && c({
                        errorTip: "出错啦，刷新页面试试吧"
                    })
                },
                error: function() {
                    c && c({
                        errorTip: "出错啦，刷新页面试试吧"
                    })
                }
            })
        },
        getComments: function(a, b, c) {
            $.ajax({
                url: d.getComments,
                data: a,
                dataType: "jsonp",
                cache: !1,
                success: function(d) {
                    d.code == "A00000" ? b && b(f.getFormatComments(d.data, a)) : c && c({
                        errorTip: "出错啦，刷新页面试试吧"
                    })
                },
                error: function() {
                    c && c({
                        errorTip: "出错啦，刷新页面试试吧"
                    })
                }
            })
        },
        addOrReplyComment: function(a, b, c) {
            $.ajax({
                url: d.addOrReplyComment,
                data: $.extend(a, this.commonParam),
                type: "POST",
                cache: !0,
                success: function(a) {
                    var a = JSON.parse(a);
                    a.code == "A00000" ? b && b(a) : c && c()
                },
                error: function() {
                    c && c()
                }
            })
        },
        publish: function(a, b, c) {
            $.ajax({
                type: "post",
                url: d.publish,
                data: $.extend(a, this.commonParam),
                dataType: "json",
                cache: !1,
                success: function(a) {
                    a.code == "A00000" ? b && b(a) : c && c(a)
                },
                error: function(a) {
                    c && c(a)
                }
            })
        },
        reportFeed: function(a, b, c) {
            $.ajax({
                url: d.reportFeed,
                data: $.extend(a, this.commonParam),
                dataType: "jsonp",
                cache: !1,
                success: function(a) {
                    a.code == "A00000" ? b && b(a) : c && c()
                },
                error: function() {
                    c && c()
                }
            })
        },
        agree: function(a, b, c) {
            $.ajax({
                url: d.agree,
                data: $.extend(a, this.commonParam),
                dataType: "json",
                cache: !1,
                success: function(a) {
                    a.code == "A00000" ? b && b(a) : c && c()
                },
                error: function() {}
            })
        },
        feedDetail: function(a, b, c) {
            $.ajax({
                url: d.feedDetail,
                data: $.extend(a, this.commonParam),
                dataType: "jsonp",
                cache: !1,
                success: function(a) {
                    if (a.code == "A00000" && a.data.status != -2) {
                        var a = f.getFeedDetail(a.data);
                        a.result ? b && b(a) : c && c({
                            errorTip: "抱歉，没有找到相关结果"
                        })
                    } else c && c({
                        errorTip: "抱歉，没有找到相关结果"
                    })
                },
                error: function() {
                    c && c({
                        errorTip: "抱歉，没有找到相关结果"
                    })
                }
            })
        },
        addWall: function(a, b, c) {
            $.ajax({
                url: d.collect,
                data: $.extend(a, this.commonParam),
                dataType: "jsonp",
                cache: !1,
                success: function(a) {
                    a.code == "A00000" ? b && b(a.data) : c && c(a.msg)
                },
                error: function(a) {
                    c && c(a)
                }
            })
        },
        getUserAndListInfo: function(a, b) {
            $.ajax({
                url: d.list,
                data: this.commonParam,
                dataType: "jsonp",
                cache: !1,
                success: function(c) {
                    c.code == "A00000" ? a && a(f.getFormatUserList(c.data)) : b && b()
                },
                error: function() {
                    b && b()
                }
            })
        },
        getStarlightWallByPage: function(a, b, c) {
            var e = this;
            $.ajax({
                url: d.starlightWall,
                data: a,
                dataType: "jsonp",
                cache: !1,
                success: function(a) {
                    a.code == "A00000" ? b && b(a.data) : c && c()
                },
                error: function() {
                    c && c()
                }
            })
        },
        deleteFeed: function(a, b, c) {
            $.ajax({
                url: d.deleteFeed,
                data: a,
                method: "post",
                dataType: "json"
            }).done(function(a) {
                a && a.code == "A00000" ? b && b(a.data) : c && c()
            }).fail(function(a) {
                c && c()
            })
        },
        deleteComment: function(a, b, c) {
            $.ajax({
                url: d.deleteComment,
                data: a,
                method: "post",
                dataType: "json"
            }).done(function(a) {
                a && a.code == "A00000" ? b && b(a.data) : c && c()
            }).fail(function(a) {
                c && c()
            })
        },
        getEventFeedList: function(a, b, c) {
            var e = this;
            $.ajax({
                url: d.eventFeedList,
                data: a,
                dataType: "jsonp",
                cache: !1,
                success: function(a) {
                    a.code == "A00000" ? b && b(a.data) : c && c()
                },
                error: function() {
                    c && c()
                }
            })
        },
        getImageText: function(a, b, c) {
            var e = this;
            $.ajax({
                url: d.getImageText,
                data: $.extend(a, e.commonParam),
                dataType: "jsonp",
                cache: !1,
                success: function(a) {
                    a.code == "A00000" && a.data && a.data.type == 2 ? b && b(f.getFormatImageTextList(a.data)) : c && c({
                        errorTip: "抱歉，没有找到相关结果"
                    })
                },
                error: function() {
                    c && c({
                        errorTip: "抱歉，没有找到相关结果"
                    })
                }
            })
        },
        getListTotalData: function(a, b, c) {
            var e = this;
            $.ajax({
                url: d.listTotal,
                data: a,
                dataType: "jsonp",
                cache: !1,
                success: function(a) {
                    a.code == "A00000" ? b && b(a.data) : c && c()
                },
                error: function() {
                    c && c()
                }
            })
        },
        getListHistorylData: function(a, b, c) {
            var e = this;
            $.ajax({
                url: d.listHistory,
                data: a,
                dataType: "jsonp",
                cache: !1,
                success: function(a) {
                    a.code == "A00000" ? b && b(a.data) : c && c()
                },
                error: function() {
                    c && c()
                }
            })
        },
        getListDynamicData: function(a, b, c) {
            var e = this;
            $.ajax({
                url: d.listDynamic,
                data: a,
                dataType: "jsonp",
                cache: !1,
                success: function(a) {
                    a.code == "A00000" ? b && b(a.data) : c && c()
                },
                error: function() {
                    c && c()
                }
            })
        }
    })
});
define("../bubble/service/DataFormat", ["../../../common/service/user/user", "../../../common/service/emoji/index", "../service/ParamFacility", "./DateTransform", "./FeedInfo", "./UserIdentity"],
function(a, b, c) {
    var d = a("../../../common/service/user/user"),
    e = a("../../../common/service/emoji/index"),
    f = a("../service/ParamFacility"),
    g = a("./DateTransform"),
    h = a("./FeedInfo"),
    i = a("./UserIdentity"),
    j = 3,
    k = 9,
    l = function(a, b) {
        var c = this,
        d = {},
        e = a.sourceType,
        f = h.getFormatFeedByType(e);
        return $.isFunction(f) ? f.apply(null, [a, b]) : null
    };
    c.exports = APP.createService({
        getFormatFeeds: function(a) {
            if (!a.feeds) return "";
            var b = [],
            c = null,
            d = this,
            e = {},
            f = {
                wallName: a.wallName,
                wallIcon: a.wallIcon
            };
            for (var g = 0,
            h = a.feeds.length; g < h; g++) {
                c = l($.extend(a.feeds[g], f), {
                    picNum: j,
                    showAllPic: !1,
                    textOverflow: !0
                });
                if (!c) continue;
                b.push(c)
            }
            return e.feeds = b,
            e.remaining = a.remaining,
            e.wallInfo = {
                wallId: a.cicleQipuId,
                wallName: a.wallName,
                wallIcon: a.wallIcon,
                wallDesc: a.wallDesc,
                wallUserCount: a.wallUserCount,
                wallMaster: a.wallMaster,
                wallType: a.wallType,
                totalCount: a.totalCount
            },
            c = null,
            e
        },
        getFeedDetail: function(a) {
            var b = this,
            c = l(a, {
                picNum: k,
                showAllPic: !0,
                pageType: "detail"
            });
            return c.isDetail = !0,
            {
                result: c
            }
        },
        getFormatComments: function(a, b) {
            var c = this,
            d = [];
            return a.replies && a.replies.forEach(function(a) {
                var c = {};
                c.pubStr = g.getPubStr(a.addTime * 1e3),
                c.replyId = a.id,
                c.userInfo = a.userInfo,
                c.wallId = b.wallId,
                c.feedId = b.contentid,
                a.userIdentity && (c.userIdentity = i.getUserIdentityObj(a.userIdentity)),
                a.replySource ? c.content = "回复  " + a.replySource.userInfo.uname + " :" + a.content: c.content = a.content,
                d.push(c)
            }),
            b.page_size > a.count || b.page_size * b.page == a.totalCount ? {
                result: d
            }: {
                result: d,
                isMoreComment: !0
            }
        },
        getFormatUserList: function(a) {
            var b = {};
            return b.userIdentity = i.getUserIdentityObj({
                identity: a.userinfo.identity,
                url: a.userinfo.identityIcon
            }),
            $.extend(a, b),
            a
        },
        getFormatImageTextList: function(a) {
            if (!a || !a.content) return;
            a.content.forEach(function(a) {
                a.type == 1 ? a.isText = !0 : a.type == 2 && (a.isImg = !0)
            });
            if (a.url || a.source) a.showBottom = !0;
            return {
                imgText: a
            }
        }
    })
});
define("../../common/service/emoji/index", [],
function(a, b, c) {
    var d = [{
        id: "[:manyi]",
        name: "满意",
        url: "http://www.qiyipic.com/common/fix/h5-v3/paopao-emoji/1.png"
    },
    {
        id: "[:henzan]",
        name: "很赞",
        url: "http://www.qiyipic.com/common/fix/h5-v3/paopao-emoji/2.png"
    },
    {
        id: "[:koubi]",
        name: "抠鼻",
        url: "http://www.qiyipic.com/common/fix/h5-v3/paopao-emoji/3.png"
    },
    {
        id: "[:shengqi]",
        name: "生气",
        url: "http://www.qiyipic.com/common/fix/h5-v3/paopao-emoji/4.png"
    },
    {
        id: "[:duzui]",
        name: "嘟嘴",
        url: "http://www.qiyipic.com/common/fix/h5-v3/paopao-emoji/5.png"
    },
    {
        id: "[:daxiao]",
        name: "大笑",
        url: "http://www.qiyipic.com/common/fix/h5-v3/paopao-emoji/6.png"
    },
    {
        id: "[:guixiao]",
        name: "鬼笑",
        url: "http://www.qiyipic.com/common/fix/h5-v3/paopao-emoji/7.png"
    },
    {
        id: "[:ganga]",
        name: "尴尬",
        url: "http://www.qiyipic.com/common/fix/h5-v3/paopao-emoji/8.png"
    },
    {
        id: "[:xianqi]",
        name: "嫌弃",
        url: "http://www.qiyipic.com/common/fix/h5-v3/paopao-emoji/9.png"
    },
    {
        id: "[:jingdai]",
        name: "惊呆",
        url: "http://www.qiyipic.com/common/fix/h5-v3/paopao-emoji/10.png"
    },
    {
        id: "[:wunai]",
        name: "无奈",
        url: "http://www.qiyipic.com/common/fix/h5-v3/paopao-emoji/11.png"
    },
    {
        id: "[:liuhan]",
        name: "流汗",
        url: "http://www.qiyipic.com/common/fix/h5-v3/paopao-emoji/12.png"
    },
    {
        id: "[:xihuan]",
        name: "喜欢",
        url: "http://www.qiyipic.com/common/fix/h5-v3/paopao-emoji/13.png"
    },
    {
        id: "[:qiku]",
        name: "气哭",
        url: "http://www.qiyipic.com/common/fix/h5-v3/paopao-emoji/14.png"
    },
    {
        id: "[:heixian]",
        name: "黑线",
        url: "http://www.qiyipic.com/common/fix/h5-v3/paopao-emoji/15.png"
    },
    {
        id: "[:otu]",
        name: "呕吐",
        url: "http://www.qiyipic.com/common/fix/h5-v3/paopao-emoji/16.png"
    },
    {
        id: "[:shanyao]",
        name: "闪耀",
        url: "http://www.qiyipic.com/common/fix/h5-v3/paopao-emoji/17.png"
    },
    {
        id: "[:shudaizi]",
        name: "书呆子",
        url: "http://www.qiyipic.com/common/fix/h5-v3/paopao-emoji/18.png"
    },
    {
        id: "[:biyan]",
        name: "闭眼",
        url: "http://www.qiyipic.com/common/fix/h5-v3/paopao-emoji/19.png"
    },
    {
        id: "[:ganmao]",
        name: "感冒",
        url: "http://www.qiyipic.com/common/fix/h5-v3/paopao-emoji/20.png"
    },
    {
        id: "[:heilian]",
        name: "黑脸",
        url: "http://www.qiyipic.com/common/fix/h5-v3/paopao-emoji/21.png"
    },
    {
        id: "[:dajiao]",
        name: "大叫",
        url: "http://www.qiyipic.com/common/fix/h5-v3/paopao-emoji/22.png"
    },
    {
        id: "[:shuashuai]",
        name: "耍帅",
        url: "http://www.qiyipic.com/common/fix/h5-v3/paopao-emoji/23.png"
    },
    {
        id: "[:dengyan]",
        name: "瞪眼",
        url: "http://www.qiyipic.com/common/fix/h5-v3/paopao-emoji/24.png"
    },
    {
        id: "[:weiqu]",
        name: "委屈",
        url: "http://www.qiyipic.com/common/fix/h5-v3/paopao-emoji/25.png"
    },
    {
        id: "[:liulei]",
        name: "流泪",
        url: "http://www.qiyipic.com/common/fix/h5-v3/paopao-emoji/26.png"
    },
    {
        id: "[:shuizhao]",
        name: "睡着",
        url: "http://www.qiyipic.com/common/fix/h5-v3/paopao-emoji/27.png"
    },
    {
        id: "[:liezuixiao]",
        name: "咧嘴笑",
        url: "http://www.qiyipic.com/common/fix/h5-v3/paopao-emoji/28.png"
    },
    {
        id: "[:bishi]",
        name: "鄙视",
        url: "http://www.qiyipic.com/common/fix/h5-v3/paopao-emoji/29.png"
    },
    {
        id: "[:keai]",
        name: "可爱",
        url: "http://www.qiyipic.com/common/fix/h5-v3/paopao-emoji/30.png"
    },
    {
        id: "[:xiachou]",
        name: "吓抽",
        url: "http://www.qiyipic.com/common/fix/h5-v3/paopao-emoji/31.png"
    },
    {
        id: "[:biequ]",
        name: "憋屈",
        url: "http://www.qiyipic.com/common/fix/h5-v3/paopao-emoji/32.png"
    },
    {
        id: "[:tongku]",
        name: "恸哭",
        url: "http://www.qiyipic.com/common/fix/h5-v3/paopao-emoji/33.png"
    },
    {
        id: "[:fennu]",
        name: "愤怒",
        url: "http://www.qiyipic.com/common/fix/h5-v3/paopao-emoji/34.png"
    },
    {
        id: "[:yaochunku]",
        name: "咬唇哭",
        url: "http://www.qiyipic.com/common/fix/h5-v3/paopao-emoji/35.png"
    }],
    e = '<span class="c-emoji-pic" style="background-image:url({{url}});"></span>',
    f = function() {
        return d
    },
    g = function(a) {
        var b = a || 1,
        c = Math.ceil(d.length / b),
        e = [];
        for (var f = 0; f < c; f++) {
            var g = f * b,
            h = g + b;
            e.push({
                group: f,
                data: d.slice(g, h)
            })
        }
        return {
            groups: e
        }
    },
    h = function() {
        var a = {};
        for (var b = 0; b < d.length; b++) {
            var c = d[b];
            a[c.id] = c
        }
        return a
    },
    i = function(a) {
        var b = h(),
        c = a.replace(/(\[:[A-Za-z]+\])/g,
        function(a) {
            return $.plugins.Mustache.render(e, b[a])
        });
        return c
    };
    c.exports = APP.createService({
        getDataMapping: f,
        getGroupDataMapping: g,
        getIdMapping: h,
        idToImage: i
    })
});
define("../bubble/service/ParamFacility", [],
function(a, b, c) {
    function e(a) {
        return d.params = a,
        this
    }
    function f(a, b, c) {
        var e = "backUrl",
        f = "",
        g = {},
        h = d.params[e],
        i = d.urlMap[h] || h,
        j = a.lastIndexOf("?"),
        k = $.url.queryToJson(a.substr(j));
        j > -1 ? (f = a.substr(0, j), g = $.extend({},
        d.params, k, b), k[e] || delete g[e]) : (f = a, g = $.extend({},
        d.params, b)),
        delete g.src,
        delete g.circleId;
        var l = g[e] && decodeURIComponent(g[e]);
        return l ? (l === i ? l = i: i && (l = l + d.separator + i), delete g[e]) : l = i || "",
        $.param(g) + "&" + e + "=" + encodeURIComponent(l)
    }
    function g(a, b) {
        var c = "backUrl",
        e = $.url.queryToJson(a) || {},
        f = e[c];
        delete e.src,
        delete e.uid;
        if (!e[c]) return location.origin;
        var g = location.origin,
        h = f.lastIndexOf(d.separator);
        if (h > -1) {
            var i = d.urlMap[f.substr(h + d.separator.length)],
            f = f.substr(0, h);
            delete e[c],
            g += "/" + i + "?" + $.param(e) + "&" + c + "=" + decodeURIComponent(f)
        } else {
            var i = d.urlMap[f];
            delete e[c],
            i ? g += "/" + i: g += "/" + decodeURIComponent(f);
            var j = $.param(e);
            j && (g += "?" + j)
        }
        return g
    }
    function h(a) {
        var b = d.dealUrl(a),
        c = $.url.queryToJson(b);
        return {
            tvid: c.tvid || "",
            is_iqiyi: !0,
            albumid: c.albumid || c.aid || "",
            business: "paopao_wall",
            is_video_page: !0,
            categoryid: c.categoryid || c.cid || "",
            wallId: c.wallId || c.circleId
        }
    }
    function i(a) {
        var b = d.dealUrl(a),
        c = $.url.queryToJson(b);
        return {
            tvid: c.tvid,
            vid: c.vid
        }
    }
    function j(a) {
        var b = {
            frdcircle: "frdcircle",
            micromsg: "micromsg",
            weibo: "weibo",
            qq: "qq",
            zone: "qqzone",
            frdcircle_circ: "frdcircle_circl",
            micromsg_circl: "micromsg_circl",
            weibo_circl: "weibo_circl",
            qq_circl: "qq_circl",
            qqzone_circl: "qqzone_circl"
        },
        c = {
            plyfooter: "plyfooter",
            tocircle: "tocircle",
            publicpg: "publicpg",
            detailpg: "detailpg"
        };
        return b[a] || c[a]
    }
    function k(a) {
        var b = {
            frdcircle: "outshr",
            micromsg: "outshr",
            weibo: "outshr",
            qq: "outshr",
            zone: "outshr",
            frdcircle_circ: "outshr_circl",
            micromsg_circl: "outshr_circl",
            weibo_circl: "outshr_circl",
            qq_circl: "outshr_circl",
            qqzone_circl: "outshr_circl"
        },
        c = {
            plyfooter: "playpg1",
            tocircle: "playpg1",
            publicpg: "playpg1",
            detailpg: "playpg1"
        };
        return b[a] || c[a]
    }
    function l() {
        return ! document.referrer
    }
    function m(a) {
        var b = {
            frdcircle: "607121_frdcircle",
            micromsg: "607121_micromsg",
            weibo: "607121_weibo",
            qq: "607121_qq",
            zone: "607121_qqzone",
            frdcircle_circ: "607121_frdcircle",
            micromsg_circl: "607121_micromsg",
            weibo_circl: "607121_weibo",
            qq_circl: "607121_qq",
            qqzone_circl: "607121_qqzone"
        },
        c = {
            plyfooter: "607121_inner",
            tocircle: "607121_inner",
            publicpg: "607121_inner",
            detailpg: "607121_inner"
        };
        return b[a] || c[a]
    }
    function n(a) {
        var b = {
            frdcircle: !0,
            micromsg: !0,
            weibo: !0,
            qq: !0,
            zone: !0,
            frdcircle_circ: !0,
            micromsg_circl: !0,
            weibo_circl: !0,
            qq_circl: !0,
            qqzone_circl: !0
        };
        return !! b[a]
    }
    function o(a) {
        return ! n(a)
    }
    function p(a) {
        var b = $.url.queryToJson(a) || {};
        return b.backUrl && b.backUrl.indexOf("c") > -1 && document.referrer.indexOf("circleInfo.html") > -1
    }
    function q(a, b) {
        var c = JSON.stringify(a);
        return JSON.parse(c,
        function(a, c) {
            return a === "" ? c: b[a] ? c: undefined
        })
    }
    var d = {
        params: {},
        separator: "_b_",
        urlMap: {
            i: "m5/bubble/index.html",
            d: "m5/bubble/detail.html",
            c: "m5/bubble/circleInfo.html",
            "m5/bubble/index.html": "i",
            "m5/bubble/detail.html": "d",
            "m5/bubble/circleInfo.html": "c"
        },
        dealUrl: function(a) {
            var b = "",
            c = a.lastIndexOf("?");
            if (c > -1) {
                var d = $.url.queryToJson(a.substr(c));
                b = a.substr(0, c) + "?" + $.url.jsonToQuery($.extend({},
                this.params, d))
            } else b = a + "?" + $.url.jsonToQuery(this.params);
            return b
        }
    };
    c.exports = APP.createService({
        init: e,
        getBackParam: f,
        getReturnUrl: g,
        getCloudParam: h,
        getVJParam: i,
        srcTos2: j,
        srcTos1: k,
        srcTosrc: m,
        isSharePage: l,
        isReferInner: o,
        isReferOuter: n,
        isOriginLanding: p
    })
});
define("../bubble/service/DateTransform", [],
function(a, b, c) {
    c.exports = APP.createService({
        getPubStr: function(a) {
            var b = "",
            c = new Date,
            d = +(new Date(c.getFullYear(), c.getMonth(), c.getDate())),
            e = d - 864e5,
            f = +(new Date(c.getFullYear(), 0, 1)),
            g = (c.getTime() - a) / 1e3,
            h = new Date(a);
            if (a > d) {
                var g = Math.round((c - a) / 1e3 / 60);
                g < 10 ? b = "刚刚": g < 60 ? b = g + "分钟前": b = Math.round(g / 60) + "小时前"
            } else a > e ? b = "昨天 " + $.date.format(h, "HH:mm") : a > f ? b = $.date.format(h, "MM-dd") : b = $.date.format(h, "yy-MM-dd");
            return b
        }
    })
});
define("../bubble/service/FeedInfo", ["../service/TextFacility", "../../../common/service/user/user", "../../../common/service/utils/util", "./DateTransform"],
function(a, b, c) {
    function l(a) {
        return a.shape == 7 || a.shape == 8 || a.type == 1 ? !0 : !1
    }
    function m(a) {
        var b = a.shape;
        return b == 3 || b == 4 || b == 5 || b == 6 ? !0 : !1
    }
    function n(a) {
        return a.type == 2 ? !0 : !1
    }
    var d = a("../service/TextFacility"),
    e = a("../../../common/service/user/user"),
    f = a("../../../common/service/utils/util"),
    g = a("./DateTransform"),
    h = function(a, b) {
        var c = {
            feedId: a.feedId,
            feedTitle: a.feedTitle,
            wallId: a.circleQipuId || a.wallId,
            wallType: a.wallType,
            wallName: a.wallName,
            snsTime: a.snsTime,
            sourceType: a.sourceType,
            wallIcon: a.wallIcon,
            extendType: a.extendType,
            wallId: a.circleQipuId || a.wallId,
            uid: a.uid,
            wallType: a.wallType,
            wallName: a.wallName,
            wallDesc: a.wallDesc,
            extendType: a.extendType,
            top: a.top,
            agreeCount: f.paopaoFormatCount(a.agreeCount, 0),
            commentCount: f.paopaoFormatCount(a.commentCount, 0),
            uid: a.uid,
            icon: a.icon,
            name: a.name,
            pubStr: g.getPubStr(a.releaseDate * 1e3),
            isAgree: a.agree == 1
        };
        a.recom_reason == "新" ? c.isNew = !0 : a.recom_reason == "精" && (c.isGood = !0);
        var e = b.textOverflow ? d.textOverFlow(a.description, 4) : a.description,
        h = a.eventList;
        return h && (c.eventId = h[0].eventId, h.forEach(function(a) {
            var b = "#" + a.eventName + "#";
            e.indexOf(a.eventName) != -1 ? e = e.replace(b, '<em class="c-mark-event" data-node="eventTaret">' + b + "</em>") : e = '<em class="c-mark-event" data-node="eventTaret">' + b + "</em>" + e
        })),
        c.description = e.replace(/\n/g, "<br/>"),
        c.footPrint = a.footPrint || [],
        a.userIdentity && (c.userIdentity = a.userIdentity),
        c
    },
    i = function(a, b) {
        var c = {};
        try {
            $.extend(c, h(a, b)),
            a.pictures ? (c.picNum = a.pictures.length, a.pictures.length > b.picNum && (b.showAllPic || (c.picNum = a.pictures.length), a.pictures.length = b.picNum), c.picList = a.pictures.map(function(a, b) {
                return a.index = b,
                a.isLongPic = m(a),
                a.isBigPic = l(a),
                a.isRealLongPic = n(a),
                a
            })) : c.picList = [],
            a.imageTextId && (c.imageTextId = a.imageTextId)
        } catch(d) {
            return null
        }
        return c
    },
    j = function(a, b) {
        var c = {};
        try {
            $.extend(c, h(a, b)),
            c.tvTitle = a.tvTitles[0],
            c.videoPlayUrl = a.videoPlayUrls && a.videoPlayUrls.length > 0 ? a.videoPlayUrls[0] : "javascript:void(0)",
            c.thumbnail = a.thumbnails && a.thumbnails.length > 0 ? a.thumbnails[0] : "",
            c.duration = $.date.formatSeconds(a.durations);
            if (a.extendType == 8) {
                c.description ? "": c.description = "泡泡小视频";
                if (a.resolutions && a.resolutions[0] && a.resolutions[0].indexOf("_") > -1) {
                    var d = a.resolutions[0],
                    e = a.resolutions[0].split("_");
                    c.isOneToOneScale = e[0] / e[1] <= 1
                } else c.isOneToOneScale = !0
            } else c.description ? "": c.description = "刚刚分享了一个来自爱奇艺的视频《" + a.tvTitles[0] + "》快来看看吧~"
        } catch(f) {
            return null
        }
        return c
    },
    k = {
        1 : i,
        8 : j,
        4 : i,
        9 : i
    };
    c.exports = APP.createService({
        getFormatFeedByType: function(a) {
            return k[a]
        }
    })
});
define("../bubble/service/TextFacility", [],
function(a, b, c) {
    var d = 42,
    e = function(a, b) {
        var c = function(a, b) {
            for (h = a.length; b < h; b++) {
                var c = a.charAt(b);
                if (c == "]") return b
            }
            if (b == h) return - 1
        },
        e = 0,
        f = a.charAt(0);
        for (var g = 1,
        h = a.length; g < h; g++) {
            var i = a.charAt(g);
            if (f == "[" && i == ":") {
                var j = c(a, g + 1);
                j != -1 ? (e += 3.5, g = j) : e += 1
            } else / [ ^ \x00 - \xff] / .test(f) ? e += 2 : e += 1;
            if (e > d * b) {
                a = a.substr(0, g + 1);
                var k = !0;
                break
            }
            f = i
        }
        var l = a.split("\n");
        return l.length >= b ? (l.length = b, a = l.join("\n") + "...") : k && (a += "..."),
        a
    };
    c.exports = APP.createService({
        textOverFlow: e
    })
});
define("../bubble/service/UserIdentity", [],
function(a, b, c) {
    var d = {
        16 : function() {
            return {
                isStar: !0
            }
        },
        24 : function() {
            return {
                isAuthor: !0
            }
        },
        25 : function() {
            return {
                isOfficial: !0
            }
        },
        "-1": function() {
            return {
                isCurrentAuthor: !0
            }
        },
        23 : function() {
            return {
                isAuth: !0
            }
        }
    };
    c.exports = APP.createService({
        getUserIdentityObj: function(a) {
            var b = null;
            return a.identity && (b = d[a.identity](), a.url && (b.url = a.url)),
            b
        }
    })
});
define("../bubble/service/BubblePingback", ["../../../common/service/user/user", "./ParamFacility"],
function(a, b, c) {
    function h(a) {
        a && (g.eventid = a, f.src == "detailpg" && (g.rfr = "eventpg"))
    }
    function i(a) {
        return a && (f.src = a.src || "", f.s1 = e.srcTos1(a.src) || "", f.s2 = e.srcTos2(a.src) || ""),
        this
    }
    function j(a) {
        var b = a || location.href,
        c = "";
        return b.indexOf("detail.html") > -1 ? c = "feeddetail": b.indexOf("circleInfo.html") > -1 ? c = "circle": b.indexOf("starlightWall.html") > -1 ? c = "starpg": b.indexOf("eventInfo.html") > -1 ? c = "eventpg": c = "commcirl",
        c
    }
    function k(a) {
        var b = {
            t: 21,
            p1: "2_20_201",
            u: d.getAnonymousUid(),
            pu: d.getUid(),
            mkey: "",
            wallid: "",
            wallnm: "",
            startp: "",
            s1: f.s1,
            s2: f.s2
        };
        $.extend(b, a),
        g.eventid && $.extend(b, g);
        var c = new Image;
        c.src = "http://msg.71.am/pop?" + $.url.jsonToQuery(b)
    }
    function l() {
        return e.srcTosrc(f.src)
    }
    var d = a("../../../common/service/user/user"),
    e = a("./ParamFacility");
    c.exports = APP.createService({
        setParams: i,
        urlToRpage: j,
        send: k,
        getSrc: l,
        registeEventId: h
    });
    var f = {
        src: "",
        s1: "",
        s2: ""
    },
    g = {}
});
define("../../common/component/pager/DotPager", ["./swipeAnimate/swipeAnimate.js"],
function(a, b, c) {
    function f() {
        this.pdots = [],
        this.pcontents = [],
        this.contentLabel = "data-widget-pager-content",
        this.dotLabel = "data-widget-pager-dot",
        this.currentIndex = 0,
        this.locked = !0,
        this.isOpened = !1,
        this.istranslate = !0,
        this.touchOccured = !0,
        this.stopTime = 5e3,
        this.tempTime = 10,
        this.transformTime = 200,
        this.currentDistance = 0,
        this.eleWidth = 0,
        this.domUl = "",
        this.childLenght = 0,
        this.domLiLen = 0,
        this.domImg = "",
        this.targetY = 0,
        this.defaultY = 0,
        this._init()
    }
    var d = a("./swipeAnimate/swipeAnimate.js"),
    e = new d;
    f.prototype._init = function() {
        this.startPosition = {},
        this.endPosition = {},
        this.moveXDistance = 0,
        this.moveYDistance = 0,
        this.startTime = 0,
        this.endTime = 0,
        this.moveTime = 0
    },
    f.prototype.preventEvent = function(a) {
        a.preventDefault(),
        a.stopPropagation()
    },
    f.prototype.levelTouchMove = function(a) {
        var b = this;
        if (this.childLenght <= 1) return ! 1;
        e.doLevelAnimate({
            $element: b.domUl,
            targetPosition: (b.currentIndex + 1) * b.eleWidth - b.moveXDistance,
            istranslate: b.istranslate
        })
    },
    f.prototype.verticalTouchMove = function(a) {
        var b = this,
        c = b.moveYDistance,
        d = b.domUl.height(),
        f = b.domImg[0] ? b.domImg.eq(b.currentIndex + 1).height() : 0;
        b.targetY = b.defaultY;
        if (f > d) {
            var g = f - d;
            b.defaultY - c <= 0 && c > 0 ? b.targetY = 0 : b.defaultY - c >= g && c < 0 ? b.targetY = g: b.targetY = b.defaultY - c,
            e.doVerticalMove({
                $element: b.domImg.eq(b.currentIndex + 1),
                targetPosition: b.targetY,
                istranslate: b.istranslate
            })
        }
    },
    f.prototype.touchMoveEnd = function(a) {
        function f() {
            d === b.domLiLen - 1 ? (e.doLevelAnimate({
                $element: b.domUl,
                targetPosition: b.eleWidth,
                istranslate: b.istranslate
            }), b.currentIndex = 0) : d === 0 && (e.doLevelAnimate({
                $element: b.domUl,
                targetPosition: (b.domLiLen - 2) * b.eleWidth,
                istranslate: b.istranslate
            }), b.currentIndex = b.domLiLen - 3),
            b.locked = !0,
            b.updateState()
        }
        var b = this,
        c = 3,
        d = b.currentIndex + 1;
        if (Math.abs(b.moveXDistance) >= b.eleWidth / 2) c = b.moveXDistance > 0 ? 1 : 2;
        else if (b.moveTime < 300 && Math.abs(b.moveXDistance) >= 10) c = b.moveXDistance > 0 ? 1 : 2;
        else {
            if (b.moveTime > 50 && b.moveTime < 500 && Math.abs(b.moveXDistance) < 4 && Math.abs(b.moveYDistance) < 4) return b.closePic(APP.$(a.target).attr("data-type") == "emojiPic" ? APP.$(a.target).attr("data-id") : ""),
            b.defaultY = 0,
            !1;
            c = 3
        }
        if (!b.locked) return ! 1;
        if (this.childLenght <= 1) return b.defaultY = b.targetY,
        !1;
        switch (c) {
        case 1:
            d = d - 1 < 0 ? 0 : d - 1,
            b.locked = !1,
            b.domImg[0] && e.doVerticalMove({
                $element: g.domImg.eq(g.currentIndex + 1),
                targetPosition: 0,
                istranslate: g.istranslate
            }),
            b.defaultY = 0,
            b.targetY = 0;
            break;
        case 2:
            d = d + 1 > b.domLiLen - 1 ? b.domLiLen - 1 : d + 1,
            b.locked = !1,
            b.domImg[0] && e.doVerticalMove({
                $element: b.domImg.eq(b.currentIndex + 1),
                targetPosition: 0,
                istranslate: b.istranslate
            }),
            b.defaultY = 0,
            b.targetY = 0;
            break;
        default:
            d = d,
            b.defaultY = b.targetY
        }
        e.doLevelAnimate({
            $element: b.domUl,
            targetPosition: d * b.eleWidth,
            time: b.transformTime,
            callback: f,
            istranslate: b.istranslate
        }),
        b.currentIndex = d - 1
    },
    f.prototype.closePic = function(a) {
        setTimeout(function() {
            this.locked = !0,
            APP.postMessage("DOTPAGER_CONTENT_CLICK", a)
        },
        100)
    },
    f.prototype.preLoadImage = function(a) {
        var b = a.find('[data-type="original"]');
        if (b.attr("data-load") === "unload") {
            var c = a.find('[data-type="error"]'),
            d = a.find('[data-type="loading"]'),
            e = b.attr("data-src"),
            f = new Image;
            f.onload = function(a) {
                b.attr("src", e),
                d.addClass("hide"),
                b.removeClass("hide"),
                b.attr("data-load", "load")
            },
            f.onerror = function(a) {
                d.addClass("hide"),
                c.removeClass("hide"),
                b.attr("data-load", "load")
            },
            f.src = e
        }
    },
    f.prototype.updateState = function() {
        g.pdots.removeClass("selected").eq(g.currentIndex).addClass("selected"),
        APP.postMessage("DOTPAGER_MOVE_DONE", {
            index: g.currentIndex
        })
    };
    var g = new f;
    APP.define("common.component.pager.DotPager", {
        message: ["DOTPAGER_SET_CONTENT"],
        onMessage: function(a, b) {
            a == "DOTPAGER_SET_CONTENT" && this.setContent(b)
        },
        init: function() {
            this.isAuto && this.initComponent(),
            this.rootElement.on("touchstart",
            function(a) {
                if (!g.isOpened) return ! 1;
                var b = a.touches[0];
                g.startPosition = {
                    x: b.pageX,
                    y: b.pageY
                },
                g.startTime = +(new Date)
            }).on("touchmove",
            function(a) {
                if (!g.isOpened) return ! 1;
                if (!g.locked) return ! 1;
                g.preventEvent(a);
                var b = a.touches[0];
                g.endPosition = {
                    x: b.pageX,
                    y: b.pageY
                },
                g.moveXDistance = g.endPosition.x - g.startPosition.x,
                g.moveYDistance = g.endPosition.y - g.startPosition.y,
                g.levelTouchMove(a),
                g.verticalTouchMove(a)
            }).on("touchend",
            function(a) {
                if (!g.isOpened) return ! 1;
                g.preventEvent(a),
                g.endTime = +(new Date),
                g.moveTime = g.endTime - g.startTime,
                g.touchMoveEnd(a),
                g._init()
            })
        },
        initComponent: function() {
            g.pdots = this.nodes.pagerDots.find("[" + g.dotLabel + "]"),
            g.pcontents = this.nodes.pagerContent.find("[" + g.contentLabel + "]");
            if (g.pcontents && g.pcontents.length > 0) {
                g.domUl = this.nodes.pagerContent.children().eq(0),
                g.childLenght = g.pcontents.length,
                g.pcontents.first().clone(!0).appendTo(g.domUl),
                g.pcontents.last().clone(!0).prependTo(g.domUl),
                g.domImg = g.domUl.find("img"),
                this.nodes.pagerContent.children().css({
                    width: (g.pcontents.length + 2) * 100 + "%",
                    overflow: "hidden"
                }),
                this.nodes.pagerContent.find("[" + g.contentLabel + "]").removeClass("hide").css({
                    flow: "left",
                    width: 1 / (g.pcontents.length + 2) * 100 + "%"
                }),
                g.domLiLen = this.nodes.pagerContent.find("[" + g.contentLabel + "]").length;
                for (var a = 0; a < g.domLiLen; a++) g.preLoadImage(this.nodes.pagerContent.find("[" + g.contentLabel + "]").eq(a));
                g.eleWidth = g.pcontents.first().width(),
                g.currentDistance = g.eleWidth * (g.currentIndex + 1),
                g.domUl.css({
                    transform: "translate(-" + g.currentDistance + "px, 0)",
                    oTransform: "translate(-" + g.currentDistance + "px, 0)",
                    mozTransform: "translate(-" + g.currentDistance + "px, 0)",
                    webkitTransform: "translate(-" + g.currentDistance + "px, 0)"
                }),
                g.domUl.css("transform") || g.domUl.css("mozTransform") || g.domUl.css("WebkitTransform") || g.domUl.css("OTransform") ? g.istranslate = !0 : (g.istranslate = !1, e.doLevelAnimate({
                    $element: g.domUl,
                    targetPosition: g.currentDistance,
                    istranslate: g.istranslate
                }))
            }
            g.pdots && g.pdots.length > 0 && g.pdots.eq(g.currentIndex).addClass("selected"),
            this.stopSwipe || (g.isOpened = !0)
        },
        setContent: function(a) {
            this.nodes.pagerContent.html(a.content),
            this.nodes.pagerDots.html(a.dot),
            g.currentIndex = a.startIndex || 0,
            this.initComponent()
        }
    })
});
define("../../common/component/pager/swipeAnimate/swipeAnimate", [],
function(a, b, c) {
    function d(a) {
        a && this._init(a)
    }
    d.prototype._init = function(a) {},
    d.prototype.doLevelAnimate = function(a) {
        if (!a) return ! 1;
        a.time = a.time ? a.time: 0;
        if (a.istranslate) {
            a.$element.css({
                transform: "translate(-" + a.targetPosition + "px, 0)",
                oTransform: "translate(-" + a.targetPosition + "px, 0)",
                mozTransform: "translate(-" + a.targetPosition + "px, 0)",
                webkitTransform: "translate(-" + a.targetPosition + "px, 0)",
                msTransform: "translate(-" + a.targetPosition + "px, 0)",
                transitionDuration: a.time + "ms",
                oTransitionDuration: a.time + "ms",
                MozTransitionDuration: a.time + "ms",
                webkitTransitionDuration: a.time + "ms",
                msTransitionDuration: a.time + "ms"
            });
            if (a.time === 0) return ! 1;
            var b = ["transitionend", "oTransitionEnd", "mozTransitionEnd", "webkitTransitionEnd"];
            for (var c = 0,
            d = b.length; c < d; c++) a.$element.on(b[c],
            function() {
                a.$element.off(b[c]).css({
                    transitionDuration: "0ms",
                    oTransitionDuration: "0ms",
                    MozTransitionDuration: "0ms",
                    webkitTransitionDuration: "0ms",
                    msTransitionDuration: "0ms"
                }),
                a.callback && a.callback(a.$element)
            })
        } else a.$element.css({
            position: "absolute"
        }).animate({
            left: -a.targetPosition
        },
        a.time,
        function() {
            if (a.time === 0) return ! 1;
            a.callback && a.callback(a.$element)
        })
    },
    d.prototype.doVerticalMove = function(a) {
        if (!a) return ! 1;
        a.istranslate ? a.$element.css({
            transform: "translateY(-" + a.targetPosition + "px)",
            oTransform: "translateY(-" + a.targetPosition + "px)",
            mozTransform: "translateY(-" + a.targetPosition + "px)",
            msTransform: "translateY(-" + a.targetPosition + "px)",
            webkitTransform: "translateY(-" + a.targetPosition + "px)"
        }) : a.$element.css({
            position: "relative"
        }).animate({
            top: -a.targetPosition
        })
    },
    c.exports = d
});
define("../../common/component/mask/deleteMask", [],
function(a, b, c) {
    APP.define("common.component.mask.deleteMask", {
        options: {
            showTime: 1700
        },
        message: ["DELETE_MASK_LOADING_ACTION", "DELETE_MASK_TOAST_ACTION", "DELETE_MASK_CONFIRM_ACTION"],
        onMessage: function(a, b) {
            switch (a) {
            case "DELETE_MASK_LOADING_ACTION":
                this.onLoadingHandle(b);
                break;
            case "DELETE_MASK_TOAST_ACTION":
                this.onToastHandle(b);
                break;
            case "DELETE_MASK_CONFIRM_ACTION":
                this.onConfirmHandle(b)
            }
        },
        listeners: {
            click: function(a, b, c) {
                switch (c) {
                case "ok":
                    this.nodes.confirm.addClass("hide"),
                    this.okCallback && this.okCallback();
                    break;
                case "cancel":
                    this.nodes.confirm.addClass("hide")
                }
            }
        },
        onConfirmHandle: function(a) {
            a.show ? (this.okCallback = a.callback, this.nodes.confirm.removeClass("hide")) : this.nodes.confirm.addClass("hide")
        },
        onLoadingHandle: function(a) {
            a.show ? this.nodes.loading.removeClass("hide") : this.nodes.loading.addClass("hide")
        },
        onToastHandle: function(a) {
            if (!a.show) this.nodes.toast.addClass("hide");
            else {
                var b = this;
                this.nodes.toast.removeClass("hide"),
                setTimeout(function() {
                    b.nodes.toast.addClass("hide")
                },
                a.showTime || this.options.showTime)
            }
        }
    })
});
define("../bubble/component/login", ["../../../common/service/user/user", "../service/ParamFacility", "../../../common/service/cloudControl/comment"],
function(a, b, c) {
    var d = a("../../../common/service/user/user"),
    e = a("../service/ParamFacility"),
    f = a("../../../common/service/cloudControl/comment");
    APP.define("page.bubble.fragment.login", {
        init: function() {
            var a = this,
            b = e.getCloudParam(location.href);
            a.getCloudInfo().then(function(b) {
                a.cloudExcute(b)
            })
        },
        message: ["PLAYER_LOAD_AND_PLAY"],
        onMessage: function(a, b) {
            var c = this;
            if (a === "PLAYER_LOAD_AND_PLAY") {
                var d = {
                    tvid: b.tvid
                };
                c.logonUrl = c.logonUrl.replace(/(tvid=)(\d*)/, "$1" + d.tvid),
                c.anonymousUrl = c.anonymousUrl.replace(/(tvid%3D)(\d*)/, "$1" + d.tvid),
                c.getCloudInfo(d).then(function(a) {
                    c.cloudExcute(a)
                })
            }
        },
        listeners: {
            click: function(a, b, c) {
                var e = this;
                c === "toBubble" && (d.isLogin() ? location.href = e.logonUrl: location.href = e.anonymousUrl)
            }
        },
        getCloudInfo: function(a) {
            var b = e.getCloudParam(location.href);
            return $.extend(b, a || {}),
            (new $.Deferred(function(a) {
                f.getCommentRule("", b,
                function(b) {
                    a.resolve(b)
                },
                function(b) {
                    a.reject(b)
                })
            })).promise()
        },
        cloudExcute: function(a, b) {
            var c = this;
            a.inputBoxEnable && a.paopaoWall ? d.isLogin() ? (d.getUserIcon(function(a) {
                c.nodes.userIcon.css("background-image", "url(" + a + ")"),
                c.rootElement.removeClass("hide")
            }), c.nodes.toBubble.html(c.logonText)) : (c.nodes.toBubble.html(c.anonymousText), c.rootElement.removeClass("hide")) : (c.rootElement.addClass("hide"), b && b())
        }
    })
});
define("../bubble/component/feedList", ["../service/BubbleCommonInterface", "../service/BubblePingback", "../../../common/service/emoji/bubble", "../../../common/service/cloudControl/comment", "../service/ParamFacility"],
function(a, b, c) {
    var d = a("../service/BubbleCommonInterface"),
    e = a("../service/BubblePingback"),
    f = a("../../../common/service/emoji/bubble"),
    g = a("../../../common/service/cloudControl/comment"),
    h = a("../service/ParamFacility");
    APP.define("page.bubble.component.feedList", {
        message: ["FEED_CONTENT_ACTION", "SCROLL2BOTTOM_TRIGGER", "CLICK_TO_COMMENT_TRIGGER", "PLAYER_LOAD_AND_PLAY"],
        onMessage: function(a, b) {
            var c = this;
            if (a === "FEED_CONTENT_ACTION") b.rootShow ? this.rootElement.removeClass("hide") : this.rootElement.addClass("hide"),
            b.scrollTop && $(window).scrollTop(b.scrollTop);
            else if (a === "SCROLL2BOTTOM_TRIGGER") this.getFeeds(function() {
                c._lock = !0
            });
            else if (a === "CLICK_TO_COMMENT_TRIGGER") this._lock ? APP.postMessage("COMMON_SCROLL_TO_ELEMENT", b) : this.getFeeds(function() {
                APP.postMessage("COMMON_SCROLL_TO_ELEMENT", b),
                c._lock = !0
            });
            else if (a === "PLAYER_LOAD_AND_PLAY") {
                var c = this,
                d = {
                    albumid: b.albumid,
                    tvid: b.tvid
                };
                this.getCloudInfo(d).then(function(a) {
                    c.cloudExcute(a)
                })
            }
        },
        init: function() {
            var a = this;
            this._scrollPadding = -($("body").height() * .25),
            this.isEnding = !1,
            this.initParam = this.feedsParam,
            this.headerLoaded = !1,
            this.getCloudInfo().then(function(b) {
                a.cloudExcute(b,
                function() {
                    a.autoStart && a.getFeeds();
                    var b = a.rootElement.find("[data-component='page.component.feedCard']"); ! a.autoStart && a.pingbackParam.t && b.length > 0 && (b = $(b[0]), a.sendPingback({
                        wallid: b.attr("data-wallId"),
                        wallnm: b.attr("data-wallName"),
                        startp: b.attr("data-wallType")
                    }), a.headerLoaded = !0)
                })
            })
        },
        feedNotFount: function(a) {
            this.loadingImg(!1),
            APP.postMessage("BUBBLE_SHOWERRORPAGE", {
                type: "whole",
                info: a.errorTip
            })
        },
        loadingImg: function(a) {
            a || a == undefined ? this.nodes.loading.removeClass("hide") : this.nodes.loading.addClass("hide")
        },
        render: function(a, b) {
            var c = this;
            if (a.feeds && a.feeds.length > 0) {
                var d = (new Velocity(c.nodes.tpl.html())).render(a);
                a.remaining == 0 && (d += this.nodes.ending.html(), this.isEnding = !0);
                var e = a.feeds.slice( - 1)[0];
                this.rootElement.attr("data-lastfeedid", e.feedId),
                this.rootElement.attr("data-snsTime", e.snsTime),
                f.feedIdToImage(d,
                function(a) {
                    c.rootElement.append(a),
                    APP.initComponent(c.rootElement),
                    b && b(),
                    APP.postMessage("SCROLL2BOTTOM_COMPELETE")
                })
            } else this.rootElement.append(this.nodes.ending.html()),
            this.isEnding = !0
        },
        getFeeds: function(a) {
            if (this.isEnding) return;
            if (this.headerLoaded) {
                var b = this.rootElement.attr("data-lastfeedid"),
                c = this.rootElement.attr("data-snsTime");
                b && c && this.addMoreFeeds(b, c)
            } else this.addInitFeeds(a)
        },
        getCloudInfo: function(a) {
            var b = h.getCloudParam(location.href);
            return $.extend(b, a || {}),
            (new $.Deferred(function(a) {
                g.getCommentRule("", b,
                function(b) {
                    a.resolve(b)
                },
                function(b) {
                    a.reject(b)
                })
            })).promise()
        },
        cloudExcute: function(a, b) {
            a.paopaoWall ? (this.rootElement.removeClass("hide"), b && b()) : (this.rootElement.addClass("hide"), APP.postMessage("BUBBLE_SHOWERRORPAGE", {
                type: "whole",
                info: "暂无数据"
            }))
        },
        addInitFeeds: function(a) {
            var b = this;
            this.loadingImg(!0),
            d.getFeeds(b.initParam,
            function(c) {
                c.isFirst = !0,
                b.loadingImg(!1),
                b.render(c, a);
                if (c.feeds && c.feeds.length > 1) {
                    var d = c.feeds[0];
                    b.sendPingback({
                        wallid: d.wallId,
                        wallnm: d.wallName,
                        startp: d.wallType
                    }),
                    b.headerLoaded = !0
                }
            },
            function(a) {
                b.feedNotFount(a)
            })
        },
        addMoreFeeds: function(a, b) {
            this.rootElement.find('[data-node="more"]').remove(),
            this.initParam.feedId = a,
            this.initParam.snsTime = b,
            this.initParam.upOrDown = 1,
            this.loadingImg(!0);
            var c = this;
            d.getFeeds(this.initParam,
            function(a) {
                c.loadingImg(!1),
                c.render(a)
            },
            function(a) {
                c.feedNotFount(a)
            }),
            delete this.initParam.feedId
        },
        sendPingback: function(a) {
            var b = this,
            c = b.pingbackParam.t || [];
            c.forEach(function(b) {
                a.t = b,
                e.send(a)
            })
        },
        listeners: {
            click: function(a, b, c) {
                var d = this;
                if (c == "more") {
                    var e = b.attr("data-newfeed"),
                    f = b.attr("data-snsTime");
                    d.addMoreFeeds(e, f)
                }
            }
        }
    })
});
define("../../common/service/emoji/bubble", ["../config/config"],
function(a, b, c) {
    function e(a) {
        $.ajax({
            type: "get",
            url: d.interfaces.emoji.feedStatic,
            dataType: "json",
            cache: !0
        }).done(function(b) {
            b && b.code == "A00000" ? a && a(f(b.data)) : a && a(null)
        }).fail(function(b) {
            a && a(null)
        })
    }
    function h(a) {
        e(a)
    }
    function i(a, b) {
        e(function(c) {
            if (c) {
                var d = a || 1,
                e = Math.ceil(c.length / d),
                f = [];
                for (var g = 0; g < e; g++) {
                    var h = g * d,
                    i = h + d;
                    f.push({
                        group: g,
                        data: c.slice(h, i)
                    })
                }
                b && b({
                    groups: f
                })
            } else b && b(null)
        })
    }
    function g(a) {
        g(function(b) {
            a && a(b)
        })
    }
    function j(a, b) {
        g(function(c) {
            var d = /\[[^\u0000-\u00FF]+\]/g,
            e = "<span class='c-emoji-pic' style='background-image:url({{picUrl}});'></span>",
            f = [];
            c ? a.forEach(function(a, b) {
                var g = a.replace(d,
                function(a) {
                    return c[a] ? $.plugins.Mustache.render(e, c[a]) : a
                });
                f.push(g)
            }) : a.forEach(function(a, b) {
                f.push("")
            }),
            b && b(a, f)
        })
    }
    function k(a, b) {
        var c = /<p[\S\s\t]*?>([\S\s\t]*?)<\/p>/g,
        d = a.match(c);
        d && d.length > 0 ? this.idToImage(d,
        function(c, d) {
            for (var e = 0; e < c.length; e++) a = a.replace(c[e], d[e]);
            b && b(a)
        }) : b && b(a)
    }
    var d = a("../config/config");
    c.exports = APP.createService({
        getDataMapping: h,
        getGroupDataMapping: i,
        getIdMapping: g,
        idToImage: j,
        feedIdToImage: k
    });
    var f = function(a) {
        var b = [];
        for (var c = 0; c < a.length; c++) {
            var d = a[c];
            d && $.isArray(d.emoticonList) && b.push.apply(b, d.emoticonList.slice())
        }
        return b
    },
    g = function(a) {
        e(function(b) {
            if (b) {
                var c = {};
                for (var d = 0; d < b.length; d++) {
                    var e = b[d];
                    c[e.content] = e
                }
                a && a(c)
            } else a && a(null)
        })
    }
});
define("../bubble/component/feedCard", ["../../../common/service/useragent/detect", "../service/BubblePingback", "../service/ParamFacility", "../service/ShareInfoFormat", "../../../common/service/utils/util", "../service/BubbleCommonInterface", "../../../common/service/user/user"],
function(a, b, c) {
    var d = a("../../../common/service/useragent/detect"),
    e = a("../service/BubblePingback"),
    f = a("../service/ParamFacility"),
    g = a("../service/ShareInfoFormat"),
    h = a("../../../common/service/utils/util"),
    i = a("../service/BubbleCommonInterface"),
    j = a("../../../common/service/user/user");
    APP.define("page.component.feedCard", {
        videoPic: "",
        message: ["BUBBLE_ADDCOMMENTNUM", "COMMENTLIST_DELETE"],
        onMessage: function(a, b) {
            a === "BUBBLE_ADDCOMMENTNUM" ? this.addComment() : a === "COMMENTLIST_DELETE" && this.deleteComment()
        },
        init: function() {
            var a = this.nodes.share;
            this.shareInfo = {},
            this.pageType = this.rootElement.attr("data-pageType"),
            this.initShareInfo(),
            this.initHyperLink(),
            this.pageType == "feedDetail" && (d.weixin && APP.postMessage("BUBBLE_WEIXINSHARE", {
                title_msg: this.shareInfo.title_msg,
                title_pyq: this.shareInfo.title,
                pic: this.shareInfo.imgUrl,
                desc: this.shareInfo.desc,
                link: this.shareInfo.url
            }), this.sendPingback("show"))
        },
        initHyperLink: function() {
            var a = this.rootElement.find("[data-attr='descInfo']");
            if (!a) return ! 1;
            for (var b = 0,
            c = a.length; b < c; b++) {
                var d = a.eq(b);
                d.html(d ? (d.html() || "").replace(/[^(?!url\()](http:\/\/|https:\/\/)((\w|=|\?|\.|\/|\&|-)+)/g, "<a class='c-mark-event' href='$1$2' target='_blank'>$1$2</a>") : "")
            }
        },
        initShareInfo: function() {
            var a = this.rootElement,
            b = a.attr("data-sourcetype"),
            c = {
                wallName: a.attr("data-wallname"),
                wallIcon: a.attr("data-wallIcon"),
                feedId: a.attr("data-feedId")
            },
            d = a.find("[data-attr='descInfo']");
            c.description = d ? (d.html() || "").trim().replace(/<span.+?<\/span>/g, "") : "",
            b == 8 && (c.extendType = a.attr("data-extendType"), c.tvTitle = a.attr("data-tvtitle"));
            var e = g.getShareInfoByType(b);
            $.isFunction(e) && (this.shareInfo = e.apply(null, [c, {
                pageType: a.attr("data-pagetype") == "feedDetail" ? "detail": ""
            }]), this.shareInfo.title_msg = "爱奇艺泡泡圈《" + a.attr("data-wallname") + "》")
        },
        sendPingback: function(a) {
            var b = {
                wallid: this.rootElement.attr("data-wallId"),
                wallnm: this.rootElement.attr("data-wallName"),
                startp: this.rootElement.attr("data-wallType"),
                feedid: this.rootElement.attr("data-feedId")
            },
            c = {
                t: this.rootElement.attr("data-" + a + "-t"),
                rpage: e.urlToRpage()
            };
            $.extend(b, c),
            e.send(b)
        },
        addComment: function() {
            var a = this.rootElement.find('[data-attr="commentCount"]'),
            b = this.rootElement.find('[data-attr="commentText"]'),
            c = +a.html();
            if (isNaN(c)) return;
            b.html(""),
            c == 0 ? a.html(1) : a.html(h.paopaoFormatCount(c + 1, 0)),
            a = null
        },
        deleteComment: function() {
            var a = this.rootElement.find('[data-attr="commentCount"]'),
            b = this.rootElement.find('[data-attr="commentText"]'),
            c = +a.html();
            if (isNaN(c)) return;
            c > 1 ? (a.html(h.paopaoFormatCount(c - 1, 0)), b.html("")) : (b.html("评论"), a.html("")),
            a = null
        },
        listeners: {
            click: function(a, b, c) {
                var d = this,
                g = $(a.target);
                if (c === "share") APP.postMessage("BUBBLE_SHARE", d.shareInfo),
                d.sendPingback("share");
                else if (c === "reportBtn") this.onReportHandle(b);
                else if (d.pageType != "feedList" || c != "detail" && c != "comment" && g.attr("data-attr") != "detail") if (c === "video") {
                    var j = b.find("a").attr("href");
                    j && j.indexOf("javascript:;") == -1 && g.attr("href", j + "?src=" + e.getSrc())
                } else / ^picture_\d$ / .test(c) ? APP.postMessage("ORIGINAL_PICTURE_SHOW", {
                    select: g.attr("data-index"),
                    feedId: d.rootElement.attr("data-feedid"),
                    version: 1,
                    praise: 0
                }) : c == "eventTaret" && (location.href = "/m5/bubble/eventInfo.html?" + $.param({
                    eventId: d.rootElement.attr("data-eventId"),
                    platform: 15
                }));
                else {
                    var h = {
                        feedId: d.rootElement.attr("data-feedId")
                    },
                    i = "/m5/bubble/detail.html?" + f.getBackParam(location.href, h);
                    location.href = i
                }
            }
        },
        onReportHandle: function(a) {
            var b = this;
            APP.postMessage("BUBBLE_SHOWREPORT", {
                feedId: a.attr("data-feedId"),
                wallId: a.attr("data-wallId"),
                uid: a.attr("data-uid"),
                callback: function() {
                    APP.postMessage("DELETE_MASK_CONFIRM_ACTION", {
                        show: !0,
                        callback: function() {
                            APP.postMessage("DELETE_MASK_LOADING_ACTION", {
                                show: !0
                            }),
                            i.deleteFeed({
                                authcookie: j.getAuthcookie(),
                                feedId: a.attr("data-feedId"),
                                wallId: a.attr("data-wallId")
                            },
                            function(a) {
                                b.pageType == "feedList" ? b.rootElement.hide() : location.href = f.getReturnUrl(location.search),
                                APP.postMessage("DELETE_MASK_LOADING_ACTION", {
                                    show: !1
                                })
                            },
                            function() {
                                APP.postMessage("DELETE_MASK_LOADING_ACTION", {
                                    show: !1
                                }),
                                APP.postMessage("DELETE_MASK_TOAST_ACTION", {
                                    show: !0
                                })
                            })
                        }
                    })
                }
            })
        }
    })
});
define("../bubble/service/ShareInfoFormat", ["./ParamFacility"],
function(a, b, c) {
    function g(a) {
        var b = /<\s*([a-z]+)\s*\/?>\s*([^<]*)?\s*(?:<\/\1>)?/i,
        c = a.replace(/<\s*([a-z]+)\s*[^>]*\/?>\s*([^<]*)?\s*(?:<\/\1>)?/i, "$2");
        return c
    }
    var d = a("./ParamFacility"),
    e = location.protocol + "//" + location.host + "/m5/bubble/detail.html",
    f = 15,
    h = function(a, b) {
        var c = {},
        h = a.description ? g(a.description) : "";
        return c.desc = h,
        h ? c.title = h.length > f ? h: h + " | 爱奇艺泡泡圈-" + a.wallName: c.title = "大家都在分享热门图片 | 爱奇艺泡泡圈-" + a.wallName,
        c.imgUrl = a.wallIcon,
        b.pageType == "detail" ? c.url = location.href: c.url = e + "?" + d.getBackParam(location.href, {
            feedId: a.feedId,
            s1: a.s1,
            s2: a.s2
        }),
        c
    },
    i = function(a, b) {
        var c = {},
        h = a.extendType == 8 ? !0 : !1,
        i = a.description ? g(a.description) : "";
        return c.desc = i,
        i ? c.title = i.length > f ? i: i + " | 爱奇艺泡泡圈-" + a.wallName: h ? c.title = "泡泡小视频 | 爱奇艺泡泡圈-" + a.wallName: c.title = "分享了视频《" + a.tvTitle + "》快来看看吧 | 爱奇艺泡泡圈-" + a.wallName,
        c.imgUrl = a.wallIcon,
        b.pageType == "detail" ? c.url = location.href: c.url = e + "?" + d.getBackParam(location.href, {
            feedId: a.feedId
        }),
        c
    },
    j = {
        1 : h,
        8 : i,
        4 : h,
        9 : h
    };
    c.exports = APP.createService({
        getShareInfoByType: function(a) {
            return j[a]
        }
    })
});
define("../bubble/component/agree", ["../service/BubbleCommonInterface", "../../../common/service/user/user", "../service/BubblePingback", "../../../common/service/utils/util"],
function(a, b, c) {
    var c = a("../service/BubbleCommonInterface"),
    d = a("../../../common/service/user/user"),
    e = a("../service/BubblePingback"),
    f = a("../../../common/service/utils/util");
    APP.define("page.bubble.agree", {
        message: [],
        onMessage: function(a, b) {},
        init: function() {
            this.param = {
                wallId: this.rootElement.attr("data-wallId"),
                feedId: this.rootElement.attr("data-feedId"),
                sourceType: this.rootElement.attr("data-sourceType"),
                owner: this.rootElement.attr("data-owner"),
                agree: this.rootElement.hasClass("ilike") ? 0 : 1
            }
        },
        argeePingback: function() {
            var a = {
                wallid: this.rootElement.attr("data-wallId"),
                wallnm: this.rootElement.attr("data-wallName"),
                startp: this.rootElement.attr("data-wallType"),
                feedid: this.rootElement.attr("data-feedId"),
                t: this.rootElement.attr("data-block"),
                rpage: e.urlToRpage()
            };
            e.send(a)
        },
        listeners: {
            click: function(a, b, e) {
                if (!d.isLogin()) {
                    location.href = "http://m.iqiyi.com/user.html";
                    return
                }
                var g = +this.nodes.agreeCount.html();
                this.rootElement.hasClass("ilike") ? (this.rootElement.removeClass("ilike"), this.param.agree = 0, isNaN(g) || (g > 1 ? (this.nodes.agreeCount.html(f.paopaoFormatCount(g - 1, 0)), this.nodes.agreeText.html("")) : g == 1 && (this.nodes.agreeText.removeClass("hide").html("点赞"), this.nodes.agreeCount.html("")))) : (this.rootElement.addClass("ilike"), this.param.agree = 1, isNaN(g) || (this.nodes.agreeText.html(""), g == 0 ? (this.nodes.agreeText.html(""), this.nodes.agreeCount.html(1)) : (this.nodes.agreeText.html(""), this.nodes.agreeCount.html(f.paopaoFormatCount(g + 1, 0))))),
                c.agree(this.param,
                function() {}),
                this.argeePingback()
            }
        }
    })
});
define("../bubble/component/share", ["../../../common/service/shareSDK/share.js", "../../../common/pingback/longyuan4_clickpingback.js", "../../../common/service/weChatJsSDK/weChatJsSDK"],
function(a, b, c) {
    var d = a("../../../common/service/shareSDK/share.js"),
    e = a("../../../common/pingback/longyuan4_clickpingback.js"),
    f = a("../../../common/service/weChatJsSDK/weChatJsSDK");
    APP.define("page.bubble.component.share", {
        message: ["BUBBLE_SHARE", "BUBBLE_WEIXINSHARE"],
        onMessage: function(a, b) {
            var c = this;
            this.shareParam = {},
            a == "BUBBLE_SHARE" ? (c.show(), this.shareParam = b) : a == "BUBBLE_WEIXINSHARE" && c.weixinShare({
                pyq: {
                    title: b.title_pyq,
                    desc: b.desc,
                    imgUrl: b.pic,
                    link: b.link
                },
                msg: {
                    title: b.title_msg,
                    desc: b.desc,
                    imgUrl: b.pic,
                    link: b.link
                }
            })
        },
        show: function() {
            this.nodes.cover.removeClass("hide"),
            this.nodes.shareBtns.removeClass("hide")
        },
        hide: function() {
            this.nodes.cover.addClass("hide"),
            this.nodes.shareBtns.addClass("hide")
        },
        getUrlByType: function(a, b) {
            var c = this,
            e = a == "qzone" ? c.shareParam.title_msg: c.shareParam.title,
            f = d.getShareUrl(a, {
                url: c.shareParam.url || location.href,
                desc: c.shareParam.desc,
                title: e,
                imgUrl: c.shareParam.imgUrl
            });
            b(f)
        },
        weixinShare: function(a) {
            f.shareTimeline(a.pyq).shareAppMessage(a.msg)
        },
        init: function() {
            this.shareTarget = ["weibo", "qzone", "qq"]
        },
        listeners: {
            click: function(a, b, c) {
                var d = this;
                if (c == "close") d.hide();
                else if (this.shareTarget.indexOf(c) != -1) {
                    var f = c;
                    e.send({
                        rseat: b.attr("data-clickRseat")
                    }),
                    d.getUrlByType(f,
                    function(a) {
                        f == "weibo" ? location.href = a: window.open(a, "_blank")
                    })
                }
            }
        }
    })
});
define("../../common/pingback/longyuan4_clickpingback", [],
function(a, b, c) {
    var d = "longyuan4",
    e = {
        A: "a",
        IMG: "i",
        OTHER: "o"
    };
    c.exports = {
        sendProbe: function(a) {
            var b = {
                t: 20,
                pf: /pps.tv/i.test(document.domain) ? 202 : 2,
                p: "20",
                p1: "201",
                u: $.cookie.get("QC006"),
                pu: JSON.parse($.cookie.get("P00002") || "{}").uid || "",
                rn: (new Date).getTime(),
                rseat: a
            },
            c = [];
            for (i in b) b[i] === 0 && (b[i] = "0"),
            c.push(i + "=" + encodeURIComponent(b[i] || ""));
            var d = new Image;
            d.src = "http://msg.71.am/b?" + c.join("&")
        },
        send: function(a, b) {
            var c = "",
            d = "";
            if (a.dom || a.rt) c = a.rt || e[a.dom.tagName || a.dom[0].tagName || "OTHER"];
            if (a.dom || a.href) {
                d = a.href || a.dom.attr("data-href") || a.dom.attr("href") || "";
                if (d == "#" || d == "javascript:void(0);" || d == "javascript:;") d = ""
            }
            var f = {
                t: 20,
                pf: /pps.tv/i.test(document.domain) ? 202 : 2,
                p: "20",
                p1: "201",
                u: $.cookie.get("QC006"),
                pu: JSON.parse($.cookie.get("P00002") || "{}").uid || "",
                jsuid: $.cookie.get("QC006"),
                ce: $.cookie.get("QC112"),
                rn: (new Date).getTime(),
                rt: c,
                rlink: d
            };
            for (var g in a) f[g] = a[g];
            var h = [];
            for (g in f) f[g] === 0 && (f[g] = "0"),
            h.push(g + "=" + encodeURIComponent(f[g] || ""));
            var i = new Image;
            i.src = "http://msg.71.am/b?" + h.join("&")
        },
        bind: function(a) {
            var b = this,
            c = Q.$("[" + a + "]");
            c && c.on("click",
            function(c) {
                c.preventDefault();
                var d = c.target;
                d.getAttribute(a) && b.send({
                    rseat: d.getAttribute(a),
                    dom: Q.$(d)
                });
                var e = d.getAttribute("href");
                e && !/javascript\:/i.test(e) && setTimeout(function() {
                    location.href = e
                },
                200)
            })
        }
    }
});
define("../bubble/component/report", ["../../../common/service/user/user", "../service/ParamFacility"],
function(a, b, c) {
    var d = a("../../../common/service/user/user"),
    e = a("../service/ParamFacility");
    APP.define("page.bubble.component.report", {
        message: ["BUBBLE_SHOWREPORT"],
        onMessage: function(a, b) {
            a == "BUBBLE_SHOWREPORT" && (this.msgParam = b, this.ifSimilar = b.uid == d.getUid(), this.ifSimilar ? this.nodes.actionBtn.html("删除") : this.nodes.actionBtn.html("举报"), this.show())
        },
        init: function() {},
        show: function() {
            this.nodes.cover.removeClass("hide"),
            this.nodes.btns.removeClass("hide")
        },
        hide: function() {
            this.nodes.cover.addClass("hide"),
            this.nodes.btns.addClass("hide")
        },
        listeners: {
            click: function(a, b, c) {
                c === "actionBtn" ? this.onActionHandle() : c === "cancelBtn" && this.onCancelHandle()
            }
        },
        onActionHandle: function() {
            this.hide();
            if (this.ifSimilar) this.msgParam.callback && this.msgParam.callback();
            else {
                delete this.msgParam.callback;
                var a = e.getBackParam(location.href, this.msgParam),
                b = location.origin + "/m5/bubble/complaint.html" + "?" + a;
                d.isLogin() ? location.href = b: location.href = location.origin + "/user.html" + "?redirect_url=" + encodeURIComponent(b)
            }
        },
        onCancelHandle: function() {
            this.hide()
        }
    })
});
define("../bubble/component/originalPicture", ["../service/BubbleCommonInterface", "../service/BubblePingback"],
function(a, b, c) {
    function f() {
        this.data = [],
        this.index = 0,
        this.scrollTop = 0
    }
    function h(a) {
        var b = {
            t: "505201_40",
            startp: a.wallType,
            wallid: a.wallId,
            wallnm: a.wallName,
            pblctp: "1",
            rpage: e.urlToRpage(),
            feedid: a.feedId
        };
        e.send(b)
    }
    var d = a("../service/BubbleCommonInterface"),
    e = a("../service/BubblePingback");
    f.prototype.getPagination = function() {
        return this.index + 1 + "/" + this.data.length
    };
    var g = new f;
    APP.define("page.bubble.component.originalPicture", {
        message: ["ORIGINAL_PICTURE_SHOW", "ORIGINAL_PICTURE_HIDE", "DOTPAGER_CONTENT_CLICK", "DOTPAGER_MOVE_DONE"],
        onMessage: function(a, b) {
            switch (a) {
            case "ORIGINAL_PICTURE_SHOW":
                this.showPic(b);
                break;
            case "ORIGINAL_PICTURE_HIDE":
                this.hidePic(b);
                break;
            case "DOTPAGER_CONTENT_CLICK":
                this.clickPic(b);
                break;
            case "DOTPAGER_MOVE_DONE":
                this.moveDone(b)
            }
        },
        showPic: function(a) {
            function c(c) {
                b.rootElement.removeClass("hide");
                if (!c || !c.result) return;
                h(c.result),
                e(a.select, c.result),
                b.render(),
                f()
            }
            function e(a, b) {
                g.index = +a,
                g.scrollTop = $(window).scrollTop(),
                b.picList && b.picList.length > 0 ? g.data = b.picList.map(function(a, b) {
                    return {
                        group: b,
                        url: a.url
                    }
                }) : g.data = []
            }
            function f() {
                APP.postMessage("FEED_CONTENT_ACTION", {
                    rootShow: !1
                }),
                APP.postMessage("BACK_TOP_HIDE", {
                    forceHide: !0
                })
            }
            var b = this;
            d.feedDetail(a, c)
        },
        hidePic: function(a) {
            this.rootElement.addClass("hide")
        },
        clickPic: function(a) {
            this.rootElement.addClass("hide"),
            APP.postMessage("BACK_TOP_SHOW", ""),
            APP.postMessage("FEED_CONTENT_ACTION", {
                rootShow: !0,
                scrollTop: g.scrollTop
            })
        },
        moveDone: function(a) {
            g.index = a.index,
            this.setPagination()
        },
        render: function() {
            var a = (new Velocity(this.nodes.contentTpl.html())).render({
                imageData: g.data
            });
            APP.postMessage("DOTPAGER_SET_CONTENT", {
                content: a,
                dot: "",
                startIndex: g.index
            }),
            this.setPagination()
        },
        setPagination: function() {
            this.nodes.pagination.html(g.getPagination())
        }
    })
});
define("../bubble/component/playJoiner", ["../service/BubbleCommonInterface", "../service/ParamFacility", "../../../common/service/cloudControl/comment", "../service/BubblePingback"],
function(a, b, c) {
    var d = a("../service/BubbleCommonInterface"),
    e = a("../service/ParamFacility"),
    f = a("../../../common/service/cloudControl/comment"),
    g = a("../service/BubblePingback"),
    h = $.plugins.Mustache;
    APP.define("page.bubble.component.playJoiner", {
        playInfo: null,
        message: ["PLAYER_LOAD_AND_PLAY"],
        onMessage: function(a, b) {
            a === "PLAYER_LOAD_AND_PLAY" && (this.playInfo = b)
        },
        init: function() {
            this.showInfo()
        },
        listeners: {
            click: function(a, b, c) {
                var d = $(b);
                c == "header" && (g.send({
                    wallid: d.attr("wallId"),
                    wallnm: d.attr("wallName"),
                    t: "20",
                    rseat: "505543_01"
                }), this.jumpToCirclePage())
            }
        },
        showInfo: function() {
            var a = this;
            this.cloudControl().then(function(b) {
                b.paopaoWall ? d.getFeeds(a.feedsParam,
                function(b) {
                    b.wallInfo ? (b.wallInfo.wallUserCount = a.convertCount(b.wallInfo.wallUserCount), b.wallInfo.totalCount = a.convertCount(b.wallInfo.totalCount), a.render(b)) : a.rootElement.addClass("hide")
                },
                function(b) {
                    a.rootElement.addClass("hide")
                }) : a.rootElement.addClass("hide")
            })
        },
        cloudControl: function() {
            return (new $.Deferred(function(a) {
                f.getCommentRule("", e.getCloudParam(location.href),
                function(b) {
                    a.resolve(b)
                },
                function(b) {
                    a.reject(b)
                })
            })).promise()
        },
        convertCount: function(a) {
            var b = +a || 0;
            return b < 0 ? b = 0 : b > 1e4 && (b = (b / 1e4).toFixed(1), b.substr(b.length - 1) === "0" && (b = ( + b).toFixed(0)), b += "万"),
            b
        },
        jumpToCirclePage: function() {
            var a = location.origin + "/m5/bubble/circleInfo.html" + "?" + e.getBackParam(location.href);
            this.playInfo && (a = a.replace(/(tvid=)(\d*)/, "$1" + this.playInfo.tvid)),
            location.href = a
        },
        render: function(a) {
            this.rootElement.html(h.render(this.nodes.tpl.html(), a.wallInfo))
        }
    })
});
define("../../common/service/pingback/WebRTCPingback", [],
function(a, b, c) {
    function d(a, b) {
        a = a || "http://msg.iqiyi.com/b";
        var c = new Image;
        c.onload = c.onerror = c.onabort = function() {
            c.onload = c.onerror = c.onabort = null,
            c = null
        };
        var d = [];
        for (var e in b) d.push(e + "=" + encodeURIComponent(b[e]));
        c.src = a + "?" + d.join("&")
    }
    c.exports = {
        init: function() {
            var a = window.webSocket || window.WebSocket,
            b = window.URL || window.webkitURL,
            c = window.MediaSource || window.WebKitMediaSource,
            e = window.RTCSessionDescription || window.mozRTCSessionDescription,
            f = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection,
            g = window.RTCIceCandidate || window.mozRTCIceCandidate,
            h = a && b && c,
            i = e && f && g,
            j = $.os.android || $.os.ios;
            d("http://msg.71.am/tmpstats.gif", {
                type: "piaoshhtestmayttf",
                des: "h5p2ptest",
                mse: h ? 1 : 0,
                p2p: i ? 1 : 0,
                p: j ? "h5": "pc"
            })
        }
    }
});
define("../../common/service/pingback/pvPingback", ["./pingbackHtml5"],
function(a, b, c) {
    var d = a("./pingbackHtml5");
    c.exports = APP.createService({
        init: function(a) {
            d.page(/pps.tv/i.test(document.domain) ? 2031 : 31, a)
        }
    })
});
define("./service/showPingback", ["../../../common/service/pingback/longyuan4_clickpingback"],
function(a, b, c) {
    var d = a("../../../common/service/pingback/longyuan4_clickpingback");
    c.exports = glue.createService({
        init: function(a) {
            var b = this;
            return this
        },
        sendShowPingback: function(a) {
            var b = this;
            for (var c = 0; c < a.length; c++) {
                var e = a[c].ele.attr("data-block").trim();
                switch (e) {
                case "recommend":
                case "aroundVideo":
                case "playList":
                case "hotBodan":
                    APP.postMessage("SCROLL_TO_" + e.toUpperCase());
                    break;
                default:
                    d.sendBlock(e)
                }
            }
        }
    })
});
define("../../common/service/advertisement/adPingbackCallback", ["../pingback/searchADPingback"],
function(a, b, c) {
    var d = a("../pingback/searchADPingback");
    c.exports = APP.createService({
        init: function(a) {
            window.searchADPingbackCallback || (window.searchADPingbackCallback = function(b) {
                a ? d.send(b, a) : d.send(b)
            })
        }
    })
});
define("../../common/service/pingback/searchADPingback", [],
function(a, b, c) {
    c.exports = APP.createService({
        send: function(a, b) {
            a = $.extend({
                type: "140704yyzx",
                pf: 2,
                p: 20,
                p1: 201,
                p2: 2011,
                u: $.cookie.get("QC006") || "",
                pu: JSON.parse($.cookie.get("P00002") || "{}").uid || "",
                rn: (new Date).getTime(),
                serverid: "h5recomd"
            },
            a);
            var c = {};
            b === "mixsear" && (c.serverid1 = b, c.block = "50805_2", a.clickType && (a.clickType == "button" ? (c.rseat = "1501272_ssbu", c.action = "startdown") : c.rseat = "1501272_ss")),
            b === "convide" && (c.serverid1 = b, c.block = "50805_1", a.clickType && (a.clickType == "button" ? (c.rseat = "1501272_plabu", c.action = "startdown") : c.rseat = "1501272_pla")),
            a = $.extend(a, c);
            var d = new Image;
            d.src = "http://msg.71.am/tmpstats.gif?" + $.url.jsonToQuery(a)
        }
    })
});
define("../../common/service/statistic/fv", [],
function(a, b, c) {
    c.exports = APP.createService({
        init: function() {
            var a = "QC142",
            b = $.url.queryToJson(location.href);
            b.fv && $.cookie.set(a, b.fv, {
                expires: 2592e5,
                domain: ".iqiyi.com",
                path: "/"
            })
        }
    })
});
define("./service/vipPingback", [],
function(a, b, c) {
    var d = "http://msg.vip.qiyi.com/qya.gif",
    e = function(a) {
        var b = {
            qy_n: (new Date).getTime(),
            qy_cid: "",
            qy_fcode: $.cookie.get("QC009") || "",
            qy_platform: "97ae2982356f69d8",
            qy_ref: document.referrer,
            qy_sid: "",
            qy_url: location.href,
            qy_uid: $.cookie.get("QY009") || "",
            qy_ppuid: $.cookie.get("P00001") || "",
            qy_type: 1,
            qy_jsuid: $.cookie.get("QC006") || "",
            qy_pt: "P"
        };
        for (var c in a) b[c] = a[c];
        var e = [];
        for (c in b) typeof b[c] != "undefined" && e.push(c + "=" + encodeURIComponent(b[c]));
        var f = new Image;
        f.src = d + "?" + e.join("&")
    },
    f = function() {
        var a = Q.PageInfo.playInfo && Q.PageInfo.playInfo.isVip;
        a && e({
            qy_pt: "P"
        })
    };
    c.exports = APP.createService({
        send: function(a) {
            f()
        }
    })
});
define("../../common/service/config/velocityExtend", [],
function(a, b, c) {
    var d = $.plugins.Velocity,
    e = APP.createService({
        init: function() {
            d.register({
                stringUtils: {
                    isEmpty: function(a) {
                        return a == "" || typeof a == "undefined" || a.length == 0
                    }
                }
            })
        }
    });
    c.exports = e
});