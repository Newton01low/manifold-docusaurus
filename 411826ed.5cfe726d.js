(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{121:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return f}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=i.a.createContext({}),l=function(e){var t=i.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=l(e.components);return i.a.createElement(u.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},p=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(n),p=r,f=d["".concat(a,".").concat(p)]||d[p]||g[p]||o;return n?i.a.createElement(f,s(s({ref:t},u),{},{components:n})):i.a.createElement(f,s({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var u=2;u<o;u++)a[u]=n[u];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},73:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return a})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(2),i=(n(0),n(121));const o={id:"storage",title:"Storage",sidebar_label:"Storage"},a={unversionedId:"administering/storage",id:"administering/storage",isDocsHomePage:!1,title:"Storage",description:"Using Local Filesystem",source:"@site/docs/administering/storage.md",slug:"/administering/storage",permalink:"/manifold-docusaurus/docs/administering/storage",editUrl:"https://github.com/ManifoldScholar/manifold-docusaurus/edit/master/docs/administering/storage.md",version:"current",sidebar_label:"Storage",sidebar:"docs",previous:{title:"Managing Services",permalink:"/manifold-docusaurus/docs/administering/managing_services"},next:{title:"Updating Instructions",permalink:"/manifold-docusaurus/docs/administering/updating/updating_instructions"}},s=[{value:"Using Local Filesystem",id:"using-local-filesystem",children:[]},{value:"Using Google Cloud Storage",id:"using-google-cloud-storage",children:[]},{value:"Using AWS",id:"using-aws",children:[]}],c={rightToc:s};function u({components:e,...t}){return Object(i.b)("wrapper",Object(r.a)({},c,t,{components:e,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"using-local-filesystem"},"Using Local Filesystem"),Object(i.b)("h2",{id:"using-google-cloud-storage"},"Using Google Cloud Storage"),Object(i.b)("h2",{id:"using-aws"},"Using AWS"))}u.isMDXComponent=!0}}]);