import{A as p}from"./AuthenticatedLayout-DqvAkqZK.js";import{i as f,O as m,r,o,d as x,w as a,b as e,h as n,a as l,c,t as i,e as y,j as b,F as k}from"./app-vkU_msJH.js";import{_ as g}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./ASide-Cf4gYmDn.js";const $={props:["products"],components:{Link:f,AuthenticatedLayout:p},methods:{deleteProduct(t){m.delete(route("product.destroy",t))},deleteUser(t){axios.delete(`http://localhost:8000/api/users/${t}`).then(()=>{this.$emit("reload")})},editUser(t){this.$emit("setproduct",t)}}},L={class:"flex justify-between items-center"},v=e("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"},"products",-1),C={class:"flex justify-center"},B={class:"w-6/12"},w={key:0,class:"text-green-500"},A={class:"table-auto"},N=e("thead",null,null,-1),V={class:"p-4"},j={class:"p-4"},P={class:"p-4"},D=["onClick"],E=e("br",null,null,-1),F=e("hr",null,null,-1);function O(t,U,u,I,K,_){const d=r("Link"),h=r("AuthenticatedLayout");return o(),x(h,null,{header:a(()=>[e("div",L,[v,n(),l(d,{href:t.route("product.create"),class:"p-4 bg-primary2 font-bold text-bold"},{default:a(()=>[n("Create Product")]),_:1},8,["href"])])]),default:a(()=>[e("div",C,[e("div",B,[t.$page.props.flash.success?(o(),c("div",w,i(t.$page.props.flash.success),1)):y("",!0),e("table",A,[N,e("tbody",null,[(o(!0),c(k,null,b(u.products,s=>(o(),c("tr",{key:s.id},[e("td",V,i(s.name),1),e("td",j,[l(d,{href:t.route("product.edit",s.id),class:"px-8"},{default:a(()=>[n("Edit")]),_:2},1032,["href"])]),e("td",P,[e("button",{onClick:S=>_.deleteProduct(s.id),class:"px-8"},"Delete",8,D)])]))),128))])]),E,F])])]),_:1})}const H=g($,[["render",O]]);export{H as default};