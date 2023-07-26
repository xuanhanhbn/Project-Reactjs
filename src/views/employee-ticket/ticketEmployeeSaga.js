import { call, put, takeLatest } from 'redux-saga/effects'
import { ticketEmployeeActions } from './ticketEmployeeSlice'
import { getApiDefault, postApiDefault } from './api'
import { putApiDefault } from './components/Actions/api'

// Lấy danh sách Ticket
function* onGetList(data) {
  const status = data?.payload

  const url =
    data && data?.payload ? `EmployeeTicket?status=${status?.status}&page=0&size=10` : 'EmployeeTicket?page=0&size=10'
  try {
    const response = yield call(getApiDefault, url)
    if (response && response.status === 200) {
      yield put(ticketEmployeeActions.getListTicketSuccess(response.data))
    } else {
      yield put(ticketEmployeeActions.getListTicketFailed())
    }
  } catch (error) {
    yield put(ticketEmployeeActions.getListTicketFailed('internet'))
  }
}

function* onGetListMyTicket(data) {
  const status = data?.payload

  const url =
    data && data?.payload
      ? `/EmployeeTicket/AssignedTickets?status=${status?.status}&page=0&&size=16`
      : '/EmployeeTicket/AssignedTickets?page=0&&size=16'
  try {
    const response = yield call(getApiDefault, url)
    if (response && response.status === 200) {
      yield put(ticketEmployeeActions.getListMyTicketSuccess(response.data))
    } else {
      yield put(ticketEmployeeActions.getListMyTicketFailed())
    }
  } catch (error) {
    yield put(ticketEmployeeActions.getListMyTicketFailed('internet'))
  }
}

// Assign
function* onChangeAssign(data) {
  const payload = data?.payload
  const url = '/EmployeeTicket/Assign'
  try {
    const response = yield call(putApiDefault, url, payload)
    if (response && response.status === 200) {
      yield put(ticketEmployeeActions.onChangeAssignSuccess(response.data))
    } else {
      yield put(ticketEmployeeActions.onChangeAssignFailed())
    }
  } catch (error) {
    yield put(ticketEmployeeActions.onChangeAssignFailed('internet'))
  }
}

// onChangeProcessing
// function* onChangeProcessing(data) {
//   const payload = data?.payload
//   const url = '/CustomerTicket/Processing'
//   try {
//     const response = yield call(putApiDefault, url, payload)
//     console.log('res: ', response)
//     if (response && response.status === 200) {
//       yield put(ticketActions.onChangeProcessingSuccess(response.data))
//     } else {
//       yield put(ticketActions.onChangeProcessingFailed())
//     }
//   } catch (error) {
//     yield put(ticketActions.onChangeProcessingFailed('internet'))
//   }
// }

// onChangeComplete
// function* onChangeComplete(data) {
//   const payload = data?.payload
//   const url = '/CustomerTicket/Complete'
//   try {
//     const response = yield call(putApiDefault, url, payload)
//     if (response && response.status === 200) {
//       yield put(ticketActions.onChangeCompleteSuccess(response.data))
//     } else {
//       yield put(ticketActions.onChangeCompleteFailed())
//     }
//   } catch (error) {
//     yield put(ticketActions.onChangeCompleteFailed('internet'))
//   }
// }

// Lấy danh sách Ticket
// function* onChangeReopen(data) {
//   const payload = data?.payload
//   const url = '/CustomerTicket/Reopen'
//   try {
//     const response = yield call(putApiDefault, url, payload)
//     if (response && response.status === 200) {
//       yield put(ticketActions.onChangeReopenSuccess(response.data))
//     } else {
//       yield put(ticketActions.onChangeReopenFailed())
//     }
//   } catch (error) {
//     yield put(ticketActions.onChangeReopenFailed('internet'))
//   }
// }

// onChangeClose
// function* onChangeClose(data) {
//   const payload = data?.payload
//   const url = '/CustomerTicket/Close'
//   try {
//     const response = yield call(putApiDefault, url, payload)
//     if (response && response.status === 200) {
//       yield put(ticketActions.onChangeCloseSuccess(response.data))
//     } else {
//       yield put(ticketActions.onChangeCloseFailed())
//     }
//   } catch (error) {
//     yield put(ticketActions.onChangeCloseFailed('internet'))
//   }
// }

export default function* ticketEmployeeSaga() {
  yield takeLatest(ticketEmployeeActions.getListTicket, onGetList)
  yield takeLatest(ticketEmployeeActions.getListMyTicket, onGetListMyTicket)
  yield takeLatest(ticketEmployeeActions.onChangeAssign, onChangeAssign)

  // yield takeLatest(ticketActions.onChangeProcessing, onChangeProcessing)
  // yield takeLatest(ticketActions.onChangeComplete, onChangeComplete)
  // yield takeLatest(ticketActions.onChangeReopen, onChangeReopen)
  // yield takeLatest(ticketActions.onChangeClose, onChangeClose)
}
