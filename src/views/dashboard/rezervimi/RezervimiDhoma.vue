<template>
  <form @submit.prevent="createRezervim">
    <div>
      <label for="user_id">User Name</label>
      <p>{{ user.name }}</p>
    </div>
    <div>
      <label for="dhoma_id">Dhoma ID:</label>
      <select v-model="newRezervim.dhoma_id">
        <option v-for="dhoma in dhomat" :key="dhoma.id" :value="dhoma.id">{{ dhoma.id }}</option>
      </select>
    </div>
    <div>
      <label for="rezervim_date">Rezervim Date:</label>
      <input type="date" v-model="newRezervim.rezervim_date">
    </div>
    <button type="submit">Create Rezervim</button>
  </form>
</template>

<script>

export default {
  computed: {
 
    user() {
      const userData = JSON.parse(localStorage.getItem('userData'))
      const userUid = userData ? userData.user.uid : null;
      const userName = userData ? userData.userName : null;
      console.log(userName);
      return { uid: userUid, name: userName }; 
      
    }, 
    dhomat() {
      console.log(this.$store.state.dhomat);
      return this.$store.state.dhomat;
    }
  },
  data() {
    return {
      newRezervim: {
        user_id: '',
        dhoma_id: '',
        rezervim_date: ''
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
          dhoma_id: this.newRezervim.dhoma_id,
          rezervim_date: this.newRezervim.rezervim_date
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
