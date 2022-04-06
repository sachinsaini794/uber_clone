import { createSlice, PayloadAction } from '@reduxjs/toolkit'


const initialState: CounterState = {
  origin: null,
  destination: null,
  travelTimeInfo: null,
}

export const navSlice = createSlice({
	name:'nav',
	initialState,
	reducer: {
		setOrigin: (state, action) => {
			state.origin = action.payload;
		},
		setdestination: (state, action) => {
			state.destination = action.payload;
		},
		setTravelInfo: (state, action) => {
			state.travelTimeInfo = action.payload;
		}
	}
});

export const { setOrigin, setdestination, setTravelInfo} = navSlice.actions;

// selecter
export const selectOrigin = (state) => state.nav.origin;
export const selectDestination = (state) => state.nav.destination;
export const selectTravelTimeInfo= (state) => state.nav.travelTimeInfo;

export default navSlice.reducer;