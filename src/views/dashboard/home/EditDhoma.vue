<template>
    <div class="container py-4 w-50">
      <h2 style="color:rgba(126, 239, 104, 0.8);">Ndrysho Dhomen</h2>
      <form id="contactForm" v-on:submit.prevent="handleEditDhoma">
  
        <div class="mb-3">
          <label class="form-label" for="numri">Numri</label>
          <input class="form-control" v-model="dhomat.numri" type="number" placeholder="Numri" required />
        </div>
  
        
  
        <div class="mb-3">
          <label class="form-label" for="pershkrimi">Pershkrimi</label>
          <input class="form-control" v-model="dhomat.pershkrimi" minlength="6" maxlength="200" type="text" placeholder="Pershkrimi" required />
        </div>
  
        <div class="mb-3">
          <label class="form-label" for="foto1">Foto 1</label>
          <input class="form-control" v-model="dhomat.foto1" minlength="8" maxlength="200" type="text" placeholder="Foto1" required />
        </div>
        <div class="mb-3">
          <label class="form-label" for="foto2">Foto 2</label>
          <input class="form-control" v-model="dhomat.foto2" minlength="8" maxlength="200" type="text" placeholder="Foto2" required />
        </div>
        <div class="mb-3">
          <label class="form-label" for="foto3">Foto 2</label>
          <input class="form-control" v-model="dhomat.foto3" minlength="8" maxlength="200" type="text" placeholder="Foto3" required />
        </div>

        <div class="mb-3">
          <label class="form-label" for="cmimi">Cmimi</label>
          <input class="form-control" v-model="dhomat.cmimi"  type="number" placeholder="Cmimi" required />
        </div>
  
        
      <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input" id="statusi" v-model="dhomat.statusi">
        <label class="form-check-label" for="statusi">E lirë</label>
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
      
      }
    },
  
    computed: {
      ...mapState(["dhomat"]),
    },
    mounted() {
      this.$store.dispatch("getByIdDhomat", this.$route.params.dhomaId);
    },
    methods: {
        async handleEditDhoma() {
            this.$store.dispatch('updateDhoma', { ...this.dhomat });
            
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