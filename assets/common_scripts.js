




/*
     FILE ARCHIVED ON 1:33:23 Apr 2, 2005 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 12:41:22 Sep 16, 2016.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
d=document;
l=d.layers; //netscape 4 detection trick.
ua=navigator.userAgent;
op=ua.indexOf('Opera')!=-1;
ie=ua.indexOf("MSIE")!=-1;
moz=ua.indexOf("Gecko")!=-1;

nn7=ua.indexOf("Netscape/7.0")!=-1;
moz0=moz1=moz2=kon=0;
if (moz) {moz1=ua.indexOf("rv:1")!=-1}
if (moz) {moz0=ua.indexOf("rv:0")!=-1}
if (moz) {moz2=ua.substr(ua.indexOf("rv:")+3,3)>1.5}
kon=ua.indexOf("Konqueror")!=-1;
mac=navigator.platform.indexOf("PPC") !=-1;
compat=d.compatMode=="CSS1Compat";


//1k DHTML API functions /web/20050402013323/http://www.dithered.com
function gE(e,f){if(l){f=(f)?f:self;var V=f.document.layers;if(V[e])return V[e];for(var W=0;W<V.length;)t=gE(e,V[W++]);return t;}if(d.all)return d.all[e];return d.getElementById(e);}
function dE(e){e.style.display='block';}
function dRE(e){e.style.display='none';}
function hE(e){e.style.visibility='hidden';}
function sE(e){e.style.visibility='visible';}
function sX(e,x){op?e.style.pixelLeft=x:e.style.left=x;}
function sY(e,y){op?e.style.pixelTop=y:e.style.top=y;}
function gH(){if(ie||moz1){if(d.body) return d.body.scrollHeight; return d.documentElement.scrollHeight;}; if(kon){ if(d.body) return d.body.clientHeight; return d.documentElement.clientHeight;}; if(moz0) return window.innerHeight; return 0;};
function gW(){if(ie||moz1){if(d.body) return d.body.scrollWidth; return d.documentElement.scrollWidth;}; if(kon){if(d.body) return d.body.clientWidth; return d.documentElement.clientWidth;}; if(moz0) return window.innerWidth; return 0;};

var adChannel = ""; 
var pageWidth = 0;
var pageHeight = 0;
var HWset=false;
function setHW(){if(!HWset){if(compat&&(ie||moz2)){var pe=d.documentElement;}else{if(d.body)pe=d.body;};if(kon){pageWidth=pe.scrollWidth;pageHeight=pe.scrollHeight;}else{pageWidth=pe.clientWidth;pageHeight=pe.clientHeight;};};HWset=true;}
function displayTopAd(){setHW();return (pageWidth>300&&pageHeight>300);};
function displayAd(){if(nn7||(ie&&mac))return 0;return displayTopAd();}

var inNetworkRegEx = new RegExp("^(javascript:|http://([\\w\\.\\-]*\\.)?(tripod|angelfire|lycos).com)");

function setKeywordCookie(keyword) {
    if (keyword == "(none)") {
        keyword = '';
    }

    var expdate = new Date ();
    expdate.setTime(expdate.getTime() + (24 * 60 * 60 * 30));
    SetCookie("Keyword", keyword, '', "/", ".angelfire.com");
}

function buildExitHandler() {
    if (document.getElementsByTagName) {
        var arrAnchor = document.getElementsByTagName('A');
        for (i=0; i < arrAnchor.length; i++){
            if (arrAnchor[i].getAttribute) {
                if (!arrAnchor[i].onclick &&
		    !inNetworkRegEx.test(arrAnchor[i].href)) {
                    arrAnchor[i].onclick = function() {return exitPage(this);};
                }
            }
        }
    }
}

function exitPage(a) {
    var keyword = GetCookie("Keyword");
    var visited = GetCookie("ExitAd");

    if (keyword && !visited) {
	// set cookie
	var expdate = new Date();

	var random_num = Math.round((Math.random()*999999));
	expdate.setTime(expdate.getTime() + (24 * 60 * 60));
	SetCookie("ExitAd", "viewed", expdate, "/", ".angelfire.com");

	// show exit ad
	var u = "/web/20050402013323/http://adbuyer3.lycos.com/exit_pop/results_full_pop_new2.asp?bc=&abaffid=49258" 
	    +   "&fwaffid=49260&at=ATe0UU2O5SYBvMif7CDrvQN2"; 
	
	var w = window.open('', "af_exit", 'height=315,width=630,scrollbars=no,resizable=yes' +
			    'toolbar=no,directories=no,status=no,menubar=no' );
	if (w) {
	    w.blur(); 
	    w.location = u + "&mt=" + keyword;
	    window.focus();

	    var exitImg=d.createElement('IMG');
	    exitImg.onload=function() {document.location.href=a;};
	    exitImg.src="/doc/images/track/ot_exitpage.gif?rand=" + random_num +
		((visited) ? "&visited=1" : "") +
		((keyword) ? "&keyword=" + keyword  : "");
	    return false;// follow link after loading the tracking pixel
	} else {
	    var nopopImg=d.createElement('IMG'); 
	    nopopupImg.onload=function() {document.location.href=a;};
	    nopopImg.src="/doc/images/track/ot_popupblocked.gif?type=exit&rand=" + random_num;
	    return false; // follow link after loading the tracking pixel
	}
    }

    return true;
}

function SetCookie(name,value,expires,path,domain,secure){
    document.cookie = name + "=" + escape(value) +
                      ((expires) ? "; expires=" + expires.toGMTString() : "") +
                      ((path) ? "; path=" + path : "") +
                      ((domain) ? "; domain=" + domain : "") +
                      ((secure) ? "; secure" : "");
}

function GetCookie(name) {
    var dc = document.cookie;
    // find beginning of cookie value in document.cookie
    var prefix = name + "=";
    var begin = dc.indexOf("; " + prefix);
    if (begin == -1) {
        begin = dc.indexOf(prefix);
        if (begin != 0) return null;
    }
    else begin += 2;
    // find end of cookie value
    var end = document.cookie.indexOf(";", begin);
    if (end == -1) end = dc.length;
    // return cookie value
    return unescape(dc.substring(begin + prefix.length, end));
}

function showAd(adId) {
    var inlinead = document.getElementById(adId);
    var bodyRef = document.getElementsByTagName("body").item(0);
    bodyRef.removeChild(inlinead);
    inlinead.style.display = "block";
    bodyRef.appendChild(inlinead);
}

function parseQueryString (str) {
    str = str ? str : location.search;
    var query = str.charAt(0) == '?' ? str.substring(1) : str;
    var args = new Object();
    if (query) {
	var fields = query.split('&');
	for (var f = 0; f < fields.length; f++) {
	    var field = fields[f].split('=');
	    args[unescape(field[0].replace(/\+/g, ' '))] = 
		unescape(field[1].replace(/\+/g, ' '));
	}
    }
    return args;
}

function setAdGroup(ip) {
    var QUERY_DATA = parseQueryString();
    if (QUERY_DATA["ad_channel"]) {
	adChannel = QUERY_DATA["ad_channel"];
	return;
    }

    var ipParts = ip.split(".");
    var rawIP = 0;
    var ipHash;
    
    rawIP = (ipParts[0] << 24) | (ipParts[1] << 16) | 
	    (ipParts[2] <<  8) | ipParts[3];
    
    ipHash = Math.abs(rawIP % 100);
    if (ipHash <= 10) {
	adChannel = "ch1"; 
    } else {
	if (ipHash <= 20) {
	    adChannel = "ch2";
	}
    }
}

function launchSidebar() {}
