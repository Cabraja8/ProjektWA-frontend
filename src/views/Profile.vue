<template>
  <div class="profile">
    <div class="container-fluid">
      <div class="mt-5 py-4 mb-4">
        <h2>Your profile</h2>
        <div class="border-top border-secondary w-50 mx-auto my-3"></div>
        <div class="container my-4 mt-5">
          <div class="row">
            <div class="py-4 col-lg-6 col-md-6 col-sm-3 bord">
              <img
                class="img-thumbnail img-bord"
                src="@/assets/default_test.jpg"
              />
            </div>
            <div
              class="py-4 col-lg-6 col-md-6 col-sm-3 bord justify-content-between"
            >
              <p>USERNAME</p>
              <p>Your main company</p>
              <p>Lists of groups</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Service, Auth } from "@/services";
export default {
  name: "profile",
  data() {
    return {
      user: "",
    };
  },
};
</script>

<style></style>
