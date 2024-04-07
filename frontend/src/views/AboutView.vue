<template>
  <main>
    <div id="about" class="container">
      <div class="breadcrumb-container">
        <!-- <ul class="breadcrumb breadcrumb_arrow4">
          <li class="">
            <a @click="$router.push('/home')"><span class="a">Home</span></a
            ><meta content="1" />
          </li>
          <li class="active">
            <link @click="$router.push('/about')" /><span class="a">About Us</span
            ><meta content="2" />
          </li>
        </ul> -->
      </div>
      <h2>About Us</h2>
      <div class="landing-page">
        <p>
          Xenon Company Limited&nbsp;presents the premier Online Printing Platform for
          obtaining personal, promotional, commercial, and informational print products at
          the lowest prices!
        </p>
        <p>
          Why waste the time visiting your printer when online help is at hand?&nbsp;Xenon
          Company Limited&nbsp;brings you the one-stop shop for all your printing needs
          and more.....
        </p>
        <ul>
          <li>Large range of popular products for creating Business Card, Envelope, Letterhead, Greeting Card, Postcard, Flyer, Poster, Brochure and many more.</li>
          <li>Thousands of pre-loaded templates and customizable products. Let our professional experts create custom print products for you.</li>
          <li>Enjoy freedom from hassles of constant designing,    redesigning and proofing.</li>
          <li>Pick your own style, design, quantity, shipping and payment mode and leave the rest to Xenon Company Limited.</li>
          <li>Get your order printed on superior quality paper and card stocks using the modern offset printing technology.</li>
          <li>Get your order delivered quickly at your doorstep.</li>
        </ul>
      
        <p>
          Xenon Company Limited helps you capitalize on the advantages afforded by the
          digital age. We assure affordability, flexibility and profitability like no
          other online print shop.
        </p>
        <p>
          Just about anybody can use Xenon Company Limited services - artists, freelance
          designers, small and medium businesses, or anyone that needs print materials in
          small or bulk quantities.
        </p>
        <p>
          <img
            alt="AerialView_XenonFactory"
            class="img-fluid"
            height="574"
            src="https://d3pyarv4eotqu4.cloudfront.net/xenonmmon/images/contentimages/images/AerialView_Factory - Copy 1.jpg"
            style=""
            width="1193"
          />
        </p>
        <p>Our Story</p>
        <p>
          Xenon Company Limited has been established 2006 as a printing service provider
          from the beginning. Accordingly we strongly believe it is very important to make
          our clients satisfied by providing good quality prints.
        </p>
        <p>
          Printing process and technology is constantly changing with emergence of better
          machinery and technology. It is essential to follow the technical changes and
          not to be outdated in applying machinery. In realizing quality products apart
          from modern machinery, a high capability of human resources is critical as well.
          The running businesses from diversified field have approved the fact.
        </p>
        <p>
          Xenon Co., Ltd. will follow the professional ethics of printing industry. We
          give priority to quality of the products and meeting the deadline set for our
          clients. In order to keep the high quality we will keep updating our technical
          capabilities. At the same time we will recruit and nurture the young people to
          improve our human resources leading to realizing a prestigious work force.
          That's our sincere promise!
        </p>
      </div>
      <div class="row"><div class="col-12"></div></div>
    </div>
  </main>
</template>

<script>
export default {
  name: "AppAbout",
  components: {},
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="postcss">
@import "@/assets/scss/mixins.scss";
.wrapper {
  main {
    #about.container {
      @media screen and (min-width: 768px) and (max-width: 1440px) {
        max-width: 95%;
      }
      @media screen and (max-width: 767.9px) {
        max-width: 95%;
      }

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

      .landing-page {
        margin-top: 60px;
        @media screen and (max-width: 767.9px) {
          margin-top: 50px;
        }
        ul {
          margin: 0 0 0 40px;
          @media screen and (max-width: 767.9px) {
            margin: 0 0 0 30px;
          }
          li {
            list-style: disc;
            margin-bottom: 15px;
            line-height: 1.5;
          }
        }
      }

      p {
        margin-top: 0;
        margin-bottom: 1rem;
        line-height: 1.8;
      }
      .img-fluid {
        max-width: 100%;
        height: auto;
      }
      img {
        vertical-align: middle;
        border-style: none;
      }
    }
  }
}
</style>
