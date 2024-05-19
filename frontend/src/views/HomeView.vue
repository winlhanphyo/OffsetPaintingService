<template>
  <main>
    <div class="slider">
      <ul class="slider-item">
        <li><img src="@/assets/images/home/SaiSai_Banner.jpg" alt="" /></li>
        <li>
          <a href=""><img src="@/assets/images/home/T_Shirt37.jpg" alt="" /></a>
        </li>
        <li><img src="@/assets/images/home/banner.jpg" alt="" /></li>
        <li><img src="@/assets/images/home/Deliver_Banner.jpg" alt="" /></li>
      </ul>
    </div>
    <div class="container">
      <div class="package">
        <h2>{{ $t('message.package') }}</h2>
        <div class="product-list package-list">
          <div class="product-card">
            <div class="work-heading">
              <h3>Design T Shirt</h3>
              <p>Create your own t-shirt designs for friends, families, and events</p>
            </div>
            <div class="work-image-box">
              <img src="@/assets/images/products/Fabrix_T_Shirt_01_40091.jpg" alt="" />
              <div class="details">
                <a @click="$router.push('/package/1')"
                  >View details <i class="fa fa-arrow-circle-right" aria-hidden="true"></i
                ></a>
              </div>
            </div>
          </div>
          <div class="product-card">
            <div class="work-heading">
              <h3>Personalised T Shirt</h3>
              <p>Create your own t-shirt designs for friends, families, and events</p>
            </div>
            <div class="work-image-box">
              <img src="@/assets/images/products/Personalised_T_Shirt_400px54.jpg" alt="" />
              <div class="details">
                <a @click="$router.push('/package/1')"
                  >View details <i class="fa fa-arrow-circle-right" aria-hidden="true"></i
                ></a>
              </div>
            </div>
          </div>
          <div class="product-card">
            <div class="work-heading">
              <h3>Photography Prints</h3>
              <p>Photographers Create it, we Print it, you Love it.</p>
            </div>
            <div class="work-image-box">
              <img src="@/assets/images/products/Satin_Photo_Print_1200802286.jpg" alt="" />
              <div class="details">
                <a @click="$router.push('/package/1')"
                  >View details <i class="fa fa-arrow-circle-right" aria-hidden="true"></i
                ></a>
              </div>
            </div>
          </div>
          <div class="product-card">
            <div class="work-heading">
              <h3>Matt Canvas with Frame</h3>
              <p>Canvas Printing with Frame</p>
            </div>
            <div class="work-image-box">
              <img src="@/assets/images/products/Canves_print_1_400px.jpg" alt="" />
              <div class="details">
                <a @click="$router.push('/package/1')"
                  >View details <i class="fa fa-arrow-circle-right" aria-hidden="true"></i
                ></a>
              </div>
            </div>
          </div>
        </div>
        <div class="link">
          <div class="show-all">
            <a @click="$router.push('/packages')"><span>Show All</span></a>
          </div>
        </div>
        
      </div>

      <h2>{{ $t('message.product') }}</h2>
      <div class="product-list">

        <div class="product-card" v-for="(item, index) in products" :key="'product' + index">
          <div class="work-heading">
            <h3>{{ item?.name }}</h3>
            <p>{{ item?.description }}</p>
          </div>
          <div class="work-image-box">
            <img :src="item?.productImage" alt="" />
            <div class="details">
              <a @click="$router.push(`/product/${item?.id}`)"
                >View details <i class="fa fa-arrow-circle-right" aria-hidden="true"></i
              ></a>
            </div>
          </div>
        </div>

        <!-- <div class="product-card">
          <div class="work-heading">
            <h3>Design T Shirt</h3>
            <p>Create your own t-shirt designs for friends, families, and events</p>
          </div>
          <div class="work-image-box">
            <img src="@/assets/images/products/Fabrix_T_Shirt_01_40091.jpg" alt="" />
            <div class="details">
              <a @click="$router.push('/product/1')"
                >View details <i class="fa fa-arrow-circle-right" aria-hidden="true"></i
              ></a>
            </div>
          </div>
        </div>
        <div class="product-card">
          <div class="work-heading">
            <h3>Personalised T Shirt</h3>
            <p>Create your own t-shirt designs for friends, families, and events</p>
          </div>
          <div class="work-image-box">
            <img src="@/assets/images/products/Personalised_T_Shirt_400px54.jpg" alt="" />
            <div class="details">
              <a @click="$router.push('/product/1')"
                >View details <i class="fa fa-arrow-circle-right" aria-hidden="true"></i
              ></a>
            </div>
          </div>
        </div>
        <div class="product-card">
          <div class="work-heading">
            <h3>Photography Prints</h3>
            <p>Photographers Create it, we Print it, you Love it.</p>
          </div>
          <div class="work-image-box">
            <img src="@/assets/images/products/Satin_Photo_Print_1200802286.jpg" alt="" />
            <div class="details">
              <a @click="$router.push('/product/1')"
                >View details <i class="fa fa-arrow-circle-right" aria-hidden="true"></i
              ></a>
            </div>
          </div>
        </div>
        <div class="product-card">
          <div class="work-heading">
            <h3>Matt Canvas with Frame</h3>
            <p>Canvas Printing with Frame</p>
          </div>
          <div class="work-image-box">
            <img src="@/assets/images/products/Canves_print_1_400px.jpg" alt="" />
            <div class="details">
              <a @click="$router.push('/product/1')"
                >View details <i class="fa fa-arrow-circle-right" aria-hidden="true"></i
              ></a>
            </div>
          </div>
        </div>
        <div class="product-card">
          <div class="work-heading">
            <h3>PP Paper Sticker ( ရေစိုခံ )</h3>
            <p>PP Paper Sticker ( ရေစိုခံ )</p>
          </div>
          <div class="work-image-box">
            <img src="@/assets/images/products/Water_Proof_400px.jpg" alt="" />
            <div class="details">
              <a @click="$router.push('/product/1')"
                >View details <i class="fa fa-arrow-circle-right" aria-hidden="true"></i
              ></a>
            </div>
          </div>
        </div>
        <div class="product-card">
          <div class="work-heading">
            <h3>Label Stickers</h3>
            <p>Label Stickers</p>
          </div>
          <div class="work-image-box">
            <img
              src="@/assets/images/products/281_Label_sticker_main_image_1_400px20.jpg"
              alt=""
            />
            <div class="details">
              <a @click="$router.push('/product/1')"
                >View details <i class="fa fa-arrow-circle-right" aria-hidden="true"></i
              ></a>
            </div>
          </div>
          <div class="ribbon">Hot Sales!</div>
        </div>
        <div class="product-card">
          <div class="work-heading">
            <h3>Vinyl Banner</h3>
            <p>Vinyl Banner</p>
          </div>
          <div class="work-image-box">
            <img src="@/assets/images/products/Vinyl_Banner_Small.jpg" alt="" />
            <div class="details">
              <a @click="$router.push('/product/1')"
                >View details <i class="fa fa-arrow-circle-right" aria-hidden="true"></i
              ></a>
            </div>
          </div>
          <div class="ribbon">HOT!</div>
        </div>
        <div class="product-card">
          <div class="work-heading">
            <h3>Standard Business Cards - Promo</h3>
            <p>
              Name cards made from standard paper (Art Carton 250 gsm) printed with the
              best quality.
            </p>
          </div>
          <div class="work-image-box">
            <img
              src="@/assets/images/products/Standard_Business_Cards_-_Promo_3_2copy.jpg"
              alt=""
            />
            <div class="details">
              <a @click="$router.push('/product/1')"
                >View details <i class="fa fa-arrow-circle-right" aria-hidden="true"></i
              ></a>
            </div>
          </div>
          <div class="ribbon">SALE!</div>
        </div>
        <div class="product-card">
          <div class="work-heading">
            <h3>Baked with Love Sticker Set</h3>
            <p>Baked with Love Sticker Set</p>
          </div>
          <div class="work-image-box">
            <img src="@/assets/images/products/CakeBox_Sticker_Small.jpg" alt="" />
            <div class="details">
              <a @click="$router.push('/product/1')"
                >View details <i class="fa fa-arrow-circle-right" aria-hidden="true"></i
              ></a>
            </div>
          </div>
        </div>
        <div class="product-card">
          <div class="work-heading">
            <h3>Covid 19 Floor Sticker-01</h3>
            <p>Caution Sign Floor Sticker</p>
          </div>
          <div class="work-image-box">
            <img src="@/assets/images/products/CautionSign_01_Small13.jpg" alt="" />
            <div class="details">
              <a @click="$router.push('/product/1')"
                >View details <i class="fa fa-arrow-circle-right" aria-hidden="true"></i
              ></a>
            </div>
          </div>
        </div>
        <div class="product-card">
          <div class="work-heading">
            <h3>Deluxe Business Card</h3>
            <p>
              It offers the highest level printing. It comes with an option of luxurious
              Paper and also with matte & gloss lamination finishing. It adds a layer of
              depth to your branding and unique
            </p>
          </div>
          <div class="work-image-box">
            <img src="@/assets/images/products/Business_Card_Small.jpg" alt="" />
            <div class="details">
              <a @click="$router.push('/product/1')"
                >View details <i class="fa fa-arrow-circle-right" aria-hidden="true"></i
              ></a>
            </div>
          </div>
        </div>
        <div class="product-card">
          <div class="work-heading">
            <h3>Baked with Love Sticker Set</h3>
            <p>Birthday Party <b>labels Stickers</b></p>
          </div>
          <div class="work-image-box">
            <img src="@/assets/images/products/BD_StickerSet_Small.jpg" alt="" />
            <div class="details">
              <a @click="$router.push('/product/1')"
                >View details <i class="fa fa-arrow-circle-right" aria-hidden="true"></i
              ></a>
            </div>
          </div>
        </div>
        <div class="product-card">
          <div class="work-heading">
            <h3>Feather Banner Stand</h3>
            <p>Feather Banner Stand</p>
          </div>
          <div class="work-image-box">
            <img src="@/assets/images/products/Feather_Banner_400px.jpg" alt="" />
            <div class="details">
              <a @click="$router.push('/product/1')"
                >View details <i class="fa fa-arrow-circle-right" aria-hidden="true"></i
              ></a>
            </div>
          </div>
        </div>
        <div class="product-card">
          <div class="work-heading">
            <h3>Graceful Greeting and Invitation Cards</h3>
            <p>Give customers greeting/invitation cards for any occasion.</p>
          </div>
          <div class="work-image-box">
            <img src="@/assets/images/products/Greeting_Card_400.jpg" alt="" />
            <div class="details">
              <a @click="$router.push('/product/1')"
                >View details <i class="fa fa-arrow-circle-right" aria-hidden="true"></i
              ></a>
            </div>
          </div>
        </div>
        <div class="product-card">
          <div class="work-heading">
            <h3>Paper Label Sticker - Promo</h3>
            <p>Label Stickers</p>
          </div>
          <div class="work-image-box">
            <img src="@/assets/images/products/Paper_label_Sticker_400px.jpg" alt="" />
            <div class="details">
              <a @click="$router.push('/product/1')"
                >View details <i class="fa fa-arrow-circle-right" aria-hidden="true"></i
              ></a>
            </div>
          </div>
        </div>
        <div class="product-card">
          <div class="work-heading">
            <h3>Company Profile Book</h3>
            <p>Company Profile</p>
          </div>
          <div class="work-image-box">
            <img src="@/assets/images/products/company_profile_400px.jpg" alt="" />
            <div class="details">
              <a @click="$router.push('/product/1')"
                >View details <i class="fa fa-arrow-circle-right" aria-hidden="true"></i
              ></a>
            </div>
          </div>
        </div> -->
      </div>
    </div>
    <div class="company-info">
      <div class="container">
        <h2>Discover Colors with Best Printing</h2>
        <p class="info-txt">
          Enjoy great offers on personalized and top-notch quality printing products
        </p>
        <div class="company-overview">
          <div class="short-company-overview">
            <img src="@/assets/images/home/about_company.png" alt="" />
            <div class="company-blk">
              <h3>About Company</h3>
              <p>
                Since inception, we have worked relentlessly in improving your printing
                experience. We stand tall to provide you a high order and quality printing
                products backed with a 100% satisfaction guarantee.
              </p>
              <a class="btn btn-info" @click="$router.push('/about')"
                >Read More<i class="fa fa-arrow-circle-right" aria-hidden="true"></i
              ></a>
            </div>
          </div>
          <div class="short-company-overview">
            <img src="@/assets/images/home/contact_us.png" alt="" />
            <div class="company-blk">
              <h3>Contact Us</h3>
              <p>
                We always welcome your feedback and suggestions. Feel free to contact our
                customer service desk and get in touch with our print experts. Our experts
                available 24/7 on email and telephone.
              </p>
              <a class="btn btn-info" @click="$router.push('/contact')">
                Contact Us
                <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
