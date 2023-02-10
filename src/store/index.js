import { createStore } from 'vuex';

const store = createStore({
    state: {
        contacts: [],
        dhomat: [],
        
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
    }
},
   


    modules: {}
});

export default store;