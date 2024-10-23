<template>
    <div class="order-details">
        <header class="header">
            <nav class="nav">
                <a href="#" class="nav-item">ပင်မစာမျက်နှာ</a>
                <a href="#" class="nav-item">ထုတ်ကုန်များ ▼</a>
                <a href="#" class="nav-item">ဝယ်ယူမှု အကောင့် ▼</a>
                <a href="#" class="nav-item">ဆက်သွယ်ရန်</a>
                <a href="#" class="nav-item">ဈေးနှုန်းတောင်းခံရန်</a>
            </nav>
        </header>

        <main class="main-content">
            <div class="order-header">
                <h1>Cancelled ရက်စွဲ: {{ orderDate }}</h1>
                <button class="reorder-btn">Reorder</button>
            </div>

            <div class="order-tabs">
                <button class="tab-btn active">အော်ဒါအသေးစိတ်များ</button>
                <button class="tab-btn">မှတ်ချက်နှင့် နောက်ဆက်တွဲများ <span class="badge">1</span></button>
            </div>

            <div class="order-sections">
                <section class="order-section">
                    <div class="order-info">
                        <div class="info-column">
                            <h3>ပို့ဆောင်မှုအသေးစိတ်</h3>
                            <p>{{ shippingDetails.name }}</p>
                            <p>{{ shippingDetails.address }}</p>
                            <p>{{ shippingDetails.city }}</p>
                            <p>{{ shippingDetails.country }}</p>
                            <p>ဖုန်း : {{ shippingDetails.phone }}</p>
                        </div>
                        <div class="info-column">
                            <h3>ငွေပေးချေမှုအသေးစိတ်</h3>
                            <p>{{ billingDetails.name }}</p>
                            <p>{{ billingDetails.address }}</p>
                            <p>{{ billingDetails.city }}</p>
                            <p>{{ billingDetails.country }}</p>
                            <p>ဖုန်း : {{ billingDetails.phone }}</p>
                        </div>
                        <div class="info-column">
                            <h3>ငွေပေးချေသူ / ပို့ဆောင်ခံ အသေးစိတ်</h3>
                            <p>ငွေပေးချေသည့်ရက်စွဲ: {{ paymentDetails.date }}</p>
                            <p>ငွေပေးချေမှုနည်း: {{ paymentDetails.method }}</p>
                            <p>ငွေသွင်းငွေထုတ် ID: {{ paymentDetails.transactionId }}</p>
                            <p>သဘောတူချက်: {{ paymentDetails.agreement }}</p>
                            <p>သဘောတူချက်ပြီးဆုံးရက်: {{ paymentDetails.agreementEndDate }}</p>
                        </div>
                    </div>
                </section>

                <section class="order-items">
                    <table>
                        <thead>
                            <tr>
                                <th>ထုတ်ကုန်များ</th>
                                <th>နောက်ထပ်သတင်းအချက်အလက်များ</th>
                                <th>အခြေအနေ</th>
                                <th>အရေအတွက်</th>
                                <th>စျေးနှုန်း</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in orderItems" :key="item.id">
                                <td>
                                    <div class="product-info">
                                        <img src="/img/Fabrix_T_Shirt_01_40091.0dd21194.jpg" :alt="item.name" class="product-image" />
                                        <span>{{ item.name }}</span>
                                    </div>
                                </td>
                                <td>
                                    <div v-for="(detail, index) in item.details" :key="index">
                                        <strong>{{ detail.label }}:</strong> {{ detail.value }}
                                    </div>
                                    <!-- <button class="reorder-btn small">Reorder ခလုတ်</button> -->
                                </td>
                                <td>
                                    <span :class="['status-indicator', item.status.toLowerCase()]">
                                        {{ item.status }}
                                    </span>
                                </td>
                                <td>{{ item.quantity }}</td>
                                <td>{{ item.price }}</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </div>
        </main>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const orderDate = ref('02 Oct, 2024')
const shippingDetails = ref({
    name: 'Win Lhan Phyo',
    address: 'အမှတ်(၃၄) ၅လွှာ သခင်ရွှေလမ်း၊ ၂ရပ်ကွက်၊',
    city: 'Yangon City,Yangon,',
    country: 'Thaketa, Myanmar.',
    phone: '09964764462'
})
const billingDetails = ref({
    name: 'Win Lhan Phyo',
    address: 'အမှတ်(၃၄) ၅လွှာ သခင်ရွှေလမ်း၊ ၂ရပ်ကွက်၊',
    city: 'Yangon City,Yangon,',
    country: 'Thaketa, Myanmar.',
    phone: '09964764462'
})
const paymentDetails = ref({
    date: '02 Oct, 2024 17:49',
    method: 'QuickPay - KBZ Bank',
    transactionId: '---',
    agreement: 'အိမ်အရောက်ပို့ဆောင်မှု',
    agreementEndDate: '18 Oct, 2024'
})
const orderItems = ref([
    {
        id: 1,
        name: 'Standard Business Cards - Promo',
        image: '/placeholder.svg?height=100&width=100',
        details: [
            { label: 'စာရွက်အမျိုးအစား', value: 'Artcard 250GSM' },
            { label: 'ပုံနှိပ်နည်းစနစ်', value: 'Digital Press' },
            { label: 'တစ်ဖက်/နှစ်ဖက်', value: 'One Side' },
            { label: 'Lamination (ပလတ်စတစ်အုပ်ခြင်း)', value: 'None' }
        ],
        status: 'Proof Approved',
        quantity: 100,
        price: 'Ks31,500.00'
    }
])
</script>

<style scoped>
.order-details {
    font-family: Arial, sans-serif;
    color: #333;
    background-color: #f0f0f0;
}

.header {
    background-color: #003366;
    padding: 1rem;
}

.nav {
    display: flex;
    justify-content: flex-start;
    gap: 1rem;
}

.nav-item {
    color: white;
    text-decoration: none;
}

.main-content {
    padding: 2rem;
    background-color: white;
    margin: 2rem;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.order-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
}

.reorder-btn {
    background-color: #4CAF50;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    cursor: pointer;
    border-radius: 4px;
}

.reorder-btn.small {
    font-size: 0.8rem;
    padding: 0.3rem 0.6rem;
}

.order-tabs {
    display: flex;
    margin-bottom: 1rem;
}

.tab-btn {
    background-color: #f0f0f0;
    border: none;
    padding: 0.5rem 1rem;
    cursor: pointer;
    border-bottom: 2px solid transparent;
}

.tab-btn.active {
    border-bottom-color: #003366;
    font-weight: bold;
}

.badge {
    background-color: #ff0000;
    color: white;
    border-radius: 50%;
    padding: 0.2rem 0.5rem;
    font-size: 0.8rem;
    margin-left: 0.5rem;
}

.order-sections {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.order-section {
    border: 1px solid #ddd;
    padding: 1rem;
    border-radius: 4px;
}

.order-info {
    display: flex;
    gap: 2rem;
}

.info-column {
    flex: 1;
}

.order-items table {
    width: 100%;
    border-collapse: collapse;
}

.order-items th,
.order-items td {
    border: 1px solid #ddd;
    padding: 0.5rem;
    text-align: left;
}

.product-info {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.product-image {
    width: 50px;
    height: 50px;
    object-fit: cover;
}

.status-indicator {
    display: inline-block;
    padding: 0.3rem 0.6rem;
    border-radius: 4px;
    font-size: 0.8rem;
    font-weight: bold;
}

.status-indicator.proof-approved {
    background-color: #4CAF50;
    color: white;
}
</style>