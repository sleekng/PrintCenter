import{i as c,r as g,o as i,c as h,b as e,a,g as o,h as d,t as _,f as b,F as v,e as y,s as w,p as $,m as k}from"./app-CpTHh7CJ.js";import{_ as f}from"./_plugin-vue_export-helper-DlAUqK2U.js";const L={components:{Link:c},methods:{toggleAside(){this.$emit("toggle-aside")}}},M={class:"bg-white border-b border-gray-200 fixed z-30 w-full"},z={class:"px-3 py-3 lg:px-5 lg:pl-3"},S={class:"flex items-center justify-between"},C={class:"flex items-center justify-start"},B=e("svg",{id:"toggleSidebarMobileHamburger",class:"w-6 h-6",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"fill-rule":"evenodd",d:"M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z","clip-rule":"evenodd"})],-1),A=e("svg",{id:"toggleSidebarMobileClose",class:"w-6 h-6 hidden",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1),H=[B,A],N=e("img",{src:"storage/img/logo-main.png",class:"h-10 mr-2",alt:"Windster Logo"},null,-1),T=e("form",{action:"#",method:"GET",class:"hidden lg:block lg:pl-32"},[e("label",{for:"topbar-search",class:"sr-only"},"Search"),e("div",{class:"mt-1 relative lg:w-64"},[e("div",{class:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"},[e("svg",{class:"w-5 h-5 text-gray-500",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"fill-rule":"evenodd",d:"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z","clip-rule":"evenodd"})])]),e("input",{type:"text",name:"email",id:"topbar-search",class:"bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full pl-10 p-2.5",placeholder:"Search"})])],-1),q={class:"flex items-center"},I=e("button",{id:"toggleSidebarMobileSearch",type:"button",class:"lg:hidden text-gray-500 hover:text-gray-900 hover:bg-gray-100 p-2 rounded-lg"},[e("span",{class:"sr-only"},"Search"),e("svg",{class:"w-6 h-6",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"fill-rule":"evenodd",d:"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z","clip-rule":"evenodd"})])],-1),V={class:"hidden lg:flex items-center"},j=e("div",{class:"-mb-1"},[e("span")],-1),D={href:"https://demo.themesberg.com/windster/pricing/",class:"hidden sm:inline-flex ml-5 text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center items-center mr-3"},E=e("svg",{class:"svg-inline--fa fa-gem -ml-1 mr-2 h-4 w-4","aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"gem",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("path",{fill:"currentColor",d:"M378.7 32H133.3L256 182.7L378.7 32zM512 192l-107.4-141.3L289.6 192H512zM107.4 50.67L0 192h222.4L107.4 50.67zM244.3 474.9C247.3 478.2 251.6 480 256 480s8.653-1.828 11.67-5.062L510.6 224H1.365L244.3 474.9z"})],-1);function F(t,l,p,u,x,n){const r=g("Link");return i(),h("nav",M,[e("div",z,[e("div",S,[e("div",C,[e("button",{onClick:l[0]||(l[0]=(...m)=>n.toggleAside&&n.toggleAside(...m)),id:"toggleSidebarMobile","aria-expanded":"true","aria-controls":"sidebar",class:"lg:hidden mr-2 text-gray-600 hover:text-gray-900 cursor-pointer p-2 hover:bg-gray-100 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100 rounded"},H),a(r,{href:t.route("home"),class:"text-xl font-bold flex items-center lg:ml-2.5"},{default:o(()=>[N]),_:1},8,["href"]),T]),e("div",q,[I,e("div",V,[a(r,{href:t.route("profile.edit"),class:"text-base font-normal text-gray-500 mr-5"},{default:o(()=>[d("Profile")]),_:1},8,["href"]),j]),e("a",D,[E,d(" "+_(t.$page.props.auth.user.first_name),1)])])])])])}const ge=f(L,[["render",F]]),O={components:{Link:c}},s=t=>($("data-v-d7378cc2"),t=t(),k(),t),P={id:"sidebar",class:"fixed transition-all ease-in z-20 h-full top-0 left-0 pt-16 flex lg:flex flex-shrink-0 flex-col w-64 transition-width duration-75","aria-label":"Sidebar"},G={class:"relative flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white pt-0"},R={class:"flex-1 flex flex-col pt-5 pb-4 overflow-y-auto"},U={class:"flex-1 px-3 bg-white divide-y space-y-1"},W={class:"space-y-2 pb-2"},J=s(()=>e("i",{class:"fa-solid fa-grid-horizontal text-gray-500 group-hover:text-gray-900 transition duration-75"},null,-1)),K=s(()=>e("span",{class:"ml-3"},"Dashboard",-1)),Q=s(()=>e("i",{class:"fa-sharp fa-regular fa-cart-shopping text-gray-500 group-hover:text-gray-900 transition duration-75"},null,-1)),X=s(()=>e("span",{class:"ml-3"},"Orders",-1)),Y=s(()=>e("i",{class:"fa-sharp fa-solid fa-arrow-up-right-from-square text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75"},null,-1)),Z=s(()=>e("span",{class:"ml-3 flex-1 whitespace-nowrap"},"Order Request",-1)),ee=s(()=>e("i",{class:"fa-sharp fa-regular fa-bag-shopping text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75"},null,-1)),te=s(()=>e("span",{class:"ml-3 flex-1 whitespace-nowrap"},"Users",-1)),se=s(()=>e("i",{class:"fa-sharp fa-regular fa-bag-shopping text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75"},null,-1)),re=s(()=>e("span",{class:"ml-3 flex-1 whitespace-nowrap"},"Products",-1)),oe=s(()=>e("i",{class:"fa-sharp fa-solid fa-arrow-up-right-from-square text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75"},null,-1)),ae=s(()=>e("span",{class:"ml-3 flex-1 whitespace-nowrap"},"Categories",-1)),le=s(()=>e("i",{class:"fa-light fa-arrow-right-from-bracket text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75"},null,-1)),ne=s(()=>e("span",{class:"ml-3 flex-1 whitespace-nowrap"},"Logout",-1));function ie(t,l,p,u,x,n){const r=g("Link");return i(),b(w,{name:"slide"},{default:o(()=>[e("aside",P,[e("div",G,[e("div",R,[e("div",U,[e("ul",W,[e("li",null,[a(r,{href:t.route("dashboard"),class:"text-base text-gray-900 font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 group"},{default:o(()=>[J,K]),_:1},8,["href"])]),e("li",null,[a(r,{href:t.route("order.index"),class:"text-base text-gray-900 font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 group"},{default:o(()=>[Q,X]),_:1},8,["href"])]),e("li",null,[a(r,{href:t.route("quotes.index"),class:"text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group"},{default:o(()=>[Y,Z]),_:1},8,["href"])]),t.$page.props.auth.user.role==="admin"?(i(),h(v,{key:0},[e("li",null,[a(r,{href:t.route("user.index"),class:"text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group"},{default:o(()=>[ee,te]),_:1},8,["href"])]),e("li",null,[a(r,{href:t.route("product.index"),class:"text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group"},{default:o(()=>[se,re]),_:1},8,["href"])]),e("li",null,[a(r,{href:t.route("category.index"),class:"text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group"},{default:o(()=>[oe,ae]),_:1},8,["href"])])],64)):y("",!0),e("li",null,[a(r,{href:t.route("logout"),method:"post",as:"button",class:"text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group"},{default:o(()=>[le,ne]),_:1},8,["href"])])])])])])])]),_:1})}const he=f(O,[["render",ie],["__scopeId","data-v-d7378cc2"]]);export{he as A,ge as T};