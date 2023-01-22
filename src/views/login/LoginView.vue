<template>
 
<div class="container py-4 w-50">
  <h2 style="color:rgba(126, 239, 104, 0.8);">Login</h2>
  <form id="contactForm" v-on:submit.prevent="handleCreateLogin">

    <div class="mb-3">
      <label class="form-label" for="emailAddress">Email</label>
      <input class="form-control" v-bind:value="newLogin.email"
                v-on:input="newLogin.email = $event.target.value" type="email" placeholder="Email" data-sb-validations="required, email" />
    </div>

    <div class="mb-3">
      <label class="form-label" for="Password">Password</label>
      <input class="form-control" v-bind:value="newLogin.password"
                v-on:input="newLogin.password = $event.target.value" type="password" placeholder="Password" data-sb-validations="required, password" />
    </div>

    <div class="d-grid mt-4">
      <button class="btn btn-lg" id="submitButton" type="submit">Dergo</button>
    </div>

  </form>

</div>
</template>

<script>
  export default {
        data() {
            return {
                newLogin: {
                    email: '',
                    password: ''
                },
            }
        },
        methods: {
            async handleCreateLogin() {
                console.log('Login qe eshte derguar -> ', this.newLogin);
                
                this.newLogin.email = '';
                this.newLogin.password = '';
            }
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
  