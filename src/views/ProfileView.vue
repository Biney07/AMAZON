<template>
    <div class="space2 container">
        <label for="dhoma" style="font-family: Playfair; font-size:50px; margin:-20px 0px 20px 0px ">Rezervimet</label>
        <div class="row">
            <div class="col-md-4 mb-4" v-for="(dhoma, index) in UsersDhomatWithDates" :key="index">
                <div class="card">
                    <img :src="dhoma.foto1" :class="{ 'grayscale': numriDhomes !== dhoma.numri }" class="card-img-top"
                        alt="Room Image" @click="numriDhomes = dhoma.numri">
                    <div class="card-body ">
                        <div class="d-flex flex-column">
                            <h4 class="card-title" style="color:orangered; font-size:20px">Dhoma</h4>
                            <h3 class="card-title"
                                style="font-weight: bolder; font-size:40px; margin-top:-20px; font-family: Playfair;">
                                {{ dhoma.numri }}
                            </h3>
                            <p class="card-text" style="font-size: 14px; margin-top: 10px;">Rezervuar me datën: {{
                                dhoma.rezervimiDate ? new Date(dhoma.rezervimiDate).toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                }) : 'Nuk ka rezervime'
                            }}</p>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    </div>
</template>
  

<script>
import { mapState } from 'vuex';

export default {
    computed: {
        ...mapState(['dhomat']),

        user() {
            const userData = JSON.parse(localStorage.getItem('userData'))
            const userUid = userData ? userData.user.uid : null;
            const userName = userData ? userData.userName : null;
            return { uid: userUid, name: userName };
        },

        UsersDhomat() {
            const userUid = this.user.uid; // get the user UID

            const dhomatt = this.dhomat.filter(dhoma => {
                const userDhomat = this.rezervimet.find(rezervim => {
                    const match = rezervim.user_id.toString() === userUid.toString();
                    console.log(match+":"+ rezervim.dhoma_id +";"+dhoma.id);
                    return match && rezervim.dhoma_id === dhoma.id;
                    
                });
                console.log(userDhomat);
                return userDhomat && dhoma.numri === userDhomat.numri_dhomes; // add check for numri_dhomes
            });

            console.log(dhomatt);

            return dhomatt;
        },
        UsersDhomatWithDates() {
            const usersDhomat = this.UsersDhomat;
            const dhomaRezervime = usersDhomat.map(dhoma => {
                const rezervim = this.rezervimet.find(r => r.user_id === this.user.uid && r.dhoma_id === dhoma.id);
                return {
                    ...dhoma,
                    rezervimiDate: rezervim ? rezervim.rezervim_date : null
                };
            });
            return dhomaRezervime;
        }
    },

    mounted() {
        this.fetchRezervimet();

    },

    data() {
        return {
            rezervimet: null,
        }
    },

    methods: {
        fetchRezervimet() {
            fetch('http://localhost:3000/rezervimidhomes')
                .then(response => {
                    console.log(response);
                    return response.json();
                })
                .then(data => {
                    this.rezervimet = data;

                })
                .catch(error => {
                    console.error(error);
                });
        },

    },
    created() {
        this.$store.dispatch('fetchDhomat');

    }
}

</script>

<style >
.container {
    max-width: 900px;
    margin: 0 auto;

}

.card-img-top {
    max-width: 100%;
}




.space2 {
    margin-top: 30px;
    margin-bottom: 120px;
}
</style>