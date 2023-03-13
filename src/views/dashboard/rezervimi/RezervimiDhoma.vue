<template>
  <div class="container">
    <form class="mt-5">
      <div class="form-group" v-if="step === 1">
        <label for="rezervim_date">Rezervim Date:</label>
        <input type="date" v-model="rezervimDate" class="form-control">
        <button @click.prevent="nextStep" class="btn btn-primary mt-3">Next</button>
      </div>
      <div class="form-group" v-if="step === 2">
        <label for="dhoma">Dhoma:</label>
        <select id="dhoma" v-model="numriDhomes" class="form-control">
          <option v-for="dhoma in availableDhomat" :key="dhoma.id" :value="dhoma.numri">{{ dhoma.numri }}</option>
        </select>
        <button @click.prevent="prevStep" class="btn btn-secondary mt-3 mr-3">Previous</button>
        <button @click.prevent="createRezervim" class="btn btn-primary mt-3">Create Rezervim</button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['dhomat']),
    user() {
      const userData = JSON.parse(localStorage.getItem('userData'))
      const userUid = userData ? userData.user.uid : null;
      const userName = userData ? userData.userName : null;
      return { uid: userUid, name: userName };
    },
    availableDhomat() {
      // Filter out dhomat that are already reserved for the selected date
      return this.dhomat.filter(dhoma => {
        const reservedDhoma = this.rezervimet.find(rezervim => {
          
          const match = parseInt(rezervim.numri_dhomes) === parseInt(dhoma.numri)  && new Date(rezervim.rezervim_date).toLocaleDateString() === new Date(this.rezervimDate).toLocaleDateString();
          console.log(`match: ${match}, numri_dhomes: ${rezervim.numri_dhomes}, dhoma.numri: ${dhoma.numri}, rezervim_date: ${new Date(rezervim.rezervim_date).toLocaleDateString()}, this.rezervimDate: ${new Date(this.rezervimDate).toLocaleDateString()}`);
   
          return match;
        });
        console.log(reservedDhoma);
        return !reservedDhoma;
      });
    }
  },
  mounted() {
    this.fetchRezervimet();
  },
  data() {
    return {
      step: 1,
      rezervimet: null,
      rezervimDate: new Date(),
      numriDhomes: ''
    }
  },
  methods: {
    fetchRezervimet() {
      fetch('http://localhost:3000/rezervimidhomes')
        .then(response => {
          console.log(response); // log the response object
          return response.json();
        })
        .then(data => {
          this.rezervimet = data;
          console.log(this.rezervimet);
        })
        .catch(error => {
          console.error(error);
        });
    },
    createRezervim() {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          user_id: this.user.uid,
          numri_dhomes: this.numriDhomes,
          rezervim_date: this.rezervimDate
        })
      };
      console.log(requestOptions);
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
    },
    nextStep() {
      if (this.rezervimDate !== '') {
        this.step = 2;
      } else {
        alert('Please select a rezervim date.');
      }
    },
    prevStep() {
      this.step = 1;
    }
  },
  created() {
    this.$store.dispatch('fetchDhomat');
  }
}
</script>

<style scoped>
.container {
  max-width: 600px;
  margin: 0 auto;
}
</style>
