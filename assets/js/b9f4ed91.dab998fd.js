"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6351],{3905:(e,n,r)=>{r.r(n),r.d(n,{MDXContext:()=>p,MDXProvider:()=>d,mdx:()=>y,useMDXComponents:()=>u,withMDXComponents:()=>l});var t=r(67294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(){return a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},a.apply(this,arguments)}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=t.createContext({}),l=function(e){return function(n){var r=u(n.components);return t.createElement(e,a({},n,{components:r}))}},u=function(e){var n=t.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},d=function(e){var n=u(e.components);return t.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),l=u(r),d=o,f=l["".concat(i,".").concat(d)]||l[d]||m[d]||a;return r?t.createElement(f,s(s({ref:n},p),{},{components:r})):t.createElement(f,s({ref:n},p))}));function y(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}f.displayName="MDXCreateElement"},92593:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>m,frontMatter:()=>s,metadata:()=>p,toc:()=>u});var t=r(83117),o=r(80102),a=(r(67294),r(3905)),i=["components"],s={id:"network-layer",title:"Network Layer",original_id:"network-layer"},c=void 0,p={unversionedId:"network-layer",id:"version-v1.6.2/network-layer",title:"Network Layer",description:"In order to know how to access your GraphQL server, Relay Modern requires developers to provide an object implementing the NetworkLayer interface when creating an instance of a Relay Environment. The environment uses this network layer to execute queries, mutations, and (if your server supports them) subscriptions. This allows developers to use whatever transport (HTTP, WebSockets, etc) and authentication is most appropriate for their application, decoupling the environment from the particulars of each application's network configuration.",source:"@site/versioned_docs/version-v1.6.2/Modern-NetworkLayer.md",sourceDirName:".",slug:"/network-layer",permalink:"/docs/v1.6.2/network-layer",draft:!1,editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v1.6.2/Modern-NetworkLayer.md",tags:[],version:"v1.6.2",frontMatter:{id:"network-layer",title:"Network Layer",original_id:"network-layer"},sidebar:"version-v1.6.2/docs",previous:{title:"Relay Environment",permalink:"/docs/v1.6.2/relay-environment"},next:{title:"QueryRenderer",permalink:"/docs/v1.6.2/query-renderer"}},l={},u=[],d={toc:u};function m(e){var n=e.components,r=(0,o.Z)(e,i);return(0,a.mdx)("wrapper",(0,t.Z)({},d,r,{components:n,mdxType:"MDXLayout"}),(0,a.mdx)("p",null,"In order to know how to access your GraphQL server, Relay Modern requires developers to provide an object implementing the ",(0,a.mdx)("inlineCode",{parentName:"p"},"NetworkLayer")," interface when creating an instance of a ",(0,a.mdx)("a",{parentName:"p",href:"/docs/v1.6.2/relay-environment"},"Relay Environment"),". The environment uses this network layer to execute queries, mutations, and (if your server supports them) subscriptions. This allows developers to use whatever transport (HTTP, WebSockets, etc) and authentication is most appropriate for their application, decoupling the environment from the particulars of each application's network configuration."),(0,a.mdx)("p",null,"Currently the easiest way to create a network layer is via a helper from the ",(0,a.mdx)("inlineCode",{parentName:"p"},"relay-runtime")," package:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"const {Environment, Network} = require('relay-runtime');\n\n// Define a function that fetches the results of an operation (query/mutation/etc)\n// and returns its results as a Promise:\nfunction fetchQuery(\n  operation,\n  variables,\n  cacheConfig,\n  uploadables,\n) {\n  return fetch('/graphql', {\n    method: 'POST',\n    headers: {\n      // Add authentication and other headers here\n      'content-type': 'application/json'\n    },\n    body: JSON.stringify({\n      query: operation.text, // GraphQL text from input\n      variables,\n    }),\n  }).then(response => {\n    return response.json();\n  });\n}\n\n// Create a network layer from the fetch function\nconst network = Network.create(fetchQuery);\n\n// Create an environment using this network:\nconst environment = new Environment({\n  ..., // other options\n  network,\n});\n")),(0,a.mdx)("p",null,"Note that this is a basic example to help you get started. This example could be extended with additional features such as request/response caching (enabled e.g. when ",(0,a.mdx)("inlineCode",{parentName:"p"},"cacheConfig.force")," is false) and uploading form data for mutations (the ",(0,a.mdx)("inlineCode",{parentName:"p"},"uploadables")," parameter)."))}m.isMDXComponent=!0}}]);