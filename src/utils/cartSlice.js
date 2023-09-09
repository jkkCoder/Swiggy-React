import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            const itemExist = state.items.find(item => item?.card?.info?.id === action.payload.card.info.id)
            if(!itemExist)
                state.items.push(action.payload)
        },
        removeItems: (state,action) => {
            const newItems = [...state.items]
            const filteredItem = (newItems.filter(item => item?.card?.info?.id !== action?.payload))
            
            
            return {items: filteredItem}
        },
        clearCart: (state) => {
            state.items.length = 0
        }
    }
})

export const {addItem, removeItems, clearCart} = cartSlice.actions

export default cartSlice.reducer;