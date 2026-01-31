import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{T as r}from"./Divider-Ddy17Ooe.js";import"./index-D4H_InIO.js";const U={title:"Components/Tab",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["underline","filled"]},size:{control:"select",options:["sm","md","lg"]},selected:{control:"boolean"},disabled:{control:"boolean"},fullWidth:{control:"boolean"}}},a={args:{children:"Tab",variant:"underline",size:"md",selected:!1,disabled:!1}},l={render:()=>e.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center"},children:[e.jsx(r,{variant:"underline",children:"Underline"}),e.jsx(r,{variant:"filled",children:"Filled"})]})},i={render:()=>e.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center"},children:[e.jsx(r,{size:"sm",children:"Small"}),e.jsx(r,{size:"md",children:"Medium"}),e.jsx(r,{size:"lg",children:"Large"})]})},s={render:()=>e.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center"},children:[e.jsx(r,{selected:!0,children:"Selected Tab"}),e.jsx(r,{children:"Unselected Tab"})]})},d={render:()=>e.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center"},children:[e.jsx(r,{disabled:!0,children:"Disabled Tab"}),e.jsx(r,{children:"Normal Tab"})]})},t={render:()=>e.jsx("div",{style:{width:"400px"},children:e.jsxs("div",{style:{display:"flex",gap:"0"},children:[e.jsx(r,{fullWidth:!0,selected:!0,children:"Home"}),e.jsx(r,{fullWidth:!0,children:"Profile"}),e.jsx(r,{fullWidth:!0,children:"Settings"})]})})},n={render:()=>e.jsxs("div",{style:{width:"500px"},children:[e.jsxs("div",{style:{display:"flex",gap:"0",marginBottom:"24px"},children:[e.jsx(r,{variant:"underline",fullWidth:!0,selected:!0,children:"Overview"}),e.jsx(r,{variant:"underline",fullWidth:!0,children:"Activity"}),e.jsx(r,{variant:"underline",fullWidth:!0,children:"Analytics"}),e.jsx(r,{variant:"underline",fullWidth:!0,disabled:!0,children:"Reports"})]}),e.jsxs("div",{style:{display:"flex",gap:"8px"},children:[e.jsx(r,{variant:"filled",selected:!0,children:"All"}),e.jsx(r,{variant:"filled",children:"Active"}),e.jsx(r,{variant:"filled",children:"Completed"}),e.jsx(r,{variant:"filled",children:"Archived"})]})]})};var c,o,p;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    children: 'Tab',
    variant: 'underline',
    size: 'md',
    selected: false,
    disabled: false
  }
}`,...(p=(o=a.parameters)==null?void 0:o.docs)==null?void 0:p.source}}};var m,u,b;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '12px',
    alignItems: 'center'
  }}>\r
      <Tab variant="underline">Underline</Tab>\r
      <Tab variant="filled">Filled</Tab>\r
    </div>
}`,...(b=(u=l.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var x,v,h;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '12px',
    alignItems: 'center'
  }}>\r
      <Tab size="sm">Small</Tab>\r
      <Tab size="md">Medium</Tab>\r
      <Tab size="lg">Large</Tab>\r
    </div>
}`,...(h=(v=i.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var T,f,g;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '12px',
    alignItems: 'center'
  }}>\r
      <Tab selected>Selected Tab</Tab>\r
      <Tab>Unselected Tab</Tab>\r
    </div>
}`,...(g=(f=s.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var y,j,S;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '12px',
    alignItems: 'center'
  }}>\r
      <Tab disabled>Disabled Tab</Tab>\r
      <Tab>Normal Tab</Tab>\r
    </div>
}`,...(S=(j=d.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var W,z,A;t.parameters={...t.parameters,docs:{...(W=t.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '400px'
  }}>\r
      <div style={{
      display: 'flex',
      gap: '0'
    }}>\r
        <Tab fullWidth selected>Home</Tab>\r
        <Tab fullWidth>Profile</Tab>\r
        <Tab fullWidth>Settings</Tab>\r
      </div>\r
    </div>
}`,...(A=(z=t.parameters)==null?void 0:z.docs)==null?void 0:A.source}}};var I,w,D;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '500px'
  }}>\r
      <div style={{
      display: 'flex',
      gap: '0',
      marginBottom: '24px'
    }}>\r
        <Tab variant="underline" fullWidth selected>Overview</Tab>\r
        <Tab variant="underline" fullWidth>Activity</Tab>\r
        <Tab variant="underline" fullWidth>Analytics</Tab>\r
        <Tab variant="underline" fullWidth disabled>Reports</Tab>\r
      </div>\r
      <div style={{
      display: 'flex',
      gap: '8px'
    }}>\r
        <Tab variant="filled" selected>All</Tab>\r
        <Tab variant="filled">Active</Tab>\r
        <Tab variant="filled">Completed</Tab>\r
        <Tab variant="filled">Archived</Tab>\r
      </div>\r
    </div>
}`,...(D=(w=n.parameters)==null?void 0:w.docs)==null?void 0:D.source}}};const O=["Default","Variants","Sizes","Selected","Disabled","FullWidth","CompleteExample"];export{n as CompleteExample,a as Default,d as Disabled,t as FullWidth,s as Selected,i as Sizes,l as Variants,O as __namedExportsOrder,U as default};
