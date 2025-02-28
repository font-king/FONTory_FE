import { useContext } from 'react'

import { SearchStoreContext } from '../model/search.store'

export const useSearchContext = () => {
  const store = useContext(SearchStoreContext)
  if (!store) {
    throw new Error('useSearchContext는 SearchStoreProvider 내부에서만 사용 가능')
  }
  return store
}
