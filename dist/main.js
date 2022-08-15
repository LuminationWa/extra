(()=>{"use strict";var n,e,t,r,o,a,i,c,s,l,u,p,d,h,f={426:(n,e,t)=>{t.d(e,{Z:()=>d});var r=t(81),o=t.n(r),a=t(645),i=t.n(a),c=t(667),s=t.n(c),l=new URL(t(168),t.b),u=i()(o()),p=s()(l);u.push([n.id,"* {\n    box-sizing: content-box;\n    margin: 0;\n}\n\n:root {\n    --general-height: 200px;\n    --general-width: 200px;\n}\n\n@keyframes not-cleared-yet {\n    from {\n        color: purple;\n        font-size: 1.5rem;\n    }\n\n    25% {\n        color: pink;\n    }\n\n    50% {\n        color: red;\n    }\n\n    75% {\n        color: pink;\n    }\n\n    to {\n        color: purple;\n        font-size: 1.9rem;\n    }\n}\n\n/* Main content */\n\n#main-content {\n    background: url("+p+");\n    height: 100vh;\n    width: 100vw;\n}\n\n/* Challenges */\n\n.challenge {\n    width: var(--general-width);\n    height: var(--general-height);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    gap: 20px;\n    padding: 20px;\n}\n\n.challenge p {\n    animation: 1.5s not-cleared-yet infinite alternate;\n}\n\n#challenge-1 {\n    position: absolute;\n    top: 10%;\n    left: calc(50% - calc(var(--general-width) / 2));\n}\n\n#challenge-2 {\n    position: absolute;\n    left: 10%;\n    top: calc(50% - calc(var(--general-height) / 2));\n}\n\n#challenge-3 {\n    position: absolute;\n    right: 10%;\n    top: calc(50% - calc(var(--general-height) / 2));\n}\n\n#challenge-4 {\n    position: absolute;\n    bottom: 10%;\n    left: calc(50% - calc(var(--general-width) / 2));\n}\n\n.player-icon {\n    width: var(--general-width);\n    height: var(--general-height);\n}\n\n.challenge-button {\n    padding: 10px 40px;\n    border: none;\n    border-radius: 30px;\n    background-color: rgba(241, 227, 227, 0.5) ;\n}\n\n.challenge-button:hover {\n    cursor: pointer;\n}\n",""]);const d=u},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var l=0;l<n.length;l++){var u=[].concat(n[l]);r&&i[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),t&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=t):u[2]=t),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),e.push(u))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],c=0;c<n.length;c++){var s=n[c],l=r.base?s[0]+r.base:s[0],u=a[l]||0,p="".concat(l," ").concat(u);a[l]=u+1;var d=t(p),h={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==d)e[d].references++,e[d].updater(h);else{var f=o(h,r);r.byIndex=c,e.splice(c,0,{identifier:p,updater:f,references:1})}i.push(p)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var s=r(n,o),l=0;l<a.length;l++){var u=t(a[l]);0===e[u].references&&(e[u].updater(),e.splice(u,1))}a=s}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},168:(n,e,t)=>{n.exports=t.p+"src/images/chessboard..jpg"}},g={};function v(n){var e=g[n];if(void 0!==e)return e.exports;var t=g[n]={id:n,exports:{}};return f[n](t,t.exports,v),t.exports}v.m=f,v.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return v.d(e,{a:e}),e},v.d=(n,e)=>{for(var t in e)v.o(e,t)&&!v.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},v.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),v.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;v.g.importScripts&&(n=v.g.location+"");var e=v.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var t=e.getElementsByTagName("script");t.length&&(n=t[t.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),v.p=n})(),v.b=document.baseURI||self.location.href,v.nc=void 0,n=v(379),e=v.n(n),t=v(795),r=v.n(t),o=v(569),a=v.n(o),i=v(565),c=v.n(i),s=v(216),l=v.n(s),u=v(589),p=v.n(u),d=v(426),(h={}).styleTagTransform=p(),h.setAttributes=c(),h.insert=a().bind(null,"head"),h.domAPI=r(),h.insertStyleElement=l(),e()(d.Z,h),d.Z&&d.Z.locals&&d.Z.locals})();