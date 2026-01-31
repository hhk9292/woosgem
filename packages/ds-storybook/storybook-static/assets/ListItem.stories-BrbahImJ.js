import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{L as t}from"./Divider-Ddy17Ooe.js";import"./index-D4H_InIO.js";const F={title:"Components/ListItem",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","interactive"]},selected:{control:"boolean"},disabled:{control:"boolean"},divider:{control:"boolean"}}},r={args:{children:"List Item",variant:"default"},decorators:[N=>e.jsx("ul",{style:{width:"300px",listStyle:"none",padding:0,margin:0},children:e.jsx(N,{})})]},i={render:()=>e.jsxs("ul",{style:{width:"300px",listStyle:"none",padding:0,margin:0},children:[e.jsx(t,{variant:"default",children:"Default Variant"}),e.jsx(t,{variant:"interactive",children:"Interactive Variant"})]})},a={render:()=>e.jsxs("ul",{style:{width:"300px",listStyle:"none",padding:0,margin:0},children:[e.jsx(t,{variant:"interactive",onClick:()=>alert("Clicked!"),children:"Click me"}),e.jsx(t,{variant:"interactive",onClick:()=>alert("Another click!"),children:"Click me too"})]})},n={render:()=>e.jsxs("ul",{style:{width:"300px",listStyle:"none",padding:0,margin:0},children:[e.jsx(t,{variant:"interactive",selected:!0,children:"Selected Item"}),e.jsx(t,{variant:"interactive",children:"Unselected Item"}),e.jsx(t,{variant:"interactive",children:"Another Item"})]})},s={render:()=>e.jsxs("ul",{style:{width:"300px",listStyle:"none",padding:0,margin:0},children:[e.jsx(t,{variant:"interactive",children:"Normal Item"}),e.jsx(t,{variant:"interactive",disabled:!0,children:"Disabled Item"}),e.jsx(t,{variant:"interactive",children:"Another Item"})]})},d={render:()=>e.jsxs("ul",{style:{width:"300px",listStyle:"none",padding:0,margin:0},children:[e.jsx(t,{divider:!0,children:"First Item"}),e.jsx(t,{divider:!0,children:"Second Item"}),e.jsx(t,{divider:!0,children:"Third Item"}),e.jsx(t,{children:"Last Item (no divider)"})]})},l={render:()=>e.jsxs("div",{style:{width:"400px"},children:[e.jsx("h3",{style:{marginBottom:"12px",fontSize:"16px",fontWeight:600},children:"Navigation Menu"}),e.jsxs("ul",{style:{listStyle:"none",padding:0,margin:0,border:"1px solid #e5e5e5",borderRadius:"8px"},children:[e.jsx(t,{variant:"interactive",selected:!0,divider:!0,children:"Dashboard"}),e.jsx(t,{variant:"interactive",divider:!0,children:"Projects"}),e.jsx(t,{variant:"interactive",divider:!0,children:"Team"}),e.jsx(t,{variant:"interactive",disabled:!0,divider:!0,children:"Settings (Coming Soon)"}),e.jsx(t,{variant:"interactive",children:"Logout"})]})]})},c={render:()=>e.jsxs("ul",{style:{width:"300px",listStyle:"none",padding:0,margin:0},children:[e.jsx(t,{variant:"default",children:"Default"}),e.jsx(t,{variant:"interactive",children:"Interactive"}),e.jsx(t,{variant:"interactive",selected:!0,children:"Selected"}),e.jsx(t,{variant:"interactive",disabled:!0,children:"Disabled"}),e.jsx(t,{variant:"interactive",divider:!0,children:"With Divider"})]})};var o,m,v;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    children: 'List Item',
    variant: 'default'
  },
  decorators: [Story => <ul style={{
    width: '300px',
    listStyle: 'none',
    padding: 0,
    margin: 0
  }}>\r
        <Story />\r
      </ul>]
}`,...(v=(m=r.parameters)==null?void 0:m.docs)==null?void 0:v.source}}};var p,u,I;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <ul style={{
    width: '300px',
    listStyle: 'none',
    padding: 0,
    margin: 0
  }}>\r
      <ListItem variant="default">Default Variant</ListItem>\r
      <ListItem variant="interactive">Interactive Variant</ListItem>\r
    </ul>
}`,...(I=(u=i.parameters)==null?void 0:u.docs)==null?void 0:I.source}}};var h,x,L;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <ul style={{
    width: '300px',
    listStyle: 'none',
    padding: 0,
    margin: 0
  }}>\r
      <ListItem variant="interactive" onClick={() => alert('Clicked!')}>\r
        Click me\r
      </ListItem>\r
      <ListItem variant="interactive" onClick={() => alert('Another click!')}>\r
        Click me too\r
      </ListItem>\r
    </ul>
}`,...(L=(x=a.parameters)==null?void 0:x.docs)==null?void 0:L.source}}};var g,S,y;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <ul style={{
    width: '300px',
    listStyle: 'none',
    padding: 0,
    margin: 0
  }}>\r
      <ListItem variant="interactive" selected>\r
        Selected Item\r
      </ListItem>\r
      <ListItem variant="interactive">Unselected Item</ListItem>\r
      <ListItem variant="interactive">Another Item</ListItem>\r
    </ul>
}`,...(y=(S=n.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};var j,b,f;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <ul style={{
    width: '300px',
    listStyle: 'none',
    padding: 0,
    margin: 0
  }}>\r
      <ListItem variant="interactive">Normal Item</ListItem>\r
      <ListItem variant="interactive" disabled>\r
        Disabled Item\r
      </ListItem>\r
      <ListItem variant="interactive">Another Item</ListItem>\r
    </ul>
}`,...(f=(b=s.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var D,w,C;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <ul style={{
    width: '300px',
    listStyle: 'none',
    padding: 0,
    margin: 0
  }}>\r
      <ListItem divider>First Item</ListItem>\r
      <ListItem divider>Second Item</ListItem>\r
      <ListItem divider>Third Item</ListItem>\r
      <ListItem>Last Item (no divider)</ListItem>\r
    </ul>
}`,...(C=(w=d.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};var k,A,V;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '400px'
  }}>\r
      <h3 style={{
      marginBottom: '12px',
      fontSize: '16px',
      fontWeight: 600
    }}>\r
        Navigation Menu\r
      </h3>\r
      <ul style={{
      listStyle: 'none',
      padding: 0,
      margin: 0,
      border: '1px solid #e5e5e5',
      borderRadius: '8px'
    }}>\r
        <ListItem variant="interactive" selected divider>\r
          Dashboard\r
        </ListItem>\r
        <ListItem variant="interactive" divider>\r
          Projects\r
        </ListItem>\r
        <ListItem variant="interactive" divider>\r
          Team\r
        </ListItem>\r
        <ListItem variant="interactive" disabled divider>\r
          Settings (Coming Soon)\r
        </ListItem>\r
        <ListItem variant="interactive">\r
          Logout\r
        </ListItem>\r
      </ul>\r
    </div>
}`,...(V=(A=l.parameters)==null?void 0:A.docs)==null?void 0:V.source}}};var W,T,E;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <ul style={{
    width: '300px',
    listStyle: 'none',
    padding: 0,
    margin: 0
  }}>\r
      <ListItem variant="default">Default</ListItem>\r
      <ListItem variant="interactive">Interactive</ListItem>\r
      <ListItem variant="interactive" selected>Selected</ListItem>\r
      <ListItem variant="interactive" disabled>Disabled</ListItem>\r
      <ListItem variant="interactive" divider>With Divider</ListItem>\r
    </ul>
}`,...(E=(T=c.parameters)==null?void 0:T.docs)==null?void 0:E.source}}};const M=["Default","Variants","Interactive","Selected","Disabled","WithDivider","CompleteExample","AllStates"];export{c as AllStates,l as CompleteExample,r as Default,s as Disabled,a as Interactive,n as Selected,i as Variants,d as WithDivider,M as __namedExportsOrder,F as default};
