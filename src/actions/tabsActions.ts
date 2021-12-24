import { TAB_FAST, TAB_CHEAP } from "./actionTypes"

export const tabFast = () => {
    return {
        type: TAB_FAST,
        payload: {
            cheap: false,
            fast: true,
        },
    }
};

export const tabCheap = () => {
    return {
        type: TAB_CHEAP,
        payload: {
            cheap: true,
            fast: false,
        },
    }
};