import{T as V,r as C,o as r,f as A,g as U,b as e,c as d,F as h,d as g,t as p,e as _,j as T,w as a,v as m,z as y,h as b,l as x,p as S,m as O}from"./app-DxanxNP0.js";import{A as B}from"./AuthenticatedLayout-CSYe8vrk.js";import{_ as M}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./ASide-CzFLsqoZ.js";const P={props:{categories:{type:Array,required:!0}},components:{AuthenticatedLayout:B},data(){return{form:V({name:"",slug:"",description:"",price:"",quantityType:"",featured:!1,unit:"",files:[null,null,null],attributes:[],categories:[]})}},methods:{updateSlug(){this.form.slug=this.createSlug(this.form.name)},createSlug(i){return i.toLowerCase().replace(/\s+/g,"-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")},async submitForm(){await this.form.post("/products-store")},addAttribute(){this.form.attributes.push({name:"",type:"text",options:[]})},removeAttribute(i){this.form.attributes.splice(i,1)},updateOptions(i){this.form.attributes[i].options=[]},addOption(i){this.form.attributes[i].options.push({value:"",cost:0})},removeOption(i,o){this.form.attributes[i].options.splice(o,1)}}},l=i=>(S("data-v-2ac48b06"),i=i(),O(),i),q=l(()=>e("div",{class:"p-4 bg-white block sm:flex items-center justify-between border-b border-gray-200 lg:mt-1.5"},[e("div",{class:"mb-1 w-full"},[e("div",{class:"mb-4"},[e("nav",{class:"flex mb-5","aria-label":"Breadcrumb"},[e("ol",{class:"inline-flex items-center space-x-1 md:space-x-2"},[e("li",{class:"inline-flex items-center"},[e("a",{href:"#",class:"text-gray-700 hover:text-gray-900 inline-flex items-center"},[e("svg",{class:"w-5 h-5 mr-2.5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"})]),b(" Home ")])]),e("li",null,[e("div",{class:"flex items-center"},[e("svg",{class:"w-6 h-6 text-gray-400",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"fill-rule":"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z","clip-rule":"evenodd"})]),e("span",{class:"text-gray-400 ml-1 md:ml-2 text-sm font-medium","aria-current":"page"},"Products")])])])]),e("h1",{class:"text-xl sm:text-2xl font-semibold text-gray-900"},"Add Product")])])],-1)),L={class:"flex flex-col"},j={class:"overflow-x-auto"},F={class:"align-middle inline-block min-w-full"},N={class:"shadow overflow-hidden"},z={class:"w-4/12 mx-auto my-10"},I={key:0},R={key:1,class:"text-green-500"},D={class:"mt-4 flex flex-col"},H=l(()=>e("label",{for:"name"},"Product Name:",-1)),E={class:"mt-4 flex flex-col"},Q=l(()=>e("label",{for:"quantityType",class:"block text-gray-700"},"Quantity Type",-1)),G=l(()=>e("option",{value:"type-1"},"Type 1 starts at (100)",-1)),J=l(()=>e("option",{value:"type-2"},"Type 2 starts (1)",-1)),K=l(()=>e("option",{value:"type-3"},"Type 3 starts (10)",-1)),W=[G,J,K],X={class:"mt-4 flex flex-col"},Y=l(()=>e("label",{for:"slug"},"Product Slug:",-1)),Z={class:"mt-4 flex flex-col"},$={for:"featured"},ee={class:"mt-4 flex flex-col"},te=l(()=>e("label",{for:"description"},"Description:",-1)),oe={class:"mt-4"},se=l(()=>e("label",{for:"price",class:"block"},"Price Per unit:",-1)),le={class:"mt-4"},ie=l(()=>e("label",{for:"unit",class:"block"},"Minimum Unit(s):",-1)),re=l(()=>e("label",{for:"",class:"my-4 mt-10 block"},"Product Image",-1)),ne={class:"mb-4"},de=["value"],ae={class:"mb-4"},ue=["value"],ce={class:"mb-4"},me=["value"],pe={class:"mt-4"},fe=l(()=>e("label",null,"Select Categories:",-1)),_e=["value","id"],ve=["for"],he={class:"mt-6 flex justify-between items-center border-t py-4"},ge=l(()=>e("h2",{class:"text-lg font-semibold"},"Attributes",-1)),be=l(()=>e("svg",{class:"-ml-1 mr-2 h-6 w-6",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"fill-rule":"evenodd",d:"M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z","clip-rule":"evenodd"})],-1)),ye={class:"flex justify-between items-center"},xe={class:"text-lg font-semibold"},we=["onClick"],ke={class:"mt-4 flex flex-col"},Ve=l(()=>e("label",{for:"attribute-name"},"Name:",-1)),Ce=["onUpdate:modelValue","id"],Ae={class:"mt-4 flex flex-col"},Ue=l(()=>e("label",{for:"attribute-type"},"Type:",-1)),Te=["onUpdate:modelValue","onChange","id"],Se=l(()=>e("option",{value:"text"},"Text",-1)),Oe=l(()=>e("option",{value:"radio"},"Radio",-1)),Be=l(()=>e("option",{value:"radio_single"},"Radio Single",-1)),Me=l(()=>e("option",{value:"textarea"},"Textarea",-1)),Pe=l(()=>e("option",{value:"select"},"Select",-1)),qe=l(()=>e("option",{value:"number"},"Number",-1)),Le=[Se,Oe,Be,Me,Pe,qe],je={key:0,class:"mt-6"},Fe=["onClick"],Ne=l(()=>e("svg",{class:"-ml-1 mr-2 h-6 w-6",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"fill-rule":"evenodd",d:"M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z","clip-rule":"evenodd"})],-1)),ze={class:"flex justify-between items-center"},Ie=["for"],Re=["onClick"],De=["onUpdate:modelValue","id"],He=["for"],Ee=["onUpdate:modelValue","id"],Qe=l(()=>e("div",{class:"mt-8 flex justify-end"},[e("button",{class:"p-2 px-4 bg-green-600 text-white rounded-sm",type:"submit"},"Add Product")],-1));function Ge(i,o,w,Je,s,c){const k=C("AuthenticatedLayout");return r(),A(k,null,{default:U(()=>[e("div",null,[q,e("div",L,[e("div",j,[e("div",F,[e("div",N,[e("div",z,[i.$page.props.errors?(r(),d("div",I,[(r(!0),d(h,null,g(i.$page.props.errors,t=>(r(),d("div",{key:t,class:"text-red-600"},p(t),1))),128))])):_("",!0),i.$page.props.flash.success?(r(),d("div",R,p(i.$page.props.flash.success),1)):_("",!0),e("form",{onSubmit:o[13]||(o[13]=T((...t)=>c.submitForm&&c.submitForm(...t),["prevent"]))},[e("div",D,[H,a(e("input",{type:"text","onUpdate:modelValue":o[0]||(o[0]=t=>s.form.name=t),id:"name",onInput:o[1]||(o[1]=(...t)=>c.updateSlug&&c.updateSlug(...t))},null,544),[[m,s.form.name]])]),e("div",E,[Q,a(e("select",{"onUpdate:modelValue":o[2]||(o[2]=t=>s.form.quantityType=t),name:"quantityType",id:"quantityType"},W,512),[[y,s.form.quantityType]])]),e("div",X,[Y,a(e("input",{type:"text","onUpdate:modelValue":o[3]||(o[3]=t=>s.form.slug=t),id:"slug"},null,512),[[m,s.form.slug]])]),e("div",Z,[e("label",$,[b("Add to Featured Product "),a(e("input",{type:"checkbox","onUpdate:modelValue":o[4]||(o[4]=t=>s.form.featured=t),id:"featured"},null,512),[[x,s.form.featured]])])]),e("div",ee,[te,a(e("textarea",{"onUpdate:modelValue":o[5]||(o[5]=t=>s.form.description=t),id:"description"},null,512),[[m,s.form.description]])]),e("div",oe,[se,a(e("input",{type:"text","onUpdate:modelValue":o[6]||(o[6]=t=>s.form.price=t),id:"price",class:"mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm border-gray-300 rounded-md"},null,512),[[m,s.form.price]])]),e("div",le,[ie,a(e("input",{type:"text","onUpdate:modelValue":o[7]||(o[7]=t=>s.form.unit=t),id:"unit",class:"mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm border-gray-300 rounded-md"},null,512),[[m,s.form.unit]])]),re,e("div",ne,[e("input",{type:"file",onInput:o[8]||(o[8]=t=>s.form.files[0]=t.target.files[0])},null,32),s.form.progress?(r(),d("progress",{key:0,value:s.form.progress.percentage,max:"100"},p(s.form.progress.percentage)+"% ",9,de)):_("",!0)]),e("div",ae,[e("input",{type:"file",onInput:o[9]||(o[9]=t=>s.form.files[1]=t.target.files[0])},null,32),s.form.progress?(r(),d("progress",{key:0,value:s.form.progress.percentage,max:"100"},p(s.form.progress.percentage)+"% ",9,ue)):_("",!0)]),e("div",ce,[e("input",{type:"file",onInput:o[10]||(o[10]=t=>s.form.files[2]=t.target.files[0])},null,32),s.form.progress?(r(),d("progress",{key:0,value:s.form.progress.percentage,max:"100"},p(s.form.progress.percentage)+"% ",9,me)):_("",!0)]),e("div",pe,[fe,(r(!0),d(h,null,g(w.categories,t=>(r(),d("div",{key:t.id},[a(e("input",{type:"checkbox","onUpdate:modelValue":o[11]||(o[11]=n=>s.form.categories=n),value:t.id,id:"category_"+t.id},null,8,_e),[[x,s.form.categories]]),e("label",{for:"category_"+t.id},p(t.name),9,ve)]))),128))]),e("div",he,[ge,e("button",{onClick:o[12]||(o[12]=(...t)=>c.addAttribute&&c.addAttribute(...t)),type:"button",class:"text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium inline-flex items-center rounded-lg text-sm px-3 py-2"},[be,b(" Add Attribute ")])]),(r(!0),d(h,null,g(s.form.attributes,(t,n)=>(r(),d("div",{key:n,class:"mt-6 border p-4 rounded-lg"},[e("div",ye,[e("h2",xe,"Attribute "+p(n+1),1),e("button",{onClick:u=>c.removeAttribute(n),type:"button",class:"text-red-600 hover:text-red-800 font-medium text-sm"}," Remove Attribute ",8,we)]),e("div",ke,[Ve,a(e("input",{type:"text","onUpdate:modelValue":u=>t.name=u,id:"attribute-name-"+n},null,8,Ce),[[m,t.name]])]),e("div",Ae,[Ue,a(e("select",{"onUpdate:modelValue":u=>t.type=u,onChange:u=>c.updateOptions(n),id:"attribute-type-"+n},Le,40,Te),[[y,t.type]])]),["radio","radio_single","select"].includes(t.type)?(r(),d("div",je,[e("button",{onClick:u=>c.addOption(n),type:"button",class:"text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium inline-flex items-center rounded-lg text-sm px-3 py-2"},[Ne,b(" Add Option ")],8,Fe),(r(!0),d(h,null,g(t.options,(u,f)=>(r(),d("div",{key:f,class:"mt-4 flex flex-col"},[e("div",ze,[e("label",{for:"option-value-"+n+"-"+f},"Option Value:",8,Ie),e("button",{onClick:v=>c.removeOption(n,f),type:"button",class:"text-red-600 hover:text-red-800 font-medium text-sm"}," Remove Option ",8,Re)]),a(e("input",{type:"text","onUpdate:modelValue":v=>u.value=v,id:"option-value-"+n+"-"+f},null,8,De),[[m,u.value]]),e("label",{for:"option-cost-"+n+"-"+f},"Option Cost:",8,He),a(e("input",{type:"text","onUpdate:modelValue":v=>u.cost=v,id:"option-cost-"+n+"-"+f},null,8,Ee),[[m,u.cost]])]))),128))])):_("",!0)]))),128)),Qe],32)])])])])])])]),_:1})}const Ze=M(P,[["render",Ge],["__scopeId","data-v-2ac48b06"]]);export{Ze as default};
