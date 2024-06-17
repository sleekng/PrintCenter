import{i as k,T as V,r as C,o as i,f as U,g as A,b as e,c as n,F as v,d as b,t as m,e as f,j as T,w as d,v as c,z as y,C as x,h,l as P}from"./app-DxanxNP0.js";import{A as S}from"./AuthenticatedLayout-CSYe8vrk.js";import{_ as O}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./ASide-CzFLsqoZ.js";const j={props:{product:{type:Object,required:!0},categories:{type:Array,required:!0}},components:{Link:k,AuthenticatedLayout:S},mounted(){this.form.name=this.product.name,this.form.slug=this.product.slug,this.form.featured=this.product.featured,this.form.description=this.product.description,this.form.price=this.product.price,this.form.quantityType=this.product.quantityType,this.form.unit=this.product.unit,this.form.categories=this.product.categories.map(l=>l.id),this.form.attributes=this.product.attributes.map(l=>({name:l.name,slug:l.slug,type:l.type,options:l.options.map(o=>({value:o.value,cost:o.cost}))}))},data(){return{form:V({name:"",slug:"",description:"",featured:"No",price:"",quantityType:"",unit:"",files:[null,null,null],attributes:[],categories:[]})}},methods:{updateSlug(){this.form.slug=this.createSlug(this.form.name)},createSlug(l){return l.toLowerCase().replace(/\s+/g,"-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")},async submitForm(){await this.form.put(route("product-update-product",this.product.id))},addAttribute(){this.form.attributes.push({name:"",type:"text",options:[]})},removeAttribute(l){this.form.attributes.splice(l,1)},updateOptions(l){this.form.attributes[l].options=[]},addOption(l){this.form.attributes[l].options.push({value:"",cost:0})},removeOption(l,o){this.form.attributes[l].options.splice(o,1)},updateNewImage(l,o){this.form.files.splice(l,1,o)},deleteExistingImage(l){this.form.existingImages.splice(l,1)}}},q=e("div",{class:"p-4 bg-white block sm:flex items-center justify-between border-b border-gray-200 lg:mt-1.5"},[e("div",{class:"mb-1 w-full"},[e("div",{class:"mb-4"},[e("nav",{class:"flex mb-5","aria-label":"Breadcrumb"},[e("ol",{class:"inline-flex items-center space-x-1 md:space-x-2"},[e("li",{class:"inline-flex items-center"},[e("a",{href:"#",class:"text-gray-700 hover:text-gray-900 inline-flex items-center"},[e("svg",{class:"w-5 h-5 mr-2.5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"})]),h(" Home ")])]),e("li",null,[e("div",{class:"flex items-center"},[e("svg",{class:"w-6 h-6 text-gray-400",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"fill-rule":"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z","clip-rule":"evenodd"})]),e("span",{class:"text-gray-400 ml-1 md:ml-2 text-sm font-medium","aria-current":"page"},"Products")])])])]),e("h1",{class:"text-xl sm:text-2xl font-semibold text-gray-900"},"Add Product")])])],-1),M={class:"flex flex-col"},N={class:"overflow-x-auto"},B={class:"align-middle inline-block min-w-full"},L={class:"shadow overflow-hidden"},F={class:"w-4/12 mx-auto my-10"},I={key:0},z={key:1,class:"text-green-500"},R={class:"mt-4 flex flex-col"},D=e("label",{for:"name"},"Product Name:",-1),E={class:"mt-4 flex flex-col"},H=e("label",{for:"quantityType",class:"block text-gray-700"},"Quantity Type",-1),Y=e("option",{value:"type-1"},"Type 1 starts at (100)",-1),Q=e("option",{value:"type-2"},"Type 2 starts (1)",-1),G=e("option",{value:"type-3"},"Type 3 starts (10)",-1),J=[Y,Q,G],K={class:"mt-4 flex flex-col"},W=e("label",{for:"slug"},"Product Slug:",-1),X={class:"mt-4 flex space-x-8"},Z=e("span",null,"Add to Featured Product",-1),$={class:"mt-4 flex flex-col"},ee=e("label",{for:"description"},"Description:",-1),te={class:"mt-4"},oe=e("label",{for:"price",class:"block"},"Price Per unit:",-1),se={class:"mt-4"},le=e("label",{for:"unit",class:"block"},"Minimum Unit(s):",-1),ie={class:"my-4 mt-10 block"},re=e("label",{class:"block text-sm font-medium text-gray-700 mb-4"},"Product Image:",-1),ne={class:"flex flex-col"},de={class:"mb-4"},ue=["src"],ae=["value"],ce={class:"mb-4"},me=["src"],pe=["value"],fe={class:"mb-4"},he=["src"],_e=["value"],ge={class:"mt-4"},ve=e("label",null,"Select Categories:",-1),be=["value","id"],ye=["for"],xe={class:"mt-6 flex justify-between items-center border-t py-4"},we=e("h2",{class:"text-lg font-semibold"},"Attributes",-1),ke=e("svg",{class:"-ml-1 mr-2 h-6 w-6",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"fill-rule":"evenodd",d:"M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z","clip-rule":"evenodd"})],-1),Ve={class:"flex justify-between items-center"},Ce={class:"text-lg font-semibold"},Ue=["onClick"],Ae={class:"mt-4 flex flex-col"},Te=e("label",{for:"attribute-name"},"Name:",-1),Pe=["onUpdate:modelValue","id"],Se={class:"mt-4 flex flex-col"},Oe=e("label",{for:"attribute-type"},"Type:",-1),je=["onUpdate:modelValue","onChange","id"],qe=e("option",{value:"text"},"Text",-1),Me=e("option",{value:"radio"},"Radio",-1),Ne=e("option",{value:"radio_single"},"Radio Single",-1),Be=e("option",{value:"textarea"},"Textarea",-1),Le=e("option",{value:"select"},"Select",-1),Fe=e("option",{value:"number"},"Number",-1),Ie=[qe,Me,Ne,Be,Le,Fe],ze={key:0,class:"mt-6"},Re=["onClick"],De=e("svg",{class:"-ml-1 mr-2 h-6 w-6",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"fill-rule":"evenodd",d:"M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z","clip-rule":"evenodd"})],-1),Ee={class:"flex justify-between items-center"},He=["for"],Ye=["onClick"],Qe=["onUpdate:modelValue","id"],Ge=["for"],Je=["onUpdate:modelValue","id"],Ke=e("div",{class:"mt-8 flex justify-end"},[e("button",{class:"p-2 px-4 bg-green-600 text-white rounded-sm",type:"submit"},"Update Product")],-1);function We(l,o,_,Xe,s,a){const w=C("AuthenticatedLayout");return i(),U(w,null,{default:A(()=>[e("div",null,[q,e("div",M,[e("div",N,[e("div",B,[e("div",L,[e("div",F,[l.$page.props.errors?(i(),n("div",I,[(i(!0),n(v,null,b(l.$page.props.errors,t=>(i(),n("div",{key:t,class:"text-red-600"},m(t),1))),128))])):f("",!0),l.$page.props.flash.success?(i(),n("div",z,m(l.$page.props.flash.success),1)):f("",!0),e("form",{onSubmit:o[14]||(o[14]=T((...t)=>a.submitForm&&a.submitForm(...t),["prevent"]))},[e("div",R,[D,d(e("input",{type:"text","onUpdate:modelValue":o[0]||(o[0]=t=>s.form.name=t),id:"name",onInput:o[1]||(o[1]=(...t)=>a.updateSlug&&a.updateSlug(...t))},null,544),[[c,s.form.name]])]),e("div",E,[H,d(e("select",{"onUpdate:modelValue":o[2]||(o[2]=t=>s.form.quantityType=t),name:"quantityType",id:"quantityType"},J,512),[[y,s.form.quantityType]])]),e("div",K,[W,d(e("input",{type:"text","onUpdate:modelValue":o[3]||(o[3]=t=>s.form.slug=t),id:"slug"},null,512),[[c,s.form.slug]])]),e("div",X,[Z,e("label",null,[d(e("input",{name:"featured1",type:"radio",value:"No","onUpdate:modelValue":o[4]||(o[4]=t=>s.form.featured=t),id:"featured"},null,512),[[x,s.form.featured]]),h(" No ")]),e("label",null,[d(e("input",{name:"featured2",type:"radio",value:"Yes","onUpdate:modelValue":o[5]||(o[5]=t=>s.form.featured=t),id:"featured"},null,512),[[x,s.form.featured]]),h(" Yes ")])]),e("div",$,[ee,d(e("textarea",{"onUpdate:modelValue":o[6]||(o[6]=t=>s.form.description=t),id:"description"},null,512),[[c,s.form.description]])]),e("div",te,[oe,d(e("input",{type:"text","onUpdate:modelValue":o[7]||(o[7]=t=>s.form.price=t),id:"price",class:"mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm border-gray-300 rounded-md"},null,512),[[c,s.form.price]])]),e("div",se,[le,d(e("input",{type:"text","onUpdate:modelValue":o[8]||(o[8]=t=>s.form.unit=t),id:"unit",class:"mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm border-gray-300 rounded-md"},null,512),[[c,s.form.unit]])]),e("div",ie,[re,e("div",ne,[e("div",de,[e("img",{src:"/storage/"+_.product.product_img1,alt:"Product Image",class:"w-32 h-32 object-cover rounded-md"},null,8,ue),e("input",{type:"file",onInput:o[9]||(o[9]=t=>s.form.files[0]=t.target.files[0])},null,32),s.form.progress?(i(),n("progress",{key:0,value:s.form.progress.percentage,max:"100"},m(s.form.progress.percentage)+"% ",9,ae)):f("",!0)]),e("div",ce,[e("img",{src:"/storage/"+_.product.product_img2,alt:"Product Image",class:"w-32 h-32 object-cover rounded-md"},null,8,me),e("input",{type:"file",onInput:o[10]||(o[10]=t=>s.form.files[1]=t.target.files[0])},null,32),s.form.progress?(i(),n("progress",{key:0,value:s.form.progress.percentage,max:"100"},m(s.form.progress.percentage)+"% ",9,pe)):f("",!0)]),e("div",fe,[e("img",{src:"/storage/"+_.product.product_img3,alt:"Product Image",class:"w-32 h-32 object-cover rounded-md"},null,8,he),e("input",{type:"file",onInput:o[11]||(o[11]=t=>s.form.files[2]=t.target.files[0])},null,32),s.form.progress?(i(),n("progress",{key:0,value:s.form.progress.percentage,max:"100"},m(s.form.progress.percentage)+"% ",9,_e)):f("",!0)])])]),e("div",ge,[ve,(i(!0),n(v,null,b(_.categories,t=>(i(),n("div",{key:t.id},[d(e("input",{type:"checkbox","onUpdate:modelValue":o[12]||(o[12]=r=>s.form.categories=r),value:t.id,id:"category_"+t.id},null,8,be),[[P,s.form.categories]]),e("label",{for:"category_"+t.id},m(t.name),9,ye)]))),128))]),e("div",xe,[we,e("button",{onClick:o[13]||(o[13]=(...t)=>a.addAttribute&&a.addAttribute(...t)),type:"button",class:"text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium inline-flex items-center rounded-lg text-sm px-3 py-2"},[ke,h(" Add Attribute ")])]),(i(!0),n(v,null,b(s.form.attributes,(t,r)=>(i(),n("div",{key:r,class:"mt-6 border p-4 rounded-lg"},[e("div",Ve,[e("h2",Ce,"Attribute "+m(r+1),1),e("button",{onClick:u=>a.removeAttribute(r),type:"button",class:"text-red-600 hover:text-red-800 font-medium text-sm"}," Remove Attribute ",8,Ue)]),e("div",Ae,[Te,d(e("input",{type:"text","onUpdate:modelValue":u=>t.name=u,id:"attribute-name-"+r},null,8,Pe),[[c,t.name]])]),e("div",Se,[Oe,d(e("select",{"onUpdate:modelValue":u=>t.type=u,onChange:u=>a.updateOptions(r),id:"attribute-type-"+r},Ie,40,je),[[y,t.type]])]),["radio","radio_single","select"].includes(t.type)?(i(),n("div",ze,[e("button",{onClick:u=>a.addOption(r),type:"button",class:"text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium inline-flex items-center rounded-lg text-sm px-3 py-2"},[De,h(" Add Option ")],8,Re),(i(!0),n(v,null,b(t.options,(u,p)=>(i(),n("div",{key:p,class:"mt-4 flex flex-col"},[e("div",Ee,[e("label",{for:"option-value-"+r+"-"+p},"Option Value:",8,He),e("button",{onClick:g=>a.removeOption(r,p),type:"button",class:"text-red-600 hover:text-red-800 font-medium text-sm"}," Remove Option ",8,Ye)]),d(e("input",{type:"text","onUpdate:modelValue":g=>u.value=g,id:"option-value-"+r+"-"+p},null,8,Qe),[[c,u.value]]),e("label",{for:"option-cost-"+r+"-"+p},"Option Cost:",8,Ge),d(e("input",{type:"text","onUpdate:modelValue":g=>u.cost=g,id:"option-cost-"+r+"-"+p},null,8,Je),[[c,u.cost]])]))),128))])):f("",!0)]))),128)),Ke],32)])])])])])])]),_:1})}const ot=O(j,[["render",We]]);export{ot as default};
