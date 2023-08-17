/*! For license information please see bundle.js.LICENSE.txt */
"use strict";(self.webpackChunke_commerce=self.webpackChunke_commerce||[]).push([[873],{2599:(e,t,r)=>{function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},o.apply(this,arguments)}var a;r.d(t,{Ep:()=>u,J0:()=>l,RQ:()=>C,WK:()=>B,X3:()=>_,Zn:()=>P,Zq:()=>U,aU:()=>a,cP:()=>h,fp:()=>v,iQ:()=>I,lX:()=>i,p7:()=>V,pC:()=>T}),function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"}(a||(a={}));const n="popstate";function i(e){return void 0===e&&(e={}),function(e,t,r,i){void 0===i&&(i={});let{window:s=document.defaultView,v5Compat:h=!1}=i,f=s.history,p=a.Pop,m=null,v=y();function y(){return(f.state||{idx:null}).idx}function g(){p=a.Pop;let e=y(),t=null==e?null:e-v;v=e,m&&m({action:p,location:w.location,delta:t})}function b(e){let t="null"!==s.location.origin?s.location.origin:s.location.href,r="string"==typeof e?e:u(e);return l(t,"No window.location.(origin|href) available to create URL for href: "+r),new URL(r,t)}null==v&&(v=0,f.replaceState(o({},f.state,{idx:v}),""));let w={get action(){return p},get location(){return e(s,f)},listen(e){if(m)throw new Error("A history only accepts one active listener");return s.addEventListener(n,g),m=e,()=>{s.removeEventListener(n,g),m=null}},createHref:e=>t(s,e),createURL:b,encodeLocation(e){let t=b(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:function(e,t){p=a.Push;let o=d(w.location,e,t);r&&r(o,e),v=y()+1;let n=c(o,v),i=w.createHref(o);try{f.pushState(n,"",i)}catch(e){if(e instanceof DOMException&&"DataCloneError"===e.name)throw e;s.location.assign(i)}h&&m&&m({action:p,location:w.location,delta:1})},replace:function(e,t){p=a.Replace;let o=d(w.location,e,t);r&&r(o,e),v=y();let n=c(o,v),i=w.createHref(o);f.replaceState(n,"",i),h&&m&&m({action:p,location:w.location,delta:0})},go:e=>f.go(e)};return w}((function(e,t){let{pathname:r,search:o,hash:a}=e.location;return d("",{pathname:r,search:o,hash:a},t.state&&t.state.usr||null,t.state&&t.state.key||"default")}),(function(e,t){return"string"==typeof t?t:u(t)}),null,e)}function l(e,t){if(!1===e||null==e)throw new Error(t)}function s(e,t){if(!e){"undefined"!=typeof console&&console.warn(t);try{throw new Error(t)}catch(e){}}}function c(e,t){return{usr:e.state,key:e.key,idx:t}}function d(e,t,r,a){return void 0===r&&(r=null),o({pathname:"string"==typeof e?e:e.pathname,search:"",hash:""},"string"==typeof t?h(t):t,{state:r,key:t&&t.key||a||Math.random().toString(36).substr(2,8)})}function u(e){let{pathname:t="/",search:r="",hash:o=""}=e;return r&&"?"!==r&&(t+="?"===r.charAt(0)?r:"?"+r),o&&"#"!==o&&(t+="#"===o.charAt(0)?o:"#"+o),t}function h(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substr(r),e=e.substr(0,r));let o=e.indexOf("?");o>=0&&(t.search=e.substr(o),e=e.substr(0,o)),e&&(t.pathname=e)}return t}var f;!function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"}(f||(f={}));const p=new Set(["lazy","caseSensitive","path","id","index","children"]);function m(e,t,r,a){return void 0===r&&(r=[]),void 0===a&&(a={}),e.map(((e,n)=>{let i=[...r,n],s="string"==typeof e.id?e.id:i.join("-");if(l(!0!==e.index||!e.children,"Cannot specify children on an index route"),l(!a[s],'Found a route id collision on id "'+s+"\".  Route id's must be globally unique within Data Router usages"),function(e){return!0===e.index}(e)){let r=o({},e,t(e),{id:s});return a[s]=r,r}{let r=o({},e,t(e),{id:s,children:void 0});return a[s]=r,e.children&&(r.children=m(e.children,t,i,a)),r}}))}function v(e,t,r){void 0===r&&(r="/");let o=P(("string"==typeof t?h(t):t).pathname||"/",r);if(null==o)return null;let a=y(e);!function(e){e.sort(((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){return e.length===t.length&&e.slice(0,-1).every(((e,r)=>e===t[r]))?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map((e=>e.childrenIndex)),t.routesMeta.map((e=>e.childrenIndex)))))}(a);let n=null;for(let e=0;null==n&&e<a.length;++e)n=A(a[e],S(o));return n}function y(e,t,r,o){void 0===t&&(t=[]),void 0===r&&(r=[]),void 0===o&&(o="");let a=(e,a,n)=>{let i={relativePath:void 0===n?e.path||"":n,caseSensitive:!0===e.caseSensitive,childrenIndex:a,route:e};i.relativePath.startsWith("/")&&(l(i.relativePath.startsWith(o),'Absolute route path "'+i.relativePath+'" nested under path "'+o+'" is not valid. An absolute child route path must start with the combined path of all its parent routes.'),i.relativePath=i.relativePath.slice(o.length));let s=C([o,i.relativePath]),c=r.concat(i);e.children&&e.children.length>0&&(l(!0!==e.index,'Index routes must not have child routes. Please remove all child routes from route path "'+s+'".'),y(e.children,t,c,s)),(null!=e.path||e.index)&&t.push({path:s,score:k(s,e.index),routesMeta:c})};return e.forEach(((e,t)=>{var r;if(""!==e.path&&null!=(r=e.path)&&r.includes("?"))for(let r of g(e.path))a(e,t,r);else a(e,t)})),t}function g(e){let t=e.split("/");if(0===t.length)return[];let[r,...o]=t,a=r.endsWith("?"),n=r.replace(/\?$/,"");if(0===o.length)return a?[n,""]:[n];let i=g(o.join("/")),l=[];return l.push(...i.map((e=>""===e?n:[n,e].join("/")))),a&&l.push(...i),l.map((t=>e.startsWith("/")&&""===t?"/":t))}const b=/^:\w+$/,w=3,D=2,R=1,E=10,x=-2,M=e=>"*"===e;function k(e,t){let r=e.split("/"),o=r.length;return r.some(M)&&(o+=x),t&&(o+=D),r.filter((e=>!M(e))).reduce(((e,t)=>e+(b.test(t)?w:""===t?R:E)),o)}function A(e,t){let{routesMeta:r}=e,o={},a="/",n=[];for(let e=0;e<r.length;++e){let i=r[e],l=e===r.length-1,s="/"===a?t:t.slice(a.length)||"/",c=L({path:i.relativePath,caseSensitive:i.caseSensitive,end:l},s);if(!c)return null;Object.assign(o,c.params);let d=i.route;n.push({params:o,pathname:C([a,c.pathname]),pathnameBase:z(C([a,c.pathnameBase])),route:d}),"/"!==c.pathnameBase&&(a=C([a,c.pathnameBase]))}return n}function L(e,t){"string"==typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[r,o]=function(e,t,r){void 0===t&&(t=!1),void 0===r&&(r=!0),s("*"===e||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were "'+e.replace(/\*$/,"/*")+'" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "'+e.replace(/\*$/,"/*")+'".');let o=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,((e,t)=>(o.push(t),"/([^\\/]+)")));return e.endsWith("*")?(o.push("*"),a+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?a+="\\/*$":""!==e&&"/"!==e&&(a+="(?:(?=\\/|$))"),[new RegExp(a,t?void 0:"i"),o]}(e.path,e.caseSensitive,e.end),a=t.match(r);if(!a)return null;let n=a[0],i=n.replace(/(.)\/+$/,"$1"),l=a.slice(1);return{params:o.reduce(((e,t,r)=>{if("*"===t){let e=l[r]||"";i=n.slice(0,n.length-e.length).replace(/(.)\/+$/,"$1")}return e[t]=function(e,t){try{return decodeURIComponent(e)}catch(r){return s(!1,'The value for the URL param "'+t+'" will not be decoded because the string "'+e+'" is a malformed URL segment. This is probably due to a bad percent encoding ('+r+")."),e}}(l[r]||"",t),e}),{}),pathname:n,pathnameBase:i,pattern:e}}function S(e){try{return decodeURI(e)}catch(t){return s(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding ('+t+")."),e}}function P(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,o=e.charAt(r);return o&&"/"!==o?null:e.slice(r)||"/"}function j(e,t,r,o){return"Cannot include a '"+e+"' character in a manually specified `to."+t+"` field ["+JSON.stringify(o)+"].  Please separate it out to the `to."+r+'` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'}function U(e){return e.filter(((e,t)=>0===t||e.route.path&&e.route.path.length>0))}function T(e,t,r,a){let n;void 0===a&&(a=!1),"string"==typeof e?n=h(e):(n=o({},e),l(!n.pathname||!n.pathname.includes("?"),j("?","pathname","search",n)),l(!n.pathname||!n.pathname.includes("#"),j("#","pathname","hash",n)),l(!n.search||!n.search.includes("#"),j("#","search","hash",n)));let i,s=""===e||""===n.pathname,c=s?"/":n.pathname;if(a||null==c)i=r;else{let e=t.length-1;if(c.startsWith("..")){let t=c.split("/");for(;".."===t[0];)t.shift(),e-=1;n.pathname=t.join("/")}i=e>=0?t[e]:"/"}let d=function(e,t){void 0===t&&(t="/");let{pathname:r,search:o="",hash:a=""}="string"==typeof e?h(e):e,n=r?r.startsWith("/")?r:function(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach((e=>{".."===e?r.length>1&&r.pop():"."!==e&&r.push(e)})),r.length>1?r.join("/"):"/"}(r,t):t;return{pathname:n,search:O(o),hash:F(a)}}(n,i),u=c&&"/"!==c&&c.endsWith("/"),f=(s||"."===c)&&r.endsWith("/");return d.pathname.endsWith("/")||!u&&!f||(d.pathname+="/"),d}const C=e=>e.join("/").replace(/\/\/+/g,"/"),z=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),O=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",F=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";class _ extends Error{}class I{constructor(e,t,r,o){void 0===o&&(o=!1),this.status=e,this.statusText=t||"",this.internal=o,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function B(e){return null!=e&&"number"==typeof e.status&&"string"==typeof e.statusText&&"boolean"==typeof e.internal&&"data"in e}const W=["post","put","patch","delete"],$=new Set(W),q=["get",...W],N=new Set(q),H=new Set([301,302,303,307,308]),Y=new Set([307,308]),J={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},X={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},Q={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},Z=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,K=e=>({hasErrorBoundary:Boolean(e.hasErrorBoundary)});function V(e){const t=e.window?e.window:"undefined"!=typeof window?window:void 0,r=void 0!==t&&void 0!==t.document&&void 0!==t.document.createElement,n=!r;let i;if(l(e.routes.length>0,"You must provide a non-empty routes array to createRouter"),e.mapRouteProperties)i=e.mapRouteProperties;else if(e.detectErrorBoundary){let t=e.detectErrorBoundary;i=e=>({hasErrorBoundary:t(e)})}else i=K;let c,u={},h=m(e.routes,i,void 0,u),p=e.basename||"/",y=o({v7_normalizeFormMethod:!1,v7_prependBasename:!1},e.future),g=null,b=new Set,w=null,D=null,R=null,E=null!=e.hydrationData,x=v(h,e.history.location,p),M=null;if(null==x){let t=fe(404,{pathname:e.history.location.pathname}),{matches:r,route:o}=he(h);x=r,M={[o.id]:t}}let k,A,L=!(x.some((e=>e.route.lazy))||x.some((e=>e.route.loader))&&null==e.hydrationData),S={historyAction:e.history.action,location:e.history.location,matches:x,initialized:L,navigation:J,restoreScrollPosition:null==e.hydrationData&&null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||M,fetchers:new Map,blockers:new Map},j=a.Pop,U=!1,T=!1,C=!1,z=[],O=[],F=new Map,_=0,I=-1,B=new Map,W=new Set,$=new Map,q=new Map,N=new Map,H=!1;function V(e){S=o({},S,e),b.forEach((e=>e(S)))}function re(t,r){var n,i;let l,s=null!=S.actionData&&null!=S.navigation.formMethod&&be(S.navigation.formMethod)&&"loading"===S.navigation.state&&!0!==(null==(n=t.state)?void 0:n._isRedirect);l=r.actionData?Object.keys(r.actionData).length>0?r.actionData:null:s?S.actionData:null;let d=r.loaderData?de(S.loaderData,r.loaderData,r.matches||[],r.errors):S.loaderData,u=S.blockers;u.size>0&&(u=new Map(u),u.forEach(((e,t)=>u.set(t,Q))));let f=!0===U||null!=S.navigation.formMethod&&be(S.navigation.formMethod)&&!0!==(null==(i=t.state)?void 0:i._isRedirect);c&&(h=c,c=void 0),T||j===a.Pop||(j===a.Push?e.history.push(t,t.state):j===a.Replace&&e.history.replace(t,t.state)),V(o({},r,{actionData:l,loaderData:d,historyAction:j,location:t,initialized:!0,navigation:J,revalidation:"idle",restoreScrollPosition:_e(t,r.matches||S.matches),preventScrollReset:f,blockers:u})),j=a.Pop,U=!1,T=!1,C=!1,z=[],O=[]}async function oe(t,r,n){A&&A.abort(),A=null,j=t,T=!0===(n&&n.startUninterruptedRevalidation),function(e,t){if(w&&R){let r=Fe(e,t);w[r]=R()}}(S.location,S.matches),U=!0===(n&&n.preventScrollReset);let l=c||h,s=n&&n.overrideNavigation,d=v(l,r,p);if(!d){let e=fe(404,{pathname:r.pathname}),{matches:t,route:o}=he(l);return Oe(),void re(r,{matches:t,loaderData:{},errors:{[o.id]:e}})}if(S.initialized&&!C&&(m=S.location,y=r,m.pathname===y.pathname&&m.search===y.search&&(""===m.hash?""!==y.hash:m.hash===y.hash||""!==y.hash))&&!(n&&n.submission&&be(n.submission.formMethod)))return void re(r,{matches:d});var m,y;A=new AbortController;let g,b,D=ie(e.history,r,A.signal,n&&n.submission);if(n&&n.pendingError)b={[ue(d).route.id]:n.pendingError};else if(n&&n.submission&&be(n.submission.formMethod)){let e=await async function(e,t,r,o,n){void 0===n&&(n={}),me();let l,s=function(e,t){return{state:"submitting",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}}(t,r);V({navigation:s});let c=Ee(o,t);if(c.route.action||c.route.lazy){if(l=await ne("action",e,c,o,u,i,p),e.signal.aborted)return{shortCircuited:!0}}else l={type:f.error,error:fe(405,{method:e.method,pathname:t.pathname,routeId:c.route.id})};if(ge(l)){let e;return e=n&&null!=n.replace?n.replace:l.location===S.location.pathname+S.location.search,await le(S,l,{submission:r,replace:e}),{shortCircuited:!0}}if(ye(l)){let e=ue(o,c.route.id);return!0!==(n&&n.replace)&&(j=a.Push),{pendingActionData:{},pendingActionError:{[e.route.id]:l.error}}}if(ve(l))throw fe(400,{type:"defer-action"});return{pendingActionData:{[c.route.id]:l.data}}}(D,r,n.submission,d,{replace:n.replace});if(e.shortCircuited)return;g=e.pendingActionData,b=e.pendingActionError,s=Me(r,n.submission),D=new Request(D.url,{signal:D.signal})}let{shortCircuited:E,loaderData:x,errors:M}=await async function(t,r,a,n,i,l,s,d,u){let f=n||Me(r,i),m=i||l||xe(f),v=c||h,[y,g]=te(e.history,S,a,m,r,C,z,O,$,W,v,p,d,u);if(Oe((e=>!(a&&a.some((t=>t.route.id===e)))||y&&y.some((t=>t.route.id===e)))),I=++_,0===y.length&&0===g.length){let e=je();return re(r,o({matches:a,loaderData:{},errors:u||null},d?{actionData:d}:{},e?{fetchers:new Map(S.fetchers)}:{})),{shortCircuited:!0}}if(!T){g.forEach((e=>{let t=S.fetchers.get(e.key),r=ke(void 0,t?t.data:void 0);S.fetchers.set(e.key,r)}));let e=d||S.actionData;V(o({navigation:f},e?0===Object.keys(e).length?{actionData:null}:{actionData:e}:{},g.length>0?{fetchers:new Map(S.fetchers)}:{}))}g.forEach((e=>{F.has(e.key)&&Se(e.key),e.controller&&F.set(e.key,e.controller)}));let b=()=>g.forEach((e=>Se(e.key)));A&&A.signal.addEventListener("abort",b);let{results:w,loaderResults:D,fetcherResults:R}=await se(S.matches,a,y,g,t);if(t.signal.aborted)return{shortCircuited:!0};A&&A.signal.removeEventListener("abort",b),g.forEach((e=>F.delete(e.key)));let E=pe(w);if(E){if(E.idx>=y.length){let e=g[E.idx-y.length].key;W.add(e)}return await le(S,E.result,{replace:s}),{shortCircuited:!0}}let{loaderData:x,errors:M}=ce(S,a,y,D,u,g,R,q);q.forEach(((e,t)=>{e.subscribe((r=>{(r||e.done)&&q.delete(t)}))}));let k=je(),L=Ue(I);return o({loaderData:x,errors:M},k||L||g.length>0?{fetchers:new Map(S.fetchers)}:{})}(D,r,d,s,n&&n.submission,n&&n.fetcherSubmission,n&&n.replace,g,b);E||(A=null,re(r,o({matches:d},g?{actionData:g}:{},{loaderData:x,errors:M})))}function ae(e){return S.fetchers.get(e)||X}async function le(n,i,s){let{submission:c,replace:u,isFetchActionRedirect:h}=void 0===s?{}:s;i.revalidate&&(C=!0);let f=d(n.location,i.location,o({_isRedirect:!0},h?{_isFetchActionRedirect:!0}:{}));if(l(f,"Expected a location on the redirect navigation"),Z.test(i.location)&&r){let r=e.history.createURL(i.location),o=null==P(r.pathname,p);if(t.location.origin!==r.origin||o)return void(u?t.location.replace(i.location):t.location.assign(i.location))}A=null;let m=!0===u?a.Replace:a.Push,v=c||xe(n.navigation);if(Y.has(i.status)&&v&&be(v.formMethod))await oe(m,f,{submission:o({},v,{formAction:i.location}),preventScrollReset:U});else if(h)await oe(m,f,{overrideNavigation:Me(f),fetcherSubmission:v,preventScrollReset:U});else{let e=Me(f,v);await oe(m,f,{overrideNavigation:e,preventScrollReset:U})}}async function se(t,r,o,a,n){let l=await Promise.all([...o.map((e=>ne("loader",n,e,r,u,i,p))),...a.map((t=>t.matches&&t.match&&t.controller?ne("loader",ie(e.history,t.path,t.controller.signal),t.match,t.matches,u,i,p):{type:f.error,error:fe(404,{pathname:t.path})}))]),s=l.slice(0,o.length),c=l.slice(o.length);return await Promise.all([we(t,o,s,s.map((()=>n.signal)),!1,S.loaderData),we(t,a.map((e=>e.match)),c,a.map((e=>e.controller?e.controller.signal:null)),!0)]),{results:l,loaderResults:s,fetcherResults:c}}function me(){C=!0,z.push(...Oe()),$.forEach(((e,t)=>{F.has(t)&&(O.push(t),Se(t))}))}function Re(e,t,r){let o=ue(S.matches,t);Le(e),V({errors:{[o.route.id]:r},fetchers:new Map(S.fetchers)})}function Le(e){let t=S.fetchers.get(e);!F.has(e)||t&&"loading"===t.state&&B.has(e)||Se(e),$.delete(e),B.delete(e),W.delete(e),S.fetchers.delete(e)}function Se(e){let t=F.get(e);l(t,"Expected fetch controller: "+e),t.abort(),F.delete(e)}function Pe(e){for(let t of e){let e=Ae(ae(t).data);S.fetchers.set(t,e)}}function je(){let e=[],t=!1;for(let r of W){let o=S.fetchers.get(r);l(o,"Expected fetcher: "+r),"loading"===o.state&&(W.delete(r),e.push(r),t=!0)}return Pe(e),t}function Ue(e){let t=[];for(let[r,o]of B)if(o<e){let e=S.fetchers.get(r);l(e,"Expected fetcher: "+r),"loading"===e.state&&(Se(r),B.delete(r),t.push(r))}return Pe(t),t.length>0}function Te(e){S.blockers.delete(e),N.delete(e)}function Ce(e,t){let r=S.blockers.get(e)||Q;l("unblocked"===r.state&&"blocked"===t.state||"blocked"===r.state&&"blocked"===t.state||"blocked"===r.state&&"proceeding"===t.state||"blocked"===r.state&&"unblocked"===t.state||"proceeding"===r.state&&"unblocked"===t.state,"Invalid blocker state transition: "+r.state+" -> "+t.state);let o=new Map(S.blockers);o.set(e,t),V({blockers:o})}function ze(e){let{currentLocation:t,nextLocation:r,historyAction:o}=e;if(0===N.size)return;N.size>1&&s(!1,"A router only supports one blocker at a time");let a=Array.from(N.entries()),[n,i]=a[a.length-1],l=S.blockers.get(n);return l&&"proceeding"===l.state?void 0:i({currentLocation:t,nextLocation:r,historyAction:o})?n:void 0}function Oe(e){let t=[];return q.forEach(((r,o)=>{e&&!e(o)||(r.cancel(),t.push(o),q.delete(o))})),t}function Fe(e,t){return D&&D(e,t.map((e=>function(e,t){let{route:r,pathname:o,params:a}=e;return{id:r.id,pathname:o,params:a,data:t[r.id],handle:r.handle}}(e,S.loaderData))))||e.key}function _e(e,t){if(w){let r=Fe(e,t),o=w[r];if("number"==typeof o)return o}return null}return k={get basename(){return p},get state(){return S},get routes(){return h},initialize:function(){return g=e.history.listen((t=>{let{action:r,location:o,delta:a}=t;if(H)return void(H=!1);s(0===N.size||null!=a,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let n=ze({currentLocation:S.location,nextLocation:o,historyAction:r});return n&&null!=a?(H=!0,e.history.go(-1*a),void Ce(n,{state:"blocked",location:o,proceed(){Ce(n,{state:"proceeding",proceed:void 0,reset:void 0,location:o}),e.history.go(a)},reset(){let e=new Map(S.blockers);e.set(n,Q),V({blockers:e})}})):oe(r,o)})),S.initialized||oe(a.Pop,S.location),k},subscribe:function(e){return b.add(e),()=>b.delete(e)},enableScrollRestoration:function(e,t,r){if(w=e,R=t,D=r||null,!E&&S.navigation===J){E=!0;let e=_e(S.location,S.matches);null!=e&&V({restoreScrollPosition:e})}return()=>{w=null,R=null,D=null}},navigate:async function t(r,n){if("number"==typeof r)return void e.history.go(r);let i=G(S.location,S.matches,p,y.v7_prependBasename,r,null==n?void 0:n.fromRouteId,null==n?void 0:n.relative),{path:l,submission:s,error:c}=ee(y.v7_normalizeFormMethod,!1,i,n),u=S.location,h=d(S.location,l,n&&n.state);h=o({},h,e.history.encodeLocation(h));let f=n&&null!=n.replace?n.replace:void 0,m=a.Push;!0===f?m=a.Replace:!1===f||null!=s&&be(s.formMethod)&&s.formAction===S.location.pathname+S.location.search&&(m=a.Replace);let v=n&&"preventScrollReset"in n?!0===n.preventScrollReset:void 0,g=ze({currentLocation:u,nextLocation:h,historyAction:m});if(!g)return await oe(m,h,{submission:s,pendingError:c,preventScrollReset:v,replace:n&&n.replace});Ce(g,{state:"blocked",location:h,proceed(){Ce(g,{state:"proceeding",proceed:void 0,reset:void 0,location:h}),t(r,n)},reset(){let e=new Map(S.blockers);e.set(g,Q),V({blockers:e})}})},fetch:function(t,r,a,s){if(n)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");F.has(t)&&Se(t);let d=c||h,f=G(S.location,S.matches,p,y.v7_prependBasename,a,r,null==s?void 0:s.relative),m=v(d,f,p);if(!m)return void Re(t,r,fe(404,{pathname:f}));let{path:g,submission:b,error:w}=ee(y.v7_normalizeFormMethod,!0,f,s);if(w)return void Re(t,r,w);let D=Ee(m,g);U=!0===(s&&s.preventScrollReset),b&&be(b.formMethod)?async function(t,r,a,n,s,d){if(me(),$.delete(t),!n.route.action&&!n.route.lazy){let e=fe(405,{method:d.formMethod,pathname:a,routeId:r});return void Re(t,r,e)}let f=function(e,t){return{state:"submitting",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t?t.data:void 0," _hasFetcherDoneAnything ":!0}}(d,S.fetchers.get(t));S.fetchers.set(t,f),V({fetchers:new Map(S.fetchers)});let m=new AbortController,y=ie(e.history,a,m.signal,d);F.set(t,m);let g=_,b=await ne("action",y,n,s,u,i,p);if(y.signal.aborted)return void(F.get(t)===m&&F.delete(t));if(ge(b)){if(F.delete(t),I>g){let e=Ae(void 0);return S.fetchers.set(t,e),void V({fetchers:new Map(S.fetchers)})}{W.add(t);let e=ke(d);return S.fetchers.set(t,e),V({fetchers:new Map(S.fetchers)}),le(S,b,{submission:d,isFetchActionRedirect:!0})}}if(ye(b))return void Re(t,r,b.error);if(ve(b))throw fe(400,{type:"defer-action"});let w=S.navigation.location||S.location,D=ie(e.history,w,m.signal),R=c||h,E="idle"!==S.navigation.state?v(R,S.navigation.location,p):S.matches;l(E,"Didn't find any matches after fetcher action");let x=++_;B.set(t,x);let M=ke(d,b.data);S.fetchers.set(t,M);let[k,L]=te(e.history,S,E,d,w,C,z,O,$,W,R,p,{[n.route.id]:b.data},void 0);L.filter((e=>e.key!==t)).forEach((e=>{let t=e.key,r=S.fetchers.get(t),o=ke(void 0,r?r.data:void 0);S.fetchers.set(t,o),F.has(t)&&Se(t),e.controller&&F.set(t,e.controller)})),V({fetchers:new Map(S.fetchers)});let P=()=>L.forEach((e=>Se(e.key)));m.signal.addEventListener("abort",P);let{results:U,loaderResults:T,fetcherResults:N}=await se(S.matches,E,k,L,D);if(m.signal.aborted)return;m.signal.removeEventListener("abort",P),B.delete(t),F.delete(t),L.forEach((e=>F.delete(e.key)));let H=pe(U);if(H){if(H.idx>=k.length){let e=L[H.idx-k.length].key;W.add(e)}return le(S,H.result)}let{loaderData:Y,errors:J}=ce(S,S.matches,k,T,void 0,L,N,q);if(S.fetchers.has(t)){let e=Ae(b.data);S.fetchers.set(t,e)}let X=Ue(x);"loading"===S.navigation.state&&x>I?(l(j,"Expected pending action"),A&&A.abort(),re(S.navigation.location,{matches:E,loaderData:Y,errors:J,fetchers:new Map(S.fetchers)})):(V(o({errors:J,loaderData:de(S.loaderData,Y,E,J)},X||L.length>0?{fetchers:new Map(S.fetchers)}:{})),C=!1)}(t,r,g,D,m,b):($.set(t,{routeId:r,path:g}),async function(t,r,o,a,n,s){let c=S.fetchers.get(t),d=ke(s,c?c.data:void 0);S.fetchers.set(t,d),V({fetchers:new Map(S.fetchers)});let h=new AbortController,f=ie(e.history,o,h.signal);F.set(t,h);let m=_,v=await ne("loader",f,a,n,u,i,p);if(ve(v)&&(v=await De(v,f.signal,!0)||v),F.get(t)===h&&F.delete(t),f.signal.aborted)return;if(ge(v)){if(I>m){let e=Ae(void 0);return S.fetchers.set(t,e),void V({fetchers:new Map(S.fetchers)})}return W.add(t),void await le(S,v)}if(ye(v)){let e=ue(S.matches,r);return S.fetchers.delete(t),void V({fetchers:new Map(S.fetchers),errors:{[e.route.id]:v.error}})}l(!ve(v),"Unhandled fetcher deferred data");let y=Ae(v.data);S.fetchers.set(t,y),V({fetchers:new Map(S.fetchers)})}(t,r,g,D,m,b))},revalidate:function(){me(),V({revalidation:"loading"}),"submitting"!==S.navigation.state&&("idle"!==S.navigation.state?oe(j||S.historyAction,S.navigation.location,{overrideNavigation:S.navigation}):oe(S.historyAction,S.location,{startUninterruptedRevalidation:!0}))},createHref:t=>e.history.createHref(t),encodeLocation:t=>e.history.encodeLocation(t),getFetcher:ae,deleteFetcher:Le,dispose:function(){g&&g(),b.clear(),A&&A.abort(),S.fetchers.forEach(((e,t)=>Le(t))),S.blockers.forEach(((e,t)=>Te(t)))},getBlocker:function(e,t){let r=S.blockers.get(e)||Q;return N.get(e)!==t&&N.set(e,t),r},deleteBlocker:Te,_internalFetchControllers:F,_internalActiveDeferreds:q,_internalSetRoutes:function(e){u={},c=m(e,i,void 0,u)}},k}function G(e,t,r,o,a,n,i){let l,s;if(null!=n&&"path"!==i){l=[];for(let e of t)if(l.push(e),e.route.id===n){s=e;break}}else l=t,s=t[t.length-1];let c=T(a||".",U(l).map((e=>e.pathnameBase)),P(e.pathname,r)||e.pathname,"path"===i);return null==a&&(c.search=e.search,c.hash=e.hash),null!=a&&""!==a&&"."!==a||!s||!s.route.index||Re(c.search)||(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),o&&"/"!==r&&(c.pathname="/"===c.pathname?r:C([r,c.pathname])),u(c)}function ee(e,t,r,o){if(!o||!function(e){return null!=e&&("formData"in e&&null!=e.formData||"body"in e&&void 0!==e.body)}(o))return{path:r};if(o.formMethod&&(a=o.formMethod,!N.has(a.toLowerCase())))return{path:r,error:fe(405,{method:o.formMethod})};var a;let n,i,s=()=>({path:r,error:fe(400,{type:"invalid-body"})}),c=o.formMethod||"get",d=e?c.toUpperCase():c.toLowerCase(),f=me(r);if(void 0!==o.body){if("text/plain"===o.formEncType){if(!be(d))return s();let e="string"==typeof o.body?o.body:o.body instanceof FormData||o.body instanceof URLSearchParams?Array.from(o.body.entries()).reduce(((e,t)=>{let[r,o]=t;return""+e+r+"="+o+"\n"}),""):String(o.body);return{path:r,submission:{formMethod:d,formAction:f,formEncType:o.formEncType,formData:void 0,json:void 0,text:e}}}if("application/json"===o.formEncType){if(!be(d))return s();try{let e="string"==typeof o.body?JSON.parse(o.body):o.body;return{path:r,submission:{formMethod:d,formAction:f,formEncType:o.formEncType,formData:void 0,json:e,text:void 0}}}catch(e){return s()}}}if(l("function"==typeof FormData,"FormData is not available in this environment"),o.formData)n=le(o.formData),i=o.formData;else if(o.body instanceof FormData)n=le(o.body),i=o.body;else if(o.body instanceof URLSearchParams)n=o.body,i=se(n);else if(null==o.body)n=new URLSearchParams,i=new FormData;else try{n=new URLSearchParams(o.body),i=se(n)}catch(e){return s()}let p={formMethod:d,formAction:f,formEncType:o&&o.formEncType||"application/x-www-form-urlencoded",formData:i,json:void 0,text:void 0};if(be(p.formMethod))return{path:r,submission:p};let m=h(r);return t&&m.search&&Re(m.search)&&n.append("index",""),m.search="?"+n,{path:u(m),submission:p}}function te(e,t,r,a,n,i,l,s,c,d,u,h,f,p){let m=p?Object.values(p)[0]:f?Object.values(f)[0]:void 0,y=e.createURL(t.location),g=e.createURL(n),b=p?Object.keys(p)[0]:void 0,w=function(e,t){let r=e;if(t){let o=e.findIndex((e=>e.route.id===t));o>=0&&(r=e.slice(0,o))}return r}(r,b).filter(((e,r)=>{if(e.route.lazy)return!0;if(null==e.route.loader)return!1;if(function(e,t,r){let o=!t||r.route.id!==t.route.id,a=void 0===e[r.route.id];return o||a}(t.loaderData,t.matches[r],e)||l.some((t=>t===e.route.id)))return!0;let n=t.matches[r],s=e;return oe(e,o({currentUrl:y,currentParams:n.params,nextUrl:g,nextParams:s.params},a,{actionResult:m,defaultShouldRevalidate:i||y.pathname+y.search===g.pathname+g.search||y.search!==g.search||re(n,s)}))})),D=[];return c.forEach(((e,n)=>{if(!r.some((t=>t.route.id===e.routeId)))return;let l=v(u,e.path,h);if(!l)return void D.push({key:n,routeId:e.routeId,path:e.path,matches:null,match:null,controller:null});let c=t.fetchers.get(n),f=Ee(l,e.path),p=!1;p=!d.has(n)&&(!!s.includes(n)||(c&&"idle"!==c.state&&void 0===c.data?i:oe(f,o({currentUrl:y,currentParams:t.matches[t.matches.length-1].params,nextUrl:g,nextParams:r[r.length-1].params},a,{actionResult:m,defaultShouldRevalidate:i})))),p&&D.push({key:n,routeId:e.routeId,path:e.path,matches:l,match:f,controller:new AbortController})})),[w,D]}function re(e,t){let r=e.route.path;return e.pathname!==t.pathname||null!=r&&r.endsWith("*")&&e.params["*"]!==t.params["*"]}function oe(e,t){if(e.route.shouldRevalidate){let r=e.route.shouldRevalidate(t);if("boolean"==typeof r)return r}return t.defaultShouldRevalidate}async function ae(e,t,r){if(!e.lazy)return;let a=await e.lazy();if(!e.lazy)return;let n=r[e.id];l(n,"No route found in manifest");let i={};for(let e in a){let t=void 0!==n[e]&&"hasErrorBoundary"!==e;s(!t,'Route "'+n.id+'" has a static property "'+e+'" defined but its lazy function is also returning a value for this property. The lazy route property "'+e+'" will be ignored.'),t||p.has(e)||(i[e]=a[e])}Object.assign(n,i),Object.assign(n,o({},t(n),{lazy:void 0}))}async function ne(e,t,r,o,a,n,i,s){let c,d,u;void 0===s&&(s={});let h=e=>{let o,a=new Promise(((e,t)=>o=t));return u=()=>o(),t.signal.addEventListener("abort",u),Promise.race([e({request:t,params:r.params,context:s.requestContext}),a])};try{let o=r.route[e];if(r.route.lazy)if(o)d=(await Promise.all([h(o),ae(r.route,n,a)]))[0];else{if(await ae(r.route,n,a),o=r.route[e],!o){if("action"===e){let e=new URL(t.url),o=e.pathname+e.search;throw fe(405,{method:t.method,pathname:o,routeId:r.route.id})}return{type:f.data,data:void 0}}d=await h(o)}else{if(!o){let e=new URL(t.url);throw fe(404,{pathname:e.pathname+e.search})}d=await h(o)}l(void 0!==d,"You defined "+("action"===e?"an action":"a loader")+' for route "'+r.route.id+"\" but didn't return anything from your `"+e+"` function. Please return a value or `null`.")}catch(e){c=f.error,d=e}finally{u&&t.signal.removeEventListener("abort",u)}if(null!=(p=d)&&"number"==typeof p.status&&"string"==typeof p.statusText&&"object"==typeof p.headers&&void 0!==p.body){let e,a=d.status;if(H.has(a)){let e=d.headers.get("Location");if(l(e,"Redirects returned/thrown from loaders/actions must have a Location header"),Z.test(e)){if(!s.isStaticRequest){let r=new URL(t.url),o=e.startsWith("//")?new URL(r.protocol+e):new URL(e),a=null!=P(o.pathname,i);o.origin===r.origin&&a&&(e=o.pathname+o.search+o.hash)}}else e=G(new URL(t.url),o.slice(0,o.indexOf(r)+1),i,!0,e);if(s.isStaticRequest)throw d.headers.set("Location",e),d;return{type:f.redirect,status:a,location:e,revalidate:null!==d.headers.get("X-Remix-Revalidate")}}if(s.isRouteRequest)throw{type:c||f.data,response:d};let n=d.headers.get("Content-Type");return e=n&&/\bapplication\/json\b/.test(n)?await d.json():await d.text(),c===f.error?{type:c,error:new I(a,d.statusText,e),headers:d.headers}:{type:f.data,data:e,statusCode:d.status,headers:d.headers}}var p,m,v;return c===f.error?{type:c,error:d}:function(e){let t=e;return t&&"object"==typeof t&&"object"==typeof t.data&&"function"==typeof t.subscribe&&"function"==typeof t.cancel&&"function"==typeof t.resolveData}(d)?{type:f.deferred,deferredData:d,statusCode:null==(m=d.init)?void 0:m.status,headers:(null==(v=d.init)?void 0:v.headers)&&new Headers(d.init.headers)}:{type:f.data,data:d}}function ie(e,t,r,o){let a=e.createURL(me(t)).toString(),n={signal:r};if(o&&be(o.formMethod)){let{formMethod:e,formEncType:t}=o;n.method=e.toUpperCase(),"application/json"===t?(n.headers=new Headers({"Content-Type":t}),n.body=JSON.stringify(o.json)):"text/plain"===t?n.body=o.text:"application/x-www-form-urlencoded"===t&&o.formData?n.body=le(o.formData):n.body=o.formData}return new Request(a,n)}function le(e){let t=new URLSearchParams;for(let[r,o]of e.entries())t.append(r,"string"==typeof o?o:o.name);return t}function se(e){let t=new FormData;for(let[r,o]of e.entries())t.append(r,o);return t}function ce(e,t,r,a,n,i,s,c){let{loaderData:d,errors:u}=function(e,t,r,o,a){let n,i={},s=null,c=!1,d={};return r.forEach(((r,u)=>{let h=t[u].route.id;if(l(!ge(r),"Cannot handle redirect results in processLoaderData"),ye(r)){let t=ue(e,h),a=r.error;o&&(a=Object.values(o)[0],o=void 0),s=s||{},null==s[t.route.id]&&(s[t.route.id]=a),i[h]=void 0,c||(c=!0,n=B(r.error)?r.error.status:500),r.headers&&(d[h]=r.headers)}else ve(r)?(a.set(h,r.deferredData),i[h]=r.deferredData.data):i[h]=r.data,null==r.statusCode||200===r.statusCode||c||(n=r.statusCode),r.headers&&(d[h]=r.headers)})),o&&(s=o,i[Object.keys(o)[0]]=void 0),{loaderData:i,errors:s,statusCode:n||200,loaderHeaders:d}}(t,r,a,n,c);for(let t=0;t<i.length;t++){let{key:r,match:a,controller:n}=i[t];l(void 0!==s&&void 0!==s[t],"Did not find corresponding fetcher result");let c=s[t];if(!n||!n.signal.aborted)if(ye(c)){let t=ue(e.matches,null==a?void 0:a.route.id);u&&u[t.route.id]||(u=o({},u,{[t.route.id]:c.error})),e.fetchers.delete(r)}else if(ge(c))l(!1,"Unhandled fetcher revalidation redirect");else if(ve(c))l(!1,"Unhandled fetcher deferred data");else{let t=Ae(c.data);e.fetchers.set(r,t)}}return{loaderData:d,errors:u}}function de(e,t,r,a){let n=o({},t);for(let o of r){let r=o.route.id;if(t.hasOwnProperty(r)?void 0!==t[r]&&(n[r]=t[r]):void 0!==e[r]&&o.route.loader&&(n[r]=e[r]),a&&a.hasOwnProperty(r))break}return n}function ue(e,t){return(t?e.slice(0,e.findIndex((e=>e.route.id===t))+1):[...e]).reverse().find((e=>!0===e.route.hasErrorBoundary))||e[0]}function he(e){let t=e.find((e=>e.index||!e.path||"/"===e.path))||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:t}],route:t}}function fe(e,t){let{pathname:r,routeId:o,method:a,type:n}=void 0===t?{}:t,i="Unknown Server Error",l="Unknown @remix-run/router error";return 400===e?(i="Bad Request",a&&r&&o?l="You made a "+a+' request to "'+r+'" but did not provide a `loader` for route "'+o+'", so there is no way to handle the request.':"defer-action"===n?l="defer() is not supported in actions":"invalid-body"===n&&(l="Unable to encode submission body")):403===e?(i="Forbidden",l='Route "'+o+'" does not match URL "'+r+'"'):404===e?(i="Not Found",l='No route matches URL "'+r+'"'):405===e&&(i="Method Not Allowed",a&&r&&o?l="You made a "+a.toUpperCase()+' request to "'+r+'" but did not provide an `action` for route "'+o+'", so there is no way to handle the request.':a&&(l='Invalid request method "'+a.toUpperCase()+'"')),new I(e||500,i,new Error(l),!0)}function pe(e){for(let t=e.length-1;t>=0;t--){let r=e[t];if(ge(r))return{result:r,idx:t}}}function me(e){return u(o({},"string"==typeof e?h(e):e,{hash:""}))}function ve(e){return e.type===f.deferred}function ye(e){return e.type===f.error}function ge(e){return(e&&e.type)===f.redirect}function be(e){return $.has(e.toLowerCase())}async function we(e,t,r,o,a,n){for(let i=0;i<r.length;i++){let s=r[i],c=t[i];if(!c)continue;let d=e.find((e=>e.route.id===c.route.id)),u=null!=d&&!re(d,c)&&void 0!==(n&&n[c.route.id]);if(ve(s)&&(a||u)){let e=o[i];l(e,"Expected an AbortSignal for revalidating fetcher deferred result"),await De(s,e,a).then((e=>{e&&(r[i]=e||r[i])}))}}}async function De(e,t,r){if(void 0===r&&(r=!1),!await e.deferredData.resolveData(t)){if(r)try{return{type:f.data,data:e.deferredData.unwrappedData}}catch(e){return{type:f.error,error:e}}return{type:f.data,data:e.deferredData.data}}}function Re(e){return new URLSearchParams(e).getAll("index").some((e=>""===e))}function Ee(e,t){let r="string"==typeof t?h(t).search:t.search;if(e[e.length-1].route.index&&Re(r||""))return e[e.length-1];let o=U(e);return o[o.length-1]}function xe(e){let{formMethod:t,formAction:r,formEncType:o,text:a,formData:n,json:i}=e;if(t&&r&&o)return null!=a?{formMethod:t,formAction:r,formEncType:o,formData:void 0,json:void 0,text:a}:null!=n?{formMethod:t,formAction:r,formEncType:o,formData:n,json:void 0,text:void 0}:void 0!==i?{formMethod:t,formAction:r,formEncType:o,formData:void 0,json:i,text:void 0}:void 0}function Me(e,t){return t?{state:"loading",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}:{state:"loading",location:e,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function ke(e,t){return e?{state:"loading",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t," _hasFetcherDoneAnything ":!0}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t," _hasFetcherDoneAnything ":!0}}function Ae(e){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e," _hasFetcherDoneAnything ":!0}}Symbol("deferred")}}]);