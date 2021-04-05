(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{115:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return d}));var n,r=a(4),i=a(9),o=(a(0),a(156)),l={id:"export_targets",title:"Export Targets",sidebar_label:"Export Targets"},s={unversionedId:"administering/configuring/export_targets",id:"administering/configuring/export_targets",isDocsHomePage:!1,title:"Export Targets",description:"Publishers entrusting their scholarly content to Manifold can be assured their materials can easily be exported for long-term preservation. This page describes how to establish pathways (what we call \u201cexport targets\u201d) from a Manifold instance to a preservation archive like Portico, CLOCKKS, or a university's institutional repository.",source:"@site/docs/administering/configuring/export_targets.md",slug:"/administering/configuring/export_targets",permalink:"/manifold-docusaurus/docs/administering/configuring/export_targets",editUrl:"https://github.com/ManifoldScholar/manifold-docusaurus/edit/master/docs/administering/configuring/export_targets.md",version:"current",sidebar_label:"Export Targets",sidebar:"docs",previous:{title:"Integration Settings",permalink:"/manifold-docusaurus/docs/administering/configuring/integration_settings"},next:{title:"Project Subjects",permalink:"/manifold-docusaurus/docs/administering/configuring/project_subjects"}},c=[{value:"Adding New or Editing Existing Export Targets",id:"adding-new-or-editing-existing-export-targets",children:[{value:"Name",id:"name",children:[]},{value:"Target Name Format",id:"target-name-format",children:[]},{value:"Type",id:"type",children:[]},{value:"SFTP Host",id:"sftp-host",children:[]},{value:"SFTP Port",id:"sftp-port",children:[]},{value:"SFTP Username",id:"sftp-username",children:[]},{value:"SFTP Private Key <em>(Conditional)</em>",id:"sftp-private-key-conditional",children:[]},{value:"SFTP Password <em>(Conditional)</em>",id:"sftp-password-conditional",children:[]}]},{value:"Troubleshooting",id:"troubleshooting",children:[]}],b=(n="Spec",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),Object(o.b)("div",e)}),p={toc:c};function d(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Publishers entrusting their scholarly content to Manifold can be assured their materials can easily be exported for long-term preservation. This page describes how to establish pathways (what we call \u201cexport targets\u201d) from a Manifold instance to a preservation archive like Portico, CLOCKKS, or a university's institutional repository."),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Instructions on how to export specific projects from Manifold to export targets that are configured here can be found in the Project Customizing section on the Exports page."))),Object(o.b)("p",null,"The current implantation of this feature exports individual Manifold projects on a case-by-case basis according to the ",Object(o.b)("a",{parentName:"p",href:"https://github.com/jkunze/bagitspec"},"BagIt specification"),". In this scheme all Manifold texts are converted first to the EPUB format and then included with the rest of the project's resources and metadata in a ZIP archive."),Object(o.b)("p",null,"Alternative export strategies are possible and may be explored in the future. Likewise, alternative naming formats and transfer types could be implemented, given enough interest."),Object(o.b)("p",null,"If there are components to this feature that could be improved upon for your situation, we encourage you to submit a ",Object(o.b)("a",{parentName:"p",href:"https://github.com/ManifoldScholar/manifold/issues/new?template=features.md"},"feature request on GitHub"),"."),Object(o.b)("h2",{id:"adding-new-or-editing-existing-export-targets"},"Adding New or Editing Existing Export Targets"),Object(o.b)("p",null,"To create or edit existing export targets, navigate from the ",Object(o.b)("inlineCode",{parentName:"p"},"Records")," menu in the backend to ",Object(o.b)("inlineCode",{parentName:"p"},"Export Targets"),"."),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"You will need to login with Administrator credentials in order to use this menu in the backend. For more on the roles available in Manifold, see the Accounts section."))),Object(o.b)("p",null,"Any existing export targets will be listed on this view. New targets can be created by clicking ",Object(o.b)("inlineCode",{parentName:"p"},"Add a new export target"),", which will open a drawer from the right where the pathway's name and technical details are input."),Object(o.b)("p",null,"The new target form includes the following fields, all of which are required to successfully establish the connection between Manifold and the repository."),Object(o.b)("h3",{id:"name"},"Name"),Object(o.b)("p",null,"This is an arbitrary name that a publisher can use to describe the connection in a way that makes sense for their situation. As examples, a publisher may use something like \u201cUniversity IR,\u201d \u201cOpen Emory,\u201d \u201cPortico\u201d, or \u201cCLOCKKS\u201d."),Object(o.b)("h3",{id:"target-name-format"},"Target Name Format"),Object(o.b)("p",null,"It's easy to be overwhelmed by this field at first glance, but in actuality it's far less complex or difficult to discern than the first impression suggests."),Object(o.b)("p",null,"The input in this field only determines the top-level filename of the exported archive. It ",Object(o.b)("em",{parentName:"p"},"does not")," affect the structure or content of the export in any way. In short, this gives publishers a means to use variables to ensure the exported archive matches the file naming preferences of an expecting archive."),Object(o.b)("p",null,"For the technically inclined, the available input values can be described by ",Object(o.b)("a",{parentName:"p",href:"https://github.com/ManifoldScholar/manifold/blob/d500d4e63f7821137728d261814fbc9c9ecb6575/api/app/services/export_strategies/target_name_formatter.rb#L22"},"this table"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ruby"},'attr_formatter(\n  :format_with,\n  "%d" => -> { cat "%#{fmt.width_str}s" % src.export_created_at.strftime(DATE_FORMAT) },\n  "%e" => -> { cat "%#{fmt.width_str}s" % src.normalized_extension },\n  "%i" => -> { cat "%#{fmt.width_str}s" % src.project_id },\n  "%I" => -> { cat "%#{fmt.width_str}s" % src.export_id },\n  "%n" => -> { cat "%#{fmt.width_str}s" % src.project_name },\n  "%s" => -> { cat "%#{fmt.width_str}s" % src.project_slug },\n  "%t" => -> { cat "%#{fmt.width_str}s" % src.export_created_at.strftime(TIME_FORMAT) },\n  "%u" => -> { cat "%#{fmt.width_str}d" % src.unix_timestamp }\n)\n')),Object(o.b)("p",null,"The default value for this field is ",Object(o.b)("inlineCode",{parentName:"p"},"%s.%e"),". If we look at the table, we see that ",Object(o.b)("inlineCode",{parentName:"p"},"%s")," is associated with a project's slug. And ",Object(o.b)("inlineCode",{parentName:"p"},"%e")," refers to a file extension. Which is why there is a period separating the two values in the default: ",Object(o.b)("inlineCode",{parentName:"p"},"slug.extension"),". Thus, if a project's slug is ",Object(o.b)("inlineCode",{parentName:"p"},"metagaming"),", the exported archive will be titled ",Object(o.b)("inlineCode",{parentName:"p"},"metagaming.zip"),"."),Object(o.b)("p",null,"Another common format would be ",Object(o.b)("inlineCode",{parentName:"p"},"%s-%t.%e"),": ",Object(o.b)("inlineCode",{parentName:"p"},"slug-time.extension"),"."),Object(o.b)("p",null,"Variables are letters combined with the percent character (",Object(o.b)("inlineCode",{parentName:"p"},"%"),"); the rest of the name can be described using the same characters available for file naming generally. The table below represnts the current variables available. We could conceivable add more options if needed."),Object(o.b)(b,{title:"Export Variables",mdxType:"Spec"},Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Variable"),Object(o.b)("th",{parentName:"tr",align:null},"Meaning"),Object(o.b)("th",{parentName:"tr",align:null},"Example"),Object(o.b)("th",{parentName:"tr",align:null},"Notes"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"%d")),Object(o.b)("td",{parentName:"tr",align:null},"Date"),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"2020-03-06")),Object(o.b)("td",{parentName:"tr",align:null},"This is the date ",Object(o.b)("em",{parentName:"td"},"the export")," was created.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"%e")),Object(o.b)("td",{parentName:"tr",align:null},"Extension"),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},".zip")),Object(o.b)("td",{parentName:"tr",align:null},"Presently this will always be ",Object(o.b)("inlineCode",{parentName:"td"},".zip"),". In the future we may support different formats beyond the Bagit specification.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"%i")),Object(o.b)("td",{parentName:"tr",align:null},"Project ID"),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"059a4e9d-2152-4ae5-816d-41891d4dccd1")),Object(o.b)("td",{parentName:"tr",align:null},"This is a Manifold-generated globally unique ID that is visible only in the URL (appearing after ",Object(o.b)("inlineCode",{parentName:"td"},"projects/"),") when viewing the project in the backend.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"%I")),Object(o.b)("td",{parentName:"tr",align:null},"Export ID"),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"071be7e7-f8a3-4bb3-845a-affb0f9e4c77")),Object(o.b)("td",{parentName:"tr",align:null},"A globally unique ID that Manifold generates for each export at the time of export.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"%n")),Object(o.b)("td",{parentName:"tr",align:null},"Project Name"),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"Metagaming")),Object(o.b)("td",{parentName:"tr",align:null},"The name of the Manifold project being exported. We would caution against using this variable as part of the export name. Project names often contain spaces that will likely cause problems downstream from the export.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"%s")),Object(o.b)("td",{parentName:"tr",align:null},"Project Slug"),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"metagaming")),Object(o.b)("td",{parentName:"tr",align:null},"A project's slug is the customizable URL suffix that publishers can set in project's General sidebar view.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"%t")),Object(o.b)("td",{parentName:"tr",align:null},"Time (including date)"),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"2020-03-06T220927")),Object(o.b)("td",{parentName:"tr",align:null},"The date and time the export was created in (",Object(o.b)("a",{parentName:"td",href:"https://tools.ietf.org/html/rfc3339"},"RFC 3339 format"),"). The numbers following the ",Object(o.b)("inlineCode",{parentName:"td"},"T")," represent the time according to the UTC standard.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"%u")),Object(o.b)("td",{parentName:"tr",align:null},"UNIX Timestamp"),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"1583532567")),Object(o.b)("td",{parentName:"tr",align:null},"The UNIX timestamp, which measures (in seconds) from January 1, 1970 UTC."))))),Object(o.b)("p",null,"::: note\nIt is possible in the present scheme to provide directory paths. For example, to provide some nice organization you could input ",Object(o.b)("inlineCode",{parentName:"p"},"%s/%d/%I%e")," in the field to return ",Object(o.b)("inlineCode",{parentName:"p"},"metagaming/2020-03-06/071be7e7-f8a3-4bb3-845a-affb0f9e4c77.zip"),". This could potentially allow an archive to put the export archive file in a derived directory that uses those same formatting parameters. So a publisher could use the same export target for a dozen projects that a repository could sort into different directories, rather than all just going into the same directory.\n:::"),Object(o.b)("h3",{id:"type"},"Type"),Object(o.b)("p",null,"Presently there are two dropdown options available for the type of transfer:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"SFTP with Key Authentication"),Object(o.b)("li",{parentName:"ul"},"SFTP with Password Authentication")),Object(o.b)("p",null,"These will be determined by the preservation archive. Select the appropriate based on whether the archive is supplying a key to authenticate with or a password."),Object(o.b)("p",null,"Other possibilities are viable for implementation, whether for cloud systems or institutional repositories."),Object(o.b)("h3",{id:"sftp-host"},"SFTP Host"),Object(o.b)("p",null,"This value will be supplied by the preservation archive and will likely take a format akin to ",Object(o.b)("inlineCode",{parentName:"p"},"ftp.ArchiveName.domain"),"."),Object(o.b)("h3",{id:"sftp-port"},"SFTP Port"),Object(o.b)("p",null,"The default port value, ",Object(o.b)("inlineCode",{parentName:"p"},"22"),", is the standard that most secure servers will be listening to for transfers of this kind. If the preservation archive does not specify a port for the transfer you can safely assume they are listening on port 22 and leave this field as is."),Object(o.b)("h3",{id:"sftp-username"},"SFTP Username"),Object(o.b)("p",null,"Regardless of the ",Object(o.b)("inlineCode",{parentName:"p"},"Type"),", the value of this field will remain the same and will be set up for you by the preservation archive. This field ",Object(o.b)("em",{parentName:"p"},"is")," case sensitive."),Object(o.b)("h3",{id:"sftp-private-key-conditional"},"SFTP Private Key ",Object(o.b)("em",{parentName:"h3"},"(Conditional)")),Object(o.b)("p",null,"This is a \u201cpaste-in\u201d field. Whoever maintains the preservation archive will be able to supply their key that you can then paste here to complete the configuration."),Object(o.b)("p",null,"This field only appears when the ",Object(o.b)("inlineCode",{parentName:"p"},"Type")," field above is toggled to ",Object(o.b)("inlineCode",{parentName:"p"},"SFTP with Key Authentication"),"."),Object(o.b)("h3",{id:"sftp-password-conditional"},"SFTP Password ",Object(o.b)("em",{parentName:"h3"},"(Conditional)")),Object(o.b)("p",null,"This is the password set by the preservation archive they've created to allow you to push content from your instance to their archive. This field ",Object(o.b)("em",{parentName:"p"},"is")," case sensitive."),Object(o.b)("p",null,"This field only appears when the ",Object(o.b)("inlineCode",{parentName:"p"},"Type")," field above is toggled to ",Object(o.b)("inlineCode",{parentName:"p"},"SFTP with Password Authentication"),"."),Object(o.b)("h2",{id:"troubleshooting"},"Troubleshooting"),Object(o.b)("p",null,"You cannot track the status of an export from this view. However you can get a general sense of running background processes from the Sidekiq interface available at ",Object(o.b)("inlineCode",{parentName:"p"},"/api/sidekiq"),", off of the instance's landing page (e.g., ",Object(o.b)("inlineCode",{parentName:"p"},"https://edge.manifoldapp.org/api/sidekiq"),")."),Object(o.b)("p",null,"If there are errors, they will be announced on project Export page, not here initial setup screen."))}d.isMDXComponent=!0},156:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return h}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),b=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=b(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=b(a),m=n,h=p["".concat(o,".").concat(m)]||p[m]||d[m]||i;return a?r.a.createElement(h,l(l({ref:t},c),{},{components:a})):r.a.createElement(h,l({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);