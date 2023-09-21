import { createSlice } from '@reduxjs/toolkit';

type initialState = {
    nightMode: boolean, 
    notification: {}, 
    lng: string,
    colorDarkA: string,
    colorDarkB: string,
    colorDarkBG: string,
    colorLightA: string,
    colorLightB: string,
    colorLightBG: string,
    valid: boolean    
}

const initialState = {
  nightMode: false, 
  notification: {}, 
  lng: 'pl',
  colorDarkA: '#7928CA',
  colorDarkB: '#FF0080',
  colorDarkBG: 'rgb(26, 32, 44)',
  colorLightA: 'yellow.200',
  colorLightB: 'red.300',
  colorLightBG: 'white',
  valid: false    
 } as initialState

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    // toggle(state) {
    //   state.nightMode = !state.nightMode;
    // },
    // changeLanguage(state, action) {
    //   state.lng = action.payload.lng;
    // },
    // changeColor(state, action) {
    //   if (action.payload.tag === 'A') {
    //     const colorKeyA = action.payload.colorMode === 'dark' ? 'colorDarkA' : 'colorLightA';
    //     state[colorKeyA] = action.payload.color;
    //   }
    //   if (action.payload.tag === 'B') {
    //     const colorKeyB = action.payload.colorMode === 'dark' ? 'colorDarkB' : 'colorLightB';
    //     state[colorKeyB] = action.payload.color;
    //   }
    //   if (action.payload.tag === 'BG') {
    //     const colorKeyBG = action.payload.colorMode === 'dark' ? 'colorDarkBG' : 'colorLightBG';
    //     state[colorKeyBG] = action.payload.color;
    //   }
    // },
    // showNotification(state, action) {
    //   state.notification = {
    //     status: action.payload.status,
    //     title: action.payload.title,
    //     message: action.payload.message,
    //   };
    // },
    // valid(state, action) {
    //   state.valid = true;
    // }
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
