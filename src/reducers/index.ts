import { combineReducers } from 'redux';

import sortedReducer from './sortedTicketsReducer';
import ticketsReducer from './ticketsReducer';
import tabsReducer from './tabsReducer';
import transfersReducer from './transfersReducer';

const rootReducer = combineReducers({
  sorted: sortedReducer,
  tickets: ticketsReducer,
  tabs: tabsReducer,
  transfers: transfersReducer,
});

export default rootReducer;