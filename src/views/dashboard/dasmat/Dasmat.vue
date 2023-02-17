<template>

<div class="form-group mt-4">
    <label for="search">Kerko:</label>
    <input type="text" v-model="searchQuery" id="search" class="form-control w-50 m-auto" placeholder="Kerko...">
</div>
    <div class="float-start" style="margin-left:47px; margin-top:6px;">
        <a><router-link class="btn btn-success" to="/restaurantdasmat/create">Krijo</router-link></a> 
    </div>
    <div class="m-5">
            <div class="table-responsive">
                <table class="table">
                    <thead class="table-info">
                        <tr>
                            <th>Emri</th>
                            <th>Qyteti</th>
                            <th>Adresa</th>
                            <th>Foto</th>
                            <th>Veprim</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="dasmat in paginatedDasmats" :key="dasmat._id">
                            <td>{{ dasmat.emri }}</td>
                            <td>{{ dasmat.qyteti }}</td>
                            <td>{{ dasmat.adresa }}</td>
                            <td><img :src="dasmat.foto" alt="Photo" style="width: 70px; height: 70px;"/></td>
                            <td><button class="btn btn-sm btn-success"><router-link class="btn-success" :to="`/restaurantdasmat/edit/${dasmat._id}`" >Edit</router-link></button> | <button class="btn btn-sm btn-danger" @click="handleDeleteDasmat(dasmat._id)">Delete</button></td>

                        </tr>
                    </tbody>
                </table>
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
    },
  methods: {
    handleDeleteDasmat(dasmatId) {
      this.$swal({
        title: "Jeni te sigurt qe deshironi te fshini?",
        text: "A jeni te sigurt? Pasi qe nuk mund te kthehet me!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "red",
        confirmButtonText: "Po, Deshiroj ta fshij!",
        closeOnConfirm: true
    }).then((result) => {
        if (result.value) {
            this.$store.dispatch('deleteDasmat', dasmatId)
        this.$swal(
            'I fshire!',
            'Eshte fshire me sukses.',
            'success'
        )
        }
    });
    },
  },
};
</script>