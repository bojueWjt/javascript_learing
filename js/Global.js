//global对象和Math、Date等这类对象一样属于单例


//encodeURI(uri)此方法对字符进行转码

var url = "http://www.baidu.com?王嘉涛";
var a = encodeURI(url);

console.log(a);

//encodeURIComponent(s)此方法会对包括URL中的保留字也会进行转码 这是它与encodeURI方法不同的地方

var b = encodeURIComponent(url);

console.log(b);

//decodeURI(uri)和decodeURIComponent(s)两个方法则是进行和以上两个转码方式相对应的转码

var c = decodeURI(a);

console.log(c);

var d = decodeURIComponent(b);

console.log(d);