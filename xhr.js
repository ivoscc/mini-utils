/*! Mini-utils 2013-11-27 */
define(["./promise"],function(a){var b,c,d,e,f,g,h,i;return i=function(b,c,d,e){var f,g,h,i,j;f=function(a){return 4===i.readyState?(i.removeEventListener(a.type,f),h.resolve(i.status,i.response)):void 0},h=new a,i=new XMLHttpRequest,i.open(e,b);for(g in d)j=d[g],i.setRequestHeader(g,j);return i.addEventListener("readystatechange",f),i.send(c),h},e=function(a,b,c){return i(a,b,c,"GET")},g=function(a,b,c){return i(a,b,c,"OPTIONS")},h=function(a,b,c){return i(a,b,c,"POST")},c=0,f=function(e){var f,g,h;return g=new a,f="jsonp_callback"+ ++c,e+="&callback="+f,h=b(e),window[f]=d(f,h,g),g},b=function(a){var b,c;return b=document.getElementsByTagName("head")[0],c=document.createElement("script"),c.async=!0,c.type="application/javascript",c.src=a,b.appendChild(c),c},d=function(a,b,c){return function(d){return b.parentNode.removeChild(b),c.resolve(d),delete window[a]}},{get:e,options:g,post:h,jsonp:f}});