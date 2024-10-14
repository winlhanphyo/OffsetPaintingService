<script setup>
import ArgonPagination from "@/components/ArgonPagination.vue";
import ArgonPaginationItem from "@/components/ArgonPaginationItem.vue";
</script>

<template>
  <div class="card">
    <div class="card-header pb-0">
      <div class="d-flex justify-content-between">
        <h6>Order table</h6>
        <div class="pe-md-3 d-flex align-items-center ms-md-auto">
          <button type="button" class="m-2 btn btn-primary" @click="downloadCSVData()">
            Download
          </button>
          <div class="input-group">
            <span class="input-group-text text-body">
              <i class="fas fa-search" aria-hidden="true"></i>
            </span>
            <input type="text" class="form-control" placeholder="Type here..." />
          </div>
        </div>
      </div>
    </div>
    <div class="card-body px-0 pt-0 pb-2">
      <div class="table-responsive p-0">
        <table class="table align-items-center mb-0">
          <thead>
            <tr>
              <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                Name
              </th>
              <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                Address
              </th>
              <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                Amount
              </th>
              <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                Status
              </th>
              <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder">
                Confirm
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(order, index) in orders" :key="index">
              <td>
                <div class="px-3 py-1">
                  <router-link :to="`/order/${order.id}`" class="text-decoration-none">
                    <p class="mb-0 text-sm">{{ order.firstName + ' ' + order.lastName }}</p>
                  </router-link>
                </div>
              </td>
              <td class="align-middle text-center text-sm">
                <p class="text-sm mb-0">{{ order?.address }}</p>
              </td>
              <td class="align-middle text-center">
                <span class="text-secondary text-sm">{{ order?.totalAmount || 0 }}</span>
              </td>
              <td class="select-width">
                {{ order.status }}
              </td>
              <td class="align-middle d-flex justify-content-center">
                <button type="button" class="m-0 btn btn-primary"
                  data-bs-target="#changeStatusModal"
                  data-bs-toggle="modal"
                  @click="showStatusModal(order)">
                    Change Status
                </button>
                <!-- <button type="button" class="m-0 btn btn-danger" @click="changeStatus('cancel')">
                  Cancel
                </button> -->
              </td>

            </tr>
          </tbody>
        </table>
        <argon-pagination>
          <argon-pagination-item prev @click="clickPaginate(currentPage - 1)" :disabled="disabledPreviousBtn" />
          <!-- <argon-pagination-item label="1" active />
          <argon-pagination-item label="2" />
          <argon-pagination-item label="3" /> -->
          {{ currentPage }} of {{ lastPage }}
          <argon-pagination-item next @click="clickPaginate(currentPage + 1)" :disabled="disabledNextBtn" />
        </argon-pagination>
      </div>
    </div>
  </div>

  <div class="modal fade" id="changeStatusModal" aria-hidden="true" aria-labelledby="modalToggleLavel" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="modalToggleLavel">
            Order Data
          </h1>
        </div>
        <div class="modal-body">
          <form>
            <div class="mb-3">
              <label for="product-name" class="col-form-label">Order ID</label>
              {{ orderId }}
            </div>
            <div class="mb-3">
              <label for="category-name" class="col-form-label">Status</label>
              <select class="form-select mx-0" aria-label="Default select example" v-model="statusValue">
                <option value="new">New</option>
                <option value="shipping">Shipping</option>
                <option value="cancel">Cancel</option>
                <option value="complete">Done</option>
              </select>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" id="close">
            Close
          </button>
          <button type="button" class="btn btn-primary"
            data-bs-target="#changeStatusModal" data-bs-toggle="modal"
            @click="updateStatus()">
            Change Status
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import moment from "moment";
import Swal from "sweetalert2";
// import { imgRoot } from "../../../config.js";
import { getOrder, updateOrderStatus } from "@/services/admin.service.js";

