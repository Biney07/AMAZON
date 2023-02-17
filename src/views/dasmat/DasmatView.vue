<template>
  <div class="home" >
      <div class="justify-content-center" style="display:flex;flex-wrap:wrap;margin-right:5vh; margin-left:5vh;margin-top:20px;">
         <div class="card shadow p-3 mb-5 bg-white rounded" style="width:50vh; margin:20px" v-for="dasmat in paginatedDasmats" :key="dasmat._id">
			<div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
        <router-link  :to="`/restaurantdasmatdetails/${dasmat._id}`"><img :src="dasmat.foto" alt="Photo" class="img-fluid" /></router-link>	
				<a asp-action="Details">
					<div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
				</a>
			</div>
			<div class="card-body">
				<h5 class="card-title">{{ dasmat.emri }} | {{ dasmat.qyteti }}</h5>
				<a class="btn btn-success text-white" >Shiko Detajet</a>
			</div>
		</div>
		</div>

         <div class="text-center">
              <button class="btn btn-success" :disabled="currentPage === 1" @click="currentPage--">Previous</button>
             <span v-for="pageNumber in totalPages" :key="pageNumber">
               <button class="btn btn-success" :class="{ active: pageNumber === currentPage }" @click="currentPage = pageNumber">{{ pageNumber }}</button>
             </span>
            <button class="btn btn-success" :disabled="currentPage === totalPages" @click="currentPage++">Next</button>
         </div>
   </div>
</template>


<script>
import { mapState } from 'vuex';

export default {
   data() {
      return {
         currentPage: 1
      }
      },
      computed: {
         pageSize() {
         return 6
      },
      totalPages() {
         return Math.ceil(this.dasmats.length / this.pageSize)
      },
      paginatedDasmats() {
         const startIndex = (this.currentPage - 1) * this.pageSize
         const endIndex = startIndex + this.pageSize
         return this.dasmats.slice(startIndex, endIndex)
      },
       ...mapState(['dasmats'])
    },
    mounted() {
       this.$store.dispatch('fetchDasmats');
    }
}
</script>