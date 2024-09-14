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
          <div class="form-group col-sm-4 p-2">
            <label for="qty">Quantity:</label>
            <v-select
              v-model="quantity"
              :options="qtyOptions"
              :multiple="true"
              :taggable="true"
              placeholder="Select or add Quantity">
            </v-select>
          </div>
        </div>

        <div class="d-flex mb-3">
          <div class="form-group col-sm-4 p-2">
            <label for="printing">Printing Type:</label>
            <select
              class="form-select"
              v-model="printingType">
              <option value="" disabled>Select Category Menu</option>
              <option
                v-for="(item, i) in printTypeOptions"
                :key="'printingType' + i"
                :value="item">
                {{ item }}
              </option>
            </select>
          </div>
          <div class="form-group col-sm-4 p-2">
            <label for="biType">BiType:</label>
            <v-select
              v-model="selectedBiType"
              :options="biTypeOptions"
              :multiple="true"
              :taggable="true"
              placeholder="Select or add options">
            </v-select>
          </div>
          <div class="form-group col-sm-4 p-2">
            <label for="sheet">Sheet:</label>
            <input type="checkbox" id="sheet" v-model="sheet" />
          </div>
        </div>
        <div class="d-flex mb-3">
          <div class="form-group col-sm-4 p-2">
            <label for="type">Type:</label>
            <select name="type" id="type" class="form-select" v-model="type">
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
            <v-select
              v-model="selectedGsm"
              :options="gsmOptions"
              :multiple="true"
              :taggable="true"
              placeholder="Select or add GSM">
            </v-select>
          </div>
          <div class="form-group col-sm-4 p-2">
            <label for="width">Width:</label>
            <v-select
              v-model="width"
              :options="widthOptions"
              :multiple="true"
              :taggable="true"
              placeholder="Select or add Width">
            </v-select>
          </div>
        </div>
        <div class="d-flex mb-3">
          <div class="form-group col-sm-4 p-2">
            <label for="height">Height:</label>
            <v-select
              v-model="height"
              :options="heightOptions"
              :multiple="true"
              :taggable="true"
              placeholder="Select or add Height">
            </v-select>
          </div>
          <div class="form-group col-sm-4 p-2">
            <label for="depth">Depth:</label>
            <v-select
              v-model="depth"
              :options="depthOptions"
              :multiple="true"
              :taggable="true"
              placeholder="Select or add Depth">
            </v-select>
          </div>
          <div class="form-group col-sm-4 p-2">
            <label for="size">(Ratio) Full Size:</label>
            <v-select
              v-model="selectedRatioFullSize"
              :options="ratioFullSizeOptions"
              :multiple="true"
              :taggable="true"
              placeholder="Select or add Ratio Full Size">
            </v-select>
          </div>
        </div>
        <div class="d-flex mb-3">
          <div class="form-group col-sm-4 p-2">
            <label for="ratioWidth">Ratio Width:</label>
            <v-select
              v-model="ratioWidth"
              :options="ratioWidthOptions"
              :multiple="true"
              :taggable="true"
              placeholder="Select or add Ratio Width">
            </v-select>
          </div>

          <div class="form-group col-sm-4 p-2">
            <label for="ratioHeight">Ratio Height:</label>
            <v-select
              v-model="ratioHeight"
              :options="ratioHeightOptions"
              :multiple="true"
              :taggable="true"
              placeholder="Select or add Ratio Heigth">
            </v-select>
          </div>

          <div class="form-group col-sm-4 p-2">
            <label for="format">Format:</label>
            <v-select
                v-model="selectedFormat"
                :options="formatOptions"
                :multiple="true"
                :taggable="true"
                placeholder="Select or add options">
              </v-select>
          </div>
        </div>

        <div class="d-flex mb-3">
          <div class="form-group col-sm-4 p-2">
            <label for="colorF">Color F:</label>
            <v-select
              v-model="selectedColorF"
              :options="colorFOptions"
              :multiple="true"
              :taggable="true"
              placeholder="Select or add options">
            </v-select>
          </div>

          <div class="form-group col-sm-4 p-2">
            <label for="colorB">Color B:</label>
            <v-select
              v-model="selectedColorB"
              :options="colorBOptions"
              :multiple="true"
              :taggable="true"
              placeholder="Select or add options">
            </v-select>
          </div>

          <div class="form-group col-sm-4 p-2">
            <label for="lam">Lam:</label>
            <v-select
              v-model="selectedLam"
              :options="lamOptions"
              :multiple="true"
              :taggable="true"
              placeholder="Select or add options">
            </v-select>
          </div>
        </div>

        <div class="d-flex mb-3">
          <div class="form-group col-sm-4 p-2">
            <label for="paperPrice">Paper Price:</label>
            <input type="text" name="paperPrice" v-model="paperPrice" class="form-control" />
          </div>

          <div class="form-group col-sm-4 p-2">
            <label for="Ratio Width">Press Price:</label>
            <input type="text" v-model="pressPrice" class="form-control" />
          </div>

          <div class="form-group col-sm-4 p-2">
            <label for="Ratio Width">Lam Sq Price:</label>
            <input type="text" v-model="lamSqPrice" class="form-control" />
          </div>
        </div>

        <div class="d-flex mb-3">
          <div class="form-group col-sm-4 p-2">
            <label for="dieCut">Die Cut:</label>
            <input type="text" v-model="dieCut" class="form-control" />
          </div>

          <div class="form-group col-sm-4 p-2">
            <label for="gluding">Gluding:</label>
            <input type="text" name="gluding" v-model="gluding" class="form-control" />
          </div>

          <div class="form-group col-sm-4 p-2">
            <label for="plySet">Ply Set:</label>
            <input type="text" v-model="plySet" class="form-control" />
          </div>
        </div>

        <div class="d-flex mb-3">
          <div class="form-group col-sm-4 p-2">
            <label for="biPrice">Bi Price:</label>
            <input type="text" name="biPrice" v-model="biPrice" class="form-control" />
          </div>

          <div class="form-group col-sm-4 p-2">
            <label for="other">Other:</label>
            <input type="text" v-model="other" class="form-control" />
          </div>

          <div class="form-group col-sm-4 p-2">
            <label for="cover">Cover:</label>
            <input type="text" v-model="cover" class="form-control" />
          </div>
        </div>

        <div class="d-flex mb-3">
          <div class="form-group col-sm-4 p-2">
            <label for="remark">Remark:</label>
            <input type="text" name="remark" v-model="remark" class="form-control" />
          </div>

          <div class="form-group col-sm-4 p-2">
            <label for="ctpPrice">CTP Price:</label>
            <input type="text" name="ctpPrice" v-model="ctpPrice" class="form-control" />
          </div>

          <div class="form-group col-sm-4 p-2">
            <label for="waste">Waste:</label>
            <input type="text" name="waste" v-model="waste" class="form-control" />
          </div>
        </div>

        <div class="d-flex mb-3">
          <div class="form-group col-sm-4 p-2">
            <label for="abbb">1 (AB)2 (BB):</label>
            <input type="text" name="abbb" v-model="abbb" class="form-control" />
          </div>
        </div>

        <div class="d-flex mb-3">
          <div class="form-group col-sm-4 p-2">
            <!-- <label for="Ratio Width">Ratio Width:</label>
            <input type="text" class="form-control"> -->
            <button class="btn btn-secondary" @click="back()">Back</button>
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
import vSelect from 'vue-select';
import Swal from "sweetalert2";
// import { imgRoot } from "../../../config.js";
import { updateProduct, getCategory, getProductById } from "@/services/admin.service.js";
import "vue-select/dist/vue-select.css";

