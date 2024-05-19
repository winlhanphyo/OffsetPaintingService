<template>
  <div class="card">
    <div class="card-header pb-0">
      <div class="d-flex justify-content-between">
        <h6>User Table</h6>
        <button type="button" class="m-0 btn btn-info" data-bs-target="#createModalToggle" data-bs-toggle="modal">Create</button>
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
            <tr v-for="(item, index) in user" :key="index">
              <td>
                <div class="px-3 py-1">{{ item.id }}</div>
              </td>
              <td>
                <div class="px-3 py-1">
                  <h6 class="mb-0 text-sm">{{ item?.firstName + item?.lastName }}</h6>
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
                <span class="text-secondary text-xs font-weight-bold">{{ item?.createdAt }}</span>
              </td>
              <td class="align-middle">
                <span class="text-secondary text-xs font-weight-bold">{{ item?.updatedAt }}</span>
              </td>
              <td class="align-middle">
                <button type="button" class="m-0 btn btn-primary" data-bs-target="#editModalToggle" data-bs-toggle="modal">Edit</button>
                <button type="button" class="m-0 btn btn-danger ms-2" data-bs-target="#deleteModalToggle" data-bs-toggle="modal">Delete</button>
              </td>
            </tr>
            <tr>
              <td>
                <div class="px-3 py-1">2</div>
              </td>
              <td>
                <div class="px-3 py-1">
                  <h6 class="mb-0 text-sm">Alexa Liras</h6>
                </div>
              </td>
              <td>
                <div class="py-1">
                  <h6 class="mb-0 text-sm">alexa@creative-tim.com</h6>
                </div>
              </td>
              <td>
                <span class="text-secondary text-xs font-weight-bold">09457863367</span>
              </td>
              <td>
                <span class="text-secondary text-xs font-weight-bold">Yangon</span>
              </td>
              <td>
                <span class="text-secondary text-xs font-weight-bold">Admin</span>
              </td>
              <td class="align-middle">
                <span class="text-secondary text-xs font-weight-bold">2024/05/12</span>
              </td>
              <td class="align-middle">
                <span class="text-secondary text-xs font-weight-bold">2024/05/12</span>
              </td>
              <td class="align-middle">
                <button type="button" class="m-0 btn btn-primary" data-bs-target="#editModalToggle" data-bs-toggle="modal">Edit</button>
                <button type="button" class="m-0 btn btn-danger ms-2" data-bs-target="#deleteModalToggle" data-bs-toggle="modal">Delete</button>
              </td>
            </tr>
            <tr>
              <td>
                <div class="px-3 py-1">3</div>
              </td>
              <td>
                <div class="px-3 py-1">
                  <h6 class="mb-0 text-sm">Laurent Perrier</h6>
                </div>
              </td>
              <td>
                <div class="py-1">
                  <h6 class="mb-0 text-sm">laurent@creative-tim.com</h6>
                </div>
              </td>
              <td>
                <span class="text-secondary text-xs font-weight-bold">09457863367</span>
              </td>
              <td>
                <span class="text-secondary text-xs font-weight-bold">Yangon</span>
              </td>
              <td>
                <span class="text-secondary text-xs font-weight-bold">Admin</span>
              </td>
              <td class="align-middle">
                <span class="text-secondary text-xs font-weight-bold">2024/05/12</span>
              </td>
              <td class="align-middle">
                <span class="text-secondary text-xs font-weight-bold">2024/05/12</span>
              </td>
              <td class="align-middle">
                <button type="button" class="m-0 btn btn-primary" data-bs-target="#editModalToggle" data-bs-toggle="modal">Edit</button>
                <button type="button" class="m-0 btn btn-danger ms-2" data-bs-target="#deleteModalToggle" data-bs-toggle="modal">Delete</button>
              </td>
            </tr>
            <tr>
              <td>
                <div class="px-3 py-1">4</div>
              </td>
              <td>
                <div class="px-3 py-1">
                  <h6 class="mb-0 text-sm">Michael Levi</h6>
                </div>
              </td>
              <td>
                <div class="py-1">
                  <h6 class="mb-0 text-sm">michael@creative-tim.com</h6>
                </div>
              </td>
              <td>
                <span class="text-secondary text-xs font-weight-bold">09457863367</span>
              </td>
              <td>
                <span class="text-secondary text-xs font-weight-bold">Yangon</span>
              </td>
              <td>
                <span class="text-secondary text-xs font-weight-bold">Admin</span>
              </td>
              <td class="align-middle">
                <span class="text-secondary text-xs font-weight-bold">2024/05/12</span>
              </td>
              <td class="align-middle">
                <span class="text-secondary text-xs font-weight-bold">2024/05/12</span>
              </td>
              <td class="align-middle">
                <button type="button" class="m-0 btn btn-primary" data-bs-target="#editModalToggle" data-bs-toggle="modal">Edit</button>
                <button type="button" class="m-0 btn btn-danger ms-2" data-bs-target="#deleteModalToggle" data-bs-toggle="modal">Delete</button>
              </td>
            </tr>
            <tr>
              <td>
                <div class="px-3 py-1">5</div>
              </td>
              <td>
                <div class="px-3 py-1">
                  <h6 class="mb-0 text-sm">Richard Gran</h6>
                </div>
              </td>
              <td>
                <div class="py-1">
                  <h6 class="mb-0 text-sm">richard@creative-tim.com</h6>
                </div>
              </td>
              <td>
                <span class="text-secondary text-xs font-weight-bold">09457863367</span>
              </td>
              <td>
                <span class="text-secondary text-xs font-weight-bold">Yangon</span>
              </td>
              <td>
                <span class="text-secondary text-xs font-weight-bold">Admin</span>
              </td>
              <td class="align-middle">
                <span class="text-secondary text-xs font-weight-bold">2024/05/12</span>
              </td>
              <td class="align-middle">
                <span class="text-secondary text-xs font-weight-bold">2024/05/12</span>
              </td>
              <td class="align-middle">
                <button type="button" class="m-0 btn btn-primary" data-bs-target="#editModalToggle" data-bs-toggle="modal">Edit</button>
                <button type="button" class="m-0 btn btn-danger ms-2" data-bs-target="#deleteModalToggle" data-bs-toggle="modal">Delete</button>
              </td>
            </tr>
            <tr>
              <td>
                <div class="px-3 py-1">6</div>
              </td>
              <td>
                <div class="px-3 py-1">
                  <h6 class="mb-0 text-sm">Miriam Eric</h6>
                </div>
              </td>
              <td>
                <div class="py-1">
                  <h6 class="mb-0 text-sm">miriam@creative-tim.com</h6>
                </div>
              </td>
              <td>
                <span class="text-secondary text-xs font-weight-bold">09457863367</span>
              </td>
              <td>
                <span class="text-secondary text-xs font-weight-bold">Yangon</span>
              </td>
              <td>
                <span class="text-secondary text-xs font-weight-bold">Admin</span>
              </td>
              <td class="align-middle">
                <span class="text-secondary text-xs font-weight-bold">2024/05/12</span>
              </td>
              <td class="align-middle">
                <span class="text-secondary text-xs font-weight-bold">2024/05/12</span>
              </td>
              <td class="align-middle">
                <button type="button" class="m-0 btn btn-primary" data-bs-target="#editModalToggle" data-bs-toggle="modal">Edit</button>
                <button type="button" class="m-0 btn btn-danger ms-2" data-bs-target="#deleteModalToggle" data-bs-toggle="modal">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="modal fade" id="createModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header z-1 position-sticky top-0 bg-white">
                <h1 class="modal-title fs-5" id="exampleModalToggleLabel">Create User</h1>
              </div>
              <div class="modal-body">
                <form>
                  <div class="mb-3">
                    <label for="user-name" class="col-form-label">User Name</label>
                    <input type="text" class="form-control" id="user-name">
                  </div>
                  <div class="mb-3">
                    <label for="email" class="col-form-label">Email</label>
                    <input type="text" class="form-control" id="email">
                  </div>
                  <div class="mb-3">
                    <label for="password" class="col-form-label">Password</label>
                    <input type="text" class="form-control" id="password">
                  </div>
                  <div class="mb-3">
                    <label for="password" class="col-form-label">Confirm Password</label>
                    <input type="text" class="form-control" id="password">
                  </div>
                  <div class="mb-3">
                    <label for="phone" class="col-form-label">Phone</label>
                    <input type="text" class="form-control" id="phone">
                  </div>
                  <div class="mb-3">
                    <label for="address" class="col-form-label">Address</label>
                    <input type="text" class="form-control" id="address">
                  </div>
                  <div class="mb-3">
                    <label for="category-name" class="col-form-label">User Type</label>
                    <select class="form-select" aria-label="Default select example">
                      <option selected>Select User Type</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                </form>
              </div>
              <div class="modal-footer position-sticky bottom-0 bg-white">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal">Update</button>
              </div>
            </div>
          </div>
        </div>
        <div class="modal fade" id="editModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header z-1 position-sticky top-0 bg-white">
                <h1 class="modal-title fs-5" id="exampleModalToggleLabel">Edit User</h1>
              </div>
              <div class="modal-body">
                <form>
                  <div class="mb-3">
                    <label for="user-name" class="col-form-label">User Name</label>
                    <input type="text" class="form-control" id="user-name">
                  </div>
                  <div class="mb-3">
                    <label for="email" class="col-form-label">Email</label>
                    <input type="text" class="form-control" id="email">
                  </div>
                  <div class="mb-3">
                    <label for="password" class="col-form-label">Password</label>
                    <input type="text" class="form-control" id="password">
                  </div>
                  <div class="mb-3">
                    <label for="password" class="col-form-label">Confirm Password</label>
                    <input type="text" class="form-control" id="password">
                  </div>
                  <div class="mb-3">
                    <label for="phone" class="col-form-label">Phone</label>
                    <input type="text" class="form-control" id="phone">
                  </div>
                  <div class="mb-3">
                    <label for="address" class="col-form-label">Address</label>
                    <input type="text" class="form-control" id="address">
                  </div>
                  <div class="mb-3">
                    <label for="category-name" class="col-form-label">User Type</label>
                    <select class="form-select" aria-label="Default select example">
                      <option selected>Select User Type</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                </form>
              </div>
              <div class="modal-footer position-sticky bottom-0 bg-white">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal">Update</button>
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
                <button type="button" class="btn btn-danger" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal">Delete</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getUser } from "@/services/admin.service.js";

export default {
  data() {
    return {
      users: [],
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
  },
};
</script>

<style lang="scss">
  .z-1 {
    z-index: 1;
  }
</style>
