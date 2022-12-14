<template>
  <div class="DashBoard">
    <div class="container-fluid my-4 py-4 col">
      <h2 class="h2">Select your group</h2>
      <div class="border-top border-secondary w-50 mx-auto my-3"></div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-lg-6 py-4 my-4 mx-auto md-4">
          <select
            class="form-control selectoption"
            id="selectoption"
            v-model="Pick"
          >
            <option>GRUPE</option>
          </select>
        </div>
      </div>
    </div>
    <div class="container my-4 py-4 mt-5">t</div>
  </div>
</template>

<script>
export default {
  name: "DashBoard",
  data() {
    return {
      Pick: "",
    };
  },
};
</script>

<style></style>
