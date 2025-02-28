import { createContext, useContext } from 'react'

import { modalStore } from './modal.store'

const ModalStoreContext = createContext(null)

export const ModalStoreProvider = ({ children }) => {
  return <ModalStoreContext.Provider value={modalStore}>{children}</ModalStoreContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export const useModalContext = () => {
  const store = useContext(ModalStoreContext)
  if (!store) {
    throw new Error('useModalContext는 ModalStoreProvider 내부에서만 사용 가능')
  }
  return store
}
