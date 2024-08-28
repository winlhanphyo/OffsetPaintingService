<template>
    <div class="payment-page">
      <h1 class="qr-title">{{  $t("message.ScanQR") }}</h1>
      <div class="qr-container">
        <img :src="qrCodeImage" alt="QR Code" />
      </div>
      <div v-if="isScanned" class="submit-container">
        <button class="btn btn-primary" @click="handleSubmit">Submit Payment</button>
      </div>
      <div v-if="showAlert" class="alert alert-success alert-dismissible fade show" role="alert">
        Payment Submitted Successfully!
        <button type="button" class="close" @click="showAlert = false" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    </div>
  </template>

<script setup>
import { ref, onMounted } from 'vue';

const qrCodeImage = require('@/assets/images/common/test_qr.jpg');

const isScanned = ref(false);
const showAlert = ref(false);

const handleSubmit = () => {
  showAlert.value = true;
};

const simulateQRCodeScan = () => {
  setTimeout(() => {
    isScanned.value = true;
  }, 3000);
};


onMounted(() => {
  simulateQRCodeScan();
});
</script>

<style scoped>
.payment-page {
  text-align: center;
}

.qr-title {
    margin-bottom: 30px;
}

.qr-container {
    width: 25%;
    height: auto;
    margin: 0 auto;
}

.qr-container img {
  width: auto;
  height: auto;
}

.submit-container {
  margin-top: 20px;
}

button {
  padding: 10px 20px;
  font-size: 16px;
}
</style>