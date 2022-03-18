import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
    state: () => ({
        name: 'FineDaybreak',
        level: 18,
    }),
    getters: {
        userInfo: state => {
            return `Name: ${state.name} Level: ${state.level}`;
        },
    },
    actions: {
        async increaseUserLevel() {
            this.level++;
        },
        setUserLevel(level: number) {
            this.level = level;
        },
    },
});
