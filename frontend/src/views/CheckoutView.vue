<template>
  <div class="container">
    <div class="page-header">
      <h1 class="cart-title">{{ $t("message.shoppingCartTitle") }}</h1>
      <div class="steps">
        <ul class="list-inline">
          <li
            class="list-inline-item visited"
            :class="[
              step === 1 ? 'list-inline-item visited' : 'list-inline-item disabled',
            ]"
          >
            <a
              @click="handleContinue(1)"
              :class="[
                step === 1
                  ? 'checkout_steps cart_step active'
                  : 'checkout_steps cart_step',
              ]"
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
          <li
            :class="[
              step === 2 ? 'list-inline-item visited' : 'list-inline-item disabled',
            ]"
          >
            <a
              @click="handleContinue(2)"
              :class="[
                step === 2
                  ? 'checkout_steps cart_step active'
                  : 'checkout_steps cart_step',
              ]"
              data-show="shipping"
              data-step="2"
              ><span class="orderstep border">2</span
              ><span class="step_title">{{ $t("message.shoppingCartStep2") }}</span></a
            >
          </li>
          <li
            :class="[
              step === 3 ? 'list-inline-item visited' : 'list-inline-item disabled',
            ]"
          >
            <a
              @click="handleContinue(3)"
              :class="[
                step === 3
                  ? 'checkout_steps cart_step active'
                  : 'checkout_steps cart_step',
              ]"
              data-show="payment"
              data-step="3"
              ><span class="orderstep border">3</span
              ><span class="step_title">{{ $t("message.shoppingCartStep3") }}</span></a
            >
          </li>
        </ul>
      </div>
    </div>
    <div class="page-body" v-if="step === 1">
      <div class="page-content">
        <div class="product-container" v-for="(data, index) in cart" :key="data.id">
          <div class="product-img">
            <img :src="data.image" />
          </div>

          <div class="product-info">
            <div class="product-info-header">
              <h3 class="product-title">
                {{ data?.name }}
                <span>(Business Cards)</span>
              </h3>
              <div class="product-count">
                <strong>{{ data?.count }}</strong> {{ $t("message.qty") }}
              </div>
              <div class="product-amount">
                <strong>Ks 14,850.00</strong>
              </div>
            </div>
            <div class="product-info-detail">
              <div class="product-info-item">
                <label>{{ $t("message.jobName") }}:</label>
                <div>{{ data?.jobName }}</div>
              </div>

              <div class="product-info-detail">
                <div class="product-info-item">
                  <label>{{ $t("message.size") }}:</label>
                  <div>{{ data?.size }}</div>
                </div>
              </div>

              <div class="product-info-detail">
                <div class="product-info-item">
                  <label>{{ $t("message.material") }}:</label>
                  <div>{{ data?.material }}</div>
                </div>
              </div>

              <div class="product-info-detail">
                <div class="product-info-item">
                  <label>{{ $t("message.printingType") }}:</label>
                  <div>{{ data?.printingType }}</div>
                </div>
              </div>

              <div class="product-info-detail">
                <div class="product-info-item">
                  <label>{{ $t("message.printingSides") }}:</label>
                  <div>{{ data?.printingSide }}</div>
                </div>
              </div>

              <div class="product-info-detail">
                <div class="product-info-item">
                  <label>{{ $t("message.lamination") }}:</label>
                  <div>{{ data?.lamination }}</div>
                </div>
              </div>
            </div>
            <hr />
            <div class="row">
              <a href="#">{{ $t("message.editOrder") }}</a>
              <div class="tooltip" @click="deleteOrder(index)">
                <i class="far fa-trash-alt"></i>
                <span class="tooltiptext">Delete</span>
              </div>
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
          <div class="price-amount">Ks 34,518.00</div>
        </div>

        <button @click="handleContinue()">{{ $t("message.continue") }}</button>
        <a class="continue-link" @click="$router.push('/products')">
          <i class="fa fa-arrow-left pr-2"></i>
          {{ $t("message.continueShopping") }}
        </a>
      </div>
    </div>

    <div v-if="step === 2">
      <div class="page-body">
        <div class="page-content">
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
              <div class="price-amount">Ks 34,518.00</div>
            </div>
            <hr />
          </div>

          <div class="price-summary-detail">
            <div class="price-label">
              {{ $t("message.subTotal") }}
            </div>
            <div class="price-amount">Ks 34,518.00</div>
          </div>

          <div class="price-summary-detail">
            <div class="price-label">
              {{ $t("message.shippingPrice") }}
            </div>
            <div class="price-amount">Ks 0.00</div>
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

    <div class="page-body" v-if="step === 3">
    <div class="page-content">
      <div class="card">
        <div class="card-header">
          <input
            type="radio"
            name="rdpaymenttype"
            id="paymenttype26"
            value="26"
            class="custom-control-input"
            data-toggle="collapse"
          />
          <label>2c2p</label>
        </div>
        <div class="card-body">
          <ul>
            <li>
              <span style="color: rgb(47, 79, 79)">Credit/&nbsp;Debit Cards</span>
            </li>
            <li><span style="color: rgb(47, 79, 79)">MPU</span></li>
            <li><span style="color: rgb(47, 79, 79)">KBZ Pay/ AYA Pay /CB Pay</span></li>
          </ul>
        </div>
      </div>

      <div class="card">
        <div class="card-header">
          <input
            type="radio"
            name="rdpaymenttype"
            id="paymenttype26"
            value="26"
            class="custom-control-input"
            data-toggle="collapse"
          />
          <label>KBZ pay</label>
        </div>
        <div class="card-body">
          <ul>
            <li>
              <span style="color: rgb(47, 79, 79)">KBZPay (Desktop User) QR Code</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="card">
        <div class="card-header"><h3>အမှာစာ (Order) အတွက်အထူးညွှန်ကြားချက်</h3></div>
        <div class="card-body">
          <div class="form-group">
            <textarea
              name="OrdComments"
              id="OrdComments"
              rows="10"
              cols="90"
              class="form-control"
            ></textarea>
          </div>
        </div>
        <div class="col-12">
          <b>IMPORTANT</b>: စာလုံးပေါင်း နှင့် ပါဝင်သောအကြောင်းအရာများ
          မှန်ကန်ကြောင်းအတည်ပြုပါသည်။ Document Layout ကိုလည်း စိတ်ကျေနပ်ပါသည်။
          ဒီမှာပေါ်သော Document အတိုင်းသာ ပုံနှိပ်နိုင်မည်ကို သိရှိပါသည်။ Order
          မှာယူပြီးလျှင် ပြောင်းလဲမှု နှင့် စာလုံးပေါင်းမှားယွင်းမှုများကို
          ပြင်ဆင်မှုပြုလုပ်၍ မရနိုင်တော့သည်ကို သိရှိပြီး ဖြစ်ပါသည်။
        </div>
      </div>
    </div>

