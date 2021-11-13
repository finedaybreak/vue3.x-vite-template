import { InjectionKey } from 'vue';
import { createStore, Store } from 'vuex';
import { UserState } from './modules/user';
import user from './modules/user';

export type State = {
    user?: UserState; // 这里必须是可选，不然state会报错
};

// define injection key
export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
    state: {},
    mutations: {},
    actions: {},
    modules: {
        user,
    },
});
