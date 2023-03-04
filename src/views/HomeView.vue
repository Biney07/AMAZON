<template>

  <div class="home" >




<div class="justify-content-center" style="display:flex;flex-wrap:wrap;margin-right:5vh; margin-left:5vh;margin-top:20px;" >
	

		

    <div class="card" style="width:50vh; margin:20px" v-for="dhoma in this.dhomat" :key="dhoma._id">
			<div class="col-md-12">
				<p class="card-text d-flex justify-content-end">
					<a class="text-dark float-right fs-3 " style="padding-left:5px;" ><i class="bi bi-pencil-square text-primary"></i></a>
					<a class="text-dark float-right fs-3" style="padding-left:5px;"><i class="bi bi-trash text-danger"></i></a>
				</p>
			</div>
			<div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
        <router-link  :to="`/homeDetails/${dhoma._id}`"><img :src="dhoma.foto1" class="img-fluid" /></router-link>	
				<a asp-action="Details">
					<div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
				</a>
			</div>
			<div class="card-body">
				<h5 class="card-title">Dhoma {{ dhoma.numri }}</h5>

				<a class="btn btn-success text-white" :class="{ 'btn-danger': !dhoma.statusi, 'disabled': !dhoma.statusi }" :disabled="!dhoma.statusi">
  <i class="bi bi-cart-plus"></i> Rezervo
</a>

			</div>

		</div>
    
    


		</div>

   
  </div>
</template>

<script>

import { mapState } from 'vuex';
export default {
	name: 'HomeView',
	computed: {
            ...mapState(['dhomat'])
        },
        mounted() {
            this.$store.dispatch('fetchDhomat');
        },

  methods:{
	
  },

}
</script>
<style>
.bg-custom {
background-color: #546e7a;
}
</style>