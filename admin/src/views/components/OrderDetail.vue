<template>
  <div class="container-fluid bg-light py-4">
    <div class="row justify-content-center">
      <div class="col-12 col-lg-10">
        <div class="card shadow-sm">
          <div class="card-body">
            <h2 class="card-title mb-4">Order Detail</h2>
            <div class="row mb-3">
              <div class="col-md-3"><strong>Customer's Name:</strong></div>
              <div class="col-md-9">{{ order.customerName }}</div>
            </div>
            <div class="row mb-3">
              <div class="col-md-3"><strong>Status:</strong></div>
              <div class="col-md-9">
                <span class="badge bg-primary">{{ order.status }}</span>
              </div>
            </div>
            <div class="row mb-3">
              <div class="col-md-3"><strong>Amount:</strong></div>
              <div class="col-md-9">{{ order.amount }}</div>
            </div>
            <div class="row mb-3">
              <div class="col-md-3"><strong>Date:</strong></div>
              <div class="col-md-9">{{ formatDate(order.date) }}</div>
            </div>
            <div class="row mb-3">
              <div class="col-md-3"><strong>Address:</strong></div>
              <div class="col-md-9">{{ order.address }}</div>
            </div>
            <div class="row mb-3">
              <div class="col-md-3"><strong>Email:</strong></div>
              <div class="col-md-9">{{ order.email }}</div>
            </div>
            <div class="row mb-3">
              <div class="col-md-3"><strong>Phone:</strong></div>
              <div class="col-md-9">{{ order.phone }}</div>
            </div>

            <hr class="my-4">

            <div class="row">
              <div class="col-md-3">
                <div class="product-image">
                  <img :src="order.imageUrl" :alt="order.productName" class="img-fluid">
                </div>
              </div>
              <div class="col-md-9">
                <h3 class="text-primary">{{ order.productName }}</h3>
                <p class="mb-1">{{ order.productSize }}</p>
                <p class="mb-1"><strong>အမည်:</strong> {{ order.productCode }}</p>
                <p class="mb-1"><strong>အရေအတွက်:</strong> {{ order.quantity }}</p>
                <p class="text-success fw-bold">{{ order.proofStatus }}</p>
                <button class="btn btn-primary btn-sm" @click="reorder(order.id)">Reorder</button>
              </div>
            </div>

            <div class="position-absolute top-0 end-0 p-3">
              <button class="btn btn-link p-0" @click="toggleBookmark">
                <svg v-if="!order.bookmarked" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-muted">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-warning">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              </button>
            </div>
          </div>
          <div class="card-footer text-end">
            <button class="btn btn-outline-primary me-2" @click="reorder(order.id)">Reorder</button>
            <button class="btn btn-primary" @click="viewDetails(order.id)">View details</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const order = ref({
  id: '5807',
  customerName: 'John Doe',
  status: 'New',
  amount: 'K 1000',
  date: '2023-07-12T00:00:00.000Z',
  address: 'No (3) River Valley Rd, Singapore',
  email: 'john.doe@example.com',
  phone: '+391234',
  imageUrl: '/placeholder.svg?height=150&width=150',
  productName: 'Standard Business Cards - Promo',
  productSize: '[3.5" x 2.1" - Standard Business Card Size]',
  productCode: 'IBC_028',
  quantity: 100,
  proofStatus: 'Proof Approved',
  bookmarked: false
})

const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  return new Date(dateString).toLocaleDateString(undefined, options)
}

const reorder = (orderId) => {
  console.log('Reorder clicked for order:', orderId)
  // Add reorder logic here
}

const viewDetails = (orderId) => {
  console.log('View details clicked for order:', orderId)
  // Add view details logic here
}

const toggleBookmark = () => {
  order.value.bookmarked = !order.value.bookmarked
}
</script>

<style scoped>
.product-image {
  width: 150px;
  height: 150px;
  background-color: #f8f9fa;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.product-image img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}
</style>