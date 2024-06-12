import{A as w}from"./AuthenticatedLayout-SPy50zz3.js";import{i as k,T,r as b,o as r,d as V,w as _,b as e,a as C,h as y,c as i,F as p,j as f,t as l,e as a,f as A,g as d,v as m,z as L,n as q,l as v}from"./app-CXMrQ_oG.js";import{_ as B}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./ASide-CUbwmheO.js";const M={props:{attributes:{type:Array,required:!0},categories:{type:Array,required:!0}},components:{Link:k,AuthenticatedLayout:w},data(){return{form:T({name:"",description:"",price:"",quantityType:"",unit:"",files:[null,null,null],attributes:[],categories:[]})}},methods:{async submitForm(){try{await this.form.post("/products-store")}catch(n){console.error("Error adding product:",n)}}}},U={class:"p-4 bg-white block sm:flex items-center justify-between border-b border-gray-200 lg:mt-1.5"},P={class:"mb-1 w-full"},z=e("div",{class:"mb-4"},[e("nav",{class:"flex mb-5","aria-label":"Breadcrumb"},[e("ol",{class:"inline-flex items-center space-x-1 md:space-x-2"},[e("li",{class:"inline-flex items-center"},[e("a",{href:"#",class:"text-gray-700 hover:text-gray-900 inline-flex items-center"},[e("svg",{class:"w-5 h-5 mr-2.5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"})]),y(" Home ")])]),e("li",null,[e("div",{class:"flex items-center"},[e("svg",{class:"w-6 h-6 text-gray-400",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"fill-rule":"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z","clip-rule":"evenodd"})]),e("span",{class:"text-gray-400 ml-1 md:ml-2 text-sm font-medium","aria-current":"page"},"Products")])])])]),e("h1",{class:"text-xl sm:text-2xl font-semibold text-gray-900"},"Add Product")],-1),F={class:"block sm:flex items-center md:divide-x md:divide-gray-100"},N={class:"flex items-center sm:justify-end w-full"},S=e("svg",{class:"-ml-1 mr-2 h-6 w-6",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"fill-rule":"evenodd",d:"M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z","clip-rule":"evenodd"})],-1),I={class:"flex flex-col"},j={class:"overflow-x-auto"},D={class:"align-middle inline-block min-w-full"},E={class:"shadow overflow-hidden"},H={class:"w-4/12 mx-auto my-10"},Q={key:0},G={key:1,class:"text-green-500"},J={class:"mb-4"},K=e("label",{for:"name",class:"block text-sm font-medium text-gray-700"},"Name:",-1),O={class:"mb-4"},R=e("label",{for:"quantityType",class:"block text-sm font-medium text-gray-700"},"Quantity Type",-1),W=e("option",{value:"type-1"},"Type 1 starts at (100)",-1),X=e("option",{value:"type-2"},"Type 2 starts (1)",-1),Y=e("option",{value:"type-3"},"Type 3 starts (10)",-1),Z=[W,X,Y],$={class:"mb-4"},ee=e("label",{for:"description",class:"block text-sm font-medium text-gray-700"},"Description:",-1),te={class:"mb-4"},se=e("label",{for:"price",class:"block text-sm font-medium text-gray-700"},"Price Per unit:",-1),oe={class:"mb-4"},re=e("label",{for:"unit",class:"block text-sm font-medium text-gray-700"},"Minimum Unit(s):",-1),ie=e("label",{for:"",class:"my-4 mt-10 block"},"Product Image",-1),le={class:"mb-4"},ne=["value"],de={class:"mb-4"},ae=["value"],me={class:"mb-4"},ce=["value"],ue={class:"mt-4"},pe=["value","id"],fe=["for"],ge={class:"mt-4"},be=e("label",null,"Select Categories:",-1),_e=["value","id"],ve=["for"],ye=e("div",{class:"my-4"},[e("button",{type:"submit",class:"inline-flex items-center px-4 py-2 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-900 focus:outline-none focus:border-indigo-900 focus:ring ring-indigo-300 disabled:opacity-25 transition ease-in-out duration-150"}," Add Product ")],-1);function xe(n,o,c,he,s,g){const x=b("Link"),h=b("AuthenticatedLayout");return r(),V(h,null,{default:_(()=>[e("div",null,[e("div",U,[e("div",P,[z,e("div",F,[e("div",N,[C(x,{href:n.route("attributes.create"),type:"button","data-modal-toggle":"add-product-modal",class:"text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium inline-flex items-center rounded-lg text-sm px-3 py-2 text-center sm:ml-auto"},{default:_(()=>[S,y(" Create Attribute ")]),_:1},8,["href"])])])])]),e("div",I,[e("div",j,[e("div",D,[e("div",E,[e("div",H,[n.$page.props.errors?(r(),i("div",Q,[(r(!0),i(p,null,f(n.$page.props.errors,t=>(r(),i("div",{key:t,class:"text-red-600"},l(t),1))),128))])):a("",!0),n.$page.props.flash.success?(r(),i("div",G,l(n.$page.props.flash.success),1)):a("",!0),e("form",{onSubmit:o[10]||(o[10]=A((...t)=>g.submitForm&&g.submitForm(...t),["prevent"]))},[e("div",J,[K,d(e("input",{type:"text","onUpdate:modelValue":o[0]||(o[0]=t=>s.form.name=t),id:"name",class:"mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"},null,512),[[m,s.form.name]])]),e("div",O,[R,d(e("select",{"onUpdate:modelValue":o[1]||(o[1]=t=>s.form.quantityType=t),name:"quantityType",id:"quantityType"},Z,512),[[L,s.form.quantityType]])]),e("div",$,[ee,d(e("textarea",{"onUpdate:modelValue":o[2]||(o[2]=t=>s.form.description=t),id:"description",rows:"3",class:"mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"},null,512),[[m,s.form.description]])]),e("div",te,[se,d(e("input",{type:"text","onUpdate:modelValue":o[3]||(o[3]=t=>s.form.price=t),id:"price",class:"mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"},null,512),[[m,s.form.price]])]),e("div",oe,[re,d(e("input",{type:"text","onUpdate:modelValue":o[4]||(o[4]=t=>s.form.unit=t),id:"unit",class:"mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"},null,512),[[m,s.form.unit]])]),ie,e("div",le,[e("input",{type:"file",onInput:o[5]||(o[5]=t=>s.form.files[0]=t.target.files[0])},null,32),s.form.progress?(r(),i("progress",{key:0,value:s.form.progress.percentage,max:"100"},l(s.form.progress.percentage)+"% ",9,ne)):a("",!0)]),e("div",de,[e("input",{type:"file",onInput:o[6]||(o[6]=t=>s.form.files[1]=t.target.files[0])},null,32),s.form.progress?(r(),i("progress",{key:0,value:s.form.progress.percentage,max:"100"},l(s.form.progress.percentage)+"% ",9,ae)):a("",!0)]),e("div",me,[e("input",{type:"file",onInput:o[7]||(o[7]=t=>s.form.files[2]=t.target.files[0])},null,32),s.form.progress?(r(),i("progress",{key:0,value:s.form.progress.percentage,max:"100"},l(s.form.progress.percentage)+"% ",9,ce)):a("",!0)]),e("div",ue,[e("label",{class:q(c.attributes.length>0?" text-black":" text-red-600")}," Select Attributes:",2),(r(!0),i(p,null,f(c.attributes,t=>(r(),i("div",{key:t.id},[d(e("input",{type:"checkbox","onUpdate:modelValue":o[8]||(o[8]=u=>s.form.attributes=u),value:t.id,id:"attribute_"+t.id},null,8,pe),[[v,s.form.attributes]]),e("label",{for:"attribute_"+t.id},l(t.name)+"("+l(t.for_product)+")",9,fe)]))),128))]),e("div",ge,[be,(r(!0),i(p,null,f(c.categories,t=>(r(),i("div",{key:t.id},[d(e("input",{type:"checkbox","onUpdate:modelValue":o[9]||(o[9]=u=>s.form.categories=u),value:t.id,id:"category_"+t.id},null,8,_e),[[v,s.form.categories]]),e("label",{for:"category_"+t.id},l(t.name),9,ve)]))),128))]),ye],32)])])])])])])]),_:1})}const Ce=B(M,[["render",xe]]);export{Ce as default};
