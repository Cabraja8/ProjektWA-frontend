<template>
  <div class="login">
    <div class="container py-6 padding py-4 my-4">
      <div
        class="row wh-100 align items-center justify-content form-container formcon"
      >
        <div class="col-sm-8 col-md-6 col-lg-4 bg-darker rounded p-4 shadow">
          <div class="row justify-content-center mb-4">
            <img src="../assets/app_logo-transparent.png" class="w-50" />
          </div>

          <form @submit.prevent="login">
            <div class="mb-4 text_white">
              <label for="Email" class="form-label">Username:</label>
              <input
                type="E-mail"
                v-model="username"
                class="form-control"
                id="Email"
                placeholder="Username"
              />
            </div>
            <div class="mb-4 text_white">
              <label for="password" class="form-label">Password:</label>
              <input
                type="password"
                v-model="password"
                class="form-control"
                id="password"
                placeholder="Password"
              />
            </div>
            <div class="container">
              <label for="password" class="form-label text_white"
                >Don't have an account?
                <router-link
                  to="/Register"
                  class="nav-link text-decoration-underline"
                  >Register</router-link
                >
              </label>
            </div>
            <button
              type="submit"
              class="btn btn-secondary w-50 mx-auto my-4 button4"
            >
              Log in
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { Auth, Service } from "@/services";
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  name: "Login",
  components: {},
  methods: {
    async login() {
      let success = await Auth.login(this.username, this.password);
      console.log("rezultat prijave ", success);
      if (this.username === "" || this.password === "") {
        alert("Please make sure the input is not empty");
      } else {
        if (success && Auth.getToken()) {
          this.$router.push({ name: "profile" });
        } else {
          console.log("korisnik ne postoji!");
          alert("User does not exist / password or email wrong");
          this.username = "";
          this.password = "";
        }
      }
    },
  },
};
</script>
