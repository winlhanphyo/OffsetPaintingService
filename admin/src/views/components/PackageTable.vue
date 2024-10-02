<script setup>
// import ArgonPagination from "@/components/ArgonPagination.vue";
// import ArgonPaginationItem from "@/components/ArgonPaginationItem.vue";
</script>

<template>
  <div class="card">
    <div class="card-header pb-0">
      <div class="d-flex justify-content-between">
        <h6>Package Table</h6>
        <button type="button" class="m-0 btn btn-info" data-bs-target="#editModalToggle" data-bs-toggle="modal"
          @click="changeLabel('Create')">Create</button>
      </div>
    </div>
    <div class="card-body px-0 pt-0 pb-2">
      <div class="table-responsive p-0">
        <table class="table align-items-center mb-0">
          <thead>
            <tr>
              <th
                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >
                ID
              </th>
              <th
                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"
              >
                Product Name
              </th>
              <th
                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >
                Image
              </th>
              <th
                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"
              >
                Product Name
              </th>
              <th
                class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >
                Created At
              </th>
              <th
                class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >
                Updated At
              </th>
              <th class="text-secondary opacity-7"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in packages" :key="index">
              <td>
                <div class="px-3 py-1">{{ item?.id }}</div>
              </td>
              <td>
                <div class="py-1">
                  <h6 class="mb-0 text-sm">
                    <a href="#detailModalToggle" @click="showDetailDialog(item)" data-bs-toggle="modal">{{
                      item?.name
                    }}</a>
                  </h6>
                </div>
              </td>
              <td>
                <div class="px-3 py-1">
                  <div>
                    <img :src="item?.packageImage" class="avatar me-3" alt="user1" />
                  </div>
                </div>
              </td>
              <td>
                <div class="py-1">
                  <h6 class="mb-0 text-sm">{{ item?.productNames }}</h6>
                </div>
              </td>
              <td class="align-middle text-center">
                <span class="text-secondary text-xs font-weight-bold">
                  {{ moment(item?.createdAt).format("YYYY-MM-DD") }}
                </span>
              </td>
              <td class="align-middle text-center">
                <span class="text-secondary text-xs font-weight-bold">
                  {{ moment(item?.updatedAt).format("YYYY-MM-DD") }}
                </span>
              </td>
              <td class="align-middle">
                <button
                  type="button"
                  class="m-0 btn btn-primary"
                  data-bs-target="#editModalToggle"
                  data-bs-toggle="modal" @click="changeLabel('Update', item)">
                  Edit
                </button>
                <button
                  type="button"
                  class="m-0 btn btn-danger ms-2"
                  data-bs-target="#deleteModalToggle"
                  data-bs-toggle="modal" @click="showDeleteDialog(item)">
                  Delete
                </button>
              </td>
            </tr>
            
          </tbody>
        </table>
        <!-- <argon-pagination>
          <argon-pagination-item prev />
          <argon-pagination-item label="1" active />
          <argon-pagination-item label="2" />
          <argon-pagination-item label="3" />
          <argon-pagination-item next />
        </argon-pagination> -->
        <div
          class="modal fade"
          id="editModalToggle"
          aria-hidden="true"
          aria-labelledby="exampleModalToggleLabel"
          tabindex="-1"
        >
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalToggleLabel">
                  Product {{ modalLabel }}
                </h1>
              </div>
              <div class="modal-body">
                <form>
                  <div class="mb-3">
                    <label for="package-name" class="col-form-label">Package Name</label>
                    <input type="text" class="form-control" id="package-name" v-model="name"/>
                  </div>
                  <!-- <div class="mb-3">
                    <label for="product-name" class="col-form-label"
                      >Product Name</label
                    >
                    <select class="form-select" @change="changeProduct($event)" v-model="productId">
                      <option value="" disabled>Select Product Menu</option>
                      <option v-for="(item, i) in productList" :key="'productList' + i" :value="item.value">{{ item?.name }}</option>
                    </select>
                  </div> -->

                  <div v-if="modalLabel === 'Create'">
                    <label class="typo__label">Product Name</label>
                    <multiselect
                      v-model="productValue"
                      tag-placeholder="Add Product"
                      placeholder="Search or add a tag"
                      label="name"
                      track-by="value"
                      :options="productList"
                      :multiple="true"
                      :taggable="true">
                    </multiselect>
                      <!-- <pre class="language-json"><code>{{ productValue }}</code></pre> -->
                  </div>

                  <div class="mb-3">
                    <label for="formFile" class="col-form-label">Image file</label>
                    <input class="form-control" type="file" id="formFile" @change="handleFileUpload" />
                  </div>
                  <div class="mb-3">
                    <label for="status" class="col-form-label"
                      >Status</label
                    >
                    <select class="form-select" @change="changeStatus($event)" v-model="status">
                      <option value="">None</option>
                      <option value="Hot">Hot</option>
                      <option value="Sale">Sale</option>
                    </select>
                  </div>
                  <div class="mb-3">
                    <label for="formFile" class="col-form-label">Description</label>
                    <textarea id="w3review" name="w3review" rows="4" v-model="description"></textarea>
                  </div>
                </form>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" id="close">
                  Close
                </button>
                <button
                  type="button"
                  class="btn btn-primary"
                  data-bs-target="#editModalToggle"
                  data-bs-toggle="modal"
                  @click="submitPackage()">
                  {{ modalLabel }}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div
          class="modal fade"
          id="deleteModalToggle"
          aria-hidden="true"
          aria-labelledby="exampleModalToggleLabel"
          tabindex="-1"
        >
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalToggleLabel">Delete</h1>
              </div>
              <div class="modal-body">Are you sure want to Delete?</div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                  Close
                </button>
                <button
                  type="button"
                  class="btn btn-danger"
                  data-bs-target="#exampleModalToggle2"
                  data-bs-toggle="modal" @click="clickdeletePackage()">
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          class="modal fade"
          id="detailModalToggle"
          aria-hidden="true"
          aria-labelledby="exampleModalToggleLabel"
          tabindex="-1"
        >
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalToggleLabel">
                  Product Detail
                </h1>
              </div>
              <div class="modal-body">
                <div>
                  <div>
                    <img
                      src="../../assets/img/team-4.jpg"
                      class="d-block m-auto w-50"
                      alt="user3"
                    />
                  </div>
                  <div class="d-flex mt-3">
                    <div class="w-28">Product Name:</div>
                    <div class="w-75 ms-2">{{ detailData?.name }}</div>
                  </div>
                  <div class="d-flex mt-3">
                    <div class="w-28">Product Name:</div>
                    <div class="w-75 ms-2">{{ detailData?.productNames }}</div>
                  </div>
                  <div class="d-flex mt-3">
                    <div class="w-28">Description:</div>
                    <div class="w-75 ms-2">{{ detailData?.description }}</div>
                  </div>
                  <div class="d-flex mt-3">
                    <div class="w-28">Status:</div>
                    <div class="w-75 ms-2">{{ detailData?.status }}</div>
                  </div>
                  <!-- <div class="d-flex mt-3">
                    <div class="w-28">Description:</div>
                    <div class="w-75 ms-2">Testing Testing Testing Testing Testing Testing Testing Testing Testing</div>
                  </div> -->
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import Swal from "sweetalert2";
import Multiselect from 'vue-multiselect';
import { imgRoot } from "../../../config.js";
import { getPackage, deletePackage, getProduct, createPackage, updatePackage } from "@/services/admin.service.js";

