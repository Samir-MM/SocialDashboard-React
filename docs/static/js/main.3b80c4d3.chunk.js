(this["webpackJsonpsocial-dashboard"]=this["webpackJsonpsocial-dashboard"]||[]).push([[0],[,,,,,,,,,function(e,s,c){},function(e,s,c){},function(e,s,c){},function(e,s,c){},,function(e,s,c){},function(e,s,c){},function(e,s,c){},function(e,s,c){},function(e,s,c){"use strict";c.r(s);var a=c(1),t=c.n(a),n=c(3),i=c.n(n),r=(c(9),c(10),c(11),c(12),c(0));var o=function(){var e=Object(a.useRef)(null);return Object(a.useEffect)((function(){window.matchMedia("(prefers-color-scheme: dark)").matches&&e.current.setAttribute("checked",!0)}),[e]),Object(r.jsxs)("div",{className:"toggle toggle--daynight",children:[Object(r.jsx)("input",{ref:e,onChange:function(){e.current.checked?(document.body.classList.remove("is-light-mode"),document.body.classList.add("is-dark-mode")):(document.body.classList.remove("is-dark-mode"),document.body.classList.add("is-light-mode"))},type:"checkbox",id:"toggle--daynight",className:"toggle--checkbox"}),Object(r.jsx)("label",{className:"toggle--btn",for:"toggle--daynight",children:Object(r.jsx)("span",{className:"toggle--feature"})})]})};var l=function(){return Object(r.jsx)("header",{className:"header",children:Object(r.jsx)("div",{className:"wrapper",children:Object(r.jsxs)("div",{className:"header-grid",children:[Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{children:"Social Media Dashboard"}),Object(r.jsx)("p",{className:"header-total",children:"Total Followers: 23, 004"})]}),Object(r.jsx)(o,{})]})})})},d=c(4);c(14);var j=function(e){var s=e.username,c=e.followers,a=e.todayFollowers,t=e.icon,n=e.name,i="card ".concat(n);return Object(r.jsxs)("article",{className:i,children:[Object(r.jsxs)("p",{className:"card-title",children:[Object(r.jsx)("img",{src:t,alt:""}),s]}),Object(r.jsxs)("p",{className:"card-followers",children:[Object(r.jsx)("span",{className:"card-followers-number",children:c}),Object(r.jsx)("span",{className:"card-followers-title",children:"Followers"})]}),Object(r.jsxs)("p",{className:"card-today",children:[Object(r.jsx)("img",{src:"images/icon-up.svg",alt:""}),a," Today"]})]})},m=(c(15),[{username:"@Samir Montalvan",id:1,followers:1583,todayFollowers:12,icon:"images/icon-facebook.svg",name:"twitter"},{username:"@Samir Montalvan",id:2,followers:"28k",todayFollowers:25,icon:"images/icon-twitter.svg",name:"facebook"},{username:"@Samir Montalvan",id:3,followers:"6k",todayFollowers:222,icon:"images/icon-instagram.svg",name:"instagram"},{username:"@Samir Montalvan",id:4,followers:"12k",todayFollowers:-42,icon:"images/icon-youtube.svg",name:"youtube"}]);var g=function(){return Object(r.jsx)("section",{className:"top-cards",children:Object(r.jsx)("div",{className:"wrapper",children:Object(r.jsx)("div",{className:"grid",children:m.map((function(e){return Object(r.jsx)(j,Object(d.a)({},e),e.id)}))})})})};c(16);var b=function(e){var s=e.icon,c=e.growth,a=e.pageViews;return Object(r.jsxs)("div",{className:"card-small",children:[Object(r.jsx)("p",{className:"card-small-views",children:"Page Views"}),Object(r.jsx)("p",{className:"card-small-icon",children:Object(r.jsx)("img",{src:s,alt:""})}),Object(r.jsx)("p",{className:"card-small-number",children:a}),Object(r.jsx)("p",{className:"card-small-percentage",children:Object(r.jsxs)("span",{children:[Object(r.jsx)("img",{src:"images/icon-up.svg",alt:""}),c,"%"]})})]})},h=(c(17),[{icon:"images/icon-facebook.svg",pageViews:"87",growth:3,key:2257},{icon:"images/icon-instagram.svg",pageViews:"52",growth:1375,key:3},{icon:"images/icon-twitter.svg",pageViews:"5642",growth:9,key:4},{icon:"images/icon-youtube.svg",pageViews:"117",growth:303,key:5}]);var u=function(){return Object(r.jsx)("section",{className:"overview",children:Object(r.jsxs)("div",{className:"wrapper",children:[Object(r.jsx)("h2",{children:"Overview - Today"}),Object(r.jsx)("div",{className:"grid",children:h.map((function(e){var s=e.icon,c=e.pageViews,a=e.growth,t=e.key;return Object(r.jsx)(b,{icon:s,pageViews:c,growth:a},t)}))})]})})};var O=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(l,{}),Object(r.jsx)(g,{}),Object(r.jsx)(u,{})]})},x=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,19)).then((function(s){var c=s.getCLS,a=s.getFID,t=s.getFCP,n=s.getLCP,i=s.getTTFB;c(e),a(e),t(e),n(e),i(e)}))};i.a.render(Object(r.jsx)(t.a.StrictMode,{children:Object(r.jsx)(O,{})}),document.getElementById("root")),x()}],[[18,1,2]]]);
//# sourceMappingURL=main.3b80c4d3.chunk.js.map