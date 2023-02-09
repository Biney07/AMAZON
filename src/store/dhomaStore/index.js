import { createStore } from 'vuex';

const dhomaStore = createStore({
    state: {
        dhomat: [],
    },
    mutations: {
        addDhoma(state, dhoma) {
            state.dhomat.push(dhoma);
        },
       
    },
    actions: {
      
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
       }
  
    },


    modules: {}
});

export default dhomaStore;