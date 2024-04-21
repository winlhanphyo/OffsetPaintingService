<template>
  <div class="container" id="contact">
    <h2>{{ $t('message.contactus') }}</h2>
    <div class="contact">
      <div class="row">
        <div class="address">
          <p>
            <span>Xenon Company Limited</span><br>
            Main address :<br>
            No. 55 Hla Theingi Street<br>
            Industrial Zone 2<br>
            Dagon Seikkan Township<br>
            Yangon<br>
            Tel: 09428304444, 09428305555<br>
            Email: <a href="mailto:hello@xenonmm.com">hello@xenonmm.com</a>
          </p>
          <div class="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3818.458696581868!2d96.28472107492203!3d16.853188983945664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c18cfb170bb19f%3A0xcfa5696f4b738826!2sXenon%20Company%20Limited!5e0!3m2!1sen!2smm!4v1712637412313!5m2!1sen!2smm" width="450" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
        <div class="address">
          <p>
            <span>Xenon Premium Printing 1</span><br>
            No. 78, Anawrahta Road, Bet 39th & 40th Steet,<br>
            Kyauktada Township, Yangon.<br>
            Tel : 09428303333, 09451177799<br>
            Email : <a href="mailto:retailshop1@xenonmm.com">retailshop1@xenonmm.com</a>
          </p>
          <div class="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d122239.9477148521!2d96.0113673972656!3d16.776756900000017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c1ec89efb0b5cf%3A0x95ecd9218dfabc16!2sXenon%20Premium%20Printing%201!5e0!3m2!1sen!2smm!4v1712651950163!5m2!1sen!2smm" width="450" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="address mdy-address">
          <p>
            <span>Xenon Premium Printing Mandalay</span><br>
            No. 179, 35th Street, (bet 77 & 78 St), Maha Aung Myae Township, Mandalay.<br>
            Tel : 095410011, 09428307777<br>
            Email : <a href="mailto:mdy@xenonmm.com">mdy@xenonmm.com</a>
          </p>
          <div class="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3700.104788353216!2d96.08510987505929!3d21.968940979926177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30cb6dff604e954d%3A0x493e3a680da6fb09!2sXenon%20Premium%20Printing%20Mandalay!5e0!3m2!1sen!2smm!4v1712652086612!5m2!1sen!2smm" width="450" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
      <div class="form">
        <p class="d-inline-block">{{ $t('message.formMsg') }}</p>
        <div class="form-row">
          <div class="col">
            <div class="form-group">
              <label for="" class="label">{{ $t('message.company') }}</label>
              <div class="form-data">
                <input type="text" :placeholder="$t('message.company')">
              </div>
            </div>
            <div class="form-group">
              <label for="" class="label">{{ $t('message.fullName') }} <span>*</span></label>
              <div class="form-data">
                <input type="text" :placeholder="$t('message.fullName')">
              </div>
            </div>
          </div>
          <div class="col">
            <div class="form-group">
              <label for="" class="label">{{ $t('message.email') }}<span>*</span></label>
              <div class="form-data">
                <input type="text" :placeholder="$t('message.email')">
              </div>
            </div>
            <div class="form-group">
              <label for="" class="label">{{ $t('message.phone') }}</label>
              <div class="form-data">
                <input type="text" :placeholder="$t('message.phone')">
              </div>
            </div>
          </div>
          <div class="col">
            <div class="form-group">
              <label for="" class="label">{{ $t('message.department') }}</label>
              <div class="form-data">
                <select>
                  <option value="" selected disabled hidden>Select Departmant</option>
                  <option value="1">Sales</option>
                  <option value="2">Graphic Design</option>
                  <option value="3">Customer Assistance</option>
                  <option value="4">Direct Mailing Question</option>
                  <option value="5">Testimonials</option>
                  <option value="6">Request Reorder</option>
                </select>
              </div>
            </div>
            <div class="form-group">
              <label for="" class="label">{{ $t('message.orderNo') }}</label>
              <div class="form-data">
                <input type="text" :placeholder="$t('message.orderNo')">
              </div>
            </div>
          </div>
          <div class="form-group textarea">
            <label for="" class="label">{{ $t('message.msg') }} <span>*</span></label>
            <textarea name="" id="" cols="20" rows="5"></textarea>
          </div>
          <button class="submit-btn">{{ $t('message.submit') }}</button>
          <button class="reset-btn">{{ $t('message.reset') }}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppContactUs",
  components: {},
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="postcss">
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
              color: #FF8C00;
              font-size: 15px;
            }
            a {
              &:hover {
                color: #FF8C00;
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
          }
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
          select {
            width: 100%;
            padding: 10px;
            border: 1px solid rgba(0, 0, 0, 0.25);
            border-radius: 5px;
          }
          &.textarea {
            width: 100%;
            textarea {
              width: calc( 100% - 44px);
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
