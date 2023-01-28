import { createStore } from 'vuex';

const contactStore = createStore({
    state: {
        contacts: [],
    },
    mutations: {
        addContact(state, contact) {
            state.contacts.push(contact);
        }
    },
    actions: {
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
       }
    },
    modules: {}
});

export default contactStore;