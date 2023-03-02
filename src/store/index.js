import { createStore } from 'vuex';
import signupUser from '@/firebase/user/signupUser';

const store = createStore({
    state: {
        contacts: [],
        dhomat: [],
        dasmats: [],
        dasmat: [],
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
            state.dhomat = state.dhomat.find((d) => d._id == dhoma._id)
        },
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
    async registerUser( payload){

       signupUser(payload);
    }

},

    modules: {}
});

export default store;