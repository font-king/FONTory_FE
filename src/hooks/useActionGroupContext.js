import { createContext } from 'react'
import { useContext } from 'react'

export const ActionGroupContext = createContext()

export const useActionGroupContext = () => {
  const context = useContext(ActionGroupContext)

  if (!context) {
    throw new Error('ActionGroupContext.* 컴포넌트만 사용 가능합니다.')
  }
  return context
}
