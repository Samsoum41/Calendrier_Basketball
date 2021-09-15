import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FavoriteState {
    value: Array<string>
}

const initialState: FavoriteState = {
    value: [],
}

/* This slice serves to store the list of the user favorite NBA teams */
export const favoriteSlice = createSlice({
    name: 'favorite',
    initialState,
    reducers: {
        // To add a team to favorites
        add: (state, action: PayloadAction<string>) => {
            // Here we bypass immutable issue thanks Immer !
            state.value.push(action.payload);
        },
        // To delete a team from favorites
        drop: (state, action: PayloadAction<string>) => {
            state.value = state.value.filter((teamName) => teamName!==action.payload);
        },
    },
});

export const { add, drop } = favoriteSlice.actions
export default favoriteSlice.reducer