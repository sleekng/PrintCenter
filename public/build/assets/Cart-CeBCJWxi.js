import{A as U,H as L,F as B}from"./Footer-BFzHoR5J.js";import{P as T}from"./PrimaryButton-DaUcwRH6.js";import{S as E}from"./Search-C46ZXI0x.js";import{i as Q,T as A,q as j,O as N,r as x,o as n,c as l,f as D,e as u,b as t,F as S,d as I,a as f,h as m,t as p,n as F,g as b,s as H,B as y,w as v,z as w,j as O,v as V,p as Z,m as z}from"./app-BYdloDOQ.js";import{S as R}from"./SiteModal-D4Tg23b4.js";import{_ as G}from"./_plugin-vue_export-helper-DlAUqK2U.js";const W={components:{Search:E,ApplicationLogo:U,PrimaryButton:T,Link:Q,Header:L,Footer:B,SiteModal:R},props:{navcategories:{type:Object},cart:{required:!0},breadcrumbs:{required:!0},CartCount:{required:!0}},data(){return{newCartlength:null,isSticky:!1,canResetPassword:!0,showModal:!1,loading:!1,ready:!1,uploadDesign:!1,hireDesigner:!1,requestDesign:!1,categories:!1,subCategories:!1,tax:0,total:0,form:A({createAccount:null,email:"",password:"",remember:!1})}},computed:{calTax(){return this.tax.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")},calculateSubCost(){let o=0,a=0,c=0,h=0;for(let s in this.cart)this.cart[s].attributeDetails.forEach(r=>{o+=parseFloat(r.cost)}),this.cart[s].delivery=="Standard"&&(a=1500),this.cart[s].delivery=="Express"&&(a=5e3),this.cart[s].delivery=="Next Day"&&(a=15e3),this.cart[s].hireDesigner==!0&&(c=5e3),h+=(parseFloat(this.cart[s].product.price)+parseFloat(o))*parseFloat(this.cart[s].quantity)+parseFloat(a)+parseFloat(c),o=0;return this.totalSubCost(h),j.post(route("update-sub-total"),{subTotal:h}).then(s=>{console.log(s)}),h.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}},methods:{guest(){this.showModal=!1,this.form.createAccount="guest",this.form.post(route("checkout"))},submit(){this.form.createAccount="login",this.form.post(route("checkout"))},loginUserSubmit(){this.form.createAccount="loggedIn",this.form.post(route("checkout"))},totalSubCost(o){this.total=(o+parseFloat(this.tax)).toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")},perProductSubCost(o,a,c,h,s){let r=0,g=0,_=0,C=0;return c.forEach(k=>{r+=parseFloat(k.cost)}),h=="Standard"&&(g=1500),h=="Express"&&(g=5e3),h=="Next Day"&&(g=15e3),s==!0&&(_=5e3),C=(parseFloat(o)+parseFloat(r))*parseFloat(a)+parseFloat(g)+parseFloat(_),C.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")},clearCart(){N.post("/cart/clear")},updateQuantity(o,a){this.loading=!this.loading,this.$page.props.flash.success=!1,this.$page.props.flash.message=!1,j.put("/cart/update/"+o,{quantity:a}).then(c=>{this.$page.props.flash.message=c.data.message,this.loading=this.loading?!1:this.loading})},design(o){o=="Yes"?(this.uploadDesign=!0,this.requestDesign=!1,this.ready=!0,this.hireDesigner=!1):(this.uploadDesign=!1,this.requestDesign=!0,this.ready=!0)},hire(){this.requestDesign=!1,this.hireDesigner=!0},removeItem(o,a){this.cart.splice(a,1),this.loading=!this.loading,this.$page.props.flash.success=!1,this.$page.props.flash.message=!1,j.post(route("cart.remove",o)).then(c=>{this.$page.props.flash.message=c.data.message,this.loading=this.loading?!1:this.loading,this.newCartlength=this.cart.length})}}},i=o=>(Z("data-v-1508fcd8"),o=o(),z(),o),Y={key:2,class:"fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-black bg-opacity-50"},J=i(()=>t("div",{class:"rounded-lg w-1/2 p-8"},[t("div",{class:"flex justify-center"},[t("div",{class:"loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32"})])],-1)),K=[J],X={class:"py-12 sm:py-16"},$={class:"container mx-auto px-4 sm:px-24"},tt={class:"flex flex-col sm:flex-row"},et={class:"flex w-full sm:w-9/12 mb-4 sm:mb-0"},st={role:"list",class:"flex items-center space-x-2"},ot={class:"flex items-center"},at=i(()=>t("span",{class:"mx-2 text-gray-400"},"/",-1)),it={class:"-m-1"},nt={class:"py-12 sm:py-4 lg:py-8"},lt=i(()=>t("div",{class:"flex items-center py-4"},[t("h1",{class:"text-2xl font-semibold text-gray-900"}," Cart ")],-1)),rt={key:0,class:"inline-flex rounded-lg bg-green-light-6 px-[18px] py-4 animate-bounce animate-once animate-duration-[3000ms]"},dt={class:"flex items-center text-sm font-medium text-[#004434]"},ct=y('<span class="mr-3 flex h-5 w-5 items-center justify-center rounded-full bg-green" data-v-1508fcd8><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-1508fcd8><g clip-path="url(#clip0_961_15641)" data-v-1508fcd8><path d="M6.00002 0.337494C2.86877 0.337494 0.337524 2.86874 0.337524 5.99999C0.337524 9.13124 2.86877 11.6812 6.00002 11.6812C9.13128 11.6812 11.6813 9.13124 11.6813 5.99999C11.6813 2.86874 9.13128 0.337494 6.00002 0.337494ZM6.00002 10.8375C3.33752 10.8375 1.18127 8.66249 1.18127 5.99999C1.18127 3.33749 3.33752 1.18124 6.00002 1.18124C8.66252 1.18124 10.8375 3.35624 10.8375 6.01874C10.8375 8.66249 8.66252 10.8375 6.00002 10.8375Z" fill="white" data-v-1508fcd8></path><path d="M7.61255 4.25624L5.3813 6.43124L4.3688 5.43749C4.20005 5.26874 3.93755 5.28749 3.7688 5.43749C3.60005 5.60624 3.6188 5.86874 3.7688 6.03749L4.9688 7.19999C5.0813 7.31249 5.2313 7.36874 5.3813 7.36874C5.5313 7.36874 5.6813 7.31249 5.7938 7.19999L8.21255 4.87499C8.3813 4.70624 8.3813 4.44374 8.21255 4.27499C8.0438 4.10624 7.7813 4.10624 7.61255 4.25624Z" fill="white" data-v-1508fcd8></path></g><defs data-v-1508fcd8><clipPath id="clip0_961_15641" data-v-1508fcd8><rect width="12" height="12" fill="white" data-v-1508fcd8></rect></clipPath></defs></svg></span>',1),ut={key:1,class:"inline-flex rounded-lg bg-green-light-6 px-[18px] py-4 animate-bounce animate-once animate-duration-[3000ms]"},pt={class:"flex items-center text-sm font-medium text-[#004434]"},ft=y('<span class="mr-3 flex h-5 w-5 items-center justify-center rounded-full bg-green" data-v-1508fcd8><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-1508fcd8><g clip-path="url(#clip0_961_15641)" data-v-1508fcd8><path d="M6.00002 0.337494C2.86877 0.337494 0.337524 2.86874 0.337524 5.99999C0.337524 9.13124 2.86877 11.6812 6.00002 11.6812C9.13128 11.6812 11.6813 9.13124 11.6813 5.99999C11.6813 2.86874 9.13128 0.337494 6.00002 0.337494ZM6.00002 10.8375C3.33752 10.8375 1.18127 8.66249 1.18127 5.99999C1.18127 3.33749 3.33752 1.18124 6.00002 1.18124C8.66252 1.18124 10.8375 3.35624 10.8375 6.01874C10.8375 8.66249 8.66252 10.8375 6.00002 10.8375Z" fill="white" data-v-1508fcd8></path><path d="M7.61255 4.25624L5.3813 6.43124L4.3688 5.43749C4.20005 5.26874 3.93755 5.28749 3.7688 5.43749C3.60005 5.60624 3.6188 5.86874 3.7688 6.03749L4.9688 7.19999C5.0813 7.31249 5.2313 7.36874 5.3813 7.36874C5.5313 7.36874 5.6813 7.31249 5.7938 7.19999L8.21255 4.87499C8.3813 4.70624 8.3813 4.44374 8.21255 4.27499C8.0438 4.10624 7.7813 4.10624 7.61255 4.25624Z" fill="white" data-v-1508fcd8></path></g><defs data-v-1508fcd8><clipPath id="clip0_961_15641" data-v-1508fcd8><rect width="12" height="12" fill="white" data-v-1508fcd8></rect></clipPath></defs></svg></span>',1),ht={class:"bg-white grid-cols-1 mt-4 gap-20 grid md:grid-cols-12"},mt={key:0,class:"flex flex-col items-center justify-center space-y-6 p-4 text-center sm:text-left sm:space-y-0 sm:space-x-6"},gt=i(()=>t("div",{class:"text-2xl sm:text-4xl font-bold text-green-600"}," Cart is empty! ",-1)),_t={class:"flex flex-col justify-center items-center space-y-4 sm:space-y-2"},vt=i(()=>t("span",null,"Please add some products to your shopping cart",-1)),yt=i(()=>t("i",{class:"fa-sharp fa-solid fa-arrow-right"},null,-1)),xt=i(()=>t("div",{class:"w-10/12 sm:w-4/12"},[t("img",{src:"/storage/img/empty-cart.svg",alt:"Empty cart image",class:"w-full"})],-1)),bt={class:"flex flex-col gap-8"},wt={class:"flex flex-col md:flex-row md:items-center pb-4"},Ct=["src"],kt={class:"md:ml-4 flex-grow"},qt={class:"text-lg font-semibold"},St={key:0,class:"flex items-center mt-2"},jt=i(()=>t("label",{class:"mr-2"},"Quantity:",-1)),It=["onUpdate:modelValue","onChange"],Ft=y('<option value="1" data-v-1508fcd8>1</option><option value="2" data-v-1508fcd8>2</option><option value="3" data-v-1508fcd8>3</option><option value="4" data-v-1508fcd8>4</option><option value="5" data-v-1508fcd8>5</option><option value="6" data-v-1508fcd8>6</option><option value="7" data-v-1508fcd8>7</option><option value="8" data-v-1508fcd8>8</option><option value="9" data-v-1508fcd8>9</option><option value="10" data-v-1508fcd8>10</option><option value="15" data-v-1508fcd8>15</option><option value="20" data-v-1508fcd8>20</option><option value="50" data-v-1508fcd8>50</option><option value="70" data-v-1508fcd8>70</option>',14),Dt=[Ft],Vt={key:1,class:"flex items-center mt-2"},Mt=i(()=>t("label",{class:"mr-2"},"Quantity:",-1)),Pt=["onUpdate:modelValue","onChange"],Ut=y('<option value="10" data-v-1508fcd8>10</option><option value="20" data-v-1508fcd8>20</option><option value="30" data-v-1508fcd8>30</option><option value="4" data-v-1508fcd8>40</option><option value="50" data-v-1508fcd8>50</option><option value="100" data-v-1508fcd8>100</option><option value="500" data-v-1508fcd8>500</option><option value="2000" data-v-1508fcd8>2000</option>',8),Lt=[Ut],Bt={key:2,class:"flex items-center mt-2"},Tt=i(()=>t("label",{class:"mr-2"},"Quantity:",-1)),Et=["onUpdate:modelValue","onChange"],Qt=y('<option value="12" data-v-1508fcd8>12</option><option value="24" data-v-1508fcd8>24</option><option value="50" data-v-1508fcd8>50</option><option value="100" data-v-1508fcd8>100</option><option value="200" data-v-1508fcd8>200</option><option value="300" data-v-1508fcd8>300</option><option value="500" data-v-1508fcd8>500</option><option value="1000" data-v-1508fcd8>1000</option><option value="2000" data-v-1508fcd8>2000</option>',9),At=[Qt],Nt={key:3,class:"flex items-center mt-2"},Ht=i(()=>t("label",{class:"mr-2"},"Quantity:",-1)),Ot=["onUpdate:modelValue","onChange"],Zt=y('<option value="10" data-v-1508fcd8>50</option><option value="100" data-v-1508fcd8>100</option><option value="200" data-v-1508fcd8>200</option><option value="500" data-v-1508fcd8>500</option><option value="1000" data-v-1508fcd8>1000</option><option value="2000" data-v-1508fcd8>2000</option>',6),zt=[Zt],Rt={key:4,class:"flex items-center mt-2"},Gt=i(()=>t("label",{class:"mr-2"},"Quantity:",-1)),Wt=["onUpdate:modelValue","onChange"],Yt=y('<option value="100" data-v-1508fcd8>100</option><option value="200" data-v-1508fcd8>200</option><option value="300" data-v-1508fcd8>300</option><option value="400" data-v-1508fcd8>400</option><option value="500" data-v-1508fcd8>500</option>',5),Jt=[Yt],Kt={class:"md:text-right"},Xt={class:"text-xl font-semibold"},$t=["onClick"],te={class:"mb-4"},ee=i(()=>t("h4",{class:"font-semibold"},"Product Specifications",-1)),se={class:"mt-2"},oe={key:1,class:"p-4 justify-end flex"},ae={key:0,class:"col-span-1 md:col-span-4 sm:pb-10"},ie=i(()=>t("div",{class:"py-4 font-bold"}," Order Summary ",-1)),ne={class:"mt-6 border-t border-b py-2"},le={class:"flex items-center justify-between"},re=i(()=>t("p",{class:"text-md text-gray-400"}," Subtotal ",-1)),de={class:"text-lg font-semibold text-gray-900"},ce={class:"flex items-center justify-between"},ue=i(()=>t("p",{class:"text-md text-gray-400"}," Tax ",-1)),pe={class:"text-lg font-semibold text-gray-900"},fe={class:"mt-6 flex items-center justify-between"},he=i(()=>t("p",{class:"text-sm font-medium text-gray-900"}," Total ",-1)),me={class:"text-2xl font-semibold text-gray-900"},ge={class:"mt-6 text-center"},_e=i(()=>t("svg",{xmlns:"http://www.w3.org/2000/svg",class:"group-hover:ml-8 ml-4 h-6 w-6 transition-all",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M13 7l5 5m0 0l-5 5m5-5H6"})],-1)),ve=i(()=>t("svg",{xmlns:"http://www.w3.org/2000/svg",class:"group-hover:ml-8 ml-4 h-6 w-6 transition-all",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M13 7l5 5m0 0l-5 5m5-5H6"})],-1)),ye={key:0,class:"fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50"},xe={class:"bg-white w-full max-w-md p-6 rounded-lg shadow-lg"},be={class:"flex items-center justify-end"},we=i(()=>t("i",{class:"fa-sharp fa-light fa-circle-xmark text-2xl"},null,-1)),Ce=[we],ke={class:"flex justify-center mx-auto"},qe=i(()=>t("img",{class:"w-40",src:"/storage/img/logo-main.png",alt:""},null,-1)),Se=i(()=>t("p",{class:"mt-3 text-xl text-center text-gray-600"},"Welcome back!",-1)),je=i(()=>t("div",{class:"flex items-center justify-between mt-4"},[t("span",{class:"w-1/5 border-b lg:w-1/4"}),t("a",{href:"#",class:"text-xs text-center text-gray-500 uppercase hover:underline"},"or login with email"),t("span",{class:"w-1/5 border-b lg:w-1/4"})],-1)),Ie={key:0,class:"inline-flex rounded-lg bg-red-light-6 px-[18px] py-4 animate-bounce animate-once animate-duration-[3000ms]"},Fe={class:"flex items-center text-sm font-medium text-red-600"},De=i(()=>t("span",{class:"mr-3 flex h-5 w-5 items-center justify-center rounded-full"},[t("i",{class:"fa-sharp fa-thin fa-diamond-exclamation"})],-1)),Ve={class:"mt-4"},Me=i(()=>t("label",{class:"block mb-2 text-sm font-medium text-gray-600",for:"LoggingEmailAddress"},"Email Address",-1)),Pe={key:1,class:"mt-4"},Ue={class:"flex justify-between"},Le=i(()=>t("label",{class:"block mb-2 text-sm font-medium text-gray-600",for:"loggingPassword"},"Password",-1)),Be=["href"],Te={class:"block mt-4"},Ee={class:"flex items-center"},Qe=i(()=>t("span",{class:"ms-2 text-sm text-gray-600"},"Remember me",-1)),Ae={class:"mt-6"},Ne=["disabled"],He={class:"flex items-center justify-between mt-4"},Oe=i(()=>t("span",{class:"w-1/5 border-b md:w-1/4"},null,-1)),Ze=i(()=>t("span",{class:"w-1/5 border-b md:w-1/4"},null,-1)),ze={class:"mt-4 flex justify-end"},Re=["disabled"];function Ge(o,a,c,h,s,r){const g=x("Header"),_=x("Link"),C=x("search"),k=x("InputError"),M=x("Checkbox"),P=x("Footer");return n(),l(S,null,[s.newCartlength!=null?(n(),D(g,{key:0,navcategories:c.navcategories,CartCount:s.newCartlength},null,8,["navcategories","CartCount"])):u("",!0),s.newCartlength==null?(n(),D(g,{key:1,navcategories:c.navcategories,CartCount:c.CartCount},null,8,["navcategories","CartCount"])):u("",!0),s.loading?(n(),l("div",Y,K)):u("",!0),t("section",X,[t("div",$,[t("div",tt,[t("nav",et,[t("ol",st,[(n(!0),l(S,null,I(c.breadcrumbs,(e,q)=>(n(),l("li",{key:q,class:"text-left"},[t("div",ot,[at,t("div",it,[f(_,{href:e.link,class:"rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800"},{default:b(()=>[m(p(e.text),1)]),_:2},1032,["href"])])])]))),128))])]),f(C)]),t("section",nt,[lt,o.$page.props.flash.success?(n(),l("div",rt,[t("p",dt,[ct,m(" "+p(o.$page.props.flash.success),1)])])):u("",!0),o.$page.props.flash.message?(n(),l("div",ut,[t("p",pt,[ft,m(" "+p(o.$page.props.flash.message),1)])])):u("",!0),t("div",ht,[t("div",{class:F([c.cart.length>0?"md:col-span-8":"md:col-span-12","border rounded-md col-span-1 p-4 sm:pt-10"])},[c.cart.length===0?(n(),l("div",mt,[gt,t("div",_t,[vt,f(_,{class:"text-primary underline hover:text-primary-dark",href:o.route("home")},{default:b(()=>[m(" Explore "),yt]),_:1},8,["href"])]),xt])):u("",!0),t("div",bt,[(n(!0),l(S,null,I(c.cart,(e,q)=>(n(),l("div",{class:"flex-1 border-b border-green-600",key:q},[t("div",wt,[t("img",{src:"/storage/"+e.product.product_img1,alt:"",class:"w-24 h-24 object-cover"},null,8,Ct),t("div",kt,[t("h3",qt,p(e.product.name),1),e.product.quantityType=="type-1"?(n(),l("div",St,[jt,v(t("select",{"onUpdate:modelValue":d=>e.quantity=d,onChange:d=>r.updateQuantity(e.cartItemId,e.quantity),class:"bg-gray-100 border-0"},Dt,40,It),[[w,e.quantity]])])):u("",!0),e.product.quantityType=="type-2"?(n(),l("div",Vt,[Mt,v(t("select",{"onUpdate:modelValue":d=>e.quantity=d,onChange:d=>r.updateQuantity(e.cartItemId,e.quantity),class:"bg-gray-100 border-0"},Lt,40,Pt),[[w,e.quantity]])])):u("",!0),e.product.quantityType=="type-3"?(n(),l("div",Bt,[Tt,v(t("select",{"onUpdate:modelValue":d=>e.quantity=d,onChange:d=>r.updateQuantity(e.cartItemId,e.quantity),class:"bg-gray-100 border-0"},At,40,Et),[[w,e.quantity]])])):u("",!0),e.product.quantityType=="type-4"?(n(),l("div",Nt,[Ht,v(t("select",{"onUpdate:modelValue":d=>e.quantity=d,onChange:d=>r.updateQuantity(e.cartItemId,e.quantity),class:"bg-gray-100 border-0"},zt,40,Ot),[[w,e.quantity]])])):u("",!0),e.product.quantityType=="type-5"?(n(),l("div",Rt,[Gt,v(t("select",{"onUpdate:modelValue":d=>e.quantity=d,onChange:d=>r.updateQuantity(e.cartItemId,e.quantity),class:"bg-gray-100 border-0"},Jt,40,Wt),[[w,e.quantity]])])):u("",!0)]),t("div",Kt,[t("p",Xt," ₦"+p(r.perProductSubCost(e.product.price,e.quantity,e.attributeDetails,e.delivery,e.hireDesigner)),1),t("button",{class:"text-red-500 hover:underline mt-2",onClick:d=>r.removeItem(e.cartItemId,q)},"Remove",8,$t)])]),t("div",te,[ee,t("ul",se,[(n(!0),l(S,null,I(e.attributeDetails,d=>(n(),l("li",{class:"flex",key:d},[t("strong",null,p(d.attribute),1),m(": "),t("span",null,p(d.value),1)]))),128))])])]))),128))]),c.cart.length>0?(n(),l("div",oe,[t("button",{onClick:a[0]||(a[0]=e=>r.clearCart()),class:"text-green-600 font-bold"},"Clear Cart")])):u("",!0)],2),c.cart.length>0?(n(),l("div",ae,[ie,t("div",ne,[t("div",le,[re,t("p",de," ₦"+p(r.calculateSubCost),1)]),t("div",ce,[ue,t("p",pe," ₦"+p(r.calTax),1)])]),t("div",fe,[he,t("p",me," ₦"+p(s.total),1)]),t("div",ge,[o.$page.props.auth.user?(n(),l("button",{key:0,onClick:a[1]||(a[1]=(...e)=>r.loginUserSubmit&&r.loginUserSubmit(...e)),type:"button",class:"group inline-flex w-full items-center justify-center rounded-md bg-green-700 px-6 py-4 text-lg font-semibold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-green-800"},[m(" Checkout "),_e])):(n(),l("button",{key:1,onClick:a[2]||(a[2]=e=>s.showModal=!0),type:"button",class:"group inline-flex w-full items-center justify-center rounded-md bg-green-700 px-6 py-4 text-lg font-semibold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-green-800"},[m(" Checkout "),ve]))])])):u("",!0)])])])]),f(H,{name:"modal"},{default:b(()=>[s.showModal?(n(),l("div",ye,[t("div",xe,[t("div",be,[t("span",{onClick:a[3]||(a[3]=e=>s.showModal=!1),class:"cursor-pointer"},Ce)]),t("form",{onSubmit:a[8]||(a[8]=O((...e)=>r.submit&&r.submit(...e),["prevent"])),class:"w-full px-6 py-8 md:px-8"},[t("div",ke,[f(_,{href:o.route("home")},{default:b(()=>[qe]),_:1},8,["href"])]),Se,je,o.$page.props.flash.error?(n(),l("div",Ie,[t("p",Fe,[De,m(" "+p(o.$page.props.flash.error),1)])])):u("",!0),t("div",Ve,[Me,v(t("input",{"onUpdate:modelValue":a[4]||(a[4]=e=>s.form.email=e),id:"LoggingEmailAddress",class:"block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:ring-opacity-4 focus:outline-none focus:ring focus:ring-blue-300",type:"email"},null,512),[[V,s.form.email]]),f(k,{class:"mt-2",message:s.form.errors.email},null,8,["message"])]),s.canResetPassword?(n(),l("div",Pe,[t("div",Ue,[Le,t("a",{href:o.route("password.request"),class:"text-xs text-gray-500 hover:underline"},"Forget Password?",8,Be)]),v(t("input",{"onUpdate:modelValue":a[5]||(a[5]=e=>s.form.password=e),id:"loggingPassword",class:"block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300",type:"password"},null,512),[[V,s.form.password]]),f(k,{class:"mt-2",message:s.form.errors.password},null,8,["message"])])):u("",!0),t("div",Te,[t("label",Ee,[f(M,{name:"remember",checked:s.form.remember,"onUpdate:checked":a[6]||(a[6]=e=>s.form.remember=e)},null,8,["checked"]),Qe])]),t("div",Ae,[t("button",{class:F([{"opacity-25":s.form.processing},"w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"]),disabled:s.form.processing}," Sign In ",10,Ne)]),t("div",He,[Oe,f(_,{href:o.route("register"),class:"text-xs text-gray-500 uppercase hover:underline"},{default:b(()=>[m("or sign up")]),_:1},8,["href"]),Ze]),t("div",ze,[t("button",{class:F([{"opacity-25":s.form.processing},"px-6 py-3 text-gray-800 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-4 focus:ring-gray-300"]),disabled:s.form.processing,onClick:a[7]||(a[7]=e=>r.guest()),type:"button"}," Continue as Guest ",10,Re)])],32)])])):u("",!0)]),_:1}),f(P)],64)}const ts=G(W,[["render",Ge],["__scopeId","data-v-1508fcd8"]]);export{ts as default};
