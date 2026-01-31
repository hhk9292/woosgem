import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{r as A}from"./index-D4H_InIO.js";import{D as m,a as r,B as a,b as o,T as i,A as s}from"./Divider-Ddy17Ooe.js";const P={title:"Design System/Theme",parameters:{layout:"fullscreen",docs:{description:{component:`Theme showcase and switcher stories\r

Available themes:\r
- default (light theme)\r
- dark (dark theme)\r
- crypto (crypto-themed UI)`}}},tags:["autodocs"]},l=({theme:t})=>e.jsxs("div",{"data-theme":t,style:{padding:"32px",minHeight:"400px",background:"var(--wg-color-bg-primary, #ffffff)",color:"var(--wg-color-text-primary, #000000)"},children:[e.jsxs("h2",{style:{marginBottom:"8px",fontSize:"24px",fontWeight:600},children:[t.charAt(0).toUpperCase()+t.slice(1)," Theme"]}),e.jsxs("p",{style:{marginBottom:"24px",color:"var(--wg-color-text-secondary, #666666)"},children:["Preview of all components in ",t," theme"]}),e.jsxs("div",{style:{marginBottom:"32px"},children:[e.jsx("h3",{style:{marginBottom:"12px",fontSize:"16px",fontWeight:600},children:"Buttons"}),e.jsxs("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap"},children:[e.jsx(r,{variant:"filled",color:"primary",children:"Primary"}),e.jsx(r,{variant:"filled",color:"secondary",children:"Secondary"}),e.jsx(r,{variant:"filled",color:"danger",children:"Danger"}),e.jsx(r,{variant:"filled",color:"success",children:"Success"}),e.jsx(r,{variant:"outline",color:"primary",children:"Outline"}),e.jsx(r,{variant:"ghost",color:"primary",children:"Ghost"})]})]}),e.jsxs("div",{style:{marginBottom:"32px"},children:[e.jsx("h3",{style:{marginBottom:"12px",fontSize:"16px",fontWeight:600},children:"Badges"}),e.jsxs("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap",alignItems:"center"},children:[e.jsx(a,{color:"primary",children:"Primary"}),e.jsx(a,{color:"secondary",children:"Secondary"}),e.jsx(a,{color:"danger",children:"Danger"}),e.jsx(a,{color:"success",children:"Success"}),e.jsx(a,{color:"warning",children:"Warning"}),e.jsx(a,{color:"info",children:"Info"})]})]}),e.jsxs("div",{style:{marginBottom:"32px"},children:[e.jsx("h3",{style:{marginBottom:"12px",fontSize:"16px",fontWeight:600},children:"Inputs"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px",maxWidth:"400px"},children:[e.jsx(o,{variant:"outline",placeholder:"Outline input"}),e.jsx(o,{variant:"filled",placeholder:"Filled input"}),e.jsx(o,{variant:"underline",placeholder:"Underline input"})]})]}),e.jsxs("div",{style:{marginBottom:"32px"},children:[e.jsx("h3",{style:{marginBottom:"12px",fontSize:"16px",fontWeight:600},children:"Tabs"}),e.jsxs("div",{style:{display:"flex",gap:"8px"},children:[e.jsx(i,{variant:"underline",selected:!0,children:"Overview"}),e.jsx(i,{variant:"underline",children:"Activity"}),e.jsx(i,{variant:"underline",children:"Settings"})]})]}),e.jsxs("div",{style:{marginBottom:"32px"},children:[e.jsx("h3",{style:{marginBottom:"12px",fontSize:"16px",fontWeight:600},children:"Avatars"}),e.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center"},children:[e.jsx(s,{size:"sm",fallback:"SM",children:"SM"}),e.jsx(s,{size:"md",fallback:"MD",children:"MD"}),e.jsx(s,{size:"lg",fallback:"LG",children:"LG"}),e.jsx(s,{size:"lg",shape:"square",fallback:"SQ",children:"SQ"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"12px",fontSize:"16px",fontWeight:600},children:"Divider"}),e.jsx(m,{spacing:"md"})]})]}),n={render:()=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr",gap:"0"},children:[e.jsx(l,{theme:"default"}),e.jsx(m,{spacing:"none"}),e.jsx(l,{theme:"dark"}),e.jsx(m,{spacing:"none"}),e.jsx(l,{theme:"crypto"})]})},d={render:()=>{const[t,h]=A.useState("default");return e.jsx("div",{"data-theme":t,style:{padding:"32px",minHeight:"100vh",background:"var(--wg-color-bg-primary, #ffffff)",color:"var(--wg-color-text-primary, #000000)",transition:"background-color 0.3s ease, color 0.3s ease"},children:e.jsxs("div",{style:{maxWidth:"800px",margin:"0 auto"},children:[e.jsx("h1",{style:{marginBottom:"8px",fontSize:"32px",fontWeight:700},children:"Theme Switcher Demo"}),e.jsx("p",{style:{marginBottom:"24px",color:"var(--wg-color-text-secondary, #666666)"},children:"Click the buttons below to switch between themes"}),e.jsxs("div",{style:{display:"flex",gap:"12px",marginBottom:"48px"},children:[e.jsx(r,{variant:t==="default"?"filled":"outline",color:"primary",onClick:()=>h("default"),children:"Default Theme"}),e.jsx(r,{variant:t==="dark"?"filled":"outline",color:"primary",onClick:()=>h("dark"),children:"Dark Theme"}),e.jsx(r,{variant:t==="crypto"?"filled":"outline",color:"primary",onClick:()=>h("crypto"),children:"Crypto Theme"})]}),e.jsxs("div",{style:{padding:"24px",borderRadius:"12px",background:"var(--wg-color-bg-secondary, #f5f5f5)",marginBottom:"32px"},children:[e.jsx("div",{style:{display:"flex",alignItems:"center",gap:"12px",marginBottom:"12px"},children:e.jsxs(a,{color:"primary",size:"lg",children:["Current Theme: ",t]})}),e.jsxs("p",{style:{color:"var(--wg-color-text-secondary, #666666)",marginBottom:"16px"},children:["Themes are applied using the ",e.jsx("code",{children:"data-theme"})," attribute. All colors update automatically based on CSS custom properties."]}),e.jsx("code",{style:{display:"block",padding:"12px",background:"var(--wg-color-bg-primary, #ffffff)",borderRadius:"8px",fontSize:"14px",fontFamily:"monospace"},children:`<div data-theme="${t}">...</div>`})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px"},children:[e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"16px",fontSize:"20px",fontWeight:600},children:"Buttons"}),e.jsxs("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap"},children:[e.jsx(r,{color:"primary",children:"Primary"}),e.jsx(r,{color:"secondary",children:"Secondary"}),e.jsx(r,{color:"danger",children:"Danger"}),e.jsx(r,{color:"success",children:"Success"}),e.jsx(r,{variant:"outline",color:"primary",children:"Outline"}),e.jsx(r,{variant:"ghost",color:"primary",children:"Ghost"}),e.jsx(r,{loading:!0,children:"Loading"}),e.jsx(r,{disabled:!0,children:"Disabled"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"16px",fontSize:"20px",fontWeight:600},children:"Form Elements"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px",maxWidth:"400px"},children:[e.jsx(o,{placeholder:"Enter your name"}),e.jsx(o,{variant:"filled",placeholder:"Enter your email"}),e.jsx(o,{variant:"underline",placeholder:"Enter your password",type:"password"}),e.jsx(o,{error:!0,placeholder:"Error state"}),e.jsx(o,{success:!0,placeholder:"Success state"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"16px",fontSize:"20px",fontWeight:600},children:"Tabs"}),e.jsxs("div",{style:{display:"flex",gap:"8px",marginBottom:"16px"},children:[e.jsx(i,{variant:"underline",selected:!0,children:"Overview"}),e.jsx(i,{variant:"underline",children:"Activity"}),e.jsx(i,{variant:"underline",children:"Analytics"}),e.jsx(i,{variant:"underline",disabled:!0,children:"Reports"})]}),e.jsxs("div",{style:{display:"flex",gap:"8px"},children:[e.jsx(i,{variant:"filled",selected:!0,children:"All"}),e.jsx(i,{variant:"filled",children:"Active"}),e.jsx(i,{variant:"filled",children:"Archived"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"16px",fontSize:"20px",fontWeight:600},children:"User Profile Card"}),e.jsxs("div",{style:{padding:"24px",borderRadius:"12px",background:"var(--wg-color-bg-secondary, #f5f5f5)",maxWidth:"400px"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px",marginBottom:"16px"},children:[e.jsx(s,{size:"xl",fallback:"JD",children:"JD"}),e.jsxs("div",{children:[e.jsx("h4",{style:{fontSize:"18px",fontWeight:600,marginBottom:"4px"},children:"John Doe"}),e.jsx("p",{style:{fontSize:"14px",color:"var(--wg-color-text-secondary, #666666)"},children:"john.doe@example.com"})]})]}),e.jsx(m,{spacing:"md"}),e.jsxs("div",{style:{display:"flex",gap:"8px",marginTop:"16px"},children:[e.jsx(a,{color:"success",children:"Active"}),e.jsx(a,{color:"primary",children:"Premium"}),e.jsx(a,{color:"info",children:"Verified"})]})]})]})]})]})})}},c={render:()=>e.jsx(l,{theme:"default"})},p={render:()=>e.jsx(l,{theme:"dark"})},x={render:()=>e.jsx(l,{theme:"crypto"})};var g,u,y;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '0'
  }}>\r
      <ThemeShowcase theme="default" />\r
      <Divider spacing="none" />\r
      <ThemeShowcase theme="dark" />\r
      <Divider spacing="none" />\r
      <ThemeShowcase theme="crypto" />\r
    </div>
}`,...(y=(u=n.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};var f,v,j;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => {
    const [theme, setTheme] = useState<'default' | 'dark' | 'crypto'>('default');
    return <div data-theme={theme} style={{
      padding: '32px',
      minHeight: '100vh',
      background: 'var(--wg-color-bg-primary, #ffffff)',
      color: 'var(--wg-color-text-primary, #000000)',
      transition: 'background-color 0.3s ease, color 0.3s ease'
    }}>\r
        <div style={{
        maxWidth: '800px',
        margin: '0 auto'
      }}>\r
          <h1 style={{
          marginBottom: '8px',
          fontSize: '32px',
          fontWeight: 700
        }}>\r
            Theme Switcher Demo\r
          </h1>\r
          <p style={{
          marginBottom: '24px',
          color: 'var(--wg-color-text-secondary, #666666)'
        }}>\r
            Click the buttons below to switch between themes\r
          </p>\r
\r
          {/* Theme Switcher Buttons */}\r
          <div style={{
          display: 'flex',
          gap: '12px',
          marginBottom: '48px'
        }}>\r
            <Button variant={theme === 'default' ? 'filled' : 'outline'} color="primary" onClick={() => setTheme('default')}>\r
              Default Theme\r
            </Button>\r
            <Button variant={theme === 'dark' ? 'filled' : 'outline'} color="primary" onClick={() => setTheme('dark')}>\r
              Dark Theme\r
            </Button>\r
            <Button variant={theme === 'crypto' ? 'filled' : 'outline'} color="primary" onClick={() => setTheme('crypto')}>\r
              Crypto Theme\r
            </Button>\r
          </div>\r
\r
          {/* Current Theme Info */}\r
          <div style={{
          padding: '24px',
          borderRadius: '12px',
          background: 'var(--wg-color-bg-secondary, #f5f5f5)',
          marginBottom: '32px'
        }}>\r
            <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            marginBottom: '12px'
          }}>\r
              <Badge color="primary" size="lg">\r
                Current Theme: {theme}\r
              </Badge>\r
            </div>\r
            <p style={{
            color: 'var(--wg-color-text-secondary, #666666)',
            marginBottom: '16px'
          }}>\r
              Themes are applied using the <code>data-theme</code> attribute. All colors update automatically\r
              based on CSS custom properties.\r
            </p>\r
            <code style={{
            display: 'block',
            padding: '12px',
            background: 'var(--wg-color-bg-primary, #ffffff)',
            borderRadius: '8px',
            fontSize: '14px',
            fontFamily: 'monospace'
          }}>\r
              {\`<div data-theme="\${theme}">...</div>\`}\r
            </code>\r
          </div>\r
\r
          {/* Component Examples */}\r
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '32px'
        }}>\r
            {/* Buttons Section */}\r
            <div>\r
              <h3 style={{
              marginBottom: '16px',
              fontSize: '20px',
              fontWeight: 600
            }}>\r
                Buttons\r
              </h3>\r
              <div style={{
              display: 'flex',
              gap: '12px',
              flexWrap: 'wrap'
            }}>\r
                <Button color="primary">Primary</Button>\r
                <Button color="secondary">Secondary</Button>\r
                <Button color="danger">Danger</Button>\r
                <Button color="success">Success</Button>\r
                <Button variant="outline" color="primary">Outline</Button>\r
                <Button variant="ghost" color="primary">Ghost</Button>\r
                <Button loading>Loading</Button>\r
                <Button disabled>Disabled</Button>\r
              </div>\r
            </div>\r
\r
            {/* Form Section */}\r
            <div>\r
              <h3 style={{
              marginBottom: '16px',
              fontSize: '20px',
              fontWeight: 600
            }}>\r
                Form Elements\r
              </h3>\r
              <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              maxWidth: '400px'
            }}>\r
                <Input placeholder="Enter your name" />\r
                <Input variant="filled" placeholder="Enter your email" />\r
                <Input variant="underline" placeholder="Enter your password" type="password" />\r
                <Input error placeholder="Error state" />\r
                <Input success placeholder="Success state" />\r
              </div>\r
            </div>\r
\r
            {/* Tabs Section */}\r
            <div>\r
              <h3 style={{
              marginBottom: '16px',
              fontSize: '20px',
              fontWeight: 600
            }}>\r
                Tabs\r
              </h3>\r
              <div style={{
              display: 'flex',
              gap: '8px',
              marginBottom: '16px'
            }}>\r
                <Tab variant="underline" selected>Overview</Tab>\r
                <Tab variant="underline">Activity</Tab>\r
                <Tab variant="underline">Analytics</Tab>\r
                <Tab variant="underline" disabled>Reports</Tab>\r
              </div>\r
              <div style={{
              display: 'flex',
              gap: '8px'
            }}>\r
                <Tab variant="filled" selected>All</Tab>\r
                <Tab variant="filled">Active</Tab>\r
                <Tab variant="filled">Archived</Tab>\r
              </div>\r
            </div>\r
\r
            {/* User Profile Card */}\r
            <div>\r
              <h3 style={{
              marginBottom: '16px',
              fontSize: '20px',
              fontWeight: 600
            }}>\r
                User Profile Card\r
              </h3>\r
              <div style={{
              padding: '24px',
              borderRadius: '12px',
              background: 'var(--wg-color-bg-secondary, #f5f5f5)',
              maxWidth: '400px'
            }}>\r
                <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                marginBottom: '16px'
              }}>\r
                  <Avatar size="xl" fallback="JD">JD</Avatar>\r
                  <div>\r
                    <h4 style={{
                    fontSize: '18px',
                    fontWeight: 600,
                    marginBottom: '4px'
                  }}>\r
                      John Doe\r
                    </h4>\r
                    <p style={{
                    fontSize: '14px',
                    color: 'var(--wg-color-text-secondary, #666666)'
                  }}>\r
                      john.doe@example.com\r
                    </p>\r
                  </div>\r
                </div>\r
                <Divider spacing="md" />\r
                <div style={{
                display: 'flex',
                gap: '8px',
                marginTop: '16px'
              }}>\r
                  <Badge color="success">Active</Badge>\r
                  <Badge color="primary">Premium</Badge>\r
                  <Badge color="info">Verified</Badge>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
      </div>;
  }
}`,...(j=(v=d.parameters)==null?void 0:v.docs)==null?void 0:j.source}}};var B,b,S;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <ThemeShowcase theme="default" />
}`,...(S=(b=c.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};var T,w,k;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <ThemeShowcase theme="dark" />
}`,...(k=(w=p.parameters)==null?void 0:w.docs)==null?void 0:k.source}}};var D,z,W;x.parameters={...x.parameters,docs:{...(D=x.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <ThemeShowcase theme="crypto" />
}`,...(W=(z=x.parameters)==null?void 0:z.docs)==null?void 0:W.source}}};const R=["AllThemes","ThemeSwitcher","DefaultTheme","DarkTheme","CryptoTheme"];export{n as AllThemes,x as CryptoTheme,p as DarkTheme,c as DefaultTheme,d as ThemeSwitcher,R as __namedExportsOrder,P as default};
