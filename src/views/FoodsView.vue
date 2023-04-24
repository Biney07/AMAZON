<template>
  <div class="container-xxl py-5">
    <div class="container">
      <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
        <h5 class="section-title ff-secondary text-center green fw-normal">Food Menu</h5>
        <h1 class="mb-5">Te gatuar me elegance</h1>
      </div>
      <div class="tab-class text-center wow fadeInUp" data-wow-delay="0.1s">
        <ul class="nav nav-pills d-inline-flex justify-content-center border-bottom mb-5">
          <li class="nav-item" :class="{ active: selectedCategory === 'appetizers' }"
            @click="selectedCategory = 'appetizers'">
            <a class="d-flex align-items-center text-start mx-3 ms-0 pb-3 active" data-bs-toggle="pill" href="#tab-1">
              <i class="fa fa-coffee fa-2x green"></i>
              <div class="ps-3">
                <small class="text-body">Openly</small>
                <h6 class="mt-n1 mb-0">Appetizers</h6>
              </div>
            </a>
          </li>
          <li class="nav-item" :class="{ active: selectedCategory === 'main dish' }"
            @click="selectedCategory = 'main dish'">

            <a class="d-flex align-items-center text-start mx-3 pb-3" data-bs-toggle="pill" href="#tab-2">
              <i class="fa fa-utensils fa-2x green"></i>
              <div class="ps-3">
                <small class="text-body">Main</small>
                <h6 class="mt-n1 mb-0">Plate</h6>
              </div>
            </a>
          </li>
          <li class="nav-item" :class="{ active: selectedCategory === 'dessert' }" @click="selectedCategory = 'dessert'">

            <a class="d-flex align-items-center text-start mx-3 me-0 pb-3" data-bs-toggle="pill" href="#tab-3">
              <i class="fa fa-birthday-cake fa-2x green"></i>
              <div class="ps-3">
                <small class="text-body">Lovely</small>
                <h6 class="mt-n1 mb-0">Dessert</h6>
              </div>
            </a>
          </li>
        </ul>
        <div class="tab-content" style="width: 80%;">
          <div class="tab-pane fade show p-0 active" v-for="food in filteredFoods" :key="food._id" style="max-w
              ">
            <div class="d-flex align-items-center justify-content-left">
              <div class="d-flex">
                <img class="img-fluid rounded" :src="food.image" alt="" style="width: 170px  ">
              </div>
              <div class="d-flex">
                <div class="d-flex flex-column text-start ps-4" style="min-width: 300px;">
                  <h5 class="d-flex justify-content-between border-bottom " style="">
                    <span style="font-size:35px">{{ food.name }}</span>
                    <span style="font-size:25px" class="green">{{ food.price }} €</span>
                  </h5>
                  <small class="fst-italic">{{ food.description }}</small>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["foods"]),
    filteredFoods() {
      if (!this.selectedCategory || this.selectedCategory === "all") {
        return this.foods;
      } else {
        return this.foods.filter(
          (food) => food.category === this.selectedCategory
        );
      }
    },
  },
  data() {
    return {
      selectedCategory: "all",
    };
  },
  mounted() {
    this.$store.dispatch("fetchFoods");
  },
};
</script>
<style>
</style>
