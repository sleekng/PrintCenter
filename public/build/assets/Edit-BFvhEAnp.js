import{A as d}from"./AuthenticatedLayout-BOpzDkUu.js";import{r as c,o as u,f as m,g as p,b as t,j as x,w as i,v as a,h as f}from"./app-Rcwxyq2f.js";import{_ as v}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./ASide-aOGibqVC.js";const h={props:["option"],data(){return{selectedOptions:[]}},components:{AuthenticatedLayout:d},mounted(){},methods:{async updateAttribute(){try{const l=await this.$inertia.put("/options/"+this.option.id,{value:this.option.value,cost:this.option.cost,for:this.option.for});console.log("Product updated successfully:",l)}catch(l){console.error("Error updating product:",l)}}}},_=t("div",{class:"p-4 bg-white block sm:flex items-center justify-between border-b border-gray-200 lg:mt-1.5"},[t("div",{class:"mb-1 w-full"},[t("div",{class:"mb-4"},[t("nav",{class:"flex mb-5","aria-label":"Breadcrumb"},[t("ol",{class:"inline-flex items-center space-x-1 md:space-x-2"},[t("li",{class:"inline-flex items-center"},[t("a",{href:"#",class:"text-gray-700 hover:text-gray-900 inline-flex items-center"},[t("svg",{class:"w-5 h-5 mr-2.5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[t("path",{d:"M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"})]),f(" Home ")])]),t("li",null,[t("div",{class:"flex items-center"},[t("svg",{class:"w-6 h-6 text-gray-400",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[t("path",{"fill-rule":"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z","clip-rule":"evenodd"})]),t("span",{class:"text-gray-400 ml-1 md:ml-2 text-sm font-medium","aria-current":"page"},"Products")])])])]),t("h1",{class:"text-xl sm:text-2xl font-semibold text-gray-900"},"Edit Option")])])],-1),w={class:"flex flex-col"},b={class:"overflow-x-auto"},g={class:"align-middle inline-block min-w-full"},y={class:"shadow overflow-hidden"},A={class:"container mx-auto my-10 w-4/12"},B={class:"mt-4 flex flex-col"},V=t("label",null,"Name:",-1),C={class:"mt-4 flex flex-col"},L=t("label",null,"For:",-1),k={class:"mt-4 flex flex-col"},M=t("label",null,"Cost:",-1),U=t("div",{class:"mt-4"},[t("button",{class:"p-2 px-4 bg-green-600 text-white",type:"submit"},"Update Options")],-1);function q(l,e,s,E,N,n){const r=c("AuthenticatedLayout");return u(),m(r,null,{default:p(()=>[t("div",null,[_,t("div",w,[t("div",b,[t("div",g,[t("div",y,[t("div",A,[t("form",{onSubmit:e[3]||(e[3]=x((...o)=>n.updateAttribute&&n.updateAttribute(...o),["prevent"]))},[t("div",B,[V,i(t("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=o=>s.option.value=o),required:""},null,512),[[a,s.option.value]])]),t("div",C,[L,i(t("input",{type:"text","onUpdate:modelValue":e[1]||(e[1]=o=>s.option.for=o),required:""},null,512),[[a,s.option.for]])]),t("div",k,[M,i(t("input",{type:"text","onUpdate:modelValue":e[2]||(e[2]=o=>s.option.cost=o),required:""},null,512),[[a,s.option.cost]])]),U],32)])])])])])])]),_:1})}const T=v(h,[["render",q]]);export{T as default};