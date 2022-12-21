<template>
  <div class="register">
    <div class="container py-6 padding py-4 my-4">
      <div
        class="row wh-100 align items-center justify-content form-container formcon"
      >
        <div class="col-sm-8 col-md-6 col-lg-4 bg-darker rounded p-4 shadow">
          <div class="row justify-content-center mb-4">
            <img src="../assets/app_logo-transparent.png" class="w-50" />
          </div>

          <form @submit.prevent="Register">
            <div class="mb-4 text_white">
              <label for="Email" class="form-label">Username::</label>
              <input
                type="username"
                v-model="username"
                class="form-control"
                id="username"
                placeholder="Username"
              />
            </div>
            <div class="mb-4 text_white">
              <label for="password" class="form-label">Password:</label>
              <input
                type="password"
                v-model="Password"
                class="form-control"
                id="password"
                placeholder="Password"
              />
            </div>
            <div class="mb-4 text_white">
              <label for="password" class="form-label">Repeat Password:</label>
              <input
                type="password"
                v-model="RepeatPassword"
                class="form-control"
                id="RepeatPassword"
                placeholder="Repeat Password"
              />
            </div>
            <div class="container">
              <label for="password" class="form-label text_white"
                >Already have an account?
                <router-link
                  to="/Login"
                  class="nav-link text-decoration-underline"
                  >Log in</router-link
                >
              </label>
            </div>
            <button
              type="button "
              class="btn btn-secondary w-50 mx-auto my-4 button4"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { Auth, Users } from "@/services";
export default {
  data() {
    return {
      username: "",
      Password: "",
      RepeatPassword: "",
      users: [],
      userlist: [],
    };
  },
  mounted() {},
  methods: {
    async Register() {
      if (
        this.Password !== "" ||
        this.RepeatPassword !== "" ||
        this.username !== ""
      ) {
        if (this.Password === this.RepeatPassword) {
          await Auth.Register(this.username, this.Password);
          alert("You've succesfully created your account");
          this.$router.push({ name: "Login" });
        } else {
          alert("Passwords do NOT match");
        }
      } else {
        alert("Please make sure the input is not empty");
      }
    },
  },
  name: "Register",
  components: {},
};
</script>
