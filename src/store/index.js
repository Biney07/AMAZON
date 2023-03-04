import { createStore } from 'vuex';
//import signupUser from '@/firebase/user/signupUser';
//import apiRequest from '@/utility/apiRequest';

import { auth } from '../firebase'
import {
  createUserWithEmailAndPassword

} from 'firebase/auth'
const adminEmails = ['admin1@example.com', 'admin2@example.com']
const getUserRole = async (email) => {
    // Check if the user's email matches an admin email
    if (adminEmails.includes(email)) {
      return 'admin'
    } else {
      return 'user'
    }
  }
  
const store = createStore({
    state: {
        contacts: [],
        dhomat: [],
        dasmats: [],
        dasmat: [],
        foods:[],
        user: null,
    authIsReady: false,
    
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
       updateDhomaById(state, dhoma) {
         console.log('dhoma:', dhoma);
        console.log('dhoma._id:', dhoma._id);
         state.dhomat = state.dhomat.map(d => {
            if (d._id === dhoma._id) {
             return dhoma
                }
                 return d
             })
},//setUser(state, user) {
//             state.user = user;
//         },
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
        },
        setUser(state, payload) {
            state.user = payload
            console.log('user state changed:', state.user)
          },
          setAuthIsReady(state, payload) {
            state.authIsReady = payload
          }
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
       console.log(foodData);
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
    console.log(foodId);
    await fetch(`http://localhost:3000/foods/${foodId}`, {
        method: 'DELETE'
    })

    commit('removeFoodById', foodId)
},
async getFoodById({ commit }, foodId) {
    const res = await fetch(`http://localhost:3000/foods/${foodId}`);
    const food = await res.json();
    commit('setFood', food)
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

    const updatedFood = await res.json();

    commit('updateFoodById', updatedFood);

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
   // async registerUser({ commit }, payload){
    // async registerUser( payload){

    //   await apiRequest.registerUser(payload);
    // }

  
   
      async signup(context, { email, password }) {
        console.log('signup action')
    
        const res = await createUserWithEmailAndPassword(auth, email, password)
        if (res) {
          // Set the user role based on their email
          const role = await getUserRole(email)
          context.commit('setUser', { user: res.user, role: role })
        } else {
          throw new Error('could not complete signup')
        }
      },
    // async signup(context, { email, password }) {
    //     console.log('signup action')
  
    //     const res = await createUserWithEmailAndPassword(auth, email, password)
    //     if (res) {
    //       context.commit('setUser', res.user)
    //     } else {
    //       throw new Error('could not complete signup')
    //     }
    //   },
  

},


    modules: {}
});

export default store;