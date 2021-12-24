import { TICKETS_ALL } from '../actions/actionTypes';

const initialState: any[] = [];

const ticketsReducer = (state = initialState, { type, payload }: any) => {
  switch (type) {
    case TICKETS_ALL:
      return payload;
    default:
      return state;
  }
};

export default ticketsReducer;