import api from 'src/utils/baseApi'
import baseApiUrlUser from 'src/utils/baseApiAuth'

export const getApiUser = url =>
  new Promise((resolve, reject) =>
    baseApiUrlUser
      .get(url)
      .then(res => resolve(res))
      .catch(err => reject(err))
  )

export const postApiProduct = (url, data) =>
  new Promise((resolve, reject) =>
    api
      .post(url, data)
      .then(res => resolve(res))
      .catch(err => reject(err))
  )