// @ is an alias to /src
import $ from "jquery";
import "slick-carousel";
import { getProduct } from "@/services/offset.service.js";
import { imgRoot } from "./../../config";

export default {
  name: "HomeView",
  components: {},
  data() {
    return {
      activeMenu: false,
      products: []
    };
  },
  mounted() {
    console.log("Mounted");
    $(".slider-item").slick({
      arrows: true,
      centerPadding: "0px",
      dots: true,
      slidesToShow: 1,
      infinite: false,
    });
    this.getProductData();
  },
  beforeUnmount() {
    $(".slider-item").slick("unslick");
  },
  methods: {
    async getProductData() {
      const token = localStorage.getItem("token");
      const res = await getProduct(token);

      this.products = res?.data?.data;
      this.products?.map((dist) => {
        if (dist?.media?.length > 0) {
          dist.productImage = imgRoot + dist.media[0]?.url;
        }
      });
  },
}
}
</script>

<style lang="scss">
@import "@/assets/scss/mixins.scss";
.wrapper {
  main {
    .slider {
      ul {
        margin: 0;
      }
      .slick-prev {
        left: 87px;
        @media screen and (max-width: 767.9px) {
          left: 25px;
        }
      }
      .slick-next {
        right: 87px;
        @media screen and (max-width: 767.9px) {
          right: 44px;
        }
      }
      .slick-prev:before,
      .slick-next:before {
        font-size: 30px;
      }
      .slick-dots {
        bottom: 23px;
        li {
          button {
            &::before {
              color: #fff;
              font-size: 15px;
              @media screen and (max-width: 767.9px) {
                font-size: 10px;
              }
            }
          }
          &.slick-active {
            &::before {
              color: #fff;
            }
          }
        }
      }
    }
    .container {
      .product-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin: 50px 0;
        @media screen and (max-width: 767.9px) {
          justify-content: space-between;
        }
        .product-card {
          width: 21%;
          padding: 20px;
          background: #f4f5f9a6;
          margin: 0 13px 13px 0;
          border-radius: 10px;
          position: relative;
          @media screen and (min-width: 501px) and (max-width: 767.9px) {
            width: 40%;
            margin-right: 0;
          }
          @media screen and (max-width: 500px) {
            width: auto;
            margin-right: 0;
          }
          .work-heading {
            padding-bottom: 20px;
            h3 {
              margin-bottom: 10px;
              font-size: 17px;
              color: #0c2773;
              @media screen and (max-width: 767.9px) {
                font-size: 16px;
              }
            }
            p {
              margin: 0;
              color: #1d1a1a !important;
              overflow: hidden;
              text-overflow: ellipsis;
              line-height: 23px;
              white-space: nowrap;
              font-size: 14px;
              @media screen and (max-width: 500px) {
                white-space: normal;
              }
            }
          }
          &:hover {
            .details {
              bottom: 0;
              height: 100%;
              display: block;
              opacity: 1;
              transition: 0.8s ease;
            }
          }
          .details {
            position: absolute;
            right: 0;
            bottom: 100%;
            left: 0;
            width: 100%;
            height: 0;
            overflow: hidden;
            background: rgba(0, 0, 0, 0.5);
            border-radius: 10px;
            a {
              background: #ffe401;
              box-shadow: 0 10px 20px #307cff29;
              color: #0c2773 !important;
              padding: 10px;
              border-radius: 25px;
              display: inline-table;
              align-items: center;
              justify-content: space-between;
              border: 0;
              cursor: pointer;
              font-size: 15px;
              margin: 0 auto;
              position: absolute;
              bottom: 45%;
              left: 0;
              right: 0;
              &:hover {
                opacity: 0.8;
              }
              .fa {
                margin-left: 7px;
              }
              @media screen and (max-width: 767.9px) {
                font-size: 12px;
              }
            }
          }
          .ribbon {
            position: absolute;
            color: #fff;
            top: 4px;
            right: 4px;
            background: linear-gradient(#e66465, #9198e5);
            white-space: nowrap;
            font-size: 14px;
            font-size: 0.875rem;
            box-shadow: 0 1px 7px 0 rgba(0, 0, 0, 0.8);
            padding: 7px;
            border-radius: 10px;
          }
        }
      }
      .package-list {
        margin: 50px 0 10px;
      }
      .link {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        margin: 0 20px 25px 0;
      }
      .show-all {
        background: #ffe401;
        box-shadow: 0 10px 20px #307cff29;
        color: #0c2773 !important;
        border-radius: 25px;
        display: inline-table;
        align-items: center;
        justify-content: space-between;
        border: 0;
        cursor: pointer;
        font-size: 15px;
        margin: 10px 0;
        a {
          display: block;
          padding: 10px 20px;
          &:hover {
            span::before {
              right: -6px;
            }
          }
        }
        span {
          position: relative;
          padding-right: 25px;
          &::before {
            position: absolute;
            top: 0px;
            right: 0;
            width: 18px;
            height: 18px;
            content: "";
            background: url(@/assets/images/home/arrow.svg) no-repeat center / 100%;
            transition: all .3s ease-in;
          }
        }
      }
    }
    .company-info {
      padding: 30px 0 80px;
      background: #f8f9fa;
      @media screen and (min-width: 768px) and (max-width: 1440px) {
        padding: 50px 0;
      }
      @media screen and (max-width: 767.9px) {
        padding: 20px 0;
      }
      .info-txt {
        margin-top: 50px;
        text-align: center;
      }
      .company-overview {
        display: flex;
        margin-top: 40px;
        justify-content: space-evenly;
        @media screen and (min-width: 768px) and (max-width: 1440px) {
          margin: 40px 0 125px;
        }
        @media screen and (max-width: 767.9px) {
          display: block;
        }
        .short-company-overview {
          position: relative;
          margin-right: 10px;
          @media screen and (max-width: 767.9px) {
            margin: 0 0 20px;
            img {
              margin: 0 auto;
            }
          }
          .company-blk {
            position: absolute;
            right: 0;
            bottom: -60px;
            right: 69px;
            width: 65%;
            overflow: hidden;
            display: block;
            opacity: 1;
            background: rgba(0, 0, 0, 0.5);
            border-radius: 10px;
            padding: 25px;
            color: #fff;
            @media screen and (min-width: 768px) and (max-width: 1440px) {
              bottom: -125px;
              right: 56px;
              padding: 16px;
            }
            @media screen and (max-width: 767.9px) {
              position: inherit;
              bottom: 0;
              right: 0;
              width: auto;
              background: none;
              padding: 15px 5px;
            }
            a {
              background: #ffe401;
              box-shadow: 0 10px 20px #307cff29;
              color: #0c2773 !important;
              padding: 10px;
              border-radius: 25px;
              display: inline-table;
              align-items: center;
              justify-content: space-between;
              border: 0;
              cursor: pointer;
              font-size: 15px;
              margin: 0 auto;
              float: right;
              &:hover {
                opacity: 0.8;
              }
              .fa {
                margin-left: 7px;
              }
              @media screen and (max-width: 767.9px) {
                font-size: 12px;
              }
            }
            h3 {
              margin-bottom: 10px;
              font-size: 17px;
              color: #0097dc;
            }
            p {
              margin: 0 0 10px;
              line-height: 1.5;
              color: #fff;
              font-size: 14px;
              @media screen and (max-width: 767.9px) {
                color: #000;
              }
            }
          }
        }
      }
    }
  }
}
</style>
