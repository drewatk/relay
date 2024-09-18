"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[16731],{3905:(e,r,t)=>{t.r(r),t.d(r,{MDXContext:()=>l,MDXProvider:()=>u,mdx:()=>f,useMDXComponents:()=>p,withMDXComponents:()=>c});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(){return o=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},o.apply(this,arguments)}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function d(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),c=function(e){return function(r){var t=p(r.components);return n.createElement(e,o({},r,{components:t}))}},p=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},u=function(e){var r=p(e.components);return n.createElement(l.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},y=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),c=p(t),u=a,y=c["".concat(i,".").concat(u)]||c[u]||m[u]||o;return t?n.createElement(y,s(s({ref:r},l),{},{components:t})):n.createElement(y,s({ref:r},l))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=y;var s={};for(var d in r)hasOwnProperty.call(r,d)&&(s[d]=r[d]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}y.displayName="MDXCreateElement"},55150:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>d,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var n=t(83117),a=t(80102),o=(t(67294),t(3905)),i=["components"],s={id:"deprecated",title:"Deprecated",slug:"/guides/relay-resolvers/deprecated/",description:"Marking fields in your client state schema as @deprecated"},d=void 0,l={unversionedId:"guides/relay-resolvers/deprecated",id:"version-v18.0.0/guides/relay-resolvers/deprecated",title:"Deprecated",description:"Marking fields in your client state schema as @deprecated",source:"@site/versioned_docs/version-v18.0.0/guides/relay-resolvers/deprecated.md",sourceDirName:"guides/relay-resolvers",slug:"/guides/relay-resolvers/deprecated/",permalink:"/docs/guides/relay-resolvers/deprecated/",draft:!1,editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v18.0.0/guides/relay-resolvers/deprecated.md",tags:[],version:"v18.0.0",frontMatter:{id:"deprecated",title:"Deprecated",slug:"/guides/relay-resolvers/deprecated/",description:"Marking fields in your client state schema as @deprecated"},sidebar:"docs",previous:{title:"Descriptions",permalink:"/docs/guides/relay-resolvers/descriptions/"},next:{title:"Limitations",permalink:"/docs/guides/relay-resolvers/limitations/"}},c={},p=[],u={toc:p};function m(e){var r=e.components,t=(0,a.Z)(e,i);return(0,o.mdx)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,o.mdx)("p",null,"GraphQL allows you to mark fields as ",(0,o.mdx)("inlineCode",{parentName:"p"},"@deprecated")," and provide an optional human-readable reason. Relay Resolvers bring this same convention to your client data. By marking fields in your client state schema as deprecated they will receive the same treatment as deprecated fields in your server GraphQL schema."),(0,o.mdx)("p",null,"Deprecated fields are surfaced as such in Relay's ",(0,o.mdx)("a",{parentName:"p",href:"https://relay.dev/docs/editor-support/"},"VSCode extension")," in autocomplete and on hover. Additionally, they will be rendered as greyed out and ",(0,o.mdx)("del",{parentName:"p"},"struck through")," in the editor."),(0,o.mdx)("admonition",{type:"info"},(0,o.mdx)("p",{parentName:"admonition"},"GraphQL deprecation reasons are expected to be written in markdown. Relay Resolvers will render these descriptions as markdown in the VSCode extension.")),(0,o.mdx)("p",null,"You can mark a field as deprecated by adding the ",(0,o.mdx)("inlineCode",{parentName:"p"},"@deprecated")," docblock tag followed by optional text to specify the reason."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-tsx"},'/**\n * @RelayResolver Author.fullName: String\n *\n * @deprecated Google "Falsehoods Programmers Believe About Names"\n */\nexport function fullName(author: AuthorModel): string {\n  return `${author.firstName} ${author.lastName}`;\n}\n')))}m.isMDXComponent=!0}}]);