<template>
  <div class="GroupPanel">
    <table class="table">
      <thead class="table-light">
        <tr>
          <th scope="col">{{ groupPanel.groupname }}</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Handle</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td colspan="2">Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "groupPanel",
  props: ["groupPanel"],
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>

<style></style>
