<template>
  <div class="container">
    <h2>{{ $t("message.updatePassword") }}</h2>
    <div class="update-password">
      <div class="form">
        <div class="form-row">
          <div class="form-group">
            <label for="" class="label">New Password <span>*</span></label>
            <div class="form-data">
              <input
                type="password"
                required
                name="password"
                :placeholder="$t('message.password')"
                v-model="password"
              />
            </div>
          </div>
          <div class="form-group">
            <label for="" class="label">Confirm Password <span>*</span></label>
            <div class="form-data">
              <input
                type="text"
                required
                name="confirmPassword"
                :placeholder="$t('message.confirmPassword')"
                v-model="confirmPassword"
              />
            </div>
          </div>
          <button @click="submit()" class="submit-btn">{{ $t("message.update") }}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";
import { updatePassword } from "@/services/offset.service";

export default {
  name: "AppUpdatePassword",
  components: {},
  data() {
    return {
      password: "",
      confirmPassword: "",
    };
  },
  methods: {
    async submit() {
      const payload = {
        password: this.password,
      };
      const res = await updatePassword(payload);
      if (res?.data?.message) {
        Swal.fire({
          position: "bottom",
          icon: "success",
          title: res.data.message,
          showConfirmButton: false,
          // timer: 3000,
          timerProgressBar: true,
          toast: true,
        });
        this.$router.push("/login");
      } else {
        Swal.fire({
          position: "bottom",
          icon: "error",
          title: "Email is not existed.",
          showConfirmButton: false,
          // timer: 3000,
          timerProgressBar: true,
          toast: true,
        });
      }
    },
  },
};
</script>

<style lang="scss">
.update-password {
  max-width: 720px;
  margin: 60px auto 0;
  @media screen and (max-width: 767.9px) {
    max-width: 100%;
    margin: 50px auto 0;
  }
  p {
    line-height: 1.5;
  }
  .form-group {
    margin: 20px 0;
    input {
      width: calc(100% - 22px);
      padding: 10px;
      border: 1px solid rgba(0, 0, 0, 0.25);
      border-radius: 5px;
    }
    label {
      display: block;
      margin-bottom: 10px;
      span {
        color: #ff0018;
      }
    }
  }
  .submit-btn {
    padding: 9px;
    margin-right: 10px;
    font-size: 15px;
    background: #000;
    color: #fff;
    cursor: pointer;
    border-radius: 5px;
    &:hover {
      color: #f47920;
      background: #fff;
    }
  }
}
</style>
