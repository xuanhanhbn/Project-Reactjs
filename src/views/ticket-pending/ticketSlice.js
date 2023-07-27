import { createSlice } from '@reduxjs/toolkit'
import { Satellite } from 'mdi-material-ui'

const initialState = {
  isLoading: false,
  errorMessage: '',
  isSuccess: false,
  isError: false,
  dataTicket: [],
  dataMyTicket: [],
  isChangeSuccess: false,
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
      state.dataTicket = action.payload || []
      state.isSuccess = true
    },

    getListMyTicket(state) {
      state.isLoading = true
    },
    getListMyTicketFailed(state, action) {
      state.isLoading = false
      state.isError = true
      state.dataError = action.payload || {}
      state.errorMessage = ''
    },
    getListMyTicketSuccess(state, action) {
      state.isLoading = false
      state.dataMyTicket = action.payload || []
      state.isSuccess = true
    },

    onChangeAssign(state) {
      state.isLoading = true
    },
    onChangeAssignFailed(state, action) {
      state.isLoading = false
      state.isError = true
      state.dataError = action.payload || {}
      state.errorMessage = ''
    },
    onChangeAssignSuccess(state, action) {
      state.isLoading = false
      state.isChangeSuccess = true
    },

    onChangeProcessing(state) {
      state.isLoading = true
    },
    onChangeProcessingFailed(state, action) {
      state.isLoading = false
      state.isError = true
      state.dataError = action.payload || {}
      state.errorMessage = ''
    },
    onChangeProcessingSuccess(state, action) {
      state.isLoading = false
      state.isChangeSuccess = true
    },

    onChangeComplete(state) {
      state.isLoading = true
    },
    onChangeCompleteFailed(state, action) {
      state.isLoading = false
      state.isError = true
      state.dataError = action.payload || {}
      state.errorMessage = ''
    },
    onChangeCompleteSuccess(state, action) {
      state.isLoading = false
      state.isChangeSuccess = true
    },

    onChangeReopen(state) {
      state.isLoading = true
    },
    onChangeReopenFailed(state, action) {
      state.isLoading = false
      state.isError = true
      state.dataError = action.payload || {}
      state.errorMessage = ''
    },
    onChangeReopenSuccess(state, action) {
      state.isLoading = false
      state.isChangeSuccess = true
    },

    onChangeClose(state) {
      state.isLoading = true
    },
    onChangeCloseFailed(state, action) {
      state.isLoading = false
      state.isError = true
      state.dataError = action.payload || {}
      state.errorMessage = ''
    },
    onChangeCloseSuccess(state, action) {
      state.isLoading = false
      state.isChangeSuccess = true
    },

    clear(state) {
      state.isLoading = false
      state.isSuccess = false
      state.isError = false
      state.isChangeSuccess = false
    }
  }
})

export const ticketActions = ticket.actions

export const makeSelectTicket = state => state.ticket

export default ticket.reducer
