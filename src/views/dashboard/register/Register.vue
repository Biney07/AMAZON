<template>
    <h1 class="mt-3">All Users</h1>
  <div class="table-container">
      <table class="table table-striped">
        <thead class="table-dark">
          <tr>
            <th>User Id</th>
            <th>Role</th>
            <th>Full Name</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in filteredUsers" :key="user.id">
            <td>{{ user.id }}</td>
            <td>{{ user.role }}</td>
            <td>{{ user.userName}}</td>
           
           
            <td>
              <button class="btn btn-danger"  @click="deleteUser(user.id)">Delete User</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  <style>
.table-container {
  display: flex;
  justify-content: center;
  margin-left: 30px;
  margin-right: 30px;
  margin-top: 30px;
}
</style>
  <script>
import { collection, getDocs, doc, deleteDoc} from "firebase/firestore";
import { db } from "@/firebase/index";


  
  export default {
    data() {
      return {
        users: [],
     
        
      }
    },
    computed: {
  filteredUsers() {
    return this.users.filter(user => user.userName);
  }
},
    created() {


     const getUsers = async () => {
  const usersCollection = collection(db, "users");
  const querySnapshot = await getDocs(usersCollection);
  const users = [];

  querySnapshot.forEach(async (doc) => {
    const data = doc.data();
    const user = {
      id: doc.id,
      role: data.role,
      userName: data.name,
    
    };

   

    users.push(user);
  });

  return users;
};

    // Call getUsers function and log the users
    getUsers().then((users) => {
    console.log(users);
    this.users = users;
    }).catch((error) => {
    console.log(error);
    });
    },
    methods:{
        async deleteUser(userId) {
          try {
            const userRef = doc(db, "users", userId);
            await deleteDoc(userRef);
            const updatedUsers = this.users.filter((user) => user.id !== userId);
            this.users = updatedUsers;
            console.log(`User with ID ${userId} has been deleted`);
          } catch (error) {
            console.error(error);
          }
        },
      },
   }


</script>