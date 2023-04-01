<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a href="/"><img class="logo" src="./../../assets/logo.png" alt="logo" /></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <div class="d-flex flex-row">
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <a class="text-decoration-none nav-link costum active" aria-current="page">
                <router-link class="costum" to="/">Home</router-link></a>
            </li>
            <li class="nav-item">
              <a class="nav-link costum active" aria-current="page"><router-link class="costum"
                  to="/about">About</router-link></a>
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
              <a class="nav-link costum active" aria-current="page"><router-link class="costum"
                  to="/contact">Contacttt</router-link></a>
            </li>
            <li class="nav-item">
              <a class="nav-link costum active" aria-current="page"><router-link class="costum"
                  to="/restaurantdasmat">Dasmatt</router-link></a>
            </li>
            <li class="nav-item">
              <a class="nav-link costum active" aria-current="page"><router-link style=" color:orangered !important"
                  class="costum" to="/rezervoDhomen">Rezervo Dhomen</router-link></a>
            </li>


            <li v-if="userRole == 'Admin'" class="ms-auto nav-item d-flex">
              <a class="nav-link costum active" aria-current="page">
                <router-link class="costum" to="/dashboard">Dashboard</router-link>
              </a>
            </li>

          </ul>
        </div>
        <div class="d-flex ms-auto">
          <li v-if="!user" class="ms-auto nav-item d-flex">
            <button type="button" class="btn btn-success hapsire " aria-current="page"><router-link class="costum logreg"
                to="/login">Login</router-link></button>
          </li>
          <li v-if="!user" class="ms-auto nav-item d-flex">
            <button type="button " class="btn hapsire" style="background-color:orange" aria-current="page"><router-link
                class="costum logreg" to="/register">Register</router-link></button>
          </li>
        </div>
        <div v-if="user" class="d-flex ms-auto">
          <div class="dropdown">
            <button class="btn btn-success dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              {{ userName }}
            </button>
            <ul class="dropdown-menu">
              <li>
                <button v-if="user" class="dropdown-item" @click="handleClickProfile">Profile</button>
                <button v-if="user" class="dropdown-item" @click="handleClick">Logout</button>
              </li>
            </ul>
          </div>
        </div>
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
    };
    const handleClickProfile = () => {
      router.push("/profile");
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
  margin-top: 5px;
  margin-bottom: 5px;
}

.costum {
  text-decoration: none !important;
  font-size: 1.3rem !important;
  font-weight: 600 !important;
}

.logreg {
  color: white !important;
  font-size: 18px !important;
}

.hapsire {
  margin: 0px 7px;
}
</style>
