<template>
  <div class="container">
    <div class="page-header d-flex flex-md-nowrap flex-wrap justify-content-between">
      <h1 class="cart_title">{{ $t('message.shoppingCartTitle') }}</h1>
      <div
        class="d-flex justify-content-end align-items-center steps my-2 mt-md-0 py-2 py-md-0">
        <ul class="list-inline mb-0">
          <li class="list-inline-item visited">
            <a
              href="javascript:void(0)"
              class="checkout_steps cart_step active"
              data-show="cart"
              data-step="1"
              ><span class="orderstep border bg-primary">1</span
              ><span class="step_title">{{ $t('message.shoppingCartStep1') }}</span></a
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
              href="javascript:void(0)"
              class="checkout_steps shipping_step"
              data-show="shipping"
              data-step="2"
              ><span class="orderstep border">2</span
              ><span class="step_title">{{ $t('message.shoppingCartStep2') }}</span></a
            >
          </li>
          <li class="list-inline-item disabled">
            <a
              href="javascript:void(0)"
              class="checkout_steps payment_step"
              data-show="payment"
              data-step="3"
              ><span class="orderstep border">3</span
              ><span class="step_title">{{ $t('message.shoppingCartStep3') }}</span></a
            >
          </li>
        </ul>
      </div>
      

      
    </div>
    <div class="page-body">
      <div>
        <div class="product-container" v-for="data in cart" :key="data.id">
        <div class="product-img">
          <img :src="data.image" />
        </div>

        <div class="product-info">

          <div class="product-info-header">
            <div class="product-title">
              <h3>
                Standard Business Cards - Promo
              </h3>            
            </div>
            <div class="product-count">
              100 {{ $t('message.qty') }}
            </div>
            <div class="product-amount">
              KS14,850.00
            </div>
          </div>

          <div class="product-info-category">
            (Business Cards)
          </div>

          <div class="product-info-detail">
            <div class="product-info-item">
              <label>{{ $t('message.jobName') }}:</label>
              <div>IBC_028</div>
            </div>

            <div class="product-info-detail">
              <div class="product-info-item">
                <label>{{ $t('message.size') }}:</label>
                <div>
                  3.5" x 2.1" - Standard Business Card Size
                </div>
              </div>
            </div>


            <div class="product-info-detail">
              <div class="product-info-item">
                <label>{{ $t('message.material') }}:</label>
                <div>
                  Artcard 250GSM
                </div>
              </div>
            </div>

            <div class="product-info-detail">
              <div class="product-info-item">
                <label>{{ $t('message.printingType') }}:</label>
                <div>
                  Digital Press
                </div>
              </div>
            </div>

            <div class="product-info-detail">
              <div class="product-info-item">
                <label>{{ $t('message.printingSides') }}:</label>
                <div>
                  One Side
                </div>
              </div>
            </div>

            <div class="product-info-detail">
              <div class="product-info-item">
                <label>{{ $t('message.lamination') }}:</label>
                <div>
                  None
                </div>
              </div>
            </div>

          </div>

          <hr />

          <a href="#">{{ $t('message.editOrder') }}</a>
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
            {{ $t('message.subTotal') }}
          </div>
          <div class="price-amount">
            Ks34,518.00
          </div>
        </div>

        <button>{{ $t('message.continue') }}</button>
        <a href="#">
          <i class="fa fa-arrow-left pr-2"></i>
          {{ $t('message.continueShopping') }}
        </a>
      </div>
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
      cart: carts
    };
  },
  methods: {},
  mounted() {
    console.log("----cart-----", this.cart, carts);
  }
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
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
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
  }

  .product-img {
    img {
      width: 100px;
      height: 100px;
      object-fit: cover;
    }
  }

  .price-summary {
    height: 150px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;

    .price-summary-detail {
      display: flex;
    }
    button {
      width: 100%;
      background: #f47920;
      border-color: #f47920;
      padding: .5rem 1rem;
      font-size: 1.25rem;
      line-height: 1.5;
      border-radius: .3rem;
    }
    i {
      width: 7px !important;
      background-color: #e4e4e4;
    }
  }
}
</style>
