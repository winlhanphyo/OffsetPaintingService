<template>
  <div class="container" id="register">
    <h2>{{ $t("message.requestAQuota") }}</h2>
    <div class="product-genral-info-container">
      <div class="product-genral-info-data">
        <label>Standard size:</label> <br />
        <select class="product-standard-size-select">
          <option>90 x 50 Bussiness Card</option>
        </select>

        <label>Custom size</label> <br />
        <div class="custom-size-input">
          <input type="text" value="45" class="product-standard-size" />
          x
          <input type="text" value="50" class="product-standard-size" />
          mm
        </div>

        <div class="product-direction">
          <input type="radio" name="product-direction" value="Vertical" />
          <label for="html">Vertical</label> <br />
          <input type="radio" name="product-direction" value="Horizontal" />
          <label for="html">Horizontal</label> <br />
        </div>
      </div>

      <div class="product-general-preview">
        <div id="price-shema-preview">
          <div id="canvas" style="">
            <div
              class="text-center"
              id="rectangle"
              style="
                display: flex;
                align-items: center;
                justify-content: center;
                width: 293px;
                height: 162.778px;
              "
            >
              <p style="margin-bottom: 0; transition: 200ms">90x50 mm</p>
            </div>
          </div>
        </div>
      </div>

      <div class="product-general-reference">
        <div>
          <a href="#">
            <i class="far fa-calendar fa-left fa-fw"></i>
            Printing terms
          </a>
        </div>

        <div>
          <a href="#">
            <i class="far fa-gear fa-left fa-fw"></i>
            Layouts requirements
          </a>
        </div>

        <div>
          <a href="#">
            <i class="far fa-calendar fa-left fa-fw"></i>
            Design papers catalogue
          </a>
        </div>

        <div>
          <a href="#">
            <i class="far fa-swatchbook"></i>
            Paper samples
          </a>
        </div>

        <div>
          <a href="#">
            <i class="far fa-lightbulb fa-left fa-fw"></i>
            Ideas/suggestions
          </a>
        </div>
      </div>
    </div>
    <hr />

    <div class="printing-option-container">
      <div class="priting-option-title">
        <h4>
          <span class="step-circle" style="padding: 1px 2px; border-width: 2px"
            ><i class="fa-solid fa-print fa-fw"></i
          ></span>
          Select printing options
        </h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppQuota",
  components: {},
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="postcss">
.wrapper {
  .container {
    .product-genral-info-container {
      display: flex;
      margin-top: 50px;
      .product-general-info-data,
      .product-info-general-preview,
      .product-info-general-reference {
        width: 25%;
      }
    }

    #price-shema-preview #canvas {
      display: block;
      width: 100%;
    }

    #price-shema-preview #rectangle {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 293px;
      height: 162.778px;

      border: 1px solid #ccc;
      margin: auto;
      transition: 200ms;
      box-shadow: rgba(204, 204, 204, 0.5) 4px 4px 2px 0;
    }
  }
}
</style>
