import{j as e}from"./iframe-DR2fKmk8.js";import{L as a,a as i,b as t,c as d}from"./index-CgJY_NNi.js";import{B as s}from"./Button-c6G-XjOv.js";import"./preload-helper-PPVm8Dsz.js";import"./Icon-_2qw88HC.js";const g={title:"Components/Button",component:s,tags:["autodocs"]},n={args:{icon:{name:"plus",size:20}}},o={args:{label:"Add Item",icon:{name:"plus",size:16}}},r=()=>e.jsx(a,{code:'<Button label="Edit me live!" variant="primary" />',scope:{Button:s},children:e.jsxs("div",{style:{border:"1px solid #ddd",padding:16,borderRadius:8,width:350,background:"#f9f9f9"},children:[e.jsx("h4",{style:{marginBottom:8},children:"🧑‍💻 Live JSX Editor"}),e.jsx(i,{style:{background:"#272822",color:"#fff",fontSize:14}}),e.jsx(t,{style:{color:"red",marginTop:4}}),e.jsx("div",{style:{marginTop:12},children:e.jsx(d,{})})]})});r.__docgenInfo={description:"",methods:[],displayName:"LivePlayground"};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    icon: {
      name: 'plus',
      size: 20
    }
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Add Item',
    icon: {
      name: 'plus',
      size: 16
    }
  }
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
  const codeExample = \`<Button label="Edit me live!" variant="primary" />\`;
  return <LiveProvider code={codeExample} scope={{
    Button
  }}>
      <div style={{
      border: "1px solid #ddd",
      padding: 16,
      borderRadius: 8,
      width: 350,
      background: "#f9f9f9"
    }}>
        <h4 style={{
        marginBottom: 8
      }}>🧑‍💻 Live JSX Editor</h4>
        <LiveEditor style={{
        background: "#272822",
        color: "#fff",
        fontSize: 14
      }} />
        <LiveError style={{
        color: "red",
        marginTop: 4
      }} />
        <div style={{
        marginTop: 12
      }}>
          <LivePreview />
        </div>
      </div>
    </LiveProvider>;
}`,...r.parameters?.docs?.source}}};const f=["IconOnly","LabelAndIcon","LivePlayground"];export{n as IconOnly,o as LabelAndIcon,r as LivePlayground,f as __namedExportsOrder,g as default};
