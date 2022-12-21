<template>
  <div class="Invites">
    <div class="container w-90">
      <div class="table-responsive">
        <table
          class="table m-0 pd-4 py-4 md-4 mx-auto bg-light shadowbox mx-auto"
        >
          <thead class="thead-darkbg">
            <tr>
              <th>Group Name</th>
              <th>Company Name</th>

              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>sda</td>
              <td>Dashboard</td>

              <td>
                <button type="button  " class="btn btn-sm btn-success">
                  <i class="fa-solid fa-check"></i> Join
                </button>
                <button type="button  " class="btn btn-sm btn-danger">
                  <i class="fa-solid fa-x"></i> Cancel
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Invites",
};
</script>

<style></style>
