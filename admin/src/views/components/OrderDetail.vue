<template>
  <div class="container mt-5">
    <div class="row mb-4">
      <div class="col text-center">
        <h1>Order Details</h1>
        <p class="text-muted">Order ID: #{{ detailData?.id }}</p>
        <h3>{{ detailData?.firstName + " " + detailData?.lastName}}</h3>
      </div>
    </div>

    <div class="row">
      <div class="col-lg-6">
        <div class="card mb-4">
          <div class="card-header bg-primary text-white">
            <h5 class="mb-0">Order Information</h5>
          </div>
          <div class="card-body">
            <ul class="list-group list-group-flush">
              <li class="list-group-item"><strong>Status:</strong> {{ detailData?.status }}</li>
              <li class="list-group-item"><strong>Amount:</strong> K {{ detailData?.totalAmount }}</li>
              <li class="list-group-item"><strong>Date:</strong> {{ detailData?.createdAt }}</li>
              <!-- <li class="list-group-item"><strong>Payment Method:</strong> Credit Card</li> -->
            </ul>
          </div>
        </div>
      </div>

      <div class="col-lg-6">
        <div class="card mb-4">
          <div class="card-header bg-primary text-white">
            <h5 class="mb-0">Customer Information</h5>
          </div>
          <div class="card-body">
            <ul class="list-group list-group-flush">
              <li class="list-group-item"><strong>Name:</strong> {{ detailData?.firstName + " " + detailData?.lastName}}</li>
              <li class="list-group-item"><strong>Address:</strong> {{ detailData?.address }}</li>
              <li class="list-group-item"><strong>Email:</strong> {{ detailData?.email }}</li>
              <li class="list-group-item"><strong>Phone:</strong> {{ detailData?.phone }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="row mt-4">
      <div class="col text-center">
        <button class="btn btn-success me-2">Edit Order</button>
        <button class="btn btn-danger">Cancel Order</button>
      </div>
    </div>
  </div>
</template>

<script>
import { getOrderById } from "@/services/admin.service.js";
import { imgRoot } from "./../../../config";

export default {
  name: "OrderDetail",
  components: {},
  data() {
    return {
      categoryList: [],
      detailData: {},
      media: [],

      formatList: [],
      gsmList: [],
      biTypeList: [],
      lamList: [],
      ratioFullSizeList: [],
      // quantityList: [],
      colorBList: [],
      colorFList: [],
      widthHeightList: [],
      ratioWidthHeightList: [],
      imgRoot: imgRoot,

      sheet: 1,
      selectedGsm: "128",
      quantity: "",
      ratioFullSize: "",
      ratioWidthHeight: "",
      ratioWidth: "",
      ratioHeight: "",
      widthHeight: "",
      selectedFormat: "",
      selectedColorF: "",
      selectedColorB: "",
      selectedLam: "",
      selectedBiType: "",
      totalPrice: 0,

      toggles: {
        productName: true,
        category: true,
        image: true,
        status: true,
        quantity: true,
        description: true,
        printingType: true,
        biType: true,
        type: true,
        gsm: true,
        width: true,
        height: true,
        depth: true,
        selectedRatioFullSize: true,
        ratioWidth: true,
        ratioHeight: true,
        format: true,
        selectedColorF: true,
        selectedColorB: true,
        selectedLam: true,
        lamSqPrice: true,
        paperPrice: true,
        pressPrice: true,
        biPrice: true,
        dieCut: true,
        gluding: true,
        plySet: true,
        other: true,
        cover: true,
        remark: true,
        ctpPrice: true,
        waste: true,
        abbb: true,
      },
    };
  },
  mounted() {
    this.getProductDetailData();
  },
  methods: {
    async getProductDetailData() {
      const id = this.$route.params.id;
      const token = localStorage.getItem("token");
      const res = await getOrderById(id, token);
      if (res?.data?.data) {
        this.detailData = res?.data?.data;
        console.log("------detail data", this.detailData);
      }
    },
  }
};
</script>
