(self.webpackChunkore_ore_gatsbyjs_template=self.webpackChunkore_ore_gatsbyjs_template||[]).push([[49],{7228:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r},e.exports.default=e.exports,e.exports.__esModule=!0},3646:function(e,t,n){var r=n(7228);e.exports=function(e){if(Array.isArray(e))return r(e)},e.exports.default=e.exports,e.exports.__esModule=!0},9100:function(e,t,n){var r=n(9489),o=n(7067);function a(t,n,l){return o()?(e.exports=a=Reflect.construct,e.exports.default=e.exports,e.exports.__esModule=!0):(e.exports=a=function(e,t,n){var o=[null];o.push.apply(o,t);var a=new(Function.bind.apply(e,o));return n&&r(a,n.prototype),a},e.exports.default=e.exports,e.exports.__esModule=!0),a.apply(null,arguments)}e.exports=a,e.exports.default=e.exports,e.exports.__esModule=!0},9713:function(e){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},e.exports.default=e.exports,e.exports.__esModule=!0},7067:function(e){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}},e.exports.default=e.exports,e.exports.__esModule=!0},6860:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)},e.exports.default=e.exports,e.exports.__esModule=!0},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},319:function(e,t,n){var r=n(3646),o=n(6860),a=n(3323),l=n(8206);e.exports=function(e){return r(e)||o(e)||a(e)||l()},e.exports.default=e.exports,e.exports.__esModule=!0},3323:function(e,t,n){var r=n(7228);e.exports=function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},1917:function(e,t,n){"use strict";n.d(t,{H:function(){return i}});var r=n(9499),o=n(5444),a=n(7294),l=n(5414),i=function(e){var t,n,i=e.title,u=e.image,c=e.lang,s=e.description,p=e.keywords,d=(0,o.useStaticQuery)("1080184343").site,f=(0,r.useLocation)().pathname,m=(0,a.useMemo)((function(){var e,t,n,r,o,a;return{title:i||(null==d||null===(e=d.siteMetadata)||void 0===e?void 0:e.defaultTitle),description:s||(null==d||null===(t=d.siteMetadata)||void 0===t?void 0:t.defaultDescription),image:""+(u||(null==d||null===(n=d.siteMetadata)||void 0===n?void 0:n.defaultImage)),lang:c||"ja",url:""+(null==d||null===(r=d.siteMetadata)||void 0===r?void 0:r.siteUrl)+f,keywords:((null==d||null===(o=d.siteMetadata)||void 0===o?void 0:o.keywords)||[]).concat((null==p||null===(a=p.filter)||void 0===a?void 0:a.call(p,(function(e){return!!e})))||[])}}),[d,i,s,u,c,p,f]);return a.createElement(l.q,{titleTemplate:(null==d||null===(t=d.siteMetadata)||void 0===t?void 0:t.titleTemplate)||void 0},a.createElement("title",null,m.title),a.createElement("html",{lang:m.lang}),a.createElement("meta",{name:"description",content:m.description||void 0}),a.createElement("meta",{name:"image",content:m.image}),a.createElement("meta",{name:"keywords",content:m.keywords.join(",")}),a.createElement("meta",{property:"og:url",content:m.url}),a.createElement("meta",{property:"og:type",content:"article"}),a.createElement("meta",{property:"og:title",content:m.title||void 0}),a.createElement("meta",{property:"og:description",content:m.description||void 0}),a.createElement("meta",{property:"og:image",content:m.image}),a.createElement("meta",{name:"twitter:card",content:"summary"}),a.createElement("meta",{name:"twitter:creator",content:(null==d||null===(n=d.siteMetadata)||void 0===n?void 0:n.twitterUsername)||void 0}),a.createElement("meta",{name:"twitter:title",content:m.title||void 0}),a.createElement("meta",{name:"twitter:description",content:m.description||void 0}),a.createElement("meta",{name:"twitter:image",content:m.image}))}},8509:function(e,t,n){"use strict";n.r(t);var r=n(6967),o=n(1917),a=n(5444),l=n(6725),i=n(7294);t.default=function(e){var t=e.data,n=(0,r.Q)(),u=n.selectedLanguage,c=n.setLanguage,s=i.useMemo((function(){var e,n;if("en"===u&&(null!==(n=t.aboutEn)&&void 0!==n&&n.childMdx))return t.aboutEn.childMdx;return(null===(e=t.aboutJa)||void 0===e?void 0:e.childMdx)||void 0}),[u,t]);return s?i.createElement(i.Fragment,null,i.createElement(o.H,{title:"About"}),i.createElement("div",null,i.createElement("button",{onClick:function(){return c("ja")}},"ja"),i.createElement("button",{onClick:function(){return c("en")}},"en")),i.createElement(l.MDXRenderer,null,s.body),i.createElement(a.Link,{to:"/"},"Go to Home")):((0,a.navigate)("/404",{replace:!0}),i.createElement("div",null,"遷移中..."))}},6725:function(e,t,n){var r=n(3395);e.exports={MDXRenderer:r}},3395:function(e,t,n){var r=n(9100),o=n(319),a=n(9713),l=n(7316);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var c=n(7294),s=n(4983).mdx,p=n(9480).useMDXScope;e.exports=function(e){var t=e.scope,n=e.children,a=l(e,["scope","children"]),i=p(t),d=c.useMemo((function(){if(!n)return null;var e=u({React:c,mdx:s},i),t=Object.keys(e),a=t.map((function(t){return e[t]}));return r(Function,["_fn"].concat(o(t),[""+n])).apply(void 0,[{}].concat(o(a)))}),[n,t]);return c.createElement(d,u({},a))}}}]);
//# sourceMappingURL=component---src-pages-about-tsx-3f07e27bb866e44a6fe9.js.map