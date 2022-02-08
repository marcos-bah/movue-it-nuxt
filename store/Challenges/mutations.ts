import { Mutations, MutationsInterface } from "./types";

export default {
    [Mutations.SET_CURRENT_CHALLENGE_INDEX](state: { currentChallengeIndex: number | null; }, index: number) {
        state.currentChallengeIndex = index;
    },
    [Mutations.SET_IS_LEVEL_UP_MODAL_OPEN](state: { isLevelUpModalOpen: boolean; }, isOpen: boolean) {
        state.isLevelUpModalOpen = isOpen;
    },
    [Mutations.COMPLETE_CHALLENGE](state, xpAmount: number) {
        const { current, end } = state.xp;
        const currentTotalXP = current + xpAmount;
        const shouldLevelUp = currentTotalXP >= end;

        state.completedChallenges++;

        if (shouldLevelUp) {
            state.level++;

            const remainingXp = currentTotalXP - end;
            const xpToNextLevel = Math.pow((state.level + 1) * 4, 2)
            state.xp = {
                current: remainingXp,
                start: 0,
                end: xpToNextLevel,
            };
        } else {
            state.xp = {
                ...state.xp,
                current: currentTotalXP,
            };
        }
    },
    [Mutations.SAVE_COOKIE_DATA](state, cookieData) {
        state.level = cookieData.level;
        state.xp = cookieData.xp;
        state.completedChallenges = cookieData.completedChallenges;
    },
} as MutationsInterface;