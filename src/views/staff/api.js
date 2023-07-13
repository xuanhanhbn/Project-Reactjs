import baseApiAuth from 'src/utils/baseApiAuth'

export const getApiDefault = url =>
    new Promise((resolve, reject) =>
        baseApiAuth
            .get(url)
            .then(res => resolve(res))
            .catch(err => reject(err))
    )
