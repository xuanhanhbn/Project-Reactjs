import { call, put, takeLatest } from 'redux-saga/effects'
import { ticketActions } from './ticketListSlice'
import { getApiDefault, postApiDefault } from './api'

// Lấy danh sách ticket
function* onGetList(data) {
  const payload = data && data?.payload?.search ? data?.payload?.search : ''
  const url = `/CustomerTicket`
  try {
    const response = yield call(getApiDefault, url)
    if (response && response.status === 200) {
      yield put(ticketActions.getListTicketSuccess(response.data))
    } else {
      yield put(ticketActions.getListTicketFailed())
    }
  } catch (error) {
    yield put(ticketActions.getListTicketFailed('internet'))
  }
}

export default function* ticketSaga() {
  yield takeLatest(ticketActions.getListTicket, onGetList)
}
