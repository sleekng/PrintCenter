import{T as n,o as l,f as d,g as t,a,u as o,Z as c,b as e,h as p,n as f,j as u}from"./app-K9V-QYzT.js";import{_}from"./GuestLayout-D4UNX2HW.js";import{_ as w}from"./InputError-D3EmT9Sr.js";import{_ as b,a as g}from"./TextInput-CyiSfB2o.js";import{P as h}from"./PrimaryButton-BnUBs9oM.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const x=e("div",{class:"mb-4 text-sm text-gray-600"}," This is a secure area of the application. Please confirm your password before continuing. ",-1),y={class:"flex justify-end mt-4"},T={__name:"ConfirmPassword",setup(P){const s=n({password:""}),i=()=>{s.post(route("password.confirm"),{onFinish:()=>s.reset()})};return(V,r)=>(l(),d(_,null,{default:t(()=>[a(o(c),{title:"Confirm Password"}),x,e("form",{onSubmit:u(i,["prevent"])},[e("div",null,[a(b,{for:"password",value:"Password"}),a(g,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:o(s).password,"onUpdate:modelValue":r[0]||(r[0]=m=>o(s).password=m),required:"",autocomplete:"current-password",autofocus:""},null,8,["modelValue"]),a(w,{class:"mt-2",message:o(s).errors.password},null,8,["message"])]),e("div",y,[a(h,{class:f(["ms-4",{"opacity-25":o(s).processing}]),disabled:o(s).processing},{default:t(()=>[p(" Confirm ")]),_:1},8,["class","disabled"])])],32)]),_:1}))}};export{T as default};