export default {
  data() {
    return {
      orders: [
        // { fullName: 'John Michael', address: 'Yangon', amount: 100, status: 'New' },
        // { fullName: 'Alexa Liras', address: 'Bago', amount: 200, status: 'New' },
        // { fullName: 'Laurent Perrier', address: 'Nay Pyi Daw', amount: 150, status: 'New' },
        // { fullName: 'Michael Levi', address: 'Mandalay', amount: 250, status: 'New' },
        // { fullName: 'Richard Gran', address: 'Magway', amount: 175, status: 'New' },
        // { fullName: 'Miriam Eric', address: 'Maw La Myaing', amount: 120, status: 'New' }
      ],
      id: "",
      name: "",
      image: "",
      categoryId: "",
      description: "",
      status: "",
      categoryList: [],
      statusValue: "new",
      modalLabel: "Create",
      detailData: {},
      searchName: null,
      total: 1,
      currentPage: 1,
      lastPage: 1,
      orderId: null
    };
  },
  mounted() {
    this.getOrder();
  },
  methods: {
    downloadCSVData() {
      let csv = 'ID,Customer,Amount,Address,Status\n';
      this.orders.forEach((row) => {
        csv += `${row.id},`;
        csv += `${row.firstName} ${row.lastName},`;
        csv += `${row.totalAmount},`;
        csv += `${row.address},`;
        csv += `${row.status}\n`;
      });

      const anchor = document.createElement('a');
      anchor.href = 'data:text/csv;charset=utf-8,' + encodeURIComponent(csv);
      anchor.target = '_blank';
      anchor.download = 'orderList.csv';
      anchor.click();
    },
    async getOrder() {
      localStorage.setItem("setAllLoading", true);
      const token = localStorage.getItem("token");
      const res = await getOrder(token, this.searchName);

      localStorage.removeItem("setAllLoading");

      this.orders = res?.data?.data;
      this.total = res?.data?.count;
      let page = this.total <= 10 ? 1 : this.total / 10;
      this.lastPage = (this.total % 10 === 0 || page === 1) ? page : page + 1;
      console.log("------orders", this.orders);
      // this.products?.map((dist) => {
      //   if (dist?.media?.length > 0) {
      //     dist.productImage = imgRoot + dist.media[0]?.url;
      //   }
      // });
    },
    async clickPaginate(page = 1) {
      localStorage.setItem("setAllLoading", true);
      const token = localStorage.getItem("token");
      page = Number(page) || 1;
      let params = {
        size: 10,
        page
      };
      console.log("click paginate-------", params);
      if (this.searchName) {
        params.name = this.searchName;
      }
      const res = await getOrder(token, null, params);
      localStorage.removeItem("setAllLoading");
      this.orders = res?.data?.data;
      this.total = res?.data?.count;
      this.lastPage = (this.total % 10 === 0 || page === 1) ? page : page + 1;
    },
    showStatusModal(order) {
      console.log("-------order", order);
      this.orderId = order.id;
      this.statusValue = order.status;
    },
    updateStatus() {
      const token = localStorage.getItem("token");
      const data = {
        status: this.statusValue
      };
      updateOrderStatus(this.orderId, data, token)
        .then(() => {
          Swal.fire({
            title: "Success!",
            text: "Order status is updated successfully!",
            icon: "success"
          }).then(() => {
            this.getOrder();
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
  computed: {
    disabledNextBtn() {
      const temp = this.total / (this.currentPage * 10);
      if (this.total % 10 === 0) {
        if (temp < 2) {
          return true;
        } else {
          return false;
        }
      } else {
        if (temp < 1) {
          return true;
        } else {
          return false;
        }
      }
    },
    disabledPreviousBtn() {
      console.log("current page", this.currentPage, typeof this.currentPage);
      return (this.currentPage > 1) ? false : true;
    }
  }
};
</script>

<style>
.select-width {
  width: 13%;
}
</style>
