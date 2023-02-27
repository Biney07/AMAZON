<template>

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
                            <th>Veprime</th>
                            <th></th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="dhoma in this.dhomat" :key="dhoma._id">
                            <td>{{ dhoma.numri }}</td>
                            <td>{{ dhoma.pershkrimi }}</td>
                            <td>{{ dhoma.foto1 }}</td>
                            <td>{{ dhoma.foto2 }}</td>
                            <td>{{ dhoma.foto3 }}</td>
                            <td>{{ dhoma.cmimi }}</td>
                            <td><button class="btn btn-sm btn-success"><router-link class="btn-success" :to="`/dashboard/home/edit/${dhoma._id}`" >Edit</router-link></button> </td>
                            <td><button class="btn btn-sm btn-danger" @click="handleDeleteDhoma(dhoma._id)">Delete</button></td>
                            
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
</template> 


<script>
import { mapState } from 'vuex';

export default {
	computed: {
            ...mapState(['dhomat'])
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