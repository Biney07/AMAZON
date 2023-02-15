<template>
  <div class="container py-4 w-50">
    <h2 style="color:rgba(126, 239, 104, 0.8);">Ndrysho Restaurantin e Dasmave</h2>
    <form id="contactForm" v-on:submit.prevent="handleEditDasmat">

      <div class="mb-3">
        <label class="form-label" for="name">Emri</label>
        <input class="form-control" v-model="dasmat.emri" type="text" placeholder="Emri" required />
      </div>

      <div class="mb-3">
        <label class="form-label" for="Qyteti">Qyteti</label>
        <select id="Qyteti" v-model="dasmat.qyteti">
          <option v-for="qy in Qytetet" :value="qy.name" :key="qy.name">{{ qy.name }}</option>
        </select>
      </div>

      <div class="mb-3">
        <label class="form-label" for="Address">Adresa</label>
        <input class="form-control" v-model="dasmat.adresa" minlength="6" maxlength="200" type="text" placeholder="Adresa" required />
      </div>

      <div class="mb-3">
        <label class="form-label" for="foto">Foto</label>
        <input class="form-control" v-model="dasmat.foto" minlength="8" maxlength="200" type="text" placeholder="Foto" required />
      </div>

      <div class="d-grid mt-4">
        <button class="btn btn-lg" id="submitButton" type="submit">Ruaj</button>
      </div>

    </form>

  </div>
</template>


<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      Qytetet: [
        { name: 'Podujeve' },
        { name: 'Prishtina' },
        { name: 'Prizren' },
        { name: 'Gjilan' },
        { name: 'Peje' },
        { name: 'Gjakove' },
        { name: 'Ferizaj' },
        { name: 'Mitrovic' },
      ],
      selectedQyteti: ''
    }
  },

  computed: {
    ...mapState(["dasmat"]),
  },
  mounted() {
    this.$store.dispatch("getByIdDasmat", this.$route.params.dasmatId);
  },
  methods: {
      async handleEditDasmat() {
          this.$store.dispatch('updateDasmat', { ...this.dasmat });
          
          this.$router.back();
      }
  }
  }
</script>


<style scoped>
  button, .info{
    background-color: rgba(126, 239, 104, 0.8);
    color: white;
  }
  button:hover{
    background-color: rgba(95, 214, 71, 0.8);
    color: black;
  }
  .info:hover{
    background-color: rgba(95, 214, 71, 0.8);
    color: black;
  }
  input{
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
}
  </style>