import { createStore, useStore } from 'zustand'

const initialValues = {
  isModalOpen: false,
}

export const modalStore = createStore((set) => ({
  ...initialValues,
  actions: {
    openModal: () => set({ isModalOpen: true }),
    closeModal: () => set({ isModalOpen: false }),
  },
}))

export const useIsModalOpen = () => useStore(modalStore, (state) => state.isModalOpen)
export const useModalActions = () => useStore(modalStore, (state) => state.actions)
