(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();var td={exports:{}},Po={};var R0;function MS(){if(R0)return Po;R0=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,u){var d=null;if(u!==void 0&&(d=""+u),l.key!==void 0&&(d=""+l.key),"key"in l){u={};for(var h in l)h!=="key"&&(u[h]=l[h])}else u=l;return l=u.ref,{$$typeof:o,type:r,key:d,ref:l!==void 0?l:null,props:u}}return Po.Fragment=e,Po.jsx=i,Po.jsxs=i,Po}var C0;function yS(){return C0||(C0=1,td.exports=MS()),td.exports}var ei=yS(),ed={exports:{}},de={};var w0;function ES(){if(w0)return de;w0=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),x=Symbol.iterator;function E(U){return U===null||typeof U!="object"?null:(U=x&&U[x]||U["@@iterator"],typeof U=="function"?U:null)}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,M={};function S(U,j,mt){this.props=U,this.context=j,this.refs=M,this.updater=mt||A}S.prototype.isReactComponent={},S.prototype.setState=function(U,j){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,j,"setState")},S.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function F(){}F.prototype=S.prototype;function N(U,j,mt){this.props=U,this.context=j,this.refs=M,this.updater=mt||A}var O=N.prototype=new F;O.constructor=N,C(O,S.prototype),O.isPureReactComponent=!0;var I=Array.isArray;function H(){}var P={H:null,A:null,T:null,S:null},K=Object.prototype.hasOwnProperty;function R(U,j,mt){var Rt=mt.ref;return{$$typeof:o,type:U,key:j,ref:Rt!==void 0?Rt:null,props:mt}}function D(U,j){return R(U.type,j,U.props)}function X(U){return typeof U=="object"&&U!==null&&U.$$typeof===o}function rt(U){var j={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(mt){return j[mt]})}var at=/\/+/g;function ft(U,j){return typeof U=="object"&&U!==null&&U.key!=null?rt(""+U.key):j.toString(36)}function ut(U){switch(U.status){case"fulfilled":return U.value;case"rejected":throw U.reason;default:switch(typeof U.status=="string"?U.then(H,H):(U.status="pending",U.then(function(j){U.status==="pending"&&(U.status="fulfilled",U.value=j)},function(j){U.status==="pending"&&(U.status="rejected",U.reason=j)})),U.status){case"fulfilled":return U.value;case"rejected":throw U.reason}}throw U}function L(U,j,mt,Rt,Gt){var $=typeof U;($==="undefined"||$==="boolean")&&(U=null);var dt=!1;if(U===null)dt=!0;else switch($){case"bigint":case"string":case"number":dt=!0;break;case"object":switch(U.$$typeof){case o:case e:dt=!0;break;case _:return dt=U._init,L(dt(U._payload),j,mt,Rt,Gt)}}if(dt)return Gt=Gt(U),dt=Rt===""?"."+ft(U,0):Rt,I(Gt)?(mt="",dt!=null&&(mt=dt.replace(at,"$&/")+"/"),L(Gt,j,mt,"",function(Vt){return Vt})):Gt!=null&&(X(Gt)&&(Gt=D(Gt,mt+(Gt.key==null||U&&U.key===Gt.key?"":(""+Gt.key).replace(at,"$&/")+"/")+dt)),j.push(Gt)),1;dt=0;var Dt=Rt===""?".":Rt+":";if(I(U))for(var kt=0;kt<U.length;kt++)Rt=U[kt],$=Dt+ft(Rt,kt),dt+=L(Rt,j,mt,$,Gt);else if(kt=E(U),typeof kt=="function")for(U=kt.call(U),kt=0;!(Rt=U.next()).done;)Rt=Rt.value,$=Dt+ft(Rt,kt++),dt+=L(Rt,j,mt,$,Gt);else if($==="object"){if(typeof U.then=="function")return L(ut(U),j,mt,Rt,Gt);throw j=String(U),Error("Objects are not valid as a React child (found: "+(j==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":j)+"). If you meant to render a collection of children, use an array instead.")}return dt}function G(U,j,mt){if(U==null)return U;var Rt=[],Gt=0;return L(U,Rt,"","",function($){return j.call(mt,$,Gt++)}),Rt}function it(U){if(U._status===-1){var j=U._result;j=j(),j.then(function(mt){(U._status===0||U._status===-1)&&(U._status=1,U._result=mt)},function(mt){(U._status===0||U._status===-1)&&(U._status=2,U._result=mt)}),U._status===-1&&(U._status=0,U._result=j)}if(U._status===1)return U._result.default;throw U._result}var xt=typeof reportError=="function"?reportError:function(U){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var j=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof U=="object"&&U!==null&&typeof U.message=="string"?String(U.message):String(U),error:U});if(!window.dispatchEvent(j))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",U);return}console.error(U)},St={map:G,forEach:function(U,j,mt){G(U,function(){j.apply(this,arguments)},mt)},count:function(U){var j=0;return G(U,function(){j++}),j},toArray:function(U){return G(U,function(j){return j})||[]},only:function(U){if(!X(U))throw Error("React.Children.only expected to receive a single React element child.");return U}};return de.Activity=g,de.Children=St,de.Component=S,de.Fragment=i,de.Profiler=l,de.PureComponent=N,de.StrictMode=r,de.Suspense=m,de.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P,de.__COMPILER_RUNTIME={__proto__:null,c:function(U){return P.H.useMemoCache(U)}},de.cache=function(U){return function(){return U.apply(null,arguments)}},de.cacheSignal=function(){return null},de.cloneElement=function(U,j,mt){if(U==null)throw Error("The argument must be a React element, but you passed "+U+".");var Rt=C({},U.props),Gt=U.key;if(j!=null)for($ in j.key!==void 0&&(Gt=""+j.key),j)!K.call(j,$)||$==="key"||$==="__self"||$==="__source"||$==="ref"&&j.ref===void 0||(Rt[$]=j[$]);var $=arguments.length-2;if($===1)Rt.children=mt;else if(1<$){for(var dt=Array($),Dt=0;Dt<$;Dt++)dt[Dt]=arguments[Dt+2];Rt.children=dt}return R(U.type,Gt,Rt)},de.createContext=function(U){return U={$$typeof:d,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null},U.Provider=U,U.Consumer={$$typeof:u,_context:U},U},de.createElement=function(U,j,mt){var Rt,Gt={},$=null;if(j!=null)for(Rt in j.key!==void 0&&($=""+j.key),j)K.call(j,Rt)&&Rt!=="key"&&Rt!=="__self"&&Rt!=="__source"&&(Gt[Rt]=j[Rt]);var dt=arguments.length-2;if(dt===1)Gt.children=mt;else if(1<dt){for(var Dt=Array(dt),kt=0;kt<dt;kt++)Dt[kt]=arguments[kt+2];Gt.children=Dt}if(U&&U.defaultProps)for(Rt in dt=U.defaultProps,dt)Gt[Rt]===void 0&&(Gt[Rt]=dt[Rt]);return R(U,$,Gt)},de.createRef=function(){return{current:null}},de.forwardRef=function(U){return{$$typeof:h,render:U}},de.isValidElement=X,de.lazy=function(U){return{$$typeof:_,_payload:{_status:-1,_result:U},_init:it}},de.memo=function(U,j){return{$$typeof:p,type:U,compare:j===void 0?null:j}},de.startTransition=function(U){var j=P.T,mt={};P.T=mt;try{var Rt=U(),Gt=P.S;Gt!==null&&Gt(mt,Rt),typeof Rt=="object"&&Rt!==null&&typeof Rt.then=="function"&&Rt.then(H,xt)}catch($){xt($)}finally{j!==null&&mt.types!==null&&(j.types=mt.types),P.T=j}},de.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()},de.use=function(U){return P.H.use(U)},de.useActionState=function(U,j,mt){return P.H.useActionState(U,j,mt)},de.useCallback=function(U,j){return P.H.useCallback(U,j)},de.useContext=function(U){return P.H.useContext(U)},de.useDebugValue=function(){},de.useDeferredValue=function(U,j){return P.H.useDeferredValue(U,j)},de.useEffect=function(U,j){return P.H.useEffect(U,j)},de.useEffectEvent=function(U){return P.H.useEffectEvent(U)},de.useId=function(){return P.H.useId()},de.useImperativeHandle=function(U,j,mt){return P.H.useImperativeHandle(U,j,mt)},de.useInsertionEffect=function(U,j){return P.H.useInsertionEffect(U,j)},de.useLayoutEffect=function(U,j){return P.H.useLayoutEffect(U,j)},de.useMemo=function(U,j){return P.H.useMemo(U,j)},de.useOptimistic=function(U,j){return P.H.useOptimistic(U,j)},de.useReducer=function(U,j,mt){return P.H.useReducer(U,j,mt)},de.useRef=function(U){return P.H.useRef(U)},de.useState=function(U){return P.H.useState(U)},de.useSyncExternalStore=function(U,j,mt){return P.H.useSyncExternalStore(U,j,mt)},de.useTransition=function(){return P.H.useTransition()},de.version="19.2.3",de}var D0;function Nh(){return D0||(D0=1,ed.exports=ES()),ed.exports}var Ri=Nh(),nd={exports:{}},Fo={},id={exports:{}},ad={};var U0;function TS(){return U0||(U0=1,(function(o){function e(L,G){var it=L.length;L.push(G);t:for(;0<it;){var xt=it-1>>>1,St=L[xt];if(0<l(St,G))L[xt]=G,L[it]=St,it=xt;else break t}}function i(L){return L.length===0?null:L[0]}function r(L){if(L.length===0)return null;var G=L[0],it=L.pop();if(it!==G){L[0]=it;t:for(var xt=0,St=L.length,U=St>>>1;xt<U;){var j=2*(xt+1)-1,mt=L[j],Rt=j+1,Gt=L[Rt];if(0>l(mt,it))Rt<St&&0>l(Gt,mt)?(L[xt]=Gt,L[Rt]=it,xt=Rt):(L[xt]=mt,L[j]=it,xt=j);else if(Rt<St&&0>l(Gt,it))L[xt]=Gt,L[Rt]=it,xt=Rt;else break t}}return G}function l(L,G){var it=L.sortIndex-G.sortIndex;return it!==0?it:L.id-G.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var d=Date,h=d.now();o.unstable_now=function(){return d.now()-h}}var m=[],p=[],_=1,g=null,x=3,E=!1,A=!1,C=!1,M=!1,S=typeof setTimeout=="function"?setTimeout:null,F=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;function O(L){for(var G=i(p);G!==null;){if(G.callback===null)r(p);else if(G.startTime<=L)r(p),G.sortIndex=G.expirationTime,e(m,G);else break;G=i(p)}}function I(L){if(C=!1,O(L),!A)if(i(m)!==null)A=!0,H||(H=!0,rt());else{var G=i(p);G!==null&&ut(I,G.startTime-L)}}var H=!1,P=-1,K=5,R=-1;function D(){return M?!0:!(o.unstable_now()-R<K)}function X(){if(M=!1,H){var L=o.unstable_now();R=L;var G=!0;try{t:{A=!1,C&&(C=!1,F(P),P=-1),E=!0;var it=x;try{e:{for(O(L),g=i(m);g!==null&&!(g.expirationTime>L&&D());){var xt=g.callback;if(typeof xt=="function"){g.callback=null,x=g.priorityLevel;var St=xt(g.expirationTime<=L);if(L=o.unstable_now(),typeof St=="function"){g.callback=St,O(L),G=!0;break e}g===i(m)&&r(m),O(L)}else r(m);g=i(m)}if(g!==null)G=!0;else{var U=i(p);U!==null&&ut(I,U.startTime-L),G=!1}}break t}finally{g=null,x=it,E=!1}G=void 0}}finally{G?rt():H=!1}}}var rt;if(typeof N=="function")rt=function(){N(X)};else if(typeof MessageChannel<"u"){var at=new MessageChannel,ft=at.port2;at.port1.onmessage=X,rt=function(){ft.postMessage(null)}}else rt=function(){S(X,0)};function ut(L,G){P=S(function(){L(o.unstable_now())},G)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(L){L.callback=null},o.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):K=0<L?Math.floor(1e3/L):5},o.unstable_getCurrentPriorityLevel=function(){return x},o.unstable_next=function(L){switch(x){case 1:case 2:case 3:var G=3;break;default:G=x}var it=x;x=G;try{return L()}finally{x=it}},o.unstable_requestPaint=function(){M=!0},o.unstable_runWithPriority=function(L,G){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var it=x;x=L;try{return G()}finally{x=it}},o.unstable_scheduleCallback=function(L,G,it){var xt=o.unstable_now();switch(typeof it=="object"&&it!==null?(it=it.delay,it=typeof it=="number"&&0<it?xt+it:xt):it=xt,L){case 1:var St=-1;break;case 2:St=250;break;case 5:St=1073741823;break;case 4:St=1e4;break;default:St=5e3}return St=it+St,L={id:_++,callback:G,priorityLevel:L,startTime:it,expirationTime:St,sortIndex:-1},it>xt?(L.sortIndex=it,e(p,L),i(m)===null&&L===i(p)&&(C?(F(P),P=-1):C=!0,ut(I,it-xt))):(L.sortIndex=St,e(m,L),A||E||(A=!0,H||(H=!0,rt()))),L},o.unstable_shouldYield=D,o.unstable_wrapCallback=function(L){var G=x;return function(){var it=x;x=G;try{return L.apply(this,arguments)}finally{x=it}}}})(ad)),ad}var L0;function bS(){return L0||(L0=1,id.exports=TS()),id.exports}var rd={exports:{}},Dn={};var N0;function AS(){if(N0)return Dn;N0=1;var o=Nh();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)p+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,p,_){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:g==null?null:""+g,children:m,containerInfo:p,implementation:_}}var d=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Dn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Dn.createPortal=function(m,p){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return u(m,p,null,_)},Dn.flushSync=function(m){var p=d.T,_=r.p;try{if(d.T=null,r.p=2,m)return m()}finally{d.T=p,r.p=_,r.d.f()}},Dn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},Dn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Dn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var _=p.as,g=h(_,p.crossOrigin),x=typeof p.integrity=="string"?p.integrity:void 0,E=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;_==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:g,integrity:x,fetchPriority:E}):_==="script"&&r.d.X(m,{crossOrigin:g,integrity:x,fetchPriority:E,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Dn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var _=h(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},Dn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var _=p.as,g=h(_,p.crossOrigin);r.d.L(m,_,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Dn.preloadModule=function(m,p){if(typeof m=="string")if(p){var _=h(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},Dn.requestFormReset=function(m){r.d.r(m)},Dn.unstable_batchedUpdates=function(m,p){return m(p)},Dn.useFormState=function(m,p,_){return d.H.useFormState(m,p,_)},Dn.useFormStatus=function(){return d.H.useHostTransitionStatus()},Dn.version="19.2.3",Dn}var O0;function RS(){if(O0)return rd.exports;O0=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),rd.exports=AS(),rd.exports}var P0;function CS(){if(P0)return Fo;P0=1;var o=bS(),e=Nh(),i=RS();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function d(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function h(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(u(t)!==t)throw Error(r(188))}function p(t){var n=t.alternate;if(!n){if(n=u(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,s=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(s=c.return,s!==null){a=s;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return m(c),t;if(f===s)return m(c),n;f=f.sibling}throw Error(r(188))}if(a.return!==s.return)a=c,s=f;else{for(var v=!1,T=c.child;T;){if(T===a){v=!0,a=c,s=f;break}if(T===s){v=!0,s=c,a=f;break}T=T.sibling}if(!v){for(T=f.child;T;){if(T===a){v=!0,a=f,s=c;break}if(T===s){v=!0,s=f,a=c;break}T=T.sibling}if(!v)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function _(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=_(t),n!==null)return n;t=t.sibling}return null}var g=Object.assign,x=Symbol.for("react.element"),E=Symbol.for("react.transitional.element"),A=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),F=Symbol.for("react.consumer"),N=Symbol.for("react.context"),O=Symbol.for("react.forward_ref"),I=Symbol.for("react.suspense"),H=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),K=Symbol.for("react.lazy"),R=Symbol.for("react.activity"),D=Symbol.for("react.memo_cache_sentinel"),X=Symbol.iterator;function rt(t){return t===null||typeof t!="object"?null:(t=X&&t[X]||t["@@iterator"],typeof t=="function"?t:null)}var at=Symbol.for("react.client.reference");function ft(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===at?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case C:return"Fragment";case S:return"Profiler";case M:return"StrictMode";case I:return"Suspense";case H:return"SuspenseList";case R:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case A:return"Portal";case N:return t.displayName||"Context";case F:return(t._context.displayName||"Context")+".Consumer";case O:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case P:return n=t.displayName||null,n!==null?n:ft(t.type)||"Memo";case K:n=t._payload,t=t._init;try{return ft(t(n))}catch{}}return null}var ut=Array.isArray,L=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,it={pending:!1,data:null,method:null,action:null},xt=[],St=-1;function U(t){return{current:t}}function j(t){0>St||(t.current=xt[St],xt[St]=null,St--)}function mt(t,n){St++,xt[St]=t.current,t.current=n}var Rt=U(null),Gt=U(null),$=U(null),dt=U(null);function Dt(t,n){switch(mt($,n),mt(Gt,t),mt(Rt,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?Kg(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=Kg(n),t=Qg(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}j(Rt),mt(Rt,t)}function kt(){j(Rt),j(Gt),j($)}function Vt(t){t.memoizedState!==null&&mt(dt,t);var n=Rt.current,a=Qg(n,t.type);n!==a&&(mt(Gt,t),mt(Rt,a))}function _e(t){Gt.current===t&&(j(Rt),j(Gt)),dt.current===t&&(j(dt),Uo._currentValue=it)}var Et,Pt;function bt(t){if(Et===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Et=n&&n[1]||"",Pt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Et+t+Pt}var ne=!1;function Jt(t,n){if(!t||ne)return"";ne=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var gt=function(){throw Error()};if(Object.defineProperty(gt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(gt,[])}catch(ot){var nt=ot}Reflect.construct(t,[],gt)}else{try{gt.call()}catch(ot){nt=ot}t.call(gt.prototype)}}else{try{throw Error()}catch(ot){nt=ot}(gt=t())&&typeof gt.catch=="function"&&gt.catch(function(){})}}catch(ot){if(ot&&nt&&typeof ot.stack=="string")return[ot.stack,nt.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=s.DetermineComponentFrameRoot(),v=f[0],T=f[1];if(v&&T){var B=v.split(`
`),J=T.split(`
`);for(c=s=0;s<B.length&&!B[s].includes("DetermineComponentFrameRoot");)s++;for(;c<J.length&&!J[c].includes("DetermineComponentFrameRoot");)c++;if(s===B.length||c===J.length)for(s=B.length-1,c=J.length-1;1<=s&&0<=c&&B[s]!==J[c];)c--;for(;1<=s&&0<=c;s--,c--)if(B[s]!==J[c]){if(s!==1||c!==1)do if(s--,c--,0>c||B[s]!==J[c]){var ht=`
`+B[s].replace(" at new "," at ");return t.displayName&&ht.includes("<anonymous>")&&(ht=ht.replace("<anonymous>",t.displayName)),ht}while(1<=s&&0<=c);break}}}finally{ne=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?bt(a):""}function le(t,n){switch(t.tag){case 26:case 27:case 5:return bt(t.type);case 16:return bt("Lazy");case 13:return t.child!==n&&n!==null?bt("Suspense Fallback"):bt("Suspense");case 19:return bt("SuspenseList");case 0:case 15:return Jt(t.type,!1);case 11:return Jt(t.type.render,!1);case 1:return Jt(t.type,!0);case 31:return bt("Activity");default:return""}}function z(t){try{var n="",a=null;do n+=le(t,a),a=t,t=t.return;while(t);return n}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}var xe=Object.prototype.hasOwnProperty,te=o.unstable_scheduleCallback,oe=o.unstable_cancelCallback,Bt=o.unstable_shouldYield,w=o.unstable_requestPaint,y=o.unstable_now,k=o.unstable_getCurrentPriorityLevel,ct=o.unstable_ImmediatePriority,_t=o.unstable_UserBlockingPriority,lt=o.unstable_NormalPriority,Wt=o.unstable_LowPriority,wt=o.unstable_IdlePriority,Zt=o.log,ie=o.unstable_setDisableYieldValue,Mt=null,Tt=null;function Ft(t){if(typeof Zt=="function"&&ie(t),Tt&&typeof Tt.setStrictMode=="function")try{Tt.setStrictMode(Mt,t)}catch{}}var zt=Math.clz32?Math.clz32:W,Ut=Math.log,he=Math.LN2;function W(t){return t>>>=0,t===0?32:31-(Ut(t)/he|0)|0}var Nt=256,At=262144,Ht=4194304;function yt(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function vt(t,n,a){var s=t.pendingLanes;if(s===0)return 0;var c=0,f=t.suspendedLanes,v=t.pingedLanes;t=t.warmLanes;var T=s&134217727;return T!==0?(s=T&~f,s!==0?c=yt(s):(v&=T,v!==0?c=yt(v):a||(a=T&~t,a!==0&&(c=yt(a))))):(T=s&~f,T!==0?c=yt(T):v!==0?c=yt(v):a||(a=s&~t,a!==0&&(c=yt(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function Ct(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function ue(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Fe(){var t=Ht;return Ht<<=1,(Ht&62914560)===0&&(Ht=4194304),t}function Ae(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function wn(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function vi(t,n,a,s,c,f){var v=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var T=t.entanglements,B=t.expirationTimes,J=t.hiddenUpdates;for(a=v&~a;0<a;){var ht=31-zt(a),gt=1<<ht;T[ht]=0,B[ht]=-1;var nt=J[ht];if(nt!==null)for(J[ht]=null,ht=0;ht<nt.length;ht++){var ot=nt[ht];ot!==null&&(ot.lane&=-536870913)}a&=~gt}s!==0&&al(t,s,0),f!==0&&c===0&&t.tag!==0&&(t.suspendedLanes|=f&~(v&~n))}function al(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var s=31-zt(n);t.entangledLanes|=n,t.entanglements[s]=t.entanglements[s]|1073741824|a&261930}function Vs(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var s=31-zt(a),c=1<<s;c&n|t[s]&n&&(t[s]|=n),a&=~c}}function Or(t,n){var a=n&-n;return a=(a&42)!==0?1:Xs(a),(a&(t.suspendedLanes|n))!==0?0:a}function Xs(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Pr(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function ks(){var t=G.p;return t!==0?t:(t=window.event,t===void 0?32:S0(t.type))}function Di(t,n){var a=G.p;try{return G.p=t,n()}finally{G.p=a}}var ni=Math.random().toString(36).slice(2),rn="__reactFiber$"+ni,vn="__reactProps$"+ni,xi="__reactContainer$"+ni,Fr="__reactEvents$"+ni,zr="__reactListeners$"+ni,rl="__reactHandles$"+ni,Ws="__reactResources$"+ni,nr="__reactMarker$"+ni;function qs(t){delete t[rn],delete t[vn],delete t[Fr],delete t[zr],delete t[rl]}function Sa(t){var n=t[rn];if(n)return n;for(var a=t.parentNode;a;){if(n=a[xi]||a[rn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=a0(t);t!==null;){if(a=t[rn])return a;t=a0(t)}return n}t=a,a=t.parentNode}return null}function Ma(t){if(t=t[rn]||t[xi]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function ir(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function ya(t){var n=t[Ws];return n||(n=t[Ws]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function b(t){t[nr]=!0}var q=new Set,st={};function et(t,n){Z(t,n),Z(t+"Capture",n)}function Z(t,n){for(st[t]=n,t=0;t<n.length;t++)q.add(n[t])}var Lt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Xt={},Ot={};function qt(t){return xe.call(Ot,t)?!0:xe.call(Xt,t)?!1:Lt.test(t)?Ot[t]=!0:(Xt[t]=!0,!1)}function jt(t,n,a){if(qt(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function ae(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function Kt(t,n,a,s){if(s===null)t.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+s)}}function re(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ue(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function je(t,n,a){var s=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var c=s.get,f=s.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return c.call(this)},set:function(v){a=""+v,f.call(this,v)}}),Object.defineProperty(t,n,{enumerable:s.enumerable}),{getValue:function(){return a},setValue:function(v){a=""+v},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function qe(t){if(!t._valueTracker){var n=Ue(t)?"checked":"value";t._valueTracker=je(t,n,""+t[n])}}function Oe(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return t&&(s=Ue(t)?t.checked?"true":"false":t.value),t=s,t!==a?(n.setValue(t),!0):!1}function $t(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Le=/[\n"\\]/g;function ce(t){return t.replace(Le,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function xn(t,n,a,s,c,f,v,T){t.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?t.type=v:t.removeAttribute("type"),n!=null?v==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+re(n)):t.value!==""+re(n)&&(t.value=""+re(n)):v!=="submit"&&v!=="reset"||t.removeAttribute("value"),n!=null?Sn(t,v,re(n)):a!=null?Sn(t,v,re(a)):s!=null&&t.removeAttribute("value"),c==null&&f!=null&&(t.defaultChecked=!!f),c!=null&&(t.checked=c&&typeof c!="function"&&typeof c!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?t.name=""+re(T):t.removeAttribute("name")}function Wi(t,n,a,s,c,f,v,T){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){qe(t);return}a=a!=null?""+re(a):"",n=n!=null?""+re(n):a,T||n===t.value||(t.value=n),t.defaultValue=n}s=s??c,s=typeof s!="function"&&typeof s!="symbol"&&!!s,t.checked=T?t.checked:!!s,t.defaultChecked=!!s,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(t.name=v),qe(t)}function Sn(t,n,a){n==="number"&&$t(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function ii(t,n,a,s){if(t=t.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<t.length;a++)c=n.hasOwnProperty("$"+t[a].value),t[a].selected!==c&&(t[a].selected=c),c&&s&&(t[a].defaultSelected=!0)}else{for(a=""+re(a),n=null,c=0;c<t.length;c++){if(t[c].value===a){t[c].selected=!0,s&&(t[c].defaultSelected=!0);return}n!==null||t[c].disabled||(n=t[c])}n!==null&&(n.selected=!0)}}function ze(t,n,a){if(n!=null&&(n=""+re(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+re(a):""}function Mn(t,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(ut(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=re(n),t.defaultValue=a,s=t.textContent,s===a&&s!==""&&s!==null&&(t.value=s),qe(t)}function fn(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var yn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function En(t,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":s?t.setProperty(n,a):typeof a!="number"||a===0||yn.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Ir(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?t.setProperty(s,""):s==="float"?t.cssFloat="":t[s]="");for(var c in n)s=n[c],n.hasOwnProperty(c)&&a[c]!==s&&En(t,c,s)}else for(var f in n)n.hasOwnProperty(f)&&En(t,f,n[f])}function Si(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var _v=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),vv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function sl(t){return vv.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function qi(){}var Ku=null;function Qu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Br=null,Hr=null;function jh(t){var n=Ma(t);if(n&&(t=n.stateNode)){var a=t[vn]||null;t:switch(t=n.stateNode,n.type){case"input":if(xn(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+ce(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==t&&s.form===t.form){var c=s[vn]||null;if(!c)throw Error(r(90));xn(s,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===t.form&&Oe(s)}break t;case"textarea":ze(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&ii(t,!!a.multiple,n,!1)}}}var Ju=!1;function Kh(t,n,a){if(Ju)return t(n,a);Ju=!0;try{var s=t(n);return s}finally{if(Ju=!1,(Br!==null||Hr!==null)&&(Yl(),Br&&(n=Br,t=Hr,Hr=Br=null,jh(n),t)))for(n=0;n<t.length;n++)jh(t[n])}}function Ys(t,n){var a=t.stateNode;if(a===null)return null;var s=a[vn]||null;if(s===null)return null;a=s[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(t=t.type,s=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!s;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Yi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),$u=!1;if(Yi)try{var Zs={};Object.defineProperty(Zs,"passive",{get:function(){$u=!0}}),window.addEventListener("test",Zs,Zs),window.removeEventListener("test",Zs,Zs)}catch{$u=!1}var Ea=null,tc=null,ol=null;function Qh(){if(ol)return ol;var t,n=tc,a=n.length,s,c="value"in Ea?Ea.value:Ea.textContent,f=c.length;for(t=0;t<a&&n[t]===c[t];t++);var v=a-t;for(s=1;s<=v&&n[a-s]===c[f-s];s++);return ol=c.slice(t,1<s?1-s:void 0)}function ll(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function ul(){return!0}function Jh(){return!1}function zn(t){function n(a,s,c,f,v){this._reactName=a,this._targetInst=c,this.type=s,this.nativeEvent=f,this.target=v,this.currentTarget=null;for(var T in t)t.hasOwnProperty(T)&&(a=t[T],this[T]=a?a(f):f[T]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?ul:Jh,this.isPropagationStopped=Jh,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ul)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ul)},persist:function(){},isPersistent:ul}),n}var ar={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},cl=zn(ar),js=g({},ar,{view:0,detail:0}),xv=zn(js),ec,nc,Ks,fl=g({},js,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ac,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ks&&(Ks&&t.type==="mousemove"?(ec=t.screenX-Ks.screenX,nc=t.screenY-Ks.screenY):nc=ec=0,Ks=t),ec)},movementY:function(t){return"movementY"in t?t.movementY:nc}}),$h=zn(fl),Sv=g({},fl,{dataTransfer:0}),Mv=zn(Sv),yv=g({},js,{relatedTarget:0}),ic=zn(yv),Ev=g({},ar,{animationName:0,elapsedTime:0,pseudoElement:0}),Tv=zn(Ev),bv=g({},ar,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Av=zn(bv),Rv=g({},ar,{data:0}),tp=zn(Rv),Cv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},wv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Dv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Uv(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=Dv[t])?!!n[t]:!1}function ac(){return Uv}var Lv=g({},js,{key:function(t){if(t.key){var n=Cv[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=ll(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?wv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ac,charCode:function(t){return t.type==="keypress"?ll(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ll(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Nv=zn(Lv),Ov=g({},fl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ep=zn(Ov),Pv=g({},js,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ac}),Fv=zn(Pv),zv=g({},ar,{propertyName:0,elapsedTime:0,pseudoElement:0}),Iv=zn(zv),Bv=g({},fl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Hv=zn(Bv),Gv=g({},ar,{newState:0,oldState:0}),Vv=zn(Gv),Xv=[9,13,27,32],rc=Yi&&"CompositionEvent"in window,Qs=null;Yi&&"documentMode"in document&&(Qs=document.documentMode);var kv=Yi&&"TextEvent"in window&&!Qs,np=Yi&&(!rc||Qs&&8<Qs&&11>=Qs),ip=" ",ap=!1;function rp(t,n){switch(t){case"keyup":return Xv.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function sp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Gr=!1;function Wv(t,n){switch(t){case"compositionend":return sp(n);case"keypress":return n.which!==32?null:(ap=!0,ip);case"textInput":return t=n.data,t===ip&&ap?null:t;default:return null}}function qv(t,n){if(Gr)return t==="compositionend"||!rc&&rp(t,n)?(t=Qh(),ol=tc=Ea=null,Gr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return np&&n.locale!=="ko"?null:n.data;default:return null}}var Yv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function op(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!Yv[t.type]:n==="textarea"}function lp(t,n,a,s){Br?Hr?Hr.push(s):Hr=[s]:Br=s,n=tu(n,"onChange"),0<n.length&&(a=new cl("onChange","change",null,a,s),t.push({event:a,listeners:n}))}var Js=null,$s=null;function Zv(t){kg(t,0)}function dl(t){var n=ir(t);if(Oe(n))return t}function up(t,n){if(t==="change")return n}var cp=!1;if(Yi){var sc;if(Yi){var oc="oninput"in document;if(!oc){var fp=document.createElement("div");fp.setAttribute("oninput","return;"),oc=typeof fp.oninput=="function"}sc=oc}else sc=!1;cp=sc&&(!document.documentMode||9<document.documentMode)}function dp(){Js&&(Js.detachEvent("onpropertychange",hp),$s=Js=null)}function hp(t){if(t.propertyName==="value"&&dl($s)){var n=[];lp(n,$s,t,Qu(t)),Kh(Zv,n)}}function jv(t,n,a){t==="focusin"?(dp(),Js=n,$s=a,Js.attachEvent("onpropertychange",hp)):t==="focusout"&&dp()}function Kv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return dl($s)}function Qv(t,n){if(t==="click")return dl(n)}function Jv(t,n){if(t==="input"||t==="change")return dl(n)}function $v(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Wn=typeof Object.is=="function"?Object.is:$v;function to(t,n){if(Wn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var c=a[s];if(!xe.call(n,c)||!Wn(t[c],n[c]))return!1}return!0}function pp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function mp(t,n){var a=pp(t);t=0;for(var s;a;){if(a.nodeType===3){if(s=t+a.textContent.length,t<=n&&s>=n)return{node:a,offset:n-t};t=s}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=pp(a)}}function gp(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?gp(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function _p(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=$t(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=$t(t.document)}return n}function lc(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var tx=Yi&&"documentMode"in document&&11>=document.documentMode,Vr=null,uc=null,eo=null,cc=!1;function vp(t,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;cc||Vr==null||Vr!==$t(s)||(s=Vr,"selectionStart"in s&&lc(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),eo&&to(eo,s)||(eo=s,s=tu(uc,"onSelect"),0<s.length&&(n=new cl("onSelect","select",null,n,a),t.push({event:n,listeners:s}),n.target=Vr)))}function rr(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Xr={animationend:rr("Animation","AnimationEnd"),animationiteration:rr("Animation","AnimationIteration"),animationstart:rr("Animation","AnimationStart"),transitionrun:rr("Transition","TransitionRun"),transitionstart:rr("Transition","TransitionStart"),transitioncancel:rr("Transition","TransitionCancel"),transitionend:rr("Transition","TransitionEnd")},fc={},xp={};Yi&&(xp=document.createElement("div").style,"AnimationEvent"in window||(delete Xr.animationend.animation,delete Xr.animationiteration.animation,delete Xr.animationstart.animation),"TransitionEvent"in window||delete Xr.transitionend.transition);function sr(t){if(fc[t])return fc[t];if(!Xr[t])return t;var n=Xr[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in xp)return fc[t]=n[a];return t}var Sp=sr("animationend"),Mp=sr("animationiteration"),yp=sr("animationstart"),ex=sr("transitionrun"),nx=sr("transitionstart"),ix=sr("transitioncancel"),Ep=sr("transitionend"),Tp=new Map,dc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");dc.push("scrollEnd");function Mi(t,n){Tp.set(t,n),et(n,[t])}var hl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},ai=[],kr=0,hc=0;function pl(){for(var t=kr,n=hc=kr=0;n<t;){var a=ai[n];ai[n++]=null;var s=ai[n];ai[n++]=null;var c=ai[n];ai[n++]=null;var f=ai[n];if(ai[n++]=null,s!==null&&c!==null){var v=s.pending;v===null?c.next=c:(c.next=v.next,v.next=c),s.pending=c}f!==0&&bp(a,c,f)}}function ml(t,n,a,s){ai[kr++]=t,ai[kr++]=n,ai[kr++]=a,ai[kr++]=s,hc|=s,t.lanes|=s,t=t.alternate,t!==null&&(t.lanes|=s)}function pc(t,n,a,s){return ml(t,n,a,s),gl(t)}function or(t,n){return ml(t,null,null,n),gl(t)}function bp(t,n,a){t.lanes|=a;var s=t.alternate;s!==null&&(s.lanes|=a);for(var c=!1,f=t.return;f!==null;)f.childLanes|=a,s=f.alternate,s!==null&&(s.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(c=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,c&&n!==null&&(c=31-zt(a),t=f.hiddenUpdates,s=t[c],s===null?t[c]=[n]:s.push(n),n.lane=a|536870912),f):null}function gl(t){if(50<To)throw To=0,Tf=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Wr={};function ax(t,n,a,s){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qn(t,n,a,s){return new ax(t,n,a,s)}function mc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Zi(t,n){var a=t.alternate;return a===null?(a=qn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Ap(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function _l(t,n,a,s,c,f){var v=0;if(s=t,typeof t=="function")mc(t)&&(v=1);else if(typeof t=="string")v=uS(t,a,Rt.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case R:return t=qn(31,a,n,c),t.elementType=R,t.lanes=f,t;case C:return lr(a.children,c,f,n);case M:v=8,c|=24;break;case S:return t=qn(12,a,n,c|2),t.elementType=S,t.lanes=f,t;case I:return t=qn(13,a,n,c),t.elementType=I,t.lanes=f,t;case H:return t=qn(19,a,n,c),t.elementType=H,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case N:v=10;break t;case F:v=9;break t;case O:v=11;break t;case P:v=14;break t;case K:v=16,s=null;break t}v=29,a=Error(r(130,t===null?"null":typeof t,"")),s=null}return n=qn(v,a,n,c),n.elementType=t,n.type=s,n.lanes=f,n}function lr(t,n,a,s){return t=qn(7,t,s,n),t.lanes=a,t}function gc(t,n,a){return t=qn(6,t,null,n),t.lanes=a,t}function Rp(t){var n=qn(18,null,null,0);return n.stateNode=t,n}function _c(t,n,a){return n=qn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Cp=new WeakMap;function ri(t,n){if(typeof t=="object"&&t!==null){var a=Cp.get(t);return a!==void 0?a:(n={value:t,source:n,stack:z(n)},Cp.set(t,n),n)}return{value:t,source:n,stack:z(n)}}var qr=[],Yr=0,vl=null,no=0,si=[],oi=0,Ta=null,Ui=1,Li="";function ji(t,n){qr[Yr++]=no,qr[Yr++]=vl,vl=t,no=n}function wp(t,n,a){si[oi++]=Ui,si[oi++]=Li,si[oi++]=Ta,Ta=t;var s=Ui;t=Li;var c=32-zt(s)-1;s&=~(1<<c),a+=1;var f=32-zt(n)+c;if(30<f){var v=c-c%5;f=(s&(1<<v)-1).toString(32),s>>=v,c-=v,Ui=1<<32-zt(n)+c|a<<c|s,Li=f+t}else Ui=1<<f|a<<c|s,Li=t}function vc(t){t.return!==null&&(ji(t,1),wp(t,1,0))}function xc(t){for(;t===vl;)vl=qr[--Yr],qr[Yr]=null,no=qr[--Yr],qr[Yr]=null;for(;t===Ta;)Ta=si[--oi],si[oi]=null,Li=si[--oi],si[oi]=null,Ui=si[--oi],si[oi]=null}function Dp(t,n){si[oi++]=Ui,si[oi++]=Li,si[oi++]=Ta,Ui=n.id,Li=n.overflow,Ta=t}var Tn=null,Ye=null,be=!1,ba=null,li=!1,Sc=Error(r(519));function Aa(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw io(ri(n,t)),Sc}function Up(t){var n=t.stateNode,a=t.type,s=t.memoizedProps;switch(n[rn]=t,n[vn]=s,a){case"dialog":Me("cancel",n),Me("close",n);break;case"iframe":case"object":case"embed":Me("load",n);break;case"video":case"audio":for(a=0;a<Ao.length;a++)Me(Ao[a],n);break;case"source":Me("error",n);break;case"img":case"image":case"link":Me("error",n),Me("load",n);break;case"details":Me("toggle",n);break;case"input":Me("invalid",n),Wi(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0);break;case"select":Me("invalid",n);break;case"textarea":Me("invalid",n),Mn(n,s.value,s.defaultValue,s.children)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||Zg(n.textContent,a)?(s.popover!=null&&(Me("beforetoggle",n),Me("toggle",n)),s.onScroll!=null&&Me("scroll",n),s.onScrollEnd!=null&&Me("scrollend",n),s.onClick!=null&&(n.onclick=qi),n=!0):n=!1,n||Aa(t,!0)}function Lp(t){for(Tn=t.return;Tn;)switch(Tn.tag){case 5:case 31:case 13:li=!1;return;case 27:case 3:li=!0;return;default:Tn=Tn.return}}function Zr(t){if(t!==Tn)return!1;if(!be)return Lp(t),be=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Bf(t.type,t.memoizedProps)),a=!a),a&&Ye&&Aa(t),Lp(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Ye=i0(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Ye=i0(t)}else n===27?(n=Ye,Ha(t.type)?(t=kf,kf=null,Ye=t):Ye=n):Ye=Tn?ci(t.stateNode.nextSibling):null;return!0}function ur(){Ye=Tn=null,be=!1}function Mc(){var t=ba;return t!==null&&(Gn===null?Gn=t:Gn.push.apply(Gn,t),ba=null),t}function io(t){ba===null?ba=[t]:ba.push(t)}var yc=U(null),cr=null,Ki=null;function Ra(t,n,a){mt(yc,n._currentValue),n._currentValue=a}function Qi(t){t._currentValue=yc.current,j(yc)}function Ec(t,n,a){for(;t!==null;){var s=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),t===a)break;t=t.return}}function Tc(t,n,a,s){var c=t.child;for(c!==null&&(c.return=t);c!==null;){var f=c.dependencies;if(f!==null){var v=c.child;f=f.firstContext;t:for(;f!==null;){var T=f;f=c;for(var B=0;B<n.length;B++)if(T.context===n[B]){f.lanes|=a,T=f.alternate,T!==null&&(T.lanes|=a),Ec(f.return,a,t),s||(v=null);break t}f=T.next}}else if(c.tag===18){if(v=c.return,v===null)throw Error(r(341));v.lanes|=a,f=v.alternate,f!==null&&(f.lanes|=a),Ec(v,a,t),v=null}else v=c.child;if(v!==null)v.return=c;else for(v=c;v!==null;){if(v===t){v=null;break}if(c=v.sibling,c!==null){c.return=v.return,v=c;break}v=v.return}c=v}}function jr(t,n,a,s){t=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var v=c.alternate;if(v===null)throw Error(r(387));if(v=v.memoizedProps,v!==null){var T=c.type;Wn(c.pendingProps.value,v.value)||(t!==null?t.push(T):t=[T])}}else if(c===dt.current){if(v=c.alternate,v===null)throw Error(r(387));v.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(t!==null?t.push(Uo):t=[Uo])}c=c.return}t!==null&&Tc(n,t,a,s),n.flags|=262144}function xl(t){for(t=t.firstContext;t!==null;){if(!Wn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function fr(t){cr=t,Ki=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function bn(t){return Np(cr,t)}function Sl(t,n){return cr===null&&fr(t),Np(t,n)}function Np(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Ki===null){if(t===null)throw Error(r(308));Ki=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Ki=Ki.next=n;return a}var rx=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,s){t.push(s)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},sx=o.unstable_scheduleCallback,ox=o.unstable_NormalPriority,sn={$$typeof:N,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function bc(){return{controller:new rx,data:new Map,refCount:0}}function ao(t){t.refCount--,t.refCount===0&&sx(ox,function(){t.controller.abort()})}var ro=null,Ac=0,Kr=0,Qr=null;function lx(t,n){if(ro===null){var a=ro=[];Ac=0,Kr=Df(),Qr={status:"pending",value:void 0,then:function(s){a.push(s)}}}return Ac++,n.then(Op,Op),n}function Op(){if(--Ac===0&&ro!==null){Qr!==null&&(Qr.status="fulfilled");var t=ro;ro=null,Kr=0,Qr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function ux(t,n){var a=[],s={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return t.then(function(){s.status="fulfilled",s.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(s.status="rejected",s.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),s}var Pp=L.S;L.S=function(t,n){vg=y(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&lx(t,n),Pp!==null&&Pp(t,n)};var dr=U(null);function Rc(){var t=dr.current;return t!==null?t:We.pooledCache}function Ml(t,n){n===null?mt(dr,dr.current):mt(dr,n.pool)}function Fp(){var t=Rc();return t===null?null:{parent:sn._currentValue,pool:t}}var Jr=Error(r(460)),Cc=Error(r(474)),yl=Error(r(542)),El={then:function(){}};function zp(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Ip(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(qi,qi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Hp(t),t;default:if(typeof n.status=="string")n.then(qi,qi);else{if(t=We,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(s){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=s}},function(s){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Hp(t),t}throw pr=n,Jr}}function hr(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(pr=a,Jr):a}}var pr=null;function Bp(){if(pr===null)throw Error(r(459));var t=pr;return pr=null,t}function Hp(t){if(t===Jr||t===yl)throw Error(r(483))}var $r=null,so=0;function Tl(t){var n=so;return so+=1,$r===null&&($r=[]),Ip($r,t,n)}function oo(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function bl(t,n){throw n.$$typeof===x?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Gp(t){function n(Y,V){if(t){var Q=Y.deletions;Q===null?(Y.deletions=[V],Y.flags|=16):Q.push(V)}}function a(Y,V){if(!t)return null;for(;V!==null;)n(Y,V),V=V.sibling;return null}function s(Y){for(var V=new Map;Y!==null;)Y.key!==null?V.set(Y.key,Y):V.set(Y.index,Y),Y=Y.sibling;return V}function c(Y,V){return Y=Zi(Y,V),Y.index=0,Y.sibling=null,Y}function f(Y,V,Q){return Y.index=Q,t?(Q=Y.alternate,Q!==null?(Q=Q.index,Q<V?(Y.flags|=67108866,V):Q):(Y.flags|=67108866,V)):(Y.flags|=1048576,V)}function v(Y){return t&&Y.alternate===null&&(Y.flags|=67108866),Y}function T(Y,V,Q,pt){return V===null||V.tag!==6?(V=gc(Q,Y.mode,pt),V.return=Y,V):(V=c(V,Q),V.return=Y,V)}function B(Y,V,Q,pt){var ee=Q.type;return ee===C?ht(Y,V,Q.props.children,pt,Q.key):V!==null&&(V.elementType===ee||typeof ee=="object"&&ee!==null&&ee.$$typeof===K&&hr(ee)===V.type)?(V=c(V,Q.props),oo(V,Q),V.return=Y,V):(V=_l(Q.type,Q.key,Q.props,null,Y.mode,pt),oo(V,Q),V.return=Y,V)}function J(Y,V,Q,pt){return V===null||V.tag!==4||V.stateNode.containerInfo!==Q.containerInfo||V.stateNode.implementation!==Q.implementation?(V=_c(Q,Y.mode,pt),V.return=Y,V):(V=c(V,Q.children||[]),V.return=Y,V)}function ht(Y,V,Q,pt,ee){return V===null||V.tag!==7?(V=lr(Q,Y.mode,pt,ee),V.return=Y,V):(V=c(V,Q),V.return=Y,V)}function gt(Y,V,Q){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return V=gc(""+V,Y.mode,Q),V.return=Y,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case E:return Q=_l(V.type,V.key,V.props,null,Y.mode,Q),oo(Q,V),Q.return=Y,Q;case A:return V=_c(V,Y.mode,Q),V.return=Y,V;case K:return V=hr(V),gt(Y,V,Q)}if(ut(V)||rt(V))return V=lr(V,Y.mode,Q,null),V.return=Y,V;if(typeof V.then=="function")return gt(Y,Tl(V),Q);if(V.$$typeof===N)return gt(Y,Sl(Y,V),Q);bl(Y,V)}return null}function nt(Y,V,Q,pt){var ee=V!==null?V.key:null;if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return ee!==null?null:T(Y,V,""+Q,pt);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case E:return Q.key===ee?B(Y,V,Q,pt):null;case A:return Q.key===ee?J(Y,V,Q,pt):null;case K:return Q=hr(Q),nt(Y,V,Q,pt)}if(ut(Q)||rt(Q))return ee!==null?null:ht(Y,V,Q,pt,null);if(typeof Q.then=="function")return nt(Y,V,Tl(Q),pt);if(Q.$$typeof===N)return nt(Y,V,Sl(Y,Q),pt);bl(Y,Q)}return null}function ot(Y,V,Q,pt,ee){if(typeof pt=="string"&&pt!==""||typeof pt=="number"||typeof pt=="bigint")return Y=Y.get(Q)||null,T(V,Y,""+pt,ee);if(typeof pt=="object"&&pt!==null){switch(pt.$$typeof){case E:return Y=Y.get(pt.key===null?Q:pt.key)||null,B(V,Y,pt,ee);case A:return Y=Y.get(pt.key===null?Q:pt.key)||null,J(V,Y,pt,ee);case K:return pt=hr(pt),ot(Y,V,Q,pt,ee)}if(ut(pt)||rt(pt))return Y=Y.get(Q)||null,ht(V,Y,pt,ee,null);if(typeof pt.then=="function")return ot(Y,V,Q,Tl(pt),ee);if(pt.$$typeof===N)return ot(Y,V,Q,Sl(V,pt),ee);bl(V,pt)}return null}function Yt(Y,V,Q,pt){for(var ee=null,we=null,Qt=V,me=V=0,Ee=null;Qt!==null&&me<Q.length;me++){Qt.index>me?(Ee=Qt,Qt=null):Ee=Qt.sibling;var De=nt(Y,Qt,Q[me],pt);if(De===null){Qt===null&&(Qt=Ee);break}t&&Qt&&De.alternate===null&&n(Y,Qt),V=f(De,V,me),we===null?ee=De:we.sibling=De,we=De,Qt=Ee}if(me===Q.length)return a(Y,Qt),be&&ji(Y,me),ee;if(Qt===null){for(;me<Q.length;me++)Qt=gt(Y,Q[me],pt),Qt!==null&&(V=f(Qt,V,me),we===null?ee=Qt:we.sibling=Qt,we=Qt);return be&&ji(Y,me),ee}for(Qt=s(Qt);me<Q.length;me++)Ee=ot(Qt,Y,me,Q[me],pt),Ee!==null&&(t&&Ee.alternate!==null&&Qt.delete(Ee.key===null?me:Ee.key),V=f(Ee,V,me),we===null?ee=Ee:we.sibling=Ee,we=Ee);return t&&Qt.forEach(function(Wa){return n(Y,Wa)}),be&&ji(Y,me),ee}function se(Y,V,Q,pt){if(Q==null)throw Error(r(151));for(var ee=null,we=null,Qt=V,me=V=0,Ee=null,De=Q.next();Qt!==null&&!De.done;me++,De=Q.next()){Qt.index>me?(Ee=Qt,Qt=null):Ee=Qt.sibling;var Wa=nt(Y,Qt,De.value,pt);if(Wa===null){Qt===null&&(Qt=Ee);break}t&&Qt&&Wa.alternate===null&&n(Y,Qt),V=f(Wa,V,me),we===null?ee=Wa:we.sibling=Wa,we=Wa,Qt=Ee}if(De.done)return a(Y,Qt),be&&ji(Y,me),ee;if(Qt===null){for(;!De.done;me++,De=Q.next())De=gt(Y,De.value,pt),De!==null&&(V=f(De,V,me),we===null?ee=De:we.sibling=De,we=De);return be&&ji(Y,me),ee}for(Qt=s(Qt);!De.done;me++,De=Q.next())De=ot(Qt,Y,me,De.value,pt),De!==null&&(t&&De.alternate!==null&&Qt.delete(De.key===null?me:De.key),V=f(De,V,me),we===null?ee=De:we.sibling=De,we=De);return t&&Qt.forEach(function(SS){return n(Y,SS)}),be&&ji(Y,me),ee}function ke(Y,V,Q,pt){if(typeof Q=="object"&&Q!==null&&Q.type===C&&Q.key===null&&(Q=Q.props.children),typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case E:t:{for(var ee=Q.key;V!==null;){if(V.key===ee){if(ee=Q.type,ee===C){if(V.tag===7){a(Y,V.sibling),pt=c(V,Q.props.children),pt.return=Y,Y=pt;break t}}else if(V.elementType===ee||typeof ee=="object"&&ee!==null&&ee.$$typeof===K&&hr(ee)===V.type){a(Y,V.sibling),pt=c(V,Q.props),oo(pt,Q),pt.return=Y,Y=pt;break t}a(Y,V);break}else n(Y,V);V=V.sibling}Q.type===C?(pt=lr(Q.props.children,Y.mode,pt,Q.key),pt.return=Y,Y=pt):(pt=_l(Q.type,Q.key,Q.props,null,Y.mode,pt),oo(pt,Q),pt.return=Y,Y=pt)}return v(Y);case A:t:{for(ee=Q.key;V!==null;){if(V.key===ee)if(V.tag===4&&V.stateNode.containerInfo===Q.containerInfo&&V.stateNode.implementation===Q.implementation){a(Y,V.sibling),pt=c(V,Q.children||[]),pt.return=Y,Y=pt;break t}else{a(Y,V);break}else n(Y,V);V=V.sibling}pt=_c(Q,Y.mode,pt),pt.return=Y,Y=pt}return v(Y);case K:return Q=hr(Q),ke(Y,V,Q,pt)}if(ut(Q))return Yt(Y,V,Q,pt);if(rt(Q)){if(ee=rt(Q),typeof ee!="function")throw Error(r(150));return Q=ee.call(Q),se(Y,V,Q,pt)}if(typeof Q.then=="function")return ke(Y,V,Tl(Q),pt);if(Q.$$typeof===N)return ke(Y,V,Sl(Y,Q),pt);bl(Y,Q)}return typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint"?(Q=""+Q,V!==null&&V.tag===6?(a(Y,V.sibling),pt=c(V,Q),pt.return=Y,Y=pt):(a(Y,V),pt=gc(Q,Y.mode,pt),pt.return=Y,Y=pt),v(Y)):a(Y,V)}return function(Y,V,Q,pt){try{so=0;var ee=ke(Y,V,Q,pt);return $r=null,ee}catch(Qt){if(Qt===Jr||Qt===yl)throw Qt;var we=qn(29,Qt,null,Y.mode);return we.lanes=pt,we.return=Y,we}}}var mr=Gp(!0),Vp=Gp(!1),Ca=!1;function wc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Dc(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function wa(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Da(t,n,a){var s=t.updateQueue;if(s===null)return null;if(s=s.shared,(Ne&2)!==0){var c=s.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),s.pending=n,n=gl(t),bp(t,null,a),n}return ml(t,s,n,a),gl(t)}function lo(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,Vs(t,a)}}function Uc(t,n){var a=t.updateQueue,s=t.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var v={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=v:f=f.next=v,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:s.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:s.shared,callbacks:s.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Lc=!1;function uo(){if(Lc){var t=Qr;if(t!==null)throw t}}function co(t,n,a,s){Lc=!1;var c=t.updateQueue;Ca=!1;var f=c.firstBaseUpdate,v=c.lastBaseUpdate,T=c.shared.pending;if(T!==null){c.shared.pending=null;var B=T,J=B.next;B.next=null,v===null?f=J:v.next=J,v=B;var ht=t.alternate;ht!==null&&(ht=ht.updateQueue,T=ht.lastBaseUpdate,T!==v&&(T===null?ht.firstBaseUpdate=J:T.next=J,ht.lastBaseUpdate=B))}if(f!==null){var gt=c.baseState;v=0,ht=J=B=null,T=f;do{var nt=T.lane&-536870913,ot=nt!==T.lane;if(ot?(ye&nt)===nt:(s&nt)===nt){nt!==0&&nt===Kr&&(Lc=!0),ht!==null&&(ht=ht.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});t:{var Yt=t,se=T;nt=n;var ke=a;switch(se.tag){case 1:if(Yt=se.payload,typeof Yt=="function"){gt=Yt.call(ke,gt,nt);break t}gt=Yt;break t;case 3:Yt.flags=Yt.flags&-65537|128;case 0:if(Yt=se.payload,nt=typeof Yt=="function"?Yt.call(ke,gt,nt):Yt,nt==null)break t;gt=g({},gt,nt);break t;case 2:Ca=!0}}nt=T.callback,nt!==null&&(t.flags|=64,ot&&(t.flags|=8192),ot=c.callbacks,ot===null?c.callbacks=[nt]:ot.push(nt))}else ot={lane:nt,tag:T.tag,payload:T.payload,callback:T.callback,next:null},ht===null?(J=ht=ot,B=gt):ht=ht.next=ot,v|=nt;if(T=T.next,T===null){if(T=c.shared.pending,T===null)break;ot=T,T=ot.next,ot.next=null,c.lastBaseUpdate=ot,c.shared.pending=null}}while(!0);ht===null&&(B=gt),c.baseState=B,c.firstBaseUpdate=J,c.lastBaseUpdate=ht,f===null&&(c.shared.lanes=0),Pa|=v,t.lanes=v,t.memoizedState=gt}}function Xp(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function kp(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Xp(a[t],n)}var ts=U(null),Al=U(0);function Wp(t,n){t=sa,mt(Al,t),mt(ts,n),sa=t|n.baseLanes}function Nc(){mt(Al,sa),mt(ts,ts.current)}function Oc(){sa=Al.current,j(ts),j(Al)}var Yn=U(null),ui=null;function Ua(t){var n=t.alternate;mt(en,en.current&1),mt(Yn,t),ui===null&&(n===null||ts.current!==null||n.memoizedState!==null)&&(ui=t)}function Pc(t){mt(en,en.current),mt(Yn,t),ui===null&&(ui=t)}function qp(t){t.tag===22?(mt(en,en.current),mt(Yn,t),ui===null&&(ui=t)):La()}function La(){mt(en,en.current),mt(Yn,Yn.current)}function Zn(t){j(Yn),ui===t&&(ui=null),j(en)}var en=U(0);function Rl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Vf(a)||Xf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Ji=0,pe=null,Ve=null,on=null,Cl=!1,es=!1,gr=!1,wl=0,fo=0,ns=null,cx=0;function Qe(){throw Error(r(321))}function Fc(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Wn(t[a],n[a]))return!1;return!0}function zc(t,n,a,s,c,f){return Ji=f,pe=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,L.H=t===null||t.memoizedState===null?wm:Jc,gr=!1,f=a(s,c),gr=!1,es&&(f=Zp(n,a,s,c)),Yp(t),f}function Yp(t){L.H=mo;var n=Ve!==null&&Ve.next!==null;if(Ji=0,on=Ve=pe=null,Cl=!1,fo=0,ns=null,n)throw Error(r(300));t===null||ln||(t=t.dependencies,t!==null&&xl(t)&&(ln=!0))}function Zp(t,n,a,s){pe=t;var c=0;do{if(es&&(ns=null),fo=0,es=!1,25<=c)throw Error(r(301));if(c+=1,on=Ve=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}L.H=Dm,f=n(a,s)}while(es);return f}function fx(){var t=L.H,n=t.useState()[0];return n=typeof n.then=="function"?ho(n):n,t=t.useState()[0],(Ve!==null?Ve.memoizedState:null)!==t&&(pe.flags|=1024),n}function Ic(){var t=wl!==0;return wl=0,t}function Bc(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Hc(t){if(Cl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Cl=!1}Ji=0,on=Ve=pe=null,es=!1,fo=wl=0,ns=null}function Nn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return on===null?pe.memoizedState=on=t:on=on.next=t,on}function nn(){if(Ve===null){var t=pe.alternate;t=t!==null?t.memoizedState:null}else t=Ve.next;var n=on===null?pe.memoizedState:on.next;if(n!==null)on=n,Ve=t;else{if(t===null)throw pe.alternate===null?Error(r(467)):Error(r(310));Ve=t,t={memoizedState:Ve.memoizedState,baseState:Ve.baseState,baseQueue:Ve.baseQueue,queue:Ve.queue,next:null},on===null?pe.memoizedState=on=t:on=on.next=t}return on}function Dl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ho(t){var n=fo;return fo+=1,ns===null&&(ns=[]),t=Ip(ns,t,n),n=pe,(on===null?n.memoizedState:on.next)===null&&(n=n.alternate,L.H=n===null||n.memoizedState===null?wm:Jc),t}function Ul(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return ho(t);if(t.$$typeof===N)return bn(t)}throw Error(r(438,String(t)))}function Gc(t){var n=null,a=pe.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=pe.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Dl(),pe.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),s=0;s<t;s++)a[s]=D;return n.index++,a}function $i(t,n){return typeof n=="function"?n(t):n}function Ll(t){var n=nn();return Vc(n,Ve,t)}function Vc(t,n,a){var s=t.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var c=t.baseQueue,f=s.pending;if(f!==null){if(c!==null){var v=c.next;c.next=f.next,f.next=v}n.baseQueue=c=f,s.pending=null}if(f=t.baseState,c===null)t.memoizedState=f;else{n=c.next;var T=v=null,B=null,J=n,ht=!1;do{var gt=J.lane&-536870913;if(gt!==J.lane?(ye&gt)===gt:(Ji&gt)===gt){var nt=J.revertLane;if(nt===0)B!==null&&(B=B.next={lane:0,revertLane:0,gesture:null,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null}),gt===Kr&&(ht=!0);else if((Ji&nt)===nt){J=J.next,nt===Kr&&(ht=!0);continue}else gt={lane:0,revertLane:J.revertLane,gesture:null,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},B===null?(T=B=gt,v=f):B=B.next=gt,pe.lanes|=nt,Pa|=nt;gt=J.action,gr&&a(f,gt),f=J.hasEagerState?J.eagerState:a(f,gt)}else nt={lane:gt,revertLane:J.revertLane,gesture:J.gesture,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},B===null?(T=B=nt,v=f):B=B.next=nt,pe.lanes|=gt,Pa|=gt;J=J.next}while(J!==null&&J!==n);if(B===null?v=f:B.next=T,!Wn(f,t.memoizedState)&&(ln=!0,ht&&(a=Qr,a!==null)))throw a;t.memoizedState=f,t.baseState=v,t.baseQueue=B,s.lastRenderedState=f}return c===null&&(s.lanes=0),[t.memoizedState,s.dispatch]}function Xc(t){var n=nn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var s=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var v=c=c.next;do f=t(f,v.action),v=v.next;while(v!==c);Wn(f,n.memoizedState)||(ln=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,s]}function jp(t,n,a){var s=pe,c=nn(),f=be;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var v=!Wn((Ve||c).memoizedState,a);if(v&&(c.memoizedState=a,ln=!0),c=c.queue,qc(Jp.bind(null,s,c,t),[t]),c.getSnapshot!==n||v||on!==null&&on.memoizedState.tag&1){if(s.flags|=2048,is(9,{destroy:void 0},Qp.bind(null,s,c,a,n),null),We===null)throw Error(r(349));f||(Ji&127)!==0||Kp(s,n,a)}return a}function Kp(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=pe.updateQueue,n===null?(n=Dl(),pe.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Qp(t,n,a,s){n.value=a,n.getSnapshot=s,$p(n)&&tm(t)}function Jp(t,n,a){return a(function(){$p(n)&&tm(t)})}function $p(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Wn(t,a)}catch{return!0}}function tm(t){var n=or(t,2);n!==null&&Vn(n,t,2)}function kc(t){var n=Nn();if(typeof t=="function"){var a=t;if(t=a(),gr){Ft(!0);try{a()}finally{Ft(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:$i,lastRenderedState:t},n}function em(t,n,a,s){return t.baseState=a,Vc(t,Ve,typeof s=="function"?s:$i)}function dx(t,n,a,s,c){if(Pl(t))throw Error(r(485));if(t=n.action,t!==null){var f={payload:c,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){f.listeners.push(v)}};L.T!==null?a(!0):f.isTransition=!1,s(f),a=n.pending,a===null?(f.next=n.pending=f,nm(n,f)):(f.next=a.next,n.pending=a.next=f)}}function nm(t,n){var a=n.action,s=n.payload,c=t.state;if(n.isTransition){var f=L.T,v={};L.T=v;try{var T=a(c,s),B=L.S;B!==null&&B(v,T),im(t,n,T)}catch(J){Wc(t,n,J)}finally{f!==null&&v.types!==null&&(f.types=v.types),L.T=f}}else try{f=a(c,s),im(t,n,f)}catch(J){Wc(t,n,J)}}function im(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){am(t,n,s)},function(s){return Wc(t,n,s)}):am(t,n,a)}function am(t,n,a){n.status="fulfilled",n.value=a,rm(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,nm(t,a)))}function Wc(t,n,a){var s=t.pending;if(t.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,rm(n),n=n.next;while(n!==s)}t.action=null}function rm(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function sm(t,n){return n}function om(t,n){if(be){var a=We.formState;if(a!==null){t:{var s=pe;if(be){if(Ye){e:{for(var c=Ye,f=li;c.nodeType!==8;){if(!f){c=null;break e}if(c=ci(c.nextSibling),c===null){c=null;break e}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){Ye=ci(c.nextSibling),s=c.data==="F!";break t}}Aa(s)}s=!1}s&&(n=a[0])}}return a=Nn(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:sm,lastRenderedState:n},a.queue=s,a=Am.bind(null,pe,s),s.dispatch=a,s=kc(!1),f=Qc.bind(null,pe,!1,s.queue),s=Nn(),c={state:n,dispatch:null,action:t,pending:null},s.queue=c,a=dx.bind(null,pe,c,f,a),c.dispatch=a,s.memoizedState=t,[n,a,!1]}function lm(t){var n=nn();return um(n,Ve,t)}function um(t,n,a){if(n=Vc(t,n,sm)[0],t=Ll($i)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=ho(n)}catch(v){throw v===Jr?yl:v}else s=n;n=nn();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(pe.flags|=2048,is(9,{destroy:void 0},hx.bind(null,c,a),null)),[s,f,t]}function hx(t,n){t.action=n}function cm(t){var n=nn(),a=Ve;if(a!==null)return um(n,a,t);nn(),n=n.memoizedState,a=nn();var s=a.queue.dispatch;return a.memoizedState=t,[n,s,!1]}function is(t,n,a,s){return t={tag:t,create:a,deps:s,inst:n,next:null},n=pe.updateQueue,n===null&&(n=Dl(),pe.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(s=a.next,a.next=t,t.next=s,n.lastEffect=t),t}function fm(){return nn().memoizedState}function Nl(t,n,a,s){var c=Nn();pe.flags|=t,c.memoizedState=is(1|n,{destroy:void 0},a,s===void 0?null:s)}function Ol(t,n,a,s){var c=nn();s=s===void 0?null:s;var f=c.memoizedState.inst;Ve!==null&&s!==null&&Fc(s,Ve.memoizedState.deps)?c.memoizedState=is(n,f,a,s):(pe.flags|=t,c.memoizedState=is(1|n,f,a,s))}function dm(t,n){Nl(8390656,8,t,n)}function qc(t,n){Ol(2048,8,t,n)}function px(t){pe.flags|=4;var n=pe.updateQueue;if(n===null)n=Dl(),pe.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function hm(t){var n=nn().memoizedState;return px({ref:n,nextImpl:t}),function(){if((Ne&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function pm(t,n){return Ol(4,2,t,n)}function mm(t,n){return Ol(4,4,t,n)}function gm(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function _m(t,n,a){a=a!=null?a.concat([t]):null,Ol(4,4,gm.bind(null,n,t),a)}function Yc(){}function vm(t,n){var a=nn();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&Fc(n,s[1])?s[0]:(a.memoizedState=[t,n],t)}function xm(t,n){var a=nn();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&Fc(n,s[1]))return s[0];if(s=t(),gr){Ft(!0);try{t()}finally{Ft(!1)}}return a.memoizedState=[s,n],s}function Zc(t,n,a){return a===void 0||(Ji&1073741824)!==0&&(ye&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=Sg(),pe.lanes|=t,Pa|=t,a)}function Sm(t,n,a,s){return Wn(a,n)?a:ts.current!==null?(t=Zc(t,a,s),Wn(t,n)||(ln=!0),t):(Ji&42)===0||(Ji&1073741824)!==0&&(ye&261930)===0?(ln=!0,t.memoizedState=a):(t=Sg(),pe.lanes|=t,Pa|=t,n)}function Mm(t,n,a,s,c){var f=G.p;G.p=f!==0&&8>f?f:8;var v=L.T,T={};L.T=T,Qc(t,!1,n,a);try{var B=c(),J=L.S;if(J!==null&&J(T,B),B!==null&&typeof B=="object"&&typeof B.then=="function"){var ht=ux(B,s);po(t,n,ht,Qn(t))}else po(t,n,s,Qn(t))}catch(gt){po(t,n,{then:function(){},status:"rejected",reason:gt},Qn())}finally{G.p=f,v!==null&&T.types!==null&&(v.types=T.types),L.T=v}}function mx(){}function jc(t,n,a,s){if(t.tag!==5)throw Error(r(476));var c=ym(t).queue;Mm(t,c,n,it,a===null?mx:function(){return Em(t),a(s)})}function ym(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:it,baseState:it,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:$i,lastRenderedState:it},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:$i,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Em(t){var n=ym(t);n.next===null&&(n=t.alternate.memoizedState),po(t,n.next.queue,{},Qn())}function Kc(){return bn(Uo)}function Tm(){return nn().memoizedState}function bm(){return nn().memoizedState}function gx(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=Qn();t=wa(a);var s=Da(n,t,a);s!==null&&(Vn(s,n,a),lo(s,n,a)),n={cache:bc()},t.payload=n;return}n=n.return}}function _x(t,n,a){var s=Qn();a={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Pl(t)?Rm(n,a):(a=pc(t,n,a,s),a!==null&&(Vn(a,t,s),Cm(a,n,s)))}function Am(t,n,a){var s=Qn();po(t,n,a,s)}function po(t,n,a,s){var c={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Pl(t))Rm(n,c);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var v=n.lastRenderedState,T=f(v,a);if(c.hasEagerState=!0,c.eagerState=T,Wn(T,v))return ml(t,n,c,0),We===null&&pl(),!1}catch{}if(a=pc(t,n,c,s),a!==null)return Vn(a,t,s),Cm(a,n,s),!0}return!1}function Qc(t,n,a,s){if(s={lane:2,revertLane:Df(),gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},Pl(t)){if(n)throw Error(r(479))}else n=pc(t,a,s,2),n!==null&&Vn(n,t,2)}function Pl(t){var n=t.alternate;return t===pe||n!==null&&n===pe}function Rm(t,n){es=Cl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function Cm(t,n,a){if((a&4194048)!==0){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,Vs(t,a)}}var mo={readContext:bn,use:Ul,useCallback:Qe,useContext:Qe,useEffect:Qe,useImperativeHandle:Qe,useLayoutEffect:Qe,useInsertionEffect:Qe,useMemo:Qe,useReducer:Qe,useRef:Qe,useState:Qe,useDebugValue:Qe,useDeferredValue:Qe,useTransition:Qe,useSyncExternalStore:Qe,useId:Qe,useHostTransitionStatus:Qe,useFormState:Qe,useActionState:Qe,useOptimistic:Qe,useMemoCache:Qe,useCacheRefresh:Qe};mo.useEffectEvent=Qe;var wm={readContext:bn,use:Ul,useCallback:function(t,n){return Nn().memoizedState=[t,n===void 0?null:n],t},useContext:bn,useEffect:dm,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,Nl(4194308,4,gm.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Nl(4194308,4,t,n)},useInsertionEffect:function(t,n){Nl(4,2,t,n)},useMemo:function(t,n){var a=Nn();n=n===void 0?null:n;var s=t();if(gr){Ft(!0);try{t()}finally{Ft(!1)}}return a.memoizedState=[s,n],s},useReducer:function(t,n,a){var s=Nn();if(a!==void 0){var c=a(n);if(gr){Ft(!0);try{a(n)}finally{Ft(!1)}}}else c=n;return s.memoizedState=s.baseState=c,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},s.queue=t,t=t.dispatch=_x.bind(null,pe,t),[s.memoizedState,t]},useRef:function(t){var n=Nn();return t={current:t},n.memoizedState=t},useState:function(t){t=kc(t);var n=t.queue,a=Am.bind(null,pe,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Yc,useDeferredValue:function(t,n){var a=Nn();return Zc(a,t,n)},useTransition:function(){var t=kc(!1);return t=Mm.bind(null,pe,t.queue,!0,!1),Nn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var s=pe,c=Nn();if(be){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),We===null)throw Error(r(349));(ye&127)!==0||Kp(s,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,dm(Jp.bind(null,s,f,t),[t]),s.flags|=2048,is(9,{destroy:void 0},Qp.bind(null,s,f,a,n),null),a},useId:function(){var t=Nn(),n=We.identifierPrefix;if(be){var a=Li,s=Ui;a=(s&~(1<<32-zt(s)-1)).toString(32)+a,n="_"+n+"R_"+a,a=wl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=cx++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:Kc,useFormState:om,useActionState:om,useOptimistic:function(t){var n=Nn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Qc.bind(null,pe,!0,a),a.dispatch=n,[t,n]},useMemoCache:Gc,useCacheRefresh:function(){return Nn().memoizedState=gx.bind(null,pe)},useEffectEvent:function(t){var n=Nn(),a={impl:t};return n.memoizedState=a,function(){if((Ne&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},Jc={readContext:bn,use:Ul,useCallback:vm,useContext:bn,useEffect:qc,useImperativeHandle:_m,useInsertionEffect:pm,useLayoutEffect:mm,useMemo:xm,useReducer:Ll,useRef:fm,useState:function(){return Ll($i)},useDebugValue:Yc,useDeferredValue:function(t,n){var a=nn();return Sm(a,Ve.memoizedState,t,n)},useTransition:function(){var t=Ll($i)[0],n=nn().memoizedState;return[typeof t=="boolean"?t:ho(t),n]},useSyncExternalStore:jp,useId:Tm,useHostTransitionStatus:Kc,useFormState:lm,useActionState:lm,useOptimistic:function(t,n){var a=nn();return em(a,Ve,t,n)},useMemoCache:Gc,useCacheRefresh:bm};Jc.useEffectEvent=hm;var Dm={readContext:bn,use:Ul,useCallback:vm,useContext:bn,useEffect:qc,useImperativeHandle:_m,useInsertionEffect:pm,useLayoutEffect:mm,useMemo:xm,useReducer:Xc,useRef:fm,useState:function(){return Xc($i)},useDebugValue:Yc,useDeferredValue:function(t,n){var a=nn();return Ve===null?Zc(a,t,n):Sm(a,Ve.memoizedState,t,n)},useTransition:function(){var t=Xc($i)[0],n=nn().memoizedState;return[typeof t=="boolean"?t:ho(t),n]},useSyncExternalStore:jp,useId:Tm,useHostTransitionStatus:Kc,useFormState:cm,useActionState:cm,useOptimistic:function(t,n){var a=nn();return Ve!==null?em(a,Ve,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Gc,useCacheRefresh:bm};Dm.useEffectEvent=hm;function $c(t,n,a,s){n=t.memoizedState,a=a(s,n),a=a==null?n:g({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var tf={enqueueSetState:function(t,n,a){t=t._reactInternals;var s=Qn(),c=wa(s);c.payload=n,a!=null&&(c.callback=a),n=Da(t,c,s),n!==null&&(Vn(n,t,s),lo(n,t,s))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var s=Qn(),c=wa(s);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=Da(t,c,s),n!==null&&(Vn(n,t,s),lo(n,t,s))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=Qn(),s=wa(a);s.tag=2,n!=null&&(s.callback=n),n=Da(t,s,a),n!==null&&(Vn(n,t,a),lo(n,t,a))}};function Um(t,n,a,s,c,f,v){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(s,f,v):n.prototype&&n.prototype.isPureReactComponent?!to(a,s)||!to(c,f):!0}function Lm(t,n,a,s){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==t&&tf.enqueueReplaceState(n,n.state,null)}function _r(t,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(t=t.defaultProps){a===n&&(a=g({},a));for(var c in t)a[c]===void 0&&(a[c]=t[c])}return a}function Nm(t){hl(t)}function Om(t){console.error(t)}function Pm(t){hl(t)}function Fl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function Fm(t,n,a){try{var s=t.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function ef(t,n,a){return a=wa(a),a.tag=3,a.payload={element:null},a.callback=function(){Fl(t,n)},a}function zm(t){return t=wa(t),t.tag=3,t}function Im(t,n,a,s){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=s.value;t.payload=function(){return c(f)},t.callback=function(){Fm(n,a,s)}}var v=a.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(t.callback=function(){Fm(n,a,s),typeof c!="function"&&(Fa===null?Fa=new Set([this]):Fa.add(this));var T=s.stack;this.componentDidCatch(s.value,{componentStack:T!==null?T:""})})}function vx(t,n,a,s,c){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&jr(n,a,c,!0),a=Yn.current,a!==null){switch(a.tag){case 31:case 13:return ui===null?Zl():a.alternate===null&&Je===0&&(Je=3),a.flags&=-257,a.flags|=65536,a.lanes=c,s===El?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),Rf(t,s,c)),!1;case 22:return a.flags|=65536,s===El?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),Rf(t,s,c)),!1}throw Error(r(435,a.tag))}return Rf(t,s,c),Zl(),!1}if(be)return n=Yn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,s!==Sc&&(t=Error(r(422),{cause:s}),io(ri(t,a)))):(s!==Sc&&(n=Error(r(423),{cause:s}),io(ri(n,a))),t=t.current.alternate,t.flags|=65536,c&=-c,t.lanes|=c,s=ri(s,a),c=ef(t.stateNode,s,c),Uc(t,c),Je!==4&&(Je=2)),!1;var f=Error(r(520),{cause:s});if(f=ri(f,a),Eo===null?Eo=[f]:Eo.push(f),Je!==4&&(Je=2),n===null)return!0;s=ri(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=c&-c,a.lanes|=t,t=ef(a.stateNode,s,t),Uc(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Fa===null||!Fa.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=zm(c),Im(c,t,a,s),Uc(a,c),!1}a=a.return}while(a!==null);return!1}var nf=Error(r(461)),ln=!1;function An(t,n,a,s){n.child=t===null?Vp(n,null,a,s):mr(n,t.child,a,s)}function Bm(t,n,a,s,c){a=a.render;var f=n.ref;if("ref"in s){var v={};for(var T in s)T!=="ref"&&(v[T]=s[T])}else v=s;return fr(n),s=zc(t,n,a,v,f,c),T=Ic(),t!==null&&!ln?(Bc(t,n,c),ta(t,n,c)):(be&&T&&vc(n),n.flags|=1,An(t,n,s,c),n.child)}function Hm(t,n,a,s,c){if(t===null){var f=a.type;return typeof f=="function"&&!mc(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Gm(t,n,f,s,c)):(t=_l(a.type,null,s,n,n.mode,c),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!ff(t,c)){var v=f.memoizedProps;if(a=a.compare,a=a!==null?a:to,a(v,s)&&t.ref===n.ref)return ta(t,n,c)}return n.flags|=1,t=Zi(f,s),t.ref=n.ref,t.return=n,n.child=t}function Gm(t,n,a,s,c){if(t!==null){var f=t.memoizedProps;if(to(f,s)&&t.ref===n.ref)if(ln=!1,n.pendingProps=s=f,ff(t,c))(t.flags&131072)!==0&&(ln=!0);else return n.lanes=t.lanes,ta(t,n,c)}return af(t,n,a,s,c)}function Vm(t,n,a,s){var c=s.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(s=n.child=t.child,c=0;s!==null;)c=c|s.lanes|s.childLanes,s=s.sibling;s=c&~f}else s=0,n.child=null;return Xm(t,n,f,a,s)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Ml(n,f!==null?f.cachePool:null),f!==null?Wp(n,f):Nc(),qp(n);else return s=n.lanes=536870912,Xm(t,n,f!==null?f.baseLanes|a:a,a,s)}else f!==null?(Ml(n,f.cachePool),Wp(n,f),La(),n.memoizedState=null):(t!==null&&Ml(n,null),Nc(),La());return An(t,n,c,a),n.child}function go(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Xm(t,n,a,s,c){var f=Rc();return f=f===null?null:{parent:sn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&Ml(n,null),Nc(),qp(n),t!==null&&jr(t,n,s,!0),n.childLanes=c,null}function zl(t,n){return n=Bl({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function km(t,n,a){return mr(n,t.child,null,a),t=zl(n,n.pendingProps),t.flags|=2,Zn(n),n.memoizedState=null,t}function xx(t,n,a){var s=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(be){if(s.mode==="hidden")return t=zl(n,s),n.lanes=536870912,go(null,t);if(Pc(n),(t=Ye)?(t=n0(t,li),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Ta!==null?{id:Ui,overflow:Li}:null,retryLane:536870912,hydrationErrors:null},a=Rp(t),a.return=n,n.child=a,Tn=n,Ye=null)):t=null,t===null)throw Aa(n);return n.lanes=536870912,null}return zl(n,s)}var f=t.memoizedState;if(f!==null){var v=f.dehydrated;if(Pc(n),c)if(n.flags&256)n.flags&=-257,n=km(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(ln||jr(t,n,a,!1),c=(a&t.childLanes)!==0,ln||c){if(s=We,s!==null&&(v=Or(s,a),v!==0&&v!==f.retryLane))throw f.retryLane=v,or(t,v),Vn(s,t,v),nf;Zl(),n=km(t,n,a)}else t=f.treeContext,Ye=ci(v.nextSibling),Tn=n,be=!0,ba=null,li=!1,t!==null&&Dp(n,t),n=zl(n,s),n.flags|=4096;return n}return t=Zi(t.child,{mode:s.mode,children:s.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Il(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function af(t,n,a,s,c){return fr(n),a=zc(t,n,a,s,void 0,c),s=Ic(),t!==null&&!ln?(Bc(t,n,c),ta(t,n,c)):(be&&s&&vc(n),n.flags|=1,An(t,n,a,c),n.child)}function Wm(t,n,a,s,c,f){return fr(n),n.updateQueue=null,a=Zp(n,s,a,c),Yp(t),s=Ic(),t!==null&&!ln?(Bc(t,n,f),ta(t,n,f)):(be&&s&&vc(n),n.flags|=1,An(t,n,a,f),n.child)}function qm(t,n,a,s,c){if(fr(n),n.stateNode===null){var f=Wr,v=a.contextType;typeof v=="object"&&v!==null&&(f=bn(v)),f=new a(s,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=tf,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=s,f.state=n.memoizedState,f.refs={},wc(n),v=a.contextType,f.context=typeof v=="object"&&v!==null?bn(v):Wr,f.state=n.memoizedState,v=a.getDerivedStateFromProps,typeof v=="function"&&($c(n,a,v,s),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(v=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),v!==f.state&&tf.enqueueReplaceState(f,f.state,null),co(n,s,f,c),uo(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(t===null){f=n.stateNode;var T=n.memoizedProps,B=_r(a,T);f.props=B;var J=f.context,ht=a.contextType;v=Wr,typeof ht=="object"&&ht!==null&&(v=bn(ht));var gt=a.getDerivedStateFromProps;ht=typeof gt=="function"||typeof f.getSnapshotBeforeUpdate=="function",T=n.pendingProps!==T,ht||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(T||J!==v)&&Lm(n,f,s,v),Ca=!1;var nt=n.memoizedState;f.state=nt,co(n,s,f,c),uo(),J=n.memoizedState,T||nt!==J||Ca?(typeof gt=="function"&&($c(n,a,gt,s),J=n.memoizedState),(B=Ca||Um(n,a,B,s,nt,J,v))?(ht||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=J),f.props=s,f.state=J,f.context=v,s=B):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{f=n.stateNode,Dc(t,n),v=n.memoizedProps,ht=_r(a,v),f.props=ht,gt=n.pendingProps,nt=f.context,J=a.contextType,B=Wr,typeof J=="object"&&J!==null&&(B=bn(J)),T=a.getDerivedStateFromProps,(J=typeof T=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(v!==gt||nt!==B)&&Lm(n,f,s,B),Ca=!1,nt=n.memoizedState,f.state=nt,co(n,s,f,c),uo();var ot=n.memoizedState;v!==gt||nt!==ot||Ca||t!==null&&t.dependencies!==null&&xl(t.dependencies)?(typeof T=="function"&&($c(n,a,T,s),ot=n.memoizedState),(ht=Ca||Um(n,a,ht,s,nt,ot,B)||t!==null&&t.dependencies!==null&&xl(t.dependencies))?(J||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(s,ot,B),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(s,ot,B)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||v===t.memoizedProps&&nt===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===t.memoizedProps&&nt===t.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=ot),f.props=s,f.state=ot,f.context=B,s=ht):(typeof f.componentDidUpdate!="function"||v===t.memoizedProps&&nt===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===t.memoizedProps&&nt===t.memoizedState||(n.flags|=1024),s=!1)}return f=s,Il(t,n),s=(n.flags&128)!==0,f||s?(f=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&s?(n.child=mr(n,t.child,null,c),n.child=mr(n,null,a,c)):An(t,n,a,c),n.memoizedState=f.state,t=n.child):t=ta(t,n,c),t}function Ym(t,n,a,s){return ur(),n.flags|=256,An(t,n,a,s),n.child}var rf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function sf(t){return{baseLanes:t,cachePool:Fp()}}function of(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=Kn),t}function Zm(t,n,a){var s=n.pendingProps,c=!1,f=(n.flags&128)!==0,v;if((v=f)||(v=t!==null&&t.memoizedState===null?!1:(en.current&2)!==0),v&&(c=!0,n.flags&=-129),v=(n.flags&32)!==0,n.flags&=-33,t===null){if(be){if(c?Ua(n):La(),(t=Ye)?(t=n0(t,li),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Ta!==null?{id:Ui,overflow:Li}:null,retryLane:536870912,hydrationErrors:null},a=Rp(t),a.return=n,n.child=a,Tn=n,Ye=null)):t=null,t===null)throw Aa(n);return Xf(t)?n.lanes=32:n.lanes=536870912,null}var T=s.children;return s=s.fallback,c?(La(),c=n.mode,T=Bl({mode:"hidden",children:T},c),s=lr(s,c,a,null),T.return=n,s.return=n,T.sibling=s,n.child=T,s=n.child,s.memoizedState=sf(a),s.childLanes=of(t,v,a),n.memoizedState=rf,go(null,s)):(Ua(n),lf(n,T))}var B=t.memoizedState;if(B!==null&&(T=B.dehydrated,T!==null)){if(f)n.flags&256?(Ua(n),n.flags&=-257,n=uf(t,n,a)):n.memoizedState!==null?(La(),n.child=t.child,n.flags|=128,n=null):(La(),T=s.fallback,c=n.mode,s=Bl({mode:"visible",children:s.children},c),T=lr(T,c,a,null),T.flags|=2,s.return=n,T.return=n,s.sibling=T,n.child=s,mr(n,t.child,null,a),s=n.child,s.memoizedState=sf(a),s.childLanes=of(t,v,a),n.memoizedState=rf,n=go(null,s));else if(Ua(n),Xf(T)){if(v=T.nextSibling&&T.nextSibling.dataset,v)var J=v.dgst;v=J,s=Error(r(419)),s.stack="",s.digest=v,io({value:s,source:null,stack:null}),n=uf(t,n,a)}else if(ln||jr(t,n,a,!1),v=(a&t.childLanes)!==0,ln||v){if(v=We,v!==null&&(s=Or(v,a),s!==0&&s!==B.retryLane))throw B.retryLane=s,or(t,s),Vn(v,t,s),nf;Vf(T)||Zl(),n=uf(t,n,a)}else Vf(T)?(n.flags|=192,n.child=t.child,n=null):(t=B.treeContext,Ye=ci(T.nextSibling),Tn=n,be=!0,ba=null,li=!1,t!==null&&Dp(n,t),n=lf(n,s.children),n.flags|=4096);return n}return c?(La(),T=s.fallback,c=n.mode,B=t.child,J=B.sibling,s=Zi(B,{mode:"hidden",children:s.children}),s.subtreeFlags=B.subtreeFlags&65011712,J!==null?T=Zi(J,T):(T=lr(T,c,a,null),T.flags|=2),T.return=n,s.return=n,s.sibling=T,n.child=s,go(null,s),s=n.child,T=t.child.memoizedState,T===null?T=sf(a):(c=T.cachePool,c!==null?(B=sn._currentValue,c=c.parent!==B?{parent:B,pool:B}:c):c=Fp(),T={baseLanes:T.baseLanes|a,cachePool:c}),s.memoizedState=T,s.childLanes=of(t,v,a),n.memoizedState=rf,go(t.child,s)):(Ua(n),a=t.child,t=a.sibling,a=Zi(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,t!==null&&(v=n.deletions,v===null?(n.deletions=[t],n.flags|=16):v.push(t)),n.child=a,n.memoizedState=null,a)}function lf(t,n){return n=Bl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Bl(t,n){return t=qn(22,t,null,n),t.lanes=0,t}function uf(t,n,a){return mr(n,t.child,null,a),t=lf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function jm(t,n,a){t.lanes|=n;var s=t.alternate;s!==null&&(s.lanes|=n),Ec(t.return,n,a)}function cf(t,n,a,s,c,f){var v=t.memoizedState;v===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:c,treeForkCount:f}:(v.isBackwards=n,v.rendering=null,v.renderingStartTime=0,v.last=s,v.tail=a,v.tailMode=c,v.treeForkCount=f)}function Km(t,n,a){var s=n.pendingProps,c=s.revealOrder,f=s.tail;s=s.children;var v=en.current,T=(v&2)!==0;if(T?(v=v&1|2,n.flags|=128):v&=1,mt(en,v),An(t,n,s,a),s=be?no:0,!T&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&jm(t,a,n);else if(t.tag===19)jm(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(c){case"forwards":for(a=n.child,c=null;a!==null;)t=a.alternate,t!==null&&Rl(t)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),cf(n,!1,c,a,f,s);break;case"backwards":case"unstable_legacy-backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(t=c.alternate,t!==null&&Rl(t)===null){n.child=c;break}t=c.sibling,c.sibling=a,a=c,c=t}cf(n,!0,a,null,f,s);break;case"together":cf(n,!1,null,null,void 0,s);break;default:n.memoizedState=null}return n.child}function ta(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Pa|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(jr(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=Zi(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Zi(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function ff(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&xl(t)))}function Sx(t,n,a){switch(n.tag){case 3:Dt(n,n.stateNode.containerInfo),Ra(n,sn,t.memoizedState.cache),ur();break;case 27:case 5:Vt(n);break;case 4:Dt(n,n.stateNode.containerInfo);break;case 10:Ra(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Pc(n),null;break;case 13:var s=n.memoizedState;if(s!==null)return s.dehydrated!==null?(Ua(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Zm(t,n,a):(Ua(n),t=ta(t,n,a),t!==null?t.sibling:null);Ua(n);break;case 19:var c=(t.flags&128)!==0;if(s=(a&n.childLanes)!==0,s||(jr(t,n,a,!1),s=(a&n.childLanes)!==0),c){if(s)return Km(t,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),mt(en,en.current),s)break;return null;case 22:return n.lanes=0,Vm(t,n,a,n.pendingProps);case 24:Ra(n,sn,t.memoizedState.cache)}return ta(t,n,a)}function Qm(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)ln=!0;else{if(!ff(t,a)&&(n.flags&128)===0)return ln=!1,Sx(t,n,a);ln=(t.flags&131072)!==0}else ln=!1,be&&(n.flags&1048576)!==0&&wp(n,no,n.index);switch(n.lanes=0,n.tag){case 16:t:{var s=n.pendingProps;if(t=hr(n.elementType),n.type=t,typeof t=="function")mc(t)?(s=_r(t,s),n.tag=1,n=qm(null,n,t,s,a)):(n.tag=0,n=af(null,n,t,s,a));else{if(t!=null){var c=t.$$typeof;if(c===O){n.tag=11,n=Bm(null,n,t,s,a);break t}else if(c===P){n.tag=14,n=Hm(null,n,t,s,a);break t}}throw n=ft(t)||t,Error(r(306,n,""))}}return n;case 0:return af(t,n,n.type,n.pendingProps,a);case 1:return s=n.type,c=_r(s,n.pendingProps),qm(t,n,s,c,a);case 3:t:{if(Dt(n,n.stateNode.containerInfo),t===null)throw Error(r(387));s=n.pendingProps;var f=n.memoizedState;c=f.element,Dc(t,n),co(n,s,null,a);var v=n.memoizedState;if(s=v.cache,Ra(n,sn,s),s!==f.cache&&Tc(n,[sn],a,!0),uo(),s=v.element,f.isDehydrated)if(f={element:s,isDehydrated:!1,cache:v.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Ym(t,n,s,a);break t}else if(s!==c){c=ri(Error(r(424)),n),io(c),n=Ym(t,n,s,a);break t}else for(t=n.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,Ye=ci(t.firstChild),Tn=n,be=!0,ba=null,li=!0,a=Vp(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(ur(),s===c){n=ta(t,n,a);break t}An(t,n,s,a)}n=n.child}return n;case 26:return Il(t,n),t===null?(a=l0(n.type,null,n.pendingProps,null))?n.memoizedState=a:be||(a=n.type,t=n.pendingProps,s=eu($.current).createElement(a),s[rn]=n,s[vn]=t,Rn(s,a,t),b(s),n.stateNode=s):n.memoizedState=l0(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Vt(n),t===null&&be&&(s=n.stateNode=r0(n.type,n.pendingProps,$.current),Tn=n,li=!0,c=Ye,Ha(n.type)?(kf=c,Ye=ci(s.firstChild)):Ye=c),An(t,n,n.pendingProps.children,a),Il(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&be&&((c=s=Ye)&&(s=Kx(s,n.type,n.pendingProps,li),s!==null?(n.stateNode=s,Tn=n,Ye=ci(s.firstChild),li=!1,c=!0):c=!1),c||Aa(n)),Vt(n),c=n.type,f=n.pendingProps,v=t!==null?t.memoizedProps:null,s=f.children,Bf(c,f)?s=null:v!==null&&Bf(c,v)&&(n.flags|=32),n.memoizedState!==null&&(c=zc(t,n,fx,null,null,a),Uo._currentValue=c),Il(t,n),An(t,n,s,a),n.child;case 6:return t===null&&be&&((t=a=Ye)&&(a=Qx(a,n.pendingProps,li),a!==null?(n.stateNode=a,Tn=n,Ye=null,t=!0):t=!1),t||Aa(n)),null;case 13:return Zm(t,n,a);case 4:return Dt(n,n.stateNode.containerInfo),s=n.pendingProps,t===null?n.child=mr(n,null,s,a):An(t,n,s,a),n.child;case 11:return Bm(t,n,n.type,n.pendingProps,a);case 7:return An(t,n,n.pendingProps,a),n.child;case 8:return An(t,n,n.pendingProps.children,a),n.child;case 12:return An(t,n,n.pendingProps.children,a),n.child;case 10:return s=n.pendingProps,Ra(n,n.type,s.value),An(t,n,s.children,a),n.child;case 9:return c=n.type._context,s=n.pendingProps.children,fr(n),c=bn(c),s=s(c),n.flags|=1,An(t,n,s,a),n.child;case 14:return Hm(t,n,n.type,n.pendingProps,a);case 15:return Gm(t,n,n.type,n.pendingProps,a);case 19:return Km(t,n,a);case 31:return xx(t,n,a);case 22:return Vm(t,n,a,n.pendingProps);case 24:return fr(n),s=bn(sn),t===null?(c=Rc(),c===null&&(c=We,f=bc(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:s,cache:c},wc(n),Ra(n,sn,c)):((t.lanes&a)!==0&&(Dc(t,n),co(n,null,null,a),uo()),c=t.memoizedState,f=n.memoizedState,c.parent!==s?(c={parent:s,cache:s},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),Ra(n,sn,s)):(s=f.cache,Ra(n,sn,s),s!==c.cache&&Tc(n,[sn],a,!0))),An(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function ea(t){t.flags|=4}function df(t,n,a,s,c){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(c&335544128)===c)if(t.stateNode.complete)t.flags|=8192;else if(Tg())t.flags|=8192;else throw pr=El,Cc}else t.flags&=-16777217}function Jm(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!h0(n))if(Tg())t.flags|=8192;else throw pr=El,Cc}function Hl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Fe():536870912,t.lanes|=n,os|=n)}function _o(t,n){if(!be)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:s.sibling=null}}function Ze(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,s=0;if(n)for(var c=t.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags&65011712,s|=c.flags&65011712,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags,s|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=s,t.childLanes=a,n}function Mx(t,n,a){var s=n.pendingProps;switch(xc(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ze(n),null;case 1:return Ze(n),null;case 3:return a=n.stateNode,s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Qi(sn),kt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Zr(n)?ea(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Mc())),Ze(n),null;case 26:var c=n.type,f=n.memoizedState;return t===null?(ea(n),f!==null?(Ze(n),Jm(n,f)):(Ze(n),df(n,c,null,s,a))):f?f!==t.memoizedState?(ea(n),Ze(n),Jm(n,f)):(Ze(n),n.flags&=-16777217):(t=t.memoizedProps,t!==s&&ea(n),Ze(n),df(n,c,t,s,a)),null;case 27:if(_e(n),a=$.current,c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&ea(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Ze(n),null}t=Rt.current,Zr(n)?Up(n):(t=r0(c,s,a),n.stateNode=t,ea(n))}return Ze(n),null;case 5:if(_e(n),c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&ea(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Ze(n),null}if(f=Rt.current,Zr(n))Up(n);else{var v=eu($.current);switch(f){case 1:f=v.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:f=v.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":f=v.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":f=v.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":f=v.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof s.is=="string"?v.createElement("select",{is:s.is}):v.createElement("select"),s.multiple?f.multiple=!0:s.size&&(f.size=s.size);break;default:f=typeof s.is=="string"?v.createElement(c,{is:s.is}):v.createElement(c)}}f[rn]=n,f[vn]=s;t:for(v=n.child;v!==null;){if(v.tag===5||v.tag===6)f.appendChild(v.stateNode);else if(v.tag!==4&&v.tag!==27&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===n)break t;for(;v.sibling===null;){if(v.return===null||v.return===n)break t;v=v.return}v.sibling.return=v.return,v=v.sibling}n.stateNode=f;t:switch(Rn(f,c,s),c){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break t;case"img":s=!0;break t;default:s=!1}s&&ea(n)}}return Ze(n),df(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==s&&ea(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(t=$.current,Zr(n)){if(t=n.stateNode,a=n.memoizedProps,s=null,c=Tn,c!==null)switch(c.tag){case 27:case 5:s=c.memoizedProps}t[rn]=n,t=!!(t.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||Zg(t.nodeValue,a)),t||Aa(n,!0)}else t=eu(t).createTextNode(s),t[rn]=n,n.stateNode=t}return Ze(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(s=Zr(n),a!==null){if(t===null){if(!s)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[rn]=n}else ur(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ze(n),t=!1}else a=Mc(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(Zn(n),n):(Zn(n),null);if((n.flags&128)!==0)throw Error(r(558))}return Ze(n),null;case 13:if(s=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(c=Zr(n),s!==null&&s.dehydrated!==null){if(t===null){if(!c)throw Error(r(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[rn]=n}else ur(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ze(n),c=!1}else c=Mc(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(Zn(n),n):(Zn(n),null)}return Zn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=s!==null,t=t!==null&&t.memoizedState!==null,a&&(s=n.child,c=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(c=s.alternate.memoizedState.cachePool.pool),f=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(f=s.memoizedState.cachePool.pool),f!==c&&(s.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Hl(n,n.updateQueue),Ze(n),null);case 4:return kt(),t===null&&Of(n.stateNode.containerInfo),Ze(n),null;case 10:return Qi(n.type),Ze(n),null;case 19:if(j(en),s=n.memoizedState,s===null)return Ze(n),null;if(c=(n.flags&128)!==0,f=s.rendering,f===null)if(c)_o(s,!1);else{if(Je!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=Rl(t),f!==null){for(n.flags|=128,_o(s,!1),t=f.updateQueue,n.updateQueue=t,Hl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)Ap(a,t),a=a.sibling;return mt(en,en.current&1|2),be&&ji(n,s.treeForkCount),n.child}t=t.sibling}s.tail!==null&&y()>Wl&&(n.flags|=128,c=!0,_o(s,!1),n.lanes=4194304)}else{if(!c)if(t=Rl(f),t!==null){if(n.flags|=128,c=!0,t=t.updateQueue,n.updateQueue=t,Hl(n,t),_o(s,!0),s.tail===null&&s.tailMode==="hidden"&&!f.alternate&&!be)return Ze(n),null}else 2*y()-s.renderingStartTime>Wl&&a!==536870912&&(n.flags|=128,c=!0,_o(s,!1),n.lanes=4194304);s.isBackwards?(f.sibling=n.child,n.child=f):(t=s.last,t!==null?t.sibling=f:n.child=f,s.last=f)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=y(),t.sibling=null,a=en.current,mt(en,c?a&1|2:a&1),be&&ji(n,s.treeForkCount),t):(Ze(n),null);case 22:case 23:return Zn(n),Oc(),s=n.memoizedState!==null,t!==null?t.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(Ze(n),n.subtreeFlags&6&&(n.flags|=8192)):Ze(n),a=n.updateQueue,a!==null&&Hl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),t!==null&&j(dr),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Qi(sn),Ze(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function yx(t,n){switch(xc(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Qi(sn),kt(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return _e(n),null;case 31:if(n.memoizedState!==null){if(Zn(n),n.alternate===null)throw Error(r(340));ur()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(Zn(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));ur()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return j(en),null;case 4:return kt(),null;case 10:return Qi(n.type),null;case 22:case 23:return Zn(n),Oc(),t!==null&&j(dr),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Qi(sn),null;case 25:return null;default:return null}}function $m(t,n){switch(xc(n),n.tag){case 3:Qi(sn),kt();break;case 26:case 27:case 5:_e(n);break;case 4:kt();break;case 31:n.memoizedState!==null&&Zn(n);break;case 13:Zn(n);break;case 19:j(en);break;case 10:Qi(n.type);break;case 22:case 23:Zn(n),Oc(),t!==null&&j(dr);break;case 24:Qi(sn)}}function vo(t,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var c=s.next;a=c;do{if((a.tag&t)===t){s=void 0;var f=a.create,v=a.inst;s=f(),v.destroy=s}a=a.next}while(a!==c)}}catch(T){Be(n,n.return,T)}}function Na(t,n,a){try{var s=n.updateQueue,c=s!==null?s.lastEffect:null;if(c!==null){var f=c.next;s=f;do{if((s.tag&t)===t){var v=s.inst,T=v.destroy;if(T!==void 0){v.destroy=void 0,c=n;var B=a,J=T;try{J()}catch(ht){Be(c,B,ht)}}}s=s.next}while(s!==f)}}catch(ht){Be(n,n.return,ht)}}function tg(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{kp(n,a)}catch(s){Be(t,t.return,s)}}}function eg(t,n,a){a.props=_r(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(s){Be(t,n,s)}}function xo(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var s=t.stateNode;break;case 30:s=t.stateNode;break;default:s=t.stateNode}typeof a=="function"?t.refCleanup=a(s):a.current=s}}catch(c){Be(t,n,c)}}function Ni(t,n){var a=t.ref,s=t.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(c){Be(t,n,c)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Be(t,n,c)}else a.current=null}function ng(t){var n=t.type,a=t.memoizedProps,s=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break t;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(c){Be(t,t.return,c)}}function hf(t,n,a){try{var s=t.stateNode;kx(s,t.type,a,n),s[vn]=n}catch(c){Be(t,t.return,c)}}function ig(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Ha(t.type)||t.tag===4}function pf(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||ig(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Ha(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function mf(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=qi));else if(s!==4&&(s===27&&Ha(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(mf(t,n,a),t=t.sibling;t!==null;)mf(t,n,a),t=t.sibling}function Gl(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(s!==4&&(s===27&&Ha(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Gl(t,n,a),t=t.sibling;t!==null;)Gl(t,n,a),t=t.sibling}function ag(t){var n=t.stateNode,a=t.memoizedProps;try{for(var s=t.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);Rn(n,s,a),n[rn]=t,n[vn]=a}catch(f){Be(t,t.return,f)}}var na=!1,un=!1,gf=!1,rg=typeof WeakSet=="function"?WeakSet:Set,mn=null;function Ex(t,n){if(t=t.containerInfo,zf=lu,t=_p(t),lc(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var c=s.anchorOffset,f=s.focusNode;s=s.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var v=0,T=-1,B=-1,J=0,ht=0,gt=t,nt=null;e:for(;;){for(var ot;gt!==a||c!==0&&gt.nodeType!==3||(T=v+c),gt!==f||s!==0&&gt.nodeType!==3||(B=v+s),gt.nodeType===3&&(v+=gt.nodeValue.length),(ot=gt.firstChild)!==null;)nt=gt,gt=ot;for(;;){if(gt===t)break e;if(nt===a&&++J===c&&(T=v),nt===f&&++ht===s&&(B=v),(ot=gt.nextSibling)!==null)break;gt=nt,nt=gt.parentNode}gt=ot}a=T===-1||B===-1?null:{start:T,end:B}}else a=null}a=a||{start:0,end:0}}else a=null;for(If={focusedElem:t,selectionRange:a},lu=!1,mn=n;mn!==null;)if(n=mn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,mn=t;else for(;mn!==null;){switch(n=mn,f=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)c=t[a],c.ref.impl=c.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,s=a.stateNode;try{var Yt=_r(a.type,c);t=s.getSnapshotBeforeUpdate(Yt,f),s.__reactInternalSnapshotBeforeUpdate=t}catch(se){Be(a,a.return,se)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)Gf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Gf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,mn=t;break}mn=n.return}}function sg(t,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:aa(t,a),s&4&&vo(5,a);break;case 1:if(aa(t,a),s&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(v){Be(a,a.return,v)}else{var c=_r(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(c,n,t.__reactInternalSnapshotBeforeUpdate)}catch(v){Be(a,a.return,v)}}s&64&&tg(a),s&512&&xo(a,a.return);break;case 3:if(aa(t,a),s&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{kp(t,n)}catch(v){Be(a,a.return,v)}}break;case 27:n===null&&s&4&&ag(a);case 26:case 5:aa(t,a),n===null&&s&4&&ng(a),s&512&&xo(a,a.return);break;case 12:aa(t,a);break;case 31:aa(t,a),s&4&&ug(t,a);break;case 13:aa(t,a),s&4&&cg(t,a),s&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=Lx.bind(null,a),Jx(t,a))));break;case 22:if(s=a.memoizedState!==null||na,!s){n=n!==null&&n.memoizedState!==null||un,c=na;var f=un;na=s,(un=n)&&!f?ra(t,a,(a.subtreeFlags&8772)!==0):aa(t,a),na=c,un=f}break;case 30:break;default:aa(t,a)}}function og(t){var n=t.alternate;n!==null&&(t.alternate=null,og(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&qs(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Ke=null,In=!1;function ia(t,n,a){for(a=a.child;a!==null;)lg(t,n,a),a=a.sibling}function lg(t,n,a){if(Tt&&typeof Tt.onCommitFiberUnmount=="function")try{Tt.onCommitFiberUnmount(Mt,a)}catch{}switch(a.tag){case 26:un||Ni(a,n),ia(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:un||Ni(a,n);var s=Ke,c=In;Ha(a.type)&&(Ke=a.stateNode,In=!1),ia(t,n,a),Co(a.stateNode),Ke=s,In=c;break;case 5:un||Ni(a,n);case 6:if(s=Ke,c=In,Ke=null,ia(t,n,a),Ke=s,In=c,Ke!==null)if(In)try{(Ke.nodeType===9?Ke.body:Ke.nodeName==="HTML"?Ke.ownerDocument.body:Ke).removeChild(a.stateNode)}catch(f){Be(a,n,f)}else try{Ke.removeChild(a.stateNode)}catch(f){Be(a,n,f)}break;case 18:Ke!==null&&(In?(t=Ke,t0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),ms(t)):t0(Ke,a.stateNode));break;case 4:s=Ke,c=In,Ke=a.stateNode.containerInfo,In=!0,ia(t,n,a),Ke=s,In=c;break;case 0:case 11:case 14:case 15:Na(2,a,n),un||Na(4,a,n),ia(t,n,a);break;case 1:un||(Ni(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&eg(a,n,s)),ia(t,n,a);break;case 21:ia(t,n,a);break;case 22:un=(s=un)||a.memoizedState!==null,ia(t,n,a),un=s;break;default:ia(t,n,a)}}function ug(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{ms(t)}catch(a){Be(n,n.return,a)}}}function cg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{ms(t)}catch(a){Be(n,n.return,a)}}function Tx(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new rg),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new rg),n;default:throw Error(r(435,t.tag))}}function Vl(t,n){var a=Tx(t);n.forEach(function(s){if(!a.has(s)){a.add(s);var c=Nx.bind(null,t,s);s.then(c,c)}})}function Bn(t,n){var a=n.deletions;if(a!==null)for(var s=0;s<a.length;s++){var c=a[s],f=t,v=n,T=v;t:for(;T!==null;){switch(T.tag){case 27:if(Ha(T.type)){Ke=T.stateNode,In=!1;break t}break;case 5:Ke=T.stateNode,In=!1;break t;case 3:case 4:Ke=T.stateNode.containerInfo,In=!0;break t}T=T.return}if(Ke===null)throw Error(r(160));lg(f,v,c),Ke=null,In=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)fg(n,t),n=n.sibling}var yi=null;function fg(t,n){var a=t.alternate,s=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Bn(n,t),Hn(t),s&4&&(Na(3,t,t.return),vo(3,t),Na(5,t,t.return));break;case 1:Bn(n,t),Hn(t),s&512&&(un||a===null||Ni(a,a.return)),s&64&&na&&(t=t.updateQueue,t!==null&&(s=t.callbacks,s!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?s:a.concat(s))));break;case 26:var c=yi;if(Bn(n,t),Hn(t),s&512&&(un||a===null||Ni(a,a.return)),s&4){var f=a!==null?a.memoizedState:null;if(s=t.memoizedState,a===null)if(s===null)if(t.stateNode===null){t:{s=t.type,a=t.memoizedProps,c=c.ownerDocument||c;e:switch(s){case"title":f=c.getElementsByTagName("title")[0],(!f||f[nr]||f[rn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(s),c.head.insertBefore(f,c.querySelector("head > title"))),Rn(f,s,a),f[rn]=t,b(f),s=f;break t;case"link":var v=f0("link","href",c).get(s+(a.href||""));if(v){for(var T=0;T<v.length;T++)if(f=v[T],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){v.splice(T,1);break e}}f=c.createElement(s),Rn(f,s,a),c.head.appendChild(f);break;case"meta":if(v=f0("meta","content",c).get(s+(a.content||""))){for(T=0;T<v.length;T++)if(f=v[T],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){v.splice(T,1);break e}}f=c.createElement(s),Rn(f,s,a),c.head.appendChild(f);break;default:throw Error(r(468,s))}f[rn]=t,b(f),s=f}t.stateNode=s}else d0(c,t.type,t.stateNode);else t.stateNode=c0(c,s,t.memoizedProps);else f!==s?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,s===null?d0(c,t.type,t.stateNode):c0(c,s,t.memoizedProps)):s===null&&t.stateNode!==null&&hf(t,t.memoizedProps,a.memoizedProps)}break;case 27:Bn(n,t),Hn(t),s&512&&(un||a===null||Ni(a,a.return)),a!==null&&s&4&&hf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Bn(n,t),Hn(t),s&512&&(un||a===null||Ni(a,a.return)),t.flags&32){c=t.stateNode;try{fn(c,"")}catch(Yt){Be(t,t.return,Yt)}}s&4&&t.stateNode!=null&&(c=t.memoizedProps,hf(t,c,a!==null?a.memoizedProps:c)),s&1024&&(gf=!0);break;case 6:if(Bn(n,t),Hn(t),s&4){if(t.stateNode===null)throw Error(r(162));s=t.memoizedProps,a=t.stateNode;try{a.nodeValue=s}catch(Yt){Be(t,t.return,Yt)}}break;case 3:if(au=null,c=yi,yi=nu(n.containerInfo),Bn(n,t),yi=c,Hn(t),s&4&&a!==null&&a.memoizedState.isDehydrated)try{ms(n.containerInfo)}catch(Yt){Be(t,t.return,Yt)}gf&&(gf=!1,dg(t));break;case 4:s=yi,yi=nu(t.stateNode.containerInfo),Bn(n,t),Hn(t),yi=s;break;case 12:Bn(n,t),Hn(t);break;case 31:Bn(n,t),Hn(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Vl(t,s)));break;case 13:Bn(n,t),Hn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(kl=y()),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Vl(t,s)));break;case 22:c=t.memoizedState!==null;var B=a!==null&&a.memoizedState!==null,J=na,ht=un;if(na=J||c,un=ht||B,Bn(n,t),un=ht,na=J,Hn(t),s&8192)t:for(n=t.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||B||na||un||vr(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){B=a=n;try{if(f=B.stateNode,c)v=f.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{T=B.stateNode;var gt=B.memoizedProps.style,nt=gt!=null&&gt.hasOwnProperty("display")?gt.display:null;T.style.display=nt==null||typeof nt=="boolean"?"":(""+nt).trim()}}catch(Yt){Be(B,B.return,Yt)}}}else if(n.tag===6){if(a===null){B=n;try{B.stateNode.nodeValue=c?"":B.memoizedProps}catch(Yt){Be(B,B.return,Yt)}}}else if(n.tag===18){if(a===null){B=n;try{var ot=B.stateNode;c?e0(ot,!0):e0(B.stateNode,!1)}catch(Yt){Be(B,B.return,Yt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break t;for(;n.sibling===null;){if(n.return===null||n.return===t)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}s&4&&(s=t.updateQueue,s!==null&&(a=s.retryQueue,a!==null&&(s.retryQueue=null,Vl(t,a))));break;case 19:Bn(n,t),Hn(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Vl(t,s)));break;case 30:break;case 21:break;default:Bn(n,t),Hn(t)}}function Hn(t){var n=t.flags;if(n&2){try{for(var a,s=t.return;s!==null;){if(ig(s)){a=s;break}s=s.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var c=a.stateNode,f=pf(t);Gl(t,f,c);break;case 5:var v=a.stateNode;a.flags&32&&(fn(v,""),a.flags&=-33);var T=pf(t);Gl(t,T,v);break;case 3:case 4:var B=a.stateNode.containerInfo,J=pf(t);mf(t,J,B);break;default:throw Error(r(161))}}catch(ht){Be(t,t.return,ht)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function dg(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;dg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function aa(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)sg(t,n.alternate,n),n=n.sibling}function vr(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Na(4,n,n.return),vr(n);break;case 1:Ni(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&eg(n,n.return,a),vr(n);break;case 27:Co(n.stateNode);case 26:case 5:Ni(n,n.return),vr(n);break;case 22:n.memoizedState===null&&vr(n);break;case 30:vr(n);break;default:vr(n)}t=t.sibling}}function ra(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var s=n.alternate,c=t,f=n,v=f.flags;switch(f.tag){case 0:case 11:case 15:ra(c,f,a),vo(4,f);break;case 1:if(ra(c,f,a),s=f,c=s.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(J){Be(s,s.return,J)}if(s=f,c=s.updateQueue,c!==null){var T=s.stateNode;try{var B=c.shared.hiddenCallbacks;if(B!==null)for(c.shared.hiddenCallbacks=null,c=0;c<B.length;c++)Xp(B[c],T)}catch(J){Be(s,s.return,J)}}a&&v&64&&tg(f),xo(f,f.return);break;case 27:ag(f);case 26:case 5:ra(c,f,a),a&&s===null&&v&4&&ng(f),xo(f,f.return);break;case 12:ra(c,f,a);break;case 31:ra(c,f,a),a&&v&4&&ug(c,f);break;case 13:ra(c,f,a),a&&v&4&&cg(c,f);break;case 22:f.memoizedState===null&&ra(c,f,a),xo(f,f.return);break;case 30:break;default:ra(c,f,a)}n=n.sibling}}function _f(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&ao(a))}function vf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&ao(t))}function Ei(t,n,a,s){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)hg(t,n,a,s),n=n.sibling}function hg(t,n,a,s){var c=n.flags;switch(n.tag){case 0:case 11:case 15:Ei(t,n,a,s),c&2048&&vo(9,n);break;case 1:Ei(t,n,a,s);break;case 3:Ei(t,n,a,s),c&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&ao(t)));break;case 12:if(c&2048){Ei(t,n,a,s),t=n.stateNode;try{var f=n.memoizedProps,v=f.id,T=f.onPostCommit;typeof T=="function"&&T(v,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(B){Be(n,n.return,B)}}else Ei(t,n,a,s);break;case 31:Ei(t,n,a,s);break;case 13:Ei(t,n,a,s);break;case 23:break;case 22:f=n.stateNode,v=n.alternate,n.memoizedState!==null?f._visibility&2?Ei(t,n,a,s):So(t,n):f._visibility&2?Ei(t,n,a,s):(f._visibility|=2,as(t,n,a,s,(n.subtreeFlags&10256)!==0||!1)),c&2048&&_f(v,n);break;case 24:Ei(t,n,a,s),c&2048&&vf(n.alternate,n);break;default:Ei(t,n,a,s)}}function as(t,n,a,s,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,v=n,T=a,B=s,J=v.flags;switch(v.tag){case 0:case 11:case 15:as(f,v,T,B,c),vo(8,v);break;case 23:break;case 22:var ht=v.stateNode;v.memoizedState!==null?ht._visibility&2?as(f,v,T,B,c):So(f,v):(ht._visibility|=2,as(f,v,T,B,c)),c&&J&2048&&_f(v.alternate,v);break;case 24:as(f,v,T,B,c),c&&J&2048&&vf(v.alternate,v);break;default:as(f,v,T,B,c)}n=n.sibling}}function So(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,s=n,c=s.flags;switch(s.tag){case 22:So(a,s),c&2048&&_f(s.alternate,s);break;case 24:So(a,s),c&2048&&vf(s.alternate,s);break;default:So(a,s)}n=n.sibling}}var Mo=8192;function rs(t,n,a){if(t.subtreeFlags&Mo)for(t=t.child;t!==null;)pg(t,n,a),t=t.sibling}function pg(t,n,a){switch(t.tag){case 26:rs(t,n,a),t.flags&Mo&&t.memoizedState!==null&&cS(a,yi,t.memoizedState,t.memoizedProps);break;case 5:rs(t,n,a);break;case 3:case 4:var s=yi;yi=nu(t.stateNode.containerInfo),rs(t,n,a),yi=s;break;case 22:t.memoizedState===null&&(s=t.alternate,s!==null&&s.memoizedState!==null?(s=Mo,Mo=16777216,rs(t,n,a),Mo=s):rs(t,n,a));break;default:rs(t,n,a)}}function mg(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function yo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];mn=s,_g(s,t)}mg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)gg(t),t=t.sibling}function gg(t){switch(t.tag){case 0:case 11:case 15:yo(t),t.flags&2048&&Na(9,t,t.return);break;case 3:yo(t);break;case 12:yo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Xl(t)):yo(t);break;default:yo(t)}}function Xl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];mn=s,_g(s,t)}mg(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Na(8,n,n.return),Xl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Xl(n));break;default:Xl(n)}t=t.sibling}}function _g(t,n){for(;mn!==null;){var a=mn;switch(a.tag){case 0:case 11:case 15:Na(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:ao(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,mn=s;else t:for(a=t;mn!==null;){s=mn;var c=s.sibling,f=s.return;if(og(s),s===a){mn=null;break t}if(c!==null){c.return=f,mn=c;break t}mn=f}}}var bx={getCacheForType:function(t){var n=bn(sn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return bn(sn).controller.signal}},Ax=typeof WeakMap=="function"?WeakMap:Map,Ne=0,We=null,Se=null,ye=0,Ie=0,jn=null,Oa=!1,ss=!1,xf=!1,sa=0,Je=0,Pa=0,xr=0,Sf=0,Kn=0,os=0,Eo=null,Gn=null,Mf=!1,kl=0,vg=0,Wl=1/0,ql=null,Fa=null,dn=0,za=null,ls=null,oa=0,yf=0,Ef=null,xg=null,To=0,Tf=null;function Qn(){return(Ne&2)!==0&&ye!==0?ye&-ye:L.T!==null?Df():ks()}function Sg(){if(Kn===0)if((ye&536870912)===0||be){var t=At;At<<=1,(At&3932160)===0&&(At=262144),Kn=t}else Kn=536870912;return t=Yn.current,t!==null&&(t.flags|=32),Kn}function Vn(t,n,a){(t===We&&(Ie===2||Ie===9)||t.cancelPendingCommit!==null)&&(us(t,0),Ia(t,ye,Kn,!1)),wn(t,a),((Ne&2)===0||t!==We)&&(t===We&&((Ne&2)===0&&(xr|=a),Je===4&&Ia(t,ye,Kn,!1)),Oi(t))}function Mg(t,n,a){if((Ne&6)!==0)throw Error(r(327));var s=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Ct(t,n),c=s?wx(t,n):Af(t,n,!0),f=s;do{if(c===0){ss&&!s&&Ia(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!Rx(a)){c=Af(t,n,!1),f=!1;continue}if(c===2){if(f=n,t.errorRecoveryDisabledLanes&f)var v=0;else v=t.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){n=v;t:{var T=t;c=Eo;var B=T.current.memoizedState.isDehydrated;if(B&&(us(T,v).flags|=256),v=Af(T,v,!1),v!==2){if(xf&&!B){T.errorRecoveryDisabledLanes|=f,xr|=f,c=4;break t}f=Gn,Gn=c,f!==null&&(Gn===null?Gn=f:Gn.push.apply(Gn,f))}c=v}if(f=!1,c!==2)continue}}if(c===1){us(t,0),Ia(t,n,0,!0);break}t:{switch(s=t,f=c,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Ia(s,n,Kn,!Oa);break t;case 2:Gn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(c=kl+300-y(),10<c)){if(Ia(s,n,Kn,!Oa),vt(s,0,!0)!==0)break t;oa=n,s.timeoutHandle=Jg(yg.bind(null,s,a,Gn,ql,Mf,n,Kn,xr,os,Oa,f,"Throttled",-0,0),c);break t}yg(s,a,Gn,ql,Mf,n,Kn,xr,os,Oa,f,null,-0,0)}}break}while(!0);Oi(t)}function yg(t,n,a,s,c,f,v,T,B,J,ht,gt,nt,ot){if(t.timeoutHandle=-1,gt=n.subtreeFlags,gt&8192||(gt&16785408)===16785408){gt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:qi},pg(n,f,gt);var Yt=(f&62914560)===f?kl-y():(f&4194048)===f?vg-y():0;if(Yt=fS(gt,Yt),Yt!==null){oa=f,t.cancelPendingCommit=Yt(Dg.bind(null,t,n,f,a,s,c,v,T,B,ht,gt,null,nt,ot)),Ia(t,f,v,!J);return}}Dg(t,n,f,a,s,c,v,T,B)}function Rx(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var c=a[s],f=c.getSnapshot;c=c.value;try{if(!Wn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ia(t,n,a,s){n&=~Sf,n&=~xr,t.suspendedLanes|=n,t.pingedLanes&=~n,s&&(t.warmLanes|=n),s=t.expirationTimes;for(var c=n;0<c;){var f=31-zt(c),v=1<<f;s[f]=-1,c&=~v}a!==0&&al(t,a,n)}function Yl(){return(Ne&6)===0?(bo(0),!1):!0}function bf(){if(Se!==null){if(Ie===0)var t=Se.return;else t=Se,Ki=cr=null,Hc(t),$r=null,so=0,t=Se;for(;t!==null;)$m(t.alternate,t),t=t.return;Se=null}}function us(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,Yx(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),oa=0,bf(),We=t,Se=a=Zi(t.current,null),ye=n,Ie=0,jn=null,Oa=!1,ss=Ct(t,n),xf=!1,os=Kn=Sf=xr=Pa=Je=0,Gn=Eo=null,Mf=!1,(n&8)!==0&&(n|=n&32);var s=t.entangledLanes;if(s!==0)for(t=t.entanglements,s&=n;0<s;){var c=31-zt(s),f=1<<c;n|=t[c],s&=~f}return sa=n,pl(),a}function Eg(t,n){pe=null,L.H=mo,n===Jr||n===yl?(n=Bp(),Ie=3):n===Cc?(n=Bp(),Ie=4):Ie=n===nf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,jn=n,Se===null&&(Je=1,Fl(t,ri(n,t.current)))}function Tg(){var t=Yn.current;return t===null?!0:(ye&4194048)===ye?ui===null:(ye&62914560)===ye||(ye&536870912)!==0?t===ui:!1}function bg(){var t=L.H;return L.H=mo,t===null?mo:t}function Ag(){var t=L.A;return L.A=bx,t}function Zl(){Je=4,Oa||(ye&4194048)!==ye&&Yn.current!==null||(ss=!0),(Pa&134217727)===0&&(xr&134217727)===0||We===null||Ia(We,ye,Kn,!1)}function Af(t,n,a){var s=Ne;Ne|=2;var c=bg(),f=Ag();(We!==t||ye!==n)&&(ql=null,us(t,n)),n=!1;var v=Je;t:do try{if(Ie!==0&&Se!==null){var T=Se,B=jn;switch(Ie){case 8:bf(),v=6;break t;case 3:case 2:case 9:case 6:Yn.current===null&&(n=!0);var J=Ie;if(Ie=0,jn=null,cs(t,T,B,J),a&&ss){v=0;break t}break;default:J=Ie,Ie=0,jn=null,cs(t,T,B,J)}}Cx(),v=Je;break}catch(ht){Eg(t,ht)}while(!0);return n&&t.shellSuspendCounter++,Ki=cr=null,Ne=s,L.H=c,L.A=f,Se===null&&(We=null,ye=0,pl()),v}function Cx(){for(;Se!==null;)Rg(Se)}function wx(t,n){var a=Ne;Ne|=2;var s=bg(),c=Ag();We!==t||ye!==n?(ql=null,Wl=y()+500,us(t,n)):ss=Ct(t,n);t:do try{if(Ie!==0&&Se!==null){n=Se;var f=jn;e:switch(Ie){case 1:Ie=0,jn=null,cs(t,n,f,1);break;case 2:case 9:if(zp(f)){Ie=0,jn=null,Cg(n);break}n=function(){Ie!==2&&Ie!==9||We!==t||(Ie=7),Oi(t)},f.then(n,n);break t;case 3:Ie=7;break t;case 4:Ie=5;break t;case 7:zp(f)?(Ie=0,jn=null,Cg(n)):(Ie=0,jn=null,cs(t,n,f,7));break;case 5:var v=null;switch(Se.tag){case 26:v=Se.memoizedState;case 5:case 27:var T=Se;if(v?h0(v):T.stateNode.complete){Ie=0,jn=null;var B=T.sibling;if(B!==null)Se=B;else{var J=T.return;J!==null?(Se=J,jl(J)):Se=null}break e}}Ie=0,jn=null,cs(t,n,f,5);break;case 6:Ie=0,jn=null,cs(t,n,f,6);break;case 8:bf(),Je=6;break t;default:throw Error(r(462))}}Dx();break}catch(ht){Eg(t,ht)}while(!0);return Ki=cr=null,L.H=s,L.A=c,Ne=a,Se!==null?0:(We=null,ye=0,pl(),Je)}function Dx(){for(;Se!==null&&!Bt();)Rg(Se)}function Rg(t){var n=Qm(t.alternate,t,sa);t.memoizedProps=t.pendingProps,n===null?jl(t):Se=n}function Cg(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=Wm(a,n,n.pendingProps,n.type,void 0,ye);break;case 11:n=Wm(a,n,n.pendingProps,n.type.render,n.ref,ye);break;case 5:Hc(n);default:$m(a,n),n=Se=Ap(n,sa),n=Qm(a,n,sa)}t.memoizedProps=t.pendingProps,n===null?jl(t):Se=n}function cs(t,n,a,s){Ki=cr=null,Hc(n),$r=null,so=0;var c=n.return;try{if(vx(t,c,n,a,ye)){Je=1,Fl(t,ri(a,t.current)),Se=null;return}}catch(f){if(c!==null)throw Se=c,f;Je=1,Fl(t,ri(a,t.current)),Se=null;return}n.flags&32768?(be||s===1?t=!0:ss||(ye&536870912)!==0?t=!1:(Oa=t=!0,(s===2||s===9||s===3||s===6)&&(s=Yn.current,s!==null&&s.tag===13&&(s.flags|=16384))),wg(n,t)):jl(n)}function jl(t){var n=t;do{if((n.flags&32768)!==0){wg(n,Oa);return}t=n.return;var a=Mx(n.alternate,n,sa);if(a!==null){Se=a;return}if(n=n.sibling,n!==null){Se=n;return}Se=n=t}while(n!==null);Je===0&&(Je=5)}function wg(t,n){do{var a=yx(t.alternate,t);if(a!==null){a.flags&=32767,Se=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){Se=t;return}Se=t=a}while(t!==null);Je=6,Se=null}function Dg(t,n,a,s,c,f,v,T,B){t.cancelPendingCommit=null;do Kl();while(dn!==0);if((Ne&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=hc,vi(t,a,f,v,T,B),t===We&&(Se=We=null,ye=0),ls=n,za=t,oa=a,yf=f,Ef=c,xg=s,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Ox(lt,function(){return Pg(),null})):(t.callbackNode=null,t.callbackPriority=0),s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=L.T,L.T=null,c=G.p,G.p=2,v=Ne,Ne|=4;try{Ex(t,n,a)}finally{Ne=v,G.p=c,L.T=s}}dn=1,Ug(),Lg(),Ng()}}function Ug(){if(dn===1){dn=0;var t=za,n=ls,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=L.T,L.T=null;var s=G.p;G.p=2;var c=Ne;Ne|=4;try{fg(n,t);var f=If,v=_p(t.containerInfo),T=f.focusedElem,B=f.selectionRange;if(v!==T&&T&&T.ownerDocument&&gp(T.ownerDocument.documentElement,T)){if(B!==null&&lc(T)){var J=B.start,ht=B.end;if(ht===void 0&&(ht=J),"selectionStart"in T)T.selectionStart=J,T.selectionEnd=Math.min(ht,T.value.length);else{var gt=T.ownerDocument||document,nt=gt&&gt.defaultView||window;if(nt.getSelection){var ot=nt.getSelection(),Yt=T.textContent.length,se=Math.min(B.start,Yt),ke=B.end===void 0?se:Math.min(B.end,Yt);!ot.extend&&se>ke&&(v=ke,ke=se,se=v);var Y=mp(T,se),V=mp(T,ke);if(Y&&V&&(ot.rangeCount!==1||ot.anchorNode!==Y.node||ot.anchorOffset!==Y.offset||ot.focusNode!==V.node||ot.focusOffset!==V.offset)){var Q=gt.createRange();Q.setStart(Y.node,Y.offset),ot.removeAllRanges(),se>ke?(ot.addRange(Q),ot.extend(V.node,V.offset)):(Q.setEnd(V.node,V.offset),ot.addRange(Q))}}}}for(gt=[],ot=T;ot=ot.parentNode;)ot.nodeType===1&&gt.push({element:ot,left:ot.scrollLeft,top:ot.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<gt.length;T++){var pt=gt[T];pt.element.scrollLeft=pt.left,pt.element.scrollTop=pt.top}}lu=!!zf,If=zf=null}finally{Ne=c,G.p=s,L.T=a}}t.current=n,dn=2}}function Lg(){if(dn===2){dn=0;var t=za,n=ls,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=L.T,L.T=null;var s=G.p;G.p=2;var c=Ne;Ne|=4;try{sg(t,n.alternate,n)}finally{Ne=c,G.p=s,L.T=a}}dn=3}}function Ng(){if(dn===4||dn===3){dn=0,w();var t=za,n=ls,a=oa,s=xg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?dn=5:(dn=0,ls=za=null,Og(t,t.pendingLanes));var c=t.pendingLanes;if(c===0&&(Fa=null),Pr(a),n=n.stateNode,Tt&&typeof Tt.onCommitFiberRoot=="function")try{Tt.onCommitFiberRoot(Mt,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=L.T,c=G.p,G.p=2,L.T=null;try{for(var f=t.onRecoverableError,v=0;v<s.length;v++){var T=s[v];f(T.value,{componentStack:T.stack})}}finally{L.T=n,G.p=c}}(oa&3)!==0&&Kl(),Oi(t),c=t.pendingLanes,(a&261930)!==0&&(c&42)!==0?t===Tf?To++:(To=0,Tf=t):To=0,bo(0)}}function Og(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,ao(n)))}function Kl(){return Ug(),Lg(),Ng(),Pg()}function Pg(){if(dn!==5)return!1;var t=za,n=yf;yf=0;var a=Pr(oa),s=L.T,c=G.p;try{G.p=32>a?32:a,L.T=null,a=Ef,Ef=null;var f=za,v=oa;if(dn=0,ls=za=null,oa=0,(Ne&6)!==0)throw Error(r(331));var T=Ne;if(Ne|=4,gg(f.current),hg(f,f.current,v,a),Ne=T,bo(0,!1),Tt&&typeof Tt.onPostCommitFiberRoot=="function")try{Tt.onPostCommitFiberRoot(Mt,f)}catch{}return!0}finally{G.p=c,L.T=s,Og(t,n)}}function Fg(t,n,a){n=ri(a,n),n=ef(t.stateNode,n,2),t=Da(t,n,2),t!==null&&(wn(t,2),Oi(t))}function Be(t,n,a){if(t.tag===3)Fg(t,t,a);else for(;n!==null;){if(n.tag===3){Fg(n,t,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(Fa===null||!Fa.has(s))){t=ri(a,t),a=zm(2),s=Da(n,a,2),s!==null&&(Im(a,s,n,t),wn(s,2),Oi(s));break}}n=n.return}}function Rf(t,n,a){var s=t.pingCache;if(s===null){s=t.pingCache=new Ax;var c=new Set;s.set(n,c)}else c=s.get(n),c===void 0&&(c=new Set,s.set(n,c));c.has(a)||(xf=!0,c.add(a),t=Ux.bind(null,t,n,a),n.then(t,t))}function Ux(t,n,a){var s=t.pingCache;s!==null&&s.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,We===t&&(ye&a)===a&&(Je===4||Je===3&&(ye&62914560)===ye&&300>y()-kl?(Ne&2)===0&&us(t,0):Sf|=a,os===ye&&(os=0)),Oi(t)}function zg(t,n){n===0&&(n=Fe()),t=or(t,n),t!==null&&(wn(t,n),Oi(t))}function Lx(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),zg(t,a)}function Nx(t,n){var a=0;switch(t.tag){case 31:case 13:var s=t.stateNode,c=t.memoizedState;c!==null&&(a=c.retryLane);break;case 19:s=t.stateNode;break;case 22:s=t.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),zg(t,a)}function Ox(t,n){return te(t,n)}var Ql=null,fs=null,Cf=!1,Jl=!1,wf=!1,Ba=0;function Oi(t){t!==fs&&t.next===null&&(fs===null?Ql=fs=t:fs=fs.next=t),Jl=!0,Cf||(Cf=!0,Fx())}function bo(t,n){if(!wf&&Jl){wf=!0;do for(var a=!1,s=Ql;s!==null;){if(t!==0){var c=s.pendingLanes;if(c===0)var f=0;else{var v=s.suspendedLanes,T=s.pingedLanes;f=(1<<31-zt(42|t)+1)-1,f&=c&~(v&~T),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Gg(s,f))}else f=ye,f=vt(s,s===We?f:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(f&3)===0||Ct(s,f)||(a=!0,Gg(s,f));s=s.next}while(a);wf=!1}}function Px(){Ig()}function Ig(){Jl=Cf=!1;var t=0;Ba!==0&&qx()&&(t=Ba);for(var n=y(),a=null,s=Ql;s!==null;){var c=s.next,f=Bg(s,n);f===0?(s.next=null,a===null?Ql=c:a.next=c,c===null&&(fs=a)):(a=s,(t!==0||(f&3)!==0)&&(Jl=!0)),s=c}dn!==0&&dn!==5||bo(t),Ba!==0&&(Ba=0)}function Bg(t,n){for(var a=t.suspendedLanes,s=t.pingedLanes,c=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var v=31-zt(f),T=1<<v,B=c[v];B===-1?((T&a)===0||(T&s)!==0)&&(c[v]=ue(T,n)):B<=n&&(t.expiredLanes|=T),f&=~T}if(n=We,a=ye,a=vt(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s=t.callbackNode,a===0||t===n&&(Ie===2||Ie===9)||t.cancelPendingCommit!==null)return s!==null&&s!==null&&oe(s),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Ct(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(s!==null&&oe(s),Pr(a)){case 2:case 8:a=_t;break;case 32:a=lt;break;case 268435456:a=wt;break;default:a=lt}return s=Hg.bind(null,t),a=te(a,s),t.callbackPriority=n,t.callbackNode=a,n}return s!==null&&s!==null&&oe(s),t.callbackPriority=2,t.callbackNode=null,2}function Hg(t,n){if(dn!==0&&dn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Kl()&&t.callbackNode!==a)return null;var s=ye;return s=vt(t,t===We?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s===0?null:(Mg(t,s,n),Bg(t,y()),t.callbackNode!=null&&t.callbackNode===a?Hg.bind(null,t):null)}function Gg(t,n){if(Kl())return null;Mg(t,n,!0)}function Fx(){Zx(function(){(Ne&6)!==0?te(ct,Px):Ig()})}function Df(){if(Ba===0){var t=Kr;t===0&&(t=Nt,Nt<<=1,(Nt&261888)===0&&(Nt=256)),Ba=t}return Ba}function Vg(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:sl(""+t)}function Xg(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function zx(t,n,a,s,c){if(n==="submit"&&a&&a.stateNode===c){var f=Vg((c[vn]||null).action),v=s.submitter;v&&(n=(n=v[vn]||null)?Vg(n.formAction):v.getAttribute("formAction"),n!==null&&(f=n,v=null));var T=new cl("action","action",null,s,c);t.push({event:T,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(Ba!==0){var B=v?Xg(c,v):new FormData(c);jc(a,{pending:!0,data:B,method:c.method,action:f},null,B)}}else typeof f=="function"&&(T.preventDefault(),B=v?Xg(c,v):new FormData(c),jc(a,{pending:!0,data:B,method:c.method,action:f},f,B))},currentTarget:c}]})}}for(var Uf=0;Uf<dc.length;Uf++){var Lf=dc[Uf],Ix=Lf.toLowerCase(),Bx=Lf[0].toUpperCase()+Lf.slice(1);Mi(Ix,"on"+Bx)}Mi(Sp,"onAnimationEnd"),Mi(Mp,"onAnimationIteration"),Mi(yp,"onAnimationStart"),Mi("dblclick","onDoubleClick"),Mi("focusin","onFocus"),Mi("focusout","onBlur"),Mi(ex,"onTransitionRun"),Mi(nx,"onTransitionStart"),Mi(ix,"onTransitionCancel"),Mi(Ep,"onTransitionEnd"),Z("onMouseEnter",["mouseout","mouseover"]),Z("onMouseLeave",["mouseout","mouseover"]),Z("onPointerEnter",["pointerout","pointerover"]),Z("onPointerLeave",["pointerout","pointerover"]),et("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),et("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),et("onBeforeInput",["compositionend","keypress","textInput","paste"]),et("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),et("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),et("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ao="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Hx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ao));function kg(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var s=t[a],c=s.event;s=s.listeners;t:{var f=void 0;if(n)for(var v=s.length-1;0<=v;v--){var T=s[v],B=T.instance,J=T.currentTarget;if(T=T.listener,B!==f&&c.isPropagationStopped())break t;f=T,c.currentTarget=J;try{f(c)}catch(ht){hl(ht)}c.currentTarget=null,f=B}else for(v=0;v<s.length;v++){if(T=s[v],B=T.instance,J=T.currentTarget,T=T.listener,B!==f&&c.isPropagationStopped())break t;f=T,c.currentTarget=J;try{f(c)}catch(ht){hl(ht)}c.currentTarget=null,f=B}}}}function Me(t,n){var a=n[Fr];a===void 0&&(a=n[Fr]=new Set);var s=t+"__bubble";a.has(s)||(Wg(n,t,2,!1),a.add(s))}function Nf(t,n,a){var s=0;n&&(s|=4),Wg(a,t,s,n)}var $l="_reactListening"+Math.random().toString(36).slice(2);function Of(t){if(!t[$l]){t[$l]=!0,q.forEach(function(a){a!=="selectionchange"&&(Hx.has(a)||Nf(a,!1,t),Nf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[$l]||(n[$l]=!0,Nf("selectionchange",!1,n))}}function Wg(t,n,a,s){switch(S0(n)){case 2:var c=pS;break;case 8:c=mS;break;default:c=jf}a=c.bind(null,n,a,t),c=void 0,!$u||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),s?c!==void 0?t.addEventListener(n,a,{capture:!0,passive:c}):t.addEventListener(n,a,!0):c!==void 0?t.addEventListener(n,a,{passive:c}):t.addEventListener(n,a,!1)}function Pf(t,n,a,s,c){var f=s;if((n&1)===0&&(n&2)===0&&s!==null)t:for(;;){if(s===null)return;var v=s.tag;if(v===3||v===4){var T=s.stateNode.containerInfo;if(T===c)break;if(v===4)for(v=s.return;v!==null;){var B=v.tag;if((B===3||B===4)&&v.stateNode.containerInfo===c)return;v=v.return}for(;T!==null;){if(v=Sa(T),v===null)return;if(B=v.tag,B===5||B===6||B===26||B===27){s=f=v;continue t}T=T.parentNode}}s=s.return}Kh(function(){var J=f,ht=Qu(a),gt=[];t:{var nt=Tp.get(t);if(nt!==void 0){var ot=cl,Yt=t;switch(t){case"keypress":if(ll(a)===0)break t;case"keydown":case"keyup":ot=Nv;break;case"focusin":Yt="focus",ot=ic;break;case"focusout":Yt="blur",ot=ic;break;case"beforeblur":case"afterblur":ot=ic;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ot=$h;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ot=Mv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ot=Fv;break;case Sp:case Mp:case yp:ot=Tv;break;case Ep:ot=Iv;break;case"scroll":case"scrollend":ot=xv;break;case"wheel":ot=Hv;break;case"copy":case"cut":case"paste":ot=Av;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ot=ep;break;case"toggle":case"beforetoggle":ot=Vv}var se=(n&4)!==0,ke=!se&&(t==="scroll"||t==="scrollend"),Y=se?nt!==null?nt+"Capture":null:nt;se=[];for(var V=J,Q;V!==null;){var pt=V;if(Q=pt.stateNode,pt=pt.tag,pt!==5&&pt!==26&&pt!==27||Q===null||Y===null||(pt=Ys(V,Y),pt!=null&&se.push(Ro(V,pt,Q))),ke)break;V=V.return}0<se.length&&(nt=new ot(nt,Yt,null,a,ht),gt.push({event:nt,listeners:se}))}}if((n&7)===0){t:{if(nt=t==="mouseover"||t==="pointerover",ot=t==="mouseout"||t==="pointerout",nt&&a!==Ku&&(Yt=a.relatedTarget||a.fromElement)&&(Sa(Yt)||Yt[xi]))break t;if((ot||nt)&&(nt=ht.window===ht?ht:(nt=ht.ownerDocument)?nt.defaultView||nt.parentWindow:window,ot?(Yt=a.relatedTarget||a.toElement,ot=J,Yt=Yt?Sa(Yt):null,Yt!==null&&(ke=u(Yt),se=Yt.tag,Yt!==ke||se!==5&&se!==27&&se!==6)&&(Yt=null)):(ot=null,Yt=J),ot!==Yt)){if(se=$h,pt="onMouseLeave",Y="onMouseEnter",V="mouse",(t==="pointerout"||t==="pointerover")&&(se=ep,pt="onPointerLeave",Y="onPointerEnter",V="pointer"),ke=ot==null?nt:ir(ot),Q=Yt==null?nt:ir(Yt),nt=new se(pt,V+"leave",ot,a,ht),nt.target=ke,nt.relatedTarget=Q,pt=null,Sa(ht)===J&&(se=new se(Y,V+"enter",Yt,a,ht),se.target=Q,se.relatedTarget=ke,pt=se),ke=pt,ot&&Yt)e:{for(se=Gx,Y=ot,V=Yt,Q=0,pt=Y;pt;pt=se(pt))Q++;pt=0;for(var ee=V;ee;ee=se(ee))pt++;for(;0<Q-pt;)Y=se(Y),Q--;for(;0<pt-Q;)V=se(V),pt--;for(;Q--;){if(Y===V||V!==null&&Y===V.alternate){se=Y;break e}Y=se(Y),V=se(V)}se=null}else se=null;ot!==null&&qg(gt,nt,ot,se,!1),Yt!==null&&ke!==null&&qg(gt,ke,Yt,se,!0)}}t:{if(nt=J?ir(J):window,ot=nt.nodeName&&nt.nodeName.toLowerCase(),ot==="select"||ot==="input"&&nt.type==="file")var we=up;else if(op(nt))if(cp)we=Jv;else{we=Kv;var Qt=jv}else ot=nt.nodeName,!ot||ot.toLowerCase()!=="input"||nt.type!=="checkbox"&&nt.type!=="radio"?J&&Si(J.elementType)&&(we=up):we=Qv;if(we&&(we=we(t,J))){lp(gt,we,a,ht);break t}Qt&&Qt(t,nt,J),t==="focusout"&&J&&nt.type==="number"&&J.memoizedProps.value!=null&&Sn(nt,"number",nt.value)}switch(Qt=J?ir(J):window,t){case"focusin":(op(Qt)||Qt.contentEditable==="true")&&(Vr=Qt,uc=J,eo=null);break;case"focusout":eo=uc=Vr=null;break;case"mousedown":cc=!0;break;case"contextmenu":case"mouseup":case"dragend":cc=!1,vp(gt,a,ht);break;case"selectionchange":if(tx)break;case"keydown":case"keyup":vp(gt,a,ht)}var me;if(rc)t:{switch(t){case"compositionstart":var Ee="onCompositionStart";break t;case"compositionend":Ee="onCompositionEnd";break t;case"compositionupdate":Ee="onCompositionUpdate";break t}Ee=void 0}else Gr?rp(t,a)&&(Ee="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(Ee="onCompositionStart");Ee&&(np&&a.locale!=="ko"&&(Gr||Ee!=="onCompositionStart"?Ee==="onCompositionEnd"&&Gr&&(me=Qh()):(Ea=ht,tc="value"in Ea?Ea.value:Ea.textContent,Gr=!0)),Qt=tu(J,Ee),0<Qt.length&&(Ee=new tp(Ee,t,null,a,ht),gt.push({event:Ee,listeners:Qt}),me?Ee.data=me:(me=sp(a),me!==null&&(Ee.data=me)))),(me=kv?Wv(t,a):qv(t,a))&&(Ee=tu(J,"onBeforeInput"),0<Ee.length&&(Qt=new tp("onBeforeInput","beforeinput",null,a,ht),gt.push({event:Qt,listeners:Ee}),Qt.data=me)),zx(gt,t,J,a,ht)}kg(gt,n)})}function Ro(t,n,a){return{instance:t,listener:n,currentTarget:a}}function tu(t,n){for(var a=n+"Capture",s=[];t!==null;){var c=t,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=Ys(t,a),c!=null&&s.unshift(Ro(t,c,f)),c=Ys(t,n),c!=null&&s.push(Ro(t,c,f))),t.tag===3)return s;t=t.return}return[]}function Gx(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function qg(t,n,a,s,c){for(var f=n._reactName,v=[];a!==null&&a!==s;){var T=a,B=T.alternate,J=T.stateNode;if(T=T.tag,B!==null&&B===s)break;T!==5&&T!==26&&T!==27||J===null||(B=J,c?(J=Ys(a,f),J!=null&&v.unshift(Ro(a,J,B))):c||(J=Ys(a,f),J!=null&&v.push(Ro(a,J,B)))),a=a.return}v.length!==0&&t.push({event:n,listeners:v})}var Vx=/\r\n?/g,Xx=/\u0000|\uFFFD/g;function Yg(t){return(typeof t=="string"?t:""+t).replace(Vx,`
`).replace(Xx,"")}function Zg(t,n){return n=Yg(n),Yg(t)===n}function Xe(t,n,a,s,c,f){switch(a){case"children":typeof s=="string"?n==="body"||n==="textarea"&&s===""||fn(t,s):(typeof s=="number"||typeof s=="bigint")&&n!=="body"&&fn(t,""+s);break;case"className":ae(t,"class",s);break;case"tabIndex":ae(t,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":ae(t,a,s);break;case"style":Ir(t,s,f);break;case"data":if(n!=="object"){ae(t,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=sl(""+s),t.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Xe(t,n,"name",c.name,c,null),Xe(t,n,"formEncType",c.formEncType,c,null),Xe(t,n,"formMethod",c.formMethod,c,null),Xe(t,n,"formTarget",c.formTarget,c,null)):(Xe(t,n,"encType",c.encType,c,null),Xe(t,n,"method",c.method,c,null),Xe(t,n,"target",c.target,c,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=sl(""+s),t.setAttribute(a,s);break;case"onClick":s!=null&&(t.onclick=qi);break;case"onScroll":s!=null&&Me("scroll",t);break;case"onScrollEnd":s!=null&&Me("scrollend",t);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":t.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){t.removeAttribute("xlink:href");break}a=sl(""+s),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""+s):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":s===!0?t.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,s):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?t.setAttribute(a,s):t.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?t.removeAttribute(a):t.setAttribute(a,s);break;case"popover":Me("beforetoggle",t),Me("toggle",t),jt(t,"popover",s);break;case"xlinkActuate":Kt(t,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":Kt(t,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":Kt(t,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":Kt(t,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":Kt(t,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":Kt(t,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":Kt(t,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":Kt(t,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":Kt(t,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":jt(t,"is",s);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=_v.get(a)||a,jt(t,a,s))}}function Ff(t,n,a,s,c,f){switch(a){case"style":Ir(t,s,f);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof s=="string"?fn(t,s):(typeof s=="number"||typeof s=="bigint")&&fn(t,""+s);break;case"onScroll":s!=null&&Me("scroll",t);break;case"onScrollEnd":s!=null&&Me("scrollend",t);break;case"onClick":s!=null&&(t.onclick=qi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!st.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=t[vn]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,c),typeof s=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,s,c);break t}a in t?t[a]=s:s===!0?t.setAttribute(a,""):jt(t,a,s)}}}function Rn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Me("error",t),Me("load",t);var s=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var v=a[f];if(v!=null)switch(f){case"src":s=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Xe(t,n,f,v,a,null)}}c&&Xe(t,n,"srcSet",a.srcSet,a,null),s&&Xe(t,n,"src",a.src,a,null);return;case"input":Me("invalid",t);var T=f=v=c=null,B=null,J=null;for(s in a)if(a.hasOwnProperty(s)){var ht=a[s];if(ht!=null)switch(s){case"name":c=ht;break;case"type":v=ht;break;case"checked":B=ht;break;case"defaultChecked":J=ht;break;case"value":f=ht;break;case"defaultValue":T=ht;break;case"children":case"dangerouslySetInnerHTML":if(ht!=null)throw Error(r(137,n));break;default:Xe(t,n,s,ht,a,null)}}Wi(t,f,T,B,J,v,c,!1);return;case"select":Me("invalid",t),s=v=f=null;for(c in a)if(a.hasOwnProperty(c)&&(T=a[c],T!=null))switch(c){case"value":f=T;break;case"defaultValue":v=T;break;case"multiple":s=T;default:Xe(t,n,c,T,a,null)}n=f,a=v,t.multiple=!!s,n!=null?ii(t,!!s,n,!1):a!=null&&ii(t,!!s,a,!0);return;case"textarea":Me("invalid",t),f=c=s=null;for(v in a)if(a.hasOwnProperty(v)&&(T=a[v],T!=null))switch(v){case"value":s=T;break;case"defaultValue":c=T;break;case"children":f=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(r(91));break;default:Xe(t,n,v,T,a,null)}Mn(t,s,c,f);return;case"option":for(B in a)a.hasOwnProperty(B)&&(s=a[B],s!=null)&&(B==="selected"?t.selected=s&&typeof s!="function"&&typeof s!="symbol":Xe(t,n,B,s,a,null));return;case"dialog":Me("beforetoggle",t),Me("toggle",t),Me("cancel",t),Me("close",t);break;case"iframe":case"object":Me("load",t);break;case"video":case"audio":for(s=0;s<Ao.length;s++)Me(Ao[s],t);break;case"image":Me("error",t),Me("load",t);break;case"details":Me("toggle",t);break;case"embed":case"source":case"link":Me("error",t),Me("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(J in a)if(a.hasOwnProperty(J)&&(s=a[J],s!=null))switch(J){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Xe(t,n,J,s,a,null)}return;default:if(Si(n)){for(ht in a)a.hasOwnProperty(ht)&&(s=a[ht],s!==void 0&&Ff(t,n,ht,s,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(s=a[T],s!=null&&Xe(t,n,T,s,a,null))}function kx(t,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,v=null,T=null,B=null,J=null,ht=null;for(ot in a){var gt=a[ot];if(a.hasOwnProperty(ot)&&gt!=null)switch(ot){case"checked":break;case"value":break;case"defaultValue":B=gt;default:s.hasOwnProperty(ot)||Xe(t,n,ot,null,s,gt)}}for(var nt in s){var ot=s[nt];if(gt=a[nt],s.hasOwnProperty(nt)&&(ot!=null||gt!=null))switch(nt){case"type":f=ot;break;case"name":c=ot;break;case"checked":J=ot;break;case"defaultChecked":ht=ot;break;case"value":v=ot;break;case"defaultValue":T=ot;break;case"children":case"dangerouslySetInnerHTML":if(ot!=null)throw Error(r(137,n));break;default:ot!==gt&&Xe(t,n,nt,ot,s,gt)}}xn(t,v,T,B,J,ht,f,c);return;case"select":ot=v=T=nt=null;for(f in a)if(B=a[f],a.hasOwnProperty(f)&&B!=null)switch(f){case"value":break;case"multiple":ot=B;default:s.hasOwnProperty(f)||Xe(t,n,f,null,s,B)}for(c in s)if(f=s[c],B=a[c],s.hasOwnProperty(c)&&(f!=null||B!=null))switch(c){case"value":nt=f;break;case"defaultValue":T=f;break;case"multiple":v=f;default:f!==B&&Xe(t,n,c,f,s,B)}n=T,a=v,s=ot,nt!=null?ii(t,!!a,nt,!1):!!s!=!!a&&(n!=null?ii(t,!!a,n,!0):ii(t,!!a,a?[]:"",!1));return;case"textarea":ot=nt=null;for(T in a)if(c=a[T],a.hasOwnProperty(T)&&c!=null&&!s.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Xe(t,n,T,null,s,c)}for(v in s)if(c=s[v],f=a[v],s.hasOwnProperty(v)&&(c!=null||f!=null))switch(v){case"value":nt=c;break;case"defaultValue":ot=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==f&&Xe(t,n,v,c,s,f)}ze(t,nt,ot);return;case"option":for(var Yt in a)nt=a[Yt],a.hasOwnProperty(Yt)&&nt!=null&&!s.hasOwnProperty(Yt)&&(Yt==="selected"?t.selected=!1:Xe(t,n,Yt,null,s,nt));for(B in s)nt=s[B],ot=a[B],s.hasOwnProperty(B)&&nt!==ot&&(nt!=null||ot!=null)&&(B==="selected"?t.selected=nt&&typeof nt!="function"&&typeof nt!="symbol":Xe(t,n,B,nt,s,ot));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var se in a)nt=a[se],a.hasOwnProperty(se)&&nt!=null&&!s.hasOwnProperty(se)&&Xe(t,n,se,null,s,nt);for(J in s)if(nt=s[J],ot=a[J],s.hasOwnProperty(J)&&nt!==ot&&(nt!=null||ot!=null))switch(J){case"children":case"dangerouslySetInnerHTML":if(nt!=null)throw Error(r(137,n));break;default:Xe(t,n,J,nt,s,ot)}return;default:if(Si(n)){for(var ke in a)nt=a[ke],a.hasOwnProperty(ke)&&nt!==void 0&&!s.hasOwnProperty(ke)&&Ff(t,n,ke,void 0,s,nt);for(ht in s)nt=s[ht],ot=a[ht],!s.hasOwnProperty(ht)||nt===ot||nt===void 0&&ot===void 0||Ff(t,n,ht,nt,s,ot);return}}for(var Y in a)nt=a[Y],a.hasOwnProperty(Y)&&nt!=null&&!s.hasOwnProperty(Y)&&Xe(t,n,Y,null,s,nt);for(gt in s)nt=s[gt],ot=a[gt],!s.hasOwnProperty(gt)||nt===ot||nt==null&&ot==null||Xe(t,n,gt,nt,s,ot)}function jg(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Wx(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),s=0;s<a.length;s++){var c=a[s],f=c.transferSize,v=c.initiatorType,T=c.duration;if(f&&T&&jg(v)){for(v=0,T=c.responseEnd,s+=1;s<a.length;s++){var B=a[s],J=B.startTime;if(J>T)break;var ht=B.transferSize,gt=B.initiatorType;ht&&jg(gt)&&(B=B.responseEnd,v+=ht*(B<T?1:(T-J)/(B-J)))}if(--s,n+=8*(f+v)/(c.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var zf=null,If=null;function eu(t){return t.nodeType===9?t:t.ownerDocument}function Kg(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Qg(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Bf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Hf=null;function qx(){var t=window.event;return t&&t.type==="popstate"?t===Hf?!1:(Hf=t,!0):(Hf=null,!1)}var Jg=typeof setTimeout=="function"?setTimeout:void 0,Yx=typeof clearTimeout=="function"?clearTimeout:void 0,$g=typeof Promise=="function"?Promise:void 0,Zx=typeof queueMicrotask=="function"?queueMicrotask:typeof $g<"u"?function(t){return $g.resolve(null).then(t).catch(jx)}:Jg;function jx(t){setTimeout(function(){throw t})}function Ha(t){return t==="head"}function t0(t,n){var a=n,s=0;do{var c=a.nextSibling;if(t.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(s===0){t.removeChild(c),ms(n);return}s--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")s++;else if(a==="html")Co(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,Co(a);for(var f=a.firstChild;f;){var v=f.nextSibling,T=f.nodeName;f[nr]||T==="SCRIPT"||T==="STYLE"||T==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=v}}else a==="body"&&Co(t.ownerDocument.body);a=c}while(a);ms(n)}function e0(t,n){var a=t;t=0;do{var s=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),s&&s.nodeType===8)if(a=s.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=s}while(a)}function Gf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Gf(a),qs(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function Kx(t,n,a,s){for(;t.nodeType===1;){var c=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(s){if(!t[nr])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==c.rel||t.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||t.getAttribute("title")!==(c.title==null?null:c.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(c.src==null?null:c.src)||t.getAttribute("type")!==(c.type==null?null:c.type)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=ci(t.nextSibling),t===null)break}return null}function Qx(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=ci(t.nextSibling),t===null))return null;return t}function n0(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=ci(t.nextSibling),t===null))return null;return t}function Vf(t){return t.data==="$?"||t.data==="$~"}function Xf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Jx(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),t._reactRetry=s}}function ci(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var kf=null;function i0(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return ci(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function a0(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function r0(t,n,a){switch(n=eu(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function Co(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);qs(t)}var fi=new Map,s0=new Set;function nu(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var la=G.d;G.d={f:$x,r:tS,D:eS,C:nS,L:iS,m:aS,X:sS,S:rS,M:oS};function $x(){var t=la.f(),n=Yl();return t||n}function tS(t){var n=Ma(t);n!==null&&n.tag===5&&n.type==="form"?Em(n):la.r(t)}var ds=typeof document>"u"?null:document;function o0(t,n,a){var s=ds;if(s&&typeof n=="string"&&n){var c=ce(n);c='link[rel="'+t+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),s0.has(c)||(s0.add(c),t={rel:t,crossOrigin:a,href:n},s.querySelector(c)===null&&(n=s.createElement("link"),Rn(n,"link",t),b(n),s.head.appendChild(n)))}}function eS(t){la.D(t),o0("dns-prefetch",t,null)}function nS(t,n){la.C(t,n),o0("preconnect",t,n)}function iS(t,n,a){la.L(t,n,a);var s=ds;if(s&&t&&n){var c='link[rel="preload"][as="'+ce(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+ce(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+ce(a.imageSizes)+'"]')):c+='[href="'+ce(t)+'"]';var f=c;switch(n){case"style":f=hs(t);break;case"script":f=ps(t)}fi.has(f)||(t=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),fi.set(f,t),s.querySelector(c)!==null||n==="style"&&s.querySelector(wo(f))||n==="script"&&s.querySelector(Do(f))||(n=s.createElement("link"),Rn(n,"link",t),b(n),s.head.appendChild(n)))}}function aS(t,n){la.m(t,n);var a=ds;if(a&&t){var s=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+ce(s)+'"][href="'+ce(t)+'"]',f=c;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=ps(t)}if(!fi.has(f)&&(t=g({rel:"modulepreload",href:t},n),fi.set(f,t),a.querySelector(c)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Do(f)))return}s=a.createElement("link"),Rn(s,"link",t),b(s),a.head.appendChild(s)}}}function rS(t,n,a){la.S(t,n,a);var s=ds;if(s&&t){var c=ya(s).hoistableStyles,f=hs(t);n=n||"default";var v=c.get(f);if(!v){var T={loading:0,preload:null};if(v=s.querySelector(wo(f)))T.loading=5;else{t=g({rel:"stylesheet",href:t,"data-precedence":n},a),(a=fi.get(f))&&Wf(t,a);var B=v=s.createElement("link");b(B),Rn(B,"link",t),B._p=new Promise(function(J,ht){B.onload=J,B.onerror=ht}),B.addEventListener("load",function(){T.loading|=1}),B.addEventListener("error",function(){T.loading|=2}),T.loading|=4,iu(v,n,s)}v={type:"stylesheet",instance:v,count:1,state:T},c.set(f,v)}}}function sS(t,n){la.X(t,n);var a=ds;if(a&&t){var s=ya(a).hoistableScripts,c=ps(t),f=s.get(c);f||(f=a.querySelector(Do(c)),f||(t=g({src:t,async:!0},n),(n=fi.get(c))&&qf(t,n),f=a.createElement("script"),b(f),Rn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function oS(t,n){la.M(t,n);var a=ds;if(a&&t){var s=ya(a).hoistableScripts,c=ps(t),f=s.get(c);f||(f=a.querySelector(Do(c)),f||(t=g({src:t,async:!0,type:"module"},n),(n=fi.get(c))&&qf(t,n),f=a.createElement("script"),b(f),Rn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function l0(t,n,a,s){var c=(c=$.current)?nu(c):null;if(!c)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=hs(a.href),a=ya(c).hoistableStyles,s=a.get(n),s||(s={type:"style",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=hs(a.href);var f=ya(c).hoistableStyles,v=f.get(t);if(v||(c=c.ownerDocument||c,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,v),(f=c.querySelector(wo(t)))&&!f._p&&(v.instance=f,v.state.loading=5),fi.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},fi.set(t,a),f||lS(c,t,a,v.state))),n&&s===null)throw Error(r(528,""));return v}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=ps(a),a=ya(c).hoistableScripts,s=a.get(n),s||(s={type:"script",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function hs(t){return'href="'+ce(t)+'"'}function wo(t){return'link[rel="stylesheet"]['+t+"]"}function u0(t){return g({},t,{"data-precedence":t.precedence,precedence:null})}function lS(t,n,a,s){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?s.loading=1:(n=t.createElement("link"),s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2}),Rn(n,"link",a),b(n),t.head.appendChild(n))}function ps(t){return'[src="'+ce(t)+'"]'}function Do(t){return"script[async]"+t}function c0(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=t.querySelector('style[data-href~="'+ce(a.href)+'"]');if(s)return n.instance=s,b(s),s;var c=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(t.ownerDocument||t).createElement("style"),b(s),Rn(s,"style",c),iu(s,a.precedence,t),n.instance=s;case"stylesheet":c=hs(a.href);var f=t.querySelector(wo(c));if(f)return n.state.loading|=4,n.instance=f,b(f),f;s=u0(a),(c=fi.get(c))&&Wf(s,c),f=(t.ownerDocument||t).createElement("link"),b(f);var v=f;return v._p=new Promise(function(T,B){v.onload=T,v.onerror=B}),Rn(f,"link",s),n.state.loading|=4,iu(f,a.precedence,t),n.instance=f;case"script":return f=ps(a.src),(c=t.querySelector(Do(f)))?(n.instance=c,b(c),c):(s=a,(c=fi.get(f))&&(s=g({},a),qf(s,c)),t=t.ownerDocument||t,c=t.createElement("script"),b(c),Rn(c,"link",s),t.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,iu(s,a.precedence,t));return n.instance}function iu(t,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=s.length?s[s.length-1]:null,f=c,v=0;v<s.length;v++){var T=s[v];if(T.dataset.precedence===n)f=T;else if(f!==c)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function Wf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function qf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var au=null;function f0(t,n,a){if(au===null){var s=new Map,c=au=new Map;c.set(a,s)}else c=au,s=c.get(a),s||(s=new Map,c.set(a,s));if(s.has(t))return s;for(s.set(t,null),a=a.getElementsByTagName(t),c=0;c<a.length;c++){var f=a[c];if(!(f[nr]||f[rn]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var v=f.getAttribute(n)||"";v=t+v;var T=s.get(v);T?T.push(f):s.set(v,[f])}}return s}function d0(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function uS(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(t=n.disabled,typeof n.precedence=="string"&&t==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function h0(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function cS(t,n,a,s){if(a.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=hs(s.href),f=n.querySelector(wo(c));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=ru.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,b(f);return}f=n.ownerDocument||n,s=u0(s),(c=fi.get(c))&&Wf(s,c),f=f.createElement("link"),b(f);var v=f;v._p=new Promise(function(T,B){v.onload=T,v.onerror=B}),Rn(f,"link",s),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=ru.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var Yf=0;function fS(t,n){return t.stylesheets&&t.count===0&&ou(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var s=setTimeout(function(){if(t.stylesheets&&ou(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&Yf===0&&(Yf=62500*Wx());var c=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&ou(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>Yf?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(s),clearTimeout(c)}}:null}function ru(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)ou(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var su=null;function ou(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,su=new Map,n.forEach(dS,t),su=null,ru.call(t))}function dS(t,n){if(!(n.state.loading&4)){var a=su.get(t);if(a)var s=a.get(null);else{a=new Map,su.set(t,a);for(var c=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var v=c[f];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(a.set(v.dataset.precedence,v),s=v)}s&&a.set(null,s)}c=n.instance,v=c.getAttribute("data-precedence"),f=a.get(v)||s,f===s&&a.set(null,c),a.set(v,c),this.count++,s=ru.bind(this),c.addEventListener("load",s),c.addEventListener("error",s),f?f.parentNode.insertBefore(c,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(c,t.firstChild)),n.state.loading|=4}}var Uo={$$typeof:N,Provider:null,Consumer:null,_currentValue:it,_currentValue2:it,_threadCount:0};function hS(t,n,a,s,c,f,v,T,B){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ae(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ae(0),this.hiddenUpdates=Ae(null),this.identifierPrefix=s,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=B,this.incompleteTransitions=new Map}function p0(t,n,a,s,c,f,v,T,B,J,ht,gt){return t=new hS(t,n,a,v,B,J,ht,gt,T),n=1,f===!0&&(n|=24),f=qn(3,null,null,n),t.current=f,f.stateNode=t,n=bc(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:s,isDehydrated:a,cache:n},wc(f),t}function m0(t){return t?(t=Wr,t):Wr}function g0(t,n,a,s,c,f){c=m0(c),s.context===null?s.context=c:s.pendingContext=c,s=wa(n),s.payload={element:a},f=f===void 0?null:f,f!==null&&(s.callback=f),a=Da(t,s,n),a!==null&&(Vn(a,t,n),lo(a,t,n))}function _0(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function Zf(t,n){_0(t,n),(t=t.alternate)&&_0(t,n)}function v0(t){if(t.tag===13||t.tag===31){var n=or(t,67108864);n!==null&&Vn(n,t,67108864),Zf(t,67108864)}}function x0(t){if(t.tag===13||t.tag===31){var n=Qn();n=Xs(n);var a=or(t,n);a!==null&&Vn(a,t,n),Zf(t,n)}}var lu=!0;function pS(t,n,a,s){var c=L.T;L.T=null;var f=G.p;try{G.p=2,jf(t,n,a,s)}finally{G.p=f,L.T=c}}function mS(t,n,a,s){var c=L.T;L.T=null;var f=G.p;try{G.p=8,jf(t,n,a,s)}finally{G.p=f,L.T=c}}function jf(t,n,a,s){if(lu){var c=Kf(s);if(c===null)Pf(t,n,s,uu,a),M0(t,s);else if(_S(c,t,n,a,s))s.stopPropagation();else if(M0(t,s),n&4&&-1<gS.indexOf(t)){for(;c!==null;){var f=Ma(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var v=yt(f.pendingLanes);if(v!==0){var T=f;for(T.pendingLanes|=2,T.entangledLanes|=2;v;){var B=1<<31-zt(v);T.entanglements[1]|=B,v&=~B}Oi(f),(Ne&6)===0&&(Wl=y()+500,bo(0))}}break;case 31:case 13:T=or(f,2),T!==null&&Vn(T,f,2),Yl(),Zf(f,2)}if(f=Kf(s),f===null&&Pf(t,n,s,uu,a),f===c)break;c=f}c!==null&&s.stopPropagation()}else Pf(t,n,s,null,a)}}function Kf(t){return t=Qu(t),Qf(t)}var uu=null;function Qf(t){if(uu=null,t=Sa(t),t!==null){var n=u(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=d(n),t!==null)return t;t=null}else if(a===31){if(t=h(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return uu=t,null}function S0(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(k()){case ct:return 2;case _t:return 8;case lt:case Wt:return 32;case wt:return 268435456;default:return 32}default:return 32}}var Jf=!1,Ga=null,Va=null,Xa=null,Lo=new Map,No=new Map,ka=[],gS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function M0(t,n){switch(t){case"focusin":case"focusout":Ga=null;break;case"dragenter":case"dragleave":Va=null;break;case"mouseover":case"mouseout":Xa=null;break;case"pointerover":case"pointerout":Lo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":No.delete(n.pointerId)}}function Oo(t,n,a,s,c,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:f,targetContainers:[c]},n!==null&&(n=Ma(n),n!==null&&v0(n)),t):(t.eventSystemFlags|=s,n=t.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),t)}function _S(t,n,a,s,c){switch(n){case"focusin":return Ga=Oo(Ga,t,n,a,s,c),!0;case"dragenter":return Va=Oo(Va,t,n,a,s,c),!0;case"mouseover":return Xa=Oo(Xa,t,n,a,s,c),!0;case"pointerover":var f=c.pointerId;return Lo.set(f,Oo(Lo.get(f)||null,t,n,a,s,c)),!0;case"gotpointercapture":return f=c.pointerId,No.set(f,Oo(No.get(f)||null,t,n,a,s,c)),!0}return!1}function y0(t){var n=Sa(t.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){t.blockedOn=n,Di(t.priority,function(){x0(a)});return}}else if(n===31){if(n=h(a),n!==null){t.blockedOn=n,Di(t.priority,function(){x0(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function cu(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=Kf(t.nativeEvent);if(a===null){a=t.nativeEvent;var s=new a.constructor(a.type,a);Ku=s,a.target.dispatchEvent(s),Ku=null}else return n=Ma(a),n!==null&&v0(n),t.blockedOn=a,!1;n.shift()}return!0}function E0(t,n,a){cu(t)&&a.delete(n)}function vS(){Jf=!1,Ga!==null&&cu(Ga)&&(Ga=null),Va!==null&&cu(Va)&&(Va=null),Xa!==null&&cu(Xa)&&(Xa=null),Lo.forEach(E0),No.forEach(E0)}function fu(t,n){t.blockedOn===n&&(t.blockedOn=null,Jf||(Jf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,vS)))}var du=null;function T0(t){du!==t&&(du=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){du===t&&(du=null);for(var n=0;n<t.length;n+=3){var a=t[n],s=t[n+1],c=t[n+2];if(typeof s!="function"){if(Qf(s||a)===null)continue;break}var f=Ma(a);f!==null&&(t.splice(n,3),n-=3,jc(f,{pending:!0,data:c,method:a.method,action:s},s,c))}}))}function ms(t){function n(B){return fu(B,t)}Ga!==null&&fu(Ga,t),Va!==null&&fu(Va,t),Xa!==null&&fu(Xa,t),Lo.forEach(n),No.forEach(n);for(var a=0;a<ka.length;a++){var s=ka[a];s.blockedOn===t&&(s.blockedOn=null)}for(;0<ka.length&&(a=ka[0],a.blockedOn===null);)y0(a),a.blockedOn===null&&ka.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var c=a[s],f=a[s+1],v=c[vn]||null;if(typeof f=="function")v||T0(a);else if(v){var T=null;if(f&&f.hasAttribute("formAction")){if(c=f,v=f[vn]||null)T=v.formAction;else if(Qf(c)!==null)continue}else T=v.action;typeof T=="function"?a[s+1]=T:(a.splice(s,3),s-=3),T0(a)}}}function b0(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(v){return c=v})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),s||setTimeout(a,20)}function a(){if(!s&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var s=!1,c=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){s=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function $f(t){this._internalRoot=t}hu.prototype.render=$f.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=Qn();g0(a,s,t,n,null,null)},hu.prototype.unmount=$f.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;g0(t.current,2,null,t,null,null),Yl(),n[xi]=null}};function hu(t){this._internalRoot=t}hu.prototype.unstable_scheduleHydration=function(t){if(t){var n=ks();t={blockedOn:null,target:t,priority:n};for(var a=0;a<ka.length&&n!==0&&n<ka[a].priority;a++);ka.splice(a,0,t),a===0&&y0(t)}};var A0=e.version;if(A0!=="19.2.3")throw Error(r(527,A0,"19.2.3"));G.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=p(n),t=t!==null?_(t):null,t=t===null?null:t.stateNode,t};var xS={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:L,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var pu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!pu.isDisabled&&pu.supportsFiber)try{Mt=pu.inject(xS),Tt=pu}catch{}}return Fo.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,s="",c=Nm,f=Om,v=Pm;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(v=n.onRecoverableError)),n=p0(t,1,!1,null,null,a,s,null,c,f,v,b0),t[xi]=n.current,Of(t),new $f(n)},Fo.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var s=!1,c="",f=Nm,v=Om,T=Pm,B=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(v=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.formState!==void 0&&(B=a.formState)),n=p0(t,1,!0,n,a??null,s,c,B,f,v,T,b0),n.context=m0(null),a=n.current,s=Qn(),s=Xs(s),c=wa(s),c.callback=null,Da(a,c,s),a=s,n.current.lanes=a,wn(n,a),Oi(n),t[xi]=n.current,Of(t),new hu(n)},Fo.version="19.2.3",Fo}var F0;function wS(){if(F0)return nd.exports;F0=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),nd.exports=CS(),nd.exports}var DS=wS();const Oh="182",US=0,z0=1,LS=2,Iu=1,NS=2,Xo=3,er=0,Xn=1,mi=2,ma=0,Lr=1,Wo=2,I0=3,B0=4,OS=5,Cr=100,PS=101,FS=102,zS=103,IS=104,BS=200,HS=201,GS=202,VS=203,zd=204,Id=205,XS=206,kS=207,WS=208,qS=209,YS=210,ZS=211,jS=212,KS=213,QS=214,Bd=0,Hd=1,Gd=2,Os=3,Vd=4,Xd=5,kd=6,Wd=7,F_=0,JS=1,$S=2,Bi=0,z_=1,I_=2,B_=3,H_=4,G_=5,V_=6,X_=7,k_=300,Nr=301,Ps=302,qd=303,Yd=304,qu=306,Zd=1e3,pa=1001,jd=1002,Cn=1003,tM=1004,mu=1005,$e=1006,sd=1007,Dr=1008,gi=1009,W_=1010,q_=1011,Zo=1012,Ph=1013,Xi=1014,zi=1015,_a=1016,Fh=1017,zh=1018,jo=1020,Y_=35902,Z_=35899,j_=1021,K_=1022,_i=1023,va=1026,Ur=1027,Q_=1028,Ih=1029,Fs=1030,Bh=1031,Hh=1033,Bu=33776,Hu=33777,Gu=33778,Vu=33779,Kd=35840,Qd=35841,Jd=35842,$d=35843,th=36196,eh=37492,nh=37496,ih=37488,ah=37489,rh=37490,sh=37491,oh=37808,lh=37809,uh=37810,ch=37811,fh=37812,dh=37813,hh=37814,ph=37815,mh=37816,gh=37817,_h=37818,vh=37819,xh=37820,Sh=37821,Mh=36492,yh=36494,Eh=36495,Th=36283,bh=36284,Ah=36285,Rh=36286,eM=3200,nM=0,iM=1,Ja="",hi="srgb",zs="srgb-linear",ku="linear",He="srgb",gs=7680,H0=519,aM=512,rM=513,sM=514,Gh=515,oM=516,lM=517,Vh=518,uM=519,G0=35044,V0="300 es",Ii=2e3,Wu=2001;function J_(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Ko(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function cM(){const o=Ko("canvas");return o.style.display="block",o}const X0={};function k0(...o){const e="THREE."+o.shift();console.log(e,...o)}function fe(...o){const e="THREE."+o.shift();console.warn(e,...o)}function Re(...o){const e="THREE."+o.shift();console.error(e,...o)}function Qo(...o){const e=o.join(" ");e in X0||(X0[e]=!0,fe(...o))}function fM(o,e,i){return new Promise(function(r,l){function u(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:r()}}setTimeout(u,i)})}class Bs{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let u=0,d=l.length;u<d;u++)l[u].call(this,e);e.target=null}}}const Un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let W0=1234567;const qo=Math.PI/180,Jo=180/Math.PI;function Hs(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Un[o&255]+Un[o>>8&255]+Un[o>>16&255]+Un[o>>24&255]+"-"+Un[e&255]+Un[e>>8&255]+"-"+Un[e>>16&15|64]+Un[e>>24&255]+"-"+Un[i&63|128]+Un[i>>8&255]+"-"+Un[i>>16&255]+Un[i>>24&255]+Un[r&255]+Un[r>>8&255]+Un[r>>16&255]+Un[r>>24&255]).toLowerCase()}function Te(o,e,i){return Math.max(e,Math.min(i,o))}function Xh(o,e){return(o%e+e)%e}function dM(o,e,i,r,l){return r+(o-e)*(l-r)/(i-e)}function hM(o,e,i){return o!==e?(i-o)/(e-o):0}function Yo(o,e,i){return(1-i)*o+i*e}function pM(o,e,i,r){return Yo(o,e,1-Math.exp(-i*r))}function mM(o,e=1){return e-Math.abs(Xh(o,e*2)-e)}function gM(o,e,i){return o<=e?0:o>=i?1:(o=(o-e)/(i-e),o*o*(3-2*o))}function _M(o,e,i){return o<=e?0:o>=i?1:(o=(o-e)/(i-e),o*o*o*(o*(o*6-15)+10))}function vM(o,e){return o+Math.floor(Math.random()*(e-o+1))}function xM(o,e){return o+Math.random()*(e-o)}function SM(o){return o*(.5-Math.random())}function MM(o){o!==void 0&&(W0=o);let e=W0+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function yM(o){return o*qo}function EM(o){return o*Jo}function TM(o){return(o&o-1)===0&&o!==0}function bM(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function AM(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function RM(o,e,i,r,l){const u=Math.cos,d=Math.sin,h=u(i/2),m=d(i/2),p=u((e+r)/2),_=d((e+r)/2),g=u((e-r)/2),x=d((e-r)/2),E=u((r-e)/2),A=d((r-e)/2);switch(l){case"XYX":o.set(h*_,m*g,m*x,h*p);break;case"YZY":o.set(m*x,h*_,m*g,h*p);break;case"ZXZ":o.set(m*g,m*x,h*_,h*p);break;case"XZX":o.set(h*_,m*A,m*E,h*p);break;case"YXY":o.set(m*E,h*_,m*A,h*p);break;case"ZYZ":o.set(m*A,m*E,h*_,h*p);break;default:fe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function Us(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function On(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const CM={DEG2RAD:qo,RAD2DEG:Jo,generateUUID:Hs,clamp:Te,euclideanModulo:Xh,mapLinear:dM,inverseLerp:hM,lerp:Yo,damp:pM,pingpong:mM,smoothstep:gM,smootherstep:_M,randInt:vM,randFloat:xM,randFloatSpread:SM,seededRandom:MM,degToRad:yM,radToDeg:EM,isPowerOfTwo:TM,ceilPowerOfTwo:bM,floorPowerOfTwo:AM,setQuaternionFromProperEuler:RM,normalize:On,denormalize:Us};class Ge{constructor(e=0,i=0){Ge.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Te(this.x,e.x,i.x),this.y=Te(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Te(this.x,e,i),this.y=Te(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Te(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Te(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),u=this.x-e.x,d=this.y-e.y;return this.x=u*r-d*l+e.x,this.y=u*l+d*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class tl{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,u,d,h){let m=r[l+0],p=r[l+1],_=r[l+2],g=r[l+3],x=u[d+0],E=u[d+1],A=u[d+2],C=u[d+3];if(h<=0){e[i+0]=m,e[i+1]=p,e[i+2]=_,e[i+3]=g;return}if(h>=1){e[i+0]=x,e[i+1]=E,e[i+2]=A,e[i+3]=C;return}if(g!==C||m!==x||p!==E||_!==A){let M=m*x+p*E+_*A+g*C;M<0&&(x=-x,E=-E,A=-A,C=-C,M=-M);let S=1-h;if(M<.9995){const F=Math.acos(M),N=Math.sin(F);S=Math.sin(S*F)/N,h=Math.sin(h*F)/N,m=m*S+x*h,p=p*S+E*h,_=_*S+A*h,g=g*S+C*h}else{m=m*S+x*h,p=p*S+E*h,_=_*S+A*h,g=g*S+C*h;const F=1/Math.sqrt(m*m+p*p+_*_+g*g);m*=F,p*=F,_*=F,g*=F}}e[i]=m,e[i+1]=p,e[i+2]=_,e[i+3]=g}static multiplyQuaternionsFlat(e,i,r,l,u,d){const h=r[l],m=r[l+1],p=r[l+2],_=r[l+3],g=u[d],x=u[d+1],E=u[d+2],A=u[d+3];return e[i]=h*A+_*g+m*E-p*x,e[i+1]=m*A+_*x+p*g-h*E,e[i+2]=p*A+_*E+h*x-m*g,e[i+3]=_*A-h*g-m*x-p*E,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,u=e._z,d=e._order,h=Math.cos,m=Math.sin,p=h(r/2),_=h(l/2),g=h(u/2),x=m(r/2),E=m(l/2),A=m(u/2);switch(d){case"XYZ":this._x=x*_*g+p*E*A,this._y=p*E*g-x*_*A,this._z=p*_*A+x*E*g,this._w=p*_*g-x*E*A;break;case"YXZ":this._x=x*_*g+p*E*A,this._y=p*E*g-x*_*A,this._z=p*_*A-x*E*g,this._w=p*_*g+x*E*A;break;case"ZXY":this._x=x*_*g-p*E*A,this._y=p*E*g+x*_*A,this._z=p*_*A+x*E*g,this._w=p*_*g-x*E*A;break;case"ZYX":this._x=x*_*g-p*E*A,this._y=p*E*g+x*_*A,this._z=p*_*A-x*E*g,this._w=p*_*g+x*E*A;break;case"YZX":this._x=x*_*g+p*E*A,this._y=p*E*g+x*_*A,this._z=p*_*A-x*E*g,this._w=p*_*g-x*E*A;break;case"XZY":this._x=x*_*g-p*E*A,this._y=p*E*g-x*_*A,this._z=p*_*A+x*E*g,this._w=p*_*g+x*E*A;break;default:fe("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],u=i[8],d=i[1],h=i[5],m=i[9],p=i[2],_=i[6],g=i[10],x=r+h+g;if(x>0){const E=.5/Math.sqrt(x+1);this._w=.25/E,this._x=(_-m)*E,this._y=(u-p)*E,this._z=(d-l)*E}else if(r>h&&r>g){const E=2*Math.sqrt(1+r-h-g);this._w=(_-m)/E,this._x=.25*E,this._y=(l+d)/E,this._z=(u+p)/E}else if(h>g){const E=2*Math.sqrt(1+h-r-g);this._w=(u-p)/E,this._x=(l+d)/E,this._y=.25*E,this._z=(m+_)/E}else{const E=2*Math.sqrt(1+g-r-h);this._w=(d-l)/E,this._x=(u+p)/E,this._y=(m+_)/E,this._z=.25*E}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Te(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,u=e._z,d=e._w,h=i._x,m=i._y,p=i._z,_=i._w;return this._x=r*_+d*h+l*p-u*m,this._y=l*_+d*m+u*h-r*p,this._z=u*_+d*p+r*m-l*h,this._w=d*_-r*h-l*m-u*p,this._onChangeCallback(),this}slerp(e,i){if(i<=0)return this;if(i>=1)return this.copy(e);let r=e._x,l=e._y,u=e._z,d=e._w,h=this.dot(e);h<0&&(r=-r,l=-l,u=-u,d=-d,h=-h);let m=1-i;if(h<.9995){const p=Math.acos(h),_=Math.sin(p);m=Math.sin(m*p)/_,i=Math.sin(i*p)/_,this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+u*i,this._w=this._w*m+d*i,this._onChangeCallback()}else this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+u*i,this._w=this._w*m+d*i,this.normalize();return this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),u*Math.sin(i),u*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class tt{constructor(e=0,i=0,r=0){tt.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(q0.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(q0.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[3]*r+u[6]*l,this.y=u[1]*i+u[4]*r+u[7]*l,this.z=u[2]*i+u[5]*r+u[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=e.elements,d=1/(u[3]*i+u[7]*r+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*r+u[8]*l+u[12])*d,this.y=(u[1]*i+u[5]*r+u[9]*l+u[13])*d,this.z=(u[2]*i+u[6]*r+u[10]*l+u[14])*d,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,u=e.x,d=e.y,h=e.z,m=e.w,p=2*(d*l-h*r),_=2*(h*i-u*l),g=2*(u*r-d*i);return this.x=i+m*p+d*g-h*_,this.y=r+m*_+h*p-u*g,this.z=l+m*g+u*_-d*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[4]*r+u[8]*l,this.y=u[1]*i+u[5]*r+u[9]*l,this.z=u[2]*i+u[6]*r+u[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Te(this.x,e.x,i.x),this.y=Te(this.y,e.y,i.y),this.z=Te(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Te(this.x,e,i),this.y=Te(this.y,e,i),this.z=Te(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Te(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,u=e.z,d=i.x,h=i.y,m=i.z;return this.x=l*m-u*h,this.y=u*d-r*m,this.z=r*h-l*d,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return od.copy(this).projectOnVector(e),this.sub(od)}reflect(e){return this.sub(od.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Te(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const od=new tt,q0=new tl;class ge{constructor(e,i,r,l,u,d,h,m,p){ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,d,h,m,p)}set(e,i,r,l,u,d,h,m,p){const _=this.elements;return _[0]=e,_[1]=l,_[2]=h,_[3]=i,_[4]=u,_[5]=m,_[6]=r,_[7]=d,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,d=r[0],h=r[3],m=r[6],p=r[1],_=r[4],g=r[7],x=r[2],E=r[5],A=r[8],C=l[0],M=l[3],S=l[6],F=l[1],N=l[4],O=l[7],I=l[2],H=l[5],P=l[8];return u[0]=d*C+h*F+m*I,u[3]=d*M+h*N+m*H,u[6]=d*S+h*O+m*P,u[1]=p*C+_*F+g*I,u[4]=p*M+_*N+g*H,u[7]=p*S+_*O+g*P,u[2]=x*C+E*F+A*I,u[5]=x*M+E*N+A*H,u[8]=x*S+E*O+A*P,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],d=e[4],h=e[5],m=e[6],p=e[7],_=e[8];return i*d*_-i*h*p-r*u*_+r*h*m+l*u*p-l*d*m}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],d=e[4],h=e[5],m=e[6],p=e[7],_=e[8],g=_*d-h*p,x=h*m-_*u,E=p*u-d*m,A=i*g+r*x+l*E;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/A;return e[0]=g*C,e[1]=(l*p-_*r)*C,e[2]=(h*r-l*d)*C,e[3]=x*C,e[4]=(_*i-l*m)*C,e[5]=(l*u-h*i)*C,e[6]=E*C,e[7]=(r*m-p*i)*C,e[8]=(d*i-r*u)*C,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,u,d,h){const m=Math.cos(u),p=Math.sin(u);return this.set(r*m,r*p,-r*(m*d+p*h)+d+e,-l*p,l*m,-l*(-p*d+m*h)+h+i,0,0,1),this}scale(e,i){return this.premultiply(ld.makeScale(e,i)),this}rotate(e){return this.premultiply(ld.makeRotation(-e)),this}translate(e,i){return this.premultiply(ld.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ld=new ge,Y0=new ge().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Z0=new ge().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function wM(){const o={enabled:!0,workingColorSpace:zs,spaces:{},convert:function(l,u,d){return this.enabled===!1||u===d||!u||!d||(this.spaces[u].transfer===He&&(l.r=ga(l.r),l.g=ga(l.g),l.b=ga(l.b)),this.spaces[u].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===He&&(l.r=Ns(l.r),l.g=Ns(l.g),l.b=Ns(l.b))),l},workingToColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},colorSpaceToWorking:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Ja?ku:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,d){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,u){return Qo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,u)},toWorkingColorSpace:function(l,u){return Qo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,u)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[zs]:{primaries:e,whitePoint:r,transfer:ku,toXYZ:Y0,fromXYZ:Z0,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:hi},outputColorSpaceConfig:{drawingBufferColorSpace:hi}},[hi]:{primaries:e,whitePoint:r,transfer:He,toXYZ:Y0,fromXYZ:Z0,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:hi}}}),o}const Ce=wM();function ga(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Ns(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let _s;class DM{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{_s===void 0&&(_s=Ko("canvas")),_s.width=e.width,_s.height=e.height;const l=_s.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),r=_s}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Ko("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),u=l.data;for(let d=0;d<u.length;d++)u[d]=ga(u[d]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(ga(i[r]/255)*255):i[r]=ga(i[r]);return{data:i,width:e.width,height:e.height}}else return fe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let UM=0;class kh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:UM++}),this.uuid=Hs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let d=0,h=l.length;d<h;d++)l[d].isDataTexture?u.push(ud(l[d].image)):u.push(ud(l[d]))}else u=ud(l);r.url=u}return i||(e.images[this.uuid]=r),r}}function ud(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?DM.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(fe("Texture: Unable to serialize Texture."),{})}let LM=0;const cd=new tt;class _n extends Bs{constructor(e=_n.DEFAULT_IMAGE,i=_n.DEFAULT_MAPPING,r=pa,l=pa,u=$e,d=Dr,h=_i,m=gi,p=_n.DEFAULT_ANISOTROPY,_=Ja){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:LM++}),this.uuid=Hs(),this.name="",this.source=new kh(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=u,this.minFilter=d,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new Ge(0,0),this.repeat=new Ge(1,1),this.center=new Ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(cd).x}get height(){return this.source.getSize(cd).y}get depth(){return this.source.getSize(cd).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){fe(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){fe(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==k_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Zd:e.x=e.x-Math.floor(e.x);break;case pa:e.x=e.x<0?0:1;break;case jd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Zd:e.y=e.y-Math.floor(e.y);break;case pa:e.y=e.y<0?0:1;break;case jd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}_n.DEFAULT_IMAGE=null;_n.DEFAULT_MAPPING=k_;_n.DEFAULT_ANISOTROPY=1;class an{constructor(e=0,i=0,r=0,l=1){an.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=this.w,d=e.elements;return this.x=d[0]*i+d[4]*r+d[8]*l+d[12]*u,this.y=d[1]*i+d[5]*r+d[9]*l+d[13]*u,this.z=d[2]*i+d[6]*r+d[10]*l+d[14]*u,this.w=d[3]*i+d[7]*r+d[11]*l+d[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,u;const m=e.elements,p=m[0],_=m[4],g=m[8],x=m[1],E=m[5],A=m[9],C=m[2],M=m[6],S=m[10];if(Math.abs(_-x)<.01&&Math.abs(g-C)<.01&&Math.abs(A-M)<.01){if(Math.abs(_+x)<.1&&Math.abs(g+C)<.1&&Math.abs(A+M)<.1&&Math.abs(p+E+S-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const N=(p+1)/2,O=(E+1)/2,I=(S+1)/2,H=(_+x)/4,P=(g+C)/4,K=(A+M)/4;return N>O&&N>I?N<.01?(r=0,l=.707106781,u=.707106781):(r=Math.sqrt(N),l=H/r,u=P/r):O>I?O<.01?(r=.707106781,l=0,u=.707106781):(l=Math.sqrt(O),r=H/l,u=K/l):I<.01?(r=.707106781,l=.707106781,u=0):(u=Math.sqrt(I),r=P/u,l=K/u),this.set(r,l,u,i),this}let F=Math.sqrt((M-A)*(M-A)+(g-C)*(g-C)+(x-_)*(x-_));return Math.abs(F)<.001&&(F=1),this.x=(M-A)/F,this.y=(g-C)/F,this.z=(x-_)/F,this.w=Math.acos((p+E+S-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Te(this.x,e.x,i.x),this.y=Te(this.y,e.y,i.y),this.z=Te(this.z,e.z,i.z),this.w=Te(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Te(this.x,e,i),this.y=Te(this.y,e,i),this.z=Te(this.z,e,i),this.w=Te(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Te(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class NM extends Bs{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$e,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new an(0,0,e,i),this.scissorTest=!1,this.viewport=new an(0,0,e,i);const l={width:e,height:i,depth:r.depth},u=new _n(l);this.textures=[];const d=r.count;for(let h=0;h<d;h++)this.textures[h]=u.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const i={minFilter:$e,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new kh(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Hi extends NM{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class $_ extends _n{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=pa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class OM extends _n{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=pa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class el{constructor(e=new tt(1/0,1/0,1/0),i=new tt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(Ti.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(Ti.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=Ti.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const u=r.getAttribute("position");if(i===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let d=0,h=u.count;d<h;d++)e.isMesh===!0?e.getVertexPosition(d,Ti):Ti.fromBufferAttribute(u,d),Ti.applyMatrix4(e.matrixWorld),this.expandByPoint(Ti);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),gu.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),gu.copy(r.boundingBox)),gu.applyMatrix4(e.matrixWorld),this.union(gu)}const l=e.children;for(let u=0,d=l.length;u<d;u++)this.expandByObject(l[u],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ti),Ti.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(zo),_u.subVectors(this.max,zo),vs.subVectors(e.a,zo),xs.subVectors(e.b,zo),Ss.subVectors(e.c,zo),qa.subVectors(xs,vs),Ya.subVectors(Ss,xs),Sr.subVectors(vs,Ss);let i=[0,-qa.z,qa.y,0,-Ya.z,Ya.y,0,-Sr.z,Sr.y,qa.z,0,-qa.x,Ya.z,0,-Ya.x,Sr.z,0,-Sr.x,-qa.y,qa.x,0,-Ya.y,Ya.x,0,-Sr.y,Sr.x,0];return!fd(i,vs,xs,Ss,_u)||(i=[1,0,0,0,1,0,0,0,1],!fd(i,vs,xs,Ss,_u))?!1:(vu.crossVectors(qa,Ya),i=[vu.x,vu.y,vu.z],fd(i,vs,xs,Ss,_u))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ti).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ti).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ua[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ua[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ua[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ua[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ua[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ua[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ua[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ua[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ua),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ua=[new tt,new tt,new tt,new tt,new tt,new tt,new tt,new tt],Ti=new tt,gu=new el,vs=new tt,xs=new tt,Ss=new tt,qa=new tt,Ya=new tt,Sr=new tt,zo=new tt,_u=new tt,vu=new tt,Mr=new tt;function fd(o,e,i,r,l){for(let u=0,d=o.length-3;u<=d;u+=3){Mr.fromArray(o,u);const h=l.x*Math.abs(Mr.x)+l.y*Math.abs(Mr.y)+l.z*Math.abs(Mr.z),m=e.dot(Mr),p=i.dot(Mr),_=r.dot(Mr);if(Math.max(-Math.max(m,p,_),Math.min(m,p,_))>h)return!1}return!0}const PM=new el,Io=new tt,dd=new tt;class Yu{constructor(e=new tt,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):PM.setFromPoints(e).getCenter(r);let l=0;for(let u=0,d=e.length;u<d;u++)l=Math.max(l,r.distanceToSquared(e[u]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Io.subVectors(e,this.center);const i=Io.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Io,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(dd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Io.copy(e.center).add(dd)),this.expandByPoint(Io.copy(e.center).sub(dd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const ca=new tt,hd=new tt,xu=new tt,Za=new tt,pd=new tt,Su=new tt,md=new tt;class Wh{constructor(e=new tt,i=new tt(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ca)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=ca.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(ca.copy(this.origin).addScaledVector(this.direction,i),ca.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){hd.copy(e).add(i).multiplyScalar(.5),xu.copy(i).sub(e).normalize(),Za.copy(this.origin).sub(hd);const u=e.distanceTo(i)*.5,d=-this.direction.dot(xu),h=Za.dot(this.direction),m=-Za.dot(xu),p=Za.lengthSq(),_=Math.abs(1-d*d);let g,x,E,A;if(_>0)if(g=d*m-h,x=d*h-m,A=u*_,g>=0)if(x>=-A)if(x<=A){const C=1/_;g*=C,x*=C,E=g*(g+d*x+2*h)+x*(d*g+x+2*m)+p}else x=u,g=Math.max(0,-(d*x+h)),E=-g*g+x*(x+2*m)+p;else x=-u,g=Math.max(0,-(d*x+h)),E=-g*g+x*(x+2*m)+p;else x<=-A?(g=Math.max(0,-(-d*u+h)),x=g>0?-u:Math.min(Math.max(-u,-m),u),E=-g*g+x*(x+2*m)+p):x<=A?(g=0,x=Math.min(Math.max(-u,-m),u),E=x*(x+2*m)+p):(g=Math.max(0,-(d*u+h)),x=g>0?u:Math.min(Math.max(-u,-m),u),E=-g*g+x*(x+2*m)+p);else x=d>0?-u:u,g=Math.max(0,-(d*x+h)),E=-g*g+x*(x+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,g),l&&l.copy(hd).addScaledVector(xu,x),E}intersectSphere(e,i){ca.subVectors(e.center,this.origin);const r=ca.dot(this.direction),l=ca.dot(ca)-r*r,u=e.radius*e.radius;if(l>u)return null;const d=Math.sqrt(u-l),h=r-d,m=r+d;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,u,d,h,m;const p=1/this.direction.x,_=1/this.direction.y,g=1/this.direction.z,x=this.origin;return p>=0?(r=(e.min.x-x.x)*p,l=(e.max.x-x.x)*p):(r=(e.max.x-x.x)*p,l=(e.min.x-x.x)*p),_>=0?(u=(e.min.y-x.y)*_,d=(e.max.y-x.y)*_):(u=(e.max.y-x.y)*_,d=(e.min.y-x.y)*_),r>d||u>l||((u>r||isNaN(r))&&(r=u),(d<l||isNaN(l))&&(l=d),g>=0?(h=(e.min.z-x.z)*g,m=(e.max.z-x.z)*g):(h=(e.max.z-x.z)*g,m=(e.min.z-x.z)*g),r>m||h>l)||((h>r||r!==r)&&(r=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,ca)!==null}intersectTriangle(e,i,r,l,u){pd.subVectors(i,e),Su.subVectors(r,e),md.crossVectors(pd,Su);let d=this.direction.dot(md),h;if(d>0){if(l)return null;h=1}else if(d<0)h=-1,d=-d;else return null;Za.subVectors(this.origin,e);const m=h*this.direction.dot(Su.crossVectors(Za,Su));if(m<0)return null;const p=h*this.direction.dot(pd.cross(Za));if(p<0||m+p>d)return null;const _=-h*Za.dot(md);return _<0?null:this.at(_/d,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class tn{constructor(e,i,r,l,u,d,h,m,p,_,g,x,E,A,C,M){tn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,d,h,m,p,_,g,x,E,A,C,M)}set(e,i,r,l,u,d,h,m,p,_,g,x,E,A,C,M){const S=this.elements;return S[0]=e,S[4]=i,S[8]=r,S[12]=l,S[1]=u,S[5]=d,S[9]=h,S[13]=m,S[2]=p,S[6]=_,S[10]=g,S[14]=x,S[3]=E,S[7]=A,S[11]=C,S[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new tn().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return this.determinant()===0?(e.set(1,0,0),i.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const i=this.elements,r=e.elements,l=1/Ms.setFromMatrixColumn(e,0).length(),u=1/Ms.setFromMatrixColumn(e,1).length(),d=1/Ms.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*u,i[5]=r[5]*u,i[6]=r[6]*u,i[7]=0,i[8]=r[8]*d,i[9]=r[9]*d,i[10]=r[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,u=e.z,d=Math.cos(r),h=Math.sin(r),m=Math.cos(l),p=Math.sin(l),_=Math.cos(u),g=Math.sin(u);if(e.order==="XYZ"){const x=d*_,E=d*g,A=h*_,C=h*g;i[0]=m*_,i[4]=-m*g,i[8]=p,i[1]=E+A*p,i[5]=x-C*p,i[9]=-h*m,i[2]=C-x*p,i[6]=A+E*p,i[10]=d*m}else if(e.order==="YXZ"){const x=m*_,E=m*g,A=p*_,C=p*g;i[0]=x+C*h,i[4]=A*h-E,i[8]=d*p,i[1]=d*g,i[5]=d*_,i[9]=-h,i[2]=E*h-A,i[6]=C+x*h,i[10]=d*m}else if(e.order==="ZXY"){const x=m*_,E=m*g,A=p*_,C=p*g;i[0]=x-C*h,i[4]=-d*g,i[8]=A+E*h,i[1]=E+A*h,i[5]=d*_,i[9]=C-x*h,i[2]=-d*p,i[6]=h,i[10]=d*m}else if(e.order==="ZYX"){const x=d*_,E=d*g,A=h*_,C=h*g;i[0]=m*_,i[4]=A*p-E,i[8]=x*p+C,i[1]=m*g,i[5]=C*p+x,i[9]=E*p-A,i[2]=-p,i[6]=h*m,i[10]=d*m}else if(e.order==="YZX"){const x=d*m,E=d*p,A=h*m,C=h*p;i[0]=m*_,i[4]=C-x*g,i[8]=A*g+E,i[1]=g,i[5]=d*_,i[9]=-h*_,i[2]=-p*_,i[6]=E*g+A,i[10]=x-C*g}else if(e.order==="XZY"){const x=d*m,E=d*p,A=h*m,C=h*p;i[0]=m*_,i[4]=-g,i[8]=p*_,i[1]=x*g+C,i[5]=d*_,i[9]=E*g-A,i[2]=A*g-E,i[6]=h*_,i[10]=C*g+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(FM,e,zM)}lookAt(e,i,r){const l=this.elements;return Jn.subVectors(e,i),Jn.lengthSq()===0&&(Jn.z=1),Jn.normalize(),ja.crossVectors(r,Jn),ja.lengthSq()===0&&(Math.abs(r.z)===1?Jn.x+=1e-4:Jn.z+=1e-4,Jn.normalize(),ja.crossVectors(r,Jn)),ja.normalize(),Mu.crossVectors(Jn,ja),l[0]=ja.x,l[4]=Mu.x,l[8]=Jn.x,l[1]=ja.y,l[5]=Mu.y,l[9]=Jn.y,l[2]=ja.z,l[6]=Mu.z,l[10]=Jn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,d=r[0],h=r[4],m=r[8],p=r[12],_=r[1],g=r[5],x=r[9],E=r[13],A=r[2],C=r[6],M=r[10],S=r[14],F=r[3],N=r[7],O=r[11],I=r[15],H=l[0],P=l[4],K=l[8],R=l[12],D=l[1],X=l[5],rt=l[9],at=l[13],ft=l[2],ut=l[6],L=l[10],G=l[14],it=l[3],xt=l[7],St=l[11],U=l[15];return u[0]=d*H+h*D+m*ft+p*it,u[4]=d*P+h*X+m*ut+p*xt,u[8]=d*K+h*rt+m*L+p*St,u[12]=d*R+h*at+m*G+p*U,u[1]=_*H+g*D+x*ft+E*it,u[5]=_*P+g*X+x*ut+E*xt,u[9]=_*K+g*rt+x*L+E*St,u[13]=_*R+g*at+x*G+E*U,u[2]=A*H+C*D+M*ft+S*it,u[6]=A*P+C*X+M*ut+S*xt,u[10]=A*K+C*rt+M*L+S*St,u[14]=A*R+C*at+M*G+S*U,u[3]=F*H+N*D+O*ft+I*it,u[7]=F*P+N*X+O*ut+I*xt,u[11]=F*K+N*rt+O*L+I*St,u[15]=F*R+N*at+O*G+I*U,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],u=e[12],d=e[1],h=e[5],m=e[9],p=e[13],_=e[2],g=e[6],x=e[10],E=e[14],A=e[3],C=e[7],M=e[11],S=e[15],F=m*E-p*x,N=h*E-p*g,O=h*x-m*g,I=d*E-p*_,H=d*x-m*_,P=d*g-h*_;return i*(C*F-M*N+S*O)-r*(A*F-M*I+S*H)+l*(A*N-C*I+S*P)-u*(A*O-C*H+M*P)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],d=e[4],h=e[5],m=e[6],p=e[7],_=e[8],g=e[9],x=e[10],E=e[11],A=e[12],C=e[13],M=e[14],S=e[15],F=g*M*p-C*x*p+C*m*E-h*M*E-g*m*S+h*x*S,N=A*x*p-_*M*p-A*m*E+d*M*E+_*m*S-d*x*S,O=_*C*p-A*g*p+A*h*E-d*C*E-_*h*S+d*g*S,I=A*g*m-_*C*m-A*h*x+d*C*x+_*h*M-d*g*M,H=i*F+r*N+l*O+u*I;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/H;return e[0]=F*P,e[1]=(C*x*u-g*M*u-C*l*E+r*M*E+g*l*S-r*x*S)*P,e[2]=(h*M*u-C*m*u+C*l*p-r*M*p-h*l*S+r*m*S)*P,e[3]=(g*m*u-h*x*u-g*l*p+r*x*p+h*l*E-r*m*E)*P,e[4]=N*P,e[5]=(_*M*u-A*x*u+A*l*E-i*M*E-_*l*S+i*x*S)*P,e[6]=(A*m*u-d*M*u-A*l*p+i*M*p+d*l*S-i*m*S)*P,e[7]=(d*x*u-_*m*u+_*l*p-i*x*p-d*l*E+i*m*E)*P,e[8]=O*P,e[9]=(A*g*u-_*C*u-A*r*E+i*C*E+_*r*S-i*g*S)*P,e[10]=(d*C*u-A*h*u+A*r*p-i*C*p-d*r*S+i*h*S)*P,e[11]=(_*h*u-d*g*u-_*r*p+i*g*p+d*r*E-i*h*E)*P,e[12]=I*P,e[13]=(_*C*l-A*g*l+A*r*x-i*C*x-_*r*M+i*g*M)*P,e[14]=(A*h*l-d*C*l-A*r*m+i*C*m+d*r*M-i*h*M)*P,e[15]=(d*g*l-_*h*l+_*r*m-i*g*m-d*r*x+i*h*x)*P,this}scale(e){const i=this.elements,r=e.x,l=e.y,u=e.z;return i[0]*=r,i[4]*=l,i[8]*=u,i[1]*=r,i[5]*=l,i[9]*=u,i[2]*=r,i[6]*=l,i[10]*=u,i[3]*=r,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),u=1-r,d=e.x,h=e.y,m=e.z,p=u*d,_=u*h;return this.set(p*d+r,p*h-l*m,p*m+l*h,0,p*h+l*m,_*h+r,_*m-l*d,0,p*m-l*h,_*m+l*d,u*m*m+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,u,d){return this.set(1,r,u,0,e,1,d,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,u=i._x,d=i._y,h=i._z,m=i._w,p=u+u,_=d+d,g=h+h,x=u*p,E=u*_,A=u*g,C=d*_,M=d*g,S=h*g,F=m*p,N=m*_,O=m*g,I=r.x,H=r.y,P=r.z;return l[0]=(1-(C+S))*I,l[1]=(E+O)*I,l[2]=(A-N)*I,l[3]=0,l[4]=(E-O)*H,l[5]=(1-(x+S))*H,l[6]=(M+F)*H,l[7]=0,l[8]=(A+N)*P,l[9]=(M-F)*P,l[10]=(1-(x+C))*P,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;if(e.x=l[12],e.y=l[13],e.z=l[14],this.determinant()===0)return r.set(1,1,1),i.identity(),this;let u=Ms.set(l[0],l[1],l[2]).length();const d=Ms.set(l[4],l[5],l[6]).length(),h=Ms.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),bi.copy(this);const p=1/u,_=1/d,g=1/h;return bi.elements[0]*=p,bi.elements[1]*=p,bi.elements[2]*=p,bi.elements[4]*=_,bi.elements[5]*=_,bi.elements[6]*=_,bi.elements[8]*=g,bi.elements[9]*=g,bi.elements[10]*=g,i.setFromRotationMatrix(bi),r.x=u,r.y=d,r.z=h,this}makePerspective(e,i,r,l,u,d,h=Ii,m=!1){const p=this.elements,_=2*u/(i-e),g=2*u/(r-l),x=(i+e)/(i-e),E=(r+l)/(r-l);let A,C;if(m)A=u/(d-u),C=d*u/(d-u);else if(h===Ii)A=-(d+u)/(d-u),C=-2*d*u/(d-u);else if(h===Wu)A=-d/(d-u),C=-d*u/(d-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=_,p[4]=0,p[8]=x,p[12]=0,p[1]=0,p[5]=g,p[9]=E,p[13]=0,p[2]=0,p[6]=0,p[10]=A,p[14]=C,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,r,l,u,d,h=Ii,m=!1){const p=this.elements,_=2/(i-e),g=2/(r-l),x=-(i+e)/(i-e),E=-(r+l)/(r-l);let A,C;if(m)A=1/(d-u),C=d/(d-u);else if(h===Ii)A=-2/(d-u),C=-(d+u)/(d-u);else if(h===Wu)A=-1/(d-u),C=-u/(d-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=_,p[4]=0,p[8]=0,p[12]=x,p[1]=0,p[5]=g,p[9]=0,p[13]=E,p[2]=0,p[6]=0,p[10]=A,p[14]=C,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const Ms=new tt,bi=new tn,FM=new tt(0,0,0),zM=new tt(1,1,1),ja=new tt,Mu=new tt,Jn=new tt,j0=new tn,K0=new tl;class xa{constructor(e=0,i=0,r=0,l=xa.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,u=l[0],d=l[4],h=l[8],m=l[1],p=l[5],_=l[9],g=l[2],x=l[6],E=l[10];switch(i){case"XYZ":this._y=Math.asin(Te(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-_,E),this._z=Math.atan2(-d,u)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Te(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(h,E),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-g,u),this._z=0);break;case"ZXY":this._x=Math.asin(Te(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-g,E),this._z=Math.atan2(-d,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-Te(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(x,E),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-d,p));break;case"YZX":this._z=Math.asin(Te(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-g,u)):(this._x=0,this._y=Math.atan2(h,E));break;case"XZY":this._z=Math.asin(-Te(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(h,u)):(this._x=Math.atan2(-_,E),this._y=0);break;default:fe("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return j0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(j0,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return K0.setFromEuler(this),this.setFromQuaternion(K0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}xa.DEFAULT_ORDER="XYZ";class qh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let IM=0;const Q0=new tt,ys=new tl,fa=new tn,yu=new tt,Bo=new tt,BM=new tt,HM=new tl,J0=new tt(1,0,0),$0=new tt(0,1,0),t_=new tt(0,0,1),e_={type:"added"},GM={type:"removed"},Es={type:"childadded",child:null},gd={type:"childremoved",child:null};class kn extends Bs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:IM++}),this.uuid=Hs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=kn.DEFAULT_UP.clone();const e=new tt,i=new xa,r=new tl,l=new tt(1,1,1);function u(){r.setFromEuler(i,!1)}function d(){i.setFromQuaternion(r,void 0,!1)}i._onChange(u),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new tn},normalMatrix:{value:new ge}}),this.matrix=new tn,this.matrixWorld=new tn,this.matrixAutoUpdate=kn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=kn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new qh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return ys.setFromAxisAngle(e,i),this.quaternion.multiply(ys),this}rotateOnWorldAxis(e,i){return ys.setFromAxisAngle(e,i),this.quaternion.premultiply(ys),this}rotateX(e){return this.rotateOnAxis(J0,e)}rotateY(e){return this.rotateOnAxis($0,e)}rotateZ(e){return this.rotateOnAxis(t_,e)}translateOnAxis(e,i){return Q0.copy(e).applyQuaternion(this.quaternion),this.position.add(Q0.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(J0,e)}translateY(e){return this.translateOnAxis($0,e)}translateZ(e){return this.translateOnAxis(t_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(fa.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?yu.copy(e):yu.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Bo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fa.lookAt(Bo,yu,this.up):fa.lookAt(yu,Bo,this.up),this.quaternion.setFromRotationMatrix(fa),l&&(fa.extractRotation(l.matrixWorld),ys.setFromRotationMatrix(fa),this.quaternion.premultiply(ys.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(Re("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(e_),Es.child=e,this.dispatchEvent(Es),Es.child=null):Re("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(GM),gd.child=e,this.dispatchEvent(gd),gd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),fa.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),fa.multiply(e.parent.matrixWorld)),e.applyMatrix4(fa),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(e_),Es.child=e,this.dispatchEvent(Es),Es.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const d=this.children[r].getObjectByProperty(e,i);if(d!==void 0)return d}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bo,e,BM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bo,HM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function u(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,_=m.length;p<_;p++){const g=m[p];u(e.shapes,g)}else u(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(u(e.materials,this.material[m]));l.material=h}else l.material=u(e.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(u(e.animations,m))}}if(i){const h=d(e.geometries),m=d(e.materials),p=d(e.textures),_=d(e.images),g=d(e.shapes),x=d(e.skeletons),E=d(e.animations),A=d(e.nodes);h.length>0&&(r.geometries=h),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),_.length>0&&(r.images=_),g.length>0&&(r.shapes=g),x.length>0&&(r.skeletons=x),E.length>0&&(r.animations=E),A.length>0&&(r.nodes=A)}return r.object=l,r;function d(h){const m=[];for(const p in h){const _=h[p];delete _.metadata,m.push(_)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}kn.DEFAULT_UP=new tt(0,1,0);kn.DEFAULT_MATRIX_AUTO_UPDATE=!0;kn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ai=new tt,da=new tt,_d=new tt,ha=new tt,Ts=new tt,bs=new tt,n_=new tt,vd=new tt,xd=new tt,Sd=new tt,Md=new an,yd=new an,Ed=new an;class Ci{constructor(e=new tt,i=new tt,r=new tt){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),Ai.subVectors(e,i),l.cross(Ai);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(e,i,r,l,u){Ai.subVectors(l,i),da.subVectors(r,i),_d.subVectors(e,i);const d=Ai.dot(Ai),h=Ai.dot(da),m=Ai.dot(_d),p=da.dot(da),_=da.dot(_d),g=d*p-h*h;if(g===0)return u.set(0,0,0),null;const x=1/g,E=(p*m-h*_)*x,A=(d*_-h*m)*x;return u.set(1-E-A,A,E)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,ha)===null?!1:ha.x>=0&&ha.y>=0&&ha.x+ha.y<=1}static getInterpolation(e,i,r,l,u,d,h,m){return this.getBarycoord(e,i,r,l,ha)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,ha.x),m.addScaledVector(d,ha.y),m.addScaledVector(h,ha.z),m)}static getInterpolatedAttribute(e,i,r,l,u,d){return Md.setScalar(0),yd.setScalar(0),Ed.setScalar(0),Md.fromBufferAttribute(e,i),yd.fromBufferAttribute(e,r),Ed.fromBufferAttribute(e,l),d.setScalar(0),d.addScaledVector(Md,u.x),d.addScaledVector(yd,u.y),d.addScaledVector(Ed,u.z),d}static isFrontFacing(e,i,r,l){return Ai.subVectors(r,i),da.subVectors(e,i),Ai.cross(da).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ai.subVectors(this.c,this.b),da.subVectors(this.a,this.b),Ai.cross(da).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ci.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Ci.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,u){return Ci.getInterpolation(e,this.a,this.b,this.c,i,r,l,u)}containsPoint(e){return Ci.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ci.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,u=this.c;let d,h;Ts.subVectors(l,r),bs.subVectors(u,r),vd.subVectors(e,r);const m=Ts.dot(vd),p=bs.dot(vd);if(m<=0&&p<=0)return i.copy(r);xd.subVectors(e,l);const _=Ts.dot(xd),g=bs.dot(xd);if(_>=0&&g<=_)return i.copy(l);const x=m*g-_*p;if(x<=0&&m>=0&&_<=0)return d=m/(m-_),i.copy(r).addScaledVector(Ts,d);Sd.subVectors(e,u);const E=Ts.dot(Sd),A=bs.dot(Sd);if(A>=0&&E<=A)return i.copy(u);const C=E*p-m*A;if(C<=0&&p>=0&&A<=0)return h=p/(p-A),i.copy(r).addScaledVector(bs,h);const M=_*A-E*g;if(M<=0&&g-_>=0&&E-A>=0)return n_.subVectors(u,l),h=(g-_)/(g-_+(E-A)),i.copy(l).addScaledVector(n_,h);const S=1/(M+C+x);return d=C*S,h=x*S,i.copy(r).addScaledVector(Ts,d).addScaledVector(bs,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const tv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ka={h:0,s:0,l:0},Eu={h:0,s:0,l:0};function Td(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class Pe{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=hi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ce.colorSpaceToWorking(this,i),this}setRGB(e,i,r,l=Ce.workingColorSpace){return this.r=e,this.g=i,this.b=r,Ce.colorSpaceToWorking(this,l),this}setHSL(e,i,r,l=Ce.workingColorSpace){if(e=Xh(e,1),i=Te(i,0,1),r=Te(r,0,1),i===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+i):r+i-r*i,d=2*r-u;this.r=Td(d,u,e+1/3),this.g=Td(d,u,e),this.b=Td(d,u,e-1/3)}return Ce.colorSpaceToWorking(this,l),this}setStyle(e,i=hi){function r(u){u!==void 0&&parseFloat(u)<1&&fe("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const d=l[1],h=l[2];switch(d){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:fe("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=l[1],d=u.length;if(d===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(u,16),i);fe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=hi){const r=tv[e.toLowerCase()];return r!==void 0?this.setHex(r,i):fe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ga(e.r),this.g=ga(e.g),this.b=ga(e.b),this}copyLinearToSRGB(e){return this.r=Ns(e.r),this.g=Ns(e.g),this.b=Ns(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=hi){return Ce.workingToColorSpace(Ln.copy(this),e),Math.round(Te(Ln.r*255,0,255))*65536+Math.round(Te(Ln.g*255,0,255))*256+Math.round(Te(Ln.b*255,0,255))}getHexString(e=hi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Ce.workingColorSpace){Ce.workingToColorSpace(Ln.copy(this),i);const r=Ln.r,l=Ln.g,u=Ln.b,d=Math.max(r,l,u),h=Math.min(r,l,u);let m,p;const _=(h+d)/2;if(h===d)m=0,p=0;else{const g=d-h;switch(p=_<=.5?g/(d+h):g/(2-d-h),d){case r:m=(l-u)/g+(l<u?6:0);break;case l:m=(u-r)/g+2;break;case u:m=(r-l)/g+4;break}m/=6}return e.h=m,e.s=p,e.l=_,e}getRGB(e,i=Ce.workingColorSpace){return Ce.workingToColorSpace(Ln.copy(this),i),e.r=Ln.r,e.g=Ln.g,e.b=Ln.b,e}getStyle(e=hi){Ce.workingToColorSpace(Ln.copy(this),e);const i=Ln.r,r=Ln.g,l=Ln.b;return e!==hi?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(Ka),this.setHSL(Ka.h+e,Ka.s+i,Ka.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(Ka),e.getHSL(Eu);const r=Yo(Ka.h,Eu.h,i),l=Yo(Ka.s,Eu.s,i),u=Yo(Ka.l,Eu.l,i);return this.setHSL(r,l,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,u=e.elements;return this.r=u[0]*i+u[3]*r+u[6]*l,this.g=u[1]*i+u[4]*r+u[7]*l,this.b=u[2]*i+u[5]*r+u[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ln=new Pe;Pe.NAMES=tv;let VM=0;class nl extends Bs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:VM++}),this.uuid=Hs(),this.name="",this.type="Material",this.blending=Lr,this.side=er,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zd,this.blendDst=Id,this.blendEquation=Cr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pe(0,0,0),this.blendAlpha=0,this.depthFunc=Os,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=H0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=gs,this.stencilZFail=gs,this.stencilZPass=gs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){fe(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){fe(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Lr&&(r.blending=this.blending),this.side!==er&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==zd&&(r.blendSrc=this.blendSrc),this.blendDst!==Id&&(r.blendDst=this.blendDst),this.blendEquation!==Cr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Os&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==H0&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==gs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==gs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==gs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(u){const d=[];for(const h in u){const m=u[h];delete m.metadata,d.push(m)}return d}if(i){const u=l(e.textures),d=l(e.images);u.length>0&&(r.textures=u),d.length>0&&(r.images=d)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let u=0;u!==l;++u)r[u]=i[u].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ls extends nl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xa,this.combine=F_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const cn=new tt,Tu=new Ge;let XM=0;class Gi{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:XM++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=G0,this.updateRanges=[],this.gpuType=zi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)Tu.fromBufferAttribute(this,i),Tu.applyMatrix3(e),this.setXY(i,Tu.x,Tu.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)cn.fromBufferAttribute(this,i),cn.applyMatrix3(e),this.setXYZ(i,cn.x,cn.y,cn.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)cn.fromBufferAttribute(this,i),cn.applyMatrix4(e),this.setXYZ(i,cn.x,cn.y,cn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)cn.fromBufferAttribute(this,i),cn.applyNormalMatrix(e),this.setXYZ(i,cn.x,cn.y,cn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)cn.fromBufferAttribute(this,i),cn.transformDirection(e),this.setXYZ(i,cn.x,cn.y,cn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=Us(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=On(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Us(i,this.array)),i}setX(e,i){return this.normalized&&(i=On(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Us(i,this.array)),i}setY(e,i){return this.normalized&&(i=On(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Us(i,this.array)),i}setZ(e,i){return this.normalized&&(i=On(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Us(i,this.array)),i}setW(e,i){return this.normalized&&(i=On(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=On(i,this.array),r=On(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=On(i,this.array),r=On(r,this.array),l=On(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,u){return e*=this.itemSize,this.normalized&&(i=On(i,this.array),r=On(r,this.array),l=On(l,this.array),u=On(u,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==G0&&(e.usage=this.usage),e}}class ev extends Gi{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class nv extends Gi{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class Vi extends Gi{constructor(e,i,r){super(new Float32Array(e),i,r)}}let kM=0;const di=new tn,bd=new kn,As=new tt,$n=new el,Ho=new el,gn=new tt;class wi extends Bs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:kM++}),this.uuid=Hs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(J_(e)?nv:ev)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new ge().getNormalMatrix(e);r.applyNormalMatrix(u),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return di.makeRotationFromQuaternion(e),this.applyMatrix4(di),this}rotateX(e){return di.makeRotationX(e),this.applyMatrix4(di),this}rotateY(e){return di.makeRotationY(e),this.applyMatrix4(di),this}rotateZ(e){return di.makeRotationZ(e),this.applyMatrix4(di),this}translate(e,i,r){return di.makeTranslation(e,i,r),this.applyMatrix4(di),this}scale(e,i,r){return di.makeScale(e,i,r),this.applyMatrix4(di),this}lookAt(e){return bd.lookAt(e),bd.updateMatrix(),this.applyMatrix4(bd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(As).negate(),this.translate(As.x,As.y,As.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,u=e.length;l<u;l++){const d=e[l];r.push(d.x,d.y,d.z||0)}this.setAttribute("position",new Vi(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const u=e[l];i.setXYZ(l,u.x,u.y,u.z||0)}e.length>i.count&&fe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new el);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Re("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new tt(-1/0,-1/0,-1/0),new tt(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const u=i[r];$n.setFromBufferAttribute(u),this.morphTargetsRelative?(gn.addVectors(this.boundingBox.min,$n.min),this.boundingBox.expandByPoint(gn),gn.addVectors(this.boundingBox.max,$n.max),this.boundingBox.expandByPoint(gn)):(this.boundingBox.expandByPoint($n.min),this.boundingBox.expandByPoint($n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Re('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Yu);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Re("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new tt,1/0);return}if(e){const r=this.boundingSphere.center;if($n.setFromBufferAttribute(e),i)for(let u=0,d=i.length;u<d;u++){const h=i[u];Ho.setFromBufferAttribute(h),this.morphTargetsRelative?(gn.addVectors($n.min,Ho.min),$n.expandByPoint(gn),gn.addVectors($n.max,Ho.max),$n.expandByPoint(gn)):($n.expandByPoint(Ho.min),$n.expandByPoint(Ho.max))}$n.getCenter(r);let l=0;for(let u=0,d=e.count;u<d;u++)gn.fromBufferAttribute(e,u),l=Math.max(l,r.distanceToSquared(gn));if(i)for(let u=0,d=i.length;u<d;u++){const h=i[u],m=this.morphTargetsRelative;for(let p=0,_=h.count;p<_;p++)gn.fromBufferAttribute(h,p),m&&(As.fromBufferAttribute(e,p),gn.add(As)),l=Math.max(l,r.distanceToSquared(gn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Re('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Re("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Gi(new Float32Array(4*r.count),4));const d=this.getAttribute("tangent"),h=[],m=[];for(let K=0;K<r.count;K++)h[K]=new tt,m[K]=new tt;const p=new tt,_=new tt,g=new tt,x=new Ge,E=new Ge,A=new Ge,C=new tt,M=new tt;function S(K,R,D){p.fromBufferAttribute(r,K),_.fromBufferAttribute(r,R),g.fromBufferAttribute(r,D),x.fromBufferAttribute(u,K),E.fromBufferAttribute(u,R),A.fromBufferAttribute(u,D),_.sub(p),g.sub(p),E.sub(x),A.sub(x);const X=1/(E.x*A.y-A.x*E.y);isFinite(X)&&(C.copy(_).multiplyScalar(A.y).addScaledVector(g,-E.y).multiplyScalar(X),M.copy(g).multiplyScalar(E.x).addScaledVector(_,-A.x).multiplyScalar(X),h[K].add(C),h[R].add(C),h[D].add(C),m[K].add(M),m[R].add(M),m[D].add(M))}let F=this.groups;F.length===0&&(F=[{start:0,count:e.count}]);for(let K=0,R=F.length;K<R;++K){const D=F[K],X=D.start,rt=D.count;for(let at=X,ft=X+rt;at<ft;at+=3)S(e.getX(at+0),e.getX(at+1),e.getX(at+2))}const N=new tt,O=new tt,I=new tt,H=new tt;function P(K){I.fromBufferAttribute(l,K),H.copy(I);const R=h[K];N.copy(R),N.sub(I.multiplyScalar(I.dot(R))).normalize(),O.crossVectors(H,R);const X=O.dot(m[K])<0?-1:1;d.setXYZW(K,N.x,N.y,N.z,X)}for(let K=0,R=F.length;K<R;++K){const D=F[K],X=D.start,rt=D.count;for(let at=X,ft=X+rt;at<ft;at+=3)P(e.getX(at+0)),P(e.getX(at+1)),P(e.getX(at+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Gi(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let x=0,E=r.count;x<E;x++)r.setXYZ(x,0,0,0);const l=new tt,u=new tt,d=new tt,h=new tt,m=new tt,p=new tt,_=new tt,g=new tt;if(e)for(let x=0,E=e.count;x<E;x+=3){const A=e.getX(x+0),C=e.getX(x+1),M=e.getX(x+2);l.fromBufferAttribute(i,A),u.fromBufferAttribute(i,C),d.fromBufferAttribute(i,M),_.subVectors(d,u),g.subVectors(l,u),_.cross(g),h.fromBufferAttribute(r,A),m.fromBufferAttribute(r,C),p.fromBufferAttribute(r,M),h.add(_),m.add(_),p.add(_),r.setXYZ(A,h.x,h.y,h.z),r.setXYZ(C,m.x,m.y,m.z),r.setXYZ(M,p.x,p.y,p.z)}else for(let x=0,E=i.count;x<E;x+=3)l.fromBufferAttribute(i,x+0),u.fromBufferAttribute(i,x+1),d.fromBufferAttribute(i,x+2),_.subVectors(d,u),g.subVectors(l,u),_.cross(g),r.setXYZ(x+0,_.x,_.y,_.z),r.setXYZ(x+1,_.x,_.y,_.z),r.setXYZ(x+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)gn.fromBufferAttribute(e,i),gn.normalize(),e.setXYZ(i,gn.x,gn.y,gn.z)}toNonIndexed(){function e(h,m){const p=h.array,_=h.itemSize,g=h.normalized,x=new p.constructor(m.length*_);let E=0,A=0;for(let C=0,M=m.length;C<M;C++){h.isInterleavedBufferAttribute?E=m[C]*h.data.stride+h.offset:E=m[C]*_;for(let S=0;S<_;S++)x[A++]=p[E++]}return new Gi(x,_,g)}if(this.index===null)return fe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new wi,r=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=e(m,r);i.setAttribute(h,p)}const u=this.morphAttributes;for(const h in u){const m=[],p=u[h];for(let _=0,g=p.length;_<g;_++){const x=p[_],E=e(x,r);m.push(E)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,m=d.length;h<m;h++){const p=d[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],_=[];for(let g=0,x=p.length;g<x;g++){const E=p[g];_.push(E.toJSON(e.data))}_.length>0&&(l[m]=_,u=!0)}u&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const l=e.attributes;for(const p in l){const _=l[p];this.setAttribute(p,_.clone(i))}const u=e.morphAttributes;for(const p in u){const _=[],g=u[p];for(let x=0,E=g.length;x<E;x++)_.push(g[x].clone(i));this.morphAttributes[p]=_}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let p=0,_=d.length;p<_;p++){const g=d[p];this.addGroup(g.start,g.count,g.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const i_=new tn,yr=new Wh,bu=new Yu,a_=new tt,Au=new tt,Ru=new tt,Cu=new tt,Ad=new tt,wu=new tt,r_=new tt,Du=new tt;class Fn extends kn{constructor(e=new wi,i=new Ls){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=l.length;u<d;u++){const h=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,u=r.morphAttributes.position,d=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const h=this.morphTargetInfluences;if(u&&h){wu.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const _=h[m],g=u[m];_!==0&&(Ad.fromBufferAttribute(g,e),d?wu.addScaledVector(Ad,_):wu.addScaledVector(Ad.sub(i),_))}i.add(wu)}return i}raycast(e,i){const r=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),bu.copy(r.boundingSphere),bu.applyMatrix4(u),yr.copy(e.ray).recast(e.near),!(bu.containsPoint(yr.origin)===!1&&(yr.intersectSphere(bu,a_)===null||yr.origin.distanceToSquared(a_)>(e.far-e.near)**2))&&(i_.copy(u).invert(),yr.copy(e.ray).applyMatrix4(i_),!(r.boundingBox!==null&&yr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,yr)))}_computeIntersections(e,i,r){let l;const u=this.geometry,d=this.material,h=u.index,m=u.attributes.position,p=u.attributes.uv,_=u.attributes.uv1,g=u.attributes.normal,x=u.groups,E=u.drawRange;if(h!==null)if(Array.isArray(d))for(let A=0,C=x.length;A<C;A++){const M=x[A],S=d[M.materialIndex],F=Math.max(M.start,E.start),N=Math.min(h.count,Math.min(M.start+M.count,E.start+E.count));for(let O=F,I=N;O<I;O+=3){const H=h.getX(O),P=h.getX(O+1),K=h.getX(O+2);l=Uu(this,S,e,r,p,_,g,H,P,K),l&&(l.faceIndex=Math.floor(O/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const A=Math.max(0,E.start),C=Math.min(h.count,E.start+E.count);for(let M=A,S=C;M<S;M+=3){const F=h.getX(M),N=h.getX(M+1),O=h.getX(M+2);l=Uu(this,d,e,r,p,_,g,F,N,O),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(d))for(let A=0,C=x.length;A<C;A++){const M=x[A],S=d[M.materialIndex],F=Math.max(M.start,E.start),N=Math.min(m.count,Math.min(M.start+M.count,E.start+E.count));for(let O=F,I=N;O<I;O+=3){const H=O,P=O+1,K=O+2;l=Uu(this,S,e,r,p,_,g,H,P,K),l&&(l.faceIndex=Math.floor(O/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const A=Math.max(0,E.start),C=Math.min(m.count,E.start+E.count);for(let M=A,S=C;M<S;M+=3){const F=M,N=M+1,O=M+2;l=Uu(this,d,e,r,p,_,g,F,N,O),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function WM(o,e,i,r,l,u,d,h){let m;if(e.side===Xn?m=r.intersectTriangle(d,u,l,!0,h):m=r.intersectTriangle(l,u,d,e.side===er,h),m===null)return null;Du.copy(h),Du.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(Du);return p<i.near||p>i.far?null:{distance:p,point:Du.clone(),object:o}}function Uu(o,e,i,r,l,u,d,h,m,p){o.getVertexPosition(h,Au),o.getVertexPosition(m,Ru),o.getVertexPosition(p,Cu);const _=WM(o,e,i,r,Au,Ru,Cu,r_);if(_){const g=new tt;Ci.getBarycoord(r_,Au,Ru,Cu,g),l&&(_.uv=Ci.getInterpolatedAttribute(l,h,m,p,g,new Ge)),u&&(_.uv1=Ci.getInterpolatedAttribute(u,h,m,p,g,new Ge)),d&&(_.normal=Ci.getInterpolatedAttribute(d,h,m,p,g,new tt),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const x={a:h,b:m,c:p,normal:new tt,materialIndex:0};Ci.getNormal(Au,Ru,Cu,x.normal),_.face=x,_.barycoord=g}return _}class il extends wi{constructor(e=1,i=1,r=1,l=1,u=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:u,depthSegments:d};const h=this;l=Math.floor(l),u=Math.floor(u),d=Math.floor(d);const m=[],p=[],_=[],g=[];let x=0,E=0;A("z","y","x",-1,-1,r,i,e,d,u,0),A("z","y","x",1,-1,r,i,-e,d,u,1),A("x","z","y",1,1,e,r,i,l,d,2),A("x","z","y",1,-1,e,r,-i,l,d,3),A("x","y","z",1,-1,e,i,r,l,u,4),A("x","y","z",-1,-1,e,i,-r,l,u,5),this.setIndex(m),this.setAttribute("position",new Vi(p,3)),this.setAttribute("normal",new Vi(_,3)),this.setAttribute("uv",new Vi(g,2));function A(C,M,S,F,N,O,I,H,P,K,R){const D=O/P,X=I/K,rt=O/2,at=I/2,ft=H/2,ut=P+1,L=K+1;let G=0,it=0;const xt=new tt;for(let St=0;St<L;St++){const U=St*X-at;for(let j=0;j<ut;j++){const mt=j*D-rt;xt[C]=mt*F,xt[M]=U*N,xt[S]=ft,p.push(xt.x,xt.y,xt.z),xt[C]=0,xt[M]=0,xt[S]=H>0?1:-1,_.push(xt.x,xt.y,xt.z),g.push(j/P),g.push(1-St/K),G+=1}}for(let St=0;St<K;St++)for(let U=0;U<P;U++){const j=x+U+ut*St,mt=x+U+ut*(St+1),Rt=x+(U+1)+ut*(St+1),Gt=x+(U+1)+ut*St;m.push(j,mt,Gt),m.push(mt,Rt,Gt),it+=6}h.addGroup(E,it,R),E+=it,x+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new il(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Is(o){const e={};for(const i in o){e[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(fe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone():Array.isArray(l)?e[i][r]=l.slice():e[i][r]=l}}return e}function Pn(o){const e={};for(let i=0;i<o.length;i++){const r=Is(o[i]);for(const l in r)e[l]=r[l]}return e}function qM(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function iv(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ce.workingColorSpace}const YM={clone:Is,merge:Pn};var ZM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,jM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ki extends nl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ZM,this.fragmentShader=jM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Is(e.uniforms),this.uniformsGroups=qM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class av extends kn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tn,this.projectionMatrix=new tn,this.projectionMatrixInverse=new tn,this.coordinateSystem=Ii,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Qa=new tt,s_=new Ge,o_=new Ge;class pi extends av{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Jo*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(qo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Jo*2*Math.atan(Math.tan(qo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){Qa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Qa.x,Qa.y).multiplyScalar(-e/Qa.z),Qa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Qa.x,Qa.y).multiplyScalar(-e/Qa.z)}getViewSize(e,i){return this.getViewBounds(e,s_,o_),i.subVectors(o_,s_)}setViewOffset(e,i,r,l,u,d){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(qo*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,u=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,p=d.fullHeight;u+=d.offsetX*l/m,i-=d.offsetY*r/p,l*=d.width/m,r*=d.height/p}const h=this.filmOffset;h!==0&&(u+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Rs=-90,Cs=1;class KM extends kn{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new pi(Rs,Cs,e,i);l.layers=this.layers,this.add(l);const u=new pi(Rs,Cs,e,i);u.layers=this.layers,this.add(u);const d=new pi(Rs,Cs,e,i);d.layers=this.layers,this.add(d);const h=new pi(Rs,Cs,e,i);h.layers=this.layers,this.add(h);const m=new pi(Rs,Cs,e,i);m.layers=this.layers,this.add(m);const p=new pi(Rs,Cs,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,u,d,h,m]=i;for(const p of i)this.remove(p);if(e===Ii)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Wu)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,d,h,m,p,_]=this.children,g=e.getRenderTarget(),x=e.getActiveCubeFace(),E=e.getActiveMipmapLevel(),A=e.xr.enabled;e.xr.enabled=!1;const C=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,l),e.render(i,u),e.setRenderTarget(r,1,l),e.render(i,d),e.setRenderTarget(r,2,l),e.render(i,h),e.setRenderTarget(r,3,l),e.render(i,m),e.setRenderTarget(r,4,l),e.render(i,p),r.texture.generateMipmaps=C,e.setRenderTarget(r,5,l),e.render(i,_),e.setRenderTarget(g,x,E),e.xr.enabled=A,r.texture.needsPMREMUpdate=!0}}class rv extends _n{constructor(e=[],i=Nr,r,l,u,d,h,m,p,_){super(e,i,r,l,u,d,h,m,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class sv extends Hi{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new rv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new il(5,5,5),u=new ki({name:"CubemapFromEquirect",uniforms:Is(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Xn,blending:ma});u.uniforms.tEquirect.value=i;const d=new Fn(l,u),h=i.minFilter;return i.minFilter===Dr&&(i.minFilter=$e),new KM(1,10,this).update(e,d),i.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(e,i=!0,r=!0,l=!0){const u=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(i,r,l);e.setRenderTarget(u)}}class Lu extends kn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const QM={type:"move"};class Rd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Lu,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Lu,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new tt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new tt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Lu,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new tt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new tt),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,u=null,d=null;const h=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){d=!0;for(const C of e.hand.values()){const M=i.getJointPose(C,r),S=this._getHandJoint(p,C);M!==null&&(S.matrix.fromArray(M.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=M.radius),S.visible=M!==null}const _=p.joints["index-finger-tip"],g=p.joints["thumb-tip"],x=_.position.distanceTo(g.position),E=.02,A=.005;p.inputState.pinching&&x>E+A?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&x<=E-A&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(u=i.getPose(e.gripSpace,r),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&u!==null&&(l=u),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(QM)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=d!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new Lu;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}class Yh{constructor(e,i=25e-5){this.isFogExp2=!0,this.name="",this.color=new Pe(e),this.density=i}clone(){return new Yh(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class JM extends kn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new xa,this.environmentIntensity=1,this.environmentRotation=new xa,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class $M extends _n{constructor(e=null,i=1,r=1,l,u,d,h,m,p=Cn,_=Cn,g,x){super(null,d,h,m,p,_,l,u,g,x),this.isDataTexture=!0,this.image={data:e,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Cd=new tt,ty=new tt,ey=new ge;class Rr{constructor(e=new tt(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=Cd.subVectors(r,i).cross(ty.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta(Cd),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(e.start).addScaledVector(r,u)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||ey.getNormalMatrix(e),l=this.coplanarPoint(Cd).applyMatrix4(e),u=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Er=new Yu,ny=new Ge(.5,.5),Nu=new tt;class ov{constructor(e=new Rr,i=new Rr,r=new Rr,l=new Rr,u=new Rr,d=new Rr){this.planes=[e,i,r,l,u,d]}set(e,i,r,l,u,d){const h=this.planes;return h[0].copy(e),h[1].copy(i),h[2].copy(r),h[3].copy(l),h[4].copy(u),h[5].copy(d),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=Ii,r=!1){const l=this.planes,u=e.elements,d=u[0],h=u[1],m=u[2],p=u[3],_=u[4],g=u[5],x=u[6],E=u[7],A=u[8],C=u[9],M=u[10],S=u[11],F=u[12],N=u[13],O=u[14],I=u[15];if(l[0].setComponents(p-d,E-_,S-A,I-F).normalize(),l[1].setComponents(p+d,E+_,S+A,I+F).normalize(),l[2].setComponents(p+h,E+g,S+C,I+N).normalize(),l[3].setComponents(p-h,E-g,S-C,I-N).normalize(),r)l[4].setComponents(m,x,M,O).normalize(),l[5].setComponents(p-m,E-x,S-M,I-O).normalize();else if(l[4].setComponents(p-m,E-x,S-M,I-O).normalize(),i===Ii)l[5].setComponents(p+m,E+x,S+M,I+O).normalize();else if(i===Wu)l[5].setComponents(m,x,M,O).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Er.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Er.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Er)}intersectsSprite(e){Er.center.set(0,0,0);const i=ny.distanceTo(e.center);return Er.radius=.7071067811865476+i,Er.applyMatrix4(e.matrixWorld),this.intersectsSphere(Er)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Nu.x=l.normal.x>0?e.max.x:e.min.x,Nu.y=l.normal.y>0?e.max.y:e.min.y,Nu.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Nu)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class lv extends nl{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Pe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const l_=new tn,Ch=new Wh,Ou=new Yu,Pu=new tt;class iy extends kn{constructor(e=new wi,i=new lv){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,i){const r=this.geometry,l=this.matrixWorld,u=e.params.Points.threshold,d=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Ou.copy(r.boundingSphere),Ou.applyMatrix4(l),Ou.radius+=u,e.ray.intersectsSphere(Ou)===!1)return;l_.copy(l).invert(),Ch.copy(e.ray).applyMatrix4(l_);const h=u/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=r.index,g=r.attributes.position;if(p!==null){const x=Math.max(0,d.start),E=Math.min(p.count,d.start+d.count);for(let A=x,C=E;A<C;A++){const M=p.getX(A);Pu.fromBufferAttribute(g,M),u_(Pu,M,m,l,e,i,this)}}else{const x=Math.max(0,d.start),E=Math.min(g.count,d.start+d.count);for(let A=x,C=E;A<C;A++)Pu.fromBufferAttribute(g,A),u_(Pu,A,m,l,e,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=l.length;u<d;u++){const h=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}}function u_(o,e,i,r,l,u,d){const h=Ch.distanceSqToPoint(o);if(h<i){const m=new tt;Ch.closestPointToPoint(o,m),m.applyMatrix4(r);const p=l.ray.origin.distanceTo(m);if(p<l.near||p>l.far)return;u.push({distance:p,distanceToRay:Math.sqrt(h),point:m,index:e,face:null,faceIndex:null,barycoord:null,object:d})}}class ay extends _n{constructor(e,i,r,l,u=$e,d=$e,h,m,p){super(e,i,r,l,u,d,h,m,p),this.isVideoTexture=!0,this.generateMipmaps=!1,this._requestVideoFrameCallbackId=0;const _=this;function g(){_.needsUpdate=!0,_._requestVideoFrameCallbackId=e.requestVideoFrameCallback(g)}"requestVideoFrameCallback"in e&&(this._requestVideoFrameCallbackId=e.requestVideoFrameCallback(g))}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}dispose(){this._requestVideoFrameCallbackId!==0&&(this.source.data.cancelVideoFrameCallback(this._requestVideoFrameCallbackId),this._requestVideoFrameCallbackId=0),super.dispose()}}class wh extends _n{constructor(e,i,r,l,u,d,h,m,p){super(e,i,r,l,u,d,h,m,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class $o extends _n{constructor(e,i,r=Xi,l,u,d,h=Cn,m=Cn,p,_=va,g=1){if(_!==va&&_!==Ur)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:e,height:i,depth:g};super(x,l,u,d,h,m,_,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new kh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class ry extends $o{constructor(e,i=Xi,r=Nr,l,u,d=Cn,h=Cn,m,p=va){const _={width:e,height:e,depth:1},g=[_,_,_,_,_,_];super(e,e,i,r,l,u,d,h,m,p),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class uv extends _n{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class $a extends wi{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const u=e/2,d=i/2,h=Math.floor(r),m=Math.floor(l),p=h+1,_=m+1,g=e/h,x=i/m,E=[],A=[],C=[],M=[];for(let S=0;S<_;S++){const F=S*x-d;for(let N=0;N<p;N++){const O=N*g-u;A.push(O,-F,0),C.push(0,0,1),M.push(N/h),M.push(1-S/m)}}for(let S=0;S<m;S++)for(let F=0;F<h;F++){const N=F+p*S,O=F+p*(S+1),I=F+1+p*(S+1),H=F+1+p*S;E.push(N,O,H),E.push(O,I,H)}this.setIndex(E),this.setAttribute("position",new Vi(A,3)),this.setAttribute("normal",new Vi(C,3)),this.setAttribute("uv",new Vi(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $a(e.width,e.height,e.widthSegments,e.heightSegments)}}class sy extends ki{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class oy extends nl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=eM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ly extends nl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const wd={enabled:!1,files:{},add:function(o,e){this.enabled!==!1&&(this.files[o]=e)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class uy{constructor(e,i,r){const l=this;let u=!1,d=0,h=0,m;const p=[];this.onStart=void 0,this.onLoad=e,this.onProgress=i,this.onError=r,this._abortController=null,this.itemStart=function(_){h++,u===!1&&l.onStart!==void 0&&l.onStart(_,d,h),u=!0},this.itemEnd=function(_){d++,l.onProgress!==void 0&&l.onProgress(_,d,h),d===h&&(u=!1,l.onLoad!==void 0&&l.onLoad())},this.itemError=function(_){l.onError!==void 0&&l.onError(_)},this.resolveURL=function(_){return m?m(_):_},this.setURLModifier=function(_){return m=_,this},this.addHandler=function(_,g){return p.push(_,g),this},this.removeHandler=function(_){const g=p.indexOf(_);return g!==-1&&p.splice(g,2),this},this.getHandler=function(_){for(let g=0,x=p.length;g<x;g+=2){const E=p[g],A=p[g+1];if(E.global&&(E.lastIndex=0),E.test(_))return A}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const cy=new uy;class Zh{constructor(e){this.manager=e!==void 0?e:cy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,i){const r=this;return new Promise(function(l,u){r.load(e,l,i,u)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Zh.DEFAULT_MATERIAL_NAME="__DEFAULT";const ws=new WeakMap;class fy extends Zh{constructor(e){super(e)}load(e,i,r,l){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const u=this,d=wd.get(`image:${e}`);if(d!==void 0){if(d.complete===!0)u.manager.itemStart(e),setTimeout(function(){i&&i(d),u.manager.itemEnd(e)},0);else{let g=ws.get(d);g===void 0&&(g=[],ws.set(d,g)),g.push({onLoad:i,onError:l})}return d}const h=Ko("img");function m(){_(),i&&i(this);const g=ws.get(this)||[];for(let x=0;x<g.length;x++){const E=g[x];E.onLoad&&E.onLoad(this)}ws.delete(this),u.manager.itemEnd(e)}function p(g){_(),l&&l(g),wd.remove(`image:${e}`);const x=ws.get(this)||[];for(let E=0;E<x.length;E++){const A=x[E];A.onError&&A.onError(g)}ws.delete(this),u.manager.itemError(e),u.manager.itemEnd(e)}function _(){h.removeEventListener("load",m,!1),h.removeEventListener("error",p,!1)}return h.addEventListener("load",m,!1),h.addEventListener("error",p,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(h.crossOrigin=this.crossOrigin),wd.add(`image:${e}`,h),u.manager.itemStart(e),h.src=e,h}}class dy extends Zh{constructor(e){super(e)}load(e,i,r,l){const u=new _n,d=new fy(this.manager);return d.setCrossOrigin(this.crossOrigin),d.setPath(this.path),d.load(e,function(h){u.image=h,u.needsUpdate=!0,i!==void 0&&i(u)},r,l),u}}class cv extends av{constructor(e=-1,i=1,r=1,l=-1,u=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=u,this.far=d,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,u,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=r-e,d=r+e,h=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,d=u+p*this.view.width,h-=_*this.view.offsetY,m=h-_*this.view.height}this.projectionMatrix.makeOrthographic(u,d,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class hy extends pi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const c_=new tn;class py{constructor(e,i,r=0,l=1/0){this.ray=new Wh(e,i),this.near=r,this.far=l,this.camera=null,this.layers=new qh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,i){this.ray.set(e,i)}setFromCamera(e,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):Re("Raycaster: Unsupported camera type: "+i.type)}setFromXRController(e){return c_.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(c_),this}intersectObject(e,i=!0,r=[]){return Dh(e,this,r,i),r.sort(f_),r}intersectObjects(e,i=!0,r=[]){for(let l=0,u=e.length;l<u;l++)Dh(e[l],this,r,i);return r.sort(f_),r}}function f_(o,e){return o.distance-e.distance}function Dh(o,e,i,r){let l=!0;if(o.layers.test(e.layers)&&o.raycast(e,i)===!1&&(l=!1),l===!0&&r===!0){const u=o.children;for(let d=0,h=u.length;d<h;d++)Dh(u[d],e,i,!0)}}function d_(o,e,i,r){const l=my(r);switch(i){case j_:return o*e;case Q_:return o*e/l.components*l.byteLength;case Ih:return o*e/l.components*l.byteLength;case Fs:return o*e*2/l.components*l.byteLength;case Bh:return o*e*2/l.components*l.byteLength;case K_:return o*e*3/l.components*l.byteLength;case _i:return o*e*4/l.components*l.byteLength;case Hh:return o*e*4/l.components*l.byteLength;case Bu:case Hu:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Gu:case Vu:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Qd:case $d:return Math.max(o,16)*Math.max(e,8)/4;case Kd:case Jd:return Math.max(o,8)*Math.max(e,8)/2;case th:case eh:case ih:case ah:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case nh:case rh:case sh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case oh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case lh:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case uh:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case ch:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case fh:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case dh:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case hh:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case ph:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case mh:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case gh:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case _h:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case vh:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case xh:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case Sh:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case Mh:case yh:case Eh:return Math.ceil(o/4)*Math.ceil(e/4)*16;case Th:case bh:return Math.ceil(o/4)*Math.ceil(e/4)*8;case Ah:case Rh:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function my(o){switch(o){case gi:case W_:return{byteLength:1,components:1};case Zo:case q_:case _a:return{byteLength:2,components:1};case Fh:case zh:return{byteLength:2,components:4};case Xi:case Ph:case zi:return{byteLength:4,components:1};case Y_:case Z_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Oh}}));typeof window<"u"&&(window.__THREE__?fe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Oh);function fv(){let o=null,e=!1,i=null,r=null;function l(u,d){i(u,d),r=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(r=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function gy(o){const e=new WeakMap;function i(h,m){const p=h.array,_=h.usage,g=p.byteLength,x=o.createBuffer();o.bindBuffer(m,x),o.bufferData(m,p,_),h.onUploadCallback();let E;if(p instanceof Float32Array)E=o.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)E=o.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?E=o.HALF_FLOAT:E=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)E=o.SHORT;else if(p instanceof Uint32Array)E=o.UNSIGNED_INT;else if(p instanceof Int32Array)E=o.INT;else if(p instanceof Int8Array)E=o.BYTE;else if(p instanceof Uint8Array)E=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)E=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:E,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:g}}function r(h,m,p){const _=m.array,g=m.updateRanges;if(o.bindBuffer(p,h),g.length===0)o.bufferSubData(p,0,_);else{g.sort((E,A)=>E.start-A.start);let x=0;for(let E=1;E<g.length;E++){const A=g[x],C=g[E];C.start<=A.start+A.count+1?A.count=Math.max(A.count,C.start+C.count-A.start):(++x,g[x]=C)}g.length=x+1;for(let E=0,A=g.length;E<A;E++){const C=g[E];o.bufferSubData(p,C.start*_.BYTES_PER_ELEMENT,_,C.start,C.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function u(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=e.get(h);m&&(o.deleteBuffer(m.buffer),e.delete(h))}function d(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const _=e.get(h);(!_||_.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=e.get(h);if(p===void 0)e.set(h,i(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,h,m),p.version=h.version}}return{get:l,remove:u,update:d}}var _y=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,vy=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,xy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Sy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,My=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,yy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ey=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ty=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,by=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Ay=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ry=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Cy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,wy=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Dy=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Uy=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ly=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Ny=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Oy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Py=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Fy=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,zy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Iy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,By=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Hy=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Gy=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Vy=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Xy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ky=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Wy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,qy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Yy="gl_FragColor = linearToOutputTexel( gl_FragColor );",Zy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,jy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Ky=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Qy=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Jy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$y=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,tE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,eE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,nE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,iE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,aE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,rE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,sE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,oE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,uE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,cE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,fE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,dE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,hE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,pE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,mE=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,gE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,_E=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,vE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,xE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,SE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ME=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,EE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,TE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,bE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,AE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,RE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,CE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,wE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,DE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,UE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,LE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,NE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,OE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,PE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,FE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,IE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,BE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,HE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,GE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,VE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,XE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,kE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,WE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,qE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,YE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ZE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,jE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,KE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,QE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,JE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,$E=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,tT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,eT=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,nT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,iT=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,aT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,rT=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,sT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,oT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,lT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,uT=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,cT=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,fT=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,dT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,hT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,pT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,mT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const gT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_T=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xT=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ST=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,MT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ET=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,TT=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,bT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,AT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,RT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,CT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,wT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,DT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,UT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,LT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,NT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,OT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,PT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,FT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,zT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,IT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,BT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,HT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,GT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,VT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,XT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,WT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,qT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,YT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ZT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,jT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ve={alphahash_fragment:_y,alphahash_pars_fragment:vy,alphamap_fragment:xy,alphamap_pars_fragment:Sy,alphatest_fragment:My,alphatest_pars_fragment:yy,aomap_fragment:Ey,aomap_pars_fragment:Ty,batching_pars_vertex:by,batching_vertex:Ay,begin_vertex:Ry,beginnormal_vertex:Cy,bsdfs:wy,iridescence_fragment:Dy,bumpmap_pars_fragment:Uy,clipping_planes_fragment:Ly,clipping_planes_pars_fragment:Ny,clipping_planes_pars_vertex:Oy,clipping_planes_vertex:Py,color_fragment:Fy,color_pars_fragment:zy,color_pars_vertex:Iy,color_vertex:By,common:Hy,cube_uv_reflection_fragment:Gy,defaultnormal_vertex:Vy,displacementmap_pars_vertex:Xy,displacementmap_vertex:ky,emissivemap_fragment:Wy,emissivemap_pars_fragment:qy,colorspace_fragment:Yy,colorspace_pars_fragment:Zy,envmap_fragment:jy,envmap_common_pars_fragment:Ky,envmap_pars_fragment:Qy,envmap_pars_vertex:Jy,envmap_physical_pars_fragment:uE,envmap_vertex:$y,fog_vertex:tE,fog_pars_vertex:eE,fog_fragment:nE,fog_pars_fragment:iE,gradientmap_pars_fragment:aE,lightmap_pars_fragment:rE,lights_lambert_fragment:sE,lights_lambert_pars_fragment:oE,lights_pars_begin:lE,lights_toon_fragment:cE,lights_toon_pars_fragment:fE,lights_phong_fragment:dE,lights_phong_pars_fragment:hE,lights_physical_fragment:pE,lights_physical_pars_fragment:mE,lights_fragment_begin:gE,lights_fragment_maps:_E,lights_fragment_end:vE,logdepthbuf_fragment:xE,logdepthbuf_pars_fragment:SE,logdepthbuf_pars_vertex:ME,logdepthbuf_vertex:yE,map_fragment:EE,map_pars_fragment:TE,map_particle_fragment:bE,map_particle_pars_fragment:AE,metalnessmap_fragment:RE,metalnessmap_pars_fragment:CE,morphinstance_vertex:wE,morphcolor_vertex:DE,morphnormal_vertex:UE,morphtarget_pars_vertex:LE,morphtarget_vertex:NE,normal_fragment_begin:OE,normal_fragment_maps:PE,normal_pars_fragment:FE,normal_pars_vertex:zE,normal_vertex:IE,normalmap_pars_fragment:BE,clearcoat_normal_fragment_begin:HE,clearcoat_normal_fragment_maps:GE,clearcoat_pars_fragment:VE,iridescence_pars_fragment:XE,opaque_fragment:kE,packing:WE,premultiplied_alpha_fragment:qE,project_vertex:YE,dithering_fragment:ZE,dithering_pars_fragment:jE,roughnessmap_fragment:KE,roughnessmap_pars_fragment:QE,shadowmap_pars_fragment:JE,shadowmap_pars_vertex:$E,shadowmap_vertex:tT,shadowmask_pars_fragment:eT,skinbase_vertex:nT,skinning_pars_vertex:iT,skinning_vertex:aT,skinnormal_vertex:rT,specularmap_fragment:sT,specularmap_pars_fragment:oT,tonemapping_fragment:lT,tonemapping_pars_fragment:uT,transmission_fragment:cT,transmission_pars_fragment:fT,uv_pars_fragment:dT,uv_pars_vertex:hT,uv_vertex:pT,worldpos_vertex:mT,background_vert:gT,background_frag:_T,backgroundCube_vert:vT,backgroundCube_frag:xT,cube_vert:ST,cube_frag:MT,depth_vert:yT,depth_frag:ET,distance_vert:TT,distance_frag:bT,equirect_vert:AT,equirect_frag:RT,linedashed_vert:CT,linedashed_frag:wT,meshbasic_vert:DT,meshbasic_frag:UT,meshlambert_vert:LT,meshlambert_frag:NT,meshmatcap_vert:OT,meshmatcap_frag:PT,meshnormal_vert:FT,meshnormal_frag:zT,meshphong_vert:IT,meshphong_frag:BT,meshphysical_vert:HT,meshphysical_frag:GT,meshtoon_vert:VT,meshtoon_frag:XT,points_vert:kT,points_frag:WT,shadow_vert:qT,shadow_frag:YT,sprite_vert:ZT,sprite_frag:jT},It={common:{diffuse:{value:new Pe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ge},alphaMap:{value:null},alphaMapTransform:{value:new ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ge}},envmap:{envMap:{value:null},envMapRotation:{value:new ge},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ge},normalScale:{value:new Ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Pe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ge},alphaTest:{value:0},uvTransform:{value:new ge}},sprite:{diffuse:{value:new Pe(16777215)},opacity:{value:1},center:{value:new Ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ge},alphaMap:{value:null},alphaMapTransform:{value:new ge},alphaTest:{value:0}}},Fi={basic:{uniforms:Pn([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.fog]),vertexShader:ve.meshbasic_vert,fragmentShader:ve.meshbasic_frag},lambert:{uniforms:Pn([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.fog,It.lights,{emissive:{value:new Pe(0)}}]),vertexShader:ve.meshlambert_vert,fragmentShader:ve.meshlambert_frag},phong:{uniforms:Pn([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.fog,It.lights,{emissive:{value:new Pe(0)},specular:{value:new Pe(1118481)},shininess:{value:30}}]),vertexShader:ve.meshphong_vert,fragmentShader:ve.meshphong_frag},standard:{uniforms:Pn([It.common,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.roughnessmap,It.metalnessmap,It.fog,It.lights,{emissive:{value:new Pe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ve.meshphysical_vert,fragmentShader:ve.meshphysical_frag},toon:{uniforms:Pn([It.common,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.gradientmap,It.fog,It.lights,{emissive:{value:new Pe(0)}}]),vertexShader:ve.meshtoon_vert,fragmentShader:ve.meshtoon_frag},matcap:{uniforms:Pn([It.common,It.bumpmap,It.normalmap,It.displacementmap,It.fog,{matcap:{value:null}}]),vertexShader:ve.meshmatcap_vert,fragmentShader:ve.meshmatcap_frag},points:{uniforms:Pn([It.points,It.fog]),vertexShader:ve.points_vert,fragmentShader:ve.points_frag},dashed:{uniforms:Pn([It.common,It.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ve.linedashed_vert,fragmentShader:ve.linedashed_frag},depth:{uniforms:Pn([It.common,It.displacementmap]),vertexShader:ve.depth_vert,fragmentShader:ve.depth_frag},normal:{uniforms:Pn([It.common,It.bumpmap,It.normalmap,It.displacementmap,{opacity:{value:1}}]),vertexShader:ve.meshnormal_vert,fragmentShader:ve.meshnormal_frag},sprite:{uniforms:Pn([It.sprite,It.fog]),vertexShader:ve.sprite_vert,fragmentShader:ve.sprite_frag},background:{uniforms:{uvTransform:{value:new ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ve.background_vert,fragmentShader:ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ge}},vertexShader:ve.backgroundCube_vert,fragmentShader:ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ve.cube_vert,fragmentShader:ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ve.equirect_vert,fragmentShader:ve.equirect_frag},distance:{uniforms:Pn([It.common,It.displacementmap,{referencePosition:{value:new tt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ve.distance_vert,fragmentShader:ve.distance_frag},shadow:{uniforms:Pn([It.lights,It.fog,{color:{value:new Pe(0)},opacity:{value:1}}]),vertexShader:ve.shadow_vert,fragmentShader:ve.shadow_frag}};Fi.physical={uniforms:Pn([Fi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ge},clearcoatNormalScale:{value:new Ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ge},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ge},sheen:{value:0},sheenColor:{value:new Pe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ge},transmissionSamplerSize:{value:new Ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ge},attenuationDistance:{value:0},attenuationColor:{value:new Pe(0)},specularColor:{value:new Pe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ge},anisotropyVector:{value:new Ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ge}}]),vertexShader:ve.meshphysical_vert,fragmentShader:ve.meshphysical_frag};const Fu={r:0,b:0,g:0},Tr=new xa,KT=new tn;function QT(o,e,i,r,l,u,d){const h=new Pe(0);let m=u===!0?0:1,p,_,g=null,x=0,E=null;function A(N){let O=N.isScene===!0?N.background:null;return O&&O.isTexture&&(O=(N.backgroundBlurriness>0?i:e).get(O)),O}function C(N){let O=!1;const I=A(N);I===null?S(h,m):I&&I.isColor&&(S(I,1),O=!0);const H=o.xr.getEnvironmentBlendMode();H==="additive"?r.buffers.color.setClear(0,0,0,1,d):H==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,d),(o.autoClear||O)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function M(N,O){const I=A(O);I&&(I.isCubeTexture||I.mapping===qu)?(_===void 0&&(_=new Fn(new il(1,1,1),new ki({name:"BackgroundCubeMaterial",uniforms:Is(Fi.backgroundCube.uniforms),vertexShader:Fi.backgroundCube.vertexShader,fragmentShader:Fi.backgroundCube.fragmentShader,side:Xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(H,P,K){this.matrixWorld.copyPosition(K.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(_)),Tr.copy(O.backgroundRotation),Tr.x*=-1,Tr.y*=-1,Tr.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(Tr.y*=-1,Tr.z*=-1),_.material.uniforms.envMap.value=I,_.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=O.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=O.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(KT.makeRotationFromEuler(Tr)),_.material.toneMapped=Ce.getTransfer(I.colorSpace)!==He,(g!==I||x!==I.version||E!==o.toneMapping)&&(_.material.needsUpdate=!0,g=I,x=I.version,E=o.toneMapping),_.layers.enableAll(),N.unshift(_,_.geometry,_.material,0,0,null)):I&&I.isTexture&&(p===void 0&&(p=new Fn(new $a(2,2),new ki({name:"BackgroundMaterial",uniforms:Is(Fi.background.uniforms),vertexShader:Fi.background.vertexShader,fragmentShader:Fi.background.fragmentShader,side:er,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=I,p.material.uniforms.backgroundIntensity.value=O.backgroundIntensity,p.material.toneMapped=Ce.getTransfer(I.colorSpace)!==He,I.matrixAutoUpdate===!0&&I.updateMatrix(),p.material.uniforms.uvTransform.value.copy(I.matrix),(g!==I||x!==I.version||E!==o.toneMapping)&&(p.material.needsUpdate=!0,g=I,x=I.version,E=o.toneMapping),p.layers.enableAll(),N.unshift(p,p.geometry,p.material,0,0,null))}function S(N,O){N.getRGB(Fu,iv(o)),r.buffers.color.setClear(Fu.r,Fu.g,Fu.b,O,d)}function F(){_!==void 0&&(_.geometry.dispose(),_.material.dispose(),_=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return h},setClearColor:function(N,O=1){h.set(N),m=O,S(h,m)},getClearAlpha:function(){return m},setClearAlpha:function(N){m=N,S(h,m)},render:C,addToRenderList:M,dispose:F}}function JT(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=x(null);let u=l,d=!1;function h(D,X,rt,at,ft){let ut=!1;const L=g(at,rt,X);u!==L&&(u=L,p(u.object)),ut=E(D,at,rt,ft),ut&&A(D,at,rt,ft),ft!==null&&e.update(ft,o.ELEMENT_ARRAY_BUFFER),(ut||d)&&(d=!1,O(D,X,rt,at),ft!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(ft).buffer))}function m(){return o.createVertexArray()}function p(D){return o.bindVertexArray(D)}function _(D){return o.deleteVertexArray(D)}function g(D,X,rt){const at=rt.wireframe===!0;let ft=r[D.id];ft===void 0&&(ft={},r[D.id]=ft);let ut=ft[X.id];ut===void 0&&(ut={},ft[X.id]=ut);let L=ut[at];return L===void 0&&(L=x(m()),ut[at]=L),L}function x(D){const X=[],rt=[],at=[];for(let ft=0;ft<i;ft++)X[ft]=0,rt[ft]=0,at[ft]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:X,enabledAttributes:rt,attributeDivisors:at,object:D,attributes:{},index:null}}function E(D,X,rt,at){const ft=u.attributes,ut=X.attributes;let L=0;const G=rt.getAttributes();for(const it in G)if(G[it].location>=0){const St=ft[it];let U=ut[it];if(U===void 0&&(it==="instanceMatrix"&&D.instanceMatrix&&(U=D.instanceMatrix),it==="instanceColor"&&D.instanceColor&&(U=D.instanceColor)),St===void 0||St.attribute!==U||U&&St.data!==U.data)return!0;L++}return u.attributesNum!==L||u.index!==at}function A(D,X,rt,at){const ft={},ut=X.attributes;let L=0;const G=rt.getAttributes();for(const it in G)if(G[it].location>=0){let St=ut[it];St===void 0&&(it==="instanceMatrix"&&D.instanceMatrix&&(St=D.instanceMatrix),it==="instanceColor"&&D.instanceColor&&(St=D.instanceColor));const U={};U.attribute=St,St&&St.data&&(U.data=St.data),ft[it]=U,L++}u.attributes=ft,u.attributesNum=L,u.index=at}function C(){const D=u.newAttributes;for(let X=0,rt=D.length;X<rt;X++)D[X]=0}function M(D){S(D,0)}function S(D,X){const rt=u.newAttributes,at=u.enabledAttributes,ft=u.attributeDivisors;rt[D]=1,at[D]===0&&(o.enableVertexAttribArray(D),at[D]=1),ft[D]!==X&&(o.vertexAttribDivisor(D,X),ft[D]=X)}function F(){const D=u.newAttributes,X=u.enabledAttributes;for(let rt=0,at=X.length;rt<at;rt++)X[rt]!==D[rt]&&(o.disableVertexAttribArray(rt),X[rt]=0)}function N(D,X,rt,at,ft,ut,L){L===!0?o.vertexAttribIPointer(D,X,rt,ft,ut):o.vertexAttribPointer(D,X,rt,at,ft,ut)}function O(D,X,rt,at){C();const ft=at.attributes,ut=rt.getAttributes(),L=X.defaultAttributeValues;for(const G in ut){const it=ut[G];if(it.location>=0){let xt=ft[G];if(xt===void 0&&(G==="instanceMatrix"&&D.instanceMatrix&&(xt=D.instanceMatrix),G==="instanceColor"&&D.instanceColor&&(xt=D.instanceColor)),xt!==void 0){const St=xt.normalized,U=xt.itemSize,j=e.get(xt);if(j===void 0)continue;const mt=j.buffer,Rt=j.type,Gt=j.bytesPerElement,$=Rt===o.INT||Rt===o.UNSIGNED_INT||xt.gpuType===Ph;if(xt.isInterleavedBufferAttribute){const dt=xt.data,Dt=dt.stride,kt=xt.offset;if(dt.isInstancedInterleavedBuffer){for(let Vt=0;Vt<it.locationSize;Vt++)S(it.location+Vt,dt.meshPerAttribute);D.isInstancedMesh!==!0&&at._maxInstanceCount===void 0&&(at._maxInstanceCount=dt.meshPerAttribute*dt.count)}else for(let Vt=0;Vt<it.locationSize;Vt++)M(it.location+Vt);o.bindBuffer(o.ARRAY_BUFFER,mt);for(let Vt=0;Vt<it.locationSize;Vt++)N(it.location+Vt,U/it.locationSize,Rt,St,Dt*Gt,(kt+U/it.locationSize*Vt)*Gt,$)}else{if(xt.isInstancedBufferAttribute){for(let dt=0;dt<it.locationSize;dt++)S(it.location+dt,xt.meshPerAttribute);D.isInstancedMesh!==!0&&at._maxInstanceCount===void 0&&(at._maxInstanceCount=xt.meshPerAttribute*xt.count)}else for(let dt=0;dt<it.locationSize;dt++)M(it.location+dt);o.bindBuffer(o.ARRAY_BUFFER,mt);for(let dt=0;dt<it.locationSize;dt++)N(it.location+dt,U/it.locationSize,Rt,St,U*Gt,U/it.locationSize*dt*Gt,$)}}else if(L!==void 0){const St=L[G];if(St!==void 0)switch(St.length){case 2:o.vertexAttrib2fv(it.location,St);break;case 3:o.vertexAttrib3fv(it.location,St);break;case 4:o.vertexAttrib4fv(it.location,St);break;default:o.vertexAttrib1fv(it.location,St)}}}}F()}function I(){K();for(const D in r){const X=r[D];for(const rt in X){const at=X[rt];for(const ft in at)_(at[ft].object),delete at[ft];delete X[rt]}delete r[D]}}function H(D){if(r[D.id]===void 0)return;const X=r[D.id];for(const rt in X){const at=X[rt];for(const ft in at)_(at[ft].object),delete at[ft];delete X[rt]}delete r[D.id]}function P(D){for(const X in r){const rt=r[X];if(rt[D.id]===void 0)continue;const at=rt[D.id];for(const ft in at)_(at[ft].object),delete at[ft];delete rt[D.id]}}function K(){R(),d=!0,u!==l&&(u=l,p(u.object))}function R(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:K,resetDefaultState:R,dispose:I,releaseStatesOfGeometry:H,releaseStatesOfProgram:P,initAttributes:C,enableAttribute:M,disableUnusedAttributes:F}}function $T(o,e,i){let r;function l(p){r=p}function u(p,_){o.drawArrays(r,p,_),i.update(_,r,1)}function d(p,_,g){g!==0&&(o.drawArraysInstanced(r,p,_,g),i.update(_,r,g))}function h(p,_,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,_,0,g);let E=0;for(let A=0;A<g;A++)E+=_[A];i.update(E,r,1)}function m(p,_,g,x){if(g===0)return;const E=e.get("WEBGL_multi_draw");if(E===null)for(let A=0;A<p.length;A++)d(p[A],_[A],x[A]);else{E.multiDrawArraysInstancedWEBGL(r,p,0,_,0,x,0,g);let A=0;for(let C=0;C<g;C++)A+=_[C]*x[C];i.update(A,r,1)}}this.setMode=l,this.render=u,this.renderInstances=d,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function tb(o,e,i,r){let l;function u(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(P){return!(P!==_i&&r.convert(P)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(P){const K=P===_a&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==gi&&r.convert(P)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==zi&&!K)}function m(P){if(P==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const _=m(p);_!==p&&(fe("WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const g=i.logarithmicDepthBuffer===!0,x=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),E=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),A=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=o.getParameter(o.MAX_TEXTURE_SIZE),M=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),S=o.getParameter(o.MAX_VERTEX_ATTRIBS),F=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),N=o.getParameter(o.MAX_VARYING_VECTORS),O=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),I=o.getParameter(o.MAX_SAMPLES),H=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:d,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:g,reversedDepthBuffer:x,maxTextures:E,maxVertexTextures:A,maxTextureSize:C,maxCubemapSize:M,maxAttributes:S,maxVertexUniforms:F,maxVaryings:N,maxFragmentUniforms:O,maxSamples:I,samples:H}}function eb(o){const e=this;let i=null,r=0,l=!1,u=!1;const d=new Rr,h=new ge,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(g,x){const E=g.length!==0||x||r!==0||l;return l=x,r=g.length,E},this.beginShadows=function(){u=!0,_(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(g,x){i=_(g,x,0)},this.setState=function(g,x,E){const A=g.clippingPlanes,C=g.clipIntersection,M=g.clipShadows,S=o.get(g);if(!l||A===null||A.length===0||u&&!M)u?_(null):p();else{const F=u?0:r,N=F*4;let O=S.clippingState||null;m.value=O,O=_(A,x,N,E);for(let I=0;I!==N;++I)O[I]=i[I];S.clippingState=O,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=F}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function _(g,x,E,A){const C=g!==null?g.length:0;let M=null;if(C!==0){if(M=m.value,A!==!0||M===null){const S=E+C*4,F=x.matrixWorldInverse;h.getNormalMatrix(F),(M===null||M.length<S)&&(M=new Float32Array(S));for(let N=0,O=E;N!==C;++N,O+=4)d.copy(g[N]).applyMatrix4(F,h),d.normal.toArray(M,O),M[O+3]=d.constant}m.value=M,m.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,M}}function nb(o){let e=new WeakMap;function i(d,h){return h===qd?d.mapping=Nr:h===Yd&&(d.mapping=Ps),d}function r(d){if(d&&d.isTexture){const h=d.mapping;if(h===qd||h===Yd)if(e.has(d)){const m=e.get(d).texture;return i(m,d.mapping)}else{const m=d.image;if(m&&m.height>0){const p=new sv(m.height);return p.fromEquirectangularTexture(o,d),e.set(d,p),d.addEventListener("dispose",l),i(p.texture,d.mapping)}else return null}}return d}function l(d){const h=d.target;h.removeEventListener("dispose",l);const m=e.get(h);m!==void 0&&(e.delete(h),m.dispose())}function u(){e=new WeakMap}return{get:r,dispose:u}}const tr=4,h_=[.125,.215,.35,.446,.526,.582],wr=20,ib=256,Go=new cv,p_=new Pe;let Dd=null,Ud=0,Ld=0,Nd=!1;const ab=new tt;class m_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,r=.1,l=100,u={}){const{size:d=256,position:h=ab}=u;Dd=this._renderer.getRenderTarget(),Ud=this._renderer.getActiveCubeFace(),Ld=this._renderer.getActiveMipmapLevel(),Nd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,l,m,h),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=v_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=__(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Dd,Ud,Ld),this._renderer.xr.enabled=Nd,e.scissorTest=!1,Ds(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Nr||e.mapping===Ps?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Dd=this._renderer.getRenderTarget(),Ud=this._renderer.getActiveCubeFace(),Ld=this._renderer.getActiveMipmapLevel(),Nd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:$e,minFilter:$e,generateMipmaps:!1,type:_a,format:_i,colorSpace:zs,depthBuffer:!1},l=g_(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=g_(e,i,r);const{_lodMax:u}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=rb(u)),this._blurMaterial=ob(u,e,i),this._ggxMaterial=sb(u,e,i)}return l}_compileMaterial(e){const i=new Fn(new wi,e);this._renderer.compile(i,Go)}_sceneToCubeUV(e,i,r,l,u){const m=new pi(90,1,i,r),p=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],g=this._renderer,x=g.autoClear,E=g.toneMapping;g.getClearColor(p_),g.toneMapping=Bi,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(l),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Fn(new il,new Ls({name:"PMREM.Background",side:Xn,depthWrite:!1,depthTest:!1})));const C=this._backgroundBox,M=C.material;let S=!1;const F=e.background;F?F.isColor&&(M.color.copy(F),e.background=null,S=!0):(M.color.copy(p_),S=!0);for(let N=0;N<6;N++){const O=N%3;O===0?(m.up.set(0,p[N],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x+_[N],u.y,u.z)):O===1?(m.up.set(0,0,p[N]),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y+_[N],u.z)):(m.up.set(0,p[N],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y,u.z+_[N]));const I=this._cubeSize;Ds(l,O*I,N>2?I:0,I,I),g.setRenderTarget(l),S&&g.render(C,m),g.render(e,m)}g.toneMapping=E,g.autoClear=x,e.background=F}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===Nr||e.mapping===Ps;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=v_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=__());const u=l?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=u;const h=u.uniforms;h.envMap.value=e;const m=this._cubeSize;Ds(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(d,Go)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let u=1;u<l;u++)this._applyGGXFilter(e,u-1,u);i.autoClear=r}_applyGGXFilter(e,i,r){const l=this._renderer,u=this._pingPongRenderTarget,d=this._ggxMaterial,h=this._lodMeshes[r];h.material=d;const m=d.uniforms,p=r/(this._lodMeshes.length-1),_=i/(this._lodMeshes.length-1),g=Math.sqrt(p*p-_*_),x=0+p*1.25,E=g*x,{_lodMax:A}=this,C=this._sizeLods[r],M=3*C*(r>A-tr?r-A+tr:0),S=4*(this._cubeSize-C);m.envMap.value=e.texture,m.roughness.value=E,m.mipInt.value=A-i,Ds(u,M,S,3*C,2*C),l.setRenderTarget(u),l.render(h,Go),m.envMap.value=u.texture,m.roughness.value=0,m.mipInt.value=A-r,Ds(e,M,S,3*C,2*C),l.setRenderTarget(e),l.render(h,Go)}_blur(e,i,r,l,u){const d=this._pingPongRenderTarget;this._halfBlur(e,d,i,r,l,"latitudinal",u),this._halfBlur(d,e,r,r,l,"longitudinal",u)}_halfBlur(e,i,r,l,u,d,h){const m=this._renderer,p=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&Re("blur direction must be either latitudinal or longitudinal!");const _=3,g=this._lodMeshes[l];g.material=p;const x=p.uniforms,E=this._sizeLods[r]-1,A=isFinite(u)?Math.PI/(2*E):2*Math.PI/(2*wr-1),C=u/A,M=isFinite(u)?1+Math.floor(_*C):wr;M>wr&&fe(`sigmaRadians, ${u}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${wr}`);const S=[];let F=0;for(let P=0;P<wr;++P){const K=P/C,R=Math.exp(-K*K/2);S.push(R),P===0?F+=R:P<M&&(F+=2*R)}for(let P=0;P<S.length;P++)S[P]=S[P]/F;x.envMap.value=e.texture,x.samples.value=M,x.weights.value=S,x.latitudinal.value=d==="latitudinal",h&&(x.poleAxis.value=h);const{_lodMax:N}=this;x.dTheta.value=A,x.mipInt.value=N-r;const O=this._sizeLods[l],I=3*O*(l>N-tr?l-N+tr:0),H=4*(this._cubeSize-O);Ds(i,I,H,3*O,2*O),m.setRenderTarget(i),m.render(g,Go)}}function rb(o){const e=[],i=[],r=[];let l=o;const u=o-tr+1+h_.length;for(let d=0;d<u;d++){const h=Math.pow(2,l);e.push(h);let m=1/h;d>o-tr?m=h_[d-o+tr-1]:d===0&&(m=0),i.push(m);const p=1/(h-2),_=-p,g=1+p,x=[_,_,g,_,g,g,_,_,g,g,_,g],E=6,A=6,C=3,M=2,S=1,F=new Float32Array(C*A*E),N=new Float32Array(M*A*E),O=new Float32Array(S*A*E);for(let H=0;H<E;H++){const P=H%3*2/3-1,K=H>2?0:-1,R=[P,K,0,P+2/3,K,0,P+2/3,K+1,0,P,K,0,P+2/3,K+1,0,P,K+1,0];F.set(R,C*A*H),N.set(x,M*A*H);const D=[H,H,H,H,H,H];O.set(D,S*A*H)}const I=new wi;I.setAttribute("position",new Gi(F,C)),I.setAttribute("uv",new Gi(N,M)),I.setAttribute("faceIndex",new Gi(O,S)),r.push(new Fn(I,null)),l>tr&&l--}return{lodMeshes:r,sizeLods:e,sigmas:i}}function g_(o,e,i){const r=new Hi(o,e,i);return r.texture.mapping=qu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Ds(o,e,i,r,l){o.viewport.set(e,i,r,l),o.scissor.set(e,i,r,l)}function sb(o,e,i){return new ki({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:ib,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Zu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ma,depthTest:!1,depthWrite:!1})}function ob(o,e,i){const r=new Float32Array(wr),l=new tt(0,1,0);return new ki({name:"SphericalGaussianBlur",defines:{n:wr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Zu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ma,depthTest:!1,depthWrite:!1})}function __(){return new ki({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Zu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ma,depthTest:!1,depthWrite:!1})}function v_(){return new ki({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Zu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ma,depthTest:!1,depthWrite:!1})}function Zu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function lb(o){let e=new WeakMap,i=null;function r(h){if(h&&h.isTexture){const m=h.mapping,p=m===qd||m===Yd,_=m===Nr||m===Ps;if(p||_){let g=e.get(h);const x=g!==void 0?g.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==x)return i===null&&(i=new m_(o)),g=p?i.fromEquirectangular(h,g):i.fromCubemap(h,g),g.texture.pmremVersion=h.pmremVersion,e.set(h,g),g.texture;if(g!==void 0)return g.texture;{const E=h.image;return p&&E&&E.height>0||_&&E&&l(E)?(i===null&&(i=new m_(o)),g=p?i.fromEquirectangular(h):i.fromCubemap(h),g.texture.pmremVersion=h.pmremVersion,e.set(h,g),h.addEventListener("dispose",u),g.texture):null}}}return h}function l(h){let m=0;const p=6;for(let _=0;_<p;_++)h[_]!==void 0&&m++;return m===p}function u(h){const m=h.target;m.removeEventListener("dispose",u);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function d(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function ub(o){const e={};function i(r){if(e[r]!==void 0)return e[r];const l=o.getExtension(r);return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&Qo("WebGLRenderer: "+r+" extension not supported."),l}}}function cb(o,e,i,r){const l={},u=new WeakMap;function d(g){const x=g.target;x.index!==null&&e.remove(x.index);for(const A in x.attributes)e.remove(x.attributes[A]);x.removeEventListener("dispose",d),delete l[x.id];const E=u.get(x);E&&(e.remove(E),u.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function h(g,x){return l[x.id]===!0||(x.addEventListener("dispose",d),l[x.id]=!0,i.memory.geometries++),x}function m(g){const x=g.attributes;for(const E in x)e.update(x[E],o.ARRAY_BUFFER)}function p(g){const x=[],E=g.index,A=g.attributes.position;let C=0;if(E!==null){const F=E.array;C=E.version;for(let N=0,O=F.length;N<O;N+=3){const I=F[N+0],H=F[N+1],P=F[N+2];x.push(I,H,H,P,P,I)}}else if(A!==void 0){const F=A.array;C=A.version;for(let N=0,O=F.length/3-1;N<O;N+=3){const I=N+0,H=N+1,P=N+2;x.push(I,H,H,P,P,I)}}else return;const M=new(J_(x)?nv:ev)(x,1);M.version=C;const S=u.get(g);S&&e.remove(S),u.set(g,M)}function _(g){const x=u.get(g);if(x){const E=g.index;E!==null&&x.version<E.version&&p(g)}else p(g);return u.get(g)}return{get:h,update:m,getWireframeAttribute:_}}function fb(o,e,i){let r;function l(x){r=x}let u,d;function h(x){u=x.type,d=x.bytesPerElement}function m(x,E){o.drawElements(r,E,u,x*d),i.update(E,r,1)}function p(x,E,A){A!==0&&(o.drawElementsInstanced(r,E,u,x*d,A),i.update(E,r,A))}function _(x,E,A){if(A===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,E,0,u,x,0,A);let M=0;for(let S=0;S<A;S++)M+=E[S];i.update(M,r,1)}function g(x,E,A,C){if(A===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let S=0;S<x.length;S++)p(x[S]/d,E[S],C[S]);else{M.multiDrawElementsInstancedWEBGL(r,E,0,u,x,0,C,0,A);let S=0;for(let F=0;F<A;F++)S+=E[F]*C[F];i.update(S,r,1)}}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=_,this.renderMultiDrawInstances=g}function db(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,d,h){switch(i.calls++,d){case o.TRIANGLES:i.triangles+=h*(u/3);break;case o.LINES:i.lines+=h*(u/2);break;case o.LINE_STRIP:i.lines+=h*(u-1);break;case o.LINE_LOOP:i.lines+=h*u;break;case o.POINTS:i.points+=h*u;break;default:Re("WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function hb(o,e,i){const r=new WeakMap,l=new an;function u(d,h,m){const p=d.morphTargetInfluences,_=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=_!==void 0?_.length:0;let x=r.get(h);if(x===void 0||x.count!==g){let D=function(){K.dispose(),r.delete(h),h.removeEventListener("dispose",D)};var E=D;x!==void 0&&x.texture.dispose();const A=h.morphAttributes.position!==void 0,C=h.morphAttributes.normal!==void 0,M=h.morphAttributes.color!==void 0,S=h.morphAttributes.position||[],F=h.morphAttributes.normal||[],N=h.morphAttributes.color||[];let O=0;A===!0&&(O=1),C===!0&&(O=2),M===!0&&(O=3);let I=h.attributes.position.count*O,H=1;I>e.maxTextureSize&&(H=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const P=new Float32Array(I*H*4*g),K=new $_(P,I,H,g);K.type=zi,K.needsUpdate=!0;const R=O*4;for(let X=0;X<g;X++){const rt=S[X],at=F[X],ft=N[X],ut=I*H*4*X;for(let L=0;L<rt.count;L++){const G=L*R;A===!0&&(l.fromBufferAttribute(rt,L),P[ut+G+0]=l.x,P[ut+G+1]=l.y,P[ut+G+2]=l.z,P[ut+G+3]=0),C===!0&&(l.fromBufferAttribute(at,L),P[ut+G+4]=l.x,P[ut+G+5]=l.y,P[ut+G+6]=l.z,P[ut+G+7]=0),M===!0&&(l.fromBufferAttribute(ft,L),P[ut+G+8]=l.x,P[ut+G+9]=l.y,P[ut+G+10]=l.z,P[ut+G+11]=ft.itemSize===4?l.w:1)}}x={count:g,texture:K,size:new Ge(I,H)},r.set(h,x),h.addEventListener("dispose",D)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",d.morphTexture,i);else{let A=0;for(let M=0;M<p.length;M++)A+=p[M];const C=h.morphTargetsRelative?1:1-A;m.getUniforms().setValue(o,"morphTargetBaseInfluence",C),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",x.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",x.size)}return{update:u}}function pb(o,e,i,r){let l=new WeakMap;function u(m){const p=r.render.frame,_=m.geometry,g=e.get(m,_);if(l.get(g)!==p&&(e.update(g),l.set(g,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const x=m.skeleton;l.get(x)!==p&&(x.update(),l.set(x,p))}return g}function d(){l=new WeakMap}function h(m){const p=m.target;p.removeEventListener("dispose",h),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:u,dispose:d}}const mb={[z_]:"LINEAR_TONE_MAPPING",[I_]:"REINHARD_TONE_MAPPING",[B_]:"CINEON_TONE_MAPPING",[H_]:"ACES_FILMIC_TONE_MAPPING",[V_]:"AGX_TONE_MAPPING",[X_]:"NEUTRAL_TONE_MAPPING",[G_]:"CUSTOM_TONE_MAPPING"};function gb(o,e,i,r,l){const u=new Hi(e,i,{type:o,depthBuffer:r,stencilBuffer:l}),d=new Hi(e,i,{type:_a,depthBuffer:!1,stencilBuffer:!1}),h=new wi;h.setAttribute("position",new Vi([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Vi([0,2,0,0,2,0],2));const m=new sy({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),p=new Fn(h,m),_=new cv(-1,1,1,-1,0,1);let g=null,x=null,E=!1,A,C=null,M=[],S=!1;this.setSize=function(F,N){u.setSize(F,N),d.setSize(F,N);for(let O=0;O<M.length;O++){const I=M[O];I.setSize&&I.setSize(F,N)}},this.setEffects=function(F){M=F,S=M.length>0&&M[0].isRenderPass===!0;const N=u.width,O=u.height;for(let I=0;I<M.length;I++){const H=M[I];H.setSize&&H.setSize(N,O)}},this.begin=function(F,N){if(E||F.toneMapping===Bi&&M.length===0)return!1;if(C=N,N!==null){const O=N.width,I=N.height;(u.width!==O||u.height!==I)&&this.setSize(O,I)}return S===!1&&F.setRenderTarget(u),A=F.toneMapping,F.toneMapping=Bi,!0},this.hasRenderPass=function(){return S},this.end=function(F,N){F.toneMapping=A,E=!0;let O=u,I=d;for(let H=0;H<M.length;H++){const P=M[H];if(P.enabled!==!1&&(P.render(F,I,O,N),P.needsSwap!==!1)){const K=O;O=I,I=K}}if(g!==F.outputColorSpace||x!==F.toneMapping){g=F.outputColorSpace,x=F.toneMapping,m.defines={},Ce.getTransfer(g)===He&&(m.defines.SRGB_TRANSFER="");const H=mb[x];H&&(m.defines[H]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=O.texture,F.setRenderTarget(C),F.render(p,_),C=null,E=!1},this.isCompositing=function(){return E},this.dispose=function(){u.dispose(),d.dispose(),h.dispose(),m.dispose()}}const dv=new _n,Uh=new $o(1,1),hv=new $_,pv=new OM,mv=new rv,x_=[],S_=[],M_=new Float32Array(16),y_=new Float32Array(9),E_=new Float32Array(4);function Gs(o,e,i){const r=o[0];if(r<=0||r>0)return o;const l=e*i;let u=x_[l];if(u===void 0&&(u=new Float32Array(l),x_[l]=u),e!==0){r.toArray(u,0);for(let d=1,h=0;d!==e;++d)h+=i,o[d].toArray(u,h)}return u}function hn(o,e){if(o.length!==e.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==e[i])return!1;return!0}function pn(o,e){for(let i=0,r=e.length;i<r;i++)o[i]=e[i]}function ju(o,e){let i=S_[e];i===void 0&&(i=new Int32Array(e),S_[e]=i);for(let r=0;r!==e;++r)i[r]=o.allocateTextureUnit();return i}function _b(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function vb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(hn(i,e))return;o.uniform2fv(this.addr,e),pn(i,e)}}function xb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(hn(i,e))return;o.uniform3fv(this.addr,e),pn(i,e)}}function Sb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(hn(i,e))return;o.uniform4fv(this.addr,e),pn(i,e)}}function Mb(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(hn(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),pn(i,e)}else{if(hn(i,r))return;E_.set(r),o.uniformMatrix2fv(this.addr,!1,E_),pn(i,r)}}function yb(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(hn(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),pn(i,e)}else{if(hn(i,r))return;y_.set(r),o.uniformMatrix3fv(this.addr,!1,y_),pn(i,r)}}function Eb(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(hn(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),pn(i,e)}else{if(hn(i,r))return;M_.set(r),o.uniformMatrix4fv(this.addr,!1,M_),pn(i,r)}}function Tb(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function bb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(hn(i,e))return;o.uniform2iv(this.addr,e),pn(i,e)}}function Ab(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(hn(i,e))return;o.uniform3iv(this.addr,e),pn(i,e)}}function Rb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(hn(i,e))return;o.uniform4iv(this.addr,e),pn(i,e)}}function Cb(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function wb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(hn(i,e))return;o.uniform2uiv(this.addr,e),pn(i,e)}}function Db(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(hn(i,e))return;o.uniform3uiv(this.addr,e),pn(i,e)}}function Ub(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(hn(i,e))return;o.uniform4uiv(this.addr,e),pn(i,e)}}function Lb(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);let u;this.type===o.SAMPLER_2D_SHADOW?(Uh.compareFunction=i.isReversedDepthBuffer()?Vh:Gh,u=Uh):u=dv,i.setTexture2D(e||u,l)}function Nb(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||pv,l)}function Ob(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||mv,l)}function Pb(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||hv,l)}function Fb(o){switch(o){case 5126:return _b;case 35664:return vb;case 35665:return xb;case 35666:return Sb;case 35674:return Mb;case 35675:return yb;case 35676:return Eb;case 5124:case 35670:return Tb;case 35667:case 35671:return bb;case 35668:case 35672:return Ab;case 35669:case 35673:return Rb;case 5125:return Cb;case 36294:return wb;case 36295:return Db;case 36296:return Ub;case 35678:case 36198:case 36298:case 36306:case 35682:return Lb;case 35679:case 36299:case 36307:return Nb;case 35680:case 36300:case 36308:case 36293:return Ob;case 36289:case 36303:case 36311:case 36292:return Pb}}function zb(o,e){o.uniform1fv(this.addr,e)}function Ib(o,e){const i=Gs(e,this.size,2);o.uniform2fv(this.addr,i)}function Bb(o,e){const i=Gs(e,this.size,3);o.uniform3fv(this.addr,i)}function Hb(o,e){const i=Gs(e,this.size,4);o.uniform4fv(this.addr,i)}function Gb(o,e){const i=Gs(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function Vb(o,e){const i=Gs(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function Xb(o,e){const i=Gs(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function kb(o,e){o.uniform1iv(this.addr,e)}function Wb(o,e){o.uniform2iv(this.addr,e)}function qb(o,e){o.uniform3iv(this.addr,e)}function Yb(o,e){o.uniform4iv(this.addr,e)}function Zb(o,e){o.uniform1uiv(this.addr,e)}function jb(o,e){o.uniform2uiv(this.addr,e)}function Kb(o,e){o.uniform3uiv(this.addr,e)}function Qb(o,e){o.uniform4uiv(this.addr,e)}function Jb(o,e,i){const r=this.cache,l=e.length,u=ju(i,l);hn(r,u)||(o.uniform1iv(this.addr,u),pn(r,u));let d;this.type===o.SAMPLER_2D_SHADOW?d=Uh:d=dv;for(let h=0;h!==l;++h)i.setTexture2D(e[h]||d,u[h])}function $b(o,e,i){const r=this.cache,l=e.length,u=ju(i,l);hn(r,u)||(o.uniform1iv(this.addr,u),pn(r,u));for(let d=0;d!==l;++d)i.setTexture3D(e[d]||pv,u[d])}function tA(o,e,i){const r=this.cache,l=e.length,u=ju(i,l);hn(r,u)||(o.uniform1iv(this.addr,u),pn(r,u));for(let d=0;d!==l;++d)i.setTextureCube(e[d]||mv,u[d])}function eA(o,e,i){const r=this.cache,l=e.length,u=ju(i,l);hn(r,u)||(o.uniform1iv(this.addr,u),pn(r,u));for(let d=0;d!==l;++d)i.setTexture2DArray(e[d]||hv,u[d])}function nA(o){switch(o){case 5126:return zb;case 35664:return Ib;case 35665:return Bb;case 35666:return Hb;case 35674:return Gb;case 35675:return Vb;case 35676:return Xb;case 5124:case 35670:return kb;case 35667:case 35671:return Wb;case 35668:case 35672:return qb;case 35669:case 35673:return Yb;case 5125:return Zb;case 36294:return jb;case 36295:return Kb;case 36296:return Qb;case 35678:case 36198:case 36298:case 36306:case 35682:return Jb;case 35679:case 36299:case 36307:return $b;case 35680:case 36300:case 36308:case 36293:return tA;case 36289:case 36303:case 36311:case 36292:return eA}}class iA{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=Fb(i.type)}}class aA{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=nA(i.type)}}class rA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let u=0,d=l.length;u!==d;++u){const h=l[u];h.setValue(e,i[h.id],r)}}}const Od=/(\w+)(\])?(\[|\.)?/g;function T_(o,e){o.seq.push(e),o.map[e.id]=e}function sA(o,e,i){const r=o.name,l=r.length;for(Od.lastIndex=0;;){const u=Od.exec(r),d=Od.lastIndex;let h=u[1];const m=u[2]==="]",p=u[3];if(m&&(h=h|0),p===void 0||p==="["&&d+2===l){T_(i,p===void 0?new iA(h,o,e):new aA(h,o,e));break}else{let g=i.map[h];g===void 0&&(g=new rA(h),T_(i,g)),i=g}}}class Xu{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let d=0;d<r;++d){const h=e.getActiveUniform(i,d),m=e.getUniformLocation(i,h.name);sA(h,m,this)}const l=[],u=[];for(const d of this.seq)d.type===e.SAMPLER_2D_SHADOW||d.type===e.SAMPLER_CUBE_SHADOW||d.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(d):u.push(d);l.length>0&&(this.seq=l.concat(u))}setValue(e,i,r,l){const u=this.map[i];u!==void 0&&u.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let u=0,d=i.length;u!==d;++u){const h=i[u],m=r[h.id];m.needsUpdate!==!1&&h.setValue(e,m.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,u=e.length;l!==u;++l){const d=e[l];d.id in i&&r.push(d)}return r}}function b_(o,e,i){const r=o.createShader(e);return o.shaderSource(r,i),o.compileShader(r),r}const oA=37297;let lA=0;function uA(o,e){const i=o.split(`
`),r=[],l=Math.max(e-6,0),u=Math.min(e+6,i.length);for(let d=l;d<u;d++){const h=d+1;r.push(`${h===e?">":" "} ${h}: ${i[d]}`)}return r.join(`
`)}const A_=new ge;function cA(o){Ce._getMatrix(A_,Ce.workingColorSpace,o);const e=`mat3( ${A_.elements.map(i=>i.toFixed(4))} )`;switch(Ce.getTransfer(o)){case ku:return[e,"LinearTransferOETF"];case He:return[e,"sRGBTransferOETF"];default:return fe("WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function R_(o,e,i){const r=o.getShaderParameter(e,o.COMPILE_STATUS),u=(o.getShaderInfoLog(e)||"").trim();if(r&&u==="")return"";const d=/ERROR: 0:(\d+)/.exec(u);if(d){const h=parseInt(d[1]);return i.toUpperCase()+`

`+u+`

`+uA(o.getShaderSource(e),h)}else return u}function fA(o,e){const i=cA(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const dA={[z_]:"Linear",[I_]:"Reinhard",[B_]:"Cineon",[H_]:"ACESFilmic",[V_]:"AgX",[X_]:"Neutral",[G_]:"Custom"};function hA(o,e){const i=dA[e];return i===void 0?(fe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const zu=new tt;function pA(){Ce.getLuminanceCoefficients(zu);const o=zu.x.toFixed(4),e=zu.y.toFixed(4),i=zu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function mA(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ko).join(`
`)}function gA(o){const e=[];for(const i in o){const r=o[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function _A(o,e){const i={},r=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const u=o.getActiveAttrib(e,l),d=u.name;let h=1;u.type===o.FLOAT_MAT2&&(h=2),u.type===o.FLOAT_MAT3&&(h=3),u.type===o.FLOAT_MAT4&&(h=4),i[d]={type:u.type,location:o.getAttribLocation(e,d),locationSize:h}}return i}function ko(o){return o!==""}function C_(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function w_(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const vA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Lh(o){return o.replace(vA,SA)}const xA=new Map;function SA(o,e){let i=ve[e];if(i===void 0){const r=xA.get(e);if(r!==void 0)i=ve[r],fe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Lh(i)}const MA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function D_(o){return o.replace(MA,yA)}function yA(o,e,i,r){let l="";for(let u=parseInt(e);u<parseInt(i);u++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function U_(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const EA={[Iu]:"SHADOWMAP_TYPE_PCF",[Xo]:"SHADOWMAP_TYPE_VSM"};function TA(o){return EA[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const bA={[Nr]:"ENVMAP_TYPE_CUBE",[Ps]:"ENVMAP_TYPE_CUBE",[qu]:"ENVMAP_TYPE_CUBE_UV"};function AA(o){return o.envMap===!1?"ENVMAP_TYPE_CUBE":bA[o.envMapMode]||"ENVMAP_TYPE_CUBE"}const RA={[Ps]:"ENVMAP_MODE_REFRACTION"};function CA(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":RA[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const wA={[F_]:"ENVMAP_BLENDING_MULTIPLY",[JS]:"ENVMAP_BLENDING_MIX",[$S]:"ENVMAP_BLENDING_ADD"};function DA(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":wA[o.combine]||"ENVMAP_BLENDING_NONE"}function UA(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function LA(o,e,i,r){const l=o.getContext(),u=i.defines;let d=i.vertexShader,h=i.fragmentShader;const m=TA(i),p=AA(i),_=CA(i),g=DA(i),x=UA(i),E=mA(i),A=gA(u),C=l.createProgram();let M,S,F=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(ko).join(`
`),M.length>0&&(M+=`
`),S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(ko).join(`
`),S.length>0&&(S+=`
`)):(M=[U_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ko).join(`
`),S=[U_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+_:"",i.envMap?"#define "+g:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Bi?"#define TONE_MAPPING":"",i.toneMapping!==Bi?ve.tonemapping_pars_fragment:"",i.toneMapping!==Bi?hA("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ve.colorspace_pars_fragment,fA("linearToOutputTexel",i.outputColorSpace),pA(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(ko).join(`
`)),d=Lh(d),d=C_(d,i),d=w_(d,i),h=Lh(h),h=C_(h,i),h=w_(h,i),d=D_(d),h=D_(h),i.isRawShaderMaterial!==!0&&(F=`#version 300 es
`,M=[E,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,S=["#define varying in",i.glslVersion===V0?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===V0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const N=F+M+d,O=F+S+h,I=b_(l,l.VERTEX_SHADER,N),H=b_(l,l.FRAGMENT_SHADER,O);l.attachShader(C,I),l.attachShader(C,H),i.index0AttributeName!==void 0?l.bindAttribLocation(C,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(C,0,"position"),l.linkProgram(C);function P(X){if(o.debug.checkShaderErrors){const rt=l.getProgramInfoLog(C)||"",at=l.getShaderInfoLog(I)||"",ft=l.getShaderInfoLog(H)||"",ut=rt.trim(),L=at.trim(),G=ft.trim();let it=!0,xt=!0;if(l.getProgramParameter(C,l.LINK_STATUS)===!1)if(it=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,C,I,H);else{const St=R_(l,I,"vertex"),U=R_(l,H,"fragment");Re("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(C,l.VALIDATE_STATUS)+`

Material Name: `+X.name+`
Material Type: `+X.type+`

Program Info Log: `+ut+`
`+St+`
`+U)}else ut!==""?fe("WebGLProgram: Program Info Log:",ut):(L===""||G==="")&&(xt=!1);xt&&(X.diagnostics={runnable:it,programLog:ut,vertexShader:{log:L,prefix:M},fragmentShader:{log:G,prefix:S}})}l.deleteShader(I),l.deleteShader(H),K=new Xu(l,C),R=_A(l,C)}let K;this.getUniforms=function(){return K===void 0&&P(this),K};let R;this.getAttributes=function(){return R===void 0&&P(this),R};let D=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=l.getProgramParameter(C,oA)),D},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(C),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=lA++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=I,this.fragmentShader=H,this}let NA=0;class OA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(r),d=this._getShaderCacheForMaterial(e);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(u)===!1&&(d.add(u),u.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new PA(e),i.set(e,r)),r}}class PA{constructor(e){this.id=NA++,this.code=e,this.usedTimes=0}}function FA(o,e,i,r,l,u,d){const h=new qh,m=new OA,p=new Set,_=[],g=new Map,x=l.logarithmicDepthBuffer;let E=l.precision;const A={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function C(R){return p.add(R),R===0?"uv":`uv${R}`}function M(R,D,X,rt,at){const ft=rt.fog,ut=at.geometry,L=R.isMeshStandardMaterial?rt.environment:null,G=(R.isMeshStandardMaterial?i:e).get(R.envMap||L),it=G&&G.mapping===qu?G.image.height:null,xt=A[R.type];R.precision!==null&&(E=l.getMaxPrecision(R.precision),E!==R.precision&&fe("WebGLProgram.getParameters:",R.precision,"not supported, using",E,"instead."));const St=ut.morphAttributes.position||ut.morphAttributes.normal||ut.morphAttributes.color,U=St!==void 0?St.length:0;let j=0;ut.morphAttributes.position!==void 0&&(j=1),ut.morphAttributes.normal!==void 0&&(j=2),ut.morphAttributes.color!==void 0&&(j=3);let mt,Rt,Gt,$;if(xt){const Ae=Fi[xt];mt=Ae.vertexShader,Rt=Ae.fragmentShader}else mt=R.vertexShader,Rt=R.fragmentShader,m.update(R),Gt=m.getVertexShaderID(R),$=m.getFragmentShaderID(R);const dt=o.getRenderTarget(),Dt=o.state.buffers.depth.getReversed(),kt=at.isInstancedMesh===!0,Vt=at.isBatchedMesh===!0,_e=!!R.map,Et=!!R.matcap,Pt=!!G,bt=!!R.aoMap,ne=!!R.lightMap,Jt=!!R.bumpMap,le=!!R.normalMap,z=!!R.displacementMap,xe=!!R.emissiveMap,te=!!R.metalnessMap,oe=!!R.roughnessMap,Bt=R.anisotropy>0,w=R.clearcoat>0,y=R.dispersion>0,k=R.iridescence>0,ct=R.sheen>0,_t=R.transmission>0,lt=Bt&&!!R.anisotropyMap,Wt=w&&!!R.clearcoatMap,wt=w&&!!R.clearcoatNormalMap,Zt=w&&!!R.clearcoatRoughnessMap,ie=k&&!!R.iridescenceMap,Mt=k&&!!R.iridescenceThicknessMap,Tt=ct&&!!R.sheenColorMap,Ft=ct&&!!R.sheenRoughnessMap,zt=!!R.specularMap,Ut=!!R.specularColorMap,he=!!R.specularIntensityMap,W=_t&&!!R.transmissionMap,Nt=_t&&!!R.thicknessMap,At=!!R.gradientMap,Ht=!!R.alphaMap,yt=R.alphaTest>0,vt=!!R.alphaHash,Ct=!!R.extensions;let ue=Bi;R.toneMapped&&(dt===null||dt.isXRRenderTarget===!0)&&(ue=o.toneMapping);const Fe={shaderID:xt,shaderType:R.type,shaderName:R.name,vertexShader:mt,fragmentShader:Rt,defines:R.defines,customVertexShaderID:Gt,customFragmentShaderID:$,isRawShaderMaterial:R.isRawShaderMaterial===!0,glslVersion:R.glslVersion,precision:E,batching:Vt,batchingColor:Vt&&at._colorsTexture!==null,instancing:kt,instancingColor:kt&&at.instanceColor!==null,instancingMorph:kt&&at.morphTexture!==null,outputColorSpace:dt===null?o.outputColorSpace:dt.isXRRenderTarget===!0?dt.texture.colorSpace:zs,alphaToCoverage:!!R.alphaToCoverage,map:_e,matcap:Et,envMap:Pt,envMapMode:Pt&&G.mapping,envMapCubeUVHeight:it,aoMap:bt,lightMap:ne,bumpMap:Jt,normalMap:le,displacementMap:z,emissiveMap:xe,normalMapObjectSpace:le&&R.normalMapType===iM,normalMapTangentSpace:le&&R.normalMapType===nM,metalnessMap:te,roughnessMap:oe,anisotropy:Bt,anisotropyMap:lt,clearcoat:w,clearcoatMap:Wt,clearcoatNormalMap:wt,clearcoatRoughnessMap:Zt,dispersion:y,iridescence:k,iridescenceMap:ie,iridescenceThicknessMap:Mt,sheen:ct,sheenColorMap:Tt,sheenRoughnessMap:Ft,specularMap:zt,specularColorMap:Ut,specularIntensityMap:he,transmission:_t,transmissionMap:W,thicknessMap:Nt,gradientMap:At,opaque:R.transparent===!1&&R.blending===Lr&&R.alphaToCoverage===!1,alphaMap:Ht,alphaTest:yt,alphaHash:vt,combine:R.combine,mapUv:_e&&C(R.map.channel),aoMapUv:bt&&C(R.aoMap.channel),lightMapUv:ne&&C(R.lightMap.channel),bumpMapUv:Jt&&C(R.bumpMap.channel),normalMapUv:le&&C(R.normalMap.channel),displacementMapUv:z&&C(R.displacementMap.channel),emissiveMapUv:xe&&C(R.emissiveMap.channel),metalnessMapUv:te&&C(R.metalnessMap.channel),roughnessMapUv:oe&&C(R.roughnessMap.channel),anisotropyMapUv:lt&&C(R.anisotropyMap.channel),clearcoatMapUv:Wt&&C(R.clearcoatMap.channel),clearcoatNormalMapUv:wt&&C(R.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Zt&&C(R.clearcoatRoughnessMap.channel),iridescenceMapUv:ie&&C(R.iridescenceMap.channel),iridescenceThicknessMapUv:Mt&&C(R.iridescenceThicknessMap.channel),sheenColorMapUv:Tt&&C(R.sheenColorMap.channel),sheenRoughnessMapUv:Ft&&C(R.sheenRoughnessMap.channel),specularMapUv:zt&&C(R.specularMap.channel),specularColorMapUv:Ut&&C(R.specularColorMap.channel),specularIntensityMapUv:he&&C(R.specularIntensityMap.channel),transmissionMapUv:W&&C(R.transmissionMap.channel),thicknessMapUv:Nt&&C(R.thicknessMap.channel),alphaMapUv:Ht&&C(R.alphaMap.channel),vertexTangents:!!ut.attributes.tangent&&(le||Bt),vertexColors:R.vertexColors,vertexAlphas:R.vertexColors===!0&&!!ut.attributes.color&&ut.attributes.color.itemSize===4,pointsUvs:at.isPoints===!0&&!!ut.attributes.uv&&(_e||Ht),fog:!!ft,useFog:R.fog===!0,fogExp2:!!ft&&ft.isFogExp2,flatShading:R.flatShading===!0&&R.wireframe===!1,sizeAttenuation:R.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:Dt,skinning:at.isSkinnedMesh===!0,morphTargets:ut.morphAttributes.position!==void 0,morphNormals:ut.morphAttributes.normal!==void 0,morphColors:ut.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:j,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:R.dithering,shadowMapEnabled:o.shadowMap.enabled&&X.length>0,shadowMapType:o.shadowMap.type,toneMapping:ue,decodeVideoTexture:_e&&R.map.isVideoTexture===!0&&Ce.getTransfer(R.map.colorSpace)===He,decodeVideoTextureEmissive:xe&&R.emissiveMap.isVideoTexture===!0&&Ce.getTransfer(R.emissiveMap.colorSpace)===He,premultipliedAlpha:R.premultipliedAlpha,doubleSided:R.side===mi,flipSided:R.side===Xn,useDepthPacking:R.depthPacking>=0,depthPacking:R.depthPacking||0,index0AttributeName:R.index0AttributeName,extensionClipCullDistance:Ct&&R.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ct&&R.extensions.multiDraw===!0||Vt)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:R.customProgramCacheKey()};return Fe.vertexUv1s=p.has(1),Fe.vertexUv2s=p.has(2),Fe.vertexUv3s=p.has(3),p.clear(),Fe}function S(R){const D=[];if(R.shaderID?D.push(R.shaderID):(D.push(R.customVertexShaderID),D.push(R.customFragmentShaderID)),R.defines!==void 0)for(const X in R.defines)D.push(X),D.push(R.defines[X]);return R.isRawShaderMaterial===!1&&(F(D,R),N(D,R),D.push(o.outputColorSpace)),D.push(R.customProgramCacheKey),D.join()}function F(R,D){R.push(D.precision),R.push(D.outputColorSpace),R.push(D.envMapMode),R.push(D.envMapCubeUVHeight),R.push(D.mapUv),R.push(D.alphaMapUv),R.push(D.lightMapUv),R.push(D.aoMapUv),R.push(D.bumpMapUv),R.push(D.normalMapUv),R.push(D.displacementMapUv),R.push(D.emissiveMapUv),R.push(D.metalnessMapUv),R.push(D.roughnessMapUv),R.push(D.anisotropyMapUv),R.push(D.clearcoatMapUv),R.push(D.clearcoatNormalMapUv),R.push(D.clearcoatRoughnessMapUv),R.push(D.iridescenceMapUv),R.push(D.iridescenceThicknessMapUv),R.push(D.sheenColorMapUv),R.push(D.sheenRoughnessMapUv),R.push(D.specularMapUv),R.push(D.specularColorMapUv),R.push(D.specularIntensityMapUv),R.push(D.transmissionMapUv),R.push(D.thicknessMapUv),R.push(D.combine),R.push(D.fogExp2),R.push(D.sizeAttenuation),R.push(D.morphTargetsCount),R.push(D.morphAttributeCount),R.push(D.numDirLights),R.push(D.numPointLights),R.push(D.numSpotLights),R.push(D.numSpotLightMaps),R.push(D.numHemiLights),R.push(D.numRectAreaLights),R.push(D.numDirLightShadows),R.push(D.numPointLightShadows),R.push(D.numSpotLightShadows),R.push(D.numSpotLightShadowsWithMaps),R.push(D.numLightProbes),R.push(D.shadowMapType),R.push(D.toneMapping),R.push(D.numClippingPlanes),R.push(D.numClipIntersection),R.push(D.depthPacking)}function N(R,D){h.disableAll(),D.instancing&&h.enable(0),D.instancingColor&&h.enable(1),D.instancingMorph&&h.enable(2),D.matcap&&h.enable(3),D.envMap&&h.enable(4),D.normalMapObjectSpace&&h.enable(5),D.normalMapTangentSpace&&h.enable(6),D.clearcoat&&h.enable(7),D.iridescence&&h.enable(8),D.alphaTest&&h.enable(9),D.vertexColors&&h.enable(10),D.vertexAlphas&&h.enable(11),D.vertexUv1s&&h.enable(12),D.vertexUv2s&&h.enable(13),D.vertexUv3s&&h.enable(14),D.vertexTangents&&h.enable(15),D.anisotropy&&h.enable(16),D.alphaHash&&h.enable(17),D.batching&&h.enable(18),D.dispersion&&h.enable(19),D.batchingColor&&h.enable(20),D.gradientMap&&h.enable(21),R.push(h.mask),h.disableAll(),D.fog&&h.enable(0),D.useFog&&h.enable(1),D.flatShading&&h.enable(2),D.logarithmicDepthBuffer&&h.enable(3),D.reversedDepthBuffer&&h.enable(4),D.skinning&&h.enable(5),D.morphTargets&&h.enable(6),D.morphNormals&&h.enable(7),D.morphColors&&h.enable(8),D.premultipliedAlpha&&h.enable(9),D.shadowMapEnabled&&h.enable(10),D.doubleSided&&h.enable(11),D.flipSided&&h.enable(12),D.useDepthPacking&&h.enable(13),D.dithering&&h.enable(14),D.transmission&&h.enable(15),D.sheen&&h.enable(16),D.opaque&&h.enable(17),D.pointsUvs&&h.enable(18),D.decodeVideoTexture&&h.enable(19),D.decodeVideoTextureEmissive&&h.enable(20),D.alphaToCoverage&&h.enable(21),R.push(h.mask)}function O(R){const D=A[R.type];let X;if(D){const rt=Fi[D];X=YM.clone(rt.uniforms)}else X=R.uniforms;return X}function I(R,D){let X=g.get(D);return X!==void 0?++X.usedTimes:(X=new LA(o,D,R,u),_.push(X),g.set(D,X)),X}function H(R){if(--R.usedTimes===0){const D=_.indexOf(R);_[D]=_[_.length-1],_.pop(),g.delete(R.cacheKey),R.destroy()}}function P(R){m.remove(R)}function K(){m.dispose()}return{getParameters:M,getProgramCacheKey:S,getUniforms:O,acquireProgram:I,releaseProgram:H,releaseShaderCache:P,programs:_,dispose:K}}function zA(){let o=new WeakMap;function e(d){return o.has(d)}function i(d){let h=o.get(d);return h===void 0&&(h={},o.set(d,h)),h}function r(d){o.delete(d)}function l(d,h,m){o.get(d)[h]=m}function u(){o=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:u}}function IA(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function L_(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function N_(){const o=[];let e=0;const i=[],r=[],l=[];function u(){e=0,i.length=0,r.length=0,l.length=0}function d(g,x,E,A,C,M){let S=o[e];return S===void 0?(S={id:g.id,object:g,geometry:x,material:E,groupOrder:A,renderOrder:g.renderOrder,z:C,group:M},o[e]=S):(S.id=g.id,S.object=g,S.geometry=x,S.material=E,S.groupOrder=A,S.renderOrder=g.renderOrder,S.z=C,S.group=M),e++,S}function h(g,x,E,A,C,M){const S=d(g,x,E,A,C,M);E.transmission>0?r.push(S):E.transparent===!0?l.push(S):i.push(S)}function m(g,x,E,A,C,M){const S=d(g,x,E,A,C,M);E.transmission>0?r.unshift(S):E.transparent===!0?l.unshift(S):i.unshift(S)}function p(g,x){i.length>1&&i.sort(g||IA),r.length>1&&r.sort(x||L_),l.length>1&&l.sort(x||L_)}function _(){for(let g=e,x=o.length;g<x;g++){const E=o[g];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:i,transmissive:r,transparent:l,init:u,push:h,unshift:m,finish:_,sort:p}}function BA(){let o=new WeakMap;function e(r,l){const u=o.get(r);let d;return u===void 0?(d=new N_,o.set(r,[d])):l>=u.length?(d=new N_,u.push(d)):d=u[l],d}function i(){o=new WeakMap}return{get:e,dispose:i}}function HA(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new tt,color:new Pe};break;case"SpotLight":i={position:new tt,direction:new tt,color:new Pe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new tt,color:new Pe,distance:0,decay:0};break;case"HemisphereLight":i={direction:new tt,skyColor:new Pe,groundColor:new Pe};break;case"RectAreaLight":i={color:new Pe,position:new tt,halfWidth:new tt,halfHeight:new tt};break}return o[e.id]=i,i}}}function GA(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let VA=0;function XA(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function kA(o){const e=new HA,i=GA(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new tt);const l=new tt,u=new tn,d=new tn;function h(p){let _=0,g=0,x=0;for(let R=0;R<9;R++)r.probe[R].set(0,0,0);let E=0,A=0,C=0,M=0,S=0,F=0,N=0,O=0,I=0,H=0,P=0;p.sort(XA);for(let R=0,D=p.length;R<D;R++){const X=p[R],rt=X.color,at=X.intensity,ft=X.distance;let ut=null;if(X.shadow&&X.shadow.map&&(X.shadow.map.texture.format===Fs?ut=X.shadow.map.texture:ut=X.shadow.map.depthTexture||X.shadow.map.texture),X.isAmbientLight)_+=rt.r*at,g+=rt.g*at,x+=rt.b*at;else if(X.isLightProbe){for(let L=0;L<9;L++)r.probe[L].addScaledVector(X.sh.coefficients[L],at);P++}else if(X.isDirectionalLight){const L=e.get(X);if(L.color.copy(X.color).multiplyScalar(X.intensity),X.castShadow){const G=X.shadow,it=i.get(X);it.shadowIntensity=G.intensity,it.shadowBias=G.bias,it.shadowNormalBias=G.normalBias,it.shadowRadius=G.radius,it.shadowMapSize=G.mapSize,r.directionalShadow[E]=it,r.directionalShadowMap[E]=ut,r.directionalShadowMatrix[E]=X.shadow.matrix,F++}r.directional[E]=L,E++}else if(X.isSpotLight){const L=e.get(X);L.position.setFromMatrixPosition(X.matrixWorld),L.color.copy(rt).multiplyScalar(at),L.distance=ft,L.coneCos=Math.cos(X.angle),L.penumbraCos=Math.cos(X.angle*(1-X.penumbra)),L.decay=X.decay,r.spot[C]=L;const G=X.shadow;if(X.map&&(r.spotLightMap[I]=X.map,I++,G.updateMatrices(X),X.castShadow&&H++),r.spotLightMatrix[C]=G.matrix,X.castShadow){const it=i.get(X);it.shadowIntensity=G.intensity,it.shadowBias=G.bias,it.shadowNormalBias=G.normalBias,it.shadowRadius=G.radius,it.shadowMapSize=G.mapSize,r.spotShadow[C]=it,r.spotShadowMap[C]=ut,O++}C++}else if(X.isRectAreaLight){const L=e.get(X);L.color.copy(rt).multiplyScalar(at),L.halfWidth.set(X.width*.5,0,0),L.halfHeight.set(0,X.height*.5,0),r.rectArea[M]=L,M++}else if(X.isPointLight){const L=e.get(X);if(L.color.copy(X.color).multiplyScalar(X.intensity),L.distance=X.distance,L.decay=X.decay,X.castShadow){const G=X.shadow,it=i.get(X);it.shadowIntensity=G.intensity,it.shadowBias=G.bias,it.shadowNormalBias=G.normalBias,it.shadowRadius=G.radius,it.shadowMapSize=G.mapSize,it.shadowCameraNear=G.camera.near,it.shadowCameraFar=G.camera.far,r.pointShadow[A]=it,r.pointShadowMap[A]=ut,r.pointShadowMatrix[A]=X.shadow.matrix,N++}r.point[A]=L,A++}else if(X.isHemisphereLight){const L=e.get(X);L.skyColor.copy(X.color).multiplyScalar(at),L.groundColor.copy(X.groundColor).multiplyScalar(at),r.hemi[S]=L,S++}}M>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=It.LTC_FLOAT_1,r.rectAreaLTC2=It.LTC_FLOAT_2):(r.rectAreaLTC1=It.LTC_HALF_1,r.rectAreaLTC2=It.LTC_HALF_2)),r.ambient[0]=_,r.ambient[1]=g,r.ambient[2]=x;const K=r.hash;(K.directionalLength!==E||K.pointLength!==A||K.spotLength!==C||K.rectAreaLength!==M||K.hemiLength!==S||K.numDirectionalShadows!==F||K.numPointShadows!==N||K.numSpotShadows!==O||K.numSpotMaps!==I||K.numLightProbes!==P)&&(r.directional.length=E,r.spot.length=C,r.rectArea.length=M,r.point.length=A,r.hemi.length=S,r.directionalShadow.length=F,r.directionalShadowMap.length=F,r.pointShadow.length=N,r.pointShadowMap.length=N,r.spotShadow.length=O,r.spotShadowMap.length=O,r.directionalShadowMatrix.length=F,r.pointShadowMatrix.length=N,r.spotLightMatrix.length=O+I-H,r.spotLightMap.length=I,r.numSpotLightShadowsWithMaps=H,r.numLightProbes=P,K.directionalLength=E,K.pointLength=A,K.spotLength=C,K.rectAreaLength=M,K.hemiLength=S,K.numDirectionalShadows=F,K.numPointShadows=N,K.numSpotShadows=O,K.numSpotMaps=I,K.numLightProbes=P,r.version=VA++)}function m(p,_){let g=0,x=0,E=0,A=0,C=0;const M=_.matrixWorldInverse;for(let S=0,F=p.length;S<F;S++){const N=p[S];if(N.isDirectionalLight){const O=r.directional[g];O.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),O.direction.sub(l),O.direction.transformDirection(M),g++}else if(N.isSpotLight){const O=r.spot[E];O.position.setFromMatrixPosition(N.matrixWorld),O.position.applyMatrix4(M),O.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),O.direction.sub(l),O.direction.transformDirection(M),E++}else if(N.isRectAreaLight){const O=r.rectArea[A];O.position.setFromMatrixPosition(N.matrixWorld),O.position.applyMatrix4(M),d.identity(),u.copy(N.matrixWorld),u.premultiply(M),d.extractRotation(u),O.halfWidth.set(N.width*.5,0,0),O.halfHeight.set(0,N.height*.5,0),O.halfWidth.applyMatrix4(d),O.halfHeight.applyMatrix4(d),A++}else if(N.isPointLight){const O=r.point[x];O.position.setFromMatrixPosition(N.matrixWorld),O.position.applyMatrix4(M),x++}else if(N.isHemisphereLight){const O=r.hemi[C];O.direction.setFromMatrixPosition(N.matrixWorld),O.direction.transformDirection(M),C++}}}return{setup:h,setupView:m,state:r}}function O_(o){const e=new kA(o),i=[],r=[];function l(_){p.camera=_,i.length=0,r.length=0}function u(_){i.push(_)}function d(_){r.push(_)}function h(){e.setup(i)}function m(_){e.setupView(i,_)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:h,setupLightsView:m,pushLight:u,pushShadow:d}}function WA(o){let e=new WeakMap;function i(l,u=0){const d=e.get(l);let h;return d===void 0?(h=new O_(o),e.set(l,[h])):u>=d.length?(h=new O_(o),d.push(h)):h=d[u],h}function r(){e=new WeakMap}return{get:i,dispose:r}}const qA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,YA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,ZA=[new tt(1,0,0),new tt(-1,0,0),new tt(0,1,0),new tt(0,-1,0),new tt(0,0,1),new tt(0,0,-1)],jA=[new tt(0,-1,0),new tt(0,-1,0),new tt(0,0,1),new tt(0,0,-1),new tt(0,-1,0),new tt(0,-1,0)],P_=new tn,Vo=new tt,Pd=new tt;function KA(o,e,i){let r=new ov;const l=new Ge,u=new Ge,d=new an,h=new oy,m=new ly,p={},_=i.maxTextureSize,g={[er]:Xn,[Xn]:er,[mi]:mi},x=new ki({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ge},radius:{value:4}},vertexShader:qA,fragmentShader:YA}),E=x.clone();E.defines.HORIZONTAL_PASS=1;const A=new wi;A.setAttribute("position",new Gi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new Fn(A,x),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Iu;let S=this.type;this.render=function(H,P,K){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||H.length===0)return;H.type===NS&&(fe("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),H.type=Iu);const R=o.getRenderTarget(),D=o.getActiveCubeFace(),X=o.getActiveMipmapLevel(),rt=o.state;rt.setBlending(ma),rt.buffers.depth.getReversed()===!0?rt.buffers.color.setClear(0,0,0,0):rt.buffers.color.setClear(1,1,1,1),rt.buffers.depth.setTest(!0),rt.setScissorTest(!1);const at=S!==this.type;at&&P.traverse(function(ft){ft.material&&(Array.isArray(ft.material)?ft.material.forEach(ut=>ut.needsUpdate=!0):ft.material.needsUpdate=!0)});for(let ft=0,ut=H.length;ft<ut;ft++){const L=H[ft],G=L.shadow;if(G===void 0){fe("WebGLShadowMap:",L,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;l.copy(G.mapSize);const it=G.getFrameExtents();if(l.multiply(it),u.copy(G.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(u.x=Math.floor(_/it.x),l.x=u.x*it.x,G.mapSize.x=u.x),l.y>_&&(u.y=Math.floor(_/it.y),l.y=u.y*it.y,G.mapSize.y=u.y)),G.map===null||at===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===Xo){if(L.isPointLight){fe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new Hi(l.x,l.y,{format:Fs,type:_a,minFilter:$e,magFilter:$e,generateMipmaps:!1}),G.map.texture.name=L.name+".shadowMap",G.map.depthTexture=new $o(l.x,l.y,zi),G.map.depthTexture.name=L.name+".shadowMapDepth",G.map.depthTexture.format=va,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Cn,G.map.depthTexture.magFilter=Cn}else{L.isPointLight?(G.map=new sv(l.x),G.map.depthTexture=new ry(l.x,Xi)):(G.map=new Hi(l.x,l.y),G.map.depthTexture=new $o(l.x,l.y,Xi)),G.map.depthTexture.name=L.name+".shadowMap",G.map.depthTexture.format=va;const St=o.state.buffers.depth.getReversed();this.type===Iu?(G.map.depthTexture.compareFunction=St?Vh:Gh,G.map.depthTexture.minFilter=$e,G.map.depthTexture.magFilter=$e):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Cn,G.map.depthTexture.magFilter=Cn)}G.camera.updateProjectionMatrix()}const xt=G.map.isWebGLCubeRenderTarget?6:1;for(let St=0;St<xt;St++){if(G.map.isWebGLCubeRenderTarget)o.setRenderTarget(G.map,St),o.clear();else{St===0&&(o.setRenderTarget(G.map),o.clear());const U=G.getViewport(St);d.set(u.x*U.x,u.y*U.y,u.x*U.z,u.y*U.w),rt.viewport(d)}if(L.isPointLight){const U=G.camera,j=G.matrix,mt=L.distance||U.far;mt!==U.far&&(U.far=mt,U.updateProjectionMatrix()),Vo.setFromMatrixPosition(L.matrixWorld),U.position.copy(Vo),Pd.copy(U.position),Pd.add(ZA[St]),U.up.copy(jA[St]),U.lookAt(Pd),U.updateMatrixWorld(),j.makeTranslation(-Vo.x,-Vo.y,-Vo.z),P_.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),G._frustum.setFromProjectionMatrix(P_,U.coordinateSystem,U.reversedDepth)}else G.updateMatrices(L);r=G.getFrustum(),O(P,K,G.camera,L,this.type)}G.isPointLightShadow!==!0&&this.type===Xo&&F(G,K),G.needsUpdate=!1}S=this.type,M.needsUpdate=!1,o.setRenderTarget(R,D,X)};function F(H,P){const K=e.update(C);x.defines.VSM_SAMPLES!==H.blurSamples&&(x.defines.VSM_SAMPLES=H.blurSamples,E.defines.VSM_SAMPLES=H.blurSamples,x.needsUpdate=!0,E.needsUpdate=!0),H.mapPass===null&&(H.mapPass=new Hi(l.x,l.y,{format:Fs,type:_a})),x.uniforms.shadow_pass.value=H.map.depthTexture,x.uniforms.resolution.value=H.mapSize,x.uniforms.radius.value=H.radius,o.setRenderTarget(H.mapPass),o.clear(),o.renderBufferDirect(P,null,K,x,C,null),E.uniforms.shadow_pass.value=H.mapPass.texture,E.uniforms.resolution.value=H.mapSize,E.uniforms.radius.value=H.radius,o.setRenderTarget(H.map),o.clear(),o.renderBufferDirect(P,null,K,E,C,null)}function N(H,P,K,R){let D=null;const X=K.isPointLight===!0?H.customDistanceMaterial:H.customDepthMaterial;if(X!==void 0)D=X;else if(D=K.isPointLight===!0?m:h,o.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const rt=D.uuid,at=P.uuid;let ft=p[rt];ft===void 0&&(ft={},p[rt]=ft);let ut=ft[at];ut===void 0&&(ut=D.clone(),ft[at]=ut,P.addEventListener("dispose",I)),D=ut}if(D.visible=P.visible,D.wireframe=P.wireframe,R===Xo?D.side=P.shadowSide!==null?P.shadowSide:P.side:D.side=P.shadowSide!==null?P.shadowSide:g[P.side],D.alphaMap=P.alphaMap,D.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,D.map=P.map,D.clipShadows=P.clipShadows,D.clippingPlanes=P.clippingPlanes,D.clipIntersection=P.clipIntersection,D.displacementMap=P.displacementMap,D.displacementScale=P.displacementScale,D.displacementBias=P.displacementBias,D.wireframeLinewidth=P.wireframeLinewidth,D.linewidth=P.linewidth,K.isPointLight===!0&&D.isMeshDistanceMaterial===!0){const rt=o.properties.get(D);rt.light=K}return D}function O(H,P,K,R,D){if(H.visible===!1)return;if(H.layers.test(P.layers)&&(H.isMesh||H.isLine||H.isPoints)&&(H.castShadow||H.receiveShadow&&D===Xo)&&(!H.frustumCulled||r.intersectsObject(H))){H.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,H.matrixWorld);const at=e.update(H),ft=H.material;if(Array.isArray(ft)){const ut=at.groups;for(let L=0,G=ut.length;L<G;L++){const it=ut[L],xt=ft[it.materialIndex];if(xt&&xt.visible){const St=N(H,xt,R,D);H.onBeforeShadow(o,H,P,K,at,St,it),o.renderBufferDirect(K,null,at,St,H,it),H.onAfterShadow(o,H,P,K,at,St,it)}}}else if(ft.visible){const ut=N(H,ft,R,D);H.onBeforeShadow(o,H,P,K,at,ut,null),o.renderBufferDirect(K,null,at,ut,H,null),H.onAfterShadow(o,H,P,K,at,ut,null)}}const rt=H.children;for(let at=0,ft=rt.length;at<ft;at++)O(rt[at],P,K,R,D)}function I(H){H.target.removeEventListener("dispose",I);for(const K in p){const R=p[K],D=H.target.uuid;D in R&&(R[D].dispose(),delete R[D])}}}const QA={[Bd]:Hd,[Gd]:kd,[Vd]:Wd,[Os]:Xd,[Hd]:Bd,[kd]:Gd,[Wd]:Vd,[Xd]:Os};function JA(o,e){function i(){let W=!1;const Nt=new an;let At=null;const Ht=new an(0,0,0,0);return{setMask:function(yt){At!==yt&&!W&&(o.colorMask(yt,yt,yt,yt),At=yt)},setLocked:function(yt){W=yt},setClear:function(yt,vt,Ct,ue,Fe){Fe===!0&&(yt*=ue,vt*=ue,Ct*=ue),Nt.set(yt,vt,Ct,ue),Ht.equals(Nt)===!1&&(o.clearColor(yt,vt,Ct,ue),Ht.copy(Nt))},reset:function(){W=!1,At=null,Ht.set(-1,0,0,0)}}}function r(){let W=!1,Nt=!1,At=null,Ht=null,yt=null;return{setReversed:function(vt){if(Nt!==vt){const Ct=e.get("EXT_clip_control");vt?Ct.clipControlEXT(Ct.LOWER_LEFT_EXT,Ct.ZERO_TO_ONE_EXT):Ct.clipControlEXT(Ct.LOWER_LEFT_EXT,Ct.NEGATIVE_ONE_TO_ONE_EXT),Nt=vt;const ue=yt;yt=null,this.setClear(ue)}},getReversed:function(){return Nt},setTest:function(vt){vt?dt(o.DEPTH_TEST):Dt(o.DEPTH_TEST)},setMask:function(vt){At!==vt&&!W&&(o.depthMask(vt),At=vt)},setFunc:function(vt){if(Nt&&(vt=QA[vt]),Ht!==vt){switch(vt){case Bd:o.depthFunc(o.NEVER);break;case Hd:o.depthFunc(o.ALWAYS);break;case Gd:o.depthFunc(o.LESS);break;case Os:o.depthFunc(o.LEQUAL);break;case Vd:o.depthFunc(o.EQUAL);break;case Xd:o.depthFunc(o.GEQUAL);break;case kd:o.depthFunc(o.GREATER);break;case Wd:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Ht=vt}},setLocked:function(vt){W=vt},setClear:function(vt){yt!==vt&&(Nt&&(vt=1-vt),o.clearDepth(vt),yt=vt)},reset:function(){W=!1,At=null,Ht=null,yt=null,Nt=!1}}}function l(){let W=!1,Nt=null,At=null,Ht=null,yt=null,vt=null,Ct=null,ue=null,Fe=null;return{setTest:function(Ae){W||(Ae?dt(o.STENCIL_TEST):Dt(o.STENCIL_TEST))},setMask:function(Ae){Nt!==Ae&&!W&&(o.stencilMask(Ae),Nt=Ae)},setFunc:function(Ae,wn,vi){(At!==Ae||Ht!==wn||yt!==vi)&&(o.stencilFunc(Ae,wn,vi),At=Ae,Ht=wn,yt=vi)},setOp:function(Ae,wn,vi){(vt!==Ae||Ct!==wn||ue!==vi)&&(o.stencilOp(Ae,wn,vi),vt=Ae,Ct=wn,ue=vi)},setLocked:function(Ae){W=Ae},setClear:function(Ae){Fe!==Ae&&(o.clearStencil(Ae),Fe=Ae)},reset:function(){W=!1,Nt=null,At=null,Ht=null,yt=null,vt=null,Ct=null,ue=null,Fe=null}}}const u=new i,d=new r,h=new l,m=new WeakMap,p=new WeakMap;let _={},g={},x=new WeakMap,E=[],A=null,C=!1,M=null,S=null,F=null,N=null,O=null,I=null,H=null,P=new Pe(0,0,0),K=0,R=!1,D=null,X=null,rt=null,at=null,ft=null;const ut=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let L=!1,G=0;const it=o.getParameter(o.VERSION);it.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(it)[1]),L=G>=1):it.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(it)[1]),L=G>=2);let xt=null,St={};const U=o.getParameter(o.SCISSOR_BOX),j=o.getParameter(o.VIEWPORT),mt=new an().fromArray(U),Rt=new an().fromArray(j);function Gt(W,Nt,At,Ht){const yt=new Uint8Array(4),vt=o.createTexture();o.bindTexture(W,vt),o.texParameteri(W,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(W,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Ct=0;Ct<At;Ct++)W===o.TEXTURE_3D||W===o.TEXTURE_2D_ARRAY?o.texImage3D(Nt,0,o.RGBA,1,1,Ht,0,o.RGBA,o.UNSIGNED_BYTE,yt):o.texImage2D(Nt+Ct,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,yt);return vt}const $={};$[o.TEXTURE_2D]=Gt(o.TEXTURE_2D,o.TEXTURE_2D,1),$[o.TEXTURE_CUBE_MAP]=Gt(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[o.TEXTURE_2D_ARRAY]=Gt(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),$[o.TEXTURE_3D]=Gt(o.TEXTURE_3D,o.TEXTURE_3D,1,1),u.setClear(0,0,0,1),d.setClear(1),h.setClear(0),dt(o.DEPTH_TEST),d.setFunc(Os),Jt(!1),le(z0),dt(o.CULL_FACE),bt(ma);function dt(W){_[W]!==!0&&(o.enable(W),_[W]=!0)}function Dt(W){_[W]!==!1&&(o.disable(W),_[W]=!1)}function kt(W,Nt){return g[W]!==Nt?(o.bindFramebuffer(W,Nt),g[W]=Nt,W===o.DRAW_FRAMEBUFFER&&(g[o.FRAMEBUFFER]=Nt),W===o.FRAMEBUFFER&&(g[o.DRAW_FRAMEBUFFER]=Nt),!0):!1}function Vt(W,Nt){let At=E,Ht=!1;if(W){At=x.get(Nt),At===void 0&&(At=[],x.set(Nt,At));const yt=W.textures;if(At.length!==yt.length||At[0]!==o.COLOR_ATTACHMENT0){for(let vt=0,Ct=yt.length;vt<Ct;vt++)At[vt]=o.COLOR_ATTACHMENT0+vt;At.length=yt.length,Ht=!0}}else At[0]!==o.BACK&&(At[0]=o.BACK,Ht=!0);Ht&&o.drawBuffers(At)}function _e(W){return A!==W?(o.useProgram(W),A=W,!0):!1}const Et={[Cr]:o.FUNC_ADD,[PS]:o.FUNC_SUBTRACT,[FS]:o.FUNC_REVERSE_SUBTRACT};Et[zS]=o.MIN,Et[IS]=o.MAX;const Pt={[BS]:o.ZERO,[HS]:o.ONE,[GS]:o.SRC_COLOR,[zd]:o.SRC_ALPHA,[YS]:o.SRC_ALPHA_SATURATE,[WS]:o.DST_COLOR,[XS]:o.DST_ALPHA,[VS]:o.ONE_MINUS_SRC_COLOR,[Id]:o.ONE_MINUS_SRC_ALPHA,[qS]:o.ONE_MINUS_DST_COLOR,[kS]:o.ONE_MINUS_DST_ALPHA,[ZS]:o.CONSTANT_COLOR,[jS]:o.ONE_MINUS_CONSTANT_COLOR,[KS]:o.CONSTANT_ALPHA,[QS]:o.ONE_MINUS_CONSTANT_ALPHA};function bt(W,Nt,At,Ht,yt,vt,Ct,ue,Fe,Ae){if(W===ma){C===!0&&(Dt(o.BLEND),C=!1);return}if(C===!1&&(dt(o.BLEND),C=!0),W!==OS){if(W!==M||Ae!==R){if((S!==Cr||O!==Cr)&&(o.blendEquation(o.FUNC_ADD),S=Cr,O=Cr),Ae)switch(W){case Lr:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Wo:o.blendFunc(o.ONE,o.ONE);break;case I0:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case B0:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:Re("WebGLState: Invalid blending: ",W);break}else switch(W){case Lr:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Wo:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case I0:Re("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case B0:Re("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Re("WebGLState: Invalid blending: ",W);break}F=null,N=null,I=null,H=null,P.set(0,0,0),K=0,M=W,R=Ae}return}yt=yt||Nt,vt=vt||At,Ct=Ct||Ht,(Nt!==S||yt!==O)&&(o.blendEquationSeparate(Et[Nt],Et[yt]),S=Nt,O=yt),(At!==F||Ht!==N||vt!==I||Ct!==H)&&(o.blendFuncSeparate(Pt[At],Pt[Ht],Pt[vt],Pt[Ct]),F=At,N=Ht,I=vt,H=Ct),(ue.equals(P)===!1||Fe!==K)&&(o.blendColor(ue.r,ue.g,ue.b,Fe),P.copy(ue),K=Fe),M=W,R=!1}function ne(W,Nt){W.side===mi?Dt(o.CULL_FACE):dt(o.CULL_FACE);let At=W.side===Xn;Nt&&(At=!At),Jt(At),W.blending===Lr&&W.transparent===!1?bt(ma):bt(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),d.setFunc(W.depthFunc),d.setTest(W.depthTest),d.setMask(W.depthWrite),u.setMask(W.colorWrite);const Ht=W.stencilWrite;h.setTest(Ht),Ht&&(h.setMask(W.stencilWriteMask),h.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),h.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),xe(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?dt(o.SAMPLE_ALPHA_TO_COVERAGE):Dt(o.SAMPLE_ALPHA_TO_COVERAGE)}function Jt(W){D!==W&&(W?o.frontFace(o.CW):o.frontFace(o.CCW),D=W)}function le(W){W!==US?(dt(o.CULL_FACE),W!==X&&(W===z0?o.cullFace(o.BACK):W===LS?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Dt(o.CULL_FACE),X=W}function z(W){W!==rt&&(L&&o.lineWidth(W),rt=W)}function xe(W,Nt,At){W?(dt(o.POLYGON_OFFSET_FILL),(at!==Nt||ft!==At)&&(o.polygonOffset(Nt,At),at=Nt,ft=At)):Dt(o.POLYGON_OFFSET_FILL)}function te(W){W?dt(o.SCISSOR_TEST):Dt(o.SCISSOR_TEST)}function oe(W){W===void 0&&(W=o.TEXTURE0+ut-1),xt!==W&&(o.activeTexture(W),xt=W)}function Bt(W,Nt,At){At===void 0&&(xt===null?At=o.TEXTURE0+ut-1:At=xt);let Ht=St[At];Ht===void 0&&(Ht={type:void 0,texture:void 0},St[At]=Ht),(Ht.type!==W||Ht.texture!==Nt)&&(xt!==At&&(o.activeTexture(At),xt=At),o.bindTexture(W,Nt||$[W]),Ht.type=W,Ht.texture=Nt)}function w(){const W=St[xt];W!==void 0&&W.type!==void 0&&(o.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function y(){try{o.compressedTexImage2D(...arguments)}catch(W){Re("WebGLState:",W)}}function k(){try{o.compressedTexImage3D(...arguments)}catch(W){Re("WebGLState:",W)}}function ct(){try{o.texSubImage2D(...arguments)}catch(W){Re("WebGLState:",W)}}function _t(){try{o.texSubImage3D(...arguments)}catch(W){Re("WebGLState:",W)}}function lt(){try{o.compressedTexSubImage2D(...arguments)}catch(W){Re("WebGLState:",W)}}function Wt(){try{o.compressedTexSubImage3D(...arguments)}catch(W){Re("WebGLState:",W)}}function wt(){try{o.texStorage2D(...arguments)}catch(W){Re("WebGLState:",W)}}function Zt(){try{o.texStorage3D(...arguments)}catch(W){Re("WebGLState:",W)}}function ie(){try{o.texImage2D(...arguments)}catch(W){Re("WebGLState:",W)}}function Mt(){try{o.texImage3D(...arguments)}catch(W){Re("WebGLState:",W)}}function Tt(W){mt.equals(W)===!1&&(o.scissor(W.x,W.y,W.z,W.w),mt.copy(W))}function Ft(W){Rt.equals(W)===!1&&(o.viewport(W.x,W.y,W.z,W.w),Rt.copy(W))}function zt(W,Nt){let At=p.get(Nt);At===void 0&&(At=new WeakMap,p.set(Nt,At));let Ht=At.get(W);Ht===void 0&&(Ht=o.getUniformBlockIndex(Nt,W.name),At.set(W,Ht))}function Ut(W,Nt){const Ht=p.get(Nt).get(W);m.get(Nt)!==Ht&&(o.uniformBlockBinding(Nt,Ht,W.__bindingPointIndex),m.set(Nt,Ht))}function he(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),d.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),_={},xt=null,St={},g={},x=new WeakMap,E=[],A=null,C=!1,M=null,S=null,F=null,N=null,O=null,I=null,H=null,P=new Pe(0,0,0),K=0,R=!1,D=null,X=null,rt=null,at=null,ft=null,mt.set(0,0,o.canvas.width,o.canvas.height),Rt.set(0,0,o.canvas.width,o.canvas.height),u.reset(),d.reset(),h.reset()}return{buffers:{color:u,depth:d,stencil:h},enable:dt,disable:Dt,bindFramebuffer:kt,drawBuffers:Vt,useProgram:_e,setBlending:bt,setMaterial:ne,setFlipSided:Jt,setCullFace:le,setLineWidth:z,setPolygonOffset:xe,setScissorTest:te,activeTexture:oe,bindTexture:Bt,unbindTexture:w,compressedTexImage2D:y,compressedTexImage3D:k,texImage2D:ie,texImage3D:Mt,updateUBOMapping:zt,uniformBlockBinding:Ut,texStorage2D:wt,texStorage3D:Zt,texSubImage2D:ct,texSubImage3D:_t,compressedTexSubImage2D:lt,compressedTexSubImage3D:Wt,scissor:Tt,viewport:Ft,reset:he}}function $A(o,e,i,r,l,u,d){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Ge,_=new WeakMap;let g;const x=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(w,y){return E?new OffscreenCanvas(w,y):Ko("canvas")}function C(w,y,k){let ct=1;const _t=Bt(w);if((_t.width>k||_t.height>k)&&(ct=k/Math.max(_t.width,_t.height)),ct<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const lt=Math.floor(ct*_t.width),Wt=Math.floor(ct*_t.height);g===void 0&&(g=A(lt,Wt));const wt=y?A(lt,Wt):g;return wt.width=lt,wt.height=Wt,wt.getContext("2d").drawImage(w,0,0,lt,Wt),fe("WebGLRenderer: Texture has been resized from ("+_t.width+"x"+_t.height+") to ("+lt+"x"+Wt+")."),wt}else return"data"in w&&fe("WebGLRenderer: Image in DataTexture is too big ("+_t.width+"x"+_t.height+")."),w;return w}function M(w){return w.generateMipmaps}function S(w){o.generateMipmap(w)}function F(w){return w.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?o.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function N(w,y,k,ct,_t=!1){if(w!==null){if(o[w]!==void 0)return o[w];fe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let lt=y;if(y===o.RED&&(k===o.FLOAT&&(lt=o.R32F),k===o.HALF_FLOAT&&(lt=o.R16F),k===o.UNSIGNED_BYTE&&(lt=o.R8)),y===o.RED_INTEGER&&(k===o.UNSIGNED_BYTE&&(lt=o.R8UI),k===o.UNSIGNED_SHORT&&(lt=o.R16UI),k===o.UNSIGNED_INT&&(lt=o.R32UI),k===o.BYTE&&(lt=o.R8I),k===o.SHORT&&(lt=o.R16I),k===o.INT&&(lt=o.R32I)),y===o.RG&&(k===o.FLOAT&&(lt=o.RG32F),k===o.HALF_FLOAT&&(lt=o.RG16F),k===o.UNSIGNED_BYTE&&(lt=o.RG8)),y===o.RG_INTEGER&&(k===o.UNSIGNED_BYTE&&(lt=o.RG8UI),k===o.UNSIGNED_SHORT&&(lt=o.RG16UI),k===o.UNSIGNED_INT&&(lt=o.RG32UI),k===o.BYTE&&(lt=o.RG8I),k===o.SHORT&&(lt=o.RG16I),k===o.INT&&(lt=o.RG32I)),y===o.RGB_INTEGER&&(k===o.UNSIGNED_BYTE&&(lt=o.RGB8UI),k===o.UNSIGNED_SHORT&&(lt=o.RGB16UI),k===o.UNSIGNED_INT&&(lt=o.RGB32UI),k===o.BYTE&&(lt=o.RGB8I),k===o.SHORT&&(lt=o.RGB16I),k===o.INT&&(lt=o.RGB32I)),y===o.RGBA_INTEGER&&(k===o.UNSIGNED_BYTE&&(lt=o.RGBA8UI),k===o.UNSIGNED_SHORT&&(lt=o.RGBA16UI),k===o.UNSIGNED_INT&&(lt=o.RGBA32UI),k===o.BYTE&&(lt=o.RGBA8I),k===o.SHORT&&(lt=o.RGBA16I),k===o.INT&&(lt=o.RGBA32I)),y===o.RGB&&(k===o.UNSIGNED_INT_5_9_9_9_REV&&(lt=o.RGB9_E5),k===o.UNSIGNED_INT_10F_11F_11F_REV&&(lt=o.R11F_G11F_B10F)),y===o.RGBA){const Wt=_t?ku:Ce.getTransfer(ct);k===o.FLOAT&&(lt=o.RGBA32F),k===o.HALF_FLOAT&&(lt=o.RGBA16F),k===o.UNSIGNED_BYTE&&(lt=Wt===He?o.SRGB8_ALPHA8:o.RGBA8),k===o.UNSIGNED_SHORT_4_4_4_4&&(lt=o.RGBA4),k===o.UNSIGNED_SHORT_5_5_5_1&&(lt=o.RGB5_A1)}return(lt===o.R16F||lt===o.R32F||lt===o.RG16F||lt===o.RG32F||lt===o.RGBA16F||lt===o.RGBA32F)&&e.get("EXT_color_buffer_float"),lt}function O(w,y){let k;return w?y===null||y===Xi||y===jo?k=o.DEPTH24_STENCIL8:y===zi?k=o.DEPTH32F_STENCIL8:y===Zo&&(k=o.DEPTH24_STENCIL8,fe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Xi||y===jo?k=o.DEPTH_COMPONENT24:y===zi?k=o.DEPTH_COMPONENT32F:y===Zo&&(k=o.DEPTH_COMPONENT16),k}function I(w,y){return M(w)===!0||w.isFramebufferTexture&&w.minFilter!==Cn&&w.minFilter!==$e?Math.log2(Math.max(y.width,y.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?y.mipmaps.length:1}function H(w){const y=w.target;y.removeEventListener("dispose",H),K(y),y.isVideoTexture&&_.delete(y)}function P(w){const y=w.target;y.removeEventListener("dispose",P),D(y)}function K(w){const y=r.get(w);if(y.__webglInit===void 0)return;const k=w.source,ct=x.get(k);if(ct){const _t=ct[y.__cacheKey];_t.usedTimes--,_t.usedTimes===0&&R(w),Object.keys(ct).length===0&&x.delete(k)}r.remove(w)}function R(w){const y=r.get(w);o.deleteTexture(y.__webglTexture);const k=w.source,ct=x.get(k);delete ct[y.__cacheKey],d.memory.textures--}function D(w){const y=r.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),r.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let ct=0;ct<6;ct++){if(Array.isArray(y.__webglFramebuffer[ct]))for(let _t=0;_t<y.__webglFramebuffer[ct].length;_t++)o.deleteFramebuffer(y.__webglFramebuffer[ct][_t]);else o.deleteFramebuffer(y.__webglFramebuffer[ct]);y.__webglDepthbuffer&&o.deleteRenderbuffer(y.__webglDepthbuffer[ct])}else{if(Array.isArray(y.__webglFramebuffer))for(let ct=0;ct<y.__webglFramebuffer.length;ct++)o.deleteFramebuffer(y.__webglFramebuffer[ct]);else o.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&o.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&o.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let ct=0;ct<y.__webglColorRenderbuffer.length;ct++)y.__webglColorRenderbuffer[ct]&&o.deleteRenderbuffer(y.__webglColorRenderbuffer[ct]);y.__webglDepthRenderbuffer&&o.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const k=w.textures;for(let ct=0,_t=k.length;ct<_t;ct++){const lt=r.get(k[ct]);lt.__webglTexture&&(o.deleteTexture(lt.__webglTexture),d.memory.textures--),r.remove(k[ct])}r.remove(w)}let X=0;function rt(){X=0}function at(){const w=X;return w>=l.maxTextures&&fe("WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+l.maxTextures),X+=1,w}function ft(w){const y=[];return y.push(w.wrapS),y.push(w.wrapT),y.push(w.wrapR||0),y.push(w.magFilter),y.push(w.minFilter),y.push(w.anisotropy),y.push(w.internalFormat),y.push(w.format),y.push(w.type),y.push(w.generateMipmaps),y.push(w.premultiplyAlpha),y.push(w.flipY),y.push(w.unpackAlignment),y.push(w.colorSpace),y.join()}function ut(w,y){const k=r.get(w);if(w.isVideoTexture&&te(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&k.__version!==w.version){const ct=w.image;if(ct===null)fe("WebGLRenderer: Texture marked for update but no image data found.");else if(ct.complete===!1)fe("WebGLRenderer: Texture marked for update but image is incomplete");else{$(k,w,y);return}}else w.isExternalTexture&&(k.__webglTexture=w.sourceTexture?w.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,k.__webglTexture,o.TEXTURE0+y)}function L(w,y){const k=r.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&k.__version!==w.version){$(k,w,y);return}else w.isExternalTexture&&(k.__webglTexture=w.sourceTexture?w.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,k.__webglTexture,o.TEXTURE0+y)}function G(w,y){const k=r.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&k.__version!==w.version){$(k,w,y);return}i.bindTexture(o.TEXTURE_3D,k.__webglTexture,o.TEXTURE0+y)}function it(w,y){const k=r.get(w);if(w.isCubeDepthTexture!==!0&&w.version>0&&k.__version!==w.version){dt(k,w,y);return}i.bindTexture(o.TEXTURE_CUBE_MAP,k.__webglTexture,o.TEXTURE0+y)}const xt={[Zd]:o.REPEAT,[pa]:o.CLAMP_TO_EDGE,[jd]:o.MIRRORED_REPEAT},St={[Cn]:o.NEAREST,[tM]:o.NEAREST_MIPMAP_NEAREST,[mu]:o.NEAREST_MIPMAP_LINEAR,[$e]:o.LINEAR,[sd]:o.LINEAR_MIPMAP_NEAREST,[Dr]:o.LINEAR_MIPMAP_LINEAR},U={[aM]:o.NEVER,[uM]:o.ALWAYS,[rM]:o.LESS,[Gh]:o.LEQUAL,[sM]:o.EQUAL,[Vh]:o.GEQUAL,[oM]:o.GREATER,[lM]:o.NOTEQUAL};function j(w,y){if(y.type===zi&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===$e||y.magFilter===sd||y.magFilter===mu||y.magFilter===Dr||y.minFilter===$e||y.minFilter===sd||y.minFilter===mu||y.minFilter===Dr)&&fe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(w,o.TEXTURE_WRAP_S,xt[y.wrapS]),o.texParameteri(w,o.TEXTURE_WRAP_T,xt[y.wrapT]),(w===o.TEXTURE_3D||w===o.TEXTURE_2D_ARRAY)&&o.texParameteri(w,o.TEXTURE_WRAP_R,xt[y.wrapR]),o.texParameteri(w,o.TEXTURE_MAG_FILTER,St[y.magFilter]),o.texParameteri(w,o.TEXTURE_MIN_FILTER,St[y.minFilter]),y.compareFunction&&(o.texParameteri(w,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(w,o.TEXTURE_COMPARE_FUNC,U[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Cn||y.minFilter!==mu&&y.minFilter!==Dr||y.type===zi&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||r.get(y).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");o.texParameterf(w,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,l.getMaxAnisotropy())),r.get(y).__currentAnisotropy=y.anisotropy}}}function mt(w,y){let k=!1;w.__webglInit===void 0&&(w.__webglInit=!0,y.addEventListener("dispose",H));const ct=y.source;let _t=x.get(ct);_t===void 0&&(_t={},x.set(ct,_t));const lt=ft(y);if(lt!==w.__cacheKey){_t[lt]===void 0&&(_t[lt]={texture:o.createTexture(),usedTimes:0},d.memory.textures++,k=!0),_t[lt].usedTimes++;const Wt=_t[w.__cacheKey];Wt!==void 0&&(_t[w.__cacheKey].usedTimes--,Wt.usedTimes===0&&R(y)),w.__cacheKey=lt,w.__webglTexture=_t[lt].texture}return k}function Rt(w,y,k){return Math.floor(Math.floor(w/k)/y)}function Gt(w,y,k,ct){const lt=w.updateRanges;if(lt.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,y.width,y.height,k,ct,y.data);else{lt.sort((Mt,Tt)=>Mt.start-Tt.start);let Wt=0;for(let Mt=1;Mt<lt.length;Mt++){const Tt=lt[Wt],Ft=lt[Mt],zt=Tt.start+Tt.count,Ut=Rt(Ft.start,y.width,4),he=Rt(Tt.start,y.width,4);Ft.start<=zt+1&&Ut===he&&Rt(Ft.start+Ft.count-1,y.width,4)===Ut?Tt.count=Math.max(Tt.count,Ft.start+Ft.count-Tt.start):(++Wt,lt[Wt]=Ft)}lt.length=Wt+1;const wt=o.getParameter(o.UNPACK_ROW_LENGTH),Zt=o.getParameter(o.UNPACK_SKIP_PIXELS),ie=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,y.width);for(let Mt=0,Tt=lt.length;Mt<Tt;Mt++){const Ft=lt[Mt],zt=Math.floor(Ft.start/4),Ut=Math.ceil(Ft.count/4),he=zt%y.width,W=Math.floor(zt/y.width),Nt=Ut,At=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,he),o.pixelStorei(o.UNPACK_SKIP_ROWS,W),i.texSubImage2D(o.TEXTURE_2D,0,he,W,Nt,At,k,ct,y.data)}w.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,wt),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Zt),o.pixelStorei(o.UNPACK_SKIP_ROWS,ie)}}function $(w,y,k){let ct=o.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(ct=o.TEXTURE_2D_ARRAY),y.isData3DTexture&&(ct=o.TEXTURE_3D);const _t=mt(w,y),lt=y.source;i.bindTexture(ct,w.__webglTexture,o.TEXTURE0+k);const Wt=r.get(lt);if(lt.version!==Wt.__version||_t===!0){i.activeTexture(o.TEXTURE0+k);const wt=Ce.getPrimaries(Ce.workingColorSpace),Zt=y.colorSpace===Ja?null:Ce.getPrimaries(y.colorSpace),ie=y.colorSpace===Ja||wt===Zt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,y.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,y.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);let Mt=C(y.image,!1,l.maxTextureSize);Mt=oe(y,Mt);const Tt=u.convert(y.format,y.colorSpace),Ft=u.convert(y.type);let zt=N(y.internalFormat,Tt,Ft,y.colorSpace,y.isVideoTexture);j(ct,y);let Ut;const he=y.mipmaps,W=y.isVideoTexture!==!0,Nt=Wt.__version===void 0||_t===!0,At=lt.dataReady,Ht=I(y,Mt);if(y.isDepthTexture)zt=O(y.format===Ur,y.type),Nt&&(W?i.texStorage2D(o.TEXTURE_2D,1,zt,Mt.width,Mt.height):i.texImage2D(o.TEXTURE_2D,0,zt,Mt.width,Mt.height,0,Tt,Ft,null));else if(y.isDataTexture)if(he.length>0){W&&Nt&&i.texStorage2D(o.TEXTURE_2D,Ht,zt,he[0].width,he[0].height);for(let yt=0,vt=he.length;yt<vt;yt++)Ut=he[yt],W?At&&i.texSubImage2D(o.TEXTURE_2D,yt,0,0,Ut.width,Ut.height,Tt,Ft,Ut.data):i.texImage2D(o.TEXTURE_2D,yt,zt,Ut.width,Ut.height,0,Tt,Ft,Ut.data);y.generateMipmaps=!1}else W?(Nt&&i.texStorage2D(o.TEXTURE_2D,Ht,zt,Mt.width,Mt.height),At&&Gt(y,Mt,Tt,Ft)):i.texImage2D(o.TEXTURE_2D,0,zt,Mt.width,Mt.height,0,Tt,Ft,Mt.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){W&&Nt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Ht,zt,he[0].width,he[0].height,Mt.depth);for(let yt=0,vt=he.length;yt<vt;yt++)if(Ut=he[yt],y.format!==_i)if(Tt!==null)if(W){if(At)if(y.layerUpdates.size>0){const Ct=d_(Ut.width,Ut.height,y.format,y.type);for(const ue of y.layerUpdates){const Fe=Ut.data.subarray(ue*Ct/Ut.data.BYTES_PER_ELEMENT,(ue+1)*Ct/Ut.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,yt,0,0,ue,Ut.width,Ut.height,1,Tt,Fe)}y.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,yt,0,0,0,Ut.width,Ut.height,Mt.depth,Tt,Ut.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,yt,zt,Ut.width,Ut.height,Mt.depth,0,Ut.data,0,0);else fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else W?At&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,yt,0,0,0,Ut.width,Ut.height,Mt.depth,Tt,Ft,Ut.data):i.texImage3D(o.TEXTURE_2D_ARRAY,yt,zt,Ut.width,Ut.height,Mt.depth,0,Tt,Ft,Ut.data)}else{W&&Nt&&i.texStorage2D(o.TEXTURE_2D,Ht,zt,he[0].width,he[0].height);for(let yt=0,vt=he.length;yt<vt;yt++)Ut=he[yt],y.format!==_i?Tt!==null?W?At&&i.compressedTexSubImage2D(o.TEXTURE_2D,yt,0,0,Ut.width,Ut.height,Tt,Ut.data):i.compressedTexImage2D(o.TEXTURE_2D,yt,zt,Ut.width,Ut.height,0,Ut.data):fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):W?At&&i.texSubImage2D(o.TEXTURE_2D,yt,0,0,Ut.width,Ut.height,Tt,Ft,Ut.data):i.texImage2D(o.TEXTURE_2D,yt,zt,Ut.width,Ut.height,0,Tt,Ft,Ut.data)}else if(y.isDataArrayTexture)if(W){if(Nt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Ht,zt,Mt.width,Mt.height,Mt.depth),At)if(y.layerUpdates.size>0){const yt=d_(Mt.width,Mt.height,y.format,y.type);for(const vt of y.layerUpdates){const Ct=Mt.data.subarray(vt*yt/Mt.data.BYTES_PER_ELEMENT,(vt+1)*yt/Mt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,vt,Mt.width,Mt.height,1,Tt,Ft,Ct)}y.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Mt.width,Mt.height,Mt.depth,Tt,Ft,Mt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,zt,Mt.width,Mt.height,Mt.depth,0,Tt,Ft,Mt.data);else if(y.isData3DTexture)W?(Nt&&i.texStorage3D(o.TEXTURE_3D,Ht,zt,Mt.width,Mt.height,Mt.depth),At&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Mt.width,Mt.height,Mt.depth,Tt,Ft,Mt.data)):i.texImage3D(o.TEXTURE_3D,0,zt,Mt.width,Mt.height,Mt.depth,0,Tt,Ft,Mt.data);else if(y.isFramebufferTexture){if(Nt)if(W)i.texStorage2D(o.TEXTURE_2D,Ht,zt,Mt.width,Mt.height);else{let yt=Mt.width,vt=Mt.height;for(let Ct=0;Ct<Ht;Ct++)i.texImage2D(o.TEXTURE_2D,Ct,zt,yt,vt,0,Tt,Ft,null),yt>>=1,vt>>=1}}else if(he.length>0){if(W&&Nt){const yt=Bt(he[0]);i.texStorage2D(o.TEXTURE_2D,Ht,zt,yt.width,yt.height)}for(let yt=0,vt=he.length;yt<vt;yt++)Ut=he[yt],W?At&&i.texSubImage2D(o.TEXTURE_2D,yt,0,0,Tt,Ft,Ut):i.texImage2D(o.TEXTURE_2D,yt,zt,Tt,Ft,Ut);y.generateMipmaps=!1}else if(W){if(Nt){const yt=Bt(Mt);i.texStorage2D(o.TEXTURE_2D,Ht,zt,yt.width,yt.height)}At&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Tt,Ft,Mt)}else i.texImage2D(o.TEXTURE_2D,0,zt,Tt,Ft,Mt);M(y)&&S(ct),Wt.__version=lt.version,y.onUpdate&&y.onUpdate(y)}w.__version=y.version}function dt(w,y,k){if(y.image.length!==6)return;const ct=mt(w,y),_t=y.source;i.bindTexture(o.TEXTURE_CUBE_MAP,w.__webglTexture,o.TEXTURE0+k);const lt=r.get(_t);if(_t.version!==lt.__version||ct===!0){i.activeTexture(o.TEXTURE0+k);const Wt=Ce.getPrimaries(Ce.workingColorSpace),wt=y.colorSpace===Ja?null:Ce.getPrimaries(y.colorSpace),Zt=y.colorSpace===Ja||Wt===wt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,y.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,y.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Zt);const ie=y.isCompressedTexture||y.image[0].isCompressedTexture,Mt=y.image[0]&&y.image[0].isDataTexture,Tt=[];for(let vt=0;vt<6;vt++)!ie&&!Mt?Tt[vt]=C(y.image[vt],!0,l.maxCubemapSize):Tt[vt]=Mt?y.image[vt].image:y.image[vt],Tt[vt]=oe(y,Tt[vt]);const Ft=Tt[0],zt=u.convert(y.format,y.colorSpace),Ut=u.convert(y.type),he=N(y.internalFormat,zt,Ut,y.colorSpace),W=y.isVideoTexture!==!0,Nt=lt.__version===void 0||ct===!0,At=_t.dataReady;let Ht=I(y,Ft);j(o.TEXTURE_CUBE_MAP,y);let yt;if(ie){W&&Nt&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Ht,he,Ft.width,Ft.height);for(let vt=0;vt<6;vt++){yt=Tt[vt].mipmaps;for(let Ct=0;Ct<yt.length;Ct++){const ue=yt[Ct];y.format!==_i?zt!==null?W?At&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ct,0,0,ue.width,ue.height,zt,ue.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ct,he,ue.width,ue.height,0,ue.data):fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?At&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ct,0,0,ue.width,ue.height,zt,Ut,ue.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ct,he,ue.width,ue.height,0,zt,Ut,ue.data)}}}else{if(yt=y.mipmaps,W&&Nt){yt.length>0&&Ht++;const vt=Bt(Tt[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Ht,he,vt.width,vt.height)}for(let vt=0;vt<6;vt++)if(Mt){W?At&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,Tt[vt].width,Tt[vt].height,zt,Ut,Tt[vt].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,he,Tt[vt].width,Tt[vt].height,0,zt,Ut,Tt[vt].data);for(let Ct=0;Ct<yt.length;Ct++){const Fe=yt[Ct].image[vt].image;W?At&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ct+1,0,0,Fe.width,Fe.height,zt,Ut,Fe.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ct+1,he,Fe.width,Fe.height,0,zt,Ut,Fe.data)}}else{W?At&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,zt,Ut,Tt[vt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,he,zt,Ut,Tt[vt]);for(let Ct=0;Ct<yt.length;Ct++){const ue=yt[Ct];W?At&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ct+1,0,0,zt,Ut,ue.image[vt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ct+1,he,zt,Ut,ue.image[vt])}}}M(y)&&S(o.TEXTURE_CUBE_MAP),lt.__version=_t.version,y.onUpdate&&y.onUpdate(y)}w.__version=y.version}function Dt(w,y,k,ct,_t,lt){const Wt=u.convert(k.format,k.colorSpace),wt=u.convert(k.type),Zt=N(k.internalFormat,Wt,wt,k.colorSpace),ie=r.get(y),Mt=r.get(k);if(Mt.__renderTarget=y,!ie.__hasExternalTextures){const Tt=Math.max(1,y.width>>lt),Ft=Math.max(1,y.height>>lt);_t===o.TEXTURE_3D||_t===o.TEXTURE_2D_ARRAY?i.texImage3D(_t,lt,Zt,Tt,Ft,y.depth,0,Wt,wt,null):i.texImage2D(_t,lt,Zt,Tt,Ft,0,Wt,wt,null)}i.bindFramebuffer(o.FRAMEBUFFER,w),xe(y)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ct,_t,Mt.__webglTexture,0,z(y)):(_t===o.TEXTURE_2D||_t>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&_t<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,ct,_t,Mt.__webglTexture,lt),i.bindFramebuffer(o.FRAMEBUFFER,null)}function kt(w,y,k){if(o.bindRenderbuffer(o.RENDERBUFFER,w),y.depthBuffer){const ct=y.depthTexture,_t=ct&&ct.isDepthTexture?ct.type:null,lt=O(y.stencilBuffer,_t),Wt=y.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;xe(y)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,z(y),lt,y.width,y.height):k?o.renderbufferStorageMultisample(o.RENDERBUFFER,z(y),lt,y.width,y.height):o.renderbufferStorage(o.RENDERBUFFER,lt,y.width,y.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Wt,o.RENDERBUFFER,w)}else{const ct=y.textures;for(let _t=0;_t<ct.length;_t++){const lt=ct[_t],Wt=u.convert(lt.format,lt.colorSpace),wt=u.convert(lt.type),Zt=N(lt.internalFormat,Wt,wt,lt.colorSpace);xe(y)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,z(y),Zt,y.width,y.height):k?o.renderbufferStorageMultisample(o.RENDERBUFFER,z(y),Zt,y.width,y.height):o.renderbufferStorage(o.RENDERBUFFER,Zt,y.width,y.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Vt(w,y,k){const ct=y.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(o.FRAMEBUFFER,w),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const _t=r.get(y.depthTexture);if(_t.__renderTarget=y,(!_t.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),ct){if(_t.__webglInit===void 0&&(_t.__webglInit=!0,y.depthTexture.addEventListener("dispose",H)),_t.__webglTexture===void 0){_t.__webglTexture=o.createTexture(),i.bindTexture(o.TEXTURE_CUBE_MAP,_t.__webglTexture),j(o.TEXTURE_CUBE_MAP,y.depthTexture);const ie=u.convert(y.depthTexture.format),Mt=u.convert(y.depthTexture.type);let Tt;y.depthTexture.format===va?Tt=o.DEPTH_COMPONENT24:y.depthTexture.format===Ur&&(Tt=o.DEPTH24_STENCIL8);for(let Ft=0;Ft<6;Ft++)o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ft,0,Tt,y.width,y.height,0,ie,Mt,null)}}else ut(y.depthTexture,0);const lt=_t.__webglTexture,Wt=z(y),wt=ct?o.TEXTURE_CUBE_MAP_POSITIVE_X+k:o.TEXTURE_2D,Zt=y.depthTexture.format===Ur?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(y.depthTexture.format===va)xe(y)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Zt,wt,lt,0,Wt):o.framebufferTexture2D(o.FRAMEBUFFER,Zt,wt,lt,0);else if(y.depthTexture.format===Ur)xe(y)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Zt,wt,lt,0,Wt):o.framebufferTexture2D(o.FRAMEBUFFER,Zt,wt,lt,0);else throw new Error("Unknown depthTexture format")}function _e(w){const y=r.get(w),k=w.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==w.depthTexture){const ct=w.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),ct){const _t=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,ct.removeEventListener("dispose",_t)};ct.addEventListener("dispose",_t),y.__depthDisposeCallback=_t}y.__boundDepthTexture=ct}if(w.depthTexture&&!y.__autoAllocateDepthBuffer)if(k)for(let ct=0;ct<6;ct++)Vt(y.__webglFramebuffer[ct],w,ct);else{const ct=w.texture.mipmaps;ct&&ct.length>0?Vt(y.__webglFramebuffer[0],w,0):Vt(y.__webglFramebuffer,w,0)}else if(k){y.__webglDepthbuffer=[];for(let ct=0;ct<6;ct++)if(i.bindFramebuffer(o.FRAMEBUFFER,y.__webglFramebuffer[ct]),y.__webglDepthbuffer[ct]===void 0)y.__webglDepthbuffer[ct]=o.createRenderbuffer(),kt(y.__webglDepthbuffer[ct],w,!1);else{const _t=w.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,lt=y.__webglDepthbuffer[ct];o.bindRenderbuffer(o.RENDERBUFFER,lt),o.framebufferRenderbuffer(o.FRAMEBUFFER,_t,o.RENDERBUFFER,lt)}}else{const ct=w.texture.mipmaps;if(ct&&ct.length>0?i.bindFramebuffer(o.FRAMEBUFFER,y.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=o.createRenderbuffer(),kt(y.__webglDepthbuffer,w,!1);else{const _t=w.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,lt=y.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,lt),o.framebufferRenderbuffer(o.FRAMEBUFFER,_t,o.RENDERBUFFER,lt)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function Et(w,y,k){const ct=r.get(w);y!==void 0&&Dt(ct.__webglFramebuffer,w,w.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),k!==void 0&&_e(w)}function Pt(w){const y=w.texture,k=r.get(w),ct=r.get(y);w.addEventListener("dispose",P);const _t=w.textures,lt=w.isWebGLCubeRenderTarget===!0,Wt=_t.length>1;if(Wt||(ct.__webglTexture===void 0&&(ct.__webglTexture=o.createTexture()),ct.__version=y.version,d.memory.textures++),lt){k.__webglFramebuffer=[];for(let wt=0;wt<6;wt++)if(y.mipmaps&&y.mipmaps.length>0){k.__webglFramebuffer[wt]=[];for(let Zt=0;Zt<y.mipmaps.length;Zt++)k.__webglFramebuffer[wt][Zt]=o.createFramebuffer()}else k.__webglFramebuffer[wt]=o.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){k.__webglFramebuffer=[];for(let wt=0;wt<y.mipmaps.length;wt++)k.__webglFramebuffer[wt]=o.createFramebuffer()}else k.__webglFramebuffer=o.createFramebuffer();if(Wt)for(let wt=0,Zt=_t.length;wt<Zt;wt++){const ie=r.get(_t[wt]);ie.__webglTexture===void 0&&(ie.__webglTexture=o.createTexture(),d.memory.textures++)}if(w.samples>0&&xe(w)===!1){k.__webglMultisampledFramebuffer=o.createFramebuffer(),k.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let wt=0;wt<_t.length;wt++){const Zt=_t[wt];k.__webglColorRenderbuffer[wt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,k.__webglColorRenderbuffer[wt]);const ie=u.convert(Zt.format,Zt.colorSpace),Mt=u.convert(Zt.type),Tt=N(Zt.internalFormat,ie,Mt,Zt.colorSpace,w.isXRRenderTarget===!0),Ft=z(w);o.renderbufferStorageMultisample(o.RENDERBUFFER,Ft,Tt,w.width,w.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+wt,o.RENDERBUFFER,k.__webglColorRenderbuffer[wt])}o.bindRenderbuffer(o.RENDERBUFFER,null),w.depthBuffer&&(k.__webglDepthRenderbuffer=o.createRenderbuffer(),kt(k.__webglDepthRenderbuffer,w,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(lt){i.bindTexture(o.TEXTURE_CUBE_MAP,ct.__webglTexture),j(o.TEXTURE_CUBE_MAP,y);for(let wt=0;wt<6;wt++)if(y.mipmaps&&y.mipmaps.length>0)for(let Zt=0;Zt<y.mipmaps.length;Zt++)Dt(k.__webglFramebuffer[wt][Zt],w,y,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+wt,Zt);else Dt(k.__webglFramebuffer[wt],w,y,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0);M(y)&&S(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Wt){for(let wt=0,Zt=_t.length;wt<Zt;wt++){const ie=_t[wt],Mt=r.get(ie);let Tt=o.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(Tt=w.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Tt,Mt.__webglTexture),j(Tt,ie),Dt(k.__webglFramebuffer,w,ie,o.COLOR_ATTACHMENT0+wt,Tt,0),M(ie)&&S(Tt)}i.unbindTexture()}else{let wt=o.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(wt=w.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(wt,ct.__webglTexture),j(wt,y),y.mipmaps&&y.mipmaps.length>0)for(let Zt=0;Zt<y.mipmaps.length;Zt++)Dt(k.__webglFramebuffer[Zt],w,y,o.COLOR_ATTACHMENT0,wt,Zt);else Dt(k.__webglFramebuffer,w,y,o.COLOR_ATTACHMENT0,wt,0);M(y)&&S(wt),i.unbindTexture()}w.depthBuffer&&_e(w)}function bt(w){const y=w.textures;for(let k=0,ct=y.length;k<ct;k++){const _t=y[k];if(M(_t)){const lt=F(w),Wt=r.get(_t).__webglTexture;i.bindTexture(lt,Wt),S(lt),i.unbindTexture()}}}const ne=[],Jt=[];function le(w){if(w.samples>0){if(xe(w)===!1){const y=w.textures,k=w.width,ct=w.height;let _t=o.COLOR_BUFFER_BIT;const lt=w.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Wt=r.get(w),wt=y.length>1;if(wt)for(let ie=0;ie<y.length;ie++)i.bindFramebuffer(o.FRAMEBUFFER,Wt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+ie,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Wt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+ie,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Wt.__webglMultisampledFramebuffer);const Zt=w.texture.mipmaps;Zt&&Zt.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Wt.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Wt.__webglFramebuffer);for(let ie=0;ie<y.length;ie++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(_t|=o.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(_t|=o.STENCIL_BUFFER_BIT)),wt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Wt.__webglColorRenderbuffer[ie]);const Mt=r.get(y[ie]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Mt,0)}o.blitFramebuffer(0,0,k,ct,0,0,k,ct,_t,o.NEAREST),m===!0&&(ne.length=0,Jt.length=0,ne.push(o.COLOR_ATTACHMENT0+ie),w.depthBuffer&&w.resolveDepthBuffer===!1&&(ne.push(lt),Jt.push(lt),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,Jt)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,ne))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),wt)for(let ie=0;ie<y.length;ie++){i.bindFramebuffer(o.FRAMEBUFFER,Wt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+ie,o.RENDERBUFFER,Wt.__webglColorRenderbuffer[ie]);const Mt=r.get(y[ie]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Wt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+ie,o.TEXTURE_2D,Mt,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Wt.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&m){const y=w.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[y])}}}function z(w){return Math.min(l.maxSamples,w.samples)}function xe(w){const y=r.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function te(w){const y=d.render.frame;_.get(w)!==y&&(_.set(w,y),w.update())}function oe(w,y){const k=w.colorSpace,ct=w.format,_t=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||k!==zs&&k!==Ja&&(Ce.getTransfer(k)===He?(ct!==_i||_t!==gi)&&fe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Re("WebGLTextures: Unsupported texture color space:",k)),y}function Bt(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(p.width=w.naturalWidth||w.width,p.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(p.width=w.displayWidth,p.height=w.displayHeight):(p.width=w.width,p.height=w.height),p}this.allocateTextureUnit=at,this.resetTextureUnits=rt,this.setTexture2D=ut,this.setTexture2DArray=L,this.setTexture3D=G,this.setTextureCube=it,this.rebindTextures=Et,this.setupRenderTarget=Pt,this.updateRenderTargetMipmap=bt,this.updateMultisampleRenderTarget=le,this.setupDepthRenderbuffer=_e,this.setupFrameBufferTexture=Dt,this.useMultisampledRTT=xe,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function t1(o,e){function i(r,l=Ja){let u;const d=Ce.getTransfer(l);if(r===gi)return o.UNSIGNED_BYTE;if(r===Fh)return o.UNSIGNED_SHORT_4_4_4_4;if(r===zh)return o.UNSIGNED_SHORT_5_5_5_1;if(r===Y_)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===Z_)return o.UNSIGNED_INT_10F_11F_11F_REV;if(r===W_)return o.BYTE;if(r===q_)return o.SHORT;if(r===Zo)return o.UNSIGNED_SHORT;if(r===Ph)return o.INT;if(r===Xi)return o.UNSIGNED_INT;if(r===zi)return o.FLOAT;if(r===_a)return o.HALF_FLOAT;if(r===j_)return o.ALPHA;if(r===K_)return o.RGB;if(r===_i)return o.RGBA;if(r===va)return o.DEPTH_COMPONENT;if(r===Ur)return o.DEPTH_STENCIL;if(r===Q_)return o.RED;if(r===Ih)return o.RED_INTEGER;if(r===Fs)return o.RG;if(r===Bh)return o.RG_INTEGER;if(r===Hh)return o.RGBA_INTEGER;if(r===Bu||r===Hu||r===Gu||r===Vu)if(d===He)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===Bu)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Hu)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Gu)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Vu)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===Bu)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Hu)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Gu)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Vu)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Kd||r===Qd||r===Jd||r===$d)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===Kd)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Qd)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Jd)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===$d)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===th||r===eh||r===nh||r===ih||r===ah||r===rh||r===sh)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(r===th||r===eh)return d===He?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===nh)return d===He?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC;if(r===ih)return u.COMPRESSED_R11_EAC;if(r===ah)return u.COMPRESSED_SIGNED_R11_EAC;if(r===rh)return u.COMPRESSED_RG11_EAC;if(r===sh)return u.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===oh||r===lh||r===uh||r===ch||r===fh||r===dh||r===hh||r===ph||r===mh||r===gh||r===_h||r===vh||r===xh||r===Sh)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(r===oh)return d===He?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===lh)return d===He?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===uh)return d===He?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===ch)return d===He?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===fh)return d===He?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===dh)return d===He?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===hh)return d===He?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===ph)return d===He?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===mh)return d===He?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===gh)return d===He?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===_h)return d===He?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===vh)return d===He?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===xh)return d===He?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Sh)return d===He?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Mh||r===yh||r===Eh)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(r===Mh)return d===He?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===yh)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Eh)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Th||r===bh||r===Ah||r===Rh)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(r===Th)return u.COMPRESSED_RED_RGTC1_EXT;if(r===bh)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Ah)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Rh)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===jo?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}const e1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,n1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class i1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const r=new uv(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new ki({vertexShader:e1,fragmentShader:n1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Fn(new $a(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class a1 extends Bs{constructor(e,i){super();const r=this;let l=null,u=1,d=null,h="local-floor",m=1,p=null,_=null,g=null,x=null,E=null,A=null;const C=typeof XRWebGLBinding<"u",M=new i1,S={},F=i.getContextAttributes();let N=null,O=null;const I=[],H=[],P=new Ge;let K=null;const R=new pi;R.viewport=new an;const D=new pi;D.viewport=new an;const X=[R,D],rt=new hy;let at=null,ft=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let dt=I[$];return dt===void 0&&(dt=new Rd,I[$]=dt),dt.getTargetRaySpace()},this.getControllerGrip=function($){let dt=I[$];return dt===void 0&&(dt=new Rd,I[$]=dt),dt.getGripSpace()},this.getHand=function($){let dt=I[$];return dt===void 0&&(dt=new Rd,I[$]=dt),dt.getHandSpace()};function ut($){const dt=H.indexOf($.inputSource);if(dt===-1)return;const Dt=I[dt];Dt!==void 0&&(Dt.update($.inputSource,$.frame,p||d),Dt.dispatchEvent({type:$.type,data:$.inputSource}))}function L(){l.removeEventListener("select",ut),l.removeEventListener("selectstart",ut),l.removeEventListener("selectend",ut),l.removeEventListener("squeeze",ut),l.removeEventListener("squeezestart",ut),l.removeEventListener("squeezeend",ut),l.removeEventListener("end",L),l.removeEventListener("inputsourceschange",G);for(let $=0;$<I.length;$++){const dt=H[$];dt!==null&&(H[$]=null,I[$].disconnect(dt))}at=null,ft=null,M.reset();for(const $ in S)delete S[$];e.setRenderTarget(N),E=null,x=null,g=null,l=null,O=null,Gt.stop(),r.isPresenting=!1,e.setPixelRatio(K),e.setSize(P.width,P.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){u=$,r.isPresenting===!0&&fe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){h=$,r.isPresenting===!0&&fe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||d},this.setReferenceSpace=function($){p=$},this.getBaseLayer=function(){return x!==null?x:E},this.getBinding=function(){return g===null&&C&&(g=new XRWebGLBinding(l,i)),g},this.getFrame=function(){return A},this.getSession=function(){return l},this.setSession=async function($){if(l=$,l!==null){if(N=e.getRenderTarget(),l.addEventListener("select",ut),l.addEventListener("selectstart",ut),l.addEventListener("selectend",ut),l.addEventListener("squeeze",ut),l.addEventListener("squeezestart",ut),l.addEventListener("squeezeend",ut),l.addEventListener("end",L),l.addEventListener("inputsourceschange",G),F.xrCompatible!==!0&&await i.makeXRCompatible(),K=e.getPixelRatio(),e.getSize(P),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let Dt=null,kt=null,Vt=null;F.depth&&(Vt=F.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Dt=F.stencil?Ur:va,kt=F.stencil?jo:Xi);const _e={colorFormat:i.RGBA8,depthFormat:Vt,scaleFactor:u};g=this.getBinding(),x=g.createProjectionLayer(_e),l.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),O=new Hi(x.textureWidth,x.textureHeight,{format:_i,type:gi,depthTexture:new $o(x.textureWidth,x.textureHeight,kt,void 0,void 0,void 0,void 0,void 0,void 0,Dt),stencilBuffer:F.stencil,colorSpace:e.outputColorSpace,samples:F.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const Dt={antialias:F.antialias,alpha:!0,depth:F.depth,stencil:F.stencil,framebufferScaleFactor:u};E=new XRWebGLLayer(l,i,Dt),l.updateRenderState({baseLayer:E}),e.setPixelRatio(1),e.setSize(E.framebufferWidth,E.framebufferHeight,!1),O=new Hi(E.framebufferWidth,E.framebufferHeight,{format:_i,type:gi,colorSpace:e.outputColorSpace,stencilBuffer:F.stencil,resolveDepthBuffer:E.ignoreDepthValues===!1,resolveStencilBuffer:E.ignoreDepthValues===!1})}O.isXRRenderTarget=!0,this.setFoveation(m),p=null,d=await l.requestReferenceSpace(h),Gt.setContext(l),Gt.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function G($){for(let dt=0;dt<$.removed.length;dt++){const Dt=$.removed[dt],kt=H.indexOf(Dt);kt>=0&&(H[kt]=null,I[kt].disconnect(Dt))}for(let dt=0;dt<$.added.length;dt++){const Dt=$.added[dt];let kt=H.indexOf(Dt);if(kt===-1){for(let _e=0;_e<I.length;_e++)if(_e>=H.length){H.push(Dt),kt=_e;break}else if(H[_e]===null){H[_e]=Dt,kt=_e;break}if(kt===-1)break}const Vt=I[kt];Vt&&Vt.connect(Dt)}}const it=new tt,xt=new tt;function St($,dt,Dt){it.setFromMatrixPosition(dt.matrixWorld),xt.setFromMatrixPosition(Dt.matrixWorld);const kt=it.distanceTo(xt),Vt=dt.projectionMatrix.elements,_e=Dt.projectionMatrix.elements,Et=Vt[14]/(Vt[10]-1),Pt=Vt[14]/(Vt[10]+1),bt=(Vt[9]+1)/Vt[5],ne=(Vt[9]-1)/Vt[5],Jt=(Vt[8]-1)/Vt[0],le=(_e[8]+1)/_e[0],z=Et*Jt,xe=Et*le,te=kt/(-Jt+le),oe=te*-Jt;if(dt.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(oe),$.translateZ(te),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Vt[10]===-1)$.projectionMatrix.copy(dt.projectionMatrix),$.projectionMatrixInverse.copy(dt.projectionMatrixInverse);else{const Bt=Et+te,w=Pt+te,y=z-oe,k=xe+(kt-oe),ct=bt*Pt/w*Bt,_t=ne*Pt/w*Bt;$.projectionMatrix.makePerspective(y,k,ct,_t,Bt,w),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function U($,dt){dt===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(dt.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(l===null)return;let dt=$.near,Dt=$.far;M.texture!==null&&(M.depthNear>0&&(dt=M.depthNear),M.depthFar>0&&(Dt=M.depthFar)),rt.near=D.near=R.near=dt,rt.far=D.far=R.far=Dt,(at!==rt.near||ft!==rt.far)&&(l.updateRenderState({depthNear:rt.near,depthFar:rt.far}),at=rt.near,ft=rt.far),rt.layers.mask=$.layers.mask|6,R.layers.mask=rt.layers.mask&3,D.layers.mask=rt.layers.mask&5;const kt=$.parent,Vt=rt.cameras;U(rt,kt);for(let _e=0;_e<Vt.length;_e++)U(Vt[_e],kt);Vt.length===2?St(rt,R,D):rt.projectionMatrix.copy(R.projectionMatrix),j($,rt,kt)};function j($,dt,Dt){Dt===null?$.matrix.copy(dt.matrixWorld):($.matrix.copy(Dt.matrixWorld),$.matrix.invert(),$.matrix.multiply(dt.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(dt.projectionMatrix),$.projectionMatrixInverse.copy(dt.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Jo*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return rt},this.getFoveation=function(){if(!(x===null&&E===null))return m},this.setFoveation=function($){m=$,x!==null&&(x.fixedFoveation=$),E!==null&&E.fixedFoveation!==void 0&&(E.fixedFoveation=$)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(rt)},this.getCameraTexture=function($){return S[$]};let mt=null;function Rt($,dt){if(_=dt.getViewerPose(p||d),A=dt,_!==null){const Dt=_.views;E!==null&&(e.setRenderTargetFramebuffer(O,E.framebuffer),e.setRenderTarget(O));let kt=!1;Dt.length!==rt.cameras.length&&(rt.cameras.length=0,kt=!0);for(let Pt=0;Pt<Dt.length;Pt++){const bt=Dt[Pt];let ne=null;if(E!==null)ne=E.getViewport(bt);else{const le=g.getViewSubImage(x,bt);ne=le.viewport,Pt===0&&(e.setRenderTargetTextures(O,le.colorTexture,le.depthStencilTexture),e.setRenderTarget(O))}let Jt=X[Pt];Jt===void 0&&(Jt=new pi,Jt.layers.enable(Pt),Jt.viewport=new an,X[Pt]=Jt),Jt.matrix.fromArray(bt.transform.matrix),Jt.matrix.decompose(Jt.position,Jt.quaternion,Jt.scale),Jt.projectionMatrix.fromArray(bt.projectionMatrix),Jt.projectionMatrixInverse.copy(Jt.projectionMatrix).invert(),Jt.viewport.set(ne.x,ne.y,ne.width,ne.height),Pt===0&&(rt.matrix.copy(Jt.matrix),rt.matrix.decompose(rt.position,rt.quaternion,rt.scale)),kt===!0&&rt.cameras.push(Jt)}const Vt=l.enabledFeatures;if(Vt&&Vt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&C){g=r.getBinding();const Pt=g.getDepthInformation(Dt[0]);Pt&&Pt.isValid&&Pt.texture&&M.init(Pt,l.renderState)}if(Vt&&Vt.includes("camera-access")&&C){e.state.unbindTexture(),g=r.getBinding();for(let Pt=0;Pt<Dt.length;Pt++){const bt=Dt[Pt].camera;if(bt){let ne=S[bt];ne||(ne=new uv,S[bt]=ne);const Jt=g.getCameraImage(bt);ne.sourceTexture=Jt}}}}for(let Dt=0;Dt<I.length;Dt++){const kt=H[Dt],Vt=I[Dt];kt!==null&&Vt!==void 0&&Vt.update(kt,dt,p||d)}mt&&mt($,dt),dt.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:dt}),A=null}const Gt=new fv;Gt.setAnimationLoop(Rt),this.setAnimationLoop=function($){mt=$},this.dispose=function(){}}}const br=new xa,r1=new tn;function s1(o,e){function i(M,S){M.matrixAutoUpdate===!0&&M.updateMatrix(),S.value.copy(M.matrix)}function r(M,S){S.color.getRGB(M.fogColor.value,iv(o)),S.isFog?(M.fogNear.value=S.near,M.fogFar.value=S.far):S.isFogExp2&&(M.fogDensity.value=S.density)}function l(M,S,F,N,O){S.isMeshBasicMaterial||S.isMeshLambertMaterial?u(M,S):S.isMeshToonMaterial?(u(M,S),g(M,S)):S.isMeshPhongMaterial?(u(M,S),_(M,S)):S.isMeshStandardMaterial?(u(M,S),x(M,S),S.isMeshPhysicalMaterial&&E(M,S,O)):S.isMeshMatcapMaterial?(u(M,S),A(M,S)):S.isMeshDepthMaterial?u(M,S):S.isMeshDistanceMaterial?(u(M,S),C(M,S)):S.isMeshNormalMaterial?u(M,S):S.isLineBasicMaterial?(d(M,S),S.isLineDashedMaterial&&h(M,S)):S.isPointsMaterial?m(M,S,F,N):S.isSpriteMaterial?p(M,S):S.isShadowMaterial?(M.color.value.copy(S.color),M.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function u(M,S){M.opacity.value=S.opacity,S.color&&M.diffuse.value.copy(S.color),S.emissive&&M.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(M.map.value=S.map,i(S.map,M.mapTransform)),S.alphaMap&&(M.alphaMap.value=S.alphaMap,i(S.alphaMap,M.alphaMapTransform)),S.bumpMap&&(M.bumpMap.value=S.bumpMap,i(S.bumpMap,M.bumpMapTransform),M.bumpScale.value=S.bumpScale,S.side===Xn&&(M.bumpScale.value*=-1)),S.normalMap&&(M.normalMap.value=S.normalMap,i(S.normalMap,M.normalMapTransform),M.normalScale.value.copy(S.normalScale),S.side===Xn&&M.normalScale.value.negate()),S.displacementMap&&(M.displacementMap.value=S.displacementMap,i(S.displacementMap,M.displacementMapTransform),M.displacementScale.value=S.displacementScale,M.displacementBias.value=S.displacementBias),S.emissiveMap&&(M.emissiveMap.value=S.emissiveMap,i(S.emissiveMap,M.emissiveMapTransform)),S.specularMap&&(M.specularMap.value=S.specularMap,i(S.specularMap,M.specularMapTransform)),S.alphaTest>0&&(M.alphaTest.value=S.alphaTest);const F=e.get(S),N=F.envMap,O=F.envMapRotation;N&&(M.envMap.value=N,br.copy(O),br.x*=-1,br.y*=-1,br.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(br.y*=-1,br.z*=-1),M.envMapRotation.value.setFromMatrix4(r1.makeRotationFromEuler(br)),M.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=S.reflectivity,M.ior.value=S.ior,M.refractionRatio.value=S.refractionRatio),S.lightMap&&(M.lightMap.value=S.lightMap,M.lightMapIntensity.value=S.lightMapIntensity,i(S.lightMap,M.lightMapTransform)),S.aoMap&&(M.aoMap.value=S.aoMap,M.aoMapIntensity.value=S.aoMapIntensity,i(S.aoMap,M.aoMapTransform))}function d(M,S){M.diffuse.value.copy(S.color),M.opacity.value=S.opacity,S.map&&(M.map.value=S.map,i(S.map,M.mapTransform))}function h(M,S){M.dashSize.value=S.dashSize,M.totalSize.value=S.dashSize+S.gapSize,M.scale.value=S.scale}function m(M,S,F,N){M.diffuse.value.copy(S.color),M.opacity.value=S.opacity,M.size.value=S.size*F,M.scale.value=N*.5,S.map&&(M.map.value=S.map,i(S.map,M.uvTransform)),S.alphaMap&&(M.alphaMap.value=S.alphaMap,i(S.alphaMap,M.alphaMapTransform)),S.alphaTest>0&&(M.alphaTest.value=S.alphaTest)}function p(M,S){M.diffuse.value.copy(S.color),M.opacity.value=S.opacity,M.rotation.value=S.rotation,S.map&&(M.map.value=S.map,i(S.map,M.mapTransform)),S.alphaMap&&(M.alphaMap.value=S.alphaMap,i(S.alphaMap,M.alphaMapTransform)),S.alphaTest>0&&(M.alphaTest.value=S.alphaTest)}function _(M,S){M.specular.value.copy(S.specular),M.shininess.value=Math.max(S.shininess,1e-4)}function g(M,S){S.gradientMap&&(M.gradientMap.value=S.gradientMap)}function x(M,S){M.metalness.value=S.metalness,S.metalnessMap&&(M.metalnessMap.value=S.metalnessMap,i(S.metalnessMap,M.metalnessMapTransform)),M.roughness.value=S.roughness,S.roughnessMap&&(M.roughnessMap.value=S.roughnessMap,i(S.roughnessMap,M.roughnessMapTransform)),S.envMap&&(M.envMapIntensity.value=S.envMapIntensity)}function E(M,S,F){M.ior.value=S.ior,S.sheen>0&&(M.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),M.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(M.sheenColorMap.value=S.sheenColorMap,i(S.sheenColorMap,M.sheenColorMapTransform)),S.sheenRoughnessMap&&(M.sheenRoughnessMap.value=S.sheenRoughnessMap,i(S.sheenRoughnessMap,M.sheenRoughnessMapTransform))),S.clearcoat>0&&(M.clearcoat.value=S.clearcoat,M.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(M.clearcoatMap.value=S.clearcoatMap,i(S.clearcoatMap,M.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,i(S.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(M.clearcoatNormalMap.value=S.clearcoatNormalMap,i(S.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===Xn&&M.clearcoatNormalScale.value.negate())),S.dispersion>0&&(M.dispersion.value=S.dispersion),S.iridescence>0&&(M.iridescence.value=S.iridescence,M.iridescenceIOR.value=S.iridescenceIOR,M.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(M.iridescenceMap.value=S.iridescenceMap,i(S.iridescenceMap,M.iridescenceMapTransform)),S.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=S.iridescenceThicknessMap,i(S.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),S.transmission>0&&(M.transmission.value=S.transmission,M.transmissionSamplerMap.value=F.texture,M.transmissionSamplerSize.value.set(F.width,F.height),S.transmissionMap&&(M.transmissionMap.value=S.transmissionMap,i(S.transmissionMap,M.transmissionMapTransform)),M.thickness.value=S.thickness,S.thicknessMap&&(M.thicknessMap.value=S.thicknessMap,i(S.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=S.attenuationDistance,M.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(M.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(M.anisotropyMap.value=S.anisotropyMap,i(S.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=S.specularIntensity,M.specularColor.value.copy(S.specularColor),S.specularColorMap&&(M.specularColorMap.value=S.specularColorMap,i(S.specularColorMap,M.specularColorMapTransform)),S.specularIntensityMap&&(M.specularIntensityMap.value=S.specularIntensityMap,i(S.specularIntensityMap,M.specularIntensityMapTransform))}function A(M,S){S.matcap&&(M.matcap.value=S.matcap)}function C(M,S){const F=e.get(S).light;M.referencePosition.value.setFromMatrixPosition(F.matrixWorld),M.nearDistance.value=F.shadow.camera.near,M.farDistance.value=F.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function o1(o,e,i,r){let l={},u={},d=[];const h=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(F,N){const O=N.program;r.uniformBlockBinding(F,O)}function p(F,N){let O=l[F.id];O===void 0&&(A(F),O=_(F),l[F.id]=O,F.addEventListener("dispose",M));const I=N.program;r.updateUBOMapping(F,I);const H=e.render.frame;u[F.id]!==H&&(x(F),u[F.id]=H)}function _(F){const N=g();F.__bindingPointIndex=N;const O=o.createBuffer(),I=F.__size,H=F.usage;return o.bindBuffer(o.UNIFORM_BUFFER,O),o.bufferData(o.UNIFORM_BUFFER,I,H),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,N,O),O}function g(){for(let F=0;F<h;F++)if(d.indexOf(F)===-1)return d.push(F),F;return Re("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(F){const N=l[F.id],O=F.uniforms,I=F.__cache;o.bindBuffer(o.UNIFORM_BUFFER,N);for(let H=0,P=O.length;H<P;H++){const K=Array.isArray(O[H])?O[H]:[O[H]];for(let R=0,D=K.length;R<D;R++){const X=K[R];if(E(X,H,R,I)===!0){const rt=X.__offset,at=Array.isArray(X.value)?X.value:[X.value];let ft=0;for(let ut=0;ut<at.length;ut++){const L=at[ut],G=C(L);typeof L=="number"||typeof L=="boolean"?(X.__data[0]=L,o.bufferSubData(o.UNIFORM_BUFFER,rt+ft,X.__data)):L.isMatrix3?(X.__data[0]=L.elements[0],X.__data[1]=L.elements[1],X.__data[2]=L.elements[2],X.__data[3]=0,X.__data[4]=L.elements[3],X.__data[5]=L.elements[4],X.__data[6]=L.elements[5],X.__data[7]=0,X.__data[8]=L.elements[6],X.__data[9]=L.elements[7],X.__data[10]=L.elements[8],X.__data[11]=0):(L.toArray(X.__data,ft),ft+=G.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,rt,X.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function E(F,N,O,I){const H=F.value,P=N+"_"+O;if(I[P]===void 0)return typeof H=="number"||typeof H=="boolean"?I[P]=H:I[P]=H.clone(),!0;{const K=I[P];if(typeof H=="number"||typeof H=="boolean"){if(K!==H)return I[P]=H,!0}else if(K.equals(H)===!1)return K.copy(H),!0}return!1}function A(F){const N=F.uniforms;let O=0;const I=16;for(let P=0,K=N.length;P<K;P++){const R=Array.isArray(N[P])?N[P]:[N[P]];for(let D=0,X=R.length;D<X;D++){const rt=R[D],at=Array.isArray(rt.value)?rt.value:[rt.value];for(let ft=0,ut=at.length;ft<ut;ft++){const L=at[ft],G=C(L),it=O%I,xt=it%G.boundary,St=it+xt;O+=xt,St!==0&&I-St<G.storage&&(O+=I-St),rt.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),rt.__offset=O,O+=G.storage}}}const H=O%I;return H>0&&(O+=I-H),F.__size=O,F.__cache={},this}function C(F){const N={boundary:0,storage:0};return typeof F=="number"||typeof F=="boolean"?(N.boundary=4,N.storage=4):F.isVector2?(N.boundary=8,N.storage=8):F.isVector3||F.isColor?(N.boundary=16,N.storage=12):F.isVector4?(N.boundary=16,N.storage=16):F.isMatrix3?(N.boundary=48,N.storage=48):F.isMatrix4?(N.boundary=64,N.storage=64):F.isTexture?fe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):fe("WebGLRenderer: Unsupported uniform value type.",F),N}function M(F){const N=F.target;N.removeEventListener("dispose",M);const O=d.indexOf(N.__bindingPointIndex);d.splice(O,1),o.deleteBuffer(l[N.id]),delete l[N.id],delete u[N.id]}function S(){for(const F in l)o.deleteBuffer(l[F]);d=[],l={},u={}}return{bind:m,update:p,dispose:S}}const l1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Pi=null;function u1(){return Pi===null&&(Pi=new $M(l1,16,16,Fs,_a),Pi.name="DFG_LUT",Pi.minFilter=$e,Pi.magFilter=$e,Pi.wrapS=pa,Pi.wrapT=pa,Pi.generateMipmaps=!1,Pi.needsUpdate=!0),Pi}class c1{constructor(e={}){const{canvas:i=cM(),context:r=null,depth:l=!0,stencil:u=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:x=!1,outputBufferType:E=gi}=e;this.isWebGLRenderer=!0;let A;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");A=r.getContextAttributes().alpha}else A=d;const C=E,M=new Set([Hh,Bh,Ih]),S=new Set([gi,Xi,Zo,jo,Fh,zh]),F=new Uint32Array(4),N=new Int32Array(4);let O=null,I=null;const H=[],P=[];let K=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Bi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let D=!1;this._outputColorSpace=hi;let X=0,rt=0,at=null,ft=-1,ut=null;const L=new an,G=new an;let it=null;const xt=new Pe(0);let St=0,U=i.width,j=i.height,mt=1,Rt=null,Gt=null;const $=new an(0,0,U,j),dt=new an(0,0,U,j);let Dt=!1;const kt=new ov;let Vt=!1,_e=!1;const Et=new tn,Pt=new tt,bt=new an,ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Jt=!1;function le(){return at===null?mt:1}let z=r;function xe(b,q){return i.getContext(b,q)}try{const b={alpha:!0,depth:l,stencil:u,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:g};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Oh}`),i.addEventListener("webglcontextlost",ue,!1),i.addEventListener("webglcontextrestored",Fe,!1),i.addEventListener("webglcontextcreationerror",Ae,!1),z===null){const q="webgl2";if(z=xe(q,b),z===null)throw xe(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw Re("WebGLRenderer: "+b.message),b}let te,oe,Bt,w,y,k,ct,_t,lt,Wt,wt,Zt,ie,Mt,Tt,Ft,zt,Ut,he,W,Nt,At,Ht,yt;function vt(){te=new ub(z),te.init(),At=new t1(z,te),oe=new tb(z,te,e,At),Bt=new JA(z,te),oe.reversedDepthBuffer&&x&&Bt.buffers.depth.setReversed(!0),w=new db(z),y=new zA,k=new $A(z,te,Bt,y,oe,At,w),ct=new nb(R),_t=new lb(R),lt=new gy(z),Ht=new JT(z,lt),Wt=new cb(z,lt,w,Ht),wt=new pb(z,Wt,lt,w),he=new hb(z,oe,k),Ft=new eb(y),Zt=new FA(R,ct,_t,te,oe,Ht,Ft),ie=new s1(R,y),Mt=new BA,Tt=new WA(te),Ut=new QT(R,ct,_t,Bt,wt,A,m),zt=new KA(R,wt,oe),yt=new o1(z,w,oe,Bt),W=new $T(z,te,w),Nt=new fb(z,te,w),w.programs=Zt.programs,R.capabilities=oe,R.extensions=te,R.properties=y,R.renderLists=Mt,R.shadowMap=zt,R.state=Bt,R.info=w}vt(),C!==gi&&(K=new gb(C,i.width,i.height,l,u));const Ct=new a1(R,z);this.xr=Ct,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const b=te.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=te.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return mt},this.setPixelRatio=function(b){b!==void 0&&(mt=b,this.setSize(U,j,!1))},this.getSize=function(b){return b.set(U,j)},this.setSize=function(b,q,st=!0){if(Ct.isPresenting){fe("WebGLRenderer: Can't change size while VR device is presenting.");return}U=b,j=q,i.width=Math.floor(b*mt),i.height=Math.floor(q*mt),st===!0&&(i.style.width=b+"px",i.style.height=q+"px"),K!==null&&K.setSize(i.width,i.height),this.setViewport(0,0,b,q)},this.getDrawingBufferSize=function(b){return b.set(U*mt,j*mt).floor()},this.setDrawingBufferSize=function(b,q,st){U=b,j=q,mt=st,i.width=Math.floor(b*st),i.height=Math.floor(q*st),this.setViewport(0,0,b,q)},this.setEffects=function(b){if(C===gi){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let q=0;q<b.length;q++)if(b[q].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}K.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(L)},this.getViewport=function(b){return b.copy($)},this.setViewport=function(b,q,st,et){b.isVector4?$.set(b.x,b.y,b.z,b.w):$.set(b,q,st,et),Bt.viewport(L.copy($).multiplyScalar(mt).round())},this.getScissor=function(b){return b.copy(dt)},this.setScissor=function(b,q,st,et){b.isVector4?dt.set(b.x,b.y,b.z,b.w):dt.set(b,q,st,et),Bt.scissor(G.copy(dt).multiplyScalar(mt).round())},this.getScissorTest=function(){return Dt},this.setScissorTest=function(b){Bt.setScissorTest(Dt=b)},this.setOpaqueSort=function(b){Rt=b},this.setTransparentSort=function(b){Gt=b},this.getClearColor=function(b){return b.copy(Ut.getClearColor())},this.setClearColor=function(){Ut.setClearColor(...arguments)},this.getClearAlpha=function(){return Ut.getClearAlpha()},this.setClearAlpha=function(){Ut.setClearAlpha(...arguments)},this.clear=function(b=!0,q=!0,st=!0){let et=0;if(b){let Z=!1;if(at!==null){const Lt=at.texture.format;Z=M.has(Lt)}if(Z){const Lt=at.texture.type,Xt=S.has(Lt),Ot=Ut.getClearColor(),qt=Ut.getClearAlpha(),jt=Ot.r,ae=Ot.g,Kt=Ot.b;Xt?(F[0]=jt,F[1]=ae,F[2]=Kt,F[3]=qt,z.clearBufferuiv(z.COLOR,0,F)):(N[0]=jt,N[1]=ae,N[2]=Kt,N[3]=qt,z.clearBufferiv(z.COLOR,0,N))}else et|=z.COLOR_BUFFER_BIT}q&&(et|=z.DEPTH_BUFFER_BIT),st&&(et|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(et)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",ue,!1),i.removeEventListener("webglcontextrestored",Fe,!1),i.removeEventListener("webglcontextcreationerror",Ae,!1),Ut.dispose(),Mt.dispose(),Tt.dispose(),y.dispose(),ct.dispose(),_t.dispose(),wt.dispose(),Ht.dispose(),yt.dispose(),Zt.dispose(),Ct.dispose(),Ct.removeEventListener("sessionstart",Pr),Ct.removeEventListener("sessionend",ks),Di.stop()};function ue(b){b.preventDefault(),k0("WebGLRenderer: Context Lost."),D=!0}function Fe(){k0("WebGLRenderer: Context Restored."),D=!1;const b=w.autoReset,q=zt.enabled,st=zt.autoUpdate,et=zt.needsUpdate,Z=zt.type;vt(),w.autoReset=b,zt.enabled=q,zt.autoUpdate=st,zt.needsUpdate=et,zt.type=Z}function Ae(b){Re("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function wn(b){const q=b.target;q.removeEventListener("dispose",wn),vi(q)}function vi(b){al(b),y.remove(b)}function al(b){const q=y.get(b).programs;q!==void 0&&(q.forEach(function(st){Zt.releaseProgram(st)}),b.isShaderMaterial&&Zt.releaseShaderCache(b))}this.renderBufferDirect=function(b,q,st,et,Z,Lt){q===null&&(q=ne);const Xt=Z.isMesh&&Z.matrixWorld.determinant()<0,Ot=nr(b,q,st,et,Z);Bt.setMaterial(et,Xt);let qt=st.index,jt=1;if(et.wireframe===!0){if(qt=Wt.getWireframeAttribute(st),qt===void 0)return;jt=2}const ae=st.drawRange,Kt=st.attributes.position;let re=ae.start*jt,Ue=(ae.start+ae.count)*jt;Lt!==null&&(re=Math.max(re,Lt.start*jt),Ue=Math.min(Ue,(Lt.start+Lt.count)*jt)),qt!==null?(re=Math.max(re,0),Ue=Math.min(Ue,qt.count)):Kt!=null&&(re=Math.max(re,0),Ue=Math.min(Ue,Kt.count));const je=Ue-re;if(je<0||je===1/0)return;Ht.setup(Z,et,Ot,st,qt);let qe,Oe=W;if(qt!==null&&(qe=lt.get(qt),Oe=Nt,Oe.setIndex(qe)),Z.isMesh)et.wireframe===!0?(Bt.setLineWidth(et.wireframeLinewidth*le()),Oe.setMode(z.LINES)):Oe.setMode(z.TRIANGLES);else if(Z.isLine){let $t=et.linewidth;$t===void 0&&($t=1),Bt.setLineWidth($t*le()),Z.isLineSegments?Oe.setMode(z.LINES):Z.isLineLoop?Oe.setMode(z.LINE_LOOP):Oe.setMode(z.LINE_STRIP)}else Z.isPoints?Oe.setMode(z.POINTS):Z.isSprite&&Oe.setMode(z.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)Qo("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Oe.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(te.get("WEBGL_multi_draw"))Oe.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const $t=Z._multiDrawStarts,Le=Z._multiDrawCounts,ce=Z._multiDrawCount,xn=qt?lt.get(qt).bytesPerElement:1,Wi=y.get(et).currentProgram.getUniforms();for(let Sn=0;Sn<ce;Sn++)Wi.setValue(z,"_gl_DrawID",Sn),Oe.render($t[Sn]/xn,Le[Sn])}else if(Z.isInstancedMesh)Oe.renderInstances(re,je,Z.count);else if(st.isInstancedBufferGeometry){const $t=st._maxInstanceCount!==void 0?st._maxInstanceCount:1/0,Le=Math.min(st.instanceCount,$t);Oe.renderInstances(re,je,Le)}else Oe.render(re,je)};function Vs(b,q,st){b.transparent===!0&&b.side===mi&&b.forceSinglePass===!1?(b.side=Xn,b.needsUpdate=!0,zr(b,q,st),b.side=er,b.needsUpdate=!0,zr(b,q,st),b.side=mi):zr(b,q,st)}this.compile=function(b,q,st=null){st===null&&(st=b),I=Tt.get(st),I.init(q),P.push(I),st.traverseVisible(function(Z){Z.isLight&&Z.layers.test(q.layers)&&(I.pushLight(Z),Z.castShadow&&I.pushShadow(Z))}),b!==st&&b.traverseVisible(function(Z){Z.isLight&&Z.layers.test(q.layers)&&(I.pushLight(Z),Z.castShadow&&I.pushShadow(Z))}),I.setupLights();const et=new Set;return b.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const Lt=Z.material;if(Lt)if(Array.isArray(Lt))for(let Xt=0;Xt<Lt.length;Xt++){const Ot=Lt[Xt];Vs(Ot,st,Z),et.add(Ot)}else Vs(Lt,st,Z),et.add(Lt)}),I=P.pop(),et},this.compileAsync=function(b,q,st=null){const et=this.compile(b,q,st);return new Promise(Z=>{function Lt(){if(et.forEach(function(Xt){y.get(Xt).currentProgram.isReady()&&et.delete(Xt)}),et.size===0){Z(b);return}setTimeout(Lt,10)}te.get("KHR_parallel_shader_compile")!==null?Lt():setTimeout(Lt,10)})};let Or=null;function Xs(b){Or&&Or(b)}function Pr(){Di.stop()}function ks(){Di.start()}const Di=new fv;Di.setAnimationLoop(Xs),typeof self<"u"&&Di.setContext(self),this.setAnimationLoop=function(b){Or=b,Ct.setAnimationLoop(b),b===null?Di.stop():Di.start()},Ct.addEventListener("sessionstart",Pr),Ct.addEventListener("sessionend",ks),this.render=function(b,q){if(q!==void 0&&q.isCamera!==!0){Re("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;const st=Ct.enabled===!0&&Ct.isPresenting===!0,et=K!==null&&(at===null||st)&&K.begin(R,at);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),Ct.enabled===!0&&Ct.isPresenting===!0&&(K===null||K.isCompositing()===!1)&&(Ct.cameraAutoUpdate===!0&&Ct.updateCamera(q),q=Ct.getCamera()),b.isScene===!0&&b.onBeforeRender(R,b,q,at),I=Tt.get(b,P.length),I.init(q),P.push(I),Et.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),kt.setFromProjectionMatrix(Et,Ii,q.reversedDepth),_e=this.localClippingEnabled,Vt=Ft.init(this.clippingPlanes,_e),O=Mt.get(b,H.length),O.init(),H.push(O),Ct.enabled===!0&&Ct.isPresenting===!0){const Xt=R.xr.getDepthSensingMesh();Xt!==null&&ni(Xt,q,-1/0,R.sortObjects)}ni(b,q,0,R.sortObjects),O.finish(),R.sortObjects===!0&&O.sort(Rt,Gt),Jt=Ct.enabled===!1||Ct.isPresenting===!1||Ct.hasDepthSensing()===!1,Jt&&Ut.addToRenderList(O,b),this.info.render.frame++,Vt===!0&&Ft.beginShadows();const Z=I.state.shadowsArray;if(zt.render(Z,b,q),Vt===!0&&Ft.endShadows(),this.info.autoReset===!0&&this.info.reset(),(et&&K.hasRenderPass())===!1){const Xt=O.opaque,Ot=O.transmissive;if(I.setupLights(),q.isArrayCamera){const qt=q.cameras;if(Ot.length>0)for(let jt=0,ae=qt.length;jt<ae;jt++){const Kt=qt[jt];vn(Xt,Ot,b,Kt)}Jt&&Ut.render(b);for(let jt=0,ae=qt.length;jt<ae;jt++){const Kt=qt[jt];rn(O,b,Kt,Kt.viewport)}}else Ot.length>0&&vn(Xt,Ot,b,q),Jt&&Ut.render(b),rn(O,b,q)}at!==null&&rt===0&&(k.updateMultisampleRenderTarget(at),k.updateRenderTargetMipmap(at)),et&&K.end(R),b.isScene===!0&&b.onAfterRender(R,b,q),Ht.resetDefaultState(),ft=-1,ut=null,P.pop(),P.length>0?(I=P[P.length-1],Vt===!0&&Ft.setGlobalState(R.clippingPlanes,I.state.camera)):I=null,H.pop(),H.length>0?O=H[H.length-1]:O=null};function ni(b,q,st,et){if(b.visible===!1)return;if(b.layers.test(q.layers)){if(b.isGroup)st=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(q);else if(b.isLight)I.pushLight(b),b.castShadow&&I.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||kt.intersectsSprite(b)){et&&bt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Et);const Xt=wt.update(b),Ot=b.material;Ot.visible&&O.push(b,Xt,Ot,st,bt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||kt.intersectsObject(b))){const Xt=wt.update(b),Ot=b.material;if(et&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),bt.copy(b.boundingSphere.center)):(Xt.boundingSphere===null&&Xt.computeBoundingSphere(),bt.copy(Xt.boundingSphere.center)),bt.applyMatrix4(b.matrixWorld).applyMatrix4(Et)),Array.isArray(Ot)){const qt=Xt.groups;for(let jt=0,ae=qt.length;jt<ae;jt++){const Kt=qt[jt],re=Ot[Kt.materialIndex];re&&re.visible&&O.push(b,Xt,re,st,bt.z,Kt)}}else Ot.visible&&O.push(b,Xt,Ot,st,bt.z,null)}}const Lt=b.children;for(let Xt=0,Ot=Lt.length;Xt<Ot;Xt++)ni(Lt[Xt],q,st,et)}function rn(b,q,st,et){const{opaque:Z,transmissive:Lt,transparent:Xt}=b;I.setupLightsView(st),Vt===!0&&Ft.setGlobalState(R.clippingPlanes,st),et&&Bt.viewport(L.copy(et)),Z.length>0&&xi(Z,q,st),Lt.length>0&&xi(Lt,q,st),Xt.length>0&&xi(Xt,q,st),Bt.buffers.depth.setTest(!0),Bt.buffers.depth.setMask(!0),Bt.buffers.color.setMask(!0),Bt.setPolygonOffset(!1)}function vn(b,q,st,et){if((st.isScene===!0?st.overrideMaterial:null)!==null)return;if(I.state.transmissionRenderTarget[et.id]===void 0){const re=te.has("EXT_color_buffer_half_float")||te.has("EXT_color_buffer_float");I.state.transmissionRenderTarget[et.id]=new Hi(1,1,{generateMipmaps:!0,type:re?_a:gi,minFilter:Dr,samples:oe.samples,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ce.workingColorSpace})}const Lt=I.state.transmissionRenderTarget[et.id],Xt=et.viewport||L;Lt.setSize(Xt.z*R.transmissionResolutionScale,Xt.w*R.transmissionResolutionScale);const Ot=R.getRenderTarget(),qt=R.getActiveCubeFace(),jt=R.getActiveMipmapLevel();R.setRenderTarget(Lt),R.getClearColor(xt),St=R.getClearAlpha(),St<1&&R.setClearColor(16777215,.5),R.clear(),Jt&&Ut.render(st);const ae=R.toneMapping;R.toneMapping=Bi;const Kt=et.viewport;if(et.viewport!==void 0&&(et.viewport=void 0),I.setupLightsView(et),Vt===!0&&Ft.setGlobalState(R.clippingPlanes,et),xi(b,st,et),k.updateMultisampleRenderTarget(Lt),k.updateRenderTargetMipmap(Lt),te.has("WEBGL_multisampled_render_to_texture")===!1){let re=!1;for(let Ue=0,je=q.length;Ue<je;Ue++){const qe=q[Ue],{object:Oe,geometry:$t,material:Le,group:ce}=qe;if(Le.side===mi&&Oe.layers.test(et.layers)){const xn=Le.side;Le.side=Xn,Le.needsUpdate=!0,Fr(Oe,st,et,$t,Le,ce),Le.side=xn,Le.needsUpdate=!0,re=!0}}re===!0&&(k.updateMultisampleRenderTarget(Lt),k.updateRenderTargetMipmap(Lt))}R.setRenderTarget(Ot,qt,jt),R.setClearColor(xt,St),Kt!==void 0&&(et.viewport=Kt),R.toneMapping=ae}function xi(b,q,st){const et=q.isScene===!0?q.overrideMaterial:null;for(let Z=0,Lt=b.length;Z<Lt;Z++){const Xt=b[Z],{object:Ot,geometry:qt,group:jt}=Xt;let ae=Xt.material;ae.allowOverride===!0&&et!==null&&(ae=et),Ot.layers.test(st.layers)&&Fr(Ot,q,st,qt,ae,jt)}}function Fr(b,q,st,et,Z,Lt){b.onBeforeRender(R,q,st,et,Z,Lt),b.modelViewMatrix.multiplyMatrices(st.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),Z.onBeforeRender(R,q,st,et,b,Lt),Z.transparent===!0&&Z.side===mi&&Z.forceSinglePass===!1?(Z.side=Xn,Z.needsUpdate=!0,R.renderBufferDirect(st,q,et,Z,b,Lt),Z.side=er,Z.needsUpdate=!0,R.renderBufferDirect(st,q,et,Z,b,Lt),Z.side=mi):R.renderBufferDirect(st,q,et,Z,b,Lt),b.onAfterRender(R,q,st,et,Z,Lt)}function zr(b,q,st){q.isScene!==!0&&(q=ne);const et=y.get(b),Z=I.state.lights,Lt=I.state.shadowsArray,Xt=Z.state.version,Ot=Zt.getParameters(b,Z.state,Lt,q,st),qt=Zt.getProgramCacheKey(Ot);let jt=et.programs;et.environment=b.isMeshStandardMaterial?q.environment:null,et.fog=q.fog,et.envMap=(b.isMeshStandardMaterial?_t:ct).get(b.envMap||et.environment),et.envMapRotation=et.environment!==null&&b.envMap===null?q.environmentRotation:b.envMapRotation,jt===void 0&&(b.addEventListener("dispose",wn),jt=new Map,et.programs=jt);let ae=jt.get(qt);if(ae!==void 0){if(et.currentProgram===ae&&et.lightsStateVersion===Xt)return Ws(b,Ot),ae}else Ot.uniforms=Zt.getUniforms(b),b.onBeforeCompile(Ot,R),ae=Zt.acquireProgram(Ot,qt),jt.set(qt,ae),et.uniforms=Ot.uniforms;const Kt=et.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Kt.clippingPlanes=Ft.uniform),Ws(b,Ot),et.needsLights=Sa(b),et.lightsStateVersion=Xt,et.needsLights&&(Kt.ambientLightColor.value=Z.state.ambient,Kt.lightProbe.value=Z.state.probe,Kt.directionalLights.value=Z.state.directional,Kt.directionalLightShadows.value=Z.state.directionalShadow,Kt.spotLights.value=Z.state.spot,Kt.spotLightShadows.value=Z.state.spotShadow,Kt.rectAreaLights.value=Z.state.rectArea,Kt.ltc_1.value=Z.state.rectAreaLTC1,Kt.ltc_2.value=Z.state.rectAreaLTC2,Kt.pointLights.value=Z.state.point,Kt.pointLightShadows.value=Z.state.pointShadow,Kt.hemisphereLights.value=Z.state.hemi,Kt.directionalShadowMap.value=Z.state.directionalShadowMap,Kt.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Kt.spotShadowMap.value=Z.state.spotShadowMap,Kt.spotLightMatrix.value=Z.state.spotLightMatrix,Kt.spotLightMap.value=Z.state.spotLightMap,Kt.pointShadowMap.value=Z.state.pointShadowMap,Kt.pointShadowMatrix.value=Z.state.pointShadowMatrix),et.currentProgram=ae,et.uniformsList=null,ae}function rl(b){if(b.uniformsList===null){const q=b.currentProgram.getUniforms();b.uniformsList=Xu.seqWithValue(q.seq,b.uniforms)}return b.uniformsList}function Ws(b,q){const st=y.get(b);st.outputColorSpace=q.outputColorSpace,st.batching=q.batching,st.batchingColor=q.batchingColor,st.instancing=q.instancing,st.instancingColor=q.instancingColor,st.instancingMorph=q.instancingMorph,st.skinning=q.skinning,st.morphTargets=q.morphTargets,st.morphNormals=q.morphNormals,st.morphColors=q.morphColors,st.morphTargetsCount=q.morphTargetsCount,st.numClippingPlanes=q.numClippingPlanes,st.numIntersection=q.numClipIntersection,st.vertexAlphas=q.vertexAlphas,st.vertexTangents=q.vertexTangents,st.toneMapping=q.toneMapping}function nr(b,q,st,et,Z){q.isScene!==!0&&(q=ne),k.resetTextureUnits();const Lt=q.fog,Xt=et.isMeshStandardMaterial?q.environment:null,Ot=at===null?R.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:zs,qt=(et.isMeshStandardMaterial?_t:ct).get(et.envMap||Xt),jt=et.vertexColors===!0&&!!st.attributes.color&&st.attributes.color.itemSize===4,ae=!!st.attributes.tangent&&(!!et.normalMap||et.anisotropy>0),Kt=!!st.morphAttributes.position,re=!!st.morphAttributes.normal,Ue=!!st.morphAttributes.color;let je=Bi;et.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(je=R.toneMapping);const qe=st.morphAttributes.position||st.morphAttributes.normal||st.morphAttributes.color,Oe=qe!==void 0?qe.length:0,$t=y.get(et),Le=I.state.lights;if(Vt===!0&&(_e===!0||b!==ut)){const yn=b===ut&&et.id===ft;Ft.setState(et,b,yn)}let ce=!1;et.version===$t.__version?($t.needsLights&&$t.lightsStateVersion!==Le.state.version||$t.outputColorSpace!==Ot||Z.isBatchedMesh&&$t.batching===!1||!Z.isBatchedMesh&&$t.batching===!0||Z.isBatchedMesh&&$t.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&$t.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&$t.instancing===!1||!Z.isInstancedMesh&&$t.instancing===!0||Z.isSkinnedMesh&&$t.skinning===!1||!Z.isSkinnedMesh&&$t.skinning===!0||Z.isInstancedMesh&&$t.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&$t.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&$t.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&$t.instancingMorph===!1&&Z.morphTexture!==null||$t.envMap!==qt||et.fog===!0&&$t.fog!==Lt||$t.numClippingPlanes!==void 0&&($t.numClippingPlanes!==Ft.numPlanes||$t.numIntersection!==Ft.numIntersection)||$t.vertexAlphas!==jt||$t.vertexTangents!==ae||$t.morphTargets!==Kt||$t.morphNormals!==re||$t.morphColors!==Ue||$t.toneMapping!==je||$t.morphTargetsCount!==Oe)&&(ce=!0):(ce=!0,$t.__version=et.version);let xn=$t.currentProgram;ce===!0&&(xn=zr(et,q,Z));let Wi=!1,Sn=!1,ii=!1;const ze=xn.getUniforms(),Mn=$t.uniforms;if(Bt.useProgram(xn.program)&&(Wi=!0,Sn=!0,ii=!0),et.id!==ft&&(ft=et.id,Sn=!0),Wi||ut!==b){Bt.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),ze.setValue(z,"projectionMatrix",b.projectionMatrix),ze.setValue(z,"viewMatrix",b.matrixWorldInverse);const En=ze.map.cameraPosition;En!==void 0&&En.setValue(z,Pt.setFromMatrixPosition(b.matrixWorld)),oe.logarithmicDepthBuffer&&ze.setValue(z,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(et.isMeshPhongMaterial||et.isMeshToonMaterial||et.isMeshLambertMaterial||et.isMeshBasicMaterial||et.isMeshStandardMaterial||et.isShaderMaterial)&&ze.setValue(z,"isOrthographic",b.isOrthographicCamera===!0),ut!==b&&(ut=b,Sn=!0,ii=!0)}if($t.needsLights&&(Le.state.directionalShadowMap.length>0&&ze.setValue(z,"directionalShadowMap",Le.state.directionalShadowMap,k),Le.state.spotShadowMap.length>0&&ze.setValue(z,"spotShadowMap",Le.state.spotShadowMap,k),Le.state.pointShadowMap.length>0&&ze.setValue(z,"pointShadowMap",Le.state.pointShadowMap,k)),Z.isSkinnedMesh){ze.setOptional(z,Z,"bindMatrix"),ze.setOptional(z,Z,"bindMatrixInverse");const yn=Z.skeleton;yn&&(yn.boneTexture===null&&yn.computeBoneTexture(),ze.setValue(z,"boneTexture",yn.boneTexture,k))}Z.isBatchedMesh&&(ze.setOptional(z,Z,"batchingTexture"),ze.setValue(z,"batchingTexture",Z._matricesTexture,k),ze.setOptional(z,Z,"batchingIdTexture"),ze.setValue(z,"batchingIdTexture",Z._indirectTexture,k),ze.setOptional(z,Z,"batchingColorTexture"),Z._colorsTexture!==null&&ze.setValue(z,"batchingColorTexture",Z._colorsTexture,k));const fn=st.morphAttributes;if((fn.position!==void 0||fn.normal!==void 0||fn.color!==void 0)&&he.update(Z,st,xn),(Sn||$t.receiveShadow!==Z.receiveShadow)&&($t.receiveShadow=Z.receiveShadow,ze.setValue(z,"receiveShadow",Z.receiveShadow)),et.isMeshGouraudMaterial&&et.envMap!==null&&(Mn.envMap.value=qt,Mn.flipEnvMap.value=qt.isCubeTexture&&qt.isRenderTargetTexture===!1?-1:1),et.isMeshStandardMaterial&&et.envMap===null&&q.environment!==null&&(Mn.envMapIntensity.value=q.environmentIntensity),Mn.dfgLUT!==void 0&&(Mn.dfgLUT.value=u1()),Sn&&(ze.setValue(z,"toneMappingExposure",R.toneMappingExposure),$t.needsLights&&qs(Mn,ii),Lt&&et.fog===!0&&ie.refreshFogUniforms(Mn,Lt),ie.refreshMaterialUniforms(Mn,et,mt,j,I.state.transmissionRenderTarget[b.id]),Xu.upload(z,rl($t),Mn,k)),et.isShaderMaterial&&et.uniformsNeedUpdate===!0&&(Xu.upload(z,rl($t),Mn,k),et.uniformsNeedUpdate=!1),et.isSpriteMaterial&&ze.setValue(z,"center",Z.center),ze.setValue(z,"modelViewMatrix",Z.modelViewMatrix),ze.setValue(z,"normalMatrix",Z.normalMatrix),ze.setValue(z,"modelMatrix",Z.matrixWorld),et.isShaderMaterial||et.isRawShaderMaterial){const yn=et.uniformsGroups;for(let En=0,Ir=yn.length;En<Ir;En++){const Si=yn[En];yt.update(Si,xn),yt.bind(Si,xn)}}return xn}function qs(b,q){b.ambientLightColor.needsUpdate=q,b.lightProbe.needsUpdate=q,b.directionalLights.needsUpdate=q,b.directionalLightShadows.needsUpdate=q,b.pointLights.needsUpdate=q,b.pointLightShadows.needsUpdate=q,b.spotLights.needsUpdate=q,b.spotLightShadows.needsUpdate=q,b.rectAreaLights.needsUpdate=q,b.hemisphereLights.needsUpdate=q}function Sa(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return rt},this.getRenderTarget=function(){return at},this.setRenderTargetTextures=function(b,q,st){const et=y.get(b);et.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,et.__autoAllocateDepthBuffer===!1&&(et.__useRenderToTexture=!1),y.get(b.texture).__webglTexture=q,y.get(b.depthTexture).__webglTexture=et.__autoAllocateDepthBuffer?void 0:st,et.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,q){const st=y.get(b);st.__webglFramebuffer=q,st.__useDefaultFramebuffer=q===void 0};const Ma=z.createFramebuffer();this.setRenderTarget=function(b,q=0,st=0){at=b,X=q,rt=st;let et=null,Z=!1,Lt=!1;if(b){const Ot=y.get(b);if(Ot.__useDefaultFramebuffer!==void 0){Bt.bindFramebuffer(z.FRAMEBUFFER,Ot.__webglFramebuffer),L.copy(b.viewport),G.copy(b.scissor),it=b.scissorTest,Bt.viewport(L),Bt.scissor(G),Bt.setScissorTest(it),ft=-1;return}else if(Ot.__webglFramebuffer===void 0)k.setupRenderTarget(b);else if(Ot.__hasExternalTextures)k.rebindTextures(b,y.get(b.texture).__webglTexture,y.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const ae=b.depthTexture;if(Ot.__boundDepthTexture!==ae){if(ae!==null&&y.has(ae)&&(b.width!==ae.image.width||b.height!==ae.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");k.setupDepthRenderbuffer(b)}}const qt=b.texture;(qt.isData3DTexture||qt.isDataArrayTexture||qt.isCompressedArrayTexture)&&(Lt=!0);const jt=y.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(jt[q])?et=jt[q][st]:et=jt[q],Z=!0):b.samples>0&&k.useMultisampledRTT(b)===!1?et=y.get(b).__webglMultisampledFramebuffer:Array.isArray(jt)?et=jt[st]:et=jt,L.copy(b.viewport),G.copy(b.scissor),it=b.scissorTest}else L.copy($).multiplyScalar(mt).floor(),G.copy(dt).multiplyScalar(mt).floor(),it=Dt;if(st!==0&&(et=Ma),Bt.bindFramebuffer(z.FRAMEBUFFER,et)&&Bt.drawBuffers(b,et),Bt.viewport(L),Bt.scissor(G),Bt.setScissorTest(it),Z){const Ot=y.get(b.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+q,Ot.__webglTexture,st)}else if(Lt){const Ot=q;for(let qt=0;qt<b.textures.length;qt++){const jt=y.get(b.textures[qt]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+qt,jt.__webglTexture,st,Ot)}}else if(b!==null&&st!==0){const Ot=y.get(b.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Ot.__webglTexture,st)}ft=-1},this.readRenderTargetPixels=function(b,q,st,et,Z,Lt,Xt,Ot=0){if(!(b&&b.isWebGLRenderTarget)){Re("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let qt=y.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Xt!==void 0&&(qt=qt[Xt]),qt){Bt.bindFramebuffer(z.FRAMEBUFFER,qt);try{const jt=b.textures[Ot],ae=jt.format,Kt=jt.type;if(!oe.textureFormatReadable(ae)){Re("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!oe.textureTypeReadable(Kt)){Re("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=b.width-et&&st>=0&&st<=b.height-Z&&(b.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Ot),z.readPixels(q,st,et,Z,At.convert(ae),At.convert(Kt),Lt))}finally{const jt=at!==null?y.get(at).__webglFramebuffer:null;Bt.bindFramebuffer(z.FRAMEBUFFER,jt)}}},this.readRenderTargetPixelsAsync=async function(b,q,st,et,Z,Lt,Xt,Ot=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let qt=y.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Xt!==void 0&&(qt=qt[Xt]),qt)if(q>=0&&q<=b.width-et&&st>=0&&st<=b.height-Z){Bt.bindFramebuffer(z.FRAMEBUFFER,qt);const jt=b.textures[Ot],ae=jt.format,Kt=jt.type;if(!oe.textureFormatReadable(ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!oe.textureTypeReadable(Kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const re=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,re),z.bufferData(z.PIXEL_PACK_BUFFER,Lt.byteLength,z.STREAM_READ),b.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Ot),z.readPixels(q,st,et,Z,At.convert(ae),At.convert(Kt),0);const Ue=at!==null?y.get(at).__webglFramebuffer:null;Bt.bindFramebuffer(z.FRAMEBUFFER,Ue);const je=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await fM(z,je,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,re),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,Lt),z.deleteBuffer(re),z.deleteSync(je),Lt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,q=null,st=0){const et=Math.pow(2,-st),Z=Math.floor(b.image.width*et),Lt=Math.floor(b.image.height*et),Xt=q!==null?q.x:0,Ot=q!==null?q.y:0;k.setTexture2D(b,0),z.copyTexSubImage2D(z.TEXTURE_2D,st,0,0,Xt,Ot,Z,Lt),Bt.unbindTexture()};const ir=z.createFramebuffer(),ya=z.createFramebuffer();this.copyTextureToTexture=function(b,q,st=null,et=null,Z=0,Lt=null){Lt===null&&(Z!==0?(Qo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Lt=Z,Z=0):Lt=0);let Xt,Ot,qt,jt,ae,Kt,re,Ue,je;const qe=b.isCompressedTexture?b.mipmaps[Lt]:b.image;if(st!==null)Xt=st.max.x-st.min.x,Ot=st.max.y-st.min.y,qt=st.isBox3?st.max.z-st.min.z:1,jt=st.min.x,ae=st.min.y,Kt=st.isBox3?st.min.z:0;else{const fn=Math.pow(2,-Z);Xt=Math.floor(qe.width*fn),Ot=Math.floor(qe.height*fn),b.isDataArrayTexture?qt=qe.depth:b.isData3DTexture?qt=Math.floor(qe.depth*fn):qt=1,jt=0,ae=0,Kt=0}et!==null?(re=et.x,Ue=et.y,je=et.z):(re=0,Ue=0,je=0);const Oe=At.convert(q.format),$t=At.convert(q.type);let Le;q.isData3DTexture?(k.setTexture3D(q,0),Le=z.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(k.setTexture2DArray(q,0),Le=z.TEXTURE_2D_ARRAY):(k.setTexture2D(q,0),Le=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,q.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,q.unpackAlignment);const ce=z.getParameter(z.UNPACK_ROW_LENGTH),xn=z.getParameter(z.UNPACK_IMAGE_HEIGHT),Wi=z.getParameter(z.UNPACK_SKIP_PIXELS),Sn=z.getParameter(z.UNPACK_SKIP_ROWS),ii=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,qe.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,qe.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,jt),z.pixelStorei(z.UNPACK_SKIP_ROWS,ae),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Kt);const ze=b.isDataArrayTexture||b.isData3DTexture,Mn=q.isDataArrayTexture||q.isData3DTexture;if(b.isDepthTexture){const fn=y.get(b),yn=y.get(q),En=y.get(fn.__renderTarget),Ir=y.get(yn.__renderTarget);Bt.bindFramebuffer(z.READ_FRAMEBUFFER,En.__webglFramebuffer),Bt.bindFramebuffer(z.DRAW_FRAMEBUFFER,Ir.__webglFramebuffer);for(let Si=0;Si<qt;Si++)ze&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,y.get(b).__webglTexture,Z,Kt+Si),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,y.get(q).__webglTexture,Lt,je+Si)),z.blitFramebuffer(jt,ae,Xt,Ot,re,Ue,Xt,Ot,z.DEPTH_BUFFER_BIT,z.NEAREST);Bt.bindFramebuffer(z.READ_FRAMEBUFFER,null),Bt.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(Z!==0||b.isRenderTargetTexture||y.has(b)){const fn=y.get(b),yn=y.get(q);Bt.bindFramebuffer(z.READ_FRAMEBUFFER,ir),Bt.bindFramebuffer(z.DRAW_FRAMEBUFFER,ya);for(let En=0;En<qt;En++)ze?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,fn.__webglTexture,Z,Kt+En):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,fn.__webglTexture,Z),Mn?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,yn.__webglTexture,Lt,je+En):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,yn.__webglTexture,Lt),Z!==0?z.blitFramebuffer(jt,ae,Xt,Ot,re,Ue,Xt,Ot,z.COLOR_BUFFER_BIT,z.NEAREST):Mn?z.copyTexSubImage3D(Le,Lt,re,Ue,je+En,jt,ae,Xt,Ot):z.copyTexSubImage2D(Le,Lt,re,Ue,jt,ae,Xt,Ot);Bt.bindFramebuffer(z.READ_FRAMEBUFFER,null),Bt.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else Mn?b.isDataTexture||b.isData3DTexture?z.texSubImage3D(Le,Lt,re,Ue,je,Xt,Ot,qt,Oe,$t,qe.data):q.isCompressedArrayTexture?z.compressedTexSubImage3D(Le,Lt,re,Ue,je,Xt,Ot,qt,Oe,qe.data):z.texSubImage3D(Le,Lt,re,Ue,je,Xt,Ot,qt,Oe,$t,qe):b.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,Lt,re,Ue,Xt,Ot,Oe,$t,qe.data):b.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,Lt,re,Ue,qe.width,qe.height,Oe,qe.data):z.texSubImage2D(z.TEXTURE_2D,Lt,re,Ue,Xt,Ot,Oe,$t,qe);z.pixelStorei(z.UNPACK_ROW_LENGTH,ce),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,xn),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Wi),z.pixelStorei(z.UNPACK_SKIP_ROWS,Sn),z.pixelStorei(z.UNPACK_SKIP_IMAGES,ii),Lt===0&&q.generateMipmaps&&z.generateMipmap(Le),Bt.unbindTexture()},this.initRenderTarget=function(b){y.get(b).__webglFramebuffer===void 0&&k.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?k.setTextureCube(b,0):b.isData3DTexture?k.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?k.setTexture2DArray(b,0):k.setTexture2D(b,0),Bt.unbindTexture()},this.resetState=function(){X=0,rt=0,at=null,Bt.reset(),Ht.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Ce._getDrawingBufferColorSpace(e),i.unpackColorSpace=Ce._getUnpackColorSpace()}}const gv=o=>`/${o}`,f1=gv("audio.mp3"),d1=["image1.webp","image2.webp","image3.webp","image4.webp","image5.webp","image6.webp","image7.webp","image8.webp","image9.webp","image10.webp","image11.webp","image13.webp","video1.mp4","video2.mp4","video3.mp4","video4.mp4","video5.mp4","video6.mp4","video7.mp4","video8.mp4","video9.mp4","video10.mp4","video11.mp4","video12.mp4","video13.mp4","video14.mp4","video15.mp4","video16.mp4","video17.mp4","video18.mp4","video19.mp4","video20.mp4","video21.mp4","video22.mp4","video23.mp4","video24.mp4"].map(gv),h1=[".mp4",".webm",".ogg"],p1=o=>{const e=o.toLowerCase();return h1.some(i=>e.endsWith(i))},m1=new tt(0,1,0),ti={goldCount:2e3,redCount:300,giftCount:150,explodeRadius:85,photoOrbitRadius:30,treeHeight:70,treeBaseRadius:35,minDistance:12},Ar=(o,e,i)=>Math.min(i,Math.max(e,o)),Fd=o=>{const e=document.createElement("canvas");e.width=128,e.height=128;const i=e.getContext("2d"),r=64,l=64;if(o==="gold_glow"){const u=i.createRadialGradient(r,l,0,r,l,40);u.addColorStop(0,"#FFFFFF"),u.addColorStop(.2,"#FFFFE0"),u.addColorStop(.5,"#FFD700"),u.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=u,i.fillRect(0,0,128,128)}else if(o==="red_light"){const u=i.createRadialGradient(r,l,0,r,l,50);u.addColorStop(0,"#FFAAAA"),u.addColorStop(.3,"#FF0000"),u.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=u,i.fillRect(0,0,128,128)}else i.fillStyle="#D32F2F",i.fillRect(20,20,88,88),i.fillStyle="#FFD700",i.fillRect(54,20,20,88),i.fillRect(20,54,88,20),i.strokeStyle="rgba(0,0,0,0.3)",i.lineWidth=2,i.strokeRect(20,20,88,88);return new wh(e)};function g1(){const o=Ri.useRef(null),e=Ri.useRef(null),i=Ri.useRef("TREE"),r=Ri.useRef(0),l=Ri.useRef([]),[u,d]=Ri.useState(!1),[h,m]=Ri.useState("TREE"),p=Ri.useCallback(g=>{i.current=g,m(g)},[]);Ri.useEffect(()=>{if(!u||!o.current)return;const g=o.current;g.innerHTML="";const x=new c1({antialias:!0,alpha:!1}),E=window.innerWidth<=768;x.setPixelRatio(Math.min(window.devicePixelRatio,E?1.5:2)),x.setSize(window.innerWidth,window.innerHeight),x.setClearColor(0,1),g.appendChild(x.domElement),g.style.cursor="grab",l.current=[];const A=new JM;A.fog=new Yh(0,.002);const C=new pi(60,window.innerWidth/window.innerHeight,.1,1e3),M={radius:100,polar:Math.PI/2.4,azimuth:0},S=()=>{const Et=M.radius*Math.sin(M.polar)*Math.sin(M.azimuth),Pt=M.radius*Math.cos(M.polar),bt=M.radius*Math.sin(M.polar)*Math.cos(M.azimuth);C.position.set(Et,Pt,bt),C.lookAt(0,0,0)};S();const F=new dy,N=d1.map(Et=>{if(p1(Et)){const bt=document.createElement("video");bt.src=Et,bt.muted=!0,bt.loop=!0,bt.playsInline=!0,bt.preload="metadata",bt.crossOrigin="anonymous",bt.load();const ne=new ay(bt);return ne.needsUpdate=!0,ne.minFilter=$e,ne.magFilter=$e,ne.format=_i,l.current.push(bt),{type:"video",texture:ne,video:bt}}const Pt=F.load(Et);return Pt.needsUpdate=!0,Pt.minFilter=$e,Pt.magFilter=$e,{type:"image",texture:Pt}}),O=N.filter(Et=>Et.type==="video"),I=(Et,Pt)=>{!Et||Et.type!=="video"||(Pt?Et.video.paused&&Et.video.play().catch(bt=>{console.warn("No se pudo reproducir un video automáticamente.",bt)}):Et.video.paused||Et.video.pause())},H={gold:Fd("gold_glow"),red:Fd("red_light"),gift:Fd("gift_red")},P=(Et,Pt,bt)=>{const ne=[],Jt=[],le=[];for(let oe=0;oe<Pt;oe++){const Bt=Math.random()*ti.treeHeight,w=Bt-ti.treeHeight/2,y=Et==="gold"?Math.sqrt(Math.random()):.9+Math.random()*.1,ct=(1-Bt/ti.treeHeight)*ti.treeBaseRadius*y,_t=Math.random()*Math.PI*2,lt=ct*Math.cos(_t),Wt=ct*Math.sin(_t);le.push(lt,w,Wt);const wt=Math.random(),Zt=Math.random(),ie=Math.acos(2*Zt-1),Mt=2*Math.PI*wt,Tt=Et==="gift"?1.2:1,Ft=ti.explodeRadius*Math.cbrt(Math.random())*Tt,zt=Ft*Math.sin(ie)*Math.cos(Mt),Ut=Ft*Math.sin(ie)*Math.sin(Mt),he=Ft*Math.cos(ie);Jt.push(zt,Ut,he),ne.push(lt,w,Wt)}const z=new wi;z.setAttribute("position",new Vi(ne,3)),z.userData={tree:le,explode:Jt};const xe=new lv({size:bt,map:H[Et],transparent:!0,opacity:1,blending:Et==="gift"?Lr:Wo,depthWrite:!1,sizeAttenuation:!0}),te=new iy(z,xe);return A.add(te),te},K=()=>{const Et=[],Pt=new $a(8,8),bt=new $a(9,9),ne=new Ls({color:16766720}),Jt=(z,xe)=>!xe.some(te=>te.distanceTo(z)<ti.minDistance),le=[];return N.forEach((z,xe)=>{const te=new Ls({map:z.texture,side:mi}),oe=new Fn(Pt.clone(),te),Bt=new Fn(bt.clone(),ne);Bt.position.z=-.1,oe.add(Bt),oe.visible=!1,oe.scale.set(0,0,0),oe.userData.entry=z;let w,y=0;const k=50;do{const ct=Math.random()*Math.PI*2,_t=.8+Math.random()*.8,lt=ti.photoOrbitRadius*_t,Wt=-70*.3+xe/N.length*ti.treeHeight*.7;if(w=new tt(Math.cos(ct)*lt,Wt,Math.sin(ct)*lt),y++,y>=k)break}while(!Jt(w,le));le.push(w.clone()),oe.userData.baseTarget=w,oe.userData.floatSpeed=.6+Math.random()*1.4,oe.userData.floatPhase=Math.random()*Math.PI*2+xe,A.add(oe),Et.push(oe)}),Et},R=()=>{const Et=document.createElement("canvas");Et.width=1400,Et.height=300;const Pt=Et.getContext("2d");Pt.font='bold italic 70px "Times New Roman"',Pt.fillStyle="#FFD700",Pt.textAlign="center",Pt.shadowColor="#FF0000",Pt.shadowBlur=40,Pt.fillText("Felices Fiestas RosiPoderosi ♥️",700,150);const bt=new wh(Et),ne=new Ls({map:bt,transparent:!0,blending:Wo,side:mi}),Jt=new Fn(new $a(60,15),ne);Jt.position.set(0,ti.treeHeight/2+10,0),A.add(Jt);const le=document.createElement("canvas");le.width=128,le.height=128;const z=le.getContext("2d");z.fillStyle="#FFFF00",z.shadowColor="#FFFFFF",z.shadowBlur=20,z.beginPath();const xe=64,te=64,oe=50,Bt=20;for(let ct=0;ct<5;ct++)z.lineTo(xe+Math.cos((18+ct*72)/180*Math.PI)*oe,te-Math.sin((18+ct*72)/180*Math.PI)*oe),z.lineTo(xe+Math.cos((54+ct*72)/180*Math.PI)*Bt,te-Math.sin((54+ct*72)/180*Math.PI)*Bt);z.closePath(),z.fill();const w=new wh(le),y=new Ls({map:w,transparent:!0,blending:Wo,side:mi}),k=new Fn(new $a(12,12),y);return k.position.set(0,ti.treeHeight/2+2,0),A.add(k),{title:Jt,star:k,titleTexture:bt,starTexture:w}},D=(Et,Pt,bt,ne,Jt)=>{const le=Et.geometry.getAttribute("position"),z=le.array,xe=Et.geometry.userData[Pt==="TREE"?"tree":"explode"];for(let te=0;te<z.length;te++)z[te]+=(xe[te]-z[te])*bt;if(le.needsUpdate=!0,Pt==="TREE")if(Et.rotation.y+=.003,Jt){const te=1+Math.sin(ne*5)*.2;Et.scale.set(te,te,te)}else Et.scale.set(1,1,1);else Pt==="EXPLODE"?(Et.rotation.y+=.01,Et.scale.set(1,1,1)):(Et.rotation.y+=.008,Et.scale.set(1,1,1))},X=P("gold",ti.goldCount,2),rt=P("red",ti.redCount,3.5),at=P("gift",ti.giftCount,3),ft=K(),{title:ut,star:L,titleTexture:G,starTexture:it}=R();r.current=ft.length>0?0:-1;const xt=new Set,St=Et=>{Et.repeat||(Et.code==="Digit1"?p("TREE"):Et.code==="Digit2"?p("EXPLODE"):Et.code==="Digit3"?p("PHOTO"):Et.code==="ArrowLeft"&&i.current==="PHOTO"&&ft.length>0&&r.current!==-1?r.current=(r.current+ft.length-1)%ft.length:Et.code==="ArrowRight"&&i.current==="PHOTO"&&ft.length>0&&r.current!==-1&&(r.current=(r.current+1)%ft.length),xt.add(Et.code))},U=Et=>{xt.delete(Et.code)},j={dragging:!1,moved:!1,x:0,y:0},mt=new py,Rt=new Ge,Gt=Et=>{j.dragging=!0,j.moved=!1,j.x=Et.clientX,j.y=Et.clientY,g.style.cursor="grabbing"},$=Et=>{if(!j.dragging)return;const Pt=Et.clientX-j.x,bt=Et.clientY-j.y;j.x=Et.clientX,j.y=Et.clientY,(Math.abs(Pt)>2||Math.abs(bt)>2)&&(j.moved=!0),i.current==="PHOTO"?(M.azimuth-=Pt*.002,M.polar=Ar(M.polar-bt*.002,.3,Math.PI-.3)):(M.azimuth-=Pt*.005,M.polar=Ar(M.polar+bt*.005,.2,Math.PI-.2))},dt=Et=>{if(j.dragging=!1,g.style.cursor="grab",!j.moved){const Pt=x.domElement.getBoundingClientRect();Rt.set((Et.clientX-Pt.left)/Pt.width*2-1,-((Et.clientY-Pt.top)/Pt.height)*2+1),mt.setFromCamera(Rt,C);const bt=mt.intersectObjects(ft,!0);if(bt.length>0){const ne=bt[0].object instanceof Fn?bt[0].object:bt[0].object.parent instanceof Fn?bt[0].object.parent:null;if(ne){const Jt=ft.indexOf(ne);Jt>=0&&(r.current=Jt,p("PHOTO"))}}}},Dt=Et=>{Et.preventDefault(),M.radius=Ar(M.radius+Et.deltaY*.05,40,200)},kt=()=>{C.aspect=window.innerWidth/window.innerHeight,C.updateProjectionMatrix(),x.setSize(window.innerWidth,window.innerHeight)};x.domElement.addEventListener("pointerdown",Gt),window.addEventListener("pointermove",$),window.addEventListener("pointerup",dt),x.domElement.addEventListener("wheel",Dt,{passive:!1}),window.addEventListener("keydown",St),window.addEventListener("keyup",U),window.addEventListener("resize",kt);let Vt=0;const _e=()=>{Vt=requestAnimationFrame(_e),xt.has("KeyA")&&(M.azimuth+=.02),xt.has("KeyD")&&(M.azimuth-=.02),xt.has("KeyW")&&(M.polar=Ar(M.polar-.02,.2,Math.PI-.2)),xt.has("KeyS")&&(M.polar=Ar(M.polar+.02,.2,Math.PI-.2)),xt.has("KeyQ")&&(M.radius=Ar(M.radius-.8,40,200)),xt.has("KeyE")&&(M.radius=Ar(M.radius+.8,40,200)),S();const Et=performance.now()*.001,Pt=i.current;if(D(X,Pt,.06,Et,!1),D(rt,Pt,.065,Et,!0),D(at,Pt,.055,Et,!1),O.forEach(bt=>{bt.video.paused||(bt.texture.needsUpdate=!0)}),Pt==="TREE")ut.visible=!0,L.visible=!0,ut.scale.lerp(new tt(1,1,1),.1),L.rotation.z-=.02,ft.forEach(bt=>{bt.scale.lerp(new tt(0,0,0),.1),bt.visible=!1,I(bt.userData.entry,!1)});else if(Pt==="EXPLODE"){ut.visible=!1,L.visible=!1;let bt=0,ne=1/0;ft.forEach((le,z)=>{le.visible=!0;const xe=le.userData.baseTarget,te=le.userData.floatSpeed??1,oe=le.userData.floatPhase??0,Bt=Math.sin(Et*te+oe)*2.5;let w;xe?(w=xe.clone().applyAxisAngle(m1,X.rotation.y),w.y+=Bt):w=new tt(0,Bt,0),le.position.lerp(w,.08),le.lookAt(C.position);const y=le.position.distanceTo(C.position);y<ne&&(ne=y,bt=z);const k=CM.clamp(120/y,.6,1.6);le.scale.lerp(new tt(k,k,k),.1),I(le.userData.entry,!1)}),ft.length>0&&(r.current=bt);const Jt=ft[r.current];Jt&&I(Jt.userData.entry,!0)}else ut.visible=!1,L.visible=!1,ft.forEach((bt,ne)=>{ne===r.current&&r.current!==-1?(bt.visible=!0,bt.position.lerp(new tt(0,0,60),.1),bt.scale.lerp(new tt(5,5,5),.1),bt.lookAt(C.position),bt.rotation.z=0,I(bt.userData.entry,!0)):(bt.scale.lerp(new tt(0,0,0),.1),bt.scale.x<.05&&(bt.visible=!1),I(bt.userData.entry,!1))});x.render(A,C)};return _e(),()=>{cancelAnimationFrame(Vt),x.domElement.removeEventListener("pointerdown",Gt),window.removeEventListener("pointermove",$),window.removeEventListener("pointerup",dt),x.domElement.removeEventListener("wheel",Dt),window.removeEventListener("keydown",St),window.removeEventListener("keyup",U),window.removeEventListener("resize",kt),g.style.cursor="auto",x.dispose(),x.forceContextLoss(),x.domElement.remove(),X.geometry.dispose(),rt.geometry.dispose(),at.geometry.dispose(),X.material.dispose(),rt.material.dispose(),at.material.dispose(),H.gold.dispose(),H.red.dispose(),H.gift.dispose(),ft.forEach(Et=>{Et.geometry.dispose(),Et.material.dispose()}),N.forEach(Et=>{Et.type==="video"?(Et.texture.dispose(),Et.video.pause(),Et.video.removeAttribute("src"),Et.video.load()):Et.texture.dispose()}),ut.geometry.dispose(),L.geometry.dispose(),ut.material.dispose(),L.material.dispose(),G.dispose(),it.dispose()}},[u,p]);const _=Ri.useCallback(async()=>{e.current||(e.current=new Audio(f1),e.current.loop=!0,e.current.volume=1);try{await e.current.play()}catch(g){console.warn("No se pudo reproducir el audio automáticamente.",g)}p("TREE"),d(!0)},[p]);return ei.jsxs("div",{className:"app-root",children:[ei.jsx("div",{id:"canvas-container",ref:o}),ei.jsxs("div",{id:"ui-layer",children:[ei.jsx("div",{className:"guide",children:"Ratón: arrastra para orbitar, rueda para acercar. WASD/QE ajustan la cámara. 1/2/3 o los botones cambian de modo."}),ei.jsxs("div",{className:"controls",children:[ei.jsx("div",{className:"controls__title",children:"Modos"}),ei.jsxs("div",{className:"controls__list",children:[ei.jsx("button",{type:"button",className:`controls__button${h==="TREE"?" controls__button--active":""}`,onClick:()=>p("TREE"),children:"Árbol"}),ei.jsx("button",{type:"button",className:`controls__button${h==="EXPLODE"?" controls__button--active":""}`,onClick:()=>p("EXPLODE"),children:"Explosión"}),ei.jsx("button",{type:"button",className:`controls__button${h==="PHOTO"?" controls__button--active":""}`,onClick:()=>p("PHOTO"),children:"Galería"})]})]}),!u&&ei.jsx("button",{id:"btnStart",type:"button",onClick:_,children:"INICIAR"})]})]})}DS.createRoot(document.getElementById("root")).render(ei.jsx(Ri.StrictMode,{children:ei.jsx(g1,{})}));
