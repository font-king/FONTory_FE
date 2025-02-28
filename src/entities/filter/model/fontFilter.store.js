import { createStore, useStore } from 'zustand'

export const FILTER_OPTIONS = ['전체', '조회순', '북마크순']

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
