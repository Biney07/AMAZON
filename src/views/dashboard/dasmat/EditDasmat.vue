<template>
    <div class="container py-4 w-50">
  <h2 style="color:rgba(126, 239, 104, 0.8);">Ndrysho Restaurantet e Dasmave</h2>
  <form id="contactForm" v-on:submit.prevent="handleEditDasmat">

    <div class="mb-3">
      <label class="form-label" for="name">Emri</label>
      <input class="form-control" v-model="dasmat.emri" minlength="4" maxlength="100"
                 type="text" placeholder="Emri" required />
    </div>

    <div class="mb-3">
      <label class="form-label" for="Qyteti">Qyteti</label>
      <input class="form-control" v-model="dasmat.qyteti" minlength="3" maxlength="25"
                 type="text" placeholder="Qyteti" required />
    </div>

    <div class="mb-3">
      <label class="form-label" for="Address">Adresa</label>
      <input class="form-control" v-model="dasmat.adresa" minlength="6" maxlength="200"
                 type="text" placeholder="Adresa" required />
    </div>
    <div class="mb-3">
      <label class="form-label" for="Foto">Foto</label>
      <input class="form-control" v-model="dasmat.foto" minlength="8" maxlength="200"
                type="text" placeholder="Foto" required />
    </div>

    <div class="d-grid mt-4">
      <button class="btn btn-lg" id="submitButton" type="submit">Ndrysho</button>
    </div>

  </form>

</div>
</template> 


<script>
import { mapState } from "vuex";
export default {
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
  </style>