<template>
  <div class="menu-dashboard">
    <div style="text-align: left; margin: 27px 0px -20px 47px;">
      <a>
        <router-link class="btn btn-success" to="/dashboard/menute/create"
          >Create Menu</router-link
        >
      </a>
    </div>
    <div class="float-start" style="margin-left: 47px; margin-top: 6px"></div>
    <div class="m-5">
      <div class="table-responsive">
        <table class="table">
          <thead class="table-info">
            <tr>
              <th>Name</th>
              <th>Appetizer</th>
              <th>Main Dish</th>
              <th>Dessert</th>
              <th>Price</th>
              <th>Extra</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="menu in menus" :key="menu._id">
              <td>{{ menu.name }}</td>
              <td>{{ menu.appetizer.name }}</td>
              <td>{{ menu.main_dish.name }}</td>
              <td>{{ menu.dessert.name }}</td>
              <td>{{ menu.price }}</td>
              <td>{{ menu.extra }}</td>
              <td>
                <router-link :to="`/dashboard/menute/edit/${menu._id}`"
                  ><button class="btn btn-sm btn-success m-1" >
                    Edit
                  </button></router-link
                >
                <button
                  class="btn btn-sm btn-danger m-1"
                  @click="deleteMenu(menu._id)"
                >
                  Delete
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
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["menus"]),
  },
  mounted() {
    this.$store.dispatch("fetchMenus");
  },
  methods: {
    deleteMenu(menuId) {
      this.$swal({
        title: "Are you sure you want to delete this menu?",
        text: "You won't be able to revert this!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
        closeOnConfirm: true,
      }).then((result) => {
        if (result.value) {
          this.$store.dispatch("deleteMenu", menuId);
          this.$swal("Deleted!", "The menu has been deleted.", "success");
        }
      });
    },
  },
};
</script>
