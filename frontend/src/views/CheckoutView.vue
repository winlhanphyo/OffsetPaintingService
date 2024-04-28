<template>
  <div class="container">
    <div class="page-header d-flex flex-md-nowrap flex-wrap justify-content-between">
      <h1 class="cart_title">{{ $t("message.shoppingCartTitle") }}</h1>
      <div
        class="d-flex justify-content-end align-items-center steps my-2 mt-md-0 py-2 py-md-0">
        <ul class="list-inline mb-0">
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
        <div>
          <div class="product-container" v-for="data in cart" :key="data.id">
            <div class="product-img">
              <img :src="data.image" />
            </div>

            <div class="product-info">
              <div class="product-info-header">
                <div class="product-title">
                  <h3>Standard Business Cards - Promo</h3>
                </div>
                <div class="product-count">100 {{ $t("message.qty") }}</div>
                <div class="product-amount">KS14,850.00</div>
              </div>

              <div class="product-info-category">(Business Cards)</div>

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

              <a href="#">{{ $t("message.editOrder") }}</a>
              <i class="far fa-trash-alt"></i>
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

      <div v-if="step === 2">
        <div class="page-body">
          <div>
            <div class="product-container">
              <div class="shipping-address">
                <h4>{{ $t("message.shippingAddress") }}</h4>
                <div class="shipping-customer-detail">
                  <strong>
                    Win Lhan Phyo
                  </strong>
                  <div class="shipping-customer-address">
                    အမှတ်(၃၅) ၄လွှာ သဒ္ဒါရုံလမ်း <br /> ၂မြောက် <br /> Yangon City Yangon Thaketa <br /> Myanmar
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
                        အမှတ်(၃၅) ၄လွှာ သဒ္ဒါရုံလမ်း <br /> ၂မြောက် <br /> Yangon City Yangon Thaketa <br /> Myanmar
                      </option>
                    </select>
                  </div>

                </div>
              </div>

              <div class="shipping-method">
                <h4>{{ $t("message.shippingMethod") }}</h4>

                <div class="shipping-customer-btn-container">
                  <input type="radio" id="html" name="fav_language" value="HTML">
                  <label for="html">{{ $t("message.shipping") }}</label> <br />
                  <input type="radio" id="css" name="fav_language" value="CSS">
                  <label for="css">{{ $t("message.pickUpFOC") }} </label>
                </div>

                <select class="shipping-customer-option">
                  <option selected>
                    Door to Door Delivery
                  </option>
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
                  <div class="price-product-name">
                    Standard Business
                  </div>
                  <div class="price-product-qty">
                    Qty: 100
                  </div>
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

        <div class="pb-2 d-flex align-items-start flex-wrap"><h3 class="billing_address_label mb-0">{{ $t("message.billingAddress") }}</h3><div class="custom-control custom-checkbox custom-control-inline w-100"><input type="checkbox" name="billing_address" id="billing_address" value="" class="custom-control-input blindShipping"><label class="custom-control-label " for="billing_address"><small>Same as Shipping Address</small></label></div></div>
      </div>

      <div class="page-body" v-if="step === 3"> Step 3 </div>
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
  flex-wrap: nowrap !important;
  justify-content: space-between !important;
  background: #f47920;
  color: #fff;
  padding: 0.5rem 0.9rem !important;
  border-bottom: 1px solid #ccc;
  margin-bottom: 1rem;
  .list-inline {
    padding-left: 0;
    list-style: none;
  }
  .steps ul li {
    position: relative;
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
  .steps ul li:after {
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
}
.page-body {
  display: flex;
  justify-content: space-between;
  .product-container {
    width: 100% !important;
    display: flex;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    width: 60%;
    margin: 2% 0;
    padding: 7px;
    .product-info {
      .product-info-header {
        display: flex;
        justify-content: space-between;
      }

      .product-info-category {
      }

      .product-info-detail {
        .product-info-item {
          display: flex;
        }
      }
    }

    .shipping-address, .shipping-method {
      width: 50%;
    }

    .shipping-customer-option {
      width: 95%;
    }
  }

  .product-img {
    img {
      width: 100px;
      height: 100px;
      object-fit: cover;
    }
  }

  .price-summary {
    height: 100%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;

    .price-summary-detail {
      display: flex;
      .price-product-image {
        img {
          width: 43px;
          height: 69px;
        }
      }

    }
    button {
      width: 100%;
      background: #f47920;
      border-color: #f47920;
      padding: 0.5rem 1rem;
      font-size: 1.25rem;
      line-height: 1.5;
      border-radius: 0.3rem;
    }
    i {
      width: 7px !important;
      background-color: #e4e4e4;
    }
  }
}
</style>
