import{A as h}from"./AuthenticatedLayout-BOpzDkUu.js";import{r as p,o as a,f as x,g as v,b as e,j as f,w as c,v as g,c as i,d as _,l as y,h as n,t as w,F as b}from"./app-Rcwxyq2f.js";import{_ as P}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./ASide-aOGibqVC.js";const k={props:["products","category"],data(){return{selectedProducts:[]}},components:{AuthenticatedLayout:h},mounted(){this.selectedProducts=this.category.products.map(s=>s.id)},methods:{async updateProduct(){try{const s=await this.$inertia.put("/category/"+this.category.id,{name:this.category.name,selectedProducts:this.selectedProducts});console.log("Product updated successfully:",s)}catch(s){console.error("Error updating product:",s)}}}},B=e("div",{class:"p-4 bg-white block sm:flex items-center justify-between border-b border-gray-200 lg:mt-1.5"},[e("div",{class:"mb-1 w-full"},[e("div",{class:"mb-4"},[e("nav",{class:"flex mb-5","aria-label":"Breadcrumb"},[e("ol",{class:"inline-flex items-center space-x-1 md:space-x-2"},[e("li",{class:"inline-flex items-center"},[e("a",{href:"#",class:"text-gray-700 hover:text-gray-900 inline-flex items-center"},[e("svg",{class:"w-5 h-5 mr-2.5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"})]),n(" Home ")])]),e("li",null,[e("div",{class:"flex items-center"},[e("svg",{class:"w-6 h-6 text-gray-400",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"fill-rule":"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z","clip-rule":"evenodd"})]),e("span",{class:"text-gray-400 ml-1 md:ml-2 text-sm font-medium","aria-current":"page"},"Products")])])])]),e("h1",{class:"text-xl sm:text-2xl font-semibold text-gray-900"},"Edit Category")])])],-1),C={class:"flex flex-col"},L={class:"overflow-x-auto"},M={class:"align-middle inline-block min-w-full"},V={class:"shadow overflow-hidden"},A={class:"container mx-auto w-4/12 py-10"},E={class:"flex flex-col"},j=e("label",null,"Name:",-1),N={class:"mt-8"},U=e("h2",{class:"border-b"},"Products",-1),z=["value"],D=e("div",{class:"mt-4 flex justify-end"},[e("button",{class:"px-4 bg-green-600 text-white rounded-md py-2",type:"submit"},"Update Product")],-1);function F(s,o,l,S,r,d){const u=p("AuthenticatedLayout");return a(),x(u,null,{default:v(()=>[e("div",null,[B,e("div",C,[e("div",L,[e("div",M,[e("div",V,[e("div",A,[e("form",{onSubmit:o[2]||(o[2]=f((...t)=>d.updateProduct&&d.updateProduct(...t),["prevent"]))},[e("div",E,[j,c(e("input",{type:"text","onUpdate:modelValue":o[0]||(o[0]=t=>l.category.name=t),required:""},null,512),[[g,l.category.name]])]),e("div",N,[U,(a(!0),i(b,null,_(l.products,t=>(a(),i("div",{key:t.id},[e("label",null,[c(e("input",{type:"checkbox",value:t.id,"onUpdate:modelValue":o[1]||(o[1]=m=>r.selectedProducts=m)},null,8,z),[[y,r.selectedProducts]]),n(" "+w(t.name),1)])]))),128))]),D],32)])])])])])])]),_:1})}const I=P(k,[["render",F]]);export{I as default};
