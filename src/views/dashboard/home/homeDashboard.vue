<template>

<div class="form-group mt-4">
    <label for="search">Kerko:</label>
    <input type="text" v-model="searchQuery" id="search" class="form-control w-50 m-auto" placeholder="Kerko...">
</div>
    <div class="float-start" style="margin-left:47px; margin-top:6px;">
        <a><router-link class="btn btn-success" to="/dashboard/home/Home">Krijo</router-link></a>
      
    </div>
    <div class="m-5">
            <div class="table-responsive">
                <table class="table">
                    <thead class="table-info">
                        <tr>
                            <th>Dhoma</th>
                            <th>Pershkrimi</th>
                            <th>Foto 1</th>
                            <th>Foto 2</th>
                            <th>Foto 3</th>
                            <th>Cmimi</th>
                            <th>Statusi</th>
                            <th>Veprime</th>
                            <th></th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="dhoma in this.paginatedDhomat" :key="dhoma._id">
                            <td>{{ dhoma.numri }}</td>
                            <td>{{ dhoma.pershkrimi }}</td>
                            <td>{{ dhoma.foto1 }}</td>
                            <td>{{ dhoma.foto2 }}</td>
                            <td>{{ dhoma.foto3 }}</td>
                            <td>{{ dhoma.cmimi }}</td>
                            <td>{{ dhoma.statusi ? 'e Lirë' : 'e Zënë' }}</td>
                            <td><button class="btn btn-sm btn-success"><router-link class="btn-success" :to="`/dashboard/home/edit/${dhoma._id}`" >Edit</router-link></button> </td>
                            <td><button class="btn btn-sm btn-danger" @click="handleDeleteDhoma(dhoma._id)">Delete</button></td>
                            
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="text-center">
              <button class="btn btn-success" :disabled="currentPage === 1" @click="currentPage--">Previous</button>
             <span v-for="pageNumber in totalPages" :key="pageNumber">
               <button class="btn btn-success" :class="{ active: pageNumber === currentPage }" @click="currentPage = pageNumber">{{ pageNumber }}</button>
             </span>
            <button class="btn btn-success" :disabled="currentPage === totalPages"  @click="currentPage++">Next</button>
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
            ...mapState(['dhomat']),
            pageSize() {
        return 5
    },
    filteredDhomat() {
  return this.dhomat.filter(dhoma => {
    return dhoma.pershkrimi.toString().includes(this.searchQuery.toLowerCase());
  });
},
totalPages() {
        return Math.ceil(this.filteredDhomat.length / this.pageSize)
    },
    paginatedDhomat() {
        const startIndex = (this.currentPage - 1) * this.pageSize
        const endIndex = startIndex + this.pageSize
        return this.filteredDhomat.slice(startIndex, endIndex)
    },
        },
        mounted() {
            this.$store.dispatch('fetchDhomat');
        },
  methods: {
handleDeleteDhoma(dhomaId) {
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
        this.$store.dispatch('deleteDhoma', dhomaId)
        this.$swal(
            'I fshire!',
            'Eshte fshire me sukses.',
            'success'
        )
        }
    })
    }, 
  },

};
</script>