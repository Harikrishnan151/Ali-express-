import { createSlice } from "@reduxjs/toolkit";


const wishlistSlice=createSlice({
    name:'wishlist',
    initialState:[],
    reducers:{
        addToWishList:(state,action)=>{
            state.push(action.payload)
        },
        deleteFromWishList:(state,action)=>{
            return state.filter(item=>item.id!=action.payload)
            
        }
    }
})
export const{addToWishList,deleteFromWishList}=wishlistSlice.actions;
export default wishlistSlice.reducer