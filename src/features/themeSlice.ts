import {createSlice} from '@reduxjs/toolkit'
import {darkTheme} from '../styles/themes';
import {RootState} from "../app/store";

type themeSliceState = {
  theme: {
    name: string,
    PRIMARY_BACKGROUND_COLOR: string,
    PRIMARY_TEXT_COLOR: string,
    PRIMARY: string
  }
}

const initialState: themeSliceState = {
  theme: darkTheme
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme(state, action) {
      state.theme = action.payload;
    }
  },
})

export const themeSelector = (state: RootState) => state.theme;

export const {setTheme} = themeSlice.actions

export default themeSlice.reducer
