import{_ as n}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{o as e,c as t,F as r,d,b as o,p as l,m as f}from"./app-CpTHh7CJ.js";const _={props:{files:Array},methods:{isImage(s){return/\.(jpg|jpeg|png|gif)$/i.test(s)},isPdf(s){return/\.pdf$/i.test(s)},isDoc(s){return/\.(doc|docx)$/i.test(s)}}},p=s=>(l("data-v-dc6d2fa8"),s=s(),f(),s),m=p(()=>o("h1",null,"Order Item Files",-1)),h={class:"file-info flex flex-col flex-start"},u={key:0,class:"file-icon image-icon"},g=["src"],k={key:1,class:"file-icon pdf-icon"},x={key:2,class:"file-icon doc-icon"},y={key:3,class:"file-icon default-icon"},I=["href"];function v(s,F,a,b,w,i){return e(),t("div",null,[m,(e(!0),t(r,null,d(a.files,c=>(e(),t("div",{key:c.id,class:"file-item"},[o("div",h,[i.isImage(c.file)?(e(),t("span",u,[o("img",{class:"w-20",src:/storage/+c.file,alt:""},null,8,g)])):i.isPdf(c.file)?(e(),t("span",k,"📄")):i.isDoc(c.file)?(e(),t("span",x,"📄")):(e(),t("span",y,"📁"))]),o("a",{href:"/storage/"+c.file,class:"btn btn-primary"},"Download",8,I)]))),128))])}const S=n(_,[["render",v],["__scopeId","data-v-dc6d2fa8"]]);export{S as F};