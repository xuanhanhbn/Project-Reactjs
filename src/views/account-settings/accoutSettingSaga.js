import { call, put, takeLatest } from 'redux-saga/effects'
import { postApiDefault } from './api'
import { settingAction } from './accountSettingSlice'

// Lấy danh sách khách hàng
function* onChangePassword(data) {
  const payload = data?.payload
  const url = '/User/change-password'
  try {
    const response = yield call(postApiDefault, url, payload)
    console.log('res: ', response)
    if (response && response.status === 200) {
      yield put(settingAction.changePasswordSuccess(response.data))
    } else {
      yield put(settingAction.changePasswordFailed())
    }
  } catch (error) {
    yield put(settingAction.changePasswordFailed('internet'))
  }
}

export default function* accountSettingSaga() {
  yield takeLatest(settingAction.changePassword, onChangePassword)
}
