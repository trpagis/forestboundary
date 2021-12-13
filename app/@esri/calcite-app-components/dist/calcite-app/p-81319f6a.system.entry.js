var __awaiter=this&&this.__awaiter||function(e,t,a,i){function r(e){return e instanceof a?e:new a((function(t){t(e)}))}return new(a||(a=Promise))((function(a,n){function o(e){try{l(i.next(e))}catch(t){n(t)}}function c(e){try{l(i["throw"](e))}catch(t){n(t)}}function l(e){e.done?a(e.value):r(e.value).then(o,c)}l((i=i.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var a={label:0,sent:function(){if(n[0]&1)throw n[1];return n[1]},trys:[],ops:[]},i,r,n,o;return o={next:c(0),throw:c(1),return:c(2)},typeof Symbol==="function"&&(o[Symbol.iterator]=function(){return this}),o;function c(e){return function(t){return l([e,t])}}function l(o){if(i)throw new TypeError("Generator is already executing.");while(a)try{if(i=1,r&&(n=o[0]&2?r["return"]:o[0]?r["throw"]||((n=r["return"])&&n.call(r),0):r.next)&&!(n=n.call(r,o[1])).done)return n;if(r=0,n)o=[o[0]&2,n.value];switch(o[0]){case 0:case 1:n=o;break;case 4:a.label++;return{value:o[1],done:false};case 5:a.label++;r=o[1];o=[0];continue;case 7:o=a.ops.pop();a.trys.pop();continue;default:if(!(n=a.trys,n=n.length>0&&n[n.length-1])&&(o[0]===6||o[0]===2)){a=0;continue}if(o[0]===3&&(!n||o[1]>n[0]&&o[1]<n[3])){a.label=o[1];break}if(o[0]===6&&a.label<n[1]){a.label=n[1];n=o;break}if(n&&a.label<n[2]){a.label=n[2];a.ops.push(o);break}if(n[2])a.ops.pop();a.trys.pop();continue}o=t.call(e,a)}catch(c){o=[6,c];r=0}finally{i=n=0}if(o[0]&5)throw o[1];return{value:o[0]?o[1]:void 0,done:true}}};System.register(["./p-8f7f5385.system.js","./p-3f6e7b0b.system.js","./p-9e77e74d.system.js","./p-ad079e5e.system.js","./p-83545f41.system.js","./p-141eda4d.system.js","./p-e99ac265.system.js","./p-ea3bee88.system.js","./p-81a7da5f.system.js"],(function(e){"use strict";var t,a,i,r,n,o,c,l,s,p,u,f,d,h,b,g,v,m,y,k;return{setters:[function(e){t=e.r;a=e.c;i=e.h;r=e.g},function(){},function(){},function(e){n=e.a},function(){},function(){},function(){},function(e){o=e.m;c=e.d;l=e.s;s=e.h;p=e.g;u=e.k;f=e.i;d=e.a;h=e.c;b=e.b;g=e.e;v=e.f;m=e.j;y=e.L},function(e){k=e.S}],execute:function(){var x={container:"container",handle:"handle"};var w;(function(e){e["grip"]="grip"})(w||(w={}));var D={filterPlaceholder:"Filter results"};var _=":host{-webkit-box-sizing:border-box;box-sizing:border-box;color:var(--calcite-app-foreground);font-family:var(--calcite-app-font-family);font-size:var(--calcite-app-font-size-0);line-height:var(--calcite-app-line-height);background-color:var(--calcite-app-background)}:host *{-webkit-box-sizing:border-box;box-sizing:border-box}:host{-ms-flex-align:stretch;align-items:stretch;background-color:var(--calcite-app-background-clear);display:-ms-flexbox;display:flex;-ms-flex:0 0 auto;flex:0 0 auto;-ms-flex-flow:column;flex-flow:column;position:relative}:host([hidden]){display:none}:host([theme=dark]){--calcite-app-background:#404040;--calcite-app-foreground:#dfdfdf;--calcite-app-background-hover:#2b2b2b;--calcite-app-foreground-hover:#f3f3f3;--calcite-app-background-active:#151515;--calcite-app-foreground-active:#59d6ff;--calcite-app-foreground-subtle:#eaeaea;--calcite-app-background-content:#2b2b2b;--calcite-app-border:#2b2b2b;--calcite-app-border-hover:#2b2b2b;--calcite-app-border-subtle:#2b2b2b;--calcite-app-scrim:rgba(64, 64, 64, 0.8)}:host([theme=light]){--calcite-app-background:#ffffff;--calcite-app-foreground:#404040;--calcite-app-background-hover:#eaeaea;--calcite-app-foreground-hover:#2b2b2b;--calcite-app-background-active:#c7eaff;--calcite-app-foreground-active:#00619b;--calcite-app-foreground-subtle:#757575;--calcite-app-foreground-link:#007ac2;--calcite-app-background-content:#f3f3f3;--calcite-app-background-clear:transparent;--calcite-app-border:#eaeaea;--calcite-app-border-hover:#dfdfdf;--calcite-app-border-subtle:#f3f3f3;--calcite-app-border-active:#007ac2;--calcite-app-disabled-opacity:0.25;--calcite-app-scrim:rgba(255, 255, 255, 0.8)}header{background-color:var(--calcite-app-background);display:-ms-flexbox;display:flex;-ms-flex-pack:end;justify-content:flex-end;-ms-flex-align:center;align-items:center;margin-bottom:var(--calcite-app-cap-spacing-quarter);-webkit-box-shadow:0 -1px 0 var(--calcite-app-border) inset;box-shadow:0 -1px 0 var(--calcite-app-border) inset}header.sticky{position:-webkit-sticky;position:sticky;top:0;z-index:1}calcite-filter{margin-bottom:1px}slot[name=menu-actions]::slotted(calcite-action){padding:0 var(--calcite-app-side-spacing-half)}";var j=e("calcite_value_list",function(){function e(e){var i=this;t(this,e);this.compact=false;this.disabled=false;this.dragEnabled=false;this.filterEnabled=false;this.loading=false;this.multiple=false;this.textFilterPlaceholder=D.filterPlaceholder;this.selectedValues=new Map;this.dataForFilter=[];this.lastSelectedItem=null;this.guid="calcite-value-list-"+n();this.observer=new MutationObserver(o.bind(this));this.sortables=[];this.deselectSiblingItems=c.bind(this);this.selectSiblings=l.bind(this);this.handleFilter=s.bind(this);this.getItemData=p.bind(this);this.keyDownHandler=function(e){var t=e.composedPath().find((function(e){var t;return(t=e.dataset)===null||t===void 0?void 0:t.jsHandle}));var a=e.composedPath().find((function(e){var t;return((t=e.tagName)===null||t===void 0?void 0:t.toLowerCase())==="calcite-value-list-item"}));if(!t||!a.handleActivated){u.call(i,e);return}var r=i.items.length-1;var n=a.value;var o=i.items.findIndex((function(e){return e.value===n}));var c=false;var l;switch(e.key){case"ArrowUp":e.preventDefault();if(o===0){c=true}else{l=o-1}break;case"ArrowDown":e.preventDefault();if(o===r){l=0}else if(o===r-1){c=true}else{l=o+2}break;default:return}if(c){a.parentElement.appendChild(a)}else{a.parentElement.insertBefore(a,i.items[l])}t.focus();a.handleActivated=true};this.calciteListChange=a(this,"calciteListChange",7);this.calciteListOrderChange=a(this,"calciteListOrderChange",7)}e.prototype.connectedCallback=function(){f.call(this);d.call(this)};e.prototype.componentDidLoad=function(){this.setUpDragAndDrop()};e.prototype.componentDidUnload=function(){h.call(this);this.cleanUpDragAndDrop()};e.prototype.calciteListItemChangeHandler=function(e){b.call(this,e)};e.prototype.calciteListItemPropsChangeHandler=function(e){e.stopPropagation();this.setUpFilter()};e.prototype.calciteListItemValueChangeHandler=function(e){g.call(this,e)};e.prototype.setUpItems=function(){v.call(this,"calcite-value-list-item")};e.prototype.setUpFilter=function(){if(this.filterEnabled){this.dataForFilter=this.getItemData()}};e.prototype.setUpDragAndDrop=function(){var e=this;if(!this.dragEnabled){return}this.sortables.push(k.create(this.el,{group:this.guid,handle:"."+x.handle,draggable:"calcite-value-list-item",onUpdate:function(){e.items=Array.from(e.el.querySelectorAll("calcite-value-list-item"));var t=e.items.map((function(e){return e.value}));e.calciteListOrderChange.emit(t)}}))};e.prototype.cleanUpDragAndDrop=function(){if(!this.dragEnabled){return}this.sortables.forEach((function(e){e.destroy()}));this.sortables=[]};e.prototype.getSelectedItems=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){return[2,this.selectedValues]}))}))};e.prototype.setFocus=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){return[2,m.call(this)]}))}))};e.prototype.getIconType=function(){var e=null;if(this.dragEnabled){e=w.grip}return e};e.prototype.render=function(){return i(y,{props:this,onKeyDown:this.keyDownHandler})};Object.defineProperty(e.prototype,"el",{get:function(){return r(this)},enumerable:true,configurable:true});return e}());j.style=_}}}));