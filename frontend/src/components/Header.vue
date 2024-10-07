<template>
  <header>
    <div class="header-inner">
      <h1>
        <a :class="[checkActiveMenu('/home') ? 'active' : '']" @click="changeRoute('/')">
          <img src="@/assets/images/common/logo.png" alt="Ci Ci Offset" />
        </a>
      </h1>
      <div class="flex">
        <nav :class="[mobileToggle ? 'gnav is-show' : 'gnav']">
          <ul class="g-nav">
            <li>
              <a
                :class="[checkActiveMenu('/home') ? 'active' : '']"
                @click="changeRoute('/')"
                >{{ $t("message.home") }}</a>
            </li>
            <li class="has-menu">
              <a
                :class="[checkActiveMenu('/product') ? 'active' : '']"
                @click="resetMenu()"
                >{{ $t("message.product") }}</a>
              <ul :class="[activeMenu ? 'sub-menu is-show' : 'sub-menu']">
                <li>
                  <span @click="$router.push('/products')">All Products</span>
                </li>
                <li v-for="(item, index) in categories" :key="'category' + index">
                  <span @click="clickActiveDropDownMenu(index)">{{ item?.name }}</span>
                  <ul class="dropdown-menu" v-if="activeDropDownMenu[index]">
                    <li v-for="(data, i) in item?.product" :key="'product' + i">
                      <a @click="changeRoute()" class="dropdown-item"
                        >{{ data?.name }}<span class="badge-info">SALE!</span></a
                      >
                    </li>
                    <!-- <li>
                      <a @click="changeRoute()" class="dropdown-item"
                        >Deluxe Business Card</a
                      >
                    </li> -->
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <a
                :class="[checkActiveMenu('/about') ? 'active' : '']"
                @click="changeRoute('/about')"
                >{{ $t("message.aboutus") }}</a
              >
            </li>
            <li>
              <a
                :class="[checkActiveMenu('/contact') ? 'active' : '']"
                @click="changeRoute('/contact')"
                >{{ $t("message.contactus") }}</a
              >
            </li>
            <li>
              <a
                :class="[checkActiveMenu('/article') ? 'active' : '']"
                @click="changeRoute('/article')"
                >{{ $t("message.article") }}</a
              >
            </li>

            <li>
              <a
                :class="[checkActiveMenu('/quota') ? 'active' : '']"
                @click="changeRoute('/quota')"
                >{{ $t("message.requestAQuota") }}</a
              >
            </li>

            <li class="has-menu" v-if="user">
              <a
                :class="[checkActiveMenu('/login', '/register') ? 'active' : '']"
                @click="clickLoginRegister()"
                >{{ user?.firstName + " " + user?.lastName }}</a>
              <ul :class="[activeLoginMenu ? 'sub-menu is-show sub-menu2' : 'sub-menu']" style="width: 75px;" >
                <li>
                  <span @click="myOrder()">My Order</span>
                </li>
                <li>
                  <span @click="logout()">Logout</span>
                </li>
              </ul>
            </li>

            <li class="has-menu" v-else>
              <a
                :class="[checkActiveMenu('/login', '/register') ? 'active' : '']"
                @click="clickLoginRegister()"
                >Login / Register</a
              >
              <ul :class="[activeLoginMenu ? 'sub-menu is-show sub-menu2' : 'sub-menu']">
                <li>
                  <span @click="$router.push('/login')">Login</span>
                </li>
                <li>
                  <span @click="$router.push('/register')">Register</span>
                </li>
              </ul>
            </li>
          </ul>
          <ul class="sp-language">
            <li><img src="@/assets/images/common/lang_burmese.png" alt="" /></li>
            <li>
              <input
                type="checkbox"
                v-model="langChecked"
                @change="handleLanguage()"
                class="toggle"
              />
            </li>
            <li><img src="@/assets/images/common/lang_usa.gif" alt="" /></li>
          </ul>
        </nav>
        <p
          :class="[mobileToggle ? 'menu-toggle active' : 'menu-toggle']"
          @click="clickMobileMenuToggle()"
        >
          <span></span>
          <span></span>
          <span></span>
        </p>
        <div class="search-blk">
          <div class="search-form">
            <input
              type="search"
              name="top_search"
              id="top_search"
              v-model="searchName"
              @keyup.enter="handleEnter()"
              class="form-control"
              :placeholder="$t('message.search')"
              autocomplete="off"
              data-searched=""
            />
            <button>
              <span class="material-symbols-outlined"> search </span>
            </button>
          </div>
          <ul class="language">
            <li><img src="@/assets/images/common/lang_burmese.png" alt="" /></li>
            <li>
              <input
                type="checkbox"
                v-model="langChecked"
                @change="handleLanguage()"
                class="toggle"
              />
            </li>
            <li><img src="@/assets/images/common/lang_usa.gif" alt="" /></li>
          </ul>
          <div class="shopping">
            <div class="material-symbols-outlined" @click="$router.push('/checkout')">
              shopping_cart
            </div>
            <div :class="[$store.state.common?.data?.cartLength > 0 ? 'blue-number' : 'number']">{{ $store.state.common?.data?.cartLength }}</div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import store from "@/store";
