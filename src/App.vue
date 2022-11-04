<template>
  <div id="app">
    <header>
      <div class="top-bar bg-gray">
        <div class="col 12 text-right">
          <p><a href="">/</a></p>
        </div>
      </div>

      <nav id="nav" class="navbar bg-dark navbar-expand-lg">
        <div class="container">
          <router-link to="/" class="navbar-brand"
            ><img src="./assets/app_logo-transparent.png" alt="Logo"
          /></router-link>

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
              <li class="navbar-brand">
                <router-link to="/" class="nav-link">Home</router-link>
              </li>

              <li class="navbar-brand">
                <router-link to="/Login" class="nav-link">Log in</router-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
    <router-view />
    <footer>
      <div class="container">
        <div class="row text-light text-center py-4 justify-content-center">
          <div class="col-sm-10 col-md-8-col-lg-6">
            <img src="../src/assets/app_logo-transparent.png" alt="" />

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
            <br />
          </div>
        </div>
      </div>
    </footer>
    <div class="socket text-light text-center">
      <p>&copy; Project Manager 2023</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {};
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #665e5e;

    &.router-link-exact-active {
      color: #ffffff;
    }
  }
}
</style>
