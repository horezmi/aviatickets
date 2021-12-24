import { SORTED_TICKETS } from '../actions/actionTypes';

const initialState: any[] = [];

const sortedReducer = (state = initialState, { type, payload }: any) => {
  switch (type) {
    case SORTED_TICKETS:
      return payload;
    default:
      return state;
  }
};

export default sortedReducer;