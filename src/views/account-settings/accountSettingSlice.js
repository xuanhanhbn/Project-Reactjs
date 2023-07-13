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

const accountSetting = createSlice({
  name: 'accountSetting',
  initialState,
  reducers: {
    changePassword(state) {
      state.isLoading = true
    },
    changePasswordFailed(state, action) {
      state.isLoading = false
      state.isError = true
      state.dataError = action.payload || {}
      state.errorMessage = ''
    },
    changePasswordSuccess(state, action) {
      state.isLoading = false
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

export const settingAction = accountSetting.actions

export const makeSelectSetting = state => state.accountSetting

export default accountSetting.reducer
