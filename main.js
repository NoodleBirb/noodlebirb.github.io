(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();function f(){}function N(e){return e()}function E(){return Object.create(null)}function b(e){e.forEach(N)}function A(e){return typeof e=="function"}function j(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function C(e){return Object.keys(e).length===0}function B(e,t,n){e.insertBefore(t,n||null)}function L(e){e.parentNode&&e.parentNode.removeChild(e)}function M(e){return document.createElement(e)}function I(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function q(e){return Array.from(e.childNodes)}let g;function h(e){g=e}const u=[],O=[];let d=[];const k=[],F=Promise.resolve();let m=!1;function G(){m||(m=!0,F.then(P))}function _(e){d.push(e)}const y=new Set;let i=0;function P(){if(i!==0)return;const e=g;do{try{for(;i<u.length;){const t=u[i];i++,h(t),H(t.$$)}}catch(t){throw u.length=0,i=0,t}for(h(null),u.length=0,i=0;O.length;)O.pop()();for(let t=0;t<d.length;t+=1){const n=d[t];y.has(n)||(y.add(n),n())}d.length=0}while(u.length);for(;k.length;)k.pop()();m=!1,y.clear(),h(e)}function H(e){if(e.fragment!==null){e.update(),b(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(_)}}function K(e){const t=[],n=[];d.forEach(r=>e.indexOf(r)===-1?t.push(r):n.push(r)),n.forEach(r=>r()),d=t}const T=new Set;function W(e,t){e&&e.i&&(T.delete(e),e.i(t))}function z(e,t,n,r){const{fragment:s,after_update:o}=e.$$;s&&s.m(t,n),r||_(()=>{const c=e.$$.on_mount.map(N).filter(A);e.$$.on_destroy?e.$$.on_destroy.push(...c):b(c),e.$$.on_mount=[]}),o.forEach(_)}function D(e,t){const n=e.$$;n.fragment!==null&&(K(n.after_update),b(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function J(e,t){e.$$.dirty[0]===-1&&(u.push(e),G(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function Q(e,t,n,r,s,o,c,S=[-1]){const p=g;h(e);const l=e.$$={fragment:null,ctx:[],props:o,update:f,not_equal:s,bound:E(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(p?p.$$.context:[])),callbacks:E(),dirty:S,skip_bound:!1,root:t.target||p.$$.root};c&&c(l.root);let v=!1;if(l.ctx=n?n(e,t.props||{},(a,$,...x)=>{const w=x.length?x[0]:$;return l.ctx&&s(l.ctx[a],l.ctx[a]=w)&&(!l.skip_bound&&l.bound[a]&&l.bound[a](w),v&&J(e,a)),$}):[],l.update(),v=!0,b(l.before_update),l.fragment=r?r(l.ctx):!1,t.target){if(t.hydrate){const a=q(t.target);l.fragment&&l.fragment.l(a),a.forEach(L)}else l.fragment&&l.fragment.c();t.intro&&W(e.$$.fragment),z(e,t.target,t.anchor,t.customElement),P()}h(p)}class R{$destroy(){D(this,1),this.$destroy=f}$on(t,n){if(!A(n))return f;const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(n),()=>{const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}$set(t){this.$$set&&!C(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function U(e){let t;return{c(){t=M("main"),t.innerHTML=`<h1 style="font-weight:10;" class="svelte-1by6210">Noodle<span class="blue svelte-1by6210">Birb</span> 
	</h1><br class="svelte-1by6210"/>
	Welcome to my awsome website guys<br class="svelte-1by6210"/><br class="svelte-1by6210"/> 
	<p class="svelte-1by6210"><em class="svelte-1by6210"></em> 
	</p><br class="svelte-1by6210"/> 
	<a href="https://noodlebirb.github.io/novels/" class="svelte-1by6210"><span class="udl svelte-1by6210"><span class="udl svelte-1by6210">← Novels</span></span></a>    
	<a href="https://noodlebirb.github.io/chemstudy/" class="svelte-1by6210"><span class="udl svelte-1by6210"><span class="udl svelte-1by6210">ChemStudy →</span></span> 
	</a><br class="svelte-1by6210"/><br class="svelte-1by6210"/> 
	<a href="https://noodlebirb.github.io/gpacalculator/" class="svelte-1by6210"><span class="udl svelte-1by6210"><span class="udl svelte-1by6210">← GpaCalcualtor →</span></span></a>`,I(t,"class","bc-true-center bc-text-align svelte-1by6210")},m(n,r){B(n,t,r)},p:f,i:f,o:f,d(n){n&&L(t)}}}class V extends R{constructor(t){super(),Q(this,t,null,U,j,{})}}new V({target:document.getElementById("app")});
