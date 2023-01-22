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
                        <tr>
                            <td>Enes</td>
                            <td>enes@gmail.com</td>
                            <td>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</td>
                            <td><button class="btn btn-sm btn-danger" @click="showAlert">Delete</button></td>
                            
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
</template> 


<script>
export default {
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