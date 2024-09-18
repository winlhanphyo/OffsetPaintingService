<script setup></script>

<template>
  <div class="card">
    <div class="card-header pb-0">
      <div class="d-flex items-center justify-content-between">
        <h6>Product Create</h6>
        <div class="d-flex items-center justify-content-between w-8">
          <label for="sheet">Sheet:</label>
          <ToggleSwitch v-model="toggles.sheet" />
        </div>
      </div>
    </div>
    <div class="card-body px-0 pt-0 pb-2">
      <div class="product-create">
        <div class="d-flex mb-3">
          <div class="form-group col-sm-4 p-2">
            <div class="d-flex items-center justify-content-between">
              <label for="productName">Product Name:</label>
              <ToggleSwitch v-model="toggles.productName" />
            </div>
            <input type="text" class="form-control" id="product-name" v-model="name" />
          </div>
          <div class="form-group col-sm-4 p-2">
            <div class="d-flex items-center justify-content-between">
              <label for="categoryName">Category Name:</label>
              <ToggleSwitch v-model="toggles.category" />
            </div>
            <select class="form-select" style="height: 40px;" @change="changeCategory($event)" v-model="categoryId">
              <option value="" disabled>Select Category Menu</option>
              <option v-for="(item, i) in categoryList" :key="'categoryList' + i" :value="item.value">
                {{ item?.name }}
              </option>
            </select>
          </div>

          <div class="form-group col-sm-4 p-2">
            <div class="d-flex items-center justify-content-between">
              <label for="image">Image:</label>
              <ToggleSwitch v-model="toggles.image" />
            </div>
            <input class="form-control" type="file" id="formFile" @change="handleFileUpload" />
          </div>
        </div>

        <div class="d-flex mb-3">
          <div class="form-group col-sm-4 p-2">
            <div class="d-flex items-center justify-content-between">
              <label for="productName">Status:</label>
              <ToggleSwitch v-model="toggles.status" />
            </div>
            <select class="form-select" @change="changeStatus($event)" v-model="status">
              <option value="">None</option>
              <option value="Hot">Hot</option>
              <option value="Sale">Sale</option>
            </select>
          </div>
          <div class="form-group col-sm-4 p-2">
            <div class="d-flex items-center justify-content-between">
              <label for="qty">Quantity:</label>
              <ToggleSwitch v-model="toggles.quantity" />
            </div>
            <v-select class="select-height" v-model="quantity" :options="qtyOptions" :multiple="true" :taggable="true"
              placeholder="Select or add Quantity">
            </v-select>
          </div>
          <div class="form-group col-sm-4 p-2">
            <div class="d-flex items-center justify-content-between">
              <label for="categoryName">Description:</label>
              <ToggleSwitch v-model="toggles.description" />
            </div>
            <textarea id="w3review" name="w3review" rows="4" v-model="description"></textarea>
          </div>
        </div>

        <div class="d-flex mb-3">
          <div class="form-group col-sm-4 p-2">
            <div class="d-flex items-center justify-content-between">
              <label for="printing">Printing Type:</label>
              <ToggleSwitch v-model="toggles.printingType" />
            </div>
            <select class="form-select" v-model="printingType">
              <option value="" disabled>Select Category Menu</option>
              <option v-for="(item, i) in printTypeOptions" :key="'printingType' + i" :value="item">
                {{ item }}
              </option>
            </select>
          </div>
          <div class="form-group col-sm-4 p-2">
            <div class="d-flex items-center justify-content-between">
              <label for="biType">BiType:</label>
              <ToggleSwitch v-model="toggles.biType" />
            </div>
            <v-select v-model="selectedBiType" :options="biTypeOptions" :multiple="true" :taggable="true"
              placeholder="Select or add options">
            </v-select>
          </div>
          <div class="form-group col-sm-4 p-2">
            <div class="d-flex items-center justify-content-between">
              <label for="type">Type:</label>
              <ToggleSwitch v-model="toggles.type" />
            </div>
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
        </div>
        <div class="d-flex mb-3">

          <div class="form-group col-sm-4 p-2">
            <div class="d-flex items-center justify-content-between">
              <label for="gsm">Gsm:</label>
              <ToggleSwitch v-model="toggles.gsm" />
            </div>
            <v-select v-model="selectedGsm" :options="gsmOptions" :multiple="true" :taggable="true"
              placeholder="Select or add GSM">
            </v-select>
          </div>
          <div class="form-group col-sm-4 p-2">
            <div class="d-flex items-center justify-content-between">
              <label for="width">Width:</label>
              <ToggleSwitch v-model="toggles.width" />
            </div>
            <v-select v-model="width" :options="widthOptions" :multiple="true" :taggable="true"
              placeholder="Select or add Width">
            </v-select>
          </div>
          <div class="form-group col-sm-4 p-2">
            <div class="d-flex items-center justify-content-between">
              <label for="height">Height:</label>
              <ToggleSwitch v-model="toggles.height" />
            </div>
            <v-select v-model="height" :options="heightOptions" :multiple="true" :taggable="true"
              placeholder="Select or add Height">
            </v-select>
          </div>
        </div>
        <div class="d-flex mb-3">
          <div class="form-group col-sm-4 p-2">
            <div class="d-flex items-center justify-content-between">
              <label for="depth">Depth:</label>
              <ToggleSwitch v-model="toggles.depth" />
            </div>
            <v-select v-model="depth" :options="depthOptions" :multiple="true" :taggable="true"
              placeholder="Select or add Depth">
            </v-select>
          </div>
          <div class="form-group col-sm-4 p-2">
            <div class="d-flex items-center justify-content-between">
              <label for="size">(Ratio) Full Size:</label>
              <ToggleSwitch v-model="toggles.selectedRatioFullSize" />
            </div>
            <v-select v-model="selectedRatioFullSize" :options="ratioFullSizeOptions" :multiple="true" :taggable="true"
              placeholder="Select or add Ratio Full Size">
            </v-select>
          </div>
          <div class="form-group col-sm-4 p-2">
            <div class="d-flex items-center justify-content-between">
              <label for="ratioWidth">Ratio Width:</label>
              <ToggleSwitch v-model="toggles.ratioWidth" />
            </div>
            <v-select v-model="ratioWidth" :options="ratioWidthOptions" :multiple="true" :taggable="true"
              placeholder="Select or add Ratio Width">
            </v-select>
          </div>
        </div>
        <div class="d-flex mb-3">
          <div class="form-group col-sm-4 p-2">
            <div class="d-flex items-center justify-content-between">
              <label for="ratioHeight">Ratio Height:</label>
              <ToggleSwitch v-model="toggles.ratioHeight" />
            </div>
            <v-select v-model="ratioHeight" :options="ratioHeightOptions" :multiple="true" :taggable="true"
              placeholder="Select or add Ratio Heigth">
            </v-select>
          </div>

          <div class="form-group col-sm-4 p-2">
            <div class="d-flex items-center justify-content-between">
              <label for="format">Format:</label>
              <ToggleSwitch v-model="toggles.format" />
            </div>
            <v-select v-model="selectedFormat" :options="formatOptions" :multiple="true" :taggable="true"
              placeholder="Select or add options">
            </v-select>
          </div>
          <div class="form-group col-sm-4 p-2">
            <div class="d-flex items-center justify-content-between">
              <label for="colorF">Color F:</label>
              <ToggleSwitch v-model="toggles.selectedColorF" />
            </div>
            <v-select v-model="selectedColorF" :options="colorFOptions" :multiple="true" :taggable="true"
              placeholder="Select or add options">
            </v-select>
          </div>
        </div>

        <div class="d-flex mb-3">
          <div class="form-group col-sm-4 p-2">
            <div class="d-flex items-center justify-content-between">
              <label for="colorB">Color B:</label>
              <ToggleSwitch v-model="toggles.selectedColorB" />
            </div>
            <v-select v-model="selectedColorB" :options="colorBOptions" :multiple="true" :taggable="true"
              placeholder="Select or add options">
            </v-select>
          </div>

          <div class="form-group col-sm-4 p-2">
            <div class="d-flex items-center justify-content-between">
              <label for="lam">Lam:</label>
              <ToggleSwitch v-model="toggles.selectedLam" />
            </div>
            <v-select v-model="selectedLam" :options="lamOptions" :multiple="true" :taggable="true"
              placeholder="Select or add options">
            </v-select>
          </div>

          <div class="form-group col-sm-4 p-2">
            <div class="d-flex items-center justify-content-between">
              <label for="Ratio Width">Lam Sq Price:</label>
              <ToggleSwitch v-model="toggles.lamSqPrice" />
            </div>
            <input type="text" v-model="lamSqPrice" class="form-control" />
          </div>
        </div>

        <div class="d-flex mb-3">
          <div class="form-group col-sm-4 p-2">
            <div class="d-flex items-center justify-content-between">
              <label for="paperPrice">Paper Price:</label>
              <ToggleSwitch v-model="toggles.paperPrice" />
            </div>
            <input type="text" name="paperPrice" v-model="paperPrice" class="form-control" />
          </div>

          <div class="form-group col-sm-4 p-2">
            <div class="d-flex items-center justify-content-between">
              <label for="Ratio Width">Press Price:</label>
              <ToggleSwitch v-model="toggles.pressPrice" />
            </div>
            <input type="text" v-model="pressPrice" class="form-control" />
          </div>

          <div class="form-group col-sm-4 p-2">
            <div class="d-flex items-center justify-content-between">
              <label for="biPrice">Bi Price:</label>
              <ToggleSwitch v-model="toggles.biPrice" />
            </div>
            <input type="text" name="biPrice" v-model="biPrice" class="form-control" />
          </div>
        </div>

        <div class="d-flex mb-3">
          <div class="form-group col-sm-4 p-2">
            <div class="d-flex items-center justify-content-between">
              <label for="dieCut">Die Cut:</label>
              <ToggleSwitch v-model="toggles.dieCut" />
            </div>
            <input type="text" v-model="dieCut" class="form-control" />
          </div>

          <div class="form-group col-sm-4 p-2">
            <div class="d-flex items-center justify-content-between">
              <label for="gluding">Gluding:</label>
              <ToggleSwitch v-model="toggles.gluding" />
            </div>
            <input type="text" name="gluding" v-model="gluding" class="form-control" />
          </div>

          <div class="form-group col-sm-4 p-2">
            <div class="d-flex items-center justify-content-between">
              <label for="plySet">Ply Set:</label>
              <ToggleSwitch v-model="toggles.plySet" />
            </div>
            <input type="text" v-model="plySet" class="form-control" />
          </div>
        </div>

        <div class="d-flex mb-3">
          <div class="form-group col-sm-4 p-2">
            <div class="d-flex items-center justify-content-between">
              <label for="other">Other:</label>
              <ToggleSwitch v-model="toggles.other" />
            </div>
            <input type="text" v-model="other" class="form-control" />
          </div>

          <div class="form-group col-sm-4 p-2">
            <div class="d-flex items-center justify-content-between">
              <label for="cover">Cover:</label>
              <ToggleSwitch v-model="toggles.cover" />
            </div>
            <input type="text" v-model="cover" class="form-control" />
          </div>

          <div class="form-group col-sm-4 p-2">
            <div class="d-flex items-center justify-content-between">
              <label for="remark">Remark:</label>
              <ToggleSwitch v-model="toggles.remark" />
            </div>
            <input type="text" name="remark" v-model="remark" class="form-control" />
          </div>
        </div>

        <div class="d-flex mb-3">
          <div class="form-group col-sm-4 p-2">
            <div class="d-flex items-center justify-content-between">
              <label for="ctpPrice">CTP Price:</label>
              <ToggleSwitch v-model="toggles.ctpPrice" />
            </div>
            <input type="text" name="ctpPrice" v-model="ctpPrice" class="form-control" />
          </div>

          <div class="form-group col-sm-4 p-2">
            <div class="d-flex items-center justify-content-between">
              <label for="waste">Waste:</label>
              <ToggleSwitch v-model="toggles.waste" />
            </div>
            <input type="text" name="waste" v-model="waste" class="form-control" />
          </div>

          <div class="form-group col-sm-4 p-2">
            <div class="d-flex items-center justify-content-between">
              <label for="abbb">1 (AB)2 (BB):</label>
              <ToggleSwitch v-model="toggles.abbb" />
            </div>
            <input type="text" name="abbb" v-model="abbb" class="form-control" />
          </div>
        </div>

        <div class="d-flex mb-3">
          <div class="form-group col-sm-4 p-2">
            <button class="btn btn-secondary" @click="back()">Back</button>
            <button class="btn btn-primary" style="margin-left: 10px" @click="submitProduct()">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import vSelect from 'vue-select';
