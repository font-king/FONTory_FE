import { createContext } from 'react'
import { createStore, useStore } from 'zustand'

const initialValues = {
  keyword: null,
}

export const searchStore = createStore((set) => ({
  ...initialValues,
  actions: {
    setKeyword: (keyword) => set({ keyword: keyword }),
  },
}))

export const useSearchKeyword = () => useStore(searchStore, (state) => state.keyword)
export const useSearchActions = () => useStore(searchStore, (state) => state.actions)

export const SearchStoreContext = createContext(null)
