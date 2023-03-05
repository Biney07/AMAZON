<template>
  <div>
    <div class="btn-group" role="group">
      <button
        type="button"
        class="btn btn-outline-success mx-2 rounded-pill"
        :class="{ active: selectedCategory === 'appetizers' }"
        @click="selectedCategory = 'appetizers'"
      >
        Appetizers
      </button>
      <button
        type="button"
        class="btn btn-outline-success mx-2 rounded-pill"
        :class="{ active: selectedCategory === 'main dish' }"
        @click="selectedCategory = 'main dish'"
      >
        Main Dish
      </button>
      <button
        type="button"
        class="btn btn-outline-success mx-2 rounded-pill"
        :class="{ active: selectedCategory === 'dessert' }"
        @click="selectedCategory = 'dessert'"
      >
        Dessert
      </button>
        <button type="button"   class="btn btn-outline-success mx-2 rounded-pill" :class="{ active: selectedCategory === '' }" @click="selectedCategory = ''">All</button>
    </div>

    <div class="flexbox">
      <div v-for="food in filteredFoods" :key="food._id">
        <div
          class="food-card"
          :style="{
            backgroundImage: 'url(' + food.image + ')',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }"
        >
          <div class="shadow-background">
            <div class="food-card-content">
              <div class="heading show">
                <h2>{{ food.name }}</h2>
                <div class="shadow"></div>
              </div>
              <div class="heading author show">
                <h5 style="text-transform: capitalize; margin-top: -7px">
                  {{ food.category }}
                </h5>
                <div class="shadow"></div>
              </div>
              <div class="hover-content">
                <div
                  class="food-card-properties"
                  style="position: absolute; bottom: 0; right: 0"
                >
                  <div>
                    <i class="fa fa-money"></i>
                    <h1>{{ food.price }} €</h1>
                  </div>
                </div>

                <div class="content">
                  {{ food.description }}
                  <div class="show-less"></div>
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
@import url("https://fonts.googleapis.com/css?family=Open+Sans&display=swap");
html {
  font-family: "Open Sans", sans-serif;
  height: 100%;
  width: 100%;
  background: whitesmoke;
}
.shadow-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.shadow-background::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  background-color: rgba(0, 0, 0, 0.5);
}

.shadow-background:hover::before {
  opacity: 1;
}
div.show {
  position: relative;
  overflow: hidden;
  width: fit-content;
}
.heading > h2 {
  margin: 0;
  padding: 4px 0;
  line-height: 1.125;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 200px;
  color: white; /* add this line */
}
div.show > h1,
div.show > h2,
div.show > h3,
div.show > h4,
div.show > h5,
div.show > p {
  animation: 1s show-slow ease-in;
  color: white !important;
}
.shadow {
  position: absolute;
  bottom: 0;
  height: 15px;
  width: 100%;
  background: #bbb;
  transform: translateY(101%);
}
.show > .shadow {
  animation: zoop 0.8s ease-in;
}
@keyframes zoop {
  0% {
    transform: translateY(101%);
  }
  70% {
    transform: translateY(40%);
  }
  100% {
    transform: translateY(-100%);
  }
}
@keyframes show-slow {
  0% {
    opacity: 0;
  }
  60% {
    opacity: 0;
    transform: translateY(100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0%);
  }
}
.heading > * {
  margin: 0;
  padding: 4px 0;
  line-height: 1.125;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 200px;
}
.author > h5 {
  line-height: 1.25;
}
.content {
  opacity: 0.85;
  font-size: 17px;
  height: 15vh;
  overflow: hidden;
  line-height: 1.66;
  position: relative;
  padding-top: 8px;
}

.food-card {
  position: relative;
  width: 350px;
  height: 350px;
  margin: 20px 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px 1px #00000045;
  background: rgba(0, 0, 0, 0.8) no-repeat right top;
  background-size: auto 400px;
  color: white;
  overflow: hidden;
  z-index: 1;
}

.flexbox {
  display: flex;
  justify-content: center;
  vertical-align: middle;
  flex-wrap: wrap;
  width: 95%;
  margin: 40px 40px 40px 40px;
}
.food-card-content {
  padding: 20px 30px;
  transition: 0.5s ease all;
  color: white;
}
.hover-content {
  text-align: left;
  max-height: 0;
  transition: 0.5s ease-out all;
  overflow: hidden;
}
.food-card:hover .hover-content {
  max-height: 300px;
}
.food-card:hover .food-card-content {
  max-height: 300px;
}
.food-card-properties {
  text-align: right;
  padding: 10px 0px 0px 0px;
  z-index: 1;
}
.food-card-properties > div {
  border-right: 1px solid #ffffff45;
  width: fit-content;
  padding: 0 10px;
  display: inline-block;
  z-index: 1;
}
.food-card-properties > div:last-child {
  border-right: none;
  z-index: 1;
}
.food-card-properties > div > i {
  font-size: 16px;
  z-index: 1;
}
.food-card-properties > div > p {
  font-size: 10px;
  margin: 0;
  z-index: 1;
}

.food-card {
  transform: scale(0.9);
  transition: 0.5s all ease;
}
.food-card:hover {
  transform: scale(1);
  background-size: auto 310px;
}
.btn-group {
  margin: 20px 0px -50px 0px;
}
</style>
