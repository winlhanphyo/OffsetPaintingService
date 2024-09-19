<template>
  <div class="container">
    <div class="product-detail">
      <h2>{{ productDetail?.name }} <span>(Business Cards)</span></h2>
      <div class="card">
        <div class="card-inner">
          <div>
            <ul class="slider-for">
              <li v-for="(item, index) in media" :key="'media' + index">
                <img width="100%" height="100%" :src="item?.url" alt="" />
              </li>
              <!-- <li><img width="100%" height="100%" src="@/assets/images/products/details/Fabrix_T_Shirt_01_40091.jpg" alt=""></li> -->
              <!-- <li><img width="100%" height="100%" src="@/assets/images/products/details/Standard_Business_Cards_-_Promo_1200px96.jpg" alt=""></li>
                <li><img width="100%" height="100%" src="@/assets/images/products/details/Standard_Business_Cards_-_Promo_400px.jpg" alt=""></li>
                <li><img width="100%" height="100%" src="@/assets/images/products/details/Standard_Business_Cards_-_Promo_400px82.jpg" alt=""></li> -->
            </ul>
            <ul class="slider-nav">
              <li v-for="(item, index) in media" :key="'media' + index">
                <img width="100%" height="100%" :src="item?.url" alt="" />
              </li>
              <!-- <li>
                <img src="@/assets/images/products/details/Standard_Business_Cards_-_Promo_1200px96.jpg" alt="">
              </li>
              <li>
                <img src="@/assets/images/products/details/Fabrix_T_Shirt_01_40091.jpg" alt="">
              </li>
              <li>
                <img src="@/assets/images/products/details/Standard_Business_Cards_-_Promo_400px.jpg" alt="">
              </li>
              <li>
                <img src="@/assets/images/products/details/Standard_Business_Cards_-_Promo_400px82.jpg" alt="">
              </li> -->
            </ul>
          </div>
          <div class="tabs">
            <ul id="tabs-nav" class="tabs-nav">
              <li><a href="#tab1">Description</a></li>
              <li><a href="#tab2">Templates</a></li>
              <li><a href="#tab3">Product Review</a></li>
            </ul>
            <!-- END tabs-nav -->
            <div id="tabs-content">
              <div id="tab1" class="tab-content">
                <p>
                  {{ productDetail?.name }}<br />
                  <!-- Name cards made from standard paper (Art Carton 250 gsm) printed with the best quality. -->
                </p>
                <p>
                  {{ productDetail?.description }}
                </p>
              </div>
              <div id="tab2" class="tab-content">
                <div class="row">
                  <div class="row">
                    <a href="">
                      <span class="icon material-symbols-outlined">picture_as_pdf</span>
                      3.5" x 2.1" - Standard Business Card Size
                    </a>
                  </div>
                  <div class="row">
                    <a href="">
                      <span class="icon material-symbols-outlined">picture_as_pdf</span>
                      3.5" x 2.1" - Standard Business Card Size
                    </a>
                  </div>
                </div>
              </div>
              <div id="tab3" class="tab-content"></div>
            </div>
          </div>
        </div>
        <div class="card-inner">
          <h4>{{ $t("message.priceCalculator") }}</h4>
          <div class="calculate">
            <div class="form-group">
              <label for="" class="label">{{ $t("message.size") }}</label>
              <div class="form-data">
                <!-- <input
                  type="text"
                  placeholder="3.5 x 2.1 - Standard Business Card Size"
                /> -->
                <select name="width" id="width" class="form-select" v-model="widthHeight">
                  <option value="" selected disabled hidden>Choose Width And Height (Depth)</option>
                  <option value="">None</option>
                  <option v-for="item in widthHeightList" :value="item.value" :key="item?.value">{{ item?.label }}</option>
                </select>
              </div>
            </div>
            <div class="form-group">
              <label for="" class="label">{{ $t("message.quantity") }}</label>
              <div class="form-data">
                <!-- <select name="" id="">
                  <option value="100">100</option>
                  <option value="200">200</option>
                  <option value="200">200</option>
                  <option value="300">300</option>
                  <option value="400">400</option>
                  <option value="500">500</option>
                  <option value="600">600</option>
                  <option value="700">700</option>
                  <option value="800">800</option>
                  <option value="900">900</option>
                  <option value="1000">1000</option>
                </select> -->
                <input type="number" id="quantity" :placeholder="$t('message.quantity')" v-model="quantity" name="quantity" />
              </div>
            </div>
            <div class="form-group">
              <label for="" class="label">{{ $t("message.material") }}</label>
              <div class="form-data">
                <input type="text" placeholder="Artcard 250GSM" />
              </div>
            </div>
            <div class="form-group">
              <label for="" class="label">{{ $t("message.printingType") }}</label>
              <div class="form-data">
                <input type="text" placeholder="Digital Press" />
              </div>
            </div>
            <div class="form-group">
              <label for="" class="label">{{ $t("message.printingSides") }}</label>
              <div class="form-data">
                <select name="" id="">
                  <option value="One">One Side</option>
                  <option value="Two">Two Side</option>
                </select>
              </div>
            </div>
            <div class="form-group" v-if="lamList?.length > 0">
              <label for="" class="label">{{ $t("message.lamination") }}</label>
              <div class="form-data">
                <!-- <input type="text" placeholder="None" />  -->
                <select name="lam" id="lam" class="form-select" v-model="selectedLam">
                  <option value="" hidden>Choose Lam</option>
                  <option v-for="item in lamList" :key="item" :value="item">{{ item }}</option>
                </select>
              </div>
            </div>
            <div class="total">
              <span>{{ $t("message.total") }} : Ks 14,850.00</span>
            </div>
            <div class="accordion-container">
              <h4 class="accordion-head">
                {{ $t("message.firstAccordianHead") }}<span class="plusminus">+</span>
              </h4>
              <div class="accordion-body" style="display: none">
                <div class="form-group">
                  <label for="" class="label">Shipping Option</label>
                  <div class="form-data">
                    <ul>
                      <li>
                        <input type="radio" name="option" value="shipping" />Shipping
                      </li>
                      <li>
                        <input type="radio" name="option" value="pickup" />Pickup (FOC)
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="form-group select">
                  <div class="form-data">
                    <label for="" class="label">State</label>
                    <select name="" id="">
                      <option value="100">100</option>
                      <option value="200">200</option>
                      <option value="200">200</option>
                      <option value="300">300</option>
                      <option value="400">400</option>
                      <option value="500">500</option>
                      <option value="600">600</option>
                      <option value="700">700</option>
                      <option value="800">800</option>
                      <option value="900">900</option>
                      <option value="1000">1000</option>
                    </select>
                  </div>
                  <button class="calc-btn">calculate</button>
                </div>
                <div class="form-group select">
                  <div class="form-data">
                    <label for="" class="label">Type & Cost</label>
                    <select>
                      <option value="" selected disabled hidden>
                        Select Shipping Type
                      </option>
                      <option value="1">
                        Deliver to Bus Terminal (Yangon Aung San Highway Station)
                        <small class="text-muted d-block"
                          >(Estimated Delivery Date: 19 Apr, 2024)</small
                        >
                        <small>Ks 2,500.00</small>
                      </option>
                    </select>
                  </div>
                </div>
                <div class="total">
                  <span>Estimated Total : Ks 14,850.00</span>
                </div>
              </div>
            </div>
            <button class="start" @click="addToCart()">{{ $t("message.getStarted") }}</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import "slick-carousel";
