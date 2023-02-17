<template>
    <div class="m-5">
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
                        <tr v-for="contact in paginatedContacts" :key="contact._id">
                            <td>{{ contact.emri }}</td>
                            <td>{{ contact.email }}</td>
                            <td>{{ contact.mesazhi }}</td>
                            <td><button class="btn btn-sm btn-danger" @click="handleDeleteContact(contact._id)">Delete</button></td>
                            
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
            currentPage: 1
        }
        },
        computed: {
            pageSize() {
            return 6
        },
        totalPages() {
            return Math.ceil(this.contacts.length / this.pageSize)
        },
        paginatedContacts() {
            const startIndex = (this.currentPage - 1) * this.pageSize
            const endIndex = startIndex + this.pageSize
            return this.contacts.slice(startIndex, endIndex)
        },
            ...mapState(['contacts'])
        },
        mounted() {
            this.$store.dispatch('fetchContacts');
        },
  methods: {
   handleDeleteContact(contactId) {
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
        this.$store.dispatch('deleteContact', contactId)
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