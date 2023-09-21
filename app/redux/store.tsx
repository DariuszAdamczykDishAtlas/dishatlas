import { configureStore } from '@reduxjs/toolkit';

import uiSlice from './ui-slice';
import recipeSlice from './recipe-slice';

const store = configureStore({
  reducer: { 
    ui: uiSlice.reducer, 
    recipes: recipeSlice.reducer 
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store