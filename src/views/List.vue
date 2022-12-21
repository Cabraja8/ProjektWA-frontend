<template>
  <div class="list">
    <div class="container-fluid">
      <div class="mt-5 py-4 mb-4">
        <h1 class="h1">Group Lists</h1>
        <div class="border-top border-secondary w-50 mx-auto my-3"></div>
        <div class="container my-4 mt-5">
          <div class="row">
            <div class="container">
              <ListPanel />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Service, Auth } from "@/services";
import ListPanel from "@/components/ListPanel.vue";
export default {
  name: "List",
  components: { ListPanel },
  data() {
    return {
      user: JSON.parse(localStorage.getItem("user")),
    };
  },
  methods: {},
};
</script>

<style></style>
