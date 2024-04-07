<template>
  <header>
    <div class="header-inner">
      <h1>
        <a :class="[checkActiveMenu('/home') ? 'active' : '']" @click="$router.push('/')"
          ><img src="@/assets/images/common/logo.png" alt="Xenon Company Limited"
        /></a>
      </h1>
      <div class="flex">
        <nav class="gnav">
          <ul class="g-nav">
            <li>
              <a :class="[checkActiveMenu('/home') ? 'active' : '']" @click="$router.push('/')">Home</a>
            </li>
            <li class="has-menu">
              <a :class="[checkActiveMenu('/product') ? 'active' : '']" @click="resetMenu()">Products</a>
              <ul class="sub-menu">
                <li>
                  <span @click="clickActiveDropDownMenu(0)">Business Cards</span>
                  <ul class="dropdown-menu" v-if="activeDropDownMenu[0]">
                    <li>
                      <a @click="$router.push('/product/1')" class="dropdown-item"
                        >Standard Business Cards - Promo<span class="badge-info"
                          >SALE!</span
                        ></a
                      >
                    </li>
                    <li>
                      <a @click="$router.push('/product/1')" class="dropdown-item"
                        >Deluxe Business Card</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <span @click="clickActiveDropDownMenu(1)">Large Format Printing</span>
                  <ul class="dropdown-menu" v-if="activeDropDownMenu[1]">
                    <li>
                      <a href="" class="dropdown-item"
                        >Vinyl Banner<span class="badge-info">HOT!</span></a
                      >
                    </li>
                    <li>
                      <a href="" class="dropdown-item"
                        >Backlit Printing<span class="badge-info">UV</span></a
                      >
                    </li>
                    <li><a href="" class="dropdown-item">Building Printing</a></li>
                    <li><a href="" class="dropdown-item">Event Backdrop</a></li>
                    <li><a href="" class="dropdown-item">Billboard Printing</a></li>
                    <li><a href="" class="dropdown-item">Reflective Printing</a></li>
                  </ul>
                </li>
                <li>
                  <span @click="clickActiveDropDownMenu(2)">Marketing Materials</span>
                  <ul class="dropdown-menu" v-if="activeDropDownMenu[2]">
                    <li>
                      <a href="" class="dropdown-item">Company Profile Book</a>
                    </li>
                    <li><a href="" class="dropdown-item">Flyer</a></li>
                    <li><a href="" class="dropdown-item">Poster Sheet</a></li>
                    <li><a href="" class="dropdown-item">Brochures</a></li>
                    <li><a href="" class="dropdown-item">Poster Board</a></li>
                    <li><a href="" class="dropdown-item">Table Tent Card</a></li>
                    <li><a href="" class="dropdown-item">Spin Wheel</a></li>
                    <li><a href="" class="dropdown-item">Booklet</a></li>
                    <li><a href="" class="dropdown-item">Spiral Note Book</a></li>
                  </ul>
                </li>
                <li>
                  <span @click="clickActiveDropDownMenu(3)">Sticker</span>
                  <ul class="dropdown-menu" v-if="activeDropDownMenu[3]">
                    <li>
                      <a href="" class="dropdown-item">Ezy Film ( UV DTF )</a>
                    </li>
                    <li>
                      <a href="" class="dropdown-item">PP Paper Sticker ( ရေစိုခံ )</a>
                    </li>
                    <li><a href="" class="dropdown-item">Sticker</a></li>
                    <li>
                      <a href="" class="dropdown-item"
                        >Label Stickers<span class="badge-info">Hot Sales!</span></a
                      >
                    </li>
                    <li>
                      <a href="" class="dropdown-item">Paper Label Sticker - Promo</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <span @click="clickActiveDropDownMenu(4)">Caution Sign Sticker</span>
                  <ul class="dropdown-menu" v-if="activeDropDownMenu[4]">
                    <li><a href="">Covid 19 Floor Sticker-01</a></li>
                    <li><a href="">Covid 19 Caution Sticker-02</a></li>
                    <li><a href="">Covid 19 Caution Sticker-03</a></li>
                    <li><a href="">Covid 19 Caution Sticker-04</a></li>
                    <li><a href="">Covid 19 Caution Sign Board-05</a></li>
                    <li><a href="">Covid 19 Floor Sticker-06</a></li>
                    <li><a href="">Covid 19 Caution Sticker-07</a></li>
                    <li><a href="">Covid 19 Caution Sticker-08</a></li>
                    <li><a href="">Covid 19 Caution Sticker-09</a></li>
                    <li><a href="">Covid 19 Caution Sticker-10</a></li>
                    <li><a href="">Covid 19 Caution Sign Table Top-11</a></li>
                  </ul>
                </li>
                <li>
                  <span @click="clickActiveDropDownMenu(5)">T Shirt Printing</span>
                  <ul class="dropdown-menu" v-if="activeDropDownMenu[5]">
                    <li><a href="">Design T Shirt</a></li>
                    <li><a href="">Personalised T Shirt</a></li>
                  </ul>
                </li>
                <li>
                  <span @click="clickActiveDropDownMenu(6)">Display Standee</span>
                  <ul class="dropdown-menu" v-if="activeDropDownMenu[6]">
                    <li><a href="">Life Size Cut Out</a></li>
                    <li><a href="">Aluminium Lightbox (Customize Size)</a></li>
                    <li><a href="">X Stand</a></li>
                    <li><a href="">Tripod Display Stand</a></li>
                    <li><a href="">Door Shape Banner Stand</a></li>
                    <li><a href="">Spin Wheel</a></li>
                    <li><a href="">Portable Counter</a></li>
                  </ul>
                </li>
                <li>
                  <span @click="clickActiveDropDownMenu(7)">Stickers - ReadyMade</span>
                  <ul class="dropdown-menu" v-if="activeDropDownMenu[7]">
                    <li><a href="">Baked with Love Sticker Set</a></li>
                    <li><a href="">Baked with Love Sticker Set</a></li>
                  </ul>
                </li>
                <li>
                  <span @click="clickActiveDropDownMenu(8)">Flag</span>
                  <ul class="dropdown-menu" v-if="activeDropDownMenu[8]">
                    <li><a href="">Feather Banner Stand</a></li>
                    <li><a href="">J Flag Stand</a></li>
                    <li><a href="">Rectangle Flag</a></li>
                  </ul>
                </li>
                <li>
                  <span @click="clickActiveDropDownMenu(9)">Menu</span>
                  <ul class="dropdown-menu" v-if="activeDropDownMenu[9]">
                    <li><a href="">Menu Book</a></li>
                  </ul>
                </li>
                <li>
                  <span @click="clickActiveDropDownMenu(10)">Business Stationery</span>
                  <ul class="dropdown-menu" v-if="activeDropDownMenu[10]">
                    <li><a @click="$router.push('/product/1')">Greeting Cards</a></li>
                    <li><a @click="$router.push('/product/1')">Document printing</a></li>
                    <li><a @click="$router.push('/product/1')">Letterhead</a></li>
                    <li><a @click="$router.push('/product/1')">Certificated</a></li>
                    <li><a @click="$router.push('/product/1')">ID Card</a></li>
                    <li><a @click="$router.push('/product/1')">Lanyard</a></li>
                  </ul>
                </li>
                <li>
                  <span @click="clickActiveDropDownMenu(11)">Canvas Print</span>
                  <ul class="dropdown-menu" v-if="activeDropDownMenu[11]">
                    <li><a @click="$router.push('/product/1')">Matt Canvas with Frame</a></li>
                  </ul>
                </li>
                <li>
                  <span @click="clickActiveDropDownMenu(12)">Decorative Printing</span>
                  <ul v-if="activeDropDownMenu[12]">
                    <li><a @click="$router.push('/product/1')">Wall Paper</a></li>
                  </ul>
                </li>
                <li>
                  <span @click="clickActiveDropDownMenu(13)">Photo Print</span>
                  <ul class="dropdown-menu" v-if="activeDropDownMenu[13]">
                    <li><a @click="$router.push('/product/1')">Acrylic UV Print</a></li>
                    <li><a @click="$router.push('/product/1')">Metal UV Print</a></li>
                    <li><a @click="$router.push('/product/1')">Photopaper Printing</a></li>
                  </ul>
                </li>
                <li>
                  <span @click="clickActiveDropDownMenu(14)">Souvenir & Gift</span>
                  <ul class="dropdown-menu" v-if="activeDropDownMenu[14]">
                    <li><a @click="$router.push('/product/1')">Tote Bag</a></li>
                    <li><a @click="$router.push('/product/1')">Aluminium Bottle</a></li>
                    <li><a @click="$router.push('/product/1')">Ceramic Coaster</a></li>
                    <li><a @click="$router.push('/product/1')">Pillow Case</a></li>
                    <li><a @click="$router.push('/product/1')">Coffee Mug</a></li>
                  </ul>
                </li>
                <li>
                  <span @click="clickActiveDropDownMenu(15)">POP Display</span>
                  <ul class="dropdown-menu" v-if="activeDropDownMenu[15]">
                    <li><a @click="$router.push('/product/1')">Wobbler</a></li>
                    <li><a @click="$router.push('/product/1')">1mm PVC Rigid Printing with Sticker</a></li>
                    <li><a @click="$router.push('/product/1')">0.5mm PVC Rigid Printing with Sticker</a></li>
                    <li><a @click="$router.push('/product/1')">Dangler</a></li>
                    <li><a @click="$router.push('/product/1')">All in one Board Printing with Sticker</a></li>
                    <li><a @click="$router.push('/product/1')">PP Board Printing with Sticker</a></li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <a :class="[checkActiveMenu('/about') ? 'active' : '']" @click="$router.push('/about')">About US</a>
            </li>
            <li>
              <a :class="[checkActiveMenu('/contact') ? 'active' : '']" @click="$router.push('/contact')">Contact US</a>
            </li>
            <li>
              <a :class="[checkActiveMenu('/article') ? 'active' : '']" @click="$router.push('/article')">Article</a>
            </li>
            <li>
              <a :class="[checkActiveMenu('/login') ? 'active' : '']" @click="$router.push('/login')">Login / Register</a>
            </li>
          </ul>
        </nav>
        <p class="menu-toggle">
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
              value=""
              class="form-control"
              placeholder="Search"
              autocomplete="off"
              data-searched=""
            />
            <button>
              <span class="material-symbols-outlined"> search </span>
            </button>
          </div>
          <ul class="language">
            <li><img src="@/assets/images/common/lang_burmese.png" alt="" /></li>
            <li><input type="checkbox" class="toggle" /></li>
            <li><img src="@/assets/images/common/lang_usa.gif" alt="" /></li>
          </ul>
          <div class="shopping">
            <div class="material-symbols-outlined">shopping_cart</div>
            <div class="number">0</div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "AppHeader",
  components: {},
  data() {
    return {
      currentRoute: "home",
      activeDropDownMenu: [false, false, false, false, false, false, false, false, false, false, false, false,
        false, false, false, false]
    };
  },
  methods: {
    clickActiveDropDownMenu(i) {
      this.resetMenu(i);
      this.activeDropDownMenu[i] = !this.activeDropDownMenu[i];
    },
    resetMenu(index=-1) {
      for (let i = 0; i < this.activeDropDownMenu.length; i++) {
        if (index !== i) {
          this.activeDropDownMenu[i] = false;
        }
      }
    }
  },
  computed: {
    checkActiveMenu() {
      return (routeParam) => {
        return routeParam.indexOf(this.currentRoute) !== -1;
      };
    },
  },
  watch: {
    // $route(to, from) {
    //   console.log("to and from", to, from)
    //   this.currentRoute = to.name;
    // },
  },
};
</script>

