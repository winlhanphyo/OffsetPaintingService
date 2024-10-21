<template>
  <div class="wrapper">
    <AppLoading />
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import AppLoading from "@/components/AppLoading.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
    AppLoading
  },
};
</script>

<style>
.wrapper {
  width: 100%;
}
</style>
