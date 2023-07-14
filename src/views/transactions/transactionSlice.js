import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoading: false,
  errorMessage: '',
  isSuccess: false,
  isError: false,
  isCreate: false,
  dataTransaction: [],
  dataError: {}
}

const transaction = createSlice({
  name: 'transaction',
  initialState,
  reducers: {
    getListTransaction(state) {
      state.isLoading = true
    },
    getListTransactionFailed(state, action) {
      state.isLoading = false
      state.isError = true
      state.dataError = action.payload || {}
      state.errorMessage = ''
    },
    getListTransactionSuccess(state, action) {
      state.isLoading = false
      state.dataTransaction = action.payload || []
      state.isSuccess = true
    },
    clear(state) {
      state.isLoading = false
      state.isSuccess = false
      state.isError = false
      state.isCreate = false
    }
  }
})

export const transactionActions = transaction.actions

export const makeSelectTransaction = state => state.transaction

export default transaction.reducer
