import{i as k,T,r as v,o as i,f as V,g as _,b as e,a as q,h as u,c as l,F as p,d as f,t as n,e as c,j as I,w as a,v as g,z as C,n as x,l as y}from"./app-Rcwxyq2f.js";import{A}from"./AuthenticatedLayout-BOpzDkUu.js";import{_ as B}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./ASide-aOGibqVC.js";const L={props:{product:{type:Object,required:!0},attributes:{type:Array,required:!0},categories:{type:Array,required:!0}},components:{Link:k,AuthenticatedLayout:A},data(){return{form:T({name:this.product.name,productId:this.product.id,description:this.product.description,price:this.product.price,quantityType:this.product.quantityType,unit:this.product.unit,files:[null,null,null],progress:null,attributes:this.product.attributes.map(r=>r.id),categories:this.product.categories.map(r=>r.id)})}},methods:{async submitForm(){try{await this.form.post("/product-update")}catch(r){console.error("Error updating product:",r)}},updateNewImage(r,o){this.form.files.splice(r,1,o)},deleteExistingImage(r){this.form.existingImages.splice(r,1)}}},P={class:"p-4 bg-white block sm:flex items-center justify-between border-b border-gray-200 lg:mt-1.5"},j={class:"mb-1 w-full"},M=e("div",{class:"mb-4"},[e("nav",{class:"flex mb-5","aria-label":"Breadcrumb"},[e("ol",{class:"inline-flex items-center space-x-1 md:space-x-2"},[e("li",{class:"inline-flex items-center"},[e("a",{href:"#",class:"text-gray-700 hover:text-gray-900 inline-flex items-center"},[e("svg",{class:"w-5 h-5 mr-2.5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"})]),u(" Home ")])]),e("li",null,[e("div",{class:"flex items-center"},[e("svg",{class:"w-6 h-6 text-gray-400",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"fill-rule":"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z","clip-rule":"evenodd"})]),e("span",{class:"text-gray-400 ml-1 md:ml-2 text-sm font-medium","aria-current":"page"},"Products")])])])]),e("h1",{class:"text-xl sm:text-2xl font-semibold text-gray-900"},"Add Product")],-1),U={class:"block sm:flex items-center md:divide-x md:divide-gray-100"},N={class:"flex items-center sm:justify-end w-full"},z=e("svg",{class:"-ml-1 mr-2 h-6 w-6",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"fill-rule":"evenodd",d:"M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z","clip-rule":"evenodd"})],-1),F={class:"flex flex-col"},E={class:"overflow-x-auto"},D={class:"align-middle inline-block min-w-full"},S={class:"shadow overflow-hidden"},H={class:"w-4/12 mx-auto my-10"},K={key:0},O={key:1,class:"text-green-500"},Q={class:"mt-4 flex flex-col"},G=e("label",null,"Name:",-1),J={class:"mt-4 flex flex-col"},R=e("label",null,"Quantity Type",-1),W=e("option",{value:"type-1"},"Type 1 starts at (100)",-1),X=e("option",{value:"type-2"},"Type 2 starts (1)",-1),Y=[W,X],Z={class:"mt-4 flex flex-col"},$=e("label",null,"Description:",-1),ee={class:"mt-4 flex flex-col"},te=e("label",null,"Price:",-1),se={class:"my-4 mt-10 block"},oe=e("label",{class:"block text-sm font-medium text-gray-700 mb-4"},"Product Image:",-1),re={class:"flex flex-col"},ie={class:"mb-4"},le=["src"],ne=["value"],de={class:"mb-4"},ae=["src"],ce=["value"],ue={class:"mb-4"},me=["src"],pe=["value"],fe=["value"],ge=["value"],he=e("div",{class:"my-4"},[e("button",{type:"submit",class:"inline-flex items-center px-4 py-2 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-900 focus:outline-none focus:border-indigo-900 focus:ring ring-indigo-300 disabled:opacity-25 transition ease-in-out duration-150"}," Update Product ")],-1);function ve(r,o,d,_e,s,h){const b=v("Link"),w=v("AuthenticatedLayout");return i(),V(w,null,{default:_(()=>[e("div",null,[e("div",P,[e("div",j,[M,e("div",U,[e("div",N,[q(b,{href:r.route("attributes.create"),type:"button","data-modal-toggle":"add-product-modal",class:"text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium inline-flex items-center rounded-lg text-sm px-3 py-2 text-center sm:ml-auto"},{default:_(()=>[z,u(" Create Attribute ")]),_:1},8,["href"])])])])]),e("div",F,[e("div",E,[e("div",D,[e("div",S,[e("div",H,[r.$page.props.errors?(i(),l("div",K,[(i(!0),l(p,null,f(r.$page.props.errors,t=>(i(),l("div",{key:t,class:"text-red-600"},n(t),1))),128))])):c("",!0),r.$page.props.flash.success?(i(),l("div",O,n(r.$page.props.flash.success),1)):c("",!0),e("form",{onSubmit:o[9]||(o[9]=I((...t)=>h.submitForm&&h.submitForm(...t),["prevent"]))},[e("div",Q,[G,a(e("input",{type:"text","onUpdate:modelValue":o[0]||(o[0]=t=>s.form.name=t),required:""},null,512),[[g,s.form.name]])]),e("div",J,[R,a(e("select",{"onUpdate:modelValue":o[1]||(o[1]=t=>s.form.quantityType=t),name:"quantityType",id:"quantityType"},Y,512),[[C,s.form.quantityType]])]),e("div",Z,[$,a(e("textarea",{"onUpdate:modelValue":o[2]||(o[2]=t=>s.form.description=t)},null,512),[[g,s.form.description]])]),e("div",ee,[te,a(e("input",{type:"number","onUpdate:modelValue":o[3]||(o[3]=t=>s.form.price=t),required:""},null,512),[[g,s.form.price]])]),e("div",se,[oe,e("div",re,[e("div",ie,[e("img",{src:"/storage/"+d.product.product_img1,alt:"Product Image",class:"w-32 h-32 object-cover rounded-md"},null,8,le),e("input",{type:"file",onInput:o[4]||(o[4]=t=>s.form.files[0]=t.target.files[0])},null,32),s.form.progress?(i(),l("progress",{key:0,value:s.form.progress.percentage,max:"100"},n(s.form.progress.percentage)+"% ",9,ne)):c("",!0)]),e("div",de,[e("img",{src:"/storage/"+d.product.product_img2,alt:"Product Image",class:"w-32 h-32 object-cover rounded-md"},null,8,ae),e("input",{type:"file",onInput:o[5]||(o[5]=t=>s.form.files[1]=t.target.files[0])},null,32),s.form.progress?(i(),l("progress",{key:0,value:s.form.progress.percentage,max:"100"},n(s.form.progress.percentage)+"% ",9,ce)):c("",!0)]),e("div",ue,[e("img",{src:"/storage/"+d.product.product_img3,alt:"Product Image",class:"w-32 h-32 object-cover rounded-md"},null,8,me),e("input",{type:"file",onInput:o[6]||(o[6]=t=>s.form.files[2]=t.target.files[0])},null,32),s.form.progress?(i(),l("progress",{key:0,value:s.form.progress.percentage,max:"100"},n(s.form.progress.percentage)+"% ",9,pe)):c("",!0)])])]),e("h2",{class:x([d.attributes.length>0==null?"":"text-red-600","mt-8"])},"Attributes",2),(i(!0),l(p,null,f(d.attributes,t=>(i(),l("div",{key:t.id},[e("label",null,[a(e("input",{type:"checkbox",value:t.id,"onUpdate:modelValue":o[7]||(o[7]=m=>s.form.attributes=m)},null,8,fe),[[y,s.form.attributes]]),u(" "+n(t.name)+" ("+n(t.for_product)+") ",1)])]))),128)),e("h2",{class:x([d.categories.length>0?"":"text-red-600","mt-8"])},"Categories",2),(i(!0),l(p,null,f(d.categories,t=>(i(),l("div",{key:t.id},[e("label",null,[a(e("input",{type:"checkbox",value:t.id,"onUpdate:modelValue":o[8]||(o[8]=m=>s.form.categories=m)},null,8,ge),[[y,s.form.categories]]),u(" "+n(t.name),1)])]))),128)),he],32)])])])])])])]),_:1})}const ke=B(L,[["render",ve]]);export{ke as default};