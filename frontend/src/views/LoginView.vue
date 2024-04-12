<template>
  <div class="container" id="contact">
    <h2>Login</h2>
    <div class="contact">
      <div class="form">
        <p class="d-inline-block">Please fill in the following fields.</p>
        <div class="form-row">
          <div class="col">
            <div class="form-group">
              <label for="" class="label">Email <span>*</span></label>
              <div class="form-data">
                <input type="text" placeholder="Email" />
              </div>
            </div>
          </div>

          <div class="form-row">
            <div class="col">
              <div class="form-group">
                <label for="" class="label">Password <span>*</span></label>
                <div class="form-data">
                  <input type="password" placeholder="Password" />
                </div>
              </div>
            </div>
          </div>
          <button class="submit-btn">Login</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppLoginRegister",
  components: {},
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="postcss">
.wrapper {
  .container {
    .breadcrumb-container {
      .breadcrumb {
        background-color: rgba(0, 0, 0, 0);
        padding: 0.5rem 0.5rem 0.5rem 0;

        display: -ms-flexbox;
        display: flex;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        padding: 0.75rem 1rem;
        margin-bottom: 1rem;
        list-style: none;
        background-color: #e9ecef;
        border-radius: 0.25rem;
        a {
          color: #003462;
          -webkit-transition: all 0.3s ease;
          -moz-transition: all 0.3s ease;
          -ms-transition: all 0.3s ease;
          -o-transition: all 0.3s ease;
          transition: all 0.3s ease;
        }
        li .a {
          cursor: pointer;
        }
        li.active .a {
          color: #f47920;
          cursor: text;
        }
      }
      .breadcrumb.breadcrumb-arrow4 > li + li:before {
        color: #ccc;
        content: "/";
        display: inline-block;
        position: static;
        font-family: "Font Awesome 5 Pro";
        padding: 0 0.5rem;
        font-weight: 600;
      }
    }
    .contact {
      margin-top: 60px;
      @media screen and (max-width: 767.9px) {
        margin-top: 50px;
      }
      .row {
        display: flex;
        justify-content: center;
        margin-bottom: 30px;
        @media screen and (max-width: 767.9px) {
          display: block;
        }
      }
      .form {
        .d-inline-block {
          margin-bottom: 20px;
        }
        .form-row {
          .col {
            display: flex;
            justify-content: space-between;
            @media screen and (max-width: 767.9px) {
              display: block;
            }
          }
        }
        .form-group {
          width: calc(100% / 2);
          margin: 0 20px 20px 0;
          @media screen and (max-width: 767.9px) {
            width: 100%;
          }
          label {
            display: block;
            margin-bottom: 10px;
            span {
              color: #ff0018;
            }
          }
          input {
            width: calc(100% - 22px);
            padding: 10px;
            border: 1px solid rgba(0, 0, 0, 0.25);
            border-radius: 5px;
          }
          &:last-child {
            margin: 0 0 20px 0;
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
          opacity: 0.7;
        }
      }
    }
  }
}
</style>
