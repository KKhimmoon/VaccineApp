import {createSlice,PayloadAction} from "@reduxjs/toolkit"
import {BookingItem } from "../../../interfaces"
type CartState = {
    hospitalItems : BookingItem[]
}
const initialState:CartState = {hospitalItems:[]}
export const bookSlice = createSlice({
    name : "cart",
    initialState,
    reducers: {
        addBooking: (state,action:PayloadAction<BookingItem>) => {
            if(state.hospitalItems.length >= 0){
                state.hospitalItems.pop()
            }
            state.hospitalItems.push(action.payload)
        },
        removeBooking: (state, action:PayloadAction<BookingItem>) => {
            if(state.hospitalItems.length >= 0){
                state.hospitalItems.pop()
            }
        }
    }
})
export const {addBooking,removeBooking} = bookSlice.actions
export default bookSlice.reducer