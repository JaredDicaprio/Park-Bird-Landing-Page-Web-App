(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"97Is":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/404",function(){return n("w2l6")}])},GPKm:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n("q1tI"),o=n.n(r),i=n("GOVm"),a=o.a.createElement,c=function(e){var t=e.children,n=e.headerDark,c=void 0!==n&&n,s=e.footerDark,l=void 0!==s&&s,u=Object(r.useContext)(i.b);return Object(r.useEffect)((function(){c?u.goHeaderDark():u.goHeaderLight(),l?u.goFooterDark():u.goFooterLight()}),[u,c,l]),a(o.a.Fragment,null,t)}},YFqc:function(e,t,n){e.exports=n("cTJO")},cLaP:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAuCAMAAABZAGpeAAAAAXNSR0IB2cksfwAAAFRQTFRFAAAA70E38UA38EA38EA38EA38EA38EA370A370Aw70A28UA270A470A470A470A38EA38EA370A48EA370A28UA48EA28UA38UA370A18UA38EA3gJgYWwAAABx0Uk5TAE+fv+//z69vEF9/IEBgcODfgPBQoMCwkDCP0JgJ0X4AAAFqSURBVEjHlVTLgoMwCKQatGx9rMbYZvP//7mHaJsEUMtxnMkAAgB73KraIDbtnd4Q0E9bI5q6ukER9DD4jqrb0P6DmQel/D6hI6IZIlxnYP/h37GIvjRARMRh548l/1cwSBTlQ/sHjkdnMlcNECcCgJnBs2YQPzEDS5oBogFYvjFAXMAxrNMNEB2sHDowwJWXcGiAE5TIM/bUKQIEWwDtNmQvmW95DY2PikGpgXubZVNYsUvSQ39R4QXFACQZ17EQH9gXAniK3YuFUBB6qPyiOOL0FOY7yIqKAACaDAtHU2CBz/621qsyZuytddtprwwy0JRDfr8Cs5LRS1oUUOp2bLdCcsi8lFFxHaxPT98oZNTmyJgfV3c2ZK68xkUZS5cnFKi8353NM8p31HbAIivcjcofSCNNelbutqawzRW+uvgvUMNpU/iN4pAvKE74THHKLxQX+FmvZrgUw2n/FcVlfjyS1sMX4UNQ+P8qviSTytZ4ogAAAABJRU5ErkJggg=="},cTJO:function(e,t,n){"use strict";var r=n("lwsE"),o=n("W8MJ"),i=n("7W2i"),a=n("a1gu"),c=n("Nsbk");function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var o=c(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return a(this,n)}}var l=n("TqRt"),u=n("284h");t.__esModule=!0,t.default=void 0;var f,p=u(n("q1tI")),d=n("QmWs"),h=n("g/15"),g=l(n("nOHt")),v=n("elyg");function A(e){return e&&"object"===typeof e?(0,h.formatWithValidation)(e):e}var m=new Map,y=window.IntersectionObserver,w={};function b(){return f||(y?f=new y((function(e){e.forEach((function(e){if(m.has(e.target)){var t=m.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(f.unobserve(e.target),m.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0)}var x=function(e){i(n,e);var t=s(n);function n(e){var o;return r(this,n),(o=t.call(this,e)).p=void 0,o.cleanUpListeners=function(){},o.formatUrls=function(e){var t=null,n=null,r=null;return function(o,i){if(r&&o===t&&i===n)return r;var a=e(o,i);return t=o,n=i,r=a,a}}((function(e,t){return{href:(0,v.addBasePath)(A(e)),as:t?(0,v.addBasePath)(A(t)):t}})),o.linkClicked=function(e){var t=e.currentTarget,n=t.nodeName,r=t.target;if("A"!==n||!(r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var i=o.formatUrls(o.props.href,o.props.as),a=i.href,c=i.as;if(function(e){var t=(0,d.parse)(e,!1,!0),n=(0,d.parse)((0,h.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===n.protocol&&t.host===n.host}(a)){var s=window.location.pathname;a=(0,d.resolve)(s,a),c=c?(0,d.resolve)(s,c):a,e.preventDefault();var l=o.props.scroll;null==l&&(l=c.indexOf("#")<0),g.default[o.props.replace?"replace":"push"](a,c,{shallow:o.props.shallow}).then((function(e){e&&l&&(window.scrollTo(0,0),document.body.focus())}))}}},o.p=!1!==e.prefetch,o}return o(n,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as),n=t.href,r=t.as,o=(0,d.resolve)(e,n);return[o,r?(0,d.resolve)(e,r):o]}},{key:"handleRef",value:function(e){var t=this;this.p&&y&&e&&e.tagName&&(this.cleanUpListeners(),w[this.getPaths().join("%")]||(this.cleanUpListeners=function(e,t){var n=b();return n?(n.observe(e),m.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}m.delete(e)}):function(){}}(e,(function(){t.prefetch()}))))}},{key:"prefetch",value:function(e){if(this.p){var t=this.getPaths();g.default.prefetch(t[0],t[1],e).catch((function(e){0})),w[t.join("%")]=!0}}},{key:"render",value:function(){var e=this,t=this.props.children,n=this.formatUrls(this.props.href,this.props.as),r=n.href,o=n.as;"string"===typeof t&&(t=p.default.createElement("a",null,t));var i=p.Children.only(t),a={ref:function(t){e.handleRef(t),i&&"object"===typeof i&&i.ref&&("function"===typeof i.ref?i.ref(t):"object"===typeof i.ref&&(i.ref.current=t))},onMouseEnter:function(t){i.props&&"function"===typeof i.props.onMouseEnter&&i.props.onMouseEnter(t),e.prefetch({priority:!0})},onClick:function(t){i.props&&"function"===typeof i.props.onClick&&i.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==i.type||"href"in i.props)||(a.href=o||r),p.default.cloneElement(i,a)}}]),n}(p.Component);t.default=x},nn5T:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var r=n("Ff2n"),o=n("q1tI"),i=n.n(o),a=n("vOnD"),c=n("7Qib"),s=i.a.createElement,l=a.c.div.withConfig({displayName:"Section__DivStyled",componentId:"sc-8y09dg-0"})(["padding:50px 0;@media ","{padding:75px 0;}@media ","{padding:100px 0;}"],c.c.md,c.c.lg),u=Object(a.c)(l).withConfig({displayName:"Section__DivStyledInside",componentId:"sc-8y09dg-1"})(["padding:50px 25px;@media ","{padding:70px 60px;}@media ","{padding:80px 70px;}"],c.c.md,c.c.lg),f=function(e){var t=e.children,n=e.inside,o=Object(r.a)(e,["children","inside"]);return s(n?u:l,o," ",t)}},w2l6:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),o=n.n(r),i=n("YFqc"),a=n.n(i),c=n("7vrA"),s=n("vOnD"),l=n("ufqH"),u=n("nn5T"),f=n("GPKm"),p=n("cLaP"),d=n.n(p),h=n("Xjy0"),g=o.a.createElement,v=s.c.div.withConfig({displayName:"sc-404__ContentIcon",componentId:"sc-1x5alm8-0"})(["width:118px;height:118px;background-color:",";border-radius:500px;display:inline-flex;align-items:center;justify-content:center;margin-bottom:48px;"],(function(e){var t=e.theme;return Object(l.b)(t.colors.primary,.1)})),A=s.c.button.withConfig({displayName:"sc-404__ButtonStyled",componentId:"sc-1x5alm8-1"})(["min-width:250px;min-height:60px;border-radius:10px;border:",";color:",";font-size:21px;font-weight:500;letter-spacing:-0.66px;display:inline-flex;align-items:center;justify-content:center;background:transparent;box-shadow:none;outline:none;padding-left:20px;padding-right:20px;transition:0.4s;&:hover,&:focus{background:",";color:",";box-shadow:none;outline:none;}"],(function(e){var t=e.theme;return"1px solid ".concat(t.colors.primary)}),(function(e){return e.theme.colors.primary}),(function(e){return e.theme.colors.primary}),(function(e){return e.theme.colors.light}));t.default=function(){return g(o.a.Fragment,null,g(f.a,{footerDark:!0},g(u.a,null,g("div",{className:"pt-5"}),g(c.a,null,g("div",{className:"text-center"},g(v,null,g("img",{src:d.a,alt:"",className:"img-fluid"})),g("div",null,g(h.n,{variant:"hero"},"404 Error!"),g(h.m,null,"The page you are looking for is not available or doesn\u2019t",g("br",{className:"d-none d-md-block"})," belong to this website!")),g("div",{className:"mt-5"},g(a.a,{href:"/"},g("a",null,g(A,null,"Go back to home")))))))))}}},[["97Is",0,1,2,3]]]);