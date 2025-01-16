import { createContext } from 'react'
import { useContext } from 'react'

export const InputGroupContext = createContext('')

export const useInputGroupContext = () => {
  const context = useContext(InputGroupContext)

  if (!context) {
    throw new Error('InputGroupContext.* 컴포넌트만 사용 가능합니다.')
  }
  return context
}
