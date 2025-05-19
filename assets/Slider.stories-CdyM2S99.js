import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{r as m}from"./index-DmM0KDA7.js";function c({images:t}){const[e,n]=m.useState(0);return r.jsxs("div",{children:[r.jsxs("div",{className:"ButtonBar",children:[r.jsx("button",{disabled:e===0,onClick:()=>n(e-1),children:"Prev"}),r.jsx("button",{disabled:e>=t.length-1,onClick:()=>n(e+1),children:"Next"})]}),r.jsx("img",{src:`images/${t[e]}`,alt:t[e]})]})}c.__docgenInfo={description:"",methods:[],displayName:"Slider",props:{images:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""}}};const g={component:c},s={args:{images:["01.png","02.png"]}};var a,o,i;s.parameters={...s.parameters,docs:{...(a=s.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    images: ["01.png", "02.png"]
  }
}`,...(i=(o=s.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const l=["TwoImages"];export{s as TwoImages,l as __namedExportsOrder,g as default};
