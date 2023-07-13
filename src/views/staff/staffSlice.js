import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoading: false,
  errorMessage: '',
  isSuccess: false,
  isError: false,
  isCreate: false,
  dataCustomer: [],
  dataError: {}
}

const staff = createSlice({
  name: 'staff',
  initialState,
  reducers: {
    getListStaff(state) {
      state.isLoading = true
    },
    getListStaffFailed(state, action) {
      state.isLoading = false
      state.isError = true
      state.dataError = action.payload || {}
      state.errorMessage = ''
    },
    getListStaffSuccess(state, action) {
      state.isLoading = false
      state.dataStaff = action.payload || []
      state.isSuccess = true
    }
  }
})

export const staffList = staff.actions

export const makeSelectCustomer = state => state.customer

export default staff.reducer