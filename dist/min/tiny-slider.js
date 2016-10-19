!function(){"use strict";var n,t,e,i,r=window,o=document,a=Object,c=null,u=!0,d=!1,l=" ",s="Element",f="create"+s,v="DOMTokenList",h="__defineGetter__",m="defineProperty",p="class",g="List",y=p+g,b="rel",w=b+g,E="div",x="length",C="contains",M="apply",L="HTML",A=("item "+C+" add remove toggle toString toLocaleString").split(l),T=A[2],N=A[3],S=A[4],P="prototype",k=m in a||h in a[P]||c,D=function(n,t,e,i){a[m]?a[m](n,t,{configurable:d===k?u:!!i,get:e}):n[h](t,e)},O=function(t,e){var i=this,r=[],o={},c=0,s=0,f=function(){if(c>=s)for(;s<c;++s)(function(n){D(i,n,function(){return v(),r[n]},d)})(s)},v=function(){var n,i,a=arguments,d=/\s+/;if(a[x])for(i=0;i<a[x];++i)if(d.test(a[i]))throw n=new SyntaxError('String "'+a[i]+'" '+C+" an invalid character"),n.code=5,n.name="InvalidCharacterError",n;for(r=(""+t[e]).replace(/^\s+|\s+$/g,"").split(d),""===r[0]&&(r=[]),o={},i=0;i<r[x];++i)o[r[i]]=u;c=r[x],f()};return v(),D(i,x,function(){return v(),c}),i[A[6]]=i[A[5]]=function(){return v(),r.join(l)},i.item=function(n){return v(),r[n]},i[C]=function(n){return v(),!!o[n]},i[T]=function(){v[M](i,n=arguments);for(var n,a,d=0,s=n[x];d<s;++d)a=n[d],o[a]||(r.push(a),o[a]=u);c!==r[x]&&(c=r[x]>>>0,t[e]=r.join(l),f())},i[N]=function(){v[M](i,n=arguments);for(var n,a={},d=0,s=[];d<n[x];++d)a[n[d]]=u,delete o[n[d]];for(d=0;d<r[x];++d)a[r[d]]||s.push(r[d]);r=s,c=s[x]>>>0,t[e]=r.join(l),f()},i[S]=function(t,e){return v[M](i,[t]),n!==e?e?(i[T](t),u):(i[N](t),d):o[t]?(i[N](t),d):(i[T](t),u)},function(n,t){if(t)for(var e=0;e<7;++e)t(n,A[e],{enumerable:d})}(i,a[m]),i},W=function(n,t,e){D(n[P],t,function(){var n,i=this,r=h+m+t;if(i[r])return n;if(i[r]=u,d===k){for(var a,c=W.mirror=W.mirror||o[f](E),l=c.childNodes,s=l[x],v=0;v<s;++v)if(l[v]._R===i){a=l[v];break}a||(a=c.appendChild(o[f](E))),n=O.call(a,i,e)}else n=new O(i,e);return D(i,t,function(){return n}),delete i[r],n},u)};if(r[v])t=o[f](E)[y],P=r[v][P],t[T][M](t,A),2>t[x]&&(e=P[T],i=P[N],P[T]=function(){for(var n=0,t=arguments;n<t[x];++n)e.call(this,t[n])},P[N]=function(){for(var n=0,t=arguments;n<t[x];++n)i.call(this,t[n])}),t[S](g,d)&&(P[S]=function(t,e){var i=this;return i[(e=n===e?!i[C](t):e)?T:N](t),!!e});else{if(k)try{D({},"support")}catch(n){k=d}O.polyfill=u,r[v]=O,W(r[s],y,p+"Name"),W(r[L+"Link"+s],w,b),W(r[L+"Anchor"+s],w,b),W(r[L+"Area"+s],w,b)}}(),Date.now||(Date.now=function(){return(new Date).getTime()}),function(){"use strict";for(var n=["webkit","moz"],t=0;t<n.length&&!window.requestAnimationFrame;++t){var e=n[t];window.requestAnimationFrame=window[e+"RequestAnimationFrame"],window.cancelAnimationFrame=window[e+"CancelAnimationFrame"]||window[e+"CancelRequestAnimationFrame"]}if(/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent)||!window.requestAnimationFrame||!window.cancelAnimationFrame){var i=0;window.requestAnimationFrame=function(n){var t=Date.now(),e=Math.max(i+16,t);return setTimeout(function(){n(i=e)},e-t)},window.cancelAnimationFrame=clearTimeout}}(),function(){"use strict";"remove"in Element.prototype||(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)})}();var gn=function(n){return n}(window.gn||{});gn.extend=function(){for(var n,t,e,i=arguments[0]||{},r=1,o=arguments.length;r<o;r++)if(null!==(n=arguments[r]))for(t in n)e=n[t],i!==e&&void 0!==e&&(i[t]=e);return i},gn.isInViewport=function(n){var t=n.getBoundingClientRect();return t.bottom>0&&t.right>0&&t.top<document.documentElement.clientHeight&&t.left<document.documentElement.clientWidth},gn.indexOf=function(n,t){for(var e=0;e<n.length;e++)if(n[e]===t)return e;return-1},gn.getSupportedProp=function(n){for(var t=document.documentElement,e=0;e<n.length;e++)if(n[e]in t.style)return n[e]},gn.ready=function(n){if("function"==typeof n)return"complete"===document.readyState?n():void document.addEventListener("DOMContentLoaded",n,!1)},gn.isNodeList=function(n){return"undefined"!=typeof n.item},gn.append=function(n,t){var e,i=gn.isNodeList(n)?n:[n];if("undefined"!=typeof t.nodeType&&1===t.nodeType)for(e=i.length;e--;)i[e].appendChild(t);else if("string"==typeof t)for(e=i.length;e--;)i[e].insertAdjacentHTML("beforeend",t);else if(gn.isNodeList(t)){var r=document.createDocumentFragment();for(e=t.length;e--;)r.insertBefore(t[e],r.firstChild);for(var o=i.length;o--;)i[o].appendChild(r)}},gn.wrap=function(n,t){for(var e=gn.isNodeList(n)?n:[n],i=e.length;i--;){var r=i>0?t.cloneNode(!0):t,o=e[i],a=o.parentNode,c=o.nextSibling;r.appendChild(o),c?a.insertBefore(r,c):a.appendChild(r)}},gn.unwrap=function(n){for(var t=gn.isNodeList(n)?n:[n],e=t.length;e--;){for(var i=t[e],r=i.parentNode;i.firstChild;)r.insertBefore(i.firstChild,i);r.removeChild(i)}};var tinySlider=function(){"use strict";function n(n){function m(){wn.className="tiny-slider",gn.wrap(bn,wn)}function p(){yn=ft(),dn=vt(),vn=ht(),_n=Un||"page"===n.slideBy?yn:n.slideBy}function g(){var n=Nn?k():An+Cn;bn.classList.add("tiny-content",pn),bn.style.cssText+="width: "+(dn+1)*Yn+"px; margin-left: "+-(Kn*dn+Ln)+"px; padding-left: "+n+"px"}function y(){navigator.msMaxTouchPoints&&(wn.classList.add("ms-touch"),wn.addEventListener("scroll",tn,!1))}function b(){""===bn.id?bn.id=un=t():un=bn.id;for(var n=0;n<xn;n++)En[n].id=un+"item"+n}function w(){if(zn||An){for(var n=document.createDocumentFragment(),t=document.createDocumentFragment(),e=Kn;e--;){var i=e%xn,r=En[i].cloneNode(!0),o=En[xn-1-i].cloneNode(!0);c(r,"id"),c(o,"id"),n.insertBefore(r,n.firstChild),t.appendChild(o)}bn.appendChild(n),bn.insertBefore(t,bn.firstChild),En=bn.children}a(En,{style:"width: "+(dn-Cn)+"px; "+Mn+": "+Cn+"px","aria-hidden":"true"})}function E(){Sn&&(n.controlsContainer||(gn.append(wn,'<div class="tiny-controls" aria-label="Carousel Navigation"><button data-controls="prev" tabindex="-1" aria-controls="'+un+'" type="button">'+Pn[0]+'</button><button data-controls="next" tabindex="0" aria-controls="'+un+'" type="button">'+Pn[1]+"</button></div>"),kn=wn.querySelector(".tiny-controls")),ln=kn.querySelector('[data-controls="prev"]'),sn=kn.querySelector('[data-controls="next"]'),r(kn,"tabindex")||(a(kn,{"aria-label":"Carousel Navigation"}),a(kn.children,{"aria-controls":un,tabindex:"-1"})))}function x(){if(Dn){if(!n.navContainer){for(var t="",e=0;e<xn;e++)t+='<button data-slide="'+e+'" tabindex="-1" aria-selected="false" aria-controls="'+un+"item"+e+'" type="button"></button>';Fn&&(t+='<button data-action="stop" type="button"><span hidden>Stop Animation</span>'+Hn[0]+"</button>"),t='<div class="tiny-nav" aria-label="Carousel Pagination">'+t+"</div>",gn.append(wn,t),On=wn.querySelector(".tiny-nav")}if(fn=On.querySelectorAll("[data-slide]"),!r(On,"aria-label")){a(On,{"aria-label":"Carousel Pagination"});for(var i=0;i<xn;i++)a(fn[i],{tabindex:"-1","aria-selected":"false","aria-controls":un+"item"+i})}for(var o=vn;o<xn;o++)a(fn[o],{hidden:""});$n=vn}}function C(){Fn&&(On||(gn.append(wn,'<div class="tiny-nav" aria-label="Carousel Pagination"><button data-action="stop" type="button"><span hidden>Stop Animation</span>'+Hn[0]+"</button></div>"),On=wn.querySelector(".tiny-nav")),rt=On.querySelector("[data-action]"),X())}function M(){hn=mt();for(var n=hn;n<hn+yn;n++)a(En[n],{"aria-hidden":"false"});Sn&&(a(sn,{tabindex:"0"}),(0===nt&&!zn||jn)&&(ln.disabled=!0)),Dn&&a(fn[0],{tabindex:"0","aria-selected":"true"})}function L(){if(Xn&&(bn.addEventListener("touchstart",en,!1),bn.addEventListener("touchmove",rn,!1),bn.addEventListener("touchend",on,!1),bn.addEventListener("touchcancel",on,!1)),Dn)for(var n=0;n<xn;n++)fn[n].addEventListener("click",V,!1),fn[n].addEventListener("keydown",nn,!1);if(Sn&&(ln.addEventListener("click",U,!1),sn.addEventListener("click",_,!1),ln.addEventListener("keydown",Z,!1),sn.addEventListener("keydown",Z,!1)),Fn&&(rt.addEventListener("click",Y,!1),Sn&&(ln.addEventListener("click",$,!1),sn.addEventListener("click",$,!1)),Dn))for(var t=0;t<xn;t++)fn[t].addEventListener("click",$,!1);Wn&&document.addEventListener("keydown",J,!1),window.addEventListener("resize",an,!1),window.addEventListener("scroll",cn,!1)}function A(){if(Vn&&gn.isInViewport(bn)){for(var n=[],t=nt+Kn,e=t-1;e<t+yn+1;e++){for(var i=En[e].querySelectorAll(".tiny-lazy"),r=i.length;r--;n.unshift(i[r]));n.unshift()}for(var a=n.length;a--;){var c=n[a];c.classList.contains("loaded")||(c.src=o(c,"data-src"),c.classList.add("loaded"))}}}function T(){if(Gn){var n=[];hn=mt();for(var t=hn-1;t<hn+yn;t++)for(var e=En[t].querySelectorAll("img"),i=e.length;i--;)n.push(e[i]);0===n.length?D():N(n)}}function N(n){for(var t=n.length;t--;)s(n[t])&&n.splice(t,1);0===n.length?D():setTimeout(function(){N(n)},16)}function S(){m(),p(),g(),y(),b(),w(),E(),x(),C(),M(),L(),P(),A(),T()}function P(){xn<=yn?(Dn=Sn=Fn=zn=jn=!1,nt=0,On&&d(On),kn&&d(kn),rt&&d(rt)):(Dn=n.nav,Sn=n.controls,Fn=n.autoplay,zn=!n.rewind&&n.loop,jn=n.rewind,Dn&&l(On),Sn&&l(kn),Fn&&l(rt))}function k(){var n=wn.clientWidth;return(n-dn*Math.floor(n/dn)+Cn)/2}function D(){var n,t=[];hn=mt();for(var e=hn-Tn;e<hn+yn;e++)t.push(En[e].offsetHeight);n=Math.max.apply(null,t),gt(1),bn.style.height=n+"px",tt=!0,setTimeout(function(){tt=!1},In)}function O(){wn.style.msScrollSnapPointsX="snapInterval(0%, "+dn+")"}function W(){var n,t,e,i,r=hn;hn=mt(),hn!==r&&(hn>r?(n=r,t=Math.min(r+yn,hn),e=Math.max(r+yn,hn),i=hn+yn):(n=Math.max(hn+yn,r),t=r+yn,e=hn,i=Math.min(hn+yn,r))),_n%1!==0&&(n=Math.round(n),t=Math.round(t),e=Math.round(e),i=Math.round(i));for(var o=n;o<t;o++)a(En[o],{"aria-hidden":"true"});for(var c=e;c<i;c++)a(En[c],{"aria-hidden":"false"})}function I(){if(vn!==$n)if(vn>$n)for(var n=$n;n<vn;n++)c(fn[n],"hidden");else for(var t=vn;t<$n;t++)a(fn[t],{hidden:""});$n=vn}function F(){var t;if(Jn===-1){var e=nt<0?nt+xn:nt%xn;if(n.navContainer)return e;var t=Math.floor(e/yn);return zn||xn%yn===0||nt!==xn-yn||(t+=1),t}return t=Jn,Jn=-1,t}function q(){Dn&&(Qn=F(),Qn!==Zn&&(a(fn[Zn],{tabindex:"-1","aria-selected":"false"}),a(fn[Qn],{tabindex:"0","aria-selected":"true"}),Zn=Qn))}function B(){if(Sn&&!zn)if(0===nt||!jn&&nt===xn-yn){var n=0===nt?ln:sn,t=0===nt?sn:ln;Q(n,t),n.disabled=!0,a(n,{tabindex:"-1"}),t.disabled=!1,a(t,{tabindex:"0"})}else ln.disabled=!1,sn.disabled=!1}function H(){p(),P(),pt(),I(),navigator.msMaxTouchPoints&&O(),gt(0),yt(),G()}function j(){var n=_n-Kn+Tn,t=xn+Kn-yn-_n-1;(nt<n||nt>t)&&(nt-xn>=n&&nt-xn<=t?nt-=xn:nt+=xn,tt=!0,gt(0),yt(),tt=!1)}function z(n){bn.setAttribute("aria-busy","true"),tt=!0,gt(n),yt(),setTimeout(function(){zn&&j(),G(),tt=!1,bn.setAttribute("aria-busy","false")},In*n)}function G(){W(),q(),B(),A(),T()}function R(n){if(!tt){var t=nt+n*_n,e=Math.abs(n*_n);nt=zn?t:Math.max(0,Math.min(t,xn-yn)),z(e)}}function U(){R(-1)}function _(){R(jn&&nt===xn-yn?(yn-xn)/_n:1)}function V(t){if(!tt){for(var e,i=t.target||t.srcElement;gn.indexOf(fn,i)===-1;)i=i.parentNode;Jn=e=Number(o(i,"data-slide"));var r,a;r=n.navContainer?e:e*yn,r=zn?r:Math.min(r,xn-yn),a=Math.abs(r-nt),nt=r,z(a)}}function X(){it=setInterval(function(){R(Bn)},qn),rt.setAttribute("data-action","stop"),rt.innerHTML="<span hidden>Stop Animation</span>"+Hn[1],ot=!0}function K(){clearInterval(it),rt.setAttribute("data-action","start"),rt.innerHTML="<span hidden>Stop Animation</span>"+Hn[0],ot=!1}function Y(){ot?K():X()}function $(){ot&&K()}function J(n){n=n||window.event,n.keyCode===h.LEFT?R(-1):n.keyCode===h.RIGHT&&R(jn&&nt===xn-yn?(yn-xn)/_n:1)}function Q(n,t){"object"==typeof n&&"object"==typeof t&&n===document.activeElement&&(n.blur(),t.focus())}function Z(n){n=n||window.event;var t=n.keyCode,e=document.activeElement;switch(t){case h.LEFT:case h.UP:case h.HOME:case h.PAGEUP:e!==ln&&ln.disabled!==!0&&Q(e,ln);break;case h.RIGHT:case h.DOWN:case h.END:case h.PAGEDOWN:e!==sn&&sn.disabled!==!0&&Q(e,sn);break;case h.ENTER:case h.SPACE:e===sn?_():U()}}function nn(n){n=n||window.event;var t=n.keyCode,e=document.activeElement,i=o(e,"data-slide");switch(t){case h.LEFT:case h.PAGEUP:i>0&&Q(e,e.previousElementSibling);break;case h.UP:case h.HOME:0!==i&&Q(e,fn[0]);break;case h.RIGHT:case h.PAGEDOWN:i<vn-1&&Q(e,e.nextElementSibling);break;case h.DOWN:case h.END:i<vn-1&&Q(e,fn[vn-1]);break;case h.ENTER:case h.SPACE:V(n)}}function tn(){gt(0),yt(bn.scrollLeft())}function en(n){var t=n.changedTouches[0];at=parseInt(t.clientX),ct=parseInt(t.clientY)}function rn(n){var t=n.changedTouches[0];dt=parseInt(t.clientX)-at,lt=parseInt(t.clientY)-ct;var r=i(e(lt,dt),15);if("horizontal"===r&&tt===!1&&(st=!0),st){var o=zn?-(xn+Kn-yn)*dn:-(xn-yn)*dn,a=zn?Kn*dn:0;!zn&&Nn&&(o=-(xn*dn-wn.clientWidth)),ut=-nt*dn+dt,ut=Math.max(o,Math.min(ut,a)),gt(0),yt(ut),n.preventDefault()}}function on(n){var t=n.changedTouches[0];if(dt=parseInt(t.clientX)-at,st&&0!==dt){n.preventDefault(),st=!1,ut=-nt*dn+dt;var e,i=zn?-Kn:0,r=zn?xn+Kn-yn:xn-yn;e=-(ut/dn),e=dt<0?Math.ceil(e):Math.floor(e),e=Math.max(i,Math.min(e,r)),nt=e,z(1)}}function an(){clearTimeout(mn),mn=setTimeout(function(){H()},100)}function cn(){et||window.requestAnimationFrame(function(){A(),et=!1}),et=!0}if(n=gn.extend({container:document.querySelector(".slider"),transform:"horizontal",items:1,gutter:0,gutterPosition:"right",edgePadding:0,fixedWidth:!1,slideByPage:!1,slideBy:1,controls:!0,controlsText:["prev","next"],controlsContainer:!1,nav:!0,navContainer:!1,arrowKeys:!1,speed:250,autoplay:!1,autoplayTimeout:5e3,autoplayDirection:"forward",autoplayText:["start","stop"],loop:!0,autoHeight:!1,responsive:!1,lazyload:!1,touch:!0,rewind:!1},n||{}),"object"!=typeof n.container||null===n.container)return{init:function(){},destory:function(){}};var un,dn,ln,sn,fn,vn,hn,mn,pn=n.transform,yn=n.items,bn=n.container,wn=document.createElement("div"),En=bn.children,xn=En.length,Cn=n.gutter,Mn="right"===n.gutterPosition?"margin-right":"margin-left",Ln="left"===n.gutterPosition?Cn:0,An=n.edgePadding,Tn=An?1:0,Nn=n.fixedWidth,Sn=n.controls,Pn=n.controlsText,kn=!!n.controlsContainer&&n.controlsContainer,Dn=n.nav,On=!!n.navContainer&&n.navContainer,Wn=n.arrowKeys,In=f?n.speed:0,Fn=n.autoplay,qn=n.autoplayTimeout,Bn="forward"===n.autoplayDirection?1:-1,Hn=n.autoplayText,jn=n.rewind,zn=!n.rewind&&n.loop,Gn=n.autoHeight,Rn=!Nn&&n.responsive,Un=n.slideByPage,_n=Un||"page"===n.slideBy?yn:n.slideBy,Vn=n.lazyload,Xn=n.touch,Kn=zn?Math.ceil(1.5*xn):An?1:0,Yn=xn+2*Kn,$n=xn,Jn=-1,Qn=0,Zn=0,nt=0,tt=!1,et=!1;if(Fn)var it,rt,ot=!1;if(Xn)var at=0,ct=0,ut=0,dt=0,lt=0,st=!1;var ft=function(){return Nn?function(){return Math.max(1,Math.min(xn,Math.floor(wn.clientWidth/Nn)))}:function(){var t=n.items,e=document.documentElement.clientWidth,i="object"==typeof Rn&&Object.keys(Rn);if(i)for(var r=0;r<i.length;r++)e>=i[r]&&(t=Rn[i[r]]);return Math.max(1,Math.min(xn,t))}}(),vt=function(){return Nn?function(){return Nn+Cn}:navigator.appVersion.indexOf("MSIE 8")>0?function(){return Math.round((wn.clientWidth-Cn-2*An)/yn)}:function(){return(wn.clientWidth-Cn-2*An)/yn}}(),ht=function(){return n.navContainer?function(){return xn}:function(){return Math.ceil(xn/yn)}}(),mt=function(){return Kn+nt},pt=function(){return Nn?function(){bn.style.paddingLeft=k()+"px"}:function(){bn.style.width=(dn+1)*Yn+"px",bn.style.marginLeft=-(Kn*dn+Ln)+"px";for(var n=Yn;n--;)En[n].style.width=dn-Cn+"px"}}(),gt=function(){return f?function(n){bn.style[f]=In*n/1e3+"s"}:function(){}}(),yt=function(){return v?function(n){var t=n||-dn*nt;bn.style[v]="translate3d("+t+"px, 0, 0)"}:function(n){var t=n||-dn*nt;bn.style.left=t+"px"}}();return{init:S,destory:function(){if(gn.unwrap(wn),wn=null,bn.classList.remove("tiny-content",pn),c(bn,["id","style"]),zn)for(var t=Kn;t--;)En[0].remove(),En[En.length-1].remove();c(En,["id","style","aria-hidden"]),un=xn=null,Sn&&(n.controlsContainer?(c(kn,["aria-label"]),c(kn.children,["aria-controls","tabindex"]),u(kn)):(kn.remove(),kn=ln=sn=null)),Dn&&(n.navContainer?(c(On,["aria-label"]),c(fn,["aria-selected","aria-controls","tabindex"]),u(On)):(On.remove(),On=null),fn=null),Fn&&(n.navContainer||null===On?u(rt):(On.remove(),On=null)),Xn&&u(bn),Wn&&document.removeEventListener("keydown",Wn,!1),window.removeEventListener("resize",an,!1),window.removeEventListener("scroll",cn,!1)},hasAttr:r,getAttr:o,setAttrs:a,removeAttrs:c,removeEvents:u,getSliderId:t,toDegree:e,getPanDirection:i,hideElement:d,showElement:l,transform:pn,gutter:Cn,gutterPosition:n.gutterPosition,edgePadding:An,fixedWidth:Nn,controls:Sn,nav:Dn,rewind:jn,loop:zn,autoHeight:Gn,slideBy:_n,lazyload:Vn,touch:Xn,speed:In,items:ft(),cloneCount:Kn,navCountVisible:function(){return vn},index:function(){return nt},slideWidth:function(){return dn},running:function(){return tt},sliderContainer:bn,slideItems:En,slideCount:xn,controlsContainer:function(){return kn},prevButton:function(){return ln},nextButton:function(){return sn},navContainer:function(){return On},allNavs:function(){return fn}}}function t(){return void 0===window.tinySliderNumber?window.tinySliderNumber=1:window.tinySliderNumber++,"tinySlider"+window.tinySliderNumber}function e(n,t){return Math.atan2(n,t)*(180/Math.PI)}function i(n,t){return Math.abs(90-Math.abs(n))>=90-t?"horizontal":Math.abs(90-Math.abs(n))<=t&&"vertical"}function r(n,t){return n.hasAttribute(t)}function o(n,t){return n.getAttribute(t)}function a(n,t){if(n=gn.isNodeList(n)||n instanceof Array?n:[n],"[object Object]"===Object.prototype.toString.call(t))for(var e=n.length;e--;)for(var i in t)n[e].setAttribute(i,t[i])}function c(n,t){n=gn.isNodeList(n)||n instanceof Array?n:[n],t=t instanceof Array?t:[t];for(var e=t.length,i=n.length;i--;)for(var r=e;r--;)n[i].removeAttribute(t[r])}function u(n){var t=n.cloneNode(!0),e=n.parentNode;e.insertBefore(t,n),n.remove(),n=null}function d(n){r(n,"hidden")||a(n,{hidden:""})}function l(n){r(n,"hidden")&&c(n,"hidden")}function s(n){return"boolean"==typeof n.complete?n.complete:"number"==typeof n.naturalWidth?0!==n.naturalWidth:void 0}var f=gn.getSupportedProp(["transitionDuration","WebkitTransitionDuration","MozTransitionDuration","OTransitionDuration"]),v=gn.getSupportedProp(["transform","WebkitTransform","MozTransform","OTransform"]),h={ENTER:13,SPACE:32,PAGEUP:33,PAGEDOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40};return n}();
//# sourceMappingURL=../sourcemaps/tiny-slider.js.map
