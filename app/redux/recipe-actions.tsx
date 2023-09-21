import { uiActions } from './ui-slice';
import { recipeActions } from './recipe-slice';

export const putRecipeDescription = (payload) => {
  return async (dispatch) => {
    console.log('putRecipeDescription', payload);

    const sendRequest = async () => {

      const response = await fetch(
        'https://dishatlas.com/api/?apiFunctionName=putRecipeDescription&lang='+payload.lng
      ,{
        method: 'PUT',
        body: JSON.stringify({
          id: payload.id,
          value: payload.editedValue,
        }),
      });

      if (!response.ok) {
        throw new Error('Could not put recipe description!');
      }
    };
    
    try {

        await sendRequest();

        dispatch(
          recipeActions.replaceRecipeDescription({
            id: payload.id,
            value: payload.editedValue,
          })
        );
          
      } catch (error) {
        dispatch(
          uiActions.showNotification({
            status: 'error',
            title: 'Error!',
            message: 'Sending cart data failed!',
          })
        );
      }
  };
};
export const putRecipeSourceText = (payload) => {
  return async (dispatch) => {
    console.log('putRecipeSourceText', payload);

    const sendRequest = async () => {

      const response = await fetch(
        'https://dishatlas.com/api/?apiFunctionName=putRecipeSourceText&lang='+payload.lng
      ,{
        method: 'PUT',
        body: JSON.stringify({
          id: payload.id,
          value: payload.editedText,
        }),
      });

      if (!response.ok) {
        throw new Error('Could not put recipe source text!');
      }
    };
    
    try {

        await sendRequest();

        dispatch(
           recipeActions.replaceRecipeSourceText({
             id: payload.id,
             value: payload.editedText,
           })
        );
        
      } catch (error) {
        dispatch(
          uiActions.showNotification({
            status: 'error',
            title: 'Error!',
            message: 'Sending cart data failed!',
          })
        );
      }
  };
};
export const hideRecipe = (payload) => {
  return async (dispatch) => {
    console.log('hideRecipe', payload);

    const sendRequest = async () => {

      const response = await fetch(
        'https://dishatlas.com/api/?apiFunctionName=hideRecipe'
      ,{
        method: 'PUT',
        body: JSON.stringify({
          id: payload.id,
          value: true,
        }),
      });

      if (!response.ok) {
        throw new Error('Could not hide recipe!');
      }
    };
    
    try {

        await sendRequest();

        dispatch(
          recipeActions.deleteRecipe({
            id: payload.id
          })
        );
          
      } catch (error) {
        dispatch(
          uiActions.showNotification({
            status: 'error',
            title: 'Error!',
            message: 'Recipe hide failed!',
          })
        );
      }
  };
};
export const deleteRecipe = (payload) => {
  return async (dispatch) => {
    console.log('deleteRecipe', payload);

    const sendRequest = async () => {

      const response = await fetch(
        'https://dishatlas.com/api/?apiFunctionName=deleteRecipe'
      ,{
        method: 'PUT',
        body: JSON.stringify({
          id: payload.id
        }),
      });

      if (!response.ok) {
        throw new Error('Could not delete recipe!');
      }
    };
    
    try {

        await sendRequest();

        dispatch(
          recipeActions.deleteRecipe({
            id: payload.id
          })
        );
          
      } catch (error) {
        dispatch(
          uiActions.showNotification({
            status: 'error',
            title: 'Error!',
            message: 'Recipe delete failed!',
          })
        );
      }
  };
};
export const fetchRecipesData = (lng) => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        'https://dishatlas.com/api/?apiFunctionName=getRecipes&lang='+lng
      );

      if (!response.ok) {
        throw new Error('Could not fetch cart data!');
      }

      const data = await response.json();
      
      if (data.valid) {
        dispatch(uiActions.valid());
      }

      return data.dataArray.dataArray;
    };

    try {
      
      const recipesData = await fetchData();
      console.log('recipesData', recipesData);
      dispatch(
        recipeActions.replaceRecipes({
          items: recipesData || []
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Error!2 '+error,
          message: 'Fetching cart data failed!',
        })
      );
    }
  };
};

export const fetchRecipeData = (payload) => {
  console.log('RECIPE!', payload);
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        'https://dishatlas.com/api/?apiFunctionName=getRecipe&lang='+payload.lng+'&link='+payload.link
      );

      if (!response.ok) {
        throw new Error('Could not fetch cart data!');
      }

      const data = await response.json();      
      
      return data.dataArray.dataArray;
    };

    try {
      const recipeData = await fetchData();
      console.log('recipeData', recipeData);
      dispatch(
        recipeActions.replaceRecipe({
          item: recipeData
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Error!2 '+error,
          message: 'Fetching cart data failed!',
        })
      );
    }
  };
};