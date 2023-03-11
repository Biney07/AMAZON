import { createStore } from 'vuex';


import { auth, db } from '../firebase'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut

} from 'firebase/auth'



import { doc, setDoc, getDoc } from "firebase/firestore";




const store = createStore({
  state: {
    contacts: [],
    dhomat: [],
    dasmats: [],
    dasmat: [],
    foods: [],
    menus: [],
    user: null,
    authIsReady: false,
    userRole: null,
    userName:null,
  },
  mutations: {
    addContact(state, contact) {
      state.contacts.push(contact);
    },
    setContacts(state, contacts) {
      state.contacts = contacts;
    },
    removeContactById(state, contactId) {
      state.contacts = state.contacts.filter((contact) => contact._id !== contactId)
    },
    addDhoma(state, dhoma) {
      state.dhomat.push(dhoma);
    },
    setDhomat(state, dhomat) {
      state.dhomat = dhomat;
    },
    removeDhomaById(state, dhomaId) {
      state.dhomat = state.dhomat.filter((dhoma) => dhoma._id !== dhomaId)
    },
    updateDhomaById(state, dhoma) {

      state.dhomat = state.dhomat.map(d => {
        if (d._id === dhoma._id) {
          return dhoma
        }
        return d
      })
    },

    addDasmat(state, dasmat) {
      state.dasmats.push(dasmat);
    },
    setDasmat(state, dasmats) {
      state.dasmat = dasmats;
    },
    setDasmats(state, dasmat) {
      state.dasmats = dasmat;
    },
    updateDasmatById(state, dasmat) {
      state.dasmats = state.dasmats.find((d) => d._id == dasmat._id)
    },
    removeDasmatById(state, dasmatId) {
      state.dasmats = state.dasmats.filter((dasmat) => dasmat._id !== dasmatId)
    },

    addFood(state, food) {
      state.foods.push(food);
      console.log(state.foods); // add this line to check the state after adding a new food item
    },
    setFoods(state, foods) {
      state.foods = foods;
    },
    updateFoodById(state, food) {
      state.foods = state.foods.map((f) => {
        if (f._id === food._id) {
          return food;
        }
        return f;
      });
    },
    removeFoodById(state, foodId) {
      state.foods = state.foods.filter((food) => food._id !== foodId);
    },setUser(state, payload) {
      state.user = payload
      console.log('user state changed:', state.user)
    
      // Get user's data from Firestore collection
      const userRef = doc(db, 'users', state.user.uid);
      getDoc(userRef)
        .then((doc) => {
          if (doc.exists()) {
            // Extract user's role from data
            state.userRole = doc.data().role;
            state.userName = doc.data().name;
    
            console.log('user role:', state.userRole);
            console.log('user name:', state.userName);
    
            // Save user data to localStorage
            const userData = {
              user: state.user,
              userRole: state.userRole,
              userName: state.userName
            }
            localStorage.setItem('userData', JSON.stringify(userData));
          } else {
            console.log('user not found');
          }
        })
        .catch((error) => {
          console.log('error getting user data:', error);
        });
    },
    
    setAuthIsReady(state, payload) {
      state.authIsReady = payload
    },
    setMenu: (state, menus) => (state.menus = menus),
    addMenu: (state, newMenu) => state.menus.push(newMenu),
    updateMenu: (state, { menuId, menuData }) => {
      if (Array.isArray(state.menus)) {
        const index = state.menus.findIndex(menu => menu._id === menuId);
        if (index !== -1) {
          state.menus.splice(index, 1, menuData);
        }
      }
    },

    removeMenu: (state, menuId) =>
      (state.menus = state.menus.filter(menu => menu._id !== menuId))
  },
  actions: {

    async fetchContacts({ commit }) {
      const res = await fetch('http://localhost:3000/contacts');
      const contacts = await res.json();
      commit('setContacts', contacts)
    },
    async createContact({ commit }, contactData) {
      const res = await fetch('http://localhost:3000/contacts',
        {
          method: 'post',
          body: JSON.stringify(contactData),
          headers: {
            'Content-Type': 'application/json'
          }

        }
      )

      const newContact = await res.json();

      commit('addContact', newContact);
    },
    async deleteContact({ commit }, contactId) {
      await fetch(`http://localhost:3000/contacts/${contactId}`, {
        method: 'DELETE'
      })

      commit('removeContactById', contactId)
    },
    async fetchDhomat({ commit }) {
      const res = await fetch('http://localhost:3000/dhomat');
      const dhomat = await res.json();
      commit('setDhomat', dhomat)
    },
    async createDhoma({ commit }, dhomaData) {
      const res = await fetch('http://localhost:3000/dhomat',
        {
          method: 'post',
          body: JSON.stringify(dhomaData),
          headers: {
            'Content-Type': 'application/json'
          }

        }
      )

      const newDhome = await res.json();

      commit('addDhoma', newDhome);
    },

    async deleteDhoma({ commit }, dhomaId) {
      await fetch(`http://localhost:3000/dhomat/${dhomaId}`, {
        method: 'DELETE'
      })

      commit('removeDhomaById', dhomaId)
    },
    async fetchDasmats({ commit }) {
      const res = await fetch('http://localhost:3000/dasmat');
      const dasmats = await res.json();
      commit('setDasmats', dasmats)
    },
    async createDasmat({ commit }, dasmatData) {
      const res = await fetch('http://localhost:3000/dasmat',
        {
          method: 'post',
          body: JSON.stringify(dasmatData),
          headers: {
            'Content-Type': 'application/json'
          }

        }
      )

      const newDasmat = await res.json();

      commit('addDasmat', newDasmat);
    },
    async deleteDasmat({ commit }, dasmatId) {
      await fetch(`http://localhost:3000/dasmat/${dasmatId}`, {
        method: 'DELETE'
      })

      commit('removeDasmatById', dasmatId)
    },
    async getByIdDasmat({ commit }, dasmatId) {
      const res = await fetch(`http://localhost:3000/dasmat/${dasmatId}`);
      const dasmat = await res.json();
      commit('setDasmat', dasmat)
    },
    async updateDasmat({ commit }, dasmatData) {
      const res = await fetch(`http://localhost:3000/dasmat/${dasmatData._id}`,
        {
          method: 'PUT',
          body: JSON.stringify(dasmatData),
          headers: {
            'Content-Type': 'application/json'
          }

        }
      )

      const updateDasmat = await res.json();

      commit('updateDasmatById', updateDasmat);
    },
    async fetchFoods({ commit }) {
      const res = await fetch('http://localhost:3000/foods');
      const foods = await res.json();
      commit('setFoods', foods)
    },
    async createFood({ commit }, foodData) {

      const res = await fetch('http://localhost:3000/foods',
        {
          method: 'post',
          body: JSON.stringify(foodData),
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )

      const newFood = await res.json();


      commit('addFood', newFood);
    },
    async deleteFood({ commit }, foodId) {

      await fetch(`http://localhost:3000/foods/${foodId}`, {
        method: 'DELETE'
      })

      commit('removeFoodById', foodId)
    },
    async getFoodById({ commit }, foodId) {

      const res = await fetch(`http://localhost:3000/foods/${foodId}`);
      const food = await res.json();
      commit('setFoods', food)
    },
    async updateFood({ commit }, foodData) {

      const res = await fetch(`http://localhost:3000/foods/${foodData._id}`,
        {
          method: 'PUT',
          body: JSON.stringify(foodData),
          headers: {
            'Content-Type': 'application/json'
          }

        }
      )

      const updateFood = await res.json();

      commit('updateFoodById', updateFood);
    },
    async getByIdDhomat({ commit }, dhomaId) {
      const res = await fetch(`http://localhost:3000/dhomat/${dhomaId}`);
      const dhomat = await res.json();
      commit('setDhomat', dhomat)
    },
    async updateDhoma({ commit }, dhomaData) {
      const res = await fetch(`http://localhost:3000/dhomat/${dhomaData._id}`,
        {
          method: 'PUT',
          body: JSON.stringify(dhomaData),
          headers: {
            'Content-Type': 'application/json'
          }

        }
      )

      const updateDhoma = await res.json();

      commit('updateDhomaById', updateDhoma);
    },
    
    async signup(context, { email, password, name }) {
      console.log('signup action')
      if (!name) {
        throw new Error('Name is required for signup')
      }
      const res = await createUserWithEmailAndPassword(auth, email, password)
      if (res) {
        const user = res.user
        var roli = null;

        const adminEmails = ['admin1@example.com', 'admin2@example.com']
        console.log()
        if (adminEmails.includes(email)) {
          roli = "Admin";
        }
        else {
          roli = "User";
        }
        // Add user role
        await setDoc(doc(db, `users/${user.uid}`), {
          role: roli,
          name: name
        }, { merge: true })
        console.log(user);
        // Commit user to store
      
        context.commit('setUser', user)
      } else {
        throw new Error('could not complete signup')
      }
    },

    async login(context, { email, password }) {
      console.log('login action')

      const res = await signInWithEmailAndPassword(auth, email, password)
      if (res) {
        context.commit('setUser', res.user)
      } else {
        throw new Error('could not complete login')
      }
    },
    async logout(context) {
      console.log('logout action')

      await signOut(auth)
      context.commit('setUser', null)
    }
  }, async fetchMenus({ commit }) {
    const response = await fetch('http://localhost:3000/menute');
    const menus = await response.json();
    commit('setMenu', menus);
  },
  async createMenu({ commit }, menuData) {
    await fetch('http://localhost:3000/menute', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(menuData)
    });
    commit('addMenu', menuData);
  },
  async updateMenu({ commit }, { menuId, menuData }) {
    console.log(menuData);
    await fetch(`http://localhost:3000/menute/${menuId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(menuData)
    });
    commit('updateMenu', { menuId, menuData });
  },
  async deleteMenu({ commit }, menuId) {
    await fetch(`http://localhost:3000/menute/${menuId}`, {
      method: 'DELETE'
    });
    commit('removeMenu', menuId);
  },
  async getMenuById({ commit }, menuId) {

    const res = await fetch(`http://localhost:3000/menute/${menuId}`);
    const menu = await res.json();
    commit('setMenu', menu)
  },





  modules: {}
});

export default store;