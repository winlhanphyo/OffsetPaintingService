<template>
  <div v-if="isVisible" class="modal d-flex justify-content-center align-items-center">
    <div class="modal-content" style="width: 75vw; height: 90vh;">
      <!-- Header Section -->
      <div class="modal-header d-flex justify-content-between align-items-center p-3">
        <h5 class="modal-title">Cost Detail</h5>
        <span class="close" @click="closeModal">&times;</span>
      </div>

      <div class="modal-body d-flex h-100 position-relative p-4">
        <!-- Left Column -->
        <div class="col pe-4">
          <div class="mb-3 row">
            <div class="col-4">Paper:</div>
            <div class="col-8">{{ data?.paper || "-" }}</div>
          </div>
          <div class="mb-3 row">
            <div class="col-4">Plate CTP:</div>
            <div class="col-8">{{ data?.plateCtp || "-" }}</div>
          </div>
          <div class="mb-3 row">
            <div class="col-4">Lam Per Price:</div>
            <div class="col-8">{{ data?.lamPerPrice || "-" }}</div>
          </div>
          <div class="mb-3 row">
            <div class="col-4">Lam Total Cost:</div>
            <div class="col-8">{{ data?.lamTotalCost || "-" }}</div>
          </div>
          <div class="mb-3 row">
            <div class="col-4">Paper Total Cost:</div>
            <div class="col-8">{{ data?.paperTotalCost || "-" }}</div>
          </div>
          <div class="mb-3 row">
            <div class="col-4">CTP Total:</div>
            <div class="col-8">{{ data?.ctpTotalCost || "-" }}</div>
          </div>
          <div class="mb-3 row">
            <div class="col-4">Binding Total:</div>
            <div class="col-8">{{ data?.bindingTotalCost || "-" }}</div>
          </div>
          <div class="mb-3 row">
            <div class="col-4">Gluding Total:</div>
            <div class="col-8">{{ data?.gludingTotal || "-" }}</div>
          </div>
          <div class="mb-3 row">
            <div class="col-4">Cover Total:</div>
            <div class="col-8">{{ data?.coverTotal || "-" }}</div>
          </div>
        </div>

        <div class="d-flex align-items-center justify-content-center position-relative mx-3">
          <div class="wavy-line"></div>
        </div>

        <!-- Right Column -->
        <div class="col ps-4 lh-base">
          <div class="mb-3 row">
            <div class="col-4">All Total:</div>
            <div class="col-8">{{ data?.allTotal || "-" }}</div>
          </div>
          <div class="mb-3 row">
            <div class="col-4">V Counter:</div>
            <div class="col-8">{{ data?.vCounter || "-" }}</div>
          </div>
          <div class="mb-3 row">
            <div class="col-4">V Round:</div>
            <div class="col-8">{{ data?.vRound || "-" }}</div>
          </div>
          <div class="mb-3 row">
            <div class="col-4">BCounter:</div>
            <div class="col-8">{{ data?.vPround || "-" }}</div>
          </div>
          <div class="mb-3 row">
            <div class="col-4">V Pround:</div>
            <div class="col-8">{{ data?.bCounter || "-" }}</div>
          </div>
          <div class="mb-3 row">
            <div class="col-4">Form:</div>
            <div class="col-8">{{ data?.form || "-" }}</div>
          </div>
          <div class="mb-3 row">
            <div class="col-4">Per Cost:</div>
            <div class="col-8">{{ data?.perCost || "-" }}</div>
          </div>
          <div class="mb-3 row">
            <div class="col-4">Press Cost:</div>
            <div class="col-8">{{ data?.pressCost || "-" }}</div>
          </div>
          <div class="mb-3 row">
            <div class="col-4">FCounter:</div>
            <div class="col-8">{{ data?.fCounter || "-" }}</div>
          </div>
        </div>
      </div>
      <div class="log-option-btn">
        <span class="cancel-btn" @click="closeModal">Close</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["data"],
  data() {
    return {
      isVisible: false,
    };
  },
  methods: {
    openModal() {
      this.isVisible = true;
    },
    closeModal() {
      this.isVisible = false;
    },
  },
};
</script>

<style scoped>
.modal {
  display: flex;
  position: fixed;
  z-index: 9999;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal-content {
  background-color: #fff;
  border-radius: 15px;
  max-width: 80vw;
  max-height: 80vh;
  overflow-y: auto;
  position: relative;
}

.wavy-line {
  width: 2px;
  height: 100%;
  background: repeating-linear-gradient(180deg, #ccc, #ccc 5px, transparent 5px, transparent 10px);
  position: relative;
}

.modal-title {
  margin: 0 auto;
}

.modal-header {
  border-bottom: 1px solid #dee2e6;
}

.modal-footer {
  border-top: 1px solid #dee2e6;
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
  text-align: right;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}

.log-option-btn {
  text-align: center;
}

.cancel-btn {
  background: #d3d5e7;
  padding: 7px 20px;
  border-radius: 5px;
  color: #000000;
  margin: 0px 10px;
  margin-bottom: 20px;
  display: inline-block;
  cursor: pointer;
}

@media (max-width: 768px) {
  .modal-content {
    width: 90vw;
    height: auto;
  }
}
</style>
