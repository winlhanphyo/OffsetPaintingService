<template>
  <div>
    <header>
      <select>
        <option>status</option>
      </select>
      <div class="search-container">
        <!-- <input type="text" placeholder="ထုတ်ကုန် ရှာပါ အမည်"> -->
        <button class="search-btn">🔍</button>
      </div>
      <!-- <div class="view-controls">
        <button class="grid-view">⋮⋮</button>
        <button class="list-view">☰</button>
      </div> -->
    </header>
    <main class="cards-container">
      <div class="order-card" v-for="(order, index) in orders" :key="index">
        <div class="order-header">
          <span class="order-id">အမှာစာ: #{{ order?.id }} {{ order.status }}</span>
          <span class="order-date">ရက်စွဲ : {{ order?.createdAt }}</span>
          <span class="order-total">စုစုပေါင်းငွေ: {{ order?.amount }}</span>
          <span class="order-delivery">ခန့်မှန်းရက်စွဲ - {{ order?.deliveryDate }}</span>
        </div>
        <div class="order-content">
          <div class="product-image">
            <!-- <img :src="order.imageUrl" :alt="order.productName"> -->
            <img src="/img/Fabrix_T_Shirt_01_40091.0dd21194.jpg?height=400&width=300" :alt="order.productName">
          </div>
          <div class="product-details">
            <h3>{{ order.productName }}</h3>
            <p class="product-size">{{ order.productSize }}</p>
            <p class="product-code">အမည်: {{ order?.userData?.firstName + " " + order?.userData?.lastName }}</p>
            <p class="product-quantity">အရေအတွက်: {{ order.quantity }}</p>
            <p class="proof-status">{{ order.proofStatus }}</p>
            <button class="reorder-btn" @click="reorder(order.id)">Reorder </button>
          </div>
          <div class="favorite-icon"></div>
          <div class="favorite-icon" @click="toggleBookmark(order.id)">
            <svg v-if="!order.bookmarked" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="star-icon">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="star-icon star-filled">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
          </div>
        </div>
        <div class="order-footer">
          <button class="reorder-btn-large" @click="reorder(order.id)">Reorder</button>
          <button class="view-details-btn" @click="viewDetails(order.id)">View details</button>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { getMyOrder } from '@/services/offset.service';


const orders = ref([
  {
    id: '5807',
    status: 'Pending',
    date: '02 Oct, 2024 17:49',
    total: 'Ks34,500.00',
    deliveryDate: '18 Oct, 2024',
    imageUrl: '/placeholder.svg?height=150&width=150',
    productName: 'Standard Business Cards - Promo',
    productSize: '[3.5" x 2.1" - Standard Business Card Size]',
    productCode: 'IBC_028',
    quantity: 100,
    proofStatus: 'Proof Approved'
  },
  {
    id: '5808',
    status: 'Processing',
    date: '03 Oct, 2024 10:30',
    total: 'Ks45,000.00',
    deliveryDate: '20 Oct, 2024',
    imageUrl: '/placeholder.svg?height=150&width=150',
    productName: 'Premium Business Cards - Glossy',
    productSize: '[3.5" x 2.1" - Standard Business Card Size]',
    productCode: 'IBC_029',
    quantity: 200,
    proofStatus: 'Proof Pending'
  }
])

const reorder = (orderId) => {
  console.log('Reorder clicked for order:', orderId)
}

const viewDetails = (orderId) => {
  console.log('View details clicked for order:', orderId)
}
const toggleBookmark = (orderId) => {
  const order = orders.value.find(o => o.id === orderId)
  if (order) {
    order.bookmarked = !order.bookmarked
  }
}

const getOrder = async () => {
  const userId = localStorage.getItem("userId");
  const token = localStorage.getItem("token");
  const res = await getMyOrder(userId, token);
  console.log("--------res", res?.data?.data);
  orders.value = res?.data?.data;
}

onMounted(() => {
  getOrder();
});
</script>

<style scoped>
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 20px;
  background-color: #f0f0f0;
}

header {
  display: flex;
  justify-content: end;
  align-items: center;
  margin-bottom: 20px;
}

select, input {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.search-container {
  display: flex;
  align-items: center;
}

.search-btn {
  background-color: #4a90e2;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
}

.view-controls button {
  background-color: #4a90e2;
  color: white;
  border: none;
  padding: 8px 12px;
  margin-left: 5px;
  cursor: pointer;
}

.cards-container {
  display: flex;
  gap: 20px;
}

.order-card {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-bottom: 20px;
  width: 100%;
}

@media (min-width: 1024px) {
  .order-card {
    width: calc(50% - 10px);
  }
}

.order-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  font-size: 14px;
  flex-wrap: wrap;
}

.order-id {
  font-weight: bold;
  color: #4a90e2;
}

.order-content {
  display: flex;
  border-bottom: 1px solid #e0e0e0;
  padding-bottom: 15px;
  margin-bottom: 15px;
  position: relative;
}

.product-image {
  width: 150px;
  height: 150px;
  background-color: #f0f0f0;
  margin-right: 20px;
}

.product-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.product-details {
  flex-grow: 1;
}

.product-details h3 {
  margin-top: 0;
  color: #4a90e2;
}

.product-size, .product-code, .product-quantity {
  margin: 5px 0;
  font-size: 14px;
}

.proof-status {
  color: green;
  font-weight: bold;
}

.reorder-btn {
  background-color: #4a90e2;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 12px;
}

.favorite-icon {
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
}

.star-icon {
  width: 24px;
  height: 24px;
  color: #ccc;
  transition: color 0.3s ease;
}

.star-filled {
  color: #ffd700;
}

.order-footer {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
}

.reorder-btn-large, .view-details-btn {
  padding: 8px 16px;
  border: 1px solid #4a90e2;
  background-color: white;
  color: #4a90e2;
  border-radius: 4px;
  cursor: pointer;
}

.reorder-btn-large {
  background-color: #4a90e2;
  color: white;
}
</style>