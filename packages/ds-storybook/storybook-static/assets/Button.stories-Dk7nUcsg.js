import{j as r}from"./jsx-runtime-BO8uF4Og.js";import{a as e}from"./Divider-Ddy17Ooe.js";import"./index-D4H_InIO.js";const q={title:"Components/Button",component:e,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["filled","outline","ghost","link"]},color:{control:"select",options:["primary","secondary","danger","success"]},size:{control:"select",options:["xs","sm","md","lg"]},disabled:{control:"boolean"},loading:{control:"boolean"},fullWidth:{control:"boolean"}}},t={args:{children:"Button",variant:"filled",color:"primary",size:"md"}},s={render:()=>r.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center"},children:[r.jsx(e,{variant:"filled",children:"Filled"}),r.jsx(e,{variant:"outline",children:"Outline"}),r.jsx(e,{variant:"ghost",children:"Ghost"}),r.jsx(e,{variant:"link",children:"Link"})]})},o={render:()=>r.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center"},children:[r.jsx(e,{color:"primary",children:"Primary"}),r.jsx(e,{color:"secondary",children:"Secondary"}),r.jsx(e,{color:"danger",children:"Danger"}),r.jsx(e,{color:"success",children:"Success"})]})},a={render:()=>r.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center"},children:[r.jsx(e,{size:"xs",children:"Extra Small"}),r.jsx(e,{size:"sm",children:"Small"}),r.jsx(e,{size:"md",children:"Medium"}),r.jsx(e,{size:"lg",children:"Large"})]})},n={render:()=>r.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center"},children:[r.jsx(e,{variant:"outline",color:"primary",children:"Primary"}),r.jsx(e,{variant:"outline",color:"secondary",children:"Secondary"}),r.jsx(e,{variant:"outline",color:"danger",children:"Danger"}),r.jsx(e,{variant:"outline",color:"success",children:"Success"})]})},i={render:()=>r.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center"},children:[r.jsx(e,{variant:"ghost",color:"primary",children:"Primary"}),r.jsx(e,{variant:"ghost",color:"secondary",children:"Secondary"}),r.jsx(e,{variant:"ghost",color:"danger",children:"Danger"}),r.jsx(e,{variant:"ghost",color:"success",children:"Success"})]})},l={args:{children:"Disabled Button",disabled:!0}},c={args:{children:"Loading...",loading:!0}},d={args:{children:"Full Width Button",fullWidth:!0},decorators:[M=>r.jsx("div",{style:{width:"400px"},children:r.jsx(M,{})})]};var u,p,m;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    children: 'Button',
    variant: 'filled',
    color: 'primary',
    size: 'md'
  }
}`,...(m=(p=t.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var g,h,x;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '12px',
    alignItems: 'center'
  }}>\r
      <Button variant="filled">Filled</Button>\r
      <Button variant="outline">Outline</Button>\r
      <Button variant="ghost">Ghost</Button>\r
      <Button variant="link">Link</Button>\r
    </div>
}`,...(x=(h=s.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var y,B,v;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '12px',
    alignItems: 'center'
  }}>\r
      <Button color="primary">Primary</Button>\r
      <Button color="secondary">Secondary</Button>\r
      <Button color="danger">Danger</Button>\r
      <Button color="success">Success</Button>\r
    </div>
}`,...(v=(B=o.parameters)==null?void 0:B.docs)==null?void 0:v.source}}};var j,S,f;a.parameters={...a.parameters,docs:{...(j=a.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '12px',
    alignItems: 'center'
  }}>\r
      <Button size="xs">Extra Small</Button>\r
      <Button size="sm">Small</Button>\r
      <Button size="md">Medium</Button>\r
      <Button size="lg">Large</Button>\r
    </div>
}`,...(f=(S=a.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};var z,D,b;n.parameters={...n.parameters,docs:{...(z=n.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '12px',
    alignItems: 'center'
  }}>\r
      <Button variant="outline" color="primary">Primary</Button>\r
      <Button variant="outline" color="secondary">Secondary</Button>\r
      <Button variant="outline" color="danger">Danger</Button>\r
      <Button variant="outline" color="success">Success</Button>\r
    </div>
}`,...(b=(D=n.parameters)==null?void 0:D.docs)==null?void 0:b.source}}};var I,L,W;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '12px',
    alignItems: 'center'
  }}>\r
      <Button variant="ghost" color="primary">Primary</Button>\r
      <Button variant="ghost" color="secondary">Secondary</Button>\r
      <Button variant="ghost" color="danger">Danger</Button>\r
      <Button variant="ghost" color="success">Success</Button>\r
    </div>
}`,...(W=(L=i.parameters)==null?void 0:L.docs)==null?void 0:W.source}}};var F,P,V;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    children: 'Disabled Button',
    disabled: true
  }
}`,...(V=(P=l.parameters)==null?void 0:P.docs)==null?void 0:V.source}}};var k,O,E;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    children: 'Loading...',
    loading: true
  }
}`,...(E=(O=c.parameters)==null?void 0:O.docs)==null?void 0:E.source}}};var G,C,w;d.parameters={...d.parameters,docs:{...(G=d.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    children: 'Full Width Button',
    fullWidth: true
  },
  decorators: [Story => <div style={{
    width: '400px'
  }}>\r
        <Story />\r
      </div>]
}`,...(w=(C=d.parameters)==null?void 0:C.docs)==null?void 0:w.source}}};const A=["Default","Variants","Colors","Sizes","OutlineVariants","GhostVariants","Disabled","Loading","FullWidth"];export{o as Colors,t as Default,l as Disabled,d as FullWidth,i as GhostVariants,c as Loading,n as OutlineVariants,a as Sizes,s as Variants,A as __namedExportsOrder,q as default};
