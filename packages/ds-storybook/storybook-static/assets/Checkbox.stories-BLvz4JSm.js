import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{C as r}from"./Divider-Ddy17Ooe.js";import"./index-D4H_InIO.js";const B={title:"Components/Checkbox",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg"]},checked:{control:"boolean"},indeterminate:{control:"boolean"},disabled:{control:"boolean"}}},c={args:{children:"Checkbox label",size:"md"}},s={args:{children:"Checked checkbox",checked:!0}},a={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(r,{children:"Unchecked"}),e.jsx(r,{checked:!0,children:"Checked"}),e.jsx(r,{indeterminate:!0,children:"Indeterminate"}),e.jsx(r,{disabled:!0,children:"Disabled"}),e.jsx(r,{checked:!0,disabled:!0,children:"Checked & Disabled"})]})},o={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(r,{size:"sm",checked:!0,children:"Small checkbox"}),e.jsx(r,{size:"md",checked:!0,children:"Medium checkbox"}),e.jsx(r,{size:"lg",checked:!0,children:"Large checkbox"})]})},d={args:{children:"Select all items",indeterminate:!0}},n={args:{children:"Disabled option",disabled:!0}},t={args:{children:"Checked and disabled",checked:!0,disabled:!0}},i={args:{"aria-label":"Select this item",checked:!0}},l={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(r,{checked:!0,children:"I agree to the Terms of Service"}),e.jsx(r,{children:"Subscribe to newsletter"}),e.jsx(r,{children:"Receive marketing emails"})]})};var h,m,x;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    children: 'Checkbox label',
    size: 'md'
  }
}`,...(x=(m=c.parameters)==null?void 0:m.docs)==null?void 0:x.source}}};var k,p,b;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    children: 'Checked checkbox',
    checked: true
  }
}`,...(b=(p=s.parameters)==null?void 0:p.docs)==null?void 0:b.source}}};var u,C,g;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>\r
      <Checkbox>Unchecked</Checkbox>\r
      <Checkbox checked>Checked</Checkbox>\r
      <Checkbox indeterminate>Indeterminate</Checkbox>\r
      <Checkbox disabled>Disabled</Checkbox>\r
      <Checkbox checked disabled>Checked & Disabled</Checkbox>\r
    </div>
}`,...(g=(C=a.parameters)==null?void 0:C.docs)==null?void 0:g.source}}};var S,f,D;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>\r
      <Checkbox size="sm" checked>Small checkbox</Checkbox>\r
      <Checkbox size="md" checked>Medium checkbox</Checkbox>\r
      <Checkbox size="lg" checked>Large checkbox</Checkbox>\r
    </div>
}`,...(D=(f=o.parameters)==null?void 0:f.docs)==null?void 0:D.source}}};var j,y,v;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    children: 'Select all items',
    indeterminate: true
  }
}`,...(v=(y=d.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var z,I,E;n.parameters={...n.parameters,docs:{...(z=n.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    children: 'Disabled option',
    disabled: true
  }
}`,...(E=(I=n.parameters)==null?void 0:I.docs)==null?void 0:E.source}}};var L,R,T;t.parameters={...t.parameters,docs:{...(L=t.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    children: 'Checked and disabled',
    checked: true,
    disabled: true
  }
}`,...(T=(R=t.parameters)==null?void 0:R.docs)==null?void 0:T.source}}};var w,F,M;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Select this item',
    checked: true
  }
}`,...(M=(F=i.parameters)==null?void 0:F.docs)==null?void 0:M.source}}};var U,W,_;l.parameters={...l.parameters,docs:{...(U=l.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  }}>\r
      <Checkbox checked>I agree to the Terms of Service</Checkbox>\r
      <Checkbox>Subscribe to newsletter</Checkbox>\r
      <Checkbox>Receive marketing emails</Checkbox>\r
    </div>
}`,...(_=(W=l.parameters)==null?void 0:W.docs)==null?void 0:_.source}}};const G=["Default","Checked","States","Sizes","Indeterminate","Disabled","CheckedDisabled","WithoutLabel","FormExample"];export{s as Checked,t as CheckedDisabled,c as Default,n as Disabled,l as FormExample,d as Indeterminate,o as Sizes,a as States,i as WithoutLabel,G as __namedExportsOrder,B as default};
