import { createStore } from "vuex";

const store = createStore({
    state: {
        user: {
            data: {
                name: "Tom C",
                email: "tom@example.com",
            },
            token: 123
        }
    },
    getters: {},
    actions: {},
    mutations: {
        logout: (state) => {
            state.user.token = null;
            state.user.data = {};
        },
    },
    modules: {}
});

export default store;