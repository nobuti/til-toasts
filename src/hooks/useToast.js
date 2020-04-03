import { useState } from 'react'
import { v1 as uuid } from 'uuid'

const useToast = () => {
  const [toasts, updateToasts] = useState([])

  const addToast = (toast) => {
    const data = {
      ...toast,
      toast: uuid(),
    }

    updateToasts([...toasts, data])
  }

  const removeToast = (toast) => {
    const filtered = toasts.filter((t) => t.toast !== toast)
    updateToasts(filtered)
  }

  return {
    toasts,
    addToast,
    removeToast,
  }
}

export default useToast
