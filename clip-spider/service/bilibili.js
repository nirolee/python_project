/**
 * Created by ql on 2017/5/4.
 */

function token(n) {
    var e = "bilibili_" + Date.parse(new Date) / 1e3;
    var o = wordsToBytes(a(e, n));
    return n && n.asBytes ? o : n && n.asString ? bytesToString(o) : bytesToHex(o)
}

function bytesToHex(e) {
    for (var t = [], n = 0; n < e.length; n++)
        t.push((e[n] >>> 4).toString(16)),
            t.push((15 & e[n]).toString(16));
    return t.join("")
}

function bytesToString(e) {
    for (var t = [], n = 0; n < e.length; n++)
        t.push(String.fromCharCode(e[n]));
    return t.join("")
}

function bytesToWords(e) {
    for (var t = [], n = 0, o = 0; n < e.length; n++,
        o += 8)
        t[o >>> 5] |= e[n] << 24 - o % 32;
    return t
}

function wordsToBytes(e) {
    for (var t = [], n = 0; n < 32 * e.length; n += 8)
        t.push(e[n >>> 5] >>> 24 - n % 32 & 255);
    return t
}

function stringToBytes(e) {
    for (var t = [], n = 0; n < e.length; n++)
        t.push(255 & e.charCodeAt(n));
    return t
}

function ostringToBytes(e) {
    return stringToBytes(unescape(encodeURIComponent(e)))
}

function r(e) {
    return null != e && (n(e) || o(e) || !!e._isBuffer)
}

function n(e) {
    return !!e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
}

function o(e) {
    return "function" == typeof e.readFloatLE && "function" == typeof e.slice && n(e.slice(0, 0))
}

function _ff(e, t, n, o, r, i, a) {
    var s = e + (t & n | ~t & o) + (r >>> 0) + a;
    return (s << i | s >>> 32 - i) + t
}

function _gg(e, t, n, o, r, i, a) {
    var s = e + (t & o | n & ~o) + (r >>> 0) + a;
    return (s << i | s >>> 32 - i) + t
}

function _hh(e, t, n, o, r, i, a) {
    var s = e + (t ^ n ^ o) + (r >>> 0) + a;
    return (s << i | s >>> 32 - i) + t
}

function _ii(e, t, n, o, r, i, a) {
    var s = e + (n ^ (t | ~o)) + (r >>> 0) + a;
    return (s << i | s >>> 32 - i) + t
}

