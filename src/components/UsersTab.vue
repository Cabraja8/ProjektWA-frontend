<template>
  <div class="UsersTab">
    <div class="table-responsive">
      <table
        class="table m-0 pd-4 py-4 md-4 mx-auto table-striped table-hover shadowbox mx-auto"
      >
        <thead class="thead-darkbg">
          <tr>
            <th></th>
            <th>Username</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Picture</td>
            <td>{{ userstab.names.join() }}</td>
            <td>{{ userstab.role.join() }}</td>
            <td>button</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "UsersTab",
  props: ["userstab"],
  data() {
    return {};
  },

  components: {},
  methods: {},
};
</script>

<style></style>