export default {
  components: { vSelect },
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
      printTypeOptions: ["Book", "Flatten", "Voucher"],
      ratioFullSizeOptions: ["5 Ratio", "6 Ratio", "6 Ratio (2)", "8 Ratio", "9 Ratio", "10 Ratio", "11 Ratio"],
      selectedFormat: [],
      formatOptions: [1, 2, 4, 6, 8, 9, 16],
      lamOptions: ["None", "One Side", "Both Sides"],
      gsmOptions: ["128gsm", "148gsm", "157gsm", "210gsm", "230gsm", "250gsm", "300gsm", "350gsm"],
      biTypeOptions: ["Saddle", "Width Box"],
      qtyOptions: ["100", "200", "300"],
      colorBOptions: [0, 1, 4],
      colorFOptions: [0, 1, 4],
      widthOptions: [],
      heightOptions: [],
      depthOptions: [],
      ratioWidthOptions: [],
      ratioHeightOptions: [],
      ratioDepthOptions: [],

      selectedGsm: [],
      printingType: "",
      quantity: [],
      sheet: "",
      type: "",
      width: [],
      height: [],
      depth: [],
      selectedRatioFullSize: [],
      ratioWidth: [],
      ratioHeight: [],
      selectedLam: [],
      selectedBiType: [],
      selectedColorB: [],
      selectedColorF: [],
      paperPrice: "",
      pressPrice: "",
      lamSqPrice: "",

      dieCut: "",
      gluding: "",
      plySet: "",
      biPrice: "",
      other: "",
      cover: "",
      remark: "",

      ctpPrice: "",
      waste: "",
      abbb: ""
    };
  },
  async mounted() {
    this.getCategoryData();
    this.id = this.$route?.params?.id;
    console.log("------id", this.id);
    if (this.id) {
      const res = await getProductById(this.id);
      const data = res?.data?.data;
      console.log("-----------detail data", data);
      this.name = data?.name;
      this.categoryId = data?.categoryId;
      this.image = "";
      this.description = data?.description;
      this.status = data?.status;

      this.printingType = data?.printingType ? data.printingType : "";
      this.type = data?.type ? data.type : "";
      this.selectedGsm = data?.gsm ? JSON.parse(data.gsm) : [];
      this.selectedFormat = data?.format ? JSON.parse(data.format) : [];
      this.selectedBiType = data?.biType ? JSON.parse(data.biType) : [];
      this.selectedLam = data?.lam ? JSON.parse(data.lam) : [];
      this.selectedRatioFullSize = data?.ratioFullSize ? JSON.parse(data.ratioFullSize) : [];
      this.selectedColorB = data?.colorB ? JSON.parse(data.colorB) : [];
      this.selectedColorF = data?.colorF ? JSON.parse(data.colorF) : [];
      this.width = data?.width ? JSON.parse(data.width) : [];
      this.height = data?.height ? JSON.parse(data.height) : [];
      this.depth = data?.depth ? JSON.parse(data.depth) : [];
      this.ratioWidth = data?.ratioWidth ? JSON.parse(data.ratioWidth) : [];
      this.ratioHeight = data?.ratioHeight ? JSON.parse(data.ratioHeight) : [];
      this.quantity = data?.quantity ? JSON.parse(data.quantity) : [];

      this.paperPrice = data?.paperPrice ? data.paperPrice : "";
      this.pressPrice = data?.pressPrice ? data.pressPrice : "";
      this.lamSqPrice = data?.lamSqPrice ? data.lamSqPrice : "";
      this.biPrice = data?.biPrice ? data.biPrice : "";

      this.ctpPrice = data?.ctpPrice ? data.ctpPrice : "";
      this.waste = data?.waste ? data.waste : "";
      this.abbb = data?.abbb ? data.abbb : "";

      this.dieCut = data?.dieCut ? data.dieCut : "";
      this.gluding = data?.gluding ? data.gluding : "";
      this.plySet = data?.plySet ? data.plySet : "";
      this.biType = data?.biType ? data.biType : "";
      this.other = data?.other ? data.other : "";
      this.cover = data?.cover ? data.cover : "";
      this.remark = data?.remark ? data.remark : [];

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
      this.name && formParam.append("name", this.name);
      this.categoryId && formParam.append("categoryId", this.categoryId);
      this.description && formParam.append("description", this.description);

      this.printingType && formParam.append("printingType", this.printingType);
      this.quantity?.length > 0 && formParam.append("quantity", JSON.stringify(this.quantity));
      this.sheet && formParam.append("sheet", this.sheet);
      this.type && formParam.append("type", this.type);
      this.selectedGsm?.length > 0 && formParam.append("gsm", JSON.stringify(this.selectedGsm));
      this.width?.length > 0 && formParam.append("width", JSON.stringify(this.width));
      this.height?.length > 0 && formParam.append("height", JSON.stringify(this.height));
      this.depth?.length > 0 && formParam.append("depth", JSON.stringify(this.depth));
      this.selectedRatioFullSize?.length > 0 && formParam.append("ratioFullSize",  JSON.stringify(this.selectedRatioFullSize));
      this.ratioWidth?.length > 0 && formParam.append("ratioWidth", JSON.stringify(this.ratioWidth));
      this.ratioHeight?.length > 0 && formParam.append("ratioHeight", JSON.stringify(this.ratioHeight));
      this.selectedFormat?.length > 0 && formParam.append("format", JSON.stringify(this.selectedFormat));
      this.selectedLam?.length > 0 && formParam.append("lam", JSON.stringify(this.selectedLam));
      this.selectedBiType?.length > 0 && formParam.append("biType", JSON.stringify(this.selectedBiType));
      this.selectedColorF?.length > 0 && formParam.append("colorF", JSON.stringify(this.selectedColorF));
      this.selectedColorB?.length > 0 && formParam.append("colorB", JSON.stringify(this.selectedColorB));
      this.paperPrice && formParam.append("paperPrice", this.paperPrice);
      this.pressPrice && formParam.append("pressPrice", this.pressPrice);
      this.lamSqPrice && formParam.append("lamSqPrice", this.lamSqPrice);

      this.dieCut && formParam.append("dieCut", this.dieCut);
      this.gluding && formParam.append("gluding", this.gluding);
      this.plySet && formParam.append("plySet", this.plySet);
      this.biPrice && formParam.append("biPrice", this.biPrice);
      this.other && formParam.append("other", this.other);
      this.cover && formParam.append("cover", this.cover);
      this.remark && formParam.append("remark", this.remark);

      this.ctpPrice && formParam.append("ctpPrice", this.ctpPrice);
      this.waste && formParam.append("waste", this.waste);
      this.abbb && formParam.append("abbb", this.abbb);

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
    back() {
      this.$router.push("/product");
    }
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
