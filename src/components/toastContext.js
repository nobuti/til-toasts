import React, { createContext, useContext } from 'react'

import useToast from '../hooks/useToast'
const ToastContext = createContext(null)

export const useToastContext = () => useContext(ToastContext)
export const ToastProvider = ({ children }) => {
  return (
    <ToastContext.Provider value={useToast()}>{children}</ToastContext.Provider>
  )
}

export default ToastContext
