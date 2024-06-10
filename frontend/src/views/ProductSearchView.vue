<template>
  <div class="container">
    <div class="product-search">
      <h2>Search</h2>
      <div class="search">
        <div class="search-form">
          <!-- <input type="search" name="top_search" id="top_search" class="form-control" placeholder="Products / Articles Search" autocomplete="off">
          <button><span class="material-symbols-outlined"> search </span></button> -->
          {{ "Search Name: " + searchName }}
        </div>
        <div class="result">
          <ul class="tabs-nav" id="tabs-nav">
            <li><a href="#tab1">Products <span>{{ products?.length }}</span></a></li>
            <li><a href="#tab2">Articles <span>{{ articles?.length }}</span></a></li>
          </ul>
          <div class="tab-content" id="tabs-content">
            <div id="tab1" class="inner">
              <div class="col" v-for="(item, index) in products" :key="'product' + index">
                <div class="search-img">
                  <a @click="$router.push(`/product/${item?.id}`)">
                    <img :src="item?.productImage" alt="" />
                  </a>
                </div>
                <div class="product-data">
                  <a @click="$router.push(`/product/${item?.id}`)">
                    <p class="products-name">{{ item?.name }}</p>
                    <small>{{ item?.description }}</small>
                    <p>in 
                      <small class="font-italic products-category-name">{{ item?.category?.name }}</small>
                    </p>
                  </a>
                </div>
              </div>
              <!-- <div class="col">
                <div class="search-img">
                  <a href="">
                    <img src="@/assets/images/products/Fabrix_T_Shirt_01_40091.jpg" alt="" />
                  </a>
                </div>
                <div class="product-data">
                  <a href="">
                    <p class="products-name">Design T Shirt</p>
                    <small>T Shirt | Fruit of the Loom (USA)</small>
                    <p>in 
                      <small class="font-italic products-category-name">T Shirt Printing</small>
                    </p>
                  </a>
                </div>
              </div>
              <div class="col">
                <div class="search-img">
                  <a href="">
                    <img src="@/assets/images/products/Fabrix_T_Shirt_01_40091.jpg" alt="" />
                  </a>
                </div>
                <div class="product-data">
                  <a href="">
                    <p class="products-name">Design T Shirt</p>
                    <small>T Shirt | Fruit of the Loom (USA)</small>
                    <p>in 
                      <small class="font-italic products-category-name">T Shirt Printing</small>
                    </p>
                  </a>
                </div>
              </div>
              <div class="col">
                <div class="search-img">
                  <a href="">
                    <img src="@/assets/images/products/Fabrix_T_Shirt_01_40091.jpg" alt="" />
                  </a>
                </div>
                <div class="product-data">
                  <a href="">
                    <p class="products-name">Design T Shirt</p>
                    <small>T Shirt | Fruit of the Loom (USA)</small>
                    <p>in 
                      <small class="font-italic products-category-name">T Shirt Printing</small>
                    </p>
                  </a>
                </div>
              </div>
              <div class="col">
                <div class="search-img">
                  <a href="">
                    <img src="@/assets/images/products/Fabrix_T_Shirt_01_40091.jpg" alt="" />
                  </a>
                </div>
                <div class="product-data">
                  <a href="">
                    <p class="products-name">Design T Shirt</p>
                    <small>T Shirt | Fruit of the Loom (USA)</small>
                    <p>in 
                      <small class="font-italic products-category-name">T Shirt Printing</small>
                    </p>
                  </a>
                </div>
              </div> -->
            </div>
            <div id="tab2" class="inner">
              <div class="col" v-for="(item, index) in articles" :key="'article' + index">
                <div class="search-img">
                  <a @click="$router.push(`/article/${item?.id}`)">
                    <img :src="item.articleImage" alt="" />
                  </a>
                </div>
                <div class="product-data">
                  <a @click="$router.push(`/article/${item?.id}`)">
                    <p class="products-name">{{ item?.name }}</p>
                    <small>{{ item?.description }}</small>
                    <!-- <p>in 
                      <small class="font-italic products-category-name">{{ item }}</small>
                    </p> -->
                  </a>
                </div>
              </div>
              <!-- <div class="col">
                <div class="search-img">
                  <a href="">
                    <img src="@/assets/images/products/Fabrix_T_Shirt_01_40091.jpg" alt="" />
                  </a>
                </div>
                <div class="product-data">
                  <a href="">
                    <p class="products-name">Design T Shirt</p>
                    <small>T Shirt | Fruit of the Loom (USA)</small>
                    <p>in 
                      <small class="font-italic products-category-name">T Shirt Printing</small>
                    </p>
                  </a>
                </div>
              </div>
              <div class="col">
                <div class="search-img">
                  <a href="">
                    <img src="@/assets/images/products/Fabrix_T_Shirt_01_40091.jpg" alt="" />
                  </a>
                </div>
                <div class="product-data">
                  <a href="">
                    <p class="products-name">Design T Shirt</p>
                    <small>T Shirt | Fruit of the Loom (USA)</small>
                    <p>in 
                      <small class="font-italic products-category-name">T Shirt Printing</small>
                    </p>
                  </a>
                </div>
              </div>
              <div class="col">
                <div class="search-img">
                  <a href="">
                    <img src="@/assets/images/products/Fabrix_T_Shirt_01_40091.jpg" alt="" />
                  </a>
                </div>
                <div class="product-data">
                  <a href="">
                    <p class="products-name">Design T Shirt</p>
                    <small>T Shirt | Fruit of the Loom (USA)</small>
                    <p>in 
                      <small class="font-italic products-category-name">T Shirt Printing</small>
                    </p>
                  </a>
                </div>
              </div>
              <div class="col">
                <div class="search-img">
                  <a href="">
                    <img src="@/assets/images/products/Fabrix_T_Shirt_01_40091.jpg" alt="" />
                  </a>
                </div>
                <div class="product-data">
                  <a href="">
                    <p class="products-name">Design T Shirt</p>
                    <small>T Shirt | Fruit of the Loom (USA)</small>
                    <p>in 
                      <small class="font-italic products-category-name">T Shirt Printing</small>
                    </p>
                  </a>
                </div>
              </div> -->
            </div>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import { imgRoot } from "../../config";
