(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{ZHzo:function(e,a,t){"use strict";t.r(a),t.d(a,"_frontmatter",(function(){return p})),t.d(a,"default",(function(){return g}));var n=t("cxan"),r=t("+wNj"),o=t("ERkP"),l=t("ZVZ0"),u=t("9Rvw"),y=t("zgTd"),c=t("x6WP"),i=t("E1Lo"),s=t("qbsg"),b=t("3Mj+"),p=(t("l1C2"),{});void 0!==p&&p&&p===Object(p)&&Object.isExtensible(p)&&!p.hasOwnProperty("__filemeta")&&Object.defineProperty(p,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"packages/hooks/useLazyArray/index.mdx"}});var d={_frontmatter:p},m=u.a;function g(e){var a,t,g=e.components,f=Object(r.a)(e,["components"]);return Object(l.b)(m,Object(n.a)({},d,f,{components:g,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"uselazyarray"},"useLazyArray"),Object(l.b)("p",null,"Cria um novo array que adiciona o array original progressivamente aliviando o processo de render. Não é uma solução perfeita, ainda estamos estudando alterantivas"),Object(l.b)(y.a,{mdxType:"CircularProgress"}),Object(l.b)("p",null,"Use o loader acima como referência, quando é feito o render de muitos items ele congela, agora se usar o lazy ele não congelará."),Object(l.b)(s.c,{__position:1,__code:'() => {\n  const [array, setArray] = useState([])\n  const onClick = useCallback(() => setArray(new Array(200).fill(\'a\')), [])\n  const onReset = useCallback(() => setArray([]), [])\n  const lazyArray = useLazyArray(array)\n  return (\n    <div>\n      <Typography>\n        Array Length: {array.length} / Lazy Array Length: {lazyArray.length}\n      </Typography>\n      <Button onClick={onClick}>Add 200 with Lazy</Button>\n      <Button onClick={onReset} variant="text">\n        Reset\n      </Button>\n      {lazyArray.map((a, index) => (\n        <div key={index}>\n          <Typography size="small">{index + 1}. Value</Typography>\n        </div>\n      ))}\n    </div>\n  )\n}',__scope:(a={props:f,DefaultLayout:u.a,useState:o.useState,useCallback:o.useCallback,CircularProgress:y.a,Button:c.a,Typography:i.a,Playground:s.c,useLazyArray:b.a},a.DefaultLayout=u.a,a._frontmatter=p,a),mdxType:"Playground"},(function(){var e=Object(o.useState)([]),a=e[0],t=e[1],n=Object(o.useCallback)((function(){return t(new Array(200).fill("a"))}),[]),r=Object(o.useCallback)((function(){return t([])}),[]),u=Object(b.a)(a);return Object(l.b)("div",null,Object(l.b)(i.a,{mdxType:"Typography"},"Array Length: ",a.length," / Lazy Array Length: ",u.length),Object(l.b)(c.a,{onClick:n,mdxType:"Button"},"Add 200 with Lazy"),Object(l.b)(c.a,{onClick:r,variant:"text",mdxType:"Button"},"Reset"),u.map((function(e,a){return Object(l.b)("div",{key:a},Object(l.b)(i.a,{size:"small",mdxType:"Typography"},a+1,". Value"))})))})),Object(l.b)("br",null),Object(l.b)(s.c,{__position:3,__code:'() => {\n  const [array, setArray] = useState([])\n  const onClick = useCallback(() => setArray(new Array(200).fill(\'a\')), [])\n  const onReset = useCallback(() => setArray([]), [])\n  return (\n    <div>\n      <Typography>Array Length: {array.length}</Typography>\n      <Button onClick={onClick}>Add 200 without Lazy</Button>\n      <Button onClick={onReset} variant="text">\n        Reset\n      </Button>\n      {array.map((a, index) => (\n        <div key={index}>\n          <Typography size="small">{index + 1}. Value</Typography>\n        </div>\n      ))}\n    </div>\n  )\n}',__scope:(t={props:f,DefaultLayout:u.a,useState:o.useState,useCallback:o.useCallback,CircularProgress:y.a,Button:c.a,Typography:i.a,Playground:s.c,useLazyArray:b.a},t.DefaultLayout=u.a,t._frontmatter=p,t),mdxType:"Playground"},(function(){var e=Object(o.useState)([]),a=e[0],t=e[1],n=Object(o.useCallback)((function(){return t(new Array(200).fill("a"))}),[]),r=Object(o.useCallback)((function(){return t([])}),[]);return Object(l.b)("div",null,Object(l.b)(i.a,{mdxType:"Typography"},"Array Length: ",a.length),Object(l.b)(c.a,{onClick:n,mdxType:"Button"},"Add 200 without Lazy"),Object(l.b)(c.a,{onClick:r,variant:"text",mdxType:"Button"},"Reset"),a.map((function(e,a){return Object(l.b)("div",{key:a},Object(l.b)(i.a,{size:"small",mdxType:"Typography"},a+1,". Value"))})))})))}void 0!==g&&g&&g===Object(g)&&Object.isExtensible(g)&&!g.hasOwnProperty("__filemeta")&&Object.defineProperty(g,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"packages/hooks/useLazyArray/index.mdx"}}),g.isMDXComponent=!0}}]);
//# sourceMappingURL=component---packages-hooks-use-lazy-array-index-mdx-37192c756bc13bbb7755.js.map