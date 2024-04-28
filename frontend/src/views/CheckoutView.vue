<template>
  <div class="container">
    <div class="page-header">
      <h1 class="cart-title">{{ $t("message.shoppingCartTitle") }}</h1>
      <div class="steps">
        <ul class="list-inline">
          <li class="list-inline-item visited">
            <a
              @click="handleContinue(1)"
              class="checkout_steps cart_step active"
              data-show="cart"
              data-step="1"
              ><span class="orderstep border bg-primary">1</span
              ><span class="step_title">{{ $t("message.shoppingCartStep1") }}</span></a
            >
          </li>
          <!-- <li class="list-inline-item d-none disabled">
            <a
              href="javascript:void(0)"
              class="checkout_steps splitshipping_step"
              data-show="splitshipping"
              data-step="2"
              ><span class="orderstep border">2</span
              ><span class="step_title">Ship to Multiple Address</span></a
            >
          </li> -->
          <li class="list-inline-item disabled">
            <a
              @click="handleContinue(2)"
              class="checkout_steps shipping_step"
              data-show="shipping"
              data-step="2"
              ><span class="orderstep border">2</span
              ><span class="step_title">{{ $t("message.shoppingCartStep2") }}</span></a
            >
          </li>
          <li class="list-inline-item disabled">
            <a
              @click="handleContinue(3)"
              class="checkout_steps payment_step"
              data-show="payment"
              data-step="3"
              ><span class="orderstep border">3</span
              ><span class="step_title">{{ $t("message.shoppingCartStep3") }}</span></a
            >
          </li>
        </ul>
      </div>
    </div>
    <div>
      <div class="page-body" v-if="step === 1">
        <div class="page-content">
          <div class="product-container" v-for="data in cart" :key="data.id">
            <div class="product-img">
              <img :src="data.image" />
            </div>

            <div class="product-info">
              <div class="product-info-header">
                <h3 class="product-title">
                  Standard Business Cards - Promo
                  <span>(Business Cards)</span>
                </h3>
                <div class="product-count">
                  <strong>100</strong> {{ $t("message.qty") }}
                </div>
                <div class="product-amount">
                  <strong>Ks 14,850.00</strong>
                </div>
              </div>
              <div class="product-info-detail">
                <div class="product-info-item">
                  <label>{{ $t("message.jobName") }}:</label>
                  <div>IBC_028</div>
                </div>

                <div class="product-info-detail">
                  <div class="product-info-item">
                    <label>{{ $t("message.size") }}:</label>
                    <div>3.5" x 2.1" - Standard Business Card Size</div>
                  </div>
                </div>

                <div class="product-info-detail">
                  <div class="product-info-item">
                    <label>{{ $t("message.material") }}:</label>
                    <div>Artcard 250GSM</div>
                  </div>
                </div>

                <div class="product-info-detail">
                  <div class="product-info-item">
                    <label>{{ $t("message.printingType") }}:</label>
                    <div>Digital Press</div>
                  </div>
                </div>

                <div class="product-info-detail">
                  <div class="product-info-item">
                    <label>{{ $t("message.printingSides") }}:</label>
                    <div>One Side</div>
                  </div>
                </div>

                <div class="product-info-detail">
                  <div class="product-info-item">
                    <label>{{ $t("message.lamination") }}:</label>
                    <div>None</div>
                  </div>
                </div>
              </div>
              <hr />
              <div class="row">
                <a href="#">{{ $t("message.editOrder") }}</a>
                <div class="tooltip">
                  <i class="far fa-trash-alt"></i>
                  <span class="tooltiptext">Delete</span>
                </div>
              </div>
            </div>
          </div>

          <div class="price-summary">
          <div class="price-summary-title">
            <h3>Price Summary</h3>
            <hr />
          </div>

          <div class="price-summary-detail">
            <div class="price-label">
              {{ $t("message.subTotal") }}
            </div>
            <div class="price-amount">Ks34,518.00</div>
          </div>

          <button @click="handleContinue()">{{ $t("message.continue") }}</button>
          <a @click="$router.push('/products')">
            <i class="fa fa-arrow-left pr-2"></i>
            {{ $t("message.continueShopping") }}
          </a>
        </div>
        </div>
      </div>

      <div v-if="step === 2">
        <div class="page-body">
          <div>
            <div class="product-container">
              <div class="shipping-address">
                <h4>{{ $t("message.shippingAddress") }}</h4>
                <div class="shipping-customer-detail">
                  <strong> Win Lhan Phyo </strong>
                  <div class="shipping-customer-address">
                    အမှတ်(၃၅) ၄လွှာ သဒ္ဒါရုံလမ်း <br />
                    ၂မြောက် <br />
                    Yangon City Yangon Thaketa <br />
                    Myanmar
                  </div>

                  <div class="shipping-customer-phone">
                    {{ $t("message.phone") }}: 09964764462
                  </div>

                  <div class="shipping-customer-btn-container">
                    <button type="button" class="shipping-customer-btn">
                      <i class="fas fa-edit pr-1"></i>Edit
                    </button>
                    <button type="button" class="shipping-customer-btn">
                      <i class="fas fa-plus pr-1"></i>Add new
                    </button>
                  </div>

                  <div>
                    <select class="shipping-customer-option">
                      <option selected>
                        အမှတ်(၃၅) ၄လွှာ သဒ္ဒါရုံလမ်း <br />
                        ၂မြောက် <br />
                        Yangon City Yangon Thaketa <br />
                        Myanmar
                      </option>
                    </select>
                  </div>
                </div>
              </div>

              <div class="shipping-method">
                <h4>{{ $t("message.shippingMethod") }}</h4>

                <div class="shipping-customer-btn-container">
                  <input type="radio" id="html" name="fav_language" value="HTML" />
                  <label for="html">{{ $t("message.shipping") }}</label> <br />
                  <input type="radio" id="css" name="fav_language" value="CSS" />
                  <label for="css">{{ $t("message.pickUpFOC") }} </label>
                </div>

                <select class="shipping-customer-option">
                  <option selected>Door to Door Delivery</option>
                </select>
              </div>
            </div>
          </div>

          <div class="price-summary">
            <div class="price-summary-title">
              <h3>Price Summary</h3>
              <hr />
            </div>

            <div v-for="data in cart" :key="data.id">
              <div class="price-summary-detail">
                <div class="price-product-image">
                  <img :src="data.image" />
                </div>
                <div class="price-label">
                  <div class="price-product-name">Standard Business</div>
                  <div class="price-product-qty">Qty: 100</div>
                </div>
                <div class="price-amount">Ks34,518.00</div>
              </div>
              <hr />
            </div>

            <div class="price-summary-detail">
              <div class="price-label">
                {{ $t("message.subTotal") }}
              </div>
              <div class="price-amount">Ks34,518.00</div>
            </div>

            <div class="price-summary-detail">
              <div class="price-label">
                {{ $t("message.shippingPrice") }}
              </div>
              <div class="price-amount">Ks0.00</div>
            </div>

            <button @click="handleContinue()">{{ $t("message.continue") }}</button>
          </div>
        </div>

        <div class="pb-2 d-flex align-items-start flex-wrap">
          <h3 class="billing_address_label mb-0">{{ $t("message.billingAddress") }}</h3>
          <div class="custom-control custom-checkbox custom-control-inline w-100">
            <input
              type="checkbox"
              name="billing_address"
              id="billing_address"
              value=""
              class="custom-control-input blindShipping"
            /><label class="custom-control-label" for="billing_address"
              ><small>Same as Shipping Address</small></label
            >
          </div>
        </div>
      </div>

      <div class="page-body" v-if="step === 3">Step 3</div>
    </div>
  </div>
