<template>
  <div class="container">
    <h2>{{ $t('message.forgetPassword') }}</h2>
    <div class="forget-password">
      <div class="form">
        <p>To obtain your password please enter the e-mail address registered with us. Your password will be sent immediately.</p>
        <div class="form-row">
          <div class="form-group">
            <label for="" class="label">Email <span>*</span></label>
            <div class="form-data">
              <input type="text" placeholder="Email" />
            </div>
          </div>
          <button class="submit-btn">{{ $t('message.submit') }}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppForgetPassword",
  components: {},
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss">
  .forget-password {
    max-width: 720px;
    margin: 60px auto 0;
    @media screen and (max-width: 767.9px) {
      max-width: 100%;
      margin: 50px auto 0;
    }
    p {
      line-height: 1.5;
    }
    .form-group {
      margin: 20px 0;
      input {
        width: calc(100% - 22px);
        padding: 10px;
        border: 1px solid rgba(0, 0, 0, 0.25);
        border-radius: 5px;
      }
      label {
        display: block;
        margin-bottom: 10px;
        span {
          color: #ff0018;
        }
      }
    }
    .submit-btn {
      padding: 9px;
      margin-right: 10px;
      font-size: 15px;
      background: #000;
      color: #fff;
      cursor: pointer;
      border-radius: 5px;
      &:hover {
        color: #f47920;
        background: #fff;
      }
    }
  }
</style>