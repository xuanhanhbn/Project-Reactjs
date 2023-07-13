import { call, put, takeLatest } from 'redux-saga/effects'
import { staffLists } from './staffSlice'
import { getApiDefault } from './api'

function* onGetList() {
    const url = '/staff'
    try {
        const response = yield call(getApiDefault, url)
        if (response && response.status === 200) {
            yield put(staffLists.getListStaffSuccess(response.data))
        } else {
            yield put(staffLists.getListStaffFailed())
        }
    } catch (error) {
        yield put(staffLists.getListStaffFailed('internet'))
    }
}


export default function* staffSaga() {
    yield takeLatest(staffLists.getListStaff, onGetList)
}
