<template>
    <div class="container py-4 w-50">
  <h2 style="color:rgba(126, 239, 104, 0.8);">Kontakto</h2>
  <form id="contactForm" v-on:submit.prevent="handleCreateDasmat">

    <div class="mb-3">
      <label class="form-label" for="name">Emri</label>
      <input class="form-control" v-bind:value="newCreateDasmat.emri"
                v-on:input="newCreateDasmat.emri = $event.target.value" type="text" placeholder="Emri" data-sb-validations="required" />
    </div>

    <div class="mb-3">
      <label class="form-label" for="Qyteti">Qyteti</label>
      <input class="form-control" v-bind:value="newCreateDasmat.qyteti"
                v-on:input="newCreateDasmat.qyteti = $event.target.value" type="text" placeholder="Qyteti" data-sb-validations="required" />
    </div>

    <div class="mb-3">
      <label class="form-label" for="Address">Adresa</label>
      <input class="form-control" v-bind:value="newCreateDasmat.adresa"
                v-on:input="newCreateDasmat.adresa = $event.target.value" type="text" placeholder="Adresa" data-sb-validations="required" />
    </div>

    <div class="d-grid mt-4">
      <button class="btn btn-lg" id="submitButton" type="submit">Dergo</button>
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
                    adresa: ''
                },
            }
        },
        methods: {
            async handleCreateDasmat() {
                console.log('Dasmat qe eshte derguar -> ', this.newCreateDasmat);
                
                this.newCreateDasmat.emri = '';
                this.newCreateDasmat.qyteti = '';
                this.newCreateDasmat.adresa = '';
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
  </style>