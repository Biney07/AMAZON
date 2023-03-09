<template>
  <form @submit.prevent="createRezervim">
    <div>
      <label for="user_id">User ID:</label>
      <select v-model="newRezervim.user_id">
        <option v-for="user in users" :key="user.id" :value="user.id">{{ user.id }}</option> 
      </select>
    </div>
    <div>
      <label for="dhoma_id">Dhoma ID:</label>
      <select v-model="newRezervim.dhoma_id">
        <option v-for="dhoma in dhomat" :key="dhoma.id" :value="dhoma.id">{{ dhoma.id }}</option>
      </select>
    </div>
    <button type="submit">Create Rezervim</button>
  </form>
</template>

<script>
export default {
  computed: {
    users() {
      console.log(this.$store.state.user);
      return this.$store.state.user;
    },
    dhomat() {
      return this.$store.state.dhomat;
    }
  },
  data() {
    return {
      newRezervim: {
        user_id: '',
        dhoma_id: ''
      }
    }
  },
  methods: {
    createRezervim() {
      const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      user_id: this.userId,
      dhoma_id: this.dhomaId,
    })
  };
  fetch('http://localhost:3000/rezervimidhomes', requestOptions)
    .then(response => response.json())
    .then(data => {
      // Handle success
      console.log(data);
    })
    .catch(error => {
      // Handle error
      console.error(error);
    });
    }
  }
}
</script>
