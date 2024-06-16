import{h as b}from"./moment-Cl4UOzQZ.js";import{A as w}from"./AuthenticatedLayout-DqvAkqZK.js";import{_ as x}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{o as t,c as o,F as m,j as y,b as e,p as k,m as D,i as O,q as S,r as g,d as j,w as C,t as i,e as a,h as n,a as M}from"./app-vkU_msJH.js";import"./ASide-Cf4gYmDn.js";const A={props:{files:Array},methods:{isImage(l){return/\.(jpg|jpeg|png|gif)$/i.test(l)},isPdf(l){return/\.pdf$/i.test(l)},isDoc(l){return/\.(doc|docx)$/i.test(l)}}},N=l=>(k("data-v-dc6d2fa8"),l=l(),D(),l),P=N(()=>e("h1",null,"Order Item Files",-1)),T={class:"file-info flex flex-col flex-start"},V={key:0,class:"file-icon image-icon"},B=["src"],F={key:1,class:"file-icon pdf-icon"},L={key:2,class:"file-icon doc-icon"},$={key:3,class:"file-icon default-icon"},E=["href"];function Y(l,u,p,_,r,c){return t(),o("div",null,[P,(t(!0),o(m,null,y(p.files,d=>(t(),o("div",{key:d.id,class:"file-item"},[e("div",T,[c.isImage(d.file)?(t(),o("span",V,[e("img",{class:"w-20",src:/storage/+d.file,alt:""},null,8,B)])):c.isPdf(d.file)?(t(),o("span",F,"📄")):c.isDoc(d.file)?(t(),o("span",L,"📄")):(t(),o("span",$,"📁"))]),e("a",{href:"/storage/"+d.file,class:"btn btn-primary"},"Download",8,E)]))),128))])}const z=x(A,[["render",Y],["__scopeId","data-v-dc6d2fa8"]]),q={props:["orders"],components:{Link:O,AuthenticatedLayout:w,Files:z},data(){return{isOrderModalVisible:!1,selectedOrder:{}}},methods:{getOptionName(l,u){console.log(l.options.find(_=>_.id===u));const p=l.options.find(_=>_.id===u);return p?p.value:"Unknown"},previeworder(l){S.delete(`http://localhost:8000/api/users/${l}`).then(()=>{this.$emit("reload")})},showOrderModal(l){this.selectedOrder=l,this.isOrderModalVisible=!0},dateTime(l){return b(l).format("MMM Do YYYY")}}},H=e("div",{class:"p-4 bg-white block sm:flex items-center justify-between border-b border-gray-200 lg:mt-1.5"},[e("div",{class:"mb-1 w-full"},[e("div",{class:"mb-4"},[e("nav",{class:"flex mb-5","aria-label":"Breadcrumb"},[e("ol",{class:"inline-flex items-center space-x-1 md:space-x-2"},[e("li",{class:"inline-flex items-center"},[e("a",{href:"#",class:"text-gray-700 hover:text-gray-900 inline-flex items-center"},[e("svg",{class:"w-5 h-5 mr-2.5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"})]),n(" Home ")])]),e("li",null,[e("div",{class:"flex items-center"},[e("svg",{class:"w-6 h-6 text-gray-400",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"fill-rule":"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z","clip-rule":"evenodd"})]),e("span",{class:"text-gray-400 ml-1 md:ml-2 text-sm font-medium","aria-current":"page"},"orders")])])])]),e("h1",{class:"text-xl sm:text-2xl font-semibold text-gray-900"},"All orders")]),e("div",{class:"block sm:flex items-center md:divide-x md:divide-gray-100"},[e("form",{class:"sm:pr-3 mb-4 sm:mb-0",action:"#",method:"GET"},[e("label",{for:"orders-search",class:"sr-only"},"Search"),e("div",{class:"mt-1 relative sm:w-64 xl:w-96"},[e("input",{type:"text",name:"email",id:"orders-search",class:"bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5",placeholder:"Search for orders"})])])])])],-1),U={key:0},G={key:1,class:"text-green-500"},Q={class:"flex flex-col"},J={class:"overflow-x-auto"},K={class:"align-middle inline-block min-w-full"},R={class:"shadow overflow-hidden"},W={class:"table-fixed min-w-full divide-y divide-gray-200"},X=e("thead",{class:"bg-gray-100"},[e("tr",null,[e("th",{scope:"col",class:"p-4 text-left text-xs font-medium text-gray-500 uppercase"},"S/N"),e("th",{scope:"col",class:"p-4 text-left text-xs font-medium text-gray-500 uppercase"},"Order Number"),e("th",{scope:"col",class:"p-4 text-left text-xs font-medium text-gray-500 uppercase"},"Status"),e("th",{scope:"col",class:"p-4 text-left text-xs font-medium text-gray-500 uppercase"},"Number of items"),e("th",{scope:"col",class:"p-4 text-left text-xs font-medium text-gray-500 uppercase"},"Amount"),e("th",{scope:"col",class:"p-4 text-left text-xs font-medium text-gray-500 uppercase"},"Date"),e("th",{scope:"col",class:"p-4 text-left text-xs font-medium text-gray-500 uppercase"},"Action")])],-1),Z={class:"bg-white divide-y divide-gray-200"},I=["onClick"],ee={class:"p-4 whitespace-nowrap text-base font-medium text-gray-900"},se={class:"p-4 whitespace-nowrap text-base font-medium text-gray-900"},te={class:"p-4 whitespace-nowrap text-base font-medium text-gray-900"},oe={class:"p-4 whitespace-nowrap text-base font-medium text-gray-900"},le={class:"p-4 whitespace-nowrap text-base font-medium text-gray-900"},ie={class:"p-4 whitespace-nowrap text-base font-medium text-gray-900"},ne={class:"p-4 whitespace-nowrap space-x-2"},re=["onClick"],ae={key:0,class:"flex justify-center mt-10"},ce=e("span",null,"No order Found",-1),de=[ce],pe={key:2,class:"fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50"},ue={class:"relative md:w-[600px] h-[90vh] bg-white overflow-hidden p-6 rounded-lg"},_e={class:"max-h-[80vh] overflow-y-auto"},he={class:"bg-gray-100 p-4"},fe=e("h2",{class:"text-xl font-bold mb-2"},"Order Details",-1),me={class:"pb-2 flex justify-between"},ye=e("strong",null,"Order ID:",-1),ge={key:0,class:"pb-2 flex justify-between"},xe=e("strong",null,"Shipping Type:",-1),ve=e("span",null,"Send to my location",-1),be={key:1,class:"pb-2 flex justify-between"},we=e("strong",null,"Shipping Type:",-1),ke=e("span",null,"Pick Up",-1),De={class:"pb-2 flex justify-between"},Oe=e("strong",null,"Delivery Location:",-1),Se={class:"pb-2 flex justify-between"},je=e("strong",null,"Delivery State:",-1),Ce={class:"pb-2 flex justify-between"},Me=e("strong",null,"Delivery Address:",-1),Ae={class:"pb-2 flex justify-between"},Ne=e("strong",null,"Contact Email:",-1),Pe={class:"py-2 border-t flex justify-between"},Te=e("strong",null,"Order Amount:",-1),Ve={class:"font-bold"},Be={class:"pb-4 flex justify-end"},Fe=e("strong",null,"Delivery Type:",-1),Le={key:0},$e=e("span",null," ( 14 working Days Delivery ) ",-1),Ee={key:1},Ye=e("span",null," ( 6-7 working Days Delivery ) ",-1),ze={key:2},qe=e("span",null," ( 1 - 2 working Day(s)Delivery ) ",-1),He=e("strong",null,"Product Name:",-1),Ue=e("strong",null,"Expected Delivery Date:",-1),Ge=e("strong",null,"Quantity:",-1),Qe={key:0},Je=e("strong",null,"Hire Designer:",-1),Ke=e("span",null,"Yes",-1),Re={key:1},We=e("strong",null,"Design Description:",-1),Xe={class:"py-4"},Ze=e("strong",null,"Product Attribute",-1),Ie={class:"flex space-x-4"},es={class:"mt-6 text-right absolute w-full bottom-0 left-0 bg-white p-4"};function ss(l,u,p,_,r,c){const d=g("Files"),v=g("AuthenticatedLayout");return t(),j(v,null,{default:C(()=>[e("div",null,[H,l.$page.props.errors?(t(),o("div",U,[(t(!0),o(m,null,y(l.$page.props.errors,s=>(t(),o("div",{key:s,class:"text-red-600"},i(s),1))),128))])):a("",!0),l.$page.props.flash.success?(t(),o("div",G,i(l.$page.props.flash.success),1)):a("",!0),e("div",Q,[e("div",J,[e("div",K,[e("div",R,[e("table",W,[X,e("tbody",Z,[(t(!0),o(m,null,y(p.orders,(s,h)=>(t(),o("tr",{onClick:f=>c.showOrderModal(s),key:h,class:"hover:bg-gray-100 cursor-pointer"},[e("td",ee,i(h+1),1),e("td",se,i(s.reference_number),1),e("td",te,i(s.status),1),e("td",oe,i(s.order_items.length),1),e("td",le,"₦"+i(s.total_amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")),1),e("td",ie,i(c.dateTime(s.created_at)),1),e("td",ne,[e("button",{onClick:f=>c.showOrderModal(s),type:"button",class:"text-white bg-blue-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm inline-flex items-center px-3 py-2 text-center"},"View",8,re)])],8,I))),128))])])]),p.orders.length==0?(t(),o("div",ae,de)):a("",!0)])])]),r.isOrderModalVisible?(t(),o("div",pe,[e("div",ue,[e("div",_e,[e("div",he,[fe,e("div",me,[ye,n(),e("span",null,i(r.selectedOrder.reference_number),1)]),r.selectedOrder.shippingType=="ME"?(t(),o("div",ge,[xe,n(),ve])):a("",!0),r.selectedOrder.shippingType=="OFFICE"?(t(),o("div",be,[we,n(),ke])):a("",!0),e("div",De,[Oe,n(),e("span",null,i(r.selectedOrder.DeliveryLocation),1)]),e("div",Se,[je,n(),e("span",null,i(r.selectedOrder.DeliveryState),1)]),e("div",Ce,[Me,n(),e("span",null,i(r.selectedOrder.DeliveryAddress),1)]),e("div",Ae,[Ne,n(),e("span",null,i(r.selectedOrder.email),1)]),e("div",Pe,[Te,n(),e("span",Ve,"₦"+i(r.selectedOrder.total_amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")),1)])]),(t(!0),o(m,null,y(r.selectedOrder.order_items,(s,h)=>(t(),o("ul",{key:h,class:"space-y-2 border-t-4 border-primary py-4"},[e("li",Be,[e("strong",null,"item("+i(h+1)+")",1)]),e("li",null,[Fe,s.deliveryPeriod=="Standard"?(t(),o("span",Le,[n(i(s.deliveryPeriod)+" ",1),$e])):a("",!0),s.deliveryPeriod=="Express"?(t(),o("span",Ee,[n(i(s.deliveryPeriod)+" ",1),Ye])):a("",!0),s.deliveryPeriod=="Next Day"?(t(),o("span",ze,[n(i(s.deliveryPeriod)+" ",1),qe])):a("",!0)]),e("li",null,[He,n(),e("span",null,i(s.product.name),1)]),e("li",null,[Ue,n(),e("span",null,i(c.dateTime(s.expectedDeliveryDate)),1)]),e("li",null,[Ge,n(),e("span",null,i(s.quantity),1)]),s.hireDesigner==1?(t(),o("li",Qe,[Je,n(),Ke])):a("",!0),s.hireDesigner==1?(t(),o("li",Re,[We,n(),e("span",null,i(s.designDescription),1)])):a("",!0),e("li",Xe,[Ze,(t(!0),o(m,null,y(s.attributes,f=>(t(),o("span",{key:f,class:"block"},[e("span",Ie,[e("strong",null,i(f.name),1),n(" : "),e("span",null,i(c.getOptionName(s,f.pivot.option_id)),1)])]))),128))]),M(d,{files:s.orderimages},null,8,["files"])]))),128))]),e("div",es,[e("button",{onClick:u[0]||(u[0]=s=>r.isOrderModalVisible=!1),class:"px-4 py-2 bg-red-600 text-white rounded"},"Close")])])])):a("",!0)])]),_:1})}const rs=x(q,[["render",ss]]);export{rs as default};