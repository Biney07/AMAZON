<template>
    <div>
        <h1>Edit Food Item</h1>
        <form id="editForm" @submit.prevent="handleEditFood"
            style="margin: auto; width: 40%; text-align: start; padding: 10px">
            <div class="mb-3">
                <label for="name" class="form-label">Name</label>
                <input type="text" name="name" v-model="foodModel.name" class="form-control" id="name" />
            </div>
            <div class="mb-3">
                <label for="category" class="form-label">Category</label>
                <select name="category" v-model="foodModel.category" class="form-control" id="category">
                    <option value="">Select a category</option>
                    <option value="appetizers">Appetizers</option>
                    <option value="main dish">Main Dish</option>
                    <option value="dessert">Dessert</option>
                </select>
            </div>
            <div class="mb-3">
                <label for="description" class="form-label">Description</label>
                <textarea name="description" v-model="foodModel.description" class="form-control"
                    id="description"></textarea>
            </div>
            <div class="mb-3">
                <label for="price" class="form-label">Price</label>
                <input type="number" name="price" v-model="foodModel.price" class="form-control" id="price" />
            </div>
            <div class="mb-3">
                <label for="image" class="form-label">Image URL</label>
                <input type="text" name="image" v-model="foodModel.image" class="form-control" id="image" />
            </div>
            <div class="mb-3 form-check">
                <input type="checkbox" name="status" v-model="foodModel.status" class="form-check-input" id="status" />
                <label class="form-check-label" for="status">Available</label>
            </div>
            <div class="mt-4">
                <button class="btn btn-lg btn-primary" type="submit">
                    Save Changes
                </button>
            </div>
        </form>
    </div>
</template>
<script>
import { mapState } from "vuex";
export default {
    data() {
        return {

        }
    },

    computed: {
        ...mapState(["foods"]),
    },
    mounted() {
        this.$store.dispatch("getByIdFoods", this.$route.params.foodId);
    },
    methods: {
        async handleEditDhoma() {
            this.$store.dispatch('updateFood', { ...this.food });

            this.$router.back();
        }
    }
}
</script>

<style scoped>
button,
.info {
    background-color: rgba(126, 239, 104, 0.8);
    color: white;
}

button:hover {
    background-color: rgba(95, 214, 71, 0.8);
    color: black;
}

.info:hover {
    background-color: rgba(95, 214, 71, 0.8);
    color: black;
}

input {
    border-color: rgba(126, 239, 104, 0.8);
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px rgba(126, 239, 104, 0.6);
}

select {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    background-color: transparent;
    border: none;
    font-size: 16px;
    padding: 10px;
    width: 100%;
    height: 40px;
    border-radius: 5px;
    box-shadow: 0 2px 3px rgba(126, 239, 104, 0.8);
}

select:focus {
    outline: none;
    box-shadow: 0 2px 3px rgba(126, 239, 104, 0.8);
}

select option {
    font-size: 16px;
    background-color: white;
    color: black;
}

select option:hover {
    background-color: rgba(126, 239, 104, 0.8);
}

select option:checked {
    background-color: rgba(126, 239, 104, 0.8);
    color: white;
}</style>