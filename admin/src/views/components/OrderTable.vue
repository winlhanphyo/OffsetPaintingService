<template>
  <div class="card">
    <div class="card-header pb-0">
      <div class="d-flex justify-content-between">
        <h6>Order table</h6>
        <div
          class="pe-md-3 d-flex align-items-center ms-md-auto"
        >
          <div class="input-group">
            <span class="input-group-text text-body">
              <i class="fas fa-search" aria-hidden="true"></i>
            </span>
            <input
              type="text"
              class="form-control"
              placeholder="Type here..."
            />
          </div>
        </div>
      </div>
    </div>
    <div class="card-body px-0 pt-0 pb-2">
      <div class="table-responsive p-0">
        <table class="table align-items-center mb-0">
          <thead>
            <tr>
              <th
                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >
                First Name
              </th>
              <th
                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"
              >
                Last Name
              </th>
              <th
                class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >
                Address
              </th>
              <th
                class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >
                Status
              </th>
              <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div class="px-3 py-1">
                    <p class="mb-0 text-sm">John</p>
                </div>
              </td>
              <td>
                <p class="text-sm mb-0">Michael</p>
              </td>
              <td class="align-middle text-center text-sm">
                <p class="text-sm mb-0">Ygn</p>
              </td>
              <td class="align-middle text-center">
                <span class="text-secondary text-sm">User</span>
              </td>
              <td class="align-middle">
                <button
                  type="button"
                  class="m-0 btn btn-primary">
                  Pending
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <div class="px-3 py-1">
                    <p class="mb-0 text-sm">Alexa</p>
                </div>
              </td>
              <td>
                <p class="text-sm mb-0">Liras</p>
              </td>
              <td class="align-middle text-center text-sm">
                <p class="text-sm mb-0">Ygn</p>
              </td>
              <td class="align-middle text-center">
                <span class="text-secondary text-sm">User</span>
              </td>
              <td class="align-middle">
                <button
                  type="button"
                  class="m-0 btn btn-primary">
                  Pending
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <div class="px-3 py-1">
                    <p class="mb-0 text-sm">Laurent</p>
                </div>
              </td>
              <td>
                <p class="text-sm mb-0">Perrier</p>
              </td>
              <td class="align-middle text-center text-sm">
                <p class="text-sm mb-0">Mdy</p>
              </td>
              <td class="align-middle text-center">
                <span class="text-secondary text-sm">User</span>
              </td>
              <td class="align-middle">
                <button
                  type="button"
                  class="m-0 btn btn-primary">
                  Pending
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <div class="px-3 py-1">
                    <p class="mb-0 text-sm">Michael</p>
                </div>
              </td>
              <td>
                <p class="text-sm mb-0">Levi</p>
              </td>
              <td class="align-middle text-center text-sm">
                <p class="text-sm mb-0">Mdy</p>
              </td>
              <td class="align-middle text-center">
                <span class="text-secondary text-sm">User</span>
              </td>
              <td class="align-middle">
                <button
                  type="button"
                  class="m-0 btn btn-primary">
                  Pending
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <div class="px-3 py-1">
                    <p class="mb-0 text-sm">Richard</p>
                </div>
              </td>
              <td>
                <p class="text-sm mb-0">Gran</p>
              </td>
              <td class="align-middle text-center text-sm">
                <p class="text-sm mb-0">Mdy</p>
              </td>
              <td class="align-middle text-center">
                <span class="text-secondary text-sm">User</span>
              </td>
              <td class="align-middle">
                <button
                  type="button"
                  class="m-0 btn btn-primary">
                  Pending
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <div class="px-3 py-1">
                    <p class="mb-0 text-sm">Miriam</p>
                </div>
              </td>
              <td>
                <p class="text-sm mb-0">Eric</p>
              </td>
              <td class="align-middle text-center text-sm">
                <p class="text-sm mb-0">Ygn</p>
              </td>
              <td class="align-middle text-center">
                <span class="text-secondary text-sm">User</span>
              </td>
              <td class="align-middle">
                <button
                  type="button"
                  class="m-0 btn btn-primary">
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