import store from "@/store";
import { getProductDetail, getMediaWithProductId } from "@/services/offset.service.js";
import { imgRoot } from "./../../config";

export default {
  name: "AppProductDetail",
  components: {},
  data() {
    return {
      productDetail: {},
      media: [],
      widthHeightList: [],
      widthHeight: "",
      quantity: "",
      lamList: [],
      selectedLam: "",
    };
  },
  mounted() {
    this.getProductDetailData();
    this.getMediaWithProductData();
  },
  beforeUnmount() {
    $(".slider-nav").slick("unslick");
    $(".slider-for").slick("unslick");
  },
  methods: {
    setupSlider() {
      $(".slider-for").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: false,
        autoplay: true,
        autoplaySpeed: 3000,
        asNavFor: ".slider-nav",
      });
      $(".slider-nav").slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: ".slider-for",
        dots: false,
        centerMode: false,
        focusOnSelect: true,
      });
      $(".accordion-head").click(function () {
        if ($(".accordion-body").is(":visible")) {
          $(".accordion-body").slideUp(300);
          $(".plusminus").text("+");
        }
        if ($(this).next(".accordion-body").is(":visible")) {
          $(this).next(".accordion-body").slideUp(300);
          $(this).children(".plusminus").text("+");
        } else {
          $(this).next(".accordion-body").slideDown(300);
          $(this).children(".plusminus").text("-");
        }
      });

      // Show the first tab and hide the rest
      $("#tabs-nav li:first-child").addClass("active");
      $(".tab-content").hide();
      $(".tab-content:first").show();

      // Click function
      $("#tabs-nav li").click(function () {
        $("#tabs-nav li").removeClass("active");
        $(this).addClass("active");
        $(".tab-content").hide();

        var activeTab = $(this).find("a").attr("href");
        $(activeTab).fadeIn();
        return false;
      });
    },
    async getProductDetailData() {
      const id = this.$route.params.id;
      const token = localStorage.getItem("token");
      const res = await getProductDetail(token, id);
      if (res?.data?.data) {
        this.productDetail = res.data.data;
        this.productDetail.productImage = this.productDetail?.productImage
          ? imgRoot + this.productDetail?.productImage
          : "";
        const widthList = this.productDetail?.width ? JSON.parse(this.productDetail.width) : [];
        const heightList = this.productDetail?.height ? JSON.parse(this.productDetail.height) : [];
        const depthList = this.productDetail?.depth ? JSON.parse(this.productDetail.depth) : [];
        this.lamList = this.productDetail?.lam ? JSON.parse(this.productDetail.lam) : [];

        widthList?.map((w) => {
        heightList?.map(h => {
          if (depthList?.length > 0) {
            depthList?.map(d => {
              if (w && h) {
              this.widthHeightList.push({
                value: w + " " + h + " " + d,
                label: "width: " + w + "\" , height: " + h  + "\" , depth: " + d + "\""
              });
            }
            });
          } else {
            if (w && h) {
              this.widthHeightList.push({
                value: w + " " + h,
                label: "width: " + w + "\" , height: " + h + "\""
              });
            }
          }
        })
      });
      }
    },
    async getMediaWithProductData() {
      const id = this.$route.params.id;
      const token = localStorage.getItem("token");
      const res = await getMediaWithProductId(token, id);
      if (res?.data?.data) {
        this.media = res.data.data;
        this.media?.map((dist) => {
          if (dist?.url) {
            dist.url = imgRoot + dist?.url;
          }
        });
        setTimeout(() => {
          this.setupSlider();
        }, 100);
      }
    },
    async addToCart() {
      if (this.media?.length > 0) {
        this.productDetail.productImage = this.media[0]?.url;
      }
      let data = localStorage.getItem("cartData");
      if (data && JSON.parse(data)?.length > 0) {
        data = JSON.parse(localStorage.getItem("cartData"));
        data.push(this.productDetail);
        localStorage.setItem("cartData", JSON.stringify(data));
        let param = {
          lang: this.lang,
          cartLength: data.length
        };
        await store.dispatch("commonData", param);
      } else {
        localStorage.setItem("cartData", JSON.stringify([this.productDetail]));
      }
      this.$router.push("/checkout");
    }
  },
};
</script>

