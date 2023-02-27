<template>
  <div class="home" >
      <div class="justify-content-center" style="display:flex;flex-wrap:wrap;margin-right:5vh; margin-left:5vh;margin-top:20px;">
         <div class="card shadow p-3 mb-5 bg-white rounded" style="width:50vh; margin:20px">
			<div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
               <img :src="dasmat.foto" alt="Photo" class="img-fluid" />
			</div>
			<div class="card-body">
				<h5 class="card-title"> Pershkrimi: {{ dasmat.emri }}</h5>
                <h5 class="card-title"> Qyteti: {{ dasmat.qyteti }}</h5>
                <h5 class="card-title"> Adresa: {{ dasmat.adresa }}</h5>
				<a class="btn btn-success text-white" >Rezervo</a>
			</div>
		</div>
		</div>
   </div>
</template>


<script>
import { mapState } from 'vuex';

export default {
      computed: {
       ...mapState(['dasmat'])
    },
    mounted() {
       this.$store.dispatch("getByIdDasmat", this.$route.params.dasmatId);
    }
}
</script>