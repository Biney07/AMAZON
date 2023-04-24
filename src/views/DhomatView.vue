<template>
	<div class="home">
		<h1 style="margin-top: 20px; margin-bottom: -10px; font-size:60px; font-family:'Sofia Sans', sans-serif !important; color:gray">DHOMAT</h1>
		<div style="margin-top: 20px; display:flex; justify-content:center; flex-wrap: wrap; align-items:center">
			<div v-for="dhoma in dhomat" :key="dhoma._id">


				<ul class="cards">
					<li class="cards_item" id="item_salad">
						<div class="card">
							<div class="toppart">

								<div class="card_details"> <router-link :to="`/homeDetails/${dhoma._id}`"
										style="color:white">Shiko
										Detajet</router-link>
								</div>

								<div class="card_price">{{ dhoma.cmimi }} €</div>
							</div>
							<div class="card_image"><img :src="dhoma.foto1" alt="mixed vegetable salad in a mason jar. ">
							</div>
							<div class="card_content">
								<h2 class="card_title">Dhoma {{ dhoma.numri }}</h2>
								<div class="card_text">
									<p>{{ dhoma.pershkrimi }}</p>

								</div>
							</div>
						</div>
					</li>
				</ul>
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

.toppart {
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	top: 10px;
	position: absolute;


}


.card-deck {
	display: flex;
	flex-wrap: wrap;
	margin-right: -20px;
	margin-left: -20px;
}


.btn-primary {
	margin-top: 10px;
}

.cards_item {
	display: flex;
	padding: 1rem;
	max-width: 600px;
	margin: 0 auto;
}

.card_image {
	max-height: 250px;
	margin-top: -24px;
}

.card_image img {
	width: 100%;
	max-width: 800px;
	height: 100%;
	object-fit: cover;
}

.card_image:after {
	content: "";
	display: block;
	width: 100%;
	height: 100px;
	position: relative;
	top: -100px;
	background: linear-gradient(0deg, #091014 10%, rgba(0, 0, 0, 0) 100%);
}

.card {
	background-color: #091014;
	border-radius: 0.25rem;
	box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
	display: flex;
	flex-direction: column;
	overflow: hidden;
}

.card_content {
	padding: 1rem;
	z-index: 1;
	display: block;
}

.card_title {
	font-family: "Sofia Sans", sans-serif;
	font-size: 72px;
	line-height: 72px;
	margin-top: -50px;
	margin-bottom: 14px;
	text-shadow: black 1px 0 15px;
	color: white;
}

.card_text {
	color: #DDDACB;
	font-family: "Sofia", sans-serif;
	font-weight: 200;
}

.card_text p {
	max-width: 700px;
}

.card_price {

	padding: 0px 15px;
	color: white !important;
	font-size: 36px;
	font-weight: 400;
	background-color: rgba(0, 0, 0, 0.5);

	text-shadow: black 3px 0px 6px;
	/* add opacity property with a value between 0 and 1 */

}

.card_details {
	padding-left: 15px;
	color: white !important;
	height: 24px;
	font-size: 32px;
	font-weight: 400;
	text-shadow: black 3px 0px 6px;
}

#item_fig .card:after {
	content: "Seasonal";
	font-family: "Raleway", sans-serif;
	color: rgba(234, 225, 175, 0.8);
	font-weight: 600;
	text-transform: uppercase;
	display: block;
	width: 10ch;
	height: 1.5em;
	padding: 0.2em 0.4em;
	position: relative;
	bottom: calc(100% - 2.5em);
	left: 1em;
}
</style>