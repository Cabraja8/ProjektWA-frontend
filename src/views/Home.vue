<template>
  <div class="home">
    <div class="container-justify my-4 pd-3 border-secondary">
      <div
        id="carousel"
        class="carousel slide"
        data-ride="carousel"
        data
        interval="2000"
      >
        <div class="carousel-inner">
          <div class="carousel-item active text-center">
            <img src="../assets/projectmanage.png" alt="" class="w-100" />
            <div class="carousel-caption">
              <div class="container">
                <div class="row justify-content-center">
                  <div class="col-8 bg-sh py-3">
                    <h1>PROJECT MANAGER</h1>
                    <div
                      class="border-top border-secondary w-50 mx-auto my-3"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12 text-center mt-5">
      <h1 class="text-dark pt-4">Useful Links & Information</h1>
      <div class="border-top border-secondary w-100 mx-auto my-3"></div>
    </div>
    <div class="container">
      <div class="row my-5">
        <div class="col-md-4 my-4">
          <img src="" alt="" class="w-100" />
          <h4 class="my-4">Join us today</h4>
          <p>Be part of your company</p>
          <router-link to="" class="btn btn-outline-secondary btn-md"
            >Register</router-link
          >
        </div>
        <div class="col-md-4 my-4">
          <img src="" alt="" class="w-100" />
          <h4 class="my-4">Take Away</h4>
          <p>/</p>
          <router-link to="" class="btn btn-outline-secondary btn-md"
            >Više informacija</router-link
          >
        </div>
        <div class="col-md-4 my-4">
          <img src="" alt="" class="w-100" />
          <h4 class="my-4">What is Project Manager?</h4>
          <p>
            Project Manager is an Web Application who helps you create projects
            and manage them
          </p>
          <router-link to="" class="btn btn-outline-secondary btn-md"
            >Više informacija</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  components: {},
};
</script>
