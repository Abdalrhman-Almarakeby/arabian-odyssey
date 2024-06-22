import{r as S,j as q,p as st}from"./index-C3JP5WYM.js";function un(t){return Object.prototype.toString.call(t)==="[object Object]"}function Bt(t){return un(t)||Array.isArray(t)}function ln(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function At(t,n){const e=Object.keys(t),r=Object.keys(n);if(e.length!==r.length)return!1;const i=JSON.stringify(Object.keys(t.breakpoints||{})),o=JSON.stringify(Object.keys(n.breakpoints||{}));return i!==o?!1:e.every(s=>{const u=t[s],c=n[s];return typeof u=="function"?`${u}`==`${c}`:!Bt(u)||!Bt(c)?u===c:At(u,c)})}function Rt(t){return t.concat().sort((n,e)=>n.name>e.name?1:-1).map(n=>n.options)}function an(t,n){if(t.length!==n.length)return!1;const e=Rt(t),r=Rt(n);return e.every((i,o)=>{const s=r[o];return At(i,s)})}function It(t){return typeof t=="number"}function Nt(t){return typeof t=="string"}function Ot(t){return typeof t=="boolean"}function Ht(t){return Object.prototype.toString.call(t)==="[object Object]"}function P(t){return Math.abs(t)}function Pt(t){return Math.sign(t)}function at(t,n){return P(t-n)}function fn(t,n){if(t===0||n===0||P(t)<=P(n))return 0;const e=at(P(t),P(n));return P(e/t)}function ft(t){return dt(t).map(Number)}function $(t){return t[mt(t)]}function mt(t){return Math.max(0,t.length-1)}function Dt(t,n){return n===mt(t)}function Gt(t,n=0){return Array.from(Array(t),(e,r)=>n+r)}function dt(t){return Object.keys(t)}function Ut(t,n){return[t,n].reduce((e,r)=>(dt(r).forEach(i=>{const o=e[i],s=r[i],u=Ht(o)&&Ht(s);e[i]=u?Ut(o,s):s}),e),{})}function Qt(t,n){return typeof n.MouseEvent<"u"&&t instanceof n.MouseEvent}function dn(t,n){const e={start:r,center:i,end:o};function r(){return 0}function i(c){return o(c)/2}function o(c){return n-c}function s(c,l){return Nt(t)?e[t](c):t(n,c,l)}return{measure:s}}function pt(){let t=[];function n(i,o,s,u={passive:!0}){let c;if("addEventListener"in i)i.addEventListener(o,s,u),c=()=>i.removeEventListener(o,s,u);else{const l=i;l.addListener(s),c=()=>l.removeListener(s)}return t.push(c),r}function e(){t=t.filter(i=>i())}const r={add:n,clear:e};return r}function pn(t,n,e,r){const i=pt(),o=1e3/60;let s=null,u=0,c=0;function l(){i.add(t,"visibilitychange",()=>{t.hidden&&m()})}function y(){v(),i.clear()}function a(h){if(!c)return;s||(s=h);const f=h-s;for(s=h,u+=f;u>=o;)e(),u-=o;const g=P(u/o);r(g),c&&n.requestAnimationFrame(a)}function p(){c||(c=n.requestAnimationFrame(a))}function v(){n.cancelAnimationFrame(c),s=null,u=0,c=0}function m(){s=null,u=0}return{init:l,destroy:y,start:p,stop:v,update:e,render:r}}function mn(t,n){const e=t==="y"?"y":"x",r=t==="y"?"x":"y",i=u(),o=c();function s(y){const{width:a,height:p}=y;return e==="x"?a:p}function u(){return e==="y"?"top":n==="rtl"?"right":"left"}function c(){return e==="y"?"bottom":n==="rtl"?"left":"right"}return{scroll:e,cross:r,startEdge:i,endEdge:o,measureSize:s}}function et(t=0,n=0){const e=P(t-n);function r(l){return l<t}function i(l){return l>n}function o(l){return r(l)||i(l)}function s(l){return o(l)?r(l)?t:n:l}function u(l){return e?l-e*Math.ceil((l-n)/e):l}return{length:e,max:n,min:t,constrain:s,reachedAny:o,reachedMax:i,reachedMin:r,removeOffset:u}}function Jt(t,n,e){const{constrain:r}=et(0,t),i=t+1;let o=s(n);function s(p){return e?P((i+p)%i):r(p)}function u(){return o}function c(p){return o=s(p),a}function l(p){return y().set(u()+p)}function y(){return Jt(t,u(),e)}const a={get:u,set:c,add:l,clone:y};return a}function gn(t){const n=t==="rtl"?-1:1;function e(i){return i*n}return{apply:e}}function hn(t,n,e,r,i,o,s,u,c,l,y,a,p,v,m,d,h,f,g,x){const{cross:w}=t,C=["INPUT","SELECT","TEXTAREA"],I={passive:!1},T=pt(),E=pt(),N=et(50,225).constrain(m.measure(20)),L={mouse:300,touch:400},O={mouse:500,touch:600},j=d?43:25;let B=!1,R=0,K=0,H=!1,Y=!1,Z=!1,U=!1;function it(b){if(!x)return;function A(k){(Ot(x)||x(b,k))&&ut(k)}const M=e;T.add(M,"dragstart",k=>k.preventDefault(),I).add(M,"touchmove",()=>{},I).add(M,"touchend",()=>{}).add(M,"touchstart",A).add(M,"mousedown",A).add(M,"touchcancel",V).add(M,"contextmenu",V).add(M,"click",J,!0)}function G(){T.clear(),E.clear()}function rt(){const b=U?r:e;E.add(b,"touchmove",F,I).add(b,"touchend",V).add(b,"mousemove",F,I).add(b,"mouseup",V)}function ot(b){const A=b.nodeName||"";return C.includes(A)}function Q(){return(d?O:L)[U?"mouse":"touch"]}function ct(b,A){const M=p.add(Pt(b)*-1),k=a.byDistance(b,!d).distance;return d||P(b)<N?k:f&&A?k*.5:a.byIndex(M.get(),0).distance}function ut(b){const A=Qt(b,i);U=A,!(A&&b.button!==0)&&(ot(b.target)||(Z=d&&A&&!b.buttons&&B,B=at(o.get(),u.get())>=2,H=!0,s.pointerDown(b),y.useFriction(0).useDuration(0),o.set(u),rt(),R=s.readPoint(b),K=s.readPoint(b,w),v.emit("pointerDown")))}function F(b){const A=s.readPoint(b),M=s.readPoint(b,w),k=at(A,R),W=at(M,K);if(!Y&&!U&&(!b.cancelable||(Y=k>W,!Y)))return V(b);const X=s.pointerMove(b);k>h&&(Z=!0),y.useFriction(.3).useDuration(1),c.start(),o.add(n.apply(X)),b.preventDefault()}function V(b){const M=a.byDistance(0,!1).index!==p.get(),k=s.pointerUp(b)*Q(),W=ct(n.apply(k),M),X=fn(k,W),tt=j-10*X,_=g+X/50;Y=!1,H=!1,E.clear(),y.useDuration(tt).useFriction(_),l.distance(W,!d),U=!1,v.emit("pointerUp")}function J(b){Z&&(b.stopPropagation(),b.preventDefault())}function z(){return H}return{init:it,pointerDown:z,destroy:G}}function yn(t,n){let r,i;function o(a){return a.timeStamp}function s(a,p){const m=`client${(p||t.scroll)==="x"?"X":"Y"}`;return(Qt(a,n)?a:a.touches[0])[m]}function u(a){return r=a,i=a,s(a)}function c(a){const p=s(a)-s(i),v=o(a)-o(r)>170;return i=a,v&&(r=a),p}function l(a){if(!r||!i)return 0;const p=s(i)-s(r),v=o(a)-o(r),m=o(a)-o(i)>170,d=p/v;return v&&!m&&P(d)>.1?d:0}return{pointerDown:u,pointerMove:c,pointerUp:l,readPoint:s}}function bn(){function t(e){const{offsetTop:r,offsetLeft:i,offsetWidth:o,offsetHeight:s}=e;return{top:r,right:i+o,bottom:r+s,left:i,width:o,height:s}}return{measure:t}}function vn(t){function n(r){return t*(r/100)}return{measure:n}}function xn(t,n,e,r,i,o,s){let u,c,l=[],y=!1;function a(d){return i.measureSize(s.measure(d))}function p(d){if(!o)return;c=a(t),l=r.map(a);function h(g){for(const x of g){const w=x.target===t,C=r.indexOf(x.target),I=w?c:l[C],T=a(w?t:r[C]);if(P(T-I)>=.5){e.requestAnimationFrame(()=>{d.reInit(),n.emit("resize")});break}}}u=new ResizeObserver(g=>{y||(Ot(o)||o(d,g))&&h(g)}),[t].concat(r).forEach(g=>u.observe(g))}function v(){u&&u.disconnect(),y=!0}return{init:p,destroy:v}}function Sn(t,n,e,r,i){let o=0,s=0,u=r,c=i,l=t.get(),y=0;function a(){const C=e.get()-t.get(),I=!u;let T=0;return I?(o=0,t.set(e),T=C):(o+=C/u,o*=c,l+=o,t.add(o),T=l-y),s=Pt(T),y=l,w}function p(){const C=e.get()-n.get();return P(C)<.001}function v(){return u}function m(){return s}function d(){return o}function h(){return g(r)}function f(){return x(i)}function g(C){return u=C,w}function x(C){return c=C,w}const w={direction:m,duration:v,velocity:d,seek:a,settled:p,useBaseFriction:f,useBaseDuration:h,useFriction:x,useDuration:g};return w}function En(t,n,e,r,i){const o=i.measure(10),s=i.measure(50),u=et(.1,.99);let c=!1;function l(){return!(c||!t.reachedAny(e.get())||!t.reachedAny(n.get()))}function y(v){if(!l())return;const m=t.reachedMin(n.get())?"min":"max",d=P(t[m]-n.get()),h=e.get()-n.get(),f=u.constrain(d/s);e.subtract(h*f),!v&&P(h)<o&&(e.set(t.constrain(e.get())),r.useDuration(25).useBaseFriction())}function a(v){c=!v}return{constrain:y,toggleActive:a}}function wn(t,n,e,r,i){const o=et(-n+t,0),s=a(),u=y(),c=p();function l(m,d){return at(m,d)<1}function y(){const m=s[0],d=$(s),h=s.lastIndexOf(m),f=s.indexOf(d)+1;return et(h,f)}function a(){return e.map((m,d)=>{const{min:h,max:f}=o,g=o.constrain(m),x=!d,w=Dt(e,d);return x?f:w||l(h,g)?h:l(f,g)?f:g}).map(m=>parseFloat(m.toFixed(3)))}function p(){if(n<=t+i)return[o.max];if(r==="keepSnaps")return s;const{min:m,max:d}=u;return s.slice(m,d)}return{snapsContained:c,scrollContainLimit:u}}function Cn(t,n,e){const r=n[0],i=e?r-t:$(n);return{limit:et(i,r)}}function Nn(t,n,e,r){const o=n.min+.1,s=n.max+.1,{reachedMin:u,reachedMax:c}=et(o,s);function l(p){return p===1?c(e.get()):p===-1?u(e.get()):!1}function y(p){if(!l(p))return;const v=t*(p*-1);r.forEach(m=>m.add(v))}return{loop:y}}function Ln(t){const{max:n,length:e}=t;function r(o){const s=o-n;return e?s/-e:0}return{get:r}}function An(t,n,e,r,i){const{startEdge:o,endEdge:s}=t,{groupSlides:u}=i,c=a().map(n.measure),l=p(),y=v();function a(){return u(r).map(d=>$(d)[s]-d[0][o]).map(P)}function p(){return r.map(d=>e[o]-d[o]).map(d=>-P(d))}function v(){return u(l).map(d=>d[0]).map((d,h)=>d+c[h])}return{snaps:l,snapsAligned:y}}function In(t,n,e,r,i,o){const{groupSlides:s}=i,{min:u,max:c}=r,l=y();function y(){const p=s(o),v=!t||n==="keepSnaps";return e.length===1?[o]:v?p:p.slice(u,c).map((m,d,h)=>{const f=!d,g=Dt(h,d);if(f){const x=$(h[0])+1;return Gt(x)}if(g){const x=mt(o)-$(h)[0]+1;return Gt(x,$(h)[0])}return m})}return{slideRegistry:l}}function On(t,n,e,r,i){const{reachedAny:o,removeOffset:s,constrain:u}=r;function c(m){return m.concat().sort((d,h)=>P(d)-P(h))[0]}function l(m){const d=t?s(m):u(m),h=n.map(g=>g-d).map(g=>y(g,0)).map((g,x)=>({diff:g,index:x})).sort((g,x)=>P(g.diff)-P(x.diff)),{index:f}=h[0];return{index:f,distance:d}}function y(m,d){const h=[m,m+e,m-e];if(!t)return h[0];if(!d)return c(h);const f=h.filter(g=>Pt(g)===d);return f.length?c(f):$(h)-e}function a(m,d){const h=n[m]-i.get(),f=y(h,d);return{index:m,distance:f}}function p(m,d){const h=i.get()+m,{index:f,distance:g}=l(h),x=!t&&o(h);if(!d||x)return{index:f,distance:m};const w=n[f]-g,C=m+y(w,0);return{index:f,distance:C}}return{byDistance:p,byIndex:a,shortcut:y}}function Pn(t,n,e,r,i,o,s){function u(a){const p=a.distance,v=a.index!==n.get();o.add(p),p&&(r.duration()?t.start():(t.update(),t.render(1),t.update())),v&&(e.set(n.get()),n.set(a.index),s.emit("select"))}function c(a,p){const v=i.byDistance(a,p);u(v)}function l(a,p){const v=n.clone().set(a),m=i.byIndex(v.get(),p);u(m)}return{distance:c,index:l}}function Dn(t,n,e,r,i,o){let s=0;function u(){o.add(document,"keydown",c,!1),n.forEach(l)}function c(a){a.code==="Tab"&&(s=new Date().getTime())}function l(a){const p=()=>{if(new Date().getTime()-s>10)return;t.scrollLeft=0;const d=n.indexOf(a),h=e.findIndex(f=>f.includes(d));It(h)&&(i.useDuration(0),r.index(h,0))};o.add(a,"focus",p,{passive:!0,capture:!0})}return{init:u}}function ht(t){let n=t;function e(){return n}function r(c){n=s(c)}function i(c){n+=s(c)}function o(c){n-=s(c)}function s(c){return It(c)?c:c.get()}return{get:e,set:r,add:i,subtract:o}}function Xt(t,n,e){const r=t.scroll==="x"?s:u,i=e.style;let o=!1;function s(p){return`translate3d(${p}px,0px,0px)`}function u(p){return`translate3d(0px,${p}px,0px)`}function c(p){o||(i.transform=r(n.apply(p)))}function l(p){o=!p}function y(){o||(i.transform="",e.getAttribute("style")||e.removeAttribute("style"))}return{clear:y,to:c,toggleActive:l}}function Tn(t,n,e,r,i,o,s,u,c,l){const a=ft(o),p=ft(o).reverse(),v=g().concat(x());function m(E,N){return E.reduce((L,O)=>L-o[O],N)}function d(E,N){return E.reduce((L,O)=>m(L,N)>0?L.concat([O]):L,[])}function h(E){return s.map((N,L)=>({start:N-i[L]+.5+E,end:N+e-.5+E}))}function f(E,N,L){const O=h(N);return E.map(j=>{const B=L?0:-r,R=L?r:0,K=L?"end":"start",H=O[j][K];return{index:j,loopPoint:H,slideLocation:ht(-1),translate:Xt(t,n,l[j]),target:()=>c.get()>H?B:R}})}function g(){const E=u[0],N=d(p,E);return f(N,r,!1)}function x(){const E=e-u[0]-1,N=d(a,E);return f(N,-r,!0)}function w(){return v.every(({index:E})=>{const N=a.filter(L=>L!==E);return m(N,e)<=.1})}function C(){v.forEach(E=>{const{target:N,translate:L,slideLocation:O}=E,j=N();j!==O.get()&&(L.to(j),O.set(j))})}function I(){v.forEach(E=>E.translate.clear())}return{canLoop:w,clear:I,loop:C,loopPoints:v}}function Mn(t,n,e){let r,i=!1;function o(c){if(!e)return;function l(y){for(const a of y)if(a.type==="childList"){c.reInit(),n.emit("slidesChanged");break}}r=new MutationObserver(y=>{i||(Ot(e)||e(c,y))&&l(y)}),r.observe(t,{childList:!0})}function s(){r&&r.disconnect(),i=!0}return{init:o,destroy:s}}function jn(t,n,e,r){const i={};let o=null,s=null,u,c=!1;function l(){u=new IntersectionObserver(m=>{c||(m.forEach(d=>{const h=n.indexOf(d.target);i[h]=d}),o=null,s=null,e.emit("slidesInView"))},{root:t.parentElement,threshold:r}),n.forEach(m=>u.observe(m))}function y(){u&&u.disconnect(),c=!0}function a(m){return dt(i).reduce((d,h)=>{const f=parseInt(h),{isIntersecting:g}=i[f];return(m&&g||!m&&!g)&&d.push(f),d},[])}function p(m=!0){if(m&&o)return o;if(!m&&s)return s;const d=a(m);return m&&(o=d),m||(s=d),d}return{init:l,destroy:y,get:p}}function kn(t,n,e,r,i,o){const{measureSize:s,startEdge:u,endEdge:c}=t,l=e[0]&&i,y=m(),a=d(),p=e.map(s),v=h();function m(){if(!l)return 0;const g=e[0];return P(n[u]-g[u])}function d(){if(!l)return 0;const g=o.getComputedStyle($(r));return parseFloat(g.getPropertyValue(`margin-${c}`))}function h(){return e.map((g,x,w)=>{const C=!x,I=Dt(w,x);return C?p[x]+y:I?p[x]+a:w[x+1][u]-g[u]}).map(P)}return{slideSizes:p,slideSizesWithGaps:v,startGap:y,endGap:a}}function Vn(t,n,e,r,i,o,s,u,c,l){const{startEdge:y,endEdge:a}=t,p=It(r);function v(f,g){return ft(f).filter(x=>x%g===0).map(x=>f.slice(x,x+g))}function m(f){return f.length?ft(f).reduce((g,x)=>{const w=$(g)||0,C=w===0,I=x===mt(f),T=o[y]-s[w][y],E=o[y]-s[x][a],N=!i&&C?n.apply(u):0,L=!i&&I?n.apply(c):0;return P(E-L-(T+N))>e+l&&g.push(x),I&&g.push(f.length),g},[]).map((g,x,w)=>{const C=Math.max(w[x-1]||0);return f.slice(C,g)}):[]}function d(f){return p?v(f,r):m(f)}return{groupSlides:d}}function Fn(t,n,e,r,i,o,s){const{align:u,axis:c,direction:l,startIndex:y,loop:a,duration:p,dragFree:v,dragThreshold:m,inViewThreshold:d,slidesToScroll:h,skipSnaps:f,containScroll:g,watchResize:x,watchSlides:w,watchDrag:C}=o,I=2,T=bn(),E=T.measure(n),N=e.map(T.measure),L=gn(l),O=mn(c,l),j=O.measureSize(E),B=vn(j),R=dn(u,j),K=!a&&!!g,H=a||!!g,{slideSizes:Y,slideSizesWithGaps:Z,startGap:U,endGap:it}=kn(O,E,N,e,H,i),G=Vn(O,L,j,h,a,E,N,U,it,I),{snaps:rt,snapsAligned:ot}=An(O,R,E,N,G),Q=-$(rt)+$(Z),{snapsContained:ct,scrollContainLimit:ut}=wn(j,Q,ot,g,I),F=K?ct:ot,{limit:V}=Cn(Q,F,a),J=Jt(mt(F),y,a),z=J.clone(),D=ft(e),b=({dragHandler:nt,scrollBody:wt,scrollBounds:Ct,options:{loop:gt}})=>{gt||Ct.constrain(nt.pointerDown()),wt.seek()},A=({scrollBody:nt,translate:wt,location:Ct,offsetLocation:gt,scrollLooper:nn,slideLooper:en,dragHandler:rn,animation:on,eventHandler:Ft,options:{loop:sn}},cn)=>{const zt=nt.velocity(),$t=nt.settled();$t&&!rn.pointerDown()&&(on.stop(),Ft.emit("settle")),$t||Ft.emit("scroll"),gt.set(Ct.get()-zt+zt*cn),sn&&(nn.loop(nt.direction()),en.loop()),wt.to(gt.get())},M=pn(r,i,()=>b(Et),nt=>A(Et,nt)),k=.68,W=F[J.get()],X=ht(W),tt=ht(W),_=ht(W),lt=Sn(X,tt,_,p,k),xt=On(a,F,Q,V,_),St=Pn(M,J,z,lt,xt,_,s),jt=Ln(V),kt=pt(),Wt=jn(n,e,s,d),{slideRegistry:Vt}=In(K,g,F,ut,G,D),tn=Dn(t,e,Vt,St,lt,kt),Et={ownerDocument:r,ownerWindow:i,eventHandler:s,containerRect:E,slideRects:N,animation:M,axis:O,direction:L,dragHandler:hn(O,L,t,r,i,_,yn(O,i),X,M,St,lt,xt,J,s,B,v,m,f,k,C),eventStore:kt,percentOfView:B,index:J,indexPrevious:z,limit:V,location:X,offsetLocation:tt,options:o,resizeHandler:xn(n,s,i,e,O,x,T),scrollBody:lt,scrollBounds:En(V,tt,_,lt,B),scrollLooper:Nn(Q,V,tt,[X,tt,_]),scrollProgress:jt,scrollSnapList:F.map(jt.get),scrollSnaps:F,scrollTarget:xt,scrollTo:St,slideLooper:Tn(O,L,j,Q,Y,Z,rt,F,tt,e),slideFocus:tn,slidesHandler:Mn(n,s,w),slidesInView:Wt,slideIndexes:D,slideRegistry:Vt,slidesToScroll:G,target:_,translate:Xt(O,L,n)};return Et}function zn(){const t={};let n;function e(c){n=c}function r(c){return t[c]||[]}function i(c){return r(c).forEach(l=>l(n,c)),u}function o(c,l){return t[c]=r(c).concat([l]),u}function s(c,l){return t[c]=r(c).filter(y=>y!==l),u}const u={init:e,emit:i,off:s,on:o};return u}const $n={align:"center",axis:"x",container:null,slides:null,containScroll:"trimSnaps",direction:"ltr",slidesToScroll:1,inViewThreshold:0,breakpoints:{},dragFree:!1,dragThreshold:10,loop:!1,skipSnaps:!1,duration:25,startIndex:0,active:!0,watchDrag:!0,watchResize:!0,watchSlides:!0};function Bn(t){function n(o,s){return Ut(o,s||{})}function e(o){const s=o.breakpoints||{},u=dt(s).filter(c=>t.matchMedia(c).matches).map(c=>s[c]).reduce((c,l)=>n(c,l),{});return n(o,u)}function r(o){return o.map(s=>dt(s.breakpoints||{})).reduce((s,u)=>s.concat(u),[]).map(t.matchMedia)}return{mergeOptions:n,optionsAtMedia:e,optionsMediaQueries:r}}function Rn(t){let n=[];function e(o,s){return n=s.filter(({options:u})=>t.optionsAtMedia(u).active!==!1),n.forEach(u=>u.init(o,t)),s.reduce((u,c)=>Object.assign(u,{[c.name]:c}),{})}function r(){n=n.filter(o=>o.destroy())}return{init:e,destroy:r}}function yt(t,n,e){const r=t.ownerDocument,i=r.defaultView,o=Bn(i),s=Rn(o),u=pt(),c=zn(),{mergeOptions:l,optionsAtMedia:y,optionsMediaQueries:a}=o,{on:p,off:v,emit:m}=c,d=O;let h=!1,f,g=l($n,yt.globalOptions),x=l(g),w=[],C,I,T;function E(){const{container:D,slides:b}=x;I=(Nt(D)?t.querySelector(D):D)||t.children[0];const M=Nt(b)?I.querySelectorAll(b):b;T=[].slice.call(M||I.children)}function N(D){const b=Fn(t,I,T,r,i,D,c);if(D.loop&&!b.slideLooper.canLoop()){const A=Object.assign({},D,{loop:!1});return N(A)}return b}function L(D,b){h||(g=l(g,D),x=y(g),w=b||w,E(),f=N(x),a([g,...w.map(({options:A})=>A)]).forEach(A=>u.add(A,"change",O)),x.active&&(f.translate.to(f.location.get()),f.animation.init(),f.slidesInView.init(),f.slideFocus.init(),f.eventHandler.init(z),f.resizeHandler.init(z),f.slidesHandler.init(z),f.options.loop&&f.slideLooper.loop(),I.offsetParent&&T.length&&f.dragHandler.init(z),C=s.init(z,w)))}function O(D,b){const A=G();j(),L(l({startIndex:A},D),b),c.emit("reInit")}function j(){f.dragHandler.destroy(),f.eventStore.clear(),f.translate.clear(),f.slideLooper.clear(),f.resizeHandler.destroy(),f.slidesHandler.destroy(),f.slidesInView.destroy(),f.animation.destroy(),s.destroy(),u.clear()}function B(){h||(h=!0,u.clear(),j(),c.emit("destroy"))}function R(D,b,A){!x.active||h||(f.scrollBody.useBaseFriction().useDuration(b===!0?0:x.duration),f.scrollTo.index(D,A||0))}function K(D){const b=f.index.add(1).get();R(b,D,-1)}function H(D){const b=f.index.add(-1).get();R(b,D,1)}function Y(){return f.index.add(1).get()!==G()}function Z(){return f.index.add(-1).get()!==G()}function U(){return f.scrollSnapList}function it(){return f.scrollProgress.get(f.location.get())}function G(){return f.index.get()}function rt(){return f.indexPrevious.get()}function ot(){return f.slidesInView.get()}function Q(){return f.slidesInView.get(!1)}function ct(){return C}function ut(){return f}function F(){return t}function V(){return I}function J(){return T}const z={canScrollNext:Y,canScrollPrev:Z,containerNode:V,internalEngine:ut,destroy:B,off:v,on:p,emit:m,plugins:ct,previousScrollSnap:rt,reInit:d,rootNode:F,scrollNext:K,scrollPrev:H,scrollProgress:it,scrollSnapList:U,scrollTo:R,selectedScrollSnap:G,slideNodes:J,slidesInView:ot,slidesNotInView:Q};return L(n,e),setTimeout(()=>c.emit("init"),0),z}yt.globalOptions=void 0;function Tt(t={},n=[]){const e=S.useRef(t),r=S.useRef(n),[i,o]=S.useState(),[s,u]=S.useState(),c=S.useCallback(()=>{i&&i.reInit(e.current,r.current)},[i]);return S.useEffect(()=>{if(ln()&&s){yt.globalOptions=Tt.globalOptions;const l=yt(s,e.current,r.current);return o(l),()=>l.destroy()}else o(void 0)},[s,o]),S.useEffect(()=>{At(e.current,t)||(e.current=t,c())},[t,c]),S.useEffect(()=>{an(r.current,n)||(r.current=n,c())},[n,c]),[u,i]}Tt.globalOptions=void 0;function bt(){return bt=Object.assign?Object.assign.bind():function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t},bt.apply(this,arguments)}function Hn(t,n){typeof t=="function"?t(n):t!=null&&(t.current=n)}function Gn(...t){return n=>t.forEach(e=>Hn(e,n))}const _t=S.forwardRef((t,n)=>{const{children:e,...r}=t,i=S.Children.toArray(e),o=i.find(Kn);if(o){const s=o.props.children,u=i.map(c=>c===o?S.Children.count(s)>1?S.Children.only(null):S.isValidElement(s)?s.props.children:null:c);return S.createElement(Lt,bt({},r,{ref:n}),S.isValidElement(s)?S.cloneElement(s,void 0,u):null)}return S.createElement(Lt,bt({},r,{ref:n}),e)});_t.displayName="Slot";const Lt=S.forwardRef((t,n)=>{const{children:e,...r}=t;return S.isValidElement(e)?S.cloneElement(e,{...Un(r,e.props),ref:n?Gn(n,e.ref):e.ref}):S.Children.count(e)>1?S.Children.only(null):null});Lt.displayName="SlotClone";const qn=({children:t})=>S.createElement(S.Fragment,null,t);function Kn(t){return S.isValidElement(t)&&t.type===qn}function Un(t,n){const e={...n};for(const r in n){const i=t[r],o=n[r];/^on[A-Z]/.test(r)?i&&o?e[r]=(...u)=>{o(...u),i(...u)}:i&&(e[r]=i):r==="style"?e[r]={...i,...o}:r==="className"&&(e[r]=[i,o].filter(Boolean).join(" "))}return{...t,...e}}function Yt(t){var n,e,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t))for(n=0;n<t.length;n++)t[n]&&(e=Yt(t[n]))&&(r&&(r+=" "),r+=e);else for(n in t)t[n]&&(r&&(r+=" "),r+=n);return r}function Qn(){for(var t,n,e=0,r="";e<arguments.length;)(t=arguments[e++])&&(n=Yt(t))&&(r&&(r+=" "),r+=n);return r}const qt=t=>typeof t=="boolean"?"".concat(t):t===0?"0":t,Kt=Qn,Jn=(t,n)=>e=>{var r;if((n==null?void 0:n.variants)==null)return Kt(t,e==null?void 0:e.class,e==null?void 0:e.className);const{variants:i,defaultVariants:o}=n,s=Object.keys(i).map(l=>{const y=e==null?void 0:e[l],a=o==null?void 0:o[l];if(y===null)return null;const p=qt(y)||qt(a);return i[l][p]}),u=e&&Object.entries(e).reduce((l,y)=>{let[a,p]=y;return p===void 0||(l[a]=p),l},{}),c=n==null||(r=n.compoundVariants)===null||r===void 0?void 0:r.reduce((l,y)=>{let{class:a,className:p,...v}=y;return Object.entries(v).every(m=>{let[d,h]=m;return Array.isArray(h)?h.includes({...o,...u}[d]):{...o,...u}[d]===h})?[...l,a,p]:l},[]);return Kt(t,s,c,e==null?void 0:e.class,e==null?void 0:e.className)},Xn=Jn("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ",{variants:{variant:{default:"bg-slate-900 text-slate-50 hover:bg-slate-900/90 ",destructive:"bg-red-500 text-slate-50 hover:bg-red-500/90 ",outline:"border border-slate-200 bg-white hover:bg-slate-100 hover:text-slate-900 ",secondary:"bg-slate-100 text-slate-900 hover:bg-slate-100/80 ",ghost:"hover:bg-slate-100 hover:text-slate-900 ",link:"text-slate-900 underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),Mt=S.forwardRef(({className:t,variant:n,size:e,asChild:r=!1,...i},o)=>{const s=r?_t:"button";return q.jsx(s,{className:st(Xn({variant:n,size:e,className:t})),ref:o,...i})});Mt.displayName="Button";const Zt=S.createContext(null);function vt(){const t=S.useContext(Zt);if(!t)throw new Error("useCarousel must be used within a <Carousel />");return t}const _n=S.forwardRef(({orientation:t="horizontal",opts:n,setApi:e,plugins:r,className:i,children:o,...s},u)=>{const[c,l]=Tt({...n,axis:t==="horizontal"?"x":"y"},r),[y,a]=S.useState(!1),[p,v]=S.useState(!1),m=S.useCallback(g=>{g&&(a(g.canScrollPrev()),v(g.canScrollNext()))},[]),d=S.useCallback(()=>{l==null||l.scrollPrev()},[l]),h=S.useCallback(()=>{l==null||l.scrollNext()},[l]),f=S.useCallback(g=>{g.key==="ArrowLeft"?(g.preventDefault(),d()):g.key==="ArrowRight"&&(g.preventDefault(),h())},[d,h]);return S.useEffect(()=>{!l||!e||e(l)},[l,e]),S.useEffect(()=>{if(l)return m(l),l.on("reInit",m),l.on("select",m),()=>{l==null||l.off("select",m)}},[l,m]),q.jsx(Zt.Provider,{value:{carouselRef:c,api:l,opts:n,orientation:t||((n==null?void 0:n.axis)==="y"?"vertical":"horizontal"),scrollPrev:d,scrollNext:h,canScrollPrev:y,canScrollNext:p},children:q.jsx("div",{ref:u,onKeyDownCapture:f,className:st("relative w-full",i),role:"region","aria-roledescription":"carousel",...s,children:o})})});_n.displayName="Carousel";const Yn=S.forwardRef(({className:t,...n},e)=>{const{carouselRef:r,orientation:i}=vt();return q.jsx("div",{ref:r,className:"h-full overflow-hidden",children:q.jsx("div",{ref:e,className:st("flex",i==="horizontal"?"":" flex-col",t),...n})})});Yn.displayName="CarouselContent";const Zn=S.forwardRef(({className:t,...n},e)=>{const{orientation:r}=vt();return q.jsx("div",{ref:e,role:"group","aria-roledescription":"slide",className:st("min-w-0 shrink-0 grow-0 basis-full","",t),...n})});Zn.displayName="CarouselItem";const Wn=S.forwardRef(({className:t,variant:n="outline",children:e,size:r="icon",...i},o)=>{const{scrollPrev:s,canScrollPrev:u}=vt();return q.jsxs(Mt,{ref:o,variant:n,size:r,className:st("  h-8 w-8 rounded-full",t),disabled:!u,onClick:s,...i,children:[e,q.jsx("span",{className:"sr-only",children:"Previous slide"})]})});Wn.displayName="CarouselPrevious";const te=S.forwardRef(({className:t,variant:n="outline",children:e,size:r="icon",...i},o)=>{const{scrollNext:s,canScrollNext:u}=vt();return q.jsxs(Mt,{ref:o,variant:n,size:r,className:st(" h-8 w-8 rounded-full",t),disabled:!u,onClick:s,...i,children:[e,q.jsx("span",{className:"sr-only",children:"Next slide"})]})});te.displayName="CarouselNext";const ee=t=>S.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",...t},S.createElement("path",{d:"M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"})),re=t=>S.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",...t},S.createElement("path",{d:"M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"}));export{_n as C,re as S,Yn as a,Zn as b,Wn as c,te as d,ee as e};
