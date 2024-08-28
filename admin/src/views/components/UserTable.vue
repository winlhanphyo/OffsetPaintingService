<script setup>
// import ArgonPagination from "@/components/ArgonPagination.vue";
// import ArgonPaginationItem from "@/components/ArgonPaginationItem.vue";
</script>

<template>
  <div class="card">
    <div class="card-header pb-0">
      <div class="d-flex justify-content-between">
        <h6>User Table</h6>
        <button type="button" class="m-0 btn btn-info" data-bs-target="#editModalToggle" data-bs-toggle="modal" @click="changeLabel('Create')">Create</button>
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
                User name
              </th>
              <th
                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"
              >
                Email
              </th>
              <th
                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"
              >
                Phone
              </th>
              <th
                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"
              >
                Address
              </th>
              <th
                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"
              >
                User type
              </th>
              <th
                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"
              >
                Created At
              </th>
              <th
                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"
              >
                Updated At
              </th>
              <th class="text-secondary opacity-7"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in users" :key="index">
              <td>
                <div class="px-3 py-1">{{ item.id }}</div>
              </td>
              <td>
                <div class="px-3 py-1">
                  <h6 class="mb-0 text-sm">{{ item?.firstName + " " + item?.lastName }}</h6>
                </div>
              </td>
              <td>
                <div class="py-1">
                  <h6 class="mb-0 text-sm">{{ item?.email }}</h6>
                </div>
              </td>
              <td>
                <span class="text-secondary text-xs font-weight-bold">{{ item?.phone }}</span>
              </td>
              <td>
                <span class="text-secondary text-xs font-weight-bold">{{ item?.address }}</span>
              </td>
              <td>
                <span class="text-secondary text-xs font-weight-bold">{{ item?.type }}</span>
              </td>
              <td class="align-middle">
                <span class="text-secondary text-xs font-weight-bold">{{ moment(item?.createdAt).format("YYYY-MM-DD") }}</span>
              </td>
              <td class="align-middle">
                <span class="text-secondary text-xs font-weight-bold">{{ moment(item?.updatedAt).format("YYYY-MM-DD") }}</span>
              </td>
              <td class="align-middle">
                <button type="button" class="m-0 btn btn-primary"
                  data-bs-target="#editModalToggle"
                  data-bs-toggle="modal"
                  @click="changeLabel('Update', item)">Edit</button>
                <button type="button" class="m-0 btn btn-danger ms-2" data-bs-target="#deleteModalToggle" data-bs-toggle="modal">Delete</button>
              </td>
            </tr>
            
          </tbody>
        </table>
        <div class="modal fade" id="editModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header z-1 position-sticky top-0 bg-white">
                <h1 class="modal-title fs-5" id="exampleModalToggleLabel">{{ modalLabel }} User</h1>
              </div>
              <div class="modal-body">
                <form>
                  <div class="mb-3">
                    <label for="firstName" class="col-form-label">First Name</label>
                    <input type="text" class="form-control" id="firstName" v-model="firstName">
                  </div>
                  <div class="mb-3">
                    <label for="lastName" class="col-form-label">Last Name</label>
                    <input type="text" class="form-control" id="lastName" v-model="lastName">
                  </div>
                  <div class="mb-3">
                    <label for="email" class="col-form-label">Email</label>
                    <input type="text" class="form-control" id="email" v-model="email">
                  </div>
                  <div class="mb-3">
                    <label for="password" class="col-form-label">Password</label>
                    <input type="password" class="form-control" id="password" v-model="password">
                  </div>
                  <div class="mb-3">
                    <label for="phone" class="col-form-label">Phone</label>
                    <input type="text" class="form-control" id="phone" v-model="phone">
                  </div>
                  <div class="mb-3">
                    <label for="address" class="col-form-label">Address</label>
                    <input type="text" class="form-control" id="address" v-model="address">
                  </div>
                  <div class="mb-3">
                    <label for="category-name" class="col-form-label">User Type</label>
                    <select class="form-select" v-model="type" @change="changetype($event)">
                      <option value="">Select User Type</option>
                      <option value="superAdmin">Super Admin</option>
                      <option value="Admin">Admin</option>
                      <option value="User">User</option>
                    </select>
                  </div>
                </form>
              </div>
              <div class="modal-footer position-sticky bottom-0 bg-white">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" id="close">Close</button>
                <button type="button" class="btn btn-primary" data-bs-target="#editModalToggle" data-bs-toggle="modal" @click="submitUser()">{{ modalLabel }}</button>
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
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-danger" data-bs-target="#editModalToggle" data-bs-toggle="modal">Delete</button>
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
import { getUser, updateUser, createUser, deleteUser } from "@/services/admin.service.js";

export default {
  data() {
    return {
      users: [],
      id: "",
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      phone: "",
      address: "",
      type: "",
      modalLabel: "Create"
    };
  },
  mounted() {
    this.getUserData();
  },
  methods: {
    async getUserData() {
      const token = localStorage.getItem("token");
      const res = await getUser(token);

      this.users = res?.data?.data;
    },
    changeLabel(text, data=null) {
      this.modalLabel = text;
      if (this.modalLabel === 'Create') {
        this.firstName = "";
        this.lastName = "";
        this.email = "";
        this.phone = "";
        this.address = "";
        this.type = "";
      } else {
        this.id = data?.id;
        this.firstName = data?.firstName;
        this.lastName = data?.lastName;
        this.email = data?.email;
        this.phone = data?.phone;
        this.address = data?.address;
        this.type = data?.type;
      }
    },
    showDeleteDialog(data) {
      this.id = data?.id;
    },
    async submitUser() {
      const token = localStorage.getItem("token");
      document.getElementById('close').click();
      if (this.modalLabel === 'Create') {
        let formParam = new FormData();
        formParam.append('firstName', this.firstName);
        formParam.append('lastName', this.lastName);
        formParam.append('password', this.password);
        formParam.append('email', this.email);
        formParam.append('phone', this.phone);
        formParam.append('address', this.address);
        formParam.append('type', this.type);

       createUser(formParam, token)
          .then(() => {
            Swal.fire({
              title: "Success!",
              text: "User is created successfully!",
              icon: "success"
            }).then(() => {
              this.getUserData();
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
        formParam.append('firstName', this.firstName);
        formParam.append('lastName', this.lastName);
        formParam.append('email', this.email);
        formParam.append('phone', this.phone);
        formParam.append('address', this.address);
        formParam.append('type', this.type);

       updateUser(this.id, formParam, token)
          .then(() => {
            Swal.fire({
              title: "Success!",
              text: "User is updated successfully!",
              icon: "success"
            }).then(() => {
              this.getUserData();
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
    async clickDeleteUser() {
      const token = localStorage.getItem("token");
      deleteUser(this.id, token)
          .then(() => {
            Swal.fire({
              title: "Success!",
              text: "User is deleted successfully!",
              icon: "success"
            }).then(() => {
              this.getUserData();
            });
          }).catch((err) => {
            Swal.fire({
              title: "Oops!",
              text: err.toString(),
              icon: "error"
            })
          });
    },
    changetype (event) {
      this.type = event.target.value;
    }
  },
};
</script>

<style lang="scss">
  .z-1 {
    z-index: 1;
  }
</style>
