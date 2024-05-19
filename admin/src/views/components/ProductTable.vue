<script setup>
import ArgonPagination from "@/components/ArgonPagination.vue";
import ArgonPaginationItem from "@/components/ArgonPaginationItem.vue";
</script>

<template>
  <div class="card">
    <div class="card-header pb-0">
      <div class="d-flex justify-content-between">
        <h6>Product Table</h6>
        <a class="btn btn-info" href="">Create</a>
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
                Category Name
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
            <tr v-for="(item, index) in products" :key="index">
              <td>
                <div class="px-3 py-1">{{ item?.id }}</div>
              </td>
              <td>
                <div class="py-1">
                  <h6 class="mb-0 text-sm">
                    <a href="#detailModalToggle" data-bs-toggle="modal">{{
                      item?.name
                    }}</a>
                  </h6>
                </div>
              </td>
              <td>
                <div class="px-3 py-1">
                  <div>
                  {{ console.log("------productImage", item?.productImage) }}
                    <img :src="item?.productImage" class="avatar me-3" alt="user1" />
                  </div>
                </div>
              </td>
              <td>
                <div class="py-1">
                  <h6 class="mb-0 text-sm">{{ item?.category?.name }}</h6>
                </div>
              </td>
              <td class="align-middle text-center">
                <span class="text-secondary text-xs font-weight-bold">{{
                  item?.createdAt
                }}</span>
              </td>
              <td class="align-middle text-center">
                <span class="text-secondary text-xs font-weight-bold">{{
                  item?.updatedAt
                }}</span>
              </td>
              <td class="align-middle">
                <button
                  type="button"
                  class="m-0 btn btn-primary"
                  data-bs-target="#editModalToggle"
                  data-bs-toggle="modal"
                >
                  Edit
                </button>
                <button
                  type="button"
                  class="m-0 btn btn-danger ms-2"
                  data-bs-target="#deleteModalToggle"
                  data-bs-toggle="modal"
                >
                  Delete
                </button>
              </td>
            </tr>
            <!-- <tr>
              <td>
                <div class="px-3 py-1">2</div>
              </td>
              <td>
                <div class="py-1">
                  <h6 class="mb-0 text-sm"><a href="#detailModalToggle" data-bs-toggle="modal">Alexa Liras</a></h6>
                </div>
              </td>
              <td>
                <div class="px-3 py-1">
                  <div>
                    <img
                      src="../../assets/img/team-3.jpg"
                      class="avatar me-3"
                      alt="user2"
                    />
                  </div>
                </div>
              </td>
              <td>
                <div class="py-1">
                  <h6 class="mb-0 text-sm">Alexa Liras</h6>
                </div>
              </td>
              <td class="align-middle text-center">
                <span class="text-secondary text-xs font-weight-bold">2024/05/12</span>
              </td>
              <td class="align-middle text-center">
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
                <div class="py-1">
                  <h6 class="mb-0 text-sm"><a href="#detailModalToggle" data-bs-toggle="modal">Laurent Perrier</a></h6>
                </div>
              </td>
              <td>
                <div class="px-3 py-1">
                  <div>
                    <img
                      src="../../assets/img/team-4.jpg"
                      class="avatar me-3"
                      alt="user3"
                    />
                  </div>
                </div>
              </td>
              <td>
                <div class="py-1">
                  <h6 class="mb-0 text-sm">Laurent Perrier</h6>
                </div>
              </td>
              <td class="align-middle text-center">
                <span class="text-secondary text-xs font-weight-bold">2024/05/12</span>
              </td>
              <td class="align-middle text-center">
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
                <div class="py-1">
                  <h6 class="mb-0 text-sm"><a href="#detailModalToggle" data-bs-toggle="modal">Michael Levi</a></h6>
                </div>
              </td>
              <td>
                <div class="px-3 py-1">
                  <div>
                    <img
                      src="../../assets/img/team-3.jpg"
                      class="avatar me-3"
                      alt="user4"
                    />
                  </div>
                </div>
              </td>
              <td>
                <div class="py-1">
                  <h6 class="mb-0 text-sm">Michael Levi</h6>
                </div>
              </td>
              <td class="align-middle text-center">
                <span class="text-secondary text-xs font-weight-bold">2024/05/12</span>
              </td>
              <td class="align-middle text-center">
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
                <div class="py-1">
                  <h6 class="mb-0 text-sm"><a href="#detailModalToggle" data-bs-toggle="modal">Richard Gran</a></h6>
                </div>
              </td>
              <td>
                <div class="px-3 py-1">
                  <div>
                    <img
                      src="../../assets/img/team-2.jpg"
                      class="avatar me-3"
                      alt="user5"
                    />
                  </div>
                </div>
              </td>
              <td>
                <div class="py-1">
                  <h6 class="mb-0 text-sm">Richard Gran</h6>
                </div>
              </td>
              <td class="align-middle text-center">
                <span class="text-secondary text-xs font-weight-bold">2024/05/12</span>
              </td>
              <td class="align-middle text-center">
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
                <div class="py-1">
                  <h6 class="mb-0 text-sm"><a href="#detailModalToggle" data-bs-toggle="modal">Miriam Eric</a></h6>
                </div>
              </td>
              <td>
                <div class="px-3 py-1">
                  <div>
                    <img
                      src="../../assets/img/team-4.jpg"
                      class="avatar me-3"
                      alt="user6"
                    />
                  </div>
                </div>
              </td>
              <td>
                <div class="py-1">
                  <h6 class="mb-0 text-sm">Miriam Eric</h6>
                </div>
              </td>
              <td class="align-middle text-center">
                <span class="text-secondary text-xs font-weight-bold">2024/05/12</span>
              </td>
              <td class="align-middle text-center">
                <span class="text-secondary text-xs font-weight-bold">2024/05/12</span>
              </td>
              <td class="align-middle">
                <button type="button" class="m-0 btn btn-primary" data-bs-target="#editModalToggle" data-bs-toggle="modal">Edit</button>
                <button type="button" class="m-0 btn btn-danger ms-2" data-bs-target="#deleteModalToggle" data-bs-toggle="modal">Delete</button>
              </td>
            </tr> -->
          </tbody>
        </table>
        <argon-pagination>
          <argon-pagination-item prev />
          <argon-pagination-item label="1" active />
          <argon-pagination-item label="2" />
          <argon-pagination-item label="3" />
          <argon-pagination-item next />
        </argon-pagination>
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
                  Product Update
                </h1>
              </div>
              <div class="modal-body">
                <form>
                  <div class="mb-3">
                    <label for="product-name" class="col-form-label">Product Name</label>
                    <input type="text" class="form-control" id="product-name" />
                  </div>
                  <div class="mb-3">
                    <label for="category-name" class="col-form-label"
                      >Category Name</label
                    >
                    <select class="form-select" aria-label="Default select example">
                      <option selected>Select Category Menu</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                  <div class="mb-3">
                    <label for="formFile" class="col-form-label">Image file</label>
                    <input class="form-control" type="file" id="formFile" />
                  </div>
                </form>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                  Close
                </button>
                <button
                  type="button"
                  class="btn btn-primary"
                  data-bs-target="#exampleModalToggle2"
                  data-bs-toggle="modal"
                >
                  Update
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
                  data-bs-toggle="modal"
                >
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
                    <div class="w-75 ms-2">Testing Testing Testing Testing</div>
                  </div>
                  <div class="d-flex mt-3">
                    <div class="w-28">Category Name:</div>
                    <div class="w-75 ms-2">Testing Testing</div>
                  </div>
                  <div class="d-flex mt-3">
                    <div class="w-28">Created User:</div>
                    <div class="w-75 ms-2">John Michael</div>
                  </div>
                  <div class="d-flex mt-3">
                    <div class="w-28">Updated User:</div>
                    <div class="w-75 ms-2">Richard Gran</div>
                  </div>
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
import { imgRoot } from "../../../config.js";
import { getProduct } from "@/services/admin.service.js";

