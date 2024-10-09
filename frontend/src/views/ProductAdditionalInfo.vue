<template>
  <div class="container">
    <!-- <header>
      <nav>
        <ul>
          <li><a href="#" class="active">ပင်မစာမျက်နှာ</a></li>
          <li><a href="#">ထုတ်ကုန်များ ▼</a></li>
          <li><a href="#">ဒီဇိုင်းကိုယ်တိုင်ရေးဆွဲခြင်း</a></li>
          <li><a href="#">ကျွန်ုပ်၏ အကောင့် ▼</a></li>
          <li><a href="#">ဆက်သွယ်ရန်</a></li>
          <li><a href="#">ဈေးနှုန်းတောင်းခံရန်</a></li>
        </ul>
      </nav>
    </header> -->

    <nav class="breadcrumb">
      <a href="#">ပင်မစာမျက်နှာ</a> / <span>ကုန်ပစ္စည်းရွေးချယ်ရန်</span>
    </nav>

    <h1>ကုန်ပစ္စည်း ထပ်ဆောင်းသတင်းအချက်အလက်</h1>

    <div class="content">
      <div class="preview">
        <img src="/img/Fabrix_T_Shirt_01_40091.0dd21194.jpg?height=400&width=300" alt="Business Card Preview" />
        <button class="preview-button">သင်၏ဒီဇိုင်းကိုကြည့်ရှုပါ</button>
        <p>PDF preview</p>
      </div>

      <div class="form">
        <!-- <div class="form-group">
          <label>အလုပ်အမည်</label>
          <div class="input-group">
            <input type="text" value="IBC_028" readonly />
            <button class="edit-button">Edit</button>
          </div>
        </div>

        <div class="form-group">
          <label>အရွယ်အစား</label>
          <input type="text" value='3.5" x 2.1" - Standard Business Card Size' readonly />
        </div>

        <div class="form-group">
          <label>အရေအတွက်</label>
          <select>
            <option>100</option>
          </select>
        </div>

        <div class="form-group">
          <label>စက္ကူအမျိုးအစား</label>
          <div class="radio">
            <input id="first" type="radio" name="numbers" value="first">
            <label for="first">First</label>
          </div>
        </div>

        <div class="form-group">
          <label>ပုံနှိပ်အမျိုးအစား</label>
          <div class="radio-group">
            <input type="radio" id="digital-press" name="print-type" />
            <label for="digital-press">Digital Press</label>
          </div>
        </div>

        <div class="form-group">
          <label>တစ်ဖက်လျှင် / နှစ်ဖက်လျှင်</label>
          <select>
            <option>One Side</option>
          </select>
        </div>

        <div class="form-group">
          <label>Lamination (ပလတ်စတစ်လွှာခြင်း)</label>
          <div class="radio-group">
            <input type="radio" id="none" name="lamination" />
            <label for="none">None</label>
          </div>
        </div> -->

        <div class="form-group" v-if="toggles?.width">
              <label for="" class="label">{{ $t("message.size") }}</label>
              <div class="form-data">
                <select name="width" id="width" class="form-select" v-model="widthHeight">
                  <option value="" selected disabled hidden>{{ $t("message.size") }}</option>
                  <option value="">None</option>
                  <option v-for="item in widthHeightList" :value="item.value" :key="item?.value">{{ item?.label }}
                  </option>
                </select>
              </div>
            </div>
            <div class="form-group" v-if="toggles?.quantity">
              <label for="" class="label">{{ $t("message.quantity") }}</label>
              <div class="form-data">
                <input type="number" class="form-select" id="quantity" :placeholder="$t('message.quantity')" v-model="quantity"
                  name="quantity" @input="calculate()" style="width: 89%;padding: 10px;border: 1px solid rgba(0, 0, 0, 0.25);" />
              </div>
            </div>
            <div class="form-group" v-if="toggles?.sheet">
              <label for="" class="label">{{ $t("message.sheet") }}</label>
              <div class="form-data">
                <input type="number" id="sheet" :placeholder="$t('message.sheet')" v-model="sheet" name="sheet" />
              </div>
            </div>
            <div class="form-group" v-if="toggles?.gsm">
              <label for="" class="label">{{ $t("message.material") }}</label>
              <div class="form-data">
                <select name="gsm" id="gsm" class="form-select" v-model="selectedGsm" @change="calculate()">
                  <option value="" selected disabled hidden>{{ $t("message.material") }}</option>
                  <option value="">None</option>
                  <option v-for="item in gsmList" :value="item" :key="item">{{ item }}</option>
                </select>
              </div>
            </div>
            <div class="form-group" v-if="toggles?.printingType">
              <label for="" class="label">{{ $t("message.printingType") }}</label>
              <div class="form-data">
                {{ detailData.printingType }}
              </div>
            </div>
            <div class="form-group" v-if="toggles?.biType">
              <label for="" class="label">{{ $t("message.printingSides") }}</label>
              <div class="form-data">
                <select name="biType" id="biType" class="form-select" v-model="selectedBiType" @change="calculate()">
                  <option value="" selected disabled hidden>{{ $t("message.printingSides") }}</option>
                  <option value="">None</option>
                  <option v-for="item in biTypeList" :key="item" :value="item">{{ item }}</option>
                </select>
              </div>
            </div>
            <div class="form-group" v-if="toggles?.type">
              <label for="" class="label">{{ $t("message.type") }}</label>
              <div class="form-data">
                {{ detailData.type }}
              </div>
            </div>
            <div class="form-group" v-if="toggles?.ratioFullSize">
              <label for="" class="label">{{ $t("message.ratioFullSize") }}</label>
              <div class="form-data">
                <select name="ratioFullSize" id="size" class="form-select" v-model="ratioFullSize"
                  @change="calculate()">
                  <option value="" selected disabled hidden>{{ $t("message.ratioFullSize") }}</option>
                  <option value="">None</option>
                  <option v-for="item in ratioFullSizeList" :key="item" :value="item">{{ item }}</option>
                </select>
              </div>
            </div>
            <div class="form-group" v-if="toggles?.ratioWidth">
              <label for="" class="label">{{ $t("message.ratioWidthHeight") }}</label>
              <div class="form-data">
                <select name="ratioWidth" id="ratioWidth" class="form-select" v-model="ratioWidthHeight"
                  @change="calculate()">
                  <option value="" selected disabled hidden>Choose {{ $t("message.ratioWidthHeight") }}</option>
                  <option value="">None</option>
                  <option v-for="item in ratioWidthHeightList" :value="item.value" :key="item?.value">{{ item?.label }}
                  </option>
                </select>
              </div>
            </div>
            <div class="form-group" v-if="toggles?.format">
              <label for="" class="label">{{ $t("message.format") }}</label>
              <div class="form-data">
                <select name="format" id="format" class="form-select" v-model="selectedFormat" @change="calculate()">
                  <option value="" selected disabled hidden>Choose {{ $t("message.format") }}</option>
                  <option value="">None</option>
                  <option v-for="item in formatList" :key="item" :value="item">{{ item }}</option>
                </select>
              </div>
            </div>
            <div class="form-group" v-if="toggles?.colorF">
              <label for="" class="label">{{ $t("message.colorF") }}</label>
              <div class="form-data">
                <select name="size" id="size" class="form-select" v-model="selectedColorF" @change="calculate()">
                  <option value="" selected disabled hidden>Choose {{ $t("message.colorF") }}</option>
                  <option value="">None</option>
                  <option v-for="item in colorFList" :key="item" :value="item">{{ item }}</option>
                </select>
              </div>
            </div>
            <div class="form-group" v-if="toggles?.colorB">
              <label for="" class="label">{{ $t("message.colorB") }}</label>
              <div class="form-data">
                <select name="colorB" id="colorB" class="form-select" v-model="selectedColorB" @change="calculate()">
                  <option value="" selected disabled hidden>Choose {{ $t("message.colorB") }}</option>
                  <option value="">None</option>
                  <option v-for="item in colorBList" :key="item" :value="item">{{ item }}</option>
                </select>
              </div>
            </div>
            <div class="form-group" v-if="toggles?.lam && lamList?.length > 0">
              <label for="" class="label">{{ $t("message.lamination") }}</label>
              <div class="form-data">
                <!-- <input type="text" placeholder="None" />  -->
                <select name="lam" id="lam" class="form-select" v-model="selectedLam" @change="calculate()">
                  <option value="" hidden>Choose {{ $t("message.lamination") }}</option>
                  <option value="">None</option>
                  <option v-for="item in lamList" :key="item" :value="item">{{ item }}</option>
                </select>
              </div>
            </div>

            <div class="form-group" v-if="toggles?.lamSqPrice" @change="calculate()">
              <label for="" class="label">{{ $t("message.lamSqPrice") }}</label>
              <div class="form-data">
                {{ detailData?.lamSqPrice }}
              </div>
            </div>
            <div class="form-group" v-if="toggles?.paperPrice" @change="calculate()">
              <label for="" class="label">{{ $t("message.paperPrice") }}</label>
              <div class="form-data">
                {{ detailData?.paperPrice }}
              </div>
            </div>
            <div class="form-group" v-if="toggles?.pressPrice" @change="calculate()">
              <label for="" class="label">{{ $t("message.pressPrice") }}</label>
              <div class="form-data">
                {{ detailData?.pressPrice }}
              </div>
            </div>
            <div class="form-group" v-if="toggles?.biPrice" @change="calculate()">
              <label for="" class="label">{{ $t("message.biPrice") }}</label>
              <div class="form-data">
                {{ detailData?.biPrice }}
              </div>
            </div>
            <div class="form-group" v-if="toggles?.dieCut" @change="calculate()">
              <label for="" class="label">{{ $t("message.dieCut") }}</label>
              <div class="form-data">
                {{ detailData?.dieCut }}
              </div>
            </div>
            <div class="form-group" v-if="toggles?.gluding" @change="calculate()">
              <label for="" class="label">{{ $t("message.gluding") }}</label>
              <div class="form-data">
                {{ detailData?.gluding }}
              </div>
            </div>
            <div class="form-group" v-if="toggles?.plySet" @change="calculate()">
              <label for="" class="label">{{ $t("message.plySet") }}</label>
              <div class="form-data">
                {{ detailData?.plySet }}
              </div>
            </div>
            <div class="form-group" v-if="toggles?.other" @change="calculate()">
              <label for="" class="label">{{ $t("message.other") }}</label>
              <div class="form-data">
                {{ detailData?.other }}
              </div>
            </div>
            <div class="form-group" v-if="toggles?.cover" @change="calculate()">
              <label for="" class="label">{{ $t("message.cover") }}</label>
              <div class="form-data">
                {{ detailData?.cover }}
              </div>
            </div>
            <div class="form-group" v-if="toggles?.remark" @change="calculate()">
              <label for="" class="label">{{ $t("message.remark") }}</label>
              <div class="form-data">
                {{ detailData?.remark }}
              </div>
            </div>
            <div class="form-group" v-if="toggles?.ctpPrice" @change="calculate()">
              <label for="" class="label">{{ $t("message.ctpPrice") }}</label>
              <div class="form-data">
                {{ detailData?.ctpPrice }}
              </div>
            </div>
            <div class="form-group" v-if="toggles?.waste" @change="calculate()">
              <label for="" class="label">{{ $t("message.waste") }}</label>
              <div class="form-data">
                {{ detailData?.waste }}
              </div>
            </div>
            <div class="form-group" v-if="toggles?.abbb" @change="calculate()">
              <label for="" class="label">{{ $t("message.abbb") }}</label>
              <div class="form-data">
                {{ detailData?.abbb }}
              </div>
            </div>

            <div class="form-group">
              <label for="" class="label">{{ $t("message.designImage") }}</label>
              <div class="form-data">
                <input
                  class="form-control"
                  type="file"
                  id="formFile"
                  @change="handleFileUpload"
                  ref="fileInput"
                />
              </div>
            </div>
             <!-- Image Preview with "X" remove button -->
             <div class="image-container" v-if="images?.preview">
              <img :src="images?.preview" alt="Image Preview" class="image-preview">
              <button class="remove-button" @click="removeImage()">×</button>
            </div>

        <div class="total">စုစုပေါင်း : Ks{{ totalPrice }}</div>
      </div>
    </div>

    <p class="note">
      အရောင်းအချက် - စာလုံးပေါင်း နှင့် ပုံပေါ်တွင်အရောင်းအချက်များ မှန်ကန်ကြောင်းအတည်ပြုပါသည်။ Document Layout ကိုလည်း
      စီတန်းမှုမှန်ကန်ပါသည်။ ဒီအပေါ်ပြသော Document အတိုင်းသာ ပုံနှိပ်မည်ဖြစ်ကို သိရှိပြီးဖြစ်ပါသည်။ Order စာမျက်နှာတွင်
      Layout ဒီဇိုင်း ပြောင်းလဲမှု နှင့် စာလုံးပေါင်းမှားယွင်းမှုများကို ပြင်ဆင်ပြီးမှသာလျှင် မှာယူခြင်းသို့တက် သွားပြီး
      ဖြစ်ပါသည်။
    </p>

    <div class="actions">
      <button class="secondary" @click="addToCart('/home')">Save နှင့် Continue</button>
      <button class="primary" @click="addToCart('/checkout')">ဈေးဝယ်လှည်းထဲသို့ Save & Add</button>
    </div>
  </div>