import Swal from "sweetalert2";
// import MultiSelectWithAdd from './MultiSelectWithAdd.vue';
// import { imgRoot } from "../../../config.js";
import { getCategory, createProduct } from "@/services/admin.service.js";
import "vue-select/dist/vue-select.css";
import ToggleSwitch from '../../components/ToggleSwitch.vue';

export default {
  components: { vSelect, ToggleSwitch },
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
      toggles: {
        productName: false,
        category: false,
        image: false,
        status: false,
        quantity: false,
        description: false,
        printingType: false,
        biType: false,
        type: false,
        gsm: false,
        width: false,
        height: false,
        depth: false,
        selectedRatioFullSize: false,
        ratioWidth: false,
        ratioHeight: false,
        format: false,
        selectedColorF: false,
        selectedColorB: false,
        selectedLam: false,
        lamSqPrice: false,
        paperPrice: false,
        pressPrice: false,
        biPrice: false,
        dieCut: false,
        gluding: false,
        plySet: false,
        other: false,
        cover: false,
        remark: false,
        ctpPrice: false,
        waste: false,
        abbb: false,
      },

      selectedGsm: [],
      printingType: "",
      quantity: [],
      sheet: false,
      type: "",
      gsm: [],
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
  mounted() {
    this.getCategoryData();
  },
  methods: {
    addOption(newOption) {
      this.ratioWidthOptions.push(newOption);

      console.log("-------newOption", newOption);
      console.log("-------ratioWidthOptions", this.ratioWidthOptions);
    },
    // changeData(data, prop) {
    //   const index = this;
    //   index[prop] = data[prop];
    //   console.log("------ratioFullSize", prop, index[prop]);
    // },
    async getCategoryData() {
      const token = localStorage.getItem("token");
      const arr = [];
      const res = await getCategory(token);
      this.categories = res?.data?.data;
      for (let i = 0; i < this.categories?.length; i++) {
        arr.push({
          name: this.categories[i].name,
          value: this.categories[i].id,
        });
      }
      console.log("------arr", arr);
      this.categoryList = arr;
    },
    handleFileUpload(event) {
      const file = event.target.files[0];
      this.image = file;

      console.log("------productImage", this.image);
    },
    back() {
      this.$router.push("/product");
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
      this.selectedRatioFullSize?.length > 0 && formParam.append("ratioFullSize", JSON.stringify(this.selectedRatioFullSize));
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

      createProduct(formParam, token)
        .then(() => {
          Swal.fire({
            title: "Success!",
            text: "Product is created successfully!",
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

.vs__search {
  height: 30px !important;
}
</style>
