<template>
    <label for="dhoma" style="font-family: Playfair; font-size:50px; margin:30px 0px 20px 0px ">Rezervimet</label>
    <div style="margin-top: 20px; display:flex; justify-content:center; flex-wrap: wrap; align-items:center">
        <ul class="m-0 p-0" v-for="(dhoma, index) in UsersDhomat" :key="index">
            <li class="cards_item container" id="item_salad">
                <div class="card">
                    <div class="toppart">
                        <div class="card_details">
                            {{ dhoma.numri }}
                        </div>
                        <div class="card_price">{{ dhoma.cmimi }} €</div>
                    </div>
                    <div class="card_image">
                        <img :src="dhoma.foto1" :class="{ 'grayscale': numriDhomes !== dhoma.numri }" alt="Room Image"
                            @click="numriDhomes = dhoma.numri">
                    </div>
                    <div class="card_content">
                        <h2 class="card_title">Dhoma {{ dhoma.numri }}</h2>
                        <div class="card_text">
                            <p>{{ reservationDateText(dhoma.rezervimiDate) }}</p>

                        </div>
                    </div>
                </div>
            </li>
        </ul>
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
            return this.getRoomsAndReservations();
        }, reservationDateText() {
            return (reservationDate) => {
                const today = new Date();
                const reservationDateObj = new Date(reservationDate);

                if (!reservationDate) {
                    return 'Nuk ka rezervime';
                }

                const dateString = reservationDateObj.toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                });

                if (reservationDateObj < today) {
                    return `Ishte rezervuar me datën: ${dateString}`;
                } else {
                    return `Rezervuar me datën: ${dateString}`;
                }
            };
        },


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
                    if (!response.ok) {
                        throw new Error('Failed to fetch rezervimet data');
                    }
                    return response.json();
                })
                .then(data => {
                    this.rezervimet = data;
                    console.log('All rezervimet:', this.rezervimet); // Log all rezervimet
                })
                .catch(error => {
                    console.error(error);
                });
        },
        getRoomsAndReservations() {
            const userUid = this.user.uid;

            // Filter reservations made by the current user
            const userReservations = this.rezervimet.filter(
                (rezervim) => rezervim.user_id.toString() === userUid.toString()
            );

            const roomsWithReservations = userReservations.map((reservation) => {
                // Find the corresponding room for each reservation
                const room = this.dhomat.find(
                    (dhoma) => dhoma.numri === reservation.numri_dhomes
                );

                // Combine the room data with the reservation date
                return {
                    ...room,
                    rezervimiDate: reservation.rezervim_date
                };
            });

            console.log(roomsWithReservations);

            return roomsWithReservations;
        }
    },


    async created() {
        try {
            await this.$store.dispatch('fetchDhomat');
        } catch (error) {
            console.error('Failed to fetch dhomat data:', error);
        }
        this.fetchRezervimet();
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

@font-face {
    font-family: 'Playfair';
    src: url('../../public/Playfair.ttf')
}

.toppart {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    top: 10px;
    position: absolute;


}


.card-deck {
    display: flex;
    flex-wrap: wrap;
    margin-right: -20px;
    margin-left: -20px;
}


.btn-primary {
    margin-top: 10px;
}

.cards_item {
    display: flex;
    padding: 1rem;
    max-width: 600px;
    margin: 0 px;
}

.card_image {
    max-height: 250px;
    margin-top: -24px;
}

.card_image img {
    width: 100%;
    max-width: 800px;
    height: 100%;
    object-fit: cover;
}

.card_image:after {
    content: "";
    display: block;
    width: 100%;
    height: 100px;
    position: relative;
    top: -100px;
    background: linear-gradient(0deg, #091014 10%, rgba(0, 0, 0, 0) 100%);
}

.card {
    background-color: #091014;
    border-radius: 0.25rem;
    box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    overflow: hidden;
}

.card_content {
    padding: 1rem;
    z-index: 1;
    display: block;
}

.card_title {
    font-family: "Sofia Sans", sans-serif;
    font-size: 72px;
    line-height: 72px;
    margin-top: -50px;
    margin-bottom: 14px;
    text-shadow: black 1px 0 15px;
    color: white;
}

.card_text {
    color: #DDDACB;
    font-family: "Sofia", sans-serif;
    font-weight: 200;
}

.card_text p {
    max-width: 700px;
}

.card_price {

    padding: 0px 15px;
    color: white !important;
    font-size: 36px;
    font-weight: 400;
    background-color: rgba(0, 0, 0, 0.5);

    text-shadow: black 3px 0px 6px;
    /* add opacity property with a value between 0 and 1 */

}

.card_details {
    padding-left: 15px;
    color: white !important;
    height: 24px;
    font-size: 32px;
    font-weight: 400;
    text-shadow: black 3px 0px 6px;
}

#item_fig .card:after {
    content: "Seasonal";
    font-family: "Raleway", sans-serif;
    color: rgba(234, 225, 175, 0.8);
    font-weight: 600;
    text-transform: uppercase;
    display: block;
    width: 10ch;
    height: 1.5em;
    padding: 0.2em 0.4em;
    position: relative;
    bottom: calc(100% - 2.5em);
    left: 1em;
}
</style>
