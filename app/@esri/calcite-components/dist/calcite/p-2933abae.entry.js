import{d as t,r as s,h as i,H as a,g as n}from"./p-8d9aae43.js";import{g as e}from"./p-e29d1efc.js";const o={},l={},c={s:16,m:24,l:32};const r=class{constructor(t){s(this,t),this.icon=null,this.mirrored=!1,this.scale="m",this.visible=!1}connectedCallback(){this.waitUntilVisible(()=>{this.visible=!0,this.loadIconPathData()})}disconnectedCallback(){this.intersectionObserver&&(this.intersectionObserver.disconnect(),this.intersectionObserver=null)}async componentWillLoad(){this.loadIconPathData()}render(){const{el:t,mirrored:s,pathData:n,scale:o,textLabel:l}=this,r=e(t),h=c[o],d=!!l,u=[].concat(n||"");return i(a,{"aria-label":d?l:null,role:d?"img":null},i("svg",{class:{mirrored:"rtl"===r&&s,svg:!0},xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",height:h,width:h,viewBox:`0 0 ${h} ${h}`},u.map(t=>i("path","string"==typeof t?{d:t}:{d:t.d,opacity:"opacity"in t?t.opacity:1}))))}async loadIconPathData(){const{icon:s,scale:i,visible:a}=this;s&&a&&(this.pathData=await async function({icon:s,scale:i}){const a=c[i],n=function(t){const s=!isNaN(Number(t.charAt(0))),i=t.split("-");return 1===i.length?s?`i${t}`:t:i.map((t,i)=>0===i?s?`i${t.toUpperCase()}`:t:t.charAt(0).toUpperCase()+t.slice(1)).join("")}(s),e="F"===n.charAt(n.length-1),r=`${e?n.substring(0,n.length-1):n}${a}${e?"F":""}`;if(o[r])return o[r];l[r]||(l[r]=fetch(t(`./assets/${r}.json`)).then(t=>t.json()).catch(()=>(console.error(`"${r}" is not a valid calcite-ui-icon name`),"")));const h=await l[r];return o[r]=h,h}({icon:s,scale:i}))}waitUntilVisible(t){"undefined"!=typeof window&&window.IntersectionObserver?(this.intersectionObserver=new IntersectionObserver(s=>{s.forEach(s=>{s.isIntersecting&&(this.intersectionObserver.disconnect(),this.intersectionObserver=null,t())})},{rootMargin:"50px"}),this.intersectionObserver.observe(this.el)):t()}static get assetsDirs(){return["assets"]}get el(){return n(this)}static get watchers(){return{icon:["loadIconPathData"],scale:["loadIconPathData"]}}};r.style=":host([hidden]){display:none}:host{display:-ms-inline-flexbox;display:inline-flex}.mirrored{-webkit-transform:scaleX(-1);transform:scaleX(-1)}.svg{display:block}";export{r as calcite_icon}