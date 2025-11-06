import{j as e}from"./iframe-DR2fKmk8.js";import{L as p,a as u,b as c,c as m}from"./index-CgJY_NNi.js";import"./preload-helper-PPVm8Dsz.js";const l=({options:o,value:s,onChange:i,placeholder:d="Select...",disabled:t=!1})=>e.jsxs("select",{value:s,onChange:a=>i?.(a.target.value),disabled:t,style:{padding:"8px 12px",borderRadius:4,border:"1px solid #ccc",minWidth:160,cursor:t?"not-allowed":"pointer"},children:[e.jsx("option",{value:"",disabled:!0,children:d}),o.map(a=>e.jsx("option",{value:a.value,children:a.label},a.value))]});l.__docgenInfo={description:`Select component

Example usage:
\`\`\`tsx
<Select
  options={[
    { value: 'apple', label: 'Apple' },
    { value: 'orange', label: 'Orange' }
  ]}
  value="apple"
  onChange={v => console.log(v)}
/>
\`\`\``,methods:[],displayName:"Select",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  /** Value of the option */
  value: string | number;
  /** Label displayed in the dropdown */
  label: string;
}`,signature:{properties:[{key:"value",value:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}],required:!0},description:"Value of the option"},{key:"label",value:{name:"string",required:!0},description:"Label displayed in the dropdown"}]}}],raw:"Option[]"},description:"Options to show in the dropdown"},value:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"Selected value"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string | number) => void",signature:{arguments:[{type:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},name:"value"}],return:{name:"void"}}},description:"Change handler"},placeholder:{required:!1,tsType:{name:"string"},description:"Optional placeholder",defaultValue:{value:'"Select..."',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Disable the select",defaultValue:{value:"false",computed:!1}}}};const h={title:"Components/Select",component:l,tags:["autodocs"]},r={args:{options:[{value:"apple",label:"Apple"},{value:"orange",label:"Orange"},{value:"banana",label:"Banana"}],value:"apple"},argTypes:{onChange:{action:"changed"}},parameters:{docs:{source:{type:"dynamic"}}}},n=()=>e.jsx(p,{code:`
<Select
  options={[
    { value: 'apple', label: 'Apple' },
    { value: 'orange', label: 'Orange' },
    { value: 'banana', label: 'Banana' }
  ]}
  value="apple"
  onChange={v => console.log(v)}
/>
`,scope:{Select:l},children:e.jsxs("div",{style:{border:"1px solid #ddd",padding:16,borderRadius:8,width:350},children:[e.jsx("h4",{style:{marginBottom:8},children:"🧑‍💻 Live JSX Editor"}),e.jsx(u,{style:{background:"#272822",color:"#fff",fontSize:14}}),e.jsx(c,{style:{color:"red",marginTop:4}}),e.jsx("div",{style:{marginTop:12},children:e.jsx(m,{})})]})});n.__docgenInfo={description:"",methods:[],displayName:"LivePlayground"};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    options: [{
      value: "apple",
      label: "Apple"
    }, {
      value: "orange",
      label: "Orange"
    }, {
      value: "banana",
      label: "Banana"
    }],
    value: "apple"
  },
  argTypes: {
    onChange: {
      action: "changed"
    }
  },
  parameters: {
    docs: {
      source: {
        type: "dynamic"
      }
    }
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
  const codeExample = \`
<Select
  options={[
    { value: 'apple', label: 'Apple' },
    { value: 'orange', label: 'Orange' },
    { value: 'banana', label: 'Banana' }
  ]}
  value="apple"
  onChange={v => console.log(v)}
/>
\`;
  return <LiveProvider code={codeExample} scope={{
    Select
  }}>
      <div style={{
      border: "1px solid #ddd",
      padding: 16,
      borderRadius: 8,
      width: 350
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
}`,...n.parameters?.docs?.source}}};const y=["Default","LivePlayground"];export{r as Default,n as LivePlayground,y as __namedExportsOrder,h as default};
