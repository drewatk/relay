"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[31591],{3905:(e,t,a)=>{a.r(t),a.d(t,{MDXContext:()=>s,MDXProvider:()=>d,mdx:()=>h,useMDXComponents:()=>u,withMDXComponents:()=>c});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},i.apply(this,arguments)}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function m(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){return function(t){var a=u(t.components);return n.createElement(e,i({},t,{components:a}))}},u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=m(e,["components","mdxType","originalType","parentName"]),c=u(a),d=r,y=c["".concat(o,".").concat(d)]||c[d]||p[d]||i;return a?n.createElement(y,l(l({ref:t},s),{},{components:a})):n.createElement(y,l({ref:t},s))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=y;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}y.displayName="MDXCreateElement"},68629:(e,t,a)=>{a.d(t,{Z:()=>p});var n=a(39960),r=a(86341),i=a(67294);function o(){var e=window.encodeURI(JSON.stringify({title:"Feedback about "+window.location.pathname,description:"**!!! Required !!!**\n\nPlease modify the task description to let us know how the docs can be improved.\n\n**Please do not ask support questions via this form! Instead, ask in fburl.com/relay_support**",tag_ids:{add:[0xac96423e5b680,0x64079768ac750]}}));window.open("https://www.internalfb.com/tasks/?n="+e)}function l(e){var t=e.children;return i.createElement("div",{className:"docsRating",id:"docsRating"},i.createElement("hr",null),t)}var m=function(){var e=i.useState(!1),t=e[0],a=e[1],n=function(e){a(!0),function(e){window.ga&&window.ga("send",{hitType:"event",eventCategory:"button",eventAction:"feedback",eventValue:e})}(e)};return t?"Thank you for letting us know!":i.createElement(i.Fragment,null,"Is this page useful?",i.createElement("svg",{className:"i_thumbsup",alt:"Like",id:"docsRating-like",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return n(1)}},i.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})),i.createElement("svg",{className:"i_thumbsdown",alt:"Dislike",id:"docsRating-dislike",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return n(0)}},i.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})))},s=function(){return i.createElement("p",null,"Let us know how these docs can be improved by",i.createElement("a",{className:"button",role:"button",tabIndex:0,onClick:o},"Filing a task"))},c=function(){return i.createElement("p",null,"Help us make the site even better by"," ",i.createElement(n.default,{to:"https://www.surveymonkey.com/r/FYC9TCJ"},"answering a few quick questions"),".")},u=function(){return i.createElement(l,null,i.createElement(s,null),i.createElement(m,null),i.createElement(c,null))},d=function(){return i.createElement(l,null,i.createElement(m,null),i.createElement(c,null))};const p=function(){return(0,r.fbContent)({internal:i.createElement(u,null),external:i.createElement(d,null)})}},74629:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>u,toc:()=>p});var n=a(83117),r=a(80102),i=(a(67294),a(3905)),o=(a(44996),a(68629)),l=a(86341),m=["components"],s={id:"learning-resources",title:"Community Learning Resources",slug:"/community-learning-resources/"},c=void 0,u={unversionedId:"community/learning-resources",id:"community/learning-resources",title:"Community Learning Resources",description:"Guides and articles:",source:"@site/docs/community/learning-resources.md",sourceDirName:"community",slug:"/community-learning-resources/",permalink:"/docs/next/community-learning-resources/",draft:!1,editUrl:"https://github.com/facebook/relay/tree/main/website/docs/community/learning-resources.md",tags:[],version:"current",frontMatter:{id:"learning-resources",title:"Community Learning Resources",slug:"/community-learning-resources/"},sidebar:"docs",previous:{title:"Videos",permalink:"/docs/next/principles-and-architecture/videos/"},next:{title:"Glossary",permalink:"/docs/next/glossary/"}},d={},p=[{value:"Guides and articles:",id:"guides-and-articles",level:2},{value:"Relay example projects",id:"relay-example-projects",level:2},{value:"Learn basics",id:"learn-basics",level:2},{value:"About Relay Store",id:"about-relay-store",level:2},{value:"Network Layer",id:"network-layer",level:2},{value:"Relay Configuration",id:"relay-configuration",level:2},{value:"Miscellaneous",id:"miscellaneous",level:2}],y={toc:p};function h(e){var t=e.components,a=(0,r.Z)(e,m);return(0,i.mdx)("wrapper",(0,n.Z)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("h2",{id:"guides-and-articles"},"Guides and articles:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"https://medium.com/entria/relay-modern-argumentdefinitions-d53769dbb95d"},"How to use @argumentsDefinitions to define local variables to your fragments")," (by Entria)"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"https://medium.com/entria/wrangling-the-client-store-with-the-relay-modern-updater-function-5c32149a71ac"},"Deep Dive of Updater Relay Store function. How to update your store properly after a mutation or subscription")," (by Entria)"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"https://medium.com/entria/relay-modern-optimistic-update-a09ba22d83c9"},"Optimistic Update: how to update your UI before server responds")," (by Entria)"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"https://medium.com/entria/relay-modern-network-deep-dive-ec187629dfd3"},"Relay Network Deep Dive - how to incrementally improve your network layer to manage complex data fetching requirements")," (by Entria)"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"https://medium.com/@sibelius/relay-modern-migration-to-typescript-c26ab0ee749c"},"Relay Modern with TypeScript - how to configure Relay Modern to make it with TypeScript")," (by @sibelius)"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"https://mrtnzlml.com/docs/relay"},"Collection of random thoughts and discoveries around Relay"))),(0,i.mdx)(l.OssOnly,{mdxType:"OssOnly"},(0,i.mdx)("h2",{id:"relay-example-projects"},"Relay example projects"),(0,i.mdx)("p",null,"These projects serve as an example of how to use Relay in real world applications. Some of them are even with educational videos."),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"https://github.com/relayjs/relay-examples"},"github.com/relayjs/relay-examples")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"https://github.com/adeira/relay-example"},"github.com/adeira/relay-example")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"https://github.com/juffalow/react-relay-example"},"github.com/juffalow/react-relay-example"))),(0,i.mdx)("h2",{id:"learn-basics"},"Learn basics"),(0,i.mdx)("p",null,"Here, you will find articles written by Relay community. They are touching basic topic which are necessary for your daily work."),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"https://medium.com/@sibelius/relay-modern-what-is-a-fragment-c70f164c2469"},"What is a fragment? Basic explanation of what is a fragment and what it is used for")," (by @sibelius)"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"https://medium.com/entria/relay-apollo-anti-pattern-d9f4dea47738"},"Relay anti-patterns. What you should avoid doing when using Relay concepts")," (by Entria)"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"https://medium.com/entria/relay-is-just-getting-better-54112ffc1a9e"},"Insights of how Relay Modern has improved a lot since Relay Classic")," (by Entria)"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"https://medium.com/entria/relay-modern-argumentdefinitions-d53769dbb95d"},"How to use @argumentsDefinitions to define local variables to your fragments")," (by Entria)"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"https://medium.com/entria/relay-modern-pagination-using-refetch-container-editing-a07c6b33ae4e"},"How to paginate using a Refetch Container. You can use a refetch container to paginate as well, just use renderVariables correctly")," (by Entria)")),(0,i.mdx)("h2",{id:"about-relay-store"},"About Relay Store"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"https://medium.com/@sibelius/relay-modern-the-relay-store-8984cd148798"},"How Relay Modern stores your data")," (by @sibelius)"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"https://medium.com/entria/wrangling-the-client-store-with-the-relay-modern-updater-function-5c32149a71ac"},"Deep Dive of Updater Relay Store function. How to update your store properly after a mutation or subscription")," (by Entria)"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"https://medium.com/entria/relay-modern-optimistic-update-a09ba22d83c9"},"Optimistic Update: how to update your UI before server responds")," (by Entria)"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"https://babangsund.com/relay_local_state_management/"},"Local State Management, part 1 - how to create a controlled input using Relay")," (by @babangsund)"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"https://babangsund.com/relay_local_state_management_2/"},"Local State Management, part 2 - how to manage global state and localStorage persistence on the client, using Relay")," (by @babangsund)"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"https://babangsund.com/relay_local_state_management_3/"},"Local State Management, part 3 - using LocalQueryRenderer and local state to manage nested fragments")," (by @babangsund)")),(0,i.mdx)("h2",{id:"network-layer"},"Network Layer"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"https://medium.com/entria/relay-modern-network-deep-dive-ec187629dfd3"},"Relay Network Deep Dive - how to incrementally improve your network layer to manage complex data fetching requirements")," (by Entria)")),(0,i.mdx)("h2",{id:"relay-configuration"},"Relay Configuration"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"https://medium.com/@sibelius/relay-modern-migration-to-typescript-c26ab0ee749c"},"Relay Modern with TypeScript - how to configure Relay Modern to make it with TypeScript")," (by @sibelius)")),(0,i.mdx)("h2",{id:"miscellaneous"},"Miscellaneous"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"https://twitter.com/sseraphini/status/1078595758801203202"},"Relay Modern Learning Blog Posts Thread on Twitter")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"https://mrtnzlml.com/docs/relay"},"Collection of random thoughts and discoveries around Relay")))),(0,i.mdx)(o.Z,{mdxType:"DocsRating"}))}h.isMDXComponent=!0}}]);