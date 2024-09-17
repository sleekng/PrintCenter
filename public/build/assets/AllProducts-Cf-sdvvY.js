import{i as k,r as f,o as r,c as d,a as g,b as t,n as p,F as u,d as h,w as b,v as P,e as y,f as D,t as c,g as w,h as m,j as B}from"./app-DaVOuH0r.js";import{H as V,F as T}from"./Footer-BA_lNTDk.js";import{P as F}from"./PrimaryButton-CjTDbRCc.js";import{_ as L}from"./_plugin-vue_export-helper-DlAUqK2U.js";const j={data(){return{searchTerm:"",isDropdownVisible:!1,selectedCategory:""}},props:{categories:Array,CartCount:Object},components:{Header:V,Footer:T,PrimaryButton:F,Link:k},computed:{allProducts(){return this.categories.flatMap(s=>s.products)},filteredProducts(){return this.allProducts.filter(s=>s.name.toLowerCase().includes(this.searchTerm.toLowerCase()))},filteredCategoryProducts(){if(!this.selectedCategory)return this.allProducts;const s=this.categories.find(o=>o.id===this.selectedCategory);return s?s.products:[]}},methods:{truncateTitle(s,o){const n=s.split(" ");return n.length>o?n.slice(0,o).join(" ")+"...":s},showDropdown(){this.isDropdownVisible=!0},hideDropdown(){setTimeout(()=>{this.isDropdownVisible=!1},200)},filterProducts(){this.isDropdownVisible=!0},filterByCategory(s){this.selectedCategory=s}}},N={class:"container flex w-full mx-auto py-8",id:"app"},A={class:"hidden md:block w-full md:w-1/6 p-4"},H=t("h2",{class:"text-2xl font-bold mb-4"},"Categories",-1),S={class:"category-list space-y-2"},M=["onClick"],I={class:"w-full md:w-3/4 p-4"},O=t("h1",{class:"text-3xl font-bold mb-4"},"Products by Category",-1),U={class:"hero-search relative mb-6"},z=t("button",{class:"search-btn absolute top-0 right-0 h-full px-4 text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:bg-blue-600"},[t("i",{class:"fa fa-search"})],-1),E={key:0,class:"dropdown-bg absolute top-full left-0 w-full bg-white border border-gray-200 rounded-md shadow-md"},K={key:0,class:"dropdown-content p-4"},q=["src"],G={key:1,class:"dropdown-empty p-4 text-gray-500"},J={class:"mb-6 sm:hidden"},Q=t("option",{value:""},"All Categories",-1),R=["value"],W={key:0},X={class:"text-2xl font-bold my-4 mt-8"},Y={class:"products-grid grid grid-cols-1 sm:grid-cols-4 md:grid-cols-4 gap-6"},Z={class:"product-image h-48 overflow-hidden"},$=["src"],ee={class:"product-details p-4"},te={class:"font-bold text-gray-800"},oe=t("div",{class:"text-gray-400"},"starting at",-1),se={class:"price-details flex justify-between items-center py-4"},re={class:"price text-2xl font-bold text-gray-800"},le={class:"unit text-gray-600"};function de(s,o,n,ie,a,l){const C=f("Header"),_=f("Link"),v=f("PrimaryButton"),x=f("Footer");return r(),d("div",null,[g(C,{navcategories:n.categories,CartCount:n.CartCount},null,8,["navcategories","CartCount"]),t("section",N,[t("div",A,[H,t("ul",S,[t("li",null,[t("button",{onClick:o[0]||(o[0]=e=>l.filterByCategory("")),class:p([{"text-blue-500 font-bold":a.selectedCategory===""},"w-full text-left font-semibold text-gray-800 hover:text-blue-500"])}," All Categories ",2)]),(r(!0),d(u,null,h(n.categories,e=>(r(),d("li",{key:e.id},[t("button",{onClick:i=>l.filterByCategory(e.id),class:p([{"text-blue-500 font-bold":a.selectedCategory===e.id},"w-full text-left font-semibold text-gray-800 hover:text-blue-500"])},c(e.name),11,M)]))),128))])]),t("div",I,[O,t("div",U,[b(t("input",{type:"text","onUpdate:modelValue":o[1]||(o[1]=e=>a.searchTerm=e),onInput:o[2]||(o[2]=(...e)=>l.filterProducts&&l.filterProducts(...e)),onKeydown:o[3]||(o[3]=(...e)=>l.showDropdown&&l.showDropdown(...e)),onBlur:o[4]||(o[4]=(...e)=>l.hideDropdown&&l.hideDropdown(...e)),placeholder:"Search for a product",class:"search-input w-full h-12 border rounded-md bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"},null,544),[[P,a.searchTerm]]),z,a.isDropdownVisible?(r(),d("div",E,[l.filteredProducts.length>0?(r(),d("div",K,[(r(!0),d(u,null,h(l.filteredProducts,(e,i)=>(r(),w(_,{key:i,href:s.route("product.show",e.id),class:"dropdown-item py-2 flex hover:bg-gray-100"},{default:m(()=>[t("img",{src:"storage/"+e.product_img1,alt:"Product Image",class:"w-10 h-10 mr-2"},null,8,q),t("span",null,c(e.name),1)]),_:2},1032,["href"]))),128))])):(r(),d("div",G,"No matching products found"))])):y("",!0)]),t("div",J,[b(t("select",{"onUpdate:modelValue":o[5]||(o[5]=e=>a.selectedCategory=e),onChange:o[6]||(o[6]=e=>l.filterByCategory(a.selectedCategory)),class:"w-full h-12 border rounded-md bg-white text-gray-800"},[Q,(r(!0),d(u,null,h(n.categories,e=>(r(),d("option",{key:e.id,value:e.id},c(e.name),9,R))),128))],544),[[D,a.selectedCategory]])]),(r(!0),d(u,null,h(n.categories,e=>(r(),d("div",{key:e.id},[l.filteredCategoryProducts.length>0?(r(),d("div",W,[t("h2",X,c(e.name),1),t("div",Y,[(r(!0),d(u,null,h(e.products,i=>(r(),w(_,{key:i.id,href:s.route("product.show",i.id),class:"product-card card border shadow-sm bg-white rounded-lg overflow-hidden"},{default:m(()=>[t("div",Z,[t("img",{src:"storage/"+i.product_img1,class:"w-full h-full object-cover",alt:""},null,8,$)]),t("div",ee,[t("h4",te,c(l.truncateTitle(i.name,7)),1),oe,t("div",se,[t("span",re,"₦"+c(i.price),1),t("span",le,"Per "+c(i.unit)+" unit",1)]),g(v,{href:s.route("product.show",i.id),class:"bg-blue-600 text-white px-6 py-2 rounded-md text-center w-full"},{default:m(()=>[B(" Select Option ")]),_:2},1032,["href"])])]),_:2},1032,["href"]))),128))])])):y("",!0)]))),128))])]),g(x)])}const he=L(j,[["render",de]]);export{he as default};