import { configureStore } from '@reduxjs/toolkit';
// import { tasksReducer } from './tasksSlice';
// import { filtersReducer } from './filtersSlice';
import { contactsReducer } from './contactsSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    // tasks: tasksReducer,
    // filters: filtersReducer,
  },
});
