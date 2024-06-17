import{i as w,T as k,r as V,o as l,f as C,g as T,b as e,c as n,F as g,d as v,t as m,e as f,j as A,w as u,v as c,z as y,l as U,h as b}from"./app-Rcwxyq2f.js";import{A as S}from"./AuthenticatedLayout-BOpzDkUu.js";import{_ as O}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./ASide-aOGibqVC.js";const P={props:{product:{type:Object,required:!0},categories:{type:Array,required:!0}},components:{Link:w,AuthenticatedLayout:S},mounted(){this.form.name=this.product.name,this.form.slug=this.product.slug,this.form.description=this.product.description,this.form.price=this.product.price,this.form.quantityType=this.product.quantityType,this.form.unit=this.product.unit,this.form.categories=this.product.categories.map(i=>i.id),this.form.attributes=this.product.attributes.map(i=>({name:i.name,slug:i.slug,type:i.type,options:i.options.map(o=>({value:o.value,cost:o.cost}))}))},data(){return{form:k({name:"",slug:"",description:"",price:"",quantityType:"",unit:"",files:[null,null,null],attributes:[],categories:[]})}},methods:{updateSlug(){this.form.slug=this.createSlug(this.form.name)},createSlug(i){return i.toLowerCase().replace(/\s+/g,"-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")},async submitForm(){await this.form.put(route("product-update-product",this.product.id))},addAttribute(){this.form.attributes.push({name:"",type:"text",options:[]})},removeAttribute(i){this.form.attributes.splice(i,1)},updateOptions(i){this.form.attributes[i].options=[]},addOption(i){this.form.attributes[i].options.push({value:"",cost:0})},removeOption(i,o){this.form.attributes[i].options.splice(o,1)},updateNewImage(i,o){this.form.files.splice(i,1,o)},deleteExistingImage(i){this.form.existingImages.splice(i,1)}}},j=e("div",{class:"p-4 bg-white block sm:flex items-center justify-between border-b border-gray-200 lg:mt-1.5"},[e("div",{class:"mb-1 w-full"},[e("div",{class:"mb-4"},[e("nav",{class:"flex mb-5","aria-label":"Breadcrumb"},[e("ol",{class:"inline-flex items-center space-x-1 md:space-x-2"},[e("li",{class:"inline-flex items-center"},[e("a",{href:"#",class:"text-gray-700 hover:text-gray-900 inline-flex items-center"},[e("svg",{class:"w-5 h-5 mr-2.5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"})]),b(" Home ")])]),e("li",null,[e("div",{class:"flex items-center"},[e("svg",{class:"w-6 h-6 text-gray-400",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"fill-rule":"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z","clip-rule":"evenodd"})]),e("span",{class:"text-gray-400 ml-1 md:ml-2 text-sm font-medium","aria-current":"page"},"Products")])])])]),e("h1",{class:"text-xl sm:text-2xl font-semibold text-gray-900"},"Add Product")])])],-1),q={class:"flex flex-col"},B={class:"overflow-x-auto"},M={class:"align-middle inline-block min-w-full"},L={class:"shadow overflow-hidden"},N={class:"w-4/12 mx-auto my-10"},I={key:0},z={key:1,class:"text-green-500"},F={class:"mt-4 flex flex-col"},R=e("label",{for:"name"},"Product Name:",-1),D={class:"mt-4 flex flex-col"},E=e("label",{for:"quantityType",class:"block text-gray-700"},"Quantity Type",-1),H=e("option",{value:"type-1"},"Type 1 starts at (100)",-1),Q=e("option",{value:"type-2"},"Type 2 starts (1)",-1),G=e("option",{value:"type-3"},"Type 3 starts (10)",-1),J=[H,Q,G],K={class:"mt-4 flex flex-col"},W=e("label",{for:"slug"},"Product Slug:",-1),X={class:"mt-4 flex flex-col"},Y=e("label",{for:"description"},"Description:",-1),Z={class:"mt-4"},$=e("label",{for:"price",class:"block"},"Price Per unit:",-1),ee={class:"mt-4"},te=e("label",{for:"unit",class:"block"},"Minimum Unit(s):",-1),oe={class:"my-4 mt-10 block"},se=e("label",{class:"block text-sm font-medium text-gray-700 mb-4"},"Product Image:",-1),ie={class:"flex flex-col"},le={class:"mb-4"},re=["src"],ne=["value"],de={class:"mb-4"},ue=["src"],ae=["value"],ce={class:"mb-4"},me=["src"],pe=["value"],fe={class:"mt-4"},he=e("label",null,"Select Categories:",-1),_e=["value","id"],ge=["for"],ve={class:"mt-6 flex justify-between items-center border-t py-4"},be=e("h2",{class:"text-lg font-semibold"},"Attributes",-1),ye=e("svg",{class:"-ml-1 mr-2 h-6 w-6",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"fill-rule":"evenodd",d:"M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z","clip-rule":"evenodd"})],-1),xe={class:"flex justify-between items-center"},we={class:"text-lg font-semibold"},ke=["onClick"],Ve={class:"mt-4 flex flex-col"},Ce=e("label",{for:"attribute-name"},"Name:",-1),Te=["onUpdate:modelValue","id"],Ae={class:"mt-4 flex flex-col"},Ue=e("label",{for:"attribute-type"},"Type:",-1),Se=["onUpdate:modelValue","onChange","id"],Oe=e("option",{value:"text"},"Text",-1),Pe=e("option",{value:"radio"},"Radio",-1),je=e("option",{value:"radio_single"},"Radio Single",-1),qe=e("option",{value:"textarea"},"Textarea",-1),Be=e("option",{value:"select"},"Select",-1),Me=e("option",{value:"number"},"Number",-1),Le=[Oe,Pe,je,qe,Be,Me],Ne={key:0,class:"mt-6"},Ie=["onClick"],ze=e("svg",{class:"-ml-1 mr-2 h-6 w-6",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"fill-rule":"evenodd",d:"M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z","clip-rule":"evenodd"})],-1),Fe={class:"flex justify-between items-center"},Re=["for"],De=["onClick"],Ee=["onUpdate:modelValue","id"],He=["for"],Qe=["onUpdate:modelValue","id"],Ge=e("div",{class:"mt-8 flex justify-end"},[e("button",{class:"p-2 px-4 bg-green-600 text-white rounded-sm",type:"submit"},"Update Product")],-1);function Je(i,o,h,Ke,s,a){const x=V("AuthenticatedLayout");return l(),C(x,null,{default:T(()=>[e("div",null,[j,e("div",q,[e("div",B,[e("div",M,[e("div",L,[e("div",N,[i.$page.props.errors?(l(),n("div",I,[(l(!0),n(g,null,v(i.$page.props.errors,t=>(l(),n("div",{key:t,class:"text-red-600"},m(t),1))),128))])):f("",!0),i.$page.props.flash.success?(l(),n("div",z,m(i.$page.props.flash.success),1)):f("",!0),e("form",{onSubmit:o[12]||(o[12]=A((...t)=>a.submitForm&&a.submitForm(...t),["prevent"]))},[e("div",F,[R,u(e("input",{type:"text","onUpdate:modelValue":o[0]||(o[0]=t=>s.form.name=t),id:"name",onInput:o[1]||(o[1]=(...t)=>a.updateSlug&&a.updateSlug(...t))},null,544),[[c,s.form.name]])]),e("div",D,[E,u(e("select",{"onUpdate:modelValue":o[2]||(o[2]=t=>s.form.quantityType=t),name:"quantityType",id:"quantityType"},J,512),[[y,s.form.quantityType]])]),e("div",K,[W,u(e("input",{type:"text","onUpdate:modelValue":o[3]||(o[3]=t=>s.form.slug=t),id:"slug"},null,512),[[c,s.form.slug]])]),e("div",X,[Y,u(e("textarea",{"onUpdate:modelValue":o[4]||(o[4]=t=>s.form.description=t),id:"description"},null,512),[[c,s.form.description]])]),e("div",Z,[$,u(e("input",{type:"text","onUpdate:modelValue":o[5]||(o[5]=t=>s.form.price=t),id:"price",class:"mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm border-gray-300 rounded-md"},null,512),[[c,s.form.price]])]),e("div",ee,[te,u(e("input",{type:"text","onUpdate:modelValue":o[6]||(o[6]=t=>s.form.unit=t),id:"unit",class:"mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm border-gray-300 rounded-md"},null,512),[[c,s.form.unit]])]),e("div",oe,[se,e("div",ie,[e("div",le,[e("img",{src:"/storage/"+h.product.product_img1,alt:"Product Image",class:"w-32 h-32 object-cover rounded-md"},null,8,re),e("input",{type:"file",onInput:o[7]||(o[7]=t=>s.form.files[0]=t.target.files[0])},null,32),s.form.progress?(l(),n("progress",{key:0,value:s.form.progress.percentage,max:"100"},m(s.form.progress.percentage)+"% ",9,ne)):f("",!0)]),e("div",de,[e("img",{src:"/storage/"+h.product.product_img2,alt:"Product Image",class:"w-32 h-32 object-cover rounded-md"},null,8,ue),e("input",{type:"file",onInput:o[8]||(o[8]=t=>s.form.files[1]=t.target.files[0])},null,32),s.form.progress?(l(),n("progress",{key:0,value:s.form.progress.percentage,max:"100"},m(s.form.progress.percentage)+"% ",9,ae)):f("",!0)]),e("div",ce,[e("img",{src:"/storage/"+h.product.product_img3,alt:"Product Image",class:"w-32 h-32 object-cover rounded-md"},null,8,me),e("input",{type:"file",onInput:o[9]||(o[9]=t=>s.form.files[2]=t.target.files[0])},null,32),s.form.progress?(l(),n("progress",{key:0,value:s.form.progress.percentage,max:"100"},m(s.form.progress.percentage)+"% ",9,pe)):f("",!0)])])]),e("div",fe,[he,(l(!0),n(g,null,v(h.categories,t=>(l(),n("div",{key:t.id},[u(e("input",{type:"checkbox","onUpdate:modelValue":o[10]||(o[10]=r=>s.form.categories=r),value:t.id,id:"category_"+t.id},null,8,_e),[[U,s.form.categories]]),e("label",{for:"category_"+t.id},m(t.name),9,ge)]))),128))]),e("div",ve,[be,e("button",{onClick:o[11]||(o[11]=(...t)=>a.addAttribute&&a.addAttribute(...t)),type:"button",class:"text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium inline-flex items-center rounded-lg text-sm px-3 py-2"},[ye,b(" Add Attribute ")])]),(l(!0),n(g,null,v(s.form.attributes,(t,r)=>(l(),n("div",{key:r,class:"mt-6 border p-4 rounded-lg"},[e("div",xe,[e("h2",we,"Attribute "+m(r+1),1),e("button",{onClick:d=>a.removeAttribute(r),type:"button",class:"text-red-600 hover:text-red-800 font-medium text-sm"}," Remove Attribute ",8,ke)]),e("div",Ve,[Ce,u(e("input",{type:"text","onUpdate:modelValue":d=>t.name=d,id:"attribute-name-"+r},null,8,Te),[[c,t.name]])]),e("div",Ae,[Ue,u(e("select",{"onUpdate:modelValue":d=>t.type=d,onChange:d=>a.updateOptions(r),id:"attribute-type-"+r},Le,40,Se),[[y,t.type]])]),["radio","radio_single","select"].includes(t.type)?(l(),n("div",Ne,[e("button",{onClick:d=>a.addOption(r),type:"button",class:"text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium inline-flex items-center rounded-lg text-sm px-3 py-2"},[ze,b(" Add Option ")],8,Ie),(l(!0),n(g,null,v(t.options,(d,p)=>(l(),n("div",{key:p,class:"mt-4 flex flex-col"},[e("div",Fe,[e("label",{for:"option-value-"+r+"-"+p},"Option Value:",8,Re),e("button",{onClick:_=>a.removeOption(r,p),type:"button",class:"text-red-600 hover:text-red-800 font-medium text-sm"}," Remove Option ",8,De)]),u(e("input",{type:"text","onUpdate:modelValue":_=>d.value=_,id:"option-value-"+r+"-"+p},null,8,Ee),[[c,d.value]]),e("label",{for:"option-cost-"+r+"-"+p},"Option Cost:",8,He),u(e("input",{type:"text","onUpdate:modelValue":_=>d.cost=_,id:"option-cost-"+r+"-"+p},null,8,Qe),[[c,d.cost]])]))),128))])):f("",!0)]))),128)),Ge],32)])])])])])])]),_:1})}const $e=O(P,[["render",Je]]);export{$e as default};