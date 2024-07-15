<script setup>
</script>

<template>
  <div class="card">
    <div class="card-header pb-0">
      <div class="d-flex justify-content-between">
        <h6>Product Create</h6>
      </div>
    </div>
    <div class="card-body px-0 pt-0 pb-2">
      <div class="product-create"> 
        <div class="d-flex mb-3">
          <div class="form-group col-sm-4 p-2">
            <label for="printing">Printing Type:</label>
            <select name="printing" id="printing" class="form-select">
              <option value="" selected disabled hidden>Choose Printing Type</option>
              <option value="Flatten">Flatten</option>
              <option value="Book">Book</option>
              <option value="Voucher">Voucher</option>
            </select>
          </div>
          <div class="form-group col-sm-4 p-2">
            <label for="quantity">Quantity:</label>
            <input type="text" class="form-control">
          </div>
          <div class="form-group col-sm-4 p-2">
            <label for="sheet">Sheet:</label>
            <input type="text" class="form-control">
          </div>
        </div>
        <div class="d-flex mb-3">
          <div class="form-group col-sm-4 p-2">
            <label for="type">Type:</label>
            <select name="type" id="type" class="form-select">
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
            <select name="gsm" id="gsm" class="form-select">
              <option value="" selected disabled hidden>Choose Gsm</option>
              <option value="128">128gsm</option>
              <option value="148">148gsm</option>
              <option value="157">157gsm</option>
              <option value="210">210gsm</option>
              <option value="230">230gsm</option>
              <option value="250">250gsm</option>
              <option value="300">300gsm</option>
              <option value="350">350gsm</option>
            </select>
          </div>
          <div class="form-group col-sm-4 p-2">
            <label for="width">Width:</label>
            <input type="text" class="form-control">
          </div>
        </div>
        <div class="d-flex mb-3">
          <div class="form-group col-sm-4 p-2">
            <label for="height">Height:</label>
            <input type="text" class="form-control">
          </div>
          <div class="form-group col-sm-4 p-2">
            <label for="depth">Depth:</label>
            <input type="text" class="form-control">
          </div>
          <div class="form-group col-sm-4 p-2">
            <label for="size">(Ratio) Full Size:</label>
            <select name="size" id="size" class="form-select">
              <option value="" selected disabled hidden>Choose Ratio Size</option>
              <option value="2">2 Ratio (S)</option>
              <option value="5">5 Ratio</option>
              <option value="6">6 Ratio</option>
              <option value="6">6 Ratio (2)</option>
              <option value="8">8 Ratio</option>
              <option value="9">9 Ratio</option>
              <option value="10">10 Ratio</option>
              <option value="11">11 Ratio</option>
            </select>
          </div>
        </div>
        <div class="d-flex mb-3">
          <div class="form-group col-sm-4 p-2">
            <label for="Ratio Width">Ratio Width:</label>
            <input type="text" class="form-control">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
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
