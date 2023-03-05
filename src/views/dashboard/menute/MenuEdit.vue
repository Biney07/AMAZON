<template>
  <div>
    <h1>Update Menu</h1>

    <form style="margin: auto; width: 40%; text-align: start; padding: 10px">
      <div>
        <label for="name">Name</label>
        <input type="text" id="name" v-model="menu.name" />
      </div>
      <div>
        <label for="appetizer">Appetizer</label>
        <select id="appetizer" v-model="menu.appetizer">
          <option
            v-for="food in foods.filter(
              (food) => food.category == 'appetizers'
            )"
            :key="food._id"
            :value="food._id"
          >
            {{ food.name }}
          </option>
        </select>

      </div>
      <div>
        <label for="mainDish">Main Dish</label>
        <select id="mainDish" v-model="menu.main_dish">
          <option
            v-for="food in foods.filter(
              (food) => food.category === 'main dish'
            )"
            :key="food._id"
            :value="food._id"
          >
            {{ food.name }}
          </option>
        </select>
      </div>
      <div>
        <label for="dessert">Dessert</label>
        <select id="dessert" v-model="menu.dessert">
          <option
            v-for="food in foods.filter((food) => food.category === 'dessert')"
            :key="food._id"
            :value="food._id"
          >
            {{ food.name }}
          </option>
        </select>
      </div>
      <div>
        <label for="price">Price</label>
        <input type="text" id="price" v-model="menu.price" />
      </div>
      <div>
        <label for="extra">Extra</label>
        <input type="text" id="extra" v-model="menu.extra" />
      </div>
      <button type="submit" @click.prevent="updateMenu">Update Menu</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menu: {},
      foods: [],
    };
  },

  created() {
    const menuId = this.$route.params.menuId;
    console.log(menuId);
    this.getMenuById(menuId);
    this.fetchFoods();
  },
  methods: {
    async getMenuById(menuId) {
      await this.$store.dispatch("getMenuById", menuId);
      this.menu = this.$store.state.menus;
    },
    async fetchFoods() {
      await this.$store.dispatch("fetchFoods");
      this.foods = this.$store.state.foods;
      console.log(this.foods);
    },
    async updateMenu() {
      const menuData = { ...this.menu };
      const menuId = this.$route.params.menuId;
      try {
        await this.$store.dispatch("updateMenu", { menuId, menuData });
        this.$router.push("/menute");
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
<style>
label {
  display: block;
  margin-bottom: 0.5rem;
}
input[type="text"],
select {
  display: block;
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border-radius: 0.25rem;
  border: 1px solid #ccc;
  box-sizing: border-box;
}
button[type="submit"] {
  background-color: #4caf50;
  color: white;
  padding: 0.5rem;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
}
button[type="submit"]:hover {
  background-color: #3e8e41;
}
</style>
