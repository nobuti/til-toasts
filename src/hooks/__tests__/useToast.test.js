import { renderHook, act } from '@testing-library/react-hooks'
import useToast from '../useToast'

describe('useToast', () => {
  it('should initialized properly', () => {
    const { result } = renderHook(() => useToast())
    expect(result.current.toasts).toEqual([])
  })

  it('should add toast properly', () => {
    const { result } = renderHook(() => useToast())
    act(() => {
      result.current.addToast({
        message: 'wadus',
      })
    })

    expect(result.current.toasts.length).toBe(1)
    expect(result.current.toasts[0].toast).toBeDefined()
    expect(result.current.toasts[0].message).toBeDefined()
  })

  it('should remove toast properly', () => {
    const { result } = renderHook(() => useToast())
    act(() => {
      result.current.addToast({
        message: 'wadus',
      })
    })

    expect(result.current.toasts.length).toBe(1)
    const toast = result.current.toasts[0].toast
    act(() => {
      result.current.removeToast(toast)
    })

    expect(result.current.toasts.length).toBe(0)
  })
})
