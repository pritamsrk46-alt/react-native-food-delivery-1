import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartData: [] as any
    },
    reducers: {
        addCart: (state, action) => {
            state.cartData = [...state.cartData, action.payload]
        },

        deleteCart: (state, action) => {
            let cartData = state.cartData;
            for (let i = 0; i < cartData.length; i++) {
                if (cartData[i].id == action.payload.id) {
                    cartData.splice(i, 1)
                    break;
                }

            }
            state.cartData = cartData;
        }
    }
});

export const { addCart, deleteCart } = cartSlice.actions;
export default cartSlice.reducer;