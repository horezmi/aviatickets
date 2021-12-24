import {
    TRANSFERS_ALL,
    TRANSFERS_NONE,
    TRANSFERS_ONE,
    TRANSFERS_TWO,
    TRANSFERS_THREE
} from "./actionTypes"

export const transfersAll = (value: boolean) => {
    return {
        type: TRANSFERS_ALL,
        payload: value
    }
};

export const transfersNone = (value: boolean) => {
    return {
        type: TRANSFERS_NONE,
        payload: value,
    }
};

export const transfersOne = (value: boolean) => {
    return {
        type: TRANSFERS_ONE,
        payload: value,
    };
};

export const transfersTwo = (value: boolean) => {
    return {
        type: TRANSFERS_TWO,
        payload: value,
    }
};

export const transfersThree = (value: boolean) => {
    return {
        type: TRANSFERS_THREE,
        payload: value,
    }
};