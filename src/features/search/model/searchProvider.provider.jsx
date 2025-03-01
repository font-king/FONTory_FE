import { modalStore } from './modal.store'
import { SearchStoreContext } from './search.store'

export const SearchStoreProvider = ({ children }) => {
  return <SearchStoreContext.Provider value={modalStore}>{children}</SearchStoreContext.Provider>
}
