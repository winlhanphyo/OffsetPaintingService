<template>
  <div class="container" id="register">
    <h2>Sign Up</h2>
    <div class="register">
      <div class="page-sub-header">
        <h3 class="pb-1 m-0">{{ $t("message.registerTitle") }}</h3>
        <small class="text-danger">* {{ $t("message.requiredInfo") }}</small>
      </div>

      <div class="form">
        <p class="d-inline-block">{{ $t("message.formMsg") }}</p>
        <div class="form-row">
          <div class="col">
            <div class="form-group">
              <label for="" class="label"
                >{{ $t("message.firstName") }} <span>*</span></label
              >
              <div class="form-data">
                <input
                  type="text"
                  v-model="firstName"
                  required
                  :placeholder="$t('message.firstName')"
                />
              </div>
            </div>
            <div class="form-group">
              <label for="" class="label">{{ $t("message.lastName") }}</label>
              <div class="form-data">
                <input
                  type="text"
                  v-model="lastName"
                  required
                  :placeholder="$t('message.lastName')"
                />
              </div>
            </div>
          </div>
          <div class="col">
            <div class="form-group">
              <label for="" class="label"
                >{{ $t("message.address") }} <span>*</span></label
              >
              <div class="form-data">
                <input
                  type="text"
                  v-model="address"
                  required
                  :placeholder="$t('message.address')"
                />
              </div>
            </div>
            <div class="form-group">
              <label for="" class="label">{{ $t("message.phone") }} <span>*</span></label>
              <div class="form-data">
                <input
                  type="text"
                  v-model="phone"
                  required
                  :placeholder="$t('message.phone')"
                />
              </div>
            </div>
          </div>
        </div>

        <div class="login-form">
          <h3 class="page-sub-header">Login Information</h3>
          <div class="row">
            <div class="col col-blk">
              <div class="form-group">
                <label for="email" class="col-form-label"
                  >{{ $t("message.email") }} <span>*</span></label
                >
                <input
                  type="text"
                  name="email"
                  id="email"
                  v-model="email"
                  class="email_validate form-control"
                  data-rule-required="true"
                  data-msg-required="Email ID is required"
                  data-rule-email="true"
                  data-msg-email="Invalid email ID"
                />
              </div>
              <div class="form-group">
                <label for="password" class="col-form-label"
                  >{{ $t("message.password") }} <span>*</span></label
                >
                <input
                  type="password"
                  name="password"
                  id="password"
                  v-model="password"
                  class="form-control"
                  autocomplete="off"
                  data-rule-required="true"
                  data-msg-required="Password is required"
                  data-rule-validpassword="true"
                  data-msg-validpassword="Enter only Alphanumeric, dash or underscore"
                />
              </div>
              <div class="form-group">
                <label for="confirmpassword" class="col-form-label"
                  >{{ $t("message.confirmPassword") }} <span>*</span></label
                >
                <input
                  type="password"
                  name="confirmpassword"
                  id="confirmpassword"
                  v-model="confirmpassword"
                  value=""
                  class="form-control"
                  autocomplete="off"
                  data-rule-required="true"
                  data-msg-required="Confirm password is required"
                />
              </div>
              <!-- <div class="form-row">
                <div class="col">
                  <div
                    class="g-recaptcha"
                    data-sitekey="6Lc8vMsZAAAAAIbltLWaXmf74bwG0j3Tfh_QSe79"
                    data-widget-id="0"
                  >
                    <div style="width: 304px; height: 78px">
                      <div>
                        <iframe
                          title="reCAPTCHA"
                          width="304"
                          height="78"
                          role="presentation"
                          name="a-15hsdskx3m0y"
                          frameborder="0"
                          scrolling="no"
                          sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation"
                          src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6Lc8vMsZAAAAAIbltLWaXmf74bwG0j3Tfh_QSe79&amp;co=aHR0cHM6Ly93d3cueGVub25tbS5jb206NDQz&amp;hl=en&amp;v=rz4DvU-cY2JYCwHSTck0_qm-&amp;size=normal&amp;cb=rwxlhj6dvarp"
                        ></iframe>
                      </div>
                      <textarea
                        id="g-recaptcha-response"
                        name="g-recaptcha-response"
                        class="g-recaptcha-response"
                        style="
                          width: 250px;
                          height: 40px;
                          border: 1px solid rgb(193, 193, 193);
                          margin: 10px 25px;
                          padding: 0px;
                          resize: none;
                          display: none;
                        "
                      ></textarea>
                    </div>
                    <iframe style="display: none"></iframe>
                  </div>
                  <span class="error-block text-danger"></span>
                </div>
              </div> -->
              <input
                type="hidden"
                name="referrer_page"
                id="referrer_page"
                value="https://www.xenonmm.com/user_login.php"
              />
              <!-- <div class="my-2">
                <div class="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    name="newsLetter"
                    id="newsLetter"
                    value="1"
                    class="custom-control-input"
                    tabindex="10"
                    data-labelposition="right"
                  /><label class="custom-control-label" for="newsLetter"
                    >Send newsletters</label
                  >
                </div>
              </div> -->
            </div>
            <div class="col col-blk">
              <p>
                <a
                  data-fancybox-type="iframe"
                  data-toggle="fancybox"
                  href="/privacy_policy.html?popup=1"
                  >Xenon Company Limited Privacy and Security Policy</a
                >. Please double check the e-mail address you have entered. This is the
                address to which we will send your order and shipping confirmations. It
                also serves as your unique username. By clicking on the 'Submit' button,
                you agree to Xenon Company Limited terms of use.<br /><br />
                For a complete description, please read our
                <a
                  data-fancybox-type="iframe"
                  data-toggle="fancybox"
                  href="/terms_of_use.html?popup=1"
                  >Terms of Use</a
                >
              </p>
            </div>
          </div>
        </div>
      </div>
      <button class="submit-btn" @click="submit()">{{ $t("message.submit") }}</button>
      <button class="reset-btn" @click="reset()">{{ $t("message.reset") }}</button>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";
