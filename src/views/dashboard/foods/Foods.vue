<template>
  <div>
    <h1>Food Dashboard</h1>
    <form id="foodForm" @submit.prevent="handleCreateFood"
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
        <textarea name="description" v-model="foodModel.description" class="form-control" id="description"></textarea>
      </div>
      <div class="mb-3">
        <label for="price" class="form-label">Price</label>
        <input type="number" name="price" v-model="foodModel.price" class="form-control" id="price" />
      </div>
      <div class="mb-3">
        <label for="image" class="form-label">Image</label>
        <input type="file" name="image" v-on:change="onFileChange" class="form-control" id="image" accept="image/*">
      </div>

      <div class="mb-3 form-check">
        <input type="checkbox" name="status" v-model="foodModel.status" class="form-check-input" id="status" />
        <label class="form-check-label" for="status">Available</label>
      </div>
      <div class="mt-4">
        <button class="btn btn-lg btn-primary" type="submit">
          Create Food
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const storage = getStorage();

export default {
  data() {
    return {
      foodModel: {
        name: "",
        category: "",
        description: "",
        price: "",
        image: "",
        status: true,
      },
    };
  },
  methods: {
    onFileChange(event) {
      this.foodModel.image = event.target.files[0];
    },
    async handleCreateFood() {
      // Upload the image file to Firebase Storage
      console.log(this.foodModel.image);
      const storageRef = ref(storage, 'images/' + this.foodModel.image.name);
      console.log(storage);
      console.log(storageRef);
      const uploadTask = uploadBytesResumable(storageRef, this.foodModel.image);

      uploadTask.on('state_changed',
        (snapshot) => {
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
          switch (snapshot.state) {
            case 'paused':
              console.log('Upload is paused');
              break;
            case 'running':
              console.log('Upload is running');
              break;
          }
        },
        (error) => {
          // Handle error uploading image file
          console.error(error);
        },
        async () => {
          // Upload completed successfully, get the download URL
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          console.log('File available at', downloadURL);

          // Set the image URL in the food model
          this.foodModel.image = downloadURL;
          console.log( this.foodModel);
          // Call the action to create a new food item with the form data
          this.$store.dispatch("createFood", { ...this.foodModel });

          // Reset the form data to empty strings
          this.foodModel = {
            name: "",
            category: "",
            description: "",
            price: "",
            image: "",
            imageURL: "",
            status: true,
          };
        }
      );
    },
  },
};
</script>

<style scoped>
button,
.info {
  background-color: rgba(126, 239, 104, 0.8);
  color: white;
  border: none;
}

button:hover {
  background-color: rgba(95, 214, 71, 0.8);
  color: black;
}

.info:hover {
  background-color: rgba(0, 0, 0, 0.8);
  color: black;
}

textarea,
input {
  border-color: rgba(0, 0, 0, 0.8);
 
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
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.8);
}

select:focus {
  outline: none;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.8);
}

select option {
  font-size: 16px;
  background-color: white;
  color: black;
}

select option:hover {
  background-color: rgba(0, 0, 0, 0.8);
}

select option:checked {
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
}
</style>