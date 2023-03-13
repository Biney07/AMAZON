<template>
	<div class="home">




		<div class="justify-content-center"
			style="display:flex;flex-wrap:wrap;margin-right:5vh; margin-left:5vh;margin-top:20px;">




			<div class="card" style="width:50vh; margin:20px" v-for="dhoma in this.dhomat" :key="dhoma._id">
				<div class="col-md-12">
					<p class="card-text d-flex justify-content-end">
					</p>
				</div>
				<div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
					<router-link :to="`/homeDetails/${dhoma._id}`"><img :src="dhoma.foto1"
							class="img-fluid" /></router-link>
					<a asp-action="Details">
						<div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
					</a>	
				</div>
				<div class="card-body">
					<h4 class="card-title" style="color:orangered; font-size:30px">Dhoma</h4>
					<h3 class="card-title" style="font-weight: bolder; font-size:40px; margin-top:-20px; font-family: Playfair;">{{dhoma.numri}}</h3>
				
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

	methods: {

	},

}
</script>
<style>
@font-face {
	font-family: 'Playfair';
	src: url('../../public/Playfair.ttf') 
  }
.bg-custom {
	background-color: #546e7a;
}
.card {
	border: 1px solid #ddd;
	box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.15);
	transition: box-shadow 0.3s ease-in-out;
  }
  
  .card:hover {
	box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.3);
  }

</style>