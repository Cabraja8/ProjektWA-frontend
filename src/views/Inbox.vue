<template>
  <div class="Inbox">
    <div class="table-responsive">
      <table
        class="table m-0 pd-4 py-4 md-4 mx-auto table-striped table-hover shadowbox mx-auto"
      >
        <thead class="thead-darkbg">
          <tr>
            <th></th>
            <th>From</th>

            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="list in InboxList" :key="list.inbox">
            <td>Picture</td>
            <td>{{ list.inbox }}</td>

            <td>button</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { Inbox } from "@/services";

export default {
  name: "Inbox",
  data() {
    return {
      InboxList: [],
    };
  },
  methods: {
    async GetInbox() {
      let pickoption = JSON.parse(localStorage.getItem("pick"));
      this.InboxList = await Inbox.GetInbox({ params: { pickoption } });
    },
  },
  mounted() {
    this.GetInbox();
  },
};
</script>

<style></style>
