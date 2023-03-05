<template>
  <div>
    <h1>Create Menu</h1>
    <form style="margin: auto; width: 40%; text-align: start; padding: 10px">
      <div>
        <label for="name">Name</label>
        <input type="text" id="name" v-model="name" />
      </div>
      <div>
        <label for="appetizer">Appetizer</label>
        <select id="appetizer" v-model="appetizer">
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
        <select id="mainDish" v-model="mainDish">
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
        <select id="dessert" v-model="dessert">
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
        <input type="text" id="price" v-model="price" />
      </div>
      <div>
        <label for="extra">Extra</label>
        <input type="text" id="extra" v-model="extra" />
      </div>
      <button type="submit" @click.prevent="createMenu">Create Menu</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      appetizer: "",
      mainDish: "",
      dessert: "",
      price: 0,
      extra: "",
      foods: [],
    };
  },
  created() {
    this.fetchFoods();
  },
  methods: {
    async fetchFoods() {
      const res = await fetch("http://localhost:3000/foods");
      const foods = await res.json();
      this.foods = foods;
    },
    async createMenu() {
      const menu = {
        name: this.name,
        appetizer: this.appetizer,
        main_dish: this.mainDish,
        dessert: this.dessert,
        price: this.price,
        extra: this.extra,
      };
      const res = await fetch("http://localhost:3000/menute", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(menu),
      });
      const data = await res.json();
      console.log(data);
      this.name = "";
      this.appetizer = "";
      this.mainDish = "";
      this.dessert = "";
      this.price = 0;
      this.extra = "";
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
