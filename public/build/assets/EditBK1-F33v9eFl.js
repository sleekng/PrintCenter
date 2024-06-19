import{i as k,T,r as v,o as r,f as V,g as x,b as e,a as C,h as g,c as l,F as f,d as h,t as a,e as m,j as q,w as d,v as p,z as b,n as A,l as I}from"./app-K9V-QYzT.js";import{A as U}from"./AuthenticatedLayout-D4X8jpsA.js";import{_ as B}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./ASide-xXhjZfge.js";const L={props:{product:{type:Object,required:!0},categories:{type:Array,required:!0}},components:{Link:k,AuthenticatedLayout:U},mounted(){this.form.name=this.product.name,this.form.slug=this.product.slug,this.form.description=this.product.description,this.form.price=this.product.price,this.form.quantityType=this.product.quantityType,this.form.unit=this.product.unit,this.form.categories=this.product.categories.map(i=>i.id),this.form.attributes=this.product.attributes.map(i=>({name:i.name,slug:i.slug,type:i.type,options:i.options.map(s=>({value:s.value,cost:s.cost}))}))},data(){return{form:T({name:"",slug:"",description:"",price:"",quantityType:"",unit:"",files:[null,null,null],attributes:[],categories:[]})}},methods:{async submitForm(){try{await this.form.post("/product-update")}catch(i){console.error("Error updating product:",i)}},updateNewImage(i,s){this.form.files.splice(i,1,s)},deleteExistingImage(i){this.form.existingImages.splice(i,1)}}},j={class:"p-4 bg-white block sm:flex items-center justify-between border-b border-gray-200 lg:mt-1.5"},N={class:"mb-1 w-full"},P=e("div",{class:"mb-4"},[e("nav",{class:"flex mb-5","aria-label":"Breadcrumb"},[e("ol",{class:"inline-flex items-center space-x-1 md:space-x-2"},[e("li",{class:"inline-flex items-center"},[e("a",{href:"#",class:"text-gray-700 hover:text-gray-900 inline-flex items-center"},[e("svg",{class:"w-5 h-5 mr-2.5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"})]),g(" Home ")])]),e("li",null,[e("div",{class:"flex items-center"},[e("svg",{class:"w-6 h-6 text-gray-400",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"fill-rule":"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z","clip-rule":"evenodd"})]),e("span",{class:"text-gray-400 ml-1 md:ml-2 text-sm font-medium","aria-current":"page"},"Products")])])])]),e("h1",{class:"text-xl sm:text-2xl font-semibold text-gray-900"},"Add Product")],-1),M={class:"block sm:flex items-center md:divide-x md:divide-gray-100"},z={class:"flex items-center sm:justify-end w-full"},F=e("svg",{class:"-ml-1 mr-2 h-6 w-6",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"fill-rule":"evenodd",d:"M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z","clip-rule":"evenodd"})],-1),S={class:"flex flex-col"},E={class:"overflow-x-auto"},D={class:"align-middle inline-block min-w-full"},R={class:"shadow overflow-hidden"},H={class:"w-4/12 mx-auto my-10"},O={key:0},K={key:1,class:"text-green-500"},Q={class:"mt-4 flex flex-col"},G=e("label",null,"Name:",-1),J={class:"mt-4 flex flex-col"},W=e("label",null,"Quantity Type",-1),X=e("option",{value:"type-1"},"Type 1 starts at (100)",-1),Y=e("option",{value:"type-2"},"Type 2 starts (1)",-1),Z=[X,Y],$={class:"mt-4 flex flex-col"},ee=e("label",null,"Description:",-1),te={class:"mt-4 flex flex-col"},se=e("label",null,"Price:",-1),oe={class:"my-4 mt-10 block"},ie=e("label",{class:"block text-sm font-medium text-gray-700 mb-4"},"Product Image:",-1),re={class:"flex flex-col"},le={class:"mb-4"},ne=["src"],ae=["value"],de={class:"mb-4"},ce=["src"],ue=["value"],me={class:"mb-4"},pe=["src"],fe=["value"],he={class:"mt-6"},ge=e("h2",{class:"text-lg font-semibold"},"Attributes",-1),_e={class:"flex justify-between items-center"},ve={class:"text-lg font-semibold"},xe=["onClick"],be={class:"mt-4 flex flex-col"},ye=e("label",{for:"'attribute-name-' + index"},"Name:",-1),we=["onUpdate:modelValue","id"],ke={class:"mt-4 flex flex-col"},Te=e("label",{for:"'attribute-type-' + index"},"Type:",-1),Ve=["onUpdate:modelValue","onChange","id"],Ce=e("option",{value:"text"},"Text",-1),qe=e("option",{value:"radio"},"Radio",-1),Ae=e("option",{value:"radio_single"},"Radio Single",-1),Ie=e("option",{value:"textarea"},"Textarea",-1),Ue=e("option",{value:"select"},"Select",-1),Be=e("option",{value:"number"},"Number",-1),Le=[Ce,qe,Ae,Ie,Ue,Be],je=["value"],Ne=e("div",{class:"my-4"},[e("button",{type:"submit",class:"inline-flex items-center px-4 py-2 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-900 focus:outline-none focus:border-indigo-900 focus:ring ring-indigo-300 disabled:opacity-25 transition ease-in-out duration-150"}," Update Product ")],-1);function Pe(i,s,c,Me,o,_){const y=v("Link"),w=v("AuthenticatedLayout");return r(),V(w,null,{default:x(()=>[e("div",null,[e("div",j,[e("div",N,[P,e("div",M,[e("div",z,[C(y,{href:i.route("attributes.create"),type:"button","data-modal-toggle":"add-product-modal",class:"text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium inline-flex items-center rounded-lg text-sm px-3 py-2 text-center sm:ml-auto"},{default:x(()=>[F,g(" Create Attribute ")]),_:1},8,["href"])])])])]),e("div",S,[e("div",E,[e("div",D,[e("div",R,[e("div",H,[i.$page.props.errors?(r(),l("div",O,[(r(!0),l(f,null,h(i.$page.props.errors,t=>(r(),l("div",{key:t,class:"text-red-600"},a(t),1))),128))])):m("",!0),i.$page.props.flash.success?(r(),l("div",K,a(i.$page.props.flash.success),1)):m("",!0),e("form",{onSubmit:s[8]||(s[8]=q((...t)=>_.submitForm&&_.submitForm(...t),["prevent"]))},[e("div",Q,[G,d(e("input",{type:"text","onUpdate:modelValue":s[0]||(s[0]=t=>o.form.name=t),required:""},null,512),[[p,o.form.name]])]),e("div",J,[W,d(e("select",{"onUpdate:modelValue":s[1]||(s[1]=t=>o.form.quantityType=t),name:"quantityType",id:"quantityType"},Z,512),[[b,o.form.quantityType]])]),e("div",$,[ee,d(e("textarea",{"onUpdate:modelValue":s[2]||(s[2]=t=>o.form.description=t)},null,512),[[p,o.form.description]])]),e("div",te,[se,d(e("input",{type:"number","onUpdate:modelValue":s[3]||(s[3]=t=>o.form.price=t),required:""},null,512),[[p,o.form.price]])]),e("div",oe,[ie,e("div",re,[e("div",le,[e("img",{src:"/storage/"+c.product.product_img1,alt:"Product Image",class:"w-32 h-32 object-cover rounded-md"},null,8,ne),e("input",{type:"file",onInput:s[4]||(s[4]=t=>o.form.files[0]=t.target.files[0])},null,32),o.form.progress?(r(),l("progress",{key:0,value:o.form.progress.percentage,max:"100"},a(o.form.progress.percentage)+"% ",9,ae)):m("",!0)]),e("div",de,[e("img",{src:"/storage/"+c.product.product_img2,alt:"Product Image",class:"w-32 h-32 object-cover rounded-md"},null,8,ce),e("input",{type:"file",onInput:s[5]||(s[5]=t=>o.form.files[1]=t.target.files[0])},null,32),o.form.progress?(r(),l("progress",{key:0,value:o.form.progress.percentage,max:"100"},a(o.form.progress.percentage)+"% ",9,ue)):m("",!0)]),e("div",me,[e("img",{src:"/storage/"+c.product.product_img3,alt:"Product Image",class:"w-32 h-32 object-cover rounded-md"},null,8,pe),e("input",{type:"file",onInput:s[6]||(s[6]=t=>o.form.files[2]=t.target.files[0])},null,32),o.form.progress?(r(),l("progress",{key:0,value:o.form.progress.percentage,max:"100"},a(o.form.progress.percentage)+"% ",9,fe)):m("",!0)])])]),e("div",he,[ge,(r(!0),l(f,null,h(o.form.attributes,(t,n)=>(r(),l("div",{key:n,class:"mt-6 border p-4 rounded-lg"},[e("div",_e,[e("h2",ve,"Attribute "+a(n+1),1),e("button",{onClick:u=>i.removeAttribute(n),type:"button",class:"text-red-600 hover:text-red-800 font-medium text-sm"}," Remove Attribute ",8,xe)]),e("div",be,[ye,d(e("input",{type:"text","onUpdate:modelValue":u=>t.name=u,id:"attribute-name-"+n},null,8,we),[[p,t.name]])]),e("div",ke,[Te,d(e("select",{"onUpdate:modelValue":u=>t.type=u,onChange:u=>i.updateOptions(n),id:"attribute-type-"+n},Le,40,Ve),[[b,t.type]])])]))),128))]),e("h2",{class:A([c.categories.length>0?"":"text-red-600","mt-8"])},"Categories",2),(r(!0),l(f,null,h(c.categories,t=>(r(),l("div",{key:t.id},[e("label",null,[d(e("input",{type:"checkbox",value:t.id,"onUpdate:modelValue":s[7]||(s[7]=n=>o.form.categories=n)},null,8,je),[[I,o.form.categories]]),g(" "+a(t.name),1)])]))),128)),Ne],32)])])])])])])]),_:1})}const De=B(L,[["render",Pe]]);export{De as default};
