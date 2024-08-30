<script setup></script>

<template>
  <div class="card">
    <div class="card-header pb-0">
      <div class="d-flex justify-content-between">
        <h6>Product Update</h6>
      </div>
    </div>
    <div class="card-body px-0 pt-0 pb-2">
      <div class="product-create">
        <div class="d-flex mb-3">
          <div class="form-group col-sm-4 p-2">
            <label for="productName">Product Name:</label>
            <input type="text" class="form-control" id="product-name" v-model="name" />
          </div>
          <div class="form-group col-sm-4 p-2">
            <label for="categoryName">Category Name:</label>
            <select
              class="form-select"
              @change="changeCategory($event)"
              v-model="categoryId"
            >
              <option value="" disabled>Select Category Menu</option>
              <option
                v-for="(item, i) in categoryList"
                :key="'categoryList' + i"
                :value="item.value"
              >
                {{ item?.name }}
              </option>
            </select>
          </div>

          <div class="form-group col-sm-4 p-2">
            <label for="image">Image:</label>
            <input
              class="form-control"
              type="file"
              id="formFile"
              @change="handleFileUpload"
            />
          </div>
        </div>

        <div class="d-flex mb-3">
          <div class="form-group col-sm-4 p-2">
            <label for="productName">Status:</label>
            <select class="form-select" @change="changeStatus($event)" v-model="status">
              <option value="">None</option>
              <option value="Hot">Hot</option>
              <option value="Sale">Sale</option>
            </select>
          </div>
          <div class="form-group col-sm-4 p-2">
            <label for="categoryName">Description:</label>
            <textarea
              id="w3review"
              name="w3review"
              rows="4"
              v-model="description"
            ></textarea>
          </div>
        </div>

        <div class="d-flex mb-3">
          <div class="form-group col-sm-4 p-2">
            <label for="printing">Printing Type:</label>
            <select name="printing" id="printing" class="form-select">
              <option value="" selected disabled hidden>Choose Printing Type</option>
              <option value="Flatten">Flatten</option>
              <option value="Book">Book</option>
              <option value="Voucher">Voucher</option>
            </select>
          </div>
          <div class="form-group col-sm-4 p-2">
            <label for="quantity">Quantity:</label>
            <input type="text" class="form-control" />
          </div>
          <div class="form-group col-sm-4 p-2">
            <label for="sheet">Sheet:</label>
            <input type="text" class="form-control" />
          </div>
        </div>
        <div class="d-flex mb-3">
          <div class="form-group col-sm-4 p-2">
            <label for="type">Type:</label>
            <select name="type" id="type" class="form-select">
              <option value="" selected disabled hidden>Choose Type</option>
              <option value="AP">AP</option>
              <option value="AC">AC</option>
              <option value="WF">WF</option>
              <option value="DP">DP</option>
              <option value="CB">CB</option>
              <option value="Sticker">Sticker</option>
              <option value="Khaki">Khaki</option>
              <option value="Recycle">Recycle</option>
            </select>
          </div>
          <div class="form-group col-sm-4 p-2">
            <label for="gsm">Gsm:</label>
            <select name="gsm" id="gsm" class="form-select">
              <option value="" selected disabled hidden>Choose Gsm</option>
              <option value="128">128gsm</option>
              <option value="148">148gsm</option>
              <option value="157">157gsm</option>
              <option value="210">210gsm</option>
              <option value="230">230gsm</option>
              <option value="250">250gsm</option>
              <option value="300">300gsm</option>
              <option value="350">350gsm</option>
            </select>
          </div>
          <div class="form-group col-sm-4 p-2">
            <label for="width">Width:</label>
            <input type="text" class="form-control" />
          </div>
        </div>
        <div class="d-flex mb-3">
          <div class="form-group col-sm-4 p-2">
            <label for="height">Height:</label>
            <input type="text" class="form-control" />
          </div>
          <div class="form-group col-sm-4 p-2">
            <label for="depth">Depth:</label>
            <input type="text" class="form-control" />
          </div>
          <div class="form-group col-sm-4 p-2">
            <label for="size">(Ratio) Full Size:</label>
            <select name="size" id="size" class="form-select">
              <option value="" selected disabled hidden>Choose Ratio Size</option>
              <option value="2">2 Ratio (S)</option>
              <option value="5">5 Ratio</option>
              <option value="6">6 Ratio</option>
              <option value="6">6 Ratio (2)</option>
              <option value="8">8 Ratio</option>
              <option value="9">9 Ratio</option>
              <option value="10">10 Ratio</option>
              <option value="11">11 Ratio</option>
            </select>
          </div>
        </div>
        <div class="d-flex mb-3">
          <div class="form-group col-sm-4 p-2">
            <label for="Ratio Width">Ratio Width:</label>
            <input type="text" class="form-control" />
          </div>
        </div>

        <div class="d-flex mb-3">
          <div class="form-group col-sm-4 p-2">
            <!-- <label for="Ratio Width">Ratio Width:</label>
            <input type="text" class="form-control"> -->
            <button class="btn btn-secondary">Clear</button>
            <button
              class="btn btn-primary"
              style="margin-left: 10px"
              @click="submitProduct()"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import moment from "moment";
import Swal from "sweetalert2";
// import { imgRoot } from "../../../config.js";
import { updateProduct, getCategory, getProductById } from "@/services/admin.service.js";

export default {
  data() {
    return {
      id: "",
      name: "",
      image: "",
      categoryId: "",
      description: "",
      status: "",
      categoryList: [],
      detailData: {},
      searchName: null,
    };
  },
  async mounted() {
    this.getCategoryData();
    this.id = this.$route?.params?.id;
    if (this.id) {
      const res = await getProductById(this.id);
      const data = res?.data?.data;
      this.name = data?.name;
      this.categoryId = data?.categoryId;
      this.image = "";
      this.description = data?.description;
      this.status = data?.status;
    }
  },
  methods: {
    async getCategoryData() {
      const token = localStorage.getItem("token");
      const arr = [];
      const res = await getCategory(token);
      this.categories = res?.data?.data;
      for (let i = 0; i < this.categories.length; i++) {
        arr.push({
          name: this.categories[i].name,
          value: this.categories[i].id,
        });
      }
      this.categoryList = arr;
    },
    handleFileUpload(event) {
      const file = event.target.files[0];
      this.image = file;
    },
    async submitProduct() {
      const token = localStorage.getItem("token");
      let formParam = new FormData();
      formParam.append("name", this.name);
      formParam.append("categoryId", this.categoryId);
      formParam.append("description", this.description);
      formParam.append("status", this.status);

      if (this.image) {
        formParam.append("media", this.image);
      }

      updateProduct(this.id, formParam, token)
        .then(() => {
          Swal.fire({
            title: "Success!",
            text: "Product is updated successfully!",
            icon: "success",
          }).then(() => {
            this.$router.push("/product");
          });
        })
        .catch((err) => {
          Swal.fire({
            title: "Oops!",
            text: err.toString(),
            icon: "error",
          });
        });
    },
    changeStatus(event) {
      this.status = event.target.value;
    },
    changeCategory(event) {
      this.categoryId = event.target.value;
    },
  },
};
</script>

<style lang="scss">
.product-create {
  padding: 1.5rem;
  font-size: 1rem;
}
.product-create label {
  display: block;
}
.w-28 {
  width: 28%;
}
.text-sm {
  a {
    text-decoration: underline;
  }
}
textarea {
  width: 100%;
  padding: 10px 15px;
  border: 1px solid #d2d6da;
  border-radius: 0.5rem;
  resize: none !important;
}
</style>
