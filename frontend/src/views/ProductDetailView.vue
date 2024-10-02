<template>
  <div class="container">
    <div class="product-detail">
      <h2>{{ detailData?.name }} <span>(Business Cards)</span></h2>
      <div class="card">
        <div class="card-inner">
          <div>
            <ul class="slider-for">
              <li v-for="(item, index) in media" :key="'media' + index">
                <img width="100%" height="100%" :src="item?.url" alt="" />
              </li>
              <!-- <li><img width="100%" height="100%" src="@/assets/images/products/details/Fabrix_T_Shirt_01_40091.jpg" alt=""></li> -->
              <!-- <li><img width="100%" height="100%" src="@/assets/images/products/details/Standard_Business_Cards_-_Promo_1200px96.jpg" alt=""></li>
                <li><img width="100%" height="100%" src="@/assets/images/products/details/Standard_Business_Cards_-_Promo_400px.jpg" alt=""></li>
                <li><img width="100%" height="100%" src="@/assets/images/products/details/Standard_Business_Cards_-_Promo_400px82.jpg" alt=""></li> -->
            </ul>
            <ul class="slider-nav">
              <li v-for="(item, index) in media" :key="'media' + index">
                <img width="100%" height="100%" :src="item?.url" alt="" />
              </li>
              <!-- <li>
                <img src="@/assets/images/products/details/Standard_Business_Cards_-_Promo_1200px96.jpg" alt="">
              </li>
              <li>
                <img src="@/assets/images/products/details/Fabrix_T_Shirt_01_40091.jpg" alt="">
              </li>
              <li>
                <img src="@/assets/images/products/details/Standard_Business_Cards_-_Promo_400px.jpg" alt="">
              </li>
              <li>
                <img src="@/assets/images/products/details/Standard_Business_Cards_-_Promo_400px82.jpg" alt="">
              </li> -->
            </ul>
          </div>
          <div class="tabs">
            <ul id="tabs-nav" class="tabs-nav">
              <li><a href="#tab1">Description</a></li>
              <li><a href="#tab2">Templates</a></li>
              <li><a href="#tab3">Product Review</a></li>
            </ul>
            <!-- END tabs-nav -->
            <div id="tabs-content">
              <div id="tab1" class="tab-content">
                <p>
                  {{ detailData?.name }}<br />
                  <!-- Name cards made from standard paper (Art Carton 250 gsm) printed with the best quality. -->
                </p>
                <p>
                  {{ detailData?.description }}
                </p>
              </div>
              <div id="tab2" class="tab-content">
                <div class="row">
                  <div class="row">
                    <a href="">
                      <span class="icon material-symbols-outlined">picture_as_pdf</span>
                      3.5" x 2.1" - Standard Business Card Size
                    </a>
                  </div>
                  <div class="row">
                    <a href="">
                      <span class="icon material-symbols-outlined">picture_as_pdf</span>
                      3.5" x 2.1" - Standard Business Card Size
                    </a>
                  </div>
                </div>
              </div>
              <div id="tab3" class="tab-content"></div>
            </div>
          </div>
        </div>
        <div class="card-inner">
          <h4>{{ $t("message.priceCalculator") }}</h4>
          <div class="calculate">
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
                <input type="number" id="quantity" :placeholder="$t('message.quantity')" v-model="quantity"
                  name="quantity" @input="calculate()" />
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
            <div class="total">
              <span>{{ $t("message.total") }} : Ks {{ totalPrice }}</span>
            </div>
            <div class="accordion-container">
              <h4 class="accordion-head">
                {{ $t("message.firstAccordianHead") }}<span class="plusminus">+</span>
              </h4>
              <div class="accordion-body" style="display: none">
                <div class="form-group">
                  <label for="" class="label">Shipping Option</label>
                  <div class="form-data">
                    <ul>
                      <li>
                        <input type="radio" name="option" value="shipping" />Shipping
                      </li>
                      <li>
                        <input type="radio" name="option" value="pickup" />Pickup (FOC)
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="form-group select">
                  <div class="form-data">
                    <label for="" class="label">State</label>
                    <select name="" id="">
                      <option value="100">100</option>
                      <option value="200">200</option>
                      <option value="200">200</option>
                      <option value="300">300</option>
                      <option value="400">400</option>
                      <option value="500">500</option>
                      <option value="600">600</option>
                      <option value="700">700</option>
                      <option value="800">800</option>
                      <option value="900">900</option>
                      <option value="1000">1000</option>
                    </select>
                  </div>
                  <button class="calc-btn">calculate</button>
                </div>
                <div class="form-group select">
                  <div class="form-data">
                    <label for="" class="label">Type & Cost</label>
                    <select>
                      <option value="" selected disabled hidden>
                        Select Shipping Type
                      </option>
                      <option value="1">
                        Deliver to Bus Terminal (Yangon Aung San Highway Station)
                        <small class="text-muted d-block">(Estimated Delivery Date: 19 Apr, 2024)</small>
                        <small>Ks 2,500.00</small>
                      </option>
                    </select>
                  </div>
                </div>
                <div class="total">
                  <span>Estimated Total : Ks 14,850.00</span>
                </div>
              </div>
            </div>
            <button class="start" @click="addToCart()">{{ $t("message.getStarted") }}</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import "slick-carousel";