<div class="price-summary">
  <div class="card">
        <div class="col-lg-4 checkoutRightSide">
          <div class="shadow border-0 bg-white sticky-top">
            <h3 class="mx-3 pt-3 border-bottom pb-2">Price Summary</h3>
            <div class="productBlock mx-3 py-2 border-bottom">
              <div class="order-details order_detail_summary">
                <div
                  class="row m-0 border-bottom py-2 align-items-center kit_cart_product"
                >
                  <div class="col-2 p-0 text-center">
                    <div class="order-img mb-0">
                      <a class="thumbnail"
                        ><img
                          src="https://d3pyarv4eotqu4.cloudfront.net/xenonmmon/images/usertemplates/7324/118_3855_28142466_image_p157_common_thumb.jpg"
                          height="150"
                          width="150"
                          alt="https://d3pyarv4eotqu4.cloudfront.net/xenonmmon/images/usertemplates/7324/118_3855_28142466_image_p157_common_thumb.jpg"
                          onerror="this.parentNode.classList.add('imgPlaceHolder'); this.classList.add('noImageCls');"
                          title=""
                          class="img-fluid"
                          loading="lazy"
                      /></a>
                    </div>
                  </div>
                  <div class="col-10">
                    <div
                      class="row justify-content-between flex-nowrap narrow-gutter align-items-start"
                    >
                      <div class="col-7">
                        <p
                          class="mb-0 text-truncate"
                          title="Standard Business Cards - Promo"
                        >
                          Standard Business Cards - Promo
                        </p>
                        <p class="mb-0 short-disc">
                          <span class="text-muted">ရေတွက်</span> : 100
                        </p>
                      </div>
                      <div class="col-5 text-right pr-0">
                        <p
                          class="mb-0 d-flex align-items-center flex-wrap justify-content-end"
                        >
                          Ks17,000.00
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="row m-0 border-bottom py-2 align-items-center kit_cart_product"
                >
                  <div class="col-2 p-0 text-center">
                    <div class="order-img mb-0">
                      <a class="thumbnail"
                        ><img
                          src="https://d3pyarv4eotqu4.cloudfront.net/xenonmmon/images/orders/5760/118_3855_28142466_image_p157_common_thumb.jpg"
                          height="150"
                          width="150"
                          alt="https://d3pyarv4eotqu4.cloudfront.net/xenonmmon/images/orders/5760/118_3855_28142466_image_p157_common_thumb.jpg"
                          onerror="this.parentNode.classList.add('imgPlaceHolder'); this.classList.add('noImageCls');"
                          title=""
                          class="img-fluid"
                          loading="lazy"
                      /></a>
                    </div>
                  </div>
                  <div class="col-10">
                    <div
                      class="row justify-content-between flex-nowrap narrow-gutter align-items-start"
                    >
                      <div class="col-7">
                        <p
                          class="mb-0 text-truncate"
                          title="Standard Business Cards - Promo"
                        >
                          Standard Business Cards - Promo
                        </p>
                        <p class="mb-0 short-disc">
                          <span class="text-muted">ရေတွက်</span> : 100
                        </p>
                      </div>
                      <div class="col-5 text-right pr-0">
                        <p
                          class="mb-0 d-flex align-items-center flex-wrap justify-content-end"
                        >
                          Ks17,000.00
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="row m-0 border-bottom py-2 align-items-center kit_cart_product"
                >
                  <div class="col-2 p-0 text-center">
                    <div class="order-img mb-0">
                      <a class="thumbnail"
                        ><img
                          src="https://d3pyarv4eotqu4.cloudfront.net/xenonmmon/images/usertemplates/7380/98_3855_49888609_1_thumb.jpg"
                          height="150"
                          width="150"
                          alt="https://d3pyarv4eotqu4.cloudfront.net/xenonmmon/images/usertemplates/7380/98_3855_49888609_1_thumb.jpg"
                          onerror="this.parentNode.classList.add('imgPlaceHolder'); this.classList.add('noImageCls');"
                          title=""
                          class="img-fluid"
                          loading="lazy"
                      /></a>
                    </div>
                  </div>
                  <div class="col-10">
                    <div
                      class="row justify-content-between flex-nowrap narrow-gutter align-items-start"
                    >
                      <div class="col-7">
                        <p class="mb-0 text-truncate" title="Deluxe Business Card">
                          Deluxe Business Card
                        </p>
                        <p class="mb-0 short-disc">
                          <span class="text-muted">ရေတွက်</span> : 100
                        </p>
                      </div>
                      <div class="col-5 text-right pr-0">
                        <p
                          class="mb-0 d-flex align-items-center flex-wrap justify-content-end"
                        >
                          Ks22,500.00
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="paymentDetailsStep">
              <!-- <div class="px-3 pb-2 pt-3 coupon">
                <div class="input-group">
                  <input
                    type="text"
                    name="couponcodeprice"
                    id="couponcodeprice"
                    value=""
                    class="form-control border-right-0"
                    size="100"
                    placeholder="ကူပွန်ကုဒ်"
                  />
                  <div class="input-group-append">
                    <button
                      type="button"
                      name="redeem"
                      id="redeem"
                      value="လျှောက်ထားပါ"
                      class="btn btn btn-secondary"
                    >
                      လျှောက်ထားပါ
                    </button>
                  </div>
                </div>
                <div class="d-flex" id="couponApplied">
                  <div class="lh-1">
                    <p class="m-0 d-none" id="coupon_lable"></p>
                    <span class="success-block text-muted" id="discount_type"></span>
                  </div>
                  <button
                    type="button"
                    name="coupon_remove"
                    id="coupon_remove"
                    value="Redeem"
                    class="btn btn-link ml-auto btn-sm px-0 pt-0 pb-1 align-self-start text-danger d-none"
                  >
                    Remove
                  </button>
                </div>
                <span
                  class="error-block text-danger"
                  id="couponcodereq"
                  data-msg-require="ကူပွန်ကုဒ်လိုအပ်သည်"
                  data-msg-invalid="<span>မမှန်ကန်သောကူပွန်ကုဒ်</span>"
                  data-msg-notapplicable="<span>ကူပွန်ကို အသုံးမပြုနိုင်ပါ။</span>"
                ></span>
              </div> -->
            </div>
            <!--start display pricing-->
            <div id="cart_pricetotal" class="cart-pricetotal px-3 mt-3">
              <div class="shoppingCartStep">
                <p
                  class="d-flex justify-content-between align-items-center mb-0 pb-1 d-none"
                >
                  စုစုပေါင်း<span class="price">Ks56,500.00</span
                  ><input type="hidden" name="subtotal" id="subtotal" value="56500.00" />
                </p>
              </div>
              <div class="shippingStep">
                <p class="d-flex justify-content-between align-items-center mb-0 pb-1">
                  ပစ္စည်းပို့ဆောင်မှုစျေးနှုန်း<span class="price shipprice"
                    >Ks3,000.00</span
                  >
                </p>
              </div>
              <div class="paymentDetailsStep">
                <p class="d-flex justify-content-between align-items-center mb-0 pb-1">
                  လျှော့စျေး<span class="price couponprice">Ks0.00</span
                  ><input
                    type="hidden"
                    name="hidcouponAmt"
                    id="hidcouponAmt"
                    value="0.00"
                  /><input
                    type="hidden"
                    name="hidcouponCode"
                    id="hidcouponCode"
                    value=""
                  />
                </p>
                <p
                  class="d-flex justify-content-between align-items-center font-lg pt-2 mt-2 border-top mb-3"
                >
                  စုစုပေါင်း <strong class="totalprice">Ks59,500.00</strong
                  ><input
                    type="hidden"
                    name="total_amount_for_process_fees"
                    id="total_amount_for_process_fees"
                    value="NaN"
                  />
                </p>
                <input type="hidden" name="appliedcoupon" id="appliedcoupon" value="" />
              </div>
            </div>
            <!--end display pricing-->
            <div class="paymentDetailsStep px-3 pb-2 pb-md-0"></div>
            <!--Order Place Button-->
            <div class="paymentDetailsStep">
              <div class="ordercontinue px-3 pb-3 pt-0 w-100">
                <input
                  type="hidden"
                  name="prod_out_stock_err"
                  id="prod_out_stock_err"
                  value=""
                /><input type="hidden" name="datastep" id="datastep" value="2" /><button
                  type="submit"
                  name="BtnNext"
                  id="BtnNext"
                  value="Order Complete"
                  class="btn btn-success btn-lg btn-block ld-ext-left"
                  data-step="2"
                  data-loading-text="စောင့်ပါ <i class='fa fa-sync-alt fa-spin'></i>"
                >
                  Order Complete <span class="ld ld-ring ld-spin"></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
