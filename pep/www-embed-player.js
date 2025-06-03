(function(){'use strict';var p;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var da=ca(this);function u(a,b){if(b)a:{var c=da;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&b!=null&&ba(c,a,{configurable:!0,writable:!0,value:b})}}
u("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}
function c(f,g){this.h=f;ba(this,"description",{configurable:!0,writable:!0,value:g})}
if(a)return a;c.prototype.toString=function(){return this.h};
var d="jscomp_symbol_"+(Math.random()*1E9>>>0)+"_",e=0;return b});
u("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=da[b[c]];typeof d==="function"&&typeof d.prototype[a]!="function"&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ea(aa(this))}})}return a});
function ea(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
var fa=typeof Object.create=="function"?Object.create:function(a){function b(){}
b.prototype=a;return new b},ia=function(){function a(){function c(){}
new c;Reflect.construct(c,[],function(){});
return new c instanceof c}
if(typeof Reflect!="undefined"&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){e===void 0&&(e=c);
e=fa(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}}(),ja;
if(typeof Object.setPrototypeOf=="function")ja=Object.setPrototypeOf;else{var ka;a:{var la={a:!0},ma={};try{ma.__proto__=la;ka=ma.a;break a}catch(a){}ka=!1}ja=ka?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var na=ja;
function v(a,b){a.prototype=fa(b.prototype);a.prototype.constructor=a;if(na)na(a,b);else for(var c in b)if(c!="prototype")if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.Aa=b.prototype}
function y(a){var b=typeof Symbol!="undefined"&&Symbol.iterator&&a[Symbol.iterator];if(b)return b.call(a);if(typeof a.length=="number")return{next:aa(a)};throw Error(String(a)+" is not an iterable or ArrayLike");}
function A(a){if(!(a instanceof Array)){a=y(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
function oa(a){return qa(a,a)}
function qa(a,b){a.raw=b;Object.freeze&&(Object.freeze(a),Object.freeze(b));return a}
function ra(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var sa=typeof Object.assign=="function"?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)ra(d,e)&&(a[e]=d[e])}return a};
u("Object.assign",function(a){return a||sa});
function ta(){this.A=!1;this.u=null;this.i=void 0;this.h=1;this.o=this.H=0;this.P=this.j=null}
function ua(a){if(a.A)throw new TypeError("Generator is already running");a.A=!0}
ta.prototype.G=function(a){this.i=a};
function va(a,b){a.j={exception:b,Cd:!0};a.h=a.H||a.o}
ta.prototype.return=function(a){this.j={return:a};this.h=this.o};
ta.prototype.yield=function(a,b){this.h=b;return{value:a}};
ta.prototype.B=function(a){this.h=a};
function wa(a,b,c){a.H=b;c!=void 0&&(a.o=c)}
function xa(a,b){a.h=b;a.H=0}
function ya(a){a.H=0;var b=a.j.exception;a.j=null;return b}
function za(a){var b=a.P.splice(0)[0];(b=a.j=a.j||b)?b.Cd?a.h=a.H||a.o:b.B!=void 0&&a.o<b.B?(a.h=b.B,a.j=null):a.h=a.o:a.h=0}
function Aa(a){this.h=new ta;this.i=a}
function Ba(a,b){ua(a.h);var c=a.h.u;if(c)return Ca(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.h.return);
a.h.return(b);return Da(a)}
function Ca(a,b,c,d){try{var e=b.call(a.h.u,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.h.A=!1,e;var f=e.value}catch(g){return a.h.u=null,va(a.h,g),Da(a)}a.h.u=null;d.call(a.h,f);return Da(a)}
function Da(a){for(;a.h.h;)try{var b=a.i(a.h);if(b)return a.h.A=!1,{value:b.value,done:!1}}catch(c){a.h.i=void 0,va(a.h,c)}a.h.A=!1;if(a.h.j){b=a.h.j;a.h.j=null;if(b.Cd)throw b.exception;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function Ea(a){this.next=function(b){ua(a.h);a.h.u?b=Ca(a,a.h.u.next,b,a.h.G):(a.h.G(b),b=Da(a));return b};
this.throw=function(b){ua(a.h);a.h.u?b=Ca(a,a.h.u["throw"],b,a.h.G):(va(a.h,b),b=Da(a));return b};
this.return=function(b){return Ba(a,b)};
this[Symbol.iterator]=function(){return this}}
function Fa(a){function b(d){return a.next(d)}
function c(d){return a.throw(d)}
return new Promise(function(d,e){function f(g){g.done?d(g.value):Promise.resolve(g.value).then(b,c).then(f,e)}
f(a.next())})}
function B(a){return Fa(new Ea(new Aa(a)))}
function C(){for(var a=Number(this),b=[],c=a;c<arguments.length;c++)b[c-a]=arguments[c];return b}
u("globalThis",function(a){return a||da});
u("Reflect",function(a){return a?a:{}});
u("Reflect.construct",function(){return ia});
u("Reflect.setPrototypeOf",function(a){return a?a:na?function(b,c){try{return na(b,c),!0}catch(d){return!1}}:null});
u("Promise",function(a){function b(g){this.X=0;this.bb=void 0;this.h=[];this.u=!1;var h=this.i();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.h=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.i=function(g){if(this.h==null){this.h=[];var h=this;this.j(function(){h.u()})}this.h.push(g)};
var e=da.setTimeout;c.prototype.j=function(g){e(g,0)};
c.prototype.u=function(){for(;this.h&&this.h.length;){var g=this.h;this.h=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.o(l)}}}this.h=null};
c.prototype.o=function(g){this.j(function(){throw g;})};
b.prototype.i=function(){function g(l){return function(m){k||(k=!0,l.call(h,m))}}
var h=this,k=!1;return{resolve:g(this.U),reject:g(this.j)}};
b.prototype.U=function(g){if(g===this)this.j(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.Z(g);else{a:switch(typeof g){case "object":var h=g!=null;break a;case "function":h=!0;break a;default:h=!1}h?this.P(g):this.o(g)}};
b.prototype.P=function(g){var h=void 0;try{h=g.then}catch(k){this.j(k);return}typeof h=="function"?this.ha(h,g):this.o(g)};
b.prototype.j=function(g){this.H(2,g)};
b.prototype.o=function(g){this.H(1,g)};
b.prototype.H=function(g,h){if(this.X!=0)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.X);this.X=g;this.bb=h;this.X===2&&this.Y();this.A()};
b.prototype.Y=function(){var g=this;e(function(){if(g.G()){var h=da.console;typeof h!=="undefined"&&h.error(g.bb)}},1)};
b.prototype.G=function(){if(this.u)return!1;var g=da.CustomEvent,h=da.Event,k=da.dispatchEvent;if(typeof k==="undefined")return!0;typeof g==="function"?g=new g("unhandledrejection",{cancelable:!0}):typeof h==="function"?g=new h("unhandledrejection",{cancelable:!0}):(g=da.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.bb;return k(g)};
b.prototype.A=function(){if(this.h!=null){for(var g=0;g<this.h.length;++g)f.i(this.h[g]);this.h=null}};
var f=new c;b.prototype.Z=function(g){var h=this.i();g.nc(h.resolve,h.reject)};
b.prototype.ha=function(g,h){var k=this.i();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(r,t){return typeof r=="function"?function(w){try{l(r(w))}catch(x){m(x)}}:t}
var l,m,n=new b(function(r,t){l=r;m=t});
this.nc(k(g,l),k(h,m));return n};
b.prototype.catch=function(g){return this.then(void 0,g)};
b.prototype.nc=function(g,h){function k(){switch(l.X){case 1:g(l.bb);break;case 2:h(l.bb);break;default:throw Error("Unexpected state: "+l.X);}}
var l=this;this.h==null?f.i(k):this.h.push(k);this.u=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=y(g),m=l.next();!m.done;m=l.next())d(m.value).nc(h,k)})};
b.all=function(g){var h=y(g),k=h.next();return k.done?d([]):new b(function(l,m){function n(w){return function(x){r[w]=x;t--;t==0&&l(r)}}
var r=[],t=0;do r.push(void 0),t++,d(k.value).nc(n(r.length-1),m),k=h.next();while(!k.done)})};
return b});
u("Object.setPrototypeOf",function(a){return a||na});
u("Symbol.dispose",function(a){return a?a:Symbol("Symbol.dispose")});
u("WeakMap",function(a){function b(k){this.h=(h+=Math.random()+1).toString();if(k){k=y(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return l==="object"&&k!==null||l==="function"}
function e(k){if(!ra(k,g)){var l=new c;ba(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(m){if(m instanceof c)return m;Object.isExtensible(m)&&e(m);return l(m)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),m=new a([[k,2],[l,3]]);if(m.get(k)!=2||m.get(l)!=3)return!1;m.delete(k);m.set(l,4);return!m.has(k)&&m.get(l)==4}catch(n){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!ra(k,g))throw Error("WeakMap key fail: "+k);k[g][this.h]=l;return this};
b.prototype.get=function(k){return d(k)&&ra(k,g)?k[g][this.h]:void 0};
b.prototype.has=function(k){return d(k)&&ra(k,g)&&ra(k[g],this.h)};
b.prototype.delete=function(k){return d(k)&&ra(k,g)&&ra(k[g],this.h)?delete k[g][this.h]:!1};
return b});
u("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h[1];return ea(function(){if(l){for(;l.head!=h[1];)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;l=="object"||l=="function"?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var m=h[0][l];if(m&&ra(h[0],l))for(h=0;h<m.length;h++){var n=m[h];if(k!==k&&n.key!==n.key||k===n.key)return{id:l,list:m,index:h,entry:n}}return{id:l,list:m,index:-1,entry:void 0}}
function e(h){this[0]={};this[1]=b();this.size=0;if(h){h=y(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||typeof a!="function"||!a.prototype.entries||typeof Object.seal!="function")return!1;try{var h=Object.seal({x:4}),k=new a(y([[h,"s"]]));if(k.get(h)!="s"||k.size!=1||k.get({x:4})||k.set({x:4},"t")!=k||k.size!=2)return!1;var l=k.entries(),m=l.next();if(m.done||m.value[0]!=h||m.value[1]!="s")return!1;m=l.next();return m.done||m.value[0].x!=4||m.value[1]!="t"||!l.next().done?!1:!0}catch(n){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=h===0?0:h;var l=d(this,h);l.list||(l.list=this[0][l.id]=[]);l.entry?l.entry.value=k:(l.entry={next:this[1],previous:this[1].previous,head:this[1],key:h,value:k},l.list.push(l.entry),this[1].previous.next=l.entry,this[1].previous=l.entry,this.size++);return this};
e.prototype.delete=function(h){h=d(this,h);return h.entry&&h.list?(h.list.splice(h.index,1),h.list.length||delete this[0][h.id],h.entry.previous.next=h.entry.next,h.entry.next.previous=h.entry.previous,h.entry.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this[0]={};this[1]=this[1].previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).entry};
e.prototype.get=function(h){return(h=d(this,h).entry)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),m;!(m=l.next()).done;)m=m.value,h.call(k,m[1],m[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
u("Set",function(a){function b(c){this.h=new Map;if(c){c=y(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.h.size}
if(function(){if(!a||typeof a!="function"||!a.prototype.entries||typeof Object.seal!="function")return!1;try{var c=Object.seal({x:4}),d=new a(y([c]));if(!d.has(c)||d.size!=1||d.add(c)!=d||d.size!=1||d.add({x:4})!=d||d.size!=2)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||f.value[0].x!=4||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=c===0?0:c;this.h.set(c,c);this.size=this.h.size;return this};
b.prototype.delete=function(c){c=this.h.delete(c);this.size=this.h.size;return c};
b.prototype.clear=function(){this.h.clear();this.size=0};
b.prototype.has=function(c){return this.h.has(c)};
b.prototype.entries=function(){return this.h.entries()};
b.prototype.values=function(){return this.h.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.h.forEach(function(f){return c.call(d,f,f,e)})};
return b});
function Ga(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
u("Array.prototype.entries",function(a){return a?a:function(){return Ga(this,function(b,c){return[b,c]})}});
u("Array.prototype.keys",function(a){return a?a:function(){return Ga(this,function(b){return b})}});
function Ha(a,b,c){if(a==null)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
u("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=Ha(this,b,"startsWith");b+="";var e=d.length,f=b.length;c=Math.max(0,Math.min(c|0,d.length));for(var g=0;g<f&&c<e;)if(d[c++]!=b[g++])return!1;return g>=f}});
u("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=Ha(this,b,"endsWith");b+="";c===void 0&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;e>0&&c>0;)if(d[--c]!=b[--e])return!1;return e<=0}});
u("Number.isFinite",function(a){return a?a:function(b){return typeof b!=="number"?!1:!isNaN(b)&&b!==Infinity&&b!==-Infinity}});
u("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var e=d.length,f=0;f<e;f++){var g=d[f];if(b.call(c,g,f,d)){b=g;break a}}b=void 0}return b}});
u("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)ra(b,d)&&c.push(b[d]);return c}});
u("Object.is",function(a){return a?a:function(b,c){return b===c?b!==0||1/b===1/c:b!==b&&c!==c}});
u("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(c<0&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
u("String.prototype.includes",function(a){return a?a:function(b,c){return Ha(this,b,"includes").indexOf(b,c||0)!==-1}});
u("Array.from",function(a){return a?a:function(b,c,d){c=c!=null?c:function(h){return h};
var e=[],f=typeof Symbol!="undefined"&&Symbol.iterator&&b[Symbol.iterator];if(typeof f=="function"){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
u("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)ra(b,d)&&c.push([d,b[d]]);return c}});
u("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});
u("Number.MIN_SAFE_INTEGER",function(){return-9007199254740991});
u("Number.isInteger",function(a){return a?a:function(b){return Number.isFinite(b)?b===Math.floor(b):!1}});
u("Number.isSafeInteger",function(a){return a?a:function(b){return Number.isInteger(b)&&Math.abs(b)<=Number.MAX_SAFE_INTEGER}});
u("Math.trunc",function(a){return a?a:function(b){b=Number(b);if(isNaN(b)||b===Infinity||b===-Infinity||b===0)return b;var c=Math.floor(Math.abs(b));return b<0?-c:c}});
u("Number.isNaN",function(a){return a?a:function(b){return typeof b==="number"&&isNaN(b)}});
u("Array.prototype.values",function(a){return a?a:function(){return Ga(this,function(b,c){return c})}});/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var Ia=Ia||{},D=this||self;function E(a,b,c){a=a.split(".");c=c||D;for(var d;a.length&&(d=a.shift());)a.length||b===void 0?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function F(a,b){a=a.split(".");b=b||D;for(var c=0;c<a.length;c++)if(b=b[a[c]],b==null)return null;return b}
function La(a){var b=typeof a;return b!="object"?b:a?Array.isArray(a)?"array":b:"null"}
function Ma(a){var b=La(a);return b=="array"||b=="object"&&typeof a.length=="number"}
function Na(a){var b=typeof a;return b=="object"&&a!=null||b=="function"}
function Oa(a){return Object.prototype.hasOwnProperty.call(a,Qa)&&a[Qa]||(a[Qa]=++Ra)}
var Qa="closure_uid_"+(Math.random()*1E9>>>0),Ra=0;function Sa(a,b,c){return a.call.apply(a.bind,arguments)}
function Ta(a,b,c){if(!a)throw Error();if(arguments.length>2){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function Ua(a,b,c){Ua=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Sa:Ta;return Ua.apply(null,arguments)}
function Va(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
function Wa(){return Date.now()}
function Xa(a){return a}
function Za(a,b){function c(){}
c.prototype=b.prototype;a.Aa=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.base=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
;function $a(a){return new RegExp("[^#]*[?&]"+a+"=([^&#]*)")}
var ab=$a("adurl"),bb=$a("ae"),cb=$a("dsh");function db(a,b){return(a=b.exec(a))?a[1]:null}
function eb(a){var b=C.apply(1,arguments).filter(Boolean).join("&");if(!b)return a;var c=a.match(/[?&]adurl=/);return c?a.slice(0,c.index+1)+b+"&"+a.slice(c.index+1):a+(a.indexOf("?")<0?"?":"&")+b}
function fb(a,b){return b?"&"+a+"="+encodeURIComponent(b):""}
function gb(a){var b=a.url;a=a.ji;this.h=b;this.j=a;this.i=(new Date).getTime()-17040672E5}
function hb(a){a=a.j;if(!a)return"";var b=fb("uap",a.platform)+fb("uapv",a.platformVersion)+fb("uafv",a.uaFullVersion)+fb("uaa",a.architecture)+fb("uam",a.model)+fb("uab",a.bitness);a.fullVersionList&&(b+="&uafvl="+encodeURIComponent(a.fullVersionList.map(function(c){return encodeURIComponent(c.brand)+";"+encodeURIComponent(c.version)}).join("|")));
a.wow64!=null&&(b+="&uaw="+Number(a.wow64));return b.slice(1)}
;function ib(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,ib);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));b!==void 0&&(this.cause=b)}
Za(ib,Error);ib.prototype.name="CustomError";var jb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};/*

 Copyright Google LLC
 SPDX-License-Identifier: Apache-2.0
*/
var kb=globalThis.trustedTypes,lb;function nb(){var a=null;if(!kb)return a;try{var b=function(c){return c};
a=kb.createPolicy("goog#html",{createHTML:b,createScript:b,createScriptURL:b})}catch(c){}return a}
function ob(){lb===void 0&&(lb=nb());return lb}
;function pb(a){this.h=a}
pb.prototype.toString=function(){return this.h+""};
function qb(a){var b=ob();a=b?b.createScriptURL(a):a;return new pb(a)}
function rb(a){if(a instanceof pb)return a.h;throw Error("");}
;var sb=oa([""]),tb=qa(["\x00"],["\\0"]),ub=qa(["\n"],["\\n"]),vb=qa(["\x00"],["\\u0000"]);function wb(a){return a.toString().indexOf("`")===-1}
wb(function(a){return a(sb)})||wb(function(a){return a(tb)})||wb(function(a){return a(ub)})||wb(function(a){return a(vb)});function xb(a){this.h=a}
xb.prototype.toString=function(){return this.h};
var yb=new xb("about:invalid#zClosurez");function zb(a){this.Je=a}
function Ab(a){return new zb(function(b){return b.substr(0,a.length+1).toLowerCase()===a+":"})}
var Bb=[Ab("data"),Ab("http"),Ab("https"),Ab("mailto"),Ab("ftp"),new zb(function(a){return/^[^:]*([/?#]|$)/.test(a)})],Cb=/^\s*(?!javascript:)(?:[\w+.-]+:|[^:/?#]*(?:[/?#]|$))/i;
function Db(a){if(a instanceof xb)if(a instanceof xb)a=a.h;else throw Error("");else a=Cb.test(a)?a:void 0;return a}
;function Fb(a,b){b=Db(b);b!==void 0&&(a.href=b)}
;function Gb(a,b){throw Error(b===void 0?"unexpected value "+a+"!":b);}
;function Hb(a){this.h=a}
Hb.prototype.toString=function(){return this.h+""};function Ib(a){a=a===void 0?document:a;var b,c;a=(c=(b=a).querySelector)==null?void 0:c.call(b,"script[nonce]");return a==null?"":a.nonce||a.getAttribute("nonce")||""}
;function Jb(a){this.h=a}
Jb.prototype.toString=function(){return this.h+""};
function Kb(a){var b=ob();a=b?b.createScript(a):a;return new Jb(a)}
function Lb(a){if(a instanceof Jb)return a.h;throw Error("");}
;function Mb(a){var b=Ib(a.ownerDocument);b&&a.setAttribute("nonce",b)}
function Nb(a,b){a.src=rb(b);Mb(a)}
;function Ob(){this.h=Pb[0].toLowerCase()}
Ob.prototype.toString=function(){return this.h};function Qb(a){var b="true".toString(),c=[new Ob];if(c.length===0)throw Error("");if(c.map(function(d){if(d instanceof Ob)d=d.h;else throw Error("");return d}).every(function(d){return"data-loaded".indexOf(d)!==0}))throw Error('Attribute "data-loaded" does not match any of the allowed prefixes.');
a.setAttribute("data-loaded",b)}
;var Rb="alternate author bookmark canonical cite help icon license modulepreload next prefetch dns-prefetch prerender preconnect preload prev search subresource".split(" ");function Tb(a,b){if(b instanceof pb)a.href=rb(b).toString(),a.rel="stylesheet";else{if(Rb.indexOf("stylesheet")===-1)throw Error('TrustedResourceUrl href attribute required with rel="stylesheet"');b=Db(b);b!==void 0&&(a.href=b,a.rel="stylesheet")}}
;var Ub=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if(typeof a==="string")return typeof b!=="string"||b.length!=1?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},Vb=Array.prototype.forEach?function(a,b){Array.prototype.forEach.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=typeof a==="string"?a.split(""):a,e=0;e<c;e++)e in d&&b.call(void 0,d[e],e,a)},Wb=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f=typeof a==="string"?a.split(""):a,g=0;g<c;g++)if(g in f){var h=f[g];
b.call(void 0,h,g,a)&&(d[e++]=h)}return d},Xb=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e=typeof a==="string"?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d},Yb=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
Vb(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function Zb(a,b){a:{for(var c=a.length,d=typeof a==="string"?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return b<0?null:typeof a==="string"?a.charAt(b):a[b]}
function $b(a,b){b=Ub(a,b);var c;(c=b>=0)&&Array.prototype.splice.call(a,b,1);return c}
function ac(a){var b=a.length;if(b>0){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function bc(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Ma(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
function cc(a,b){if(!Ma(a)||!Ma(b)||a.length!=b.length)return!1;for(var c=a.length,d=dc,e=0;e<c;e++)if(!d(a[e],b[e]))return!1;return!0}
function ec(a,b){return a>b?1:a<b?-1:0}
function dc(a,b){return a===b}
;function fc(a,b){a.__closure__error__context__984382||(a.__closure__error__context__984382={});a.__closure__error__context__984382.severity=b}
;function hc(a){var b=F("window.location.href");a==null&&(a='Unknown Error of type "null/undefined"');if(typeof a==="string")return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||D.$googDebugFname||b}catch(g){e="Not available",c=!0}b=ic(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(c==
null){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,jc[c])c=jc[c];else{c=String(c);if(!jc[c]){var f=/function\s+([^\(]+)/m.exec(c);jc[c]=f?f[1]:"[Anonymous]"}c=jc[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";typeof a.toString==="function"&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}return{message:a.message,
name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:b}}
function ic(a,b){b||(b={});b[kc(a)]=!0;var c=a.stack||"",d=a.cause;d&&!b[kc(d)]&&(c+="\nCaused by: ",d.stack&&d.stack.indexOf(d.toString())==0||(c+=typeof d==="string"?d:d.message+"\n"),c+=ic(d,b));a=a.errors;if(Array.isArray(a)){d=1;var e;for(e=0;e<a.length&&!(d>4);e++)b[kc(a[e])]||(c+="\nInner error "+d++ +": ",a[e].stack&&a[e].stack.indexOf(a[e].toString())==0||(c+=typeof a[e]==="string"?a[e]:a[e].message+"\n"),c+=ic(a[e],b));e<a.length&&(c+="\n... "+(a.length-e)+" more inner errors")}return c}
function kc(a){var b="";typeof a.toString==="function"&&(b=""+a);return b+a.stack}
var jc={};function lc(a){return decodeURIComponent(a.replace(/\+/g," "))}
function mc(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var nc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function oc(a){return a?decodeURI(a):a}
function pc(a){return oc(a.match(nc)[3]||null)}
function qc(a){return oc(a.match(nc)[5]||null)}
function rc(a){var b=a.match(nc);a=b[5];var c=b[6];b=b[7];var d="";a&&(d+=a);c&&(d+="?"+c);b&&(d+="#"+b);return d}
function sc(a){var b=a.indexOf("#");return b<0?a:a.slice(0,b)}
function tc(a,b){if(a){a=a.split("&");for(var c=0;c<a.length;c++){var d=a[c].indexOf("="),e=null;if(d>=0){var f=a[c].substring(0,d);e=a[c].substring(d+1)}else f=a[c];b(f,e?lc(e):"")}}}
function uc(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)uc(a,String(b[d]),c);else b!=null&&c.push(a+(b===""?"":"="+encodeURIComponent(String(b))))}
function vc(a){var b=[],c;for(c in a)uc(c,a[c],b);return b.join("&")}
function wc(a,b){b=vc(b);if(b){var c=a.indexOf("#");c<0&&(c=a.length);var d=a.indexOf("?");if(d<0||d>c){d=c;var e=""}else e=a.substring(d+1,c);a=[a.slice(0,d),e,a.slice(c)];c=a[1];a[1]=b?c?c+"&"+b:b:c;b=a[0]+(a[1]?"?"+a[1]:"")+a[2]}else b=a;return b}
function xc(a,b,c,d){for(var e=c.length;(b=a.indexOf(c,b))>=0&&b<d;){var f=a.charCodeAt(b-1);if(f==38||f==63)if(f=a.charCodeAt(b+e),!f||f==61||f==38||f==35)return b;b+=e+1}return-1}
var yc=/#|$/,zc=/[?&]($|#)/;function Ac(a,b){for(var c=a.search(yc),d=0,e,f=[];(e=xc(a,d,b,c))>=0;)f.push(a.substring(d,e)),d=Math.min(a.indexOf("&",e)+1||c,c);f.push(a.slice(d));return f.join("").replace(zc,"$1")}
;function Bc(){try{var a,b;return!!((a=window)==null?0:(b=a.top)==null?0:b.location.href)&&!1}catch(c){return!0}}
;function Cc(a){a&&typeof a.dispose=="function"&&a.dispose()}
;function Dc(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];Ma(d)?Dc.apply(null,d):Cc(d)}}
;function I(){this.ea=this.ea;this.H=this.H}
I.prototype.ea=!1;I.prototype.dispose=function(){this.ea||(this.ea=!0,this.ba())};
I.prototype[Symbol.dispose]=function(){this.dispose()};
function Ec(a,b){a.addOnDisposeCallback(Va(Cc,b))}
I.prototype.addOnDisposeCallback=function(a,b){this.ea?b!==void 0?a.call(b):a():(this.H||(this.H=[]),b&&(a=a.bind(b)),this.H.push(a))};
I.prototype.ba=function(){if(this.H)for(;this.H.length;)this.H.shift()()};function Fc(){var a=Gc();a=a===void 0?"bevasrsg":a;return new Promise(function(b){var c=window===window.top?window:Bc()?window:window.top,d=c[a],e;((e=d)==null?0:e.bevasrs)?b(new Hc(d.bevasrs)):(d||(d={},d=(d.nqfbel=[],d),c[a]=d),d.nqfbel.push(function(f){b(new Hc(f))}))})}
function Hc(a){I.call(this);var b=this;this.vm=a;this.i="keydown keypress keyup input focusin focusout select copy cut paste change click dblclick auxclick pointerover pointerdown pointerup pointermove pointerout dragenter dragleave drag dragend mouseover mousedown mouseup mousemove mouseout touchstart touchend touchmove wheel".split(" ");this.h=void 0;this.gd=this.vm.p;this.j=this.o.bind(this);this.addOnDisposeCallback(function(){return void Ic(b)})}
v(Hc,I);Hc.prototype.snapshot=function(a){return this.vm.s(Object.assign({},a.xb&&{c:a.xb},a.jd&&{s:a.jd},a.kd!==void 0&&{p:a.kd}))};
Hc.prototype.o=function(a){this.vm.e(a)};
function Ic(a){a.h!==void 0&&(a.i.forEach(function(b){var c;(c=a.h)==null||c.removeEventListener(b,a.j)}),a.h=void 0)}
;function Jc(a){var b=b===void 0?49:b;var c=[];Kc(a,Lc,6).forEach(function(d){Mc(d,2)<=b&&c.push(Mc(d,1))});
return c}
function Nc(a){var b=b===void 0?49:b;var c=[];Kc(a,Lc,6).forEach(function(d){Mc(d,2)>b&&c.push(Mc(d,1))});
return c}
;var Oc;function Pc(){I.apply(this,arguments);this.o=1;this[Oc]=this.dispose}
v(Pc,I);Pc.prototype.share=function(){if(this.ea)throw Error("E:AD");this.o++;return this};
Pc.prototype.dispose=function(){--this.o||I.prototype.dispose.call(this)};
Oc=Symbol.dispose;function Qc(a){return{fieldType:2,fieldName:a}}
function Rc(a){return{fieldType:3,fieldName:a}}
;function Sc(a){this.h=a;a.Mc("/client_streamz/bg/frs",Rc("mk"))}
Sc.prototype.record=function(a,b){this.h.record("/client_streamz/bg/frs",a,b)};
function Tc(a){this.h=a;a.Mc("/client_streamz/bg/wrl",Rc("mn"),Qc("ac"),Qc("sc"),Rc("rk"),Rc("mk"))}
Tc.prototype.record=function(a,b,c,d,e,f){this.h.record("/client_streamz/bg/wrl",a,b,c,d,e,f)};
function Uc(a){this.h=a;a.Ob("/client_streamz/bg/ec",Rc("en"),Rc("mk"))}
Uc.prototype.kb=function(a,b){this.h.Lb("/client_streamz/bg/ec",a,b)};
function Vc(a){this.h=a;a.Mc("/client_streamz/bg/el",Rc("en"),Rc("mk"))}
Vc.prototype.record=function(a,b,c){this.h.record("/client_streamz/bg/el",a,b,c)};
function Wc(a){this.h=a;a.Ob("/client_streamz/bg/cec",Qc("ec"),Rc("mk"))}
Wc.prototype.kb=function(a,b){this.h.Lb("/client_streamz/bg/cec",a,b)};
function Xc(a){this.h=a;a.Ob("/client_streamz/bg/po/csc",Qc("cs"),Rc("mk"))}
Xc.prototype.kb=function(a,b){this.h.Lb("/client_streamz/bg/po/csc",a,b)};
function Yc(a){this.h=a;a.Ob("/client_streamz/bg/po/ctav",Rc("av"),Rc("mk"))}
Yc.prototype.kb=function(a,b){this.h.Lb("/client_streamz/bg/po/ctav",a,b)};
function Zc(a){this.h=a;a.Ob("/client_streamz/bg/po/cwsc",Rc("su"),Rc("mk"))}
Zc.prototype.kb=function(a,b){this.h.Lb("/client_streamz/bg/po/cwsc",a,b)};function $c(a){D.setTimeout(function(){throw a;},0)}
;var ad,bd=F("CLOSURE_FLAGS"),cd=bd&&bd[610401301];ad=cd!=null?cd:!1;function dd(){var a=D.navigator;return a&&(a=a.userAgent)?a:""}
var ed,fd=D.navigator;ed=fd?fd.userAgentData||null:null;function gd(a){if(!ad||!ed)return!1;for(var b=0;b<ed.brands.length;b++){var c=ed.brands[b].brand;if(c&&c.indexOf(a)!=-1)return!0}return!1}
function J(a){return dd().indexOf(a)!=-1}
;function hd(){return ad?!!ed&&ed.brands.length>0:!1}
function id(){return hd()?!1:J("Opera")}
function jd(){return J("Firefox")||J("FxiOS")}
function kd(){return hd()?gd("Chromium"):(J("Chrome")||J("CriOS"))&&!(hd()?0:J("Edge"))||J("Silk")}
;function ld(){return ad?!!ed&&!!ed.platform:!1}
function md(){return J("iPhone")&&!J("iPod")&&!J("iPad")}
;function nd(a){nd[" "](a);return a}
nd[" "]=function(){};var od=id(),pd=hd()?!1:J("Trident")||J("MSIE"),qd=J("Edge"),rd=J("Gecko")&&!(dd().toLowerCase().indexOf("webkit")!=-1&&!J("Edge"))&&!(J("Trident")||J("MSIE"))&&!J("Edge"),sd=dd().toLowerCase().indexOf("webkit")!=-1&&!J("Edge");sd&&J("Mobile");ld()||J("Macintosh");ld()||J("Windows");(ld()?ed.platform==="Linux":J("Linux"))||ld()||J("CrOS");var td=ld()?ed.platform==="Android":J("Android");md();J("iPad");J("iPod");md()||J("iPad")||J("iPod");dd().toLowerCase().indexOf("kaios");jd();var ud=md()||J("iPod"),vd=J("iPad");!J("Android")||kd()||jd()||id()||J("Silk");kd();var wd=J("Safari")&&!(kd()||(hd()?0:J("Coast"))||id()||(hd()?0:J("Edge"))||(hd()?gd("Microsoft Edge"):J("Edg/"))||(hd()?gd("Opera"):J("OPR"))||jd()||J("Silk")||J("Android"))&&!(md()||J("iPad")||J("iPod"));var xd={},yd=null;function zd(a,b){Ma(a);b===void 0&&(b=0);Ad();b=xd[b];for(var c=Array(Math.floor(a.length/3)),d=b[64]||"",e=0,f=0;e<a.length-2;e+=3){var g=a[e],h=a[e+1],k=a[e+2],l=b[g>>2];g=b[(g&3)<<4|h>>4];h=b[(h&15)<<2|k>>6];k=b[k&63];c[f++]=""+l+g+h+k}l=0;k=d;switch(a.length-e){case 2:l=a[e+1],k=b[(l&15)<<2]||d;case 1:a=a[e],c[f]=""+b[a>>2]+b[(a&3)<<4|l>>4]+k+d}return c.join("")}
function Bd(a){var b=a.length,c=b*3/4;c%3?c=Math.floor(c):"=.".indexOf(a[b-1])!=-1&&(c="=.".indexOf(a[b-2])!=-1?c-2:c-1);var d=new Uint8Array(c),e=0;Cd(a,function(f){d[e++]=f});
return e!==c?d.subarray(0,e):d}
function Cd(a,b){function c(k){for(;d<a.length;){var l=a.charAt(d++),m=yd[l];if(m!=null)return m;if(!/^[\s\xa0]*$/.test(l))throw Error("Unknown base64 encoding at char: "+l);}return k}
Ad();for(var d=0;;){var e=c(-1),f=c(0),g=c(64),h=c(64);if(h===64&&e===-1)break;b(e<<2|f>>4);g!=64&&(b(f<<4&240|g>>2),h!=64&&b(g<<6&192|h))}}
function Ad(){if(!yd){yd={};for(var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),b=["+/=","+/","-_=","-_.","-_"],c=0;c<5;c++){var d=a.concat(b[c].split(""));xd[c]=d;for(var e=0;e<d.length;e++){var f=d[e];yd[f]===void 0&&(yd[f]=e)}}}}
;var Dd=typeof Uint8Array!=="undefined",Ed=!pd&&typeof btoa==="function",Fd=/[-_.]/g,Gd={"-":"+",_:"/",".":"="};function Hd(a){return Gd[a]||""}
var Id={};function Jd(a,b){Kd(b);this.h=a;if(a!=null&&a.length===0)throw Error("ByteString should be constructed with non-empty values");}
Jd.prototype.sizeBytes=function(){Kd(Id);var a=this.h;if(!(a==null||Dd&&a!=null&&a instanceof Uint8Array))if(typeof a==="string")if(Ed){a=Fd.test(a)?a.replace(Fd,Hd):a;a=atob(a);for(var b=new Uint8Array(a.length),c=0;c<a.length;c++)b[c]=a.charCodeAt(c);a=b}else a=Bd(a);else La(a),a=null;return(a=a==null?a:this.h=a)?a.length:0};
var Ld;function Kd(a){if(a!==Id)throw Error("illegal external caller");}
;var Md=void 0;function Nd(a){a=Error(a);fc(a,"warning");return a}
function Od(a,b){if(a!=null){var c;var d=(c=Md)!=null?c:Md={};c=d[a]||0;c>=b||(d[a]=c+1,a=Error(),fc(a,"incident"),$c(a))}}
;var Pd=typeof Symbol==="function"&&typeof Symbol()==="symbol";function Qd(a,b,c){return typeof Symbol==="function"&&typeof Symbol()==="symbol"?(c===void 0?0:c)&&Symbol.for&&a?Symbol.for(a):a!=null?Symbol(a):Symbol():b}
var Rd=Qd("jas",void 0,!0),Sd=Qd(void 0,"1oa"),Td=Qd(void 0,Symbol()),Ud=Qd(void 0,"0ub"),Vd=Qd(void 0,"0ubs"),Wd=Qd(void 0,"0actk"),Xd=Qd("m_m","Sh",!0),Yd=Qd(void 0,"vps"),Zd=Qd();Math.max.apply(Math,A(Object.values({rh:1,qh:2,ph:4,uh:8,xh:16,sh:32,Rf:64,nh:128,Wf:256,wh:512,Xf:1024,oh:2048,th:4096})));var $d={Ie:{value:0,configurable:!0,writable:!0,enumerable:!1}},ae=Object.defineProperties,K=Pd?Rd:"Ie",be,ce=[];de(ce,7);be=Object.freeze(ce);function ee(a,b){Pd||K in a||ae(a,$d);a[K]|=b}
function de(a,b){Pd||K in a||ae(a,$d);a[K]=b}
;function fe(){return typeof BigInt==="function"}
;var ge={};function he(a,b){if(b===void 0){if(b=a.h!==ie)b=!!(2&(a.F[K]|0));return b}return!!(2&b)&&a.h!==ie}
var ie={},je=Object.freeze({}),ke={};function le(a){a.Nh=!0;return a}
;var me=le(function(a){return typeof a==="number"}),ne=le(function(a){return typeof a==="string"}),oe=le(function(a){return typeof a==="boolean"});
function pe(){var a=qe;return le(function(b){for(var c in a)if(b===a[c]&&!/^[0-9]+$/.test(c))return!0;return!1})}
var re=le(function(a){return a!=null&&typeof a==="object"&&typeof a.then==="function"});var se=typeof D.BigInt==="function"&&typeof D.BigInt(0)==="bigint";function te(a){var b=a;if(ne(b)){if(!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(b))throw Error(String(b));}else if(me(b)&&!Number.isSafeInteger(b))throw Error(String(b));return se?BigInt(a):a=oe(a)?a?"1":"0":ne(a)?a.trim()||"0":String(a)}
var ze=le(function(a){return se?a>=ue&&a<=ve:a[0]==="-"?we(a,xe):we(a,ye)}),xe=Number.MIN_SAFE_INTEGER.toString(),ue=se?BigInt(Number.MIN_SAFE_INTEGER):void 0,ye=Number.MAX_SAFE_INTEGER.toString(),ve=se?BigInt(Number.MAX_SAFE_INTEGER):void 0;
function we(a,b){if(a.length>b.length)return!1;if(a.length<b.length||a===b)return!0;for(var c=0;c<a.length;c++){var d=a[c],e=b[c];if(d>e)return!1;if(d<e)return!0}}
;var Ae=0,Be=0;function Ce(a){var b=a>>>0;Ae=b;Be=(a-b)/4294967296>>>0}
function De(a){if(a<0){Ce(0-a);var b=y(Ee(Ae,Be));a=b.next().value;b=b.next().value;Ae=a>>>0;Be=b>>>0}else Ce(a)}
function Fe(a,b){b>>>=0;a>>>=0;if(b<=2097151)var c=""+(4294967296*b+a);else fe()?c=""+(BigInt(b)<<BigInt(32)|BigInt(a)):(c=(a>>>24|b<<8)&16777215,b=b>>16&65535,a=(a&16777215)+c*6777216+b*6710656,c+=b*8147497,b*=2,a>=1E7&&(c+=a/1E7>>>0,a%=1E7),c>=1E7&&(b+=c/1E7>>>0,c%=1E7),c=b+Ge(c)+Ge(a));return c}
function Ge(a){a=String(a);return"0000000".slice(a.length)+a}
function He(){var a=Ae,b=Be;b&2147483648?fe()?a=""+(BigInt(b|0)<<BigInt(32)|BigInt(a>>>0)):(b=y(Ee(a,b)),a=b.next().value,b=b.next().value,a="-"+Fe(a,b)):a=Fe(a,b);return a}
function Ee(a,b){b=~b;a?a=~a+1:b+=1;return[a,b]}
;function Ie(a){return Array.prototype.slice.call(a)}
;var Je=typeof BigInt==="function"?BigInt.asIntN:void 0,Ke=Number.isSafeInteger,Le=Number.isFinite,Me=Math.trunc;function Ne(a){return a.displayName||a.name||"unknown type name"}
function Oe(a){if(a!=null&&typeof a!=="boolean")throw Error("Expected boolean but got "+La(a)+": "+a);return a}
var Pe=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;function Qe(a){switch(typeof a){case "bigint":return!0;case "number":return Le(a);case "string":return Pe.test(a);default:return!1}}
function Re(a){if(typeof a!=="number")throw Nd("int32");if(!Le(a))throw Nd("int32");return a|0}
function Se(a){return a==null?a:Re(a)}
function Te(a){if(a==null)return a;if(typeof a==="string"&&a)a=+a;else if(typeof a!=="number")return;return Le(a)?a|0:void 0}
function Ue(a){var b=0;b=b===void 0?0:b;if(!Qe(a))throw Nd("int64");var c=typeof a;switch(b){case 512:switch(c){case "string":return Ve(a);case "bigint":return String(Je(64,a));default:return We(a)}case 1024:switch(c){case "string":return Xe(a);case "bigint":return te(Je(64,a));default:return Ye(a)}case 0:switch(c){case "string":return Ve(a);case "bigint":return te(Je(64,a));default:return Ze(a)}default:return Gb(b,"Unknown format requested type for int64")}}
function $e(a){return a==null?a:Ue(a)}
function af(a){var b=a.length;return a[0]==="-"?b<20?!0:b===20&&Number(a.substring(0,7))>-922337:b<19?!0:b===19&&Number(a.substring(0,6))<922337}
function bf(a){a.indexOf(".");if(af(a))return a;if(a.length<16)De(Number(a));else if(fe())a=BigInt(a),Ae=Number(a&BigInt(4294967295))>>>0,Be=Number(a>>BigInt(32)&BigInt(4294967295));else{var b=+(a[0]==="-");Be=Ae=0;for(var c=a.length,d=0+b,e=(c-b)%6+b;e<=c;d=e,e+=6)d=Number(a.slice(d,e)),Be*=1E6,Ae=Ae*1E6+d,Ae>=4294967296&&(Be+=Math.trunc(Ae/4294967296),Be>>>=0,Ae>>>=0);b&&(b=y(Ee(Ae,Be)),a=b.next().value,b=b.next().value,Ae=a,Be=b)}return He()}
function Ze(a){Qe(a);a=Me(a);if(!Ke(a)){De(a);var b=Ae,c=Be;if(a=c&2147483648)b=~b+1>>>0,c=~c>>>0,b==0&&(c=c+1>>>0);var d=c*4294967296+(b>>>0);b=Number.isSafeInteger(d)?d:Fe(b,c);a=typeof b==="number"?a?-b:b:a?"-"+b:b}return a}
function We(a){Qe(a);a=Me(a);if(Ke(a))a=String(a);else{var b=String(a);af(b)?a=b:(De(a),a=He())}return a}
function Ve(a){Qe(a);var b=Me(Number(a));if(Ke(b))return String(b);b=a.indexOf(".");b!==-1&&(a=a.substring(0,b));return bf(a)}
function Xe(a){var b=Me(Number(a));if(Ke(b))return te(b);b=a.indexOf(".");b!==-1&&(a=a.substring(0,b));return fe()?te(Je(64,BigInt(a))):te(bf(a))}
function Ye(a){return Ke(a)?te(Ze(a)):te(We(a))}
function cf(a){if(typeof a!=="string")throw Error();return a}
function df(a){if(a!=null&&typeof a!=="string")throw Error();return a}
function ef(a){return a==null||typeof a==="string"?a:void 0}
function ff(a,b){if(!(a instanceof b))throw Error("Expected instanceof "+Ne(b)+" but got "+(a&&Ne(a.constructor)));}
function gf(a,b,c){if(a!=null&&a[Xd]===ge)return a;if(Array.isArray(a)){var d=a[K]|0;c=d|c&32|c&2;c!==d&&de(a,c);return new b(a)}}
;var hf={};function jf(a){return a}
;var kf={bi:!0};function lf(a,b){b<100||Od(Vd,1)}
;function mf(a,b,c,d){var e=d!==void 0;d=!!d;var f=Xa(Td),g;!e&&Pd&&f&&(g=a[f])&&g.Kh(lf);f=[];var h=a.length;g=4294967295;var k=!1,l=!!(b&64),m=l?b&128?0:-1:void 0;if(!(b&1)){var n=h&&a[h-1];n!=null&&typeof n==="object"&&n.constructor===Object?(h--,g=h):n=void 0;if(l&&!(b&128)&&!e){k=!0;var r;g=((r=nf)!=null?r:jf)(g-m,m,a,n)+m}}b=void 0;for(e=0;e<h;e++)if(r=a[e],r!=null&&(r=c(r,d))!=null)if(l&&e>=g){var t=e-m,w=void 0;((w=b)!=null?w:b={})[t]=r}else f[e]=r;if(n)for(var x in n)a=n[x],a!=null&&(a=c(a,
d))!=null&&(h=+x,e=void 0,l&&!Number.isNaN(h)&&(e=h+m)<g?f[e]=a:(h=void 0,((h=b)!=null?h:b={})[x]=a));b&&(k?f.push(b):f[g]=b);return f}
function of(a){switch(typeof a){case "number":return Number.isFinite(a)?a:""+a;case "bigint":return ze(a)?Number(a):""+a;case "boolean":return a?1:0;case "object":if(Array.isArray(a)){var b=a[K]|0;return a.length===0&&b&1?void 0:mf(a,b,of)}if(a!=null&&a[Xd]===ge)return pf(a);if(a instanceof Jd){b=a.h;if(b==null)a="";else if(typeof b==="string")a=b;else{if(Ed){for(var c="",d=0,e=b.length-10240;d<e;)c+=String.fromCharCode.apply(null,b.subarray(d,d+=10240));c+=String.fromCharCode.apply(null,d?b.subarray(d):
b);b=btoa(c)}else b=zd(b);a=a.h=b}return a}return}return a}
var nf;function qf(a,b){if(b){nf=b==null||b===jf||b[Yd]!==hf?jf:b;try{return pf(a)}finally{nf=void 0}}return pf(a)}
function pf(a){a=a.F;return mf(a,a[K]|0,of)}
;function L(a,b,c){var d=d===void 0?0:d;if(a==null){var e=32;c?(a=[c],e|=128):a=[];b&&(e=e&-8380417|(b&1023)<<13)}else{if(!Array.isArray(a))throw Error("narr");e=a[K]|0;2048&e&&!(2&e)&&rf();if(e&256)throw Error("farr");if(e&64)return d!==0||e&2048||de(a,e|2048),a;if(c&&(e|=128,c!==a[0]))throw Error("mid");a:{c=a;e|=64;var f=c.length;if(f){var g=f-1,h=c[g];if(h!=null&&typeof h==="object"&&h.constructor===Object){b=e&128?0:-1;g-=b;if(g>=1024)throw Error("pvtlmt");for(var k in h)f=+k,f<g&&(c[f+b]=h[k],
delete h[k]);e=e&-8380417|(g&1023)<<13;break a}}if(b){k=Math.max(b,f-(e&128?0:-1));if(k>1024)throw Error("spvt");e=e&-8380417|(k&1023)<<13}}}e|=64;d===0&&(e|=2048);de(a,e);return a}
function rf(){Od(Wd,5)}
;function sf(a,b){if(typeof a!=="object")return a;if(Array.isArray(a)){var c=a[K]|0;a.length===0&&c&1?a=void 0:c&2||(!b||4096&c||16&c?a=tf(a,c,!1,b&&!(c&16)):(ee(a,34),c&4&&Object.freeze(a)));return a}if(a!=null&&a[Xd]===ge)return b=a.F,c=b[K]|0,he(a,c)?a:uf(a,b,c)?vf(a,b):tf(b,c);if(a instanceof Jd)return a}
function vf(a,b,c){a=new a.constructor(b);c&&(a.h=ie);a.i=ie;return a}
function tf(a,b,c,d){d!=null||(d=!!(34&b));a=mf(a,b,sf,d);d=32;c&&(d|=2);b=b&8380609|d;de(a,b);return a}
function wf(a){var b=a.F,c=b[K]|0;return he(a,c)?uf(a,b,c)?vf(a,b,!0):new a.constructor(tf(b,c,!1)):a}
function xf(a){if(a.h!==ie)return!1;var b=a.F;b=tf(b,b[K]|0);ee(b,2048);a.F=b;a.h=void 0;a.i=void 0;return!0}
function yf(a){if(!xf(a)&&he(a,a.F[K]|0))throw Error();}
function zf(a,b){b===void 0&&(b=a[K]|0);b&32&&!(b&4096)&&de(a,b|4096)}
function uf(a,b,c){return c&2?!0:c&32&&!(c&4096)?(de(b,c|2),a.h=ie,!0):!1}
;var Af=te(0),Bf={};function Cf(a,b,c,d){Object.isExtensible(a);b=Df(a.F,b,c);if(b!==null||d&&a.i!==ie)return b}
function Df(a,b,c,d){if(b===-1)return null;var e=b+(c?0:-1),f=a.length-1;if(!(f<1+(c?0:-1))){if(e>=f){var g=a[f];if(g!=null&&typeof g==="object"&&g.constructor===Object){c=g[b];var h=!0}else if(e===f)c=g;else return}else c=a[e];if(d&&c!=null){d=d(c);if(d==null)return d;if(!Object.is(d,c))return h?g[b]=d:a[e]=d,d}return c}}
function Ef(a,b,c,d){yf(a);var e=a.F;Ff(e,e[K]|0,b,c,d);return a}
function Ff(a,b,c,d,e){var f=c+(e?0:-1),g=a.length-1;if(g>=1+(e?0:-1)&&f>=g){var h=a[g];if(h!=null&&typeof h==="object"&&h.constructor===Object)return h[c]=d,b}if(f<=g)return a[f]=d,b;if(d!==void 0){var k;g=((k=b)!=null?k:b=a[K]|0)>>13&1023||536870912;c>=g?d!=null&&(f={},a[g+(e?0:-1)]=(f[c]=d,f)):a[f]=d}return b}
function Gf(a){return!!(2&a)&&!!(4&a)||!!(256&a)}
function Hf(a,b,c){yf(a);var d=a.F,e=d[K]|0;if(b==null)return Ff(d,e,3),a;if(!Array.isArray(b))throw Nd();var f=b===be?7:b[K]|0,g=f,h=Gf(f),k=h||Object.isFrozen(b);h||(f=0);k||(b=Ie(b),g=0,f=If(f,e),k=!1);f|=5;h=4&f?512&f?512:1024&f?1024:0:void 0;h=h!=null?h:0;for(var l=0;l<b.length;l++){var m=b[l],n=c(m,h);Object.is(m,n)||(k&&(b=Ie(b),g=0,f=If(f,e),k=!1),b[l]=n)}f!==g&&(k&&(b=Ie(b),f=If(f,e)),de(b,f));Ff(d,e,3,b);return a}
function Jf(a,b,c,d){yf(a);a=a.F;var e=a[K]|0;if(d==null){var f=Kf(a);if(Lf(f,a,e,c)===b)f.set(c,0);else return}else{c.includes(b);f=Kf(a);var g=Lf(f,a,e,c);g!==b&&(g&&(e=Ff(a,e,g)),f.set(c,b))}Ff(a,e,b,d)}
function Kf(a){if(Pd){var b;return(b=a[Sd])!=null?b:a[Sd]=new Map}if(Sd in a)return a[Sd];b=new Map;Object.defineProperty(a,Sd,{value:b});return b}
function Lf(a,b,c,d){var e=a.get(d);if(e!=null)return e;for(var f=e=0;f<d.length;f++){var g=d[f];Df(b,g)!=null&&(e!==0&&(c=Ff(b,c,e)),e=g)}a.set(d,e);return e}
function Mf(a,b,c,d,e){var f=!1;d=Df(a,d,e,function(g){var h=gf(g,c,b);f=h!==g&&h!=null;return h});
if(d!=null)return f&&!he(d)&&zf(a,b),d}
function Nf(a,b,c,d){var e=a.F,f=e[K]|0;b=Mf(e,f,b,c,d);if(b==null)return b;f=e[K]|0;if(!he(a,f)){var g=wf(b);g!==b&&(xf(a)&&(e=a.F,f=e[K]|0),b=g,f=Ff(e,f,c,b,d),zf(e,f))}return b}
function Kc(a,b,c){var d=void 0===je?2:4;var e=a.F,f=e,g=e[K]|0;e=!1;var h=he(a,g);d=h?1:d;e=!!e||d===3;var k=!h;(d===2||k)&&xf(a)&&(f=a.F,g=f[K]|0);a=Df(f,c);h=Array.isArray(a)?a:be;var l=h===be?7:h[K]|0;a=l;2&g&&(a|=2);var m=a|1;if(a=!(4&m)){var n=h,r=g,t=!!(2&m);t&&(r|=2);for(var w=!t,x=!0,z=0,G=0;z<n.length;z++){var H=gf(n[z],b,r);if(H instanceof b){if(!t){var S=he(H);w&&(w=!S);x&&(x=S)}n[G++]=H}}G<z&&(n.length=G);m|=4;m=x?m&-4097:m|4096;m=w?m|8:m&-9}m!==l&&(de(h,m),2&m&&Object.freeze(h));if(k&&
!(8&m||!h.length&&(d===1||(d!==4?0:2&m||!(16&m)&&32&g)))){Gf(m)&&(h=Ie(h),m=If(m,g),g=Ff(f,g,c,h));b=h;k=m;for(l=0;l<b.length;l++)n=b[l],m=wf(n),n!==m&&(b[l]=m);k|=8;m=k=b.length?k|4096:k&-4097;de(h,m)}b=h;k=h=m;d===1||(d!==4?0:2&h||!(16&h)&&32&g)?Gf(h)||(h|=!b.length||a&&!(4096&h)||32&g&&!(4096&h||16&h)?2:256,h!==k&&de(b,h),Object.freeze(b)):(d===2&&Gf(h)&&(b=Ie(b),k=0,h=If(h,g),g=Ff(f,g,c,b)),Gf(h)||(e||(h|=16),h!==k&&de(b,h)));2&h||!(4096&h||16&h)||zf(f,g);return b}
function Of(a,b,c,d,e){d!=null?ff(d,b):d=void 0;Ef(a,c,d,e);d&&!he(d)&&zf(a.F);return a}
function Pf(a,b,c,d){yf(a);var e=a.F,f=e[K]|0;if(d==null)return Ff(e,f,c),a;if(!Array.isArray(d))throw Nd();for(var g=d===be?7:d[K]|0,h=g,k=Gf(g),l=k||Object.isFrozen(d),m=!0,n=!0,r=0;r<d.length;r++){var t=d[r];ff(t,b);k||(t=he(t),m&&(m=!t),n&&(n=t))}k||(g=m?13:5,g=n?g&-4097:g|4096);l&&g===h||(d=Ie(d),h=0,g=If(g,f));g!==h&&de(d,g);f=Ff(e,f,c,d);2&g||!(4096&g||16&g)||zf(e,f);return a}
function If(a,b){return a=(2&b?a|2:a&-3)&-273}
function Mc(a,b,c){c=c===void 0?0:c;a=Te(Cf(a,b));return a!=null?a:c}
function Qf(a,b,c){c=c===void 0?Af:c;a=Cf(a,b);b=typeof a;a=a==null?a:b==="bigint"?te(Je(64,a)):Qe(a)?b==="string"?Xe(a):Ye(a):void 0;return a!=null?a:c}
function Rf(a,b,c,d){c=c===void 0?"":c;var e;return(e=ef(Cf(a,b,d)))!=null?e:c}
function Sf(a){var b=b===void 0?0:b;a=Cf(a,1);a=a==null?a:Le(a)?a|0:void 0;return a!=null?a:b}
function Tf(a,b,c){return Ef(a,b,df(c))}
function Uf(a,b,c){c=df(c);yf(a);a=a.F;Ff(a,a[K]|0,b,c===""?void 0:c,ke)}
function Vf(a,b,c){if(c!=null){if(!Le(c))throw Nd("enum");c|=0}return Ef(a,b,c)}
;function M(a,b,c){this.F=L(a,b,c)}
M.prototype.toJSON=function(){return qf(this)};
M.prototype.serialize=function(a){return JSON.stringify(qf(this,a))};
function Wf(a,b){if(b==null||b=="")return new a;b=JSON.parse(b);if(!Array.isArray(b))throw Error("dnarr");ee(b,32);return new a(b)}
M.prototype.clone=function(){var a=this.F,b=a[K]|0;return uf(this,a,b)?vf(this,a,!0):new this.constructor(tf(a,b,!1))};
M.prototype[Xd]=ge;M.prototype.toString=function(){return this.F.toString()};function Xf(){var a=Yf;this.ctor=Zf;this.isRepeated=0;this.h=Nf;this.defaultValue=void 0;this.i=a.Pe!=null?ke:void 0}
Xf.prototype.register=function(){nd(this)};function $f(a){return function(b){return Wf(a,b)}}
;function ag(a){this.F=L(a)}
v(ag,M);function bg(a,b){return Hf(a,b,Re)}
;function cg(a){this.F=L(a)}
v(cg,M);var dg=[1,2,3];function eg(a){this.F=L(a)}
v(eg,M);var fg=[1,2,3];function gg(a){this.F=L(a)}
v(gg,M);function hg(a){this.F=L(a)}
v(hg,M);function ig(a){this.F=L(a)}
v(ig,M);function jg(a){if(!a)return"";if(/^about:(?:blank|srcdoc)$/.test(a))return window.origin||"";a.indexOf("blob:")===0&&(a=a.substring(5));a=a.split("#")[0].split("?")[0];a=a.toLowerCase();a.indexOf("//")==0&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");c!=-1&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if(c!=="http"&&c!=="https"&&c!=="chrome-extension"&&
c!=="moz-extension"&&c!=="file"&&c!=="android-app"&&c!=="chrome-search"&&c!=="chrome-untrusted"&&c!=="chrome"&&c!=="app"&&c!=="devtools")throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(d!=-1){var e=b.substring(d+1);b=b.substring(0,d);if(c==="http"&&e!=="80"||c==="https"&&e!=="443")a=":"+e}return c+"://"+b+a}
;function kg(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;m=l=0}
function b(n){for(var r=g,t=0;t<64;t+=4)r[t/4]=n[t]<<24|n[t+1]<<16|n[t+2]<<8|n[t+3];for(t=16;t<80;t++)n=r[t-3]^r[t-8]^r[t-14]^r[t-16],r[t]=(n<<1|n>>>31)&4294967295;n=e[0];var w=e[1],x=e[2],z=e[3],G=e[4];for(t=0;t<80;t++){if(t<40)if(t<20){var H=z^w&(x^z);var S=1518500249}else H=w^x^z,S=1859775393;else t<60?(H=w&x|z&(w|x),S=2400959708):(H=w^x^z,S=3395469782);H=((n<<5|n>>>27)&4294967295)+H+G+S+r[t]&4294967295;G=z;z=x;x=(w<<30|w>>>2)&4294967295;w=n;n=H}e[0]=e[0]+n&4294967295;e[1]=e[1]+w&4294967295;e[2]=
e[2]+x&4294967295;e[3]=e[3]+z&4294967295;e[4]=e[4]+G&4294967295}
function c(n,r){if(typeof n==="string"){n=unescape(encodeURIComponent(n));for(var t=[],w=0,x=n.length;w<x;++w)t.push(n.charCodeAt(w));n=t}r||(r=n.length);t=0;if(l==0)for(;t+64<r;)b(n.slice(t,t+64)),t+=64,m+=64;for(;t<r;)if(f[l++]=n[t++],m++,l==64)for(l=0,b(f);t+64<r;)b(n.slice(t,t+64)),t+=64,m+=64}
function d(){var n=[],r=m*8;l<56?c(h,56-l):c(h,64-(l-56));for(var t=63;t>=56;t--)f[t]=r&255,r>>>=8;b(f);for(t=r=0;t<5;t++)for(var w=24;w>=0;w-=8)n[r++]=e[t]>>w&255;return n}
for(var e=[],f=[],g=[],h=[128],k=1;k<64;++k)h[k]=0;var l,m;a();return{reset:a,update:c,digest:d,ne:function(){for(var n=d(),r="",t=0;t<n.length;t++)r+="0123456789ABCDEF".charAt(Math.floor(n[t]/16))+"0123456789ABCDEF".charAt(n[t]%16);return r}}}
;function lg(a,b,c){var d=String(D.location.href);return d&&a&&b?[b,mg(jg(d),a,c||null)].join(" "):null}
function mg(a,b,c){var d=[],e=[];if((Array.isArray(c)?2:1)==1)return e=[b,a],Vb(d,function(h){e.push(h)}),ng(e.join(" "));
var f=[],g=[];Vb(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=f.length==0?[c,b,a]:[f.join(":"),c,b,a];Vb(d,function(h){e.push(h)});
a=ng(e.join(" "));a=[c,a];g.length==0||a.push(g.join(""));return a.join("_")}
function ng(a){var b=kg();b.update(a);return b.ne().toLowerCase()}
;function og(a){this.h=a||{cookie:""}}
p=og.prototype;p.isEnabled=function(){if(!D.navigator.cookieEnabled)return!1;if(this.h.cookie)return!0;this.set("TESTCOOKIESENABLED","1",{Yb:60});if(this.get("TESTCOOKIESENABLED")!=="1")return!1;this.remove("TESTCOOKIESENABLED");return!0};
p.set=function(a,b,c){var d=!1;if(typeof c==="object"){var e=c.ff;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.Yb}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');h===void 0&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=h<0?"":h==0?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+h*1E3)).toUTCString();this.h.cookie=a+"="+b+c+g+h+d+(e!=null?";samesite="+
e:"")};
p.get=function(a,b){for(var c=a+"=",d=(this.h.cookie||"").split(";"),e=0,f;e<d.length;e++){f=jb(d[e]);if(f.lastIndexOf(c,0)==0)return f.slice(c.length);if(f==a)return""}return b};
p.remove=function(a,b,c){var d=this.get(a)!==void 0;this.set(a,"",{Yb:0,path:b,domain:c});return d};
p.Ub=function(){return pg(this).keys};
p.Wa=function(){return pg(this).values};
p.clear=function(){for(var a=pg(this).keys,b=a.length-1;b>=0;b--)this.remove(a[b])};
function pg(a){a=(a.h.cookie||"").split(";");for(var b=[],c=[],d,e,f=0;f<a.length;f++)e=jb(a[f]),d=e.indexOf("="),d==-1?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));return{keys:b,values:c}}
var qg=new og(typeof document=="undefined"?null:document);function rg(){var a=D.__SAPISID||D.__APISID||D.__3PSAPISID||D.__1PSAPISID||D.__OVERRIDE_SID;if(a)return!0;typeof document!=="undefined"&&(a=new og(document),a=a.get("SAPISID")||a.get("APISID")||a.get("__Secure-3PAPISID")||a.get("__Secure-1PAPISID"));return!!a}
function sg(a,b,c,d){(a=D[a])||typeof document==="undefined"||(a=(new og(document)).get(b));return a?lg(a,c,d):null}
function tg(a){var b=jg(D==null?void 0:D.location.href),c=[];if(rg()){b=b.indexOf("https:")==0||b.indexOf("chrome-extension:")==0||b.indexOf("chrome-untrusted://new-tab-page")==0||b.indexOf("moz-extension:")==0;var d=b?D.__SAPISID:D.__APISID;d||typeof document==="undefined"||(d=new og(document),d=d.get(b?"SAPISID":"APISID")||d.get("__Secure-3PAPISID"));(d=d?lg(d,b?"SAPISIDHASH":"APISIDHASH",a):null)&&c.push(d);b&&((b=sg("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&c.push(b),(a=sg("__3PSAPISID",
"__Secure-3PAPISID","SAPISID3PHASH",a))&&c.push(a))}return c.length==0?null:c.join(" ")}
;function ug(){}
ug.prototype.compress=function(a){var b,c,d,e;return B(function(f){switch(f.h){case 1:return b=new CompressionStream("gzip"),c=(new Response(b.readable)).arrayBuffer(),d=b.writable.getWriter(),f.yield(d.write((new TextEncoder).encode(a)),2);case 2:return f.yield(d.close(),3);case 3:return e=Uint8Array,f.yield(c,4);case 4:return f.return(new e(f.i))}})};
ug.prototype.isSupported=function(a){return a<1024?!1:typeof CompressionStream!=="undefined"};function vg(a){this.F=L(a)}
v(vg,M);function wg(a,b){this.intervalMs=a;this.callback=b;this.enabled=!1;this.h=function(){return Wa()};
this.i=this.h()}
wg.prototype.setInterval=function(a){this.intervalMs=a;this.timer&&this.enabled?(this.stop(),this.start()):this.timer&&this.stop()};
wg.prototype.start=function(){var a=this;this.enabled=!0;this.timer||(this.timer=setTimeout(function(){a.tick()},this.intervalMs),this.i=this.h())};
wg.prototype.stop=function(){this.enabled=!1;this.timer&&(clearTimeout(this.timer),this.timer=void 0)};
wg.prototype.tick=function(){var a=this;if(this.enabled){var b=Math.max(this.h()-this.i,0);b<this.intervalMs*.8?this.timer=setTimeout(function(){a.tick()},this.intervalMs-b):(this.timer&&(clearTimeout(this.timer),this.timer=void 0),this.callback(),this.enabled&&(this.stop(),this.start()))}else this.timer=void 0};function xg(a){this.F=L(a)}
v(xg,M);function yg(a){this.F=L(a)}
v(yg,M);function zg(a,b){this.x=a!==void 0?a:0;this.y=b!==void 0?b:0}
p=zg.prototype;p.clone=function(){return new zg(this.x,this.y)};
p.equals=function(a){return a instanceof zg&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
p.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
p.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
p.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};
p.scale=function(a,b){this.x*=a;this.y*=typeof b==="number"?b:a;return this};function Ag(a,b){this.width=a;this.height=b}
p=Ag.prototype;p.clone=function(){return new Ag(this.width,this.height)};
p.aspectRatio=function(){return this.width/this.height};
p.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
p.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
p.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};
p.scale=function(a,b){this.width*=a;this.height*=typeof b==="number"?b:a;return this};function Bg(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function Cg(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b}
function Dg(a){var b=Eg,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function Fg(a){for(var b in a)return!1;return!0}
function Gg(a,b){if(a!==null&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function Hg(a){return a!==null&&"privembed"in a?a.privembed:!1}
function Ig(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function Jg(a){var b={},c;for(c in a)b[c]=a[c];return b}
function Kg(a){if(!a||typeof a!=="object")return a;if(typeof a.clone==="function")return a.clone();if(typeof Map!=="undefined"&&a instanceof Map)return new Map(a);if(typeof Set!=="undefined"&&a instanceof Set)return new Set(a);if(a instanceof Date)return new Date(a.getTime());var b=Array.isArray(a)?[]:typeof ArrayBuffer!=="function"||typeof ArrayBuffer.isView!=="function"||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=Kg(a[c]);return b}
var Lg="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Mg(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<Lg.length;f++)c=Lg[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;function Ng(a,b){this.h=a===Og&&b||""}
Ng.prototype.toString=function(){return this.h};
var Og={};new Ng(Og,"");"ARTICLE SECTION NAV ASIDE H1 H2 H3 H4 H5 H6 HEADER FOOTER ADDRESS P HR PRE BLOCKQUOTE OL UL LH LI DL DT DD FIGURE FIGCAPTION MAIN DIV EM STRONG SMALL S CITE Q DFN ABBR RUBY RB RT RTC RP DATA TIME CODE VAR SAMP KBD SUB SUP I B U MARK BDI BDO SPAN BR WBR NOBR INS DEL PICTURE PARAM TRACK MAP TABLE CAPTION COLGROUP COL TBODY THEAD TFOOT TR TD TH SELECT DATALIST OPTGROUP OPTION OUTPUT PROGRESS METER FIELDSET LEGEND DETAILS SUMMARY MENU DIALOG SLOT CANVAS FONT CENTER ACRONYM BASEFONT BIG DIR HGROUP STRIKE TT".split(" ").concat(["BUTTON",
"INPUT"]);function Pg(a){var b=document;return typeof a==="string"?b.getElementById(a):a}
function Qg(a){var b=document;a=String(a);b.contentType==="application/xhtml+xml"&&(a=a.toLowerCase());return b.createElement(a)}
function Rg(a){a&&a.parentNode&&a.parentNode.removeChild(a)}
function Sg(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;function Tg(a){this.F=L(a)}
v(Tg,M);Tg.prototype.vc=function(){return Sf(this)};function Ug(a){this.F=L(a)}
v(Ug,M);function Vg(a){this.F=L(a)}
v(Vg,M);function Wg(a){Pf(Xg,Ug,1,a)}
var Yg=$f(Vg);function Zg(a){this.F=L(a)}
v(Zg,M);var $g=["platform","platformVersion","architecture","model","uaFullVersion"],Xg=new Vg,ah=null;function bh(a,b){b=b===void 0?$g:b;if(!ah){var c;a=(c=a.navigator)==null?void 0:c.userAgentData;if(!a||typeof a.getHighEntropyValues!=="function"||a.brands&&typeof a.brands.map!=="function")return Promise.reject(Error("UACH unavailable"));Wg((a.brands||[]).map(function(e){var f=new Ug;f=Tf(f,1,e.brand);return Tf(f,2,e.version)}));
typeof a.mobile==="boolean"&&Ef(Xg,2,Oe(a.mobile));ah=a.getHighEntropyValues(b)}var d=new Set(b);return ah.then(function(e){var f=Xg.clone();d.has("platform")&&Tf(f,3,e.platform);d.has("platformVersion")&&Tf(f,4,e.platformVersion);d.has("architecture")&&Tf(f,5,e.architecture);d.has("model")&&Tf(f,6,e.model);d.has("uaFullVersion")&&Tf(f,7,e.uaFullVersion);return f.serialize()}).catch(function(){return Xg.serialize()})}
;function ch(a){this.F=L(a)}
v(ch,M);function dh(a){return Vf(a,1,1)}
;function eh(a){this.F=L(a,4)}
v(eh,M);function fh(a){this.F=L(a,36)}
v(fh,M);function gh(a){this.F=L(a,19)}
v(gh,M);gh.prototype.cc=function(a){return Vf(this,2,a)};function hh(a,b){this.Oa=b=b===void 0?!1:b;this.j=this.locale=null;this.i=0;this.isFinal=!1;this.h=new gh;Number.isInteger(a)&&this.h.cc(a);b||(this.locale=document.documentElement.getAttribute("lang"));ih(this,new ch)}
hh.prototype.cc=function(a){this.h.cc(a);return this};
function ih(a,b){Of(a.h,ch,1,b);Sf(b)||dh(b);a.Oa||(b=jh(a),Rf(b,5)||Tf(b,5,a.locale));a.j&&(b=jh(a),Nf(b,Vg,9)||Of(b,Vg,9,a.j))}
function kh(a,b){a.i=b}
function lh(a){var b=b===void 0?$g:b;var c=a.Oa?void 0:window;c?bh(c,b).then(function(d){a.j=Yg(d!=null?d:"[]");d=jh(a);Of(d,Vg,9,a.j);return!0}).catch(function(){return!1}):Promise.resolve(!1)}
function jh(a){a=Nf(a.h,ch,1);var b=Nf(a,Zg,11);b||(b=new Zg,Of(a,Zg,11,b));return b}
function mh(a,b,c,d,e,f,g){c=c===void 0?0:c;d=d===void 0?0:d;e=e===void 0?null:e;f=f===void 0?0:f;g=g===void 0?0:g;if(!a.Oa){var h=jh(a);var k=new Tg;k=Vf(k,1,a.i);k=Ef(k,2,Oe(a.isFinal));d=Ef(k,3,Se(d>0?d:void 0));d=Ef(d,4,Se(f>0?f:void 0));d=Ef(d,5,Se(g>0?g:void 0));f=d.F;g=f[K]|0;d=he(d,g)?d:uf(d,f,g)?vf(d,f):new d.constructor(tf(f,g,!0));Of(h,Tg,10,d)}a=a.h.clone();h=Date.now().toString();a=Ef(a,4,$e(h));b=b.slice();b=Pf(a,fh,3,b);e&&(a=new xg,e=Ef(a,13,Se(e)),a=new yg,e=Of(a,xg,2,e),a=new eh,
e=Of(a,yg,1,e),e=Vf(e,2,9),Of(b,eh,18,e));c&&Ef(b,14,$e(c));return b}
;var nh=function(){if(!D.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{var c=function(){};
D.addEventListener("test",c,b);D.removeEventListener("test",c,b)}catch(d){}return a}();function oh(a){this.h=this.i=this.j=a}
oh.prototype.reset=function(){this.h=this.i=this.j};
oh.prototype.getValue=function(){return this.i};function Yf(a){this.F=L(a,8)}
v(Yf,M);var ph=$f(Yf);function Zf(a){this.F=L(a)}
v(Zf,M);var qh;qh=new Xf;function rh(a){I.call(this);var b=this;this.componentId="";this.h=[];this.Ra="";this.pageId=null;this.fb=this.ma=-1;this.G=this.experimentIds=null;this.A=this.o=0;this.U=null;this.Z=this.ha=0;this.Mb=1;this.timeoutMillis=0;this.xa=!1;this.logSource=a.logSource;this.zb=a.zb||function(){};
this.j=new hh(a.logSource,a.Oa);this.network=a.network||null;this.ob=a.ob||null;this.bufferSize=1E3;this.P=a.Df||null;this.sessionIndex=a.sessionIndex||null;this.Sb=a.Sb||!1;this.logger=null;this.withCredentials=!a.vd;this.Oa=a.Oa||!1;this.Y=!this.Oa&&!!window&&!!window.navigator&&window.navigator.sendBeacon!==void 0;this.Qa=typeof URLSearchParams!=="undefined"&&!!(new URL(sh())).searchParams&&!!(new URL(sh())).searchParams.set;var c=dh(new ch);ih(this.j,c);this.u=new oh(1E4);a=th(this,a.rd);this.i=
new wg(this.u.getValue(),a);this.Fa=new wg(6E5,a);this.Sb||this.Fa.start();this.Oa||(document.addEventListener("visibilitychange",function(){if(document.visibilityState==="hidden"){uh(b);var d;(d=b.U)==null||d.flush()}}),document.addEventListener("pagehide",function(){uh(b);
var d;(d=b.U)==null||d.flush()}))}
v(rh,I);function th(a,b){return a.Qa?b?function(){b().then(function(){a.flush()})}:function(){a.flush()}:function(){}}
rh.prototype.ba=function(){uh(this);this.i.stop();this.Fa.stop();I.prototype.ba.call(this)};
function vh(a){a.P||(a.P=sh());try{return(new URL(a.P)).toString()}catch(b){return(new URL(a.P,window.location.origin)).toString()}}
function wh(a,b,c){a.U&&a.U.kb(b,c)}
rh.prototype.log=function(a){wh(this,2,1);if(this.Qa){a=a.clone();var b=this.Mb++;a=Ef(a,21,$e(b));this.componentId&&Tf(a,26,this.componentId);b=a;var c=Cf(b,1);var d=d===void 0?!1:d;var e=typeof c;d=c==null?c:e==="bigint"?String(Je(64,c)):Qe(c)?e==="string"?Ve(c):d?We(c):Ze(c):void 0;d==null&&(d=Date.now(),d=Number.isFinite(d)?d.toString():"0",Ef(b,1,$e(d)));d=Cf(b,15);d!=null&&(typeof d==="bigint"?ze(d)?d=Number(d):(d=Je(64,d),d=ze(d)?Number(d):String(d)):d=Qe(d)?typeof d==="number"?Ze(d):Ve(d):
void 0);d==null&&Ef(b,15,$e((new Date).getTimezoneOffset()*60));this.experimentIds&&(d=this.experimentIds.clone(),Of(b,vg,16,d));wh(this,1,1);b=this.h.length-this.bufferSize+1;b>0&&(this.h.splice(0,b),this.o+=b,wh(this,3,b));this.h.push(a);this.Sb||this.i.enabled||this.i.start()}};
rh.prototype.flush=function(a,b){var c=this;if(this.h.length===0)a&&a();else if(this.xa&&this.Y)this.j.i=3,yh(this);else{var d=Date.now();if(this.fb>d&&this.ma<d)b&&b("throttled");else{this.network&&(typeof this.network.vc==="function"?kh(this.j,this.network.vc()):this.j.i=0);var e=this.h.length,f=mh(this.j,this.h,this.o,this.A,this.ob,this.ha,this.Z),g=this.zb();if(g&&this.Ra===g)b&&b("stale-auth-token");else{this.h=[];this.i.enabled&&this.i.stop();this.o=0;d=f.serialize();var h;this.G&&this.G.isSupported(d.length)&&
(h=this.G.compress(d));var k=zh(this,d,g),l=function(r){c.u.reset();c.i.setInterval(c.u.getValue());if(r){var t=null;try{var w=JSON.stringify(JSON.parse(r.replace(")]}'\n","")));t=ph(w)}catch(G){}if(t){r=Number(Qf(t,1,te("-1")));r>0&&(c.ma=Date.now(),c.fb=c.ma+r);r=Xa(Td);var x;Pd&&r&&((x=t.F[r])==null?void 0:x[175237375])!=null&&Od(Ud,3);a:{var z=z===void 0?!1:z;if(Xa(Zd)&&Xa(Td)&&void 0===Zd){x=t.F;r=x[Td];if(!r)break a;if(r=r.ci)try{r(x,175237375,kf);break a}catch(G){$c(G)}}z&&(z=t.F,(x=Xa(Td))&&
x in z&&(z=z[x])&&delete z[175237375])}z=qh.ctor?qh.h(t,qh.ctor,175237375,qh.i):qh.h(t,175237375,null,qh.i);if(z=z===null?void 0:z)z=Mc(z,1,-1),z!==-1&&(c.u=new oh(z<1?1:z),c.i.setInterval(c.u.getValue()))}}a&&a();c.A=0},m=function(r,t){var w=Kc(f,fh,3);
var x=Number(Qf(f,14)),z=c.u;z.h=Math.min(3E5,z.h*2);z.i=Math.min(3E5,z.h+Math.round(.1*(Math.random()-.5)*2*z.h));c.i.setInterval(c.u.getValue());r===401&&g&&(c.Ra=g);x&&(c.o+=x);t===void 0&&(t=c.isRetryable(r));t&&(c.h=w.concat(c.h),c.Sb||c.i.enabled||c.i.start());wh(c,7,1);b&&b("net-send-failed",r);++c.A},n=function(){c.network&&c.network.send(k,l,m)};
h?h.then(function(r){wh(c,5,e);k.Hc["Content-Encoding"]="gzip";k.Hc["Content-Type"]="application/binary";k.body=r;k.ge=2;n()},function(){wh(c,6,e);
n()}):n()}}}};
function zh(a,b,c){c=c===void 0?null:c;var d=d===void 0?a.withCredentials:d;var e={},f=new URL(vh(a));c&&(e.Authorization=c);a.sessionIndex&&(e["X-Goog-AuthUser"]=a.sessionIndex,f.searchParams.set("authuser",a.sessionIndex));a.pageId&&(Object.defineProperty(e,"X-Goog-PageId",{value:a.pageId}),f.searchParams.set("pageId",a.pageId));return{url:f.toString(),body:b,ge:1,Hc:e,requestType:"POST",withCredentials:d,timeoutMillis:a.timeoutMillis}}
function uh(a){a.j.isFinal=!0;a.flush();a.j.isFinal=!1}
function yh(a){Ah(a,function(b,c){b=new URL(b);b.searchParams.set("format","json");var d=!1;try{d=window.navigator.sendBeacon(b.toString(),c.serialize())}catch(e){}d||(a.Y=!1);return d})}
function Ah(a,b){if(a.h.length!==0){var c=new URL(vh(a));c.searchParams.delete("format");var d=a.zb();d&&c.searchParams.set("auth",d);c.searchParams.set("authuser",a.sessionIndex||"0");for(d=0;d<10&&a.h.length;++d){var e=a.h.slice(0,32),f=mh(a.j,e,a.o,a.A,a.ob,a.ha,a.Z);if(!b(c.toString(),f)){++a.A;break}a.o=0;a.A=0;a.ha=0;a.Z=0;a.h=a.h.slice(e.length)}a.i.enabled&&a.i.stop()}}
rh.prototype.isRetryable=function(a){return 500<=a&&a<600||a===401||a===0};
function sh(){return"https://play.google.com/log?format=json&hasfast=true"}
;function Bh(){this.Zd=typeof AbortController!=="undefined"}
Bh.prototype.send=function(a,b,c){var d=this,e,f,g,h,k,l,m,n,r,t;return B(function(w){switch(w.h){case 1:return f=(e=d.Zd?new AbortController:void 0)?setTimeout(function(){e.abort()},a.timeoutMillis):void 0,wa(w,2,3),g=Object.assign({},{method:a.requestType,
headers:Object.assign({},a.Hc)},a.body&&{body:a.body},a.withCredentials&&{credentials:"include"},{signal:a.timeoutMillis&&e?e.signal:null}),w.yield(fetch(a.url,g),5);case 5:h=w.i;if(h.status!==200){(k=c)==null||k(h.status);w.B(3);break}if((l=b)==null){w.B(7);break}return w.yield(h.text(),8);case 8:l(w.i);case 7:case 3:w.P=[w.j];w.H=0;w.o=0;clearTimeout(f);za(w);break;case 2:m=ya(w);switch((n=m)==null?void 0:n.name){case "AbortError":(r=c)==null||r(408);break;default:(t=c)==null||t(400)}w.B(3)}})};
Bh.prototype.vc=function(){return 4};function Ch(a,b){b=b===void 0?"0":b;I.call(this);this.logSource=a;this.sessionIndex=b;this.Va="https://play.google.com/log?format=json&hasfast=true";this.i=null;this.o=!1;this.network=null;this.componentId="";this.h=this.ob=null;this.j=!1;this.pageId=null;this.bufferSize=void 0}
v(Ch,I);function Dh(a,b){a.i=b;return a}
function Eh(a,b){a.network=b;return a}
function Fh(a,b){a.h=b}
function Gh(a){a.j=!0;return a}
Ch.prototype.vd=function(){this.u=!0;return this};
function Hh(a){a.network||(a.network=new Bh);var b=new rh({logSource:a.logSource,zb:a.zb?a.zb:tg,sessionIndex:a.sessionIndex,Df:a.Va,Oa:a.o,Sb:!1,vd:a.u,rd:a.rd,network:a.network});Ec(a,b);if(a.i){var c=a.i,d=jh(b.j);Tf(d,7,c)}b.G=new ug;a.componentId&&(b.componentId=a.componentId);a.ob&&(b.ob=a.ob);a.pageId&&(b.pageId=a.pageId);a.h&&((d=a.h)?(b.experimentIds||(b.experimentIds=new vg),c=b.experimentIds,d=d.serialize(),Tf(c,4,d)):b.experimentIds&&Ef(b.experimentIds,4));a.j&&(b.xa=b.Y);lh(b.j);a.bufferSize&&
(b.bufferSize=a.bufferSize);a.network.cc&&a.network.cc(a.logSource);a.network.sf&&a.network.sf(b);return b}
;function Ih(a,b,c,d,e,f,g){a=a===void 0?-1:a;b=b===void 0?"":b;c=c===void 0?"":c;d=d===void 0?!1:d;e=e===void 0?"":e;I.call(this);this.logSource=a;this.componentId=b;f?b=f:(a=new Ch(a,"0"),a.componentId=b,Ec(this,a),c!==""&&(a.Va=c),d&&(a.o=!0),e&&Dh(a,e),g&&Eh(a,g),b=Hh(a));this.h=b}
v(Ih,I);
Ih.prototype.flush=function(a){var b=a||[];if(b.length){a=new ig;for(var c=[],d=0;d<b.length;d++){var e=b[d],f=new hg;f=Tf(f,1,e.i);var g=Jh(e);f=Hf(f,g,cf);g=[];var h=[];for(var k=y(e.h.keys()),l=k.next();!l.done;l=k.next())h.push(l.value.split(","));for(k=0;k<h.length;k++){l=h[k];var m=e.o;for(var n=e.Qc(l)||[],r=[],t=0;t<n.length;t++){var w=n[t],x=w&&w.h;w=new eg;switch(m){case 3:x=Number(x);Number.isFinite(x)&&Jf(w,1,fg,$e(x));break;case 2:x=Number(x);if(x!=null&&typeof x!=="number")throw Error("Value of float/double field must be a number, found "+typeof x+
": "+x);Jf(w,2,fg,x)}r.push(w)}m=r;for(n=0;n<m.length;n++){r=m[n];t=new gg;r=Of(t,eg,2,r);t=l;w=[];x=Kh(e);for(var z=0;z<x.length;z++){var G=x[z],H=t[z],S=new cg;switch(G){case 3:Jf(S,1,dg,df(String(H)));break;case 2:G=Number(H);Number.isFinite(G)&&Jf(S,2,dg,Se(G));break;case 1:Jf(S,3,dg,Oe(H==="true"))}w.push(S)}Pf(r,cg,1,w);g.push(r)}}Pf(f,gg,4,g);c.push(f);e.clear()}Pf(a,hg,1,c);b=this.h;if(a instanceof fh)b.log(a);else try{var Z=new fh,mb=a.serialize();var Sb=Tf(Z,8,mb);b.log(Sb)}catch(pa){wh(b,
4,1)}this.h.flush()}};function Lh(a){this.h=a}
;function Mh(a,b,c){this.i=a;this.o=b;this.fields=c||[];this.h=new Map}
function Kh(a){return a.fields.map(function(b){return b.fieldType})}
function Jh(a){return a.fields.map(function(b){return b.fieldName})}
p=Mh.prototype;p.ae=function(a){var b=C.apply(1,arguments),c=this.Qc(b);c?c.push(new Lh(a)):this.Nd(a,b)};
p.Nd=function(a){var b=this.qd(C.apply(1,arguments));this.h.set(b,[new Lh(a)])};
p.Qc=function(){var a=this.qd(C.apply(0,arguments));return this.h.has(a)?this.h.get(a):void 0};
p.ze=function(){var a=this.Qc(C.apply(0,arguments));return a&&a.length?a[0]:void 0};
p.clear=function(){this.h.clear()};
p.qd=function(){var a=C.apply(0,arguments);return a?a.join(","):"key"};function Nh(a,b){Mh.call(this,a,3,b)}
v(Nh,Mh);Nh.prototype.j=function(a){var b=C.apply(1,arguments),c=0,d=this.ze(b);d&&(c=d.h);this.Nd(c+a,b)};function Oh(a,b){Mh.call(this,a,2,b)}
v(Oh,Mh);Oh.prototype.record=function(a){this.ae(a,C.apply(1,arguments))};function Ph(a,b){this.type=a;this.h=this.target=b;this.defaultPrevented=this.j=!1}
Ph.prototype.stopPropagation=function(){this.j=!0};
Ph.prototype.preventDefault=function(){this.defaultPrevented=!0};function Qh(a,b){Ph.call(this,a?a.type:"");this.relatedTarget=this.h=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.i=null;a&&this.init(a,b)}
Za(Qh,Ph);
Qh.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.h=b;b=a.relatedTarget;b||(c=="mouseover"?b=a.fromElement:c=="mouseout"&&(b=a.toElement));this.relatedTarget=b;d?(this.clientX=d.clientX!==void 0?d.clientX:d.pageX,this.clientY=d.clientY!==void 0?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==
void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||(c=="keypress"?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType=a.pointerType;this.state=a.state;this.i=a;a.defaultPrevented&&Qh.Aa.preventDefault.call(this)};
Qh.prototype.stopPropagation=function(){Qh.Aa.stopPropagation.call(this);this.i.stopPropagation?this.i.stopPropagation():this.i.cancelBubble=!0};
Qh.prototype.preventDefault=function(){Qh.Aa.preventDefault.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Rh="closure_listenable_"+(Math.random()*1E6|0);var Sh=0;function Th(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.xc=e;this.key=++Sh;this.ac=this.lc=!1}
function Uh(a){a.ac=!0;a.listener=null;a.proxy=null;a.src=null;a.xc=null}
;function Vh(a){this.src=a;this.listeners={};this.h=0}
Vh.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.h++);var g=Wh(a,b,d,e);g>-1?(b=a[g],c||(b.lc=!1)):(b=new Th(b,this.src,f,!!d,e),b.lc=c,a.push(b));return b};
Vh.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=Wh(e,b,c,d);return b>-1?(Uh(e[b]),Array.prototype.splice.call(e,b,1),e.length==0&&(delete this.listeners[a],this.h--),!0):!1};
function Xh(a,b){var c=b.type;c in a.listeners&&$b(a.listeners[c],b)&&(Uh(b),a.listeners[c].length==0&&(delete a.listeners[c],a.h--))}
function Wh(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.ac&&f.listener==b&&f.capture==!!c&&f.xc==d)return e}return-1}
;var Yh="closure_lm_"+(Math.random()*1E6|0),Zh={},$h=0;function ai(a,b,c,d,e){if(d&&d.once)bi(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)ai(a,b[f],c,d,e);else c=ci(c),a&&a[Rh]?a.listen(b,c,Na(d)?!!d.capture:!!d,e):di(a,b,c,!1,d,e)}
function di(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=Na(e)?!!e.capture:!!e,h=ei(a);h||(a[Yh]=h=new Vh(a));c=h.add(b,c,d,g,f);if(!c.proxy){d=fi();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)nh||(e=g),e===void 0&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(gi(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");$h++}}
function fi(){function a(c){return b.call(a.src,a.listener,c)}
var b=hi;return a}
function bi(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)bi(a,b[f],c,d,e);else c=ci(c),a&&a[Rh]?ii(a,b,c,Na(d)?!!d.capture:!!d,e):di(a,b,c,!0,d,e)}
function ji(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)ji(a,b[f],c,d,e);else(d=Na(d)?!!d.capture:!!d,c=ci(c),a&&a[Rh])?a.i.remove(String(b),c,d,e):a&&(a=ei(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=Wh(b,c,d,e)),(c=a>-1?b[a]:null)&&ki(c))}
function ki(a){if(typeof a!=="number"&&a&&!a.ac){var b=a.src;if(b&&b[Rh])Xh(b.i,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(gi(c),d):b.addListener&&b.removeListener&&b.removeListener(d);$h--;(c=ei(b))?(Xh(c,a),c.h==0&&(c.src=null,b[Yh]=null)):Uh(a)}}}
function gi(a){return a in Zh?Zh[a]:Zh[a]="on"+a}
function hi(a,b){if(a.ac)a=!0;else{b=new Qh(b,this);var c=a.listener,d=a.xc||a.src;a.lc&&ki(a);a=c.call(d,b)}return a}
function ei(a){a=a[Yh];return a instanceof Vh?a:null}
var li="__closure_events_fn_"+(Math.random()*1E9>>>0);function ci(a){if(typeof a==="function")return a;a[li]||(a[li]=function(b){return a.handleEvent(b)});
return a[li]}
;function mi(){I.call(this);this.i=new Vh(this);this.xa=this;this.Z=null}
Za(mi,I);mi.prototype[Rh]=!0;p=mi.prototype;p.addEventListener=function(a,b,c,d){ai(this,a,b,c,d)};
p.removeEventListener=function(a,b,c,d){ji(this,a,b,c,d)};
function ni(a,b){var c=a.Z;if(c){var d=[];for(var e=1;c;c=c.Z)d.push(c),++e}a=a.xa;c=b.type||b;typeof b==="string"?b=new Ph(b,a):b instanceof Ph?b.target=b.target||a:(e=b,b=new Ph(c,a),Mg(b,e));e=!0;var f;if(d)for(f=d.length-1;!b.j&&f>=0;f--){var g=b.h=d[f];e=oi(g,c,!0,b)&&e}b.j||(g=b.h=a,e=oi(g,c,!0,b)&&e,b.j||(e=oi(g,c,!1,b)&&e));if(d)for(f=0;!b.j&&f<d.length;f++)g=b.h=d[f],e=oi(g,c,!1,b)&&e}
p.ba=function(){mi.Aa.ba.call(this);this.removeAllListeners();this.Z=null};
p.listen=function(a,b,c,d){return this.i.add(String(a),b,!1,c,d)};
function ii(a,b,c,d,e){a.i.add(String(b),c,!0,d,e)}
p.removeAllListeners=function(a){if(this.i){var b=this.i;a=a&&a.toString();var c=0,d;for(d in b.listeners)if(!a||d==a){for(var e=b.listeners[d],f=0;f<e.length;f++)++c,Uh(e[f]);delete b.listeners[d];b.h--}b=c}else b=0;return b};
function oi(a,b,c,d){b=a.i.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.ac&&g.capture==c){var h=g.listener,k=g.xc||g.src;g.lc&&Xh(a.i,g);e=h.call(k,d)!==!1&&e}}return e&&!d.defaultPrevented}
;var pi=typeof AsyncContext!=="undefined"&&typeof AsyncContext.Snapshot==="function"?function(a){return a&&AsyncContext.Snapshot.wrap(a)}:function(a){return a};function qi(a,b){this.j=a;this.o=b;this.i=0;this.h=null}
qi.prototype.get=function(){if(this.i>0){this.i--;var a=this.h;this.h=a.next;a.next=null}else a=this.j();return a};
function ri(a,b){a.o(b);a.i<100&&(a.i++,b.next=a.h,a.h=b)}
;function si(){this.i=this.h=null}
si.prototype.add=function(a,b){var c=ti.get();c.set(a,b);this.i?this.i.next=c:this.h=c;this.i=c};
si.prototype.remove=function(){var a=null;this.h&&(a=this.h,this.h=this.h.next,this.h||(this.i=null),a.next=null);return a};
var ti=new qi(function(){return new ui},function(a){return a.reset()});
function ui(){this.next=this.scope=this.h=null}
ui.prototype.set=function(a,b){this.h=a;this.scope=b;this.next=null};
ui.prototype.reset=function(){this.next=this.scope=this.h=null};var vi,wi=!1,xi=new si;function yi(a,b){vi||zi();wi||(vi(),wi=!0);xi.add(a,b)}
function zi(){var a=Promise.resolve(void 0);vi=function(){a.then(Ai)}}
function Ai(){for(var a;a=xi.remove();){try{a.h.call(a.scope)}catch(b){$c(b)}ri(ti,a)}wi=!1}
;function Bi(){}
function Ci(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;function Di(a){this.X=0;this.bb=void 0;this.wb=this.Ta=this.parent_=null;this.wc=this.Pc=!1;if(a!=Bi)try{var b=this;a.call(void 0,function(c){Ei(b,2,c)},function(c){Ei(b,3,c)})}catch(c){Ei(this,3,c)}}
function Fi(){this.next=this.context=this.h=this.i=this.child=null;this.j=!1}
Fi.prototype.reset=function(){this.context=this.h=this.i=this.child=null;this.j=!1};
var Gi=new qi(function(){return new Fi},function(a){a.reset()});
function Hi(a,b,c){var d=Gi.get();d.i=a;d.h=b;d.context=c;return d}
function Ii(a){return new Di(function(b,c){c(a)})}
Di.prototype.then=function(a,b,c){return Ji(this,pi(typeof a==="function"?a:null),pi(typeof b==="function"?b:null),c)};
Di.prototype.$goog_Thenable=!0;function Ki(a,b,c,d){Li(a,Hi(b||Bi,c||null,d))}
p=Di.prototype;p.finally=function(a){var b=this;a=pi(a);return new Promise(function(c,d){Ki(b,function(e){a();c(e)},function(e){a();
d(e)})})};
p.Jc=function(a,b){return Ji(this,null,pi(a),b)};
p.catch=Di.prototype.Jc;p.cancel=function(a){if(this.X==0){var b=new Mi(a);yi(function(){Ni(this,b)},this)}};
function Ni(a,b){if(a.X==0)if(a.parent_){var c=a.parent_;if(c.Ta){for(var d=0,e=null,f=null,g=c.Ta;g&&(g.j||(d++,g.child==a&&(e=g),!(e&&d>1)));g=g.next)e||(f=g);e&&(c.X==0&&d==1?Ni(c,b):(f?(d=f,d.next==c.wb&&(c.wb=d),d.next=d.next.next):Oi(c),Pi(c,e,3,b)))}a.parent_=null}else Ei(a,3,b)}
function Li(a,b){a.Ta||a.X!=2&&a.X!=3||Qi(a);a.wb?a.wb.next=b:a.Ta=b;a.wb=b}
function Ji(a,b,c,d){var e=Hi(null,null,null);e.child=new Di(function(f,g){e.i=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.h=c?function(h){try{var k=c.call(d,h);k===void 0&&h instanceof Mi?g(h):f(k)}catch(l){g(l)}}:g});
e.child.parent_=a;Li(a,e);return e.child}
p.Bf=function(a){this.X=0;Ei(this,2,a)};
p.Cf=function(a){this.X=0;Ei(this,3,a)};
function Ei(a,b,c){if(a.X==0){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.X=1;a:{var d=c,e=a.Bf,f=a.Cf;if(d instanceof Di){Ki(d,e,f,a);var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(l){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(Na(d))try{var k=d.then;if(typeof k==="function"){Ri(d,k,e,f,a);g=!0;break a}}catch(l){f.call(a,l);g=!0;break a}g=!1}}}g||(a.bb=c,a.X=b,a.parent_=null,Qi(a),b!=3||c instanceof Mi||Si(a,c))}}
function Ri(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function Qi(a){a.Pc||(a.Pc=!0,yi(a.te,a))}
function Oi(a){var b=null;a.Ta&&(b=a.Ta,a.Ta=b.next,b.next=null);a.Ta||(a.wb=null);return b}
p.te=function(){for(var a;a=Oi(this);)Pi(this,a,this.X,this.bb);this.Pc=!1};
function Pi(a,b,c,d){if(c==3&&b.h&&!b.j)for(;a&&a.wc;a=a.parent_)a.wc=!1;if(b.child)b.child.parent_=null,Ti(b,c,d);else try{b.j?b.i.call(b.context):Ti(b,c,d)}catch(e){Ui.call(null,e)}ri(Gi,b)}
function Ti(a,b,c){b==2?a.i.call(a.context,c):a.h&&a.h.call(a.context,c)}
function Si(a,b){a.wc=!0;yi(function(){a.wc&&Ui.call(null,b)})}
var Ui=$c;function Mi(a){ib.call(this,a)}
Za(Mi,ib);Mi.prototype.name="cancel";function Vi(a,b){mi.call(this);this.j=a||1;this.h=b||D;this.o=Ua(this.yf,this);this.u=Wa()}
Za(Vi,mi);p=Vi.prototype;p.enabled=!1;p.Ea=null;p.setInterval=function(a){this.j=a;this.Ea&&this.enabled?(this.stop(),this.start()):this.Ea&&this.stop()};
p.yf=function(){if(this.enabled){var a=Wa()-this.u;a>0&&a<this.j*.8?this.Ea=this.h.setTimeout(this.o,this.j-a):(this.Ea&&(this.h.clearTimeout(this.Ea),this.Ea=null),ni(this,"tick"),this.enabled&&(this.stop(),this.start()))}};
p.start=function(){this.enabled=!0;this.Ea||(this.Ea=this.h.setTimeout(this.o,this.j),this.u=Wa())};
p.stop=function(){this.enabled=!1;this.Ea&&(this.h.clearTimeout(this.Ea),this.Ea=null)};
p.ba=function(){Vi.Aa.ba.call(this);this.stop();delete this.h};function Wi(a){I.call(this);this.G=a;this.j=0;this.o=100;this.u=!1;this.i=new Map;this.A=new Set;this.flushInterval=3E4;this.h=new Vi(this.flushInterval);this.h.listen("tick",this.ec,!1,this);Ec(this,this.h)}
v(Wi,I);p=Wi.prototype;p.sendIsolatedPayload=function(a){this.u=a;this.o=1};
function Xi(a){a.h.enabled||a.h.start();a.j++;a.j>=a.o&&a.ec()}
p.ec=function(){var a=this.i.values();a=[].concat(A(a)).filter(function(b){return b.h.size});
a.length&&this.G.flush(a,this.u);Yi(a);this.j=0;this.h.enabled&&this.h.stop()};
p.Ob=function(a){var b=C.apply(1,arguments);this.i.has(a)||this.i.set(a,new Nh(a,b))};
p.Mc=function(a){var b=C.apply(1,arguments);this.i.has(a)||this.i.set(a,new Oh(a,b))};
function Zi(a,b){return a.A.has(b)?void 0:a.i.get(b)}
p.Lb=function(a){this.Yd(a,1,C.apply(1,arguments))};
p.Yd=function(a,b){var c=C.apply(2,arguments),d=Zi(this,a);d&&d instanceof Nh&&(d.j(b,c),Xi(this))};
p.record=function(a,b){var c=C.apply(2,arguments),d=Zi(this,a);d&&d instanceof Oh&&(d.record(b,c),Xi(this))};
function Yi(a){for(var b=0;b<a.length;b++)a[b].clear()}
;function $i(){}
$i.prototype.serialize=function(a){var b=[];aj(this,a,b);return b.join("")};
function aj(a,b,c){if(b==null)c.push("null");else{if(typeof b=="object"){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),aj(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],typeof f!="function"&&(c.push(e),bj(d,c),c.push(":"),aj(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":bj(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var cj={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\v":"\\u000b"},dj=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function bj(a,b){b.push('"',a.replace(dj,function(c){var d=cj[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).slice(1),cj[c]=d);return d}),'"')}
;function ej(){mi.call(this);this.headers=new Map;this.h=!1;this.K=null;this.o=this.Y="";this.j=this.U=this.A=this.P=!1;this.G=0;this.u=null;this.ma="";this.ha=!1}
Za(ej,mi);var fj=/^https?$/i,gj=["POST","PUT"],hj=[];function ij(a,b,c,d,e,f,g){var h=new ej;hj.push(h);b&&h.listen("complete",b);ii(h,"ready",h.je);f&&(h.G=Math.max(0,f));g&&(h.ha=g);h.send(a,c,d,e)}
p=ej.prototype;p.je=function(){this.dispose();$b(hj,this)};
p.send=function(a,b,c,d){if(this.K)throw Error("[goog.net.XhrIo] Object is active with another request="+this.Y+"; newUri="+a);b=b?b.toUpperCase():"GET";this.Y=a;this.o="";this.P=!1;this.h=!0;this.K=new XMLHttpRequest;this.K.onreadystatechange=pi(Ua(this.Gd,this));try{this.getStatus(),this.U=!0,this.K.open(b,String(a),!0),this.U=!1}catch(g){this.getStatus();jj(this,g);return}a=c||"";c=new Map(this.headers);if(d)if(Object.getPrototypeOf(d)===Object.prototype)for(var e in d)c.set(e,d[e]);else if(typeof d.keys===
"function"&&typeof d.get==="function"){e=y(d.keys());for(var f=e.next();!f.done;f=e.next())f=f.value,c.set(f,d.get(f))}else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(c.keys()).find(function(g){return"content-type"==g.toLowerCase()});
e=D.FormData&&a instanceof D.FormData;!(Ub(gj,b)>=0)||d||e||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");b=y(c);for(d=b.next();!d.done;d=b.next())c=y(d.value),d=c.next().value,c=c.next().value,this.K.setRequestHeader(d,c);this.ma&&(this.K.responseType=this.ma);"withCredentials"in this.K&&this.K.withCredentials!==this.ha&&(this.K.withCredentials=this.ha);try{this.u&&(clearTimeout(this.u),this.u=null),this.G>0&&(this.getStatus(),this.u=setTimeout(this.Af.bind(this),this.G)),
this.getStatus(),this.A=!0,this.K.send(a),this.A=!1}catch(g){this.getStatus(),jj(this,g)}};
p.Af=function(){typeof Ia!="undefined"&&this.K&&(this.o="Timed out after "+this.G+"ms, aborting",this.getStatus(),ni(this,"timeout"),this.abort(8))};
function jj(a,b){a.h=!1;a.K&&(a.j=!0,a.K.abort(),a.j=!1);a.o=b;kj(a);lj(a)}
function kj(a){a.P||(a.P=!0,ni(a,"complete"),ni(a,"error"))}
p.abort=function(){this.K&&this.h&&(this.getStatus(),this.h=!1,this.j=!0,this.K.abort(),this.j=!1,ni(this,"complete"),ni(this,"abort"),lj(this))};
p.ba=function(){this.K&&(this.h&&(this.h=!1,this.j=!0,this.K.abort(),this.j=!1),lj(this,!0));ej.Aa.ba.call(this)};
p.Gd=function(){this.ea||(this.U||this.A||this.j?mj(this):this.Re())};
p.Re=function(){mj(this)};
function mj(a){if(a.h&&typeof Ia!="undefined")if(a.A&&(a.K?a.K.readyState:0)==4)setTimeout(a.Gd.bind(a),0);else if(ni(a,"readystatechange"),a.isComplete()){a.getStatus();a.h=!1;try{if(nj(a))ni(a,"complete"),ni(a,"success");else{try{var b=(a.K?a.K.readyState:0)>2?a.K.statusText:""}catch(c){b=""}a.o=b+" ["+a.getStatus()+"]";kj(a)}}finally{lj(a)}}}
function lj(a,b){if(a.K){a.u&&(clearTimeout(a.u),a.u=null);var c=a.K;a.K=null;b||ni(a,"ready");try{c.onreadystatechange=null}catch(d){}}}
p.isActive=function(){return!!this.K};
p.isComplete=function(){return(this.K?this.K.readyState:0)==4};
function nj(a){var b=a.getStatus();a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break a;default:c=!1}if(!c){if(b=b===0)a=String(a.Y).match(nc)[1]||null,!a&&D.self&&D.self.location&&(a=D.self.location.protocol.slice(0,-1)),b=!fj.test(a?a.toLowerCase():"");c=b}return c}
p.getStatus=function(){try{return(this.K?this.K.readyState:0)>2?this.K.status:-1}catch(a){return-1}};
p.getLastError=function(){return typeof this.o==="string"?this.o:String(this.o)};function oj(){}
oj.prototype.send=function(a,b,c){b=b===void 0?function(){}:b;
c=c===void 0?function(){}:c;
ij(a.url,function(d){d=d.target;if(nj(d)){try{var e=d.K?d.K.responseText:""}catch(f){e=""}b(e)}else c(d.getStatus())},a.requestType,a.body,a.Hc,a.timeoutMillis,a.withCredentials)};
oj.prototype.vc=function(){return 1};function pj(a,b){this.logger=a;this.event=b;this.startTime=qj()}
pj.prototype.done=function(){this.logger.Xb(this.event,qj()-this.startTime)};
function rj(){Pc.apply(this,arguments)}
v(rj,Pc);function sj(a,b){var c=qj();b=b();a.Xb("n",qj()-c);return b}
function tj(){rj.apply(this,arguments)}
v(tj,rj);p=tj.prototype;p.Uc=function(){};
p.Eb=function(){};
p.Xb=function(){};
p.Ha=function(){};
p.Gc=function(){};
p.Sd=function(){};
function uj(a){return{wf:new Sc(a),errorCount:new Wc(a),eventCount:new Uc(a),se:new Vc(a),mi:new Tc(a),oi:new Xc(a),Bh:new Yc(a),ni:new Zc(a)}}
function vj(a,b,c,d){a=Gh(Eh(Dh(new Ch(1828,"0"),a),new oj));b.length&&Fh(a,bg(new ag,b));d!==void 0&&(a.Va=d);var e=new Ih(1828,"","",!1,"",Hh(a));Ec(e,a);var f=new Wi({flush:function(g){try{e.flush(g)}catch(h){c(h)}}});
f.addOnDisposeCallback(function(){setTimeout(function(){try{f.ec()}finally{e.dispose()}})});
f.o=1E5;f.flushInterval=3E4;f.h.setInterval(3E4);return f}
function wj(a,b){I.call(this);var c=this;this.callback=a;this.i=b;this.h=-b;this.addOnDisposeCallback(function(){return void clearTimeout(c.timer)})}
v(wj,I);function xj(a){if(a.timer===void 0){var b=Math.max(0,a.h+a.i-qj());a.timer=setTimeout(function(){try{a.callback()}finally{a.h=qj(),a.timer=void 0}},b)}}
function yj(a,b){rj.call(this);this.metrics=a;this.Da=b}
v(yj,rj);yj.prototype.Uc=function(a){this.metrics.wf.record(a,this.Da)};
yj.prototype.Eb=function(a){this.metrics.eventCount.kb(a,this.Da)};
yj.prototype.Xb=function(a,b){this.metrics.se.record(b,a,this.Da)};
yj.prototype.Ha=function(a){this.metrics.errorCount.kb(a,this.Da)};
function zj(a,b){b=b===void 0?[]:b;var c={Da:a.Da||"_",uc:a.uc||[],Ac:a.Ac|0,Va:a.Va,Bc:a.Bc||function(){},
Kb:a.Kb||function(f,g){return vj(f,g,c.Bc,c.Va)}},d=c.Kb("49",c.uc.concat(b));
yj.call(this,uj(d),c.Da);var e=this;this.options=c;this.service=d;this.i=!a.Kb;this.h=new wj(function(){return void e.service.ec()},c.Ac);
this.addOnDisposeCallback(function(){e.h.dispose();e.i&&e.service.dispose()});
(this.j=b.slice()).sort(ec)}
v(zj,yj);zj.prototype.Sd=function(a){var b=this;a=a.slice();a.sort(ec);cc(a,this.j)||(this.h.dispose(),this.i&&this.service.dispose(),this.service=this.options.Kb("49",this.options.uc.concat(a)),this.h=new wj(function(){return void b.service.ec()},this.options.Ac),this.metrics=uj(this.service),this.j=a)};
zj.prototype.Gc=function(){xj(this.h)};
function qj(){var a,b,c;return(c=(a=globalThis.performance)==null?void 0:(b=a.now)==null?void 0:b.call(a))!=null?c:Date.now()}
;function Aj(a){this.F=L(a)}
v(Aj,M);function Bj(a){this.F=L(a)}
v(Bj,M);function Cj(a){this.F=L(a,0,"bfkj")}
v(Cj,M);var Dj=function(a){return le(function(b){return b instanceof a&&!he(b)})}(Cj);
Cj.Pe="bfkj";function Lc(a){this.F=L(a)}
v(Lc,M);function Ej(a){this.F=L(a)}
v(Ej,M);var Fj=$f(Ej);function Gj(){var a=this;this.promise=new Promise(function(b,c){a.resolve=b;a.reject=c})}
;function Hj(a,b,c){if(a.disable)return new tj;b=b?Jc(b):[];if(c)return c.Sd(b),c.share();a={Da:a.Da,uc:a.Ih,Ac:a.Uh,Va:a.Va,Bc:a.Bc,Kb:a.Kb};c=b;c=c===void 0?[]:c;return new zj(a,c)}
function Ij(a){function b(w,x,z,G){Promise.resolve().then(function(){k.done();h.Gc();h.dispose();g.resolve({ce:w,uf:x,Ve:z,Dh:G})})}
function c(w,x,z,G){if(!d.logger.ea){var H="k";x?H="h":z&&(H="u");H!=="k"?G!==0&&(d.logger.Eb(H),d.logger.Xb(H,w)):d.i<=0?(d.logger.Eb(H),d.logger.Xb(H,w),d.i=Math.floor(Math.random()*200)):d.i--}}
I.call(this);var d=this;this.i=Math.floor(Math.random()*200);this.h=new Ej;if("challenge"in a&&Dj(a.challenge)){var e=Rf(a.challenge,4,void 0,ke);var f=Rf(a.challenge,5,void 0,ke);Rf(a.challenge,7,void 0,ke)&&(this.h=Fj(Rf(a.challenge,7,void 0,ke)))}else e=a.program,f=a.globalName;this.addOnDisposeCallback(function(){var w,x,z;return B(function(G){if(G.h==1)return G.yield(d.j,2);w=G.i;x=w.uf;(z=x)==null||z();G.h=0})});
this.logger=Hj(a.Ed||{},this.h,a.Eh);Ec(this,this.logger);var g=new Gj;this.j=g.promise;this.logger.Eb("t");var h=this.logger.share(),k=new pj(h,"t");if(!D[f])throw this.logger.Ha(25),Error("EGOU");if(!D[f].a)throw this.logger.Ha(26),Error("ELIU");try{var l=D[f].a;f=[];for(var m=[],n=Jc(this.h),r=0;r<n.length;r++)f.push(n[r]),m.push(1);var t=Nc(this.h);for(n=0;n<t.length;n++)f.push(t[n]),m.push(2);this.u=y(l(e,b,!0,a.li,c,[f,m],Rf(this.h,5))).next().value;this.gd=g.promise.then(function(){})}catch(w){throw this.logger.Ha(28),
w;
}}
v(Ij,I);Ij.prototype.snapshot=function(a){if(this.ea)throw Error("Already disposed");this.logger.Eb("n");var b=this.logger.share();return this.j.then(function(c){var d=c.ce;return new Promise(function(e){var f=new pj(b,"n");d(function(g){f.done();b.Uc(g.length);b.Gc();b.dispose();e(g)},[a.xb,
a.jd,a.Ff,a.kd])})})};
Ij.prototype.ld=function(a){var b=this;if(this.ea)throw Error("Already disposed");this.logger.Eb("n");var c=sj(this.logger,function(){return b.u([a.xb,a.jd,a.Ff,a.kd])});
this.logger.Uc(c.length);this.logger.Gc();return c};
Ij.prototype.o=function(a){this.j.then(function(b){var c;(c=b.Ve)==null||c(a)})};function Jj(a){if(!a)return null;a=ef(Cf(a,4,void 0,Bf));return a===null||a===void 0?null:qb(a)}
;function Kj(){this.promises={};this.h=null}
function Lj(){Kj.instance||(Kj.instance=new Kj);return Kj.instance}
function Mj(a,b){return Nj(a,Nf(b,Aj,1,ke),Nf(b,Bj,2,ke),Rf(b,3,void 0,ke))}
function Nj(a,b,c,d){if(!b&&!c)return Promise.resolve();if(!d)return Oj(b,c);var e;(e=a.promises)[d]||(e[d]=new Promise(function(f,g){Oj(b,c).then(function(){a.h=d;f()},function(h){delete a.promises[d];
g(h)})}));
return a.promises[d]}
function Oj(a,b){return b?Pj(b):a?Qj(a):Promise.resolve()}
function Pj(a){return new Promise(function(b,c){var d=Qg("SCRIPT"),e=Jj(a);Nb(d,e);d.onload=function(){Rg(d);b()};
d.onerror=function(){Rg(d);c(Error("EWLS"))};
(document.getElementsByTagName("HEAD")[0]||document.documentElement).appendChild(d)})}
function Qj(a){return new Promise(function(b){var c=Qg("SCRIPT");if(a){var d=ef(Cf(a,6,void 0,Bf));d=d===null||d===void 0?null:Kb(d)}else d=null;c.textContent=Lb(d);Mb(c);(document.getElementsByTagName("HEAD")[0]||document.documentElement).appendChild(c);Rg(c);b()})}
;var Rj=window;function Sj(a){var b=Tj;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a(b[c],c,b)}
function Uj(){var a=[];Sj(function(b){a.push(b)});
return a}
var Tj={Gf:"allow-forms",Hf:"allow-modals",If:"allow-orientation-lock",Jf:"allow-pointer-lock",Kf:"allow-popups",Lf:"allow-popups-to-escape-sandbox",Mf:"allow-presentation",Nf:"allow-same-origin",Of:"allow-scripts",Pf:"allow-top-navigation",Qf:"allow-top-navigation-by-user-activation"},Vj=Ci(function(){return Uj()});
function Wj(){var a=Xj(),b={};Vb(Vj(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
function Xj(){var a=a===void 0?document:a;return a.createElement("iframe")}
;function Yj(a){typeof a=="number"&&(a=Math.round(a)+"px");return a}
;var Zj=(new Date).getTime();function ak(a){mi.call(this);var b=this;this.A=this.j=0;this.Ca=a!=null?a:{pa:function(e,f){return setTimeout(e,f)},
qa:function(e){clearTimeout(e)}};
var c,d;this.h=(d=(c=window.navigator)==null?void 0:c.onLine)!=null?d:!0;this.o=function(){return B(function(e){return e.yield(bk(b),0)})};
window.addEventListener("offline",this.o);window.addEventListener("online",this.o);this.A||ck(this)}
v(ak,mi);function dk(){var a=ek;ak.instance||(ak.instance=new ak(a));return ak.instance}
ak.prototype.dispose=function(){window.removeEventListener("offline",this.o);window.removeEventListener("online",this.o);this.Ca.qa(this.A);delete ak.instance};
ak.prototype.ta=function(){return this.h};
function ck(a){a.A=a.Ca.pa(function(){var b;return B(function(c){if(c.h==1)return a.h?((b=window.navigator)==null?0:b.onLine)?c.B(3):c.yield(bk(a),3):c.yield(bk(a),3);ck(a);c.h=0})},3E4)}
function bk(a,b){return a.u?a.u:a.u=new Promise(function(c){var d,e,f,g;return B(function(h){switch(h.h){case 1:return d=window.AbortController?new window.AbortController:void 0,f=(e=d)==null?void 0:e.signal,g=!1,wa(h,2,3),d&&(a.j=a.Ca.pa(function(){d.abort()},b||2E4)),h.yield(fetch("/generate_204",{method:"HEAD",
signal:f}),5);case 5:g=!0;case 3:h.P=[h.j];h.H=0;h.o=0;a.u=void 0;a.j&&(a.Ca.qa(a.j),a.j=0);g!==a.h&&(a.h=g,a.h?ni(a,"networkstatus-online"):ni(a,"networkstatus-offline"));c(g);za(h);break;case 2:ya(h),g=!1,h.B(3)}})})}
;function fk(){this.data=[];this.h=-1}
fk.prototype.set=function(a,b){b=b===void 0?!0:b;0<=a&&a<52&&Number.isInteger(a)&&this.data[a]!==b&&(this.data[a]=b,this.h=-1)};
fk.prototype.get=function(a){return!!this.data[a]};
function gk(a){a.h===-1&&(a.h=a.data.reduce(function(b,c,d){return b+(c?Math.pow(2,d):0)},0));
return a.h}
;function hk(){this.blockSize=-1}
;function ik(){this.blockSize=-1;this.blockSize=64;this.h=[];this.u=[];this.H=[];this.j=[];this.j[0]=128;for(var a=1;a<this.blockSize;++a)this.j[a]=0;this.o=this.i=0;this.reset()}
Za(ik,hk);ik.prototype.reset=function(){this.h[0]=1732584193;this.h[1]=4023233417;this.h[2]=2562383102;this.h[3]=271733878;this.h[4]=3285377520;this.o=this.i=0};
function jk(a,b,c){c||(c=0);var d=a.H;if(typeof b==="string")for(var e=0;e<16;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;e<16;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(b=16;b<80;b++)c=d[b-3]^d[b-8]^d[b-14]^d[b-16],d[b]=(c<<1|c>>>31)&4294967295;b=a.h[0];c=a.h[1];e=a.h[2];for(var f=a.h[3],g=a.h[4],h,k,l=0;l<80;l++)l<40?l<20?(h=f^c&(e^f),k=1518500249):(h=c^e^f,k=1859775393):l<60?(h=c&e|f&(c|e),k=2400959708):(h=c^e^f,k=3395469782),
h=(b<<5|b>>>27)+h+g+k+d[l]&4294967295,g=f,f=e,e=(c<<30|c>>>2)&4294967295,c=b,b=h;a.h[0]=a.h[0]+b&4294967295;a.h[1]=a.h[1]+c&4294967295;a.h[2]=a.h[2]+e&4294967295;a.h[3]=a.h[3]+f&4294967295;a.h[4]=a.h[4]+g&4294967295}
ik.prototype.update=function(a,b){if(a!=null){b===void 0&&(b=a.length);for(var c=b-this.blockSize,d=0,e=this.u,f=this.i;d<b;){if(f==0)for(;d<=c;)jk(this,a,d),d+=this.blockSize;if(typeof a==="string")for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.blockSize){jk(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.blockSize){jk(this,e);f=0;break}}this.i=f;this.o+=b}};
ik.prototype.digest=function(){var a=[],b=this.o*8;this.i<56?this.update(this.j,56-this.i):this.update(this.j,this.blockSize-(this.i-56));for(var c=this.blockSize-1;c>=56;c--)this.u[c]=b&255,b/=256;jk(this,this.u);for(c=b=0;c<5;c++)for(var d=24;d>=0;d-=8)a[b]=this.h[c]>>d&255,++b;return a};function kk(a){return typeof a.className=="string"?a.className:a.getAttribute&&a.getAttribute("class")||""}
function lk(a,b){typeof a.className=="string"?a.className=b:a.setAttribute&&a.setAttribute("class",b)}
function mk(a,b){a.classList?b=a.classList.contains(b):(a=a.classList?a.classList:kk(a).match(/\S+/g)||[],b=Ub(a,b)>=0);return b}
function nk(){var a=document.body;a.classList?a.classList.remove("inverted-hdpi"):mk(a,"inverted-hdpi")&&lk(a,Array.prototype.filter.call(a.classList?a.classList:kk(a).match(/\S+/g)||[],function(b){return b!="inverted-hdpi"}).join(" "))}
;function ok(){}
ok.prototype.next=function(){return pk};
var pk={done:!0,value:void 0};ok.prototype.tb=function(){return this};function qk(a){if(a instanceof rk||a instanceof sk||a instanceof tk)return a;if(typeof a.next=="function")return new rk(function(){return a});
if(typeof a[Symbol.iterator]=="function")return new rk(function(){return a[Symbol.iterator]()});
if(typeof a.tb=="function")return new rk(function(){return a.tb()});
throw Error("Not an iterator or iterable.");}
function rk(a){this.h=a}
rk.prototype.tb=function(){return new sk(this.h())};
rk.prototype[Symbol.iterator]=function(){return new tk(this.h())};
rk.prototype.i=function(){return new tk(this.h())};
function sk(a){this.h=a}
v(sk,ok);sk.prototype.next=function(){return this.h.next()};
sk.prototype[Symbol.iterator]=function(){return new tk(this.h)};
sk.prototype.i=function(){return new tk(this.h)};
function tk(a){rk.call(this,function(){return a});
this.j=a}
v(tk,rk);tk.prototype.next=function(){return this.j.next()};function N(a){I.call(this);this.u=1;this.j=[];this.o=0;this.h=[];this.i={};this.A=!!a}
Za(N,I);p=N.prototype;p.subscribe=function(a,b,c){var d=this.i[a];d||(d=this.i[a]=[]);var e=this.u;this.h[e]=a;this.h[e+1]=b;this.h[e+2]=c;this.u=e+3;d.push(e);return e};
p.unsubscribe=function(a,b,c){if(a=this.i[a]){var d=this.h;if(a=a.find(function(e){return d[e+1]==b&&d[e+2]==c}))return this.hc(a)}return!1};
p.hc=function(a){var b=this.h[a];if(b){var c=this.i[b];this.o!=0?(this.j.push(a),this.h[a+1]=function(){}):(c&&$b(c,a),delete this.h[a],delete this.h[a+1],delete this.h[a+2])}return!!b};
p.sb=function(a,b){var c=this.i[a];if(c){var d=Array(arguments.length-1),e=arguments.length,f;for(f=1;f<e;f++)d[f-1]=arguments[f];if(this.A)for(f=0;f<c.length;f++)e=c[f],uk(this.h[e+1],this.h[e+2],d);else{this.o++;try{for(f=0,e=c.length;f<e&&!this.ea;f++){var g=c[f];this.h[g+1].apply(this.h[g+2],d)}}finally{if(this.o--,this.j.length>0&&this.o==0)for(;c=this.j.pop();)this.hc(c)}}return f!=0}return!1};
function uk(a,b,c){yi(function(){a.apply(b,c)})}
p.clear=function(a){if(a){var b=this.i[a];b&&(b.forEach(this.hc,this),delete this.i[a])}else this.h.length=0,this.i={}};
p.ba=function(){N.Aa.ba.call(this);this.clear();this.j.length=0};function vk(a){this.h=a}
vk.prototype.set=function(a,b){b===void 0?this.h.remove(a):this.h.set(a,(new $i).serialize(b))};
vk.prototype.get=function(a){try{var b=this.h.get(a)}catch(c){return}if(b!==null)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
vk.prototype.remove=function(a){this.h.remove(a)};function wk(a){this.h=a}
Za(wk,vk);function xk(a){this.data=a}
function yk(a){return a===void 0||a instanceof xk?a:new xk(a)}
wk.prototype.set=function(a,b){wk.Aa.set.call(this,a,yk(b))};
wk.prototype.i=function(a){a=wk.Aa.get.call(this,a);if(a===void 0||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
wk.prototype.get=function(a){if(a=this.i(a)){if(a=a.data,a===void 0)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function zk(a){this.h=a}
Za(zk,wk);zk.prototype.set=function(a,b,c){if(b=yk(b)){if(c){if(c<Wa()){zk.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Wa()}zk.Aa.set.call(this,a,b)};
zk.prototype.i=function(a){var b=zk.Aa.i.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Wa()||c&&c>Wa())zk.prototype.remove.call(this,a);else return b}};function Ak(){}
;function Bk(){}
Za(Bk,Ak);Bk.prototype[Symbol.iterator]=function(){return qk(this.tb(!0)).i()};
Bk.prototype.clear=function(){var a=Array.from(this);a=y(a);for(var b=a.next();!b.done;b=a.next())this.remove(b.value)};function Ck(a){this.h=a;this.i=null}
Za(Ck,Bk);p=Ck.prototype;p.isAvailable=function(){if(this.i===null){var a=this.h;if(a)try{a.setItem("__sak","1");a.removeItem("__sak");var b=!0}catch(c){b=c instanceof DOMException&&(c.name==="QuotaExceededError"||c.code===22||c.code===1014||c.name==="NS_ERROR_DOM_QUOTA_REACHED")&&a&&a.length!==0}else b=!1;this.i=b}return this.i};
p.set=function(a,b){Dk(this);try{this.h.setItem(a,b)}catch(c){if(this.h.length==0)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
p.get=function(a){Dk(this);a=this.h.getItem(a);if(typeof a!=="string"&&a!==null)throw"Storage mechanism: Invalid value was encountered";return a};
p.remove=function(a){Dk(this);this.h.removeItem(a)};
p.tb=function(a){Dk(this);var b=0,c=this.h,d=new ok;d.next=function(){if(b>=c.length)return pk;var e=c.key(b++);if(a)return{value:e,done:!1};e=c.getItem(e);if(typeof e!=="string")throw"Storage mechanism: Invalid value was encountered";return{value:e,done:!1}};
return d};
p.clear=function(){Dk(this);this.h.clear()};
p.key=function(a){Dk(this);return this.h.key(a)};
function Dk(a){if(a.h==null)throw Error("Storage mechanism: Storage unavailable");a.isAvailable()||$c(Error("Storage mechanism: Storage unavailable"))}
;function Ek(){var a=null;try{a=D.localStorage||null}catch(b){}Ck.call(this,a)}
Za(Ek,Ck);function Fk(a,b){this.i=a;this.h=b+"::"}
Za(Fk,Bk);Fk.prototype.set=function(a,b){this.i.set(this.h+a,b)};
Fk.prototype.get=function(a){return this.i.get(this.h+a)};
Fk.prototype.remove=function(a){this.i.remove(this.h+a)};
Fk.prototype.tb=function(a){var b=this.i[Symbol.iterator](),c=this,d=new ok;d.next=function(){var e=b.next();if(e.done)return e;for(e=e.value;e.slice(0,c.h.length)!=c.h;){e=b.next();if(e.done)return e;e=e.value}return{value:a?e.slice(c.h.length):c.i.get(e),done:!1}};
return d};function Gk(a){if(a.Wa&&typeof a.Wa=="function")return a.Wa();if(typeof Map!=="undefined"&&a instanceof Map||typeof Set!=="undefined"&&a instanceof Set)return Array.from(a.values());if(typeof a==="string")return a.split("");if(Ma(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}return Cg(a)}
function Hk(a){if(a.Ub&&typeof a.Ub=="function")return a.Ub();if(!a.Wa||typeof a.Wa!="function"){if(typeof Map!=="undefined"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set!=="undefined"&&a instanceof Set)){if(Ma(a)||typeof a==="string"){var b=[];a=a.length;for(var c=0;c<a;c++)b.push(c);return b}b=[];c=0;for(var d in a)b[c++]=d;return b}}}
function Ik(a,b,c){if(a.forEach&&typeof a.forEach=="function")a.forEach(b,c);else if(Ma(a)||typeof a==="string")Array.prototype.forEach.call(a,b,c);else for(var d=Hk(a),e=Gk(a),f=e.length,g=0;g<f;g++)b.call(c,e[g],d&&d[g],a)}
;function Jk(a){this.i=this.A=this.j="";this.G=null;this.u=this.h="";this.o=!1;var b;a instanceof Jk?(this.o=a.o,Kk(this,a.j),this.A=a.A,this.i=a.i,Lk(this,a.G),this.h=a.h,Mk(this,a.H.clone()),this.u=a.u):a&&(b=String(a).match(nc))?(this.o=!1,Kk(this,b[1]||"",!0),this.A=Nk(b[2]||""),this.i=Nk(b[3]||"",!0),Lk(this,b[4]),this.h=Nk(b[5]||"",!0),Mk(this,b[6]||"",!0),this.u=Nk(b[7]||"")):(this.o=!1,this.H=new Ok(null,this.o))}
Jk.prototype.toString=function(){var a=[],b=this.j;b&&a.push(Pk(b,Qk,!0),":");var c=this.i;if(c||b=="file")a.push("//"),(b=this.A)&&a.push(Pk(b,Qk,!0),"@"),a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.G,c!=null&&a.push(":",String(c));if(c=this.h)this.i&&c.charAt(0)!="/"&&a.push("/"),a.push(Pk(c,c.charAt(0)=="/"?Rk:Sk,!0));(c=this.H.toString())&&a.push("?",c);(c=this.u)&&a.push("#",Pk(c,Tk));return a.join("")};
Jk.prototype.resolve=function(a){var b=this.clone(),c=!!a.j;c?Kk(b,a.j):c=!!a.A;c?b.A=a.A:c=!!a.i;c?b.i=a.i:c=a.G!=null;var d=a.h;if(c)Lk(b,a.G);else if(c=!!a.h){if(d.charAt(0)!="/")if(this.i&&!this.h)d="/"+d;else{var e=b.h.lastIndexOf("/");e!=-1&&(d=b.h.slice(0,e+1)+d)}e=d;if(e==".."||e==".")d="";else if(e.indexOf("./")!=-1||e.indexOf("/.")!=-1){d=e.lastIndexOf("/",0)==0;e=e.split("/");for(var f=[],g=0;g<e.length;){var h=e[g++];h=="."?d&&g==e.length&&f.push(""):h==".."?((f.length>1||f.length==1&&
f[0]!="")&&f.pop(),d&&g==e.length&&f.push("")):(f.push(h),d=!0)}d=f.join("/")}else d=e}c?b.h=d:c=a.H.toString()!=="";c?Mk(b,a.H.clone()):c=!!a.u;c&&(b.u=a.u);return b};
Jk.prototype.clone=function(){return new Jk(this)};
function Kk(a,b,c){a.j=c?Nk(b,!0):b;a.j&&(a.j=a.j.replace(/:$/,""))}
function Lk(a,b){if(b){b=Number(b);if(isNaN(b)||b<0)throw Error("Bad port number "+b);a.G=b}else a.G=null}
function Mk(a,b,c){b instanceof Ok?(a.H=b,Uk(a.H,a.o)):(c||(b=Pk(b,Vk)),a.H=new Ok(b,a.o))}
function Nk(a,b){return a?b?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}
function Pk(a,b,c){return typeof a==="string"?(a=encodeURI(a).replace(b,Wk),c&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}
function Wk(a){a=a.charCodeAt(0);return"%"+(a>>4&15).toString(16)+(a&15).toString(16)}
var Qk=/[#\/\?@]/g,Sk=/[#\?:]/g,Rk=/[#\?]/g,Vk=/[#\?@]/g,Tk=/#/g;function Ok(a,b){this.i=this.h=null;this.j=a||null;this.o=!!b}
function Xk(a){a.h||(a.h=new Map,a.i=0,a.j&&tc(a.j,function(b,c){a.add(lc(b),c)}))}
p=Ok.prototype;p.add=function(a,b){Xk(this);this.j=null;a=Yk(this,a);var c=this.h.get(a);c||this.h.set(a,c=[]);c.push(b);this.i=this.i+1;return this};
p.remove=function(a){Xk(this);a=Yk(this,a);return this.h.has(a)?(this.j=null,this.i=this.i-this.h.get(a).length,this.h.delete(a)):!1};
p.clear=function(){this.h=this.j=null;this.i=0};
function Zk(a,b){Xk(a);b=Yk(a,b);return a.h.has(b)}
p.forEach=function(a,b){Xk(this);this.h.forEach(function(c,d){c.forEach(function(e){a.call(b,e,d,this)},this)},this)};
p.Ub=function(){Xk(this);for(var a=Array.from(this.h.values()),b=Array.from(this.h.keys()),c=[],d=0;d<b.length;d++)for(var e=a[d],f=0;f<e.length;f++)c.push(b[d]);return c};
p.Wa=function(a){Xk(this);var b=[];if(typeof a==="string")Zk(this,a)&&(b=b.concat(this.h.get(Yk(this,a))));else{a=Array.from(this.h.values());for(var c=0;c<a.length;c++)b=b.concat(a[c])}return b};
p.set=function(a,b){Xk(this);this.j=null;a=Yk(this,a);Zk(this,a)&&(this.i=this.i-this.h.get(a).length);this.h.set(a,[b]);this.i=this.i+1;return this};
p.get=function(a,b){if(!a)return b;a=this.Wa(a);return a.length>0?String(a[0]):b};
p.toString=function(){if(this.j)return this.j;if(!this.h)return"";for(var a=[],b=Array.from(this.h.keys()),c=0;c<b.length;c++){var d=b[c],e=encodeURIComponent(String(d));d=this.Wa(d);for(var f=0;f<d.length;f++){var g=e;d[f]!==""&&(g+="="+encodeURIComponent(String(d[f])));a.push(g)}}return this.j=a.join("&")};
p.clone=function(){var a=new Ok;a.j=this.j;this.h&&(a.h=new Map(this.h),a.i=this.i);return a};
function Yk(a,b){b=String(b);a.o&&(b=b.toLowerCase());return b}
function Uk(a,b){b&&!a.o&&(Xk(a),a.j=null,a.h.forEach(function(c,d){var e=d.toLowerCase();d!=e&&(this.remove(d),this.remove(e),c.length>0&&(this.j=null,this.h.set(Yk(this,e),ac(c)),this.i=this.i+c.length))},a));
a.o=b}
p.extend=function(a){for(var b=0;b<arguments.length;b++)Ik(arguments[b],function(c,d){this.add(d,c)},this)};/*

 (The MIT License)

 Copyright (C) 2014 by Vitaly Puzrin

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.

 -----------------------------------------------------------------------------
 Ported from zlib, which is under the following license
 https://github.com/madler/zlib/blob/master/zlib.h

 zlib.h -- interface of the 'zlib' general purpose compression library
   version 1.2.8, April 28th, 2013
   Copyright (C) 1995-2013 Jean-loup Gailly and Mark Adler
   This software is provided 'as-is', without any express or implied
   warranty.  In no event will the authors be held liable for any damages
   arising from the use of this software.
   Permission is granted to anyone to use this software for any purpose,
   including commercial applications, and to alter it and redistribute it
   freely, subject to the following restrictions:
   1. The origin of this software must not be misrepresented; you must not
      claim that you wrote the original software. If you use this software
      in a product, an acknowledgment in the product documentation would be
      appreciated but is not required.
   2. Altered source versions must be plainly marked as such, and must not be
      misrepresented as being the original software.
   3. This notice may not be removed or altered from any source distribution.
   Jean-loup Gailly        Mark Adler
   jloup@gzip.org          madler@alumni.caltech.edu
   The data format used by the zlib library is described by RFCs (Request for
   Comments) 1950 to 1952 in the files http://tools.ietf.org/html/rfc1950
   (zlib format), rfc1951 (deflate format) and rfc1952 (gzip format).
*/
var O={},$k=typeof Uint8Array!=="undefined"&&typeof Uint16Array!=="undefined"&&typeof Int32Array!=="undefined";O.assign=function(a){for(var b=Array.prototype.slice.call(arguments,1);b.length;){var c=b.shift();if(c){if(typeof c!=="object")throw new TypeError(c+"must be non-object");for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}}return a};
O.hd=function(a,b){if(a.length===b)return a;if(a.subarray)return a.subarray(0,b);a.length=b;return a};
var al={ub:function(a,b,c,d,e){if(b.subarray&&a.subarray)a.set(b.subarray(c,c+d),e);else for(var f=0;f<d;f++)a[e+f]=b[c+f]},
xd:function(a){var b,c;var d=c=0;for(b=a.length;d<b;d++)c+=a[d].length;var e=new Uint8Array(c);d=c=0;for(b=a.length;d<b;d++){var f=a[d];e.set(f,c);c+=f.length}return e}},bl={ub:function(a,b,c,d,e){for(var f=0;f<d;f++)a[e+f]=b[c+f]},
xd:function(a){return[].concat.apply([],a)}};
O.tf=function(){$k?(O.rb=Uint8Array,O.Ja=Uint16Array,O.Xd=Int32Array,O.assign(O,al)):(O.rb=Array,O.Ja=Array,O.Xd=Array,O.assign(O,bl))};
O.tf();var cl=!0;try{new Uint8Array(1)}catch(a){cl=!1}
function dl(a){var b,c,d=a.length,e=0;for(b=0;b<d;b++){var f=a.charCodeAt(b);if((f&64512)===55296&&b+1<d){var g=a.charCodeAt(b+1);(g&64512)===56320&&(f=65536+(f-55296<<10)+(g-56320),b++)}e+=f<128?1:f<2048?2:f<65536?3:4}var h=new O.rb(e);for(b=c=0;c<e;b++)f=a.charCodeAt(b),(f&64512)===55296&&b+1<d&&(g=a.charCodeAt(b+1),(g&64512)===56320&&(f=65536+(f-55296<<10)+(g-56320),b++)),f<128?h[c++]=f:(f<2048?h[c++]=192|f>>>6:(f<65536?h[c++]=224|f>>>12:(h[c++]=240|f>>>18,h[c++]=128|f>>>12&63),h[c++]=128|f>>>
6&63),h[c++]=128|f&63);return h}
;var el={};el=function(a,b,c,d){var e=a&65535|0;a=a>>>16&65535|0;for(var f;c!==0;){f=c>2E3?2E3:c;c-=f;do e=e+b[d++]|0,a=a+e|0;while(--f);e%=65521;a%=65521}return e|a<<16|0};for(var fl={},gl,hl=[],il=0;il<256;il++){gl=il;for(var jl=0;jl<8;jl++)gl=gl&1?3988292384^gl>>>1:gl>>>1;hl[il]=gl}fl=function(a,b,c,d){c=d+c;for(a^=-1;d<c;d++)a=a>>>8^hl[(a^b[d])&255];return a^-1};var kl={};kl={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"};function ll(a){for(var b=a.length;--b>=0;)a[b]=0}
var ml=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],nl=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],ol=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],pl=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],ql=Array(576);ll(ql);var rl=Array(60);ll(rl);var sl=Array(512);ll(sl);var tl=Array(256);ll(tl);var ul=Array(29);ll(ul);var vl=Array(30);ll(vl);function wl(a,b,c,d,e){this.Pd=a;this.xe=b;this.we=c;this.pe=d;this.Oe=e;this.Ad=a&&a.length}
var xl,yl,zl;function Al(a,b){this.wd=a;this.Gb=0;this.cb=b}
function Bl(a,b){a.aa[a.pending++]=b&255;a.aa[a.pending++]=b>>>8&255}
function Cl(a,b,c){a.ia>16-c?(a.oa|=b<<a.ia&65535,Bl(a,a.oa),a.oa=b>>16-a.ia,a.ia+=c-16):(a.oa|=b<<a.ia&65535,a.ia+=c)}
function Dl(a,b,c){Cl(a,c[b*2],c[b*2+1])}
function El(a,b){var c=0;do c|=a&1,a>>>=1,c<<=1;while(--b>0);return c>>>1}
function Fl(a,b,c){var d=Array(16),e=0,f;for(f=1;f<=15;f++)d[f]=e=e+c[f-1]<<1;for(c=0;c<=b;c++)e=a[c*2+1],e!==0&&(a[c*2]=El(d[e]++,e))}
function Gl(a){var b;for(b=0;b<286;b++)a.ra[b*2]=0;for(b=0;b<30;b++)a.hb[b*2]=0;for(b=0;b<19;b++)a.ja[b*2]=0;a.ra[512]=1;a.Pa=a.Jb=0;a.ya=a.matches=0}
function Hl(a){a.ia>8?Bl(a,a.oa):a.ia>0&&(a.aa[a.pending++]=a.oa);a.oa=0;a.ia=0}
function Il(a,b,c){Hl(a);Bl(a,c);Bl(a,~c);O.ub(a.aa,a.window,b,c,a.pending);a.pending+=c}
function Jl(a,b,c,d){var e=b*2,f=c*2;return a[e]<a[f]||a[e]===a[f]&&d[b]<=d[c]}
function Kl(a,b,c){for(var d=a.da[c],e=c<<1;e<=a.Na;){e<a.Na&&Jl(b,a.da[e+1],a.da[e],a.depth)&&e++;if(Jl(b,d,a.da[e],a.depth))break;a.da[c]=a.da[e];c=e;e<<=1}a.da[c]=d}
function Ll(a,b,c){var d=0;if(a.ya!==0){do{var e=a.aa[a.Rb+d*2]<<8|a.aa[a.Rb+d*2+1];var f=a.aa[a.Tc+d];d++;if(e===0)Dl(a,f,b);else{var g=tl[f];Dl(a,g+256+1,b);var h=ml[g];h!==0&&(f-=ul[g],Cl(a,f,h));e--;g=e<256?sl[e]:sl[256+(e>>>7)];Dl(a,g,c);h=nl[g];h!==0&&(e-=vl[g],Cl(a,e,h))}}while(d<a.ya)}Dl(a,256,b)}
function Ml(a,b){var c=b.wd,d=b.cb.Pd,e=b.cb.Ad,f=b.cb.pe,g,h=-1;a.Na=0;a.Bb=573;for(g=0;g<f;g++)c[g*2]!==0?(a.da[++a.Na]=h=g,a.depth[g]=0):c[g*2+1]=0;for(;a.Na<2;){var k=a.da[++a.Na]=h<2?++h:0;c[k*2]=1;a.depth[k]=0;a.Pa--;e&&(a.Jb-=d[k*2+1])}b.Gb=h;for(g=a.Na>>1;g>=1;g--)Kl(a,c,g);k=f;do g=a.da[1],a.da[1]=a.da[a.Na--],Kl(a,c,1),d=a.da[1],a.da[--a.Bb]=g,a.da[--a.Bb]=d,c[k*2]=c[g*2]+c[d*2],a.depth[k]=(a.depth[g]>=a.depth[d]?a.depth[g]:a.depth[d])+1,c[g*2+1]=c[d*2+1]=k,a.da[1]=k++,Kl(a,c,1);while(a.Na>=
2);a.da[--a.Bb]=a.da[1];g=b.wd;k=b.Gb;d=b.cb.Pd;e=b.cb.Ad;f=b.cb.xe;var l=b.cb.we,m=b.cb.Oe,n,r=0;for(n=0;n<=15;n++)a.Ka[n]=0;g[a.da[a.Bb]*2+1]=0;for(b=a.Bb+1;b<573;b++){var t=a.da[b];n=g[g[t*2+1]*2+1]+1;n>m&&(n=m,r++);g[t*2+1]=n;if(!(t>k)){a.Ka[n]++;var w=0;t>=l&&(w=f[t-l]);var x=g[t*2];a.Pa+=x*(n+w);e&&(a.Jb+=x*(d[t*2+1]+w))}}if(r!==0){do{for(n=m-1;a.Ka[n]===0;)n--;a.Ka[n]--;a.Ka[n+1]+=2;a.Ka[m]--;r-=2}while(r>0);for(n=m;n!==0;n--)for(t=a.Ka[n];t!==0;)d=a.da[--b],d>k||(g[d*2+1]!==n&&(a.Pa+=(n-g[d*
2+1])*g[d*2],g[d*2+1]=n),t--)}Fl(c,h,a.Ka)}
function Nl(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;f===0&&(h=138,k=3);b[(c+1)*2+1]=65535;for(d=0;d<=c;d++){var l=f;f=b[(d+1)*2+1];++g<h&&l===f||(g<k?a.ja[l*2]+=g:l!==0?(l!==e&&a.ja[l*2]++,a.ja[32]++):g<=10?a.ja[34]++:a.ja[36]++,g=0,e=l,f===0?(h=138,k=3):l===f?(h=6,k=3):(h=7,k=4))}}
function Ol(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;f===0&&(h=138,k=3);for(d=0;d<=c;d++){var l=f;f=b[(d+1)*2+1];if(!(++g<h&&l===f)){if(g<k){do Dl(a,l,a.ja);while(--g!==0)}else l!==0?(l!==e&&(Dl(a,l,a.ja),g--),Dl(a,16,a.ja),Cl(a,g-3,2)):g<=10?(Dl(a,17,a.ja),Cl(a,g-3,3)):(Dl(a,18,a.ja),Cl(a,g-11,7));g=0;e=l;f===0?(h=138,k=3):l===f?(h=6,k=3):(h=7,k=4)}}}
function Pl(a){var b=4093624447,c;for(c=0;c<=31;c++,b>>>=1)if(b&1&&a.ra[c*2]!==0)return 0;if(a.ra[18]!==0||a.ra[20]!==0||a.ra[26]!==0)return 1;for(c=32;c<256;c++)if(a.ra[c*2]!==0)return 1;return 0}
var Ql=!1;function Rl(a,b,c){a.aa[a.Rb+a.ya*2]=b>>>8&255;a.aa[a.Rb+a.ya*2+1]=b&255;a.aa[a.Tc+a.ya]=c&255;a.ya++;b===0?a.ra[c*2]++:(a.matches++,b--,a.ra[(tl[c]+256+1)*2]++,a.hb[(b<256?sl[b]:sl[256+(b>>>7)])*2]++);return a.ya===a.Wb-1}
;function Sl(a,b){a.msg=kl[b];return b}
function Tl(a){for(var b=a.length;--b>=0;)a[b]=0}
function Ul(a){var b=a.state,c=b.pending;c>a.S&&(c=a.S);c!==0&&(O.ub(a.output,b.aa,b.Zb,c,a.Hb),a.Hb+=c,b.Zb+=c,a.md+=c,a.S-=c,b.pending-=c,b.pending===0&&(b.Zb=0))}
function Vl(a,b){var c=a.va>=0?a.va:-1,d=a.v-a.va,e=0;if(a.level>0){a.M.Oc===2&&(a.M.Oc=Pl(a));Ml(a,a.zc);Ml(a,a.qc);Nl(a,a.ra,a.zc.Gb);Nl(a,a.hb,a.qc.Gb);Ml(a,a.td);for(e=18;e>=3&&a.ja[pl[e]*2+1]===0;e--);a.Pa+=3*(e+1)+5+5+4;var f=a.Pa+3+7>>>3;var g=a.Jb+3+7>>>3;g<=f&&(f=g)}else f=g=d+5;if(d+4<=f&&c!==-1)Cl(a,b?1:0,3),Il(a,c,d);else if(a.strategy===4||g===f)Cl(a,2+(b?1:0),3),Ll(a,ql,rl);else{Cl(a,4+(b?1:0),3);c=a.zc.Gb+1;d=a.qc.Gb+1;e+=1;Cl(a,c-257,5);Cl(a,d-1,5);Cl(a,e-4,4);for(f=0;f<e;f++)Cl(a,
a.ja[pl[f]*2+1],3);Ol(a,a.ra,c-1);Ol(a,a.hb,d-1);Ll(a,a.ra,a.hb)}Gl(a);b&&Hl(a);a.va=a.v;Ul(a.M)}
function P(a,b){a.aa[a.pending++]=b}
function Wl(a,b){a.aa[a.pending++]=b>>>8&255;a.aa[a.pending++]=b&255}
function Xl(a,b){var c=a.Dd,d=a.v,e=a.wa,f=a.Fd,g=a.v>a.la-262?a.v-(a.la-262):0,h=a.window,k=a.eb,l=a.Ia,m=a.v+258,n=h[d+e-1],r=h[d+e];a.wa>=a.zd&&(c>>=2);f>a.D&&(f=a.D);do{var t=b;if(h[t+e]===r&&h[t+e-1]===n&&h[t]===h[d]&&h[++t]===h[d+1]){d+=2;for(t++;h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&d<m;);t=258-(m-d);d=m-258;if(t>e){a.Fb=b;e=t;if(t>=f)break;n=h[d+e-1];r=h[d+e]}}}while((b=l[b&k])>g&&--c!==0);return e<=
a.D?e:a.D}
function Yl(a){var b=a.la,c;do{var d=a.Vd-a.D-a.v;if(a.v>=b+(b-262)){O.ub(a.window,a.window,b,b,0);a.Fb-=b;a.v-=b;a.va-=b;var e=c=a.yc;do{var f=a.head[--e];a.head[e]=f>=b?f-b:0}while(--c);e=c=b;do f=a.Ia[--e],a.Ia[e]=f>=b?f-b:0;while(--c);d+=b}if(a.M.na===0)break;e=a.M;c=a.window;f=a.v+a.D;var g=e.na;g>d&&(g=d);g===0?c=0:(e.na-=g,O.ub(c,e.input,e.nb,g,f),e.state.wrap===1?e.J=el(e.J,c,g,f):e.state.wrap===2&&(e.J=fl(e.J,c,g,f)),e.nb+=g,e.qb+=g,c=g);a.D+=c;if(a.D+a.sa>=3)for(d=a.v-a.sa,a.R=a.window[d],
a.R=(a.R<<a.Ma^a.window[d+1])&a.La;a.sa&&!(a.R=(a.R<<a.Ma^a.window[d+3-1])&a.La,a.Ia[d&a.eb]=a.head[a.R],a.head[a.R]=d,d++,a.sa--,a.D+a.sa<3););}while(a.D<262&&a.M.na!==0)}
function Zl(a,b){for(var c;;){if(a.D<262){Yl(a);if(a.D<262&&b===0)return 1;if(a.D===0)break}c=0;a.D>=3&&(a.R=(a.R<<a.Ma^a.window[a.v+3-1])&a.La,c=a.Ia[a.v&a.eb]=a.head[a.R],a.head[a.R]=a.v);c!==0&&a.v-c<=a.la-262&&(a.T=Xl(a,c));if(a.T>=3)if(c=Rl(a,a.v-a.Fb,a.T-3),a.D-=a.T,a.T<=a.Vc&&a.D>=3){a.T--;do a.v++,a.R=(a.R<<a.Ma^a.window[a.v+3-1])&a.La,a.Ia[a.v&a.eb]=a.head[a.R],a.head[a.R]=a.v;while(--a.T!==0);a.v++}else a.v+=a.T,a.T=0,a.R=a.window[a.v],a.R=(a.R<<a.Ma^a.window[a.v+1])&a.La;else c=Rl(a,0,
a.window[a.v]),a.D--,a.v++;if(c&&(Vl(a,!1),a.M.S===0))return 1}a.sa=a.v<2?a.v:2;return b===4?(Vl(a,!0),a.M.S===0?3:4):a.ya&&(Vl(a,!1),a.M.S===0)?1:2}
function $l(a,b){for(var c,d;;){if(a.D<262){Yl(a);if(a.D<262&&b===0)return 1;if(a.D===0)break}c=0;a.D>=3&&(a.R=(a.R<<a.Ma^a.window[a.v+3-1])&a.La,c=a.Ia[a.v&a.eb]=a.head[a.R],a.head[a.R]=a.v);a.wa=a.T;a.Id=a.Fb;a.T=2;c!==0&&a.wa<a.Vc&&a.v-c<=a.la-262&&(a.T=Xl(a,c),a.T<=5&&(a.strategy===1||a.T===3&&a.v-a.Fb>4096)&&(a.T=2));if(a.wa>=3&&a.T<=a.wa){d=a.v+a.D-3;c=Rl(a,a.v-1-a.Id,a.wa-3);a.D-=a.wa-1;a.wa-=2;do++a.v<=d&&(a.R=(a.R<<a.Ma^a.window[a.v+3-1])&a.La,a.Ia[a.v&a.eb]=a.head[a.R],a.head[a.R]=a.v);
while(--a.wa!==0);a.lb=0;a.T=2;a.v++;if(c&&(Vl(a,!1),a.M.S===0))return 1}else if(a.lb){if((c=Rl(a,0,a.window[a.v-1]))&&Vl(a,!1),a.v++,a.D--,a.M.S===0)return 1}else a.lb=1,a.v++,a.D--}a.lb&&(Rl(a,0,a.window[a.v-1]),a.lb=0);a.sa=a.v<2?a.v:2;return b===4?(Vl(a,!0),a.M.S===0?3:4):a.ya&&(Vl(a,!1),a.M.S===0)?1:2}
function am(a,b){for(var c,d,e,f=a.window;;){if(a.D<=258){Yl(a);if(a.D<=258&&b===0)return 1;if(a.D===0)break}a.T=0;if(a.D>=3&&a.v>0&&(d=a.v-1,c=f[d],c===f[++d]&&c===f[++d]&&c===f[++d])){for(e=a.v+258;c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&d<e;);a.T=258-(e-d);a.T>a.D&&(a.T=a.D)}a.T>=3?(c=Rl(a,1,a.T-3),a.D-=a.T,a.v+=a.T,a.T=0):(c=Rl(a,0,a.window[a.v]),a.D--,a.v++);if(c&&(Vl(a,!1),a.M.S===0))return 1}a.sa=0;return b===4?(Vl(a,!0),a.M.S===0?3:4):
a.ya&&(Vl(a,!1),a.M.S===0)?1:2}
function bm(a,b){for(var c;;){if(a.D===0&&(Yl(a),a.D===0)){if(b===0)return 1;break}a.T=0;c=Rl(a,0,a.window[a.v]);a.D--;a.v++;if(c&&(Vl(a,!1),a.M.S===0))return 1}a.sa=0;return b===4?(Vl(a,!0),a.M.S===0?3:4):a.ya&&(Vl(a,!1),a.M.S===0)?1:2}
function cm(a,b,c,d,e){this.Be=a;this.Ne=b;this.Qe=c;this.Me=d;this.ye=e}
var dm;dm=[new cm(0,0,0,0,function(a,b){var c=65535;for(c>a.za-5&&(c=a.za-5);;){if(a.D<=1){Yl(a);if(a.D===0&&b===0)return 1;if(a.D===0)break}a.v+=a.D;a.D=0;var d=a.va+c;if(a.v===0||a.v>=d)if(a.D=a.v-d,a.v=d,Vl(a,!1),a.M.S===0)return 1;if(a.v-a.va>=a.la-262&&(Vl(a,!1),a.M.S===0))return 1}a.sa=0;if(b===4)return Vl(a,!0),a.M.S===0?3:4;a.v>a.va&&Vl(a,!1);return 1}),
new cm(4,4,8,4,Zl),new cm(4,5,16,8,Zl),new cm(4,6,32,32,Zl),new cm(4,4,16,16,$l),new cm(8,16,32,32,$l),new cm(8,16,128,128,$l),new cm(8,32,128,256,$l),new cm(32,128,258,1024,$l),new cm(32,258,258,4096,$l)];
function em(){this.M=null;this.status=0;this.aa=null;this.wrap=this.pending=this.Zb=this.za=0;this.I=null;this.Ba=0;this.method=8;this.Db=-1;this.eb=this.pd=this.la=0;this.window=null;this.Vd=0;this.head=this.Ia=null;this.Fd=this.zd=this.strategy=this.level=this.Vc=this.Dd=this.wa=this.D=this.Fb=this.v=this.lb=this.Id=this.T=this.va=this.Ma=this.La=this.Rc=this.yc=this.R=0;this.ra=new O.Ja(1146);this.hb=new O.Ja(122);this.ja=new O.Ja(78);Tl(this.ra);Tl(this.hb);Tl(this.ja);this.td=this.qc=this.zc=
null;this.Ka=new O.Ja(16);this.da=new O.Ja(573);Tl(this.da);this.Bb=this.Na=0;this.depth=new O.Ja(573);Tl(this.depth);this.ia=this.oa=this.sa=this.matches=this.Jb=this.Pa=this.Rb=this.ya=this.Wb=this.Tc=0}
function fm(a,b){if(!a||!a.state||b>5||b<0)return a?Sl(a,-2):-2;var c=a.state;if(!a.output||!a.input&&a.na!==0||c.status===666&&b!==4)return Sl(a,a.S===0?-5:-2);c.M=a;var d=c.Db;c.Db=b;if(c.status===42)if(c.wrap===2)a.J=0,P(c,31),P(c,139),P(c,8),c.I?(P(c,(c.I.text?1:0)+(c.I.Xa?2:0)+(c.I.extra?4:0)+(c.I.name?8:0)+(c.I.comment?16:0)),P(c,c.I.time&255),P(c,c.I.time>>8&255),P(c,c.I.time>>16&255),P(c,c.I.time>>24&255),P(c,c.level===9?2:c.strategy>=2||c.level<2?4:0),P(c,c.I.os&255),c.I.extra&&c.I.extra.length&&
(P(c,c.I.extra.length&255),P(c,c.I.extra.length>>8&255)),c.I.Xa&&(a.J=fl(a.J,c.aa,c.pending,0)),c.Ba=0,c.status=69):(P(c,0),P(c,0),P(c,0),P(c,0),P(c,0),P(c,c.level===9?2:c.strategy>=2||c.level<2?4:0),P(c,3),c.status=113);else{var e=8+(c.pd-8<<4)<<8;e|=(c.strategy>=2||c.level<2?0:c.level<6?1:c.level===6?2:3)<<6;c.v!==0&&(e|=32);c.status=113;Wl(c,e+(31-e%31));c.v!==0&&(Wl(c,a.J>>>16),Wl(c,a.J&65535));a.J=1}if(c.status===69)if(c.I.extra){for(e=c.pending;c.Ba<(c.I.extra.length&65535)&&(c.pending!==c.za||
(c.I.Xa&&c.pending>e&&(a.J=fl(a.J,c.aa,c.pending-e,e)),Ul(a),e=c.pending,c.pending!==c.za));)P(c,c.I.extra[c.Ba]&255),c.Ba++;c.I.Xa&&c.pending>e&&(a.J=fl(a.J,c.aa,c.pending-e,e));c.Ba===c.I.extra.length&&(c.Ba=0,c.status=73)}else c.status=73;if(c.status===73)if(c.I.name){e=c.pending;do{if(c.pending===c.za&&(c.I.Xa&&c.pending>e&&(a.J=fl(a.J,c.aa,c.pending-e,e)),Ul(a),e=c.pending,c.pending===c.za)){var f=1;break}f=c.Ba<c.I.name.length?c.I.name.charCodeAt(c.Ba++)&255:0;P(c,f)}while(f!==0);c.I.Xa&&c.pending>
e&&(a.J=fl(a.J,c.aa,c.pending-e,e));f===0&&(c.Ba=0,c.status=91)}else c.status=91;if(c.status===91)if(c.I.comment){e=c.pending;do{if(c.pending===c.za&&(c.I.Xa&&c.pending>e&&(a.J=fl(a.J,c.aa,c.pending-e,e)),Ul(a),e=c.pending,c.pending===c.za)){f=1;break}f=c.Ba<c.I.comment.length?c.I.comment.charCodeAt(c.Ba++)&255:0;P(c,f)}while(f!==0);c.I.Xa&&c.pending>e&&(a.J=fl(a.J,c.aa,c.pending-e,e));f===0&&(c.status=103)}else c.status=103;c.status===103&&(c.I.Xa?(c.pending+2>c.za&&Ul(a),c.pending+2<=c.za&&(P(c,
a.J&255),P(c,a.J>>8&255),a.J=0,c.status=113)):c.status=113);if(c.pending!==0){if(Ul(a),a.S===0)return c.Db=-1,0}else if(a.na===0&&(b<<1)-(b>4?9:0)<=(d<<1)-(d>4?9:0)&&b!==4)return Sl(a,-5);if(c.status===666&&a.na!==0)return Sl(a,-5);if(a.na!==0||c.D!==0||b!==0&&c.status!==666){d=c.strategy===2?bm(c,b):c.strategy===3?am(c,b):dm[c.level].ye(c,b);if(d===3||d===4)c.status=666;if(d===1||d===3)return a.S===0&&(c.Db=-1),0;if(d===2&&(b===1?(Cl(c,2,3),Dl(c,256,ql),c.ia===16?(Bl(c,c.oa),c.oa=0,c.ia=0):c.ia>=
8&&(c.aa[c.pending++]=c.oa&255,c.oa>>=8,c.ia-=8)):b!==5&&(Cl(c,0,3),Il(c,0,0),b===3&&(Tl(c.head),c.D===0&&(c.v=0,c.va=0,c.sa=0))),Ul(a),a.S===0))return c.Db=-1,0}if(b!==4)return 0;if(c.wrap<=0)return 1;c.wrap===2?(P(c,a.J&255),P(c,a.J>>8&255),P(c,a.J>>16&255),P(c,a.J>>24&255),P(c,a.qb&255),P(c,a.qb>>8&255),P(c,a.qb>>16&255),P(c,a.qb>>24&255)):(Wl(c,a.J>>>16),Wl(c,a.J&65535));Ul(a);c.wrap>0&&(c.wrap=-c.wrap);return c.pending!==0?0:1}
;var gm={};gm=function(){this.input=null;this.qb=this.na=this.nb=0;this.output=null;this.md=this.S=this.Hb=0;this.msg="";this.state=null;this.Oc=2;this.J=0};var hm=Object.prototype.toString;
function im(a){if(!(this instanceof im))return new im(a);a=this.options=O.assign({level:-1,method:8,chunkSize:16384,windowBits:15,memLevel:8,strategy:0,to:""},a||{});a.raw&&a.windowBits>0?a.windowBits=-a.windowBits:a.gzip&&a.windowBits>0&&a.windowBits<16&&(a.windowBits+=16);this.err=0;this.msg="";this.ended=!1;this.chunks=[];this.M=new gm;this.M.S=0;var b=this.M;var c=a.level,d=a.method,e=a.windowBits,f=a.memLevel,g=a.strategy;if(b){var h=1;c===-1&&(c=6);e<0?(h=0,e=-e):e>15&&(h=2,e-=16);if(f<1||f>
9||d!==8||e<8||e>15||c<0||c>9||g<0||g>4)b=Sl(b,-2);else{e===8&&(e=9);var k=new em;b.state=k;k.M=b;k.wrap=h;k.I=null;k.pd=e;k.la=1<<k.pd;k.eb=k.la-1;k.Rc=f+7;k.yc=1<<k.Rc;k.La=k.yc-1;k.Ma=~~((k.Rc+3-1)/3);k.window=new O.rb(k.la*2);k.head=new O.Ja(k.yc);k.Ia=new O.Ja(k.la);k.Wb=1<<f+6;k.za=k.Wb*4;k.aa=new O.rb(k.za);k.Rb=1*k.Wb;k.Tc=3*k.Wb;k.level=c;k.strategy=g;k.method=d;if(b&&b.state){b.qb=b.md=0;b.Oc=2;c=b.state;c.pending=0;c.Zb=0;c.wrap<0&&(c.wrap=-c.wrap);c.status=c.wrap?42:113;b.J=c.wrap===2?
0:1;c.Db=0;if(!Ql){d=Array(16);for(f=g=0;f<28;f++)for(ul[f]=g,e=0;e<1<<ml[f];e++)tl[g++]=f;tl[g-1]=f;for(f=g=0;f<16;f++)for(vl[f]=g,e=0;e<1<<nl[f];e++)sl[g++]=f;for(g>>=7;f<30;f++)for(vl[f]=g<<7,e=0;e<1<<nl[f]-7;e++)sl[256+g++]=f;for(e=0;e<=15;e++)d[e]=0;for(e=0;e<=143;)ql[e*2+1]=8,e++,d[8]++;for(;e<=255;)ql[e*2+1]=9,e++,d[9]++;for(;e<=279;)ql[e*2+1]=7,e++,d[7]++;for(;e<=287;)ql[e*2+1]=8,e++,d[8]++;Fl(ql,287,d);for(e=0;e<30;e++)rl[e*2+1]=5,rl[e*2]=El(e,5);xl=new wl(ql,ml,257,286,15);yl=new wl(rl,
nl,0,30,15);zl=new wl([],ol,0,19,7);Ql=!0}c.zc=new Al(c.ra,xl);c.qc=new Al(c.hb,yl);c.td=new Al(c.ja,zl);c.oa=0;c.ia=0;Gl(c);c=0}else c=Sl(b,-2);c===0&&(b=b.state,b.Vd=2*b.la,Tl(b.head),b.Vc=dm[b.level].Ne,b.zd=dm[b.level].Be,b.Fd=dm[b.level].Qe,b.Dd=dm[b.level].Me,b.v=0,b.va=0,b.D=0,b.sa=0,b.T=b.wa=2,b.lb=0,b.R=0);b=c}}else b=-2;if(b!==0)throw Error(kl[b]);a.header&&(b=this.M)&&b.state&&b.state.wrap===2&&(b.state.I=a.header);if(a.dictionary){var l;typeof a.dictionary==="string"?l=dl(a.dictionary):
hm.call(a.dictionary)==="[object ArrayBuffer]"?l=new Uint8Array(a.dictionary):l=a.dictionary;a=this.M;f=l;g=f.length;if(a&&a.state)if(l=a.state,b=l.wrap,b===2||b===1&&l.status!==42||l.D)b=-2;else{b===1&&(a.J=el(a.J,f,g,0));l.wrap=0;g>=l.la&&(b===0&&(Tl(l.head),l.v=0,l.va=0,l.sa=0),c=new O.rb(l.la),O.ub(c,f,g-l.la,l.la,0),f=c,g=l.la);c=a.na;d=a.nb;e=a.input;a.na=g;a.nb=0;a.input=f;for(Yl(l);l.D>=3;){f=l.v;g=l.D-2;do l.R=(l.R<<l.Ma^l.window[f+3-1])&l.La,l.Ia[f&l.eb]=l.head[l.R],l.head[l.R]=f,f++;while(--g);
l.v=f;l.D=2;Yl(l)}l.v+=l.D;l.va=l.v;l.sa=l.D;l.D=0;l.T=l.wa=2;l.lb=0;a.nb=d;a.input=e;a.na=c;l.wrap=b;b=0}else b=-2;if(b!==0)throw Error(kl[b]);this.yh=!0}}
im.prototype.push=function(a,b){var c=this.M,d=this.options.chunkSize;if(this.ended)return!1;var e=b===~~b?b:b===!0?4:0;typeof a==="string"?c.input=dl(a):hm.call(a)==="[object ArrayBuffer]"?c.input=new Uint8Array(a):c.input=a;c.nb=0;c.na=c.input.length;do{c.S===0&&(c.output=new O.rb(d),c.Hb=0,c.S=d);a=fm(c,e);if(a!==1&&a!==0)return jm(this,a),this.ended=!0,!1;if(c.S===0||c.na===0&&(e===4||e===2))if(this.options.to==="string"){var f=O.hd(c.output,c.Hb);b=f;f=f.length;if(f<65537&&(b.subarray&&cl||!b.subarray))b=
String.fromCharCode.apply(null,O.hd(b,f));else{for(var g="",h=0;h<f;h++)g+=String.fromCharCode(b[h]);b=g}this.chunks.push(b)}else b=O.hd(c.output,c.Hb),this.chunks.push(b)}while((c.na>0||c.S===0)&&a!==1);if(e===4)return(c=this.M)&&c.state?(d=c.state.status,d!==42&&d!==69&&d!==73&&d!==91&&d!==103&&d!==113&&d!==666?a=Sl(c,-2):(c.state=null,a=d===113?Sl(c,-3):0)):a=-2,jm(this,a),this.ended=!0,a===0;e===2&&(jm(this,0),c.S=0);return!0};
function jm(a,b){b===0&&(a.result=a.options.to==="string"?a.chunks.join(""):O.xd(a.chunks));a.chunks=[];a.err=b;a.msg=a.M.msg}
function km(a,b){b=b||{};b.gzip=!0;b=new im(b);b.push(a,!0);if(b.err)throw b.msg||kl[b.err];return b.result}
;function lm(a){return a?(a=a.privateDoNotAccessOrElseSafeScriptWrappedValue)?Kb(a):null:null}
function mm(a){return a?(a=a.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue)?qb(a):null:null}
;function nm(a){return qb(a===null?"null":a===void 0?"undefined":a)}
;function om(a){this.name=a}
;var pm=new om("rawColdConfigGroup");var qm=new om("rawHotConfigGroup");function rm(a){this.F=L(a)}
v(rm,M);function sm(a){this.F=L(a)}
v(sm,M);sm.prototype.setTrackingParams=function(a){if(a!=null)if(typeof a==="string")a=a?new Jd(a,Id):Ld||(Ld=new Jd(null,Id));else if(a.constructor!==Jd)if(Dd&&a!=null&&a instanceof Uint8Array)a instanceof Uint8Array||Array.isArray(a),a=a.length?new Jd(new Uint8Array(a),Id):Ld||(Ld=new Jd(null,Id));else throw Error();return Ef(this,1,a)};var tm=new om("continuationCommand");var um=new om("webCommandMetadata");var wm=new om("signalServiceEndpoint");var xm={Vf:"EMBEDDED_PLAYER_MODE_UNKNOWN",Sf:"EMBEDDED_PLAYER_MODE_DEFAULT",Uf:"EMBEDDED_PLAYER_MODE_PFP",Tf:"EMBEDDED_PLAYER_MODE_PFL"};var ym=new om("feedbackEndpoint");var qe={ah:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_UNKNOWN",sg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_FOR_TESTING",Kg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_RESUME_TO_HOME_TTL",Sg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_START_TO_SHORTS_ANALYSIS_SLICE",hg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_DEVICE_LAYER_SLICE",Zg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_UNIFIED_LAYER_SLICE",dh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_VISITOR_LAYER_SLICE",Rg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_SHOW_SHEET_COMMAND_HANDLER_BLOCK",
fh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WIZ_NEXT_MIGRATED_COMPONENT",eh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WIZ_NEXT_CHANNEL_NAME_TOOLTIP",Ng:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ROTATION_LOCK_SUPPORTED",Ug:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_THEATER_MODE_ENABLED",jh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_SHOW_PIN_SUGGESTION",ih:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_SHOW_LONG_PRESS_EDU_TOAST",hh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_SHOW_AMBIENT",Vg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_TIME_WATCHED_PANEL",
Pg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_SEARCH_FROM_SEARCH_BAR_OVERLAY",kh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_SHOW_VOICE_SEARCH_EDU_TOAST",Tg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_SUGGESTED_LANGUAGE_SELECTED",mh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_TRIGGER_SHORTS_PIP",zg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IN_ZP_VOICE_CRASHY_SET",Gg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_FAST_SWIPE_SUPPRESSED",Fg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_FAST_SWIPE_ALLOWED",Ig:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_PULL_TO_REFRESH_ATTEMPT",
gh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_BLOCK_KABUKI",Jg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_TALL_SCREEN",Hg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_NORMAL_SCREEN",Zf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ACCESSIBILITY_MODE_ENABLED",Yf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ACCESSIBILITY_MODE_DISABLED",ag:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_AUTOPLAY_ENABLED",cg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_CAST_MATCH_OCCURRED",lg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EMC3DS_ELIGIBLE",og:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ENDSCREEN_TRIGGERED",
Eg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_POSTPLAY_TRIGGERED",Dg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_POSTPLAY_LACT_THRESHOLD_EXCEEDED",tg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_STATE_MATCHED_ON_REMOTE_CONNECTION",vg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_STATE_SWITCHABLE_ON_REMOTE_CONNECTION",ug:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_STATE_MISATTRIBUTED_ON_REMOTE_CONNECTION",yg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_TV_IS_SIGNED_IN_ON_REMOTE_CONNECTION",Xg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_TV_START_TYPE_COLD_ON_REMOTE_CONNECTION",
Yg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_TV_START_TYPE_NON_COLD_ON_REMOTE_CONNECTION",Bg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ON_REMOTE_CONNECTION",gg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_COBALT_PERSISTENT_SETTINGS_TEST_VALID",eg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_COBALT_PERSISTENT_SETTINGS_TEST_INVALID",fg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_COBALT_PERSISTENT_SETTINGS_TEST_UNDEFINED",dg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_COBALT_PERSISTENT_SETTINGS_TEST_DEFINED",Ag:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_LACT_THRESHOLD_EXCEEDED",
Og:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ROUND_TRIP_HANDLING_ON_REMOTE_CONNECTION",xg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_STATE_SWITCHED_ON_REMOTE_CONNECTION_BEFORE_APP_RELOAD",wg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_STATE_SWITCHED_ON_REMOTE_CONNECTION_AFTER_APP_RELOAD",mg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EMC3DS_INELIGIBLE",Wg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_TVHTML5_MID_ROLL_THRESHOLD_REACHED",qg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EXP_COBALT_HTTP3_CONFIG_PENDING",
pg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EXP_COBALT_HTTP3_CONFIG_ACTIVATED",ng:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EMC3DS_M2_ELIGIBLE",Lg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ROTATE_DEVICE_TO_LANDSCAPE",Mg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ROTATE_DEVICE_TO_PORTRAIT",kg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EMBEDS_FACEOFF_UI_EVENT",rg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EXP_COBALT_HTTP3_CONFIG_RECEIVED",jg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ELIGIBLE_TO_SUPPRESS_TRANSPORT_CONTROLS_BUTTONS",
bh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_USER_HAS_THEATER_MODE_COOKIE_ENABLED",ig:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_DOCUMENT_PICTURE_IN_PICTURE_SUPPORTED",Qg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_SHORTS_NON_DEFAULT_ASPECT_RATIO",Cg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_PLAYER_IN_SQUEEZEBACK"};var zm=new om("shareEndpoint"),Am=new om("shareEntityEndpoint"),Bm=new om("shareEntityServiceEndpoint"),Cm=new om("webPlayerShareEntityServiceEndpoint");var Dm=new om("playlistEditEndpoint");var Em=new om("modifyChannelNotificationPreferenceEndpoint");var Fm=new om("undoFeedbackEndpoint");var Gm=new om("unsubscribeEndpoint");var Hm=new om("subscribeEndpoint");function Im(){var a=Jm;F("yt.ads.biscotti.getId_")||E("yt.ads.biscotti.getId_",a)}
function Km(a){E("yt.ads.biscotti.lastId_",a)}
;function Lm(a,b){b.length>1?a[b[0]]=b[1]:b.length===1&&Object.assign(a,b[0])}
;var Mm=D.window,Nm,Om,Pm=(Mm==null?void 0:(Nm=Mm.yt)==null?void 0:Nm.config_)||(Mm==null?void 0:(Om=Mm.ytcfg)==null?void 0:Om.data_)||{};E("yt.config_",Pm);function Qm(){Lm(Pm,arguments)}
function R(a,b){return a in Pm?Pm[a]:b}
function Rm(a){var b=Pm.EXPERIMENT_FLAGS;return b?b[a]:void 0}
;var Sm=[];function Tm(a){Sm.forEach(function(b){return b(a)})}
function Um(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){Vm(b)}}:a}
function Vm(a){var b=F("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0,void 0,void 0):(b=R("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0,void 0,void 0]),Qm("ERRORS",b));Tm(a)}
function Wm(a,b,c,d,e){var f=F("yt.logging.errors.log");f?f(a,"WARNING",b,c,d,void 0,e):(f=R("ERRORS",[]),f.push([a,"WARNING",b,c,d,void 0,e]),Qm("ERRORS",f))}
;var Xm=/^[\w.]*$/,Ym={q:!0,search_query:!0};function Zm(a,b){b=a.split(b);for(var c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(f.length===1&&f[0]||f.length===2)try{var g=$m(f[0]||""),h=$m(f[1]||"");if(g in c){var k=c[g];Array.isArray(k)?bc(k,h):c[g]=[k,h]}else c[g]=h}catch(r){var l=r,m=f[0],n=String(Zm);l.args=[{key:m,value:f[1],query:a,method:an===n?"unchanged":n}];Ym.hasOwnProperty(m)||Wm(l)}}return c}
var an=String(Zm);function bn(a){var b=[];Bg(a,function(c,d){var e=encodeURIComponent(String(d));c=Array.isArray(c)?c:[c];Vb(c,function(f){f==""?b.push(e):b.push(e+"="+encodeURIComponent(String(f)))})});
return b.join("&")}
function cn(a){a.charAt(0)==="?"&&(a=a.substring(1));return Zm(a,"&")}
function dn(a){return a.indexOf("?")!==-1?(a=(a||"").split("#")[0],a=a.split("?",2),cn(a.length>1?a[1]:a[0])):{}}
function en(a,b){return fn(a,b||{},!0)}
function fn(a,b,c){var d=a.split("#",2);a=d[0];d=d.length>1?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=cn(e[1]||"");for(var f in b)!c&&e!==null&&f in e||(e[f]=b[f]);return wc(a,e)+d}
function gn(a){if(!b)var b=window.location.href;var c=a.match(nc)[1]||null,d=pc(a);c&&d?(a=a.match(nc),b=b.match(nc),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?pc(b)===d&&(Number(b.match(nc)[4]||null)||null)===(Number(a.match(nc)[4]||null)||null):!0;return a}
function $m(a){return a&&a.match(Xm)?a:lc(a)}
;function hn(a){var b=jn;a=a===void 0?F("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=Zj;e.flash="0";a:{try{var f=b.h.top.location.href}catch(Ja){f=2;break a}f=f?f===b.i.location.href?0:1:2}e=(e.frm=f,e);try{e.u_tz=-(new Date).getTimezoneOffset();var g=g===void 0?Rj:g;try{var h=g.history.length}catch(Ja){h=0}e.u_his=h;var k;e.u_h=(k=Rj.screen)==null?void 0:k.height;var l;e.u_w=(l=Rj.screen)==null?void 0:l.width;var m;e.u_ah=(m=Rj.screen)==null?void 0:m.availHeight;var n;e.u_aw=
(n=Rj.screen)==null?void 0:n.availWidth;var r;e.u_cd=(r=Rj.screen)==null?void 0:r.colorDepth}catch(Ja){}var t;h=b.h;try{var w=h.screenX;var x=h.screenY}catch(Ja){}try{var z=h.outerWidth;var G=h.outerHeight}catch(Ja){}try{var H=h.innerWidth;var S=h.innerHeight}catch(Ja){}try{var Z=h.screenLeft;var mb=h.screenTop}catch(Ja){}try{H=h.innerWidth,S=h.innerHeight}catch(Ja){}try{var Sb=h.screen.availWidth;var pa=h.screen.availTop}catch(Ja){}w=[Z,mb,w,x,Sb,pa,z,G,H,S];try{var Eb=(b.h.top||window).document,
Ya=Eb.compatMode=="CSS1Compat"?Eb.documentElement:Eb.body;var Pa=(new Ag(Ya.clientWidth,Ya.clientHeight)).round()}catch(Ja){Pa=new Ag(-12245933,-12245933)}Eb=Pa;Pa={};var Ka=Ka===void 0?D:Ka;Ya=new fk;"SVGElement"in Ka&&"createElementNS"in Ka.document&&Ya.set(0);x=Wj();x["allow-top-navigation-by-user-activation"]&&Ya.set(1);x["allow-popups-to-escape-sandbox"]&&Ya.set(2);Ka.crypto&&Ka.crypto.subtle&&Ya.set(3);"TextDecoder"in Ka&&"TextEncoder"in Ka&&Ya.set(4);Ka=gk(Ya);Pa.bc=Ka;Pa.bih=Eb.height;Pa.biw=
Eb.width;Pa.brdim=w.join();b=b.i;b=b.prerendering?3:(t={visible:1,hidden:2,prerender:3,preview:4,unloaded:5,"":0}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""])!=null?t:0;t=(Pa.vis=b,Pa.wgl=!!Rj.WebGLRenderingContext,Pa);c=d.call(c,e,t);c.ca_type="image";a&&(c.bid=a);return c}
var jn=new function(){var a=window.document;this.h=window;this.i=a};
E("yt.ads_.signals_.getAdSignalsString",function(a){return bn(hn(a))});Wa();navigator.userAgent.indexOf(" (CrKey ");var kn="XMLHttpRequest"in D?function(){return new XMLHttpRequest}:null;
function ln(){if(!kn)return null;var a=kn();return"open"in a?a:null}
function mn(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;function nn(a,b){typeof a==="function"&&(a=Um(a));return window.setTimeout(a,b)}
;var on="client_dev_domain client_dev_expflag client_dev_regex_map client_dev_root_url client_rollout_override expflag forcedCapability jsfeat jsmode mods".split(" ");[].concat(A(on),["client_dev_set_cookie"]);function T(a){a=pn(a);return typeof a==="string"&&a==="false"?!1:!!a}
function qn(a,b){a=pn(a);return a===void 0&&b!==void 0?b:Number(a||0)}
function pn(a){return R("EXPERIMENT_FLAGS",{})[a]}
function rn(){for(var a=[],b=R("EXPERIMENTS_FORCED_FLAGS",{}),c=y(Object.keys(b)),d=c.next();!d.done;d=c.next())d=d.value,a.push({key:d,value:String(b[d])});c=R("EXPERIMENT_FLAGS",{});d=y(Object.keys(c));for(var e=d.next();!e.done;e=d.next())e=e.value,e.startsWith("force_")&&b[e]===void 0&&a.push({key:e,value:String(c[e])});return a}
;var sn={Authorization:"AUTHORIZATION","X-Goog-EOM-Visitor-Id":"EOM_VISITOR_DATA","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Domain-Admin-State":"DOMAIN_ADMIN_STATE","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL",
"X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-Goog-AuthUser":"SESSION_INDEX","X-Goog-PageId":"DELEGATED_SESSION_ID"},tn="app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ").concat(A(on)),un=!1;function vn(a,b,c,d,e,f,g,h){function k(){(l&&"readyState"in l?l.readyState:0)===4&&b&&Um(b)(l)}
c=c===void 0?"GET":c;d=d===void 0?"":d;h=h===void 0?!1:h;var l=ln();if(!l)return null;"onloadend"in l?l.addEventListener("loadend",k,!1):l.onreadystatechange=k;T("debug_forward_web_query_parameters")&&(a=wn(a));l.open(c,a,!0);f&&(l.responseType=f);g&&(l.withCredentials=!0);c=c==="POST"&&(window.FormData===void 0||!(d instanceof FormData));if(e=xn(a,e))for(var m in e)l.setRequestHeader(m,e[m]),"content-type"===m.toLowerCase()&&(c=!1);c&&l.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
if(h&&"setAttributionReporting"in XMLHttpRequest.prototype){a={eventSourceEligible:!0,triggerEligible:!1};try{l.setAttributionReporting(a)}catch(n){Wm(n)}}l.send(d);return l}
function xn(a,b){b=b===void 0?{}:b;var c=gn(a),d=R("INNERTUBE_CLIENT_NAME"),e=T("web_ajax_ignore_global_headers_if_set"),f;for(f in sn){var g=R(sn[f]),h=f==="X-Goog-AuthUser"||f==="X-Goog-PageId";f!=="X-Goog-Visitor-Id"||g||(g=R("VISITOR_DATA"));var k;if(!(k=!g)){if(!(k=c||(pc(a)?!1:!0))){k=a;var l;if(l=T("add_auth_headers_to_remarketing_google_dot_com_ping")&&f==="Authorization"&&(d==="TVHTML5"||d==="TVHTML5_UNPLUGGED"||d==="TVHTML5_SIMPLY"))l=pc(k),l=l!==null?l.split(".").reverse():null,l=l===null?
!1:l[1]==="google"?!0:l[2]==="google"?l[0]==="au"&&l[1]==="com"?!0:l[0]==="uk"&&l[1]==="co"?!0:!1:!1;l&&(k=qc(k)||"",k=k.split("/"),k="/"+(k.length>1?k[1]:""),l=k==="/pagead");k=l?!0:!1}k=!k}k||e&&b[f]!==void 0||d==="TVHTML5_UNPLUGGED"&&h||(b[f]=g)}"X-Goog-EOM-Visitor-Id"in b&&"X-Goog-Visitor-Id"in b&&delete b["X-Goog-Visitor-Id"];if(c||!pc(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());if(c||!pc(a)){try{var m=(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch(n){}m&&
(b["X-YouTube-Time-Zone"]=m)}document.location.hostname.endsWith("youtubeeducation.com")||!c&&pc(a)||(b["X-YouTube-Ad-Signals"]=bn(hn()));return b}
function yn(a,b){b.method="POST";b.postParams||(b.postParams={});return zn(a,b)}
function zn(a,b){var c=b.format||"JSON";a=An(a,b);var d=Bn(a,b),e=!1,f=Cn(a,function(k){if(!e){e=!0;h&&window.clearTimeout(h);var l=mn(k),m=null,n=400<=k.status&&k.status<500,r=500<=k.status&&k.status<600;if(l||n||r)m=Dn(a,c,k,b.convertToSafeHtml);l&&(l=En(c,k,m));m=m||{};n=b.context||D;l?b.onSuccess&&b.onSuccess.call(n,k,m):b.onError&&b.onError.call(n,k,m);b.onFinish&&b.onFinish.call(n,k,m)}},b.method,d,b.headers,b.responseType,b.withCredentials);
d=b.timeout||0;if(b.onTimeout&&d>0){var g=b.onTimeout;var h=nn(function(){e||(e=!0,f.abort(),window.clearTimeout(h),g.call(b.context||D,f))},d)}return f}
function An(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=R("XSRF_FIELD_NAME");if(b=b.urlParams)b[c]&&delete b[c],a=en(a,b);return a}
function Bn(a,b){var c=R("XSRF_FIELD_NAME"),d=R("XSRF_TOKEN"),e=b.postBody||"",f=b.postParams,g=R("XSRF_FIELD_NAME"),h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||pc(a)&&!b.withCredentials&&pc(a)!==document.location.hostname||b.method!=="POST"||h&&h!=="application/x-www-form-urlencoded"||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);(T("ajax_parse_query_data_only_when_filled")&&f&&Object.keys(f).length>0||f)&&typeof e==="string"&&(e=cn(e),Mg(e,f),e=b.postBodyFormat&&b.postBodyFormat===
"JSON"?JSON.stringify(e):vc(e));f=e||f&&!Fg(f);!un&&f&&b.method!=="POST"&&(un=!0,Vm(Error("AJAX request with postData should use POST")));return e}
function Dn(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,Wm(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&a.indexOf("json")>=0&&(f.substring(0,5)===")]}'\n"&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?Fn(a):null)e={},Vb(a.getElementsByTagName("*"),function(g){e[g.tagName]=Gn(g)})}d&&Hn(e);
return e}
function Hn(a){if(Na(a))for(var b in a){var c;(c=b==="html_content")||(c=b.length-5,c=c>=0&&b.indexOf("_html",c)==c);if(c){c=a[b];var d=ob();c=d?d.createHTML(c):c;a[b]=new Hb(c)}else Hn(a[b])}}
function En(a,b,c){if(b&&b.status===204)return!0;switch(a){case "JSON":return!!c;case "XML":return Number(c&&c.return_code)===0;case "RAW":return!0;default:return!!c}}
function Fn(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&a.length>0?a[0]:null:null}
function Gn(a){var b="";Vb(a.childNodes,function(c){b+=c.nodeValue});
return b}
function wn(a){var b=window.location.search,c=pc(a);T("debug_handle_relative_url_for_query_forward_killswitch")||!c&&gn(a)&&(c=document.location.hostname);var d=qc(a);d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=cn(b),f={};Vb(tn,function(g){e[g]&&(f[g]=e[g])});
return fn(a,f||{},!1)}
var Cn=vn;var In=[{Wc:function(a){return"Cannot read property '"+a.key+"'"},
Cc:{Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}],TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]},{regexp:/(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,groups:["value","base","key"]}]}},{Wc:function(a){return"Cannot call '"+a.key+"'"},
Cc:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}},{Wc:function(a){return a.key+" is not defined"},
Cc:{ReferenceError:[{regexp:/(.*) is not defined/,groups:["key"]},{regexp:/Can't find variable: (.*)/,groups:["key"]}]}}];var Kn={Za:[],Ua:[{callback:Jn,weight:500}]};function Jn(a){if(a.name==="JavaException")return!0;a=a.stack;return a.includes("chrome://")||a.includes("chrome-extension://")||a.includes("moz-extension://")}
;function Ln(){this.Ua=[];this.Za=[]}
var Mn;function Nn(){if(!Mn){var a=Mn=new Ln;a.Za.length=0;a.Ua.length=0;On(a,Kn)}return Mn}
function On(a,b){b.Za&&a.Za.push.apply(a.Za,b.Za);b.Ua&&a.Ua.push.apply(a.Ua,b.Ua)}
;var Pn=new N;function Qn(a){function b(){return a.charCodeAt(d++)}
var c=a.length,d=0;do{var e=Rn(b);if(e===Infinity)break;var f=e>>3;switch(e&7){case 0:e=Rn(b);if(f===2)return e;break;case 1:if(f===2)return;d+=8;break;case 2:e=Rn(b);if(f===2)return a.substr(d,e);d+=e;break;case 5:if(f===2)return;d+=4;break;default:return}}while(d<c)}
function Rn(a){var b=a(),c=b&127;if(b<128)return c;b=a();c|=(b&127)<<7;if(b<128)return c;b=a();c|=(b&127)<<14;if(b<128)return c;b=a();return b<128?c|(b&127)<<21:Infinity}
;function Sn(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=Tn(d,a[d],b,c),e>500));d++);d=e}else if(typeof a==="object")for(e in a){if(a[e]){var f=e;var g=a[e],h=b,k=c;f=typeof g!=="string"||f!=="clickTrackingParams"&&f!=="trackingParams"?0:(g=Qn(atob(g.replace(/-/g,"+").replace(/_/g,"/"))))?Tn(f+".ve",g,h,k):0;d+=f;d+=Tn(e,a[e],b,c);if(d>500)break}}else c[b]=Un(a),d+=c[b].length;else c[b]=Un(a),d+=c[b].length;return d}
function Tn(a,b,c,d){c+="."+a;a=Un(b);d[c]=a;return c.length+a.length}
function Un(a){try{return(typeof a==="string"?a:String(JSON.stringify(a))).substr(0,500)}catch(b){return"unable to serialize "+typeof a+" ("+b.message+")"}}
;function Vn(a){var b=this;this.i=void 0;this.h=!1;a.addEventListener("beforeinstallprompt",function(c){c.preventDefault();b.i=c});
a.addEventListener("appinstalled",function(){b.h=!0},{once:!0})}
function Wn(){if(!D.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return D.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":D.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":D.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":D.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}}
;function Xn(){this.Qd=!0}
function Yn(){Xn.instance||(Xn.instance=new Xn);return Xn.instance}
function Zn(a,b){a={};var c=[];"USER_SESSION_ID"in Pm&&c.push({key:"u",value:R("USER_SESSION_ID")});if(c=tg(c))a.Authorization=c,c=b=b==null?void 0:b.sessionIndex,c===void 0&&(c=Number(R("SESSION_INDEX",0)),c=isNaN(c)?0:c),T("voice_search_auth_header_removal")||(a["X-Goog-AuthUser"]=c.toString()),"INNERTUBE_HOST_OVERRIDE"in Pm||(a["X-Origin"]=window.location.origin),b===void 0&&"DELEGATED_SESSION_ID"in Pm&&(a["X-Goog-PageId"]=R("DELEGATED_SESSION_ID"));return a}
;var $n={identityType:"UNAUTHENTICATED_IDENTITY_TYPE_UNKNOWN"};function ao(a,b,c,d,e){qg.set(""+a,b,{Yb:c,path:"/",domain:d===void 0?"youtube.com":d,secure:e===void 0?!1:e})}
function bo(a){return qg.get(""+a,void 0)}
function co(a,b,c){qg.remove(""+a,b===void 0?"/":b,c===void 0?"youtube.com":c)}
function eo(){if(T("embeds_web_enable_cookie_detection_fix")){if(!D.navigator.cookieEnabled)return!1}else if(!qg.isEnabled())return!1;if(qg.h.cookie)return!0;T("embeds_web_enable_cookie_detection_fix")?qg.set("TESTCOOKIESENABLED","1",{Yb:60,ff:"none",secure:!0}):qg.set("TESTCOOKIESENABLED","1",{Yb:60});if(qg.get("TESTCOOKIESENABLED")!=="1")return!1;qg.remove("TESTCOOKIESENABLED");return!0}
;var fo=F("ytglobal.prefsUserPrefsPrefs_")||{};E("ytglobal.prefsUserPrefsPrefs_",fo);function go(){this.h=R("ALT_PREF_COOKIE_NAME","PREF");this.i=R("ALT_PREF_COOKIE_DOMAIN","youtube.com");var a=bo(this.h);a&&this.parse(a)}
var ho;function io(){ho||(ho=new go);return ho}
p=go.prototype;p.get=function(a,b){jo(a);ko(a);a=fo[a]!==void 0?fo[a].toString():null;return a!=null?a:b?b:""};
p.set=function(a,b){jo(a);ko(a);if(b==null)throw Error("ExpectedNotNull");fo[a]=b.toString()};
function lo(a){return!!((mo("f"+(Math.floor(a/31)+1))||0)&1<<a%31)}
p.remove=function(a){jo(a);ko(a);delete fo[a]};
p.clear=function(){for(var a in fo)delete fo[a]};
function ko(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function jo(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function mo(a){a=fo[a]!==void 0?fo[a].toString():null;return a!=null&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
p.parse=function(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(fo[d]=c.toString())}};var no={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},oo={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};
function po(){var a=D.navigator;return a?a.connection:void 0}
function qo(){var a=po();if(a){var b=no[a.type||"unknown"]||"CONN_UNKNOWN";a=no[a.effectiveType||"unknown"]||"CONN_UNKNOWN";b==="CONN_CELLULAR_UNKNOWN"&&a!=="CONN_UNKNOWN"&&(b=a);if(b!=="CONN_UNKNOWN")return b;if(a!=="CONN_UNKNOWN")return a}}
function ro(){var a=po();if(a!=null&&a.effectiveType)return oo.hasOwnProperty(a.effectiveType)?oo[a.effectiveType]:"EFFECTIVE_CONNECTION_TYPE_UNKNOWN"}
;function U(a){var b=C.apply(1,arguments);var c=Error.call(this,a);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.args=[].concat(A(b));Object.setPrototypeOf(this,this.constructor.prototype)}
v(U,Error);function so(){try{return to(),!0}catch(a){return!1}}
function to(a){if(R("DATASYNC_ID")!==void 0)return R("DATASYNC_ID");throw new U("Datasync ID not set",a===void 0?"unknown":a);}
;function uo(){}
function vo(a,b){return ek.Sa(a,0,b)}
uo.prototype.pa=function(a,b){return this.Sa(a,1,b)};
uo.prototype.Nb=function(a){var b=F("yt.scheduler.instance.addImmediateJob");b?b(a):a()};var wo=qn("web_emulated_idle_callback_delay",300),xo=1E3/60-3,yo=[8,5,4,3,2,1,0];
function zo(a){a=a===void 0?{}:a;I.call(this);this.i=[];this.j={};this.Z=this.h=0;this.Y=this.u=!1;this.P=[];this.U=this.ha=!1;for(var b=y(yo),c=b.next();!c.done;c=b.next())this.i[c.value]=[];this.o=0;this.Lc=a.timeout||1;this.G=xo;this.A=0;this.xa=this.Se.bind(this);this.Mb=this.zf.bind(this);this.Qa=this.be.bind(this);this.Ra=this.Ce.bind(this);this.fb=this.Ze.bind(this);this.Fa=!!window.requestIdleCallback&&!!window.cancelIdleCallback&&!T("disable_scheduler_requestIdleCallback");(this.ma=a.useRaf!==
!1&&!!window.requestAnimationFrame)&&document.addEventListener("visibilitychange",this.xa)}
v(zo,I);p=zo.prototype;p.Nb=function(a){var b=Wa();Ao(this,a);a=Wa()-b;this.u||(this.G-=a)};
p.Sa=function(a,b,c){++this.Z;if(b===10)return this.Nb(a),this.Z;var d=this.Z;this.j[d]=a;this.u&&!c?this.P.push({id:d,priority:b}):(this.i[b].push(d),this.Y||this.u||(this.h!==0&&Bo(this)!==this.A&&this.stop(),this.start()));return d};
p.qa=function(a){delete this.j[a]};
function Co(a){a.P.length=0;for(var b=5;b>=0;b--)a.i[b].length=0;a.i[8].length=0;a.j={};a.stop()}
p.isHidden=function(){return!!document.hidden||!1};
function Do(a){return!a.isHidden()&&a.ma}
function Bo(a){if(a.i[8].length){if(a.U)return 4;if(Do(a))return 3}for(var b=5;b>=a.o;b--)if(a.i[b].length>0)return b>0?Do(a)?3:2:1;return 0}
p.Ha=function(a){var b=F("yt.logging.errors.log");b&&b(a)};
function Ao(a,b){try{b()}catch(c){a.Ha(c)}}
function Eo(a){for(var b=y(yo),c=b.next();!c.done;c=b.next())if(a.i[c.value].length)return!0;return!1}
p.Ce=function(a){var b=void 0;a&&(b=a.timeRemaining());this.ha=!0;Fo(this,b);this.ha=!1};
p.zf=function(){Fo(this)};
p.be=function(){Go(this)};
p.Ze=function(a){this.U=!0;var b=Bo(this);b===4&&b!==this.A&&(this.stop(),this.start());Fo(this,void 0,a);this.U=!1};
p.Se=function(){this.isHidden()||Go(this);this.h&&(this.stop(),this.start())};
function Go(a){a.stop();a.u=!0;for(var b=Wa(),c=a.i[8];c.length;){var d=c.shift(),e=a.j[d];delete a.j[d];e&&Ao(a,e)}Ho(a);a.u=!1;Eo(a)&&a.start();b=Wa()-b;a.G-=b}
function Ho(a){for(var b=0,c=a.P.length;b<c;b++){var d=a.P[b];a.i[d.priority].push(d.id)}a.P.length=0}
function Fo(a,b,c){a.U&&a.A===4&&a.h||a.stop();a.u=!0;b=Wa()+(b||a.G);for(var d=a.i[5];d.length;){var e=d.shift(),f=a.j[e];delete a.j[e];if(f){e=a;try{f(c)}catch(l){e.Ha(l)}}}for(d=a.i[4];d.length;)c=d.shift(),f=a.j[c],delete a.j[c],f&&Ao(a,f);d=a.ha?0:1;d=a.o>d?a.o:d;if(!(Wa()>=b)){do{a:{c=a;f=d;for(e=3;e>=f;e--)for(var g=c.i[e];g.length;){var h=g.shift(),k=c.j[h];delete c.j[h];if(k){c=k;break a}}c=null}c&&Ao(a,c)}while(c&&Wa()<b)}a.u=!1;Ho(a);a.G=xo;Eo(a)&&a.start()}
p.start=function(){this.Y=!1;if(this.h===0)switch(this.A=Bo(this),this.A){case 1:var a=this.Ra;this.h=this.Fa?window.requestIdleCallback(a,{timeout:3E3}):window.setTimeout(a,wo);break;case 2:this.h=window.setTimeout(this.Mb,this.Lc);break;case 3:this.h=window.requestAnimationFrame(this.fb);break;case 4:this.h=window.setTimeout(this.Qa,0)}};
p.pause=function(){this.stop();this.Y=!0};
p.stop=function(){if(this.h){switch(this.A){case 1:var a=this.h;this.Fa?window.cancelIdleCallback(a):window.clearTimeout(a);break;case 2:case 4:window.clearTimeout(this.h);break;case 3:window.cancelAnimationFrame(this.h)}this.h=0}};
p.ba=function(){Co(this);this.stop();this.ma&&document.removeEventListener("visibilitychange",this.xa);I.prototype.ba.call(this)};var Io=F("yt.scheduler.instance.timerIdMap_")||{},Jo=qn("kevlar_tuner_scheduler_soft_state_timer_ms",800),Ko=0,Lo=0;function Mo(){var a=F("ytglobal.schedulerInstanceInstance_");if(!a||a.ea)a=new zo(R("scheduler")||{}),E("ytglobal.schedulerInstanceInstance_",a);return a}
function No(){Oo();var a=F("ytglobal.schedulerInstanceInstance_");a&&(Cc(a),E("ytglobal.schedulerInstanceInstance_",null))}
function Oo(){Co(Mo());for(var a in Io)Io.hasOwnProperty(a)&&delete Io[Number(a)]}
function Po(a,b,c){if(!c)return c=c===void 0,-Mo().Sa(a,b,c);var d=window.setTimeout(function(){var e=Mo().Sa(a,b);Io[d]=e},c);
return d}
function Qo(a){Mo().Nb(a)}
function Ro(a){var b=Mo();if(a<0)b.qa(-a);else{var c=Io[a];c?(b.qa(c),delete Io[a]):window.clearTimeout(a)}}
function So(){To()}
function To(){window.clearTimeout(Ko);Mo().start()}
function Uo(){Mo().pause();window.clearTimeout(Ko);Ko=window.setTimeout(So,Jo)}
function Vo(){window.clearTimeout(Lo);Lo=window.setTimeout(function(){Wo(0)},Jo)}
function Wo(a){Vo();var b=Mo();b.o=a;b.start()}
function Xo(a){Vo();var b=Mo();b.o>a&&(b.o=a,b.start())}
function Yo(){window.clearTimeout(Lo);var a=Mo();a.o=0;a.start()}
;function Zo(){uo.apply(this,arguments)}
v(Zo,uo);function $o(){Zo.instance||(Zo.instance=new Zo);return Zo.instance}
Zo.prototype.Sa=function(a,b,c){c!==void 0&&Number.isNaN(Number(c))&&(c=void 0);var d=F("yt.scheduler.instance.addJob");return d?d(a,b,c):c===void 0?(a(),NaN):nn(a,c||0)};
Zo.prototype.qa=function(a){if(a===void 0||!Number.isNaN(Number(a))){var b=F("yt.scheduler.instance.cancelJob");b?b(a):window.clearTimeout(a)}};
Zo.prototype.start=function(){var a=F("yt.scheduler.instance.start");a&&a()};
Zo.prototype.pause=function(){var a=F("yt.scheduler.instance.pause");a&&a()};
var ek=$o();
T("web_scheduler_auto_init")&&!F("yt.scheduler.initialized")&&(E("yt.scheduler.instance.dispose",No),E("yt.scheduler.instance.addJob",Po),E("yt.scheduler.instance.addImmediateJob",Qo),E("yt.scheduler.instance.cancelJob",Ro),E("yt.scheduler.instance.cancelAllJobs",Oo),E("yt.scheduler.instance.start",To),E("yt.scheduler.instance.pause",Uo),E("yt.scheduler.instance.setPriorityThreshold",Wo),E("yt.scheduler.instance.enablePriorityThreshold",Xo),E("yt.scheduler.instance.clearPriorityThreshold",Yo),E("yt.scheduler.initialized",
!0));function ap(a){var b=new Ek;this.h=(a=b.isAvailable()?a?new Fk(b,a):b:null)?new zk(a):null;this.i=document.domain||window.location.hostname}
ap.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.h)try{this.h.set(a,b,Date.now()+c*1E3);return}catch(f){}var e="";if(d)try{e=escape((new $i).serialize(b))}catch(f){return}else e=escape(b);ao(a,e,c,this.i)};
ap.prototype.get=function(a,b){var c=void 0,d=!this.h;if(!d)try{c=this.h.get(a)}catch(e){d=!0}if(d&&(c=bo(a))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
ap.prototype.remove=function(a){this.h&&this.h.remove(a);co(a,"/",this.i)};var bp=function(){var a;return function(){a||(a=new ap("ytidb"));return a}}();
function cp(){var a;return(a=bp())==null?void 0:a.get("LAST_RESULT_ENTRY_KEY",!0)}
;var dp=[],ep,fp=!1;function gp(){var a={};for(ep=new hp(a.handleError===void 0?ip:a.handleError,a.logEvent===void 0?jp:a.logEvent);dp.length>0;)switch(a=dp.shift(),a.type){case "ERROR":ep.Ha(a.payload);break;case "EVENT":ep.logEvent(a.eventType,a.payload)}}
function kp(a){fp||(ep?ep.Ha(a):(dp.push({type:"ERROR",payload:a}),dp.length>10&&dp.shift()))}
function lp(a,b){fp||(ep?ep.logEvent(a,b):(dp.push({type:"EVENT",eventType:a,payload:b}),dp.length>10&&dp.shift()))}
;function mp(a){if(a.indexOf(":")>=0)throw Error("Database name cannot contain ':'");}
function np(a){return a.substr(0,a.indexOf(":"))||a}
;var op=ud||vd;function pp(a){var b=dd();return b?b.toLowerCase().indexOf(a)>=0:!1}
;var qp={},rp=(qp.AUTH_INVALID="No user identifier specified.",qp.EXPLICIT_ABORT="Transaction was explicitly aborted.",qp.IDB_NOT_SUPPORTED="IndexedDB is not supported.",qp.MISSING_INDEX="Index not created.",qp.MISSING_OBJECT_STORES="Object stores not created.",qp.DB_DELETED_BY_MISSING_OBJECT_STORES="Database is deleted because expected object stores were not created.",qp.DB_REOPENED_BY_MISSING_OBJECT_STORES="Database is reopened because expected object stores were not created.",qp.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",
qp.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",qp.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",qp.EXECUTE_TRANSACTION_ON_CLOSED_DB="Can't start a transaction on a closed database",qp.INCOMPATIBLE_DB_VERSION="The binary is incompatible with the database version",qp),sp={},tp=(sp.AUTH_INVALID="ERROR",sp.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",sp.EXPLICIT_ABORT="IGNORED",sp.IDB_NOT_SUPPORTED="ERROR",sp.MISSING_INDEX=
"WARNING",sp.MISSING_OBJECT_STORES="ERROR",sp.DB_DELETED_BY_MISSING_OBJECT_STORES="WARNING",sp.DB_REOPENED_BY_MISSING_OBJECT_STORES="WARNING",sp.QUOTA_EXCEEDED="WARNING",sp.QUOTA_MAYBE_EXCEEDED="WARNING",sp.UNKNOWN_ABORT="WARNING",sp.INCOMPATIBLE_DB_VERSION="WARNING",sp),up={},vp=(up.AUTH_INVALID=!1,up.EXECUTE_TRANSACTION_ON_CLOSED_DB=!1,up.EXPLICIT_ABORT=!1,up.IDB_NOT_SUPPORTED=!1,up.MISSING_INDEX=!1,up.MISSING_OBJECT_STORES=!1,up.DB_DELETED_BY_MISSING_OBJECT_STORES=!1,up.DB_REOPENED_BY_MISSING_OBJECT_STORES=
!1,up.QUOTA_EXCEEDED=!1,up.QUOTA_MAYBE_EXCEEDED=!0,up.UNKNOWN_ABORT=!0,up.INCOMPATIBLE_DB_VERSION=!1,up);function wp(a,b,c,d,e){b=b===void 0?{}:b;c=c===void 0?rp[a]:c;d=d===void 0?tp[a]:d;e=e===void 0?vp[a]:e;U.call(this,c,Object.assign({},{name:"YtIdbKnownError",isSw:self.document===void 0,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.h=e;Object.setPrototypeOf(this,wp.prototype)}
v(wp,U);function xp(a,b){wp.call(this,"MISSING_OBJECT_STORES",{expectedObjectStores:b,foundObjectStores:a},rp.MISSING_OBJECT_STORES);Object.setPrototypeOf(this,xp.prototype)}
v(xp,wp);function yp(a,b){var c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.index=a;this.objectStore=b;Object.setPrototypeOf(this,yp.prototype)}
v(yp,Error);var zp=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function Ap(a,b,c,d){b=np(b);var e=a instanceof Error?a:Error("Unexpected error: "+a);if(e instanceof wp)return e;a={objectStoreNames:c,dbName:b,dbVersion:d};if(e.name==="QuotaExceededError")return new wp("QUOTA_EXCEEDED",a);if(wd&&e.name==="UnknownError")return new wp("QUOTA_MAYBE_EXCEEDED",a);if(e instanceof yp)return new wp("MISSING_INDEX",Object.assign({},a,{objectStore:e.objectStore,index:e.index}));if(e.name==="InvalidStateError"&&zp.some(function(f){return e.message.includes(f)}))return new wp("EXECUTE_TRANSACTION_ON_CLOSED_DB",
a);
if(e.name==="AbortError")return new wp("UNKNOWN_ABORT",a,e.message);e.args=[Object.assign({},a,{name:"IdbError",Hd:e.name})];e.level="WARNING";return e}
function Bp(a,b,c){var d=cp();return new wp("IDB_NOT_SUPPORTED",{context:{caller:a,publicName:b,version:c,hasSucceededOnce:d==null?void 0:d.hasSucceededOnce}})}
;function Cp(a){if(!a)throw Error();throw a;}
function Dp(a){return a}
function Ep(a){this.h=a}
function Fp(a){function b(e){if(d.state.status==="PENDING"){d.state={status:"REJECTED",reason:e};e=y(d.i);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if(d.state.status==="PENDING"){d.state={status:"FULFILLED",value:e};e=y(d.h);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.state={status:"PENDING"};this.h=[];this.i=[];a=a.h;try{a(c,b)}catch(e){b(e)}}
Fp.all=function(a){return new Fp(new Ep(function(b,c){var d=[],e=a.length;e===0&&b(d);for(var f={Cb:0};f.Cb<a.length;f={Cb:f.Cb},++f.Cb)Fp.resolve(a[f.Cb]).then(function(g){return function(h){d[g.Cb]=h;e--;e===0&&b(d)}}(f)).catch(function(g){c(g)})}))};
Fp.resolve=function(a){return new Fp(new Ep(function(b,c){a instanceof Fp?a.then(b,c):b(a)}))};
Fp.reject=function(a){return new Fp(new Ep(function(b,c){c(a)}))};
Fp.prototype.then=function(a,b){var c=this,d=a!=null?a:Dp,e=b!=null?b:Cp;return new Fp(new Ep(function(f,g){c.state.status==="PENDING"?(c.h.push(function(){Gp(c,c,d,f,g)}),c.i.push(function(){Hp(c,c,e,f,g)})):c.state.status==="FULFILLED"?Gp(c,c,d,f,g):c.state.status==="REJECTED"&&Hp(c,c,e,f,g)}))};
Fp.prototype.catch=function(a){return this.then(void 0,a)};
function Gp(a,b,c,d,e){try{if(a.state.status!=="FULFILLED")throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof Fp?Ip(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Hp(a,b,c,d,e){try{if(a.state.status!=="REJECTED")throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof Fp?Ip(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Ip(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof Fp?Ip(a,b,f,d,e):d(f)},function(f){e(f)})}
;function Jp(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function Kp(a){return new Promise(function(b,c){Jp(a,b,c)})}
function Lp(a){return new Fp(new Ep(function(b,c){Jp(a,b,c)}))}
;function Mp(a,b){return new Fp(new Ep(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()}))}
;var Np=window,V=Np.ytcsi&&Np.ytcsi.now?Np.ytcsi.now:Np.performance&&Np.performance.timing&&Np.performance.now&&Np.performance.timing.navigationStart?function(){return Np.performance.timing.navigationStart+Np.performance.now()}:function(){return(new Date).getTime()};function Op(a,b){this.h=a;this.options=b;this.transactionCount=0;this.j=Math.round(V());this.i=!1}
p=Op.prototype;p.add=function(a,b,c){return Pp(this,[a],{mode:"readwrite",ka:!0},function(d){return d.objectStore(a).add(b,c)})};
p.clear=function(a){return Pp(this,[a],{mode:"readwrite",ka:!0},function(b){return b.objectStore(a).clear()})};
p.close=function(){this.h.close();var a;((a=this.options)==null?0:a.closed)&&this.options.closed()};
p.count=function(a,b){return Pp(this,[a],{mode:"readonly",ka:!0},function(c){return c.objectStore(a).count(b)})};
function Qp(a,b,c){a=a.h.createObjectStore(b,c);return new Rp(a)}
p.delete=function(a,b){return Pp(this,[a],{mode:"readwrite",ka:!0},function(c){return c.objectStore(a).delete(b)})};
p.get=function(a,b){return Pp(this,[a],{mode:"readonly",ka:!0},function(c){return c.objectStore(a).get(b)})};
function Sp(a,b,c){return Pp(a,[b],{mode:"readwrite",ka:!0},function(d){d=d.objectStore(b);return Lp(d.h.put(c,void 0))})}
p.objectStoreNames=function(){return Array.from(this.h.objectStoreNames)};
function Pp(a,b,c,d){var e,f,g,h,k,l,m,n,r,t,w,x;return B(function(z){switch(z.h){case 1:var G={mode:"readonly",ka:!1,tag:"IDB_TRANSACTION_TAG_UNKNOWN"};typeof c==="string"?G.mode=c:Object.assign(G,c);e=G;a.transactionCount++;f=e.ka?3:1;g=0;case 2:if(h){z.B(4);break}g++;k=Math.round(V());wa(z,5);l=a.h.transaction(b,e.mode);G=z.yield;var H=new Tp(l);H=Up(H,d);return G.call(z,H,7);case 7:return m=z.i,n=Math.round(V()),Vp(a,k,n,g,void 0,b.join(),e),z.return(m);case 5:r=ya(z);t=Math.round(V());w=Ap(r,
a.h.name,b.join(),a.h.version);if((x=w instanceof wp&&!w.h)||g>=f)Vp(a,k,t,g,w,b.join(),e),h=w;z.B(2);break;case 4:return z.return(Promise.reject(h))}})}
function Vp(a,b,c,d,e,f,g){b=c-b;e?(e instanceof wp&&(e.type==="QUOTA_EXCEEDED"||e.type==="QUOTA_MAYBE_EXCEEDED")&&lp("QUOTA_EXCEEDED",{dbName:np(a.h.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof wp&&e.type==="UNKNOWN_ABORT"&&(c-=a.j,c<0&&c>=2147483648&&(c=0),lp("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c}),a.i=!0),Wp(a,!1,d,f,b,g.tag),kp(e)):Wp(a,!0,d,f,b,g.tag)}
function Wp(a,b,c,d,e,f){lp("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.i,duration:e,isSuccessful:b,tryCount:c,tag:f===void 0?"IDB_TRANSACTION_TAG_UNKNOWN":f})}
p.getName=function(){return this.h.name};
function Rp(a){this.h=a}
p=Rp.prototype;p.add=function(a,b){return Lp(this.h.add(a,b))};
p.autoIncrement=function(){return this.h.autoIncrement};
p.clear=function(){return Lp(this.h.clear()).then(function(){})};
function Xp(a,b,c){a.h.createIndex(b,c,{unique:!1})}
p.count=function(a){return Lp(this.h.count(a))};
function Yp(a,b){return Zp(a,{query:b},function(c){return c.delete().then(function(){return $p(c)})}).then(function(){})}
p.delete=function(a){return a instanceof IDBKeyRange?Yp(this,a):Lp(this.h.delete(a))};
p.get=function(a){return Lp(this.h.get(a))};
p.index=function(a){try{return new aq(this.h.index(a))}catch(b){if(b instanceof Error&&b.name==="NotFoundError")throw new yp(a,this.h.name);throw b;}};
p.getName=function(){return this.h.name};
p.keyPath=function(){return this.h.keyPath};
function Zp(a,b,c){a=a.h.openCursor(b.query,b.direction);return bq(a).then(function(d){return Mp(d,c)})}
function Tp(a){var b=this;this.h=a;this.i=new Map;this.aborted=!1;this.done=new Promise(function(c,d){b.h.addEventListener("complete",function(){c()});
b.h.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.h.error)});
b.h.addEventListener("abort",function(){var e=b.h.error;if(e)d(e);else if(!b.aborted){e=wp;for(var f=b.h.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(k===null)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.h.db.name,mode:b.h.mode});d(e)}})})}
function Up(a,b){var c=new Promise(function(d,e){try{b(a).then(function(f){d(f)}).catch(e)}catch(f){e(f),a.abort()}});
return Promise.all([c,a.done]).then(function(d){return y(d).next().value})}
Tp.prototype.abort=function(){this.h.abort();this.aborted=!0;throw new wp("EXPLICIT_ABORT");};
Tp.prototype.objectStore=function(a){a=this.h.objectStore(a);var b=this.i.get(a);b||(b=new Rp(a),this.i.set(a,b));return b};
function aq(a){this.h=a}
p=aq.prototype;p.count=function(a){return Lp(this.h.count(a))};
p.delete=function(a){return cq(this,{query:a},function(b){return b.delete().then(function(){return $p(b)})})};
p.get=function(a){return Lp(this.h.get(a))};
p.keyPath=function(){return this.h.keyPath};
p.unique=function(){return this.h.unique};
function cq(a,b,c){a=a.h.openCursor(b.query===void 0?null:b.query,b.direction===void 0?"next":b.direction);return bq(a).then(function(d){return Mp(d,c)})}
function dq(a,b){this.request=a;this.cursor=b}
function bq(a){return Lp(a).then(function(b){return b?new dq(a,b):null})}
function $p(a){a.cursor.continue(void 0);return bq(a.request)}
dq.prototype.delete=function(){return Lp(this.cursor.delete()).then(function(){})};
dq.prototype.getValue=function(){return this.cursor.value};
dq.prototype.update=function(a){return Lp(this.cursor.update(a))};function eq(a,b,c){return new Promise(function(d,e){function f(){r||(r=new Op(g.result,{closed:n}));return r}
var g=b!==void 0?self.indexedDB.open(a,b):self.indexedDB.open(a);var h=c.ee,k=c.blocking,l=c.xf,m=c.upgrade,n=c.closed,r;g.addEventListener("upgradeneeded",function(t){try{if(t.newVersion===null)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(g.transaction===null)throw Error("Invariant: transaction on IDbOpenDbRequest is null");t.dataLoss&&t.dataLoss!=="none"&&lp("IDB_DATA_CORRUPTED",{reason:t.dataLossMessage||"unknown reason",dbName:np(a)});var w=f(),x=new Tp(g.transaction);
m&&m(w,function(z){return t.oldVersion<z&&t.newVersion>=z},x);
x.done.catch(function(z){e(z)})}catch(z){e(z)}});
g.addEventListener("success",function(){var t=g.result;k&&t.addEventListener("versionchange",function(){k(f())});
t.addEventListener("close",function(){lp("IDB_UNEXPECTEDLY_CLOSED",{dbName:np(a),dbVersion:t.version});l&&l()});
d(f())});
g.addEventListener("error",function(){e(g.error)});
h&&g.addEventListener("blocked",function(){h()})})}
function fq(a,b,c){c=c===void 0?{}:c;return eq(a,b,c)}
function gq(a,b){b=b===void 0?{}:b;var c,d,e,f;return B(function(g){if(g.h==1)return wa(g,2),c=self.indexedDB.deleteDatabase(a),d=b,(e=d.ee)&&c.addEventListener("blocked",function(){e()}),g.yield(Kp(c),4);
if(g.h!=2)return xa(g,0);f=ya(g);throw Ap(f,a,"",-1);})}
;function hq(a,b){this.name=a;this.options=b;this.j=!0;this.u=this.o=0}
hq.prototype.i=function(a,b,c){c=c===void 0?{}:c;return fq(a,b,c)};
hq.prototype.delete=function(a){a=a===void 0?{}:a;return gq(this.name,a)};
function iq(a,b){return new wp("INCOMPATIBLE_DB_VERSION",{dbName:a.name,oldVersion:a.options.version,newVersion:b})}
function jq(a,b){if(!b)throw Bp("openWithToken",np(a.name));return a.open()}
hq.prototype.open=function(){function a(){var f,g,h,k,l,m,n,r,t,w;return B(function(x){switch(x.h){case 1:return g=(f=Error().stack)!=null?f:"",wa(x,2),x.yield(c.i(c.name,c.options.version,e),4);case 4:for(var z=h=x.i,G=c.options,H=[],S=y(Object.keys(G.Ib)),Z=S.next();!Z.done;Z=S.next()){Z=Z.value;var mb=G.Ib[Z],Sb=mb.af===void 0?Number.MAX_VALUE:mb.af;!(z.h.version>=mb.Pb)||z.h.version>=Sb||z.h.objectStoreNames.contains(Z)||H.push(Z)}k=H;if(k.length===0){x.B(5);break}l=Object.keys(c.options.Ib);
m=h.objectStoreNames();if(c.u<qn("ytidb_reopen_db_retries",0))return c.u++,h.close(),kp(new wp("DB_REOPENED_BY_MISSING_OBJECT_STORES",{dbName:c.name,expectedObjectStores:l,foundObjectStores:m})),x.return(a());if(!(c.o<qn("ytidb_remake_db_retries",1))){x.B(6);break}c.o++;return x.yield(c.delete(),7);case 7:return kp(new wp("DB_DELETED_BY_MISSING_OBJECT_STORES",{dbName:c.name,expectedObjectStores:l,foundObjectStores:m})),x.return(a());case 6:throw new xp(m,l);case 5:return x.return(h);case 2:n=ya(x);
if(n instanceof DOMException?n.name!=="VersionError":"DOMError"in self&&n instanceof DOMError?n.name!=="VersionError":!(n instanceof Object&&"message"in n)||n.message!=="An attempt was made to open a database using a lower version than the existing version."){x.B(8);break}return x.yield(c.i(c.name,void 0,Object.assign({},e,{upgrade:void 0})),9);case 9:r=x.i;t=r.h.version;if(c.options.version!==void 0&&t>c.options.version+1)throw r.close(),c.j=!1,iq(c,t);return x.return(r);case 8:throw b(),n instanceof
Error&&!T("ytidb_async_stack_killswitch")&&(n.stack=n.stack+"\n"+g.substring(g.indexOf("\n")+1)),Ap(n,c.name,"",(w=c.options.version)!=null?w:-1);}})}
function b(){c.h===d&&(c.h=void 0)}
var c=this;if(!this.j)throw iq(this);if(this.h)return this.h;var d,e={blocking:function(f){f.close()},
closed:b,xf:b,upgrade:this.options.upgrade};return this.h=d=a()};var kq=new hq("YtIdbMeta",{Ib:{databases:{Pb:1}},upgrade:function(a,b){b(1)&&Qp(a,"databases",{keyPath:"actualName"})}});
function lq(a,b){var c;return B(function(d){if(d.h==1)return d.yield(jq(kq,b),2);c=d.i;return d.return(Pp(c,["databases"],{ka:!0,mode:"readwrite"},function(e){var f=e.objectStore("databases");return f.get(a.actualName).then(function(g){if(g?a.actualName!==g.actualName||a.publicName!==g.publicName||a.userIdentifier!==g.userIdentifier:1)return Lp(f.h.put(a,void 0)).then(function(){})})}))})}
function mq(a,b){var c;return B(function(d){if(d.h==1)return a?d.yield(jq(kq,b),2):d.return();c=d.i;return d.return(c.delete("databases",a))})}
function nq(a,b){var c,d;return B(function(e){return e.h==1?(c=[],e.yield(jq(kq,b),2)):e.h!=3?(d=e.i,e.yield(Pp(d,["databases"],{ka:!0,mode:"readonly"},function(f){c.length=0;return Zp(f.objectStore("databases"),{},function(g){a(g.getValue())&&c.push(g.getValue());return $p(g)})}),3)):e.return(c)})}
function oq(a){return nq(function(b){return b.publicName==="LogsDatabaseV2"&&b.userIdentifier!==void 0},a)}
function pq(a,b,c){return nq(function(d){return c?d.userIdentifier!==void 0&&!a.includes(d.userIdentifier)&&c.includes(d.publicName):d.userIdentifier!==void 0&&!a.includes(d.userIdentifier)},b)}
function qq(a){var b,c;return B(function(d){if(d.h==1)return b=to("YtIdbMeta hasAnyMeta other"),d.yield(nq(function(e){return e.userIdentifier!==void 0&&e.userIdentifier!==b},a),2);
c=d.i;return d.return(c.length>0)})}
;var rq,sq=new function(){}(new function(){});
function tq(){var a,b,c,d;return B(function(e){switch(e.h){case 1:a=cp();if((b=a)==null?0:b.hasSucceededOnce)return e.return(!0);var f;if(f=op)f=/WebKit\/([0-9]+)/.exec(dd()),f=!!(f&&parseInt(f[1],10)>=600);f&&(f=/WebKit\/([0-9]+)/.exec(dd()),f=!(f&&parseInt(f[1],10)>=602));if(f||qd)return e.return(!1);try{if(c=self,!(c.indexedDB&&c.IDBIndex&&c.IDBKeyRange&&c.IDBObjectStore))return e.return(!1)}catch(g){return e.return(!1)}if(!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return e.return(!1);
wa(e,2);d={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0};return e.yield(lq(d,sq),4);case 4:return e.yield(mq("yt-idb-test-do-not-use",sq),5);case 5:return e.return(!0);case 2:return ya(e),e.return(!1)}})}
function uq(){if(rq!==void 0)return rq;fp=!0;return rq=tq().then(function(a){fp=!1;var b;if((b=bp())!=null&&b.h){var c;b={hasSucceededOnce:((c=cp())==null?void 0:c.hasSucceededOnce)||a};var d;(d=bp())==null||d.set("LAST_RESULT_ENTRY_KEY",b,2592E3,!0)}return a})}
function vq(){return F("ytglobal.idbToken_")||void 0}
function wq(){var a=vq();return a?Promise.resolve(a):uq().then(function(b){(b=b?sq:void 0)&&E("ytglobal.idbToken_",b);return b})}
;var xq=0;function yq(a,b){xq||(xq=ek.pa(function(){var c,d,e,f,g;return B(function(h){switch(h.h){case 1:return h.yield(wq(),2);case 2:c=h.i;if(!c)return h.return();d=!0;wa(h,3);return h.yield(pq(a,c,b),5);case 5:e=h.i;if(!e.length){d=!1;h.B(6);break}f=e[0];return h.yield(gq(f.actualName),7);case 7:return h.yield(mq(f.actualName,c),6);case 6:xa(h,4);break;case 3:g=ya(h),kp(g),d=!1;case 4:ek.qa(xq),xq=0,d&&yq(a,b),h.h=0}})}))}
function zq(){var a;return B(function(b){return b.h==1?b.yield(wq(),2):(a=b.i)?b.return(qq(a)):b.return(!1)})}
new Gj;function Aq(a){if(!so())throw a=new wp("AUTH_INVALID",{dbName:a}),kp(a),a;var b=to();return{actualName:a+":"+b,publicName:a,userIdentifier:b}}
function Bq(a,b,c,d){var e,f,g,h,k,l;return B(function(m){switch(m.h){case 1:return f=(e=Error().stack)!=null?e:"",m.yield(wq(),2);case 2:g=m.i;if(!g)throw h=Bp("openDbImpl",a,b),T("ytidb_async_stack_killswitch")||(h.stack=h.stack+"\n"+f.substring(f.indexOf("\n")+1)),kp(h),h;mp(a);k=c?{actualName:a,publicName:a,userIdentifier:void 0}:Aq(a);wa(m,3);return m.yield(lq(k,g),5);case 5:return m.yield(fq(k.actualName,b,d),6);case 6:return m.return(m.i);case 3:return l=ya(m),wa(m,7),m.yield(mq(k.actualName,
g),9);case 9:xa(m,8);break;case 7:ya(m);case 8:throw l;}})}
function Cq(a,b,c){c=c===void 0?{}:c;return Bq(a,b,!1,c)}
function Dq(a,b,c){c=c===void 0?{}:c;return Bq(a,b,!0,c)}
function Eq(a,b){b=b===void 0?{}:b;var c,d;return B(function(e){if(e.h==1)return e.yield(wq(),2);if(e.h!=3){c=e.i;if(!c)return e.return();mp(a);d=Aq(a);return e.yield(gq(d.actualName,b),3)}return e.yield(mq(d.actualName,c),0)})}
function Fq(a,b,c){a=a.map(function(d){return B(function(e){return e.h==1?e.yield(gq(d.actualName,b),2):e.yield(mq(d.actualName,c),0)})});
return Promise.all(a).then(function(){})}
function Gq(){var a=a===void 0?{}:a;var b,c;return B(function(d){if(d.h==1)return d.yield(wq(),2);if(d.h!=3){b=d.i;if(!b)return d.return();mp("LogsDatabaseV2");return d.yield(oq(b),3)}c=d.i;return d.yield(Fq(c,a,b),0)})}
function Hq(a,b){b=b===void 0?{}:b;var c;return B(function(d){if(d.h==1)return d.yield(wq(),2);if(d.h!=3){c=d.i;if(!c)return d.return();mp(a);return d.yield(gq(a,b),3)}return d.yield(mq(a,c),0)})}
;function Iq(a,b){hq.call(this,a,b);this.options=b;mp(a)}
v(Iq,hq);function Jq(a,b){var c;return function(){c||(c=new Iq(a,b));return c}}
Iq.prototype.i=function(a,b,c){c=c===void 0?{}:c;return(this.options.shared?Dq:Cq)(a,b,Object.assign({},c))};
Iq.prototype.delete=function(a){a=a===void 0?{}:a;return(this.options.shared?Hq:Eq)(this.name,a)};
function Kq(a,b){return Jq(a,b)}
;var Lq={},Mq=Kq("ytGcfConfig",{Ib:(Lq.coldConfigStore={Pb:1},Lq.hotConfigStore={Pb:1},Lq),shared:!1,upgrade:function(a,b){b(1)&&(Xp(Qp(a,"hotConfigStore",{keyPath:"key",autoIncrement:!0}),"hotTimestampIndex","timestamp"),Xp(Qp(a,"coldConfigStore",{keyPath:"key",autoIncrement:!0}),"coldTimestampIndex","timestamp"))},
version:1});function Nq(a){return jq(Mq(),a)}
function Oq(a,b,c){var d,e,f;return B(function(g){switch(g.h){case 1:return d={config:a,hashData:b,timestamp:V()},g.yield(Nq(c),2);case 2:return e=g.i,g.yield(e.clear("hotConfigStore"),3);case 3:return g.yield(Sp(e,"hotConfigStore",d),4);case 4:return f=g.i,g.return(f)}})}
function Pq(a,b,c,d){var e,f,g;return B(function(h){switch(h.h){case 1:return e={config:a,hashData:b,configData:c,timestamp:V()},h.yield(Nq(d),2);case 2:return f=h.i,h.yield(f.clear("coldConfigStore"),3);case 3:return h.yield(Sp(f,"coldConfigStore",e),4);case 4:return g=h.i,h.return(g)}})}
function Qq(a){var b,c;return B(function(d){return d.h==1?d.yield(Nq(a),2):d.h!=3?(b=d.i,c=void 0,d.yield(Pp(b,["coldConfigStore"],{mode:"readwrite",ka:!0},function(e){return cq(e.objectStore("coldConfigStore").index("coldTimestampIndex"),{direction:"prev"},function(f){c=f.getValue()})}),3)):d.return(c)})}
function Rq(a){var b,c;return B(function(d){return d.h==1?d.yield(Nq(a),2):d.h!=3?(b=d.i,c=void 0,d.yield(Pp(b,["hotConfigStore"],{mode:"readwrite",ka:!0},function(e){return cq(e.objectStore("hotConfigStore").index("hotTimestampIndex"),{direction:"prev"},function(f){c=f.getValue()})}),3)):d.return(c)})}
;function Sq(){I.call(this);this.i=[];this.h=[];var a=F("yt.gcf.config.hotUpdateCallbacks");a?(this.i=[].concat(A(a)),this.h=a):(this.h=[],E("yt.gcf.config.hotUpdateCallbacks",this.h))}
v(Sq,I);Sq.prototype.ba=function(){for(var a=y(this.i),b=a.next();!b.done;b=a.next()){var c=this.h;b=c.indexOf(b.value);b>=0&&c.splice(b,1)}this.i.length=0;I.prototype.ba.call(this)};function Tq(){this.h=0;this.i=new Sq}
function Uq(){var a;return(a=F("yt.gcf.config.hotConfigGroup"))!=null?a:R("RAW_HOT_CONFIG_GROUP")}
function Vq(a,b,c){var d,e,f;return B(function(g){switch(g.h){case 1:if(!T("start_client_gcf")){g.B(0);break}c&&(a.j=c,E("yt.gcf.config.hotConfigGroup",a.j||null));a.o(b);d=vq();if(!d){g.B(3);break}if(c){g.B(4);break}return g.yield(Rq(d),5);case 5:e=g.i,c=(f=e)==null?void 0:f.config;case 4:return g.yield(Oq(c,b,d),3);case 3:if(c)for(var h=c,k=y(a.i.h),l=k.next();!l.done;l=k.next())l=l.value,l(h);g.h=0}})}
function Wq(a,b,c){var d,e,f,g;return B(function(h){if(h.h==1){if(!T("start_client_gcf"))return h.B(0);a.coldHashData=b;E("yt.gcf.config.coldHashData",a.coldHashData||null);return(d=vq())?c?h.B(4):h.yield(Qq(d),5):h.B(0)}h.h!=4&&(e=h.i,c=(f=e)==null?void 0:f.config);if(!c)return h.B(0);g=c.configData;return h.yield(Pq(c,b,g,d),0)})}
function Xq(){if(!Tq.instance){var a=new Tq;Tq.instance=a}a=Tq.instance;var b=V()-a.h;if(!(a.h!==0&&b<qn("send_config_hash_timer"))){b=F("yt.gcf.config.coldConfigData");var c=F("yt.gcf.config.hotHashData"),d=F("yt.gcf.config.coldHashData");b&&c&&d&&(a.h=V());return{coldConfigData:b,hotHashData:c,coldHashData:d}}}
Tq.prototype.o=function(a){this.hotHashData=a;E("yt.gcf.config.hotHashData",this.hotHashData||null)};function Yq(){return"INNERTUBE_API_KEY"in Pm&&"INNERTUBE_API_VERSION"in Pm}
function Zq(){return{innertubeApiKey:R("INNERTUBE_API_KEY"),innertubeApiVersion:R("INNERTUBE_API_VERSION"),De:R("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),Bd:R("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),Lh:R("INNERTUBE_CONTEXT_CLIENT_NAME",1),innertubeContextClientVersion:R("INNERTUBE_CONTEXT_CLIENT_VERSION"),Fe:R("INNERTUBE_CONTEXT_HL"),Ee:R("INNERTUBE_CONTEXT_GL"),Ge:R("INNERTUBE_HOST_OVERRIDE")||"",He:!!R("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),Mh:!!R("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:R("SERIALIZED_CLIENT_CONFIG_DATA")}}
function $q(a){var b={client:{hl:a.Fe,gl:a.Ee,clientName:a.Bd,clientVersion:a.innertubeContextClientVersion,configInfo:a.De}};navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=D.devicePixelRatio;c&&c!=1&&(b.client.screenDensityFloat=String(c));c=R("EXPERIMENTS_TOKEN","");c!==""&&(b.client.experimentsToken=c);c=rn();c.length>0&&(b.request={internalExperimentFlags:c});c=a.Bd;if((c==="WEB"||c==="MWEB"||c===1||c===2)&&b){var d;b.client.mainAppWebInfo=(d=b.client.mainAppWebInfo)!=
null?d:{};b.client.mainAppWebInfo.webDisplayMode=Wn()}(d=F("yt.embedded_player.embed_url"))&&b&&(b.thirdParty={embedUrl:d});var e;if(T("web_log_memory_total_kbytes")&&((e=D.navigator)==null?0:e.deviceMemory)){var f;e=(f=D.navigator)==null?void 0:f.deviceMemory;b&&(b.client.memoryTotalKbytes=""+e*1E6)}a.appInstallData&&b&&(b.client.configInfo=b.client.configInfo||{},b.client.configInfo.appInstallData=a.appInstallData);(a=qo())&&b&&(b.client.connectionType=a);T("web_log_effective_connection_type")&&
(a=ro())&&b&&(b.client.effectiveConnectionType=a);T("start_client_gcf")&&(e=Xq())&&(a=e.coldConfigData,f=e.coldHashData,e=e.hotHashData,b&&(b.client.configInfo=b.client.configInfo||{},a&&(b.client.configInfo.coldConfigData=a),f&&(b.client.configInfo.coldHashData=f),e&&(b.client.configInfo.hotHashData=e)));R("DELEGATED_SESSION_ID")&&!T("pageid_as_header_web")&&(b.user={onBehalfOfUser:R("DELEGATED_SESSION_ID")});!T("fill_delegate_context_in_gel_killswitch")&&(a=R("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT"))&&
(b.user=Object.assign({},b.user,{serializedDelegationContext:a}));a=R("INNERTUBE_CONTEXT");var g;if(T("enable_persistent_device_token")&&(a==null?0:(g=a.client)==null?0:g.rolloutToken)){var h;b.client.rolloutToken=a==null?void 0:(h=a.client)==null?void 0:h.rolloutToken}g=Object;h=g.assign;a=b.client;f={};e=y(Object.entries(cn(R("DEVICE",""))));for(d=e.next();!d.done;d=e.next())c=y(d.value),d=c.next().value,c=c.next().value,d==="cbrand"?f.deviceMake=c:d==="cmodel"?f.deviceModel=c:d==="cbr"?f.browserName=
c:d==="cbrver"?f.browserVersion=c:d==="cos"?f.osName=c:d==="cosver"?f.osVersion=c:d==="cplatform"&&(f.platform=c);b.client=h.call(g,a,f);return b}
function ar(a,b,c){c=c===void 0?{}:c;var d={};R("EOM_VISITOR_DATA")?d={"X-Goog-EOM-Visitor-Id":R("EOM_VISITOR_DATA")}:d={"X-Goog-Visitor-Id":c.visitorData||R("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;b=c.authorization||R("AUTHORIZATION");b||(a?b="Bearer "+F("gapi.auth.getToken")().zh:(a=Zn(Yn()),T("pageid_as_header_web")||delete a["X-Goog-PageId"],d=Object.assign({},d,a)));b&&(d.Authorization=b);return d}
;var br=typeof TextEncoder!=="undefined"?new TextEncoder:null,cr=br?function(a){return br.encode(a)}:function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);
e<128?b[c++]=e:(e<2048?b[c++]=e>>6|192:((e&64512)==55296&&d+1<a.length&&(a.charCodeAt(d+1)&64512)==56320?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}a=new Uint8Array(b.length);for(c=0;c<a.length;c++)a[c]=b[c];return a};var dr={next:"wn_s",browse:"br_s",search:"sr_s",reel:"r_wrs",player:"ps_s"},er={next:"wn_r",browse:"br_r",search:"sr_r",reel:"r_wrr",player:"ps_r"};function fr(a,b){this.version=a;this.args=b}
fr.prototype.serialize=function(){return{version:this.version,args:this.args}};function gr(a,b){this.topic=a;this.h=b}
gr.prototype.toString=function(){return this.topic};var hr=F("ytPubsub2Pubsub2Instance")||new N;N.prototype.subscribe=N.prototype.subscribe;N.prototype.unsubscribeByKey=N.prototype.hc;N.prototype.publish=N.prototype.sb;N.prototype.clear=N.prototype.clear;E("ytPubsub2Pubsub2Instance",hr);var ir=F("ytPubsub2Pubsub2SubscribedKeys")||{};E("ytPubsub2Pubsub2SubscribedKeys",ir);var jr=F("ytPubsub2Pubsub2TopicToKeys")||{};E("ytPubsub2Pubsub2TopicToKeys",jr);var kr=F("ytPubsub2Pubsub2IsAsync")||{};E("ytPubsub2Pubsub2IsAsync",kr);
E("ytPubsub2Pubsub2SkipSubKey",null);function lr(a,b){var c=mr();c&&c.publish.call(c,a.toString(),a,b)}
function nr(a){var b=or,c=mr();if(!c)return 0;var d=c.subscribe(b.toString(),function(e,f){var g=F("ytPubsub2Pubsub2SkipSubKey");g&&g==d||(g=function(){if(ir[d])try{if(f&&b instanceof gr&&b!=e)try{var h=b.h,k=f;if(!k.args||!k.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!h.Td){var l=new h;h.Td=l.version}var m=h.Td}catch(n){}if(!m||k.version!=m)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{f=Reflect.construct(h,
ac(k.args))}catch(n){throw n.message="yt.pubsub2.Data.deserialize(): "+n.message,n;}}catch(n){throw n.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+b.toString()+": "+n.message,n;}a.call(window,f)}catch(n){Vm(n)}},kr[b.toString()]?F("yt.scheduler.instance")?ek.pa(g):nn(g,0):g())});
ir[d]=!0;jr[b.toString()]||(jr[b.toString()]=[]);jr[b.toString()].push(d);return d}
function pr(){var a=qr,b=nr(function(c){a.apply(void 0,arguments);rr(b)});
return b}
function rr(a){var b=mr();b&&(typeof a==="number"&&(a=[a]),Vb(a,function(c){b.unsubscribeByKey(c);delete ir[c]}))}
function mr(){return F("ytPubsub2Pubsub2Instance")}
;function sr(a,b,c){c=c===void 0?{sampleRate:.1}:c;Math.random()<Math.min(.02,c.sampleRate/100)&&lr("meta_logging_csi_event",{timerName:a,ii:b})}
;var tr=void 0,ur=void 0;function vr(){ur||(ur=mm(R("WORKER_SERIALIZATION_URL")));return ur||void 0}
function wr(){var a=vr();tr||a===void 0||(tr=new Worker(rb(a),void 0));return tr}
;var xr=qn("max_body_size_to_compress",5E5),yr=qn("min_body_size_to_compress",500),zr=!0,Ar=0,Br=0,Cr=qn("compression_performance_threshold_lr",250),Dr=qn("slow_compressions_before_abandon_count",4),Er=!1,Fr=new Map,Gr=1,Hr=!0;function Ir(){if(typeof Worker==="function"&&vr()&&!Er){var a=function(c){c=c.data;if(c.op==="gzippedGelBatch"){var d=Fr.get(c.key);d&&(Jr(c.gzippedBatch,d.latencyPayload,d.url,d.options,d.sendFn),Fr.delete(c.key))}},b=wr();
b&&(b.addEventListener("message",a),b.onerror=function(){Fr.clear()},Er=!0)}}
function Kr(a,b,c,d,e){e=e===void 0?!1:e;var f={startTime:V(),ticks:{},infos:{}};if(zr)try{var g=Lr(b);if(g!=null&&(g>xr||g<yr))d(a,c);else{if(T("gzip_gel_with_worker")&&(T("initial_gzip_use_main_thread")&&!Hr||!T("initial_gzip_use_main_thread"))){Er||Ir();var h=wr();if(h&&!e){Fr.set(Gr,{latencyPayload:f,url:a,options:c,sendFn:d});h.postMessage({op:"gelBatchToGzip",serializedBatch:b,key:Gr});Gr++;return}}var k=km(cr(b));Jr(k,f,a,c,d)}}catch(l){Wm(l),d(a,c)}else d(a,c)}
function Jr(a,b,c,d,e){Hr=!1;var f=V();b.ticks.gelc=f;Br++;T("disable_compression_due_to_performance_degredation")&&f-b.startTime>=Cr&&(Ar++,T("abandon_compression_after_N_slow_zips")?Br===qn("compression_disable_point")&&Ar>Dr&&(zr=!1):zr=!1);Mr(b);d.headers||(d.headers={});d.headers["Content-Encoding"]="gzip";d.postBody=a;d.postParams=void 0;e(c,d)}
function Nr(a){var b=b===void 0?!1:b;var c=c===void 0?!1:c;var d=V(),e={startTime:d,ticks:{},infos:{}},f=b?F("yt.logging.gzipForFetch",!1):!0;if(zr&&f){if(!a.body)return a;try{var g=c?a.body:typeof a.body==="string"?a.body:JSON.stringify(a.body);f=g;if(!c&&typeof g==="string"){var h=Lr(g);if(h!=null&&(h>xr||h<yr))return a;c=b?{level:1}:void 0;f=km(cr(g),c);var k=V();e.ticks.gelc=k;if(b){Br++;if((T("disable_compression_due_to_performance_degredation")||T("disable_compression_due_to_performance_degradation_lr"))&&
k-d>=Cr)if(Ar++,T("abandon_compression_after_N_slow_zips")||T("abandon_compression_after_N_slow_zips_lr")){b=Ar/Br;var l=Dr/qn("compression_disable_point");Br>0&&Br%qn("compression_disable_point")===0&&b>=l&&(zr=!1)}else zr=!1;Mr(e)}}a.headers=Object.assign({},{"Content-Encoding":"gzip"},a.headers||{});a.body=f;return a}catch(m){return Wm(m),a}}else return a}
function Lr(a){try{return(new Blob(a.split(""))).size}catch(b){return Wm(b),null}}
function Mr(a){T("gel_compression_csi_killswitch")||!T("log_gel_compression_latency")&&!T("log_gel_compression_latency_lr")||sr("gel_compression",a,{sampleRate:.1})}
;function Or(a){a=Object.assign({},a);delete a.Authorization;var b=tg();if(b){var c=new ik;c.update(R("INNERTUBE_API_KEY"));c.update(b);a.hash=zd(c.digest(),3)}return a}
;var Pr;function Qr(){Pr||(Pr=new ap("yt.innertube"));return Pr}
function Rr(a,b,c,d){if(d)return null;d=Qr().get("nextId",!0)||1;var e=Qr().get("requests",!0)||{};e[d]={method:a,request:b,authState:Or(c),requestTime:Math.round(V())};Qr().set("nextId",d+1,86400,!0);Qr().set("requests",e,86400,!0);return d}
function Sr(a){var b=Qr().get("requests",!0)||{};delete b[a];Qr().set("requests",b,86400,!0)}
function Tr(a){var b=Qr().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(Math.round(V())-d.requestTime<6E4)){var e=d.authState,f=Or(ar(!1));Ig(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(V())),Ur(a,d.method,e,{}));delete b[c]}}Qr().set("requests",b,86400,!0)}}
;function Vr(a){this.kc=this.h=!1;this.potentialEsfErrorCounter=this.i=0;this.handleError=function(){};
this.Ab=function(){};
this.now=Date.now;this.Tb=!1;var b;this.Rd=(b=a.Rd)!=null?b:100;var c;this.Md=(c=a.Md)!=null?c:1;var d;this.Kd=(d=a.Kd)!=null?d:2592E6;var e;this.Jd=(e=a.Jd)!=null?e:12E4;var f;this.Ld=(f=a.Ld)!=null?f:5E3;var g;this.V=(g=a.V)!=null?g:void 0;this.sc=!!a.sc;var h;this.oc=(h=a.oc)!=null?h:.1;var k;this.Ec=(k=a.Ec)!=null?k:10;a.handleError&&(this.handleError=a.handleError);a.Ab&&(this.Ab=a.Ab);a.Tb&&(this.Tb=a.Tb);a.kc&&(this.kc=a.kc);this.W=a.W;this.Ca=a.Ca;this.ga=a.ga;this.fa=a.fa;this.sendFn=a.sendFn;
this.cd=a.cd;this.Yc=a.Yc;Wr(this)&&(!this.W||this.W("networkless_logging"))&&Xr(this)}
function Xr(a){Wr(a)&&!a.Tb&&(a.h=!0,a.sc&&Math.random()<=a.oc&&a.ga.he(a.V),Yr(a),a.fa.ta()&&a.fc(),a.fa.listen(a.cd,a.fc.bind(a)),a.fa.listen(a.Yc,a.ud.bind(a)))}
p=Vr.prototype;p.writeThenSend=function(a,b){var c=this;b=b===void 0?{}:b;if(Wr(this)&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.ga.set(d,this.V).then(function(e){d.id=e;c.fa.ta()&&Zr(c,d)}).catch(function(e){Zr(c,d);
$r(c,e)})}else this.sendFn(a,b)};
p.sendThenWrite=function(a,b,c){var d=this;b=b===void 0?{}:b;if(Wr(this)&&this.h){var e={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.W&&this.W("nwl_skip_retry")&&(e.skipRetry=c);if(this.fa.ta()||this.W&&this.W("nwl_aggressive_send_then_write")&&!e.skipRetry){if(!e.skipRetry){var f=b.onError?b.onError:function(){};
b.onError=function(g,h){return B(function(k){if(k.h==1)return k.yield(d.ga.set(e,d.V).catch(function(l){$r(d,l)}),2);
f(g,h);k.h=0})}}this.sendFn(a,b,e.skipRetry)}else this.ga.set(e,this.V).catch(function(g){d.sendFn(a,b,e.skipRetry);
$r(d,g)})}else this.sendFn(a,b,this.W&&this.W("nwl_skip_retry")&&c)};
p.sendAndWrite=function(a,b){var c=this;b=b===void 0?{}:b;if(Wr(this)&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0},e=!1,f=b.onSuccess?b.onSuccess:function(){};
d.options.onSuccess=function(g,h){d.id!==void 0?c.ga.yb(d.id,c.V):e=!0;c.fa.mb&&c.W&&c.W("vss_network_hint")&&c.fa.mb(!0);f(g,h)};
this.sendFn(d.url,d.options,void 0,!0);this.ga.set(d,this.V).then(function(g){d.id=g;e&&c.ga.yb(d.id,c.V)}).catch(function(g){$r(c,g)})}else this.sendFn(a,b,void 0,!0)};
p.fc=function(){var a=this;if(!Wr(this))throw Error("IndexedDB is not supported: throttleSend");this.i||(this.i=this.Ca.pa(function(){var b;return B(function(c){if(c.h==1)return c.yield(a.ga.yd("NEW",a.V),2);if(c.h!=3)return b=c.i,b?c.yield(Zr(a,b),3):(a.ud(),c.return());a.i&&(a.i=0,a.fc());c.h=0})},this.Rd))};
p.ud=function(){this.Ca.qa(this.i);this.i=0};
function Zr(a,b){var c;return B(function(d){switch(d.h){case 1:if(!Wr(a))throw Error("IndexedDB is not supported: immediateSend");if(b.id===void 0){d.B(2);break}return d.yield(a.ga.Le(b.id,a.V),3);case 3:(c=d.i)||a.Ab(Error("The request cannot be found in the database."));case 2:if(as(a,b,a.Kd)){d.B(4);break}a.Ab(Error("Networkless Logging: Stored logs request expired age limit"));if(b.id===void 0){d.B(5);break}return d.yield(a.ga.yb(b.id,a.V),5);case 5:return d.return();case 4:b.skipRetry||(b=bs(a,
b));if(!b){d.B(0);break}if(!b.skipRetry||b.id===void 0){d.B(8);break}return d.yield(a.ga.yb(b.id,a.V),8);case 8:a.sendFn(b.url,b.options,!!b.skipRetry),d.h=0}})}
function bs(a,b){if(!Wr(a))throw Error("IndexedDB is not supported: updateRequestHandlers");var c=b.options.onError?b.options.onError:function(){};
b.options.onError=function(e,f){var g,h,k,l;return B(function(m){switch(m.h){case 1:g=cs(f);(h=ds(f))&&a.W&&a.W("web_enable_error_204")&&a.handleError(Error("Request failed due to compression"),b.url,f);if(!(a.W&&a.W("nwl_consider_error_code")&&g||a.W&&!a.W("nwl_consider_error_code")&&a.potentialEsfErrorCounter<=a.Ec)){m.B(2);break}if(!a.fa.Ic){m.B(3);break}return m.yield(a.fa.Ic(),3);case 3:if(a.fa.ta()){m.B(2);break}c(e,f);if(!a.W||!a.W("nwl_consider_error_code")||((k=b)==null?void 0:k.id)===void 0){m.B(6);
break}return m.yield(a.ga.dd(b.id,a.V,!1),6);case 6:return m.return();case 2:if(a.W&&a.W("nwl_consider_error_code")&&!g&&a.potentialEsfErrorCounter>a.Ec)return m.return();a.potentialEsfErrorCounter++;if(((l=b)==null?void 0:l.id)===void 0){m.B(8);break}return b.sendCount<a.Md?m.yield(a.ga.dd(b.id,a.V,!0,h?!1:void 0),12):m.yield(a.ga.yb(b.id,a.V),8);case 12:a.Ca.pa(function(){a.fa.ta()&&a.fc()},a.Ld);
case 8:c(e,f),m.h=0}})};
var d=b.options.onSuccess?b.options.onSuccess:function(){};
b.options.onSuccess=function(e,f){var g;return B(function(h){if(h.h==1)return((g=b)==null?void 0:g.id)===void 0?h.B(2):h.yield(a.ga.yb(b.id,a.V),2);a.fa.mb&&a.W&&a.W("vss_network_hint")&&a.fa.mb(!0);d(e,f);h.h=0})};
return b}
function as(a,b,c){b=b.timestamp;return a.now()-b>=c?!1:!0}
function Yr(a){if(!Wr(a))throw Error("IndexedDB is not supported: retryQueuedRequests");a.ga.yd("QUEUED",a.V).then(function(b){b&&!as(a,b,a.Jd)?a.Ca.pa(function(){return B(function(c){if(c.h==1)return b.id===void 0?c.B(2):c.yield(a.ga.dd(b.id,a.V),2);Yr(a);c.h=0})}):a.fa.ta()&&a.fc()})}
function $r(a,b){a.Wd&&!a.fa.ta()?a.Wd(b):a.handleError(b)}
function Wr(a){return!!a.V||a.kc}
function cs(a){var b;return(a=a==null?void 0:(b=a.error)==null?void 0:b.code)&&a>=400&&a<=599?!1:!0}
function ds(a){var b;a=a==null?void 0:(b=a.error)==null?void 0:b.code;return!(a!==400&&a!==415)}
;var es;
function gs(){if(es)return es();var a={};es=Kq("LogsDatabaseV2",{Ib:(a.LogsRequestsStore={Pb:2},a),shared:!1,upgrade:function(b,c,d){c(2)&&Qp(b,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0});c(3);c(5)&&(d=d.objectStore("LogsRequestsStore"),d.h.indexNames.contains("newRequest")&&d.h.deleteIndex("newRequest"),Xp(d,"newRequestV2",["status","interface","timestamp"]));c(7)&&b.h.objectStoreNames.contains("sapisid")&&b.h.deleteObjectStore("sapisid");c(9)&&b.h.objectStoreNames.contains("SWHealthLog")&&b.h.deleteObjectStore("SWHealthLog")},
version:9});return es()}
;function hs(a){return jq(gs(),a)}
function is(a,b){var c,d,e,f;return B(function(g){if(g.h==1)return c={startTime:V(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_WRITE"},ticks:{}},g.yield(hs(b),2);if(g.h!=3)return d=g.i,e=Object.assign({},a,{options:JSON.parse(JSON.stringify(a.options)),interface:R("INNERTUBE_CONTEXT_CLIENT_NAME",0)}),g.yield(Sp(d,"LogsRequestsStore",e),3);f=g.i;c.ticks.tc=V();js(c);return g.return(f)})}
function ks(a,b){var c,d,e,f,g,h,k,l;return B(function(m){if(m.h==1)return c={startTime:V(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_READ"},ticks:{}},m.yield(hs(b),2);if(m.h!=3)return d=m.i,e=R("INNERTUBE_CONTEXT_CLIENT_NAME",0),f=[a,e,0],g=[a,e,V()],h=IDBKeyRange.bound(f,g),k="prev",T("use_fifo_for_networkless")&&(k="next"),l=void 0,m.yield(Pp(d,["LogsRequestsStore"],{mode:"readwrite",ka:!0},function(n){return cq(n.objectStore("LogsRequestsStore").index("newRequestV2"),{query:h,direction:k},
function(r){r.getValue()&&(l=r.getValue(),a==="NEW"&&(l.status="QUEUED",r.update(l)))})}),3);
c.ticks.tc=V();js(c);return m.return(l)})}
function ls(a,b){var c;return B(function(d){if(d.h==1)return d.yield(hs(b),2);c=d.i;return d.return(Pp(c,["LogsRequestsStore"],{mode:"readwrite",ka:!0},function(e){var f=e.objectStore("LogsRequestsStore");return f.get(a).then(function(g){if(g)return g.status="QUEUED",Lp(f.h.put(g,void 0)).then(function(){return g})})}))})}
function ms(a,b,c,d){c=c===void 0?!0:c;var e;return B(function(f){if(f.h==1)return f.yield(hs(b),2);e=f.i;return f.return(Pp(e,["LogsRequestsStore"],{mode:"readwrite",ka:!0},function(g){var h=g.objectStore("LogsRequestsStore");return h.get(a).then(function(k){return k?(k.status="NEW",c&&(k.sendCount+=1),d!==void 0&&(k.options.compress=d),Lp(h.h.put(k,void 0)).then(function(){return k})):Fp.resolve(void 0)})}))})}
function ns(a,b){var c;return B(function(d){if(d.h==1)return d.yield(hs(b),2);c=d.i;return d.return(c.delete("LogsRequestsStore",a))})}
function ps(a){var b,c;return B(function(d){if(d.h==1)return d.yield(hs(a),2);b=d.i;c=V()-2592E6;return d.yield(Pp(b,["LogsRequestsStore"],{mode:"readwrite",ka:!0},function(e){return Zp(e.objectStore("LogsRequestsStore"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return $p(f)})})}),0)})}
function qs(){B(function(a){return a.yield(Gq(),0)})}
function js(a){T("nwl_csi_killswitch")||sr("networkless_performance",a,{sampleRate:1})}
;var rs={accountStateChangeSignedIn:23,accountStateChangeSignedOut:24,delayedEventMetricCaptured:11,latencyActionBaselined:6,latencyActionInfo:7,latencyActionTicked:5,offlineTransferStatusChanged:2,offlineImageDownload:335,playbackStartStateChanged:9,systemHealthCaptured:3,mangoOnboardingCompleted:10,mangoPushNotificationReceived:230,mangoUnforkDbMigrationError:121,mangoUnforkDbMigrationSummary:122,mangoUnforkDbMigrationPreunforkDbVersionNumber:133,mangoUnforkDbMigrationPhoneMetadata:134,mangoUnforkDbMigrationPhoneStorage:135,
mangoUnforkDbMigrationStep:142,mangoAsyncApiMigrationEvent:223,mangoDownloadVideoResult:224,mangoHomepageVideoCount:279,mangoHomeV3State:295,mangoImageClientCacheHitEvent:273,sdCardStatusChanged:98,framesDropped:12,thumbnailHovered:13,deviceRetentionInfoCaptured:14,thumbnailLoaded:15,backToAppEvent:318,streamingStatsCaptured:17,offlineVideoShared:19,appCrashed:20,youThere:21,offlineStateSnapshot:22,mdxSessionStarted:25,mdxSessionConnected:26,mdxSessionDisconnected:27,bedrockResourceConsumptionSnapshot:28,
nextGenWatchWatchSwiped:29,kidsAccountsSnapshot:30,zeroStepChannelCreated:31,tvhtml5SearchCompleted:32,offlineSharePairing:34,offlineShareUnlock:35,mdxRouteDistributionSnapshot:36,bedrockRepetitiveActionTimed:37,unpluggedDegradationInfo:229,uploadMp4HeaderMoved:38,uploadVideoTranscoded:39,uploadProcessorStarted:46,uploadProcessorEnded:47,uploadProcessorReady:94,uploadProcessorRequirementPending:95,uploadProcessorInterrupted:96,uploadFrontendEvent:241,assetPackDownloadStarted:41,assetPackDownloaded:42,
assetPackApplied:43,assetPackDeleted:44,appInstallAttributionEvent:459,playbackSessionStopped:45,adBlockerMessagingShown:48,distributionChannelCaptured:49,dataPlanCpidRequested:51,detailedNetworkTypeCaptured:52,sendStateUpdated:53,receiveStateUpdated:54,sendDebugStateUpdated:55,receiveDebugStateUpdated:56,kidsErrored:57,mdxMsnSessionStatsFinished:58,appSettingsCaptured:59,mdxWebSocketServerHttpError:60,mdxWebSocketServer:61,startupCrashesDetected:62,coldStartInfo:435,offlinePlaybackStarted:63,liveChatMessageSent:225,
liveChatUserPresent:434,liveChatBeingModerated:457,liveCreationCameraUpdated:64,liveCreationEncodingCaptured:65,liveCreationError:66,liveCreationHealthUpdated:67,liveCreationVideoEffectsCaptured:68,liveCreationStageOccured:75,liveCreationBroadcastScheduled:123,liveCreationArchiveReplacement:149,liveCreationCostreamingConnection:421,liveCreationStreamWebrtcStats:288,mdxSessionRecoveryStarted:69,mdxSessionRecoveryCompleted:70,mdxSessionRecoveryStopped:71,visualElementShown:72,visualElementHidden:73,
visualElementGestured:78,visualElementStateChanged:208,screenCreated:156,playbackAssociated:202,visualElementAttached:215,playbackContextEvent:214,cloudCastingPlaybackStarted:74,webPlayerApiCalled:76,tvhtml5AccountDialogOpened:79,foregroundHeartbeat:80,foregroundHeartbeatScreenAssociated:111,kidsOfflineSnapshot:81,mdxEncryptionSessionStatsFinished:82,playerRequestCompleted:83,liteSchedulerStatistics:84,mdxSignIn:85,spacecastMetadataLookupRequested:86,spacecastBatchLookupRequested:87,spacecastSummaryRequested:88,
spacecastPlayback:89,spacecastDiscovery:90,tvhtml5LaunchUrlComponentChanged:91,mdxBackgroundPlaybackRequestCompleted:92,mdxBrokenAdditionalDataDeviceDetected:93,tvhtml5LocalStorage:97,tvhtml5DeviceStorageStatus:147,autoCaptionsAvailable:99,playbackScrubbingEvent:339,flexyState:100,interfaceOrientationCaptured:101,mainAppBrowseFragmentCache:102,offlineCacheVerificationFailure:103,offlinePlaybackExceptionDigest:217,vrCopresenceStats:104,vrCopresenceSyncStats:130,vrCopresenceCommsStats:137,vrCopresencePartyStats:153,
vrCopresenceEmojiStats:213,vrCopresenceEvent:141,vrCopresenceFlowTransitEvent:160,vrCowatchPartyEvent:492,vrCowatchUserStartOrJoinEvent:504,vrPlaybackEvent:345,kidsAgeGateTracking:105,offlineDelayAllowedTracking:106,mainAppAutoOfflineState:107,videoAsThumbnailDownload:108,videoAsThumbnailPlayback:109,liteShowMore:110,renderingError:118,kidsProfilePinGateTracking:119,abrTrajectory:124,scrollEvent:125,streamzIncremented:126,kidsProfileSwitcherTracking:127,kidsProfileCreationTracking:129,buyFlowStarted:136,
mbsConnectionInitiated:138,mbsPlaybackInitiated:139,mbsLoadChildren:140,liteProfileFetcher:144,mdxRemoteTransaction:146,reelPlaybackError:148,reachabilityDetectionEvent:150,mobilePlaybackEvent:151,courtsidePlayerStateChanged:152,musicPersistentCacheChecked:154,musicPersistentCacheCleared:155,playbackInterrupted:157,playbackInterruptionResolved:158,fixFopFlow:159,anrDetection:161,backstagePostCreationFlowEnded:162,clientError:163,gamingAccountLinkStatusChanged:164,liteHousewarming:165,buyFlowEvent:167,
kidsParentalGateTracking:168,kidsSignedOutSettingsStatus:437,kidsSignedOutPauseHistoryFixStatus:438,tvhtml5WatchdogViolation:444,ypcUpgradeFlow:169,yongleStudy:170,ypcUpdateFlowStarted:171,ypcUpdateFlowCancelled:172,ypcUpdateFlowSucceeded:173,ypcUpdateFlowFailed:174,liteGrowthkitPromo:175,paymentFlowStarted:341,transactionFlowShowPaymentDialog:405,transactionFlowStarted:176,transactionFlowSecondaryDeviceStarted:222,transactionFlowSecondaryDeviceSignedOutStarted:383,transactionFlowCancelled:177,transactionFlowPaymentCallBackReceived:387,
transactionFlowPaymentSubmitted:460,transactionFlowPaymentSucceeded:329,transactionFlowSucceeded:178,transactionFlowFailed:179,transactionFlowPlayBillingConnectionStartEvent:428,transactionFlowSecondaryDeviceSuccess:458,transactionFlowErrorEvent:411,liteVideoQualityChanged:180,watchBreakEnablementSettingEvent:181,watchBreakFrequencySettingEvent:182,videoEffectsCameraPerformanceMetrics:183,adNotify:184,startupTelemetry:185,playbackOfflineFallbackUsed:186,outOfMemory:187,ypcPauseFlowStarted:188,ypcPauseFlowCancelled:189,
ypcPauseFlowSucceeded:190,ypcPauseFlowFailed:191,uploadFileSelected:192,ypcResumeFlowStarted:193,ypcResumeFlowCancelled:194,ypcResumeFlowSucceeded:195,ypcResumeFlowFailed:196,adsClientStateChange:197,ypcCancelFlowStarted:198,ypcCancelFlowCancelled:199,ypcCancelFlowSucceeded:200,ypcCancelFlowFailed:201,ypcCancelFlowGoToPaymentProcessor:402,ypcDeactivateFlowStarted:320,ypcRedeemFlowStarted:203,ypcRedeemFlowCancelled:204,ypcRedeemFlowSucceeded:205,ypcRedeemFlowFailed:206,ypcFamilyCreateFlowStarted:258,
ypcFamilyCreateFlowCancelled:259,ypcFamilyCreateFlowSucceeded:260,ypcFamilyCreateFlowFailed:261,ypcFamilyManageFlowStarted:262,ypcFamilyManageFlowCancelled:263,ypcFamilyManageFlowSucceeded:264,ypcFamilyManageFlowFailed:265,restoreContextEvent:207,embedsAdEvent:327,autoplayTriggered:209,clientDataErrorEvent:210,experimentalVssValidation:211,tvhtml5TriggeredEvent:212,tvhtml5FrameworksFieldTrialResult:216,tvhtml5FrameworksFieldTrialStart:220,musicOfflinePreferences:218,watchTimeSegment:219,appWidthLayoutError:221,
accountRegistryChange:226,userMentionAutoCompleteBoxEvent:227,downloadRecommendationEnablementSettingEvent:228,musicPlaybackContentModeChangeEvent:231,offlineDbOpenCompleted:232,kidsFlowEvent:233,kidsFlowCorpusSelectedEvent:234,videoEffectsEvent:235,unpluggedOpsEogAnalyticsEvent:236,playbackAudioRouteEvent:237,interactionLoggingDebugModeError:238,offlineYtbRefreshed:239,kidsFlowError:240,musicAutoplayOnLaunchAttempted:242,deviceContextActivityEvent:243,deviceContextEvent:244,templateResolutionException:245,
musicSideloadedPlaylistServiceCalled:246,embedsStorageAccessNotChecked:247,embedsHasStorageAccessResult:248,embedsItpPlayedOnReload:249,embedsRequestStorageAccessResult:250,embedsShouldRequestStorageAccessResult:251,embedsRequestStorageAccessState:256,embedsRequestStorageAccessFailedState:257,embedsItpWatchLaterResult:266,searchSuggestDecodingPayloadFailure:252,siriShortcutActivated:253,tvhtml5KeyboardPerformance:254,latencyActionSpan:255,elementsLog:267,ytbFileOpened:268,tfliteModelError:269,apiTest:270,
yongleUsbSetup:271,touStrikeInterstitialEvent:272,liteStreamToSave:274,appBundleClientEvent:275,ytbFileCreationFailed:276,adNotifyFailure:278,ytbTransferFailed:280,blockingRequestFailed:281,liteAccountSelector:282,liteAccountUiCallbacks:283,dummyPayload:284,browseResponseValidationEvent:285,entitiesError:286,musicIosBackgroundFetch:287,mdxNotificationEvent:289,layersValidationError:290,musicPwaInstalled:291,liteAccountCleanup:292,html5PlayerHealthEvent:293,watchRestoreAttempt:294,liteAccountSignIn:296,
notaireEvent:298,kidsVoiceSearchEvent:299,adNotifyFilled:300,delayedEventDropped:301,analyticsSearchEvent:302,systemDarkThemeOptOutEvent:303,flowEvent:304,networkConnectivityBaselineEvent:305,ytbFileImported:306,downloadStreamUrlExpired:307,directSignInEvent:308,lyricImpressionEvent:309,accessibilityStateEvent:310,tokenRefreshEvent:311,genericAttestationExecution:312,tvhtml5VideoSeek:313,unpluggedAutoPause:314,scrubbingEvent:315,bedtimeReminderEvent:317,tvhtml5UnexpectedRestart:319,tvhtml5StabilityTraceEvent:478,
tvhtml5OperationHealth:467,tvhtml5WatchKeyEvent:321,voiceLanguageChanged:322,tvhtml5LiveChatStatus:323,parentToolsCorpusSelectedEvent:324,offerAdsEnrollmentInitiated:325,networkQualityIntervalEvent:326,deviceStartupMetrics:328,heartbeatActionPlayerTransitioned:330,tvhtml5Lifecycle:331,heartbeatActionPlayerHalted:332,adaptiveInlineMutedSettingEvent:333,mainAppLibraryLoadingState:334,thirdPartyLogMonitoringEvent:336,appShellAssetLoadReport:337,tvhtml5AndroidAttestation:338,tvhtml5StartupSoundEvent:340,
iosBackgroundRefreshTask:342,iosBackgroundProcessingTask:343,sliEventBatch:344,postImpressionEvent:346,musicSideloadedPlaylistExport:347,idbUnexpectedlyClosed:348,voiceSearchEvent:349,mdxSessionCastEvent:350,idbQuotaExceeded:351,idbTransactionEnded:352,idbTransactionAborted:353,tvhtml5KeyboardLogging:354,idbIsSupportedCompleted:355,creatorStudioMobileEvent:356,idbDataCorrupted:357,parentToolsAppChosenEvent:358,webViewBottomSheetResized:359,activeStateControllerScrollPerformanceSummary:360,navigatorValidation:361,
mdxSessionHeartbeat:362,clientHintsPolyfillDiagnostics:363,clientHintsPolyfillEvent:364,proofOfOriginTokenError:365,kidsAddedAccountSummary:366,musicWearableDevice:367,ypcRefundFlowEvent:368,tvhtml5PlaybackMeasurementEvent:369,tvhtml5WatermarkMeasurementEvent:370,clientExpGcfPropagationEvent:371,mainAppReferrerIntent:372,leaderLockEnded:373,leaderLockAcquired:374,googleHatsEvent:375,persistentLensLaunchEvent:376,parentToolsChildWelcomeChosenEvent:378,browseThumbnailPreloadEvent:379,finalPayload:380,
mdxDialAdditionalDataUpdateEvent:381,webOrchestrationTaskLifecycleRecord:382,startupSignalEvent:384,accountError:385,gmsDeviceCheckEvent:386,accountSelectorEvent:388,accountUiCallbacks:389,mdxDialAdditionalDataProbeEvent:390,downloadsSearchIcingApiStats:391,downloadsSearchIndexUpdatedEvent:397,downloadsSearchIndexSnapshot:398,dataPushClientEvent:392,kidsCategorySelectedEvent:393,mdxDeviceManagementSnapshotEvent:394,prefetchRequested:395,prefetchableCommandExecuted:396,gelDebuggingEvent:399,webLinkTtsPlayEnd:400,
clipViewInvalid:401,persistentStorageStateChecked:403,cacheWipeoutEvent:404,playerEvent:410,sfvEffectPipelineStartedEvent:412,sfvEffectPipelinePausedEvent:429,sfvEffectPipelineEndedEvent:413,sfvEffectChosenEvent:414,sfvEffectLoadedEvent:415,sfvEffectUserInteractionEvent:465,sfvEffectFirstFrameProcessedLatencyEvent:416,sfvEffectAggregatedFramesProcessedLatencyEvent:417,sfvEffectAggregatedFramesDroppedEvent:418,sfvEffectPipelineErrorEvent:430,sfvEffectGraphFrozenEvent:419,sfvEffectGlThreadBlockedEvent:420,
mdeQosEvent:510,mdeVideoChangedEvent:442,mdePlayerPerformanceMetrics:472,mdeExporterEvent:497,genericClientExperimentEvent:423,homePreloadTaskScheduled:424,homePreloadTaskExecuted:425,homePreloadCacheHit:426,polymerPropertyChangedInObserver:427,applicationStarted:431,networkCronetRttBatch:432,networkCronetRttSummary:433,repeatChapterLoopEvent:436,seekCancellationEvent:462,lockModeTimeoutEvent:483,externalVideoShareToYoutubeAttempt:501,parentCodeEvent:502,offlineTransferStarted:4,musicOfflineMixtapePreferencesChanged:16,
mangoDailyNewVideosNotificationAttempt:40,mangoDailyNewVideosNotificationError:77,dtwsPlaybackStarted:112,dtwsTileFetchStarted:113,dtwsTileFetchCompleted:114,dtwsTileFetchStatusChanged:145,dtwsKeyframeDecoderBufferSent:115,dtwsTileUnderflowedOnNonkeyframe:116,dtwsBackfillFetchStatusChanged:143,dtwsBackfillUnderflowed:117,dtwsAdaptiveLevelChanged:128,blockingVisitorIdTimeout:277,liteSocial:18,mobileJsInvocation:297,biscottiBasedDetection:439,coWatchStateChange:440,embedsVideoDataDidChange:441,shortsFirst:443,
cruiseControlEvent:445,qoeClientLoggingContext:446,atvRecommendationJobExecuted:447,tvhtml5UserFeedback:448,producerProjectCreated:449,producerProjectOpened:450,producerProjectDeleted:451,producerProjectElementAdded:453,producerProjectElementRemoved:454,producerAppStateChange:509,producerProjectDiskInsufficientExportFailure:516,tvhtml5ShowClockEvent:455,deviceCapabilityCheckMetrics:456,youtubeClearcutEvent:461,offlineBrowseFallbackEvent:463,getCtvTokenEvent:464,startupDroppedFramesSummary:466,screenshotEvent:468,
miniAppPlayEvent:469,elementsDebugCounters:470,fontLoadEvent:471,webKillswitchReceived:473,webKillswitchExecuted:474,cameraOpenEvent:475,manualSmoothnessMeasurement:476,tvhtml5AppQualityEvent:477,polymerPropertyAccessEvent:479,miniAppSdkUsage:480,cobaltTelemetryEvent:481,crossDevicePlayback:482,channelCreatedWithObakeImage:484,channelEditedWithObakeImage:485,offlineDeleteEvent:486,crossDeviceNotificationTransfer:487,androidIntentEvent:488,unpluggedAmbientInterludesCounterfactualEvent:489,keyPlaysPlayback:490,
shortsCreationFallbackEvent:493,vssData:491,castMatch:494,miniAppPerformanceMetrics:495,userFeedbackEvent:496,kidsGuestSessionMismatch:498,musicSideloadedPlaylistMigrationEvent:499,sleepTimerSessionFinishEvent:500,watchEpPromoConflict:503,innertubeResponseCacheMetrics:505,miniAppAdEvent:506,dataPlanUpsellEvent:507,producerProjectRenamed:508,producerMediaSelectionEvent:511,embedsAutoplayStatusChanged:512,remoteConnectEvent:513,connectedSessionMisattributionEvent:514,producerProjectElementModified:515,
adsSeenClientLogging:517,producerEvent:518,tvhtml5CleanStart:519,deviceAccountMetricsEvent:520};var ss={},ts=Kq("ServiceWorkerLogsDatabase",{Ib:(ss.SWHealthLog={Pb:1},ss),shared:!0,upgrade:function(a,b){b(1)&&Xp(Qp(a,"SWHealthLog",{keyPath:"id",autoIncrement:!0}),"swHealthNewRequest",["interface","timestamp"])},
version:1});function us(a){return jq(ts(),a)}
function vs(a){var b,c;B(function(d){if(d.h==1)return d.yield(us(a),2);b=d.i;c=V()-2592E6;return d.yield(Pp(b,["SWHealthLog"],{mode:"readwrite",ka:!0},function(e){return Zp(e.objectStore("SWHealthLog"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return $p(f)})})}),0)})}
function ws(a){var b;return B(function(c){if(c.h==1)return c.yield(us(a),2);b=c.i;return c.yield(b.clear("SWHealthLog"),0)})}
;var xs={},ys=0;function zs(a){var b=b===void 0?{}:b;var c=new Image,d=""+ys++;xs[d]=c;c.onload=c.onerror=function(){delete xs[d]};
b.di&&(c.referrerPolicy="no-referrer");c.src=a}
;var As;function Bs(){As||(As=new ap("yt.offline"));return As}
function Cs(a){if(T("offline_error_handling")){var b=Bs().get("errors",!0)||{};b[a.message]={name:a.name,stack:a.stack};a.level&&(b[a.message].level=a.level);Bs().set("errors",b,2592E3,!0)}}
;function Ds(){this.h=new Map;this.i=!1}
function Es(){if(!Ds.instance){var a=F("yt.networkRequestMonitor.instance")||new Ds;E("yt.networkRequestMonitor.instance",a);Ds.instance=a}return Ds.instance}
Ds.prototype.requestComplete=function(a,b){b&&(this.i=!0);a=this.removeParams(a);this.h.get(a)||this.h.set(a,b)};
Ds.prototype.isEndpointCFR=function(a){a=this.removeParams(a);return(a=this.h.get(a))?!1:a===!1&&this.i?!0:null};
Ds.prototype.removeParams=function(a){return a.split("?")[0]};
Ds.prototype.removeParams=Ds.prototype.removeParams;Ds.prototype.isEndpointCFR=Ds.prototype.isEndpointCFR;Ds.prototype.requestComplete=Ds.prototype.requestComplete;Ds.getInstance=Es;function Fs(){mi.call(this);var a=this;this.j=!1;this.h=dk();this.h.listen("networkstatus-online",function(){if(a.j&&T("offline_error_handling")){var b=Bs().get("errors",!0);if(b){for(var c in b)if(b[c]){var d=new U(c,"sent via offline_errors");d.name=b[c].name;d.stack=b[c].stack;d.level=b[c].level;Vm(d)}Bs().set("errors",{},2592E3,!0)}}})}
v(Fs,mi);function Gs(){if(!Fs.instance){var a=F("yt.networkStatusManager.instance")||new Fs;E("yt.networkStatusManager.instance",a);Fs.instance=a}return Fs.instance}
p=Fs.prototype;p.ta=function(){return this.h.ta()};
p.mb=function(a){this.h.h=a};
p.Ae=function(){var a=window.navigator.onLine;return a===void 0?!0:a};
p.qe=function(){this.j=!0};
p.listen=function(a,b){return this.h.listen(a,b)};
p.Ic=function(a){a=bk(this.h,a);a.then(function(b){T("use_cfr_monitor")&&Es().requestComplete("generate_204",b)});
return a};
Fs.prototype.sendNetworkCheckRequest=Fs.prototype.Ic;Fs.prototype.listen=Fs.prototype.listen;Fs.prototype.enableErrorFlushing=Fs.prototype.qe;Fs.prototype.getWindowStatus=Fs.prototype.Ae;Fs.prototype.networkStatusHint=Fs.prototype.mb;Fs.prototype.isNetworkAvailable=Fs.prototype.ta;Fs.getInstance=Gs;function Hs(a){a=a===void 0?{}:a;mi.call(this);var b=this;this.h=this.u=0;this.j=Gs();var c=F("yt.networkStatusManager.instance.listen").bind(this.j);c&&(a.rateLimit?(this.rateLimit=a.rateLimit,c("networkstatus-online",function(){Is(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){Is(b,"publicytnetworkstatus-offline")})):(c("networkstatus-online",function(){ni(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){ni(b,"publicytnetworkstatus-offline")})))}
v(Hs,mi);Hs.prototype.ta=function(){var a=F("yt.networkStatusManager.instance.isNetworkAvailable");return a?a.bind(this.j)():!0};
Hs.prototype.mb=function(a){var b=F("yt.networkStatusManager.instance.networkStatusHint").bind(this.j);b&&b(a)};
Hs.prototype.Ic=function(a){var b=this,c;return B(function(d){c=F("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(b.j);return T("skip_network_check_if_cfr")&&Es().isEndpointCFR("generate_204")?d.return(new Promise(function(e){var f;b.mb(((f=window.navigator)==null?void 0:f.onLine)||!0);e(b.ta())})):c?d.return(c(a)):d.return(!0)})};
function Is(a,b){a.rateLimit?a.h?(ek.qa(a.u),a.u=ek.pa(function(){a.o!==b&&(ni(a,b),a.o=b,a.h=V())},a.rateLimit-(V()-a.h))):(ni(a,b),a.o=b,a.h=V()):ni(a,b)}
;var Js;function Ks(){var a=Vr.call;Js||(Js=new Hs({Rh:!0,Hh:!0}));a.call(Vr,this,{ga:{he:ps,yb:ns,yd:ks,Le:ls,dd:ms,set:is},fa:Js,handleError:function(b,c,d){var e,f=d==null?void 0:(e=d.error)==null?void 0:e.code;if(f===400||f===415){var g;b=new U(b.message,c,d==null?void 0:(g=d.error)==null?void 0:g.code);Wm(b,void 0,void 0,void 0,!0)}else Vm(b)},
Ab:Wm,sendFn:Ls,now:V,Wd:Cs,Ca:$o(),cd:"publicytnetworkstatus-online",Yc:"publicytnetworkstatus-offline",sc:!0,oc:.1,Ec:qn("potential_esf_error_limit",10),W:T,Tb:!(so()&&Ms())});this.j=new Gj;T("networkless_immediately_drop_all_requests")&&qs();Hq("LogsDatabaseV2")}
v(Ks,Vr);function Ns(){var a=F("yt.networklessRequestController.instance");a||(a=new Ks,E("yt.networklessRequestController.instance",a),T("networkless_logging")&&wq().then(function(b){a.V=b;Xr(a);a.j.resolve();a.sc&&Math.random()<=a.oc&&a.V&&vs(a.V);T("networkless_immediately_drop_sw_health_store")&&Os(a)}));
return a}
Ks.prototype.writeThenSend=function(a,b){b||(b={});b=Ps(a,b);so()||(this.h=!1);Vr.prototype.writeThenSend.call(this,a,b)};
Ks.prototype.sendThenWrite=function(a,b,c){b||(b={});b=Ps(a,b);so()||(this.h=!1);Vr.prototype.sendThenWrite.call(this,a,b,c)};
Ks.prototype.sendAndWrite=function(a,b){b||(b={});b=Ps(a,b);so()||(this.h=!1);Vr.prototype.sendAndWrite.call(this,a,b)};
Ks.prototype.awaitInitialization=function(){return this.j.promise};
function Os(a){var b;B(function(c){if(!a.V)throw b=Bp("clearSWHealthLogsDb"),b;return c.return(ws(a.V).catch(function(d){a.handleError(d)}))})}
function Ls(a,b,c,d){d=d===void 0?!1:d;b=T("web_fp_via_jspb")?Object.assign({},b):b;T("use_cfr_monitor")&&Qs(a,b);if(T("use_request_time_ms_header"))b.headers&&gn(a)&&(b.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(V())));else{var e;if((e=b.postParams)==null?0:e.requestTimeMs)b.postParams.requestTimeMs=Math.round(V())}if(c&&Object.keys(b).length===0){var f=f===void 0?"":f;var g=g===void 0?!1:g;var h=h===void 0?!1:h;if(a)if(f)vn(a,void 0,"POST",f,void 0);else if(R("USE_NET_AJAX_FOR_PING_TRANSPORT",
!1)||h)vn(a,void 0,"GET","",void 0,void 0,g,h);else{b:{try{c:{var k=new gb({url:a});if(db(k.h,cb)==="1")var l=null;else{var m=db(k.h,bb);if(m==="1"){var n=db(k.h,ab);if(n)try{l={version:3,oe:decodeURIComponent(n),de:eb(k.h,"act=1","ri=1",hb(k))};break c}catch(Z){}}l=m==="2"?{version:4,oe:eb(k.h,"dct=1","suid="+k.i,""),de:eb(k.h,"act=1","ri=1","suid="+k.i)}:null}}if(l){var r=qc(a),t;if(!(t=!r||!r.endsWith("/aclk"))){var w=a.search(yc),x=xc(a,0,"ri",w);if(x<0)var z=null;else{var G=a.indexOf("&",x);
if(G<0||G>w)G=w;z=lc(a.slice(x+3,G!==-1?G:0))}t=z!=="1"}var H=!t;break b}}catch(Z){}H=!1}if(H){b:{try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")){var S=!0;break b}}catch(Z){}S=!1}c=S?!0:!1}else c=!1;c||zs(a)}}else b.compress?b.postBody?(typeof b.postBody!=="string"&&(b.postBody=JSON.stringify(b.postBody)),Kr(a,b.postBody,b,zn,d)):Kr(a,JSON.stringify(b.postParams),b,yn,d):zn(a,b)}
function Ps(a,b){T("use_event_time_ms_header")&&gn(a)&&(b.headers||(b.headers={}),b.headers["X-Goog-Event-Time"]=JSON.stringify(Math.round(V())));return b}
function Qs(a,b){var c=b.onError?b.onError:function(){};
b.onError=function(e,f){Es().requestComplete(a,!1);c(e,f)};
var d=b.onSuccess?b.onSuccess:function(){};
b.onSuccess=function(e,f){Es().requestComplete(a,!0);d(e,f)}}
function Ms(){return pc(document.location.toString())!=="www.youtube-nocookie.com"}
;var Rs=!1,Ss=D.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:Rs};E("ytNetworklessLoggingInitializationOptions",Ss);function Xs(){var a;B(function(b){if(b.h==1)return b.yield(wq(),2);a=b.i;if(!a||!so()&&!T("nwl_init_require_datasync_id_killswitch")||!Ms())return b.B(0);Rs=!0;Ss.isNwlInitialized=Rs;return b.yield(Ns().awaitInitialization(),0)})}
;function Ys(a){var b=this;this.config_=null;a?this.config_=a:Yq()&&(this.config_=Zq());vo(function(){Tr(b)},5E3)}
Ys.prototype.isReady=function(){!this.config_&&Yq()&&(this.config_=Zq());return!!this.config_};
function Ur(a,b,c,d){function e(n){n=n===void 0?!1:n;var r;if(d.retry&&h!="www.youtube-nocookie.com"&&(n||T("skip_ls_gel_retry")||g.headers["Content-Type"]!=="application/json"||(r=Rr(b,c,l,k)),r)){var t=g.onSuccess,w=g.onFetchSuccess;g.onSuccess=function(G,H){Sr(r);t(G,H)};
c.onFetchSuccess=function(G,H){Sr(r);w(G,H)}}try{if(n&&d.retry&&!d.networklessOptions.bypassNetworkless)g.method="POST",d.networklessOptions.writeThenSend?Ns().writeThenSend(m,g):Ns().sendAndWrite(m,g);
else if(d.compress){var x=!d.networklessOptions.writeThenSend;if(g.postBody){var z=g.postBody;typeof z!=="string"&&(z=JSON.stringify(g.postBody));Kr(m,z,g,zn,x)}else Kr(m,JSON.stringify(g.postParams),g,yn,x)}else T("web_all_payloads_via_jspb")?zn(m,g):yn(m,g)}catch(G){if(G.name==="InvalidAccessError")r&&(Sr(r),r=0),Wm(Error("An extension is blocking network request."));else throw G;}r&&vo(function(){Tr(a)},5E3)}
!R("VISITOR_DATA")&&b!=="visitor_id"&&Math.random()<.01&&Wm(new U("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var f=new U("innertube xhrclient not ready",b,c,d);Vm(f);throw f;}var g={headers:d.headers||{},method:"POST",postParams:c,postBody:d.postBody,postBodyFormat:d.postBodyFormat||"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(n,r){if(d.onSuccess)d.onSuccess(r)},
onFetchSuccess:function(n){if(d.onSuccess)d.onSuccess(n)},
onError:function(n,r){if(d.onError)d.onError(r)},
onFetchError:function(n){if(d.onError)d.onError(n)},
timeout:d.timeout,withCredentials:!0,compress:d.compress};g.headers["Content-Type"]||(g.headers["Content-Type"]="application/json");var h="";(f=a.config_.Ge)&&(h=f);var k=a.config_.He||!1,l=ar(k,h,d);Object.assign(g.headers,l);g.headers.Authorization&&!h&&k&&(g.headers["x-origin"]=window.location.origin);var m=en(""+h+("/youtubei/"+a.config_.innertubeApiVersion+"/"+b),{alt:"json"});(F("ytNetworklessLoggingInitializationOptions")?Ss.isNwlInitialized:Rs)?uq().then(function(n){e(n)}):e(!1)}
;var Zs=0,$s=sd?"webkit":rd?"moz":pd?"ms":od?"o":"";E("ytDomDomGetNextId",F("ytDomDomGetNextId")||function(){return++Zs});var at={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function bt(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.rotation=this.clientY=this.clientX=0;this.scale=1;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in at||(this[b]=a[b]);this.scale=a.scale;this.rotation=a.rotation;var c=a.target||a.srcElement;c&&c.nodeType==3&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;
if(d)try{d=d.nodeName?d:null}catch(e){d=null}else this.type=="mouseover"?d=a.fromElement:this.type=="mouseout"&&(d=a.toElement);this.relatedTarget=d;this.clientX=a.clientX!=void 0?a.clientX:a.pageX;this.clientY=a.clientY!=void 0?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||(this.type=="keypress"?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.h=a.pageX;this.i=a.pageY}}catch(e){}}
function ct(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.h=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.i=a.clientY+b}}
bt.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
bt.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
bt.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var Eg=D.ytEventsEventsListeners||{};E("ytEventsEventsListeners",Eg);var dt=D.ytEventsEventsCounter||{count:0};E("ytEventsEventsCounter",dt);
function et(a,b,c,d){d=d===void 0?{}:d;a.addEventListener&&(b!="mouseenter"||"onmouseenter"in document?b!="mouseleave"||"onmouseenter"in document?b=="mousewheel"&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return Dg(function(e){var f=typeof e[4]==="boolean"&&e[4]==!!d,g=Na(e[4])&&Na(d)&&Ig(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
function ft(a,b,c,d){d=d===void 0?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=et(a,b,c,d);if(e)return e;e=++dt.count+"";var f=!(b!="mouseenter"&&b!="mouseleave"||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new bt(h);if(!Sg(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new bt(h);
h.currentTarget=a;return c.call(a,h)};
g=Um(g);a.addEventListener?(b=="mouseenter"&&f?b="mouseover":b=="mouseleave"&&f?b="mouseout":b=="mousewheel"&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),gt()||typeof d==="boolean"?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);Eg[e]=[a,b,c,g,d];return e}
function ht(a){a&&(typeof a=="string"&&(a=[a]),Vb(a,function(b){if(b in Eg){var c=Eg[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?gt()||typeof c==="boolean"?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete Eg[b]}}))}
var gt=Ci(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});function jt(a){this.G=a;this.h=null;this.o=0;this.A=null;this.u=0;this.i=[];for(a=0;a<4;a++)this.i.push(0);this.j=0;this.U=ft(window,"mousemove",Ua(this.Y,this));a=Ua(this.P,this);typeof a==="function"&&(a=Um(a));this.Z=window.setInterval(a,25)}
Za(jt,I);jt.prototype.Y=function(a){a.h===void 0&&ct(a);var b=a.h;a.i===void 0&&ct(a);this.h=new zg(b,a.i)};
jt.prototype.P=function(){if(this.h){var a=V();if(this.o!=0){var b=this.A,c=this.h,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.o);this.i[this.j]=Math.abs((d-this.u)/this.u)>.5?1:0;for(c=b=0;c<4;c++)b+=this.i[c]||0;b>=3&&this.G();this.u=d}this.o=a;this.A=this.h;this.j=(this.j+1)%4}};
jt.prototype.ba=function(){window.clearInterval(this.Z);ht(this.U)};var kt={};
function lt(a){var b=a===void 0?{}:a;a=b.Xe===void 0?!1:b.Xe;b=b.re===void 0?!0:b.re;if(F("_lact",window)==null){var c=parseInt(R("LACT"),10);c=isFinite(c)?Date.now()-Math.max(c,0):-1;E("_lact",c,window);E("_fact",c,window);c==-1&&mt();ft(document,"keydown",mt);ft(document,"keyup",mt);ft(document,"mousedown",mt);ft(document,"mouseup",mt);a?ft(window,"touchmove",function(){nt("touchmove",200)},{passive:!0}):(ft(window,"resize",function(){nt("resize",200)}),b&&ft(window,"scroll",function(){nt("scroll",200)}));
new jt(function(){nt("mouse",100)});
ft(document,"touchstart",mt,{passive:!0});ft(document,"touchend",mt,{passive:!0})}}
function nt(a,b){kt[a]||(kt[a]=!0,ek.pa(function(){mt();kt[a]=!1},b))}
function mt(){F("_lact",window)==null&&lt();var a=Date.now();E("_lact",a,window);F("_fact",window)==-1&&E("_fact",a,window);(a=F("ytglobal.ytUtilActivityCallback_"))&&a()}
function ot(){var a=F("_lact",window);return a==null?-1:Math.max(Date.now()-a,0)}
;var pt=D.ytPubsubPubsubInstance||new N,qt=D.ytPubsubPubsubSubscribedKeys||{},rt=D.ytPubsubPubsubTopicToKeys||{},st=D.ytPubsubPubsubIsSynchronous||{};function tt(a,b){var c=ut();if(c&&b){var d=c.subscribe(a,function(){function e(){qt[d]&&b.apply&&typeof b.apply=="function"&&b.apply(window,f)}
var f=arguments;try{st[a]?e():nn(e,0)}catch(g){Vm(g)}},void 0);
qt[d]=!0;rt[a]||(rt[a]=[]);rt[a].push(d);return d}return 0}
function vt(a){var b=ut();b&&(typeof a==="number"?a=[a]:typeof a==="string"&&(a=[parseInt(a,10)]),Vb(a,function(c){b.unsubscribeByKey(c);delete qt[c]}))}
function wt(a,b){var c=ut();c&&c.publish.apply(c,arguments)}
function xt(a){var b=ut();if(b)if(b.clear(a),a)zt(a);else for(var c in rt)zt(c)}
function ut(){return D.ytPubsubPubsubInstance}
function zt(a){rt[a]&&(a=rt[a],Vb(a,function(b){qt[b]&&delete qt[b]}),a.length=0)}
N.prototype.subscribe=N.prototype.subscribe;N.prototype.unsubscribeByKey=N.prototype.hc;N.prototype.publish=N.prototype.sb;N.prototype.clear=N.prototype.clear;E("ytPubsubPubsubInstance",pt);E("ytPubsubPubsubTopicToKeys",rt);E("ytPubsubPubsubIsSynchronous",st);E("ytPubsubPubsubSubscribedKeys",qt);var At=Symbol("injectionDeps");function Bt(a){this.name=a}
Bt.prototype.toString=function(){return"InjectionToken("+this.name+")"};
function Ct(a){this.key=a}
function Dt(a){return new Ct(a)}
function Et(){this.i=new Map;this.j=new Map;this.h=new Map}
function Ft(a,b){a.i.set(b.pb,b);var c=a.j.get(b.pb);if(c)try{c.ai(a.resolve(b.pb))}catch(d){c.Yh(d)}}
Et.prototype.resolve=function(a){return a instanceof Ct?Gt(this,a.key,[],!0):Gt(this,a,[])};
function Gt(a,b,c,d){d=d===void 0?!1:d;if(c.indexOf(b)>-1)throw Error("Deps cycle for: "+b);if(a.h.has(b))return a.h.get(b);if(!a.i.has(b)){if(d)return;throw Error("No provider for: "+b);}d=a.i.get(b);c.push(b);if(d.nd!==void 0)var e=d.nd;else if(d.Ef)e=d[At]?Ht(a,d[At],c):[],e=d.Ef.apply(d,A(e));else if(d.Kc){e=d.Kc;var f=e[At]?Ht(a,e[At],c):[];e=new (Function.prototype.bind.apply(e,[null].concat(A(f))))}else throw Error("Could not resolve providers for: "+b);c.pop();d.hi||a.h.set(b,e);return e}
function Ht(a,b,c){return b?b.map(function(d){return d instanceof Ct?Gt(a,d.key,c,!0):Gt(a,d,c)}):[]}
;var It;function Jt(){It||(It=new Et);return It}
;var Kt=window;function Lt(){var a,b;return"h5vcc"in Kt&&((a=Kt.h5vcc.traceEvent)==null?0:a.traceBegin)&&((b=Kt.h5vcc.traceEvent)==null?0:b.traceEnd)?1:"performance"in Kt&&Kt.performance.mark&&Kt.performance.measure?2:0}
function Mt(a){var b=Lt();switch(b){case 1:Kt.h5vcc.traceEvent.traceBegin("YTLR",a);break;case 2:Kt.performance.mark(a+"-start");break;case 0:break;default:Gb(b,"unknown trace type")}}
function Nt(a){var b=Lt();switch(b){case 1:Kt.h5vcc.traceEvent.traceEnd("YTLR",a);break;case 2:b=a+"-start";var c=a+"-end";Kt.performance.mark(c);Kt.performance.measure(a,b,c);break;case 0:break;default:Gb(b,"unknown trace type")}}
;var Ot=T("web_enable_lifecycle_monitoring")&&Lt()!==0,Pt=T("web_enable_lifecycle_monitoring");function Qt(a){var b,c;(c=(b=window).onerror)==null||c.call(b,a.message,"",0,0,a)}
;function Rt(a){var b=this;var c=c===void 0?0:c;var d=d===void 0?$o():d;this.j=c;this.scheduler=d;this.i=new Gj;this.h=a;for(a={jb:0};a.jb<this.h.length;a={Dc:void 0,jb:a.jb},a.jb++)a.Dc=this.h[a.jb],c=function(e){return function(){e.Dc.Sc();b.h[e.jb].Fc=!0;b.h.every(function(f){return f.Fc===!0})&&b.i.resolve()}}(a),d=this.getPriority(a.Dc),d=this.scheduler.Sa(c,d),this.h[a.jb]=Object.assign({},a.Dc,{Sc:c,
jobId:d})}
function St(a){var b=Array.from(a.h.keys()).sort(function(d,e){return a.getPriority(a.h[e])-a.getPriority(a.h[d])});
b=y(b);for(var c=b.next();!c.done;c=b.next())c=a.h[c.value],c.jobId===void 0||c.Fc||(a.scheduler.qa(c.jobId),a.scheduler.Sa(c.Sc,10))}
Rt.prototype.cancel=function(){for(var a=y(this.h),b=a.next();!b.done;b=a.next())b=b.value,b.jobId===void 0||b.Fc||this.scheduler.qa(b.jobId),b.Fc=!0;this.i.resolve()};
Rt.prototype.getPriority=function(a){var b;return(b=a.priority)!=null?b:this.j};function Tt(a){this.state=a;this.plugins=[];this.o=void 0;this.A={};Ot&&Mt(this.state)}
p=Tt.prototype;p.install=function(a){this.plugins.push(a);return this};
p.uninstall=function(){var a=this;C.apply(0,arguments).forEach(function(b){b=a.plugins.indexOf(b);b>-1&&a.plugins.splice(b,1)})};
p.transition=function(a,b){var c=this;Ot&&Nt(this.state);var d=this.transitions.find(function(f){return Array.isArray(f.from)?f.from.find(function(g){return g===c.state&&f.to===a}):f.from===c.state&&f.to===a});
if(d){this.j&&(St(this.j),this.j=void 0);Ut(this,a,b);this.state=a;Ot&&Mt(this.state);d=d.action.bind(this);var e=this.plugins.filter(function(f){return f[a]}).map(function(f){return f[a]});
d(Vt(this,e),b)}else throw Error("no transition specified from "+this.state+" to "+a);};
function Vt(a,b){var c=b.filter(function(e){return Wt(a,e)===10}),d=b.filter(function(e){return Wt(a,e)!==10});
return a.A.gi?function(){var e=C.apply(0,arguments);return B(function(f){if(f.h==1)return f.yield(a.df.apply(a,[c].concat(A(e))),2);a.Od.apply(a,[d].concat(A(e)));f.h=0})}:function(){var e=C.apply(0,arguments);
a.ef.apply(a,[c].concat(A(e)));a.Od.apply(a,[d].concat(A(e)))}}
p.ef=function(a){for(var b=C.apply(1,arguments),c=$o(),d=y(a),e=d.next(),f={};!e.done;f={Vb:void 0},e=d.next())f.Vb=e.value,c.Nb(function(g){return function(){Xt(g.Vb.name);Yt(function(){return g.Vb.callback.apply(g.Vb,A(b))});
Zt(g.Vb.name)}}(f))};
p.df=function(a){var b=C.apply(1,arguments),c,d,e,f,g;return B(function(h){h.h==1&&(c=$o(),d=y(a),e=d.next(),f={});if(h.h!=3){if(e.done)return h.B(0);f.Ya=e.value;f.jc=void 0;g=function(k){return function(){Xt(k.Ya.name);var l=Yt(function(){return k.Ya.callback.apply(k.Ya,A(b))});
re(l)?k.jc=T("web_lifecycle_error_handling_killswitch")?l.then(function(){Zt(k.Ya.name)}):l.then(function(){Zt(k.Ya.name)},function(m){Qt(m);
Zt(k.Ya.name)}):Zt(k.Ya.name)}}(f);
c.Nb(g);return f.jc?h.yield(f.jc,3):h.B(3)}f={Ya:void 0,jc:void 0};e=d.next();return h.B(2)})};
p.Od=function(a){var b=C.apply(1,arguments),c=this,d=a.map(function(e){return{Sc:function(){Xt(e.name);Yt(function(){return e.callback.apply(e,A(b))});
Zt(e.name)},
priority:Wt(c,e)}});
d.length&&(this.j=new Rt(d))};
function Wt(a,b){var c,d;return(d=(c=a.o)!=null?c:b.priority)!=null?d:0}
function Xt(a){Ot&&a&&Mt(a)}
function Zt(a){Ot&&a&&Nt(a)}
function Ut(a,b,c){Pt&&console.groupCollapsed&&console.groupEnd&&(console.groupCollapsed("["+a.constructor.name+"] '"+a.state+"' to '"+b+"'"),console.log("with message: ",c),console.groupEnd())}
da.Object.defineProperties(Tt.prototype,{currentState:{configurable:!0,enumerable:!0,get:function(){return this.state}}});
function Yt(a){if(T("web_lifecycle_error_handling_killswitch"))return a();try{return a()}catch(b){Qt(b)}}
;function $t(a){Tt.call(this,a===void 0?"none":a);this.h=null;this.o=10;this.transitions=[{from:"none",to:"application_navigating",action:this.i},{from:"application_navigating",to:"none",action:this.u},{from:"application_navigating",to:"application_navigating",action:function(){}},
{from:"none",to:"none",action:function(){}}]}
var au;v($t,Tt);$t.prototype.i=function(a,b){var c=this;this.h=vo(function(){c.currentState==="application_navigating"&&c.transition("none")},5E3);
a(b==null?void 0:b.event)};
$t.prototype.u=function(a,b){this.h&&(ek.qa(this.h),this.h=null);a(b==null?void 0:b.event)};
function bu(){au||(au=new $t);return au}
;var cu=[];E("yt.logging.transport.getScrapedGelPayloads",function(){return cu});function du(){this.store={};this.h={}}
du.prototype.storePayload=function(a,b){a=eu(a);this.store[a]?this.store[a].push(b):(this.h={},this.store[a]=[b]);T("more_accurate_gel_parser")&&(b=new CustomEvent("TRANSPORTING_NEW_EVENT"),window.dispatchEvent(b));return a};
du.prototype.smartExtractMatchingEntries=function(a){if(!a.keys.length)return[];for(var b=fu(this,a.keys.splice(0,1)[0]),c=[],d=0;d<b.length;d++)this.store[b[d]]&&a.sizeLimit&&(this.store[b[d]].length<=a.sizeLimit?(c.push.apply(c,A(this.store[b[d]])),delete this.store[b[d]]):c.push.apply(c,A(this.store[b[d]].splice(0,a.sizeLimit))));(a==null?0:a.sizeLimit)&&c.length<(a==null?void 0:a.sizeLimit)&&(a.sizeLimit-=c.length,c.push.apply(c,A(this.smartExtractMatchingEntries(a))));return c};
du.prototype.extractMatchingEntries=function(a){a=fu(this,a);for(var b=[],c=0;c<a.length;c++)this.store[a[c]]&&(b.push.apply(b,A(this.store[a[c]])),delete this.store[a[c]]);return b};
du.prototype.getSequenceCount=function(a){a=fu(this,a);for(var b=0,c=0;c<a.length;c++){var d=void 0;b+=((d=this.store[a[c]])==null?void 0:d.length)||0}return b};
function fu(a,b){var c=eu(b);if(a.h[c])return a.h[c];var d=Object.keys(a.store)||[];if(d.length<=1&&eu(b)===d[0])return d;for(var e=[],f=0;f<d.length;f++){var g=d[f].split("/");if(gu(b.auth,g[0])){var h=b.isJspb;gu(h===void 0?"undefined":h?"true":"false",g[1])&&gu(b.cttAuthInfo,g[2])&&(h=b.tier,h=h===void 0?"undefined":JSON.stringify(h),gu(h,g[3])&&e.push(d[f]))}}return a.h[c]=e}
function gu(a,b){return a===void 0||a==="undefined"?!0:a===b}
du.prototype.getSequenceCount=du.prototype.getSequenceCount;du.prototype.extractMatchingEntries=du.prototype.extractMatchingEntries;du.prototype.smartExtractMatchingEntries=du.prototype.smartExtractMatchingEntries;du.prototype.storePayload=du.prototype.storePayload;function eu(a){return[a.auth===void 0?"undefined":a.auth,a.isJspb===void 0?"undefined":a.isJspb,a.cttAuthInfo===void 0?"undefined":a.cttAuthInfo,a.tier===void 0?"undefined":a.tier].join("/")}
;function hu(a,b){if(a)return a[b.name]}
;var iu=qn("initial_gel_batch_timeout",2E3),ju=qn("gel_queue_timeout_max_ms",6E4),ku=qn("gel_min_batch_size",5),lu=void 0;function mu(){this.o=this.h=this.i=0;this.j=!1}
var nu=new mu,ou=new mu,pu=new mu,qu=new mu,ru,su=!0,tu=D.ytLoggingTransportTokensToCttTargetIds_||{};E("ytLoggingTransportTokensToCttTargetIds_",tu);var uu={};function vu(){var a=F("yt.logging.ims");a||(a=new du,E("yt.logging.ims",a));return a}
function wu(a,b){if(a.endpoint==="log_event"){xu(a);var c=yu(a),d=zu(a.payload)||"";a:{if(T("enable_web_tiered_gel")){var e=rs[d||""];var f,g,h,k=Jt().resolve(Dt(Tq))==null?void 0:(f=Uq())==null?void 0:(g=f.loggingHotConfig)==null?void 0:(h=g.eventLoggingConfig)==null?void 0:h.payloadPolicies;if(k)for(f=0;f<k.length;f++)if(k[f].payloadNumber===e){e=k[f];break a}}e=void 0}k=200;if(e){if(e.enabled===!1&&!T("web_payload_policy_disabled_killswitch"))return;k=Au(e.tier);if(k===400){Bu(a,b);return}}uu[c]=
!0;c={cttAuthInfo:c,isJspb:!1,tier:k};vu().storePayload(c,a.payload);Cu(b,c,d==="gelDebuggingEvent")}}
function Cu(a,b,c){function d(){Du({writeThenSend:!0},void 0,e,b.tier)}
var e=!1;e=e===void 0?!1:e;c=c===void 0?!1:c;a&&(lu=new a);a=qn("tvhtml5_logging_max_batch_ads_fork")||qn("tvhtml5_logging_max_batch")||qn("web_logging_max_batch")||100;var f=V(),g=Eu(e,b.tier),h=g.o;c&&(g.j=!0);c=0;b&&(c=vu().getSequenceCount(b));c>=1E3?d():c>=a?ru||(ru=Fu(function(){d();ru=void 0},0)):f-h>=10&&(Gu(e,b.tier),g.o=f)}
function Bu(a,b){if(a.endpoint==="log_event"){T("more_accurate_gel_parser")&&vu().storePayload({isJspb:!1},a.payload);xu(a);var c=yu(a),d=new Map;d.set(c,[a.payload]);var e=zu(a.payload)||"";b&&(lu=new b);return new Di(function(f,g){lu&&lu.isReady()?Hu(d,lu,f,g,{bypassNetworkless:!0},!0,e==="gelDebuggingEvent"):f()})}}
function yu(a){var b="";if(a.dangerousLogToVisitorSession)b="visitorOnlyApprovedKey";else if(a.cttAuthInfo){b=a.cttAuthInfo;var c={};b.videoId?c.videoId=b.videoId:b.playlistId&&(c.playlistId=b.playlistId);tu[a.cttAuthInfo.token]=c;b=a.cttAuthInfo.token}return b}
function Du(a,b,c,d){a=a===void 0?{}:a;c=c===void 0?!1:c;new Di(function(e,f){var g=Eu(c,d),h=g.j;g.j=!1;Iu(g.i);Iu(g.h);g.h=0;lu&&lu.isReady()?d===void 0&&T("enable_web_tiered_gel")?Ju(e,f,a,b,c,300,h):Ju(e,f,a,b,c,d,h):(Gu(c,d),e())})}
function Ju(a,b,c,d,e,f,g){var h=lu;c=c===void 0?{}:c;e=e===void 0?!1:e;f=f===void 0?200:f;g=g===void 0?!1:g;var k=new Map,l={isJspb:e,cttAuthInfo:d,tier:f};e={isJspb:e,cttAuthInfo:d};if(d!==void 0)f=T("enable_web_tiered_gel")?vu().smartExtractMatchingEntries({keys:[l,e],sizeLimit:1E3}):vu().extractMatchingEntries(e),k.set(d,f);else for(d=y(Object.keys(uu)),l=d.next();!l.done;l=d.next())l=l.value,e=T("enable_web_tiered_gel")?vu().smartExtractMatchingEntries({keys:[{isJspb:!1,cttAuthInfo:l,tier:f},
{isJspb:!1,cttAuthInfo:l}],sizeLimit:1E3}):vu().extractMatchingEntries({isJspb:!1,cttAuthInfo:l}),e.length>0&&k.set(l,e),(T("web_fp_via_jspb_and_json")&&c.writeThenSend||!T("web_fp_via_jspb_and_json"))&&delete uu[l];Hu(k,h,a,b,c,!1,g)}
function Gu(a,b){function c(){Du({writeThenSend:!0},void 0,a,b)}
a=a===void 0?!1:a;b=b===void 0?200:b;var d=Eu(a,b),e=d===qu||d===pu?5E3:ju;T("web_gel_timeout_cap")&&!d.h&&(e=Fu(function(){c()},e),d.h=e);
Iu(d.i);e=R("LOGGING_BATCH_TIMEOUT",qn("web_gel_debounce_ms",1E4));T("shorten_initial_gel_batch_timeout")&&su&&(e=iu);e=Fu(function(){qn("gel_min_batch_size")>0?vu().getSequenceCount({cttAuthInfo:void 0,isJspb:a,tier:b})>=ku&&c():c()},e);
d.i=e}
function Hu(a,b,c,d,e,f,g){e=e===void 0?{}:e;var h=Math.round(V()),k=a.size,l=(g===void 0?0:g)&&T("vss_through_gel_video_stats")?"video_stats":"log_event";a=y(a);var m=a.next();for(g={};!m.done;g={Xc:void 0,batchRequest:void 0,dangerousLogToVisitorSession:void 0,bd:void 0,Zc:void 0},m=a.next()){var n=y(m.value);m=n.next().value;n=n.next().value;g.batchRequest=Kg({context:$q(b.config_||Zq())});if(!Ma(n)&&!T("throw_err_when_logevent_malformed_killswitch")){d();break}g.batchRequest.events=n;(n=tu[m])&&
Ku(g.batchRequest,m,n);delete tu[m];g.dangerousLogToVisitorSession=m==="visitorOnlyApprovedKey";Lu(g.batchRequest,h,g.dangerousLogToVisitorSession);T("always_send_and_write")&&(e.writeThenSend=!1);g.bd=function(r){T("start_client_gcf")&&ek.pa(function(){return B(function(t){return t.yield(Mu(r),0)})});
k--;k||c()};
g.Xc=0;g.Zc=function(r){return function(){r.Xc++;if(e.bypassNetworkless&&r.Xc===1)try{Ur(b,l,r.batchRequest,Nu({writeThenSend:!0},r.dangerousLogToVisitorSession,r.bd,r.Zc,f)),su=!1}catch(t){Vm(t),d()}k--;k||c()}}(g);
try{Ur(b,l,g.batchRequest,Nu(e,g.dangerousLogToVisitorSession,g.bd,g.Zc,f)),su=!1}catch(r){Vm(r),d()}}}
function Nu(a,b,c,d,e){a={retry:!0,onSuccess:c,onError:d,networklessOptions:a,dangerousLogToVisitorSession:b,Ah:!!e,headers:{},postBodyFormat:"",postBody:"",compress:T("compress_gel")||T("compress_gel_lr")};Ou()&&(a.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(V())));return a}
function Lu(a,b,c){Ou()||(a.requestTimeMs=String(b));T("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=R("EVENT_ID"))&&((c=R("BATCH_CLIENT_COUNTER")||0)||(c=Math.floor(Math.random()*65535/2)),c++,c>65535&&(c=1),Qm("BATCH_CLIENT_COUNTER",c),a.serializedClientEventId={serializedEventId:b,clientCounter:String(c)})}
function Ku(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function xu(a){var b=pn("il_payload_scraping");b=(b!==void 0?String(b):"")==="enable_il_payload_scraping";if(!F("yt.logging.transport.enableScrapingForTest"))if(b)cu=[],E("yt.logging.transport.enableScrapingForTest",!0),E("yt.logging.transport.scrapedPayloadsForTesting",cu),E("yt.logging.transport.payloadToScrape","visualElementShown visualElementHidden visualElementAttached screenCreated visualElementGestured visualElementStateChanged".split(" ")),E("yt.logging.transport.getScrapedPayloadFromClientEventsFunction"),
E("yt.logging.transport.scrapeClientEvent",!0);else return;b=F("yt.logging.transport.scrapedPayloadsForTesting");var c=F("yt.logging.transport.payloadToScrape"),d=F("yt.logging.transport.scrapeClientEvent");if(c&&c.length>=1)for(var e=0;e<c.length;e++)if(a&&a.payload[c[e]])if(d)b.push(a.payload);else{var f=void 0;b.push(((f=a)==null?void 0:f.payload)[c[e]])}E("yt.logging.transport.scrapedPayloadsForTesting",b)}
function Ou(){return T("use_request_time_ms_header")||T("lr_use_request_time_ms_header")}
function Fu(a,b){return T("transport_use_scheduler")===!1?nn(a,b):T("logging_avoid_blocking_during_navigation")||T("lr_logging_avoid_blocking_during_navigation")?vo(function(){if(bu().currentState==="none")a();else{var c={};bu().install((c.none={callback:a},c))}},b):vo(a,b)}
function Iu(a){T("transport_use_scheduler")?ek.qa(a):window.clearTimeout(a)}
function Mu(a){var b,c,d,e,f,g,h,k,l,m;return B(function(n){return n.h==1?(d=(b=a)==null?void 0:(c=b.responseContext)==null?void 0:c.globalConfigGroup,e=hu(d,qm),g=(f=d)==null?void 0:f.hotHashData,h=hu(d,pm),l=(k=d)==null?void 0:k.coldHashData,(m=Jt().resolve(Dt(Tq)))?g?e?n.yield(Vq(m,g,e),2):n.yield(Vq(m,g),2):n.B(2):n.return()):l?h?n.yield(Wq(m,l,h),0):n.yield(Wq(m,l),0):n.B(0)})}
function Eu(a,b){b=b===void 0?200:b;return a?b===300?qu:ou:b===300?pu:nu}
function zu(a){a=Object.keys(a);a=y(a);for(var b=a.next();!b.done;b=a.next())if(b=b.value,rs[b])return b}
function Au(a){switch(a){case "DELAYED_EVENT_TIER_UNSPECIFIED":return 0;case "DELAYED_EVENT_TIER_DEFAULT":return 100;case "DELAYED_EVENT_TIER_DISPATCH_TO_EMPTY":return 200;case "DELAYED_EVENT_TIER_FAST":return 300;case "DELAYED_EVENT_TIER_IMMEDIATE":return 400;default:return 200}}
;var Pu=D.ytLoggingGelSequenceIdObj_||{};E("ytLoggingGelSequenceIdObj_",Pu);
function Qu(a,b,c,d){d=d===void 0?{}:d;var e={},f=Math.round(d.timestamp||V());e.eventTimeMs=f<Number.MAX_SAFE_INTEGER?f:0;e[a]=b;a=ot();e.context={lastActivityMs:String(d.timestamp||!isFinite(a)?-1:a)};d.sequenceGroup&&!T("web_gel_sequence_info_killswitch")&&(a=e.context,b=d.sequenceGroup,Pu[b]=b in Pu?Pu[b]+1:0,a.sequence={index:Pu[b],groupKey:b},d.endOfSequence&&delete Pu[d.sequenceGroup]);(d.sendIsolatedPayload?Bu:wu)({endpoint:"log_event",payload:e,cttAuthInfo:d.cttAuthInfo,dangerousLogToVisitorSession:d.dangerousLogToVisitorSession},
c)}
;function jp(a,b,c){c=c===void 0?{}:c;var d=Ys;R("ytLoggingEventsDefaultDisabled",!1)&&Ys===Ys&&(d=null);Qu(a,b,d,c)}
;var Ru=new Set,Su=0,Tu=0,Uu=0,Vu=[],Wu=[],Xu=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function Yu(){Vb(R("ERRORS")||[],function(a){Zu.apply(null,a)});
Qm("ERRORS",[])}
function ip(a){Zu(a)}
function $u(a){Zu(a,"WARNING")}
function av(a){a instanceof Error?Zu(a):(a=Na(a)?JSON.stringify(a):String(a),a=new U(a),a.name="RejectedPromiseError",$u(a))}
function bv(a,b,c,d,e,f){b=b===void 0?"Unknown file":b;c=c===void 0?0:c;var g=!1,h=Rm("log_window_onerror_fraction");if(h&&Math.random()<h)g=!0;else{h=document.getElementsByTagName("script");for(var k=0,l=h.length;k<l;k++)if(h[k].src.indexOf("/debug-")>0){g=!0;break}}if(g){g=!1;e?g=!0:(typeof a==="string"?h=a:ErrorEvent&&a instanceof ErrorEvent?(g=!0,h=a.message,b=a.filename,c=a.lineno,d=a.colno):(h="Unknown error",b="Unknown file",c=0),e=new U(h),e.name="UnhandledWindowError",e.message=h,e.fileName=
b,e.lineNumber=c,isNaN(d)?delete e.columnNumber:e.columnNumber=d);if(!T("wiz_enable_component_stack_propagation_killswitch")){a=e;var m;if((m=f)==null||!m.componentStack)if(m=a.ke)f||(f={}),f.componentStack=m}f&&cv(e,f);g?Zu(e):$u(e)}}
function Zu(a,b,c,d,e,f,g,h){f=f===void 0?{}:f;f.name=c||R("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||R("INNERTUBE_CONTEXT_CLIENT_VERSION");c=f;b=b===void 0?"ERROR":b;g=g===void 0?!1:g;b=b===void 0?"ERROR":b;g=g===void 0?!1:g;if(a&&(a.hasOwnProperty("level")&&a.level&&(b=a.level),T("console_log_js_exceptions")&&(d=[],d.push("Name: "+a.name),d.push("Message: "+a.message),a.hasOwnProperty("params")&&d.push("Error Params: "+JSON.stringify(a.params)),a.hasOwnProperty("args")&&d.push("Error args: "+
JSON.stringify(a.args)),d.push("File name: "+a.fileName),d.push("Stacktrace: "+a.stack),d=d.join("\n"),window.console.log(d,a)),!(Su>=5))){d=[];e=y(Wu);for(f=e.next();!f.done;f=e.next()){f=f.value;try{f()&&d.push(f())}catch(z){}}d=[].concat(A(Vu),A(d));var k=hc(a);e=k.message||"Unknown Error";f=k.name||"UnknownError";var l=k.stack||a.i||"Not available";if(l.startsWith(f+": "+e)){var m=l.split("\n");m.shift();l=m.join("\n")}m=k.lineNumber||"Not available";k=k.fileName||"Not available";var n=0;if(a.hasOwnProperty("args")&&
a.args&&a.args.length)for(var r=0;r<a.args.length&&!(n=Sn(a.args[r],"params."+r,c,n),n>=500);r++);else if(a.hasOwnProperty("params")&&a.params){var t=a.params;if(typeof a.params==="object")for(r in t){if(t[r]){var w="params."+r,x=Un(t[r]);c[w]=x;n+=w.length+x.length;if(n>500)break}}else c.params=Un(t)}if(d.length)for(r=0;r<d.length&&!(n=Sn(d[r],"params.context."+r,c,n),n>=500);r++);navigator.vendor&&!c.hasOwnProperty("vendor")&&(c["device.vendor"]=navigator.vendor);r={message:e,name:f,lineNumber:m,
fileName:k,stack:l,params:c,sampleWeight:1};c=Number(a.columnNumber);isNaN(c)||(r.lineNumber=r.lineNumber+":"+c);if(a.level==="IGNORED")a=0;else a:{a=Nn();c=y(a.Za);for(d=c.next();!d.done;d=c.next())if(d=d.value,r.message&&r.message.match(d.Th)){a=d.weight;break a}a=y(a.Ua);for(c=a.next();!c.done;c=a.next())if(c=c.value,c.callback(r)){a=c.weight;break a}a=1}r.sampleWeight=a;a=y(In);for(c=a.next();!c.done;c=a.next())if(c=c.value,c.Cc[r.name])for(e=y(c.Cc[r.name]),d=e.next();!d.done;d=e.next())if(f=
d.value,d=r.message.match(f.regexp)){r.params["params.error.original"]=d[0];e=f.groups;f={};for(m=0;m<e.length;m++)f[e[m]]=d[m+1],r.params["params.error."+e[m]]=d[m+1];r.message=c.Wc(f);break}r.params||(r.params={});a=Nn();r.params["params.errorServiceSignature"]="msg="+a.Za.length+"&cb="+a.Ua.length;r.params["params.serviceWorker"]="false";D.document&&D.document.querySelectorAll&&(r.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length));(new Ng(Og,"sample")).constructor!==
Ng&&(r.params["params.fconst"]="true");window.yterr&&typeof window.yterr==="function"&&window.yterr(r);if(r.sampleWeight!==0&&!Ru.has(r.message)){if(g&&T("web_enable_error_204"))dv(b===void 0?"ERROR":b,r);else{b=b===void 0?"ERROR":b;b==="ERROR"?(Pn.sb("handleError",r),T("record_app_crashed_web")&&Uu===0&&r.sampleWeight===1&&(Uu++,g={appCrashType:"APP_CRASH_TYPE_BREAKPAD"},T("report_client_error_with_app_crash_ks")||(g.systemHealth={crashData:{clientError:{logMessage:{message:r.message}}}}),jp("appCrashed",
g)),Tu++):b==="WARNING"&&Pn.sb("handleWarning",r);if(T("kevlar_gel_error_routing")){g=b;h=h===void 0?{}:h;b:{a=y(Xu);for(c=a.next();!c.done;c=a.next())if(pp(c.value.toLowerCase())){a=!0;break b}a=!1}if(a)h=void 0;else{c={stackTrace:r.stack};r.fileName&&(c.filename=r.fileName);a=r.lineNumber&&r.lineNumber.split?r.lineNumber.split(":"):[];a.length!==0&&(a.length!==1||isNaN(Number(a[0]))?a.length!==2||isNaN(Number(a[0]))||isNaN(Number(a[1]))||(c.lineNumber=Number(a[0]),c.columnNumber=Number(a[1])):c.lineNumber=
Number(a[0]));a={level:"ERROR_LEVEL_UNKNOWN",message:r.message,errorClassName:r.name,sampleWeight:r.sampleWeight};g==="ERROR"?a.level="ERROR_LEVEL_ERROR":g==="WARNING"&&(a.level="ERROR_LEVEL_WARNNING");c={isObfuscated:!0,browserStackInfo:c};h.pageUrl=window.location.href;h.kvPairs=[];R("FEXP_EXPERIMENTS")&&(h.experimentIds=R("FEXP_EXPERIMENTS"));d=R("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS");if(!Rm("web_disable_gel_stp_ecatcher_killswitch")&&d)for(e=y(Object.keys(d)),f=e.next();!f.done;f=e.next())f=
f.value,h.kvPairs.push({key:f,value:String(d[f])});if(d=r.params)for(e=y(Object.keys(d)),f=e.next();!f.done;f=e.next())f=f.value,h.kvPairs.push({key:"client."+f,value:String(d[f])});d=R("SERVER_NAME");e=R("SERVER_VERSION");d&&e&&(h.kvPairs.push({key:"server.name",value:d}),h.kvPairs.push({key:"server.version",value:e}));h={errorMetadata:h,stackTrace:c,logMessage:a}}h&&(jp("clientError",h),(g==="ERROR"||T("errors_flush_gel_always_killswitch"))&&Du(void 0,void 0,!1))}T("suppress_error_204_logging")||
dv(b,r)}try{Ru.add(r.message)}catch(z){}Su++}}}
function dv(a,b){var c=b.params||{};a={urlParams:{a:"logerror",t:"jserror",type:b.name,msg:b.message.substr(0,250),line:b.lineNumber,level:a,"client.name":c.name},postParams:{url:R("PAGE_NAME",window.location.href),file:b.fileName},method:"POST"};c.version&&(a["client.version"]=c.version);if(a.postParams){b.stack&&(a.postParams.stack=b.stack);b=y(Object.keys(c));for(var d=b.next();!d.done;d=b.next())d=d.value,a.postParams["client."+d]=c[d];if(c=R("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS"))for(b=y(Object.keys(c)),
d=b.next();!d.done;d=b.next())d=d.value,a.postParams[d]=c[d];(c=R("LAVA_VERSION"))&&(a.postParams["lava.version"]=c);c=R("SERVER_NAME");b=R("SERVER_VERSION");c&&b&&(a.postParams["server.name"]=c,a.postParams["server.version"]=b)}zn(R("ECATCHER_REPORT_HOST","")+"/error_204",a)}
function cv(a){var b=C.apply(1,arguments);a.args||(a.args=[]);Array.isArray(a.args)&&a.args.push.apply(a.args,A(b))}
;function ev(){this.register=new Map}
function fv(a){a=y(a.register.values());for(var b=a.next();!b.done;b=a.next())b.value.Xh("ABORTED")}
ev.prototype.clear=function(){fv(this);this.register.clear()};
var gv=new ev;var hv=Date.now().toString();
function iv(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;a<16;a++){b=Date.now();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(Math.random()*256)}if(hv)for(a=1,b=0;b<hv.length;b++)d[a%16]^=d[(a-1)%16]/4^hv.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&63));
return a.join("")}
;var jv,kv=D.ytLoggingDocDocumentNonce_;kv||(kv=iv(),E("ytLoggingDocDocumentNonce_",kv));jv=kv;function lv(a){this.h=a}
p=lv.prototype;p.getAsJson=function(){var a={};this.h.trackingParams!==void 0?a.trackingParams=this.h.trackingParams:(a.veType=this.h.veType,this.h.veCounter!==void 0&&(a.veCounter=this.h.veCounter),this.h.elementIndex!==void 0&&(a.elementIndex=this.h.elementIndex));this.h.dataElement!==void 0&&(a.dataElement=this.h.dataElement.getAsJson());this.h.youtubeData!==void 0&&(a.youtubeData=this.h.youtubeData);this.h.isCounterfactual&&(a.isCounterfactual=!0);return a};
p.getAsJspb=function(){var a=new sm;this.h.trackingParams!==void 0?a.setTrackingParams(this.h.trackingParams):(this.h.veType!==void 0&&Ef(a,2,Se(this.h.veType)),this.h.veCounter!==void 0&&Ef(a,6,Se(this.h.veCounter)),this.h.elementIndex!==void 0&&Ef(a,3,Se(this.h.elementIndex)),this.h.isCounterfactual&&Ef(a,5,Oe(!0)));if(this.h.dataElement!==void 0){var b=this.h.dataElement.getAsJspb();Of(a,sm,7,b)}this.h.youtubeData!==void 0&&Of(a,rm,8,this.h.jspbYoutubeData);return a};
p.toString=function(){return JSON.stringify(this.getAsJson())};
p.isClientVe=function(){return!this.h.trackingParams&&!!this.h.veType};
p.getLoggingDirectives=function(){return this.h.loggingDirectives};function mv(a){return R("client-screen-nonce-store",{})[a===void 0?0:a]}
function nv(a,b){b=b===void 0?0:b;var c=R("client-screen-nonce-store");c||(c={},Qm("client-screen-nonce-store",c));c[b]=a}
function ov(a){a=a===void 0?0:a;return a===0?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
function pv(a){return R(ov(a===void 0?0:a))}
E("yt_logging_screen.getRootVeType",pv);function qv(){var a=R("csn-to-ctt-auth-info");a||(a={},Qm("csn-to-ctt-auth-info",a));return a}
function rv(){return Object.values(R("client-screen-nonce-store",{})).filter(function(a){return a!==void 0})}
function sv(a){a=mv(a===void 0?0:a);if(!a&&!R("USE_CSN_FALLBACK",!0))return null;a||(a="UNDEFINED_CSN");return a?a:null}
E("yt_logging_screen.getCurrentCsn",sv);function tv(a,b,c){var d=qv();(c=sv(c))&&delete d[c];b&&(d[a]=b)}
function uv(a){return qv()[a]}
E("yt_logging_screen.getCttAuthInfo",uv);E("yt_logging_screen.setCurrentScreen",function(a,b,c,d){c=c===void 0?0:c;if(a!==mv(c)||b!==R(ov(c)))if(tv(a,d,c),nv(a,c),Qm(ov(c),b),b=function(){setTimeout(function(){a&&jp("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:jv,clientScreenNonce:a})},0)},"requestAnimationFrame"in window)try{window.requestAnimationFrame(b)}catch(e){b()}else b()});function vv(){var a=Jg(wv),b;return(new Di(function(c,d){a.onSuccess=function(e){mn(e)?c(new xv(e)):d(new yv("Request failed, status="+(e&&"status"in e?e.status:-1),"net.badstatus",e))};
a.onError=function(e){d(new yv("Unknown request error","net.unknown",e))};
a.onTimeout=function(e){d(new yv("Request timed out","net.timeout",e))};
b=zn("//googleads.g.doubleclick.net/pagead/id",a)})).Jc(function(c){if(c instanceof Mi){var d;
(d=b)==null||d.abort()}return Ii(c)})}
function yv(a,b,c){ib.call(this,a+", errorCode="+b);this.errorCode=b;this.xhr=c;this.name="PromiseAjaxError"}
v(yv,ib);function xv(a){this.xhr=a}
;function zv(){this.X=0;this.h=null}
zv.prototype.then=function(a,b,c){return this.X===1&&a?(a=a.call(c,this.h))&&typeof a.then==="function"?a:Av(a):this.X===2&&b?(a=b.call(c,this.h))&&typeof a.then==="function"?a:Bv(a):this};
zv.prototype.getValue=function(){return this.h};
zv.prototype.isRejected=function(){return this.X==2};
zv.prototype.$goog_Thenable=!0;function Bv(a){var b=new zv;a=a===void 0?null:a;b.X=2;b.h=a===void 0?null:a;return b}
function Av(a){var b=new zv;a=a===void 0?null:a;b.X=1;b.h=a===void 0?null:a;return b}
;function Cv(a){var b=R("INNERTUBE_HOST_OVERRIDE");b&&(a=String(b)+String(rc(a)));return a}
function Dv(a){var b={};T("json_condensed_response")&&(b.prettyPrint="false");return a=fn(a,b||{},!1)}
function Ev(a,b){var c=c===void 0?{}:c;a={method:b===void 0?"POST":b,mode:gn(a)?"same-origin":"cors",credentials:gn(a)?"same-origin":"include"};b={};for(var d=y(Object.keys(c)),e=d.next();!e.done;e=d.next())e=e.value,c[e]&&(b[e]=c[e]);Object.keys(b).length>0&&(a.headers=b);return a}
;function Fv(){return rg()||(ud||vd)&&pp("applewebkit")&&!pp("version")&&(!pp("safari")||pp("gsa/"))||td&&pp("version/")?!0:R("EOM_VISITOR_DATA")?!1:!0}
;function Gv(a){var b=a.docid||a.video_id||a.videoId||a.id;if(b)return b;b=a.raw_player_response;b||(a=a.player_response)&&(b=JSON.parse(a));return b&&b.videoDetails&&b.videoDetails.videoId||null}
;function Hv(a){a:{var b="EMBEDDED_PLAYER_MODE_UNKNOWN";window.location.hostname.includes("youtubeeducation.com")&&(b="EMBEDDED_PLAYER_MODE_PFL");var c=a.raw_embedded_player_response;if(!c&&(a=a.embedded_player_response))try{c=JSON.parse(a)}catch(e){break a}if(c)b:for(var d in xm)if(xm[d]==c.embeddedPlayerMode){b=xm[d];break b}}return b==="EMBEDDED_PLAYER_MODE_PFL"}
;function Iv(a){ib.call(this,a.message||a.description||a.name);this.isMissing=a instanceof Jv;this.isTimeout=a instanceof yv&&a.errorCode=="net.timeout";this.isCanceled=a instanceof Mi}
v(Iv,ib);Iv.prototype.name="BiscottiError";function Jv(){ib.call(this,"Biscotti ID is missing from server")}
v(Jv,ib);Jv.prototype.name="BiscottiMissingError";var wv={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},Kv=null;function Lv(){if(T("disable_biscotti_fetch_entirely_for_all_web_clients"))return Error("Biscotti id fetching has been disabled entirely.");if(!Fv())return Error("User has not consented - not fetching biscotti id.");var a=R("PLAYER_VARS",{});if(Hg(a)=="1")return Error("Biscotti ID is not available in private embed mode");if(Hv(a))return Error("Biscotti id fetching has been disabled for pfl.")}
function Jm(){var a=Lv();if(a!==void 0)return Ii(a);Kv||(Kv=vv().then(Mv).Jc(function(b){return Nv(2,b)}));
return Kv}
function Mv(a){a=a.xhr.responseText;if(a.lastIndexOf(")]}'",0)!=0)throw new Jv;a=JSON.parse(a.substr(4));if((a.type||1)>1)throw new Jv;a=a.id;Km(a);Kv=Av(a);Ov(18E5,2);return a}
function Nv(a,b){b=new Iv(b);Km("");Kv=Bv(b);a>0&&Ov(12E4,a-1);throw b;}
function Ov(a,b){nn(function(){vv().then(Mv,function(c){return Nv(b,c)}).Jc(Bi)},a)}
function Pv(){try{var a=F("yt.ads.biscotti.getId_");return a?a():Jm()}catch(b){return Ii(b)}}
;var Pb=oa(["data-"]);function Qv(a){a&&(a.dataset?a.dataset[Rv()]="true":Qb(a))}
function Sv(a){return a?a.dataset?a.dataset[Rv()]:a.getAttribute("data-loaded"):null}
var Tv={};function Rv(){return Tv.loaded||(Tv.loaded="loaded".replace(/\-([a-z])/g,function(a,b){return b.toUpperCase()}))}
;function Uv(a){a=a||{};var b={},c={};this.url=a.url||"";this.args=a.args||Jg(b);this.assets=a.assets||{};this.attrs=a.attrs||Jg(c);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
Uv.prototype.clone=function(){var a=new Uv,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];La(c)=="object"?a[b]=Jg(c):a[b]=c}return a};var Vv=["att/get"],Wv=["share/get_share_panel"],Xv=["share/get_web_player_share_panel"],Yv=["feedback"],Zv=["notification/modify_channel_preference"],$v=["browse/edit_playlist"],aw=["subscription/subscribe"],bw=["subscription/unsubscribe"];var cw=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};E("yt.msgs_",cw);function dw(a){Lm(cw,arguments)}
;function ew(a,b,c){fw(a,b,c===void 0?null:c)}
function gw(a){a=hw(a);var b=document.getElementById(a);b&&(xt(a),b.parentNode.removeChild(b))}
function iw(a,b){a&&b&&(a=""+Oa(b),(a=jw[a])&&vt(a))}
function fw(a,b,c){c=c===void 0?null:c;var d=hw(a),e=document.getElementById(d),f=e&&Sv(e),g=e&&!f;f?b&&b():(b&&(f=tt(d,b),b=""+Oa(b),jw[b]=f),g||(e=kw(a,d,function(){Sv(e)||(Qv(e),wt(d),nn(function(){xt(d)},0))},c)))}
function kw(a,b,c,d){d=d===void 0?null:d;var e=Qg("SCRIPT");e.id=b;e.onload=function(){c&&setTimeout(c,0)};
e.onreadystatechange=function(){switch(e.readyState){case "loaded":case "complete":e.onload()}};
d&&e.setAttribute("nonce",d);Nb(e,nm(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(e,a.firstChild);return e}
function hw(a){var b=document.createElement("a");Fb(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+mc(a)}
var jw={};function lw(a){var b=mw(a),c=document.getElementById(b),d=c&&Sv(c);d||c&&!d||(c=nw(a,b,function(){if(!Sv(c)){Qv(c);wt(b);var e=Va(xt,b);nn(e,0)}}))}
function nw(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=nm(a);Tb(d,a);(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function mw(a){var b=Qg("A");Fb(b,new xb(a));a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+mc(a)}
;function ow(a){var b=C.apply(1,arguments);if(!pw(a)||b.some(function(d){return!pw(d)}))throw Error("Only objects may be merged.");
b=y(b);for(var c=b.next();!c.done;c=b.next())qw(a,c.value)}
function qw(a,b){for(var c in b)if(pw(b[c])){if(c in a&&!pw(a[c]))throw Error("Cannot merge an object into a non-object.");c in a||(a[c]={});qw(a[c],b[c])}else if(rw(b[c])){if(c in a&&!rw(a[c]))throw Error("Cannot merge an array into a non-array.");c in a||(a[c]=[]);sw(a[c],b[c])}else a[c]=b[c];return a}
function sw(a,b){b=y(b);for(var c=b.next();!c.done;c=b.next())c=c.value,pw(c)?a.push(qw({},c)):rw(c)?a.push(sw([],c)):a.push(c);return a}
function pw(a){return typeof a==="object"&&!Array.isArray(a)}
function rw(a){return typeof a==="object"&&Array.isArray(a)}
;var tw="absolute_experiments app conditional_experiments debugcss debugjs expflag forced_experiments pbj pbjreload sbb spf spfreload sr_bns_address sttick".split(" ");
function uw(a,b){var c=c===void 0?!0:c;var d=R("VALID_SESSION_TEMPDATA_DOMAINS",[]),e=pc(window.location.href);e&&d.push(e);e=pc(a);if(Ub(d,e)>=0||!e&&a.lastIndexOf("/",0)==0)if(d=document.createElement("a"),Fb(d,a),a=d.href)if(a=rc(a),a=sc(a))if(c&&!b.csn&&(b.itct||b.ved)&&(b=Object.assign({csn:sv()},b)),f){var f=parseInt(f,10);isFinite(f)&&f>0&&vw(a,b,f)}else vw(a,b)}
function vw(a,b,c){a=ww(a);b=b?vc(b):"";c=c||5;Fv()&&ao(a,b,c)}
function ww(a){for(var b=y(tw),c=b.next();!c.done;c=b.next())a=Ac(a,c.value);return"ST-"+mc(a).toString(36)}
;function xw(a){fr.call(this,1,arguments);this.csn=a}
v(xw,fr);var or=new gr("screen-created",xw),yw=[],zw=0,Aw=new Map,Bw=new Map,Cw=new Map;
function Dw(a,b,c,d,e){e=e===void 0?!1:e;for(var f=Ew({cttAuthInfo:uv(b)||void 0},b),g=y(d),h=g.next();!h.done;h=g.next()){h=h.value;var k=h.getAsJson();(Fg(k)||!k.trackingParams&&!k.veType)&&$u(Error("Child VE logged with no data"));if(T("no_client_ve_attach_unless_shown")){var l=Fw(h,b);if(k.veType&&!Bw.has(l)&&!Cw.has(l)&&!e){if(!T("il_attach_cache_limit")||Aw.size<1E3){Aw.set(l,[a,b,c,h]);return}T("il_attach_cache_limit")&&Aw.size>1E3&&$u(new U("IL Attach cache exceeded limit"))}h=Fw(c,b);Aw.has(h)?
Gw(c,b):Cw.set(h,!0)}}d=d.filter(function(m){m.csn!==b?(m.csn=b,m=!0):m=!1;return m});
c={csn:b,parentVe:c.getAsJson(),childVes:Xb(d,function(m){return m.getAsJson()})};
b==="UNDEFINED_CSN"?Hw("visualElementAttached",f,c):a?Qu("visualElementAttached",c,a,f):jp("visualElementAttached",c,f)}
function Hw(a,b,c){yw.push({We:a,payload:c,Oh:void 0,options:b});zw||(zw=pr())}
function qr(a){if(yw){for(var b=y(yw),c=b.next();!c.done;c=b.next())c=c.value,c.payload&&(c.payload.csn=a.csn,jp(c.We,c.payload,c.options));yw.length=0}zw=0}
function Fw(a,b){return""+a.getAsJson().veType+a.getAsJson().veCounter+b}
function Gw(a,b){a=Fw(a,b);Aw.has(a)&&(b=Aw.get(a)||[],Dw(b[0],b[1],b[2],[b[3]],!0),Aw.delete(a))}
function Ew(a,b){T("log_sequence_info_on_gel_web")&&(a.sequenceGroup=b);return a}
;function Iw(){try{return!!self.localStorage}catch(a){return!1}}
;function Jw(a){a=a.match(/(.*)::.*::.*/);if(a!==null)return a[1]}
function Kw(a){if(Iw()){var b=Object.keys(window.localStorage);b=y(b);for(var c=b.next();!c.done;c=b.next()){c=c.value;var d=Jw(c);d===void 0||a.includes(d)||self.localStorage.removeItem(c)}}}
function Lw(){if(!Iw())return!1;var a=to(),b=Object.keys(window.localStorage);b=y(b);for(var c=b.next();!c.done;c=b.next())if(c=Jw(c.value),c!==void 0&&c!==a)return!0;return!1}
;function Mw(){var a=!1;try{a=!!window.sessionStorage.getItem("session_logininfo")}catch(b){a=!0}return(R("INNERTUBE_CLIENT_NAME")==="WEB"||R("INNERTUBE_CLIENT_NAME")==="WEB_CREATOR")&&a}
function Nw(){var a=a===void 0?!0:a;try{window.sessionStorage.removeItem("stickiness_reload");window.sessionStorage.removeItem("session_logininfo");Qm("LOGIN_INFO","");a&&window.sessionStorage.setItem("from_switch_account","1");a=!0;a=a===void 0?!1:a;var b,c=Ow;c||(c=document.querySelector("#persist_identity"));if(b=c){var d=b.src?(new URL(b.src)).origin:"*";if(a){var e;(e=b.contentWindow)==null||e.postMessage({action:"clear"},d)}else if(!(Number(window.sessionStorage.getItem("stickiness_reload"))>=
2)){var f=window.sessionStorage.getItem("session_logininfo");if(f){var g;(g=b.contentWindow)==null||g.postMessage({loginInfo:f},d)}}}}catch(h){}}
function Pw(a){if(a)if(a.startsWith("https://accounts.google.com/AddSession"))Nw();else if(a.startsWith("https://accounts.google.com/ServiceLogin"))Nw();else{var b;if(b=a.startsWith("https://myaccount.google.com"))b=(a instanceof Jk?a.clone():new Jk(a)).h.endsWith("/youtubeoptions");b&&Nw()}if(R("LOGGED_IN",!0)&&Mw()){b=R("VALID_SESSION_TEMPDATA_DOMAINS",[]);var c=pc(window.location.href);c&&b.push(c);c=pc(a);Ub(b,c)>=0||!c&&a.lastIndexOf("/",0)==0?(b=rc(a),(b=sc(b))?(b=ww(b),b=(b=bo(b)||null)?cn(b):
{}):b=null):b=null;b==null&&(b={});c=b;var d=void 0;Mw()?(d||(d=R("LOGIN_INFO")),d?(c.session_logininfo=d,c=!0):c=!1):c=!1;c&&uw(a,b)}}
var Ow=null;function Qw(a,b,c){b=b===void 0?{}:b;c=c===void 0?!1:c;var d=R("EVENT_ID");d&&(b.ei||(b.ei=d));b&&uw(a,b);if(c)return!1;Pw(a);var e=e===void 0?{}:e;var f=f===void 0?"":f;var g=g===void 0?window:g;b=wc(a,e);Pw(b);a=void 0;a=a===void 0?Bb:a;a:if(f=b+f,a=a===void 0?Bb:a,!(f instanceof xb)){for(b=0;b<a.length;++b)if(c=a[b],c instanceof zb&&c.Je(f)){f=new xb(f);break a}f=void 0}g=g.location;f=Db(f||yb);f!==void 0&&(g.href=f);return!0}
;function Rw(a){if(Hg(R("PLAYER_VARS",{}))!="1"){a&&Im();try{Pv().then(function(){},function(){}),nn(Rw,18E5)}catch(b){Vm(b)}}}
;var Sw=new Map([["dark","USER_INTERFACE_THEME_DARK"],["light","USER_INTERFACE_THEME_LIGHT"]]);function Tw(){var a=a===void 0?window.location.href:a;if(T("kevlar_disable_theme_param"))return null;var b=qc(a);if(T("enable_dark_theme_only_on_shorts")&&b!=null&&b.startsWith("/shorts/"))return"USER_INTERFACE_THEME_DARK";try{var c=dn(a).theme;return Sw.get(c)||null}catch(d){}return null}
;function Uw(){this.h={};if(this.i=eo()){var a=bo("CONSISTENCY");a&&Vw(this,{encryptedTokenJarContents:a})}}
Uw.prototype.handleResponse=function(a,b){if(!b)throw Error("request needs to be passed into ConsistencyService");var c,d;b=((c=b.Ga.context)==null?void 0:(d=c.request)==null?void 0:d.consistencyTokenJars)||[];var e;if(a=(e=a.responseContext)==null?void 0:e.consistencyTokenJar){e=y(b);for(c=e.next();!c.done;c=e.next())delete this.h[c.value.encryptedTokenJarContents];Vw(this,a)}};
function Vw(a,b){if(b.encryptedTokenJarContents&&(a.h[b.encryptedTokenJarContents]=b,typeof b.expirationSeconds==="string")){var c=Number(b.expirationSeconds);setTimeout(function(){delete a.h[b.encryptedTokenJarContents]},c*1E3);
a.i&&ao("CONSISTENCY",b.encryptedTokenJarContents,c,void 0,!0)}}
;var Ww=window.location.hostname.split(".").slice(-2).join(".");function Xw(){this.j=-1;var a=R("LOCATION_PLAYABILITY_TOKEN");R("INNERTUBE_CLIENT_NAME")==="TVHTML5"&&(this.h=Yw(this))&&(a=this.h.get("yt-location-playability-token"));a&&(this.locationPlayabilityToken=a,this.i=void 0)}
var Zw;function $w(){Zw=F("yt.clientLocationService.instance");Zw||(Zw=new Xw,E("yt.clientLocationService.instance",Zw));return Zw}
p=Xw.prototype;
p.setLocationOnInnerTubeContext=function(a){a.client||(a.client={});if(this.i)a.client.locationInfo||(a.client.locationInfo={}),a.client.locationInfo.latitudeE7=Math.floor(this.i.coords.latitude*1E7),a.client.locationInfo.longitudeE7=Math.floor(this.i.coords.longitude*1E7),a.client.locationInfo.horizontalAccuracyMeters=Math.round(this.i.coords.accuracy),a.client.locationInfo.forceLocationPlayabilityTokenRefresh=!0;else if(this.o||this.locationPlayabilityToken)a.client.locationPlayabilityToken=this.o||
this.locationPlayabilityToken};
p.handleResponse=function(a){var b;a=(b=a.responseContext)==null?void 0:b.locationPlayabilityToken;a!==void 0&&(this.locationPlayabilityToken=a,this.i=void 0,R("INNERTUBE_CLIENT_NAME")==="TVHTML5"?(this.h=Yw(this))&&this.h.set("yt-location-playability-token",a,15552E3):ao("YT_CL",JSON.stringify({loctok:a}),15552E3,Ww,!0))};
function Yw(a){return a.h===void 0?new ap("yt-client-location"):a.h}
p.clearLocationPlayabilityToken=function(a){a==="TVHTML5"?(this.h=Yw(this))&&this.h.remove("yt-location-playability-token"):co("YT_CL");this.o=void 0;this.j!==-1&&(clearTimeout(this.j),this.j=-1)};
p.getCurrentPositionFromGeolocation=function(){var a=this;if(!(navigator&&navigator.geolocation&&navigator.geolocation.getCurrentPosition))return Promise.reject(Error("Geolocation unsupported"));var b=!1,c=1E4;R("INNERTUBE_CLIENT_NAME")==="MWEB"&&(b=!0,c=15E3);return new Promise(function(d,e){navigator.geolocation.getCurrentPosition(function(f){a.i=f;d(f)},function(f){e(f)},{enableHighAccuracy:b,
maximumAge:0,timeout:c})})};
p.createUnpluggedLocationInfo=function(a){var b={};a=a.coords;if(a==null?0:a.latitude)b.latitudeE7=Math.floor(a.latitude*1E7);if(a==null?0:a.longitude)b.longitudeE7=Math.floor(a.longitude*1E7);if(a==null?0:a.accuracy)b.locationRadiusMeters=Math.round(a.accuracy);return b};
p.createLocationInfo=function(a){var b={};a=a.coords;if(a==null?0:a.latitude)b.latitudeE7=Math.floor(a.latitude*1E7);if(a==null?0:a.longitude)b.longitudeE7=Math.floor(a.longitude*1E7);return b};function ax(a,b,c){b=b===void 0?!1:b;c=c===void 0?!1:c;var d=R("INNERTUBE_CONTEXT");if(!d)return Zu(Error("Error: No InnerTubeContext shell provided in ytconfig.")),{};d=Kg(d);T("web_no_tracking_params_in_shell_killswitch")||delete d.clickTracking;d.client||(d.client={});var e=d.client;e.clientName==="MWEB"&&e.clientFormFactor!=="AUTOMOTIVE_FORM_FACTOR"&&(e.clientFormFactor=R("IS_TABLET")?"LARGE_FORM_FACTOR":"SMALL_FORM_FACTOR");e.screenWidthPoints=window.innerWidth;e.screenHeightPoints=window.innerHeight;
e.screenPixelDensity=Math.round(window.devicePixelRatio||1);e.screenDensityFloat=window.devicePixelRatio||1;e.utcOffsetMinutes=-Math.floor((new Date).getTimezoneOffset());var f=f===void 0?!1:f;io();var g="USER_INTERFACE_THEME_LIGHT";lo(165)?g="USER_INTERFACE_THEME_DARK":lo(174)?g="USER_INTERFACE_THEME_LIGHT":!T("kevlar_legacy_browsers")&&window.matchMedia&&window.matchMedia("(prefers-color-scheme)").matches&&window.matchMedia("(prefers-color-scheme: dark)").matches&&(g="USER_INTERFACE_THEME_DARK");
f=f?g:Tw()||g;e.userInterfaceTheme=f;if(!b){if(f=qo())e.connectionType=f;T("web_log_effective_connection_type")&&(f=ro())&&(d.client.effectiveConnectionType=f)}var h;if(T("web_log_memory_total_kbytes")&&((h=D.navigator)==null?0:h.deviceMemory)){var k;h=(k=D.navigator)==null?void 0:k.deviceMemory;d.client.memoryTotalKbytes=""+h*1E6}T("web_gcf_hashes_innertube")&&(f=Xq())&&(k=f.coldConfigData,h=f.coldHashData,f=f.hotHashData,d.client.configInfo=d.client.configInfo||{},k&&(d.client.configInfo.coldConfigData=
k),h&&(d.client.configInfo.coldHashData=h),f&&(d.client.configInfo.hotHashData=f));k=dn(D.location.href);!T("web_populate_internal_geo_killswitch")&&k.internalcountrycode&&(e.internalGeo=k.internalcountrycode);e.clientName==="MWEB"||e.clientName==="WEB"?(e.mainAppWebInfo={graftUrl:D.location.href},T("kevlar_woffle")&&Vn.instance&&(k=Vn.instance,e.mainAppWebInfo.pwaInstallabilityStatus=!k.h&&k.i?"PWA_INSTALLABILITY_STATUS_CAN_BE_INSTALLED":"PWA_INSTALLABILITY_STATUS_UNKNOWN"),e.mainAppWebInfo.webDisplayMode=
Wn(),e.mainAppWebInfo.isWebNativeShareAvailable=navigator&&navigator.share!==void 0):e.clientName==="TVHTML5"&&(!T("web_lr_app_quality_killswitch")&&(k=R("LIVING_ROOM_APP_QUALITY"))&&(e.tvAppInfo=Object.assign(e.tvAppInfo||{},{appQuality:k})),k=R("LIVING_ROOM_CERTIFICATION_SCOPE"))&&(e.tvAppInfo=Object.assign(e.tvAppInfo||{},{certificationScope:k}));if(!T("web_populate_time_zone_itc_killswitch")){a:{if(typeof Intl!=="undefined")try{var l=(new Intl.DateTimeFormat).resolvedOptions().timeZone;break a}catch(Z){}l=
void 0}l&&(e.timeZone=l)}(l=R("EXPERIMENTS_TOKEN",""))?e.experimentsToken=l:delete e.experimentsToken;l=rn();Uw.instance||(Uw.instance=new Uw);d.request=Object.assign({},d.request,{internalExperimentFlags:l,consistencyTokenJars:Cg(Uw.instance.h)});!T("web_prequest_context_killswitch")&&(l=R("INNERTUBE_CONTEXT_PREQUEST_CONTEXT"))&&(d.request.externalPrequestContext=l);e=io();l=lo(58);e=e.get("gsml","");d.user=Object.assign({},d.user);l&&(d.user.enableSafetyMode=l);e&&(d.user.lockedSafetyMode=!0);T("warm_op_csn_cleanup")?
c&&(b=sv())&&(d.clientScreenNonce=b):!b&&(b=sv())&&(d.clientScreenNonce=b);a&&(d.clickTracking={clickTrackingParams:a});if(a=F("yt.mdx.remote.remoteClient_"))d.remoteClient=a;$w().setLocationOnInnerTubeContext(d);try{var m=hn(),n=m.bid;delete m.bid;d.adSignalsInfo={params:[],bid:n};for(var r=y(Object.entries(m)),t=r.next();!t.done;t=r.next()){var w=y(t.value),x=w.next().value,z=w.next().value;m=x;n=z;a=void 0;(a=d.adSignalsInfo.params)==null||a.push({key:m,value:""+n})}var G,H;if(((G=d.client)==null?
void 0:G.clientName)==="TVHTML5"||((H=d.client)==null?void 0:H.clientName)==="TVHTML5_UNPLUGGED"){var S=R("INNERTUBE_CONTEXT");S.adSignalsInfo&&(d.adSignalsInfo.advertisingId=S.adSignalsInfo.advertisingId,d.adSignalsInfo.advertisingIdSignalType="DEVICE_ID_TYPE_CONNECTED_TV_IFA",d.adSignalsInfo.limitAdTracking=S.adSignalsInfo.limitAdTracking)}}catch(Z){Zu(Z)}return d}
;function bx(a){var b={"Content-Type":"application/json"};R("EOM_VISITOR_DATA")?b["X-Goog-EOM-Visitor-Id"]=R("EOM_VISITOR_DATA"):R("VISITOR_DATA")&&(b["X-Goog-Visitor-Id"]=R("VISITOR_DATA"));b["X-Youtube-Bootstrap-Logged-In"]=R("LOGGED_IN",!1);R("DEBUG_SETTINGS_METADATA")&&(b["X-Debug-Settings-Metadata"]=R("DEBUG_SETTINGS_METADATA"));a!=="cors"&&((a=R("INNERTUBE_CONTEXT_CLIENT_NAME"))&&(b["X-Youtube-Client-Name"]=a),(a=R("INNERTUBE_CONTEXT_CLIENT_VERSION"))&&(b["X-Youtube-Client-Version"]=a),(a=R("CHROME_CONNECTED_HEADER"))&&
(b["X-Youtube-Chrome-Connected"]=a),(a=R("DOMAIN_ADMIN_STATE"))&&(b["X-Youtube-Domain-Admin-State"]=a),R("ENABLE_LAVA_HEADER_ON_IT_EXPANSION")&&(a=R("SERIALIZED_LAVA_DEVICE_CONTEXT"))&&(b["X-YouTube-Lava-Device-Context"]=a));return b}
;function cx(){this.h={}}
p=cx.prototype;p.contains=function(a){return Object.prototype.hasOwnProperty.call(this.h,a)};
p.get=function(a){if(this.contains(a))return this.h[a]};
p.set=function(a,b){this.h[a]=b};
p.Ub=function(){return Object.keys(this.h)};
p.remove=function(a){delete this.h[a]};function dx(){this.mappings=new cx}
dx.prototype.getModuleId=function(a){return a.serviceId.getModuleId()};
dx.prototype.get=function(a){a:{var b=this.mappings.get(a.toString());switch(b.type){case "mapping":a=b.value;break a;case "factory":b=b.value();this.mappings.set(a.toString(),{type:"mapping",value:b});a=b;break a;default:a=Gb(b)}}return a};
new dx;function ex(a){return function(){return new a}}
;var fx={},gx=(fx.WEB_UNPLUGGED="^unplugged/",fx.WEB_UNPLUGGED_ONBOARDING="^unplugged/",fx.WEB_UNPLUGGED_OPS="^unplugged/",fx.WEB_UNPLUGGED_PUBLIC="^unplugged/",fx.WEB_CREATOR="^creator/",fx.WEB_KIDS="^kids/",fx.WEB_EXPERIMENTS="^experiments/",fx.WEB_MUSIC="^music/",fx.WEB_REMIX="^music/",fx.WEB_MUSIC_EMBEDDED_PLAYER="^music/",fx.WEB_MUSIC_EMBEDDED_PLAYER="^main_app/|^sfv/",fx);
function hx(a){var b=b===void 0?"UNKNOWN_INTERFACE":b;if(a.length===1)return a[0];var c=gx[b];if(c){c=new RegExp(c);for(var d=y(a),e=d.next();!e.done;e=d.next())if(e=e.value,c.exec(e))return e}var f=[];Object.entries(gx).forEach(function(g){var h=y(g);g=h.next().value;h=h.next().value;b!==g&&f.push(h)});
c=new RegExp(f.join("|"));a.sort(function(g,h){return g.length-h.length});
d=y(a);for(e=d.next();!e.done;e=d.next())if(e=e.value,!c.exec(e))return e;return a[0]}
;function ix(){}
ix.prototype.u=function(a,b,c){b=b===void 0?{}:b;c=c===void 0?$n:c;var d={context:ax(a.clickTrackingParams,!1,this.o)};var e=this.i(a);if(e){this.h(d,e,b);var f;b="/youtubei/v1/"+hx(this.j());(e=(f=hu(a.commandMetadata,um))==null?void 0:f.apiUrl)&&(b=e);f=Dv(Cv(b));a=Object.assign({},{command:a},void 0);d={input:f,ab:Ev(f),Ga:d,config:a};d.config.Qb?d.config.Qb.identity=c:d.config.Qb={identity:c};return d}c=new U("Error: Failed to create Request from Command.",a);Zu(c)};
da.Object.defineProperties(ix.prototype,{o:{configurable:!0,enumerable:!0,get:function(){return!1}}});
function jx(){}
v(jx,ix);function kx(){}
v(kx,jx);kx.prototype.u=function(){return{input:"/getDatasyncIdsEndpoint",ab:Ev("/getDatasyncIdsEndpoint","GET"),Ga:{}}};
kx.prototype.j=function(){return[]};
kx.prototype.i=function(){};
kx.prototype.h=function(){};var lx={},mx=(lx.GET_DATASYNC_IDS=ex(kx),lx);function nx(a){var b;(b=F("ytcsi."+(a||"")+"data_"))||(b={tick:{},info:{}},E("ytcsi."+(a||"")+"data_",b));return b}
function ox(){var a=nx();a.info||(a.info={});return a.info}
function px(a){a=nx(a);a.metadata||(a.metadata={});return a.metadata}
function qx(a){a=nx(a);a.tick||(a.tick={});return a.tick}
function rx(a){a=nx(a);if(a.gel){var b=a.gel;b.gelInfos||(b.gelInfos={});b.gelTicks||(b.gelTicks={})}else a.gel={gelTicks:{},gelInfos:{}};return a.gel}
function sx(a){a=rx(a);a.gelInfos||(a.gelInfos={});return a.gelInfos}
function tx(a){var b=nx(a).nonce;b||(b=iv(),nx(a).nonce=b);return b}
;function ux(){var a=F("ytcsi.debug");a||(a=[],E("ytcsi.debug",a),E("ytcsi.reference",{}));return a}
function vx(a){a=a||"";var b=F("ytcsi.reference");b||(ux(),b=F("ytcsi.reference"));if(b[a])return b[a];var c=ux(),d={timerName:a,info:{},tick:{},span:{},jspbInfo:[]};c.push(d);return b[a]=d}
;var W={},wx=(W.auto_search="LATENCY_ACTION_AUTO_SEARCH",W.ad_to_ad="LATENCY_ACTION_AD_TO_AD",W.ad_to_video="LATENCY_ACTION_AD_TO_VIDEO",W.app_startup="LATENCY_ACTION_APP_STARTUP",W.browse="LATENCY_ACTION_BROWSE",W.cast_splash="LATENCY_ACTION_CAST_SPLASH",W.channel_activity="LATENCY_ACTION_KIDS_CHANNEL_ACTIVITY",W.channels="LATENCY_ACTION_CHANNELS",W.chips="LATENCY_ACTION_CHIPS",W.commerce_transaction="LATENCY_ACTION_COMMERCE_TRANSACTION",W.direct_playback="LATENCY_ACTION_DIRECT_PLAYBACK",W.editor=
"LATENCY_ACTION_EDITOR",W.embed="LATENCY_ACTION_EMBED",W.embed_no_video="LATENCY_ACTION_EMBED_NO_VIDEO",W.entity_key_serialization_perf="LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF",W.entity_key_deserialization_perf="LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF",W.explore="LATENCY_ACTION_EXPLORE",W.favorites="LATENCY_ACTION_FAVORITES",W.home="LATENCY_ACTION_HOME",W.inboarding="LATENCY_ACTION_INBOARDING",W.landing="LATENCY_ACTION_LANDING",W.library="LATENCY_ACTION_LIBRARY",W.live="LATENCY_ACTION_LIVE",
W.live_pagination="LATENCY_ACTION_LIVE_PAGINATION",W.management="LATENCY_ACTION_MANAGEMENT",W.mini_app="LATENCY_ACTION_MINI_APP_PLAY",W.notification_settings="LATENCY_ACTION_KIDS_NOTIFICATION_SETTINGS",W.onboarding="LATENCY_ACTION_ONBOARDING",W.parent_profile_settings="LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS",W.parent_tools_collection="LATENCY_ACTION_PARENT_TOOLS_COLLECTION",W.parent_tools_dashboard="LATENCY_ACTION_PARENT_TOOLS_DASHBOARD",W.player_att="LATENCY_ACTION_PLAYER_ATTESTATION",W.prebuffer=
"LATENCY_ACTION_PREBUFFER",W.prefetch="LATENCY_ACTION_PREFETCH",W.profile_settings="LATENCY_ACTION_KIDS_PROFILE_SETTINGS",W.profile_switcher="LATENCY_ACTION_LOGIN",W.projects="LATENCY_ACTION_PROJECTS",W.reel_watch="LATENCY_ACTION_REEL_WATCH",W.results="LATENCY_ACTION_RESULTS",W.red="LATENCY_ACTION_PREMIUM_PAGE_GET_BROWSE",W.premium="LATENCY_ACTION_PREMIUM_PAGE_GET_BROWSE",W.privacy_policy="LATENCY_ACTION_KIDS_PRIVACY_POLICY",W.review="LATENCY_ACTION_REVIEW",W.search_overview_answer="LATENCY_ACTION_SEARCH_OVERVIEW_ANSWER",
W.search_ui="LATENCY_ACTION_SEARCH_UI",W.search_suggest="LATENCY_ACTION_SUGGEST",W.search_zero_state="LATENCY_ACTION_SEARCH_ZERO_STATE",W.secret_code="LATENCY_ACTION_KIDS_SECRET_CODE",W.seek="LATENCY_ACTION_PLAYER_SEEK",W.settings="LATENCY_ACTION_SETTINGS",W.store="LATENCY_ACTION_STORE",W.supervision_dashboard="LATENCY_ACTION_KIDS_SUPERVISION_DASHBOARD",W.tenx="LATENCY_ACTION_TENX",W.video_preview="LATENCY_ACTION_VIDEO_PREVIEW",W.video_to_ad="LATENCY_ACTION_VIDEO_TO_AD",W.watch="LATENCY_ACTION_WATCH",
W.watch_it_again="LATENCY_ACTION_KIDS_WATCH_IT_AGAIN",W["watch,watch7"]="LATENCY_ACTION_WATCH",W["watch,watch7_html5"]="LATENCY_ACTION_WATCH",W["watch,watch7ad"]="LATENCY_ACTION_WATCH",W["watch,watch7ad_html5"]="LATENCY_ACTION_WATCH",W.wn_comments="LATENCY_ACTION_LOAD_COMMENTS",W.ww_rqs="LATENCY_ACTION_WHO_IS_WATCHING",W.voice_assistant="LATENCY_ACTION_VOICE_ASSISTANT",W.cast_load_by_entity_to_watch="LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH",W.networkless_performance="LATENCY_ACTION_NETWORKLESS_PERFORMANCE",
W.gel_compression="LATENCY_ACTION_GEL_COMPRESSION",W.gel_jspb_serialize="LATENCY_ACTION_GEL_JSPB_SERIALIZE",W.attestation_challenge_fetch="LATENCY_ACTION_ATTESTATION_CHALLENGE_FETCH",W);function xx(a,b){fr.call(this,1,arguments);this.timer=b}
v(xx,fr);var yx=new gr("aft-recorded",xx);E("ytLoggingGelSequenceIdObj_",D.ytLoggingGelSequenceIdObj_||{});var zx=D.ytLoggingLatencyUsageStats_||{};E("ytLoggingLatencyUsageStats_",zx);function Ax(){this.h=0}
function Bx(){Ax.instance||(Ax.instance=new Ax);return Ax.instance}
Ax.prototype.tick=function(a,b,c,d){Cx(this,"tick_"+a+"_"+b)||jp("latencyActionTicked",{tickName:a,clientActionNonce:b},{timestamp:c,cttAuthInfo:d})};
Ax.prototype.info=function(a,b,c){var d=Object.keys(a).join("");Cx(this,"info_"+d+"_"+b)||(a=Object.assign({},a),a.clientActionNonce=b,jp("latencyActionInfo",a,{cttAuthInfo:c}))};
Ax.prototype.jspbInfo=function(){};
Ax.prototype.span=function(a,b,c){var d=Object.keys(a).join("");Cx(this,"span_"+d+"_"+b)||(a.clientActionNonce=b,jp("latencyActionSpan",a,{cttAuthInfo:c}))};
function Cx(a,b){zx[b]=zx[b]||{count:0};var c=zx[b];c.count++;c.time=V();a.h||(a.h=vo(function(){var d=V(),e;for(e in zx)zx[e]&&d-zx[e].time>6E4&&delete zx[e];a&&(a.h=0)},5E3));
return c.count>5?(c.count===6&&Math.random()*1E5<1&&(c=new U("CSI data exceeded logging limit with key",b.split("_")),b.indexOf("plev")>=0||$u(c)),!0):!1}
;var Dx=window;function Ex(){this.timing={};this.clearResourceTimings=function(){};
this.webkitClearResourceTimings=function(){};
this.mozClearResourceTimings=function(){};
this.msClearResourceTimings=function(){};
this.oClearResourceTimings=function(){}}
function Fx(){var a;if(T("csi_use_performance_navigation_timing")){var b,c,d,e=X==null?void 0:(a=X.getEntriesByType)==null?void 0:(b=a.call(X,"navigation"))==null?void 0:(c=b[0])==null?void 0:(d=c.toJSON)==null?void 0:d.call(c);e?(e.requestStart=Gx(e.requestStart),e.responseEnd=Gx(e.responseEnd),e.redirectStart=Gx(e.redirectStart),e.redirectEnd=Gx(e.redirectEnd),e.domainLookupEnd=Gx(e.domainLookupEnd),e.connectStart=Gx(e.connectStart),e.connectEnd=Gx(e.connectEnd),e.responseStart=Gx(e.responseStart),
e.secureConnectionStart=Gx(e.secureConnectionStart),e.domainLookupStart=Gx(e.domainLookupStart),e.isPerformanceNavigationTiming=!0,a=e):a=X.timing}else a=T("csi_performance_timing_to_object")?JSON.parse(JSON.stringify(X.timing)):X.timing;return a}
function Gx(a){return Math.round(Hx()+a)}
function Hx(){return(T("csi_use_time_origin")||T("csi_use_time_origin_tvhtml5"))&&X.timeOrigin?Math.floor(X.timeOrigin):X.timing.navigationStart}
var X=Dx.performance||Dx.mozPerformance||Dx.msPerformance||Dx.webkitPerformance||new Ex;var Ix=!1,Jx=!1,Kx={'script[name="scheduler/scheduler"]':"sj",'script[name="player/base"]':"pj",'link[rel="preload"][name="player/embed"]':"pej",'link[rel="stylesheet"][name="www-player"]':"pc",'link[rel="stylesheet"][name="player/www-player"]':"pc",'script[name="desktop_polymer/desktop_polymer"]':"dpj",'link[rel="import"][name="desktop_polymer"]':"dph",'script[name="mobile-c3"]':"mcj",'link[rel="stylesheet"][name="mobile-c3"]':"mcc",'script[name="player-plasma-ias-phone/base"]':"mcppj",'script[name="player-plasma-ias-tablet/base"]':"mcptj",
'link[rel="stylesheet"][name="mobile-polymer-player-ias"]':"mcpc",'link[rel="stylesheet"][name="mobile-polymer-player-svg-ias"]':"mcpsc",'script[name="mobile_blazer_core_mod"]':"mbcj",'link[rel="stylesheet"][name="mobile_blazer_css"]':"mbc",'script[name="mobile_blazer_logged_in_users_mod"]':"mbliuj",'script[name="mobile_blazer_logged_out_users_mod"]':"mblouj",'script[name="mobile_blazer_noncore_mod"]':"mbnj","#player_css":"mbpc",'script[name="mobile_blazer_desktopplayer_mod"]':"mbpj",'link[rel="stylesheet"][name="mobile_blazer_tablet_css"]':"mbtc",
'script[name="mobile_blazer_watch_mod"]':"mbwj",'script[name="embed_client"]':"ecj",'link[rel="stylesheet"][name="embed-ui"]':"ecc"};Ua(X.clearResourceTimings||X.webkitClearResourceTimings||X.mozClearResourceTimings||X.msClearResourceTimings||X.oClearResourceTimings||Bi,X);function Lx(a,b){if(!T("web_csi_action_sampling_enabled")||!nx(b).actionDisabled){var c=vx(b||"");ow(c.info,a);a.loadType&&(c=a.loadType,px(b).loadType=c);ow(sx(b),a);c=tx(b);b=nx(b).cttAuthInfo;Bx().info(a,c,b)}}
function Mx(){var a,b,c,d;return((d=Jt().resolve(Dt(Tq))==null?void 0:(a=Uq())==null?void 0:(b=a.loggingHotConfig)==null?void 0:(c=b.csiConfig)==null?void 0:c.debugTicks)!=null?d:[]).map(function(e){return Object.values(e)[0]})}
function Nx(a,b,c){if(!T("web_csi_action_sampling_enabled")||!nx(c).actionDisabled){var d=tx(c),e;if(e=T("web_csi_debug_sample_enabled")&&d){(Jt().resolve(Dt(Tq))==null?0:Uq())&&!Jx&&(Jx=!0,Nx("gcfl",V(),c));var f,g,h;e=(Jt().resolve(Dt(Tq))==null?void 0:(f=Uq())==null?void 0:(g=f.loggingHotConfig)==null?void 0:(h=g.csiConfig)==null?void 0:h.debugSampleWeight)||0;if(f=e!==0)b:{f=Mx();if(f.length>0)for(g=0;g<f.length;g++)if(a===f[g]){f=!0;break b}f=!1}if(f){for(g=f=0;g<d.length;g++)f=f*31+d.charCodeAt(g),
g<d.length-1&&(f%=0x800000000000);e=f%1E5%e!==0;nx(c).debugTicksExcludedLogged||(f={},f.debugTicksExcluded=e,Lx(f,c));nx(c).debugTicksExcludedLogged=!0}else e=!1}if(!e){if(a[0]!=="_"&&(e=a,f=b,X.mark))if(e.startsWith("mark_")||(e="mark_"+e),c&&(e+=" ("+c+")"),f===void 0||T("web_csi_disable_alt_time_performance_mark"))X.mark(e);else{f=T("csi_use_performance_navigation_timing")?f-X.timeOrigin:f-(X.timeOrigin||X.timing.navigationStart);try{X.mark(e,{startTime:f})}catch(k){}}e=vx(c||"");e.tick[a]=b||
V();if(e.callback&&e.callback[a])for(e=y(e.callback[a]),f=e.next();!f.done;f=e.next())f=f.value,f();e=rx(c);e.gelTicks&&(e.gelTicks[a]=!0);f=qx(c);e=b||V();T("log_repeated_ytcsi_ticks")?a in f||(f[a]=e):f[a]=e;f=nx(c).cttAuthInfo;a==="_start"?(a=Bx(),Cx(a,"baseline_"+d)||jp("latencyActionBaselined",{clientActionNonce:d},{timestamp:b,cttAuthInfo:f})):Bx().tick(a,d,b,f);Ox(c);return e}}}
function Px(){var a=document;if("visibilityState"in a)a=a.visibilityState;else{var b=$s+"VisibilityState";a=b in a?a[b]:void 0}switch(a){case "hidden":return 0;case "visible":return 1;case "prerender":return 2;case "unloaded":return 3;default:return-1}}
function Qx(){function a(f,g,h){g=g.match("_rid")?g.split("_rid")[0]:g;typeof h==="number"&&(h=JSON.stringify(h));f.requestIds?f.requestIds.push({endpoint:g,id:h}):f.requestIds=[{endpoint:g,id:h}]}
for(var b={},c=y(Object.entries(R("TIMING_INFO",{}))),d=c.next();!d.done;d=c.next()){var e=y(d.value);d=e.next().value;e=e.next().value;switch(d){case "GetBrowse_rid":a(b,d,e);break;case "GetGuide_rid":a(b,d,e);break;case "GetHome_rid":a(b,d,e);break;case "GetPlayer_rid":a(b,d,e);break;case "GetSearch_rid":a(b,d,e);break;case "GetSettings_rid":a(b,d,e);break;case "GetTrending_rid":a(b,d,e);break;case "GetWatchNext_rid":a(b,d,e);break;case "yt_red":b.isRedSubscriber=!!e;break;case "yt_ad":b.isMonetized=
!!e}}return b}
function Rx(a,b){a=document.querySelector(a);if(!a)return!1;var c="",d=a.nodeName;d==="SCRIPT"?(c=a.src,c||(c=a.getAttribute("data-timing-href"))&&(c=window.location.protocol+c)):d==="LINK"&&(c=a.href);Ib(document)&&a.setAttribute("nonce",Ib(document));return c?(a=X.getEntriesByName(c))&&a[0]&&(a=a[0],c=Hx(),Nx("rsf_"+b,c+Math.round(a.fetchStart)),Nx("rse_"+b,c+Math.round(a.responseEnd)),a.transferSize!==void 0&&a.transferSize===0)?!0:!1:!1}
function Sx(){var a=window.location.protocol,b=X.getEntriesByType("resource");b=Wb(b,function(c){return c.name.indexOf(a+"//fonts.gstatic.com/s/")===0});
(b=Yb(b,function(c,d){return d.duration>c.duration?d:c},{duration:0}))&&b.startTime>0&&b.responseEnd>0&&(Nx("wffs",Gx(b.startTime)),Nx("wffe",Gx(b.responseEnd)))}
function Tx(a){var b=Ux("aft",a);if(b)return b;b=R((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=b.length,d=0;d<c;d++){var e=Ux(b[d],a);if(e)return e}return NaN}
function Ux(a,b){if(a=qx(b)[a])return typeof a==="number"?a:a[a.length-1]}
function Ox(a){var b=Ux("_start",a),c=Tx(a),d=!Ix;b&&c&&d&&(lr(yx,new xx(Math.round(c-b),a)),Ix=!0)}
function Vx(){if(X.getEntriesByType){var a=X.getEntriesByType("paint");if(a=Zb(a,function(c){return c.name==="first-paint"}))return Gx(a.startTime)}var b;
T("csi_use_performance_navigation_timing")?b=X.getEntriesByType("first-paint")[0].startTime:b=X.timing.Vh;return b?Math.max(0,b):0}
;function Wx(a,b){Um(function(){vx("").info.actionType=a;b&&Qm("TIMING_AFT_KEYS",b);Qm("TIMING_ACTION",a);var c=Qx();Object.keys(c).length>0&&Lx(c);c={isNavigation:!0,actionType:wx[R("TIMING_ACTION")]||"LATENCY_ACTION_UNKNOWN"};var d=R("PREVIOUS_ACTION");d&&(c.previousAction=wx[d]||"LATENCY_ACTION_UNKNOWN");if(d=R("CLIENT_PROTOCOL"))c.httpProtocol=d;if(d=R("CLIENT_TRANSPORT"))c.transportProtocol=d;(d=sv())&&d!=="UNDEFINED_CSN"&&(c.clientScreenNonce=d);d=Px();if(d===1||d===-1)c.isVisible=!0;px();ox();
c.loadType="cold";d=ox();var e=Fx(),f=Hx(),g=R("CSI_START_TIMESTAMP_MILLIS",0);g>0&&!T("embeds_web_enable_csi_start_override_killswitch")&&(f=g);f&&(Nx("srt",e.responseStart),d.prerender!==1&&Nx("_start",f,void 0));d=Vx();d>0&&Nx("fpt",d);d=Fx();d.isPerformanceNavigationTiming&&Lx({performanceNavigationTiming:!0},void 0);Nx("nreqs",d.requestStart,void 0);Nx("nress",d.responseStart,void 0);Nx("nrese",d.responseEnd,void 0);d.redirectEnd-d.redirectStart>0&&(Nx("nrs",d.redirectStart,void 0),Nx("nre",
d.redirectEnd,void 0));d.domainLookupEnd-d.domainLookupStart>0&&(Nx("ndnss",d.domainLookupStart,void 0),Nx("ndnse",d.domainLookupEnd,void 0));d.connectEnd-d.connectStart>0&&(Nx("ntcps",d.connectStart,void 0),Nx("ntcpe",d.connectEnd,void 0));d.secureConnectionStart>=Hx()&&d.connectEnd-d.secureConnectionStart>0&&(Nx("nstcps",d.secureConnectionStart,void 0),Nx("ntcpe",d.connectEnd,void 0));X&&"getEntriesByType"in X&&Sx();d=[];if(document.querySelector&&X&&X.getEntriesByName)for(var h in Kx)Kx.hasOwnProperty(h)&&
(e=Kx[h],Rx(h,e)&&d.push(e));if(d.length>0)for(c.resourceInfo=[],h=y(d),d=h.next();!d.done;d=h.next())c.resourceInfo.push({resourceCache:d.value});Lx(c);c=rx();c.preLoggedGelInfos||(c.preLoggedGelInfos=[]);h=c.preLoggedGelInfos;c=sx();d=void 0;for(e=0;e<h.length;e++)if(f=h[e],f.loadType){d=f.loadType;break}if(px().loadType==="cold"&&(c.loadType==="cold"||d==="cold")){d=qx();e=rx();e=e.gelTicks?e.gelTicks:e.gelTicks={};for(var k in d)if(!(k in e))if(typeof d[k]==="number")Nx(k,Ux(k));else if(T("log_repeated_ytcsi_ticks"))for(f=
y(d[k]),g=f.next();!g.done;g=f.next())g=g.value,Nx(k.slice(1),g);k={};d=!1;h=y(h);for(e=h.next();!e.done;e=h.next())d=e.value,ow(c,d),ow(k,d),d=!0;d&&Lx(k)}E("ytglobal.timingready_",!0);k=R("TIMING_ACTION");F("ytglobal.timingready_")&&k&&Xx()&&Tx()&&Ox()})()}
function Xx(a){return Um(function(){return Yx("_start",a)})()}
function Zx(a,b,c){Um(Lx)(a,b,c===void 0?!1:c)}
function $x(a,b,c){return Um(Nx)(a,b,c)}
function Yx(a,b){return Um(function(){var c=qx(b);return a in c})()}
function ay(a){if(!T("universal_csi_network_ticks"))return"";a=qc(a)||"";for(var b=Object.keys(dr),c=0;c<b.length;c++){var d=b[c];if(a.includes(d))return d}return""}
function by(a){if(!T("universal_csi_network_ticks"))return function(){};
var b=dr[a];return b?(cy(b),function(){var c=T("universal_csi_network_ticks")?(c=er[a])?cy(c):!1:!1;return c}):function(){}}
function cy(a){return Um(function(){if(Yx(a))return!1;$x(a,void 0,void 0);return!0})()}
function dy(a){Um(function(){if(!Xx("attestation_challenge_fetch")||Yx(a,"attestation_challenge_fetch"))return!1;$x(a,void 0,"attestation_challenge_fetch");return!0})()}
function ey(){Um(function(){var a=tx();requestAnimationFrame(function(){setTimeout(function(){a===tx()&&$x("ol",void 0,void 0)},0)})})()}
var fy=window;fy.ytcsi&&(fy.ytcsi.infoGel=Zx,fy.ytcsi.tick=$x);var gy="tokens consistency mss client_location entities adblock_detection response_received_commands store PLAYER_PRELOAD shorts_prefetch".split(" "),hy=["type.googleapis.com/youtube.api.pfiinnertube.YoutubeApiInnertube.BrowseResponse","type.googleapis.com/youtube.api.pfiinnertube.YoutubeApiInnertube.PlayerResponse"];function iy(a,b,c,d){this.u=a;this.fa=b;this.j=c;this.o=d;this.i=void 0;this.h=new Map;a.dc||(a.dc={});a.dc=Object.assign({},mx,a.dc)}
function jy(a,b,c,d){if(iy.instance!==void 0){if(d=iy.instance,a=[a!==d.u,b!==d.fa,c!==d.j,!1,!1,!1,void 0!==d.i],a.some(function(e){return e}))throw new U("InnerTubeTransportService is already initialized",a);
}else iy.instance=new iy(a,b,c,d)}
function ky(a){var b={signalServiceEndpoint:{signal:"GET_DATASYNC_IDS"}};var c=c===void 0?$n:c;var d=ly(a,b);return d?new Di(function(e,f){var g,h,k,l,m;return B(function(n){switch(n.h){case 1:return n.yield(d,2);case 2:g=n.i;h=g.u(b,void 0,c);if(!h){f(new U("Error: Failed to build request for command.",b));n.B(0);break}Pw(h.input);l=((k=h.ab)==null?void 0:k.mode)==="cors"?"cors":void 0;if(a.j.Qd){m=my(h.config,l);n.B(4);break}return n.yield(ny(h.config,l),5);case 5:m=n.i;case 4:e(oy(a,h,m)),n.h=
0}})}):Ii(new U("Error: No request builder found for command.",b))}
function py(a,b){function c(){}
var d="/youtubei/v1/"+hx(Vv);var e=e===void 0?{Qb:{identity:$n}}:e;var f=f===void 0?!0:f;c=by(ay(d));b.context||(b.context=ax(void 0,f));return new Di(function(g){var h,k,l,m,n;return B(function(r){if(r.h==1)return h=Cv(d),k=gn(h)?"same-origin":"cors",a.j.Qd?(l=my(e,k),r.B(2)):r.yield(ny(e,k),3);r.h!=2&&(l=r.i);m=Dv(Cv(d));n={input:m,ab:Ev(m),Ga:b,config:e};g(oy(a,n,l,c));r.h=0})})}
function qy(a,b,c){var d;if(b&&!(b==null?0:(d=b.sequenceMetaData)==null?0:d.skipProcessing)&&a.o){d=y(gy);for(var e=d.next();!e.done;e=d.next())e=e.value,a.o[e]&&a.o[e].handleResponse(b,c)}}
function oy(a,b,c,d){d=d===void 0?function(){}:d;
var e,f,g,h,k,l,m,n,r,t,w,x,z,G,H,S,Z,mb,Sb,pa,Eb,Ya,Pa,Ka,Ja,xh,Ts,Us,Vs,Ws;return B(function(ha){switch(ha.h){case 1:ha.B(2);break;case 3:if((e=ha.i)&&!e.isExpired())return ha.return(Promise.resolve(e.h()));case 2:if(!((f=b)==null?0:(g=f.Ga)==null?0:g.context)){ha.B(4);break}h=b.Ga.context;ha.B(5);break;case 5:k=y([]),l=k.next();case 8:if(l.done){ha.B(4);break}m=l.value;return ha.yield(m.Wh(h),9);case 9:l=k.next();ha.B(8);break;case 4:if((n=a.i)==null||!n.fi(b.input,b.Ga)){ha.B(12);break}return ha.yield(a.i.Qh(b.input,
b.Ga),13);case 13:return r=ha.i,qy(a,r,b),ha.return(r);case 12:return(x=(w=b.config)==null?void 0:w.Zh)&&a.h.has(x)?t=a.h.get(x):(z=JSON.stringify(b.Ga),S=(H=(G=b.ab)==null?void 0:G.headers)!=null?H:{},b.ab=Object.assign({},b.ab,{headers:Object.assign({},S,c)}),Z=Object.assign({},b.ab),b.ab.method==="POST"&&(Z=Object.assign({},Z,{body:z})),((mb=b.config)==null?0:mb.bf)&&$x(b.config.bf),Sb=function(){return a.fa.fetch(b.input,Z,b.config)},t=Sb(),x&&a.h.set(x,t)),ha.yield(t,14);
case 14:(pa=ha.i)&&T("web_streaming_player")&&Array.isArray(pa)&&(pa=pa[0].playerResponse);if(pa&&"error"in pa&&((Eb=pa)==null?0:(Ya=Eb.error)==null?0:Ya.details))for(Pa=pa.error.details,Ka=y(Pa),Ja=Ka.next();!Ja.done;Ja=Ka.next())xh=Ja.value,(Ts=xh["@type"])&&hy.indexOf(Ts)>-1&&(delete xh["@type"],pa=xh);x&&a.h.has(x)&&a.h.delete(x);((Us=b.config)==null?0:Us.cf)&&$x(b.config.cf);if(pa||(Vs=a.i)==null||!Vs.Ch(b.input,b.Ga)){ha.B(15);break}return ha.yield(a.i.Ph(b.input,b.Ga),16);case 16:pa=ha.i;case 15:return qy(a,
pa,b),((Ws=b.config)==null?0:Ws.Ye)&&$x(b.config.Ye),d(),ha.return(pa||void 0)}})}
function ly(a,b){a:{a=a.u;var c,d=(c=hu(b,wm))==null?void 0:c.signal;if(d&&a.dc&&(c=a.dc[d])){var e=c();break a}var f;if((c=(f=hu(b,tm))==null?void 0:f.request)&&a.le&&(f=a.le[c])){e=f();break a}for(e in b)if(a.Nc[e]&&(b=a.Nc[e])){e=b();break a}e=void 0}if(e!==void 0)return Promise.resolve(e)}
function ny(a,b){var c,d,e,f;return B(function(g){if(g.h==1){e=(c=a)==null?void 0:(d=c.Qb)==null?void 0:d.sessionIndex;var h=g.yield;var k=Zn(0,{sessionIndex:e});if(!(k instanceof Di)){var l=new Di(Bi);Ei(l,2,k);k=l}return h.call(g,k,2)}f=g.i;return g.return(Promise.resolve(Object.assign({},bx(b),f)))})}
function my(a,b){var c;a=a==null?void 0:(c=a.Qb)==null?void 0:c.sessionIndex;c=Zn(0,{sessionIndex:a});return Object.assign({},bx(b),c)}
;var ry=new Bt("INNERTUBE_TRANSPORT_TOKEN");function sy(){}
v(sy,jx);sy.prototype.j=function(){return aw};
sy.prototype.i=function(a){return hu(a,Hm)||void 0};
sy.prototype.h=function(a,b,c){c=c===void 0?{}:c;b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params);c.botguardResponse&&(a.botguardResponse=c.botguardResponse);c.feature&&(a.clientFeature=c.feature)};
da.Object.defineProperties(sy.prototype,{o:{configurable:!0,enumerable:!0,get:function(){return!0}}});function ty(){}
v(ty,jx);ty.prototype.j=function(){return bw};
ty.prototype.i=function(a){return hu(a,Gm)||void 0};
ty.prototype.h=function(a,b){b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params)};
da.Object.defineProperties(ty.prototype,{o:{configurable:!0,enumerable:!0,get:function(){return!0}}});var uy=new Bt("SHARE_CLIENT_PARAMS_PROVIDER_TOKEN");function vy(a){this.H=a}
v(vy,jx);vy.prototype.j=function(){return Wv};
vy.prototype.i=function(a){return hu(a,Am)||hu(a,Bm)||hu(a,zm)};
vy.prototype.h=function(a,b){b.serializedShareEntity&&(a.serializedSharedEntity=b.serializedShareEntity);if(b.clientParamIdentifier){var c;if((c=this.H)==null?0:c.h(b.clientParamIdentifier))a.clientParams=this.H.i(b.clientParamIdentifier)}};
vy[At]=[uy];function wy(){}
v(wy,jx);wy.prototype.j=function(){return Yv};
wy.prototype.i=function(a){return hu(a,ym)||void 0};
wy.prototype.h=function(a,b,c){a.feedbackTokens=[];b.feedbackToken&&a.feedbackTokens.push(b.feedbackToken);if(b=b.cpn||c.cpn)a.feedbackContext={cpn:b};a.isFeedbackTokenUnencrypted=!!c.is_feedback_token_unencrypted;a.shouldMerge=!1;c.extra_feedback_tokens&&(a.shouldMerge=!0,a.feedbackTokens=a.feedbackTokens.concat(c.extra_feedback_tokens))};
da.Object.defineProperties(wy.prototype,{o:{configurable:!0,enumerable:!0,get:function(){return!0}}});function xy(){}
v(xy,jx);xy.prototype.j=function(){return Zv};
xy.prototype.i=function(a){return hu(a,Em)||void 0};
xy.prototype.h=function(a,b){b.params&&(a.params=b.params);b.secondaryParams&&(a.secondaryParams=b.secondaryParams)};function yy(){}
v(yy,jx);yy.prototype.j=function(){return $v};
yy.prototype.i=function(a){return hu(a,Dm)||void 0};
yy.prototype.h=function(a,b){b.actions&&(a.actions=b.actions);b.params&&(a.params=b.params);b.playlistId&&(a.playlistId=b.playlistId)};function zy(){}
v(zy,jx);zy.prototype.j=function(){return Xv};
zy.prototype.i=function(a){return hu(a,Cm)};
zy.prototype.h=function(a,b,c){c=c===void 0?{}:c;b.serializedShareEntity&&(a.serializedSharedEntity=b.serializedShareEntity);c.includeListId&&(a.includeListId=!0)};var Ay=new Bt("FETCH_FN_TOKEN"),By=new Bt("PARSE_FN_TOKEN"),Cy=new Bt("WINDOW_REQUEST_TOKEN");function Dy(a,b){var c=C.apply(2,arguments);a=a===void 0?0:a;U.call(this,b,c);this.errorType=a;Object.setPrototypeOf(this,this.constructor.prototype)}
v(Dy,U);var Ey=new Bt("NETWORK_SLI_TOKEN");function Fy(a,b,c,d){this.h=a;this.i=b;this.j=c;this.o=d}
Fy.prototype.fetch=function(a,b,c){var d=this,e,f,g;return B(function(h){e=Gy(d,a,b);g=(f=d.i)!=null?f:fetch;return h.return(g(e).then(function(k){return d.handleResponse(k,c)}).catch(function(k){$u(k);
if((c==null?0:c.ue)&&k instanceof Dy&&k.errorType===1)return Promise.reject(k)}))})};
function Gy(a,b,c){if(a.h){var d=qc(Ac(b,"key"))||"/UNKNOWN_PATH";a.h.start(d)}d=c;T("wug_networking_gzip_request")&&(d=Nr(c));var e;return new ((e=a.o)!=null?e:window.Request)(b,d)}
Fy.prototype.handleResponse=function(a,b){var c,d=(c=this.j)!=null?c:JSON.parse;c=a.text().then(function(e){if((b==null?0:b.Ke)&&a.ok)return Wf(b.Ke,e);e=e.replace(")]}'","");if((b==null?0:b.ue)&&e)try{var f=d(e)}catch(h){throw new Dy(1,"JSON parsing failed after fetch");}var g;return(g=f)!=null?g:d(e)});
a.redirected||a.ok?this.h&&this.h.success():(this.h&&this.h.Jh(),c=c.then(function(e){$u(new U("Error: API fetch failed",a.status,a.url,e));return Object.assign({},e,{errorMetadata:{status:a.status}})}));
return c};
Fy[At]=[Dt(Ey),Dt(Ay),Dt(By),Dt(Cy)];var Hy=new Bt("NETWORK_MANAGER_TOKEN");var Iy;function Jy(a){var b=new Cj;if(a.interpreterJavascript){var c=lm(a.interpreterJavascript);c=Lb(c).toString();var d=new Aj;Tf(d,6,c);Of(b,Aj,1,d,ke)}else a.interpreterUrl&&(c=mm(a.interpreterUrl),c=rb(c).toString(),d=new Bj,Tf(d,4,c),Of(b,Bj,2,d,ke));a.interpreterHash&&Uf(b,3,a.interpreterHash);a.program&&Uf(b,4,a.program);a.globalName&&Uf(b,5,a.globalName);a.clientExperimentsStateBlob&&Uf(b,7,a.clientExperimentsStateBlob);return b}
function Ky(a){var b={};a=y(a.split("&"));for(var c=a.next();!c.done;c=a.next())c=c.value.split("="),c.length===2&&(b[c[0]]=c[1]);return b}
;function Gc(){if(T("bg_st_hr"))return"havuokmhhs-0";var a,b=((a=performance)==null?void 0:a.timeOrigin)||0;return"havuokmhhs-"+Math.floor(b)}
function Ly(a){this.h=a}
Ly.prototype.bindInnertubeChallengeFetcher=function(a){this.h.bicf(a)};
Ly.prototype.registerChallengeFetchedCallback=function(a){this.h.bcr(a)};
Ly.prototype.getLatestChallengeResponse=function(){return this.h.blc()};
function My(){return new Promise(function(a){var b=window.top;b.ntpevasrs!==void 0?a(new Ly(b.ntpevasrs)):(b.ntpqfbel===void 0&&(b.ntpqfbel=[]),b.ntpqfbel.push(function(c){a(new Ly(c))}))})}
;var Ny=[],Oy=!1;function Py(){if(Fv()){var a=R("PLAYER_VARS",{});if(Hg(a)!="1"&&!Hv(a)){var b=function(){Oy=!0;"google_ad_status"in window?Qm("DCLKSTAT",1):Qm("DCLKSTAT",2)};
try{ew("//static.doubleclick.net/instream/ad_status.js",b)}catch(c){}Ny.push(ek.pa(function(){if(!(Oy||"google_ad_status"in window)){try{iw("//static.doubleclick.net/instream/ad_status.js",b)}catch(c){}Oy=!0;Qm("DCLKSTAT",3)}},5E3))}}}
function Qy(){var a=Number(R("DCLKSTAT",0));return isNaN(a)?0:a}
;function Y(a){this.h=a}
[new Y("b.f_"),new Y("j.s_"),new Y("r.s_"),new Y("e.h_"),new Y("i.s_"),new Y("s.t_"),new Y("p.h_"),new Y("s.i_"),new Y("f.i_"),new Y("a.b_"),new Y("a.o_"),new Y("g.o_"),new Y("p.i_"),new Y("p.m_"),new Y("n.k_"),new Y("i.f_"),new Y("a.s_"),new Y("m.c_"),new Y("n.h_"),new Y("o.p_"),new Y("m.p_"),new Y("o.a_"),new Y("d.p_")].reduce(function(a,b){a[b.h]=b;return a},{});function Ry(a,b,c){var d=this;this.network=a;this.options=b;this.o=c;this.h=null;if(b.ki){var e=new Gj;this.h=e.promise;D.ytAtRC&&ek.Sa(function(){var f,g;return B(function(h){if(h.h==1){if(!D.ytAtRC)return h.return();f=Sy(null);return h.yield(d.ib(f),2)}g=h.i;D.ytAtRC&&D.ytAtRC(JSON.stringify(g));h.h=0})},2);
My().then(function(f){var g,h,k,l;return B(function(m){if(m.h==1)return f.bindInnertubeChallengeFetcher(function(n){return d.ib(Sy(n))}),m.yield(Fc(),2);
g=m.i;h=f.getLatestChallengeResponse();k=h.challenge;if(!k)throw Error("BGE_MACIL");l={challenge:k,gb:Ky(k),vm:g,bgChallenge:new Cj};e.resolve(l);f.registerChallengeFetchedCallback(function(n){n=n.challenge;if(!n)throw Error("BGE_MACR");n={challenge:n,gb:Ky(n),vm:g,bgChallenge:new Cj};d.h=Promise.resolve(n)});
m.h=0})})}else b.preload&&Ty(this,new Promise(function(f){vo(function(){f(Uy(d))},0)}))}
Ry.prototype.j=function(){var a=this;return B(function(b){return b.h==1?b.yield(Promise.race([a.h,null]),2):b.return(!!b.i)})};
Ry.prototype.i=function(a,b,c){var d=this,e,f,g;return B(function(h){d.h===null&&Ty(d,Uy(d));e=!1;f={};g=function(){var k,l,m;return B(function(n){switch(n.h){case 1:return n.yield(d.h,2);case 2:k=n.i;f.challenge=k.challenge;if(!k.vm){"c1a"in k.gb&&(f.error="ATTESTATION_ERROR_VM_NOT_INITIALIZED");n.B(3);break}l=Object.assign({},{c:k.challenge,e:a},b);wa(n,4);e=!0;if(T("attbs")&&!T("attmusi")){m=k.vm.ld({xb:l});n.B(6);break}return n.yield(k.vm.snapshot({xb:l}),7);case 7:m=n.i;case 6:m?f.webResponse=
m:f.error="ATTESTATION_ERROR_VM_NO_RESPONSE";xa(n,3);break;case 4:ya(n),f.error="ATTESTATION_ERROR_VM_INTERNAL_ERROR";case 3:if(a==="ENGAGEMENT_TYPE_PLAYBACK"){var r=k.gb,t={};r.c6a&&(t.reportingStatus=String(Number(r.c)^Qy()));r.c6b&&(t.broadSpectrumDetectionResult=String(Number(r.c)^Number(R("CATSTAT",0))));f.adblockReporting=t}return n.return(f)}})};
return h.return(Promise.race([g(),Vy(c,function(){var k=Object.assign({},f);e&&(k.error="ATTESTATION_ERROR_VM_TIMEOUT");return k})]))})};
function Sy(a){var b={engagementType:"ENGAGEMENT_TYPE_UNBOUND"};a&&(b.interpreterHash=a);return b}
function Uy(a,b){b=b===void 0?0:b;var c,d,e,f,g,h,k,l,m,n,r,t;return B(function(w){switch(w.h){case 1:c=Sy(Lj().h);if(T("att_fet_ks"))return wa(w,7),w.yield(a.ib(c),9);wa(w,4);return w.yield(Wy(a,c),6);case 6:g=w.i;e=g.Te;f=g.Ue;d=g;xa(w,3);break;case 4:return ya(w),$u(Error("Failed to fetch attestation challenge after "+(b+" attempts; not retrying for 24h."))),Xy(a,864E5),w.return({challenge:"",gb:{},vm:void 0,bgChallenge:void 0});case 9:d=w.i;if(!d)throw Error("Fetching Attestation challenge returned falsy");
if(!d.challenge)throw Error("Missing Attestation challenge");e=d.challenge;f=Ky(e);if("c1a"in f&&(!d.bgChallenge||!d.bgChallenge.program))throw Error("Expected bg challenge but missing.");xa(w,3);break;case 7:h=ya(w);$u(h);b++;if(b>=5)return $u(Error("Failed to fetch attestation challenge after "+(b+" attempts; not retrying for 24h."))),Xy(a,864E5),w.return({challenge:"",gb:{},vm:void 0,bgChallenge:void 0});k=1E3*Math.pow(2,b-1)+Math.random()*1E3;return w.return(new Promise(function(x){vo(function(){x(Uy(a,
b))},k)}));
case 3:l=Number(f.t)||7200;Xy(a,l*1E3);m=void 0;if(!("c1a"in f&&d.bgChallenge)){w.B(10);break}n=Jy(d.bgChallenge);wa(w,11);return w.yield(Mj(Lj(),n),13);case 13:xa(w,12);break;case 11:return r=ya(w),$u(r),w.return({challenge:e,gb:f,vm:m,bgChallenge:n});case 12:return wa(w,14),m=new Ij({challenge:n,Ed:{Da:"aGIf"}}),w.yield(m.gd,16);case 16:xa(w,10);break;case 14:t=ya(w),$u(t),m=void 0;case 10:return w.return({challenge:e,gb:f,vm:m,bgChallenge:n})}})}
Ry.prototype.ib=function(a){var b=this,c;return B(function(d){c=b.o;if(!c||c.ta())return d.return(b.network.ib(a));dy("att_pna");return d.return(new Promise(function(e){ii(c,"publicytnetworkstatus-online",function(){b.network.ib(a).then(e)})}))})};
function Yy(a){if(!a)throw Error("Fetching Attestation challenge returned falsy");if(!a.challenge)throw Error("Missing Attestation challenge");var b=a.challenge,c=Ky(b);if("c1a"in c&&(!a.bgChallenge||!a.bgChallenge.program))throw Error("Expected bg challenge but missing.");return Object.assign({},a,{Te:b,Ue:c})}
function Wy(a,b){var c,d,e,f,g;return B(function(h){switch(h.h){case 1:c=void 0,d=0,e={};case 2:if(!(d<5)){h.B(4);break}if(!(d>0)){h.B(5);break}e.sd=1E3*Math.pow(2,d-1)+Math.random()*1E3;return h.yield(new Promise(function(k){return function(l){vo(function(){l(void 0)},k.sd)}}(e)),5);
case 5:return wa(h,7),h.yield(a.ib(b),9);case 9:return f=h.i,h.return(Yy(f));case 7:c=g=ya(h),g instanceof Error&&$u(g);case 8:d++;e={sd:void 0};h.B(2);break;case 4:throw c;}})}
function Ty(a,b){a.h=b}
function Zy(a){var b,c,d;return B(function(e){if(e.h==1)return e.yield(Promise.race([a.h,null]),2);b=e.i;var f=Uy(a);a.h=f;(c=b)==null||(d=c.vm)==null||d.dispose();e.h=0})}
function Xy(a,b){function c(){var e;return B(function(f){e=d-Date.now();return e<1E3?f.yield(Zy(a),0):(vo(c,Math.min(e,6E4)),f.B(0))})}
var d=Date.now()+b;c()}
function Vy(a,b){return new Promise(function(c){vo(function(){c(b())},a)})}
;function $y(a){this.h=a}
$y.prototype.ib=function(a){dy("att_fsr");return py(this.h,a).then(function(b){dy("att_frr");return b})};function az(){var a,b,c;return B(function(d){if(d.h==1)return a=Jt().resolve(ry),a?d.yield(ky(a),2):($u(Error("InnertubeTransportService unavailable in fetchDatasyncIds")),d.return(void 0));if(b=d.i){if(b.errorMetadata)return $u(Error("Datasync IDs fetch responded with "+b.errorMetadata.status+": "+b.error)),d.return(void 0);c=b.Fh;return d.return(c)}$u(Error("Network request to get Datasync IDs failed."));return d.return(void 0)})}
;function bz(){}
v(bz,jx);bz.prototype.j=function(){return Yv};
bz.prototype.i=function(a){return hu(a,Fm)};
bz.prototype.h=function(a,b){b.undoToken&&(a.feedbackTokens=[b.undoToken]);b.isUndoTokenUnencrypted&&(a.isFeedbackTokenUnencrypted=b.isUndoTokenUnencrypted)};
da.Object.defineProperties(bz.prototype,{o:{configurable:!0,enumerable:!0,get:function(){return!0}}});function cz(){var a=a===void 0?bv:a;var b=b===void 0?{}:b;E("yt.logging.errors.log",Zu);Yu();On(Nn(),b);window.onerror=a;Ui=av;window.addEventListener("unhandledrejection",function(c){if(c.reason instanceof Error){var d=c.reason;cv(d,{source:"unhandledrejection"});d.name==="AbortError"&&(d.level="WARNING")}av(c.reason);c.preventDefault()})}
;function dz(){var a;return(a=R("WEB_PLAYER_CONTEXT_CONFIGS"))==null?void 0:a.WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER}
;var ez=D.caches,fz;function gz(a){var b=a.indexOf(":");return b===-1?{Hd:a}:{Hd:a.substring(0,b),datasyncId:a.substring(b+1)}}
function hz(){return B(function(a){if(fz!==void 0)return a.return(fz);fz=new Promise(function(b){var c;return B(function(d){switch(d.h){case 1:return wa(d,2),d.yield(ez.open("test-only"),4);case 4:return d.yield(ez.delete("test-only"),5);case 5:xa(d,3);break;case 2:if(c=ya(d),c instanceof Error&&c.name==="SecurityError")return b(!1),d.return();case 3:b("caches"in window),d.h=0}})});
return a.return(fz)})}
function iz(a){var b,c,d,e,f,g,h;B(function(k){if(k.h==1)return k.yield(hz(),2);if(k.h!=3){if(!k.i)return k.return(!1);b=[];return k.yield(ez.keys(),3)}c=k.i;d=y(c);for(e=d.next();!e.done;e=d.next())f=e.value,g=gz(f),h=g.datasyncId,!h||a.includes(h)||b.push(ez.delete(f));return k.return(Promise.all(b).then(function(l){return l.some(function(m){return m})}))})}
function jz(){var a,b,c,d,e,f,g;return B(function(h){if(h.h==1)return h.yield(hz(),2);if(h.h!=3){if(!h.i)return h.return(!1);a=to("cache contains other");return h.yield(ez.keys(),3)}b=h.i;c=y(b);for(d=c.next();!d.done;d=c.next())if(e=d.value,f=gz(e),(g=f.datasyncId)&&g!==a)return h.return(!0);return h.return(!1)})}
;function kz(){try{return!!self.sessionStorage}catch(a){return!1}}
;function lz(a){a=a.match(/(.*)::.*::.*/);if(a!==null)return a[1]}
function mz(a){if(kz()){var b=Object.keys(window.sessionStorage);b=y(b);for(var c=b.next();!c.done;c=b.next()){c=c.value;var d=lz(c);d===void 0||a.includes(d)||self.sessionStorage.removeItem(c)}}}
function nz(){if(!kz())return!1;var a=to(),b=Object.keys(window.sessionStorage);b=y(b);for(var c=b.next();!c.done;c=b.next())if(c=lz(c.value),c!==void 0&&c!==a)return!0;return!1}
;function oz(){az().then(function(a){a&&(yq(a),iz(a),Kw(a),mz(a))})}
function pz(){var a=new Hs;ek.pa(function(){var b,c,d,e,f;return B(function(g){switch(g.h){case 1:if(T("ytidb_clear_optimizations_killswitch")){g.B(2);break}b=to("clear");if(b.startsWith("V")&&b.endsWith("||")){var h=[b];yq(h);iz(h);Kw(h);mz(h);return g.return()}c=Lw();d=nz();return g.yield(jz(),3);case 3:return e=g.i,g.yield(zq(),4);case 4:if(f=g.i,!(c||d||e||f))return g.return();case 2:a.ta()?oz():ii(a,"publicytnetworkstatus-online",oz),g.h=0}})})}
;var qz=["www.youtube-nocookie.com","www.youtubeeducation.com","youtube.googleapis.com"];function rz(){this.state=1;this.vm=null;this.h=void 0}
p=rz.prototype;p.initialize=function(a,b,c,d){this.h=d;if(a.program){var e;d=(e=a.interpreterUrl)!=null?e:null;if(a.interpreterSafeScript)e=lm(a.interpreterSafeScript);else{var f;e=(f=a.interpreterScript)!=null?f:null}a.interpreterSafeUrl&&(d=mm(a.interpreterSafeUrl).toString());sz(this,e,d,a.program,b,c)}else $u(Error("BL:CIP"))};
function sz(a,b,c,d,e,f){var g=g===void 0?"trayride":g;c?(a.state=2,ew(c,function(){window[g]?tz(a,d,g,e):(a.state=3,gw(c),$u(new U("BL:ULB",""+c)))},f)):b?(f=Qg("SCRIPT"),b instanceof Jb?(f.textContent=Lb(b),Mb(f)):f.textContent=b,f.nonce=Ib(document),document.head.appendChild(f),document.head.removeChild(f),window[g]?tz(a,d,g,e):(a.state=4,$u(new U("BL:ULBJ")))):$u(new U("BL:ULV"))}
p.isLoading=function(){return this.state===2};
function tz(a,b,c,d){a.state=5;var e=!!a.h&&qz.includes(pc(a.h)||"");try{var f=new Ij({program:b,globalName:c,Ed:{disable:!T("att_web_record_metrics")||!T("att_skip_metrics_for_cookieless_domains_ks")&&e,Da:"aGIf"}});f.gd.then(function(){a.state=6;d&&d(b)});
a.ed(f)}catch(g){a.state=7,g instanceof Error&&$u(g)}}
p.invoke=function(a){a=a===void 0?{}:a;return this.od()?this.Ud({xb:a}):null};
p.dispose=function(){this.ed(null);this.state=8};
p.od=function(){return!!this.vm};
p.Ud=function(a){return this.vm.ld(a)};
p.ed=function(a){Cc(this.vm);this.vm=a};function uz(){var a=F("yt.abuse.playerAttLoader");return a&&["bgvma","bgvmb","bgvmc"].every(function(b){return b in a})?a:null}
;function vz(){rz.apply(this,arguments)}
v(vz,rz);vz.prototype.ed=function(a){var b;(b=uz())==null||b.bgvma();a?(b={bgvma:a.dispose.bind(a),bgvmb:a.snapshot.bind(a),bgvmc:a.ld.bind(a)},E("yt.abuse.playerAttLoader",b),E("yt.abuse.playerAttLoaderRun",function(c){return a.snapshot(c)})):(E("yt.abuse.playerAttLoader",null),E("yt.abuse.playerAttLoaderRun",null))};
vz.prototype.od=function(){return!!uz()};
vz.prototype.Ud=function(a){return uz().bgvmc(a)};var wz=new Bt("AUTH_SERVICE_TOKEN");function xz(a){Tt.call(this,a===void 0?"document_active":a);var b=this;this.o=10;this.h=new Map;this.transitions=[{from:"document_active",to:"document_disposed_preventable",action:this.G},{from:"document_active",to:"document_disposed",action:this.u},{from:"document_disposed_preventable",to:"document_disposed",action:this.u},{from:"document_disposed_preventable",to:"flush_logs",action:this.H},{from:"document_disposed_preventable",to:"document_active",action:this.i},{from:"document_disposed",to:"flush_logs",
action:this.H},{from:"document_disposed",to:"document_active",action:this.i},{from:"document_disposed",to:"document_disposed",action:function(){}},
{from:"flush_logs",to:"document_active",action:this.i}];window.addEventListener("pagehide",function(c){b.transition("document_disposed",{event:c})});
window.addEventListener("beforeunload",function(c){b.transition("document_disposed_preventable",{event:c})})}
v(xz,Tt);xz.prototype.G=function(a,b){if(!this.h.get("document_disposed_preventable")){a(b==null?void 0:b.event);var c,d;if((b==null?0:(c=b.event)==null?0:c.defaultPrevented)||(b==null?0:(d=b.event)==null?0:d.returnValue)){b.event.returnValue||(b.event.returnValue=!0);b.event.defaultPrevented||b.event.preventDefault();this.h=new Map;this.transition("document_active");return}}this.h.set("document_disposed_preventable",!0);this.h.get("document_disposed")?this.transition("flush_logs"):this.transition("document_disposed")};
xz.prototype.u=function(a,b){this.h.get("document_disposed")?this.transition("document_active"):(a(b==null?void 0:b.event),this.h.set("document_disposed",!0),this.transition("flush_logs"))};
xz.prototype.H=function(a,b){a(b==null?void 0:b.event);this.transition("document_active")};
xz.prototype.i=function(){this.h=new Map};function yz(a){Tt.call(this,a===void 0?"document_visibility_unknown":a);var b=this;this.transitions=[{from:"document_visibility_unknown",to:"document_visible",action:this.i},{from:"document_visibility_unknown",to:"document_hidden",action:this.h},{from:"document_visibility_unknown",to:"document_foregrounded",action:this.H},{from:"document_visibility_unknown",to:"document_backgrounded",action:this.u},{from:"document_visible",to:"document_hidden",action:this.h},{from:"document_visible",to:"document_foregrounded",
action:this.H},{from:"document_visible",to:"document_visible",action:this.i},{from:"document_foregrounded",to:"document_visible",action:this.i},{from:"document_foregrounded",to:"document_hidden",action:this.h},{from:"document_foregrounded",to:"document_foregrounded",action:this.H},{from:"document_hidden",to:"document_visible",action:this.i},{from:"document_hidden",to:"document_backgrounded",action:this.u},{from:"document_hidden",to:"document_hidden",action:this.h},{from:"document_backgrounded",to:"document_hidden",
action:this.h},{from:"document_backgrounded",to:"document_backgrounded",action:this.u},{from:"document_backgrounded",to:"document_visible",action:this.i}];document.addEventListener("visibilitychange",function(c){document.visibilityState==="visible"?b.transition("document_visible",{event:c}):b.transition("document_hidden",{event:c})});
T("visibility_lifecycles_dynamic_backgrounding")&&(window.addEventListener("blur",function(c){b.transition("document_backgrounded",{event:c})}),window.addEventListener("focus",function(c){b.transition("document_foregrounded",{event:c})}))}
v(yz,Tt);yz.prototype.i=function(a,b){a(b==null?void 0:b.event);T("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_foregrounded")};
yz.prototype.h=function(a,b){a(b==null?void 0:b.event);T("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_backgrounded")};
yz.prototype.u=function(a,b){a(b==null?void 0:b.event)};
yz.prototype.H=function(a,b){a(b==null?void 0:b.event)};function zz(){this.o=new xz;this.u=new yz}
zz.prototype.install=function(){var a=C.apply(0,arguments),b=this;a.forEach(function(c){b.o.install(c)});
a.forEach(function(c){b.u.install(c)})};function Az(){this.o=[];this.i=new Map;this.h=new Map;this.j=new Set}
Az.prototype.clickCommand=function(a,b,c){var d=a.clickTrackingParams;c=c===void 0?0:c;if(d)if(c=sv(c===void 0?0:c)){a=this.client;d=new lv({trackingParams:d});var e=void 0;if(T("no_client_ve_attach_unless_shown")){var f=Fw(d,c);Bw.set(f,!0);Gw(d,c)}e=e||"INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK";f=Ew({cttAuthInfo:uv(c)||void 0},c);d={csn:c,ve:d.getAsJson(),gestureType:e};b&&(d.clientData=b);c==="UNDEFINED_CSN"?Hw("visualElementGestured",f,d):a?Qu("visualElementGestured",d,a,f):jp("visualElementGestured",
d,f);b=!0}else b=!1;else b=!1;return b};
Az.prototype.stateChanged=function(a,b,c){this.visualElementStateChanged(new lv({trackingParams:a}),b,c===void 0?0:c)};
Az.prototype.visualElementStateChanged=function(a,b,c){c=c===void 0?0:c;if(c===0&&this.j.has(c))this.o.push([a,b]);else{var d=c;d=d===void 0?0:d;c=sv(d);a||(a=(a=pv(d===void 0?0:d))?new lv({veType:a,youtubeData:void 0,jspbYoutubeData:void 0}):null);var e=a;c&&e&&(a=this.client,d=Ew({cttAuthInfo:uv(c)||void 0},c),b={csn:c,ve:e.getAsJson(),clientData:b},c==="UNDEFINED_CSN"?Hw("visualElementStateChanged",d,b):a?Qu("visualElementStateChanged",b,a,d):jp("visualElementStateChanged",b,d))}};
function Bz(a,b){if(b===void 0)for(var c=rv(),d=0;d<c.length;d++)c[d]!==void 0&&Bz(a,c[d]);else a.i.forEach(function(e,f){(f=a.h.get(f))&&Dw(a.client,b,f,e)}),a.i.clear(),a.h.clear()}
;function Cz(){zz.call(this);var a={};this.install((a.document_disposed={callback:this.h},a));T("combine_ve_grafts")&&(a={},this.install((a.document_disposed={callback:this.i},a)));a={};this.install((a.flush_logs={callback:this.j},a));T("web_log_cfg_cee_ks")||vo(Dz)}
v(Cz,zz);Cz.prototype.j=function(){jp("finalPayload",{csn:sv()})};
Cz.prototype.h=function(){fv(gv)};
Cz.prototype.i=function(){var a=Bz;Az.instance||(Az.instance=new Az);a(Az.instance)};
function Dz(){var a=R("CLIENT_EXPERIMENT_EVENTS");if(a){var b=pe();a=y(a);for(var c=a.next();!c.done;c=a.next())c=c.value,b(c)&&jp("genericClientExperimentEvent",{eventType:c});delete Pm.CLIENT_EXPERIMENT_EVENTS}}
;function Ez(){}
function Fz(){var a=F("ytglobal.storage_");a||(a=new Ez,E("ytglobal.storage_",a));return a}
Ez.prototype.estimate=function(){var a,b,c;return B(function(d){a=navigator;return((b=a.storage)==null?0:b.estimate)?d.return(a.storage.estimate()):((c=a.webkitTemporaryStorage)==null?0:c.queryUsageAndQuota)?d.return(Gz()):d.return()})};
function Gz(){var a=navigator;return new Promise(function(b,c){var d;(d=a.webkitTemporaryStorage)!=null&&d.queryUsageAndQuota?a.webkitTemporaryStorage.queryUsageAndQuota(function(e,f){b({usage:e,quota:f})},function(e){c(e)}):c(Error("webkitTemporaryStorage is not supported."))})}
E("ytglobal.storageClass_",Ez);function hp(a,b){var c=this;this.handleError=a;this.h=b;this.i=!1;self.document===void 0||self.addEventListener("beforeunload",function(){c.i=!0});
this.j=Math.random()<=.2}
hp.prototype.Ha=function(a){this.handleError(a)};
hp.prototype.logEvent=function(a,b){switch(a){case "IDB_DATA_CORRUPTED":T("idb_data_corrupted_killswitch")||this.h("idbDataCorrupted",b);break;case "IDB_UNEXPECTEDLY_CLOSED":this.h("idbUnexpectedlyClosed",b);break;case "IS_SUPPORTED_COMPLETED":T("idb_is_supported_completed_killswitch")||this.h("idbIsSupportedCompleted",b);break;case "QUOTA_EXCEEDED":Hz(this,b);break;case "TRANSACTION_ENDED":this.j&&Math.random()<=.1&&this.h("idbTransactionEnded",b);break;case "TRANSACTION_UNEXPECTEDLY_ABORTED":a=
Object.assign({},b,{hasWindowUnloaded:this.i}),this.h("idbTransactionAborted",a)}};
function Hz(a,b){Fz().estimate().then(function(c){c=Object.assign({},b,{isSw:self.document===void 0,isIframe:self!==self.top,deviceStorageUsageMbytes:Iz(c==null?void 0:c.usage),deviceStorageQuotaMbytes:Iz(c==null?void 0:c.quota)});a.h("idbQuotaExceeded",c)})}
function Iz(a){return typeof a==="undefined"?"-1":String(Math.ceil(a/1048576))}
;var Jz={Nc:{feedbackEndpoint:ex(wy),modifyChannelNotificationPreferenceEndpoint:ex(xy),playlistEditEndpoint:ex(yy),shareEntityEndpoint:ex(vy),subscribeEndpoint:ex(sy),undoFeedbackEndpoint:ex(bz),unsubscribeEndpoint:ex(ty),webPlayerShareEntityServiceEndpoint:ex(zy)}};function Kz(){var a=Jt();Ft(a,{pb:Hy,Kc:Fy});Ft(a,{pb:wz,Kc:Xn});var b=$w(),c=a.resolve(wz),d=a.resolve(Hy),e={};b&&(e.client_location=b);jy(Jz,d,c,e);Ft(a,{pb:ry,nd:iy.instance})}
;var Lz={},Mz=(Lz["api.invalidparam"]=2,Lz.auth=150,Lz["drm.auth"]=150,Lz["heartbeat.net"]=150,Lz["heartbeat.servererror"]=150,Lz["heartbeat.stop"]=150,Lz["html5.unsupportedads"]=5,Lz["fmt.noneavailable"]=5,Lz["fmt.decode"]=5,Lz["fmt.unplayable"]=5,Lz["html5.missingapi"]=5,Lz["html5.unsupportedlive"]=5,Lz["drm.unavailable"]=5,Lz["mrm.blocked"]=151,Lz["embedder.identity.denied"]=152,Lz);var Nz=new Set("endSeconds startSeconds mediaContentUrl suggestedQuality videoId rct rctn playmuted muted_autoplay_duration_mode".split(" "));function Oz(a){return(a.search("cue")===0||a.search("load")===0)&&a!=="loadModule"}
function Pz(a,b,c){if(typeof a==="string")return{videoId:a,startSeconds:b,suggestedQuality:c};b={};c=y(Nz);for(var d=c.next();!d.done;d=c.next())d=d.value,a[d]&&(b[d]=a[d]);return b}
function Qz(a,b,c,d){if(Na(a)&&!Array.isArray(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};typeof a==="string"&&a.length===16?b.list="PL"+a:b.playlist=a;return b}
;function Rz(a){I.call(this);var b=this;this.api=a;this.Y=this.u=!1;this.A=[];this.P={};this.j=[];this.i=[];this.Z=!1;this.sessionId=this.h=null;this.targetOrigin="*";this.U=T("web_player_split_event_bus_iframe");this.o=R("POST_MESSAGE_ORIGIN")||document.location.protocol+"//"+document.location.hostname;this.G=function(c){a:if(!(b.o!=="*"&&c.origin!==b.o||b.h&&c.source!==b.h||typeof c.data!=="string")){try{var d=JSON.parse(c.data)}catch(h){break a}if(d)switch(d.event){case "listening":var e=c.source;
c=c.origin;d=d.id;c!=="null"&&(b.o=b.targetOrigin=c);b.h=e;b.sessionId=d;if(b.u){b.Y=!0;b.u=!1;b.sendMessage("initialDelivery",Sz(b));b.sendMessage("onReady");e=y(b.A);for(d=e.next();!d.done;d=e.next())Tz(b,d.value);b.A=[]}break;case "command":if(e=d.func,d=d.args,e==="addEventListener"&&d)e=d[0],d=c.origin,e==="onReady"?b.api.logApiCall(e+" invocation",d):e==="onError"&&b.Z&&(b.api.logApiCall(e+" invocation",d,b.errorCode),b.errorCode=void 0),b.api.logApiCall(e+" registration",d),b.P[e]||e==="onReady"||
(c=Uz(b,e,d),b.i.push({eventType:e,listener:c,origin:d}),b.U?b.api.handleExternalCall("addEventListener",[e,c],d):b.api.addEventListener(e,c),b.P[e]=!0);else if(c=c.origin,b.api.isExternalMethodAvailable(e,c)){d=d||[];if(d.length>0&&Oz(e)){var f=d;if(Na(f[0])&&!Array.isArray(f[0]))var g=f[0];else switch(g={},e){case "loadVideoById":case "cueVideoById":g=Pz(f[0],f[1]!==void 0?Number(f[1]):void 0,f[2]);break;case "loadVideoByUrl":case "cueVideoByUrl":g=f[0];typeof g==="string"&&(g={mediaContentUrl:g,
startSeconds:f[1]!==void 0?Number(f[1]):void 0,suggestedQuality:f[2]});c:{if((f=g.mediaContentUrl)&&(f=/\/([ve]|embed)\/([^#?]+)/.exec(f))&&f[2]){f=f[2];break c}f=null}g.videoId=f;g=Pz(g);break;case "loadPlaylist":case "cuePlaylist":g=Qz(f[0],f[1],f[2],f[3])}d.length=1;d[0]=g}b.api.handleExternalCall(e,d,c);Oz(e)&&Vz(b,Sz(b))}}}};
Wz.addEventListener("message",this.G);if(a=R("WIDGET_ID"))this.sessionId=a;Xz(this,"onReady",function(){b.u=!0;var c=b.api.getVideoData();if(!c.isPlayable){b.Z=!0;c=c.errorCode;var d=d===void 0?5:d;b.errorCode=c?Mz[c]||d:d;b.sendMessage("onError",Number(b.errorCode))}});
Xz(this,"onVideoProgress",this.pf.bind(this));Xz(this,"onVolumeChange",this.qf.bind(this));Xz(this,"onApiChange",this.gf.bind(this));Xz(this,"onPlaybackQualityChange",this.lf.bind(this));Xz(this,"onPlaybackRateChange",this.mf.bind(this));Xz(this,"onStateChange",this.nf.bind(this));Xz(this,"onWebglSettingsChanged",this.rf.bind(this));Xz(this,"onCaptionsTrackListChanged",this.hf.bind(this));Xz(this,"captionssettingschanged",this.jf.bind(this))}
v(Rz,I);function Vz(a,b){a.sendMessage("infoDelivery",b)}
p=Rz.prototype;p.sendMessage=function(a,b){a={event:a,info:b===void 0?null:b};this.Y?Tz(this,a):this.A.push(a)};
function Uz(a,b,c){return function(d){b==="onError"?a.api.logApiCall(b+" invocation",c,d):a.api.logApiCall(b+" invocation",c);a.sendMessage(b,d)}}
function Xz(a,b,c){a.j.push({eventType:b,listener:c});a.api.addEventListener(b,c)}
function Sz(a){if(!a.api)return null;var b=a.api.getApiInterface();$b(b,"getVideoData");for(var c={apiInterface:b},d=0,e=b.length;d<e;d++){var f=b[d];if(f.search("get")===0||f.search("is")===0){var g=0;f.search("get")===0?g=3:f.search("is")===0&&(g=2);g=f.charAt(g).toLowerCase()+f.substring(g+1);try{var h=a.api[f]();c[g]=h}catch(k){}}}c.videoData=a.api.getVideoData();c.currentTimeLastUpdated_=Date.now()/1E3;return c}
p.nf=function(a){a={playerState:a,currentTime:this.api.getCurrentTime(),duration:this.api.getDuration(),videoData:this.api.getVideoData(),videoStartBytes:0,videoBytesTotal:this.api.getVideoBytesTotal(),videoLoadedFraction:this.api.getVideoLoadedFraction(),playbackQuality:this.api.getPlaybackQuality(),availableQualityLevels:this.api.getAvailableQualityLevels(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getVideoUrl&&
(a.videoUrl=this.api.getVideoUrl());this.api.getVideoContentRect&&(a.videoContentRect=this.api.getVideoContentRect());this.api.getProgressState&&(a.progressState=this.api.getProgressState());this.api.getPlaylist&&(a.playlist=this.api.getPlaylist());this.api.getPlaylistIndex&&(a.playlistIndex=this.api.getPlaylistIndex());this.api.getStoryboardFormat&&!T("embeds_enable_vfsyb")&&(a.storyboardFormat=this.api.getStoryboardFormat());Vz(this,a)};
p.lf=function(a){a={playbackQuality:a};this.api.getAvailableQualityLevels&&(a.availableQualityLevels=this.api.getAvailableQualityLevels());this.api.getPreferredQuality&&(a.preferredQuality=this.api.getPreferredQuality());Vz(this,a)};
p.mf=function(a){Vz(this,{playbackRate:a})};
p.gf=function(){for(var a=this.api.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.api.getOptions(e);a.join(", ");b[e]={options:f};for(var g=0,h=f.length;g<h;g++){var k=f[g],l=this.api.getOption(e,k);b[e][k]=l}}this.sendMessage("apiInfoDelivery",b)};
p.qf=function(){Vz(this,{muted:this.api.isMuted(),volume:this.api.getVolume()})};
p.pf=function(a){a={currentTime:a,videoBytesLoaded:this.api.getVideoBytesLoaded(),videoLoadedFraction:this.api.getVideoLoadedFraction(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getProgressState&&(a.progressState=this.api.getProgressState());Vz(this,a)};
p.rf=function(){Vz(this,{sphericalProperties:this.api.getSphericalProperties()})};
p.hf=function(){if(this.api.getCaptionTracks){var a={captionTracks:this.api.getCaptionTracks()};Vz(this,a)}};
p.jf=function(){if(this.api.getSubtitlesUserSettings){var a={subtitlesUserSettings:this.api.getSubtitlesUserSettings()};Vz(this,a)}};
function Tz(a,b){if(a.h){b.channel="widget";a.sessionId&&(b.id=a.sessionId);try{var c=JSON.stringify(b);a.h.postMessage(c,a.targetOrigin)}catch(d){$u(d)}}}
p.ba=function(){I.prototype.ba.call(this);Wz.removeEventListener("message",this.G);for(var a=0;a<this.j.length;a++){var b=this.j[a];this.api.removeEventListener(b.eventType,b.listener)}this.j=[];for(a=0;a<this.i.length;a++)b=this.i[a],this.U?this.api.handleExternalCall("removeEventListener",[b.eventType,b.listener],b.origin):this.api.removeEventListener(b.eventType,b.listener);this.i=[]};
var Wz=window;function Yz(a,b,c){I.call(this);var d=this;this.api=a;this.id=b;this.origin=c;this.h={};this.j=T("web_player_split_event_bus_iframe");this.i=function(e){a:if(e.origin===d.origin){var f=e.data;if(typeof f==="string"){try{f=JSON.parse(f)}catch(k){break a}if(f.command){var g=f.command;f=f.data;e=e.origin;if(!d.ea){var h=f||{};switch(g){case "addEventListener":typeof h.event==="string"&&d.addListener(h.event,e);break;case "removeEventListener":typeof h.event==="string"&&d.removeListener(h.event,e);break;
default:d.api.isReady()&&d.api.isExternalMethodAvailable(g,e||null)&&(f=Zz(g,f||{}),f=d.api.handleExternalCall(g,f,e||null),(f=$z(g,f))&&aA(d,g,f))}}}}}};
bA.addEventListener("message",this.i);aA(this,"RECEIVING")}
v(Yz,I);p=Yz.prototype;p.addListener=function(a,b){if(!(a in this.h)){var c=this.kf.bind(this,a);this.h[a]=c;this.addEventListener(a,c,b)}};
p.kf=function(a,b){this.ea||aA(this,a,cA(a,b))};
p.removeListener=function(a,b){a in this.h&&(this.removeEventListener(a,this.h[a],b),delete this.h[a])};
p.addEventListener=function(a,b,c){this.j?a==="onReady"?this.api.addEventListener(a,b):this.api.handleExternalCall("addEventListener",[a,b],c||null):this.api.addEventListener(a,b)};
p.removeEventListener=function(a,b,c){this.j?a==="onReady"?this.api.removeEventListener(a,b):this.api.handleExternalCall("removeEventListener",[a,b],c||null):this.api.removeEventListener(a,b)};
function Zz(a,b){switch(a){case "loadVideoById":return[Pz(b)];case "cueVideoById":return[Pz(b)];case "loadVideoByPlayerVars":return[b];case "cueVideoByPlayerVars":return[b];case "loadPlaylist":return[Qz(b)];case "cuePlaylist":return[Qz(b)];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];case "setLoop":return[b.loopPlaylists];case "setShuffle":return[b.shufflePlaylist];
case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey,b.ctrlKey,b.altKey,b.metaKey,b.key,b.code]}return[]}
function $z(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
function cA(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}if(b!=null)return{value:b}}
function aA(a,b,c){a.ea||(b={id:a.id,command:b},c&&(b.data=c),dA.postMessage(JSON.stringify(b),a.origin))}
p.ba=function(){bA.removeEventListener("message",this.i);for(var a in this.h)this.h.hasOwnProperty(a)&&this.removeListener(a);I.prototype.ba.call(this)};
var bA=window,dA=window.parent;var eA=new vz;function fA(){return eA.od()}
function gA(a){a=a===void 0?{}:a;return eA.invoke(a)}
;function hA(a,b,c,d,e){I.call(this);var f=this;this.A=b;this.webPlayerContextConfig=d;this.Mb=e;this.Qa=!1;this.api={};this.ma=this.u=null;this.U=new N;this.h={};this.Z=this.xa=this.elementId=this.Ra=this.config=null;this.Y=!1;this.j=this.G=null;this.Fa={};this.Lc=["onReady"];this.lastError=null;this.fb=NaN;this.P={};this.ha=0;this.i=this.o=a;Ec(this,this.U);iA(this);c?this.ha=setTimeout(function(){f.loadNewVideoConfig(c)},0):d&&(jA(this),kA(this))}
v(hA,I);p=hA.prototype;p.getId=function(){return this.A};
p.loadNewVideoConfig=function(a){if(!this.ea){this.ha&&(clearTimeout(this.ha),this.ha=0);var b=a||{};b instanceof Uv||(b=new Uv(b));this.config=b;this.setConfig(a);kA(this);this.isReady()&&lA(this)}};
function jA(a){var b;a.webPlayerContextConfig?b=a.webPlayerContextConfig.rootElementId:b=a.config.attrs.id;a.elementId=b||a.elementId;a.elementId==="video-player"&&(a.elementId=a.A,a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.A:a.config.attrs.id=a.A);var c;((c=a.i)==null?void 0:c.id)===a.elementId&&(a.elementId+="-player",a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.elementId:a.config.attrs.id=a.elementId)}
p.setConfig=function(a){this.Ra=a;this.config=mA(a);jA(this);if(!this.xa){var b;this.xa=nA(this,((b=this.config.args)==null?void 0:b.jsapicallback)||"onYouTubePlayerReady")}this.config.args?this.config.args.jsapicallback=null:this.config.args={jsapicallback:null};var c;if((c=this.config)==null?0:c.attrs)a=this.config.attrs,(b=a.width)&&this.i&&(this.i.style.width=Yj(Number(b)||b)),(a=a.height)&&this.i&&(this.i.style.height=Yj(Number(a)||a))};
function lA(a){if(a.config&&a.config.loaded!==!0)if(a.config.loaded=!0,!a.config.args||a.config.args.autoplay!=="0"&&a.config.args.autoplay!==0&&a.config.args.autoplay!==!1){var b;a.api.loadVideoByPlayerVars((b=a.config.args)!=null?b:null)}else a.api.cueVideoByPlayerVars(a.config.args)}
function oA(a){var b=!0,c=pA(a);c&&a.config&&(b=c.dataset.version===qA(a));return b&&!!F("yt.player.Application.create")}
function kA(a){if(!a.ea&&!a.Y){var b=oA(a);if(b&&(pA(a)?"html5":null)==="html5")a.Z="html5",a.isReady()||rA(a);else if(sA(a),a.Z="html5",b&&a.j&&a.o)a.o.appendChild(a.j),rA(a);else{a.config&&(a.config.loaded=!0);var c=!1;a.G=function(){c=!0;var d=tA(a,"player_bootstrap_method")?F("yt.player.Application.createAlternate")||F("yt.player.Application.create"):F("yt.player.Application.create");var e=a.config?mA(a.config):void 0;d&&d(a.o,e,a.webPlayerContextConfig,a.Mb);rA(a)};
a.Y=!0;b?a.G():(ew(qA(a),a.G),(b=uA(a))&&lw(b||""),vA(a)&&!c&&E("yt.player.Application.create",null))}}}
function pA(a){var b=Pg(a.elementId);!b&&a.i&&a.i.querySelector&&(b=a.i.querySelector("#"+a.elementId));return b}
function rA(a){if(!a.ea){var b=pA(a),c=!1;b&&b.getApiInterface&&b.getApiInterface()&&(c=!0);if(c){a.Y=!1;if(!tA(a,"html5_remove_not_servable_check_killswitch")){var d;if((b==null?0:b.isNotServable)&&a.config&&(b==null?0:b.isNotServable((d=a.config.args)==null?void 0:d.video_id)))return}wA(a)}else a.fb=setTimeout(function(){rA(a)},50)}}
function wA(a){iA(a);a.Qa=!0;var b=pA(a);if(b){a.u=xA(a,b,"addEventListener");a.ma=xA(a,b,"removeEventListener");var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=a.api,e=0;e<c.length;e++){var f=c[e];d[f]||(d[f]=xA(a,b,f))}}for(var g in a.h)a.h.hasOwnProperty(g)&&a.u&&a.u(g,a.h[g]);lA(a);a.xa&&a.xa(a.api);a.U.sb("onReady",a.api)}
function xA(a,b,c){var d=b[c];return function(){var e=C.apply(0,arguments);try{return a.lastError=null,d.apply(b,e)}catch(f){if(c!=="sendAbandonmentPing")throw f.params=c,a.lastError=f,e=new U("PlayerProxy error in method call",{error:f,method:c,playerId:a.A}),e.level="WARNING",e;}}}
function iA(a){a.Qa=!1;if(a.ma)for(var b in a.h)a.h.hasOwnProperty(b)&&a.ma(b,a.h[b]);for(var c in a.P)a.P.hasOwnProperty(c)&&clearTimeout(Number(c));a.P={};a.u=null;a.ma=null;b=a.api;for(var d in b)b.hasOwnProperty(d)&&(b[d]=null);b.addEventListener=function(e,f){a.addEventListener(e,f)};
b.removeEventListener=function(e,f){a.removeEventListener(e,f)};
b.destroy=function(){a.dispose()};
b.getLastError=function(){return a.getLastError()};
b.getPlayerType=function(){return a.getPlayerType()};
b.getCurrentVideoConfig=function(){return a.Ra};
b.loadNewVideoConfig=function(e){a.loadNewVideoConfig(e)};
b.isReady=function(){return a.isReady()}}
p.isReady=function(){return this.Qa};
p.addEventListener=function(a,b){var c=this,d=nA(this,b);d&&(Ub(this.Lc,a)>=0||this.h[a]||(b=yA(this,a),this.u&&this.u(a,b)),this.U.subscribe(a,d),a==="onReady"&&this.isReady()&&setTimeout(function(){d(c.api)},0))};
p.removeEventListener=function(a,b){this.ea||(b=nA(this,b))&&this.U.unsubscribe(a,b)};
function nA(a,b){var c=b;if(typeof b==="string"){if(a.Fa[b])return a.Fa[b];c=function(){var d=C.apply(0,arguments),e=F(b);if(e)try{e.apply(D,d)}catch(f){throw d=new U("PlayerProxy error when executing callback",{error:f}),d.level="ERROR",d;}};
a.Fa[b]=c}return c?c:null}
function yA(a,b){function c(d){function e(){if(!a.ea)try{a.U.sb(b,d!=null?d:void 0)}catch(h){var g=new U("PlayerProxy error when creating global callback",{error:h.message,event:b,playerId:a.A,data:d,originalStack:h.stack,componentStack:h.ke});g.level="WARNING";throw g;}}
if(tA(a,"web_player_publish_events_immediately"))e();else{var f=setTimeout(function(){e();var g=a.P,h=String(f);h in g&&delete g[h]},0);
Gg(a.P,String(f))}}
return a.h[b]=c}
p.getPlayerType=function(){return this.Z||(pA(this)?"html5":null)};
p.getLastError=function(){return this.lastError};
function sA(a){a.cancel();iA(a);a.Z=null;a.config&&(a.config.loaded=!1);var b=pA(a);b&&(oA(a)||!vA(a)?a.j=b:(b&&b.destroy&&b.destroy(),a.j=null));if(a.o)for(a=a.o;b=a.firstChild;)a.removeChild(b)}
p.cancel=function(){this.G&&iw(qA(this),this.G);clearTimeout(this.fb);this.Y=!1};
p.ba=function(){sA(this);if(this.j&&this.config&&this.j.destroy)try{this.j.destroy()}catch(b){var a=new U("PlayerProxy error during disposal",{error:b});a.level="ERROR";throw a;}this.Fa=null;for(a in this.h)this.h.hasOwnProperty(a)&&delete this.h[a];this.Ra=this.config=this.api=null;delete this.o;delete this.i;I.prototype.ba.call(this)};
function vA(a){var b,c;a=(b=a.config)==null?void 0:(c=b.args)==null?void 0:c.fflags;return!!a&&a.indexOf("player_destroy_old_version=true")!==-1}
function qA(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.jsUrl:(a=a.config.assets)?a.js:""}
function uA(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.cssUrl:(a=a.config.assets)?a.css:""}
function tA(a,b){if(a.webPlayerContextConfig)var c=a.webPlayerContextConfig.serializedExperimentFlags;else{var d;if((d=a.config)==null?0:d.args)c=a.config.args.fflags}return(c||"").split("&").includes(b+"=true")}
function mA(a){for(var b={},c=y(Object.keys(a)),d=c.next();!d.done;d=c.next()){d=d.value;var e=a[d];b[d]=typeof e==="object"?Jg(e):e}return b}
;var zA={},AA="player_uid_"+(Math.random()*1E9>>>0);function BA(a,b){var c="player",d=!1;d=d===void 0?!0:d;c=typeof c==="string"?Pg(c):c;var e=AA+"_"+Oa(c),f=zA[e];if(f&&d)return CA(a,b)?f.api.loadVideoByPlayerVars(a.args||null):f.loadNewVideoConfig(a),f.api;f=new hA(c,e,a,b,void 0);zA[e]=f;f.addOnDisposeCallback(function(){delete zA[f.getId()]});
return f.api}
function CA(a,b){return b&&b.serializedExperimentFlags?b.serializedExperimentFlags.includes("web_player_remove_playerproxy=true"):a&&a.args&&a.args.fflags?a.args.fflags.includes("web_player_remove_playerproxy=true"):!1}
;var DA=null,EA=null;
function FA(){ey();var a=io(),b=lo(119),c=window.devicePixelRatio>1;if(document.body&&mk(document.body,"exp-invert-logo"))if(c&&!mk(document.body,"inverted-hdpi")){var d=document.body;if(d.classList)d.classList.add("inverted-hdpi");else if(!mk(d,"inverted-hdpi")){var e=kk(d);lk(d,e+(e.length>0?" inverted-hdpi":"inverted-hdpi"))}}else!c&&mk(document.body,"inverted-hdpi")&&nk();if(b!=c){b="f"+(Math.floor(119/31)+1);d=mo(b)||0;d=c?d|67108864:d&-67108865;d===0?delete fo[b]:(c=d.toString(16),fo[b]=c.toString());
c=!0;T("web_secure_pref_cookie_killswitch")&&(c=!1);b=a.h;d=[];for(f in fo)fo.hasOwnProperty(f)&&d.push(f+"="+encodeURIComponent(String(fo[f])));var f=d.join("&");ao(b,f,63072E3,a.i,c)}}
function GA(){HA()}
function IA(){$x("ep_init_pr");HA()}
function HA(){var a=DA.getVideoData(1);a=a.title?a.title+" - YouTube":"YouTube";document.title!==a&&(document.title=a)}
function JA(){DA&&DA.sendAbandonmentPing&&DA.sendAbandonmentPing();R("PL_ATT")&&eA.dispose();for(var a=ek,b=0,c=Ny.length;b<c;b++)a.qa(Ny[b]);Ny.length=0;gw("//static.doubleclick.net/instream/ad_status.js");Oy=!1;Qm("DCLKSTAT",0);Dc(EA);DA&&(DA.removeEventListener("onVideoDataChange",GA),DA.destroy())}
;$x("ep_init_eps");E("yt.setConfig",Qm);E("yt.config.set",Qm);E("yt.setMsg",dw);E("yt.msgs.set",dw);E("yt.logging.errors.log",Zu);
E("writeEmbed",function(){$x("ep_init_wes");var a=R("PLAYER_CONFIG");if(!a){var b=R("PLAYER_VARS");b&&(a={args:b})}Rw(!0);a.args.ps==="gvn"&&(document.body.style.backgroundColor="transparent");a.attrs||(a.attrs={width:"100%",height:"100%",id:"video-player"});var c=document.referrer;b=R("POST_MESSAGE_ORIGIN");window!==window.top&&c&&c!==document.URL&&(a.args.loaderUrl=c);c=dz();if(!c.serializedForcedExperimentIds){var d=dn(window.location.href);d.forced_experiments&&(c.serializedForcedExperimentIds=
d.forced_experiments)}var e;((e=a.args)==null?0:e.autoplay)?Wx("watch",["pbs","pbu","pbp"]):a.args&&Gv(a.args)?Wx("video_preview",["ol"]):Wx("embed_no_video",["ep_init_pr"]);DA=BA(a,c);DA.addEventListener("onVideoDataChange",GA);DA.addEventListener("onReady",IA);a=R("POST_MESSAGE_ID","player");R("ENABLE_JS_API")?EA=new Rz(DA):R("ENABLE_POST_API")&&typeof a==="string"&&typeof b==="string"&&(EA=new Yz(DA,a,b));Py();T("ytidb_create_logger_embed_killswitch")||gp();a={};Cz.h||(Cz.h=new Cz);Cz.h.install((a.flush_logs=
{callback:function(){Du()}},a));
Xs();if(T("embeds_enable_separate_ITS")){Kz();var f=function(){return iy.instance}}else f=function(){var g,h;
if(!Iy){var k=Jt();Ft(k,{pb:Hy,Kc:Fy});var l={Nc:{feedbackEndpoint:ex(wy),modifyChannelNotificationPreferenceEndpoint:ex(xy),playlistEditEndpoint:ex(yy),shareEntityEndpoint:ex(vy),subscribeEndpoint:ex(sy),unsubscribeEndpoint:ex(ty),webPlayerShareEntityServiceEndpoint:ex(zy)}},m=$w(),n={};m&&(n.client_location=m);g===void 0&&(g=Yn());h===void 0&&(h=k.resolve(Hy));jy(l,h,g,n);Ft(k,{pb:ry,nd:iy.instance});Iy=k.resolve(ry)}return Iy};
T("ytidb_clear_embedded_player")&&ek.pa(function(){f();pz()});
T("enable_rta_manager")&&vo(function(){var g=new $y(f());var h={preload:!T("enable_rta_npi")},k=!1;if(typeof h==="boolean")var l={preload:h};else typeof h==="undefined"?l={preload:!0}:(l=h,k=!!h.Gh);h=k?void 0:new Hs;Ry.instance=new Ry(g,l,h);g=Ry.instance;l=g.i.bind(g);E("yt.aba.att",l);g=g.j.bind(g);E("yt.aba.att2",g)});
$x("ep_init_wee")});
E("yt.abuse.player.botguardInitialized",F("yt.abuse.player.botguardInitialized")||fA);E("yt.abuse.player.invokeBotguard",F("yt.abuse.player.invokeBotguard")||gA);E("yt.abuse.dclkstatus.checkDclkStatus",F("yt.abuse.dclkstatus.checkDclkStatus")||Qy);E("yt.player.exports.navigate",F("yt.player.exports.navigate")||Qw);E("yt.util.activity.init",F("yt.util.activity.init")||lt);E("yt.util.activity.getTimeSinceActive",F("yt.util.activity.getTimeSinceActive")||ot);
E("yt.util.activity.setTimestamp",F("yt.util.activity.setTimestamp")||mt);window.addEventListener("load",Um(function(){FA()}));
window.addEventListener("pageshow",Um(function(a){a.persisted||FA()}));
window.addEventListener("pagehide",Um(function(a){T("embeds_web_enable_dispose_player_if_page_not_cached_killswitch")?JA():a.persisted||JA()}));
T("embeds_enable_contrib_error_handling")?cz():(window.onerror=function(a,b,c,d,e){bv(a,b,c,d,e)},Ui=av,window.addEventListener("unhandledrejection",function(a){av(a.reason)}),Yu());
$x("ep_init_epe");}).call(this);
