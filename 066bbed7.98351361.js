(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{121:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return b}));var n=r(0),o=r.n(n);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(r),f=n,b=p["".concat(i,".").concat(f)]||p[f]||d[f]||s;return r?o.a.createElement(b,a(a({ref:t},l),{},{components:r})):o.a.createElement(b,a({ref:t},l))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,i=new Array(s);i[0]=f;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:n,i[1]=a;for(var l=2;l<s;l++)i[l]=r[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},59:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return a})),r.d(t,"default",(function(){return l}));var n=r(2),o=(r(0),r(121));const s={id:"tests",title:"Tests",sidebar_label:"Tests"},i={unversionedId:"developers/tests",id:"developers/tests",isDocsHomePage:!1,title:"Tests",description:"Client Tests",source:"@site/docs/developers/tests.md",slug:"/developers/tests",permalink:"/manifold-docusaurus/docs/developers/tests",editUrl:"https://github.com/ManifoldScholar/manifold-docusaurus/edit/master/docs/developers/tests.md",version:"current",sidebar_label:"Tests",sidebar:"docs",previous:{title:"Contributing to Manifold",permalink:"/manifold-docusaurus/docs/developers/contributing"},next:{title:"API",permalink:"/manifold-docusaurus/docs/developers/api"}},a=[{value:"Client Tests",id:"client-tests",children:[]},{value:"API Tests",id:"api-tests",children:[]}],c={rightToc:a};function l({components:e,...t}){return Object(o.b)("wrapper",Object(n.a)({},c,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"client-tests"},"Client Tests"),Object(o.b)("h2",{id:"api-tests"},"API Tests"))}l.isMDXComponent=!0}}]);