</template>
<script>
import carts from "../const/cart.js";

export default {
  name: "AppCheckout",
  components: {},
  data() {
    return {
      cart: carts,
      step: 1,
    };
  },
  methods: {
    handleContinue(data = null) {
      console.log("handle continue");
      if (data) {
        this.step = data;
      } else if (this.step < 2) {
        this.step += 1;
      }
    },
  },
  mounted() {
    console.log("----cart-----", this.cart, carts);
  },
};
</script>

<style lang="postcss">
.page-header {
  display: flex;
  align-items: center;
  flex-wrap: nowrap !important;
  justify-content: space-between !important;
  background: #f47920;
  color: #fff;
  padding: 0.5rem 0.9rem !important;
  border-bottom: 1px solid #ccc;
  margin-bottom: 1rem;
  @media screen and (max-width: 767.9px) {
    display: block;
    .cart-title {
      font-size: 20px;
    }
  }
  @media screen and (min-width: 768px) and (max-width: 1280px) {
    .cart-title {
      font-size: 20px;
    }
  }
  .list-inline {
    padding-left: 0;
    list-style: none;
  }
  .steps ul li {
    position: relative;
    margin-right: 10px;
    a {
      margin-right: 10px;
      cursor: pointer;
      &:hover {
        opacity: 0.7;
      }
    }
    .orderstep {
      width: 25px;
      height: 25px;
      background: rgba(0, 0, 0, 0);
      display: inline-block;
      text-align: center;
      line-height: 22px;
      border-radius: 100%;
      margin-right: 0.3rem;
      background-color: #003462 !important;
      color: #fff;
    }
  }
  .steps ul li:not(:last-child):after {
    content: "";
    width: 50px;
    display: inline-block;
    height: 3px;
    background: #ccc;
    right: 0;
    left: auto;
    top: 0;
    margin: auto;
    vertical-align: middle;
  }
  .list-inline-item {
    display: inline-block;
  }
  .steps ul li.disabled {
    opacity: 0.5;
  }
}
.page-body {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  @media screen and (max-width: 767.9px) {
    display: block;
  }
  .page-content {
    width: 65%;
    @media screen and (max-width: 767.9px) {
      width: 100%;
    }
    @media screen and (min-width: 768px) and (max-width: 1280px) {
      width: 60%;
    }
  }
  .product-container {
    display: flex;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    margin-bottom: 30px;
    padding: 20px;
    @media screen and (max-width: 1280px) {
      display: block;
    }
    .product-info {
      width: 80%;
      @media screen and (max-width: 1280px) {
        width: 100%;
      }
      .product-info-header {
        display: flex;
        justify-content: space-between;
        @media screen and (max-width: 767.9px) {
          display: block;
          .product-amount {
            margin: 10px 0;
          }
        }
        .product-title {
          width: 55%;
          line-height: 1.7;
          margin-bottom: 10px;
          @media screen and (max-width: 767.9px) {
            width: auto;
          }
          span {
            display: block;
            color: #4c7da9;
            font-size: 15px;
          }
        }
      }

      .product-info-detail {
        .product-info-item {
          display: flex;
          margin-bottom: 10px;
          @media screen and (max-width: 767.9px) {
            line-height: 1.7;
          }
          label {
            margin-right: 10px;
            color: #999;
          }
        }
      }
    }

    .shipping-address,
    .shipping-method {
      width: 50%;
    }

    .shipping-customer-option {
      width: 95%;
      .row {
        display: flex;
        justify-content: space-between;
        margin-top: 15px;
        a {
          color: #f47920;
          &:hover {
            color: #d6600b;
          }
        }
        .tooltip {
          position: relative;
          display: inline-block;
          cursor: pointer;
          color: rgba(0, 0, 0, 0.5);
        }

        .tooltip .tooltiptext {
          visibility: hidden;
          background-color: black;
          color: #fff;
          text-align: center;
          border-radius: 6px;
          padding: 5px 10px;
          position: absolute;
          z-index: 1;
          top: 145%;
          right: -26px;
        }

        .tooltip .tooltiptext::after {
          content: "";
          position: absolute;
          bottom: 100%;
          left: 50%;
          margin-left: -5px;
          border-width: 5px;
          border-style: solid;
          border-color: transparent transparent black transparent;
        }

        .tooltip:hover .tooltiptext {
          visibility: visible;
        }
      }
    }

    .product-img {
      margin: 0 auto;
      @media screen and (max-width: 1280px) {
        display: block;
        margin-bottom: 20px;
        img {
          margin: 0 auto;
        }
      }
      img {
        width: 100px;
        height: 100px;
        object-fit: cover;
      }
    }

    .price-summary {
      height: 100%;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
      width: 30%;
      padding: 20px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
      transition: 0.3s;
      @media screen and (max-width: 767.9px) {
        width: auto;
      }
      @media screen and (min-width: 768px) and (max-width: 1280px) {
        width: 32%;
      }
      .price-summary-detail {
        display: flex;
        .price-product-image {
          img {
            width: 43px;
            height: 69px;
          }
        }

        justify-content: space-between;
        margin-top: 20px;
      }
      button {
        width: 100%;
        margin: 20px 0;
        background: #f47920;
        border-color: #f47920;
        padding: 0.5rem 1rem;
        font-size: 1.25rem;
        line-height: 1.5;
        border-radius: 0.3rem;
        color: #fff;
        border: 1px solid rgba(0, 0, 0, 0);
        cursor: pointer;
        &:hover {
          background: #d6600b;
        }
      }
      .continue-link {
        display: flex;
        align-items: center;
        justify-content: center;
        .pr-2 {
          margin-right: 5px;
          transition: all 0.3s ease-in;
        }
        &:hover {
          color: #d6600b;
          .pr-2 {
            margin-right: 10px;
          }
        }
      }
    }
  }
}
</style>
