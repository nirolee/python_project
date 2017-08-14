function decode64(t) {
    if (!t)
        return "";
    t = t.toString();
    var e, n, i, r, o, a, s, u = new Array((-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), (-1), 62, (-1), (-1), (-1), 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, (-1), (-1), (-1), (-1), (-1), (-1), (-1), 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, (-1), (-1), (-1), (-1), (-1), (-1), 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, (-1), (-1), (-1), (-1), (-1));
    for (a = t.length,
             o = 0,
             s = ""; o < a;) {
        do
            e = u[255 & t.charCodeAt(o++)];
        while (o < a && e == -1);
        if (e == -1)
            break;
        do
            n = u[255 & t.charCodeAt(o++)];
        while (o < a && n == -1);
        if (n == -1)
            break;
        s += String.fromCharCode(e << 2 | (48 & n) >> 4);
        do {
            if (i = 255 & t.charCodeAt(o++),
                61 == i)
                return s;
            i = u[i]
        } while (o < a && i == -1);
        if (i == -1)
            break;
        s += String.fromCharCode((15 & n) << 4 | (60 & i) >> 2);
        do {
            if (r = 255 & t.charCodeAt(o++),
                61 == r)
                return s;
            r = u[r]
        } while (o < a && r == -1);
        if (r == -1)
            break;
        s += String.fromCharCode((3 & i) << 6 | r)
    }
    return s
}

function jie(t, e) {
    for (var n, i = [], r = 0, o = "", a = 0; a < 256; a++)
        i[a] = a;
    for (a = 0; a < 256; a++)
        r = (r + i[a] + t.charCodeAt(a % t.length)) % 256,
            n = i[a],
            i[a] = i[r],
            i[r] = n;
    a = 0,
        r = 0;
    for (var s = 0; s < e.length; s++)
        a = (a + 1) % 256,
            r = (r + i[a]) % 256,
            n = i[a],
            i[a] = i[r],
            i[r] = n,
            o += String.fromCharCode(e.charCodeAt(s) ^ i[(i[a] + i[r]) % 256]);
    return o
}