<template>
  <div class="container" id="login">
    <h2>Login</h2>
    <div class="login">
      <!-- <div class="page-sub-header"><h3>Returning Customers</h3></div> -->
      <div class="form">
        <p class="d-inline-block">{{ $t('message.formMsg') }}</p>
        <div class="form-row">
          <div class="col">
            <div class="form-group">
              <label for="" class="label">{{ $t('message.email') }} <span>*</span></label>
              <div class="form-data">
                <input type="text" required name="email" :placeholder="$t('message.email')" v-model="email" />
              </div>
            </div>
          </div>

          <div class="form-row">
            <div class="col">
              <div class="form-group">
                <label for="" class="label">{{ $t('message.password') }} <span>*</span></label>
                <div class="form-data">
                  <input type="password" required name="password" :placeholder="$t('message.password')" v-model="password" />
                </div>
              </div>
            </div>
          </div>
          <div class="btn-container">
            <button class="submit-btn" @click="submit()">Login</button>
            <a class="forget-password-btn"
              data-type="iframe"
              data-width="500"
              data-height="350"
              data-toggle="fancybox"
              data-fancybox=""
              @click="$router.push('/forget-password')">{{ $t('message.forgetPassword') }}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";
import { login } from "@/services/offset.service";

export default {
  name: "AppLoginRegister",
  components: {},
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    async submit() {
      const payload = {
        email: this.email,
        password: this.password
      };
      const res = await login(payload);
      if (res?.data?.token) {
        const token = res?.data?.token;
        const user = res?.data?.user;
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
        this.$router.push("/home");
      } else {
        Swal.fire({
            position: "bottom",
            icon: "error",
            title: "Username or Password is incorrect.",
            showConfirmButton: false,
            // timer: 3000,
            timerProgressBar: true,
            toast: true,
          });
      }
    }
  },
};
</script>

<style scoped lang="scss">
.wrapper {
  .container {
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
    .login {
      max-width: 720px;
      margin: 60px auto 0;
      @media screen and (max-width: 767.9px) {
        max-width: 100%;
        margin: 50px auto 0;
      }
      .page-sub-header {
        color: #003462;
        margin-bottom: 4%;
        h3 {
          font-size: 1.375rem;
          font-weight: 600;
          text-align: left;
        }
      }
      .row {
        display: block;
        margin-bottom: 30px;
        @media screen and (max-width: 767.9px) {
          display: block;
        }
      }
      .form {
        .d-inline-block {
          margin-bottom: 20px;
        }
        .form-row {
          .col {
            display: block;
          }
          .btn-container {
            display: flex;
            width: 100%;
            justify-content: space-between;
          }
        }
        .form-group {
          width: 100%;
          margin: 0 20px 20px 0;
          label {
            display: block;
            margin-bottom: 10px;
            span {
              color: #ff0018;
            }
          }
          input {
            width: calc( 100% - 22px);
            padding: 10px;
            border: 1px solid rgba(0, 0, 0, 0.25);
            border-radius: 5px;
          }
          &:last-child {
            margin: 0 0 20px 0;
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
      .forget-password-btn {
        padding: 9px;
        margin-right: 10px;
        font-size: 15px;
        color: #fff;
        cursor: pointer;
        border-radius: 5px;
        background: #000;
        &:hover {
          color: #f47920;
          background: #fff;
          border: 2px solid #000;
        }
      }
    }
  }
}
</style>
