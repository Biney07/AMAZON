<template>
<div class="form-group mt-4">
    <label for="search">Kerko:</label>
    <input type="text" v-model="searchQuery" id="search" class="form-control w-50 m-auto" placeholder="Kerko...">
</div>
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
         currentPage: 1,
         searchQuery: ''
      }
      },
      computed: {
         pageSize() {
         return 6
      },
      filteredDasmats() {
        return this.dasmats.filter(dasmat => {
            return dasmat.emri.toLowerCase().includes(this.searchQuery.toLowerCase())
                || dasmat.qyteti.toLowerCase().includes(this.searchQuery.toLowerCase())
                || dasmat.adresa.toLowerCase().includes(this.searchQuery.toLowerCase());
        });
      },
      totalPages() {
         return Math.ceil(this.filteredDasmats.length / this.pageSize)
      },
      paginatedDasmats() {
         const startIndex = (this.currentPage - 1) * this.pageSize
         const endIndex = startIndex + this.pageSize
         return this.filteredDasmats.slice(startIndex, endIndex)
      },
       ...mapState(['dasmats'])
    },
    mounted() {
       this.$store.dispatch('fetchDasmats');
    }
}
</script>