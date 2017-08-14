/**
 * Created by ql on 2017/4/26.
 */

function getTimeStampStr(a) {
    a = a || 10;
    var b = parseInt(+new Date) + "";
    if (b.length === a)
        return b;
    if (b.length > a)
        return b.substring(0, a);
    for (var c = a - b.length; c > 0;)
        b = "0" + b,
            c--;
    return b
}

function tempcalc(a, b) {
    for (var c = "", d = 0; d < a.length; d++)
        c += String.fromCharCode(a.charCodeAt(d) ^ b.charCodeAt(d % 4));
    return c
}

function hexToString(a) {
    for (var b = "", c = "0x" == a.substr(0, 2) ? 2 : 0; c < a.length; c += 2)
        b += String.fromCharCode(parseInt(a.substr(c, 2), 16));
    return b
}

function u1(a, b) {
    for (var c = "", d = b; d < a.length; d += 2)
        c += a.charAt(d);
    return c
}

function b(a, b) {
    return ((a >> 1) + (b >> 1) << 1) + (1 & a) + (1 & b)
}



function ha(d) {
    a = 16;

    for (var c = [], i = 0; i < 64;)
        c[i] = 0 | 4294967296 * Math.abs(Math.sin(++i));
    for (var e, f, g, h, i = [], j = unescape(encodeURI(d)), k = j.length, l = [e = 1732584193, f = -271733879, ~e, ~f], m = 0; m <= k;)
        i[m >> 2] |= (j.charCodeAt(m) || 128) << 8 * (m++ % 4);
    for (i[d = (k + 8 >> 6) * a + 14] = 8 * k,
             m = 0; m < d; m += a) {
        for (k = l,
                 h = 0; h < 64;)
            k = [g = k[3], b(e = k[1], (g = b(b(k[0], [e & (f = k[2]) | ~e & g, g & e | ~g & f, e ^ f ^ g, f ^ (e | ~g)][k = h >> 4]), b(c[h], i[[h, 5 * h + 1, 3 * h + 5, 7 * h][k] % a + m]))) << (k = [7, 12, 17, 22, 5, 9, 14, 20, 4, 11, a, 23, 6, 10, 15, 21][4 * k + h++ % 4]) | g >>> 32 - k), e, f];
        for (h = 4; h;)
            l[--h] = b(l[h], k[h])
    }
    for (d = ""; h < 32;)
        d += (l[h >> 3] >> 4 * (1 ^ 7 & h++) & 15).toString(a);
    return d
};

_urlStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function urlenc(a, b, d) {
    for (var e, f, g, h, i, j, k, l = "", m = 0; m < a.length;)
        e = a.charCodeAt(m++),
            f = a.charCodeAt(m++),
            g = a.charCodeAt(m++),
        15 == m && (l += "A",
            l += b,
            l += d),
            h = e >> 2,
            i = (3 & e) << 4 | f >> 4,
            j = (15 & f) << 2 | g >> 6,
            k = 63 & g,
            isNaN(f) ? j = k = 64 : isNaN(g) && (k = 64),
            l = l + _urlStr.charAt(h) + _urlStr.charAt(i) + _urlStr.charAt(j) + _urlStr.charAt(k);
    return l
}

//a = "10901", b = "t0396qribkb", d = "v1010", e = "1", f = "1493170380"
function xx(a, b, d, e, f) {
    f = f || parseInt(+new Date / 1e3),
        e = ("" + e).charAt(0);
    var g = ""
        , h = "";
    var j = hexToString(ha(a + b + f + "#$#@#*ad" + g + h + e.charAt(0) + d))
        , k = urlenc(tempcalc(j, "#$#@#*ad"), e.charAt(0), f)
        , m = u1(k, 0)
        , n = u1(k, 1);
    return {
        u1: m,
        u2: n
    }
}