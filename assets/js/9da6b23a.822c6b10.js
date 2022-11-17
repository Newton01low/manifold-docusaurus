(self.webpackChunkmanifold_docusaurus=self.webpackChunkmanifold_docusaurus||[]).push([[4617],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),f=a,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||o;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5170:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return l},default:function(){return c}});var r=n(4034),a=n(9973),o=(n(7294),n(3905)),i={slug:"v7-update",title:"A Belated Version 7 Update"},s={permalink:"/manifold-docusaurus/blog/v7-update",source:"@site/blog/2022-10-22-v7-update.md",title:"A Belated Version 7 Update",description:"A belated update on the Version 7 release: We were so thrilled to share Manifold version 7.0 with our community in August. Our developers at Cast Iron Coding have put an incredible amount of time and care into the latest release, one of our biggest yet, which continues to build in new features and capabilities that have been requested by our users.",date:"2022-10-22T00:00:00.000Z",formattedDate:"October 22, 2022",tags:[],truncated:!1,prevItem:{title:"nextup",permalink:"/manifold-docusaurus/blog/2022/11/17/nextup"},nextItem:{title:"Manifold Community Meetup Recap",permalink:"/manifold-docusaurus/blog/community-meetup-recap"}},l=[],u={toc:l};function c(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A belated update on the Version 7 release: We were so thrilled to share Manifold version 7.0 with our community in August. Our developers at Cast Iron Coding have put an incredible amount of time and care into the latest release, one of our biggest yet, which continues to build in new features and capabilities that have been requested by our users."),(0,o.kt)("p",null,"This version of Manifold was created with significant support from The Andrew W. Mellon Foundation and the NEH\u2019s Office of Digital Humanities, which supported the OER and teaching features. We are deeply grateful to both of these organizations."),(0,o.kt)("p",null,"Some of the highlights of version 7 include:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Collections")," and Reading Group Improvements. Users can now gather content in collections to make it easier to find in the future. This feature will be especially helpful for instructors who can build a collection of content on a Manifold instance and categorize it for their students. New features in Reading Groups make it easier to view, archive, and clone reading groups, as well as to keep track of individual responses to texts.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Journals")," This release adds initial support for publishing a journal on Manifold. We\u2019ve added a new top-level \u201cJournals\u201d model that can be managed in the Manifold backend interface. We hope to build out this feature in future releases in response to user feedback.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Accessibility")," As part of our ongoing work to make Manifold usable by as many readers as possible, this release includes a number of significant accessibility improvements. Most notably, users may now use carat browsing to navigate annotations and can make annotations without using a mouse."))),(0,o.kt)("p",null,"Manifold 7.0 also includes a client refactor (moving from monolithic Sass stylesheets to the more modular CSS-in-JS) and now ships with all client application labels stored in a json localization file, making it possible to translate Manifold\u2019s interface into other languages. We are most grateful to ",(0,o.kt)("a",{parentName:"p",href:"https://www.melusinapress.lu/"},"Melusina Press")," and the ",(0,o.kt)("a",{parentName:"p",href:"https://wwwen.uni.lu/"},"University of Luxembourg")," for supporting this localization feature, and invite Manifold publishers to contribute translations.  "),(0,o.kt)("p",null,"You can read more about the ",(0,o.kt)("a",{parentName:"p",href:"https://manifoldscholar.github.io/manifold-docusaurus/docs/administering/release_notes/v7x/"},"latest release and all the relevant documentation for this release here"),"."),(0,o.kt)("p",null,"We hope you have fun experimenting with version 7\u2014and as always, please get in touch with us to share your experiences with the new release. Thanks so much for being part of our community and for all you have done to support the continuing evolution of Manifold!"))}c.isMDXComponent=!0}}]);