import { FormProvider, useForm } from 'react-hook-form'

import { SearchBar } from './SearchBar'

export const ExplorerSearchBar = () => {
  const formMethod = useForm({ defaultValues: { search: '' } })

  const handleSearch = () => {}

  return (
    <FormProvider {...formMethod}>
      <SearchBar section="search" onSubmit={handleSearch} />
    </FormProvider>
  )
}
