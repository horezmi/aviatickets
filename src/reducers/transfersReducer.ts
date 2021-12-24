import { TRANSFERS_ALL, TRANSFERS_ONE, TRANSFERS_TWO, TRANSFERS_THREE, TRANSFERS_NONE, TRANSFERS } from '../actions/actionTypes';

const initialState: {} = {
    all: true,
    one: true,
    two: true,
    three: true,
    none: true,
};

const setAllTransfers = (value: boolean) => {
    return {
        all: value,
        one: value,
        two: value,
        three: value,
        none: value,
    }
};
const setOneTransfers = (state: any, value: boolean) => {
    return {
        ...state, one: value, all: state.two && state.three && state.none && value,
    }
};
const setTwoTransfers = (state: any, value: boolean) => {
    return {
        ...state, two: value, all: state.one && state.three && state.none && value,
    }
};
const setThreeTransfers = (state: any, value: boolean) => {
    return {
        ...state, three: value, all: state.one && state.two && state.none && value,
    }
};
const setNoneTransfers = (value: boolean) => {
    return {
        all: !value,
        one: !value,
        two: !value,
        three: !value,
        none: value,
    }
};

const transdersReducer = (state = initialState, { type, payload }: any) => {
    switch (type) {
        case TRANSFERS_ALL:
            return setAllTransfers(payload);
        case TRANSFERS_ONE:
            return setOneTransfers(state, payload);
        case TRANSFERS_TWO:
            return setTwoTransfers(state, payload);
        case TRANSFERS_THREE:
            return setThreeTransfers(state, payload);
        case TRANSFERS_NONE:
            return setNoneTransfers(payload);
        default:
            return state;
    }
};

export default transdersReducer;