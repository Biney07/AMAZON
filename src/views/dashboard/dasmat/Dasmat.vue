<template>

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
                            <th>Veprim</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Amazon Hotel Ambient i brendshem</td>
                            <td>Prishtina</td>
                            <td>Kilometrin 8-tė tė magjistrales Prishtinė – Mitrovicė</td>
                            <td><button class="btn btn-sm btn-success"><router-link class="btn-success" to="/restaurantdasmat/edit">Edit</router-link></button> | <button class="btn btn-sm btn-danger" @click="showAlert">Delete</button></td>

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