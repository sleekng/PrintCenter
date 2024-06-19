import{A as F,H as j,F as q}from"./Footer-CeYOPOBO.js";import{P as B}from"./PrimaryButton-CuL_CjfX.js";import{i as N,T as S,q as y,r as _,o as r,c as o,a as u,b as e,t as n,F as g,d as x,e as c,g as h,n as v,D as b,w as z,v as H,B as w,h as f}from"./app-Ex42Apvz.js";import{S as O}from"./SiteModal-Cg_IsNFe.js";import{_ as P}from"./_plugin-vue_export-helper-DlAUqK2U.js";const E={props:{product:{type:Object,required:!0},errors:Object,navcategories:{type:Object},CartCount:{type:Object}},components:{ApplicationLogo:F,PrimaryButton:B,Link:N,Header:j,Footer:q,SiteModal:O},data(){return{files:[],progress:null,form:S({quantity:1,designDescription:null,files:null,cartItemId:this.product[0].cartItemId,selectedOptions:{},designCost:0,hireDesigner:!1}),selectedOptionsNames:{},ready:!1,uploadDesign:!1,requestDesign:!1,categories:!1,subCategories:!1}},computed:{calculateCost(){let a=0,s=0;return this.product[0].attributeDetails.forEach(l=>{a+=parseFloat(l.cost)}),this.product[0].delivery=="Standard"&&(s=1500),this.product[0].delivery=="Express"&&(s=5e3),this.product[0].delivery=="Next Day"&&(s=15e3),this.total=(parseFloat(this.product[0].product.price)+parseFloat(a))*parseFloat(this.product[0].quantity)+parseFloat(s)+parseFloat(this.form.designCost),this.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}},methods:{handleFileChange(a){this.files=Array.from(a.target.files),this.uploadFile()},removeFile(a){const s=this.form.files[a];this.form.files.splice(a,1),this.files.splice(a,1),this.files.length==0&&(this.progress=null),y.post(route("delete-file"),{filePath:s}).then(l=>{console.log(l.data)}).catch(l=>{console.error("Error deleting file:",l)})},async uploadFile(){const a=new FormData;this.files.forEach((s,l)=>{a.append(`files[${l}]`,s)}),y.post(route("design"),a,{headers:{"Content-Type":"multipart/form-data"},onUploadProgress:s=>{this.progress=Math.round(s.loaded/s.total*100)}}).then(s=>{this.form.files=s.data.files,console.log("Upload successful:",this.form.files)})},design(a){a=="Yes"?(this.form.designCost=0,this.uploadDesign=!0,this.requestDesign=!1,this.ready=!0,this.form.hireDesigner=!1):(this.uploadDesign=!1,this.requestDesign=!0,this.ready=!1)},hire(){this.form.designCost=5e3,this.requestDesign=!1,this.form.hireDesigner=!0},continueToCart(){this.form.put("/cart/update-cart/"+this.form.cartItemId)}}},I={class:"fixed bottom-0 left-0 w-full h-[100px] flex justify-center items-center backdrop-blur-sm bg-primary2/80 z-50"},T={class:"container mx-auto px-4 md:px-24"},U={class:"flex flex-col md:flex-row h-full items-center justify-between"},V={class:"hidden md:flex w-full md:w-8/12 space-x-2 items-center"},A=e("div",{class:"w-16 flex-shrink-0"},[e("img",{class:"object-cover h-full",src:"/storage/img/businesscard.jpg",alt:"Business Card"})],-1),L={class:"hidden md:block"},M={class:"font-bold"},Y={class:"hidden md:flex w-3/6 flex-col items-center"},K=e("span",null,"Quantity",-1),G={key:0},Q={key:1},R={class:"w-full md:w-3/6 flex items-center justify-center md:justify-end space-x-2"},J={class:"text-4xl font-bold"},W={class:"py-12 sm:py-16"},X={class:"container mx-auto px-24"},Z=e("div",{class:"flex"},[e("nav",{class:"flex w-9/12"},[e("ol",{role:"list",class:"flex items-center"},[e("li",{class:"text-left"},[e("div",{class:"-m-1"},[e("a",{href:"#",class:"rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800"}," Home ")])]),e("li",{class:"text-left"},[e("div",{class:"flex items-center"},[e("span",{class:"mx-2 text-gray-400"},"/"),e("div",{class:"-m-1"},[e("a",{href:"#",class:"rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800"}," Products ")])])]),e("li",{class:"text-left"},[e("div",{class:"flex items-center"},[e("span",{class:"mx-2 text-gray-400"},"/"),e("div",{class:"-m-1"},[e("a",{href:"#",class:"rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800","aria-current":"page"}," Coffee ")])])])])]),e("div",{class:"w-3/12 relative"},[e("input",{type:"text",placeholder:" Search for a product",class:"w-full pr-12 h-[60px] border rounded-md"}),e("i",{class:"fa-sharp fa-light fa-magnifying-glass absolute top-4 right-4 text-2xl"})])],-1),$={class:"pt-20"},ee=e("div",{class:"mt-5"}," Now all we need is the design file to print on your product ",-1),se={key:0,class:"bg-red-50 border-s-4 border-red-500 p-4 dark:bg-red-800/30",role:"alert"},te={class:"flex"},re=w('<div class="flex-shrink-0"><span class="inline-flex justify-center items-center size-8 rounded-full border-4 border-red-100 bg-red-200 text-red-800 dark:border-red-900 dark:bg-red-800 dark:text-red-400"><svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg></span></div>',1),oe={class:"ms-3"},le=e("h3",{class:"text-gray-800 font-semibold dark:text-white"}," Error! ",-1),ie={class:"text-sm text-gray-700 dark:text-gray-400"},ae={class:"flex items-center space-x-8 mt-5 rounded-md p-4 shadow-lg"},de=e("span",{class:"font-bold"},"Do you have a Design?",-1),ne={class:"flex space-x-4 mt-4"},ce={class:"mt-10 flex space-x-4 justify-between"},ue={class:"w-8/12"},fe={key:0,class:"border rounded-md shadow-lg flex justify-center relative text-center space-y-4 flex-col mt-8 p-10 w-8/12 animate-fade-up animate-duration-[400ms]"},pe=e("div",null,[e("i",{class:"fa-thin fa-upload text-8xl"})],-1),he=e("div",{class:"flex justify-center flex-col items-center space-y-2"},[e("div",null,"Kindly upload your design files"),e("img",{class:"w-52",src:"/storage/img/file-formats.jpg",alt:""}),e("br")],-1),me={key:0},ge=["disabled"],xe={key:1,class:"w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700"},_e={class:"p-4"},ye=["disabled","onClick"],ve=e("i",{class:"fa-light fa-xmark text-xl text-red-600"},null,-1),be=[ve],we=e("div",null,[e("i",{class:"fa-thin fa-rocket text-8xl"})],-1),ke=e("div",null,[f(" Let our creative team provide an "),e("br"),f(" awesome design for you ")],-1),Ce={key:2},De=w('<h1 class="text-4xl font-bold">Hire a designer</h1><div class="py-4"><h3 class="font-bold">Grapic Design Fee</h3><span>₦5,000</span></div><div class="py-4"><span>Please include all contact details and information you want in your design here. Add all remarks, preferred colours, references and additional instructions here.</span></div><div><span class="text-sm">Please be detailed, for business cards and please input the company name, your name, your position, contact details company addres.</span></div>',4),Fe={key:0,class:"my-2 bg-red-100 border border-red-200 text-sm text-red-800 rounded-lg p-4 dark:bg-red-800/10 dark:border-red-900 dark:text-red-500",role:"alert"},je={class:"border rounded-md shadow-lg flex justify-center relative text-center space-y-4 flex-col mt-8 p-4 w-8/12 animate-fade-up animate-duration-[400ms]"},qe=e("div",null,[e("i",{class:"fa-thin fa-upload text-4xl"})],-1),Be=e("div",{class:"flex justify-center flex-col items-center space-y-2"},[e("div",null,[e("span",null,"Upload design (e.g. logo) asset if any")]),e("img",{class:"w-52",src:"/storage/img/file-formats.jpg",alt:""}),e("br")],-1),Ne={key:0},Se=["disabled"],ze={key:1,class:"w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700"},He={class:"p-4"},Oe=["disabled","onClick"],Pe=e("i",{class:"fa-light fa-xmark text-xl text-red-600"},null,-1),Ee=[Pe];function Ie(a,s,l,Te,t,d){const k=_("Header"),p=_("primary-button"),C=_("Footer");return r(),o(g,null,[u(k,{navcategories:l.navcategories,CartCount:l.CartCount},null,8,["navcategories","CartCount"]),e("div",I,[e("div",T,[e("div",U,[e("div",V,[A,e("div",L,[e("div",M,n(l.product[0].product.name),1),(r(!0),o(g,null,x(l.product[0].attributeDetails,i=>(r(),o("span",{key:i},n(i.value)+" | ",1))),128))])]),e("div",Y,[K,l.product[0].product.unit==100?(r(),o("span",G,n(l.product[0].quantity)+"00",1)):c("",!0),l.product[0].product.unit==1?(r(),o("span",Q,n(l.product[0].quantity),1)):c("",!0)]),e("div",R,[e("span",J,"₦"+n(d.calculateCost),1),u(p,{onClick:d.continueToCart,class:"p-2 md:p-4 px-4 md:px-8 rounded-sm bg-primary font-bold text-white"},{default:h(()=>[f("Continue")]),_:1},8,["onClick"])])])])]),e("section",W,[e("div",X,[Z,e("div",$,[e("div",null,[(r(!0),o(g,null,x(l.product,i=>(r(),o("h2",{key:i,class:"font-bold text-4xl"},n(i.product.name)+", Design Request ",1))),128))]),ee,a.$page.props.flash.error?(r(),o("div",se,[e("div",te,[re,e("div",oe,[le,e("p",ie,n(a.$page.props.flash.error),1)])])])):c("",!0),e("div",ae,[de,e("div",ne,[u(p,{onClick:s[0]||(s[0]=i=>d.design("Yes")),class:v([t.uploadDesign?"bg-primary text-white":"border ","px-16 py-4 rounded-md"])},{default:h(()=>[f("Yes")]),_:1},8,["class"]),u(p,{disabled:t.form.hireDesigner,class:v([t.requestDesign||t.form.hireDesigner?"bg-primary text-white":"border ","px-16 py-4 rounded-md"]),onClick:s[1]||(s[1]=i=>d.design("No"))},{default:h(()=>[f("No")]),_:1},8,["disabled","class"])])]),e("div",ce,[e("div",ue,[t.uploadDesign?(r(),o("div",fe,[pe,he,t.progress==null?(r(),o("div",me,[u(p,{class:"font-bold relative px-16 py-4 text-white bg-black rounded-md"},{default:h(()=>[e("input",{disabled:t.progress,onChange:s[2]||(s[2]=(...i)=>d.handleFileChange&&d.handleFileChange(...i)),multiple:"",type:"file",class:"absolute top-0 left-0 h-full w-full opacity-0 cursor-pointer z-50"},null,40,ge),f(" Upload Design Files ")]),_:1})])):c("",!0),t.progress!==null?(r(),o("div",xe,[e("div",{class:"bg-green-600 text-[10px] text-white rounded-full dark:bg-green-500",style:b({width:`${t.progress}%`})},n(t.progress)+"%",5)])):c("",!0),e("div",_e,[(r(!0),o(g,null,x(t.files,(i,m)=>(r(),o("div",{key:m,class:"p-2 flex justify-between items-center hover:bg-gray-100"},[e("span",null,n(i.name),1),e("button",{disabled:t.progress!=100,onClick:D=>d.removeFile(m)},be,8,ye)]))),128))])])):c("",!0),t.requestDesign?(r(),o("div",{key:1,onClick:s[3]||(s[3]=(...i)=>d.hire&&d.hire(...i)),class:"border rounded-md shadow-lg flex justify-center text-center space-y-4 flex-col mt-8 p-10 w-8/12 animate-fade-up animate-duration-[400ms]"},[we,ke,e("div",null,[u(p,{class:"font-bold px-16 py-4 text-white bg-green-600 rounded-md"},{default:h(()=>[f("Hire a designer")]),_:1})])])):c("",!0),t.form.hireDesigner?(r(),o("div",Ce,[De,e("div",null,[l.errors.designDescription?(r(),o("div",Fe,n(l.errors.designDescription),1)):c("",!0),z(e("textarea",{name:"",id:"",class:"w-full",rows:"10","onUpdate:modelValue":s[4]||(s[4]=i=>t.form.designDescription=i),placeholder:"Enter a request"},null,512),[[H,t.form.designDescription]])]),e("div",null,[e("div",null,[e("div",je,[qe,Be,t.progress==null?(r(),o("div",Ne,[u(p,{class:"font-bold relative px-16 py-4 text-white bg-black rounded-md"},{default:h(()=>[e("input",{disabled:t.progress,onChange:s[5]||(s[5]=(...i)=>d.handleFileChange&&d.handleFileChange(...i)),multiple:"",type:"file",class:"absolute top-0 left-0 h-full w-full opacity-0 cursor-pointer z-50"},null,40,Se),f(" Upload Design Files ")]),_:1})])):c("",!0),t.progress!==null?(r(),o("div",ze,[e("div",{class:"bg-green-600 text-[10px] text-white rounded-full dark:bg-green-500",style:b({width:`${t.progress}%`})},n(t.progress)+"%",5)])):c("",!0),e("div",He,[(r(!0),o(g,null,x(t.files,(i,m)=>(r(),o("div",{key:m,class:"p-2 flex justify-between items-center hover:bg-gray-100"},[e("span",null,n(i.name),1),e("button",{disabled:t.progress!=100,onClick:D=>d.removeFile(m)},Ee,8,Oe)]))),128))])])])])])):c("",!0)])])])])]),u(C)],64)}const Ye=P(E,[["render",Ie]]);export{Ye as default};