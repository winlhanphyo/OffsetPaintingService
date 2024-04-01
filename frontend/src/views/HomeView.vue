<template>
  <div class="wrapper">
    <header>
      <div class="header-inner">
        <h1>
          <a href=""
            ><img src="@/assets/images/common/logo.png" alt="Xenon Company Limited"
          /></a>
        </h1>
        <nav>
          <ul class="g-nav">
            <li
              :class="[activeMenu ? 'has-menu active' : 'has-menu']"
              @click="clickMenu()"
            >
              <a class="active" href="#">Products</a>
              <ul :class="[activeMenu ? 'sub-menu is-show' : 'sub-menu']">
                <li @mouseenter="handleMouseEnter(0)" @mouseleave="handleMouseLeave(0)">
                  <a>Business Cards</a>
                  <ul :class="[subMenuActive[0] ? 'dropdown-menu menu-active' : 'dropdown-menu']">
                    <li>
                      <a href="" class="dropdown-item"
                        >Standard Business Cards - Promo<span class="badge-info"
                          >SALE!</span
                        ></a
                      >
                    </li>
                    <li><a href="" class="dropdown-item">Deluxe Business Card</a></li>
                  </ul>
                </li>
                <li @mouseenter="handleMouseEnter(1)" @mouseleave="handleMouseLeave(1)">
                  <a href="">Large Format Printing</a>
                  <ul :class="[subMenuActive[1] ? 'dropdown-menu menu-active' : 'dropdown-menu']">
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
                <li @mouseenter="handleMouseEnter(2)" @mouseleave="handleMouseLeave(2)">
                  <a href="">Marketing Materials</a>
                  <ul :class="[subMenuActive[2] ? 'dropdown-menu menu-active' : 'dropdown-menu']">
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
                <li @mouseenter="handleMouseEnter(3)" @mouseleave="handleMouseLeave(3)">
                  <a href="">Sticker</a>
                  <ul :class="[subMenuActive[3] ? 'dropdown-menu menu-active' : 'dropdown-menu']">
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
                <li @mouseenter="handleMouseEnter(4)" @mouseleave="handleMouseLeave(4)">
                  <a href="">Caution Sign Sticker</a>
                  <ul :class="[subMenuActive[4] ? 'dropdown-menu menu-active' : 'dropdown-menu']">
                    <li><a href="">Covid 19 Floor Sticker-01</a></li>
                  </ul>
                </li>
              </ul>
            </li>
            <li><a href="">About US</a></li>
            <li><a href="">Contact US</a></li>
            <li><a href="">Request a Quote</a></li>
            <li><a href="">Login / Register</a></li>
          </ul>
        </nav>
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
    </header>
    <main></main>
    <!-- <footer>
      <p>Copyright &copy; Dream Holdings., Ltd. All Rights Reserved.</p>
    </footer> -->
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "HomeView",
  components: {},
  data() {
    return {
      activeMenu: false,
      subMenuActive: [false, false, false, false, false]
    };
  },
  methods: {
    clickMenu() {
      this.activeMenu = !this.activeMenu;
    },
    handleMouseEnter(i) {
      console.log("mouse enter-----------", i)
      this.subMenuActive[i] = true;
    },
    handleMouseLeave(i) {
      console.log("mouse leave-----------", i)
      this.subMenuActive[i] = false;
    }
  },
};
</script>

<style lang="postcss">
@import "@/assets/scss/mixins.scss";

.wrapper {
  max-width: 1440px;
  margin: 0 auto;
  .header-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 0;
    h1 {
      img {
        width: 80%;
      }
    }
    nav {
      .g-nav {
        display: flex;
        li {
          a {
            padding: 15px;
            position: relative;
            &:hover {
              color: #313131;
              &::after {
                @include hover-visible();
              }
            }
            &::after {
              @include hover-css();
            }
            &.active {
              &::after {
                @include hover-visible();
              }
            }
          }
          .sub-menu {
            display: none;
            &.is-show {
              display: block;
              position: absolute;
              top: 35px;
              min-width: 200px;
              background: #ceaf9b;
              li {
                position: relative;
                border-bottom: 1px solid rgba(255, 255, 255, 0.25);
                &::after {
                  content: "\e5cc";
                  position: absolute;
                  font-family: "Material Symbols Outlined";
                  top: 7px;
                  right: 4px;
                  font-size: 25px;
                  color: #fff;
                }
                a {
                  display: block;
                  padding: 12px 20px 12px 20px;
                  color: #fff;
                  &:hover {
                    background: #f47920;
                    color: #313131;
                  }
                }
              }
              .dropdown-menu {
                display: none;
                li {
                  &::after {
                    display: none;
                  }
                }
                &.menu-active {
                  display: block;
                  position: absolute;
                  margin: 0;
                  top: 0;
                  left: 100%;
                  min-width: 10rem !important;
                  width: 20vw !important;
                  height: auto !important;
                  background: #ceaf9b;
                  .badge-info {
                    background: #003462;
                    color: #fff;
                    margin-left: 5px;
                    padding: 1px 5px 2px;
                    font-size: 10px;
                    border-radius: 5px;
                  }
                }
              }
            }
          }
          &.has-menu {
            position: relative;
            a {
              padding: 15px 30px 15px 24px;
            }
            &::after {
              content: "\e5cf";
              position: absolute;
              font-family: "Material Symbols Outlined";
              top: 0;
              right: 9px;
              font-size: 20px;
            }
          }
        }
      }
    }
    .search-blk {
      display: flex;
      align-items: center;
      .search-form {
        position: relative;
        input {
          padding: 10px 35px 10px 15px;
          border-radius: 50px;
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
        }
      }
      .language {
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
      .shopping {
        position: relative;
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
}
</style>
