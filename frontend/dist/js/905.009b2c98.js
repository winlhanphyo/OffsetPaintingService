"use strict";(self["webpackChunkcici"]=self["webpackChunkcici"]||[]).push([[905],{1905:function(a,e,c){c.r(e),c.d(e,{default:function(){return v}});c(4114);var s=c(6768),t=c(4232);const i={class:"container"},n={class:"product-list"},k={class:"work-heading"},l={class:"work-image-box"},o=["src"],g={class:"details"},r=["onClick"];function p(a,e,c,p,u,d){return(0,s.uX)(),(0,s.CE)("div",i,[(0,s.Lk)("h2",null,(0,t.v_)(a.$t("message.package")),1),(0,s.Lk)("div",n,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(u.packages,((c,i)=>((0,s.uX)(),(0,s.CE)("div",{class:"product-card",key:"packages"+i},[(0,s.Lk)("div",k,[(0,s.Lk)("h3",null,(0,t.v_)(c?.name),1),(0,s.Lk)("p",null,(0,t.v_)(c.description),1)]),(0,s.Lk)("div",l,[(0,s.Lk)("img",{src:c?.packageImage,alt:""},null,8,o),(0,s.Lk)("div",g,[(0,s.Lk)("a",{onClick:e=>a.$router.push(`/package/${c?.id}`)},e[0]||(e[0]=[(0,s.eW)("View details "),(0,s.Lk)("i",{class:"fa fa-arrow-circle-right","aria-hidden":"true"},null,-1)]),8,r)])])])))),128))])])}var u=c(6807),d=c(9362),h={name:"AppPackageList",components:{},data(){return{currentPage:1,packages:[]}},mounted(){console.log("Mounted"),this.getPackageList()},methods:{async getPackageList(){const a=localStorage.getItem("token")||"";await u.A.dispatch("GetPackage",a),this.packages=await(this.$store?.state?.apiData?.packages),this.packages?.map((a=>{a.packageImage=d.yo+a.packageImage})),console.log("--------packages",this.packages)},clickPaginate(a){console.log("click paginate-------",a)}}},m=c(1241);const L=(0,m.A)(h,[["render",p]]);var v=L}}]);
//# sourceMappingURL=905.009b2c98.js.map