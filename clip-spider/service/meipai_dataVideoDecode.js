/**
 * Created by yaowenfeng on 2017/5/3.
 */
function getHex(a){
	  var b = "substring",
      c = "split",
      d = "replace";
	 return {
                str: a[b](4),
                hex: a[b](0, 4)[c]("").reverse().join("")
            }
}

function getDec(a){
	  var b = "substring",
      c = "split",
      d = "replace",
	  d = parseInt(a, 16).toString();
	  return {
                pre: d[b](0, 2)[c](""),
                tail: d[b](2)[c]("")
            }
}

function getPos(a,b){
	  return b[0] = a.length - b[0] - b[1],
           b
}

function substr(a,c){
	   var b = "substring",
	   d = "replace"
	   e = "substr"
	   f = a[b](0, c[0]),
       g = a[e](c[0], c[1]);
       return f + a[b](c[0])[d](g, "")
}

function decode(a){
	  var e = "substr",
	  b = getHex(a),
	  c = getDec(b.hex),
	  d = substr(b.str,c.pre);
	  return substr(d, getPos(d, c.tail))
}