import store from "@/store";
import { getProductDetail, getMediaWithProductId } from "@/services/offset.service.js";
import { imgRoot } from "./../../config";

export default {
  name: "AppProductDetail",
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
    this.getMediaWithProductData();
  },
  beforeUnmount() {
    $(".slider-nav").slick("unslick");
    $(".slider-for").slick("unslick");
  },
  methods: {
    setupSlider() {
      $(".slider-for").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: false,
        autoplay: true,
        autoplaySpeed: 3000,
        asNavFor: ".slider-nav",
      });
      $(".slider-nav").slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: ".slider-for",
        dots: false,
        centerMode: false,
        focusOnSelect: true,
      });
      $(".accordion-head").click(function () {
        if ($(".accordion-body").is(":visible")) {
          $(".accordion-body").slideUp(300);
          $(".plusminus").text("+");
        }
        if ($(this).next(".accordion-body").is(":visible")) {
          $(this).next(".accordion-body").slideUp(300);
          $(this).children(".plusminus").text("+");
        } else {
          $(this).next(".accordion-body").slideDown(300);
          $(this).children(".plusminus").text("-");
        }
      });

      // Show the first tab and hide the rest
      $("#tabs-nav li:first-child").addClass("active");
      $(".tab-content").hide();
      $(".tab-content:first").show();

      // Click function
      $("#tabs-nav li").click(function () {
        $("#tabs-nav li").removeClass("active");
        $(this).addClass("active");
        $(".tab-content").hide();

        var activeTab = $(this).find("a").attr("href");
        $(activeTab).fadeIn();
        return false;
      });
    },
    async getProductDetailData() {
      const id = this.$route.params.id;
      const token = localStorage.getItem("token");
      const res = await getProductDetail(token, id);
      if (res?.data?.data) {
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
          }
          if (dist === "gsm" && !this.detailData[dist] && this.gsmList.length > 0) {
            this.selectedGsm = this.gsmList[0];
          }
          if (dist === "biType" && !this.detailData[dist] && this.colorFList.length > 0) {
            this.selectedBiType = this.biTypeList[0];
          }
          if (dist === "lam" && !this.detailData[dist] && this.lamList.length > 0) {
            this.selectedLam = this.lamList[0];
          }
          if (dist === "selectedRatioFullSize" && !this.detailData[dist] && this.ratioFullSizeList.length > 0) {
            this.selectedRatioFullSize = this.ratioFullSizeList[0];
          }
          if (dist === "selectedColorF" && !this.detailData[dist] && this.colorFList.length > 0) {
            this.selectedColorF = this.colorFList[0];
          }
          if (dist === "selectedColorB" && !this.detailData[dist] && this.colorBList.length > 0) {
            this.selectedColorB = this.colorBList[0];
          }
          if (dist === "width" && !this.detailData[dist] && this.widthHeightList.length > 0) {
            this.widthHeight = this.widthHeightList[0];
          }
          if (dist === "ratioWidth" && !this.detailData[dist] && this.ratioWidthHeightList.length > 0) {
            this.ratioWidthHeight = this.ratioWidthHeightList[0];
          }
        });
      }
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
        setTimeout(() => {
          this.setupSlider();
        }, 100);
      }
    },
    roundUp(value, roundTo) {
      return Math.ceil(value / roundTo) * roundTo;
    },
    async addToCart() {
      if (this.media?.length > 0) {
        this.detailData.productImage = this.media[0]?.url;
      }
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
      if (data && JSON.parse(data)?.length > 0) {
        data = JSON.parse(localStorage.getItem("cartData"));
        data.push(cart);
        localStorage.setItem("cartData", JSON.stringify(data));
        let param = {
          lang: this.lang,
          cartLength: data.length
        };
        await store.dispatch("commonData", param);
      } else {
        localStorage.setItem("cartData", JSON.stringify([cart]));
      }
      this.$router.push("/checkout");
    }
  }
};
</script>

