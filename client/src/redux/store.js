import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slice/CouterSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer
  },
})