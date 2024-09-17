import{A as N,H as F,F as T}from"./Footer-C5E8hYrz.js";import{P as W}from"./PrimaryButton-B6U9pLgT.js";import{i as B,O as L,r as w,o as l,c as i,g as U,h,e as p,b as e,t as d,F as m,d as f,a as _,n as D,w as u,f as x,j as v,B as k,C as O,v as M,m as Q}from"./app-BzjQ0yEl.js";import{S as H}from"./Search-DsUQwnTf.js";import{S as A}from"./SiteModal-DZ2qvOWl.js";import{_ as E}from"./_plugin-vue_export-helper-DlAUqK2U.js";const P={props:{breadcrumbs:{type:Array,required:!0},product:{type:Object,required:!0},navcategories:{type:Object},CartCount:{type:Object}},components:{ApplicationLogo:N,PrimaryButton:W,Link:B,Header:F,Footer:T,SiteModal:A,Search:H},data(){return{mainImg:null,form:{quantity:this.product.unit,delivery:null,product_id:this.product.id,selectedOptions:{}},selectedOptionsNames:{},productInput:{},sm:"sm:max-w-sm",md:"sm:max-w-md",lg:"sm:max-w-lg",xl:"sm:max-w-xl","2xl":"sm:max-w-2xl",categories:!1,subCategories:!1,readyOrder:!1,proceedWithOrder:!1,total:null}},computed:{truncatedOptions(){return this.getSelectedOptionNames.map(a=>a.length>15?a.substring(0,15)+"...":a)},calculateCost(){let a=0,s=0;for(let n in this.form.selectedOptions){let g=this.form.selectedOptions[n],o=this.product.attributes.find(c=>c.id==n);if(o&&o.options){let c=o.options.find(b=>b.id==g);c&&c.cost&&(a+=parseFloat(c.cost))}}return this.form.delivery=="Standard"&&(s=1500),this.form.delivery=="Express"&&(s=5e3),this.form.delivery=="Next Day"&&(s=15e3),this.total=(parseFloat(this.product.price)+parseFloat(a))*parseFloat(this.form.quantity)+parseFloat(s),this.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")},getSelectedOptionNames(){let a=[];for(let s in this.form.selectedOptions){let n=this.form.selectedOptions[s],g=this.product.attributes.find(o=>o.id==s);if(g&&g.options){let o=g.options.find(c=>c.id==n);o&&o.cost&&a.push(o.value)}}return a}},mounted(){this.form.delivery="Standard",this.mainImg=this.product.product_img1,this.product.attributes.forEach(a=>{a.options&&a.options.length>0&&(this.form.selectedOptions[a.id]=a.options[0].id)})},methods:{placeOrder(){L.post(route("cart.store",this.form))},changeImg(a){this.mainImg=a},setDeliveryDate(){this.proceedWithOrder=!this.proceedWithOrder}}},z={class:"p-10"},Y=e("div",null," 14 days is the default Delivery time for this product Want an earlier Delivery time? ",-1),R={class:"flex items-center mt-4 space-x-4"},G={class:"p-6 sm:p-10 relative"},J={class:"p-2 sm:p-4"},K=e("i",{class:"fa-sharp text-lg sm:text-xl fa-light fa-xmark"},null,-1),X=[K],Z=e("div",{class:"p-2 sm:p-4 bg-green-100 rounded-sm"},[e("span",{class:"font-bold"},"14 days is the default Delivery time"),v(" for this product Want an earlier Delivery time? ")],-1),$={class:"flex flex-col sm:flex-row items-center mt-4 space-y-4 sm:space-y-0 sm:space-x-4 py-4 sm:py-10"},ee={class:"cursor-pointer w-full sm:w-4/12 flex flex-col border"},te={class:"border-b text-center p-2 sm:p-4 font-bold flex space-x-2 items-center"},oe=e("span",null,"Standard",-1),se=e("div",{class:"p-2 sm:p-4"},"14 working Days Delivery",-1),le={class:"cursor-pointer w-full sm:w-4/12 flex flex-col border"},ie={class:"border-b text-center p-2 sm:p-4 font-bold flex space-x-2 items-center"},ne=e("span",null,"Express",-1),re=e("div",{class:"p-2 sm:p-4"},"6-7 working Days Delivery",-1),de={class:"cursor-pointer w-full sm:w-4/12 flex flex-col border"},ae={class:"border-b text-center p-2 sm:p-4 font-bold flex space-x-2 items-center"},ce=e("span",null,"Next Day",-1),pe=e("div",{class:"p-2 sm:p-4"},"1 - 2 working Day(s) Delivery",-1),ue={class:"flex justify-center sm:justify-end"},me={class:"fixed bottom-0 left-0 w-full h-[100px] flex justify-center items-center backdrop-blur-sm bg-primary2/80 z-50"},_e={class:"container mx-auto px-4 md:px-24"},he={class:"flex flex-col md:flex-row h-full items-center justify-between"},fe={class:"hidden md:flex w-full md:w-8/12 space-x-2 items-center"},ve={class:"w-16 flex-shrink-0"},ye=["src"],xe={class:"hidden md:block"},ge={class:"font-bold whitespace-nowrap"},be={key:0},we={class:"hidden md:flex w-3/6 flex-col items-center"},ke=e("span",null,"Quantity",-1),Oe={class:"text-lg font-bold"},Ce={class:"w-full md:w-3/6 flex items-center justify-center md:justify-end space-x-2"},De={class:"text-4xl font-bold"},Ve={class:"py-12 sm:py-16"},qe={class:"container mx-auto px-4 sm:px-24"},Ue={class:"flex flex-col sm:flex-row"},Se={class:"flex w-full sm:w-9/12 mb-4 sm:mb-0"},Ie={role:"list",class:"flex items-center space-x-2"},je={class:"flex items-center"},Ne=e("span",{class:"mx-2 text-gray-400"},"/",-1),Fe={class:"-m-1"},Te={class:"lg:col-gap-12 xl:col-gap-16 mt-8 grid grid-cols-1 gap-12 lg:mt-12 lg:grid-cols-2 lg:gap-16"},We={class:"flex justify-center items-center flex-col bg-gray-100 rounded-md"},Be={class:"md:w-[400px] overflow-hidden"},Le=["src"],Me={class:"mt-2 w-full"},Qe={class:"flex flex-row justify-center"},He=["src"],Ae=["src"],Ee=["src"],Pe={class:""},ze={class:"sm: text-2xl font-bold text-gray-900 sm:text-3xl"},Ye={class:"mt-5 flex items-center"},Re={key:0,class:"pt-4 border-t my-4"},Ge={key:1,class:"mt-2 py-4"},Je=e("h2",{class:"text-base text-gray-900"},"Quantity",-1),Ke={class:"mt-3 flex select-none items-center gap-1"},Xe=k('<option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option><option value="15">15</option><option value="20">20</option><option value="50">50</option><option value="70">70</option>',14),Ze=[Xe],$e={key:2,class:"mt-2 py-4"},et=e("h2",{class:"text-base text-gray-900"},"Quantity",-1),tt={class:"mt-3 flex select-none items-center gap-1"},ot=k('<option value="10">10</option><option value="20">20</option><option value="30">30</option><option value="40">40</option><option value="50">50</option><option value="100">100</option><option value="500">500</option><option value="2000">2000</option>',8),st=[ot],lt={key:3,class:"mt-2 py-4"},it=e("h2",{class:"text-base text-gray-900"},"Quantity",-1),nt={class:"mt-3 flex select-none items-center gap-1"},rt=k('<option value="12">12</option><option value="24">24</option><option value="50">50</option><option value="100">100</option><option value="200">200</option><option value="300">300</option><option value="500">500</option><option value="1000">1000</option><option value="2000">2000</option>',9),dt=[rt],at={key:4,class:"mt-2 py-4"},ct=e("h2",{class:"text-base text-gray-900"},"Quantity",-1),pt={class:"mt-3 flex select-none items-center gap-1"},ut=k('<option value="10">50</option><option value="100">100</option><option value="200">200</option><option value="500">500</option><option value="1000">1000</option><option value="2000">2000</option>',6),mt=[ut],_t={key:5,class:"mt-2 py-4"},ht=e("h2",{class:"text-base text-gray-900"},"Quantity",-1),ft={class:"mt-3 flex select-none items-center gap-1"},vt=k('<option value="100">100</option><option value="200">200</option><option value="300">300</option><option value="400">400</option><option value="500">500</option>',5),yt=[vt],xt={key:0,class:"border-t mt-2 py-4"},gt={class:"text-base text-gray-900"},bt={class:"mt-3 flex select-none items-center gap-1"},wt=["onUpdate:modelValue"],kt=e("option",{value:"",selected:"",disabled:""},"Select Option",-1),Ot=["value"],Ct={key:1,class:"border-t mt-2 py-4"},Dt={class:"text-base text-gray-900"},Vt={class:"mt-3 flex select-none items-center gap-1"},qt=["onUpdate:modelValue"],Ut=e("option",{value:"",selected:"",disabled:""},"Select Option",-1),St=["value"],It={key:2,class:"border-t mt-2 py-4"},jt={class:"text-base text-gray-900"},Nt={class:"mt-3 flex select-none flex-wrap items-center gap-1"},Ft=["checked","onUpdate:modelValue","value"],Tt={class:"peer-checked:bg-black peer-checked:text-white rounded-lg border border-black px-6 py-2 font-bold"},Wt={key:3,class:"mt-2 py-2"},Bt={class:"mb-1 text-sm font-medium"},Lt={class:"flex flex-wrap gap-1"},Mt=["for"],Qt=["id","onUpdate:modelValue","value"],Ht={class:"group inline-block rounded-full border px-3 py-1 text-xs font-medium peer-checked:bg-black peer-checked:text-white"},At={key:4,class:"border-t mt-2 py-4"},Et={class:"text-base text-gray-900"},Pt={class:"mt-3 flex select-none flex-wrap items-center gap-1"},zt=["onUpdate:modelValue"],Yt={key:5,class:"border-t mt-2 py-4"},Rt={class:"text-base text-gray-900"},Gt={class:"mt-3 flex select-none flex-wrap items-center gap-1"},Jt=["onUpdate:modelValue","value"],Kt={class:"peer-checked:bg-black peer-checked:text-white rounded-lg border border-black px-6 py-2 font-bold"},Xt={class:"mt-10 flex flex-col space-y-4 border-t border-b py-4"},Zt={class:"flex items-center"},$t=e("span",{class:"text-base"},"Total:",-1),eo={class:"text-3xl font-bold ml-2"},to=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"shrink-0 mr-2 h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"})],-1),oo=k('<div class="lg:col-span-3"><div class="border-b border-gray-300"><nav class="flex gap-4"><a href="#" title="" class="border-b-2 text-xl font-bold border-gray-900 py-4 text-gray-900 hover:border-gray-400 hover:text-gray-800"> You can count on us for </a></nav></div><div class="mt-8 flow-root sm:mt-12"><div class="flex items-center space-x-2"><i class="fa-thin fa-globe text-4xl text-tertiary mr-2"></i><div><h1 class="text-xl font-bold"> Fast Turnaround Within Days </h1><p class="mt-2"> Your order gets to you within 3-7 working days via DHL or our very own Printivo Direct. </p></div></div><div class="flex items-center space-x-2 mt-8"><i class="fa-sharp fa-solid fa-badge-check text-4xl text-tertiary mr-2"></i><div><h1 class="text-xl font-bold"> 100% Top Quality </h1><p class="mt-2"> Only the finest materials, machines and people will be involved in fulfilling your order. </p></div></div><div class="flex items-center space-x-2 mt-8"><i class="fa-duotone fa-wallet text-4xl text-tertiary mr-2"></i><div><h1 class="text-xl font-bold"> Affordable Services </h1><p class="mt-2"> All products are adequately priced to ensure you get value for your money at all times. </p></div></div></div></div>',1);function so(a,s,n,g,o,c){const b=w("primary-button"),V=w("site-modal"),S=w("Header"),q=w("Link"),I=w("search"),j=w("Footer");return l(),i(m,null,[o.readyOrder?(l(),U(V,{key:0,maxWidth:"sm:max-w-md"},{default:h(()=>[e("div",z,[Y,e("div",R,[_(b,{class:"px-16 py-4 text-white bg-primary rounded-md"},{default:h(()=>[v("Yes")]),_:1}),_(b,{class:"px-16 py-4 border rounded-md"},{default:h(()=>[v("No")]),_:1})])])]),_:1})):p("",!0),o.proceedWithOrder?(l(),U(V,{key:1,maxWidth:"sm:max-w-2xl",class:""},{default:h(()=>[e("div",G,[e("div",J,[e("span",{onClick:s[0]||(s[0]=t=>c.setDeliveryDate()),class:"cursor-pointer absolute top-4 right-4 sm:right-10"},X)]),Z,e("div",$,[e("label",ee,[e("div",te,[u(e("input",{name:"delivery","onUpdate:modelValue":s[1]||(s[1]=t=>o.form.delivery=t),value:"Standard",type:"radio",class:"mr-2"},null,512),[[O,o.form.delivery]]),oe]),se]),e("label",le,[e("div",ie,[u(e("input",{name:"delivery","onUpdate:modelValue":s[2]||(s[2]=t=>o.form.delivery=t),type:"radio",class:"mr-2",value:"Express"},null,512),[[O,o.form.delivery]]),ne]),re]),e("label",de,[e("div",ae,[u(e("input",{name:"delivery","onUpdate:modelValue":s[3]||(s[3]=t=>o.form.delivery=t),type:"radio",class:"mr-2",value:"Next Day"},null,512),[[O,o.form.delivery]]),ce]),pe])]),e("div",ue,[_(b,{onClick:s[4]||(s[4]=t=>c.placeOrder()),class:"px-10 py-3 sm:px-16 sm:py-4 bg-green-600 rounded-md text-white"},{default:h(()=>[v("Continue")]),_:1})])])]),_:1})):p("",!0),e("div",me,[e("div",_e,[e("div",he,[e("div",fe,[e("div",ve,[e("img",{class:"object-cover h-full",src:"/storage/"+o.mainImg,alt:"Product image"},null,8,ye)]),e("div",xe,[e("div",ge,d(n.product.name),1),(l(!0),i(m,null,f(c.truncatedOptions,t=>(l(),i("span",{class:"product-option",key:t},[t!="None"?(l(),i("span",be,d(t)+"|",1)):p("",!0)]))),128))])]),e("div",we,[ke,e("span",Oe,d(o.form.quantity),1)]),e("div",Ce,[e("span",De,"₦"+d(c.calculateCost),1),_(b,{onClick:s[5]||(s[5]=t=>c.setDeliveryDate()),class:"p-2 md:p-4 px-4 md:px-8 rounded-sm bg-primary font-bold text-white"},{default:h(()=>[v("Order Now")]),_:1})])])])]),_(S,{navcategories:n.navcategories,CartCount:n.CartCount},null,8,["navcategories","CartCount"]),e("section",Ve,[e("div",qe,[e("div",Ue,[e("nav",Se,[e("ol",Ie,[(l(!0),i(m,null,f(n.breadcrumbs,(t,r)=>(l(),i("li",{key:r,class:"text-left"},[e("div",je,[Ne,e("div",Fe,[_(q,{href:t.link,class:"rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800"},{default:h(()=>[v(d(t.text),1)]),_:2},1032,["href"])])])]))),128))])]),_(I)]),e("div",Te,[e("div",We,[e("div",Be,[e("img",{src:"/storage/"+o.mainImg,alt:"",class:"main-image"},null,8,Le)]),e("div",Me,[e("div",Qe,[e("button",{onClick:s[6]||(s[6]=t=>c.changeImg(n.product.product_img1)),type:"button",class:D([o.mainImg==n.product.product_img1?"border-2 border-primary":"border","flex-0 hover:scale-105 transition-all ease-in-out aspect-square mb-3 w-20 overflow-hidden rounded-lg text-center mr-4"])},[e("img",{class:"thumbnail",src:"/storage/"+n.product.product_img1,alt:""},null,8,He)],2),e("button",{class:D([o.mainImg==n.product.product_img2?"border-2 border-primary":"border border-1","flex-0 hover:scale-105 transition-all ease-in-out aspect-square mb-3 w-20 overflow-hidden rounded-lg text-center mr-4"]),onClick:s[7]||(s[7]=t=>c.changeImg(n.product.product_img2)),type:"button"},[e("img",{class:"thumbnail",src:"/storage/"+n.product.product_img2,alt:""},null,8,Ae)],2),e("button",{class:D([o.mainImg==n.product.product_img3?"border-2 border-primary":"border border-1","flex-0 hover:scale-105 transition-all ease-in-out aspect-square mb-3 w-20 overflow-hidden rounded-lg text-center mr-4"]),onClick:s[8]||(s[8]=t=>c.changeImg(n.product.product_img3)),type:"button"},[e("img",{class:"thumbnail",src:"/storage/"+n.product.product_img3,alt:""},null,8,Ee)],2)])])]),e("div",Pe,[e("h1",ze,d(n.product.name),1),e("div",Ye,[e("span",null,d(n.product.description),1)]),n.product.goto_premium?(l(),i("div",Re,[_(q,{href:a.route("product.show",n.product.goto_premium),class:"text-green-600 font-bold underline uppercase hover:text-primary"},{default:h(()=>[v("Will you prefer a premium card click >")]),_:1},8,["href"])])):p("",!0),n.product.quantityType=="type-1"?(l(),i("div",Ge,[Je,e("div",Ke,[u(e("select",{"onUpdate:modelValue":s[9]||(s[9]=t=>o.form.quantity=t)},Ze,512),[[x,o.form.quantity]])])])):p("",!0),n.product.quantityType=="type-2"?(l(),i("div",$e,[et,e("div",tt,[u(e("select",{"onUpdate:modelValue":s[10]||(s[10]=t=>o.form.quantity=t)},st,512),[[x,o.form.quantity]])])])):p("",!0),n.product.quantityType=="type-3"?(l(),i("div",lt,[it,e("div",nt,[u(e("select",{"onUpdate:modelValue":s[11]||(s[11]=t=>o.form.quantity=t)},dt,512),[[x,o.form.quantity]])])])):p("",!0),n.product.quantityType=="type-4"?(l(),i("div",at,[ct,e("div",pt,[u(e("select",{"onUpdate:modelValue":s[12]||(s[12]=t=>o.form.quantity=t)},mt,512),[[x,o.form.quantity]])])])):p("",!0),n.product.quantityType=="type-5"?(l(),i("div",_t,[ht,e("div",ft,[u(e("select",{"onUpdate:modelValue":s[13]||(s[13]=t=>o.form.quantity=t)},yt,512),[[x,o.form.quantity]])])])):p("",!0),(l(!0),i(m,null,f(n.product.attributes,t=>(l(),i("div",{class:"",key:t.id},[t.type=="quantity"?(l(),i("div",xt,[e("h2",gt,d(t.name),1),e("div",bt,[u(e("select",{"onUpdate:modelValue":r=>o.form.selectedOptions[t.id]=r},[kt,(l(!0),i(m,null,f(t.options,r=>(l(),i("option",{key:r.id,value:r.id},d(r.value),9,Ot))),128))],8,wt),[[x,o.form.selectedOptions[t.id]]])])])):p("",!0),t.type=="select"?(l(),i("div",Ct,[e("h2",Dt,d(t.name),1),e("div",Vt,[u(e("select",{"onUpdate:modelValue":r=>o.form.selectedOptions[t.id]=r},[Ut,(l(!0),i(m,null,f(t.options,r=>(l(),i("option",{key:r.id,value:r.id},d(r.value),9,St))),128))],8,qt),[[x,o.form.selectedOptions[t.id]]])])])):p("",!0),t.type=="radio_single"?(l(),i("div",It,[e("h2",jt,d(t.name),1),e("div",Nt,[(l(!0),i(m,null,f(t.options,(r,y)=>(l(),i("label",{key:r.id},[u(e("input",{type:"radio",checked:y===0,"onUpdate:modelValue":C=>o.form.selectedOptions[t.id]=C,value:r.id,class:"peer sr-only"},null,8,Ft),[[O,o.form.selectedOptions[t.id]]]),e("p",Tt,d(r.value),1)]))),128))])])):p("",!0),t.type=="radio"?(l(),i("fieldset",Wt,[e("legend",Bt,d(t.name),1),e("div",Lt,[(l(!0),i(m,null,f(t.options,(r,y)=>(l(),i("label",{key:y,for:"option_"+t.id+"_"+y,class:"cursor-pointer"},[u(e("input",{type:"radio",id:"option_"+t.id+"_"+y,"onUpdate:modelValue":C=>o.form.selectedOptions[t.id]=C,value:r.id,class:"peer sr-only"},null,8,Qt),[[O,o.form.selectedOptions[t.id]]]),e("span",Ht,d(r.value),1)],8,Mt))),128))])])):p("",!0),t.type=="text"?(l(),i("div",At,[e("h2",Et,d(t.name),1),e("div",Pt,[e("label",null,[u(e("input",{type:"text","onUpdate:modelValue":r=>o.form.selectedOptions[t.id]=r},null,8,zt),[[M,o.form.selectedOptions[t.id]]])])])])):p("",!0),t.type=="checkbox"?(l(),i("div",Yt,[e("h2",Rt,d(t.name),1),e("div",Gt,[(l(!0),i(m,null,f(t.options,r=>(l(),i("label",{key:r.id},[u(e("input",{type:"checkbox","onUpdate:modelValue":y=>o.form.selectedOptions[t.id]=y,value:r.id,class:"peer sr-only"},null,8,Jt),[[Q,o.form.selectedOptions[t.id]]]),e("p",Kt,d(r.value),1)]))),128))])])):p("",!0)]))),128)),e("div",Xt,[e("div",Zt,[$t,e("h1",eo,"₦"+d(c.calculateCost),1)]),e("button",{onClick:s[14]||(s[14]=t=>c.setDeliveryDate()),type:"button",class:"inline-flex w-full items-center justify-center rounded-md border-2 border-transparent bg-primary px-8 py-3 text-center text-base font-bold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800"},[to,v(" Order Now ")])])]),oo])])]),_(j)],64)}const po=E(P,[["render",so]]);export{po as default};