export default {
  data() {
    return {
      products: [
        {
          id: 1,
          name: "John Michael",
          productImage: require("@/assets/img/team-2.jpg"),
          categoryName: "John Michael",
          createdAt: "2024/05/12",
          updatedAt: "2024/05/12",
        },
        {
          id: 2,
          name: "Alexa Liras",
          productImage: require("../../assets/img/team-3.jpg"),
          categoryName: "John Michael",
          createdAt: "2024/05/12",
          updatedAt: "2024/05/12",
        },
        {
          id: 3,
          name: "Laurent Perrier",
          productImage: require("../../assets/img/team-4.jpg"),
          categoryName: "John Michael",
          createdAt: "2024/05/12",
          updatedAt: "2024/05/12",
        },
        {
          id: 4,
          name: "Michael Levi",
          productImage: require("../../assets/img/team-3.jpg"),
          categoryName: "Michael Levi",
          createdAt: "2024/05/12",
          updatedAt: "2024/05/12",
        },
        {
          id: 5,
          name: "Richard Gran",
          productImage: require("../../assets/img/team-2.jpg"),
          categoryName: "Richard Gran",
          createdAt: "2024/05/12",
          updatedAt: "2024/05/12",
        },
        {
          id: 6,
          name: "Miriam Eric",
          productImage: require("../../assets/img/team-4.jpg"),
          categoryName: "Miriam Eric",
          createdAt: "2024/05/12",
          updatedAt: "2024/05/12",
        },
      ],
    };
  },
  mounted() {
    this.getProductData();
  },
  methods: {
    async getProductData() {
      const token = localStorage.getItem("token");
      const res = await getProduct(token);
      console.log("---------res", res);

      this.products = res?.data?.data;
      this.products.map((dist) => {
        if (dist?.media?.length > 0) {
          dist.productImage = imgRoot + dist.media[0]?.url;
        }
      });
    },
  },
};
</script>

<style lang="scss">
.w-28 {
  width: 28%;
}
.text-sm {
  a {
    text-decoration: underline;
  }
}
</style>
