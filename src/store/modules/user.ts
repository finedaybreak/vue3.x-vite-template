import { Module } from 'vuex';
import { State } from '../index';

type UserInfo = {
    name: string;
    age: number;
};

const initialState: UserInfo = {
    name: 'FineDaybreak',
    age: 18,
};

export type UserState = UserInfo;
export default {
    namespaced: true,
    state: initialState,
    mutations: {},
    actions: {},
} as Module<UserState, State>;
