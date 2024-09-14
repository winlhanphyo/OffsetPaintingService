<script setup></script>

<template>
  <div class="card">
    <div class="card-header pb-0">
      <div class="d-flex justify-content-between">
        <h6>Product Detail</h6>
      </div>
    </div>
    <div class="card-body px-0 pt-0 pb-2">
      <div class="product-create">
        <div class="d-flex mb-3">
          <div class="form-group col-sm-4 p-2">
            <label for="productName">Product Name:</label>
            <!-- <input type="text" class="form-control" id="product-name" v-model="name" /> -->
            <div>
              {{ detailData?.name }}
            </div>
          </div>
          <div class="form-group col-sm-4 p-2">
            <label for="categoryName">Category Name:</label>
            <!-- <select
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
            </select> -->
            {{ detailData?.category?.name }}
          </div>

          <div class="form-group col-sm-4 p-2">
            <label for="image">Image:</label>
            <img v-if="detailData?.media?.length > 0" style="width: 200px;height: 200px;" :src="imgRoot + detailData?.media[0]?.url" />
          </div>
        </div>

        <div class="d-flex mb-3">
          <div class="form-group col-sm-4 p-2">
            <label for="productName">Status:</label>
            <div>{{ detailData?.status }}</div>
            <!-- <select class="form-select" @change="changeStatus($event)" v-model="status">
              <option value="">None</option>
              <option value="Hot">Hot</option>
              <option value="Sale">Sale</option>
            </select> -->
          </div>
          <div class="form-group col-sm-4 p-2">
            <label for="categoryName">Description:</label>
            <div>{{ detailData?.description }}</div>
            <!-- <textarea
              id="w3review"
              name="w3review"
              rows="4"
              v-model="description"
            ></textarea> -->
          </div>
        </div>

        <div class="d-flex mb-3">
          <div class="form-group col-sm-4 p-2">
            <label for="printingType">Printing Type:</label>
            {{ detailData?.printingType }}
          </div>
          <div class="form-group col-sm-4 p-2">
            <label for="quantity">Quantity:</label>
            <select name="quantity" id="quantity" class="form-select" v-model="quantity">
              <option value="" selected disabled hidden>Choose Quantity</option>
              <option v-for="item in quantityList" :value="item" :key="item">{{ item }}</option>
            </select>
          </div>
          <div class="form-group col-sm-4 p-2">
            <label for="sheet">Sheet:</label>
            <input name="sheet" v-if="detailData?.sheet" type="text" v-model="sheet" class="form-control" />
            <label v-else>{{ 1 }}</label>
          </div>
        </div>
        <div class="d-flex mb-3">
          <div class="form-group col-sm-4 p-2">
            <label for="type">Type:</label>
            {{ detailData?.type }}
          </div>
          <div class="form-group col-sm-4 p-2">
            <label for="gsm">Gsm:</label>
            <select name="gsm" id="gsm" class="form-select" v-model="selectedGsm">
              <option value="" selected disabled hidden>Choose Gsm</option>
              <option v-for="item in gsmList" :value="item" :key="item">{{ item }}</option>
            </select>
          </div>
          <div class="form-group col-sm-4 p-2">
            <label for="width">Width Height Depth:</label>
            <select name="width" id="width" class="form-select" v-model="widthHeight">
              <option value="" selected disabled hidden>Choose Width And Height (Depth)</option>
              <option v-for="item in widthHeightList" :value="item.value" :key="item?.value">{{ item?.label }}</option>
            </select>
          </div>
        </div>
        <div class="d-flex mb-3">
          <div class="form-group col-sm-4 p-2">
            <label for="ratioFullSize">(Ratio) Full Size:</label>
            <select name="ratioFullSize" id="size" class="form-select" v-model="ratioFullSize">
              <option value="" selected disabled hidden>Choose Ratio Size</option>
              <option v-for="item in ratioFullSizeList" :key="item" :value="item">{{ item }}</option>
            </select>
          </div>

          <div class="form-group col-sm-4 p-2">
            <label for="ratioWidth">Ratio Width Height:</label>
            <select name="ratioWidth" id="ratioWidth" class="form-select" v-model="ratioWidthHeight">
              <option value="" selected disabled hidden>Choose Ratio Width And Height</option>
              <option v-for="item in ratioWidthHeightList" :value="item.value" :key="item?.value">{{ item?.label }}</option>
            </select>
          </div>

          <div class="form-group col-sm-4 p-2">
            <label for="format">Format:</label>
            <select name="format" id="format" class="form-select" v-model="selectedFormat">
              <option value="" selected disabled hidden>Choose Format</option>
              <option v-for="item in formatList" :key="item" :value="item">{{ item }}</option>
            </select>
          </div>
        </div>

        <div class="d-flex mb-3">
          <div class="form-group col-sm-4 p-2">
            <label for="colorF">Color F:</label>
            <select name="size" id="size" class="form-select" v-model="selectedColorF">
              <option value="" selected disabled hidden>Choose ColorF</option>
              <option v-for="item in colorFList" :key="item" :value="item">{{ item }}</option>
            </select>
          </div>

          <div class="form-group col-sm-4 p-2">
            <label for="Ratio Width">Color B:</label>
            <select name="colorB" id="colorB" class="form-select" v-model="selectedColorB">
              <option value="" selected disabled hidden>Choose ColorB</option>
              <option v-for="item in colorBList" :key="item" :value="item">{{ item }}</option>
            </select>
          </div>

          <div class="form-group col-sm-4 p-2">
            <label for="lam">Lam:</label>
            <select name="lam" id="lam" class="form-select" v-model="selectedLam">
              <option value="" selected disabled hidden>Choose Lam</option>
              <option v-for="item in lamList" :key="item" :value="item">{{ item }}</option>
            </select>
          </div>
        </div>

        <div class="d-flex mb-3">
          <div class="form-group col-sm-4 p-2">
            <label for="biType">BiType:</label>
            <select name="biType" id="biType" class="form-select" v-model="selectedBiType">
              <option value="" selected disabled hidden>Choose Bi Type</option>
              <option v-for="item in biTypeList" :key="item" :value="item">{{ item }}</option>
            </select>
          </div>

          <div class="form-group col-sm-4 p-2">
            <label for="Ratio Width">Paper Price:</label>
            {{ detailData?.paperPrice }}
          </div>

          <div class="form-group col-sm-4 p-2">
            <label for="Ratio Width">Press Price:</label>
            {{ detailData?.pressPrice }}
          </div>
        </div>

        <div class="d-flex mb-3">
          <div class="form-group col-sm-4 p-2">
            <label for="Ratio Width">Lam Sq Price:</label>
            {{ detailData?.lamSqPrice }}
          </div>

          <div class="form-group col-sm-4 p-2">
            <label for="dieCut">Die Cut:</label>
            <label>{{ detailData?.dieCut }}</label>
          </div>

          <div class="form-group col-sm-4 p-2">
            <label for="gluding">Gluding:</label>
            <label>{{ detailData?.gluding }}</label>
          </div>
        </div>

        <div class="d-flex mb-3">
          <div class="form-group col-sm-4 p-2">
            <label for="plySet">Ply Set:</label>
            <label>{{ detailData?.plySet }}</label>
          </div>

          <div class="form-group col-sm-4 p-2">
            <label for="biType">Bi Price:</label>
            <label>{{ detailData?.biPrice }}</label>
          </div>

          <div class="form-group col-sm-4 p-2">
            <label for="other">Other:</label>
            <label>{{ detailData?.other }}</label>
          </div>
        </div>

        <div class="d-flex mb-3">
          <div class="form-group col-sm-4 p-2">
            <label for="cover">Cover:</label>
            <label>{{ detailData?.cover }}</label>
          </div>

          <div class="form-group col-sm-4 p-2">
            <label for="remark">Remark:</label>
            <label>{{ detailData?.remark }}</label>
          </div>

          <div class="form-group col-sm-4 p-2">
            <label for="ctpPrice">CTP Price:</label>
            <label>{{ detailData?.ctpPrice }}</label>
          </div>
        </div>

        <div class="d-flex mb-3">
          <div class="form-group col-sm-4 p-2">
            <label for="waste">Waste:</label>
            <label>{{ detailData?.waste }}</label>
          </div>
          <div class="form-group col-sm-4 p-2">
            <label for="abbb">1 (AB)2 (BB):</label>
            <label>{{ detailData?.abbb }}</label>
          </div>
        </div>

        <div class="d-flex mb-3">
          <div class="form-group col-sm-4 p-2">
            <label for="Ratio Width" class="totalPrice">Total Price:</label>
            <label class="totalPrice">{{ totalPrice }}</label>
          </div>
        </div>

        <div class="d-flex mb-3">
          <div class="form-group col-sm-4 p-2">
            <button
              class="btn btn-primary"
              style="margin-left: 10px"
              @click="back()"
            >
              Back
            </button>
            <button
              class="btn btn-primary"
              style="margin-left: 10px"
              @click="calculate()"
            >
              Calculate
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <DetailDialog ref="detailDialog" :data="detailDialogData" />
</template>

