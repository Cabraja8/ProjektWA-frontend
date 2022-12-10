<template>
  <div id="app">
    <header>
      <div class="top-bar bg-gray">
        <div class="col 12 text-right">
          <p class="text_white">&copy; Project Manager 2023</p>
        </div>
      </div>

      <nav
        id="nav"
        class="navbar bg-darkbg navbar-expand-lg navbar navbar-dark py-3 p-5"
      >
        <div class="container">
          <span v-if="!auth.authenticated">
            <router-link to="/" class="navbar-brand"
              ><img src="./assets/app_logo-transparent.png" alt="Logo"
            /></router-link>
          </span>
          <span v-if="auth.authenticated">
            <router-link to="/Groups" class="navbar-brand"
              ><img src="./assets/app_logo-transparent.png" alt="Logo"
            /></router-link>
          </span>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ml-auto">
              <span v-if="!auth.authenticated">
                <li class="navbar-brand">
                  <router-link to="/" class="nav-link">Home</router-link>
                </li>
              </span>
              <span v-if="!auth.authenticated">
                <li class="navbar-brand">
                  <router-link to="/Login" class="nav-link">Log in</router-link>
                </li>
              </span>

              <span v-if="auth.authenticated">
                <li class="navbar-brand">
                  <router-link to="/Groups" class="nav-link"
                    >Groups</router-link
                  >
                </li>
              </span>
              <span v-if="auth.authenticated">
                <li class="navbar-brand">
                  <router-link to="/DashBoard" class="nav-link"
                    >Dashboard</router-link
                  >
                </li>
              </span>
              <span v-if="auth.authenticated">
                <li class="navbar-brand">
                  <router-link to="/ControlPanel" class="nav-link"
                    >Control Panel</router-link
                  >
                </li>
              </span>
              <span v-if="auth.authenticated">
                <li class="navbar-brand">
                  <div class="btn-group">
                    <button
                      class="btn btn-darkbg btn-sm dropdown-toggle"
                      type="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <a class="nav-link" href>
                        <i class="fa-solid fa-gear fa-2xl"> </i
                      ></a>
                    </button>
                    <div class="dropdown-menu">
                      <div class="row">
                        <span v-if="auth.authenticated">
                          <li class="navbar-brand">
                            <router-link to="/Profile" class="nav-link"
                              >Profile</router-link
                            >
                          </li>
                        </span>
                        <div class="dropdown-divider"></div>
                        <span v-if="auth.authenticated">
                          <li class="navbar-brand">
                            <a @click="logout" class="nav-link" href>Logout</a>
                          </li>
                        </span>
                      </div>
                    </div>
                  </div>
                </li>
              </span>
            </ul>
          </div>
        </div>
      </nav>
    </header>
    <router-view />

    <footer class="bg-darkfooter">
      <div class="container">
        <div class="row text-light text-center py-4 justify-content-center">
          <div class="col-sm-10 col-md-8-col-lg-6">
            <img src="../src/assets/app_logo-transparent.png" alt="" class="" />

            <br />
          </div>
        </div>
        <ul class="social pt-3">
          <li>
            <a href="https://www.facebook.com/" target="_blank"
              ><i class="fab fa-facebook"></i
            ></a>
          </li>
          <li>
            <a href="https://www.instagram.com/" target="_blank"
              ><i class="fab fa-instagram"></i
            ></a>
          </li>
          <li>
            <a href="https://twitter.com/" target="_blank"
              ><i class="fab fa-twitter"></i
            ></a>
          </li>
          <li>
            <a href="https://www.youtube.com/" target="_blank"
              ><i class="fab fa-youtube"></i
            ></a>
          </li>
        </ul>
      </div>
    </footer>
    <div class="socket text-light text-center"></div>
  </div>
</template>

<script>
import store from "@/store.js";
import { Service, Auth } from "@/services";

export default {
  name: "app",
  data() {
    return {
      store,
      auth: Auth.state,
    };
  },

  methods: {
    logout() {
      Auth.logout();
      this.$router.go();
    },
  },
  mounted() {},
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #665e5e !important;

    &.router-link-exact-active {
      color: #ffffff !important;
    }
  }
}
</style>
