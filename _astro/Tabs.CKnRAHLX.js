import{j as l}from"./jsx-dev-runtime.B-ulu5L_.js";import{m as u}from"./marked.esm.DsseyvZg.js";import{r as o}from"./index.CQf9QXPh.js";u.use({mangle:!1,headerIds:!1});const p=({children:i})=>{const[a,r]=o.useState(0),[m,d]=o.useState(!1),c=o.useRef([]);o.useEffect(()=>{m?c.current[a]?.focus():d(!0)},[a]);const t=Array.from(i.props.value.matchAll(/<div\s+data-name="([^"]+)"[^>]*>(.*?)<\/div>/gs),e=>({name:e[1],children:e[0]})),f=(e,s)=>{e.key==="Enter"||e.key===" "?r(s):e.key==="ArrowRight"?r((a+1)%t.length):e.key==="ArrowLeft"&&r((a-1+t.length)%t.length)};return l.jsxDEV("div",{className:"tab",children:[l.jsxDEV("ul",{className:"tab-nav",children:t.map((e,s)=>l.jsxDEV("li",{className:`tab-nav-item ${s===a&&"active"}`,role:"tab",tabIndex:s===a?0:-1,onKeyDown:n=>f(n,s),onClick:()=>r(s),ref:n=>c.current[s]=n,children:e.name},s,!1,{fileName:"F:/Диск/ПРОЕКТЫ САЙТОВ/SOZDA-SITE.RU/sozda-site/src/layouts/shortcodes/Tabs.tsx",lineNumber:48,columnNumber:13},void 0))},void 0,!1,{fileName:"F:/Диск/ПРОЕКТЫ САЙТОВ/SOZDA-SITE.RU/sozda-site/src/layouts/shortcodes/Tabs.tsx",lineNumber:45,columnNumber:7},void 0),t.map((e,s)=>l.jsxDEV("div",{className:a===s?"tab-content block px-5":"hidden",dangerouslySetInnerHTML:{__html:u.parse(e.children)}},s,!1,{fileName:"F:/Диск/ПРОЕКТЫ САЙТОВ/SOZDA-SITE.RU/sozda-site/src/layouts/shortcodes/Tabs.tsx",lineNumber:64,columnNumber:9},void 0))]},void 0,!0,{fileName:"F:/Диск/ПРОЕКТЫ САЙТОВ/SOZDA-SITE.RU/sozda-site/src/layouts/shortcodes/Tabs.tsx",lineNumber:44,columnNumber:5},void 0)};export{p as default};
