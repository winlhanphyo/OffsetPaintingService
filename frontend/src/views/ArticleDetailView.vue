<template>
  <div class="container">
    <div class="article-detail">
      <h2>Standard Business Cards - Promo <span>(Business Cards)</span></h2>
      <div class="card">
        <div class="card-inner"></div>
        <div class="card-inner"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppArticleDetail",
  components: {},
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="postcss">
.article-detail {
  .card {
    display: flex;
    margin: 40px 0;
    @media screen and (max-width: 767.9px) {
      display: block;
    }
    .card-inner {
      width: calc(100% / 2);
      margin-right: 20px;
      @media screen and (max-width: 767.9px) {
        width: 100%;
        margin-right: 0;
      }
      &:last-child {
        margin-right: 0;
      }
      .slider-for {
        .slick-next {
          right: 22px;
        }
        .slick-prev {
          left: 30px;
        }
      }
      .slider-nav {
        .slick-slide {
          margin-right: 10px !important;
          cursor: pointer;
          @media screen and (max-width: 767.9px) {
            width: 20% !important;
            margin-right: 5px !important;
          }
        }
      }
      .tabs {
        .tabs-nav {
          margin: 15px 0 0;
          li {
            display: inline-block;
            background: rgba(0, 0, 0, 0.78);
            color: #fefefe;
            border-width: 1px 1px 0 1px;
            border-style: solid;
            border-color: #34495e;
            margin-right: 5px;
            @media screen and (max-width: 767.9px) {
              font-size: 12px;
            }
            &.active {
              background: #fff;
              color: #000;
              a {
                color: inherit;
                border-color: transparent;
                border-width: 1px 1px 0 1px;
              }
            }
          }
          a {
            display: block;
            padding: 10px 15px;
            font-weight: bold;
            color: #fff;
            @media screen and (max-width: 767.9px) {
              padding: 12px 5px;
            }
          }
        }
        .tab-content {
          border: 1px solid #34495e;
          padding: 20px 15px;
          background: #fff;
          margin-top: -1px;
          overflow: hidden;
          p {
            line-height: 2;
            margin-bottom: 20px;
          }
          .row {
            display: flex;
            align-items: center;
            justify-content: space-between;
            a {
              display: flex;
              align-items: center;
              span {
                margin-right: 5px;
                &.icon {
                  color: #a61f2d;
                }
              }
              &:hover {
                color: #f47920;
              }
            }
          }
        }
      }
      h4 {
        padding-bottom: 10px;
        border-bottom: 1px solid #dee2e6;
      }
      .calculate {
        .form-group {
          display: flex;
          align-items: center;
          margin-bottom: 20px;
          @media screen and (max-width: 767.9px) {
            display: block;
          }
          .label {
            flex: 0 0 33.333333%;
            max-width: 33.333333%;
            @media screen and (max-width: 767.9px) {
              display: block;
              margin-bottom: 10px;
            }
          }
          .form-data {
            width: 100%;
            label {
              display: block;
              margin-bottom: 5px;
            }
            input {
              width: 95%;
              padding: 10px;
              border: 1px solid rgba(0, 0, 0, 0.25);
              @media screen and (min-width: 768px) and (max-width: 1440px) {
                width: calc(100% - 22px);
              }
              @media screen and (max-width: 767.9px) {
                width: calc(100% - 22px);
              }
            }
            select {
              width: 100%;
              padding: 10px;
              border: 1px solid rgba(0, 0, 0, 0.25);
            }
          }
          &.select {
            align-items: end;
            @media screen and (max-width: 767.9px) {
              display: flex;
            }
            small {
              font-size: 10px;
            }
          }
        }
      }
      .total {
        text-align: right;
        font-size: 20px;
      }
      .accordion-head {
        cursor: pointer;
        .plusminus {
          float: right;
          font-size: 20px;
        }
      }
      ul li {
        display: inline-flex;
        align-items: center;
        input {
          width: auto !important;
        }
      }
      .calc-btn,
      .start {
        padding: 9px;
        margin-left: 20px;
        font-size: 15px;
        background: #000;
        color: #fff;
        cursor: pointer;
        border-radius: 5px;
        &:hover {
          opacity: 0.7;
        }
      }
      .start {
        width: 100%;
        margin: 20px 0 0;
        padding: 15px 0;
      }
    }
  }
}
</style>
