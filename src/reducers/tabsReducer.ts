import { TAB_FAST } from '../actions/actionTypes';
import { TAB_CHEAP } from '../actions/actionTypes';

const initialState: {} = {
    cheap: true,
    fast: false,
};

const tabsReducer = (state = initialState, { type, payload }: any) => {
    switch (type) {
        case TAB_FAST:
            return payload;
        case TAB_CHEAP:
            return payload;
        default:
            return state;
    }
};

export default tabsReducer;