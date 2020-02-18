<template>
  <div>
    <Navbar />
    <div class="container">
      <h1>Bienvenido devuelta {{ username }} !</h1>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
export default {
  name: "Home",
  components: {
    Navbar
  },
  data() {
    return {
      username: ""
    };
  },
  mounted() {
    this.username = this.$store.getters.username.username;
  }
};
</script>

<style></style>
