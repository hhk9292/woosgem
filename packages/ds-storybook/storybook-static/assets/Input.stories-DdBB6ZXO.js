import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{b as r}from"./Divider-Ddy17Ooe.js";import"./index-D4H_InIO.js";const H={title:"Components/Input",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["outline","filled","underline"]},size:{control:"select",options:["sm","md","lg"]},error:{control:"boolean"},success:{control:"boolean"},disabled:{control:"boolean"},placeholder:{control:"text"}}},a={args:{placeholder:"Enter text...",variant:"outline",size:"md"}},l={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",width:"300px"},children:[e.jsx(r,{variant:"outline",placeholder:"Outline variant"}),e.jsx(r,{variant:"filled",placeholder:"Filled variant"}),e.jsx(r,{variant:"underline",placeholder:"Underline variant"})]})},s={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",width:"300px"},children:[e.jsx(r,{size:"sm",placeholder:"Small input"}),e.jsx(r,{size:"md",placeholder:"Medium input"}),e.jsx(r,{size:"lg",placeholder:"Large input"})]})},t={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",width:"300px"},children:[e.jsx(r,{placeholder:"Normal input"}),e.jsx(r,{error:!0,placeholder:"Error state"}),e.jsx(r,{success:!0,placeholder:"Success state"}),e.jsx(r,{disabled:!0,placeholder:"Disabled state"})]})},i={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",width:"300px"},children:[e.jsx(r,{variant:"filled",placeholder:"Normal"}),e.jsx(r,{variant:"filled",error:!0,placeholder:"Error"}),e.jsx(r,{variant:"filled",success:!0,placeholder:"Success"}),e.jsx(r,{variant:"filled",disabled:!0,placeholder:"Disabled"})]})},n={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",width:"300px"},children:[e.jsx(r,{variant:"underline",placeholder:"Normal"}),e.jsx(r,{variant:"underline",error:!0,placeholder:"Error"}),e.jsx(r,{variant:"underline",success:!0,placeholder:"Success"}),e.jsx(r,{variant:"underline",disabled:!0,placeholder:"Disabled"})]})},o={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",width:"300px"},children:[e.jsx(r,{type:"text",placeholder:"Text input"}),e.jsx(r,{type:"email",placeholder:"Email input"}),e.jsx(r,{type:"password",placeholder:"Password input"}),e.jsx(r,{type:"number",placeholder:"Number input"}),e.jsx(r,{type:"search",placeholder:"Search input"})]})},d={args:{placeholder:"Invalid email address",error:!0}},p={args:{placeholder:"Valid input",success:!0}},c={args:{placeholder:"Disabled input",disabled:!0}};var u,m,x;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    placeholder: 'Enter text...',
    variant: 'outline',
    size: 'md'
  }
}`,...(x=(m=a.parameters)==null?void 0:m.docs)==null?void 0:x.source}}};var h,v,f;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    width: '300px'
  }}>\r
      <Input variant="outline" placeholder="Outline variant" />\r
      <Input variant="filled" placeholder="Filled variant" />\r
      <Input variant="underline" placeholder="Underline variant" />\r
    </div>
}`,...(f=(v=l.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var y,g,j;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    width: '300px'
  }}>\r
      <Input size="sm" placeholder="Small input" />\r
      <Input size="md" placeholder="Medium input" />\r
      <Input size="lg" placeholder="Large input" />\r
    </div>
}`,...(j=(g=s.parameters)==null?void 0:g.docs)==null?void 0:j.source}}};var S,I,b;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    width: '300px'
  }}>\r
      <Input placeholder="Normal input" />\r
      <Input error placeholder="Error state" />\r
      <Input success placeholder="Success state" />\r
      <Input disabled placeholder="Disabled state" />\r
    </div>
}`,...(b=(I=t.parameters)==null?void 0:I.docs)==null?void 0:b.source}}};var D,w,E;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    width: '300px'
  }}>\r
      <Input variant="filled" placeholder="Normal" />\r
      <Input variant="filled" error placeholder="Error" />\r
      <Input variant="filled" success placeholder="Success" />\r
      <Input variant="filled" disabled placeholder="Disabled" />\r
    </div>
}`,...(E=(w=i.parameters)==null?void 0:w.docs)==null?void 0:E.source}}};var z,N,V;n.parameters={...n.parameters,docs:{...(z=n.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    width: '300px'
  }}>\r
      <Input variant="underline" placeholder="Normal" />\r
      <Input variant="underline" error placeholder="Error" />\r
      <Input variant="underline" success placeholder="Success" />\r
      <Input variant="underline" disabled placeholder="Disabled" />\r
    </div>
}`,...(V=(N=n.parameters)==null?void 0:N.docs)==null?void 0:V.source}}};var T,F,U;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    width: '300px'
  }}>\r
      <Input type="text" placeholder="Text input" />\r
      <Input type="email" placeholder="Email input" />\r
      <Input type="password" placeholder="Password input" />\r
      <Input type="number" placeholder="Number input" />\r
      <Input type="search" placeholder="Search input" />\r
    </div>
}`,...(U=(F=o.parameters)==null?void 0:F.docs)==null?void 0:U.source}}};var O,L,M;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    placeholder: 'Invalid email address',
    error: true
  }
}`,...(M=(L=d.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};var P,_,C;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    placeholder: 'Valid input',
    success: true
  }
}`,...(C=(_=p.parameters)==null?void 0:_.docs)==null?void 0:C.source}}};var R,k,q;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    placeholder: 'Disabled input',
    disabled: true
  }
}`,...(q=(k=c.parameters)==null?void 0:k.docs)==null?void 0:q.source}}};const J=["Default","Variants","Sizes","States","FilledVariantStates","UnderlineVariantStates","InputTypes","Error","Success","Disabled"];export{a as Default,c as Disabled,d as Error,i as FilledVariantStates,o as InputTypes,s as Sizes,t as States,p as Success,n as UnderlineVariantStates,l as Variants,J as __namedExportsOrder,H as default};
