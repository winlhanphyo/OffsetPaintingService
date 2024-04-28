<template>
  <div class="container">
    <div class="article-detail">
      <div class="article-inner">
        <h3>Standard Business Cards - Promo</h3>
        <div class="card">
          <img src="@/assets/images/products/Lanyard_Mockup.png" alt="">
          <span>2024/04/01</span>
          <p>
            testing testing testing testing testing testing testing testing testing testing testing testing testing testing 
            testing testing testing testing testing testing testing testing testing testing testing testing testing testing 
            testing testing testing testing testing testing testing testing testing testing testing testing testing testing 
          </p>
        </div>
      </div>
      <div class="news">
        <h4>Latest Posts</h4>
        <div class="new-blk">
          <a href="">
            <h5>Title</h5>
            <span>2024/04/01</span>
          </a>
        </div>
        <div class="new-blk">
          <a href="">
            <h5>Title</h5>
            <span>2024/04/01</span>
          </a>
        </div>
        <div class="new-blk">
          <a href="">
            <h5>Title</h5>
            <span>2024/04/01</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppArticleDetail",
  components: {},
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="postcss">
.article-detail {
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 767.9px) {
    display: block;
  }
}
.article-inner {
  width: 65%;
  @media screen and (max-width: 767.9px) {
    width: 100%;
  }
  h3 {
    line-height: 1.5;
    font-size: 25px;
    text-align: center;
  }
  .card {
    margin: 40px 0;
    span {
      display: block;
      margin: 20px 0;
    }
    p {
      line-height: 1.5;
    }
  }
}
.news {
  width: 30%;
  @media screen and (max-width: 767.9px) {
    width: 100%;
  }
  h4 {
    font-size: 20px;
  }
  .new-blk {
    margin-top: 30px;
    background: #eee;
    border-radius: 10px;
    h5 {
      line-height: 1.5;
      margin-bottom: 20px;
      font-size: 15px;
    }
    a {
      display: block;
      padding: 20px;
      border-radius: 10px;
      &:hover {
        background: #dae0e5;
      }
    }
  }
}
</style>
