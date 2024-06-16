import{i as k,r as h,o,c as a,a as u,b as e,g as x,v as C,F as p,j as m,e as j,B as b,d as v,w as g,t as c,x as T,H as D,n as P,h as I}from"./app-vkU_msJH.js";import{H as F,F as S}from"./Footer-OiN3A1Aj.js";import{P as V}from"./PrimaryButton-CiQL9HOQ.js";import{_ as B}from"./_plugin-vue_export-helper-DlAUqK2U.js";const L={watch:{activeIndex(){this.toggleColor()}},data(){return{activeColor:"#c5c8cf",activeIndex:0,cards:[{icon:"shipping",alt:"Fast Turnaround",title:"Fast Turnaround Within Days",titleColor:"text-primary",description:"Your order gets to you within 3-7 working days via DHL."},{icon:"guarantee",alt:"Top Quality",title:"100% Top Quality",titleColor:"text-secondary2",description:"Only the finest materials, machines and people will be involved in fulfilling your order."},{icon:"wallet",alt:"Affordable Services",title:"Affordable Services",titleColor:"text-secondary",description:"All products are adequately priced to ensure you get value for your money at all times."}],autoTimer:null,searchTerm:"",isDropdownVisible:!1}},props:{products:Object,categories:Object,navcategories:Object,CartCount:Object},components:{Header:F,Footer:S,PrimaryButton:V,Link:k},created(){this.autoTimer=setInterval(()=>{this.nextCard()},3e3)},beforeDestroy(){clearInterval(this.autoTimer)},methods:{toggleColor(){this.activeColor=this.activeColor==="red"?"#c5c8cf":"white"},truncateTitle(i,s){const l=i.split(" ");return l.length>s?l.slice(0,s).join(" ")+"...":i},nextCard(){this.activeIndex<this.cards.length-1?this.activeIndex++:this.activeIndex=0},prevCard(){this.activeIndex>0?this.activeIndex--:this.activeIndex=this.cards.length-1},showDropdown(){this.isDropdownVisible=!0},hideDropdown(){setTimeout(()=>{this.isDropdownVisible=!1},200)},filterProducts(){this.isDropdownVisible=!0}},computed:{filteredProducts(){return this.products.filter(i=>i.name.toLowerCase().includes(this.searchTerm.toLowerCase()))}}},A={class:"hero-section container mx-auto px-4 sm:px-6 lg:px-8",id:"app"},H={class:"hero-slider relative splide splide--loop splide--ltr splide--draggable is-active is-initialized",id:"splide04"},N={class:"hero-slide bg-cover bg-center bg-no-repeat relative",style:{"background-image":"url('/storage/img/home-bg.jpg')"}},O={class:"hero-content py-12 md:py-24 px-4 sm:px-10 md:px-12 lg:px-24 text-center sm:text-left mx-auto"},Q={class:"hero-text-container relative p-4 rounded-md bg-white bg-opacity-75"},q={class:"hero-text max-w-xl mx-auto sm:mx-0 text-gray-800"},z=e("h1",{class:"text-4xl sm:text-6xl font-bold py-4"}," Get Your Printing Jobs Done Now ",-1),W=e("p",{class:"hero-subtitle text-lg sm:text-xl"}," Top-quality printing services at competitive prices ",-1),Y={class:"hero-search mt-6 sm:mt-8 w-full relative"},E=e("button",{class:"search-btn absolute top-0 right-0 h-full px-4 text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:bg-blue-600"},[e("i",{class:"fa fa-search"})],-1),G={key:0,class:"dropdown-bg absolute top-full left-0 w-full bg-white border border-gray-200 rounded-md shadow-md"},J={key:0,class:"dropdown-content p-4"},K=["src"],M={key:1,class:"dropdown-empty p-4 text-gray-500"},U={class:"container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:hidden block"},R={class:"grid grid-cols-1 md:grid-cols-3 gap-8 justify-center md:flex-wrap"},X=["src","alt"],Z={class:"font-hk text-base tracking-wide text-secondary-lighter"},$=b('<section class="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:block hidden"><div class="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center md:flex-wrap"><div class="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center"><img src="storage/img/icons8-shipping-64.png" class="h-16 w-16 mb-4 object-contain object-center transition-transform transform hover:scale-105" alt="Fast Turnaround"><h3 class="font-hk text-xl font-semibold tracking-wide text-primary mb-2"> Fast Turnaround Within Days </h3><p class="font-hk text-base tracking-wide text-secondary-lighter"> Your order gets to you within 3-7 working days via DHL. </p></div><div class="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center"><img src="storage/img/icons8-guarantee-64.png" class="h-16 w-16 mb-4 object-contain object-center transition-transform transform hover:scale-105" alt="Top Quality"><h3 class="font-hk text-xl font-semibold tracking-wide text-secondary2 mb-2"> 100% Top Quality </h3><p class="font-hk text-base tracking-wide text-secondary-lighter"> Only the finest materials, machines and people will be involved in fulfilling your order. </p></div><div class="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center"><img src="storage/img/icons8-wallet-64.png" class="h-16 w-16 mb-4 object-contain object-center transition-transform transform hover:scale-105" alt="Affordable Services"><h3 class="font-hk text-xl font-semibold tracking-wide text-secondary mb-2"> Affordable Services </h3><p class="font-hk text-base tracking-wide text-secondary-lighter"> All products are adequately priced to ensure you get value for your money at all times. </p></div></div></section>',1),ee={class:"featured-products-section sm:py-8"},te=b('<div class="container mx-auto px-4 sm:px-6 lg:px-8"><div class="section-header flex justify-between font-bold"><h1 class="section-title text-2xl sm:text-4xl text-gray-800"> Featured | Popular Products </h1><a href="{{ route(&#39;home&#39;) }}" class="section-link whitespace-nowrap underline text-gray-600"> See All <i class="fa fa-arrow-right ml-2"></i></a></div></div>',1),se={class:"products-grid container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-20"},oe={class:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10"},re={class:"product-image overflow-hidden h-48 sm:h-60 md:h-72"},ie=["src"],ae={class:"product-details p-4"},ne={class:"product-title"},le={class:"font-bold text-md text-gray-800"},ce={class:"product-price"},de=e("span",{class:"text-gray-400"},"starting at",-1),he={class:"price-details flex justify-between items-center py-4"},ue={class:"price text-2xl font-bold text-gray-800"},pe={class:"unit text-gray-600"},me={class:"product-action"};function ge(i,s,l,fe,n,r){const w=h("Header"),f=h("Link"),y=h("PrimaryButton"),_=h("Footer");return o(),a("div",null,[u(w,{navcategories:l.navcategories,CartCount:l.CartCount},null,8,["navcategories","CartCount"]),e("section",A,[e("div",H,[e("div",null,[e("ul",null,[e("li",null,[e("div",N,[e("div",O,[e("div",Q,[e("div",q,[z,W,e("div",Y,[x(e("input",{type:"text","onUpdate:modelValue":s[0]||(s[0]=t=>n.searchTerm=t),onInput:s[1]||(s[1]=(...t)=>r.filterProducts&&r.filterProducts(...t)),onKeydown:s[2]||(s[2]=(...t)=>r.showDropdown&&r.showDropdown(...t)),onBlur:s[3]||(s[3]=(...t)=>r.hideDropdown&&r.hideDropdown(...t)),placeholder:"Search for a product",class:"search-input w-full pr-12 h-12 sm:h-16 border rounded-md bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"},null,544),[[C,n.searchTerm]]),E,n.isDropdownVisible?(o(),a("div",G,[r.filteredProducts.length>0?(o(),a("div",J,[(o(!0),a(p,null,m(r.filteredProducts,(t,d)=>(o(),v(f,{key:d,href:i.route("product.show",t.id),class:"dropdown-item py-2 flex hover:bg-gray-100"},{default:g(()=>[e("img",{src:"storage/"+t.product_img1,alt:"Product Image",class:"w-10 h-10 mr-2"},null,8,K),e("span",null,c(t.name),1)]),_:2},1032,["href"]))),128))])):(o(),a("div",M,"No matching products found"))])):j("",!0)])])])])])])])])])]),e("section",U,[e("div",R,[(o(!0),a(p,null,m(n.cards,(t,d)=>x((o(),a("div",{key:d,style:D({backgroundColor:d===n.activeIndex?n.activeColor:""}),class:"rounded-lg shadow-md p-6 flex flex-col items-center text-center"},[e("img",{src:"storage/img/icons8-"+t.icon+"-64.png",class:"h-16 w-16 mb-4 object-contain object-center transition-transform transform hover:scale-105",alt:t.alt},null,8,X),e("h3",{class:P(["font-hk text-xl font-semibold tracking-wide",t.titleColor])},c(t.title),3),e("p",Z,c(t.description),1)],4)),[[T,d===n.activeIndex]])),128))])]),$,e("section",ee,[te,e("div",se,[e("div",oe,[(o(!0),a(p,null,m(l.products,t=>(o(),v(f,{href:i.route("product.show",t.id),class:"product-card card border shadow-sm bg-white",key:t.id},{default:g(()=>[e("div",re,[e("img",{src:"storage/"+t.product_img1,class:"w-full h-full object-cover",alt:""},null,8,ie)]),e("div",ae,[e("div",ne,[e("h4",le,c(r.truncateTitle(t.name,7)),1)]),e("div",ce,[de,e("div",he,[e("span",ue,"₦"+c(t.price),1),e("span",pe,"Per "+c(t.unit)+" unit",1)])]),e("div",me,[u(y,{href:i.route("product.show",t.id),class:"select-option-button bg-gray-800 text-white px-8 py-2 font-bold rounded-sm flex w-full justify-center"},{default:g(()=>[I(" Select Option ")]),_:2},1032,["href"])])])]),_:2},1032,["href"]))),128))])])]),u(_)])}const ye=B(L,[["render",ge]]);export{ye as default};
