
function funcd(Y, r) {
        return Y % r
}

function funcO(Y, r) {
        return Y ^ r
    }
function funco(Y, r) {
        return Y & r
    }

function funcg(Y, r) {
        return Y > r
    }

function rotateRight(e, t) {
        var _1 = "g"
          , _2 = "o";
        for (var r, n = 0; funcg(t, n); n++)
            r = funco(1, e),
            e >>= 1,
            r <<= 31,
            e += r;
        return e
    }


function mainfunc(e) {
        var _1 =  "d"
          , _2 = "rotateRight"
          , _3 = "O";
        var t = 47.3E2 <= (67.01E3,
        78.4E1) ? ("d",
        37.2E2) : 4.1E2 <= (0x2b,
        95) ? 0x63 : (13.956E2,
        42.453E2) <= 0x2 ? (93.79E2,
        "error") : (0x28,
        97.) < ("error",
        8.) ? (",",
        "g") : (96.31E3,
        92.926E0) >= (0x35,
        0x5d) ? 0x62 : 10. >= (64.5E1,
        55.) ? 79.671E1 : 62.2E2 <= 0x2a ? (20.908E1,
        93.) : (0x1b,
        2.49E1) < 0x5e ? (52,
        0xb074319) : (11,
        75.1E1) < (60.,
        55.42E1) ? (0x11,
        50.66E1) : (85.224E+2,
        0x5d)
          , r = funcd(t, 17)
          , n = e;
        n = rotateRight(n, r);
        var o = funcO(n, t);
        return o
    }





