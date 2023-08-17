<template>
  <div>
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default defineComponent({
  name: "app",
  components: {
    Header,
    Footer,
  },

  setup() {
    return {};
  },
});

</script>

<style lang="scss">
@import "assets/sass/style.scss";
</style>
