<template>
  <div class="card">
    <div class="card-header pb-0">
      <div class="d-flex justify-content-between">
        <h6>Order table</h6>
        <div class="pe-md-3 d-flex align-items-center ms-md-auto">
          <div class="input-group">
            <span class="input-group-text text-body">
              <i class="fas fa-search" aria-hidden="true"></i>
            </span>
            <input type="text" class="form-control" placeholder="Type here..." />
          </div>
        </div>
      </div>
    </div>
    <div class="card-body px-0 pt-0 pb-2">
      <div class="table-responsive p-0">
        <table class="table align-items-center mb-0">
          <thead>
            <tr>
              <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                Name
              </th>
              <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                Address
              </th>
              <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                Amount
              </th>
              <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                Status
              </th>
              <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder">
                Confirm
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(order, index) in orders" :key="index">
              <td>
                <div class="px-3 py-1">
                  <router-link :to="{ name: 'OrderDetail', params: { id: order.id } }" class="text-decoration-none">
                    <p class="mb-0 text-sm">{{ order.fullName }}</p>
                  </router-link>
                </div>
              </td>
              <td class="align-middle text-center text-sm">
                <p class="text-sm mb-0">{{ order.address }}</p>
              </td>
              <td class="align-middle text-center">
                <span class="text-secondary text-sm">{{ order.amount }}</span>
              </td>
              <td class="select-width">
                <select class="form-select mx-0" aria-label="Default select example" v-model="order.status"
                  @change="updateStatus(order, index)">
                  <option value="New">New</option>
                  <option value="Payment Done">Payment Done</option>
                  <option value="Shipping">Shipping</option>
                  <option value="Done">Done</option>
                </select>
              </td>
              <td class="align-middle d-flex justify-content-center">
                <button type="button" class="m-0 btn btn-primary">
                  Pending
                </button>
              </td>

            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      orders: [
        { fullName: 'John Michael', address: 'Yangon', amount: 100, status: 'New' },
        { fullName: 'Alexa Liras', address: 'Bago', amount: 200, status: 'New' },
        { fullName: 'Laurent Perrier', address: 'Nay Pyi Daw', amount: 150, status: 'New' },
        { fullName: 'Michael Levi', address: 'Mandalay', amount: 250, status: 'New' },
        { fullName: 'Richard Gran', address: 'Magway', amount: 175, status: 'New' },
        { fullName: 'Miriam Eric', address: 'Maw La Myaing', amount: 120, status: 'New' }
      ]
    };
  },
  methods: {
    updateStatus(order) {
      console.log(`Status for ${order.fullName} updated to ${order.status}`);
    }
  }
};
</script>

<style>
.select-width {
  width: 13%;
}
</style>
