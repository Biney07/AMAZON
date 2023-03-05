<template>
 
<div class="container py-4 w-50">
  <h2 style="color:rgba(126, 239, 104, 0.8);">Login</h2>
  <form id="contactForm" v-on:submit.prevent="handleLogin">

    <div class="mb-3">
      <label class="form-label" for="emailAddress">Email</label>
      <input class="form-control" v-model="email" type="email" placeholder="Email" required />
    </div>

    <div class="mb-3">
      <label class="form-label" for="Password">Password</label>
      <input class="form-control" v-model="password" type="password" placeholder="Password" required />
    </div>

    <div class="d-grid mt-4">
      <button class="btn btn-lg" id="submitButton" type="submit">Dergo</button>
    </div>

  </form>
<div v-if="error">{{ error }}</div>
</div>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
export default {
  setup() {
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
    background-color: rgba(126, 239, 104, 0.8);
    color: white;
  }

  button:hover{
    background-color: rgba(95, 214, 71, 0.8);
    color: black;
  }

  input{
    border-color: rgba(126, 239, 104, 0.8);
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px rgba(126, 239, 104, 0.6);
  }
  </style>
  