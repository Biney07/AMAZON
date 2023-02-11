<template>
  <div class="home" >
      <div class="justify-content-center" style="display:flex;flex-wrap:wrap;margin-right:5vh; margin-left:5vh;margin-top:20px;">
         <div class="card shadow p-3 mb-5 bg-white rounded" style="width:50vh; margin:20px" v-for="dasmat in this.dasmats" :key="dasmat._id">
			<div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
        <router-link  to=""><img src="https://www.vitalux.al/wp-content/uploads/2021/06/Hotel-Domizil-in-Tubingen-by-DIA-2-730x487-1.jpg" class="img-fluid" /></router-link>	
				<a asp-action="Details">
					<div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
				</a>
			</div>
			<div class="card-body">
				<h5 class="card-title">{{ dasmat.emri }} | {{ dasmat.qyteti }}</h5>
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
       ...mapState(['dasmats'])
    },
    mounted() {
       this.$store.dispatch('fetchDasmats');
    }
}
</script>