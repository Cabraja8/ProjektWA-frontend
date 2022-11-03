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
              <li class="nav-item">
                <router-link to="/" class="nav-link">Home</router-link>
              </li>

              <li class="nav-item">
                <router-link to="" class="nav-link">Log in</router-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  </div>
</template>

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
    color: #ffffff;

    &.router-link-exact-active {
      color: #6a6969;
    }
  }
}
</style>