<style lang="scss">
.product-detail {
  .card {
    display: flex;
    margin: 40px 0;

    @media screen and (max-width: 767.9px) {
      display: block;
    }

    .card-inner {
      width: calc(100% / 2);
      margin-right: 20px;

      @media screen and (max-width: 767.9px) {
        width: 100%;
        margin-right: 0;
      }

      &:last-child {
        margin-right: 0;
      }

      .slider-for {
        .slick-next {
          right: 22px;
        }

        .slick-prev {
          left: 30px;
        }
      }

      .slider-nav {
        .slick-slide {
          margin-right: 10px !important;
          cursor: pointer;

          @media screen and (max-width: 767.9px) {
            width: 20% !important;
            margin-right: 5px !important;
          }
        }
      }

      .tabs {
        .tabs-nav {
          margin: 15px 0 0;

          li {
            display: inline-block;
            background: rgba(0, 0, 0, 0.78);
            color: #fefefe;
            border-width: 1px 1px 0 1px;
            border-style: solid;
            border-color: #34495e;
            margin-right: 5px;

            @media screen and (max-width: 767.9px) {
              font-size: 12px;
            }

            &.active {
              background: #fff;
              color: #000;

              a {
                color: inherit;
                border-color: transparent;
                border-width: 1px 1px 0 1px;
              }
            }
          }

          a {
            display: block;
            padding: 10px 15px;
            font-weight: bold;
            color: #fff;

            @media screen and (max-width: 767.9px) {
              padding: 12px 5px;
            }
          }
        }

        .tab-content {
          border: 1px solid #34495e;
          padding: 20px 15px;
          background: #fff;
          margin-top: -1px;
          overflow: hidden;

          p {
            line-height: 2;
            margin-bottom: 20px;
          }

          .row {
            display: flex;
            align-items: center;
            justify-content: space-between;

            a {
              display: flex;
              align-items: center;

              span {
                margin-right: 5px;

                &.icon {
                  color: #a61f2d;
                }
              }

              &:hover {
                color: #f47920;
              }
            }
          }
        }
      }

      h4 {
        padding-bottom: 10px;
        border-bottom: 1px solid #dee2e6;
      }

      .calculate {
        margin-top: 10px;

        .form-group {
          display: flex;
          align-items: center;
          margin-bottom: 20px;

          @media screen and (max-width: 767.9px) {
            display: block;
          }

          .label {
            flex: 0 0 33.333333%;
            max-width: 33.333333%;

            @media screen and (max-width: 767.9px) {
              display: block;
              margin-bottom: 10px;
            }
          }

          .form-data {
            width: 100%;

            label {
              display: block;
              margin-bottom: 5px;
            }

            input {
              width: 95%;
              padding: 10px;
              border: 1px solid rgba(0, 0, 0, 0.25);

              @media screen and (min-width: 768px) and (max-width: 1440px) {
                width: calc(100% - 22px);
              }

              @media screen and (max-width: 767.9px) {
                width: calc(100% - 22px);
              }
            }

            select {
              width: 100%;
              padding: 10px;
              border: 1px solid rgba(0, 0, 0, 0.25);
            }
          }

          &.select {
            align-items: end;

            @media screen and (max-width: 767.9px) {
              display: flex;
            }

            small {
              font-size: 10px;
            }
          }
        }
      }

      .total {
        text-align: right;
        font-size: 20px;
      }

      .accordion-head {
        cursor: pointer;

        .plusminus {
          float: right;
          font-size: 20px;
        }
      }

      ul li {
        display: inline-flex;
        align-items: center;

        input {
          width: auto !important;
        }
      }

      .calc-btn,
      .start {
        padding: 9px;
        margin-left: 20px;
        font-size: 15px;
        background: #009bdf;
        color: #fff;
        cursor: pointer;
        border-radius: 5px;
        border: none;

        &:hover {
          background: #000;
        }
      }

      .start {
        width: 100%;
        margin: 20px 0 0;
        padding: 15px 0;
      }
    }
  }
}
</style>
