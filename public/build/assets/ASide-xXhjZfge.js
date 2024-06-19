import{i as h,r as f,o as l,c as n,b as e,a,g as o,h as g,t as m,f as b,F as y,e as v,s as w,p as $,m as k}from"./app-K9V-QYzT.js";import{_ as p}from"./_plugin-vue_export-helper-DlAUqK2U.js";const L={components:{Link:h},data(){return{sidebarOpen:!1}},methods:{toggleAside(){this.sidebarOpen=!this.sidebarOpen,this.$emit("toggle-aside")}}},z={class:"bg-white border-b border-gray-200 fixed z-30 w-full"},C={class:"px-3 py-3 lg:px-5 lg:pl-3"},M={class:"flex items-center justify-between"},S={class:"flex items-center justify-start"},B={key:0,id:"toggleSidebarMobileClose",class:"w-6 h-6",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},H=e("path",{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"},null,-1),O=[H],A={key:1,id:"toggleSidebarMobileHamburger",class:"w-6 h-6",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},N=e("path",{"fill-rule":"evenodd",d:"M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z","clip-rule":"evenodd"},null,-1),q=[N],I=e("img",{src:"/storage/img/logo-main.png",class:"h-10 mr-2",alt:"Print Center Logo"},null,-1),T={class:"flex items-center"},V={class:"flex items-center"},P=e("div",{class:"-mb-1"},[e("span")],-1),j={href:"https://demo.themesberg.com/windster/pricing/",class:"hidden sm:inline-flex ml-5 text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center items-center mr-3"},D=e("svg",{class:"svg-inline--fa fa-gem -ml-1 mr-2 h-4 w-4","aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"gem",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("path",{fill:"currentColor",d:"M378.7 32H133.3L256 182.7L378.7 32zM512 192l-107.4-141.3L289.6 192H512zM107.4 50.67L0 192h222.4L107.4 50.67zM244.3 474.9C247.3 478.2 251.6 480 256 480s8.653-1.828 11.67-5.062L510.6 224H1.365L244.3 474.9z"})],-1);function F(t,i,u,_,c,d){const r=f("Link");return l(),n("nav",z,[e("div",C,[e("div",M,[e("div",S,[e("button",{onClick:i[0]||(i[0]=(...x)=>d.toggleAside&&d.toggleAside(...x)),id:"toggleSidebarMobile","aria-expanded":"true","aria-controls":"sidebar",class:"lg:hidden mr-2 text-gray-600 hover:text-gray-900 cursor-pointer p-2 hover:bg-gray-100 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100 rounded"},[c.sidebarOpen?(l(),n("svg",B,O)):(l(),n("svg",A,q))]),a(r,{href:t.route("home"),class:"text-xl font-bold flex items-center lg:ml-2.5"},{default:o(()=>[I]),_:1},8,["href"])]),e("div",T,[e("div",V,[a(r,{href:t.route("profile.edit"),class:"text-base font-normal text-gray-500 mr-5"},{default:o(()=>[g("Profile")]),_:1},8,["href"]),P]),e("a",j,[D,g(" "+m(t.$page.props.auth.user.first_name),1)])])])])])}const he=p(L,[["render",F]]),E={components:{Link:h}},s=t=>($("data-v-d7378cc2"),t=t(),k(),t),R={id:"sidebar",class:"fixed transition-all ease-in z-20 h-full top-0 left-0 pt-16 flex lg:flex flex-shrink-0 flex-col w-64 transition-width duration-75","aria-label":"Sidebar"},U={class:"relative flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white pt-0"},G={class:"flex-1 flex flex-col pt-5 pb-4 overflow-y-auto"},J={class:"flex-1 px-3 bg-white divide-y space-y-1"},K={class:"space-y-2 pb-2"},Q=s(()=>e("i",{class:"fa-solid fa-grid-horizontal text-gray-500 group-hover:text-gray-900 transition duration-75"},null,-1)),W=s(()=>e("span",{class:"ml-3"},"Dashboard",-1)),X=s(()=>e("i",{class:"fa-sharp fa-regular fa-cart-shopping text-gray-500 group-hover:text-gray-900 transition duration-75"},null,-1)),Y=s(()=>e("span",{class:"ml-3"},"Orders",-1)),Z=s(()=>e("i",{class:"fa-sharp fa-solid fa-arrow-up-right-from-square text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75"},null,-1)),ee=s(()=>e("span",{class:"ml-3 flex-1 whitespace-nowrap"},"Order Request",-1)),te=s(()=>e("i",{class:"fa-sharp fa-regular fa-bag-shopping text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75"},null,-1)),se=s(()=>e("span",{class:"ml-3 flex-1 whitespace-nowrap"},"Users",-1)),re=s(()=>e("i",{class:"fa-sharp fa-regular fa-bag-shopping text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75"},null,-1)),oe=s(()=>e("span",{class:"ml-3 flex-1 whitespace-nowrap"},"Products",-1)),ae=s(()=>e("i",{class:"fa-sharp fa-solid fa-arrow-up-right-from-square text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75"},null,-1)),le=s(()=>e("span",{class:"ml-3 flex-1 whitespace-nowrap"},"Categories",-1)),ne=s(()=>e("i",{class:"fa-light fa-arrow-right-from-bracket text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75"},null,-1)),ie=s(()=>e("span",{class:"ml-3 flex-1 whitespace-nowrap"},"Logout",-1));function de(t,i,u,_,c,d){const r=f("Link");return l(),b(w,{name:"slide"},{default:o(()=>[e("aside",R,[e("div",U,[e("div",G,[e("div",J,[e("ul",K,[e("li",null,[a(r,{href:t.route("dashboard"),class:"text-base text-gray-900 font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 group"},{default:o(()=>[Q,W]),_:1},8,["href"])]),e("li",null,[a(r,{href:t.route("order.index"),class:"text-base text-gray-900 font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 group"},{default:o(()=>[X,Y]),_:1},8,["href"])]),e("li",null,[a(r,{href:t.route("quotes.index"),class:"text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group"},{default:o(()=>[Z,ee]),_:1},8,["href"])]),t.$page.props.auth.user.role==="admin"?(l(),n(y,{key:0},[e("li",null,[a(r,{href:t.route("user.index"),class:"text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group"},{default:o(()=>[te,se]),_:1},8,["href"])]),e("li",null,[a(r,{href:t.route("product.index"),class:"text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group"},{default:o(()=>[re,oe]),_:1},8,["href"])]),e("li",null,[a(r,{href:t.route("category.index"),class:"text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group"},{default:o(()=>[ae,le]),_:1},8,["href"])])],64)):v("",!0),e("li",null,[a(r,{href:t.route("logout"),method:"post",as:"button",class:"text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group"},{default:o(()=>[ne,ie]),_:1},8,["href"])])])])])])])]),_:1})}const fe=p(E,[["render",de],["__scopeId","data-v-d7378cc2"]]);export{fe as A,he as T};
