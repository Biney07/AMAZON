<template>
  <div class="menu-grid">
    <h1>Menus</h1>
    <div class="menu-cards">
      <div v-for="menu in menus" :key="menu._id" class="menu-card">
        <div class="menu-card-header">
          <h2>{{ menu.name }}</h2>
        </div>
        <div class="menu-card-body">
          <div class="menu-card-column">
            <h3>Appetizer</h3>
            <p>{{ getMenuFoodName(menu.appetizer) }}</p>
          </div>
          <div class="menu-card-column">
            <h3>Main Dish</h3>
            <p>{{ getMenuFoodName(menu.main_dish) }}</p>
          </div>
          <div class="menu-card-column">
            <h3>Dessert</h3>
            <p>{{ getMenuFoodName(menu.dessert) }}</p>
          </div>
          <div class="menu-card-column">
            <h3>Price</h3>
            <p>{{ menu.price }}</p>
          </div>
          <div class="menu-card-column">
            <h3>Extra</h3>
            <p>{{ menu.extra }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menus: [],
      foods: [],
    };
  },
  async created() {
    const res = await fetch("http://localhost:3000/menute");
    const menus = await res.json();
    this.menus = menus;
    this.fetchFoods();
  },
  methods: {
    async fetchFoods() {
      const res = await fetch("http://localhost:3000/foods");
      const foods = await res.json();
      this.foods = foods;
    },
    getMenuFoodName(foodId) {
      const food = this.foods.find((food) => food._id === foodId._id);
      return food ? food.name : "Unknown";
    },
  },
};
</script>
<style>

.menu-cards {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.menu-card {
  border: 1px solid gray;
  border-radius: 4px;
  margin: 10px;
  width: 20%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
}

.menu-card-header {
  background-color: white;
  color: green;
  padding: 10px;
}

.menu-card-body {
  background-color: white;
  color: green;
  padding: 10px;
}

.menu-card-column {
  flex-basis: 30%;
  text-align: center;
}
</style>
