"use strict";(self["webpackChunkcici"]=self["webpackChunkcici"]||[]).push([[807],{807:function(a,t,e){e.r(t),e.d(t,{default:function(){return f}});var i=e(6768),l=e(4232),s=e(144),c=e(9148),r=e.n(c),n=e(4108),d=e(9362);const h={class:"container"},o={class:"article-detail"},v={class:"article-inner"},u={class:"card"},p=["src"],D=(0,i.Fv)('<div class="news"><h4>Latest Posts</h4><div class="new-blk"><a href=""><h5>Title</h5><span>2024/04/01</span></a></div><div class="new-blk"><a href=""><h5>Title</h5><span>2024/04/01</span></a></div><div class="new-blk"><a href=""><h5>Title</h5><span>2024/04/01</span></a></div></div>',1),k={name:"AppArticleDetail",components:{},data(){return{articleDetail:{}}},mounted(){this.getArticleDetailData()},methods:{async getArticleDetailData(){const a=this.$route.params.id,t=localStorage.getItem("token"),e=await(0,n.ef)(t,a);e?.data?.data&&(this.articleDetail=e.data.data,console.log("------article detail",this.articleDetail),this.articleDetail.articleImage=this.articleDetail?.articleImage?d.yo+this.articleDetail?.articleImage:"")}}};var m=Object.assign(k,{setup(a){return(a,t)=>((0,i.uX)(),(0,i.CE)("div",h,[(0,i.Lk)("div",o,[(0,i.Lk)("div",v,[(0,i.Lk)("h3",null,(0,l.v_)(a.articleDetail?.name),1),(0,i.Lk)("div",u,[(0,i.Lk)("img",{src:a.articleDetail?.articleImage,alt:""},null,8,p),(0,i.Lk)("span",null,(0,l.v_)((0,s.R1)(r())(a.item?.createdAt).format("YYYY-MM-DD")),1),(0,i.Lk)("p",null,(0,l.v_)(a.articleDetail?.description),1)])]),D])]))}});const g=m;var f=g}}]);
//# sourceMappingURL=807.1d00b81b.js.map