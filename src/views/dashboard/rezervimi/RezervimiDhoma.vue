<template>
  <div class="container">
    <form class="mt-5">
      <div class="form-group" v-if="step === 1">
        <label for="rezervim_date">Rezervim Date:</label>
        <input type="date" v-model="rezervimDate" class="form-control" :min="getCurrentDate()">

        <button @click.prevent="nextStep" class="btn btn-primary mt-3">Next</button>
      </div>
      <div v-if="step === 2">
        <label for="dhoma" style="font-family: Playfair; font-size:50px; margin:-20px 0px 20px 0px ">Zgjedh Dhomen</label>
        <div class="row">
          <div class="col-md-4 mb-4" v-for="dhoma in availableDhomat" :key="dhoma._id">
            <div class="card">
              <img :src="dhoma.foto1" :class="{ 'grayscale': numriDhomes !== dhoma.numri }" class="card-img-top"
                alt="Room Image" @click="numriDhomes = dhoma.numri">
              <div class="card-body d-flex justify-content-between">
                <div class="d-flex flex-column">
                  <h4 class="card-title" style="color:orangered; font-size:20px">Dhoma</h4>
                  <h3 class="card-title"
                    style="font-weight: bolder; font-size:40px; margin-top:-20px; font-family: Playfair;">
                    {{ dhoma.numri }}
                  </h3>
                </div>
                <p class="card-text" style="font-size:30px; margin: 10px 0px 0px 20px; font-family: Playfair; font-weight: bolder; font-size:40px; color:green">{{ dhoma.cmimi }} €</p>
              </div>

            </div>
          </div>
        </div>
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
      return this.dhomat.filter(dhoma => {
        const reservedDhoma = this.rezervimet.find(rezervim => {

          const match = parseInt(rezervim.numri_dhomes) === parseInt(dhoma.numri) && new Date(rezervim.rezervim_date).toLocaleDateString() === new Date(this.rezervimDate).toLocaleDateString();
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
    getCurrentDate() {
      let today = new Date()
      let day = today.getDate()
      let month = today.getMonth() + 1
      let year = today.getFullYear()

      if (day < 10) {
        day = '0' + day
      }

      if (month < 10) {
        month = '0' + month
      }

      return year + '-' + month + '-' + day
    },
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
  max-width: 900px;
  margin: 0 auto;
}

.card-img-top {
  max-width: 100%;
}

.grayscale {
  filter: grayscale(100%);
  transition: filter 0.5s ease-out;
}</style>
