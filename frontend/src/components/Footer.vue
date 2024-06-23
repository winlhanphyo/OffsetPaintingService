<template>
  <footer>
    <div class="footer-inner">
      <div class="ft-serch">
        <div class="search-form">
          <input
            type="search"
            name="top_search"
            id="subemail"
            value=""
            class="form-control"
            placeholder="Enter email ID"
            autocomplete="off"
            data-searched=""
          />
          <button>Subscribe</button>
        </div>
        <p>Subscribe Here to receive promotional offers.</p>
      </div>
      <div class="row">
        <div class="col">
          <a href=""><img src="@/assets/images/common/logo.png" alt="" /></a>
          <p class="ft-txt">
            Xenon presents the Premium Online Printing Platform for obtaining personal,
            promotional, commercial, and informational print products at the best prices!
          </p>
        </div>
        <div class="col contact-us">
          <h3>Contact Us</h3>
          <ul>
            <li class="address">
              <a
                href="https://www.google.com/maps/place//data=!4m2!3m1!1s0x30c18cfb170bb19f:0xcfa5696f4b738826?source=g.page.share"
                target="_blank"
              >
                <span class="material-symbols-outlined"> location_on </span>
                <span>
                  <b>Ci Ci Company Limited</b><br />
                  Main address :<br />
                  No.565, Mann Aung Street<br />
                  3 Man Pyay Ward<br />
                  Thaketa Township, Yangon.
                </span>
              </a>
            </li>
            <li class="phone">
              <a href="tel:09254006394"
                ><span class="material-symbols-outlined">phone_iphone</span
                ><span>09 254006394</span></a
              >
              <a href="tel:09400065339"
                ><span class="material-symbols-outlined">phone_iphone</span
                ><span>09 400065339</span></a
              >
            </li>
            <li class="mail">
              <a href="mailto:cici.offset@gmail.com"
                ><span class="material-symbols-outlined"> mail </span>cici.offset@gmail.com</a
              >
            </li>
          </ul>
        </div>
        <div class="col extra-link">
          <div class="extra">
            <p class="title">Follow Us:</p>
            <ul class="row">
              <li>
                <a href="https://www.facebook.com/cicioffsetprinting" title="Facebook"
                  ><i class="fab fa-facebook-f"></i
                ></a>
              </li>
              <li>
                <a href="#viber"><span class="material-symbols-outlined">wifi_calling_1</span></a>
              </li>
            </ul>
          </div>
          <div class="extra payment">
            <p class="title">We Accept:</p>
            <ul class="row">
              <li>
                <a title="mpu">
                  <img
                    alt="mpu"
                    class="img-fluid"
                    src="https://d3pyarv4eotqu4.cloudfront.net/xenonmmon/images/contentimages/images/MPU.jpg"
                  />
                </a>
              </li>
              <li>
                <a title="kbzpay">
                  <img
                    alt="kbz-pay"
                    class="img-fluid"
                    src="https://d3pyarv4eotqu4.cloudfront.net/xenonmmon/images/contentimages/images/KBZ.jpg"
                  />
                </a>
              </li>
              <li>
                <a title="aya bank">
                  <img
                    alt="aya-bank"
                    class="img-fluid"
                    src="https://d3pyarv4eotqu4.cloudfront.net/xenonmmon/images/contentimages/images/AYA.jpg"
                  />
                </a>
              </li>
              <li>
                <a title="cb bank">
                  <img
                    alt="cb bank"
                    class="img-fluid"
                    src="https://d3pyarv4eotqu4.cloudfront.net/xenonmmon/images/contentimages/images/CB_Bank.jpg"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="ft-copyright">
      <div class="footer-inner">
        <div class="row ft-blk">
          <p>Copyright &copy; Ci Ci., Ltd. All Rights Reserved.</p>
          <ul class="terms">
            <li><a href="">Privacy</a></li>
            <li><a href="">Terms & Conditions</a></li>
          </ul>
        </div>
      </div>
    </div>
    <ul class="icon-fixed">
      <li>
        <a href="https://www.facebook.com/cicioffsetprinting">
          <img src="@/assets/images/common/facebook.png" alt="facebook">
        </a>
      </li>
      <li class="tooltip">
        <a href="viber://chat?number=+959254006394">
          <img src="@/assets/images/common/viber.png" alt="viber">
          <span class="tooltiptext">+959 254006394</span>
        </a>
      </li>
      <li class="tooltip">
        <a href="https://t.me/+959254006394" target="_blank">
          <img src="@/assets/images/common/telegram.png" alt="telegram">
          <span class="tooltiptext">+959 254006394</span>
        </a>
      </li>
      <li class="tooltip">
        <a href="tel:+959254006394">
          <img src="@/assets/images/common/phone.png" alt="phone">
          <span class="tooltiptext">+959 254006394</span>
        </a>
      </li>
    </ul>
  </footer>