function a(e, n) {
    e.constructor == String ? e = n && "binary" === n.encoding ? stringToBytes(e) : ostringToBytes(e) : r(e) ? e = Array.prototype.slice.call(e, 0) : Array.isArray(e) || (e = e.toString());
    for (var a = bytesToWords(e), c = 8 * e.length, l = 1732584193, u = -271733879, p = -1732584194, d = 271733878, f = 0; f < a.length; f++)
        a[f] = 16711935 & (a[f] << 8 | a[f] >>> 24) | 4278255360 & (a[f] << 24 | a[f] >>> 8);
    a[c >>> 5] |= 128 << c % 32,
        a[(c + 64 >>> 9 << 4) + 14] = c;
    for (var h = _ff, m = _gg, v = _hh, y = _ii, f = 0; f < a.length; f += 16) {
        var g = l
            , _ = u
            , b = p
            , w = d;
        l = h(l, u, p, d, a[f + 0], 7, -680876936),
            d = h(d, l, u, p, a[f + 1], 12, -389564586),
            p = h(p, d, l, u, a[f + 2], 17, 606105819),
            u = h(u, p, d, l, a[f + 3], 22, -1044525330),
            l = h(l, u, p, d, a[f + 4], 7, -176418897),
            d = h(d, l, u, p, a[f + 5], 12, 1200080426),
            p = h(p, d, l, u, a[f + 6], 17, -1473231341),
            u = h(u, p, d, l, a[f + 7], 22, -45705983),
            l = h(l, u, p, d, a[f + 8], 7, 1770035416),
            d = h(d, l, u, p, a[f + 9], 12, -1958414417),
            p = h(p, d, l, u, a[f + 10], 17, -42063),
            u = h(u, p, d, l, a[f + 11], 22, -1990404162),
            l = h(l, u, p, d, a[f + 12], 7, 1804603682),
            d = h(d, l, u, p, a[f + 13], 12, -40341101),
            p = h(p, d, l, u, a[f + 14], 17, -1502002290),
            u = h(u, p, d, l, a[f + 15], 22, 1236535329),
            l = m(l, u, p, d, a[f + 1], 5, -165796510),
            d = m(d, l, u, p, a[f + 6], 9, -1069501632),
            p = m(p, d, l, u, a[f + 11], 14, 643717713),
            u = m(u, p, d, l, a[f + 0], 20, -373897302),
            l = m(l, u, p, d, a[f + 5], 5, -701558691),
            d = m(d, l, u, p, a[f + 10], 9, 38016083),
            p = m(p, d, l, u, a[f + 15], 14, -660478335),
            u = m(u, p, d, l, a[f + 4], 20, -405537848),
            l = m(l, u, p, d, a[f + 9], 5, 568446438),
            d = m(d, l, u, p, a[f + 14], 9, -1019803690),
            p = m(p, d, l, u, a[f + 3], 14, -187363961),
            u = m(u, p, d, l, a[f + 8], 20, 1163531501),
            l = m(l, u, p, d, a[f + 13], 5, -1444681467),
            d = m(d, l, u, p, a[f + 2], 9, -51403784),
            p = m(p, d, l, u, a[f + 7], 14, 1735328473),
            u = m(u, p, d, l, a[f + 12], 20, -1926607734),
            l = v(l, u, p, d, a[f + 5], 4, -378558),
            d = v(d, l, u, p, a[f + 8], 11, -2022574463),
            p = v(p, d, l, u, a[f + 11], 16, 1839030562),
            u = v(u, p, d, l, a[f + 14], 23, -35309556),
            l = v(l, u, p, d, a[f + 1], 4, -1530992060),
            d = v(d, l, u, p, a[f + 4], 11, 1272893353),
            p = v(p, d, l, u, a[f + 7], 16, -155497632),
            u = v(u, p, d, l, a[f + 10], 23, -1094730640),
            l = v(l, u, p, d, a[f + 13], 4, 681279174),
            d = v(d, l, u, p, a[f + 0], 11, -358537222),
            p = v(p, d, l, u, a[f + 3], 16, -722521979),
            u = v(u, p, d, l, a[f + 6], 23, 76029189),
            l = v(l, u, p, d, a[f + 9], 4, -640364487),
            d = v(d, l, u, p, a[f + 12], 11, -421815835),
            p = v(p, d, l, u, a[f + 15], 16, 530742520),
            u = v(u, p, d, l, a[f + 2], 23, -995338651),
            l = y(l, u, p, d, a[f + 0], 6, -198630844),
            d = y(d, l, u, p, a[f + 7], 10, 1126891415),
            p = y(p, d, l, u, a[f + 14], 15, -1416354905),
            u = y(u, p, d, l, a[f + 5], 21, -57434055),
            l = y(l, u, p, d, a[f + 12], 6, 1700485571),
            d = y(d, l, u, p, a[f + 3], 10, -1894986606),
            p = y(p, d, l, u, a[f + 10], 15, -1051523),
            u = y(u, p, d, l, a[f + 1], 21, -2054922799),
            l = y(l, u, p, d, a[f + 8], 6, 1873313359),
            d = y(d, l, u, p, a[f + 15], 10, -30611744),
            p = y(p, d, l, u, a[f + 6], 15, -1560198380),
            u = y(u, p, d, l, a[f + 13], 21, 1309151649),
            l = y(l, u, p, d, a[f + 4], 6, -145523070),
            d = y(d, l, u, p, a[f + 11], 10, -1120210379),
            p = y(p, d, l, u, a[f + 2], 15, 718787259),
            u = y(u, p, d, l, a[f + 9], 21, -343485551),
            l = l + g >>> 0,
            u = u + _ >>> 0,
            p = p + b >>> 0,
            d = d + w >>> 0
    }
    return endian([l, u, p, d])
}

function rotl(e, t) {
    return e << t | e >>> 32 - t
}

function endian(e) {
    if (e.constructor == Number)
        return 16711935 & rotl(e, 8) | 4278255360 & rotl(e, 24);
    for (var t = 0; t < e.length; t++)
        e[t] = endian(e[t]);
    return e
}