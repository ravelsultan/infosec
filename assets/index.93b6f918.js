(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))u(n);new MutationObserver(n=>{for(const l of n)if(l.type==="childList")for(const a of l.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&u(a)}).observe(document,{childList:!0,subtree:!0});function r(n){const l={};return n.integrity&&(l.integrity=n.integrity),n.referrerpolicy&&(l.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?l.credentials="include":n.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function u(n){if(n.ep)return;n.ep=!0;const l=r(n);fetch(n.href,l)}})();function P(){}function le(t){return t()}function te(){return Object.create(null)}function S(t){t.forEach(le)}function se(t){return typeof t=="function"}function ae(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function fe(t){return Object.keys(t).length===0}function d(t,e){t.appendChild(e)}function U(t,e,r){t.insertBefore(e,r||null)}function N(t){t.parentNode.removeChild(t)}function m(t){return document.createElement(t)}function T(t){return document.createTextNode(t)}function y(){return T(" ")}function E(t,e,r,u){return t.addEventListener(e,r,u),()=>t.removeEventListener(e,r,u)}function pe(t){return function(e){return e.preventDefault(),t.call(this,e)}}function p(t,e,r){r==null?t.removeAttribute(e):t.getAttribute(e)!==r&&t.setAttribute(e,r)}function de(t){return Array.from(t.childNodes)}function Q(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function L(t,e){t.value=e==null?"":e}function re(t,e){for(let r=0;r<t.options.length;r+=1){const u=t.options[r];if(u.__value===e){u.selected=!0;return}}t.selectedIndex=-1}function he(t){const e=t.querySelector(":checked")||t.options[0];return e&&e.__value}let W;function K(t){W=t}const O=[],ne=[],V=[],oe=[],me=Promise.resolve();let R=!1;function _e(){R||(R=!0,me.then(ce))}function X(t){V.push(t)}const J=new Set;let F=0;function ce(){const t=W;do{for(;F<O.length;){const e=O[F];F++,K(e),ge(e.$$)}for(K(null),O.length=0,F=0;ne.length;)ne.pop()();for(let e=0;e<V.length;e+=1){const r=V[e];J.has(r)||(J.add(r),r())}V.length=0}while(O.length);for(;oe.length;)oe.pop()();R=!1,J.clear(),K(t)}function ge(t){if(t.fragment!==null){t.update(),S(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(X)}}const Ce=new Set;function ye(t,e){t&&t.i&&(Ce.delete(t),t.i(e))}function we(t,e,r,u){const{fragment:n,after_update:l}=t.$$;n&&n.m(e,r),u||X(()=>{const a=t.$$.on_mount.map(le).filter(se);t.$$.on_destroy?t.$$.on_destroy.push(...a):S(a),t.$$.on_mount=[]}),l.forEach(X)}function be(t,e){const r=t.$$;r.fragment!==null&&(S(r.on_destroy),r.fragment&&r.fragment.d(e),r.on_destroy=r.fragment=null,r.ctx=[])}function ve(t,e){t.$$.dirty[0]===-1&&(O.push(t),_e(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function je(t,e,r,u,n,l,a,c=[-1]){const i=W;K(t);const o=t.$$={fragment:null,ctx:[],props:l,update:P,not_equal:n,bound:te(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(i?i.$$.context:[])),callbacks:te(),dirty:c,skip_bound:!1,root:e.target||i.$$.root};a&&a(o.root);let s=!1;if(o.ctx=r?r(t,e.props||{},(f,h,..._)=>{const w=_.length?_[0]:h;return o.ctx&&n(o.ctx[f],o.ctx[f]=w)&&(!o.skip_bound&&o.bound[f]&&o.bound[f](w),s&&ve(t,f)),h}):[],o.update(),s=!0,S(o.before_update),o.fragment=u?u(o.ctx):!1,e.target){if(e.hydrate){const f=de(e.target);o.fragment&&o.fragment.l(f),f.forEach(N)}else o.fragment&&o.fragment.c();e.intro&&ye(t.$$.fragment),we(t,e.target,e.anchor,e.customElement),ce()}K(i)}class Ae{$destroy(){be(this,1),this.$destroy=P}$on(e,r){if(!se(r))return P;const u=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return u.push(r),()=>{const n=u.indexOf(r);n!==-1&&u.splice(n,1)}}$set(e){this.$$set&&!fe(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const ie=(t,e)=>t.replaceAll(" ","").toUpperCase().split("").map(u=>{const l=(u.charCodeAt(0)-65+e)%26+65;return String.fromCharCode(l)}).join("").toLocaleLowerCase(),ue=(t,e)=>t.replaceAll(" ","").toUpperCase().split("").map(u=>{const n=u.charCodeAt(0)-65;let l,a=n-e%26;return a<0?l=91+a:l=a+65,String.fromCharCode(l)}).join("").toLocaleLowerCase(),xe=(t,e,r)=>{if(!r)throw new Error("Message field is required.");if(!t||!e)throw new Error("Encryption key is required.");return r.replaceAll(" ","").toUpperCase().split("").map(n=>{const l=n.charCodeAt(0)-65,a=(t*l+e)%26+65;return String.fromCharCode(a)}).join("").toLocaleLowerCase()},Ee=(t,e,r)=>{if(!r)throw new Error("Message field is required.");if(!t||!e)throw new Error("Encryption key is required.");r=r.toUpperCase();let u=0,n;for(let a=0;a<26;a++)u=t*a%26,u==1&&(n=a);let l="";for(let a=0;a<r.length;a++){let c=r.charCodeAt(a)-65-e;c<0?l+=String.fromCharCode(91-(65-(n*c%26+65))):l+=String.fromCharCode(n*c%26+65)}return l.toLocaleLowerCase()},Le=(t,e)=>{t=t.toUpperCase().replaceAll(" ",""),e=e.toUpperCase();let r="";for(let u=0,n=0;u<t.length;u++,n++){const l=e.charCodeAt(n)-65;r+=ie(t[u],l),n+1==e.length&&(n=-1)}return r},Ne=(t,e)=>{t=t.toUpperCase().replaceAll(" ",""),e=e.toUpperCase();let r="";for(let u=0,n=0;u<t.length;u++,n++){const l=e.charCodeAt(n)-65;r+=ue(t[u],l),n+1==e.length&&(n=-1)}return r},Ue=(t,e)=>{if(typeof e!="number")throw new Error("The key has to be a number.");t=t.toUpperCase().replaceAll(" ","");const r=t.length%e;if(r!=0)for(let c=0;c<e-r;c++)t+="x";const u=e,n=Math.ceil(t.length/e);let l=[];for(let c=0;c<n;c++)l.push([]);for(let c=0,i=0;c<n;c++)for(let o=0;o<u;o++,i++)l[c][o]=t[i];let a="";for(let c=0,i=0;c<u;c++)for(let o=0;o<n;o++,i++)a+=l[o][c];return a.toLocaleLowerCase()},Me=(t,e)=>{t=t.toUpperCase().replaceAll(" ","");const r=Math.ceil(t.length/e),u=e;let n=[];for(let l=0;l<r;l++)n.push([]);for(let l=0,a=0;l<u;l++)for(let c=0;c<r;c++,a++)n[c][l]=t[a];return n.join("").replaceAll(",","").toLowerCase().replaceAll("x","")},Te=(t,e)=>{t=t.replaceAll(" ","").toUpperCase(),e=e.replace(" ","").toUpperCase();let r=[];for(let o=0;o<e.length;o++)r.push(e.charCodeAt(o)-65);const u=e.length,n=Math.ceil(t.length/e.length),l=t.length%e.length;if(l!=0)for(let o=0;o<e.length-l;o++)t+="x";let a=[];for(let o=0,s=0;o<n;o++){a.push([]);for(let f=0;f<u;f++,s++)a[o].push(t[s])}let c=[...r];for(let o=e.length-1;o>=0;o--){let s=0;for(let f=0;f<e.length;f++)c[f]>c[s]&&(s=f);r[s]=o,c[s]=-1}const i=[];for(let o=0;o<a.length;o++)i.push([...a[o]]);for(let o=0;o<n;o++)for(let s=0;s<u;s++)i[o][r[s]]=a[o][s];return i.join().replaceAll(",","").toLowerCase()},Se=(t,e)=>{t=t.replaceAll(" ","").toUpperCase(),e=e.replace(" ","").toUpperCase();let r=[];for(let i=0;i<e.length;i++)r.push(e.charCodeAt(i)-65);const u=e.length,n=Math.ceil(t.length/e.length);let l=[];for(let i=0,o=0;i<n;i++){l.push([]);for(let s=0;s<u;s++,o++)l[i].push(t[o])}let a=[...r];for(let i=e.length-1;i>=0;i--){let o=0;for(let s=0;s<e.length;s++)a[s]>a[o]&&(o=s);r[o]=i,a[o]=-1}let c="";for(let i=0;i<n;i++)for(let o=0;o<u;o++)c+=l[i][r[o]];return c.toLocaleLowerCase().replaceAll("x","")},qe=(t,e)=>{t=t.replaceAll(" ","").toUpperCase(),e=e.replace(" ","").toUpperCase();let r=[];for(let s=0;s<e.length;s++)r.push(e.charCodeAt(s)-65);const u=e.length,n=Math.ceil(t.length/e.length),l=t.length%e.length;if(l!=0)for(let s=0;s<e.length-l;s++)t+="x";let a=[];for(let s=0,f=0;s<n;s++){a.push([]);for(let h=0;h<u;h++,f++)a[s].push(t[f])}let c=[...r];for(let s=e.length-1;s>=0;s--){let f=0;for(let h=0;h<e.length;h++)c[h]>c[f]&&(f=h);r[f]=s,c[f]=-1}const i=[];for(let s=0;s<a.length;s++)i.push([...a[s]]);for(let s=0;s<n;s++)for(let f=0;f<u;f++)i[s][r[f]]=a[s][f];let o="";for(let s=0;s<u;s++)for(let f=0;f<n;f++)o+=i[f][s];return o.toLowerCase()},De=(t,e)=>{t=t.replaceAll(" ","").toUpperCase(),e=e.replace(" ","").toUpperCase();let r=[];for(let i=0;i<e.length;i++)r.push(e.charCodeAt(i)-65);const u=e.length,n=Math.ceil(t.length/e.length);let l=[];for(let i=0;i<n;i++)l.push([]);for(let i=0,o=0;i<n;i++){o=i;for(let s=0;s<u;s++,o+=n)l[i][s]=t[o]}let a=[...r];for(let i=e.length-1;i>=0;i--){let o=0;for(let s=0;s<e.length;s++)a[s]>a[o]&&(o=s);r[o]=i,a[o]=-1}let c="";for(let i=0;i<n;i++)for(let o=0;o<u;o++)c+=l[i][r[o]];return c.replaceAll("X","").toLowerCase()},Oe=(t,e,r)=>{if(!t)throw new Error("Message field is required.");if(!e)throw new Error("Encryption key is required.");switch(r){case"caesar":if(isNaN(Number(e)))throw new Error("The encryption key should be a number.");return ie(t,Number(e));case"vigenere":return Le(t,e);case"columnar":if(isNaN(Number(e)))throw new Error("The encryption key should be a number.");return Ue(t,Number(e));case"simple_transpose":return Te(t,e);case"irregular_transpose":return qe(t,e)}},Ke=(t,e,r)=>{if(!t)throw new Error("Message field is required.");if(!e)throw new Error("Encryption key is required.");switch(r){case"caesar":return ue(t,Number(e));case"vigenere":return Ne(t,e);case"columnar":return Me(t,Number(e));case"simple_transpose":return Se(t,e);case"irregular_transpose":return De(t,e)}};function Pe(t){let e,r,u,n,l,a;return{c(){e=m("div"),r=m("input"),u=y(),n=m("label"),n.textContent="Encryption key",p(r,"type","text"),p(r,"id","encryption-key"),p(r,"placeholder"," "),p(r,"class","svelte-1myjuaw"),p(n,"for","encryption-key"),p(n,"class","svelte-1myjuaw"),p(e,"class","input-field svelte-1myjuaw")},m(c,i){U(c,e,i),d(e,r),L(r,t[3]),d(e,u),d(e,n),l||(a=E(r,"input",t[12]),l=!0)},p(c,i){i&8&&r.value!==c[3]&&L(r,c[3])},d(c){c&&N(e),l=!1,a()}}}function Ie(t){let e,r,u,n,l,a,c,i,o,s,f;return{c(){e=m("div"),r=m("input"),u=y(),n=m("label"),n.textContent="a",l=y(),a=m("div"),c=m("input"),i=y(),o=m("label"),o.textContent="b",p(r,"type","text"),p(r,"id","encryption-key"),p(r,"placeholder"," "),p(r,"class","svelte-1myjuaw"),p(n,"for","encryption-key"),p(n,"class","svelte-1myjuaw"),p(e,"class","input-field svelte-1myjuaw"),p(c,"type","text"),p(c,"id","encryption-key"),p(c,"placeholder"," "),p(c,"class","svelte-1myjuaw"),p(o,"for","encryption-key"),p(o,"class","svelte-1myjuaw"),p(a,"class","input-field svelte-1myjuaw")},m(h,_){U(h,e,_),d(e,r),L(r,t[0]),d(e,u),d(e,n),U(h,l,_),U(h,a,_),d(a,c),L(c,t[1]),d(a,i),d(a,o),s||(f=[E(r,"input",t[10]),E(c,"input",t[11])],s=!0)},p(h,_){_&1&&r.value!==h[0]&&L(r,h[0]),_&2&&c.value!==h[1]&&L(c,h[1])},d(h){h&&N(e),h&&N(l),h&&N(a),s=!1,S(f)}}}function Be(t){let e,r,u,n,l,a;return{c(){e=m("p"),r=m("strong"),u=T(t[7]),n=T(":"),l=y(),a=T(t[6]),p(e,"class","cipher-text svelte-1myjuaw")},m(c,i){U(c,e,i),d(e,r),d(r,u),d(r,n),d(e,l),d(e,a)},p(c,i){i&128&&Q(u,c[7]),i&64&&Q(a,c[6])},d(c){c&&N(e)}}}function He(t){let e,r,u;return{c(){e=m("p"),r=T("*"),u=T(t[4]),p(e,"class","error-message svelte-1myjuaw")},m(n,l){U(n,e,l),d(e,r),d(e,u)},p(n,l){l&16&&Q(u,n[4])},d(n){n&&N(e)}}}function Fe(t){let e,r,u,n,l,a,c,i,o,s,f,h,_,w,j,A,I,C,Y,z,M,q,Z,D,G,k;function $(g,x){return g[2]=="affine"?Ie:Pe}let B=$(t),b=B(t);function ee(g,x){return g[4]?He:Be}let H=ee(t),v=H(t);return{c(){e=m("main"),r=m("form"),b.c(),u=y(),n=m("div"),l=m("input"),a=y(),c=m("label"),c.textContent="Message",i=y(),o=m("div"),s=m("select"),f=m("option"),f.textContent="Caesar",h=m("option"),h.textContent="Affine",_=m("option"),_.textContent="Vigenere",w=m("option"),w.textContent="Columnar",j=m("option"),j.textContent="Simple Transposition",A=m("option"),A.textContent="Irregular Transpositoin",I=y(),C=m("span"),C.innerHTML='<svg class="w-6 h-6 svelte-1myjuaw" data-darkreader-inline-stroke="" fill="none" stroke="currentColor" style="--darkreader-inline-stroke:currentColor;" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>',Y=y(),v.c(),z=y(),M=m("div"),q=m("button"),q.textContent="Encrypt",Z=y(),D=m("button"),D.textContent="Decrypt",p(l,"type","text"),p(l,"id","plain-text"),p(l,"placeholder"," "),p(l,"class","svelte-1myjuaw"),p(c,"for","plain-text"),p(c,"class","svelte-1myjuaw"),p(n,"class","input-field svelte-1myjuaw"),f.__value="caesar",f.value=f.__value,h.__value="affine",h.value=h.__value,_.__value="vigenere",_.value=_.__value,w.__value="columnar",w.value=w.__value,j.__value="simple_transpose",j.value=j.__value,A.__value="irregular_transpose",A.value=A.__value,p(s,"id","ciphers"),p(s,"selected",""),p(s,"class","svelte-1myjuaw"),t[2]===void 0&&X(()=>t[14].call(s)),p(C,"class","arrow svelte-1myjuaw"),p(o,"class","select svelte-1myjuaw"),p(q,"class","encrypt svelte-1myjuaw"),p(D,"class","decrypt svelte-1myjuaw"),p(M,"class","buttons svelte-1myjuaw"),p(r,"class","form svelte-1myjuaw"),p(e,"class","svelte-1myjuaw")},m(g,x){U(g,e,x),d(e,r),b.m(r,null),d(r,u),d(r,n),d(n,l),L(l,t[5]),d(n,a),d(n,c),d(r,i),d(r,o),d(o,s),d(s,f),d(s,h),d(s,_),d(s,w),d(s,j),d(s,A),re(s,t[2]),d(o,I),d(o,C),d(r,Y),v.m(r,null),d(r,z),d(r,M),d(M,q),d(M,Z),d(M,D),G||(k=[E(l,"input",t[13]),E(s,"change",t[14]),E(q,"click",t[8]),E(D,"click",t[9]),E(r,"submit",pe(Ve))],G=!0)},p(g,[x]){B===(B=$(g))&&b?b.p(g,x):(b.d(1),b=B(g),b&&(b.c(),b.m(r,u))),x&32&&l.value!==g[5]&&L(l,g[5]),x&4&&re(s,g[2]),H===(H=ee(g))&&v?v.p(g,x):(v.d(1),v=H(g),v&&(v.c(),v.m(r,z)))},i:P,o:P,d(g){g&&N(e),b.d(),v.d(),G=!1,S(k)}}}const Ve=()=>null;function Xe(t,e,r){let u,n,l="caesar",a,c,i,o="",s="Cipher text";const f=()=>{if(l=="affine"){try{r(6,o=xe(Number(u),Number(n),i)),r(4,c="")}catch(C){r(4,c=C.message)}r(7,s="Cipher text");return}try{r(6,o=Oe(i,a,l)),r(4,c="")}catch(C){r(4,c=C.message)}r(7,s="Cipher text")},h=()=>{if(l=="affine"){try{r(6,o=Ee(Number(u),Number(n),i)),r(4,c="")}catch(C){r(4,c=C.message),r(6,o="")}r(7,s="Plain text");return}try{r(6,o=Ke(i,a,l)),r(4,c="")}catch(C){r(4,c=C.message),r(6,o="")}r(7,s="Plain text")};function _(){u=this.value,r(0,u)}function w(){n=this.value,r(1,n)}function j(){a=this.value,r(3,a)}function A(){i=this.value,r(5,i)}function I(){l=he(this),r(2,l)}return[u,n,l,a,c,i,o,s,f,h,_,w,j,A,I]}class ze extends Ae{constructor(e){super(),je(this,e,Xe,Fe,ae,{})}}new ze({target:document.getElementById("app")});
