(this.webpackJsonpgame_world=this.webpackJsonpgame_world||[]).push([[0],{15:function(e,t,a){"use strict";t.a=a.p+"static/media/default.8b644eb3.svg"},16:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(15),c=function(e,t){return e&&e.replace("media/","media/resize/".concat(t,"/-/"))||n.a}},21:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(4),c=a.n(n),r=a(7),s="key=".concat("e9e19ea1abd24dd9ab2b9ed510a53a60"),i=function(){var e=Object(r.a)(c.a.mark((function e(t){var a,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.rawg.io/api/games/".concat(t,"?").concat(s));case 2:return a=e.sent,e.next=5,a.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},30:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(22),s=a.n(r),i=(a(30),a(12)),o=a(4),u=a.n(o),l=a(7),d=a(9),j=a.p+"static/media/Logo.0d1db6e9.svg",b=a(14),m=a(23),_=a(43),p="key=".concat("e9e19ea1abd24dd9ab2b9ed510a53a60"),f=function(){var e=Object(l.a)(u.a.mark((function e(t){var a,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),console.log("https://api.rawg.io/api/games?".concat(p,"&search=").concat(t.toLowerCase(),"&page_size=20")),e.next=4,fetch("https://api.rawg.io/api/games?".concat(p,"&search=").concat(t.toLowerCase(),"&page_size=20"));case 4:return a=e.sent,e.next=7,a.json();case 7:return n=e.sent,e.abrupt("return",n);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=a(15),h=a(16),v=a(10),x=a(1),g=function(e){return Object(x.jsx)(v.b,{to:"/game/".concat(e.id),children:Object(x.jsxs)("li",{className:"listItem",children:[Object(x.jsx)("img",{src:Object(h.a)(e.background_image,200),onError:function(e){e.target.onerror=null,e.target.src=O.a},alt:"poster",className:"listItem__img"}),Object(x.jsx)("div",{className:"listItem__name",children:e.name}),Object(x.jsx)("div",{className:"listItem__release",children:e.released&&e.released.toString().slice(0,4)||"--------"})]})})},w=function(){var e,t,a=Object(n.useState)(""),c=Object(d.a)(a,2),r=c[0],s=c[1],o=Object(_.a)(r,700),p=Object(d.a)(o,1)[0],O=Object(n.useState)(),h=Object(d.a)(O,2),w=h[0],N=h[1],k=Object(n.useRef)(null),y=Object(n.useState)(!0),E=Object(d.a)(y,2),I=E[0],L=E[1];return e=k,t=L,Object(n.useEffect)((function(){var a=function(a){e.current&&!e.current.contains(a.target)&&t(!1)};return window.addEventListener("mousedown",a),window.addEventListener("touchstart",a),function(){window.removeEventListener("mousedown",a),window.removeEventListener("touchstart",a)}}),[e,t]),Object(n.useEffect)((function(){""!==p&&function(){var e=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f(p);case 2:t=e.sent,N(t.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[p]),Object(n.useEffect)((function(){""===r&&N(void 0)}),[r]),Object(x.jsxs)("div",{className:"navbar",children:[Object(x.jsx)(v.b,{to:"/",children:Object(x.jsx)("img",{src:j,alt:"Logo",className:"navbar__logo"})}),Object(x.jsxs)("div",{className:"navbar__searchBox",ref:k,onClick:function(){return L(!0)},children:[Object(x.jsx)("input",{id:"search",type:"text",placeholder:"Type a game title...",className:"navbar__searchBox__input",value:r,onChange:function(e){return s(e.target.value)}}),Object(x.jsx)("label",{htmlFor:"search",className:"navbar__searchBox__icon",children:Object(x.jsx)(b.Icon,{icon:m.a,className:"navbar__searchBox__icon__svg"})}),I&&w&&Object(x.jsx)("div",{className:I?"navbar__searchBox__results":"navbar__searchBox__results--hidden",children:Object(x.jsx)("ul",{className:"navbar__searchBox__results__list",children:null===w||void 0===w?void 0:w.map((function(e){return Object(n.createElement)(g,Object(i.a)(Object(i.a)({},e),{},{key:e.id}))}))})})]})]})},N=a(21),k=a(25),y=function(e){var t=Object(n.useState)(),a=Object(d.a)(t,2),c=a[0],r=a[1];return Object(n.useEffect)((function(){(function(){var t=Object(l.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=r,t.next=3,Object(N.a)(e.id);case 3:t.t1=t.sent,(0,t.t0)(t.t1);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[e.id]),Object(x.jsxs)("div",{className:"game",children:[Object(x.jsxs)(v.b,{to:"/game/".concat(e.id),className:"game__top",children:[Object(x.jsx)("div",{className:"game__top__imgDiv",children:Object(x.jsx)("img",{src:Object(h.a)(e.background_image,420),alt:"background",className:"game__top__imgDiv__img"})}),Object(x.jsxs)("div",{className:"game__top__rating",children:[Object(x.jsx)(b.Icon,{icon:k.a,className:"game__top__rating__star"}),Object(x.jsxs)("div",{className:"game__top__rating__text",children:[e.rating.toFixed(2),"/5"]})]}),Object(x.jsx)("div",{className:"game__top__name",children:Object(x.jsx)("div",{className:"game__top__name__text",children:e.name})}),Object(x.jsx)("div",{className:"game__top__platforms",children:e.platforms.map((function(e){return Object(x.jsx)("div",{className:"game__top__platforms__platform",children:e.platform.name},e.platform.name)}))})]}),Object(x.jsx)("div",{className:"game__bot",children:Object(x.jsx)("div",{className:"game__bot__text",children:null===c||void 0===c?void 0:c.description_raw})})]})},E="key=".concat("e9e19ea1abd24dd9ab2b9ed510a53a60"),I=function(){var e=Object(l.a)(u.a.mark((function e(){var t,a,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.rawg.io/api/games/lists/main?".concat(E));case 2:return t=e.sent,e.next=5,t.json();case 5:return a=e.sent,n=a.results.filter((function(e,t,a){return a.findIndex((function(t){return t.id===e.id}))===t})),e.abrupt("return",n);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),L=a(2),B=Object(n.lazy)((function(){return Promise.all([a.e(3),a.e(4)]).then(a.bind(null,61))})),S=function(){var e=Object(n.useState)(),t=Object(d.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){(function(){var e=Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=r,e.next=3,I();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(x.jsx)("div",{children:Object(x.jsxs)(v.a,{basename:"/GameWorld",children:[Object(x.jsx)(w,{}),Object(x.jsxs)(L.c,{children:[Object(x.jsx)(L.a,{exact:!0,path:"/",children:Object(x.jsx)("div",{className:"app__gameList",children:null===a||void 0===a?void 0:a.map((function(e){return Object(n.createElement)(y,Object(i.a)(Object(i.a)({},e),{},{key:e.id}))}))})}),Object(x.jsx)(c.a.Suspense,{fallback:"loading",children:Object(x.jsx)(L.a,{exact:!0,path:"/game/:gameID",children:Object(x.jsx)(B,{})})})]})]})})};s.a.render(Object(x.jsx)(c.a.StrictMode,{children:Object(x.jsx)(S,{})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.009722d6.chunk.js.map