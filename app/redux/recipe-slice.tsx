import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Recipe = {
  name: string,
  recipe: string
}
type initialState = {
  recipes: [Recipe] | [],
  description: string,
  recipe: string,
  changed: boolean
}
const initialState = {
    recipes: [],
    description: 'chuj',
    recipe: '',
    changed: false
} as initialState

const recipeSlice = createSlice({
  name: 'recipes',
  initialState,
  reducers: {
    // replaceRecipes(state, action) {
    //   console.log('action', action);
    //   console.log('state', state);
    //   state.recipes = action.payload.items;
    //   console.log('state', state);
    // },
    // replaceRecipe(state, action) {
    //   console.log('action', action);
    //   console.log('state', state);

    //   const item = action.payload.item[0];
    //   console.log('item', item);
      
    //   const recipe = state.recipes.find((e) => e.id === item.id);
    //   console.log('i r', item.ingredients);
      
    //   if (recipe) {
    //     recipe.ingredients = item.ingredients;
    //     recipe.plates = item.plates;
    //     console.log('i i', recipe.ingredients);
    //   }      
    // },
    // replaceRecipeDescription(state, action) {
    //   const value = action.payload.value;
    //   const id = action.payload.id;
    //   const recipe = state.recipes.find((e) => e.id === id);
    //   console.log('oo1', recipe);
      
    //   if (recipe) {
    //     recipe.description = value;
    //     console.log('oo2', recipe.description);
    //   }      
    // },
    // replaceRecipeSourceText(state, action) {
    //   const value = action.payload.value;
    //   const id = action.payload.id;
    //   const recipe = state.recipes.find((e) => e.id === id);
    //   console.log('kk1', recipe);
      
    //   if (recipe) {
    //     recipe.source_text = value;
    //     console.log('kk2', recipe.source_text);
    //   }      
    // },
    // deleteRecipe(state, action) {
    //   const id = action.payload.id;
    //   state.recipes = state.recipes.filter((e) => e.id !== id);
    // }
    /*
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalQuantity--;
      state.changed = true;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
    */
  },
});

export const recipeActions = recipeSlice.actions;

export default recipeSlice;
