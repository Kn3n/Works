if(!self.define){let e,s={};const i=(i,r)=>(i=new URL(i+".js",r).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(r,t)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let n={};const c=e=>i(e,o),l={module:{uri:o},exports:n,require:c};s[o]=Promise.all(r.map((e=>l[e]||c(e)))).then((e=>(t(...e),n)))}}define(["./workbox-2671632a"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"app-mobile/src/app.js",revision:"d32f00e77d525bb751f3adba1ff31c8d"},{url:"app-mobile/src/index.html",revision:"dda833a0a01a666073c24e649ebdac49"},{url:"app-mobile/src/style/style.css",revision:"3affec43eef3b04df27e7485a7ad78c5"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map
