<template>
  <div class="GroupPanel">
    <div class="container">
      <div class="container mt-5 my-4 py-4 my-4 w-80">
        <div class="table-responsive">
          <table
            class="table m-0 pd-4 py-4 md-4 mx-auto table-hover shadowbox mx-auto"
          >
            <thead class="thead-darkbg">
              {{
                groupPanel.username
              }}
            </thead>
            <tbody>
              <tr>
                <th class="cent">Click on the Create Group button</th>
                <br />
                <br />
                <br />
                <br />
                <br />
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
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
