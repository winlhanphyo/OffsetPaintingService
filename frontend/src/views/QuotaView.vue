<template>
  <div class="container" id="register">
    <h2>{{ $t("message.requestAQuota") }}</h2>
    <div class="product-general-info-container">
      <div class="product-general-info-data">
        <div class="form-group">
          <label>Standard size</label>
          <select class="product-standard-size-select">
            <option>90 x 50 Bussiness Card</option>
          </select>
        </div>
        <div class="form-group">
          <label>Custom size</label>
          <div class="custom-size-input">
            <div class="col">
              <input type="text" value="90" id="widthInput" class="product-standard-size" />
              <label>Width</label>
            </div>
            <div class="col col-mar">
              x
            </div>
            <div class="col">
              <input type="text" value="50" id="heightInput" class="product-standard-size" />
              <label>Height</label>
            </div>
            <div class="col col-mar">
              mm
            </div>
          </div>
        </div>
        
        <div class="product-direction">
          <div class="form-group">
            <input type="radio" name="product-direction" value="Vertical" />
            <span class="material-symbols-outlined">
              crop_portrait
            </span>
            <label for="html">Vertical</label>
          </div>
          <div class="form-group">
            <input type="radio" name="product-direction" value="Horizontal" />
            <span class="material-symbols-outlined">
              crop_landscape
            </span>
            <label for="html">Horizontal</label>
          </div>
        </div>
      </div>

      <div class="product-general-preview">
        <div id="price-shema-preview">
          <div id="canvas" style="">
            <div class="text-center" id="rectangle" style="display: flex; align-items: center; justify-content: center; width: 413px; height: 229.444px;">
              <p style="margin-bottom: 0; transition: 200ms;">90x50 mm</p>
            </div>
          </div>
        </div>
      </div>

      <div class="product-general-reference">
        <div class="link">
          <a href="#">
            <i class="far fa-calendar fa-left fa-fw"></i>
            Printing terms
          </a>
        </div>

        <div class="link">
          <a href="#">
            <i class="fa fa-cog" aria-hidden="true"></i>
            Layouts requirements
          </a>
        </div>

        <div class="link">
          <a href="#">
            <i class="far fa-calendar fa-left fa-fw"></i>
            Design papers catalogue
          </a>
        </div>

        <div class="link">
          <a href="#">
            <i class="fal fa-swatchbook fa-left fa-fw"></i>
            Paper samples
          </a>
        </div>

        <div class="link">
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
  // mounted() {
  //   // const canvasContainer = document.getElementById('canvasContainer');
  // const canvas = document.getElementById('canvas');
  // const rectangle = document.getElementById('rectangle');
  // const widthInput = document.getElementById('widthInput');
  // const heightInput = document.getElementById('heightInput');
  // const widthText = document.getElementById('widthText');
  // const heightText = document.getElementById('heightText');

  // function updateCanvasSize() {
  //   const width = parseInt(widthInput.value);
  //   const height = parseInt(heightInput.value);

  //   canvas.style.width = width + 'px';
  //   canvas.style.height = height + 'px';
  //   widthText.textContent = 'Width: ' + width + 'px';
  //   heightText.textContent = 'Height: ' + height + 'px';
  // }

  // function updateRectangleSize() {
  //   // const width = parseInt(rectangle.style.width);
  //   // const height = parseInt(rectangle.style.height);

  //   rectangle.style.width = widthInput.value + 'px';
  //   rectangle.style.height = heightInput.value + 'px';
  // }

  // // Call the functions initially to set the initial size and text
  // updateCanvasSize();
  // updateRectangleSize();

  // // Attach event listeners to input elements to update sizes dynamically
  // widthInput.addEventListener('input', () => {
  //   updateCanvasSize();
  //   updateRectangleSize();
  // });

  // heightInput.addEventListener('input', () => {
  //   updateCanvasSize();
  //   updateRectangleSize();
  // });
  // },
  methods: {},
};
</script>

<style lang="postcss">
.wrapper {
  .container {
    .product-general-info-container {
      display: flex;
      margin-top: 50px;
      justify-content: space-between;
      @media screen and (max-width: 1280px) {
        display: block;
      }
      .product-general-info-data {
        width: 25%;
        margin-right: 20px;
        @media screen and (max-width: 1280px) {
          width: auto;
          margin-bottom: 20px;
        }
      }
      .product-general-preview {
        width: 35%;
        @media screen and (max-width: 1280px) {
          width: auto;
          margin-bottom: 20px;
        }
      }
      .product-general-reference {
        width: 33%;
        @media screen and (max-width: 1280px) {
          width: auto;
          margin-bottom: 20px;
        }
      }
      .form-group {
        margin-bottom: 15px;
        label {
          display: block;
          margin-bottom: 10px;
          font-size: 16px;
        }
        select {
          width: 100%;
          padding: 10px;
          border-radius: 5px;
          border: 1px solid #ccc;
        }
        input {
          width: 85%;
          padding: 10px;
          border-radius: 5px;
          border: 1px solid #ccc;
        }
        .custom-size-input {
          display: flex;
          label {
            margin-top: 10px;
            font-size: 12px;
          }
          .col-mar {
            margin: 10px;
          }
        }
      }
      .product-direction {
        .form-group {
          display: flex;
          align-items: center;
          label {
            margin: 0 0 0 5px;
          }
          input {
            width: auto;
          }
        }
      }
      .product-general-reference {
        margin: 0;
        background: #fcfcfc;
        border-radius: 10px;
        padding: 20px;
        display: block;
        margin-left: auto;
        @media screen and (max-width: 1280px) {
          margin-bottom: 20px;
        }
        .link {
          margin: 0;
          display: flex;
          align-items: center;
          height: 42px;
          border-radius: 8px;
          padding: 0 13.5px;
          &:hover {
            color: #fff;
            background: #2a5db0;
            a {
              color: #fff;
            }
          }
          a:hover, a:focus {
            color: #fff;
          }
        }
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
      /* width: 293px;
      height: 162.778px; */

      border: 1px solid #ccc;
      margin: auto;
      transition: 200ms;
      box-shadow: rgba(204, 204, 204, 0.5) 4px 4px 2px 0;
      @media screen and (max-width: 767.9px) {
        width: 100%!important;
      }
    }

    .printing-option-container {
      h4 {
        font-size: 20px;
      }
    }
  }
}
</style>
