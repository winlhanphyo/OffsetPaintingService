<template>
  <div class="container-fluid bg-light py-4">
    <div class="row justify-content-center">
      <div class="col-12 col-lg-10">
        <div class="card shadow-sm">
          <div class="card-body">
            <h2 class="card-title mb-4">Order Detail</h2>
            <div class="row mb-3">
              <div class="col-md-3"><strong>Customer's Name:</strong></div>
              <div class="col-md-9">{{ order?.firstName + " " + order?.lastName }}</div>
            </div>
            <div class="row mb-3">
              <div class="col-md-3"><strong>Status:</strong></div>
              <div class="col-md-9">
                <span class="badge bg-primary">{{ order?.status }}</span>
              </div>
            </div>
            <div class="row mb-3">
              <div class="col-md-3"><strong>Amount:</strong></div>
              <div class="col-md-9">{{ order?.totalAmount }}</div>
            </div>
            <div class="row mb-3">
              <div class="col-md-3"><strong>Date:</strong></div>
              <div class="col-md-9">{{ formatDate(order?.createdAt) }}</div>
            </div>
            <div class="row mb-3">
              <div class="col-md-3"><strong>Address:</strong></div>
              <div class="col-md-9">{{ order?.address }}</div>
            </div>
            <div class="row mb-3">
              <div class="col-md-3"><strong>Email:</strong></div>
              <div class="col-md-9">{{ order?.customerData?.email }}</div>
            </div>
            <div class="row mb-3">
              <div class="col-md-3"><strong>Phone:</strong></div>
              <div class="col-md-9">{{ order?.phone }}</div>
            </div>

            <template v-for="item in productDetail" :key="item?.id">
              <div class="row mb-3">
                <div class="col-md-3"><strong>Quantity:</strong></div>
                <div class="col-md-9">{{ item?.qty }}</div>
              </div>
              <div class="row mb-3">
                <div class="col-md-3"><strong>Sheet:</strong></div>
                <div class="col-md-9">{{ item?.sheet }}</div>
              </div>
              <div class="row mb-3">
                <div class="col-md-3"><strong>Material:</strong></div>
                <div class="col-md-9">{{ item?.selectedGsm }}</div>
              </div>
              <div class="row mb-3">
                <div class="col-md-3"><strong>Print Type:</strong></div>
                <div class="col-md-9">{{ item?.printingType }}</div>
              </div>
              <div class="row mb-3">
                <div class="col-md-3"><strong>Bi Type:</strong></div>
                <div class="col-md-9">{{ item?.selectedBiType }}</div>
              </div>
              <div class="row mb-3">
                <div class="col-md-3"><strong>Type:</strong></div>
                <div class="col-md-9">{{ item?.printingType }}</div>
              </div>
              <div class="row mb-3">
                <div class="col-md-3"><strong>Ratio Width Height:</strong></div>
                <div class="col-md-9">{{ item?.ratioWidthHeight }}</div>
              </div>
              <div class="row mb-3">
                <div class="col-md-3"><strong>Width Height:</strong></div>
                <div class="col-md-9">{{ item?.widthHeight }}</div>
              </div>
              <div class="row mb-3">
                <div class="col-md-3"><strong>Format:</strong></div>
                <div class="col-md-9">{{ item?.selectedFormat }}</div>
              </div>
              <div class="row mb-3">
                <div class="col-md-3"><strong>Lam Sq Price:</strong></div>
                <div class="col-md-9">{{ item?.lamSqPrice }}</div>
              </div>
              <div class="row mb-3">
                <div class="col-md-3"><strong>Paper Price:</strong></div>
                <div class="col-md-9">{{ item?.paperPrice }}</div>
              </div>
              <div class="row mb-3">
                <div class="col-md-3"><strong>Press Price:</strong></div>
                <div class="col-md-9">{{ item?.pressPrice }}</div>
              </div>
              <div class="row mb-3">
                <div class="col-md-3"><strong>Die Cut Price:</strong></div>
                <div class="col-md-9">{{ item?.dieCut }}</div>
              </div>
              <div class="row mb-3">
                <div class="col-md-3"><strong>Ply Set:</strong></div>
                <div class="col-md-9">{{ item?.plySet }}</div>
              </div>
              <div class="row mb-3">
                <div class="col-md-3"><strong>Other:</strong></div>
                <div class="col-md-9">{{ item?.other }}</div>
              </div>
              <div class="row mb-3">
                <div class="col-md-3"><strong>Cover:</strong></div>
                <div class="col-md-9">{{ item?.cover }}</div>
              </div>
              <div class="row mb-3">
                <div class="col-md-3"><strong>CTP Price:</strong></div>
                <div class="col-md-9">{{ item?.ctpPrice }}</div>
              </div>
              <div class="row mb-3">
                <div class="col-md-3"><strong>Waste:</strong></div>
                <div class="col-md-9">{{ item?.waste }}</div>
              </div>
              <div class="row mb-3">
                <div class="col-md-3"><strong>AB 2 BB:</strong></div>
                <div class="col-md-9">{{ item?.abbb }}</div>
              </div>
              <div class="row mb-3">
                <div class="col-md-3"><strong>Design File:</strong></div>
                <div class="col-md-9">{{ item?.designFile }}</div>
              </div>
            </template>

            <!-- <hr class="my-4" /> -->
            <template v-if="order?.paymentScreenshot">
              <div class="row mb-3">
                <div class="col-md-12">
                  <h4>Payment Screenshoot</h4>
                </div>
              </div>

              <div class="row mb-3">
                <div class="col-md-3">
                  <img class="payment-img" :src="order?.paymentScreenshot" alt="paymentScreenshoot" />
                </div>
              </div>
            </template>

            <hr class="my-4" />

            <div class="row" v-for="data in productDetail" :key="data?.id">
              <div class="col-md-3">
                <div class="product-image">
                  <!-- <img :src="order.imageUrl" :alt="order.productName" class="img-fluid"> -->
                  <img :src="data?.productImage" :alt="data?.productName" class="img-fluid">
                </div>
              </div>
              <div class="col-md-9">
                <h3 class="text-primary">{{ data?.category?.name }}</h3>
                <p class="mb-1">{{ showWidthHeight(data?.widthHeight) }}</p>
                <p class="mb-1"><strong>အမည်:</strong> {{ data?.name }}</p>
                <p class="mb-1"><strong>အရေအတွက်:</strong> {{ data?.qty }}</p>
                <p class="text-success fw-bold">{{ data?.proofStatus }}</p>
                <!-- <button class="btn btn-primary btn-sm" @click="reorder(data?.id)">Reorder</button> -->
              </div>
            </div>

            <div class="position-absolute top-0 end-0 p-3">
              <button class="btn btn-link p-0" @click="toggleBookmark">
                <svg v-if="!data?.bookmarked" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                  viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round" class="text-muted">
                  <polygon
                    points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
                  </polygon>
                </svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                  fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round" class="bookmark-star">
                  <polygon
                    points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
                  </polygon>
                </svg>
              </button>
            </div>
          </div>
          <!-- <div class="card-footer text-end">
            <button class="btn btn-outline-primary me-2" @click="reorder(data?.id)">Reorder</button>
            <button class="btn btn-primary" @click="viewDetails(data?.id)">View details</button>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { imgRoot } from "../../../config.js";
