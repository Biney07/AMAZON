<template>

  <nav class="navbar navbar-expand-lg navbar-dark px-4 px-lg-5 py-3 py-lg-0" style="background-color:#263A29 !important">
    <a href="" class="navbar-brand p-0">
      <a href="/"><img class="logo" src="./../../assets/logo.png" alt="logo" /></a>

    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
      <span class="fa fa-bars"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarCollapse">
      <div class="navbar-nav ms-auto py-0 pe-4">
        <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <a class="text-decoration-none nav-link costum active" aria-current="page">
              <router-link class="costum" to="/">Home</router-link></a>
          </li>
          <li class="nav-item">
            <a class="text-decoration-none nav-link costum active" aria-current="page">
              <router-link class="costum" to="/dhomat">Dhomat</router-link></a>
          </li>
          <li class="nav-item">
            <a class="nav-link costum active" aria-current="page"><router-link class="costum"
                to="/aktivitete">Aktivitete</router-link></a>
          </li>
          <li class="nav-item">
            <a class="nav-link costum active" aria-current="page"><router-link class="costum"
                to="/foods">Ushqimet</router-link></a>
          </li>
          <li class="nav-item">
            <a class="nav-link costum active" aria-current="page"><router-link class="costum"
                to="/menute">Menute</router-link></a>
          </li>
          <li class="nav-item">
            <a class="nav-link costum active" aria-current="page"><router-link class="costum" to="/contact">Contact
              </router-link></a>
          </li>
          <li class="nav-item">
            <a class="nav-link costum active" aria-current="page"><router-link class="costum"
                to="/about">About</router-link></a>
          </li>
          <li class="nav-item">
            <a class="nav-link costum active" aria-current="page"><router-link class="costum"
                to="/restaurantdasmat">Dasmat</router-link></a>
          </li>

          <li v-if="userRole == 'Admin'" class="ms-auto nav-item d-flex">
            <a class="nav-link costum active" aria-current="page">
              <router-link class="costum" to="/dashboard">Dashboard</router-link>
            </a>
          </li>


        </ul>
      </div>
      <a href="" class=" ff-secondary text-start  fw-normal rezervo"><router-link
          to="/rezervoDhomen" class="rezervo">Rezervo Dhomen </router-link></a>

      <li v-if="!user" class="butonlog nav-item d-flex">
        <a type="button" class="btn butonlog green-background py-1.9 px-3"><router-link class="costum "
            to="/login">Login</router-link></a>
      </li>
      <li v-if="!user" class="butonlog nav-item d-flex">
        <a type="button " class="btn butonlog green-background py-1.9 px-3" style="background-color:orange"><router-link
            class="costum " to="/register">Register</router-link></a>
      </li>

      <div v-if="user" class="dropdown">
        <button class="btn green-background white dropdown-toggle" type="button" id="dropdownMenuButton"
          data-mdb-toggle="dropdown" aria-expanded="false">
          {{ userName }}
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <li><a v-if="user" class="dropdown-item" @click="handleClickProfile">Profile</a></li>
          <li><a v-if="user" class="dropdown-item" @click="handleClick">Log out</a></li>
        </ul>
      </div>



    </div>
  </nav>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";
import { useRouter } from 'vue-router'

export default {
  setup() {

    const router = useRouter()
    const store = useStore()

    const handleClick = () => {
      store.dispatch("logout");
      localStorage.removeItem("userData");
      router.push("/login");
      setTimeout(() => {
        window.location.reload();
      }, 50);
    };
    const handleClickProfile = () => {
      router.push("/profile");
      setTimeout(() => {
        window.location.reload();
      }, 50);
    };

    return {
      handleClick,
      handleClickProfile,
      user: computed(() => store.state.user),
      userName: computed(() => store.state.userName),
      userRole: computed(() => store.state.userRole),
    }
  }
}
</script>

<style>
.logo {
  height: 50px;
  padding: 0px 30px 0px 30px;
  margin-top: 10px;
  margin-bottom: 10px;
}

.costum {
  text-decoration: none !important;
  font-size: 0.9rem !important;
  color: white;
  padding: 0px;
}

.rezervo {
  text-decoration: none !important;
  font-size: 1.1rem !important;
  color: white;
  margin-right: 10px;
}

.costum.active {
  text-decoration: none !important;
  font-size: 0.9rem !important;
  color: white;
  padding: 0px;

}

.costum:hover {
  color: rgb(188, 230, 168);
}

.logreg {
  color: white !important;
  font-size: 0.9rem !important;
}

.section-title::after {
  position: absolute;
  content: "";
  width: 0px;
  height: 0px;
  top: 0;
  right: -55px;
  margin-top: -1px;
  background: var(--primary);
}

.butonlog {
  padding: 5px !important;
}

@media (min-width: 992px) {
  .navbar-expand-lg .navbar-nav .nav-link {
    padding: 0px;
  }
}
</style>
