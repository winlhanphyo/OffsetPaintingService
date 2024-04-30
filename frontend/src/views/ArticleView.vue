<template>
  <div class="container">
    <div class="article">
      <h2>{{ $t('message.article') }}</h2>
      <ul class="article-list">
        <li>
          <a href="">
            <img src="@/assets/images/products/Fabrix_T_Shirt_01_40091.jpg" alt="">
            <p>
              <span class="title">Standard Business Card</span>
              <span>2024/04/01</span>
            </p>
          </a>
        </li>
        <li>
          <a href="">
            <img src="@/assets/images/products/Fabrix_T_Shirt_01_40091.jpg" alt="">
            <p>
              <span class="title">Standard Business Card</span>
              <span>2024/04/01</span>
            </p>
          </a>
        </li>
        <li>
          <a href="">
            <img src="@/assets/images/products/Fabrix_T_Shirt_01_40091.jpg" alt="">
            <p>
              <span class="title">Standard Business Card</span>
              <span>2024/04/01</span>
            </p>
          </a>
        </li>
        <li>
          <a href="">
            <img src="@/assets/images/products/Fabrix_T_Shirt_01_40091.jpg" alt="">
            <p>
              <span class="title">Standard Business Card</span>
              <span>2024/04/01</span>
            </p>
          </a>
        </li>
        <li>
          <a href="">
            <img src="@/assets/images/products/Fabrix_T_Shirt_01_40091.jpg" alt="">
            <p>
              <span class="title">Standard Business Card</span>
              <span>2024/04/01</span>
            </p>
          </a>
        </li>
        <li>
          <a href="">
            <img src="@/assets/images/products/Fabrix_T_Shirt_01_40091.jpg" alt="">
            <p>
              <span class="title">Standard Business Card</span>
              <span>2024/04/01</span>
            </p>
          </a>
        </li>
        <li>
          <a href="">
            <img src="@/assets/images/products/Fabrix_T_Shirt_01_40091.jpg" alt="">
            <p>
              <span class="title">Standard Business Card</span>
              <span>2024/04/01</span>
            </p>
          </a>
        </li>
        <li>
          <a href="">
            <img src="@/assets/images/products/Fabrix_T_Shirt_01_40091.jpg" alt="">
            <p>
              <span class="title">Standard Business Card</span>
              <span>2024/04/01</span>
            </p>
          </a>
        </li>
        <li>
          <a href="">
            <img src="@/assets/images/products/Fabrix_T_Shirt_01_40091.jpg" alt="">
            <p>
              <span class="title">Standard Business Card</span>
              <span>2024/04/01</span>
            </p>
          </a>
        </li>
        <li>
          <a href="">
            <img src="@/assets/images/products/Fabrix_T_Shirt_01_40091.jpg" alt="">
            <p>
              <span class="title">Standard Business Card</span>
              <span>2024/04/01</span>
            </p>
          </a>
        </li>
      </ul>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "AppArticle",
  components: {},
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss">
  .container {
    .article {
      ul {
        margin: 50px 0;
        li {
          margin-inline-end: 20px;
          margin-bottom: 2.125rem;
          width: 18%;
          vertical-align: top;
          display: inline-block;
          transition: transform 0.3s ease-in-out;
          @media screen and (min-width: 768px) and (max-width: 1440px) {
            margin-inline-end: 10px;
          }
          @media screen and (min-width: 501px) and (max-width: 767.9px) {
            width: 47%;
            &:nth-child(2n) {
              margin-inline-end: auto;
            }
          }
          @media screen and (max-width: 500px) {
            width: auto;
            margin-inline-end: auto;
            &:nth-child(2n) {
              margin-inline-end: auto;
            }
          }
          &:nth-child(5n) {
            margin-inline-end: auto;
            @media screen and (min-width: 501px) and (max-width: 767.9px) {
              margin-inline-end: 20px;
            }
          }
          &:hover {
            transform: scale(1.2);
            @media screen and (max-width: 767.9px) {
              transform: inherit;
              opacity: 0.7;
            }
          }
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          a {
            p {
              margin-top: 15px;
              span {
                display: block;
                margin-top: 10px;
                font-size: 12px;
                &.title {
                  overflow: hidden;
                  text-overflow: ellipsis;
                  line-height: 23px;
                  white-space: nowrap;
                  font-size: 15px;
                  @media screen and (min-width: 768px) and (max-width: 1440px) {
                    font-size: 14px;
                  }
                  @media screen and (max-width: 767.9px) {
                    font-size: 13px;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
</style>
