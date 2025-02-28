import { useForm } from 'react-hook-form'
import styled from 'styled-components'

import { SearchIcon } from '@/shared/ui/icons/NonPropIcons'

import { useSearchActions } from '../model/search.store'

export const SearchBar = () => {
  const formMethod = useForm({ defaultValues: { search: '' } })
  const { register, handleSubmit } = formMethod
  const { setKeyword } = useSearchActions()

  const handleSearch = (formData) => {
    setKeyword(formData.search)
  }

  return (
    <FormContainer onSubmit={handleSubmit(handleSearch)}>
      <Input {...register('search')} placeholder="폰트 이름을 입력해주세요." />
      <button type="submit">
        <SearchIcon />
      </button>
    </FormContainer>
  )
}

const FormContainer = styled.form`
  ${({ theme }) => `
    ${theme.flexBox('row', 'center', undefined, 'md')}
    ${theme.padding('md', 'lg')}
    ${theme.borderRadius('sm')}
    background-color: ${theme.colors.grey[100]};
  `}
  width: 100%;
`

const Input = styled.input`
  flex-grow: 1;
`
