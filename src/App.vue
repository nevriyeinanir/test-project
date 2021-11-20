<template>
  <Header />
  <router-view></router-view>
  <Footer />
</template>
<script>
import Header from "./Layouts/Header.vue";
import Footer from "./Layouts/Footer.vue";

export default {
  name: "Home",
  components: {
    Header,
    Footer,
  },
};
</script>
