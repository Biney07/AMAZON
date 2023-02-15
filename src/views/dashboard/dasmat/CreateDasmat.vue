<template>
    <div class="container py-4 w-50">
  <h2 style="color:rgba(126, 239, 104, 0.8);">Krijo Restaurantet e Dasmave</h2>
  <form id="contactForm" v-on:submit.prevent="handleCreateDasmat">

    <div class="mb-3">
      <label class="form-label" for="name">Emri</label>
      <input class="form-control" v-bind:value="newCreateDasmat.emri" minlength="4" maxlength="100"
                v-on:input="newCreateDasmat.emri = $event.target.value" type="text" placeholder="Emri" required />
    </div>

    <div class="mb-3">
      <label class="form-label" for="Qyteti">Qyteti</label>
        <select id="Qyteti" v-model="selectedQyteti" v-bind:value="newCreateDasmat.qyteti" v-on:input="newCreateDasmat.qyteti = $event.target.value">
          <option v-for="qy in Qytetet" :value="qy.name" :key="qy.name">{{ qy.name }}</option>
        </select>
    </div>

    <div class="mb-3">
      <label class="form-label" for="Address">Adresa</label>
      <input class="form-control" v-bind:value="newCreateDasmat.adresa" minlength="6" maxlength="200"
                v-on:input="newCreateDasmat.adresa = $event.target.value" type="text" placeholder="Adresa" required />
    </div>

    <div class="mb-3">
      <label class="form-label" for="foto">Foto</label>
      <input class="form-control" v-bind:value="newCreateDasmat.foto" minlength="8" maxlength="200"
                v-on:input="newCreateDasmat.foto = $event.target.value" type="text" placeholder="Foto" required />
    </div>

    <div class="d-grid mt-4">
      <button class="btn btn-lg" id="submitButton" type="submit">Krijo</button>
    </div>

  </form>

</div>
</template> 


<script>
export default {
        data() {
            return {
                newCreateDasmat: {
                    emri: '',
                    qyteti: '',
                    adresa: '',
                    foto: ''
                },
                allDasmats: this.$store.state.dasmats,
                Qytetet: [
                    { name: 'Podujeve' },
                    { name: 'Prishtina' },
                    { name: 'Prizren' },
                    { name: 'Gjilan' },
                    { name: 'Peje'},
                    { name: 'Gjakove'},
                    { name: 'Ferizaj'},
                    { name: 'Mitrovic'},
                ],
                selectedQyteti: ''
            } 
        },
        methods: {
            async handleCreateDasmat() {
            this.$store.dispatch('createDasmat', { ...this.newCreateDasmat }) 
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