</div>
    </div>
  </div>
</template>
<script>
// import carts from "../const/cart.js";

export default {
  name: "AppCheckout",
  components: {},
  data() {
    return {
      cart: [],
      step: 1,
    };
  },
  methods: {
    handleContinue(data = null) {
      if (data) {
        this.step = data;
      } else if (this.step < 3) {
        this.step += 1;
      }
    },
    deleteOrder(index) {
      this.cart.splice(index, 1);
      localStorage.setItem("cartData", JSON.stringify(this.cart));
    }
  },
  mounted() {
    const data = localStorage.getItem("cartData");
    console.log("----------data", data);
    if (data && JSON.parse(data)?.length > 0) {
      this.cart = JSON.parse(data);
    }
  },
};
</script>

<style lang="scss">
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
      @media screen and (max-width: 1280px) {
        width: 100%;
        margin-bottom: 20px;
      }
      h4 {
        font-size: 18px;
        margin-bottom: 15px;
      }
    }

    .shipping-customer-detail {
      line-height: 2;
      .shipping-customer-btn {
        background: #fff;
        color: #000;
        border-color: #4c7da9;
        padding: 10px;
        cursor: pointer;
        border-radius: 8px;
        border: 1px solid #4c7da9;
        margin-right: 5px;
        &:hover {
          background: #4c7da9;
          color: #ffffff;
          border-color: #4c7da9;
        }
        i {
          margin-right: 5px;
        }
      }
    }

    .shipping-customer-btn-container {
      margin: 10px 0;
    }

    select {
      padding: 10px;
    }

    .shipping-customer-option {
      width: 95%;
    }

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
  }
  .price-summary {
    width: 30%;
    padding: 20px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    @media screen and (max-width: 767.9px) {
      width: auto;
      margin-bottom: 20px;
    }
    @media screen and (min-width: 768px) and (max-width: 1280px) {
      width: 32%;
    }
    .price-summary-detail {
      display: flex;
      justify-content: space-between;
      margin-top: 20px;
      @media screen and (max-width: 1280px) {
        display: block;
      }
      .price-product-image {
        img {
          width: 43px;
          height: 69px;
          @media screen and (max-width: 1280px) {
            width: auto;
            margin: 0 auto 10px;
          }
        }
      }
      .price-label {
        line-height: 1.5;
      }
      .price-amount {
        padding-top: 5px;
      }
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
.page-body {
  .card {
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
    padding: 1rem;
    h3 {
      font-size: 20px;
    }
    .card-body {
      padding: 0 1rem;
      ul {
        list-style-type: disc;
        caret-color: rgb(244, 121, 32);
        color: rgb(244, 121, 32);
        padding-inline-start: 40px;
        li {
          list-style-type: disc;
        }
      }
      textarea {
        width: 93%;
    padding: 10px;
    height: 100px;
    margin: 1rem 0;
      }
    }

    .sticky-top {
      position: -webkit-sticky;
      position: sticky;
      top: 0;
      z-index: 1;
      h3 {
        padding: 1rem 0 0.5rem;
        margin: 0 1rem 0.5rem;
        border-bottom: 1px solid #dee2e6;
      }
      .productBlock {
        padding: 0.5rem 0;
        margin: 0 1rem;
      }
      .order_detail_summary {
        max-height: 230px;
        overflow-y: auto;
        overflow-x: hidden;
        .row {
          padding-top: 0.5rem;
          padding-bottom: 0.5rem;
          &:first-child {
            padding-top: 0;
          }
        }

        .kit_cart_product {
          display: flex;
          align-items: center;
          border-bottom: 1px solid #dee2e6 !important;
          .col-2 {
            -ms-flex: 0 0 16.666667%;
            flex: 0 0 16.666667%;
            max-width: 16.666667%;
          }
          .col-10 {
            -ms-flex: 0 0 83.333333%;
            flex: 0 0 83.333333%;
            max-width: 83.333333%;
            padding-right: 15px;
            padding-left: 15px;
          }
          .align-items-start {
            display: flex;
            align-items: flex-start;
            .col-7 {
              -ms-flex: 0 0 58.333333%;
              flex: 0 0 58.333333%;
              max-width: 58.333333%;
            }
            .col-5 {
              -ms-flex: 0 0 41.666667%;
              flex: 0 0 41.666667%;
              max-width: 41.666667%;
              @media screen and (max-width: 767.9px) {
      max-width: 53.666667%;
    }
            }
          }
          .justify-content-end {
            display: flex;
            -ms-flex-pack: end !important;
            justify-content: flex-end !important;
            padding-right: 35px;
          }
          .justify-content-between {
            -ms-flex-pack: justify;
            justify-content: space-between;
          }
        }
        .thumbnail {
          border: none !important;
          max-width: 150px !important;
          max-height: 150px !important;
          display: block;

          img {
            max-height: 150px;
            border: 1px solid #dee2e6;
            height: auto;
          }
        }
      }
      // .coupon {
      //   position: relative;
      //   padding: 1rem 0;
      //   .input-group {
      //     position: relative;
      //     display: -ms-flexbox;
      //     display: flex;
      //     -ms-flex-wrap: wrap;
      //     flex-wrap: wrap;
      //     -ms-flex-align: stretch;
      //     align-items: stretch;
      //     width: 100%;
      //   }
      //   button {
      //     border-top-left-radius: 0;
      //     border-bottom-left-radius: 0;
      //     position: relative;
      //     z-index: 2;
      //     background: #4c7da9;
      //     border-color: #4c7da9;
      //     color: #fff;
      //   }
      //   .btn:not(:disabled):not(.disabled) {
      //     cursor: pointer;
      //   }
      // }
      .cart-pricetotal {
        padding: 1rem 0;
        margin-top: 1rem;
      }
      .align-items-center {
    -ms-flex-align: center !important;
    align-items: center !important;
}

.justify-content-between {
    -ms-flex-pack: justify !important;
    justify-content: space-between !important;
}
.d-flex {
    display: -ms-flexbox !important;
    display: flex !important;
}
button, input {
    overflow: visible;
}
.border-top {
    border-top: 1px solid #dee2e6 !important;
}
.btn-success {
  background: #003462;
    border-color: #003462;
    padding: .5rem 1rem;
    font-size: 1.25rem;
    line-height: 1.5;
    border-radius: .3rem;
    border: 1px solid transparent;
    color: #fff;
    width: 100%;
cursor: pointer;
}
.text-truncate {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}


    }
  }
}
.custom-control {
  display: flex;
  margin-top: 10px;
}
</style>
