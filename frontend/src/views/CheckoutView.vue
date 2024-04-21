<template>
  <div class="container">
    <div class="page-header d-flex flex-md-nowrap flex-wrap justify-content-between">
      <h1 class="cart_title">{{ $t('message.shoppingCartTitle') }}</h1>
      <div
        class="d-flex justify-content-end align-items-center steps my-2 mt-md-0 py-2 py-md-0"
      >
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
  </div>
</template>
<script>
export default {
  name: "AppCheckout",
  components: {},
  data() {
    return {};
  },
  methods: {},
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
</style>