export default {
  components: {
    Multiselect
  },
  data() {
    return {
      packages: [
        
      ],
      id: "",
      name: "",
      image: "",
      productId: "",
      selectedProductId: [],
      productValue: [],
      description: "",
      status: "",
      productList: [],
      modalLabel: "Create",
      detailData: {},
    };
  },
  mounted() {
    this.getProductData();
    this.getPackageData();
  },
  methods: {
    async getPackageData() {
      const token = localStorage.getItem("token");
      const res = await getPackage(token);

      this.packages = res?.data?.data;
      this.packages?.map((dist) => {
        console.log("dist", dist);
        dist.packageImage = imgRoot + dist.packageImage;
        dist?.product.map((data, index) => {
          if (index == 0) {
            dist.productNames = "";
            dist.productNames = dist.name;
          } else {
            dist.productNames +=  ", " + data.name;
          }
          data?.media.map((m) => {
            m.url = imgRoot + m.url;
          });
        });
      });
    },
    async getProductData() {
      const token = localStorage.getItem("token");
      const arr = [];
      const res = await getProduct(token);
      const products = res?.data?.data;
      for (let i = 0; i < products?.length; i++) {
        arr.push({
          name: products[i].name,
          value: products[i].id
        })
      }
      this.productList = arr;
    },
    handleFileUpload(event) {
      const file = event.target.files[0];
      this.image = file;
    },
    changeLabel(text, data=null) {
      this.modalLabel = text;
      if (this.modalLabel === 'Create') {
        this.name = "";
        this.image = "";
        this.productId = "";
      } else {
        this.id = data?.id;
        this.name = data?.name;
        this.productId = data?.productId;
        this.image = "";
        this.description = data?.description;
        this.status = data?.status;
      }
    },
    showDeleteDialog(data) {
      this.id = data?.id;
    },
    showDetailDialog(data) {
      this.detailData = data;
    },
    async submitPackage() {
      const token = localStorage.getItem("token");
      document.getElementById('close').click();
      console.log("product value", this.productValue);
      const productIdList = await this.productValue.map(dist => dist.value);

      if (this.modalLabel === 'Create') {
        let formParam = new FormData();
        formParam.append('name', this.name);
        formParam.append('productId', JSON.stringify(productIdList));
        formParam.append('description', this.description);
        formParam.append('status', this.status);

        console.log("----------image", this.image);
        if (this.image) {
          formParam.append('packageImage', this.image);
        }

       createPackage(formParam, token)
          .then(() => {
            Swal.fire({
              title: "Success!",
              text: "Package is created successfully!",
              icon: "success"
            }).then(() => {
              this.getPackageData();
            });
          }).catch((err) => {
            Swal.fire({
              title: "Oops!",
              text: err.toString(),
              icon: "error"
            })
          });
      } else {
        let formParam = new FormData();
        formParam.append('name', this.name);
        // formParam.append('productId', productIdList);
        formParam.append('description', this.description);
        formParam.append('status', this.status);
        if (this.image) {
          formParam.append('packageImage', this.image);
        }

       updatePackage(this.id, formParam, token)
          .then(() => {
            Swal.fire({
              title: "Success!",
              text: "Package is updated successfully!",
              icon: "success"
            }).then(() => {
              this.getPackageData();
            });
          }).catch((err) => {
            Swal.fire({
              title: "Oops!",
              text: err.toString(),
              icon: "error"
            })
          });
      }
    },
    async clickdeletePackage() {
      const token = localStorage.getItem("token");
      deletePackage(this.id, token)
          .then(() => {
            Swal.fire({
              title: "Success!",
              text: "Package is deleted successfully!",
              icon: "success"
            }).then(() => {
              this.getPackageData();
            });
          }).catch((err) => {
            Swal.fire({
              title: "Oops!",
              text: err.toString(),
              icon: "error"
            })
          });
    },
    changeStatus (event) {
      this.status = event.target.value;
    },
    changeProduct (selected) {
      // const tag = {
      //   name: newTag,
      //   code: newTag.substring(0, 2) + Math.floor((Math.random() * 10000000))
      // }
      // this.options.push(tag);
      // this.value.push(tag);
      console.log("selected", selected);
    }
  },
};
</script>
<style src="vue-multiselect/dist/vue-multiselect.esm.css"></style>

<style lang="scss">
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
