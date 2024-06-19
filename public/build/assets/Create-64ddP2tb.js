import{T as V,r as C,o as r,f as A,g as T,b as e,c as d,F as g,d as b,t as m,e as _,j as U,w as a,v as p,z as y,C as x,h as v,l as S,n as M,p as O,m as B}from"./app-Ex42Apvz.js";import{A as N}from"./AuthenticatedLayout-Dy4-A1W6.js";import{_ as P}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./ASide-DdYFx5Fj.js";const q={props:{categories:{type:Array,required:!0}},components:{AuthenticatedLayout:N},data(){return{form:V({name:"",slug:"",description:"",price:"",quantityType:"",featured:"No",unit:"",files:[null,null,null],attributes:[],categories:[]})}},methods:{updateSlug(){this.form.slug=this.createSlug(this.form.name)},createSlug(i){return i.toLowerCase().replace(/\s+/g,"-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")},async submitForm(){await this.form.post("/products-store")},addAttribute(){this.form.attributes.push({name:"",type:"text",options:[]})},removeAttribute(i){this.form.attributes.splice(i,1)},updateOptions(i){this.form.attributes[i].options=[]},addOption(i){this.form.attributes[i].options.push({value:"",cost:0})},removeOption(i,s){this.form.attributes[i].options.splice(s,1)}}},l=i=>(O("data-v-b15b9e91"),i=i(),B(),i),L=l(()=>e("div",{class:"p-4 bg-white block sm:flex items-center justify-between border-b border-gray-200 lg:mt-1.5"},[e("div",{class:"mb-1 w-full"},[e("div",{class:"mb-4"},[e("nav",{class:"flex mb-5","aria-label":"Breadcrumb"},[e("ol",{class:"inline-flex items-center space-x-1 md:space-x-2"},[e("li",{class:"inline-flex items-center"},[e("a",{href:"#",class:"text-gray-700 hover:text-gray-900 inline-flex items-center"},[e("svg",{class:"w-5 h-5 mr-2.5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"})]),v(" Home ")])]),e("li",null,[e("div",{class:"flex items-center"},[e("svg",{class:"w-6 h-6 text-gray-400",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"fill-rule":"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z","clip-rule":"evenodd"})]),e("span",{class:"text-gray-400 ml-1 md:ml-2 text-sm font-medium","aria-current":"page"},"Products")])])])]),e("h1",{class:"text-xl sm:text-2xl font-semibold text-gray-900"},"Add Product")])])],-1)),j={class:"flex flex-col"},z={class:"overflow-x-auto"},F={class:"align-middle inline-block min-w-full"},R={class:"shadow overflow-hidden"},I={class:"md:w-4/12 px-4 mx-auto my-10"},D={key:0},H={key:1,class:"text-green-500"},Y={class:"mt-4 flex flex-col"},E=l(()=>e("label",{for:"name"},"Product Name:",-1)),Q={class:"mt-4 flex flex-col"},G=l(()=>e("label",{for:"quantityType",class:"block text-gray-700"},"Quantity Type",-1)),J=l(()=>e("option",{value:"type-1"},"Type 1 starts (1)",-1)),K=l(()=>e("option",{value:"type-2"},"Type 2 starts (10)",-1)),W=l(()=>e("option",{value:"type-3"},"Type 3 starts (12)",-1)),X=l(()=>e("option",{value:"type-4"},"Type 4 starts (50)",-1)),Z=l(()=>e("option",{value:"type-5"},"Type 5 starts at (100)",-1)),$=[J,K,W,X,Z],ee={class:"mt-4 flex flex-col"},te=l(()=>e("label",{for:"slug"},"Product Slug:",-1)),oe={class:"mt-4 flex space-x-8"},se=l(()=>e("span",null,"Add to Featured Product",-1)),le={class:"mt-4 flex flex-col"},ie=l(()=>e("label",{for:"description"},"Description:",-1)),re={class:"mt-4"},ne=l(()=>e("label",{for:"price",class:"block"},"Price Per unit:",-1)),de={class:"mt-4"},ae=l(()=>e("label",{for:"unit",class:"block"},"Minimum Unit(s):",-1)),ue=l(()=>e("label",{for:"",class:"my-4 mt-10 block"},"Product Image",-1)),ce={class:"mb-4"},pe=["value"],me={class:"mb-4"},fe=["value"],_e={class:"mb-4"},ve=["value"],he={class:"mt-4"},ge=l(()=>e("label",null,"Select Categories:",-1)),be=["value","id"],ye=["for"],xe={class:"mt-6 flex justify-between items-center border-t py-4"},we=l(()=>e("h2",{class:"text-lg font-semibold"},"Attributes",-1)),ke=l(()=>e("svg",{class:"-ml-1 mr-2 h-6 w-6",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"fill-rule":"evenodd",d:"M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z","clip-rule":"evenodd"})],-1)),Ve={class:"flex justify-between items-center"},Ce={class:"text-lg font-semibold"},Ae=["onClick"],Te={class:"mt-4 flex flex-col"},Ue=l(()=>e("label",{for:"attribute-name"},"Name:",-1)),Se=["onUpdate:modelValue","id"],Me={class:"mt-4 flex flex-col"},Oe=l(()=>e("label",{for:"attribute-type"},"Type:",-1)),Be=["onUpdate:modelValue","onChange","id"],Ne=l(()=>e("option",{value:"text"},"Text",-1)),Pe=l(()=>e("option",{value:"radio"},"Radio",-1)),qe=l(()=>e("option",{value:"radio_single"},"Radio Single",-1)),Le=l(()=>e("option",{value:"textarea"},"Textarea",-1)),je=l(()=>e("option",{value:"select"},"Select",-1)),ze=l(()=>e("option",{value:"number"},"Number",-1)),Fe=[Ne,Pe,qe,Le,je,ze],Re={key:0,class:"mt-6"},Ie=["onClick"],De=l(()=>e("svg",{class:"-ml-1 mr-2 h-6 w-6",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"fill-rule":"evenodd",d:"M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z","clip-rule":"evenodd"})],-1)),He={class:"flex justify-between items-center"},Ye=["for"],Ee=["onClick"],Qe=["onUpdate:modelValue","id"],Ge=["for"],Je=["onUpdate:modelValue","id"],Ke={class:"mt-8 flex justify-end"},We=["disabled"];function Xe(i,s,w,Ze,o,c){const k=C("AuthenticatedLayout");return r(),A(k,null,{default:T(()=>[e("div",null,[L,e("div",j,[e("div",z,[e("div",F,[e("div",R,[e("div",I,[i.$page.props.errors?(r(),d("div",D,[(r(!0),d(g,null,b(i.$page.props.errors,t=>(r(),d("div",{key:t,class:"text-red-600"},m(t),1))),128))])):_("",!0),i.$page.props.flash.success?(r(),d("div",H,m(i.$page.props.flash.success),1)):_("",!0),e("form",{onSubmit:s[14]||(s[14]=U((...t)=>c.submitForm&&c.submitForm(...t),["prevent"]))},[e("div",Y,[E,a(e("input",{type:"text","onUpdate:modelValue":s[0]||(s[0]=t=>o.form.name=t),id:"name",onInput:s[1]||(s[1]=(...t)=>c.updateSlug&&c.updateSlug(...t))},null,544),[[p,o.form.name]])]),e("div",Q,[G,a(e("select",{"onUpdate:modelValue":s[2]||(s[2]=t=>o.form.quantityType=t),name:"quantityType",id:"quantityType"},$,512),[[y,o.form.quantityType]])]),e("div",ee,[te,a(e("input",{type:"text","onUpdate:modelValue":s[3]||(s[3]=t=>o.form.slug=t),id:"slug"},null,512),[[p,o.form.slug]])]),e("div",oe,[se,e("label",null,[a(e("input",{name:"featured1",type:"radio",value:"No","onUpdate:modelValue":s[4]||(s[4]=t=>o.form.featured=t),id:"featured"},null,512),[[x,o.form.featured]]),v(" No ")]),e("label",null,[a(e("input",{name:"featured2",type:"radio",value:"Yes","onUpdate:modelValue":s[5]||(s[5]=t=>o.form.featured=t),id:"featured"},null,512),[[x,o.form.featured]]),v(" Yes ")])]),e("div",le,[ie,a(e("textarea",{"onUpdate:modelValue":s[6]||(s[6]=t=>o.form.description=t),id:"description"},null,512),[[p,o.form.description]])]),e("div",re,[ne,a(e("input",{type:"text","onUpdate:modelValue":s[7]||(s[7]=t=>o.form.price=t),id:"price",class:"mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm border-gray-300 rounded-md"},null,512),[[p,o.form.price]])]),e("div",de,[ae,a(e("input",{type:"text","onUpdate:modelValue":s[8]||(s[8]=t=>o.form.unit=t),id:"unit",class:"mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm border-gray-300 rounded-md"},null,512),[[p,o.form.unit]])]),ue,e("div",ce,[e("input",{type:"file",onInput:s[9]||(s[9]=t=>o.form.files[0]=t.target.files[0])},null,32),o.form.progress?(r(),d("progress",{key:0,value:o.form.progress.percentage,max:"100"},m(o.form.progress.percentage)+"% ",9,pe)):_("",!0)]),e("div",me,[e("input",{type:"file",onInput:s[10]||(s[10]=t=>o.form.files[1]=t.target.files[0])},null,32),o.form.progress?(r(),d("progress",{key:0,value:o.form.progress.percentage,max:"100"},m(o.form.progress.percentage)+"% ",9,fe)):_("",!0)]),e("div",_e,[e("input",{type:"file",onInput:s[11]||(s[11]=t=>o.form.files[2]=t.target.files[0])},null,32),o.form.progress?(r(),d("progress",{key:0,value:o.form.progress.percentage,max:"100"},m(o.form.progress.percentage)+"% ",9,ve)):_("",!0)]),e("div",he,[ge,(r(!0),d(g,null,b(w.categories,t=>(r(),d("div",{key:t.id},[a(e("input",{type:"checkbox","onUpdate:modelValue":s[12]||(s[12]=n=>o.form.categories=n),value:t.id,id:"category_"+t.id},null,8,be),[[S,o.form.categories]]),e("label",{for:"category_"+t.id},m(t.name),9,ye)]))),128))]),e("div",xe,[we,e("button",{onClick:s[13]||(s[13]=(...t)=>c.addAttribute&&c.addAttribute(...t)),type:"button",class:"text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium inline-flex items-center rounded-lg text-sm px-3 py-2"},[ke,v(" Add Attribute ")])]),(r(!0),d(g,null,b(o.form.attributes,(t,n)=>(r(),d("div",{key:n,class:"mt-6 border p-4 rounded-lg"},[e("div",Ve,[e("h2",Ce,"Attribute "+m(n+1),1),e("button",{onClick:u=>c.removeAttribute(n),type:"button",class:"text-red-600 hover:text-red-800 font-medium text-sm"}," Remove Attribute ",8,Ae)]),e("div",Te,[Ue,a(e("input",{type:"text","onUpdate:modelValue":u=>t.name=u,id:"attribute-name-"+n},null,8,Se),[[p,t.name]])]),e("div",Me,[Oe,a(e("select",{"onUpdate:modelValue":u=>t.type=u,onChange:u=>c.updateOptions(n),id:"attribute-type-"+n},Fe,40,Be),[[y,t.type]])]),["radio","radio_single","select"].includes(t.type)?(r(),d("div",Re,[e("button",{onClick:u=>c.addOption(n),type:"button",class:"text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium inline-flex items-center rounded-lg text-sm px-3 py-2"},[De,v(" Add Option ")],8,Ie),(r(!0),d(g,null,b(t.options,(u,f)=>(r(),d("div",{key:f,class:"mt-4 flex flex-col"},[e("div",He,[e("label",{for:"option-value-"+n+"-"+f},"Option Value:",8,Ye),e("button",{onClick:h=>c.removeOption(n,f),type:"button",class:"text-red-600 hover:text-red-800 font-medium text-sm"}," Remove Option ",8,Ee)]),a(e("input",{type:"text","onUpdate:modelValue":h=>u.value=h,id:"option-value-"+n+"-"+f},null,8,Qe),[[p,u.value]]),e("label",{for:"option-cost-"+n+"-"+f},"Option Cost:",8,Ge),a(e("input",{type:"text","onUpdate:modelValue":h=>u.cost=h,id:"option-cost-"+n+"-"+f},null,8,Je),[[p,u.cost]])]))),128))])):_("",!0)]))),128)),e("div",Ke,[e("button",{class:M(["p-2 px-4 bg-green-600 text-white rounded-sm",{"opacity-25":o.form.processing}]),type:"submit",disabled:o.form.processing},"Add Product",10,We)])],32)])])])])])])]),_:1})}const st=P(q,[["render",Xe],["__scopeId","data-v-b15b9e91"]]);export{st as default};