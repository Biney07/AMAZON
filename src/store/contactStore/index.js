import { createStore } from 'vuex';

const contactStore = createStore({
    state: {
        contacts: [],
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
        }
    },


    modules: {}
});

export default contactStore;