"use strict";(self["webpackChunkcici"]=self["webpackChunkcici"]||[]).push([[917],{2917:function(e,s,t){t.r(s),t.d(s,{default:function(){return B}});var a=t(6768),o=t(4232),i=t(5130);const r=e=>((0,a.Qi)("data-v-70940d6e"),e=e(),(0,a.jt)(),e),l={class:"container"},n={class:"forget-password"},m={class:"form"},d=r((()=>(0,a.Lk)("p",null," To obtain your password please enter the e-mail address registered with us. Your password will be sent immediately. ",-1))),u={class:"form-row"},c={class:"form-group"},p=r((()=>(0,a.Lk)("label",{for:"",class:"label"},[(0,a.eW)("Email "),(0,a.Lk)("span",null,"*")],-1))),f={class:"form-data"},k=["placeholder"];function b(e,s,t,r,b,h){return(0,a.uX)(),(0,a.CE)("div",l,[(0,a.Lk)("h2",null,(0,o.v_)(e.$t("message.forgetPassword")),1),(0,a.Lk)("div",n,[(0,a.Lk)("div",m,[d,(0,a.Lk)("div",u,[(0,a.Lk)("div",c,[p,(0,a.Lk)("div",f,[(0,a.bo)((0,a.Lk)("input",{type:"text",required:"",name:"email",placeholder:e.$t("message.email"),"onUpdate:modelValue":s[0]||(s[0]=e=>b.email=e)},null,8,k),[[i.Jo,b.email]])])]),(0,a.Lk)("button",{onClick:s[1]||(s[1]=e=>h.submit()),class:"submit-btn"},(0,o.v_)(e.$t("message.submit")),1)])])])])}t(4114);var h=t(4874),g=t.n(h),v=t(4108),w={name:"AppForgetPassword",components:{},data(){return{email:""}},methods:{async submit(){const e={email:this.email},s=await(0,v.fB)(e);s?.data?.message?(g().fire({position:"bottom",icon:"success",title:s.data.message,showConfirmButton:!1,timerProgressBar:!0,toast:!0}),this.$router.push("/login")):g().fire({position:"bottom",icon:"error",title:"Email is not existed.",showConfirmButton:!1,timerProgressBar:!0,toast:!0})}}},L=t(1241);const C=(0,L.A)(w,[["render",b],["__scopeId","data-v-70940d6e"]]);var B=C}}]);
//# sourceMappingURL=917.5ce8c278.js.map