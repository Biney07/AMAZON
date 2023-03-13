<template>
     <div class="m-5">
            <div class="table-responsive">
                <table class="table">
                    <thead class="table-info">
                        <tr>
                            <th>Emri</th>
                            <th>Email</th>
                            <th>Roli</th>
                            <th>Veprim</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(user, idx) in users" :key="idx">
                            <td>   {{ user.displayName }}</td>
                            <td>   {{ user.email }}</td>
                            <td class="py-3 px-2" v-if="user.customClaims.user == true">User</td>
                          
                            <td><button class="btn btn-sm btn-success"><router-link class="btn-success" :to="`/restaurantdasmat/edit/${dasmat._id}`" >Edit</router-link></button> | <button class="btn btn-sm btn-danger" @click="handleDeleteDasmat(dasmat._id)">Delete</button></td>

                        </tr>
                    </tbody>
                </table>
            </div>
          
        </div>
</template> 

  
  <script>
  import { mapState } from 'vuex'
  export default {
      data(){
          return{
              claim: 'user'
          }
      },
      methods:{
          handleDeleteUser(id){
              this.$store.dispatch('user/deleteUser', id)
          }
      },
      computed:{
        ...mapState(["users"]),
      },
      mounted(){
          this.$store.dispatch('usersByClaim', this.claim);
      },
  }
  </script>