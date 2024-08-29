<template>
  <div class="container" id="contact">
    <h2>{{ $t("message.contactus") }}</h2>
    <div class="contact">
      <div class="row">
        <div class="address">
          <p>
            <span>Ci Ci Company Limited</span><br />
            No.565, Mann Aung Street, 3 Man Pyay Ward, Thaketa Township, Yangon.<br />
            Tel : 09254006394, 09400065339<br />
            Email : <a href="mailto:cici.offset@gmail.com">cici.offset@gmail.com</a>
          </p>
          <div class="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d954.9682909828629!2d96.19654627519941!3d16.782984796422678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c1edb5481416c5%3A0xf30d85e67a8420c6!2sCi%20Ci%20Printing%20Services!5e0!3m2!1sen!2smm!4v1716029567315!5m2!1sen!2smm"
              width="100%"
              height="400"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <div class="form">
        <p class="d-inline-block">{{ $t("message.formMsg") }}</p>
        <div class="form-row">
          <div class="col">
            <div class="form-group">
              <label for="" class="label">{{ $t("message.company") }}</label>
              <div class="form-data">
                <input
                  type="text"
                  required
                  name="company"
                  :placeholder="$t('message.company')"
                  v-model="company"
                />
              </div>
            </div>
            <div class="form-group">
              <label for="" class="label"
                >{{ $t("message.fullName") }} <span>*</span></label
              >
              <div class="form-data">
                <input
                  type="text"
                  required
                  name="fullName"
                  v-model="fullName"
                  :placeholder="$t('message.fullName')"
                />
              </div>
            </div>
          </div>
          <div class="col">
            <div class="form-group">
              <label for="" class="label">{{ $t("message.email") }}<span>*</span></label>
              <div class="form-data">
                <input
                  type="text"
                  required
                  name="email"
                  v-model="email"
                  :placeholder="$t('message.email')"
                />
              </div>
            </div>
            <div class="form-group">
              <label for="" class="label">{{ $t("message.phone") }}</label>
              <div class="form-data">
                <input
                  type="text"
                  required
                  name="phone"
                  v-model="phone"
                  :placeholder="$t('message.phone')"
                />
              </div>
            </div>
          </div>
          <div class="col">
            <div class="form-group">
              <label for="" class="label">{{ $t("message.department") }}</label>
              <div class="form-data">
                <select v-model="department">
                  <option value="" selected disabled hidden>Select Departmant</option>
                  <option v-for="item in departments" :key="item?.id" :value="item?.name">{{ item?.name }}</option>
                </select>
              </div>
            </div>
            <div class="form-group">
              <label for="" class="label">{{ $t("message.orderNo") }}</label>
              <div class="form-data">
                <input
                  type="text"
                  required
                  name="orderNo"
                  v-model="orderNo"
                  :placeholder="$t('message.orderNo')"
                />
              </div>
            </div>
          </div>
          <div class="form-group textarea">
            <label for="" class="label">{{ $t("message.msg") }} <span>*</span></label>
            <textarea
              required
              name="msg"
              v-model="msg"
              :placeholder="$t('message.msg')"
              cols="20"
              rows="5"
            ></textarea>
          </div>
          <button class="submit-btn" @click="submit()">{{ $t("message.submit") }}</button>
          <button class="reset-btn" @click="reset()">{{ $t("message.reset") }}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";
import { contactUs } from "@/services/offset.service";

export default {
  name: "AppContactUs",
  components: {},
  data() {
    return {
      email: "",
      company: "",
      fullName: "",
      phone: "",
      department: "",
      orderNo: "",
      msg: "",
      departments: [
        {
          id: 1,
          name: "Graphic Design"
        },
        {
          id: 2,
          name: "Customer Assistance"
        },
        {
          id: 3,
          name: "Direct Mailing Question"
        },
        {
          id: 4,
          name: "Testimonials"
        },
        {
          id: 5,
          name: "Request Reorder"
        },
      ]
    };
  },
  methods: {
    async submit() {
      if (!this.email) {
        Swal.fire({
          position: "bottom",
          icon: "error",
          title: "Email Address is required",
          showConfirmButton: false,
          // timer: 3000,
          timerProgressBar: true,
          toast: true,
        });
      } else if (!this.fullName) {
        Swal.fire({
          position: "bottom",
          icon: "error",
          title: "Full Name is required",
          showConfirmButton: false,
          // timer: 3000,
          timerProgressBar: true,
          toast: true,
        });
      } else if (!this.msg) {
        Swal.fire({
          position: "bottom",
          icon: "error",
          title: "Message is required",
          showConfirmButton: false,
          // timer: 3000,
          timerProgressBar: true,
          toast: true,
        });
      }
      const payload = {
        email: this.email,
        company: this.company,
        fullName: this.fullName,
        phone: this.phone,
        department: this.department,
        orderNo: this.orderNo,
        msg: this.msg,
      };
      const res = await contactUs(payload);
      if (res?.data?.message) {
        Swal.fire({
          position: "bottom",
          icon: "error",
          title: "ContactUs Message is sent to admin email.",
          showConfirmButton: false,
          // timer: 3000,
          timerProgressBar: true,
          toast: true,
        });
        this.$router.push("/home");
      } else {
        Swal.fire({
          position: "bottom",
          icon: "error",
          title: "Error is occurred.",
          showConfirmButton: false,
          // timer: 3000,
          timerProgressBar: true,
          toast: true,
        });
      }
    },
    reset() {
      this.email = "";
      this.company = "";
      this.fullName = "";
      this.phone = "";
      this.department = "";
      this.orderNo = "";
      this.msg = "";
    },
  },
};
</script>

<style lang="scss">
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
    .contact {
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
          width: 100%;
          margin-right: 30px;
          @media screen and (min-width: 768px) and (max-width: 1000px) {
            display: block;
            margin-right: 0;
          }
          @media screen and (max-width: 767.9px) {
            display: block;
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
              margin-bottom: 10px;
            }
          }
          .map {
            width: 100%;
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
        .reset-btn {
          padding: 9px;
          font-size: 15px;
          background: #fff;
          color: #000;
          cursor: pointer;
          border-radius: 5px;
          &:hover {
            color: #f47920;
          }
        }
      }
    }
  }
}
</style>
