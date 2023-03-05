<template>
<footer class="text-center text-lg-start bg-light text-muted">
  <section class="d-flex justify-content-center">
    

    <div>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-facebook-f"></i>
      </a>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-twitter"></i>
      </a>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-google"></i>
      </a>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-instagram"></i>
      </a>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-linkedin"></i>
      </a>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-github"></i>
      </a>
    </div>

  </section>


  <section class="">
    <div class="container text-center text-md-start mt-5">
      <div class="row mt-3">
        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          <h6 class="text-uppercase fw-bold mb-4">
            <a href="/"><img class="logo" src="./../../assets/logo.png" alt="logo" /></a>
          </h6>
          <p>
            Hotel Amazona ndodhet nė kilometrin 8-tė tė magjistrales Prishtinė – Mitrovicė, njė ndėr arteriet kryesore tė komunikimit rrugor tė Kosovės.
          </p>
        </div>
        
        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          <ul class="list">
          <li
                v-for="item in headerfooterItems"
                v-bind:key="item.path"
            >
                <router-link class="costum"
                    v-bind:to="item.path"
                >{{item.name}}</router-link>
            </li>
          </ul>
        </div>

        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          <p><i class="fas fa-home me-3"></i> Kilometrin 8-tė tė magjistrales Prishtinė – Mitrovicė</p>
          <p>
            <i class="fas fa-envelope me-3"></i>
            info@amazon.com
          </p>
          <p><i class="fas fa-phone me-3"></i> +044111222</p>
          <p><i class="fas fa-print me-3"></i> +049222333</p>
        </div>
      </div>
    </div>
  </section>


  <div class="text-center p-4" style="background-color: rgba(0, 0, 0, 0.05);">
    © 2023 Copyright - Amazon Hotel
  </div>
</footer>


</template>


<style>
.list{
    list-style-type: none;
}

</style>


<script>
    export default {
        data() {
            return {
                headerfooterItems: [
                    { path: '/', name: 'Home' },
                    { path: '/about', name: 'About us' },
                    { path: '/aktivitete', name: 'Aktivitete' },
                    { path: '/foods', name: 'Menutë' },
                    { path: '/contact', name: 'Contact Us'}
                ]
            }
        },
    }
</script>