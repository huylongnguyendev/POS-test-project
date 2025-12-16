import { configureStore } from "@reduxjs/toolkit"
import productReducer from "./slices/product.slice"
import filterReducer from "./slices/filter.slice"
import cartReducer from "./slices/cart.slice"

export const store = configureStore({
  reducer: {
    product: productReducer,
    filter: filterReducer,
    cart: cartReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>
export type ASppDispatch = typeof store.dispatch