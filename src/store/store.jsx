import { configureStore } from '@reduxjs/toolkit'
import BookSlice  from './reducers/BookSlice'

export const store = configureStore({
  reducer: {
    BookSlice
  },
})