import { register } from "@/services/offset.service";

export default {
  name: "AppRegister",
  components: {},
  data() {
    return {
      firstName: "",
      lastName: "",
      address: "",
      phone: "",
      email: "",
      password: "",
      confirmpassword: "",
      formArr: ["firstName", "lastName", "address", "phone", "email", "password", "confirmpassword"],
      errorArr: [
        "FirstName is not valid",
        "LastName is not valid",
        "Address is not valid",
        "Phone is not valid",
        "Email is not valid",
        "Password is not valid",
        "Confirm Password is not valid",
      ],
    };
  },
  methods: {
    async submit() {
      const obj = this;
      for (let i = 0; i < this.formArr.length; i++) {
        const dist = obj.formArr[i];
        if (!obj[dist]) {
          Swal.fire({
            position: "bottom",
            icon: "error",
            title: this.errorArr[i],
            showConfirmButton: false,
            timerProgressBar: true,
            toast: true,
          });
        } else if (dist === "confirmpassword") {
          if (obj.password !== obj.confirmpassword) {
            Swal.fire({
              position: "bottom",
              icon: "error",
              title: "Password and Confirm Password must be same.",
              showConfirmButton: false,
              timerProgressBar: true,
              toast: true
            });
          }
        }
      }
      const payload = {
        firstName: this.firstName,
        lastName: this.lastName,
        phone: this.phone,
        email: this.email,
        password: this.password,
        address: this.address
      };
      const res = await register(payload);
      if (res?.data?.message) {
        Swal.fire({
          position: "bottom",
          icon: "success",
          title: res?.data?.message,
          showConfirmButton: false,
          // timer: 3000,
          timerProgressBar: true,
          toast: true,
        });
        this.$router.push("/home");
      }
    },
    reset() {
      const obj = this;
      this.formArr.map((dist) => {
        obj[dist] = "";
      });
    },
  },
};
</script>

