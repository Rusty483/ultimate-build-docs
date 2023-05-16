"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[554],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(r),m=a,f=p["".concat(u,".").concat(m)]||p[m]||d[m]||o;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},46486:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const o={title:"Attribute Datatypes",sidebar_position:3},i=void 0,l={unversionedId:"Attributes",id:"Attributes",title:"Attribute Datatypes",description:"There are a huge variety of datatypes that are supported. Each one of these has their own reducer defined for them in ReducerTemplates",source:"@site/docs/Attributes.md",sourceDirName:".",slug:"/Attributes",permalink:"/ultimate-build-docs/docs/Attributes",draft:!1,editUrl:"https://github.com/Rusty483/ultimate-build/edit/main/docs/Attributes.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Attribute Datatypes",sidebar_position:3},sidebar:"defaultSidebar",previous:{title:"Blocks",permalink:"/ultimate-build-docs/docs/Blocks"}},u={},s=[],c={toc:s},p="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"There are a huge variety of datatypes that are supported. Each one of these has their own reducer defined for them in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Rusty483/ultimate-build/blob/main/src/ServerScriptService/Modules/ReducerTemplates.lua"},"ReducerTemplates")),(0,a.kt)("h1",{id:"number"},"Number"),(0,a.kt)("p",null,"A simple number."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"local defaultAttributes = {\n    Force = 10\n}\n")),(0,a.kt)("h1",{id:"clampednumber"},"ClampedNumber"),(0,a.kt)("p",null,"ClampedNumbers get automatically clamped between their ",(0,a.kt)("inlineCode",{parentName:"p"},"Min")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Max"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"local defaultAttributes = {\n    Force = {\n        Min = 0,\n        Max = 100,\n        Value = 10\n    }\n}\n")),(0,a.kt)("h1",{id:"strings"},"Strings"),(0,a.kt)("p",null,"Strings get automatically filtered before they can be set by the player."),(0,a.kt)("admonition",{title:"warning",type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"Make absolutely sure to use the string reducer for all strings so it gets filtered properly.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'local defaultAttributes = {\n    Name = "Rusty485"\n}\n')))}d.isMDXComponent=!0}}]);