<template>
  <div>
    <!-- Button trigger modal -->
    <button
      type="button"
      class="btn btn-primary"
      data-toggle="modal"
      data-target="#LoginModal"
    >
      Login
    </button>

    <!-- Modal -->
    <div
      class="modal fade"
      id="LoginModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalCenterTitle">
              Login de usuarios registrados en el sistema
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form>
              <div class="form-group">
                <label for="username">Usuario</label>
                <input
                  v-model="username"
                  type="text"
                  class="form-control"
                  id="username"
                />
              </div>
              <div class="form-group">
                <label for="password">Password</label>
                <input
                  v-model="password"
                  type="password"
                  class="form-control"
                  id="password"
                />
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Cancelar
            </button>
            <button
              @click="login(username, password)"
              type="button"
              class="btn btn-primary"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    login: function(username, password) {
      this.$axios
        .post(this.$host + "/api/usuario/auth/login", {
          nombre: username,
          password: password
        })
        .then(res => {
          const token = this.$jwtDecode.decode(res.data.token);
          const roles = token.role;
          this.username = token.sub;
          this.$store.commit("setJwtToken", { token });
          this.$store.commit("setUsername", { username });
          this.$store.commit("setRoles", { roles });
          $("#LoginModal").modal("hide");
          this.$router.push({ path: "/entrevistas" });
        })
        .catch(err => console.log(err));
    }
  }
};
</script>

<style></style>