<style lang="postcss">
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
        width: 25%;
        @media screen and (min-width: 768px) and (max-width: 1440px) {
          width: 30%;
        }
        @media screen and (max-width: 767.9px) {
          width: 35px;
          margin-left: 45px;
        }
        img {
          width: 10%;
          cursor: pointer;
          @media screen and (min-width: 768px) and (max-width: 1440px) {
            width: 14%;
          }
          @media screen and (max-width: 767.9px) {
            width: auto;
          }
        }
      }
      nav {
        .g-nav {
          display: flex;
          @media screen and (max-width: 767.9px) {
            display: block;
          }
          li {
            font-weight: 500;
            @media screen and (min-width: 768px) and (max-width: 1440px) {
              font-size: 12px;
            }
            a {
              padding: 15px;
              position: relative;
              cursor: pointer;
              @media screen and (min-width: 768px) and (max-width: 1440px) {
                padding: 9px;
              }
              @media screen and (max-width: 767.9px) {
                display: block;
              }
              &:hover {
                color: #fff;
                background: #2e4412;
                @media screen and (max-width: 767.9px) {
                  background: #2e4412;
                }
                &::after {
                  opacity: 1;
                  visibility: visible;
                  height: 100%;
                }
              }
              &.active {
                color: #fff;
                background: #2e4412;
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
                border: 8px solid #f5dd61;
                color: #000;
                box-shadow: 1px 2px 6px #000;
                @media screen and (min-width: 768px) and (max-width: 1440px) {
                  top: 28px;
                  left: -113px;
                  width: 350px;
                }
                @media screen and (max-width: 767.9px) {
                  position: inherit;
                  top: 0;
                  left: 0;
                  width: 100%;
                  height: 400px;
                  background: #003462;
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
                  background: #977965;
                  border-radius: 10px;
                }
                &::-webkit-scrollbar-thumb:hover {
                  background: #b30000;
                }
                li {
                  position: relative;
                  span {
                    display: block;
                    padding: 12px 20px 12px 20px;
                    color: #000;
                    font-weight: 700;
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
                  border-top: 1px solid rgba(255, 255, 255, 0.25);
                  li {
                    width: 100%;
                    a {
                      color: #000;
                      font-weight: normal;
                      @media screen and (max-width: 767.9px) {
                        color: #fff;
                      }
                      &:hover {
                        color: #fff;
                      }
                      &.active {
                        color: #fff;
                      }
                    }
                    &::after {
                      display: none;
                    }
                    .badge-info {
                      background: #0097dc;
                      color: #fff;
                      margin-left: 5px;
                      padding: 1px 5px 2px;
                      font-size: 10px;
                      border-radius: 5px;
                      @media screen and (max-width: 767.9px) {
                        background: #b30000;
                      }
                    }
                  }
                }
              }
            }
            &.has-menu {
              position: relative;
              a {
                position: relative;
                padding: 15px 30px 15px 24px;
                @media screen and (min-width: 768px) and (max-width: 1440px) {
                  padding: 9px 15px 9px 6px;
                }
                &::after {
                  content: "\e5cf";
                  position: absolute;
                  font-family: "Material Symbols Outlined";
                  top: 12px;
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
                    top: 6px;
                    right: -2px !important;
                  }
                }
              }
              .sub-menu {
                a {
                  &::after {
                    top: 10px;
                    right: 9px!important;
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
          }
        }
      }
      .menu-toggle {
        display: none;
        @media screen and (max-width: 767.9px) {
          position: fixed;
          top: 26px;
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
        }
      }
    }
    &.fixed {
      position: sticky;
      top: 0;
      z-index: 1;
      max-width: 100%;
      left: 0;
      right: 0;
      background: #f5dd61;
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
      @media screen and (max-width: 767.9px) {
        font-size: 20px;
      }
      @media screen and (max-width: 767.9px) {
        span {
          &::after {
            width: 80px !important;
          }
        }
      }
      span {
        display: inline-block;
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
