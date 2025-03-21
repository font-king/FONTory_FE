import { useState } from 'react'

export const useModal = () => {
  const [modals, setModals] = useState(false)

  const openModal = () => setModals(true)
  const closeModal = () => setModals(false)

  return {
    isModalOpen: modals,
    openModal,
    closeModal,
  }
}
