import{j as n}from"./iframe-DR2fKmk8.js";import{I as r}from"./Icon-_2qw88HC.js";import"./preload-helper-PPVm8Dsz.js";const m={title:"Components/Icon",component:r},s={render:()=>{const t=["plus","minus","diff"],o=[12,16,24,32];return n.jsx("div",{style:{display:"flex",gap:20},children:t.map(e=>o.map(i=>n.jsxs("div",{style:{textAlign:"center"},children:[n.jsx(r,{name:e,size:i}),n.jsx("div",{children:e}),n.jsxs("div",{children:[i,"px"]})]},`${e}-${i}`)))})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => {
    const icons: IconName[] = ['plus', 'minus', 'diff'];
    const sizes = [12, 16, 24, 32];
    return <div style={{
      display: 'flex',
      gap: 20
    }}>
        {icons.map(name => sizes.map(size => <div key={\`\${name}-\${size}\`} style={{
        textAlign: 'center'
      }}>
              <Icon name={name} size={size} />
              <div>{name}</div>
              <div>{size}px</div>
            </div>))}
      </div>;
  }
}`,...s.parameters?.docs?.source}}};const p=["AllIcons"];export{s as AllIcons,p as __namedExportsOrder,m as default};
