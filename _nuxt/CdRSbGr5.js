import{al as w,i as C,ao as y,ap as k,aq as q,d as v,af as M,I as R,Q as A,ar as T}from"./CFhrp1Et.js";const F=Object.freeze({left:0,top:0,width:16,height:16}),z=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),V=Object.freeze({...F,...z});Object.freeze({...V,body:"",hidden:!1});function B(t,s){let n=t.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const o in s)n+=" "+o+'="'+s[o]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+n+">"+t+"</svg>"}const L=/(-?[0-9.]*[0-9]+[0-9.]*)/g,P=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function x(t,s,n){if(s===1)return t;if(n=n||100,typeof t=="number")return Math.ceil(t*s*n)/n;if(typeof t!="string")return t;const o=t.split(L);if(o===null||!o.length)return t;const e=[];let a=o.shift(),l=P.test(a);for(;;){if(l){const r=parseFloat(a);isNaN(r)?e.push(a):e.push(Math.ceil(r*s*n)/n)}else e.push(a);if(a=o.shift(),a===void 0)return e.join("");l=!l}}function D(t){return t.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function W(t){return"data:image/svg+xml,"+D(t)}function E(t){return'url("'+W(t)+'")'}function _(t){const[s,n,o,e]=t;if(o!==e){const a=Math.max(o,e);return[s-(a-o)/2,n-(a-e)/2,a,a]}return t}const G=Object.freeze({width:null,height:null}),U=Object.freeze({...G,...z});function K(t,s="defs"){let n="";const o=t.indexOf("<"+s);for(;o>=0;){const e=t.indexOf(">",o),a=t.indexOf("</"+s);if(e===-1||a===-1)break;const l=t.indexOf(">",a);if(l===-1)break;n+=t.slice(e+1,a).trim(),t=t.slice(0,o).trim()+t.slice(l+1)}return{defs:n,content:t}}function J(t,s){return t?"<defs>"+t+"</defs>"+s:s}function Q(t,s,n){const o=K(t);return J(o.defs,s+o.content+n)}const X=t=>t==="unset"||t==="undefined"||t==="none";function Y(t,s){const n={...V,...t},o={...U,...s},e={left:n.left,top:n.top,width:n.width,height:n.height};let a=n.body;[n,o].forEach(p=>{const f=[],j=p.hFlip,I=p.vFlip;let m=p.rotate;j?I?m+=2:(f.push("translate("+(e.width+e.left).toString()+" "+(0-e.top).toString()+")"),f.push("scale(-1 1)"),e.top=e.left=0):I&&(f.push("translate("+(0-e.left).toString()+" "+(e.height+e.top).toString()+")"),f.push("scale(1 -1)"),e.top=e.left=0);let h;switch(m<0&&(m-=Math.floor(m/4)*4),m=m%4,m){case 1:h=e.height/2+e.top,f.unshift("rotate(90 "+h.toString()+" "+h.toString()+")");break;case 2:f.unshift("rotate(180 "+(e.width/2+e.left).toString()+" "+(e.height/2+e.top).toString()+")");break;case 3:h=e.width/2+e.left,f.unshift("rotate(-90 "+h.toString()+" "+h.toString()+")");break}m%2===1&&(e.left!==e.top&&(h=e.left,e.left=e.top,e.top=h),e.width!==e.height&&(h=e.width,e.width=e.height,e.height=h)),f.length&&(a=Q(a,'<g transform="'+f.join(" ")+'">',"</g>"))});const l=o.width,r=o.height,i=e.width,c=e.height;let u,d;l===null?(d=r===null?"1em":r==="auto"?c:r,u=x(d,i/c)):(u=l==="auto"?i:l,d=r===null?x(u,c/i):r==="auto"?c:r);const S={},H=(p,f)=>{X(f)||(S[p]=f.toString())};H("width",u),H("height",d);const Z=[e.left,e.top,i,c];return S.viewBox=Z.join(" "),{attributes:S,viewBox:Z,body:a}}function tt(t){const s={display:"inline-block",width:"1em",height:"1em"},n=t.varName;switch(t.pseudoSelector&&(s.content="''"),t.mode){case"background":n&&(s["background-image"]="var(--"+n+")"),s["background-repeat"]="no-repeat",s["background-size"]="100% 100%";break;case"mask":s["background-color"]="currentColor",n&&(s["mask-image"]=s["-webkit-mask-image"]="var(--"+n+")"),s["mask-repeat"]=s["-webkit-mask-repeat"]="no-repeat",s["mask-size"]=s["-webkit-mask-size"]="100% 100%";break}return s}function et(t,s){const n={},o=s.varName,e=Y(t);let a=e.viewBox;a[2]!==a[3]&&(s.forceSquare?a=_(a):n.width=x("1em",a[2]/a[3]));const l=B(e.body.replace(/currentColor/g,s.color||"black"),{viewBox:`${a[0]} ${a[1]} ${a[2]} ${a[3]}`,width:`${a[2]}`,height:`${a[3]}`}),r=E(l);if(o)n["--"+o]=r;else switch(s.mode){case"background":n["background-image"]=r;break;case"mask":n["mask-image"]=n["-webkit-mask-image"]=r;break}return n}const b={selectorStart:{compressed:"{",compact:" {",expanded:" {"},selectorEnd:{compressed:"}",compact:`; }
`,expanded:`;
}
`},rule:{compressed:"{key}:",compact:" {key}: ",expanded:`
  {key}: `}};function nt(t,s="expanded"){const n=[];for(let o=0;o<t.length;o++){const{selector:e,rules:a}=t[o];let r=(e instanceof Array?e.join(s==="compressed"?",":", "):e)+b.selectorStart[s],i=!0;for(const c in a)i||(r+=";"),r+=b.rule[s].replace("{key}",c)+a[c],i=!1;r+=b.selectorEnd[s],n.push(r)}return n.join(s==="compressed"?"":`
`)}function st(t,s={}){const n=s.customise?s.customise(t.body):t.body,o=s.mode||(s.color||!n.includes("currentColor")?"background":"mask");let e=s.varName;e===void 0&&o==="mask"&&(e="svg");const a={...s,mode:o,varName:e};o==="background"&&delete a.varName;const l={...s.rules,...tt(a),...et({...V,...t,body:n},a)},r=s.iconSelector||".icon";return nt([{selector:r,rules:l}],a.format)}let N=!1;function $(t){if(N)return;const s=JSON.parse('[{"prefix":"s","icons":{"instagram":{"width":25,"height":25,"body":"<g fill=\\"none\\"><path d=\\"M12.5853 2.73563C15.7659 2.73563 16.1416 2.74732 17.3987 2.80579C18.5593 2.85841 19.1907 3.05282 19.6102 3.21653C20.1657 3.43286 20.5632 3.69012 20.9798 4.10671C21.3964 4.52329 21.6551 4.92088 21.87 5.47632C22.0337 5.89583 22.2267 6.52729 22.2808 7.68788C22.3378 8.94349 22.3509 9.32061 22.3509 12.5013C22.3509 15.682 22.3392 16.0576 22.2808 17.3147C22.2281 18.4767 22.0337 19.1067 21.87 19.5262C21.6537 20.0817 21.3964 20.4793 20.9798 20.8959C20.5632 21.3124 20.1657 21.5712 19.6102 21.786C19.1907 21.9497 18.5593 22.1427 17.3987 22.1968C16.1431 22.2538 15.7659 22.2655 12.5853 22.2655C9.40459 22.2655 9.02893 22.2538 7.77187 22.1968C6.61127 22.1441 5.97982 21.9497 5.56031 21.786C5.00486 21.5697 4.60728 21.3124 4.19069 20.8959C3.7741 20.4793 3.51538 20.0817 3.29905 19.5262C3.1368 19.1067 2.94239 18.4767 2.88831 17.3147C2.83131 16.0591 2.81961 15.682 2.81961 12.5013C2.81961 9.32061 2.83131 8.94495 2.88831 7.68788C2.94093 6.52583 3.13534 5.89583 3.29905 5.47632C3.51538 4.92088 3.7741 4.52329 4.19069 4.10671C4.60728 3.69012 5.00486 3.4314 5.56031 3.21653C5.97982 3.05282 6.61127 2.85987 7.77187 2.80579C9.02747 2.74878 9.40459 2.73563 12.5853 2.73563ZM12.5853 0.589844C9.35051 0.589844 8.94562 0.603 7.67393 0.661468C6.40664 0.719936 5.53984 0.92019 4.78268 1.21545C3.99921 1.51949 3.33559 1.9273 2.67344 2.58946C2.01129 3.25161 1.60347 3.91669 1.29944 4.6987C1.00564 5.45586 0.80392 6.32265 0.745451 7.58995C0.686983 8.86017 0.673828 9.26653 0.673828 12.5013C0.673828 15.736 0.686983 16.1409 0.745451 17.4126C0.802458 18.6799 1.00417 19.5467 1.29944 20.3039C1.60347 21.0873 2.01129 21.751 2.67344 22.4131C3.33559 23.0753 3.99921 23.4831 4.78268 23.7871C5.53984 24.0809 6.40664 24.2826 7.67393 24.3411C8.94416 24.3996 9.35051 24.4127 12.5853 24.4127C15.82 24.4127 16.2249 24.3996 17.4966 24.3411C18.7639 24.2826 19.6292 24.0824 20.3878 23.7871C21.1713 23.4831 21.8349 23.0753 22.4971 22.4131C23.1592 21.751 23.5671 21.0859 23.8711 20.3039C24.1649 19.5467 24.3666 18.6799 24.4251 17.4126C24.4835 16.1424 24.4967 15.736 24.4967 12.5013C24.4967 9.26653 24.4835 8.86163 24.4251 7.58995C24.3666 6.32265 24.1664 5.45586 23.8711 4.6987C23.5671 3.91522 23.1592 3.25161 22.4971 2.58946C21.8349 1.9273 21.1713 1.51949 20.3878 1.21545C19.6307 0.921652 18.7639 0.719936 17.4966 0.661468C16.2264 0.603 15.82 0.589844 12.5853 0.589844Z\\" fill=\\"#DB1514\\"/>\\n<path d=\\"M12.5845 6.38477C9.20652 6.38477 6.46875 9.12254 6.46875 12.5005C6.46875 15.8785 9.20652 18.6163 12.5845 18.6163C15.9625 18.6163 18.7003 15.8785 18.7003 12.5005C18.7003 9.12254 15.9625 6.38477 12.5845 6.38477ZM12.5845 16.4705C10.392 16.4705 8.61453 14.6931 8.61453 12.5005C8.61453 10.308 10.392 8.53055 12.5845 8.53055C14.7771 8.53055 16.5545 10.308 16.5545 12.5005C16.5545 14.6931 14.7771 16.4705 12.5845 16.4705Z\\" fill=\\"#DB1514\\"/>\\n<path d=\\"M20.3728 6.14244C20.3728 6.93176 19.7325 7.57199 18.9432 7.57199C18.1539 7.57199 17.5137 6.93176 17.5137 6.14244C17.5137 5.35312 18.1539 4.71289 18.9432 4.71289C19.7325 4.71289 20.3728 5.35312 20.3728 6.14244Z\\" fill=\\"#DB1514\\"/></g>"},"intro":{"width":24,"height":24,"body":"<g transform=\\"translate(-492 -188)\\"><path d=\\"M7.75,1.5h-7A.755.755,0,0,1,0,.75.755.755,0,0,1,.75,0h7A.755.755,0,0,1,8.5.75.755.755,0,0,1,7.75,1.5Z\\" transform=\\"translate(505.25 191.75)\\" fill=\\"#24099a\\"></path><path d=\\"M7.75,1.5h-7A.755.755,0,0,1,0,.75.755.755,0,0,1,.75,0h7A.755.755,0,0,1,8.5.75.755.755,0,0,1,7.75,1.5Z\\" transform=\\"translate(505.25 196.75)\\" fill=\\"#cac4e7\\"></path><path d=\\"M18.75,1.5H.75A.755.755,0,0,1,0,.75.755.755,0,0,1,.75,0h18a.755.755,0,0,1,.75.75A.755.755,0,0,1,18.75,1.5Z\\" transform=\\"translate(494.25 201.75)\\" fill=\\"#24099a\\"></path><path d=\\"M18.75,1.5H.75A.755.755,0,0,1,0,.75.755.755,0,0,1,.75,0h18a.755.755,0,0,1,.75.75A.755.755,0,0,1,18.75,1.5Z\\" transform=\\"translate(494.25 206.75)\\" fill=\\"#cac4e7\\"></path><path d=\\"M4.562,0H1.929A1.7,1.7,0,0,0,0,1.929V4.571A1.7,1.7,0,0,0,1.929,6.5H4.571A1.7,1.7,0,0,0,6.5,4.571V1.929A1.705,1.705,0,0,0,4.562,0Z\\" transform=\\"translate(495.25 191.75)\\" fill=\\"#cac4e7\\"></path><path d=\\"M0,0H24V24H0Z\\" transform=\\"translate(492 188)\\" fill=\\"none\\" opacity=\\"0\\"></path></g>"},"lessons":{"width":24,"height":24,"body":"<g transform=\\"translate(-236 -252)\\">\\n    <path\\n        d=\\"M13,5.81V6.5H0V0H7.19C10.83,0,13,2.17,13,5.81Z\\"\\n        transform=\\"translate(258 261) rotate(90)\\"\\n        fill=\\"#e1e0e5\\"\\n    ></path>\\n    <path\\n        d=\\"M13,0V.69C13,4.33,10.83,6.5,7.19,6.5H0V0Z\\"\\n        transform=\\"translate(244.5 261) rotate(90)\\"\\n        fill=\\"#e1e0e5\\"\\n    ></path>\\n    <path\\n        d=\\"M7,0V20H5.81C2.17,20,0,17.83,0,14.19V5.81C0,2.17,2.17,0,5.81,0Z\\"\\n        transform=\\"translate(258 254) rotate(90)\\"\\n        fill=\\"#24099a\\"\\n    ></path>\\n    <path\\n        d=\\"M0,0H13V7H0Z\\"\\n        transform=\\"translate(251.5 261) rotate(90)\\"\\n        fill=\\"#cac4e7\\"\\n    ></path>\\n    <path\\n        d=\\"M0,0H24V24H0Z\\"\\n        transform=\\"translate(236 252)\\"\\n        fill=\\"none\\"\\n        opacity=\\"0\\"\\n    ></path>\\n    </g>"},"linkedin":{"width":23,"height":23,"body":"<g fill=\\"none\\"><path d=\\"M5.53849 7.64258H1.04297V22.1663H5.53849V7.64258Z\\" fill=\\"#214254\\"/>\\n<path d=\\"M3.26935 5.73973C4.73848 5.73973 5.92737 4.53928 5.92737 3.05859C5.92737 1.5779 4.73703 0.378906 3.26935 0.378906C1.80166 0.378906 0.611328 1.57935 0.611328 3.05859C0.611328 4.53784 1.80166 5.73973 3.26935 5.73973Z\\" fill=\\"#214254\\"/>\\n<path d=\\"M12.7276 14.542C12.7276 12.5008 13.6665 11.283 15.4665 11.283C17.1191 11.283 17.9136 12.4503 17.9136 14.542V22.1665H22.3889V12.9703C22.3889 9.08006 20.183 7.19922 17.1046 7.19922C14.0262 7.19922 12.7276 9.59866 12.7276 9.59866V7.6427H8.41406V22.1665H12.7276V14.542Z\\" fill=\\"#214254\\"/></g>"},"user":{"width":24,"height":24,"body":"<g transform=\\"translate(-620 -188)\\"><path d=\\"M0,0H24V24H0Z\\" transform=\\"translate(620 188)\\" fill=\\"none\\" opacity=\\"0\\"></path><path d=\\"M18.17,6.58v6.84a3.174,3.174,0,0,1-1.57,2.73l-5.94,3.43a3.163,3.163,0,0,1-3.15,0L1.57,16.15A3.15,3.15,0,0,1,0,13.42V6.58A3.174,3.174,0,0,1,1.57,3.85L7.51.42a3.163,3.163,0,0,1,3.15,0L16.6,3.85A3.162,3.162,0,0,1,18.17,6.58Z\\" transform=\\"translate(622.91 190)\\" fill=\\"#cac4e7\\"></path><path d=\\"M4.66,2.33A2.33,2.33,0,1,1,2.33,0,2.33,2.33,0,0,1,4.66,2.33Z\\" transform=\\"translate(629.67 195.34)\\" fill=\\"#24099a\\"></path><path d=\\"M6.365,3.26a1,1,0,0,0,.83-1.57A4.209,4.209,0,0,0,3.685,0,4.209,4.209,0,0,0,.175,1.69,1,1,0,0,0,1,3.26Z\\" transform=\\"translate(628.315 201.4)\\" fill=\\"#24099a\\"></path></g>"}}}]');for(const n of s)for(const[o,e]of Object.entries(n.icons))t(n.prefix?n.prefix+":"+o:o,e);N=!0}async function ot(t,s){if(!t)return null;$(y);const n=k(t);if(n)return n;let o;const e=q(t).catch(()=>(console.warn(`[Icon] failed to load icon \`${t}\``),null));return s>0?await Promise.race([e,new Promise(a=>{o=setTimeout(()=>{console.warn(`[Icon] loading icon \`${t}\` timed out after ${s}ms`),a()},s)})]).finally(()=>clearTimeout(o)):await e,k(t)}function O(t){const s=w().icon,n=(s.collections||[]).sort((o,e)=>e.length-o.length);return C(()=>{var l;const o=t(),e=o.startsWith(s.cssSelectorPrefix)?o.slice(s.cssSelectorPrefix.length):o,a=((l=s.aliases)==null?void 0:l[e])||e;if(!a.includes(":")){const r=n.find(i=>a.startsWith(i+"-"));return r?r+":"+a.slice(r.length+1):a}return a})}let g;function at(t){return t.replace(/([^\w-])/g,"\\$1")}function rt(){if(g)return g;g=new Set;const t=n=>{if(n=n.replace(/^:where\((.*)\)$/,"$1").trim(),n.startsWith("."))return n},s=n=>{if(n!=null&&n.length)for(const o of n){o!=null&&o.cssRules&&s(o.cssRules);const e=o==null?void 0:o.selectorText;if(typeof e=="string"){const a=t(e);a&&g.add(a)}}};if(typeof document<"u")for(const n of document.styleSheets)try{const o=n.cssRules||n.rules;s(o)}catch{}return g}const it=v({name:"NuxtIconCss",props:{name:{type:String,required:!0},customize:{type:Function,required:!1}},setup(t){const s=M(),n=w().icon,o=C(()=>t.name?n.cssSelectorPrefix+t.name:"");function e(r){var u,d;if(!r)return;const i=k(r);if(i)return i;const c=(d=(u=s.payload)==null?void 0:u.data)==null?void 0:d[r];if(c)return y(r,c),c}const a=C(()=>"."+at(o.value));function l(r,i=!0){let c=a.value;n.cssWherePseudo&&(c=`:where(${c})`);const u=st(r,{iconSelector:c,format:"compressed",customise:t.customize});return n.cssLayer&&i?`@layer ${n.cssLayer} { ${u} }`:u}{const r=rt();async function i(c){if(r.has(a.value)||typeof document>"u")return;const u=document.createElement("style");u.textContent=l(c);const d=document.head.querySelector('style, link[rel="stylesheet"]');d?document.head.insertBefore(u,d):document.head.appendChild(u),r.add(a.value)}R(()=>t.name,()=>{if(r.has(a.value))return;const c=e(t.name);c?i(c):ot(t.name,n.fetchTimeout).then(u=>{u&&i(u)}).catch(()=>null)},{immediate:!0})}return()=>A("span",{class:["iconify",o.value]})}}),lt=v({name:"NuxtIconSvg",props:{name:{type:String,required:!0},customize:{type:Function,required:!1}},async setup(t,{slots:s}){const n=M();w().icon;const o=O(()=>t.name),e="i-"+o.value;if(o.value){const a=n.payload.data[e];a?y(o.value,a):$(y)}return()=>A(T,{icon:o.value,ssr:!0,customise:t.customize},s)}}),ut=v({name:"NuxtIcon",props:{name:{type:String,required:!0},mode:{type:String,required:!1,default:null},size:{type:[Number,String],required:!1,default:null},customize:{type:Function,required:!1}},async setup(t,{slots:s}){const n=M(),o=w().icon,e=O(()=>t.name),a=C(()=>{var i;return((i=n.vueApp)==null?void 0:i.component(e.value))||((t.mode||o.mode)==="svg"?lt:it)}),l=C(()=>{const i=t.size||o.size;return i?{fontSize:Number.isNaN(+i)?i:i+"px"}:null}),r=t.customize||o.customize;return()=>A(a.value,{...o.attrs,name:e.value,class:o.class,style:l.value,customize:r},s)}});export{ut as default};
