import { useState } from 'react'

export const useBoolean = (initial = false) => {
  const [state, setState] = useState(initial)

  const setTrue = () => {
    setState(true)
  }

  const setFalse = () => {
    setState(false)
  }

  return [state, setTrue, setFalse]
}
