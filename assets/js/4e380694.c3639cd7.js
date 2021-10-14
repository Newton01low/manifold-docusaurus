(self.webpackChunkmanifold_docusaurus=self.webpackChunkmanifold_docusaurus||[]).push([[8873],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return d},kt:function(){return u}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(r),u=n,f=p["".concat(l,".").concat(u)]||p[u]||h[u]||i;return r?a.createElement(f,o(o({ref:t},d),{},{components:r})):a.createElement(f,o({ref:t},d))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},5281:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return o},metadata:function(){return s},toc:function(){return l},default:function(){return d}});var a=r(4034),n=r(9973),i=(r(7294),r(3905)),o={slug:"fall21-accessibility-sprint",title:"Fall 2021 Accessibility Sprint!"},s={permalink:"/manifold-docusaurus/blog/fall21-accessibility-sprint",source:"@site/blog/2021-10-14-accessibility-sprint.md",title:"Fall 2021 Accessibility Sprint!",description:"At Manifold, we treat accessibility as a top-tier concern. Our developers at Cast Iron Coding are accessibility experts who design and develop the application with accessible functionality foremost in mind. In addition to the extensive testing they do in-house using screen-readers and browser add-ons, we\u2019ve had the benefit of collaborating with the University of Washington\u2019s library, press, and accessibility office over the past three years. The Washington team has performed an ongoing audit of Manifold over that time, and our two groups meet regularly to discuss new ideas and strategies for making the application even more performant for readers and content creators using assistive technologies.",date:"2021-10-14T00:00:00.000Z",formattedDate:"October 14, 2021",tags:[],truncated:!1,nextItem:{title:"Manifold v6.0 is available now!",permalink:"/manifold-docusaurus/blog/manifold-v6"}},l=[],c={toc:l};function d(e){var t=e.components,r=(0,n.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"At Manifold, we treat accessibility as a top-tier concern. Our developers at ",(0,i.kt)("a",{parentName:"p",href:"https://castironcoding.com/"},"Cast Iron Coding")," are accessibility experts who design and develop the application with accessible functionality foremost in mind. In addition to the extensive testing they do in-house using screen-readers and browser add-ons, we\u2019ve had the benefit of collaborating with the University of Washington\u2019s ",(0,i.kt)("a",{parentName:"p",href:"https://www.lib.washington.edu/"},"library"),", ",(0,i.kt)("a",{parentName:"p",href:"https://uwapress.uw.edu/"},"press"),", and ",(0,i.kt)("a",{parentName:"p",href:"https://www.washington.edu/doit/accessible-technology-services-0"},"accessibility office")," over the past three years. The Washington team has performed an ongoing audit of Manifold over that time, and our two groups meet regularly to discuss new ideas and strategies for making the application even more performant for readers and content creators using assistive technologies. "),(0,i.kt)("p",null,"Born out of this collaboration, we have recently been engaged in an accessibility sprint that has involved the following:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"We reworked the user notification preferences interface for better screen reader UX. Dana\u2019s ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/ManifoldScholar/manifold/pull/3079/commits/0aad0424cd0235f7fe6346775f9d3b02339258cf"},"extended commit message")," on this issue is indicative the care and expertise we bring to accessibility concerns."),(0,i.kt)("li",{parentName:"ol"},"We refactored all collapsible content on the site to follow the correct ARIA design pattern. These are commonly used in the backend to add search filters and sorting options, so this was a widespread change. This will resolve ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/ManifoldScholar/manifold/issues/2755"},"issue #2755"),"."),(0,i.kt)("li",{parentName:"ol"},"We added missing keyboard interactions to the Reading Group homepage editor. This is an improvement to the OER work, which currently exists in our main branch."),(0,i.kt)("li",{parentName:"ol"},"We added missing keyboard interactions to project text sorting. We already had keyboard interactions on our drag and drop lists in the backend in most cases. However, for the specific case where an entity can be dragged and dropped between two distinct lists (such as moving a text from one text category to another rather than within a category), we did not have keyboard controls. These lists, and all drag and drop lists now have full keyboard controls (including the new drag and drop lists for managing content in reading groups). This refactor resolves ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/ManifoldScholar/manifold/issues/2678"},"issue #2678"),"."),(0,i.kt)("li",{parentName:"ol"},"We added alt text to project resources, which resolves ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/ManifoldScholar/manifold/issues/2428"},"issue #2428"),"."),(0,i.kt)("li",{parentName:"ol"},"We applied accessible modal dialog patterns to all drawers and overlays in Manifold. This change resolved ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/ManifoldScholar/manifold/issues/2434"},"issue #2434"),". It also resolved ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/ManifoldScholar/manifold/issues/2754"},"issue #2754"),". ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/ManifoldScholar/manifold/issues/2425"},"Issue #2425")," should also be resolved by this revision."),(0,i.kt)("li",{parentName:"ol"},"We resolved a header hierarchy issue in the reader. This resolves ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/ManifoldScholar/manifold/issues/2757"},"issue #2757"),"."),(0,i.kt)("li",{parentName:"ol"},"We fixed a tab index issue in search results that made it difficult for keyboard users to navigate the content. This will resolve ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/ManifoldScholar/manifold/issues/2969"},"issue #2969")),(0,i.kt)("li",{parentName:"ol"},"We fixed a bug that had been introduced, which prevented some notifications from being rendered when certain backend forms were submitted. This error led to the problem reported in ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/ManifoldScholar/manifold/issues/2559"},"issue #2559"),", which was about the lack of screen reader notification when projects are saved."),(0,i.kt)("li",{parentName:"ol"},"We added screen reader support to ingestion, which resolves ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/ManifoldScholar/manifold/issues/2743"},"issue #2743"),"."),(0,i.kt)("li",{parentName:"ol"},"We refactored the resource card markup with a focus on removing nested interactive buttons. We also improved link and button text for screen readers. This resolves ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/ManifoldScholar/manifold/issues/2732"},"issue #2732"),"."),(0,i.kt)("li",{parentName:"ol"},"We're working on supporting annotation with caret browsing. This work is currently in ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/ManifoldScholar/manifold/pull/3086"},"PR #3086"),". This will resolve ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/ManifoldScholar/manifold/issues/2326"},"issue #2326")," when it's finished.")),(0,i.kt)("p",null,"All of this work will eventually be part of the version 7 release. For an up-to-date look at our work on accessibility concerns, ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/orgs/ManifoldScholar/projects/1"},"we maintain this dashboard on Github"),"."))}d.isMDXComponent=!0}}]);