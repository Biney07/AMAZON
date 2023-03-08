
<template>
  <section class="vh-100" style="background-color: #eee;">
    <div class="container h-100">
      <div class="row d-flex justify-content-center align-items-center h-100 " style=" border-radius:50px">
        <div class="col-lg-12 col-xl-11">
          <div class="card" style="border:none">
            <div class="card-body p-md-5" style="background-color:white; border-radius:50px">
              <div class="row justify-content-center">
                <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                  <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Login</p>

                  <form class="mx-1 mx-md-4" v-on:submit.prevent="handleLogin">

                    <div class="d-flex flex-row align-items-center mb-4">
                      <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                      <div class="form-outline flex-fill mb-0 form-group">
                        <label class="form-label" for="email">Email</label>
                        <input type="email" id="email" class="form-control" v-model="email" required />
                      </div>
                    </div>

                    <div class="d-flex flex-row align-items-center mb-4">
                      <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                      <div class="form-outline flex-fill mb-0 form-group">
                        <label class="form-label" for="password">Password</label>
                        <div class="input-group mb-3">
                          <input type="password" id="password" class="form-control" placeholder="Enter password"
                            v-model="password" required>
                          <button class="btn btn-outline-secondary" type="button" id="togglePassword">
                            <i class="bi bi-eye"></i>
                          </button>
                        </div>
                      </div>
                    </div>

                    <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                      <button class="btn btn-primary btn-lg">Login</button>
                    </div>

                  </form>

                </div>
                <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                  <img src="https://img.freepik.com/free-vector/computer-login-concept-illustration_114360-7862.jpg?w=996&t=st=1678255267~exp=1678255867~hmac=f31b7b3e21331b3077ba99651052e3229fd147e74551d7aaf367f153827ecd96"
                    class="img-fluid" alt="Sample image">

                </div>
              </div>
              <div v-if="error" class="row justify-content-center mt-3">
                <div class="col-md-10 col-lg-6 col-xl-5">
                  <div class="alert alert-danger text-center" role="alert">
                    {{ error }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<script>
import { onMounted } from 'vue';
import { ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
export default {
  setup() {
    onMounted(() => {
      const togglePasswordButton = document.querySelector('#togglePassword');
      const passwordInput = document.querySelector('#password');

      togglePasswordButton.addEventListener('click', function () {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        this.querySelector('i').classList.toggle('bi-eye');
        this.querySelector('i').classList.toggle('bi-eye-slash');
      });
    });
    const email = ref('')
    const password = ref('')
    const error = ref(null)
    const store = useStore()
    const router = useRouter()
    const handleLogin = async () => {
      try {
        await store.dispatch('login', {
          email: email.value,
          password: password.value
        })
        router.push('/')
      }
      catch (err) {
        alert('Keni shkruar Gabim email ose password.')
      }
    }
    return { handleLogin, email, password, error }
  }
}
</script>


  <style scoped>
  .btn{
    background-color: rgba(0, 0, 0, 0.8);
    color: white;
  }

  button:hover{
    background-color: rgba(0, 0, 0, 0.8);
    color: black;
  }

  input{
    border-color: rgba(0, 0, 0, 0.8);
  
  }
  </style>
  