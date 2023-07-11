import { call, put, takeLatest } from 'redux-saga/effects'
import { customerActions } from './customerSlice'
import { getApiDefault, postApiDefault } from './api'

// Lấy danh sách khách hàng
function* onGetList() {
  const url = '/Customer'
  try {
    const response = yield call(getApiDefault, url)
    if (response && response.status === 200) {
      yield put(customerActions.getListCustomerSuccess(response.data))
    } else {
      yield put(customerActions.getListCustomerFailed())
    }
  } catch (error) {
    yield put(customerActions.getListCustomerFailed('internet'))
  }
}

// Thêm mới khách hàng
function* onCreateCustomer(data) {
  const payload = data?.payload
  const url = '/Customer'
  try {
    const response = yield call(postApiDefault, url, payload)
    console.log('response: ', response)

    if (response && response.status === 200) {
      yield put(customerActions.createCustomerSuccess(response.data))
    } else {
      yield put(customerActions.createCustomerFailed())
    }
  } catch (error) {
    yield put(customerActions.createCustomerFailed('internet'))
  }
}

export default function* customerSaga() {
  yield takeLatest(customerActions.getListCustomer, onGetList)
  yield takeLatest(customerActions.createCustomer, onCreateCustomer)
}
