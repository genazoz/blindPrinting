import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {RootState} from "../app/store";

interface TextSliceState {
  textArray: string[];
  text: string,
  isEditing: boolean,
  speed: number,
  accuracy: number,
  taps: number,
  wrongSymbol: number | null,
  currentSymbol: number,
  timer: number,
}

const initialState: TextSliceState = {
  textArray: [],
  text: '',
  isEditing: false,
  speed: 0,
  accuracy: 0,
  taps: 0,
  wrongSymbol: null,
  currentSymbol: 0,
  timer: 0,
};

export const textSlice = createSlice({
  name: 'text',
  initialState,
  reducers: {
    setTextArray(state, action: PayloadAction<{ textArray: string[] }>) {
      state.textArray = action.payload.textArray;
    },
    setIsEditing(state, action: PayloadAction<{ isEditing: boolean }>) {
      state.isEditing = action.payload.isEditing;
    },
    setAccuracy(state, action: PayloadAction<{ accuracy: number }>) {
      state.accuracy = action.payload.accuracy;
    },
    setSpeed(state, action: PayloadAction<{ speed: number }>) {
      state.speed = action.payload.speed;
    },
    setText(state, action: PayloadAction<{ text: string }>) {
      state.text = action.payload.text;
    },
    setTaps(state, action: PayloadAction<{ taps: number }>) {
      state.taps = action.payload.taps;
    },
    setWrongSymbol(state) {
      state.wrongSymbol = state.currentSymbol;
    },
    incrementTaps(state) {
      state.taps++;
    },
    incrementCurrentSymbol(state) {
      state.currentSymbol++;
    },
    incrementTimer(state) {
      state.timer++;
    },
    resetState(state) {
      state.isEditing = false;
      state.speed = 0;
      state.taps = 0;
      state.currentSymbol = 0;
      state.wrongSymbol = 0;
      state.timer = 0;
      state.accuracy = 0;
      state.text = '';
    },
  },
})
export const textSelector = (state: RootState) => state.text;

export const {resetState, setText, setIsEditing, incrementCurrentSymbol, incrementTaps, setWrongSymbol, setTextArray, setAccuracy, setSpeed, setTaps, incrementTimer} = textSlice.actions

export default textSlice.reducer
