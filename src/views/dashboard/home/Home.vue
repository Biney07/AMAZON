<template>
    <h1>Home Dashboard</h1>
    <form style="margin: auto;
  width: 40%;
 text-align: start;
  padding: 10px;" id="dhomaForm" v-on:submit.prevent="handleCreateDhome">
  <div class="mb-3">
    <label for="numri" class="form-label">Numri</label>
    <input type="number" name="numri" v-model="newDhome.numri" v-on:input="newDhome.numri = $event.target.value" class="form-control" id="numri" >
   
  </div>
  <div class="mb-3">
    <label for="pershkrimi" class="form-label">Pershkrimi</label>
    <textarea type="text" name="numri" v-model="newDhome.pershkrimi" v-on:input="newDhome.pershkrimi = $event.target.value"  class="form-control" id="pershkrimi" ></textarea>
   
  </div>


  <div class="mb-3">
    <label for="foto1" class="form-label">Foto 1</label>
    <input type="text" name="foto1" v-model="newDhome.foto1" v-on:input="newDhome.foto1 = $event.target.value"  class="form-control" id="foto1" >
   
  </div>
  <div class="mb-3">
    <label for="foto2" class="form-label">Foto 2</label>
    <input type="text" name="numri" v-model="newDhome.foto2" v-on:input="newDhome.foto2 = $event.target.value" class="form-control" id="foto2" >
   
  </div>
  <div class="mb-3">
    <label for="foto3" class="form-label">Foto 3</label>
    <input type="text" name="numri" v-model="newDhome.foto3" v-on:input="newDhome.foto3 = $event.target.value"  class="form-control" id="foto3" >
   
  </div>
  <div class="mb-3">
    <label for="cmimi" class="form-label">Cmimi</label>
    <input type="number" name="numri" v-model="newDhome.cmimi" v-on:input="newDhome.cmimi = $event.target.value"  class="form-control" id="cmimi" >
   
  </div>

  <div class="mb-3 form-check">
      <input
        type="checkbox"
        name="statusi"
        v-model="newDhome.statusi"
        class="form-check-input"
        id="statusi"
      />
      <label class="form-check-label" for="statusi">E lirë</label>
    </div>

  <div class=" mt-4">
      <button class="btn btn-lg btn-primary" id="submitButton" type="submit">Ruaj</button>
    </div>
</form>
</template>


<script>
export default {
    data(){
        return {

            newDhome : {
                numri : '',
                pershkrimi : '',
                foto1 : '',
                foto2 : '',
                foto3 : '',
                cmimi : '',
                statusi: false,
            }

        }
    }, methods: {
        async handleCreateDhome() {
            this.$store.dispatch('createDhoma', { ...this.newDhome })
        }
}
}
</script>