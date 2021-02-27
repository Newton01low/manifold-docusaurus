(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{156:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),d=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=d(n),b=a,h=p["".concat(s,".").concat(b)]||p[b]||u[b]||r;return n?i.a.createElement(h,o(o({ref:t},l),{},{components:n})):i.a.createElement(h,o({ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=b;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var l=2;l<r;l++)s[l]=n[l];return i.a.createElement.apply(null,s)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},158:function(e,t,n){"use strict";function a(e){var t,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(i&&(i+=" "),i+=n);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}t.a=function(){for(var e,t,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(i&&(i+=" "),i+=t);return i}},161:function(e,t,n){"use strict";var a=n(0),i=n(162);t.a=function(){var e=Object(a.useContext)(i.a);if(null==e)throw new Error("`useThemeContext` is used outside of `Layout` Component. See https://v2.docusaurus.io/docs/theme-classic#usethemecontext.");return e}},162:function(e,t,n){"use strict";var a=n(0),i=n.n(a).a.createContext(void 0);t.a=i},165:function(e,t,n){"use strict";var a=n(0),i=n.n(a),r=n(158),s=n(63),o=n.n(s),c=n(161);t.a=function(e){var t=void 0===e?props:e,n=t.title,a=t.subtitle,s=t.items,l=t.children,d=Object(c.a)();d.isDarkTheme,d.setLightTheme,d.setDarkTheme;return i.a.createElement("div",{className:Object(r.a)(o.a.specContainer)},i.a.createElement("div",{className:Object(r.a)(o.a.specTitle)},n,a&&i.a.createElement("span",{className:Object(r.a)(o.a.specSubtitle)},a)),s&&i.a.createElement("div",{className:Object(r.a)(o.a.specTable)},i.a.createElement("table",{width:"100%"},i.a.createElement("tbody",null,s.map((function(e,t){return i.a.createElement("tr",{key:e.key},i.a.createElement("th",{className:Object(r.a)(o.a.specKey)},e.key),i.a.createElement("td",{className:Object(r.a)(o.a.specValue)},e.value))}))))),l||null)}},80:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(4),i=n(9),r=(n(0),n(156)),s=n(165),o={id:"analytics",title:"Analytics",sidebar_label:"Analytics"},c={unversionedId:"backend/analytics",id:"backend/analytics",isDocsHomePage:!1,title:"Analytics",description:"About",source:"@site/docs/backend/analytics.md",slug:"/backend/analytics",permalink:"/manifold-docusaurus/docs/backend/analytics",editUrl:"https://github.com/ManifoldScholar/manifold-docusaurus/edit/master/docs/backend/analytics.md",version:"current",sidebar_label:"Analytics",sidebar:"docs",previous:{title:"Makers",permalink:"/manifold-docusaurus/docs/backend/makers"},next:{title:"Metadata",permalink:"/manifold-docusaurus/docs/backend/metadata"}},l=[{value:"About",id:"about",children:[]},{value:"Interface",id:"interface",children:[]},{value:"Configuring Constraints",id:"configuring-constraints",children:[]},{value:"Reports",id:"reports",children:[{value:"Visitors",id:"visitors",children:[]},{value:"Return Visits",id:"return-visits",children:[]},{value:"Average Visit",id:"average-visit",children:[]},{value:"Engagement",id:"engagement",children:[]},{value:"Followed",id:"followed",children:[]},{value:"Site Statistics",id:"site-statistics",children:[]},{value:"Most Viewed Projects",id:"most-viewed-projects",children:[]},{value:"Top Searches",id:"top-searches",children:[]}]}],d={toc:l};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"about"},"About"),Object(r.b)("p",null,"Manifold includes a built-in analytics reporting system that functions independent of Google or other third-party providers. Our approach is founded in privacy while striving to provide meaningful usage and reporting data."),Object(r.b)("p",null,"When Manifold tracks events, there is no connection in stored data between those events and specific user accounts. The system is intentionally designed so that it\u2019s impossible to track an individual user\u2019s activity. As part of that effort, the system masks IP addresses so that the IP of users accessing content is not maintained in Manifold and thus not part of any analytics reporting. Instead, Manifold stores a token to identify the visitor and their visit in a cookie. We need to store these tokens to avoid relying on a user\u2019s authenticated session to identify them."),Object(r.b)("p",null,"Manifold ",Object(r.b)("strong",{parentName:"p"},Object(r.b)("em",{parentName:"strong"},"does"))," store a user\u2019s browser, operating system, device type, and user agent so that we can, in a later iteration of this feature, report on what devices people are using."),Object(r.b)("p",null,"The system maintains three different analytics views: one for Instance-wide engagement, detailed in this section; another for engagement with specific Projects (see ",Object(r.b)("a",{parentName:"p",href:"/manifold-docusaurus/docs/backend/projects#analytics"},"Project Analytics"),"); and a final view for individual Texts and Text sections (see ",Object(r.b)("a",{parentName:"p",href:"/manifold-docusaurus/docs/backend/text#analytics"},"Text Analytics"),") ."),Object(r.b)("h2",{id:"interface"},"Interface"),Object(r.b)(s.a,{title:"Accessing this view",items:[{key:"Backend Location",value:"Main Menu \u2192 Analytics"},{key:"Required User Role",value:"Admin, Editor, or Marketeer"}],mdxType:"Spec"}),Object(r.b)("p",null,"This view displays global engagement, aggregating user activity from across the instance into eight reports, which can be configured to return information for specific periods of time."),Object(r.b)("h2",{id:"configuring-constraints"},"Configuring Constraints"),Object(r.b)("p",null,"At the top of the view, the system provides options to configure custom or pre-set date ranges for which the subsequent reports will return values."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"Start and End Date"),". These two fields are a means to manually set a specific range of time the system will report engagement."),Object(r.b)("p",{parentName:"li"},"Dates can be entered here manually in the month, date, year format (MM/DD/YYYY) or selected from the date picker that appears when your cursor lands in this field.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"Choose a Range Preset"),". This field comprises four button options that will adjust the reports to pre-defined date ranges: ",Object(r.b)("inlineCode",{parentName:"p"},"Last week"),", which corresponds to the Sunday through Saturday before the current span of days; ",Object(r.b)("inlineCode",{parentName:"p"},"Last month"),"; ",Object(r.b)("inlineCode",{parentName:"p"},"Last 7 days"),", which includes the current day as the seventh; and ",Object(r.b)("inlineCode",{parentName:"p"},"Last 30 days"),", which does likewise\u2014day 30 is the current day."))),Object(r.b)("h2",{id:"reports"},"Reports"),Object(r.b)("p",null,"Following the date constraint options, the system displays eight usage reports, some with multiple data points, reflecting user activity across the instance during the defined time span."),Object(r.b)("p",null,"At present there is no mechanism to export this data or mask from tracking the activity of specific users."),Object(r.b)("h3",{id:"visitors"},"Visitors"),Object(r.b)("p",null,"Rendered in a line chart, the ",Object(r.b)("inlineCode",{parentName:"p"},"Visitors")," report shows the number of ",Object(r.b)("strong",{parentName:"p"},Object(r.b)("em",{parentName:"strong"},"unique"))," visitors accessing any page on the instance during the set timespan."),Object(r.b)("p",null,"Visits are tied to a user\u2019s browser. Thus, a user working in one browser with multiple tabs open to the site will be counted only once. But if the same user accesses an instance from two different browsers, they will be recorded as two different visitors."),Object(r.b)("h3",{id:"return-visits"},"Return Visits"),Object(r.b)("p",null,"Manifold tracks user visits with tokens, which are tied to both the user\u2019s browser and the instance\u2019s domain."),Object(r.b)("p",null,"Each user is given two tokens when they first access an instance: a ",Object(r.b)("inlineCode",{parentName:"p"},"Visitor")," token and a ",Object(r.b)("inlineCode",{parentName:"p"},"Visit")," token. The former expires after 365 days; the latter after 1 day. "),Object(r.b)("p",null,"Manifold calculates return visits by aggregating, for the set time period, the number of expired ",Object(r.b)("inlineCode",{parentName:"p"},"Visit")," tokens for all users who have active ",Object(r.b)("inlineCode",{parentName:"p"},"Visitor")," tokens."),Object(r.b)("p",null,"There are pitfalls in this approach: Users who change browsers will not be tracked accurately; some users may have browser extensions that prevent tokens from being set, and users who close and open the site multiple times a day (using the same browser) won't be tracked as a return visitor until their ",Object(r.b)("inlineCode",{parentName:"p"},"Visit")," token expires."),Object(r.b)("h3",{id:"average-visit"},"Average Visit"),Object(r.b)("p",null,"Using the hour and minute metric, ",Object(r.b)("inlineCode",{parentName:"p"},"Average Visit")," captures the average amount of time visitors have spent on an instance. Because visits are tied to the browser, a user with multiple tabs open will be accurately recorded. But a single user who has different browsers open to the site will be tracked as two different visitors with different visit times."),Object(r.b)("h3",{id:"engagement"},"Engagement"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"Engagement")," report displays the percentage of an instance\u2019s visitors who have left an annotation, comment, or highlight on the instance. Those three actions are what Manifold considers engagement."),Object(r.b)("p",null,"When a visitor engages with the instance, the system records an event and associates it with their visit token."),Object(r.b)("p",null,"The figure in this report then is calculated by comparing visits in the set time period that have an associated engagement event against the total number of visits in that span."),Object(r.b)("h3",{id:"followed"},"Followed"),Object(r.b)("p",null,"This report looks at the number of users in the system who are following projects and provides here a rounded average for the number of projects those users are following."),Object(r.b)("h3",{id:"site-statistics"},"Site Statistics"),Object(r.b)("p",null,"The data in the ",Object(r.b)("inlineCode",{parentName:"p"},"Site Statistics")," report are ",Object(r.b)("strong",{parentName:"p"},Object(r.b)("em",{parentName:"strong"},"not"))," constrained by the set date values. Instead, this section reports the sum total for each listed category: ",Object(r.b)("inlineCode",{parentName:"p"},"Projects"),", ",Object(r.b)("inlineCode",{parentName:"p"},"Texts"),", ",Object(r.b)("inlineCode",{parentName:"p"},"Resources"),", ",Object(r.b)("inlineCode",{parentName:"p"},"Users"),", ",Object(r.b)("inlineCode",{parentName:"p"},"Annotations"),", and ",Object(r.b)("inlineCode",{parentName:"p"},"Comments"),"."),Object(r.b)("p",null,"Of particular note, the total number of Users corresponds to the number of User listings under the Records menu (see ",Object(r.b)("a",{parentName:"p",href:"/manifold-docusaurus/docs/backend/users"},"Users"),"), and the Annotations count ",Object(r.b)("strong",{parentName:"p"},Object(r.b)("em",{parentName:"strong"},"does not"))," include the number Resource Annotations that have been placed in the Reader."),Object(r.b)("p",null,"Because the system caches some information for performance reasons, the values that appear in this report are accurate to within a day."),Object(r.b)("h3",{id:"most-viewed-projects"},"Most Viewed Projects"),Object(r.b)("p",null,"Rendered in an expandable list, the ",Object(r.b)("inlineCode",{parentName:"p"},"Most Viewed Projects")," report aggregates the total number of times a Project homepage is viewed during the set timespan. The system ",Object(r.b)("strong",{parentName:"p"},Object(r.b)("em",{parentName:"strong"},"does not"))," include views of pages nested within a Project in this report."),Object(r.b)("p",null,"Each time a visitor lands on a Project\u2019s homepage, the system gives their browser a token associated with the Project. The system calculates the values it displays here by adding together the total number of tokens associated with the project from all the visitors who have accessed it."),Object(r.b)("p",null,"Data in this report are accurate to within a few moments, and titles in the list link directly to the Analytics view for the respective Project."),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"See All \u2192")," button at the bottom of the list opens a new page that displays a dedicated view of this report in a longer, paginated list, and where the time constraints can be directly adjusted."),Object(r.b)("h3",{id:"top-searches"},"Top Searches"),Object(r.b)("p",null,"Manifold caches the complete content of any search request made from the Manifold frontend. This report returns those results in a list view, ordered by the number of times each search was requested. The displayed counts are accurate to within a few moments."),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"See All \u2192")," button at the bottom of the list opens a new page that displays a dedicated view of this report in a longer, paginated list, and where the time constraints can be directly adjusted."))}p.isMDXComponent=!0}}]);