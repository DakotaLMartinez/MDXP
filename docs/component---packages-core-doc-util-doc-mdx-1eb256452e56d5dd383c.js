(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"+B26":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return s})),n.d(t,"default",(function(){return h}));n("5hJT"),n("W1QL"),n("K/PF"),n("t91x"),n("75LO"),n("PJhk"),n("mXGw");var o=n("/FXl"),c=n("TjRS"),p=n("3Lmf"),a=n("zcwL"),r=n("evJY");n("aD51");function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var s={};void 0!==s&&s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"packages/core/doc/util.doc.mdx"}});var m={_frontmatter:s},i=c.a;function h(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,o,c={},p=Object.keys(e);for(o=0;o<p.length;o++)n=p[o],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,["components"]);return Object(o.b)(i,b({},m,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"deckmodes"},"deckModes"),Object(o.b)("p",null,"Enum object which contains the different modes for the deck to be in.\nIt can be used for with the ",Object(o.b)("inlineCode",{parentName:"p"},"setMode()")," function from the ",Object(o.b)("a",b({parentName:"p"},{href:"/MDXP/core-hooks#usenavigation"}),"useNavigation")," hook."),Object(o.b)("pre",null,Object(o.b)("code",b({parentName:"pre"},{className:"language-js"}),"const deckModes = {\n  NORMAL:     0,\n  PRESENTER:  1,\n  OVERVIEW:   2,\n  GRID:       3,\n  PRINT:      4,\n}\n")),Object(o.b)("hr",null),Object(o.b)("h2",{id:"basetheme"},"baseTheme"),Object(o.b)("p",null,"Base theme object that is always being merged into the given theme, to provide sane defaults for some things.\nYou can overwrite any of its properties by providing your own values in your theme."),Object(o.b)(a.a,{of:r.a,pre:"const baseTheme = ",mdxType:"ObjectProps"}),Object(o.b)("hr",null),Object(o.b)("h2",{id:"defaulttheme"},"defaultTheme"),Object(o.b)("p",null,"This is the default theme that is used for your presentation,\nif you do not give one to the ",Object(o.b)("a",b({parentName:"p"},{href:"/MDXP/core-components#deck"}),"Deck")," component."),Object(o.b)(a.a,{of:r.c,pre:"const defaultTheme = ",mdxType:"ObjectProps"}),Object(o.b)("hr",null),Object(o.b)("h2",{id:"mergethemes"},"mergeThemes"),Object(o.b)("p",null,"This function can be used to merge different theme objects together, overwriting with the latest theme given."),Object(o.b)("h3",{id:"arguments"},"Arguments"),Object(o.b)(p.a,{mdxType:"Arguments"},{name:"...themes",type:"Object",desc:"The theme objects you want to merge together."}),Object(o.b)("h3",{id:"returns"},"Returns"),Object(o.b)(p.a,{input:!1,mdxType:"Arguments"},{name:"combinedTheme",type:"Object",desc:"New Theme-UI theme object, which is the result of merging all passed themes together."}),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)("pre",null,Object(o.b)("code",b({parentName:"pre"},{className:"language-js"}),"import {mergeThemes} from '@mdxp/core'\n\nconst combinedTheme = mergeThemes(theme1, theme2, theme3)\n")),Object(o.b)("hr",null),Object(o.b)("h2",{id:"mdxptypes"},"MDXPTypes"),Object(o.b)("p",null,"Some components hold a special meaning for the MDXP code and will be handled specially.",Object(o.b)("br",{parentName:"p"}),"\n","This is the enum object which contains the different types of special MDXP components."),Object(o.b)("pre",null,Object(o.b)("code",b({parentName:"pre"},{className:"language-js"}),"const MDXPTypes = {\n  NONE:     0b0001,\n  LAYOUT:   0b0010,\n  GROUP:    0b0100,\n  WRAPPER:  0b1100,\n};\n")),Object(o.b)("hr",null),Object(o.b)("h2",{id:"setmdxptype"},"setMDXPType"),Object(o.b)("p",null,"This is a higher-order component, which turns turns your component into a specific ",Object(o.b)("a",b({parentName:"p"},{href:"#MDXPTypes"}),"MDXPType"),"."),Object(o.b)("h3",{id:"arguments-1"},"Arguments"),Object(o.b)(p.a,{mdxType:"Arguments"},{name:"component",type:"elementType"},{name:"...MDXPTypes",type:"[MDXPTypes](#mdxptypes)",desc:"You can pass multiple MDXPTypes to set the component as all of them."}),Object(o.b)("h3",{id:"returns-1"},"Returns"),Object(o.b)(p.a,{input:!1,mdxType:"Arguments"},{name:"component",type:"elementType"}),Object(o.b)("h3",{id:"examples-1"},"Examples"),Object(o.b)("pre",null,Object(o.b)("code",b({parentName:"pre"},{className:"language-js"}),"import {MDXPTypes, setMDXPType} from '@mdxp/core'\n\nconst TomatoLayout = ({children, ...props}) => (\n  <div\n    style={{\n      width: '100%',\n      height: '100%',\n      overflow: 'hidden',\n      backgroundColor: 'tomato',\n      color: 'white'\n    }}\n  >\n    {children}\n  </div>\n);\n\nexport default setMDXPType(TomatoLayout, MDXPTypes.LAYOUT);\n")),Object(o.b)("hr",null),Object(o.b)("h2",{id:"getmdxptype"},"getMDXPType"),Object(o.b)("p",null,"This function can be used to retrieve the MDXP type of a component."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"NOTE"),Object(o.b)("br",{parentName:"p"}),"\n","It is recommended to use the ",Object(o.b)("a",b({parentName:"p"},{href:"#checkMDXPType"}),"checkMDXPType")," to test for component types,\ninstead of using this function, as the internal implementation of MDXPTypes might change between version.")),Object(o.b)("h3",{id:"arguments-2"},"Arguments"),Object(o.b)(p.a,{mdxType:"Arguments"},{name:"component",type:"elementType"}),Object(o.b)("h3",{id:"returns-2"},"Returns"),Object(o.b)(p.a,{input:!1,mdxType:"Arguments"},{name:"type",type:"[MDXPTypes](#mdxptypes)",desc:"Type of the component (default: NONE)."}),Object(o.b)("hr",null),Object(o.b)("h2",{id:"checkmdxptype"},"checkMDXPType"),Object(o.b)("p",null,"Check whether a component is of a certain ",Object(o.b)("a",b({parentName:"p"},{href:"#MDXPTypes"}),"MDXPType"),".  "),Object(o.b)("h3",{id:"arguments-3"},"Arguments"),Object(o.b)(p.a,{mdxType:"Arguments"},{name:"component",type:"elementType"},{name:"type",type:"[MDXPTypes](#mdxptypes)"}),Object(o.b)("h3",{id:"returns-3"},"Returns"),Object(o.b)(p.a,{input:!1,mdxType:"Arguments"},{name:"isOfMDXPType",type:"bool"}),Object(o.b)("h3",{id:"examples-2"},"Examples"),Object(o.b)("pre",null,Object(o.b)("code",b({parentName:"pre"},{className:"language-js"}),"import {MDXPTypes, checkMDXPType} from '@mdxp/core'\nimport Component from './component'\n\nif (checkMDXPType(Component, MDXPTypes.LAYOUT)) {\n  // Component is a layout!\n}\n")))}void 0!==h&&h&&h===Object(h)&&Object.isExtensible(h)&&!h.hasOwnProperty("__filemeta")&&Object.defineProperty(h,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"packages/core/doc/util.doc.mdx"}}),h.isMDXComponent=!0}}]);
//# sourceMappingURL=component---packages-core-doc-util-doc-mdx-1eb256452e56d5dd383c.js.map