(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const r of l.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(o){if(o.ep)return;o.ep=!0;const l=n(o);fetch(o.href,l)}})();function N(){}function ye(e,t){for(const n in t)e[n]=t[n];return e}function be(e){return e()}function se(){return Object.create(null)}function I(e){e.forEach(be)}function G(e){return typeof e=="function"}function R(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function Oe(e){return Object.keys(e).length===0}function ve(e,...t){if(e==null)return N;const n=e.subscribe(...t);return n.unsubscribe?()=>n.unsubscribe():n}function Se(e,t,n){e.$$.on_destroy.push(ve(t,n))}function Ce(e,t,n){return e.set(n),t}function qe(e){return e&&G(e.destroy)?e.destroy:N}function g(e,t){e.appendChild(t)}function C(e,t,n){e.insertBefore(t,n||null)}function O(e){e.parentNode&&e.parentNode.removeChild(e)}function $e(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function w(e){return document.createElement(e)}function T(e){return document.createTextNode(e)}function M(){return T(" ")}function we(){return T("")}function le(e,t,n,s){return e.addEventListener(t,n,s),()=>e.removeEventListener(t,n,s)}function $(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function Me(e){return Array.from(e.childNodes)}function W(e,t){t=""+t,e.data!==t&&(e.data=t)}function re(e,t){e.value=t??""}let J;function H(e){J=e}function Te(){if(!J)throw new Error("Function called outside component initialization");return J}function ke(e){Te().$$.on_mount.push(e)}const V=[],ie=[];let F=[];const ce=[],Ae=Promise.resolve();let X=!1;function Pe(){X||(X=!0,Ae.then(je))}function Y(e){F.push(e)}const U=new Set;let D=0;function je(){if(D!==0)return;const e=J;do{try{for(;D<V.length;){const t=V[D];D++,H(t),Ie(t.$$)}}catch(t){throw V.length=0,D=0,t}for(H(null),V.length=0,D=0;ie.length;)ie.pop()();for(let t=0;t<F.length;t+=1){const n=F[t];U.has(n)||(U.add(n),n())}F.length=0}while(V.length);for(;ce.length;)ce.pop()();X=!1,U.clear(),H(e)}function Ie(e){if(e.fragment!==null){e.update(),I(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(Y)}}function De(e){const t=[],n=[];F.forEach(s=>e.indexOf(s)===-1?t.push(s):n.push(s)),n.forEach(s=>s()),F=t}const Q=new Set;let P;function Z(){P={r:0,c:[],p:P}}function x(){P.r||I(P.c),P=P.p}function L(e,t){e&&e.i&&(Q.delete(e),e.i(t))}function A(e,t,n,s){if(e&&e.o){if(Q.has(e))return;Q.add(e),P.c.push(()=>{Q.delete(e),s&&(n&&e.d(1),s())}),e.o(t)}else s&&s()}function Be(e,t){e.d(1),t.delete(e.key)}function Ve(e,t,n,s,o,l,r,u,c,i,f,h){let p=e.length,y=l.length,_=p;const v={};for(;_--;)v[e[_].key]=_;const k=[],j=new Map,z=new Map,m=[];for(_=y;_--;){const a=h(o,l,_),b=n(a);let q=r.get(b);q?s&&m.push(()=>q.p(a,t)):(q=i(b,a),q.c()),j.set(b,k[_]=q),b in v&&z.set(b,Math.abs(_-v[b]))}const E=new Set,S=new Set;function d(a){L(a,1),a.m(u,f),r.set(a.key,a),f=a.first,y--}for(;p&&y;){const a=k[y-1],b=e[p-1],q=a.key,K=b.key;a===b?(f=a.first,p--,y--):j.has(K)?!r.has(q)||E.has(q)?d(a):S.has(K)?p--:z.get(q)>z.get(K)?(S.add(q),d(a)):(E.add(K),p--):(c(b,r),p--)}for(;p--;){const a=e[p];j.has(a.key)||c(a,r)}for(;y;)d(k[y-1]);return I(m),k}function ze(e,t){const n={},s={},o={$$scope:1};let l=e.length;for(;l--;){const r=e[l],u=t[l];if(u){for(const c in r)c in u||(s[c]=1);for(const c in u)o[c]||(n[c]=u[c],o[c]=1);e[l]=u}else for(const c in r)o[c]=1}for(const r in s)r in n||(n[r]=void 0);return n}function Ee(e){return typeof e=="object"&&e!==null?e:{}}function Le(e){e&&e.c()}function ee(e,t,n,s){const{fragment:o,after_update:l}=e.$$;o&&o.m(t,n),s||Y(()=>{const r=e.$$.on_mount.map(be).filter(G);e.$$.on_destroy?e.$$.on_destroy.push(...r):I(r),e.$$.on_mount=[]}),l.forEach(Y)}function te(e,t){const n=e.$$;n.fragment!==null&&(De(n.after_update),I(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Fe(e,t){e.$$.dirty[0]===-1&&(V.push(e),Pe(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function ne(e,t,n,s,o,l,r,u=[-1]){const c=J;H(e);const i=e.$$={fragment:null,ctx:[],props:l,update:N,not_equal:o,bound:se(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(c?c.$$.context:[])),callbacks:se(),dirty:u,skip_bound:!1,root:t.target||c.$$.root};r&&r(i.root);let f=!1;if(i.ctx=n?n(e,t.props||{},(h,p,...y)=>{const _=y.length?y[0]:p;return i.ctx&&o(i.ctx[h],i.ctx[h]=_)&&(!i.skip_bound&&i.bound[h]&&i.bound[h](_),f&&Fe(e,h)),p}):[],i.update(),f=!0,I(i.before_update),i.fragment=s?s(i.ctx):!1,t.target){if(t.hydrate){const h=Me(t.target);i.fragment&&i.fragment.l(h),h.forEach(O)}else i.fragment&&i.fragment.c();t.intro&&L(e.$$.fragment),ee(e,t.target,t.anchor,t.customElement),je()}H(c)}class oe{$destroy(){te(this,1),this.$destroy=N}$on(t,n){if(!G(n))return N;const s=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return s.push(n),()=>{const o=s.indexOf(n);o!==-1&&s.splice(o,1)}}$set(t){this.$$set&&!Oe(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const B=[];function Ne(e,t=N){let n;const s=new Set;function o(u){if(R(e,u)&&(e=u,n)){const c=!B.length;for(const i of s)i[1](),B.push(i,e);if(c){for(let i=0;i<B.length;i+=2)B[i][0](B[i+1]);B.length=0}}}function l(u){o(u(e))}function r(u,c=N){const i=[u,c];return s.add(i),s.size===1&&(n=t(o)||N),u(e),()=>{s.delete(i),s.size===0&&n&&(n(),n=null)}}return{set:o,update:l,subscribe:r}}function ue(e,t,n){const s=e.slice();return s[10]=t[n],s[12]=n,s}function fe(e){let t;return{c(){t=w("p"),t.textContent="feedback"},m(n,s){C(n,t,s)},d(n){n&&O(t)}}}function ae(e,t){let n,s,o,l,r,u,c,i=t[10].question+"",f,h,p,y,_=t[10].answer+"",v,k,j,z,m;return{key:e,first:null,c(){n=w("div"),s=w("div"),o=w("div"),l=M(),r=w("div"),u=w("p"),c=T("Q: "),f=T(i),h=M(),p=w("p"),y=T("A: "),v=T(_),k=M(),$(o,"class","avatar svelte-ysjhkz"),$(u,"class","svelte-ysjhkz"),$(p,"class","svelte-ysjhkz"),$(r,"class","message-content svelte-ysjhkz"),$(s,"class","chat-message-center svelte-ysjhkz"),$(n,"class","chat-message svelte-ysjhkz"),this.first=n},m(E,S){C(E,n,S),g(n,s),g(s,o),g(s,l),g(s,r),g(r,u),g(u,c),g(u,f),g(r,h),g(r,p),g(p,y),g(p,v),g(n,k),z||(m=qe(j=Je.call(null,n,t[12]===t[2].length-1)),z=!0)},p(E,S){t=E,S&4&&i!==(i=t[10].question+"")&&W(f,i),S&4&&_!==(_=t[10].answer+"")&&W(v,_),j&&G(j.update)&&S&4&&j.update.call(null,t[12]===t[2].length-1)},d(E){E&&O(n),z=!1,m()}}}function He(e){let t,n,s,o=[],l=new Map,r,u,c,i,f,h,p=(e[4]?e[5]:"Send")+"",y,_,v,k,j,z,m=e[0]&&fe(),E=e[2];const S=d=>d[12];for(let d=0;d<E.length;d+=1){let a=ue(e,E,d),b=S(a);l.set(b,o[d]=ae(b,a))}return{c(){m&&m.c(),t=M(),n=w("section"),s=w("div");for(let d=0;d<o.length;d+=1)o[d].c();r=M(),u=w("div"),c=w("form"),i=w("input"),f=M(),h=w("button"),y=T(p),v=M(),k=w("p"),k.textContent="Note - may produce inaccurate information.",$(s,"class","chat-log svelte-ysjhkz"),$(i,"rows","1"),$(i,"class","chat-input-textarea svelte-ysjhkz"),$(i,"placeholder","Type Message Here"),$(h,"class",_="btnyousend "+(e[3]===""?"":"active")+" svelte-ysjhkz"),$(h,"type","submit"),$(c,"class","chat-input-form svelte-ysjhkz"),$(k,"class","message svelte-ysjhkz"),$(u,"class","chat-input-holder svelte-ysjhkz"),$(n,"class","chatbox svelte-ysjhkz")},m(d,a){m&&m.m(d,a),C(d,t,a),C(d,n,a),g(n,s);for(let b=0;b<o.length;b+=1)o[b]&&o[b].m(s,null);g(n,r),g(n,u),g(u,c),g(c,i),re(i,e[3]),g(c,f),g(c,h),g(h,y),g(u,v),g(u,k),j||(z=[le(i,"input",e[8]),le(c,"submit",e[6])],j=!0)},p(d,[a]){d[0]?m||(m=fe(),m.c(),m.m(t.parentNode,t)):m&&(m.d(1),m=null),a&4&&(E=d[2],o=Ve(o,a,S,1,d,E,l,s,Be,ae,null,ue)),a&8&&i.value!==d[3]&&re(i,d[3]),a&48&&p!==(p=(d[4]?d[5]:"Send")+"")&&W(y,p),a&8&&_!==(_="btnyousend "+(d[3]===""?"":"active")+" svelte-ysjhkz")&&$(h,"class",_)},i:N,o:N,d(d){m&&m.d(d),d&&O(t),d&&O(n);for(let a=0;a<o.length;a+=1)o[a].d();j=!1,I(z)}}}function Je(e){setTimeout(()=>{e.scrollIntoView({behavior:"smooth"})},0)}function Ke(e,t,n){let s,o,l=N,r=()=>(l(),l=ve(h,v=>n(2,o=v)),h);e.$$.on_destroy.push(()=>l());let{feedback:u=!1}=t,c="",i="",f=!1;const h=Ne([{id:1,question:"What is this?",answer:"This is the chat interface.",vote:"na"},{id:1,question:"How do I use it?",answer:"Just type in a question below!",vote:"na"}]);r(),ke(()=>{console.log("here we go")});const p=async v=>{v.preventDefault(),c=i,n(3,i=""),n(4,f=!0);let k={id:o.length+1,question:c,answer:"Loading...",vote:"na"};console.log("adding to log here"),Ce(h,o=[...o,k],o);const j=await fetch(`/chat/${c}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:c})});if(j.ok){const z=await j.json();k.answer=z.answer,h.update(m=>(m[m.length-1]=k,m))}else{const z=await j.text();alert(z)}n(4,f=!1)};let y=0;setInterval(()=>{n(7,y=(y+1)%4)},200);function _(){i=this.value,n(3,i)}return e.$$set=v=>{"feedback"in v&&n(0,u=v.feedback)},e.$$.update=()=>{e.$$.dirty&128&&n(5,s=".".repeat(y).padEnd(3)),e.$$.dirty&4&&console.log("chat updated!",o)},[u,h,o,i,f,s,p,y,_]}class Qe extends oe{constructor(t){super(),ne(this,t,Ke,He,R,{feedback:0,chatLog:1})}get chatLog(){return this.$$.ctx[1]}}function de(e,t,n){const s=e.slice();return s[1]=t[n],s}function he(e){let t,n=e[1]+"",s,o;return{c(){t=w("option"),s=T(n),t.__value=o=e[1],t.value=t.__value},m(l,r){C(l,t,r),g(t,s)},p(l,r){r&1&&n!==(n=l[1]+"")&&W(s,n),r&1&&o!==(o=l[1])&&(t.__value=o,t.value=t.__value)},d(l){l&&O(t)}}}function We(e){let t,n=e[0],s=[];for(let o=0;o<n.length;o+=1)s[o]=he(de(e,n,o));return{c(){t=w("select");for(let o=0;o<s.length;o+=1)s[o].c()},m(o,l){C(o,t,l);for(let r=0;r<s.length;r+=1)s[r]&&s[r].m(t,null)},p(o,[l]){if(l&1){n=o[0];let r;for(r=0;r<n.length;r+=1){const u=de(o,n,r);s[r]?s[r].p(u,l):(s[r]=he(u),s[r].c(),s[r].m(t,null))}for(;r<s.length;r+=1)s[r].d(1);s.length=n.length}},i:N,o:N,d(o){o&&O(t),$e(s,o)}}}function Ge(e,t,n){let s=[];return ke(async()=>{const o=await fetch("/data/dropdown");n(0,s=await o.json())}),[s]}class Re extends oe{constructor(t){super(),ne(this,t,Ge,We,R,{})}}function pe(e,t,n){const s=e.slice();return s[2]=t[n],s}function _e(e){let t,n;const s=[e[2].props];let o={};for(let l=0;l<s.length;l+=1)o=ye(o,s[l]);return t=new Qe({props:o}),{c(){Le(t.$$.fragment)},m(l,r){ee(t,l,r),n=!0},p(l,r){const u=r&1?ze(s,[Ee(l[2].props)]):{};t.$set(u)},i(l){n||(L(t.$$.fragment,l),n=!0)},o(l){A(t.$$.fragment,l),n=!1},d(l){te(t,l)}}}function me(e){let t,n;const s=[e[2].props];let o={};for(let l=0;l<s.length;l+=1)o=ye(o,s[l]);return t=new Re({props:o}),{c(){Le(t.$$.fragment)},m(l,r){ee(t,l,r),n=!0},p(l,r){const u=r&1?ze(s,[Ee(l[2].props)]):{};t.$set(u)},i(l){n||(L(t.$$.fragment,l),n=!0)},o(l){A(t.$$.fragment,l),n=!1},d(l){te(t,l)}}}function ge(e){let t,n,s,o=e[2].svelte_component==="Chatbot"&&_e(e),l=e[2].svelte_component==="Dropdown"&&me(e);return{c(){o&&o.c(),t=M(),l&&l.c(),n=we()},m(r,u){o&&o.m(r,u),C(r,t,u),l&&l.m(r,u),C(r,n,u),s=!0},p(r,u){r[2].svelte_component==="Chatbot"?o?(o.p(r,u),u&1&&L(o,1)):(o=_e(r),o.c(),L(o,1),o.m(t.parentNode,t)):o&&(Z(),A(o,1,1,()=>{o=null}),x()),r[2].svelte_component==="Dropdown"?l?(l.p(r,u),u&1&&L(l,1)):(l=me(r),l.c(),L(l,1),l.m(n.parentNode,n)):l&&(Z(),A(l,1,1,()=>{l=null}),x())},i(r){s||(L(o),L(l),s=!0)},o(r){A(o),A(l),s=!1},d(r){o&&o.d(r),r&&O(t),l&&l.d(r),r&&O(n)}}}function Ue(e){let t,n,s,o,l=e[0],r=[];for(let c=0;c<l.length;c+=1)r[c]=ge(pe(e,l,c));const u=c=>A(r[c],1,1,()=>{r[c]=null});return{c(){t=w("p"),t.textContent="hey",n=M();for(let c=0;c<r.length;c+=1)r[c].c();s=we()},m(c,i){C(c,t,i),C(c,n,i);for(let f=0;f<r.length;f+=1)r[f]&&r[f].m(c,i);C(c,s,i),o=!0},p(c,[i]){if(i&1){l=c[0];let f;for(f=0;f<l.length;f+=1){const h=pe(c,l,f);r[f]?(r[f].p(h,i),L(r[f],1)):(r[f]=ge(h),r[f].c(),L(r[f],1),r[f].m(s.parentNode,s))}for(Z(),f=l.length;f<r.length;f+=1)u(f);x()}},i(c){if(!o){for(let i=0;i<l.length;i+=1)L(r[i]);o=!0}},o(c){r=r.filter(Boolean);for(let i=0;i<r.length;i+=1)A(r[i]);o=!1},d(c){c&&O(t),c&&O(n),$e(r,c),c&&O(s)}}}function Xe(e,t,n){let s;const o=Ne([]);return Se(e,o,l=>n(0,s=l)),fetch("/components").then(l=>l.json()).then(l=>{console.log("data",l),o.set(l)}),[s,o]}class Ye extends oe{constructor(t){super(),ne(this,t,Xe,Ue,R,{})}}new Ye({target:document.getElementById("app")});
