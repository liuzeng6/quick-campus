import{_ as a,r as e,Z as t,e as n,f as s,y as l,w as o,v as i,k as r,j as c,p as u,m as d,A as f,i as m,t as p,O as v,W as _}from"./index-C8SuCoiN.js";import{_ as x}from"./uni-icons.CrP5nmgM.js";const k=a({__name:"index",setup(a){const k=e({...t().userInfo.value});let y=e(!1);const g=async()=>{if(!y.value)return!1;{let{avatar:a,nickname:e}=k.value,n={avatar:a,nickname:e};if(""==e)return f({title:"昵称不能为空",icon:"none"}),!1;if(e.length>16)return f({title:"昵称不能超过16个字",icon:"none"}),!1;let{data:s}=await m.put("/user/profile",n);if(1==s.code){f({title:"修改成功",icon:"none"});let n=t().userInfo.value;n.nickname=e,n.avatar=a}else f({title:"修改失败",icon:"none"});console.log(n)}},h=()=>{f({title:"暂时不支持修改头像",icon:"none"})},b=async a=>{y.value=!0},j=async a=>{y.value=!0,f({title:"暂时不支持修改头像",icon:"none",duration:2e3})};return(a,e)=>{const t=i,f=p,m=n(s("uni-icons"),x),w=v,C=_;return r(),l(t,{id:"page"},{default:o((()=>[c(t,{class:"items"},{default:o((()=>[c(w,{"open-type":"chooseAvatar",plain:!0,style:{border:"none","box-sizing":"border-box"},class:"item",onClick:h,onChooseavatar:j},{default:o((()=>[c(t,{class:"text",style:{"text-align":"left"}},{default:o((()=>[u("头像")])),_:1}),c(t,{class:"avatar"},{default:o((()=>[c(f,{src:k.value.avatar},null,8,["src"])])),_:1}),c(t,{class:"arrow"},{default:o((()=>[c(m,{type:"right",size:"30rpx",color:"#909090"})])),_:1})])),_:1}),c(t,{class:"item",style:{margin:"0rpx 25rpx"}},{default:o((()=>[c(t,{class:"text"},{default:o((()=>[u("昵称")])),_:1}),c(t,{class:"nickname"},{default:o((()=>[c(C,{type:"nickname",maxlength:"16",modelValue:k.value.nickname,"onUpdate:modelValue":e[0]||(e[0]=a=>k.value.nickname=a),onClick:b},null,8,["modelValue"])])),_:1}),c(t,{class:"arrow"},{default:o((()=>[c(m,{type:"right",size:"30rpx",color:"#909090"})])),_:1})])),_:1})])),_:1}),c(w,{class:"save",onClick:g,dis:d(y)},{default:o((()=>[u(" 保存 ")])),_:1},8,["dis"])])),_:1})}}},[["__scopeId","data-v-94cd6147"]]);export{k as default};