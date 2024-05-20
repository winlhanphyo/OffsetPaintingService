<script setup>
// import ArgonPagination from "@/components/ArgonPagination.vue";
// import ArgonPaginationItem from "@/components/ArgonPaginationItem.vue";
</script>

<template>
  <div class="card">
    <div class="card-header pb-0">
      <div class="d-flex justify-content-between">
        <h6>Category Table</h6>
        <button type="button" class="m-0 btn btn-info" data-bs-target="#categoryModal"
          data-bs-toggle="modal" @click="changeLabel('Create')">
          Create
        </button>
      </div>
    </div>
    <div class="card-body px-0 pt-0 pb-2">
      <div class="table-responsive p-0">
        <table class="table align-items-center mb-0">
          <thead>
            <tr>
              <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                ID
              </th>
              <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                Name
              </th>
              <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                Image
              </th>
              <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                Created At
              </th>
              <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                Updated At
              </th>
              <th class="text-secondary opacity-7"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in categories" :key="index">
              <td>
                <div class="px-3 py-1">{{ item?.id }}</div>
              </td>
              <td>
                <div class="py-1">
                  <h6 class="mb-0 text-sm">{{ item?.name }}</h6>
                </div>
              </td>
              <td>
                <div class="px-3 py-1">
                  <div>
                    <img
                      :src="item?.categoryImage"
                      class="avatar me-3"
                      alt="user1"
                    />
                  </div>
                </div>
              </td>
              <td class="align-middle text-center">
                <span class="text-secondary text-xs font-weight-bold">{{ moment(item?.createdAt).format("YYYY-MM-DD") }}</span>
              </td>
              <td class="align-middle text-center">
                <span class="text-secondary text-xs font-weight-bold">{{ moment(item?.createdAt).format("YYYY-MM-DD") }}</span>
              </td>
              <td class="align-middle">
                <button type="button" class="m-0 btn btn-primary" data-bs-target="#categoryModal" data-bs-toggle="modal"
                  @click="changeLabel('Update', item)">Edit</button>
                <button type="button" class="m-0 btn btn-danger ms-2" data-bs-target="#deleteModalToggle" data-bs-toggle="modal"
                  @click="showDeleteDialog(item)">Delete</button>
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
        <div class="modal fade" id="categoryModal" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalToggleLabel">Category {{ modalLabel }}</h1>
              </div>
              <div class="modal-body">
                <form>
                  <div class="mb-3">
                    <label for="recipient-name" class="col-form-label">Name</label>
                    <input type="text" class="form-control" id="recipient-name" v-model="name">
                  </div>
                  <div class="mb-3">
                    <label for="formFile" class="col-form-label">Image file</label>
                    <input class="form-control" type="file" id="formFile" @change="handleFileUpload">
                  </div>
                </form>
              </div>
              <div class="modal-footer">
                <button type="button" ref="Close" class="btn btn-secondary" data-bs-dismiss="modal" id="close">Close</button>
                <button type="button" class="btn btn-primary" @click="submitCategory()">{{modalLabel}}</button>
              </div>
            </div>
          </div>
        </div>
        <div class="modal fade" id="deleteModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalToggleLabel">Delete</h1>
              </div>
              <div class="modal-body">
                Are you sure want to Delete?
              </div>
              <div class="modal-footer">
                <button type="button" ref="Close" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-danger" data-bs-target="#deleteModalToggle" data-bs-toggle="modal"
                  @click="clickDeleteCategory()">Delete</button>
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
import Swal from 'sweetalert2';
import { imgRoot } from "../../../config.js";
import { getCategory, updateCategory, createCategory, deleteCategory } from "@/services/admin.service.js";

export default {
  data() {
    return {
      categories: [],
      id: "",
      name: "",
      categoryImage: "",
      modalLabel: "Create"
    };
  },
  mounted() {
    this.getCategoryData();
  },
  methods: {
    async getCategoryData() {
      const token = localStorage.getItem("token");
      const res = await getCategory(token);
      this.categories = res?.data?.data;
      this.categories?.map((dist) => {
        dist.categoryImage = imgRoot + dist.categoryImage;
        console.log("category-----", dist.categoryImage);
      });
    },
    handleFileUpload(event) {
      const file = event.target.files[0];
      this.categoryImage = file;

      console.log("------categoryImage", this.categoryImage);
    },
    changeLabel(text, data=null) {
      this.modalLabel = text;
      if (this.modalLabel === 'Create') {
        this.name = "";
        this.categoryImage = "";

        console.log("category-----", this.category);
      } else {
        this.id = data?.id;
        this.name = data?.name;
        this.categoryImage = "";

        console.log("category-----", this.category);
      }
    },
    showDeleteDialog(data) {
      this.id = data?.id;
    },
    async submitCategory() {
      const token = localStorage.getItem("token");
      document.getElementById('close').click();
      if (this.modalLabel === 'Create') {
        let formParam = new FormData();
        formParam.append('name', this.name);
        formParam.append('categoryImage', this.categoryImage);

       createCategory(formParam, token)
          .then(() => {
            Swal.fire({
              title: "Success!",
              text: "Category is created successfully!",
              icon: "success"
            }).then(() => {
              this.getCategoryData();
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
        if (this.categoryImage) {
          formParam.append('categoryImage', this.categoryImage);
        }

       updateCategory(this.id, formParam, token)
          .then(() => {
            Swal.fire({
              title: "Success!",
              text: "Category is updated successfully!",
              icon: "success"
            }).then(() => {
              this.getCategoryData();
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
    async clickDeleteCategory() {
      const token = localStorage.getItem("token");
      deleteCategory(this.id, token)
          .then(() => {
            Swal.fire({
              title: "Success!",
              text: "Category is deleted successfully!",
              icon: "success"
            }).then(() => {
              this.getCategoryData();
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
};
</script>