<template>
  <div class="container">
    <h2>{{ $t('message.product') }}</h2>
    <div class="product-list">
      <div class="product-card" v-for="(item, index) in products" :key="'product' + index">
        <div class="work-heading">
          <h3>{{ item?.name }}</h3>
          <p>{{ item?.description }}</p>
        </div>
        <div class="work-image-box">
          <img :src="item?.productImage" alt="" />
          <div class="details">
            <a @click="$router.push(`/product/${item?.id}`)"
              >View details <i class="fa fa-arrow-circle-right" aria-hidden="true"></i></a>
          </div>
        </div>
      </div>

    </div>
    <div class="pagination-container-awesome">
      <vue-awesome-paginate
        :total-items="100"
        :items-per-page="5"
        :max-pages-shown="5"
        v-model="currentPage"
        :on-click="clickPaginate"
        first-last-button="true"
      />
    </div>
  </div>
</template>

<script>
import { getProduct } from "@/services/offset.service.js";
import { imgRoot } from "./../../config";

export default {
  name: "AppProductList",
  components: {},
  data() {
    return {
      currentPage: 1,
      products: []
    };
  },
  mounted() {
    console.log("Mounted");
    this.getProductData();
  },
  methods: {
    clickPaginate(page) {
      console.log("click paginate-------", page);
    },
    async getProductData() {
      const token = localStorage.getItem("token");
      const res = await getProduct(token);

      this.products = res?.data?.data;
      this.products?.map((dist) => {
        if (dist?.media?.length > 0) {
          dist.productImage = imgRoot + dist.media[0]?.url;
        }
      });
  },
  },
};
</script>

<style lang="scss">
.container {
  .product-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 50px 0;
    @media screen and (max-width: 767.9px) {
      justify-content: space-between;
    }
    .product-card {
      width: 21%;
      padding: 20px;
      background: #f4f5f9a6;
      margin: 0 13px 13px 0;
      border-radius: 10px;
      position: relative;
      @media screen and (min-width: 501px) and (max-width: 767.9px) {
        width: 40%;
        margin-right: 0;
      }
      @media screen and (max-width: 500px) {
        width: auto;
        margin-right: 0;
      }
      .work-heading {
        padding-bottom: 20px;
        h3 {
          margin-bottom: 10px;
          font-size: 17px;
          color: #0c2773;
          @media screen and (max-width: 767.9px) {
            font-size: 16px;
          }
        }
        p {
          margin: 0;
          color: #1d1a1a !important;
          overflow: hidden;
          text-overflow: ellipsis;
          line-height: 23px;
          white-space: nowrap;
          font-size: 14px;
          @media screen and (max-width: 500px) {
            white-space: normal;
          }
        }
      }
      &:hover {
        .details {
          bottom: 0;
          height: 100%;
          display: block;
          opacity: 1;
          transition: 0.8s ease;
        }
      }
      .details {
        position: absolute;
        right: 0;
        bottom: 100%;
        left: 0;
        width: 100%;
        height: 0;
        overflow: hidden;
        background: rgba(0, 0, 0, 0.5);
        border-radius: 10px;
        a {
          background: #ffe401;
          box-shadow: 0 10px 20px #307cff29;
          color: #0c2773 !important;
          padding: 10px;
          border-radius: 25px;
          display: inline-table;
          align-items: center;
          justify-content: space-between;
          border: 0;
          cursor: pointer;
          font-size: 15px;
          margin: 0 auto;
          position: absolute;
          bottom: 45%;
          left: 0;
          right: 0;
          &:hover {
            opacity: 0.8;
          }
          .fa {
            margin-left: 7px;
          }
          @media screen and (max-width: 767.9px) {
            font-size: 12px;
          }
        }
      }
      .ribbon {
        position: absolute;
        color: #fff;
        top: 4px;
        right: 4px;
        background: linear-gradient(#e66465, #9198e5);
        white-space: nowrap;
        font-size: 14px;
        font-size: 0.875rem;
        box-shadow: 0 1px 7px 0 rgba(0, 0, 0, 0.8);
        padding: 7px;
        border-radius: 10px;
      }
    }
  }
}

.pagination-container {
  display: flex;
  justify-content: center;
}
.paginate-buttons {
  height: 40px;
  width: 40px;
  border-radius: 20px;
  cursor: pointer;
  background-color: rgb(242, 242, 242);
  border: 1px solid rgb(217, 217, 217);
  color: black;
}
.paginate-buttons:hover {
  background-color: #d8d8d8;
}
.active-page {
  background-color: #3498db;
  border: 1px solid #3498db;
  color: white;
}
.active-page:hover {
  background-color: #2988c8;
}
</style>
