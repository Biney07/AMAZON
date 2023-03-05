<template>
  <div class="float-start" style="margin-left: 47px; margin-top: 6px">
    <a>
      <router-link class="btn btn-success" to="/dashboard/foods/create"
        >Krijo</router-link
      >
    </a>
  </div>
  <div class="m-5">
    <div class="table-responsive">
      <table class="table">
        <thead class="table-info">
          <tr>
            <th>Emri</th>
            <th>Kategoria</th>
            <th>Pershkrimi</th>
            <th>Foto</th>
            <th>Cmimi</th>
            <th>Statusi</th>
            <th>Veprime</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="food in this.foods" :key="food._id">
            <td>{{ food.name }}</td>
            <td>{{ food.category }}</td>
            <td>{{ food.description }}</td>
            <td><img :src="food.image" width="100" height="100" /></td>
            <td>{{ food.price }}</td>
            <td>{{ food.status ? "Aktiv" : "Jo Aktiv" }}</td>
            <td>
              <button class="btn btn-sm btn-success">
                <router-link
                  class="btn-success"
                  :to="`/dashboard/foods/edit/${food._id}`"
                  >Edit</router-link
                >
              </button>
            </td>
            <td>
              <button
                class="btn btn-sm btn-danger"
                @click="handleDeleteFood(food._id)"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["foods"]),
  },
  mounted() {
    this.$store.dispatch("fetchFoods");
  },
  methods: {
    handleDeleteFood(foodId) {
      this.$swal({
        title: "Jeni te sigurt qe deshironi te fshini?",
        text: "A jeni te sigurt? Pasi qe nuk mund te kthehet me!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "red",
        confirmButtonText: "Po, Deshiroj ta fshij!",
        closeOnConfirm: true,
      }).then((result) => {
        if (result.value) {
          this.$store.dispatch("deleteFood", foodId);
          this.$swal("I fshire!", "Eshte fshire me sukses.", "success");
        }
      });
    },
  },
};
</script>
