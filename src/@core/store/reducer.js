import React, { useReducer } from 'react'
import ApiContext from './context'

// Reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case 'ACTION_1':
      // Xử lý action 1
      return { ...state, data: action.payload }
    case 'ACTION_2':
      // Xử lý action 2
      return { ...state, data: action.payload }

    // Thêm các action khác nếu cần

    default:
      return state
  }
}

const MyContextProvider = ({ children }) => {
  const initialState = {
    data: null
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  return <ApiContext.Provider value={{ state, dispatch }}>{children}</ApiContext.Provider>
}

export default MyContextProvider
