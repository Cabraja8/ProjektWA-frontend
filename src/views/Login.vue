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

          <form>
            <div class="mb-4 text_white">
              <label for="Email" class="form-label">E-mail:</label>
              <input
                type="E-mail"
                v-model="Email"
                class="form-control"
                id="Email"
              />
            </div>
            <div class="mb-4 text_white">
              <label for="password" class="form-label">Password:</label>
              <input
                type="password"
                v-model="Password"
                class="form-control"
                id="password"
              />
            </div>
            <button
              type="button"
              @click="logiranje"
              class="btn btn-success w-100 mx-auto my-4 rounded"
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

export default {
  name: "Login",
  components: {},
};
</script>