import { getOrderById } from '@/services/admin.service';
import router from '@/router/index';

const order = ref(
  // {
  //   id: '5807',
  //   customerName: 'John Doe',
  //   status: 'New',
  //   amount: 'K 1000',
  //   date: '2023-07-12T00:00:00.000Z',
  //   address: 'No (3) River Valley Rd, Singapore',
  //   email: 'john.doe@example.com',
  //   phone: '+391234',
  //   imageUrl: '/placeholder.svg?height=150&width=150',
  //   productName: 'Standard Business Cards - Promo',
  //   productSize: '[3.5" x 2.1" - Standard Business Card Size]',
  //   productCode: 'IBC_028',
  //   quantity: 100,
  //   proofStatus: 'Proof Approved',
  //   bookmarked: false
  // }
);
const orderDetail = ref([]);
const productDetail = ref([]);

const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  return new Date(dateString).toLocaleDateString(undefined, options)
}

// const reorder = (orderId) => {
//   console.log('Reorder clicked for order:', orderId)
// }

// const viewDetails = (orderId) => {
//   console.log('View details clicked for order:', orderId)
// }

const toggleBookmark = () => {
  order.value.bookmarked = !order.value.bookmarked
}

const getOrder = async () => {
  const productDetailArr = productDetail.value;
  const route = router.currentRoute.value; // Access current route
  const id = route.params.id; // Access params like id
  const token = localStorage.getItem("token");
  const res = await getOrderById(id, token);
  order.value = res?.data?.data;
  orderDetail.value = res?.data?.data?.orderDetail;
  console.log("-------order value", order.value);
  console.log("-------orderDetail value", orderDetail.value);
  const temp = res?.data?.data?.orderDetail[0]?.productDetail || null;
  if (temp && JSON.parse(temp)) {
    if (temp?.media?.length > 0) {
      temp.productImage = imgRoot + temp.media[0]?.url;
    }
    productDetailArr.push(JSON.parse(temp));
    productDetail.value = productDetailArr;
    console.log("-------productDetail value", productDetail.value);
  }
}

const showWidthHeight = (dist) => {
  if (dist) {
    const temp = dist.split(" ");
    if (temp?.length > 1) {
      return temp[0] + "\"" + temp[1] + "\"";
    }
  }
  return "";
}

onMounted(() => {
  getOrder();
});

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

.bookmark-star {
  color: #ffd700 !important;
}

.payment-img {
  width: 250px;
  height: 250px;
}
</style>