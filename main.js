(()=>{"use strict";var n={993:(n,e,t)=>{t.d(e,{A:()=>s});var r=t(601),i=t.n(r),a=t(314),o=t.n(a)()(i());o.push([n.id,'*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  font-family: inherit;\n}\n\nhtml {\n  /* color-scheme: dark light; */\n  hanging-punctuation: first last;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  min-height: 100svh;\n}\n\nimg,\npicture,\nsvg,\nvideo {\n  display: block;\n  font-style: italic;\n  max-width: 100%;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  text-wrap: balance;\n}\n\np {\n  max-width: 75ch;\n  text-wrap: pretty;\n}\n\nbutton,\ninput:is([type="submit"], [type="button"], [type="checkbox"]) {\n  color: inherit;\n  cursor: pointer;\n  letter-spacing: inherit;\n}\n\ninput[type="number"] {\n  appearance: normal;\n  -moz-appearance: textfield;\n}\n\ninput::-webkit-outer-spin-button,\ninput::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\ntable {\n  font-variant-numeric: tabular-nums;\n}\n\n@media (prefers-reduced-motion: no-preference) {\n  :has(:target) {\n    scroll-behavior: smooth;\n    scroll-padding-top: 3rem;\n  }\n}\n',""]);const s=o},919:(n,e,t)=>{t.d(e,{A:()=>s});var r=t(601),i=t.n(r),a=t(314),o=t.n(a)()(i());o.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap);"]),o.push([n.id,'/* import font */\n\n:root {\n    /* colors */\n    --main-white:  #F4F5F1;\n    --main-blue: #004bff;\n    --shade-color: #b1c9ff;\n    /* font family */\n    --ff-noto-sans: "Nato Sans", sans-serif;\n    /* font size */\n    --fs-large: 3rem;\n    --fs-medium: 2rem;\n    --fs-small:1rem;\n}\n\nbody {\n    background-color: var(--main-white);\n    font-family: var(--ff-noto-sans);\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.container {\n    max-width: 1000px;\n}\n\n/* header section-----------------------------------------------------*/\nheader {\n    position: relative;\n    width: 100dvw;\n    padding-top: 3rem;\n    display: flex;\n    justify-content: center;\n    &::before {\n        content: "";\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 110%;\n        background-color: var(--shade-color);\n        z-index: -2;\n        clip-path: polygon(0 0, 100% 0, 100% 60%, 0% 100%);\n    }\n    .container {\n        display: flex;\n        align-items: center;\n\n        h1 {\n            font-size: var(--fs-large);\n            color: var(--main-blue);\n            text-align: left;\n            position: absolute;\n            width: 350px;\n            margin: 0;\n            bottom: 10px;\n            z-index: 3;\n        }\n        .header-img {\n            min-width: 350px;\n            max-width: 350px;\n            z-index: 1;\n            .profile-pic {\n                max-width: 100%;\n                height: auto;\n            }\n        }\n        .about {\n            background-color: var(--main-white);\n            color: #000000;\n            padding: 0 1rem 1rem 1rem;\n            border-radius: 1rem;\n            box-shadow: 4px 6px 11px 0px rgba(181, 181, 182, 0.87);\n            h2 {\n                font-size: var(--fs-medium);\n            }\n            p {\n                font-size: var(--fs-small);\n                line-height: 1.5;\n            }\n            .icon-container {\n                display: flex;\n                justify-content: end;\n                gap: 1rem;\n                    img { \n                        width: 2rem;\n                        height: auto;\n                        min-width: 0;\n                    }\n            }\n        }\n    }\n}\n\n/* main section---------------------------------------------------------------- */\nmain {\n    width: 100%;\n    h2 {\n        font-size: var(--fs-medium);\n    }\n    .grid-container {\n        display: grid;\n        grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));\n        grid-template-rows: 1r;\n        gap: 1rem;\n        padding: 0 0 3rem 0;\n        .card {\n            max-width: 100%;\n            border-radius: 1rem;\n            box-shadow: 4px 6px 11px 0px rgba(181, 181, 182, 0.87);\n            .card-img {\n                height: 250px;\n                border-top-left-radius: 1rem;\n                border-top-right-radius: 1rem;\n                background-color: var(--shade-color);\n            }\n            .card-text {\n                padding: 1rem;\n                .card-title {\n                    display: flex;\n                    justify-content: space-between;\n                    align-items: center;\n                    .card-link {\n                        display: flex;\n                        gap: 1rem;\n                        img {\n                            width: 1.5rem;\n                            height: 1.5rem;\n                        }\n                    }\n                }\n            }\n        }\n    }\n}\n\n/* footer---------------------------------------------------------- */\nfooter {\n    background-color: var(--shade-color);\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    .container {\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        padding: 3rem;\n        gap: 1rem;\n        .contact {\n            height: 100%;\n            h2 {\n                color: var(--main-blue);\n                margin: 0;\n            }\n            a {\n                display: flex;\n                gap: 1rem;\n                align-items: center;\n                width: max-content;\n                color: #000000;\n                text-decoration: none;\n                align-items: center;\n                padding: 0 0 1rem 0;\n                svg {\n                    width: 2rem;\n                    height: auto;\n                }\n            }\n            .footer-icons {\n                display: flex;\n                gap: 1rem;\n                img {\n                    width: 2rem;\n                    height: 2rem;\n                }\n            }\n        }\n        .footer-img {\n            width: min(100%, 450px);\n            img {\n                width: 100%;\n                height: auto;\n            }\n        }\n    }\n}\n\n/* media queries------------------------------------------------- */\n@media (max-width:600px) {\n    .container {\n        padding: 1rem;\n    }\n    header {\n        padding-block-start: 1rem;\n        &::before {\n            height: 40%;\n        }\n        .container {\n            display: flex;\n            flex-direction: column;\n            margin-inline: 1rem;\n            h1 {\n                top: 650px;\n                transform: translateY(-100%) scale(1);\n                left: 0;\n                text-align: left;\n                font-size: var(--fs-large);\n                min-width: none;\n                width: 100%;\n                text-wrap: wrap;\n                padding-inline: 1rem;\n            }\n            .header-img {\n                min-width: 100%;\n                height: 400px;\n                margin: 0;\n                text-wrap: wrap;\n                img {\n                    object-fit: cover;\n                    width: 100%;\n                    height: 100%;\n                }\n            }\n            .about {\n                box-shadow: none;\n                padding-top: 2rem;\n                h2 {\n                    text-align: center;\n                }\n                p {\n                    margin-block-end: 2rem;\n                }\n                .icon-container {\n                    justify-content: center;\n                    img {\n                        width: 3rem;\n                    }\n                }\n            }\n        }\n    }\n    main {\n        h2 {\n            text-align: center;\n        }\n    }\n    footer {\n        .container {\n            flex-direction: column;\n            padding: 1rem;\n            .contact {\n                h2 {\n                    font-size: var(--fs-medium);\n                }\n                p {\n                    font-size: var(--fs-small);\n                    line-height: 1.5;\n                }\n                .footer-icons {\n                    justify-content: center;\n                    img {\n                        width: 3rem;\n                    }\n                }\n            }\n            .footer-img {\n                width: 100%;\n            }\n        }\n    }\n}',""]);const s=o},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,i,a){"string"==typeof n&&(n=[[null,n,void 0]]);var o={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(o[c]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);r&&o[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),i&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=i):l[4]="".concat(i)),e.push(l))}},e}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},o=[],s=0;s<n.length;s++){var c=n[s],d=r.base?c[0]+r.base:c[0],l=a[d]||0,p="".concat(d," ").concat(l);a[d]=l+1;var m=t(p),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==m)e[m].references++,e[m].updater(f);else{var u=i(f,r);r.byIndex=s,e.splice(s,0,{identifier:p,updater:u,references:1})}o.push(p)}return o}function i(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,i){var a=r(n=n||[],i=i||{});return function(n){n=n||[];for(var o=0;o<a.length;o++){var s=t(a[o]);e[s].references--}for(var c=r(n,i),d=0;d<a.length;d++){var l=t(a[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=c}}},659:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var i=void 0!==t.layer;i&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,i&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var i=e[r];if(void 0!==i)return i.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0;var r=t(72),i=t.n(r),a=t(825),o=t.n(a),s=t(659),c=t.n(s),d=t(56),l=t.n(d),p=t(540),m=t.n(p),f=t(113),u=t.n(f),h=t(993),g={};g.styleTagTransform=u(),g.setAttributes=l(),g.insert=c().bind(null,"head"),g.domAPI=o(),g.insertStyleElement=m(),i()(h.A,g),h.A&&h.A.locals&&h.A.locals;var v=t(919),x={};x.styleTagTransform=u(),x.setAttributes=l(),x.insert=c().bind(null,"head"),x.domAPI=o(),x.insertStyleElement=m(),i()(v.A,x),v.A&&v.A.locals&&v.A.locals})();