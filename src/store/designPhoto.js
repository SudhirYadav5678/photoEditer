import { createSlice } from "@reduxjs/toolkit";

const designPhotoSlice = createSlice({
    name: "design",
    initialState: {
        design: null
    },
    reducers: {
        // actions
        setDesign: (state, action) => {
            state.design = action.payload;
        }
    }
});
export const { setDesign } = designPhotoSlice.actions;
export default designPhotoSlice.reducer;