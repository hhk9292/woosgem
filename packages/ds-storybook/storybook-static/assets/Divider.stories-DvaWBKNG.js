import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{D as i}from"./Divider-Ddy17Ooe.js";import"./index-D4H_InIO.js";const R={title:"Components/Divider",component:i,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{orientation:{control:"select",options:["horizontal","vertical"]},variant:{control:"select",options:["solid","dashed"]},spacing:{control:"select",options:["none","sm","md","lg"]}}},r={render:()=>e.jsx("div",{style:{width:"300px"},children:e.jsx(i,{})})},t={render:()=>e.jsxs("div",{style:{width:"300px",display:"flex",flexDirection:"column",gap:"24px"},children:[e.jsxs("div",{children:[e.jsx("div",{style:{marginBottom:"8px",fontSize:"14px",color:"#666"},children:"Solid"}),e.jsx(i,{variant:"solid"})]}),e.jsxs("div",{children:[e.jsx("div",{style:{marginBottom:"8px",fontSize:"14px",color:"#666"},children:"Dashed"}),e.jsx(i,{variant:"dashed"})]})]})},s={render:()=>e.jsxs("div",{style:{width:"300px",display:"flex",flexDirection:"column",gap:"24px"},children:[e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:"14px",color:"#666"},children:"None"}),e.jsx(i,{spacing:"none"}),e.jsx("div",{style:{fontSize:"14px",color:"#666"},children:"Content"})]}),e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:"14px",color:"#666"},children:"Small"}),e.jsx(i,{spacing:"sm"}),e.jsx("div",{style:{fontSize:"14px",color:"#666"},children:"Content"})]}),e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:"14px",color:"#666"},children:"Medium"}),e.jsx(i,{spacing:"md"}),e.jsx("div",{style:{fontSize:"14px",color:"#666"},children:"Content"})]}),e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:"14px",color:"#666"},children:"Large"}),e.jsx(i,{spacing:"lg"}),e.jsx("div",{style:{fontSize:"14px",color:"#666"},children:"Content"})]})]})},n={render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px",height:"100px"},children:[e.jsx("div",{children:"Section 1"}),e.jsx(i,{orientation:"vertical",spacing:"none"}),e.jsx("div",{children:"Section 2"}),e.jsx(i,{orientation:"vertical",spacing:"none"}),e.jsx("div",{children:"Section 3"})]})},o={render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0",height:"100px"},children:[e.jsx("div",{children:"Section 1"}),e.jsx(i,{orientation:"vertical",spacing:"md"}),e.jsx("div",{children:"Section 2"}),e.jsx(i,{orientation:"vertical",spacing:"md"}),e.jsx("div",{children:"Section 3"})]})},d={render:()=>e.jsxs("div",{style:{width:"400px"},children:[e.jsx("h2",{style:{fontSize:"20px",fontWeight:600,marginBottom:"8px"},children:"Section Title"}),e.jsx("p",{style:{marginBottom:"16px",color:"#666"},children:"This is some content in the first section. It demonstrates how dividers can be used to separate different parts of a page."}),e.jsx(i,{spacing:"lg"}),e.jsx("h2",{style:{fontSize:"20px",fontWeight:600,marginBottom:"8px"},children:"Another Section"}),e.jsx("p",{style:{marginBottom:"16px",color:"#666"},children:"Here's more content in a different section. The divider helps create visual separation."}),e.jsx(i,{spacing:"lg",variant:"dashed"}),e.jsx("h2",{style:{fontSize:"20px",fontWeight:600,marginBottom:"8px"},children:"Final Section"}),e.jsx("p",{style:{color:"#666"},children:"This is the last section, showing how multiple dividers can be used throughout content."})]})},a={render:()=>e.jsxs("div",{style:{width:"300px",border:"1px solid #e5e5e5",borderRadius:"8px",padding:"16px"},children:[e.jsx("div",{style:{padding:"8px 0"},children:"Item 1"}),e.jsx(i,{spacing:"sm"}),e.jsx("div",{style:{padding:"8px 0"},children:"Item 2"}),e.jsx(i,{spacing:"sm"}),e.jsx("div",{style:{padding:"8px 0"},children:"Item 3"}),e.jsx(i,{spacing:"sm"}),e.jsx("div",{style:{padding:"8px 0"},children:"Item 4"})]})};var c,l,p;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '300px'
  }}>\r
      <Divider />\r
    </div>
}`,...(p=(l=r.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var x,v,m;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '300px',
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
  }}>\r
      <div>\r
        <div style={{
        marginBottom: '8px',
        fontSize: '14px',
        color: '#666'
      }}>Solid</div>\r
        <Divider variant="solid" />\r
      </div>\r
      <div>\r
        <div style={{
        marginBottom: '8px',
        fontSize: '14px',
        color: '#666'
      }}>Dashed</div>\r
        <Divider variant="dashed" />\r
      </div>\r
    </div>
}`,...(m=(v=t.parameters)==null?void 0:v.docs)==null?void 0:m.source}}};var h,g,y;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '300px',
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
  }}>\r
      <div>\r
        <div style={{
        fontSize: '14px',
        color: '#666'
      }}>None</div>\r
        <Divider spacing="none" />\r
        <div style={{
        fontSize: '14px',
        color: '#666'
      }}>Content</div>\r
      </div>\r
      <div>\r
        <div style={{
        fontSize: '14px',
        color: '#666'
      }}>Small</div>\r
        <Divider spacing="sm" />\r
        <div style={{
        fontSize: '14px',
        color: '#666'
      }}>Content</div>\r
      </div>\r
      <div>\r
        <div style={{
        fontSize: '14px',
        color: '#666'
      }}>Medium</div>\r
        <Divider spacing="md" />\r
        <div style={{
        fontSize: '14px',
        color: '#666'
      }}>Content</div>\r
      </div>\r
      <div>\r
        <div style={{
        fontSize: '14px',
        color: '#666'
      }}>Large</div>\r
        <Divider spacing="lg" />\r
        <div style={{
        fontSize: '14px',
        color: '#666'
      }}>Content</div>\r
      </div>\r
    </div>
}`,...(y=(g=s.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var f,S,j;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    height: '100px'
  }}>\r
      <div>Section 1</div>\r
      <Divider orientation="vertical" spacing="none" />\r
      <div>Section 2</div>\r
      <Divider orientation="vertical" spacing="none" />\r
      <div>Section 3</div>\r
    </div>
}`,...(j=(S=n.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};var u,z,D;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '0',
    height: '100px'
  }}>\r
      <div>Section 1</div>\r
      <Divider orientation="vertical" spacing="md" />\r
      <div>Section 2</div>\r
      <Divider orientation="vertical" spacing="md" />\r
      <div>Section 3</div>\r
    </div>
}`,...(D=(z=o.parameters)==null?void 0:z.docs)==null?void 0:D.source}}};var I,w,B;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '400px'
  }}>\r
      <h2 style={{
      fontSize: '20px',
      fontWeight: 600,
      marginBottom: '8px'
    }}>Section Title</h2>\r
      <p style={{
      marginBottom: '16px',
      color: '#666'
    }}>\r
        This is some content in the first section. It demonstrates how dividers can be used to separate different parts of a page.\r
      </p>\r
      <Divider spacing="lg" />\r
      <h2 style={{
      fontSize: '20px',
      fontWeight: 600,
      marginBottom: '8px'
    }}>Another Section</h2>\r
      <p style={{
      marginBottom: '16px',
      color: '#666'
    }}>\r
        Here's more content in a different section. The divider helps create visual separation.\r
      </p>\r
      <Divider spacing="lg" variant="dashed" />\r
      <h2 style={{
      fontSize: '20px',
      fontWeight: 600,
      marginBottom: '8px'
    }}>Final Section</h2>\r
      <p style={{
      color: '#666'
    }}>\r
        This is the last section, showing how multiple dividers can be used throughout content.\r
      </p>\r
    </div>
}`,...(B=(w=d.parameters)==null?void 0:w.docs)==null?void 0:B.source}}};var C,T,b;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '300px',
    border: '1px solid #e5e5e5',
    borderRadius: '8px',
    padding: '16px'
  }}>\r
      <div style={{
      padding: '8px 0'
    }}>Item 1</div>\r
      <Divider spacing="sm" />\r
      <div style={{
      padding: '8px 0'
    }}>Item 2</div>\r
      <Divider spacing="sm" />\r
      <div style={{
      padding: '8px 0'
    }}>Item 3</div>\r
      <Divider spacing="sm" />\r
      <div style={{
      padding: '8px 0'
    }}>Item 4</div>\r
    </div>
}`,...(b=(T=a.parameters)==null?void 0:T.docs)==null?void 0:b.source}}};const A=["Default","Variants","Spacing","Vertical","VerticalWithSpacing","InContent","InList"];export{r as Default,d as InContent,a as InList,s as Spacing,t as Variants,n as Vertical,o as VerticalWithSpacing,A as __namedExportsOrder,R as default};
