(self.webpackChunkore_ore_gatsbyjs_template=self.webpackChunkore_ore_gatsbyjs_template||[]).push([[644],{7209:function(t,e,r){"use strict";var n="object"==typeof r.g&&r.g&&r.g.Object===Object&&r.g;e.Z=n},9890:function(t,e,r){"use strict";var n=r(7209);t=r.hmd(t);var a="object"==typeof exports&&exports&&!exports.nodeType&&exports,o=a&&t&&!t.nodeType&&t,i=o&&o.exports===a&&n.Z.process,u=function(){try{var t=o&&o.require&&o.require("util").types;return t||i&&i.binding&&i.binding("util")}catch(e){}}();e.Z=u},3906:function(t,e,r){"use strict";var n=r(7209),a="object"==typeof self&&self&&self.Object===Object&&self,o=n.Z||a||Function("return this")();e.Z=o},1473:function(t,e,r){"use strict";r.d(e,{Z:function(){return c}});var n=r(3906);var a=function(){return!1};t=r.hmd(t);var o="object"==typeof exports&&exports&&!exports.nodeType&&exports,i=o&&t&&!t.nodeType&&t,u=i&&i.exports===o?n.Z.Buffer:void 0,c=(u?u.isBuffer:void 0)||a},1478:function(t,e,r){"use strict";r.d(e,{Z:function(){return kr}});var n=function(t,e){for(var r=-1,n=e.length,a=t.length;++r<n;)t[a+r]=e[r];return t},a=r(3906),o=a.Z.Symbol,i=Object.prototype,u=i.hasOwnProperty,c=i.toString,f=o?o.toStringTag:void 0;var l=function(t){var e=u.call(t,f),r=t[f];try{t[f]=void 0;var n=!0}catch(o){}var a=c.call(t);return n&&(e?t[f]=r:delete t[f]),a},s=Object.prototype.toString;var v=function(t){return s.call(t)},p=o?o.toStringTag:void 0;var h=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":p&&p in Object(t)?l(t):v(t)};var d=function(t){return null!=t&&"object"==typeof t};var y=function(t){return d(t)&&"[object Arguments]"==h(t)},b=Object.prototype,m=b.hasOwnProperty,_=b.propertyIsEnumerable,g=y(function(){return arguments}())?y:function(t){return d(t)&&m.call(t,"callee")&&!_.call(t,"callee")},j=Array.isArray,w=o?o.isConcatSpreadable:void 0;var O=function(t){return j(t)||g(t)||!!(w&&t&&t[w])};var E=function t(e,r,a,o,i){var u=-1,c=e.length;for(a||(a=O),i||(i=[]);++u<c;){var f=e[u];r>0&&a(f)?r>1?t(f,r-1,a,o,i):n(i,f):o||(i[i.length]=f)}return i};var A=function(t,e){for(var r=-1,n=null==t?0:t.length,a=Array(n);++r<n;)a[r]=e(t[r],r,t);return a};var z=function(t){return"symbol"==typeof t||d(t)&&"[object Symbol]"==h(t)},x=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,S=/^\w*$/;var k=function(t,e){if(j(t))return!1;var r=typeof t;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=t&&!z(t))||(S.test(t)||!x.test(t)||null!=e&&t in Object(e))};var Z=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)};var M,N=function(t){if(!Z(t))return!1;var e=h(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e},P=a.Z["__core-js_shared__"],I=(M=/[^.]+$/.exec(P&&P.keys&&P.keys.IE_PROTO||""))?"Symbol(src)_1."+M:"";var T=function(t){return!!I&&I in t},F=Function.prototype.toString;var $=function(t){if(null!=t){try{return F.call(t)}catch(e){}try{return t+""}catch(e){}}return""},D=/^\[object .+?Constructor\]$/,C=Function.prototype,L=Object.prototype,U=C.toString,B=L.hasOwnProperty,R=RegExp("^"+U.call(B).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var V=function(t){return!(!Z(t)||T(t))&&(N(t)?R:D).test($(t))};var W=function(t,e){return null==t?void 0:t[e]};var q=function(t,e){var r=W(t,e);return V(r)?r:void 0},Q=q(Object,"create");var G=function(){this.__data__=Q?Q(null):{},this.size=0};var H=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},J=Object.prototype.hasOwnProperty;var K=function(t){var e=this.__data__;if(Q){var r=e[t];return"__lodash_hash_undefined__"===r?void 0:r}return J.call(e,t)?e[t]:void 0},X=Object.prototype.hasOwnProperty;var Y=function(t){var e=this.__data__;return Q?void 0!==e[t]:X.call(e,t)};var tt=function(t,e){var r=this.__data__;return this.size+=this.has(t)?0:1,r[t]=Q&&void 0===e?"__lodash_hash_undefined__":e,this};function et(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}et.prototype.clear=G,et.prototype.delete=H,et.prototype.get=K,et.prototype.has=Y,et.prototype.set=tt;var rt=et;var nt=function(){this.__data__=[],this.size=0};var at=function(t,e){return t===e||t!=t&&e!=e};var ot=function(t,e){for(var r=t.length;r--;)if(at(t[r][0],e))return r;return-1},it=Array.prototype.splice;var ut=function(t){var e=this.__data__,r=ot(e,t);return!(r<0)&&(r==e.length-1?e.pop():it.call(e,r,1),--this.size,!0)};var ct=function(t){var e=this.__data__,r=ot(e,t);return r<0?void 0:e[r][1]};var ft=function(t){return ot(this.__data__,t)>-1};var lt=function(t,e){var r=this.__data__,n=ot(r,t);return n<0?(++this.size,r.push([t,e])):r[n][1]=e,this};function st(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}st.prototype.clear=nt,st.prototype.delete=ut,st.prototype.get=ct,st.prototype.has=ft,st.prototype.set=lt;var vt=st,pt=q(a.Z,"Map");var ht=function(){this.size=0,this.__data__={hash:new rt,map:new(pt||vt),string:new rt}};var dt=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t};var yt=function(t,e){var r=t.__data__;return dt(e)?r["string"==typeof e?"string":"hash"]:r.map};var bt=function(t){var e=yt(this,t).delete(t);return this.size-=e?1:0,e};var mt=function(t){return yt(this,t).get(t)};var _t=function(t){return yt(this,t).has(t)};var gt=function(t,e){var r=yt(this,t),n=r.size;return r.set(t,e),this.size+=r.size==n?0:1,this};function jt(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}jt.prototype.clear=ht,jt.prototype.delete=bt,jt.prototype.get=mt,jt.prototype.has=_t,jt.prototype.set=gt;var wt=jt;function Ot(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var r=function r(){var n=arguments,a=e?e.apply(this,n):n[0],o=r.cache;if(o.has(a))return o.get(a);var i=t.apply(this,n);return r.cache=o.set(a,i)||o,i};return r.cache=new(Ot.Cache||wt),r}Ot.Cache=wt;var Et=Ot;var At=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,zt=/\\(\\)?/g,xt=function(t){var e=Et(t,(function(t){return 500===r.size&&r.clear(),t})),r=e.cache;return e}((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(At,(function(t,r,n,a){e.push(n?a.replace(zt,"$1"):r||t)})),e})),St=o?o.prototype:void 0,kt=St?St.toString:void 0;var Zt=function t(e){if("string"==typeof e)return e;if(j(e))return A(e,t)+"";if(z(e))return kt?kt.call(e):"";var r=e+"";return"0"==r&&1/e==-Infinity?"-0":r};var Mt=function(t){return null==t?"":Zt(t)};var Nt=function(t,e){return j(t)?t:k(t,e)?[t]:xt(Mt(t))};var Pt=function(t){if("string"==typeof t||z(t))return t;var e=t+"";return"0"==e&&1/t==-Infinity?"-0":e};var It=function(t,e){for(var r=0,n=(e=Nt(e,t)).length;null!=t&&r<n;)t=t[Pt(e[r++])];return r&&r==n?t:void 0};var Tt=function(){this.__data__=new vt,this.size=0};var Ft=function(t){var e=this.__data__,r=e.delete(t);return this.size=e.size,r};var $t=function(t){return this.__data__.get(t)};var Dt=function(t){return this.__data__.has(t)};var Ct=function(t,e){var r=this.__data__;if(r instanceof vt){var n=r.__data__;if(!pt||n.length<199)return n.push([t,e]),this.size=++r.size,this;r=this.__data__=new wt(n)}return r.set(t,e),this.size=r.size,this};function Lt(t){var e=this.__data__=new vt(t);this.size=e.size}Lt.prototype.clear=Tt,Lt.prototype.delete=Ft,Lt.prototype.get=$t,Lt.prototype.has=Dt,Lt.prototype.set=Ct;var Ut=Lt;var Bt=function(t){return this.__data__.set(t,"__lodash_hash_undefined__"),this};var Rt=function(t){return this.__data__.has(t)};function Vt(t){var e=-1,r=null==t?0:t.length;for(this.__data__=new wt;++e<r;)this.add(t[e])}Vt.prototype.add=Vt.prototype.push=Bt,Vt.prototype.has=Rt;var Wt=Vt;var qt=function(t,e){for(var r=-1,n=null==t?0:t.length;++r<n;)if(e(t[r],r,t))return!0;return!1};var Qt=function(t,e){return t.has(e)};var Gt=function(t,e,r,n,a,o){var i=1&r,u=t.length,c=e.length;if(u!=c&&!(i&&c>u))return!1;var f=o.get(t),l=o.get(e);if(f&&l)return f==e&&l==t;var s=-1,v=!0,p=2&r?new Wt:void 0;for(o.set(t,e),o.set(e,t);++s<u;){var h=t[s],d=e[s];if(n)var y=i?n(d,h,s,e,t,o):n(h,d,s,t,e,o);if(void 0!==y){if(y)continue;v=!1;break}if(p){if(!qt(e,(function(t,e){if(!Qt(p,e)&&(h===t||a(h,t,r,n,o)))return p.push(e)}))){v=!1;break}}else if(h!==d&&!a(h,d,r,n,o)){v=!1;break}}return o.delete(t),o.delete(e),v},Ht=a.Z.Uint8Array;var Jt=function(t){var e=-1,r=Array(t.size);return t.forEach((function(t,n){r[++e]=[n,t]})),r};var Kt=function(t){var e=-1,r=Array(t.size);return t.forEach((function(t){r[++e]=t})),r},Xt=o?o.prototype:void 0,Yt=Xt?Xt.valueOf:void 0;var te=function(t,e,r,n,a,o,i){switch(r){case"[object DataView]":if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case"[object ArrayBuffer]":return!(t.byteLength!=e.byteLength||!o(new Ht(t),new Ht(e)));case"[object Boolean]":case"[object Date]":case"[object Number]":return at(+t,+e);case"[object Error]":return t.name==e.name&&t.message==e.message;case"[object RegExp]":case"[object String]":return t==e+"";case"[object Map]":var u=Jt;case"[object Set]":var c=1&n;if(u||(u=Kt),t.size!=e.size&&!c)return!1;var f=i.get(t);if(f)return f==e;n|=2,i.set(t,e);var l=Gt(u(t),u(e),n,a,o,i);return i.delete(t),l;case"[object Symbol]":if(Yt)return Yt.call(t)==Yt.call(e)}return!1};var ee=function(t,e,r){var a=e(t);return j(t)?a:n(a,r(t))};var re=function(t,e){for(var r=-1,n=null==t?0:t.length,a=0,o=[];++r<n;){var i=t[r];e(i,r,t)&&(o[a++]=i)}return o};var ne=function(){return[]},ae=Object.prototype.propertyIsEnumerable,oe=Object.getOwnPropertySymbols,ie=oe?function(t){return null==t?[]:(t=Object(t),re(oe(t),(function(e){return ae.call(t,e)})))}:ne;var ue=function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n},ce=r(1473),fe=/^(?:0|[1-9]\d*)$/;var le=function(t,e){var r=typeof t;return!!(e=null==e?9007199254740991:e)&&("number"==r||"symbol"!=r&&fe.test(t))&&t>-1&&t%1==0&&t<e};var se=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991},ve={};ve["[object Float32Array]"]=ve["[object Float64Array]"]=ve["[object Int8Array]"]=ve["[object Int16Array]"]=ve["[object Int32Array]"]=ve["[object Uint8Array]"]=ve["[object Uint8ClampedArray]"]=ve["[object Uint16Array]"]=ve["[object Uint32Array]"]=!0,ve["[object Arguments]"]=ve["[object Array]"]=ve["[object ArrayBuffer]"]=ve["[object Boolean]"]=ve["[object DataView]"]=ve["[object Date]"]=ve["[object Error]"]=ve["[object Function]"]=ve["[object Map]"]=ve["[object Number]"]=ve["[object Object]"]=ve["[object RegExp]"]=ve["[object Set]"]=ve["[object String]"]=ve["[object WeakMap]"]=!1;var pe=function(t){return d(t)&&se(t.length)&&!!ve[h(t)]};var he=function(t){return function(e){return t(e)}},de=r(9890),ye=de.Z&&de.Z.isTypedArray,be=ye?he(ye):pe,me=Object.prototype.hasOwnProperty;var _e=function(t,e){var r=j(t),n=!r&&g(t),a=!r&&!n&&(0,ce.Z)(t),o=!r&&!n&&!a&&be(t),i=r||n||a||o,u=i?ue(t.length,String):[],c=u.length;for(var f in t)!e&&!me.call(t,f)||i&&("length"==f||a&&("offset"==f||"parent"==f)||o&&("buffer"==f||"byteLength"==f||"byteOffset"==f)||le(f,c))||u.push(f);return u},ge=Object.prototype;var je=function(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||ge)};var we=function(t,e){return function(r){return t(e(r))}}(Object.keys,Object),Oe=Object.prototype.hasOwnProperty;var Ee=function(t){if(!je(t))return we(t);var e=[];for(var r in Object(t))Oe.call(t,r)&&"constructor"!=r&&e.push(r);return e};var Ae=function(t){return null!=t&&se(t.length)&&!N(t)};var ze=function(t){return Ae(t)?_e(t):Ee(t)};var xe=function(t){return ee(t,ze,ie)},Se=Object.prototype.hasOwnProperty;var ke=function(t,e,r,n,a,o){var i=1&r,u=xe(t),c=u.length;if(c!=xe(e).length&&!i)return!1;for(var f=c;f--;){var l=u[f];if(!(i?l in e:Se.call(e,l)))return!1}var s=o.get(t),v=o.get(e);if(s&&v)return s==e&&v==t;var p=!0;o.set(t,e),o.set(e,t);for(var h=i;++f<c;){var d=t[l=u[f]],y=e[l];if(n)var b=i?n(y,d,l,e,t,o):n(d,y,l,t,e,o);if(!(void 0===b?d===y||a(d,y,r,n,o):b)){p=!1;break}h||(h="constructor"==l)}if(p&&!h){var m=t.constructor,_=e.constructor;m==_||!("constructor"in t)||!("constructor"in e)||"function"==typeof m&&m instanceof m&&"function"==typeof _&&_ instanceof _||(p=!1)}return o.delete(t),o.delete(e),p},Ze=q(a.Z,"DataView"),Me=q(a.Z,"Promise"),Ne=q(a.Z,"Set"),Pe=q(a.Z,"WeakMap"),Ie="[object Map]",Te="[object Promise]",Fe="[object Set]",$e="[object WeakMap]",De="[object DataView]",Ce=$(Ze),Le=$(pt),Ue=$(Me),Be=$(Ne),Re=$(Pe),Ve=h;(Ze&&Ve(new Ze(new ArrayBuffer(1)))!=De||pt&&Ve(new pt)!=Ie||Me&&Ve(Me.resolve())!=Te||Ne&&Ve(new Ne)!=Fe||Pe&&Ve(new Pe)!=$e)&&(Ve=function(t){var e=h(t),r="[object Object]"==e?t.constructor:void 0,n=r?$(r):"";if(n)switch(n){case Ce:return De;case Le:return Ie;case Ue:return Te;case Be:return Fe;case Re:return $e}return e});var We=Ve,qe="[object Arguments]",Qe="[object Array]",Ge="[object Object]",He=Object.prototype.hasOwnProperty;var Je=function(t,e,r,n,a,o){var i=j(t),u=j(e),c=i?Qe:We(t),f=u?Qe:We(e),l=(c=c==qe?Ge:c)==Ge,s=(f=f==qe?Ge:f)==Ge,v=c==f;if(v&&(0,ce.Z)(t)){if(!(0,ce.Z)(e))return!1;i=!0,l=!1}if(v&&!l)return o||(o=new Ut),i||be(t)?Gt(t,e,r,n,a,o):te(t,e,c,r,n,a,o);if(!(1&r)){var p=l&&He.call(t,"__wrapped__"),h=s&&He.call(e,"__wrapped__");if(p||h){var d=p?t.value():t,y=h?e.value():e;return o||(o=new Ut),a(d,y,r,n,o)}}return!!v&&(o||(o=new Ut),ke(t,e,r,n,a,o))};var Ke=function t(e,r,n,a,o){return e===r||(null==e||null==r||!d(e)&&!d(r)?e!=e&&r!=r:Je(e,r,n,a,t,o))};var Xe=function(t,e,r,n){var a=r.length,o=a,i=!n;if(null==t)return!o;for(t=Object(t);a--;){var u=r[a];if(i&&u[2]?u[1]!==t[u[0]]:!(u[0]in t))return!1}for(;++a<o;){var c=(u=r[a])[0],f=t[c],l=u[1];if(i&&u[2]){if(void 0===f&&!(c in t))return!1}else{var s=new Ut;if(n)var v=n(f,l,c,t,e,s);if(!(void 0===v?Ke(l,f,3,n,s):v))return!1}}return!0};var Ye=function(t){return t==t&&!Z(t)};var tr=function(t){for(var e=ze(t),r=e.length;r--;){var n=e[r],a=t[n];e[r]=[n,a,Ye(a)]}return e};var er=function(t,e){return function(r){return null!=r&&(r[t]===e&&(void 0!==e||t in Object(r)))}};var rr=function(t){var e=tr(t);return 1==e.length&&e[0][2]?er(e[0][0],e[0][1]):function(r){return r===t||Xe(r,t,e)}};var nr=function(t,e,r){var n=null==t?void 0:It(t,e);return void 0===n?r:n};var ar=function(t,e){return null!=t&&e in Object(t)};var or=function(t,e,r){for(var n=-1,a=(e=Nt(e,t)).length,o=!1;++n<a;){var i=Pt(e[n]);if(!(o=null!=t&&r(t,i)))break;t=t[i]}return o||++n!=a?o:!!(a=null==t?0:t.length)&&se(a)&&le(i,a)&&(j(t)||g(t))};var ir=function(t,e){return null!=t&&or(t,e,ar)};var ur=function(t,e){return k(t)&&Ye(e)?er(Pt(t),e):function(r){var n=nr(r,t);return void 0===n&&n===e?ir(r,t):Ke(e,n,3)}};var cr=function(t){return t};var fr=function(t){return function(e){return null==e?void 0:e[t]}};var lr=function(t){return function(e){return It(e,t)}};var sr=function(t){return k(t)?fr(Pt(t)):lr(t)};var vr=function(t){return"function"==typeof t?t:null==t?cr:"object"==typeof t?j(t)?ur(t[0],t[1]):rr(t):sr(t)};var pr=function(t){return function(e,r,n){for(var a=-1,o=Object(e),i=n(e),u=i.length;u--;){var c=i[t?u:++a];if(!1===r(o[c],c,o))break}return e}}();var hr=function(t,e){return function(r,n){if(null==r)return r;if(!Ae(r))return t(r,n);for(var a=r.length,o=e?a:-1,i=Object(r);(e?o--:++o<a)&&!1!==n(i[o],o,i););return r}}((function(t,e){return t&&pr(t,e,ze)}));var dr=function(t,e){var r=-1,n=Ae(t)?Array(t.length):[];return hr(t,(function(t,a,o){n[++r]=e(t,a,o)})),n};var yr=function(t,e){var r=t.length;for(t.sort(e);r--;)t[r]=t[r].value;return t};var br=function(t,e){if(t!==e){var r=void 0!==t,n=null===t,a=t==t,o=z(t),i=void 0!==e,u=null===e,c=e==e,f=z(e);if(!u&&!f&&!o&&t>e||o&&i&&c&&!u&&!f||n&&i&&c||!r&&c||!a)return 1;if(!n&&!o&&!f&&t<e||f&&r&&a&&!n&&!o||u&&r&&a||!i&&a||!c)return-1}return 0};var mr=function(t,e,r){for(var n=-1,a=t.criteria,o=e.criteria,i=a.length,u=r.length;++n<i;){var c=br(a[n],o[n]);if(c)return n>=u?c:c*("desc"==r[n]?-1:1)}return t.index-e.index};var _r=function(t,e,r){e=e.length?A(e,(function(t){return j(t)?function(e){return It(e,1===t.length?t[0]:t)}:t})):[cr];var n=-1;e=A(e,he(vr));var a=dr(t,(function(t,r,a){return{criteria:A(e,(function(e){return e(t)})),index:++n,value:t}}));return yr(a,(function(t,e){return mr(t,e,r)}))};var gr=function(t,e,r){switch(r.length){case 0:return t.call(e);case 1:return t.call(e,r[0]);case 2:return t.call(e,r[0],r[1]);case 3:return t.call(e,r[0],r[1],r[2])}return t.apply(e,r)},jr=Math.max;var wr=function(t,e,r){return e=jr(void 0===e?t.length-1:e,0),function(){for(var n=arguments,a=-1,o=jr(n.length-e,0),i=Array(o);++a<o;)i[a]=n[e+a];a=-1;for(var u=Array(e+1);++a<e;)u[a]=n[a];return u[e]=r(i),gr(t,this,u)}};var Or=function(t){return function(){return t}},Er=function(){try{var t=q(Object,"defineProperty");return t({},"",{}),t}catch(e){}}(),Ar=Er?function(t,e){return Er(t,"toString",{configurable:!0,enumerable:!1,value:Or(e),writable:!0})}:cr,zr=Date.now;var xr=function(t){var e=0,r=0;return function(){var n=zr(),a=16-(n-r);if(r=n,a>0){if(++e>=800)return arguments[0]}else e=0;return t.apply(void 0,arguments)}}(Ar);var Sr=function(t,e,r){if(!Z(r))return!1;var n=typeof e;return!!("number"==n?Ae(r)&&le(e,r.length):"string"==n&&e in r)&&at(r[e],t)},kr=function(t,e){return xr(wr(t,e,cr),t+"")}((function(t,e){if(null==t)return[];var r=e.length;return r>1&&Sr(t,e[0],e[1])?e=[]:r>2&&Sr(e[0],e[1],e[2])&&(e=[e[0]]),_r(t,E(e,1),[])}))},3901:function(t,e,r){"use strict";r.d(e,{g:function(){return c}});var n=r(9756),a=r(5950),o=r(5444),i=r(7294),u=r(4506),c=function(t){var e=t.memberName,r=t.size,c=(0,n.Z)(t,["memberName","size"]),f=(0,o.useStaticQuery)("1717575382"),l=i.useMemo((function(){var t=f.allFile.nodes.find((function(t){return t.name===e}));if(t)return t;var r=f.allFile.nodes.find((function(t){return"default"===t.name}));if(r)return r;throw Error("Default Image not found")}),[e,f]),s=i.useMemo((function(){var t=l[r];if(!t)throw Error("Image can't resolved");return t}),[l,r]);return i.createElement(o.Link,{to:"/members/"+e},i.createElement(u.f,Object.assign({},c,{file:s,alt:e+"のアイコン",width:a.N[r],height:a.N[r]})))}},3882:function(t,e,r){"use strict";r.d(e,{W:function(){return c}});var n=r(9756),a=r(5950),o=r(5444),i=r(7294),u=r(4506),c=function(t){var e=t.teamName,r=t.size,c=t.className,f=(0,n.Z)(t,["teamName","size","className"]),l=(0,o.useStaticQuery)("906268290"),s=i.useMemo((function(){var t=l.svgs.nodes.find((function(t){return t.name===e}));if(t)return t;var n=l.images.nodes.find((function(t){return t.name===e}));if(n)return n[r];var a=l.images.nodes.find((function(t){return"default"===t.name}));if(a)return a[r];throw Error("Default Image not found")}),[e,l,r]),v=i.useMemo((function(){if(s)return s;throw Error("image is "+s)}),[s]);return i.createElement(o.Link,{to:"/teams/"+e,className:c},i.createElement(u.f,Object.assign({},f,{file:v,alt:e+"のアイコン",width:a.N[r],height:a.N[r]})))}},1161:function(t,e,r){"use strict";r.d(e,{$:function(){return i}});var n=r(7294),a=function(t){var e=t.children;return n.createElement("div",{className:"mb-3"},e)},o=function(t){var e=t.children;return n.createElement("h3",{className:"text-xl font-bold mb-2"},e)},i=function(t){var e=t.children,r=t.title;return n.createElement("div",null,n.createElement(o,null,r),n.createElement(a,null,e))}},1917:function(t,e,r){"use strict";r.d(e,{H:function(){return u}});var n=r(9499),a=r(5444),o=r(7294),i=r(5414),u=function(t){var e,r,u=t.title,c=t.image,f=t.lang,l=t.description,s=t.keywords,v=(0,a.useStaticQuery)("1080184343").site,p=(0,n.useLocation)().pathname,h=(0,o.useMemo)((function(){var t,e,r,n,a,o;return{title:u||(null==v||null===(t=v.siteMetadata)||void 0===t?void 0:t.defaultTitle),description:l||(null==v||null===(e=v.siteMetadata)||void 0===e?void 0:e.defaultDescription),image:""+(c||(null==v||null===(r=v.siteMetadata)||void 0===r?void 0:r.defaultImage)),lang:f||"ja",url:""+(null==v||null===(n=v.siteMetadata)||void 0===n?void 0:n.siteUrl)+p,keywords:((null==v||null===(a=v.siteMetadata)||void 0===a?void 0:a.keywords)||[]).concat((null==s||null===(o=s.filter)||void 0===o?void 0:o.call(s,(function(t){return!!t})))||[])}}),[v,u,l,c,f,s,p]);return o.createElement(i.q,{titleTemplate:(null==v||null===(e=v.siteMetadata)||void 0===e?void 0:e.titleTemplate)||void 0},o.createElement("title",null,h.title),o.createElement("html",{lang:h.lang}),o.createElement("meta",{name:"description",content:h.description||void 0}),o.createElement("meta",{name:"image",content:h.image}),o.createElement("meta",{name:"keywords",content:h.keywords.join(",")}),o.createElement("meta",{property:"og:url",content:h.url}),o.createElement("meta",{property:"og:type",content:"article"}),o.createElement("meta",{property:"og:title",content:h.title||void 0}),o.createElement("meta",{property:"og:description",content:h.description||void 0}),o.createElement("meta",{property:"og:image",content:h.image}),o.createElement("meta",{name:"twitter:card",content:"summary"}),o.createElement("meta",{name:"twitter:creator",content:(null==v||null===(r=v.siteMetadata)||void 0===r?void 0:r.twitterUsername)||void 0}),o.createElement("meta",{name:"twitter:title",content:h.title||void 0}),o.createElement("meta",{name:"twitter:description",content:h.description||void 0}),o.createElement("meta",{name:"twitter:image",content:h.image}))}},5950:function(t,e,r){"use strict";r.d(e,{N:function(){return n}});var n={xxs:16,xs:24,sm:32,md:48,lg:64,xl:128}}}]);
//# sourceMappingURL=a1cf512bd344796e699678d02cb082057e6a68bd-c7ae325690f2eb025958.js.map