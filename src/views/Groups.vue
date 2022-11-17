<template>
  <div class="groups">
    <div class="container-fluid my-4 py-4 col">
      <h2 class="h2">Search Groups</h2>
      <div class="border-top border-secondary w-50 mx-auto my-3"></div>
      <div
        class="container-fluid my-4 py-4 col-lg-12 col-sm-3 col-md-12 d-flex aligns-items-center justify-content-center"
      >
        <input type="text" class="form-control w-50" id="search" />
      </div>
    </div>
    <div class="container md-5 my-4 py-4">
      <div class="table-responsive">
        <table
          class="table m-0 pd-4 py-4 md-4 mx-auto table-striped table-hover shadowbox mx-auto"
        >
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Groups",
};
</script>

<style></style>