<style lang="scss">
.wrapper {
  .container {
    .page-sub-header {
      color: #003462;
      border-bottom: 1px solid #dee2e6 !important;
      margin-bottom: 1rem !important;
    }
    @media (min-width: 576px) {
      .page-sub-header {
        display: flex !important;
        -ms-flex-pack: justify !important;
        justify-content: space-between !important;
        .text-danger {
          color: #dc3545 !important;
        }
      }
    }
    .breadcrumb-container {
      .breadcrumb {
        background-color: rgba(0, 0, 0, 0);
        padding: 0.5rem 0.5rem 0.5rem 0;

        display: -ms-flexbox;
        display: flex;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        padding: 0.75rem 1rem;
        margin-bottom: 1rem;
        list-style: none;
        background-color: #e9ecef;
        border-radius: 0.25rem;
        a {
          color: #003462;
          -webkit-transition: all 0.3s ease;
          -moz-transition: all 0.3s ease;
          -ms-transition: all 0.3s ease;
          -o-transition: all 0.3s ease;
          transition: all 0.3s ease;
        }
        li .a {
          cursor: pointer;
        }
        li.active .a {
          color: #f47920;
          cursor: text;
        }
      }
      .breadcrumb.breadcrumb-arrow4 > li + li:before {
        color: #ccc;
        content: "/";
        display: inline-block;
        position: static;
        font-family: "Font Awesome 5 Pro";
        padding: 0 0.5rem;
        font-weight: 600;
      }
    }
    .register {
      margin-top: 60px;
      @media screen and (max-width: 767.9px) {
        margin-top: 50px;
      }
      .row {
        display: flex;
        justify-content: center;
        margin-bottom: 30px;
        @media screen and (max-width: 767.9px) {
          display: block;
        }
        .address {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: calc(100% / 2);
          margin-right: 30px;
          @media screen and (min-width: 768px) and (max-width: 1000px) {
            display: block;
            width: 100%;
          }
          @media screen and (max-width: 767.9px) {
            display: block;
            width: 100%;
            margin: 0 0 20px;
          }
          p {
            margin-right: 10px;
            font-size: 13px;
            line-height: 1.8;
            span {
              color: #ff8c00;
              font-size: 15px;
            }
            a {
              &:hover {
                color: #ff8c00;
              }
            }
            @media screen and (max-width: 767.9px) {
              margin-right: 0;
            }
          }
          &:last-child {
            margin-right: 0;
          }
          &.mdy-address {
            width: 57%;
            @media screen and (max-width: 767.9px) {
              width: 100%;
            }
          }
          iframe {
            @media screen and (min-width: 768px) and (max-width: 1440px) {
              width: 100%;
            }
            @media screen and (max-width: 767.9px) {
              width: 100%;
            }
          }
        }
      }
      .form {
        .d-inline-block {
          margin-bottom: 20px;
        }
        .form-row {
          .col {
            display: flex;
            justify-content: space-between;
            @media screen and (max-width: 767.9px) {
              display: block;
            }
          }
        }
        .form-group {
          width: calc(100% / 2);
          margin: 0 20px 20px 0;
          @media screen and (max-width: 767.9px) {
            width: 100%;
            margin: 0 0 20px 0;
          }
          label {
            display: block;
            margin-bottom: 10px;
            span {
              color: #ff0018;
            }
          }
          input {
            width: calc(100% - 22px);
            padding: 10px;
            border: 1px solid rgba(0, 0, 0, 0.25);
            border-radius: 5px;
          }
          &:last-child {
            margin: 0 0 20px 0;
          }
          select {
            width: 100%;
            padding: 10px;
            border: 1px solid rgba(0, 0, 0, 0.25);
            border-radius: 5px;
          }
          &.textarea {
            width: 100%;
            textarea {
              width: calc(100% - 44px);
              padding: 20px;
              resize: none;
              border: 1px solid rgba(0, 0, 0, 0.25);
              border-radius: 5px;
            }
          }
        }
        .col-blk {
          width: calc(100% / 2);
          @media screen and (max-width: 767.9px) {
            width: 100%;
          }
          .form-group {
            width: auto;
            @media screen and (max-width: 767.9px) {
              display: block;
              margin: 0 0 20px 0;
            }
          }
          p {
            line-height: 1.8;
          }
        }
      }
      .my-2 {
        @media screen and (max-width: 767.9px) {
          margin: 20px 0;
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
        border: 2px solid #000;
        &:hover {
          background: #009BDF;
          border: 2px solid #009BDF;
        }
      }
      .reset-btn {
        padding: 9px;
        font-size: 15px;
        background: #fff;
        color: #000;
        cursor: pointer;
        border-radius: 5px;
        &:hover {
          color: #fff;
          background: #009BDF;
          border: 2px solid #009BDF;
        }
      }
    }
  }
}
</style>
