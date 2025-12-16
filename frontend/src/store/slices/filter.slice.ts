import { createSlice } from "@reduxjs/toolkit"

interface FilterState {
  search: string
}

const initialState = {
  search: ""
} satisfies FilterState as FilterState

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload
    }
  }
})

const filterReducer = filterSlice.reducer
export default filterReducer
export const { setSearch } = filterSlice.actions