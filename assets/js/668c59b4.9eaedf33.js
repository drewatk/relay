"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[56814],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>u,MDXProvider:()=>p,mdx:()=>y,useMDXComponents:()=>d,withMDXComponents:()=>c});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){return function(t){var n=d(t.components);return r.createElement(e,l({},t,{components:n}))}},d=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=d(n),p=a,f=c["".concat(o,".").concat(p)]||c[p]||m[p]||l;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.r(t),n.d(t,{default:()=>o});var r=n(67294),a=n(34334);const l="tabItem_Ymn6";function o(e){var t=e.children,n=e.hidden,o=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,o),hidden:n},t)}},74866:(e,t,n)=>{n.r(t),n.d(t,{default:()=>k});var r=n(83117),a=n(67294),l=n(34334),o=n(12466),i=n(76775),s=n(91980),u=n(67392),c=n(50012);function d(e){return function(e){var t,n;return null!=(t=null==(n=a.Children.map(e,(function(e){if(!e||(0,a.isValidElement)(e)&&(t=e.props)&&"object"==typeof t&&"value"in t)return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function p(e){var t=e.values,n=e.children;return(0,a.useMemo)((function(){var e=null!=t?t:d(n);return function(e){var t=(0,u.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function m(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function f(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId,l=(0,i.k6)(),o=function(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:n,groupId:r});return[(0,s._X)(o),(0,a.useCallback)((function(e){if(o){var t=new URLSearchParams(l.location.search);t.set(o,e),l.replace(Object.assign({},l.location,{search:t.toString()}))}}),[o,l])]}function y(e){var t,n,r,l,o=e.defaultValue,i=e.queryString,s=void 0!==i&&i,u=e.groupId,d=p(e),y=(0,a.useState)((function(){return function(e){var t,n=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var a=null!=(t=r.find((function(e){return e.default})))?t:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:o,tabValues:d})})),v=y[0],b=y[1],h=f({queryString:s,groupId:u}),g=h[0],x=h[1],w=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:u}.groupId),n=(0,c.Nk)(t),r=n[0],l=n[1],[r,(0,a.useCallback)((function(e){t&&l.set(e)}),[t,l])]),k=w[0],D=w[1],T=function(){var e=null!=g?g:k;return m({value:e,tabValues:d})?e:null}();return(0,a.useLayoutEffect)((function(){T&&b(T)}),[T]),{selectedValue:v,selectValue:(0,a.useCallback)((function(e){if(!m({value:e,tabValues:d}))throw new Error("Can't select invalid tab value="+e);b(e),x(e),D(e)}),[x,D,d]),tabValues:d}}var v=n(72389);const b="tabList__CuJ",h="tabItem_LNqP";function g(e){var t=e.className,n=e.block,i=e.selectedValue,s=e.selectValue,u=e.tabValues,c=[],d=(0,o.o5)().blockElementScrollPositionUntilNextRender,p=function(e){var t=e.currentTarget,n=c.indexOf(t),r=u[n].value;r!==i&&(d(t),s(r))},m=function(e){var t,n=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":var r,a=c.indexOf(e.currentTarget)+1;n=null!=(r=c[a])?r:c[0];break;case"ArrowLeft":var l,o=c.indexOf(e.currentTarget)-1;n=null!=(l=c[o])?l:c[c.length-1]}null==(t=n)||t.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},u.map((function(e){var t=e.value,n=e.label,o=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:function(e){return c.push(e)},onKeyDown:m,onClick:p},o,{className:(0,l.Z)("tabs__item",h,null==o?void 0:o.className,{"tabs__item--active":i===t})}),null!=n?n:t)})))}function x(e){var t=e.lazy,n=e.children,r=e.selectedValue,l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var o=l.find((function(e){return e.props.value===r}));return o?(0,a.cloneElement)(o,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},l.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})})))}function w(e){var t=y(e);return a.createElement("div",{className:(0,l.Z)("tabs-container",b)},a.createElement(g,(0,r.Z)({},e,t)),a.createElement(x,(0,r.Z)({},e,t)))}function k(e){var t=(0,v.default)();return a.createElement(w,(0,r.Z)({key:String(t)},e))}},61023:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>d,default:()=>v,frontMatter:()=>c,metadata:()=>p,toc:()=>f});var r=n(83117),a=n(80102),l=(n(67294),n(3905)),o=n(86341),i=n(74866),s=n(85162),u=["components"],c={id:"defining-types",title:"Defining Types",slug:"/guides/relay-resolvers/defining-types/",description:"How to define types for your client state schema"},d=void 0,p={unversionedId:"guides/relay-resolvers/defining-types",id:"guides/relay-resolvers/defining-types",title:"Defining Types",description:"How to define types for your client state schema",source:"@site/docs/guides/relay-resolvers/defining-types.md",sourceDirName:"guides/relay-resolvers",slug:"/guides/relay-resolvers/defining-types/",permalink:"/docs/next/guides/relay-resolvers/defining-types/",draft:!1,editUrl:"https://github.com/facebook/relay/tree/main/website/docs/guides/relay-resolvers/defining-types.md",tags:[],version:"current",frontMatter:{id:"defining-types",title:"Defining Types",slug:"/guides/relay-resolvers/defining-types/",description:"How to define types for your client state schema"},sidebar:"docs",previous:{title:"Enabling Relay Resolvers",permalink:"/docs/next/guides/relay-resolvers/enabling-resolvers"},next:{title:"Defining Fields",permalink:"/docs/next/guides/relay-resolvers/defining-fields/"}},m={},f=[{value:"Defining a \u201cstrong\u201d type",id:"defining-a-strong-type",level:3},{value:"Defining a \u201cweak\u201d type",id:"defining-a-weak-type",level:3},{value:"Implementing Abstract Types",id:"implementing-abstract-types",level:3}],y={toc:f};function v(e){var t=e.components,n=(0,a.Z)(e,u);return(0,l.mdx)("wrapper",(0,r.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)("p",null,"You can think of client state resolvers as defining a GraphQL server that runs in the client. Just like with a server-defined GraphQL server you will need to define the ",(0,l.mdx)("em",{parentName:"p"},"types")," that exist in your schema as well as the ",(0,l.mdx)("em",{parentName:"p"},"fields"),' on those types. Just like a GraphQL server, fields are defined as functions that compute the GraphQL value from the parent object. In Relay Resolvers we call this parent JavaScript object the "model" of the type.'),(0,l.mdx)("admonition",{type:"info"},(0,l.mdx)("p",{parentName:"admonition"},'Each client state GraphQL type is backed by a JavaScript object type which these docs will refer to as its "model type". Resolvers "on" this type will be passed an instance of this type as their first argument.')),(0,l.mdx)("p",null,"Resolver types are defined using the ",(0,l.mdx)("inlineCode",{parentName:"p"},"@RelayResolver")," tag followed by the name of the type you are defining. By default Relay assumes your client types are \u201cstrong\u201d, meaning each instance has an ID which is unique within the type. This property allows Relay to apply a number of optimizations, such as memoizing resolver computation."),(0,l.mdx)("h3",{id:"defining-a-strong-type"},"Defining a \u201cstrong\u201d type"),(0,l.mdx)("p",null,"Strong types are defined by a docblock followed by an exported function whose name matches the type's name, and which accepts an ID as its only argument and returns an instance of the type\u2019s model. Resolvers that define edges to this type will simply need to return the ID of the object, rather than deriving the model themselves."),(0,l.mdx)(i.default,{groupId:"resolver",defaultValue:"Docblock",values:(0,o.fbContent)({internal:[{label:"Docblock",value:"Docblock"},{label:"Flow",value:"Flow"}],external:[{label:"Docblock",value:"Docblock"}]}),mdxType:"Tabs"},(0,l.mdx)(s.default,{value:"Docblock",mdxType:"TabItem"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-tsx"},"/**\n * @RelayResolver User\n */\nexport function User(id: DataID): UserModel {\n  return UserService.getById(id);\n}\n"))),(0,l.mdx)(s.default,{value:"Flow",mdxType:"TabItem"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-tsx"},"/**\n * @RelayResolver\n */\nexport function User(id: DataID): UserModel {\n  return UserService.getById(id);\n}\n")))),(0,l.mdx)("admonition",{type:"tip"},(0,l.mdx)("p",{parentName:"admonition"},"Elsewhere in the docs this function is referred to as the \u201cmodel resolver\u201d for the type.")),(0,l.mdx)("p",null,"Generally objects in your client data store will be able to change over time. To support this Relay Resolvers support resolvers that subscribe to the underlying data source. To learn about this, see the page on ",(0,l.mdx)("a",{parentName:"p",href:"/docs/next/guides/relay-resolvers/live-fields/"},"Live Fields"),"."),(0,l.mdx)("h3",{id:"defining-a-weak-type"},"Defining a \u201cweak\u201d type"),(0,l.mdx)("p",null,"If your type does not have a unique identifier, you can define it as \u201cweak\u201d by adding the ",(0,l.mdx)("inlineCode",{parentName:"p"},"@weak")," docblock tag. Weak types are defined by a docblock followed by an exported type definition matching the types name. Resolvers that define edges to weak types will need to return a fully populated model object matching this type."),(0,l.mdx)(i.default,{groupId:"resolver",defaultValue:"Docblock",values:(0,o.fbContent)({internal:[{label:"Docblock",value:"Docblock"},{label:"Flow",value:"Flow"}],external:[{label:"Docblock",value:"Docblock"}]}),mdxType:"Tabs"},(0,l.mdx)(s.default,{value:"Docblock",mdxType:"TabItem"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-tsx"},"/**\n * @RelayResolver ProfilePicture\n * @weak\n */\nexport type ProfilePicture = { url: string, height: number, width: number };\n"))),(0,l.mdx)(s.default,{value:"Flow",mdxType:"TabItem"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-tsx"},"/**\n * @RelayResolver\n */\nexport type ProfilePicture = { url: string, height: number, width: number };\n")))),(0,l.mdx)("admonition",{type:"tip"},(0,l.mdx)("p",{parentName:"admonition"},'Generally weak types are used for creating a namespace for a set of fields that ultimately "belong" to a parent object.')),(0,l.mdx)("h3",{id:"implementing-abstract-types"},"Implementing Abstract Types"),(0,l.mdx)("p",null,"Relay Resolver types can implement ",(0,l.mdx)("a",{parentName:"p",href:"https://relay.dev/docs/glossary/#abstract-type"},"abstract types")," defined in the graphql schema. Note, these abstract types can\nbe defined on your GraphQL server schema OR a ",(0,l.mdx)("a",{parentName:"p",href:"https://relay.dev/docs/next/guides/client-schema-extensions/"},"client side schema extension"),"."),(0,l.mdx)("p",null,"For example, given the following interface:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-graphql"},"# IUser.graphql\ninterface IUser {\n  name: String\n}\n")),(0,l.mdx)("p",null,"You could define two (or more) concrete resolver types that implement the IUser interface by adding annotations in the docblock (the same applies for unions)."),(0,l.mdx)(o.FbInternalOnly,{mdxType:"FbInternalOnly"},"Note, support for abstract types is not available for relay resolvers in Flow syntax (yet)."),(0,l.mdx)(i.default,{groupId:"resolver",defaultValue:"Docblock",values:(0,o.fbContent)({internal:[{label:"Docblock",value:"Docblock"}],external:[{label:"Docblock",value:"Docblock"}]}),mdxType:"Tabs"},(0,l.mdx)(s.default,{value:"Docblock",mdxType:"TabItem"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-tsx"},"/**\n * @RelayResolver BasicUser implements IUser\n */\nexport function BasicUser(id: DataID): BasicUserModel {\n  return { ...BasicUserService.getById(id), name: 'BasicUser1'};\n}\n\n/**\n * @RelayResolver SpecialUser implements IUser\n */\nexport function SpecialUser(id: DataID): SpecialUserModel {\n  return { ...SpecialUserService.getById(id), name: 'SpecalUser1'};\n}\n")))))}v.isMDXComponent=!0}}]);