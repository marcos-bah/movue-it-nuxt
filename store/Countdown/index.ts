import { State, Getters, Mutations, MutationsInterface } from './types';

const MINUTES = 60;

export const state = (): State => ({
    time: MINUTES * 60,
    isActive: false,
    hasCompleted: false,
});

export const getters: Getters = {
    minutes: state => Math.floor(state.time / MINUTES),
    seconds: state => state.time % MINUTES,
};

export const mutations: MutationsInterface = {
    [Mutations.SET_TIME](state, time) {
        state.time = time;
    },
    [Mutations.RESET_TIME](state) {
        state.time = MINUTES * 60;
    },
    [Mutations.SET_IS_ACTIVE](state, isActive) {
        state.isActive = isActive;
    },
    [Mutations.SET_HAS_COMPLETED](state, hasCompleted) {
        state.hasCompleted = hasCompleted;
    },
};
