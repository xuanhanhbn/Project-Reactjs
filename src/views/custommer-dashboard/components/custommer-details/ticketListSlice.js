import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoading: false,
  errorMessage: '',
  isSuccess: false,
  isError: false,
  isCreate: false,
  isCreateFailed: false,
  dataTicket: [],
  dataError: {}
}

const ticket = createSlice({
  name: 'ticket',
  initialState,
  reducers: {
    getListTicket(state) {
      state.isLoading = true
    },
    getListTicketFailed(state, action) {
      state.isLoading = false
      state.isError = true
      state.dataError = action.payload || {}
      state.errorMessage = ''
    },
    getListTicketSuccess(state, action) {
      state.isLoading = false
      state.dataCustomer = action.payload || []
      state.isSuccess = true
    },

    clear(state) {
      state.isLoading = false
      state.isSuccess = false
      state.isError = false
      state.isCreate = false
      state.isCreateFailed = false
    }
  }
})

export const ticketActions = ticket.actions

export const makeSelectTicket = state => state.ticket

export default ticket.reducer
