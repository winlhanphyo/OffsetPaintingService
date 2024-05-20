<template>
  <div class="card">
    <div class="card-header pb-0">
      <h6>Banners Table</h6>
    </div>
    <div class="card-body px-0 pt-0 pb-2">
      <div class="table-responsive p-0">
        <table class="table align-items-center mb-0">
          <thead>
            <tr>
              <th
                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >
                No
              </th>
              <th
                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >
                Image
              </th>
              <th
                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >
                Updated At
              </th>
              <th class="text-secondary opacity-7"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div class="px-3 py-1">1</div>
              </td>
              <td>
                <div class="px-3 py-1">
                  <div>
                    <img
                      src="../../assets/img/team-2.jpg"
                      class="avatar me-3"
                      alt="user1"
                    />
                  </div>
                </div>
              </td>
              <td>
                <div class="px-3 text-xs font-weight-bold">2024/05/12</div>
              </td>
              <td class="align-middle">
                <button
                  type="button"
                  class="m-0 btn btn-primary"
                  data-bs-target="#exampleModalToggle"
                  data-bs-toggle="modal"
                >
                  Edit
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <div class="px-3 py-1">2</div>
              </td>
              <td>
                <div class="px-3 py-1">
                  <div>
                    <img
                      src="../../assets/img/team-3.jpg"
                      class="avatar me-3"
                      alt="user2"
                    />
                  </div>
                </div>
              </td>
              <td>
                <div class="px-3 text-xs font-weight-bold">2024/05/12</div>
              </td>
              <td class="align-middle">
                <button
                  type="button"
                  class="m-0 btn btn-primary"
                  data-bs-target="#exampleModalToggle"
                  data-bs-toggle="modal"
                >
                  Edit
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <div class="px-3 py-1">3</div>
              </td>
              <td>
                <div class="px-3 py-1">
                  <div>
                    <img
                      src="../../assets/img/team-4.jpg"
                      class="avatar me-3"
                      alt="user3"
                    />
                  </div>
                </div>
              </td>
              <td>
                <div class="px-3 text-xs font-weight-bold">2024/05/12</div>
              </td>
              <td class="align-middle">
                <button
                  type="button"
                  class="m-0 btn btn-primary"
                  data-bs-target="#exampleModalToggle"
                  data-bs-toggle="modal"
                >
                  Edit
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <div class="px-3 py-1">4</div>
              </td>
              <td>
                <div class="px-3 py-1">
                  <div>
                    <img
                      src="../../assets/img/team-3.jpg"
                      class="avatar me-3"
                      alt="user4"
                    />
                  </div>
                </div>
              </td>
              <td>
                <div class="px-3 text-xs font-weight-bold">2024/05/12</div>
              </td>
              <td class="align-middle">
                <button
                  type="button"
                  class="m-0 btn btn-primary"
                  data-bs-target="#exampleModalToggle"
                  data-bs-toggle="modal"
                >
                  Edit
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <div class="px-3 py-1">5</div>
              </td>
              <td>
                <div class="px-3 py-1">
                  <div>
                    <img
                      src="../../assets/img/team-2.jpg"
                      class="avatar me-3"
                      alt="user5"
                    />
                  </div>
                </div>
              </td>
              <td>
                <div class="px-3 text-xs font-weight-bold">2024/05/12</div>
              </td>
              <td class="align-middle">
                <button
                  type="button"
                  class="m-0 btn btn-primary"
                  data-bs-target="#exampleModalToggle"
                  data-bs-toggle="modal"
                >
                  Edit
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <div class="px-3 py-1">6</div>
              </td>
              <td>
                <div class="px-3 py-1">
                  <div>
                    <img
                      src="../../assets/img/team-4.jpg"
                      class="avatar me-3"
                      alt="user6"
                    />
                  </div>
                </div>
              </td>
              <td>
                <div class="px-3 text-xs font-weight-bold">2024/05/12</div>
              </td>
              <td class="align-middle">
                <button
                  type="button"
                  class="m-0 btn btn-primary"
                  data-bs-target="#exampleModalToggle"
                  data-bs-toggle="modal"
                >
                  Edit
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <div
          class="modal fade"
          id="exampleModalToggle"
          aria-hidden="true"
          aria-labelledby="exampleModalToggleLabel"
          tabindex="-1"
        >
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalToggleLabel">
                  Image Update
                </h1>
              </div>
              <div class="modal-body">
                <form>
                  <div class="mb-3">
                    <label for="formFile" class="col-form-label">Image file</label>
                    <input class="form-control" type="file" id="formFile" />
                  </div>
                </form>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" id="close">
                  Close
                </button>
                <button
                  type="button"
                  class="btn btn-primary"
                  data-bs-target="#exampleModalToggle"
                  data-bs-toggle="modal"
                  @click="submitBanner()"
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import moment from "moment";
// import Swal from 'sweetalert2';
// import { imgRoot } from "../../../config.js";
// import { getBanner, updateBanner } from "@/services/admin.service.js";

export default {
  data() {
    return {
      banners: [],
      id: "",
      image: "",
      modalLabel: "Create",
    };
  },
  mounted() {
    this.getBannerData();
  },
  methods: {
    async getBannerData() {
      // const token = localStorage.getItem("token");
      // const res = await getBanner(token);
      // this.banners = res?.data?.data;
      // this.banners?.map((dist) => {
      //   dist.image = imgRoot + dist.image;
      //   console.log("category-----", dist.image);
      // });
    },
    async submitBanner() {
      // const token = localStorage.getItem("token");
      document.getElementById("close").click();

      // let formParam = new FormData();

      // formParam.append("image", this.image);

      // updateBanner(this.id, formParam, token)
      //   .then(() => {
      //     Swal.fire({
      //       title: "Success!",
      //       text: "Banner is updated successfully!",
      //       icon: "success",
      //     }).then(() => {
      //       this.getBannerData();
      //     });
      //   })
      //   .catch((err) => {
      //     Swal.fire({
      //       title: "Oops!",
      //       text: err.toString(),
      //       icon: "error",
      //     });
      //   });
    },
  },
};
</script>
