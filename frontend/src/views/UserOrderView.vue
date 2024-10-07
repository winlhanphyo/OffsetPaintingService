<template>
  <div class="order-view">
    <div class="order-header">
      <h1>{{ $t("message.myOrder") }}</h1>
    </div>

    <section class="order-status">
      <div class="order-id-status">
        <p>{{ $t("message.order") }}:<strong> #5790</strong></p>
        <p class="status pending">{{ $t("message.pending") }}</p>
      </div>
      <p class="order-time">{{ $t("message.orderTime") }}: <strong>Aug, 2024 07:52 PM</strong></p>
      <p class="order-amount">{{ $t("message.totalAmount") }}: <strong>Ks34,500.00</strong></p>
    </section>

    <!-- <section class="order-error">
      <p>{{ $t("message.orderAlert") }}</p>
    </section>

    <section class="payment-details">
      <h2>{{ $t("message.paymentMethodInstruction") }}</h2>
      <ul>
        <li>{{ $t("message.paymentTime") }}: 27 Aug, 2024 07:52 PM</li>
        <li>{{ $t("message.paymentMethod") }}: KBZ Pay</li>
        <li>{{ $t("message.paymentID") }}: 123</li>
        <li>{{ $t("message.ExpiryDate") }}: 12 Sep, 2024</li>
      </ul>
    </section>

    <section class="cards-section">
      <div class="card" @click="viewOrders">
        <div class="card-icon">
          <i class="fa fa-clipboard-list"></i>
        </div>
        <div class="card-content">
          <h3>My Orders</h3>
          <p>Check your order history and details.</p>
        </div>
      </div>

      <div class="card" @click="viewSavedDesigns">
        <div class="card-icon">
          <i class="fa fa-save"></i>
        </div>
        <div class="card-content">
          <h3>My Saved Designs</h3>
          <p>View your saved designs and download PDF previews.</p>
        </div>
      </div>

      <div class="card" @click="contactSupport">
        <div class="card-icon">
          <i class="fa fa-comments"></i>
        </div>
        <div class="card-content">
          <h3>Contact Support</h3>
          <p>Need help? Reach out to our support team for assistance.</p>
        </div>
      </div>
    </section> -->
  </div>
</template>

<script>
export default {
  name: 'OrderView',
  methods: {
    viewOrders() {

    },
    viewSavedDesigns() {

    },
    contactSupport() {

    }
  }
}
</script>

<style scoped>
.order-view {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

.order-header {
  background-color: #ff6600;
  padding: 10px;
  text-align: center;
  color: white;
}

.order-status {
  margin: 20px 0;
  padding: 15px;
  background-color: #f4f4f4;
  border-radius: 5px;
}

.order-id-status {
  display: flex;
  justify-content: space-between;
  font-size: 1.2em;
}

.order-id-status .pending {
  color: red;
}

.order-error {
  background-color: #ffe5e5;
  color: #cc0000;
  padding: 15px;
  border-radius: 5px;
  margin-bottom: 20px;
}

.payment-details {
  margin-bottom: 20px;
}

.payment-details h2 {
  font-size: 1.5em;
  margin-bottom: 10px;
}

.payment-details ul {
  list-style: none;
  padding: 0;
}

.payment-details ul li {
  margin-bottom: 5px;
}

.order-actions {
  display: flex;
  justify-content: space-around;
}

.order-actions button {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.order-actions button:hover {
  background-color: #0056b3;
}

.cards-section {
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
}

.card {
  background-color: #f4f4f4;
  border-radius: 10px;
  width: 30%;
  padding: 10px;
  margin: 10px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
}

.card-icon {
  font-size: 2.5em;
  color: #ff6600;
  margin-bottom: 15px;
}

.card-content h3 {
  margin: 0;
  font-size: 1.2em;
}

.card-content p {
  color: #777;
  font-size: 0.9em;
}
</style>