</template>

<script>
// import $ from "jquery";
import "slick-carousel";
import store from "@/store";
import { getProductDetail, getMediaWithProductId } from "@/services/offset.service.js";
import { imgRoot } from "./../../config";

export default {
  name: "AppProductAdditionalInfo",
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
      images: {
        file: null,
        preview: null
      },

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
    handleFileUpload() {
      const file = this.$refs.fileInput.files[0]; // Get the first (and only) file
      
      if (file) {
        const reader = new FileReader();
        
        reader.onload = (e) => {
          this.images = {
            file: file,
            preview: e.target.result
          };
        };
        reader.readAsDataURL(file); // Convert to base64
      }
    },
    removeImage() {
      this.images = {
        file: null,
        preview: null
      };
      this.$refs.fileInput.value = null;
    },
    async getProductDetailData() {
      const index = this.$route.params.id;
      let data = localStorage.getItem("cartData");
      if (data && JSON.parse(data)?.length > index) {
        data = JSON.parse(localStorage.getItem("cartData"));
        let item = data[index];
        console.log("------item", item);
        const id = item?.id;
        const token = localStorage.getItem("token");
        const res = await getProductDetail(token, id);
        if (res?.data?.data) {
          this.detailData = res?.data?.data;
          if (item.qty) {
            this.quantity = item.qty;
          }

          this.images = item?.images ? JSON.parse(item.images) : this.images;
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
          this.detailData?.toggles ? this.toggles = JSON.parse(this.detailData.toggles) : "";
          // this.quantityList = this.detailData?.quantity ? JSON.parse(this.detailData.quantity) : [];

          widthList?.map((w) => {
            heightList?.map(h => {
              if (depthList?.length > 0) {
                depthList?.map(d => {
                  if (w && h) {
                    this.widthHeightList.push({
                      value: w + " " + h + " " + d,
                      label: "width: " + w + "\" , height: " + h + "\" , depth: " + d + "\""
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

          Object.keys(this.toggles).map((dist) => {
            if (dist === "format" && !this.detailData[dist] && this.formatList.length > 0) {
              this.selectedFormat = this.formatList[0];
            } else if (item.selectedFormat) {
              this.selectedFormat = item.selectedFormat;
            }

            if (dist === "gsm" && !this.detailData[dist] && this.gsmList.length > 0) {
              this.selectedGsm = this.gsmList[0];
            } else if (item.selectedGsm) {
              this.selectedGsm = item.selectedGsm;
            }

            if (dist === "biType" && !this.detailData[dist] && this.colorFList.length > 0) {
              this.selectedBiType = this.biTypeList[0];
            } else if (item.selectedBiType) {
              this.selectedBiType = item.selectedBiType;
            }

            if (dist === "lam" && !this.detailData[dist] && this.lamList.length > 0) {
              this.selectedLam = this.lamList[0];
            } else if (item.selectedLam) {
              this.selectedLam = item.selectedLam;
            }

            if (dist === "selectedRatioFullSize" && !this.detailData[dist] && this.ratioFullSizeList.length > 0) {
              this.selectedRatioFullSize = this.ratioFullSizeList[0];
            } else if (item.selectedRatioFullSize) {
              this.selectedRatioFullSize = item.selectedRatioFullSize;
            }

            if (dist === "selectedColorF" && !this.detailData[dist] && this.colorFList.length > 0) {
              this.selectedColorF = this.colorFList[0];
            } else if (item.selectedColorF) {
              this.selectedColorF = item.selectedColorF;
            }

            if (dist === "selectedColorB" && !this.detailData[dist] && this.colorBList.length > 0) {
              this.selectedColorB = this.colorBList[0];
            } else if (item.selectedColorB) {
              this.selectedColorB = item.selectedColorB;
            }

            if (dist === "width" && !this.detailData[dist] && this.widthHeightList.length > 0) {
              this.widthHeight = this.widthHeightList[0];
            } else if (item.widthHeight) {
              this.widthHeight = item.widthHeight;
            }

            if (dist === "ratioWidth" && !this.detailData[dist] && this.ratioWidthHeightList.length > 0) {
              this.ratioWidthHeight = this.ratioWidthHeightList[0];
            } else if (item.ratioWidthHeight) {
              this.ratioWidthHeight = item.ratioWidthHeight;
            }
          });
        }
      }
      this.calculate();
    },
    calculate() {
      this.detailDialogData = {};
      let temp = 0;
      let paper = 0;
      let form = null;


      if (this.detailData?.printingType === "Book") {
        temp = (this.sheet / this.selectedFormat).toFixed(1);
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
        paper = (vPround / this.selectedFormat) + (this.sheet * this.detailData.waste);
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
        pressCost = (form * bCounter) * (this.selectedColorF + this.selectedColorB) * this.detailData?.pressPrice * this.detailData?.abbb;
      }

      const allTotal = pressCost + lamTotalCost + paperTotalCost + ctpTotalCost + bindingTotalCost + dieCutTotal +
        gludingTotal + coverTotal;

      const perCost = (allTotal / this.quantity).toFixed(1);

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

      console.log("-----detail dialog", this.detailDialogData);

      this.totalPrice = allTotal;

    },
    async getMediaWithProductData() {
      const id = this.$route.params.id;
      const token = localStorage.getItem("token");
      const res = await getMediaWithProductId(token, id);
      if (res?.data?.data) {
        this.media = res.data.data;
        this.media?.map((dist) => {
          if (dist?.url) {
            dist.url = imgRoot + dist?.url;
          }
        });
        // setTimeout(() => {
        //   this.setupSlider();
        // }, 100);
      }
    },
    roundUp(value, roundTo) {
      return Math.ceil(value / roundTo) * roundTo;
    },
    async addToCart(url) {
      const cart = this.detailData;
      Object.keys(this.toggles).map((dist) => {
        if (dist === "format") {
          cart.selectedFormat = this.selectedFormat;
        }
        if (dist === "gsm") {
          cart.selectedGsm = this.selectedGsm;
        }
        if (dist === "biType") {
          cart.selectedBiType = this.selectedBiType;
        }
        if (dist === "lam") {
          cart.selectedLam = this.selectedLam;
        }
        if (dist === "selectedRatioFullSize") {
          cart.selectedRatioFullSize = this.selectedRatioFullSize;
        }
        if (dist === "selectedColorF") {
          cart.selectedColorF = this.selectedColorF;
        }
        if (dist === "selectedColorB") {
          cart.selectedColorB = this.selectedColorB;
        }
        if (dist === "width") {
          cart.widthHeight = this.widthHeight;
        }
        if (dist === "ratioWidth") {
          cart.ratioWidthHeight = this.ratioWidthHeight;
        }
      });
      cart.totalPrice = this.totalPrice;
      cart.qty = this.quantity;
      let data = localStorage.getItem("cartData");
      const index = this.$route.params.id;
      if (data && JSON.parse(data)?.length > index) {
        data = JSON.parse(localStorage.getItem("cartData"));
        if (data[index]?.media?.length > 0) {
          cart.productImage = data[index].media[0]?.url;
        }
        this.images?.file ? cart.images = JSON.stringify(this.images) : null;
        data[index] = cart;
        localStorage.setItem("cartData", JSON.stringify(data));
        let param = {
          lang: this.lang,
          cartLength: data.length
        };
        await store.dispatch("commonData", param);
      } else {
        localStorage.setItem("cartData", JSON.stringify([cart]));
      }
      this.$router.push(url);
    }
  }
};
</script>

<style scoped>
.container {
  font-family: Arial, sans-serif;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

header {
  background-color: #003366;
  padding: 10px 0;
}

nav ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
}

nav ul li {
  margin-right: 20px;
}

nav ul li a {
  color: white;
  text-decoration: none;
}

nav ul li a.active {
  font-weight: bold;
}

.breadcrumb {
  margin: 20px 0;
}

.breadcrumb a {
  color: #003366;
  text-decoration: none;
}

h1 {
  color: #003366;
}

.content {
  display: flex;
  gap: 40px;
}

.preview {
  flex: 1;
}

.preview img {
  max-width: 100%;
  height: auto;
}

.preview-button {
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  padding: 10px;
  margin-top: 10px;
  width: 100%;
  text-align: center;
}

.form {
  flex: 2;
}

.form-group {
  margin-bottom: 20px;

  select {
    width: 92%;
    padding: 10px;
    border: 1px solid rgba(0, 0, 0, 0.25);
  }
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input[type="text"],
select {
  width: 90%;
  padding: 5px;
  border: 1px solid #ccc;
}

.input-group {
  display: flex;
}

.input-group input {
  flex-grow: 1;
}

.edit-button {
  background-color: #003366;
  color: white;
  border: none;
  padding: 5px 10px;
  margin-left: 10px;
}

.radio-group {
  display: flex;
  align-items: center;
}

.radio-group input[type="radio"] {
  margin-right: 5px;
}

.total {
  font-size: 1.2em;
  font-weight: bold;
  margin-top: 20px;
}

.note {
  background-color: #f0f0f0;
  padding: 10px;
  margin-top: 20px;
}

.actions {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

button {
  padding: 10px 20px;
  border: none;
  cursor: pointer;
}

button.secondary {
  background-color: #f0f0f0;
  color: #003366;
}

button.primary {
  background-color: #003366;
  color: white;
}

/* Custom radio buttons */
input[type="radio"]+label {
  display: inline-block;
  cursor: pointer;
  position: relative;
  padding-left: 30px;
  margin-right: 15px;
  font-size: 13px;

  &:before {
    content: "";
    display: block;
    width: 18px;
    height: 18px;
    margin-right: 14px;
    position: absolute;
    top: -3px;
    left: 0;
    border: 1px solid #003366;
    background-color: #fff;
    border-radius: 50%;
  }
}

input[type="radio"] {
  display: none !important;
  display: inline;

  &:checked+label:after {
    content: "";
    display: block;
    position: absolute;
    top: 1.5px;
    left: 4.5px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #003366;
  }
}

.image-container {
  position: relative;
  display: inline-block;
  margin-top: 10px;
  /* margin-left: 33%; */
}

.image-preview {
  max-width: 100px;
  height: 100px;
  object-fit: cover;
  display: block;
}

.remove-button {
  position: absolute;
  top: 5px;
  right: 5px;
  background: #ff0000;
  color: white;
  border: none;
  border-radius: 50%;
  width: 25px;
  height: 25px;
  font-size: 16px;
  line-height: 1;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}

.remove-button:hover {
  background-color: #cc0000;
}
</style>