<style lang="scss">
.product-detail {
  .card {
    display: flex;
    margin: 40px 0;
    @media screen and (max-width: 767.9px) {
      display: block;
    }
    .card-inner {
      width: calc(100% / 2);
      margin-right: 20px;
      @media screen and (max-width: 767.9px) {
        width: 100%;
        margin-right: 0;
      }
      &:last-child {
        margin-right: 0;
      }
      .slider-for {
        .slick-next {
          right: 22px;
        }
        .slick-prev {
          left: 30px;
        }
      }
      .slider-nav {
        .slick-slide {
          margin-right: 10px !important;
          cursor: pointer;
          @media screen and (max-width: 767.9px) {
            width: 20% !important;
            margin-right: 5px !important;
          }
        }
      }
      .tabs {
        .tabs-nav {
          margin: 15px 0 0;
          li {
            display: inline-block;
            background: rgba(0, 0, 0, 0.78);
            color: #fefefe;
            border-width: 1px 1px 0 1px;
            border-style: solid;
            border-color: #34495e;
            margin-right: 5px;
            @media screen and (max-width: 767.9px) {
              font-size: 12px;
            }
            &.active {
              background: #fff;
              color: #000;
              a {
                color: inherit;
                border-color: transparent;
                border-width: 1px 1px 0 1px;
              }
            }
          }
          a {
            display: block;
            padding: 10px 15px;
            font-weight: bold;
            color: #fff;
            @media screen and (max-width: 767.9px) {
              padding: 12px 5px;
            }
          }
        }
        .tab-content {
          border: 1px solid #34495e;
          padding: 20px 15px;
          background: #fff;
          margin-top: -1px;
          overflow: hidden;
          p {
            line-height: 2;
            margin-bottom: 20px;
          }
          .row {
            display: flex;
            align-items: center;
            justify-content: space-between;
            a {
              display: flex;
              align-items: center;
              span {
                margin-right: 5px;
                &.icon {
                  color: #a61f2d;
                }
              }
              &:hover {
                color: #f47920;
              }
            }
          }
        }
      }
      h4 {
        padding-bottom: 10px;
        border-bottom: 1px solid #dee2e6;
      }
      .calculate {
        margin-top: 10px;
        .form-group {
          display: flex;
          align-items: center;
          margin-bottom: 20px;
          @media screen and (max-width: 767.9px) {
            display: block;
          }
          .label {
            flex: 0 0 33.333333%;
            max-width: 33.333333%;
            @media screen and (max-width: 767.9px) {
              display: block;
              margin-bottom: 10px;
            }
          }
          .form-data {
            width: 100%;
            label {
              display: block;
              margin-bottom: 5px;
            }
            input {
              width: 95%;
              padding: 10px;
              border: 1px solid rgba(0, 0, 0, 0.25);
              @media screen and (min-width: 768px) and (max-width: 1440px) {
                width: calc(100% - 22px);
              }
              @media screen and (max-width: 767.9px) {
                width: calc(100% - 22px);
              }
            }
            select {
              width: 100%;
              padding: 10px;
              border: 1px solid rgba(0, 0, 0, 0.25);
            }
          }
          &.select {
            align-items: end;
            @media screen and (max-width: 767.9px) {
              display: flex;
            }
            small {
              font-size: 10px;
            }
          }
        }
      }
      .total {
        text-align: right;
        font-size: 20px;
      }
      .accordion-head {
        cursor: pointer;
        .plusminus {
          float: right;
          font-size: 20px;
        }
      }
      ul li {
        display: inline-flex;
        align-items: center;
        input {
          width: auto !important;
        }
      }
      .calc-btn,
      .start {
        padding: 9px;
        margin-left: 20px;
        font-size: 15px;
        background: #009bdf;
        color: #fff;
        cursor: pointer;
        border-radius: 5px;
        border: none;
        &:hover {
          background: #000;
        }
      }
      .start {
        width: 100%;
        margin: 20px 0 0;
        padding: 15px 0;
      }
    }
  }
}
</style>
