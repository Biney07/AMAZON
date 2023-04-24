
<template>
  <section class="vh-100 bg-light">
    <div class="container h-100">
      <div class="row justify-content-center align-items-center h-100" style="border-radius: 50px">
        <div class="col-lg-12 col-xl-11">
          <div class="card border-0 rounded-3">
            <div class="card-body p-md-5 rounded-3" style="background-color:white;">
              <div class="row justify-content-center">
                <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                  <h1 class="text-center fw-bold mb-5 mx-1 mx-md-4 mt-4">Login</h1>
                  <form class="mx-1 mx-md-4" v-on:submit.prevent="handleLogin">
                    <div class="mb-4">
                      <label class="form-label" for="email">Email</label>
                      <div class="input-group">
                        <span class="input-group-text"><i class="fas fa-envelope"></i></span>
                        <input type="email" id="email" class="form-control form-outline" v-model="email" required>
                      </div>
                    </div>
                    <div class="mb-4">
                      <label class="form-label" for="password">Password</label>
                      <div class="input-group">
                        <span class="input-group-text"><i class="fas fa-lock"></i></span>
                        <input type="password" id="password" class="form-control form-outline"
                          placeholder="Enter password" v-model="password" required>
                        <button class="btn btn-outline-secondary" type="button" id="togglePassword">
                          <i class="bi bi-eye"></i>
                        </button>
                      </div>
                    </div>
                    <div class="text-center">
                      <button class="btn btn-primary btn-lg">Login</button>
                    </div>
                  </form>
                </div>
                <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                  <img src="../../../public/209442.png" class="img-fluid" alt="Sample image">
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
import { onMounted, ref } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

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

    const email = ref('');
    const password = ref('');
    const store = useStore();
    const router = useRouter();

    const handleLogin = async () => {
      try {
        await store.dispatch('login', {
          email: email.value,
          password: password.value
        })
        router.push('/');
        toast('You have successfully logged in!', {
          autoClose: 500,
        });
      }
      catch (err) {
        toast('Wrong email or password!', {
          autoClose: 400,
        });
      }
    }
    return { handleLogin, email, password }
  }
}
</script>


<style scoped>
.btn {
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
}

button:hover {
  background-color: rgba(0, 0, 0, 0.8);
  color: black;
}

input {
  border-color: rgba(0, 0, 0, 0.8);

}

.form-outline {
  border: 1px solid #979797 !important;
}
</style>
  