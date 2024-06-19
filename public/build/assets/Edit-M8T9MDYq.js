import{T as y,i as w,r as p,o as i,f as k,g as f,b as e,a as S,h as m,c as r,F as h,d as v,t as d,e as u,j as V,w as n,v as c,z as C,l as L}from"./app-K9V-QYzT.js";import{A}from"./AuthenticatedLayout-D4X8jpsA.js";import{_ as B}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./ASide-xXhjZfge.js";const M={props:["options","attribute"],data(){return{selectedOptions:[],attributeOption:null,form:y({name:this.attribute.name,options:[],type:this.attribute.type,slug:this.attribute.slug,for_product:this.attribute.for_product}),value:null,cost:null,errorMessage:""}},components:{Link:w,AuthenticatedLayout:A},mounted(){this.attributeOption=this.options,this.form.options=this.attribute.options.map(s=>s.id)},computed:{slug(){return this.form.slug=this.createSlug(this.form.name),this.createSlug(this.form.name)}},methods:{createSlug(s){return s.toLowerCase().replace(/\s+/g,"-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")},updateSec(){this.form.type=="radio"||this.form.type=="select"||this.form.type=="radio_single"?(this.attributeOption=this.options,this.form.options=[]):this.attributeOption=null},async submitForm(){try{this.form.put(route("attributes.update",this.attribute.id),{preserveScroll:!0})}catch(s){console.error("Error adding product:",s)}}}},U={class:"p-4 bg-white block sm:flex items-center justify-between border-b border-gray-200 lg:mt-1.5"},F={class:"mb-1 w-full"},O=e("div",{class:"mb-4"},[e("nav",{class:"flex mb-5","aria-label":"Breadcrumb"},[e("ol",{class:"inline-flex items-center space-x-1 md:space-x-2"},[e("li",{class:"inline-flex items-center"},[e("a",{href:"#",class:"text-gray-700 hover:text-gray-900 inline-flex items-center"},[e("svg",{class:"w-5 h-5 mr-2.5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"})]),m(" Home ")])]),e("li",null,[e("div",{class:"flex items-center"},[e("svg",{class:"w-6 h-6 text-gray-400",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"fill-rule":"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z","clip-rule":"evenodd"})]),e("span",{class:"text-gray-400 ml-1 md:ml-2 text-sm font-medium","aria-current":"page"},"Products")])])])]),e("h1",{class:"text-xl sm:text-2xl font-semibold text-gray-900"},"Update Product Attribute")],-1),N={class:"block sm:flex items-center md:divide-x md:divide-gray-100"},T={class:"flex items-center sm:justify-end w-full"},z=e("svg",{class:"-ml-1 mr-2 h-6 w-6",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"fill-rule":"evenodd",d:"M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z","clip-rule":"evenodd"})],-1),j={class:"flex flex-col"},E={class:"overflow-x-auto"},D={class:"align-middle inline-block min-w-full"},H={class:"shadow overflow-hidden"},P={class:"container mx-auto w-4/12 my-10"},R={key:0},K={key:1,class:"text-green-500"},q={class:"mt-4 flex flex-col"},G=e("label",{for:"name"},"Name:",-1),I={class:"mt-4 flex flex-col"},J=e("label",{for:"name"},"slug",-1),Q={class:"mt-4 flex flex-col"},W=e("label",{for:"for_product"},"For:",-1),X={class:"mt-4 flex flex-col"},Y=e("label",{for:"name"},"Type:",-1),Z=e("option",{value:"text"},"Text",-1),$=e("option",{value:"radio"},"Radio",-1),ee=e("option",{value:"radio_single"},"Radio Single",-1),te=e("option",{value:"textarea"},"textarea",-1),oe=e("option",{value:"select"},"Select",-1),se=e("option",{value:"number"},"number",-1),le=[Z,$,ee,te,oe,se],ie={key:0,class:"mt-4"},re={class:"my-4"},ne=e("label",null," Select from the list of options or Add new",-1),ae=["value"],de=e("div",{class:"mt-4"},[e("button",{class:"bg-green-600 text-white px-4 p-2 rounded-sm",type:"submit"},"Update Attribute")],-1);function ue(s,o,_,ce,l,a){const g=p("Link"),x=p("AuthenticatedLayout");return i(),k(x,null,{default:f(()=>[e("div",null,[e("div",U,[e("div",F,[O,e("div",N,[e("div",T,[S(g,{href:s.route("options.create"),type:"button","data-modal-toggle":"add-product-modal",class:"text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium inline-flex items-center rounded-lg text-sm px-3 py-2 text-center sm:ml-auto"},{default:f(()=>[z,m(" Create Attribute Option ")]),_:1},8,["href"])])])])]),e("div",j,[e("div",E,[e("div",D,[e("div",H,[e("div",P,[s.$page.props.errors?(i(),r("div",R,[(i(!0),r(h,null,v(s.$page.props.errors,t=>(i(),r("div",{key:t,class:"text-red-600"},d(t),1))),128))])):u("",!0),s.$page.props.flash.success?(i(),r("div",K,d(s.$page.props.flash.success),1)):u("",!0),e("form",{onSubmit:o[7]||(o[7]=V((...t)=>a.submitForm&&a.submitForm(...t),["prevent"]))},[e("div",q,[G,n(e("input",{type:"text","onUpdate:modelValue":o[0]||(o[0]=t=>l.form.name=t),id:"name",onKeydown:o[1]||(o[1]=(...t)=>s.updateSlug&&s.updateSlug(...t))},null,544),[[c,l.form.name]])]),e("div",I,[J,n(e("input",{type:"text","onUpdate:modelValue":o[2]||(o[2]=t=>l.form.slug=t),placeholder:"Slug",id:"slug"},null,512),[[c,l.form.slug]])]),e("div",Q,[W,n(e("input",{type:"text","onUpdate:modelValue":o[3]||(o[3]=t=>l.form.for_product=t),id:"for_product"},null,512),[[c,l.form.for_product]])]),e("div",X,[Y,n(e("select",{"onUpdate:modelValue":o[4]||(o[4]=t=>l.form.type=t),onChange:o[5]||(o[5]=(...t)=>a.updateSec&&a.updateSec(...t)),name:"type",id:""},le,544),[[C,l.form.type]])]),l.form.type=="radio"||l.form.type=="select"||l.form.type=="radio_single"?(i(),r("div",ie,[e("div",re,[ne,(i(!0),r(h,null,v(_.options,t=>(i(),r("div",{key:t.id},[e("label",null,[n(e("input",{type:"checkbox",value:t.id,"onUpdate:modelValue":o[6]||(o[6]=b=>l.form.options=b)},null,8,ae),[[L,l.form.options]]),m(" "+d(t.value)+"("+d(t.for)+") ",1)])]))),128))])])):u("",!0),de],32)])])])])])])]),_:1})}const ve=B(M,[["render",ue]]);export{ve as default};
