import{A as C,H as k,F as S}from"./Footer-BxkbWMK3.js";import{P as N}from"./PrimaryButton-DRzD0ASG.js";import{i as O,T as j,s as L,r as i,o as a,c,a as d,e as p,b as e,h as f,j as m,t as n,w as T,v as E,n as P,F as _,d as F,B as g,D as B,p as D,q as H}from"./app-DI_byFkR.js";import{_ as V}from"./InputError-Chetx0b_.js";import{S as A}from"./SiteModal-BdQgk8TQ.js";import{S as M}from"./Search-0OBff8xr.js";import{_ as z}from"./_plugin-vue_export-helper-DlAUqK2U.js";const Z={components:{Search:M,ApplicationLogo:C,PrimaryButton:N,Link:O,Header:k,Footer:S,SiteModal:A,InputError:V},props:["navcategories","CartCount","url","totalAmount"],data(){return{error:null,form:j({orderNumber:null}),order:null,loading:!1,processing:!1}},methods:{selectStyle(t){switch(t){case"Pending":return{color:"red"};case"Order Processed":return{color:"orange"};case"Order Shipped":return{color:"blue"};case"Order En Route":return{color:"purple"};case"Order Arrived":return{color:"green"};default:return{color:"black"}}},trackOrder(){if(this.processing=!0,!this.form.orderNumber){this.error="Kindly Enter Tracking Number",this.processing=!1;return}this.loading=!0,L.get(`/order-tracking/${this.form.orderNumber}`).then(t=>{this.order=t.data.order,this.processing=!1}).catch(t=>{this.error=t.response.data.message,this.processing=!1,console.error("Error fetching order:",t)}).finally(()=>{this.processing=!1,this.loading=!1})},ClearSearch(){this.order=null,this.form.orderNumber=null}}},u=t=>(D("data-v-c7ee701c"),t=t(),H(),t),q={key:0,class:"fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-black bg-opacity-50"},I=u(()=>e("div",{class:"rounded-lg w-1/2 p-8"},[e("div",{class:"flex justify-center"},[e("div",{class:"loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32"})])],-1)),K=[I],R={class:"py-4"},U={class:"container mx-auto px-4 sm:px-6 lg:px-24"},G={class:"flex flex-col lg:flex-row"},J={class:"flex w-full lg:w-9/12 mb-4 lg:mb-0"},Q={role:"list",class:"flex items-center"},W={class:"text-left"},X={class:"-m-1"},Y=g('<li class="text-left" data-v-c7ee701c><div class="flex items-center" data-v-c7ee701c><span class="mx-2 text-gray-400" data-v-c7ee701c>/</span><div class="-m-1" data-v-c7ee701c><a href="#" class="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800" aria-current="page" data-v-c7ee701c> Order Tracking </a></div></div></li>',1),$={class:"flex flex-col items-center justify-center bg-gray-100 py-6 px-4"},ee={key:0,class:"inline-flex rounded-lg bg-green-light-6 px-[18px] py-4 animate-bounce animate-once animate-duration-[3000ms]"},te={class:"flex items-center text-sm font-medium text-[#004434]"},se=g('<span class="mr-3 flex h-5 w-5 items-center justify-center rounded-full bg-green" data-v-c7ee701c><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-c7ee701c><g clip-path="url(#clip0_961_15641)" data-v-c7ee701c><path d="M6.00002 0.337494C2.86877 0.337494 0.337524 2.86874 0.337524 5.99999C0.337524 9.13124 2.86877 11.6812 6.00002 11.6812C9.13128 11.6812 11.6813 9.13124 11.6813 5.99999C11.6813 2.86874 9.13128 0.337494 6.00002 0.337494ZM6.00002 10.8375C3.33752 10.8375 1.18127 8.66249 1.18127 5.99999C1.18127 3.33749 3.33752 1.18124 6.00002 1.18124C8.66252 1.18124 10.8375 3.35624 10.8375 6.01874C10.8375 8.66249 8.66252 10.8375 6.00002 10.8375Z" fill="white" data-v-c7ee701c></path><path d="M7.61255 4.25624L5.3813 6.43124L4.3688 5.43749C4.20005 5.26874 3.93755 5.28749 3.7688 5.43749C3.60005 5.60624 3.6188 5.86874 3.7688 6.03749L4.9688 7.19999C5.0813 7.31249 5.2313 7.36874 5.3813 7.36874C5.5313 7.36874 5.6813 7.31249 5.7938 7.19999L8.21255 4.87499C8.3813 4.70624 8.3813 4.44374 8.21255 4.27499C8.0438 4.10624 7.7813 4.10624 7.61255 4.25624Z" fill="white" data-v-c7ee701c></path></g><defs data-v-c7ee701c><clipPath id="clip0_961_15641" data-v-c7ee701c><rect width="12" height="12" fill="white" data-v-c7ee701c></rect></clipPath></defs></svg></span>',1),re={class:"bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-2xl"},oe=u(()=>e("div",{class:"text-center mb-4"},[e("h2",{class:"text-xl font-bold"},"Track your print order without hassles"),e("p",{class:"text-gray-600"},"Easily track the status of your PrintCenter order using your order number and see step by step progress on your order.")],-1)),ae={key:0,class:"flex items-center justify-center"},ce={class:"bg-white p-8 rounded-lg shadow-md w-full max-w-md"},ne=u(()=>e("h1",{class:"text-2xl font-bold mb-6 text-center"},"Order Tracking",-1)),le={class:"text-red-600"},ie=["disabled"],de={key:1,class:"flex items-center flex-col justify-center mt-8"},ue={class:"text-center mb-8 border-b"},pe={class:"text-2xl font-bold text-green-600"},me={class:"text-sm text-gray-500"},he={class:"text-sm text-gray-500"},fe={class:"mt-2"},_e={class:"text-xl font-semibold"},ge={class:"flex justify-end"},xe={class:"w-full md:w-4/12 p-5 border shadow-lg rounded-md mt-8 md:mt-0"},ve=u(()=>e("h2",{class:"text-center font-bold mb-4"},"Need Help?",-1)),be=u(()=>e("p",{class:"mb-4"},"If you have any questions or need assistance with your design, feel free to contact our support team.",-1)),ye={class:"flex justify-center"};function we(t,o,h,Ce,r,l){const x=i("Header"),v=i("Link"),b=i("search"),y=i("primary-button"),w=i("Footer");return a(),c(_,null,[d(x,{navcategories:h.navcategories,CartCount:h.CartCount},null,8,["navcategories","CartCount"]),r.loading?(a(),c("div",q,K)):p("",!0),e("section",R,[e("div",U,[e("div",G,[e("nav",J,[e("ol",Q,[e("li",W,[e("div",X,[d(v,{href:t.route("home"),class:"rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800"},{default:f(()=>[m(" Home ")]),_:1},8,["href"])])]),Y])]),d(b)])])]),e("div",$,[t.$page.props.flash.message?(a(),c("div",ee,[e("p",te,[se,m(" "+n(t.$page.props.flash.message),1)])])):p("",!0),e("div",re,[oe,r.order?p("",!0):(a(),c("div",ae,[e("div",ce,[ne,e("div",le,n(r.error),1),T(e("input",{"onUpdate:modelValue":o[0]||(o[0]=s=>r.form.orderNumber=s),onFocus:o[1]||(o[1]=s=>r.error=null),class:"w-full px-4 py-2 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-600",placeholder:"Enter your order number"},null,544),[[E,r.form.orderNumber]]),e("button",{onClick:o[2]||(o[2]=(...s)=>l.trackOrder&&l.trackOrder(...s)),class:P([{"opacity-25":r.processing},"w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"]),disabled:r.processing}," Track Order ",10,ie)])])),r.order?(a(),c("div",de,[e("div",ue,[e("h1",pe,"Order: "+n(r.order.reference_number),1),(a(!0),c(_,null,F(r.order.order_items,s=>(a(),c("div",{key:s,class:"border-t py-4"},[e("p",me,"Product Name: "+n(s.product.name),1),e("p",he,"Expected Arrival: "+n(s.expectedDeliveryDate),1),e("div",fe,[e("h2",_e,[m("Status: "),e("span",{style:B(l.selectStyle(s.status.status))},n(s.status.status),5)])])]))),128))]),e("div",ge,[e("button",{onClick:o[3]||(o[3]=(...s)=>l.ClearSearch&&l.ClearSearch(...s)),class:"py-2 rounded-sm self-end px-8 bg-blue-600 text-white"},"Done")])])):p("",!0)]),e("div",xe,[ve,be,e("div",ye,[d(y,{onClick:t.contactSupport,class:"px-8 md:px-16 py-2 md:py-4 font-bold bg-primary text-white rounded-md"},{default:f(()=>[m("Contact Support")]),_:1},8,["onClick"])])])]),d(w)],64)}const Ee=z(Z,[["render",we],["__scopeId","data-v-c7ee701c"]]);export{Ee as default};