<script>
// import moment from "moment";
// import Swal from "sweetalert2";
import DetailDialog from "../../components/DetailDialog.vue";
import { imgRoot } from "../../../config.js";
import { getCategory, getProductById } from "@/services/admin.service.js";

export default {
  components: {
    DetailDialog
  },
  data() {
    return {
      categoryList: [],
      detailData: {},
      searchName: null,

      formatList: [],
      gsmList: [],
      biTypeList: [],
      lamList: [],
      ratioFullSizeList: [],
      quantityList: [],
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
      detailDialogData: {}

    };
  },
  async mounted() {
    this.getCategoryData();
    this.id = this.$route?.params?.id;
    if (this.id) {
      const res = await getProductById(this.id);
      this.detailData = res?.data?.data;
      this.formatList = this.detailData?.format ? JSON.parse(this.detailData.format) : [];
      this.gsmList = this.detailData?.gsm ? JSON.parse(this.detailData.gsm) : [];
      this.biTypeList = this.detailData?.biType ? JSON.parse(this.detailData.biType) : [];
      this.lamList = this.detailData?.lam ? JSON.parse(this.detailData.lam) : [];
      this.ratioFullSizeList = this.detailData?.ratioFullSize ? JSON.parse(this.detailData.ratioFullSize) : [];
      this.colorBList = this.detailData?.colorB ? JSON.parse(this.detailData.colorB) : [];
      this.colorFList = this.detailData?.colorF ? JSON.parse(this.detailData.colorF) : [];

      const widthList = this.detailData?.width ? JSON.parse(this.detailData.width) : [];
      const heightList = this.detailData?.height ? JSON.parse(this.detailData.height) : [];
      const depthList = this.detailData?.depth ? JSON.parse(this.detailData.depth) : [];
      const ratioWidthList = this.detailData?.ratioWidth ? JSON.parse(this.detailData.ratioWidth) : [];
      const ratioHeightList = this.detailData?.ratioHeight ? JSON.parse(this.detailData.ratioHeight) : [];
      this.quantityList = this.detailData?.quantity ? JSON.parse(this.detailData.quantity) : [];

      widthList?.map((w) => {
        heightList?.map(h => {
          if (depthList?.length > 0) {
            depthList?.map(d => {
              if (w && h) {
              this.widthHeightList.push({
                value: w + " " + h + " " + d,
                label: "width: " + w + "\" , height: " + h  + "\" , depth: " + d + "\""
              });
            }
            });
          } else {
            if (w && h) {
              this.widthHeightList.push({
                value: w + " " + h,
                label: "width: " + w + "\" , height: " + h + "\""
              });
            }
          }
        })
      });

      ratioWidthList?.map((w) => {
        ratioHeightList?.map(h => {
            if (w && h) {
              this.ratioWidthHeightList.push({
                value: w + " " + h,
                label: "Ratio Width: " + w + "\" , Ratio Height: " + h + "\""
              });
            }
        })
      });

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
    calculate() {
      this.detailDialogData = {};
      let temp = 0;
      let paper = 0;
      let form = null;


      if (this.detailData?.printingType === "Book") {
        temp = (this.sheet/this.selectedFormat).toFixed(1);
        if (temp < 1) {
          form = 1;
        } else {
          form = temp;
        }
      } else {
        form = 1;
      }
      let pressCost = 0;
      const plateCtp = this.selectedColorF + this.selectedColorB;
      let lamPerPrice = null;

      const splitRatioWidthHeight = this.ratioWidthHeight?.split(" ");
      if (splitRatioWidthHeight?.length > 0) {
        this.ratioWidth = parseFloat(splitRatioWidthHeight[0]);
        this.ratioHeight = parseFloat(splitRatioWidthHeight[1]);
      }

      const splitWidthHeight = this.widthHeight?.split(" ");
      if (splitWidthHeight?.length > 0) {
        this.width = parseFloat(splitWidthHeight[0]);
        this.height = parseFloat(splitWidthHeight[1]);
      }

      if (!this.selectedLam) {
        lamPerPrice = "";
      } else if (this.selectedLam == "One Side") {
        lamPerPrice = (1 * this.ratioWidth * this.ratioHeight * this.detailData?.lamSqPrice);
      } else if (this.selectedLam == "Both Side") {
        lamPerPrice = (2 * this.ratioWidth * this.ratioHeight * this.detailData?.lamSqPrice);
      }

      let vPround = 0;
      if (!this.detailData?.plySet || this.detailData?.plySet <= 0) {
        if (this.sheet <= 2) {
          vPround = (this.quantity * this.sheet * 100);
        } else {
          vPround = (this.quantity * this.sheet * 50);
        }
      } else {
        vPround = (this.quantity * this.sheet * this.detailData?.plySet);
      }


      let vCounter = 0;
      if (!this.detailData?.plySet || this.detailData?.plySet <= 0) {
        if (this.sheet <= 2) {
          vCounter = ((this.quantity * 100) / this.selectedFormat) * this.sheet;
        } else {
          vCounter = ((this.quantity * 50) / this.selectedFormat) * this.sheet;
        }
      } else {
        vCounter = (this.quantity * (this.detailData?.plySet * this.sheet)) / this.selectedFormat;
      }

      // condition 1000
      let vRound = 1000;
      if (vCounter > 1000) {
        vRound = this.roundUp(vCounter, 500);
      }
      if (this.detailData?.printingType === "Book") {
        paper = (this.quantity * form) + (form * this.detailData.waste);
      } else if (this.detailData?.printingType === "Voucher") {
        paper = (vPround/this.selectedFormat) + (this.sheet * this.detailData.waste);
      } else {
        // flatten
        paper = (this.quantity / this.selectedFormat) + (form * this.detailData.waste);
      }

      // press per cost not know
      const lamTotalCost = (paper * lamPerPrice);
      const paperTotalCost = (paper * this.detailData?.paperPrice);
      const ctpTotalCost = (this.selectedColorF + this.selectedColorB) * (form * this.detailData.ctpPrice);
      const bindingTotalCost = (this.detailData?.biPrice * this.quantity);
      const dieCutTotal = (this.detailData?.dieCut * this.quantity);
      const gludingTotal = (this.detailData?.gluding * this.quantity);
      const coverTotal = (this.detailData?.cover * this.quantity);

      let bCounter = 0;
      if (this.quantity <= 1000) {
        bCounter = 1000;
      } else {
        bCounter = this.roundUp(this.quantity, 500);
      }

      let fCounter = 0;
      temp = this.roundUp((((this.quantity * this.sheet) / this.selectedFormat), 500) * this.detailData?.abbb, 500);

      if (temp <= 1000) {
        fCounter = 1000;
      } else {
        fCounter = this.roundUp(((this.quantity * this.sheet) / this.selectedFormat) * this.detailData?.abbb, 500);
      }

      if (this.detailData.printingType === "Voucher") {
        pressCost = vRound * (this.selectedColorF + this.selectedColorB) * this.detailData?.pressPrice;
      } else if (this.detailData.printingType === "Flatten") {
        pressCost = (form * fCounter) * (this.selectedColorF + this.selectedColorB) * this.detailData?.pressPrice;
      } else {
        pressCost = (form * bCounter) * (this.selectedColorF + this.selectedColorB) * this.detailData?.pressPrice * this.detailData?.abbb;;
      }

      const allTotal = pressCost + lamTotalCost + paperTotalCost + ctpTotalCost + bindingTotalCost + dieCutTotal +
      gludingTotal + coverTotal;

      const perCost = (allTotal/this.quantity).toFixed(1);



      // console.log("-------paper", paper);
      // console.log("-------plateCtp", plateCtp);
      // console.log("-------lamPerPrice", lamPerPrice);
      // console.log("-------lamTotalCost", lamTotalCost);
      // console.log("-------paperTotalCost", paperTotalCost);
      // console.log("-------ctpTotalCost", ctpTotalCost);
      // console.log("-------bindingTotalCost", bindingTotalCost);
      // console.log("-------dieCutTotal", dieCutTotal);
      // console.log("-------gludingTotal", gludingTotal);
      // console.log("-------coverTotal", coverTotal);
      // console.log("-------allTotal", allTotal);
      // console.log("-------vCounter", vCounter);
      // console.log("-------vRound", vRound);
      // console.log("-------vPround", vPround);
      // console.log("-------bCounter", bCounter);
      // console.log("-------form", form);
      // console.log("-------perCost", perCost);
      // console.log("-------fCounter", fCounter);
      // console.log("-------pressCost", pressCost);

      this.detailDialogData.paper = paper;
      this.detailDialogData.plateCtp = plateCtp;
      this.detailDialogData.lamPerPrice = lamPerPrice;
      this.detailDialogData.lamTotalCost = lamTotalCost;
      this.detailDialogData.paperTotalCost = paperTotalCost;
      this.detailDialogData.ctpTotalCost = ctpTotalCost;
      this.detailDialogData.bindingTotalCost = bindingTotalCost;
      this.detailDialogData.dieCutTotal = dieCutTotal;
      this.detailDialogData.gludingTotal = gludingTotal;
      this.detailDialogData.coverTotal = coverTotal;
      this.detailDialogData.allTotal = allTotal;
      this.detailDialogData.vCounter = vCounter;
      this.detailDialogData.vRound = vRound;
      this.detailDialogData.vPround = vPround;
      this.detailDialogData.bCounter = bCounter;
      this.detailDialogData.form = form;
      this.detailDialogData.perCost = perCost;
      this.detailDialogData.pressCost = pressCost;
      this.detailDialogData.fCounter = fCounter;

      this.totalPrice = allTotal;


      this.$refs.detailDialog.openModal();
    },
    roundUp(value, roundTo) {
      return Math.ceil(value / roundTo) * roundTo;
    },
    back() {
      this.$router.push("/product");
    },
    changeCategory(event) {
      this.categoryId = event.target.value;
    },
  },
};
</script>

<style lang="scss" scoped>
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

.totalPrice {
  color: red;
  font-weight: 700;
  font-size: 20px;
}
</style>
