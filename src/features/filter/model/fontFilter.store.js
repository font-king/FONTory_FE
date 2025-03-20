import { createStore, useStore } from 'zustand'

import { FILTER_OPTIONS } from '@/entities/font/constant/font.constant'

const initialValues = {
  activeFilter: FILTER_OPTIONS[0],
}

export const filterStore = createStore((set) => ({
  ...initialValues,
  actions: {
    setActiveFilter: (filter) => set({ activeFilter: filter }),
  },
}))

export const useActiveFilter = () => useStore(filterStore, (state) => state.activeFilter)
export const useFilterActions = () => useStore(filterStore, (state) => state.actions)
