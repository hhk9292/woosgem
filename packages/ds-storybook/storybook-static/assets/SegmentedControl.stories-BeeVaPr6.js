import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{r as D}from"./index-D4H_InIO.js";import{S as t}from"./Divider-Ddy17Ooe.js";const F={title:"Components/SegmentedControl",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg"]},fullWidth:{control:"boolean"},disabled:{control:"boolean"}}},o={render:()=>e.jsxs(t,{size:"md",children:[e.jsx(t.Item,{selected:!0,children:"Option 1"}),e.jsx(t.Item,{children:"Option 2"}),e.jsx(t.Item,{children:"Option 3"})]})},n={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",alignItems:"flex-start"},children:[e.jsxs(t,{size:"sm",children:[e.jsx(t.Item,{selected:!0,children:"Small"}),e.jsx(t.Item,{children:"Option 2"}),e.jsx(t.Item,{children:"Option 3"})]}),e.jsxs(t,{size:"md",children:[e.jsx(t.Item,{selected:!0,children:"Medium"}),e.jsx(t.Item,{children:"Option 2"}),e.jsx(t.Item,{children:"Option 3"})]}),e.jsxs(t,{size:"lg",children:[e.jsx(t.Item,{selected:!0,children:"Large"}),e.jsx(t.Item,{children:"Option 2"}),e.jsx(t.Item,{children:"Option 3"})]})]})},d={render:()=>e.jsx("div",{style:{width:"400px"},children:e.jsxs(t,{size:"md",fullWidth:!0,children:[e.jsx(t.Item,{selected:!0,children:"Option 1"}),e.jsx(t.Item,{children:"Option 2"}),e.jsx(t.Item,{children:"Option 3"})]})})},s={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",alignItems:"flex-start"},children:[e.jsxs(t,{size:"md",children:[e.jsx(t.Item,{selected:!0,children:"Active"}),e.jsx(t.Item,{children:"Normal"}),e.jsx(t.Item,{disabled:!0,children:"Disabled Item"})]}),e.jsxs(t,{size:"md",disabled:!0,children:[e.jsx(t.Item,{selected:!0,children:"Disabled Control"}),e.jsx(t.Item,{children:"All Disabled"}),e.jsx(t.Item,{children:"Cannot Click"})]})]})},i={render:()=>{const[r,l]=D.useState("buy");return e.jsxs("div",{style:{width:"300px"},children:[e.jsxs(t,{size:"lg",fullWidth:!0,children:[e.jsx(t.Item,{selected:r==="buy",onClick:()=>l("buy"),children:"Buy"}),e.jsx(t.Item,{selected:r==="sell",onClick:()=>l("sell"),children:"Sell"})]}),e.jsxs("div",{style:{marginTop:"16px",padding:"16px",background:"#f5f5f5",borderRadius:"8px"},children:[e.jsx("div",{style:{fontWeight:600,marginBottom:"8px"},children:r==="buy"?"Buy Order":"Sell Order"}),e.jsx("div",{style:{fontSize:"14px",color:"#666"},children:r==="buy"?"Enter the amount you want to buy":"Enter the amount you want to sell"})]})]})}},m={render:()=>{const[r,l]=D.useState("all");return e.jsxs("div",{style:{width:"400px"},children:[e.jsx("h3",{style:{marginBottom:"12px",fontSize:"16px",fontWeight:600},children:"Tasks Filter"}),e.jsxs(t,{size:"md",fullWidth:!0,children:[e.jsx(t.Item,{selected:r==="all",onClick:()=>l("all"),children:"All"}),e.jsx(t.Item,{selected:r==="active",onClick:()=>l("active"),children:"Active"}),e.jsx(t.Item,{selected:r==="completed",onClick:()=>l("completed"),children:"Completed"})]}),e.jsx("div",{style:{marginTop:"16px",padding:"12px",border:"1px solid #e5e5e5",borderRadius:"8px"},children:e.jsxs("div",{style:{fontSize:"14px",color:"#666"},children:["Showing: ",e.jsx("strong",{style:{color:"#000"},children:r})," tasks"]})})]})}};var c,a,p;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <SegmentedControl size="md">\r
      <SegmentedControl.Item selected>Option 1</SegmentedControl.Item>\r
      <SegmentedControl.Item>Option 2</SegmentedControl.Item>\r
      <SegmentedControl.Item>Option 3</SegmentedControl.Item>\r
    </SegmentedControl>
}`,...(p=(a=o.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};var g,S,x;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    alignItems: 'flex-start'
  }}>\r
      <SegmentedControl size="sm">\r
        <SegmentedControl.Item selected>Small</SegmentedControl.Item>\r
        <SegmentedControl.Item>Option 2</SegmentedControl.Item>\r
        <SegmentedControl.Item>Option 3</SegmentedControl.Item>\r
      </SegmentedControl>\r
      <SegmentedControl size="md">\r
        <SegmentedControl.Item selected>Medium</SegmentedControl.Item>\r
        <SegmentedControl.Item>Option 2</SegmentedControl.Item>\r
        <SegmentedControl.Item>Option 3</SegmentedControl.Item>\r
      </SegmentedControl>\r
      <SegmentedControl size="lg">\r
        <SegmentedControl.Item selected>Large</SegmentedControl.Item>\r
        <SegmentedControl.Item>Option 2</SegmentedControl.Item>\r
        <SegmentedControl.Item>Option 3</SegmentedControl.Item>\r
      </SegmentedControl>\r
    </div>
}`,...(x=(S=n.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};var u,C,I;d.parameters={...d.parameters,docs:{...(u=d.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '400px'
  }}>\r
      <SegmentedControl size="md" fullWidth>\r
        <SegmentedControl.Item selected>Option 1</SegmentedControl.Item>\r
        <SegmentedControl.Item>Option 2</SegmentedControl.Item>\r
        <SegmentedControl.Item>Option 3</SegmentedControl.Item>\r
      </SegmentedControl>\r
    </div>
}`,...(I=(C=d.parameters)==null?void 0:C.docs)==null?void 0:I.source}}};var h,y,j;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    alignItems: 'flex-start'
  }}>\r
      <SegmentedControl size="md">\r
        <SegmentedControl.Item selected>Active</SegmentedControl.Item>\r
        <SegmentedControl.Item>Normal</SegmentedControl.Item>\r
        <SegmentedControl.Item disabled>Disabled Item</SegmentedControl.Item>\r
      </SegmentedControl>\r
      <SegmentedControl size="md" disabled>\r
        <SegmentedControl.Item selected>Disabled Control</SegmentedControl.Item>\r
        <SegmentedControl.Item>All Disabled</SegmentedControl.Item>\r
        <SegmentedControl.Item>Cannot Click</SegmentedControl.Item>\r
      </SegmentedControl>\r
    </div>
}`,...(j=(y=s.parameters)==null?void 0:y.docs)==null?void 0:j.source}}};var f,v,b;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = useState<'buy' | 'sell'>('buy');
    return <div style={{
      width: '300px'
    }}>\r
        <SegmentedControl size="lg" fullWidth>\r
          <SegmentedControl.Item selected={selected === 'buy'} onClick={() => setSelected('buy')}>\r
            Buy\r
          </SegmentedControl.Item>\r
          <SegmentedControl.Item selected={selected === 'sell'} onClick={() => setSelected('sell')}>\r
            Sell\r
          </SegmentedControl.Item>\r
        </SegmentedControl>\r
        <div style={{
        marginTop: '16px',
        padding: '16px',
        background: '#f5f5f5',
        borderRadius: '8px'
      }}>\r
          <div style={{
          fontWeight: 600,
          marginBottom: '8px'
        }}>\r
            {selected === 'buy' ? 'Buy Order' : 'Sell Order'}\r
          </div>\r
          <div style={{
          fontSize: '14px',
          color: '#666'
        }}>\r
            {selected === 'buy' ? 'Enter the amount you want to buy' : 'Enter the amount you want to sell'}\r
          </div>\r
        </div>\r
      </div>;
  }
}`,...(b=(v=i.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var O,z,k;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => {
    const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');
    return <div style={{
      width: '400px'
    }}>\r
        <h3 style={{
        marginBottom: '12px',
        fontSize: '16px',
        fontWeight: 600
      }}>\r
          Tasks Filter\r
        </h3>\r
        <SegmentedControl size="md" fullWidth>\r
          <SegmentedControl.Item selected={filter === 'all'} onClick={() => setFilter('all')}>\r
            All\r
          </SegmentedControl.Item>\r
          <SegmentedControl.Item selected={filter === 'active'} onClick={() => setFilter('active')}>\r
            Active\r
          </SegmentedControl.Item>\r
          <SegmentedControl.Item selected={filter === 'completed'} onClick={() => setFilter('completed')}>\r
            Completed\r
          </SegmentedControl.Item>\r
        </SegmentedControl>\r
        <div style={{
        marginTop: '16px',
        padding: '12px',
        border: '1px solid #e5e5e5',
        borderRadius: '8px'
      }}>\r
          <div style={{
          fontSize: '14px',
          color: '#666'
        }}>\r
            Showing: <strong style={{
            color: '#000'
          }}>{filter}</strong> tasks\r
          </div>\r
        </div>\r
      </div>;
  }
}`,...(k=(z=m.parameters)==null?void 0:z.docs)==null?void 0:k.source}}};const B=["Default","Sizes","FullWidth","Disabled","BuySellExample","FilterExample"];export{i as BuySellExample,o as Default,s as Disabled,m as FilterExample,d as FullWidth,n as Sizes,B as __namedExportsOrder,F as default};
