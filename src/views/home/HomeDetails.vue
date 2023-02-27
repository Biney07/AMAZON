<template>



    <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img :src="dhomat.foto1" class="d-block w-100" alt="aaa">
    </div>
    <div class="carousel-item">
      <img :src="dhomat.foto2" class="d-block w-100" alt="bbb">
    </div>
    <div class="carousel-item">
      <img :src="dhomat.foto3" class="d-block w-100" alt="cccc">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
<div style="display:flex;flex-direction:column;justify-content: space-evenly;">
  <div style="display:flex;flex-direction:row;justify-content:start;margin-top:30px;margin-left: 30px;">
  <h4 style="margin-right: 20px;">Numri i dhomes : <b> {{dhomat.numri}}</b> ,</h4>
  <h4>Cmimi <b>{{ dhomat.cmimi }}&euro;</b></h4>

</div>
<div style="display:flex;flex-direction:row;justify-content:start;margin-top:5px;margin-left: 30px;" >
  <h5>Statusi : <i>e Lirë</i></h5>
</div>
<div><p style="display:flex; flex-wrap: wrap; margin-left: 50px; margin-right: 50px; margin-top: 50px;line-height: 30px;">{{dhomat.pershkrimi}}</p></div>
</div>


    
  </template>

  <script>
import { mapState } from "vuex";
  export default {
    // name: 'HomeDetails',
    // components: {
      
      
    // }
    computed: {
            ...mapState(['dhomat'])
        },
    mounted() {
    this.$store.dispatch("getByIdDhomat", this.$route.params.dhomaId);
  },
 
  }
  </script>