import React, { createContext } from 'react'

import useToast from '../hooks/useToast'
const ToastContext = createContext(null)

export const ToastProvider = ({ children }) => {
  const toast = useToast()
  return <ToastContext.Provider value={toast}>{children}</ToastContext.Provider>
}

export default ToastContext