import router from "../router";

export default {
  name: "AppHeader",
  components: {},
  data() {
    return {
      langChecked: true,
      lang: this.$store?.state?.common.lang,
      currentRoute: "home",
      activeMenu: false,
      activeLoginMenu: false,
      activeDropDownMenu: [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
      ],
      mobileToggle: false,
      categories: this.$store.state.apiData?.categoryProducts,
      user: null,
      searchName: null,
    };
  },
  mounted() {
    if (this?.$i18n?.locale && this.$store.state.common?.data?.lang) {
      this.$i18n.locale = this.$store.state.common?.data?.lang;
    }
    this.getProductCategory();
    this.user = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null;
    console.log("user", this.user);
  },
  methods: {
    handleEnter() {
      this.$router.push({ path: '/search', query: { name: this.searchName } });
      this.searchName = null;
    },
    async getProductCategory() {
      const token = localStorage.getItem("token") || "";
      await store.dispatch("GetCategoryProduct", token);
      this.categories = this.$store.state.apiData?.categoryProducts;
    },
    async handleLanguage() {
      console.log("Checkbox state changed. Checked:", this.langChecked);
      this.lang = this.langChecked ? "eng" : "myan";
      let param = {
        lang: this.lang,
        cartLength: this.$store.state.common?.data?.cartLength
      };
      await store.dispatch("commonData", param);
      if (this?.$i18n?.locale && this.lang) {
        this.$i18n.locale = this.lang;
      }
    },
    clickActiveDropDownMenu(i) {
      this.resetMenu(i);
      this.activeDropDownMenu[i] = !this.activeDropDownMenu[i];
    },
    resetMenu(index = -1) {
      for (let i = 0; i < this.activeDropDownMenu.length; i++) {
        if (index !== i) {
          this.activeDropDownMenu[i] = false;
        }
      }
      if (index === -1) {
        this.activeMenu = !this.activeMenu;
        this.activeLoginMenu = false;
      }
    },
    clickLoginRegister() {
      this.activeLoginMenu = !this.activeLoginMenu;
      this.activeMenu = false;
    },
    changeRoute(param) {
      if (param) {
        router.push(param);
      } else {
        router.push("/product/1");
      }
      this.activeMenu = false;
      this.mobileToggle = false;
      this.activeLoginMenu = false;
      console.log("active menu----", this.activeMenu);
    },
    clickMobileMenuToggle() {
      this.mobileToggle = !this.mobileToggle;
      console.log("mobileToggle----", this.mobileToggle);
    },
    logout() {
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      this.user = null;
    },
    myOrder() {
      this.$router.push("/userOrder");
    }
  },
  computed: {
    checkActiveMenu() {
      return (routeParam1, routeParam2 = null) => {
        if (routeParam2) {
          return (
            routeParam1.indexOf(this.currentRoute) !== -1 ||
            routeParam2.indexOf(this.currentRoute) !== -1
          );
        } else {
          return routeParam1.indexOf(this.currentRoute) !== -1;
        }
      };
    },
  },
  watch: {
    $route(to, from) {
      console.log("-----from", from);
      this.currentRoute = to.name;
      this.activeMenu = false;
      this.activeLoginMenu = false;
      this.mobileToggle = false;
      if (this?.$i18n?.locale && this.$store.state.common?.data?.lang) {
        this.$i18n.locale = this.$store.state.common?.data?.lang;
      }
      this.langChecked = this.$store.state.common?.data?.lang === "eng" ? true : false;
      this.user = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null;
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/mixins.scss";

.wrapper {
  width: 100%;
  header {
    max-width: 1440px;
    margin: 0 auto;
    @media screen and (min-width: 768px) and (max-width: 1440px) {
      max-width: 100%;
    }
    .header-inner {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px 0;
      width: 1440px;
      margin: 0 auto;
      @media screen and (min-width: 768px) and (max-width: 1440px) {
        width: 95%;
      }
      @media screen and (max-width: 767.9px) {
        width: 95%;
      }
      .flex {
        display: flex;
        @media screen and (min-width: 768px) and (max-width: 1440px) {
          flex-direction: column-reverse;
          align-items: end;
          margin-left: 10px;
        }
        @media screen and (max-width: 767.9px) {
          display: block;
        }
      }
      h1 {
        width: 20%;
        @media screen and (max-width: 767.9px) {
          width: 50%;
          margin-left: 45px;
        }
        @media screen and (min-width: 768px) and (max-width: 1440px) {
          width: 27%;
        }
        a {
          cursor: pointer;
          &:hover {
            opacity: 0.7;
          }
        }
      }
      nav {
        .g-nav {
          display: flex;
          align-items: center;
          @media screen and (max-width: 767.9px) {
            display: block;
          }
          li {
            font-weight: 500;
            font-size: 12px;
            @media screen and (min-width: 768px) and (max-width: 1440px) {
              font-size: 11px;
            }
            a {
              padding: 12px 10px;
              position: relative;
              cursor: pointer;
              margin-right: 5px;
              white-space: nowrap;
              @media screen and (min-width: 768px) and (max-width: 1440px) {
                display: block;
                padding: 7px 10px;
                white-space: inherit;
              }
              @media screen and (max-width: 767.9px) {
                display: block;
                margin-right: 0;
              }
              &:hover {
                color: #fff;
                background: #000;
                @media screen and (max-width: 767.9px) {
                  background: #000;
                }
                &::after {
                  opacity: 1;
                  visibility: visible;
                  height: 100%;
                }
              }
              &.active {
                color: #fff;
                background: #000;
                &::after {
                  opacity: 1;
                  visibility: visible;
                  height: 100%;
                }
              }
            }
            .sub-menu {
              display: none;
              &.is-show {
                display: block;
                position: absolute;
                top: 35px;
                left: -113px;
                width: 350px;
                background: #fff;
                flex-direction: row;
                flex-wrap: wrap;
                justify-content: space-between;
                height: 600px;
                overflow-y: auto;
                overflow-x: hidden;
                z-index: 2;
                border: 8px solid rgba(0, 0, 0, 0.5);
                color: #000;
                box-shadow: 1px 2px 6px #000;
                @media screen and (min-width: 768px) and (max-width: 1440px) {
                  top: 39px;
                  left: -113px;
                  width: 350px;
                }
                @media screen and (max-width: 767.9px) {
                  position: inherit;
                  top: 0;
                  left: 0;
                  width: 100%;
                  height: 400px;
                  background: #4c7da9;
                  transition: all 0.5s ease;
                  border: inherit;
                  color: #fff;
                  box-shadow: none;
                }
                &::-webkit-scrollbar {
                  width: 10px;
                }
                &::-webkit-scrollbar-track {
                  box-shadow: inset 0 0 5px grey;
                  border-radius: 10px;
                }
                &::-webkit-scrollbar-thumb {
                  background: rgba(44, 44, 44, 0.2);
                  border-radius: 10px;
                }
                &::-webkit-scrollbar-thumb:hover {
                  background: rgba(44, 44, 44, 0.2);
                }
                li {
                  position: relative;
                  span {
                    display: block;
                    padding: 12px 20px 12px 20px;
                    color: #000;
                    font-weight: 700;
                    border-bottom: 1px solid rgba(0, 0, 0, 0.25);
                    @media screen and (max-width: 767.9px) {
                      color: #fff;
                    }
                    &:hover {
                      background: #000;
                      color: #fff;
                    }
                    &.active {
                      color: #fff;
                    }
                  }
                }
                .dropdown-menu {
                  background: rgba(0, 0, 0, 0.25);
                  li {
                    width: 100%;
                    border-bottom: 1px solid rgba(0, 0, 0, 0.25);
                    a {
                      color: #000;
                      font-weight: normal;
                      display: block;
                      margin: 0;
                      padding: 12px 20px 12px 20px;
                      @media screen and (min-width: 768px) and (max-width: 1440px) {
                        padding: 9px 20px 9px 20px;
                        margin: 0;
                      }
                      @media screen and (max-width: 767.9px) {
                        color: #fff;
                      }
                      &:hover {
                        color: #fff;
                        &::after {
                          display: none;
                        }
                      }
                      &.active {
                        color: #fff;
                      }
                      &::after {
                        display: none;
                      }
                    }
                    &::after {
                      display: none;
                    }
                    .badge-info {
                      display: inline;
                      background: #0097dc;
                      color: #fff;
                      margin-left: 5px;
                      padding: 1px 5px 2px;
                      font-size: 10px;
                      border-radius: 5px;
                      @media screen and (max-width: 767.9px) {
                        background: #b30000;
                      }
                      &::after {
                        display: none;
                      }
                    }
                  }
                }
              }
              li {
                span {
                  position: relative;
                  cursor: pointer;
                  &::after {
                    content: "\e5cf";
                    position: absolute;
                    font-family: "Material Symbols Outlined";
                    top: 9px;
                    right: 9px;
                    font-size: 20px;
                  }
                  @media screen and (max-width: 767.9px) {
                    &::after {
                      top: 12px;
                      right: 4px;
                    }
                  }
                  @media screen and (min-width: 768px) and (max-width: 1440px) {
                    &::after {
                      top: 7px;
                      right: 4px !important;
                    }
                  }
                }
                &:first-child span::after {
                  display: none;
                }
              }
              &.sub-menu2 {
                &.is-show {
                  width: 200px;
                  height: auto;
                  right: 0;
                  left: 0;
                  @media screen and (min-width: 768px) and (max-width: 1440px) {
                    width: auto;
                    left: -5px;
                  }
                  @media screen and (max-width: 767.9px) {
                    width: 100%;
                    left: 0;
                  }
                }
                li {
                  span {
                    &::after {
                      display: none;
                    }
                  }
                }
              }
            }
            &.has-menu {
              position: relative;
              a {
                position: relative;
                padding: 12px 30px 12px 10px;
                @media screen and (min-width: 768px) and (max-width: 1440px) {
                  padding: 7px 15px 7px 6px;
                }
                &::after {
                  content: "\e5cf";
                  position: absolute;
                  font-family: "Material Symbols Outlined";
                  top: 9px;
                  right: 9px;
                  font-size: 20px;
                }
                @media screen and (max-width: 767.9px) {
                  &::after {
                    top: 12px;
                  }
                }
                @media screen and (min-width: 768px) and (max-width: 1440px) {
                  &::after {
                    top: 4px;
                    right: -2px !important;
                  }
                }
              }
              .sub-menu {
                a {
                  &::after {
                    top: 10px;
                    right: 9px !important;
                  }
                }
              }
            }
            @media screen and (max-width: 767.9px) {
              display: block;
              width: 100%;
              font-size: 14px;
              text-align: center;
            }
          }
        }
        @media screen and (max-width: 767.9px) {
          position: fixed;
          top: 0;
          left: -100vw;
          width: 100%;
          padding: 16.242vw 0 4.888vw;
          background-color: rgba(255, 255, 255, 0.9);
          transition: all 0.5s ease;
          opacity: 0;
          &.is-show {
            left: 0;
            opacity: 1;
            z-index: 1;
            height: 100%;
          }
        }
        .sp-language {
          display: none;
          @media screen and (max-width: 767.9px) {
            position: absolute;
            top: 28px;
            right: 17px;
            display: flex;
            align-items: center;
            margin: 0 5px;
            img {
              width: 30px;
            }
            input[type="checkbox"] {
              -webkit-appearance: none;
              -moz-appearance: none;
              appearance: none;
              -webkit-tap-highlight-color: transparent;
              cursor: pointer;
              &:focus {
                outline: 0;
              }
            }
            .toggle {
              height: 20px;
              width: 42px;
              border-radius: 16px;
              display: inline-block;
              position: relative;
              margin: 0;
              border: 2px solid #4caf50;
              background: #4caf50;
              transition: all 0.2s ease;
              margin: -4px 3px;
              &:after {
                content: "";
                position: absolute;
                top: 1px;
                left: 2px;
                width: 15px;
                height: 15px;
                border-radius: 50%;
                background: white;
                box-shadow: 0 1px 2px rgba(44, 44, 44, 0.2);
                transition: all 0.2s cubic-bezier(0.5, 0.1, 0.75, 1.35);
              }
              &:checked {
                border-color: red;
                background: red;
                &:after {
                  transform: translatex(20px);
                }
              }
            }
          }
        }
      }
      .menu-toggle {
        display: none;
        @media screen and (max-width: 767.9px) {
          position: fixed;
          top: 5vw;
          left: 10px;
          width: 35px;
          height: 28px;
          cursor: pointer;
          transition: all 0.4s;
          -webkit-transition: all 0.4s;
          display: inline-block;
          transition: all 0.4s;
          z-index: 2;
          span {
            position: absolute;
            left: 0;
            width: 100%;
            height: 0.391vw;
            background-color: #141414;
            border-radius: 0.521vw;
            &:nth-of-type(1) {
              top: 0;
            }

            &:nth-of-type(2) {
              top: 13px;
            }

            &:nth-of-type(3) {
              bottom: 0;
            }
          }
          &.active span:nth-of-type(1) {
            transform: translateY(12px) rotate(-45deg);
          }

          &.active span:nth-of-type(2) {
            opacity: 0;
          }

          &.active span:nth-of-type(3) {
            transform: translateY(-13px) rotate(45deg);
          }
        }
      }
      .search-blk {
        display: flex;
        align-items: center;
        @media screen and (max-width: 767.9px) {
          margin-right: 18px;
        }
        .search-form {
          position: relative;
          input {
            padding: 10px 35px 10px 15px;
            border-radius: 50px;
            @media screen and (max-width: 767.9px) {
              display: none;
            }
          }
          button {
            content: "";
            position: absolute;
            top: 8px;
            right: 3px;
            bottom: 0;
            width: 40px;
            height: 25px;
            background: none;
            border: none;
            cursor: pointer;
            @media screen and (max-width: 767.9px) {
              top: -9px;
            }
          }
        }
        .language {
          display: flex;
          align-items: center;
          margin: 0 5px;
          @media screen and (max-width: 767.9px) {
            display: none;
          }
          img {
            width: 30px;
          }
          input[type="checkbox"] {
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
            -webkit-tap-highlight-color: transparent;
            cursor: pointer;
            &:focus {
              outline: 0;
            }
          }
          .toggle {
            height: 20px;
            width: 42px;
            border-radius: 16px;
            display: inline-block;
            position: relative;
            margin: 0;
            border: 2px solid #4caf50;
            background: #4caf50;
            transition: all 0.2s ease;
            margin: -4px 3px;
            &:after {
              content: "";
              position: absolute;
              top: 1px;
              left: 2px;
              width: 15px;
              height: 15px;
              border-radius: 50%;
              background: white;
              box-shadow: 0 1px 2px rgba(44, 44, 44, 0.2);
              transition: all 0.2s cubic-bezier(0.5, 0.1, 0.75, 1.35);
            }
            &:checked {
              border-color: red;
              background: red;
              &:after {
                transform: translatex(20px);
              }
            }
          }
        }
        .shopping {
          position: relative;
          @media screen and (max-width: 767.9px) {
            margin-top: 10px;
          }
          .number {
            position: absolute;
            top: -13px;
            right: -15px;
            background: #00000080;
            color: #fff;
            border-radius: 50px;
            width: 25px;
            height: 25px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .blue-number {
            position: absolute;
            top: -13px;
            right: -15px;
            background: #009BDF;
            color: #fff;
            border-radius: 50px;
            width: 25px;
            height: 25px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }
      }
    }
    &.fixed {
      position: sticky;
      top: 0;
      z-index: 2;
      max-width: 100%;
      left: 0;
      right: 0;
      background: #fff;
      box-shadow: 0 1px 4px #ccc;
    }

    .search-dialog {
      display: none;
      @media screen and (max-width: 767.9px) {
        display: block;
      }
      .search-form {
        position: relative;
        max-width: 80%;
        margin: 0 auto;

        input {
          width: 100%;
          padding: 10px 51px 10px 42px;
          border-radius: 10px;
        }
        .search-btn {
          content: "";
          position: absolute;
          top: 8px;
          left: 3px;
          bottom: 0;
          width: 40px;
          height: 25px;
          background: none;
          border: none;
          cursor: pointer;
        }
        .close-btn {
          content: "";
          position: absolute;
          top: 2px;
          right: 1px;
          bottom: 0;
          width: 46px;
          height: 36px;
          background: none;
          border: none;
          cursor: pointer;
          color: #212529;
          background-color: #dae0e5;
          border-radius: 0 8px 8px 0;
        }
      }
    }
  }
  .container {
    max-width: 1440px;
    margin: 50px auto;
    @media screen and (min-width: 768px) and (max-width: 1440px) {
      max-width: 95%;
    }
    @media screen and (max-width: 767.9px) {
      max-width: 95%;
    }
    h2 {
      text-align: center;
      font-size: 30px;
      display: block;
      position: relative;
      &::after {
        position: absolute;
        content: "";
        width: 100px;
        height: 2px;
        background: #000;
        bottom: -12px;
        right: 0;
        left: 0;
        display: block;
        margin: 0 auto;
      }
      @media screen and (max-width: 767.9px) {
        font-size: 20px;
      }
      @media screen and (max-width: 767.9px) {
        &::after {
          width: 80px !important;
        }
      }
      span {
        color: #4c7da9;
        font-size: 15px;
      }
    }
  }
}
img {
  max-width: 100%;
  display: block;
}
h1,
h2,
h3 {
  margin: 0;
}
ul {
  padding: 0;
  li {
    list-style: none;
  }
}
p {
  margin: 0;
}
.clearfix {
  zoom: 1;
}
.clearfix:after {
  display: block;
  clear: both;
  height: 0;
  line-height: 0;
  visibility: hidden;
  content: ".";
}
a {
  color: #313131;
  text-decoration: none;
}
.pc {
  display: block;
}
.sp {
  display: none;
}
img {
  max-width: 100%;
  display: block;
}
h1,
h2,
h3 {
  margin: 0;
}
ul {
  padding: 0;
  li {
    list-style: none;
  }
}
p {
  margin: 0;
}
.clearfix {
  zoom: 1;
}
.clearfix:after {
  display: block;
  clear: both;
  height: 0;
  line-height: 0;
  visibility: hidden;
  content: ".";
}
a {
  color: #313131;
  text-decoration: none;
}
.pc {
  display: block;
}
.sp {
  display: none;
}
</style>
