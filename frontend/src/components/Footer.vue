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
                  <b>Xenon Company Limited</b><br />
                  Main address :<br />
                  No. 55 Hla Theingi Street<br />
                  Industrial Zone 2<br />
                  Dagon Seikkan Township<br />
                  Yangon
                </span>
              </a>
            </li>
            <li class="phone">
              <a href="tel:09977666888"
                ><span class="material-symbols-outlined">phone_iphone</span
                ><span>09977 666 888</span></a
              >
            </li>
            <li class="mail">
              <a href="mailto:hello@xenonmm.com"
                ><span class="material-symbols-outlined"> mail </span>hello@xenonmm.com</a
              >
            </li>
          </ul>
        </div>
        <div class="col ft-link">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="">Artwork Guidelines</a></li>
            <li><a href="">Download Templates</a></li>
            <li><a href="">Privacy & Security Policy</a></li>
            <li><a href="">FAQs</a></li>
            <li><a href="">Request a Quote</a></li>
            <li><a href="">Terms & Conditions</a></li>
          </ul>
        </div>
        <div class="col ft-link">
          <h3>Product Category</h3>
          <h4>Business Cards</h4>
          <ul>
            <li>
              <a href="">Standard Business Cards - Promo<span>SALE!</span></a>
            </li>
            <li><a href="">Deluxe Business Card</a></li>
          </ul>
          <h4>Large Format Printing</h4>
          <ul>
            <li>
              <a href="">Vinyl Banner<span>HOT!</span></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer-link">
      <div class="footer-inner">
        <div class="row">
          <div class="extra-link">
            <p class="title">Follow Us:</p>
            <ul class="row">
              <li>
                <a href="https://www.facebook.com/XenonCompanyLimited/" title="Facebook"
                  ><i class="fab fa-facebook-f"></i
                ></a>
              </li>
              <li>
                <a href=""><i class="fab fa-instagram"></i></a>
              </li>
              <li>
                <a href=""><i class="fab fa-twitter"></i></a>
              </li>
              <li>
                <a href=""><i class="fab fa-pinterest-p"></i></a>
              </li>
            </ul>
          </div>
          <div class="extra-link payment">
            <p class="title">We Accept:</p>
            <ul class="row">
              <li>
                <a href="#" title="Visa">
                  <img
                    alt="visa"
                    class="img-fluid"
                    src="https://d3pyarv4eotqu4.cloudfront.net/xenonmmon/images/contentimages/images/Visa.jpg"
                  />
                </a>
              </li>
              <li>
                <a href="#" title="master">
                  <img
                    alt="master"
                    class="img-fluid"
                    src="https://d3pyarv4eotqu4.cloudfront.net/xenonmmon/images/contentimages/images/Master_Card.jpg"
                  />
                </a>
              </li>
              <li>
                <a href="#" title="mpu">
                  <img
                    alt="mpu"
                    class="img-fluid"
                    src="https://d3pyarv4eotqu4.cloudfront.net/xenonmmon/images/contentimages/images/MPU.jpg"
                  />
                </a>
              </li>
              <li>
                <a href="#" title="kbzpay">
                  <img
                    alt="kbz-pay"
                    class="img-fluid"
                    src="https://d3pyarv4eotqu4.cloudfront.net/xenonmmon/images/contentimages/images/KBZ.jpg"
                  />
                </a>
              </li>
              <li>
                <a href="#" title="aya bank">
                  <img
                    alt="aya-bank"
                    class="img-fluid"
                    src="https://d3pyarv4eotqu4.cloudfront.net/xenonmmon/images/contentimages/images/AYA.jpg"
                  />
                </a>
              </li>
              <li>
                <a href="#" title="cb bank">
                  <img
                    alt="cb bank"
                    class="img-fluid"
                    src="https://d3pyarv4eotqu4.cloudfront.net/xenonmmon/images/contentimages/images/CB_Bank.jpg"
                  />
                </a>
              </li>
              <li>
                <a href="#" title="123">
                  <img
                    alt="123"
                    class="img-fluid"
                    src="https://d3pyarv4eotqu4.cloudfront.net/xenonmmon/images/contentimages/images/123.jpg"
                  />
                </a>
              </li>
              <li>
                <a href="#" title="m-many">
                  <img
                    alt="m-many"
                    class="img-fluid"
                    src="https://d3pyarv4eotqu4.cloudfront.net/xenonmmon/images/contentimages/images/M_Ks.jpg"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-inner">
      <div class="row ft-blk">
        <p>Copyright &copy; Dream Holdings., Ltd. All Rights Reserved.</p>
        <ul class="terms">
          <li><a href="">Privacy</a></li>
          <li><a href="">Terms & Conditions</a></li>
        </ul>
      </div>
    </div>
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

<style lang="postcss">
@import "@/assets/scss/mixins.scss";

footer {
  padding: 40px 0 0;
  background: rgb(44 44 44);
  color: #fff;
  @media screen and (max-width: 767.9px) {
    padding: 40px 0 10px;
  }
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
            @media screen and (max-width: 767.9px) {
              cursor: pointer;
              pointer-events: auto;
            }
          }
        }

        &.ft-link {
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
  .footer-link {
    background: rgba(255, 255, 255, 0.3294117647);
    padding: 15px 0;
    margin-top: 10px;
    .row {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      .extra-link {
        display: flex;
        justify-content: space-between;
        align-items: center;
        @media screen and (max-width: 767.9px) {
          display: block;
        }
        .title {
          margin-right: 15px;
          font-size: 22px;
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
            display: block;
            width: 20px;
            padding: 9px 14px;
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
            a {
              width: 50px;
              padding: 0;
              @media screen and (max-width: 767.9px) {
                width: 40px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