</template>

<script>
export default {
  name: "AppFooter",
  components: {},
  data() {
    return {
      activeMenu: false,
    };
  },
  methods: {},
};
</script>

<style lang="scss">
@import "@/assets/scss/mixins.scss";

// $primary-color: #2c2c2c;  // Tomato color

footer {
  padding: 40px 0 0;
  background-color: #2c2c2c;
  color: #fff;
  a {
    color: #fff;
  }
  .footer-inner {
    max-width: 1440px;
    margin: 0 auto;
    @media screen and (min-width: 768px) and (max-width: 1440px) {
      max-width: 95%;
    }
    @media screen and (max-width: 767.9px) {
      max-width: 95%;
    }
    h3 {
      color: #0097dc;
    }
    .ft-serch {
      margin-bottom: 30px;
      .search-form {
        position: relative;
        display: flex;
        justify-content: flex-end;
        input {
          padding: 15px 35px 15px 15px;
          border-radius: 10px;
          flex: 0 0 35%;
          @media screen and (min-width: 768px) and (max-width: 1440px) {
            flex: 0 0 50%;
          }
          @media screen and (max-width: 767.9px) {
            flex: auto;
          }
        }
        button {
          content: "";
          position: absolute;
          top: 1px;
          right: 1px;
          bottom: 0;
          height: 47px;
          background: none;
          border: none;
          cursor: pointer;
          background: #0097dc;
          border-radius: 0 8px 8px 0;
          color: #fff;
          font-weight: 700;
          text-transform: uppercase;
          &:hover {
            opacity: 0.5;
          }
        }
      }
      p {
        padding-top: 5px;
        text-align: right;
      }
    }

    .row {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      .col {
        width: 21%;
        @media screen and (max-width: 767.9px) {
          width: 100%;
        }
        .ft-txt {
          margin-top: 10px;
          line-height: 1.8;
          @media screen and (max-width: 767.9px) {
            margin-bottom: 10px;
          }
        }
        &.contact-us {
          li {
            margin-bottom: 10px;
          }
          .material-symbols-outlined {
            font-size: 20px;
            margin-right: 5px;
          }
          a {
            display: flex;
            line-height: 1.5;
            &:hover {
              color: #0097dc;
            }
          }
          a[href^="tel"] {
            text-decoration: none;
            pointer-events: none;
            cursor: default;
            margin-bottom: 12px;
            @media screen and (max-width: 767.9px) {
              cursor: pointer;
              pointer-events: auto;
            }
          }
        }

        &.ft-link {
          h4 {
            margin-top: 15px;
          }
          li {
            position: relative;
            margin-bottom: 10px;
            a {
              &::before {
                content: "\e5e1";
                font-family: "Material Symbols Outlined";
                display: inline-block;
                margin: 0 4px 2px 0;
                color: #fff;
                font-size: 14px;
                vertical-align: middle;
              }
              &:hover {
                color: #0097dc;
                &::before {
                  color: #0097dc;
                }
              }
            }
            span {
              background: #0097dc;
              color: #fff;
              margin-left: 5px;
              padding: 1px 5px 2px;
              font-size: 10px;
              border-radius: 5px;
            }
          }
        }
        &.extra-link {
          width: 25%;
          @media screen and (max-width: 767.9px) {
            width: 100%;
            margin-top: 20px;
          }
          .extra {
            display: block;
            @media screen and (max-width: 767.9px) {
              display: block;
            }
            .title {
              margin-right: 15px;
              font-size: 22px;
            }
            .row {
              justify-content: flex-start;
            }
            li {
              margin-right: 15px;
              font-size: 22px;
              background: rgba(255, 255, 255, 0.3294117647);
              border-radius: 5px;
              @media screen and (max-width: 767.9px) {
                margin-right: 10px;
                margin-bottom: 10px;
              }
              a {
                display: flex;
                justify-content: center;
                width: 20px;
                padding: 9px 11px;
                &:hover {
                  opacity: 0.7;
                }
              }
            }
            &.payment {
              @media screen and (max-width: 767.9px) {
                .row {
                  justify-content: flex-start;
                }
              }
              li {
                background: none;
                border-radius: inherit;
                margin: 0 10px 10px 0;
                a {
                  width: 50px;
                  padding: 0;
                  cursor: pointer;
                  @media screen and (max-width: 767.9px) {
                    width: 40px;
                  }
                }
              }
            }
          }
        }
      }
      &.ft-blk {
        align-items: center;
        @media screen and (max-width: 767.9px) {
          display: block;
          padding-top: 10px;
          text-align: center;
        }
      }
      .terms {
        li {
          display: inline;
          padding: 0 10px;
          &:first-child {
            border-right: 1px solid #fff;
          }
          a {
            &:hover {
              color: #0097dc;
            }
          }
        }
      }
    }
  }
  .ft-copyright {
    background: rgba(255, 255, 255, 0.3294117647);
    padding: 15px 0;
    margin-top: 10px;
    .row {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      @media screen and (max-width: 767.9px) {
        justify-content: flex-start;
      }
    }
  }
  .icon-fixed {
    position: fixed;
    bottom: 20%;
    right: 8px;
    width: 50px;
    z-index: 1;
    li {
      margin-bottom: 20px;
      transition: transform 0.3s ease-in-out;
      &:hover {
        opacity: 0.8;
        transform: scale(1.1);
      }
      &.tooltip {
        position: relative;
        display: inline-block;
        .tooltiptext {
          visibility: hidden;
          width: 120px;
          background-color: #ffe401;
          color: #000;
          text-align: center;
          border-radius: 6px;
          position: absolute;
          z-index: 1;
          right: 60px;
          top: 6px;
          padding: 10px;
          box-shadow: 2px 2px 4px #000;
        }
        &:hover {
          .tooltiptext {
            visibility: visible;
          }
        }
      }
    }
  }
  .overlay {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.7);
    transition: opacity 500ms;
    visibility: hidden;
    opacity: 0;
    height: 100%;
    z-index: 1;
  }

  .overlay:target {
    visibility: visible;
    opacity: 1;
  }

  .popup {
    margin: 240px auto;
    padding: 20px;
    background: #fff;
    color: #000;
    border-radius: 5px;
    width: 210px;
    position: relative;
    transition: all 5s ease-in-out;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .popup-content {
    display: block;
    margin: 0 auto;
    text-align: center;
    img {
      width: 30%;
      display: block;
      margin: 0 auto;
    }
    span {
      display: block;
      margin-top: 20px;
      font-size: 20px;
      line-height: 1.8;
    }
  }
  .popup .close {
    position: absolute;
    top: 20px;
    right: 30px;
    transition: all 200ms;
    font-size: 30px;
    font-weight: bold;
    text-decoration: none;
    color: #333;
  }
}
</style>
