<template>
    <div class="d-flex justify-content-center align-items-center m-5">
            <div class="table-responsive">
                <table class="table">
                    <thead class="table-info">
                        <tr>
                            <th>Emri</th>
                            <th>Email</th>
                            <th>Mesazhi</th>
                            <th>Veprim</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="contact in this.contacts" :key="contact._id">
                            <td>{{ contact.emri }}</td>
                            <td>{{ contact.email }}</td>
                            <td>{{ contact.mesazhi }}</td>
                            <td><button class="btn btn-sm btn-danger" @click="showAlert">Delete</button></td>
                            
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
            ...mapState(['contacts'])
        },
        mounted() {
            this.$store.dispatch('fetchContacts');
        },
  methods: {
    showAlert() {
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