import { getProduct, getArticle } from "@/services/offset.service.js";

export default {
  name: "AppProductSearch",
  components: {},
  data() {
    return {
      products: [],
      articles: [],
      searchName: null
    };
  },
  mounted() {
    // Show the first tab and hide the rest
    $('#tabs-nav li:first-child').addClass('active');
    $('.inner').hide();
    $('.inner:first').show();

    // Click function
    $('#tabs-nav li').click(function(){
      $('#tabs-nav li').removeClass('active');
      $(this).addClass('active');
      $('.inner').hide();
      
      var activeTab = $(this).find('a').attr('href');
      $(activeTab).fadeIn();
      return false;
    });
    this.getProductData();
  },
  methods: {
    async getProductData() {
      this.searchName = this.$route.query?.name;
      const token = localStorage.getItem("token");
      let res = await getProduct(token, this.searchName);
      if (res?.data?.data) {
        this.products = res.data.data;
      }
      this.products?.map((dist) => {
        if (dist?.media?.length > 0) {
          dist.productImage = imgRoot + dist.media[0]?.url;
        }
      });

      res = await getArticle(token, this.searchName);
      if (res?.data?.data) {
        this.articles = res.data.data;
      }
      this.articles?.map((dist) => {
        if (dist?.articleImage) {
          dist.articleImage = imgRoot + dist.articleImage;
        }
      });
    }
  },
  watch: {
    $route(to, from) {
      console.log("-----from", to, from);
      this.getProductData();
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/mixins.scss";
.product-search {
  .search {
    margin-top: 40px;
  }
  .search-form  {
    position: relative;
    width: 40%;
    font-size: 15px;
    font-weight: 700;
    @media screen and (max-width: 767.9px) {
      width: 100%;
    }
    input {
      width: 100%;
      padding: 10px 50px 10px 15px;
      border-radius: 10px;
    }
    button {
      content: "";
      position: absolute;
      top: 8px;
      right: 3px;
      bottom: 0;
      width: 40px;
      height: 25px;
      background: none;
      border: none;
      cursor: pointer;
    }
  }
  .result {
    margin: 30px 0 0;
    .tabs-nav {
      display: flex;
      margin: 0;
      font-weight: bold;
      border-bottom: 1px solid #efefef;
      li {
        padding: 10px 20px;
        @media screen and (max-width: 767.9px) {
          padding: 10px 7px;
        }
        &.active {
          cursor: pointer;
          border-bottom: 2px solid #f47920;
          a {
            color: #f47920;
          }
        }
      }
      a {
        display: block;
        span {
          background: #efefef;
          padding: 3px;
          display: inline-block;
          margin-left: 5px;
          font-size: 11px;
          border-radius: 4px;
        }
      }
    }
    .tab-content {
      margin-top: 20px;
      .search-img {
        width: 80px;
        height: 70px;
        margin-right: 10px;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      .inner {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        cursor: pointer;
        @media screen and (max-width: 650px) {
          display: block;
        }
        .col {
          display: flex;
          width: 100%;
          flex-wrap: wrap;
          flex-grow: 1;
          max-width: 32%;
          margin: 0 10px 30px 0;
          @media screen and (max-width: 650px) {
            max-width: 100%;
            flex-wrap: inherit;
          }
          @media screen and (min-width: 651px) and (max-width: 1280px) {
            max-width: 46%;
            margin: 0 16px 30px 0;
          }
          .product-data {
            max-width: 80%;
            margin-top: 5px;
            line-height: 1.5;
            @media screen and (max-width: 1280px) {
              max-width: 75%;
            }
            .font-italic {
              font-style: italic;
            }
          }
        }
      }
    }
  }
  
}
</style>