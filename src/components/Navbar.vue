<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg">
      <a class="navbar-brand" href="#">Entrevistas</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">
              <router-link to="/" exact>Home</router-link>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <router-link to="/entrevistas" exact>Entrevistas</router-link>
            </a>
          </li>
        </ul>
        <div class="my-2 my-lg-0">
          <LoginButton />
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import LoginButton from "@/components/LoginButton.vue";
export default {
  components: {
    LoginButton
  }
};
</script>

<style></style>
