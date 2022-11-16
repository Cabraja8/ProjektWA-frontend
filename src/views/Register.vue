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

          <form>
            <div class="mb-4 text_white">
              <label for="Email" class="form-label">E-mail:</label>
              <input
                type="E-mail"
                v-model="Email"
                class="form-control"
                id="Email"
                placeholder="Email"
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
                id="password"
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
              class="btn btn-success w-50 mx-auto my-4 button4"
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

export default {
  data() {
    return {
      Email: "",
      Password: "",
      RepeatPassword: "",
    };
  },
  name: "Register",
  components: {},
};
</script>
