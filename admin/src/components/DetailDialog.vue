<template>
  <div v-if="isVisible" class="modal">
    <div class="modal-content" style="margin-top:20%;">
      <span class="close" @click="closeModal">&times;</span>
        <div>
          <div class="d-flex mt-3">
            <div class="w-28">Paper:</div>
            <div class="w-75 ms-2">{{ data?.paper || "-" }}</div>
          </div>
          <div class="d-flex mt-3">
            <div class="w-28">Plate CTP:</div>
            <div class="w-75 ms-2">{{ data?.plateCtp || "-" }}</div>
          </div>
          <div class="d-flex mt-3">
            <div class="w-28">Lam Per Price:</div>
            <div class="w-75 ms-2">{{ data?.lamPerPrice || "-" }}</div>
          </div>
          <div class="d-flex mt-3">
            <div class="w-28">Lam Total Cost:</div>
            <div class="w-75 ms-2">{{ data?.lamTotalCost || "-" }}</div>
          </div>
          <div class="d-flex mt-3">
            <div class="w-28">Lam Total Cost:</div>
            <div class="w-75 ms-2">{{ data?.lamTotalCost || "-" }}</div>
          </div>
          <div class="d-flex mt-3">
            <div class="w-28">Paper Total Cost:</div>
            <div class="w-75 ms-2">{{ data?.paperTotalCost || "-" }}</div>
          </div>
          <div class="d-flex mt-3">
            <div class="w-28">CTP Total:</div>
            <div class="w-75 ms-2">{{ data?.ctpTotalCost || "-" }}</div>
          </div>
          <div class="d-flex mt-3">
            <div class="w-28">Binding Total:</div>
            <div class="w-75 ms-2">{{ data?.bindingTotalCost || "-" }}</div>
          </div>
          <div class="d-flex mt-3">
            <div class="w-28">Gluding Total:</div>
            <div class="w-75 ms-2">{{ data?.gludingTotal || "-" }}</div>
          </div>
          <div class="d-flex mt-3">
            <div class="w-28">Cover Total:</div>
            <div class="w-75 ms-2">{{ data?.coverTotal || "-" }}</div>
          </div>
          <div class="d-flex mt-3">
            <div class="w-28">All Total:</div>
            <div class="w-75 ms-2">{{ data?.allTotal || "-" }}</div>
          </div>
          <div class="d-flex mt-3">
            <div class="w-28">V Counter:</div>
            <div class="w-75 ms-2">{{ data?.vCounter || "-" }}</div>
          </div>
          <div class="d-flex mt-3">
            <div class="w-28">V Round:</div>
            <div class="w-75 ms-2">{{ data?.vRound || "-" }}</div>
          </div>
          <div class="d-flex mt-3">
            <div class="w-28">V Pround:</div>
            <div class="w-75 ms-2">{{ data?.vPround || "-" }}</div>
          </div>
          <div class="d-flex mt-3">
            <div class="w-28">BCounter:</div>
            <div class="w-75 ms-2">{{ data?.bCounter || "-" }}</div>
          </div>
          <div class="d-flex mt-3">
            <div class="w-28">Form:</div>
            <div class="w-75 ms-2">{{ data?.form || "-" }}</div>
          </div>
          <div class="d-flex mt-3">
            <div class="w-28">Per Cost:</div>
            <div class="w-75 ms-2">{{ data?.perCost || "-" }}</div>
          </div>
          <div class="d-flex mt-3">
            <div class="w-28">Press Cost:</div>
            <div class="w-75 ms-2">{{ data?.pressCost || "-" }}</div>
          </div>
          <div class="d-flex mt-3">
            <div class="w-28">FCounter:</div>
            <div class="w-75 ms-2">{{ data?.fCounter || "-" }}</div>
          </div>
          

        </div>
      <!-- </div> -->
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
/* Modal styles */

.modal {
  display: block;
  position: fixed;
  z-index: 999999;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
  justify-content: center;
  display: flex;
  flex-direction: column;
}

.modal-content {
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  border-radius: 15px;
}
.modal-content {
  color: #000000;
}
.modal-content p {
  padding: 30px 15px;
  text-align: center;
  letter-spacing: 2px;
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
  /* border: 1px solid; */
  margin: 0px 10px;
  margin-bottom: 20px;
  display: inline-block;
  cursor: pointer;
}
.log-btn {
  background: #e7d3d3;
  padding: 7px 20px;
  border-radius: 5px;
  color: #ff0000;
  /* border: 1px solid; */
  margin: 0px 10px;
  margin-bottom: 20px;
  display: inline-block;
  cursor: pointer;
}
.logout-icon {
  text-align: center;
}
.logout-icon img {
  width: 30%;
}
@media only screen and (max-width: 1024px) {
  .modal-content {
    width: 80%;
  }
}
/* Tablets (portrait and landscape) */
@media only screen and (min-width: 1025px) {
  .modal-content {
    width: 25%;
  }
}
</style>
