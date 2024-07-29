<script setup>
// import ArgonPagination from "@/components/ArgonPagination.vue";
// import ArgonPaginationItem from "@/components/ArgonPaginationItem.vue";
</script>

<template>
  <div class="card">
    <div class="card-header pb-0">
      <div class="d-flex justify-content-between">
      <h6>Banners Table</h6>
      <button
        type="button"
        class="m-0 btn btn-info"
        data-bs-target="#bannerModal"
        data-bs-toggle="modal"
        @click="changeLabel('Create')"
      >
        Create
      </button>
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
                No
              </th>
              <th
                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >
                Image
              </th>
              <th
                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >
                Updated At
              </th>
              <th class="text-secondary opacity-7"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in banners" :key="index">
              <td>
                <div class="px-3 py-1">{{ item?.id }}</div>
              </td>
              <td>
                <div class="px-3 py-1">
                  <div>
                    <img :src="item?.image" class="avatar me-3" alt="user1" />
                  </div>
                </div>
              </td>
              <td>
                <div class="px-3 text-xs font-weight-bold">
                  {{ moment(item?.createdAt).format("YYYY-MM-DD") }}
                </div>
              </td>
              <td class="align-middle">
                <button
                  type="button"
                  class="m-0 btn btn-primary"
                  data-bs-target="#bannerModal"
                  data-bs-toggle="modal"
                  @click="changeLabel('Update', item)">
                  Edit
                </button>
                <button
                  v-if="banners?.length > 2"
                  type="button"
                  class="m-0 btn btn-danger ms-2"
                  data-bs-target="#deleteModalToggle"
                  data-bs-toggle="modal"
                  @click="showDeleteDialog(item)">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <div
          class="modal fade"
          id="bannerModal"
          aria-hidden="true"
          aria-labelledby="bannerModalToggleLabel"
          tabindex="-1"
        >
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="bannerModalToggleLabel">{{ modalLabel }}</h1>
              </div>
              <div class="modal-body">
                <form>
                  <div class="mb-3">
                    <label for="formFile" class="col-form-label">Image file</label>
                    <input
                      class="form-control"
                      type="file"
                      id="formFile"
                      @change="handleFileUpload"
                    />
                  </div>
                </form>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                  id="close"
                >
                  Close
                </button>
                <button
                  type="button"
                  class="btn btn-primary"
                  data-bs-target="#bannerModal"
                  data-bs-toggle="modal"
                  @click="submitBanner()"
                >
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
          aria-labelledby="bannerModalToggleLabel"
          tabindex="-1"
        >
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="bannerModalToggleLabel">Delete</h1>
              </div>
              <div class="modal-body">Are you sure want to Delete?</div>
              <div class="modal-footer">
                <button
                  type="button"
                  ref="Close"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  class="btn btn-danger"
                  data-bs-target="#deleteModalToggle"
                  data-bs-toggle="modal"
                  @click="clickDeleteBanner()"
                >
                  Delete
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
import { imgRoot } from "../../../config.js";
import { getBanner, updateBanner, createBanner, deleteBanner } from "@/services/admin.service.js";

export default {
  data() {
    return {
      banners: [],
      id: "",
      image: "",
      modalLabel: "Create",
    };
  },
  mounted() {
    this.getBannerData();
  },
  methods: {
    async getBannerData() {
      const token = localStorage.getItem("token");
      const res = await getBanner(token);
      this.banners = res?.data?.data;
      this.banners?.map((dist) => {
        dist.image = imgRoot + dist.image;
      });
    },
    handleFileUpload(event) {
      const file = event.target.files[0];
      this.image = file;
    },
    changeLabel(text, data = null) {
      this.modalLabel = text;
      if (this.modalLabel === "Create") {
        this.image = "";
      } else {
        this.id = data?.id;
        this.image = "";
      }
    },
    showDeleteDialog(data) {
      this.id = data?.id;
    },
    async submitBanner() {
      const token = localStorage.getItem("token");
      document.getElementById("close").click();
      if (this.modalLabel === "Create") {
        let formParam = new FormData();
        formParam.append("image", this.image);

        createBanner(formParam, token)
          .then(() => {
            Swal.fire({
              title: "Success!",
              text: "Banner is created successfully!",
              icon: "success",
            }).then(() => {
              this.getBannerData();
            });
          })
          .catch((err) => {
            Swal.fire({
              title: "Oops!",
              text: err.toString(),
              icon: "error",
            });
          });
      } else {
        let formParam = new FormData();
        formParam.append("name", this.name);
        if (this.image) {
          formParam.append("image", this.image);
        }

        updateBanner(this.id, formParam, token)
          .then(() => {
            Swal.fire({
              title: "Success!",
              text: "Banner is updated successfully!",
              icon: "success",
            }).then(() => {
              this.getBannerData();
            });
          })
          .catch((err) => {
            Swal.fire({
              title: "Oops!",
              text: err.toString(),
              icon: "error",
            });
          });
      }
    },
    async clickDeleteBanner() {
      const token = localStorage.getItem("token");
      deleteBanner(this.id, token)
        .then(() => {
          Swal.fire({
            title: "Success!",
            text: "Banner is deleted successfully!",
            icon: "success",
          }).then(() => {
            this.getBannerData();
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
  },
};
</script>
