<template>
  <div class="payment-page">
    <h1 class="qr-title">{{ $t("message.ScanQR") }}</h1>
    <div class="qr-container">
      <img :src="qrCodeImage" alt="QR Code" />
    </div>

    <div class="form-group">
      <label for="" class="label">{{ $t("message.paymentImage") }}</label>
      <div class="form-data">
        <input class="form-control" style="margin-top: 20px;" type="file" id="formFile" @change="handleFileUpload"
          ref="fileInput" />
      </div>
    </div>
    <!-- Image Preview with "X" remove button -->
    <div class="image-container" v-if="images?.preview">
      <img :src="images?.preview" alt="Image Preview" class="image-preview">
      <button class="remove-button" @click="removeImage()">×</button>
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
// import { useRoute } from 'vue-router';
// import { paymentOrder } from "@/services/offset.service";
// import Swal from 'sweetalert2';

const qrCodeImage = require('@/assets/images/common/test_qr.jpg');

const isScanned = ref(false);
const showAlert = ref(false);
const fileInput = ref(null);
const images = ref({
  file: null,
  preview: null
});

const handleSubmit = async () => {
  // const token = localStorage.getItem("token");
  // // const route = useRoute(); // Access the current route object
  // const id = $route.params.id;

  // console.log("-------id", id); // Debugging: Ensure this logs the correct id
  // if (images.value.preview) {
  //   const payload = {
  //     paymentScreenshot: images.value.preview
  //   };
  //   const res = await paymentOrder(id, payload, token);
  //   if (res?.data?.message) {
  //     localStorage.removeItem("cartData");
  //   }
  //   showAlert.value = true;
  // } else {
  //   Swal.fire({
  //     position: "bottom",
  //     icon: "error",
  //     title: "Kpay screenshoot is required.",
  //     showConfirmButton: false,
  //     // timer: 3000,
  //     timerProgressBar: true,
  //     toast: true
  //   });
  // }
};

const simulateQRCodeScan = () => {
  setTimeout(() => {
    isScanned.value = true;
  }, 3000);
};

const handleFileUpload = () => {
  const file = fileInput.value.files[0];

  if (file) {
    const reader = new FileReader();

    reader.onload = (e) => {
      images.value = {
        file: file,
        preview: e.target.result
      };
    };
    reader.readAsDataURL(file); // Convert to base64
  }
};

const removeImage = () => {
  images.value = {
    file: null,
    preview: null
  };
  fileInput.value = null;
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
  margin-bottom: 20px;
}

button {
  padding: 10px 20px;
  font-size: 16px;
  background-color: #5e72e4;
  letter-spacing: -0.025rem;
  text-transform: none;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
  color: white;
  border-radius: 0.5rem;
  cursor: pointer;
}

.image-container {
  position: relative;
  display: inline-block;
  margin-top: 30px;
  /* margin-left: 33%; */
}

.image-preview {
  max-width: 150px;
  height: 150px;
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