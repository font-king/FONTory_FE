import { createStore, useStore } from 'zustand'

const initialValues = {
  font: {
    name: '',
    example: '',
  },
  isMyFont: true,
}

/**
 * todo: isMyFont 수정
 */

export const fontDetailStore = createStore((set) => ({
  ...initialValues,
  actions: {
    setFontDetail: (font) => set({ font, isMyFont: true }),
  },
}))

export const useFontDetail = () => useStore(fontDetailStore, (state) => state.font)
export const useIsMyFont = () => useStore(fontDetailStore, (state) => state.isMyFont)
export const useFontDetailActions = () => useStore(fontDetailStore, (state) => state.actions)
