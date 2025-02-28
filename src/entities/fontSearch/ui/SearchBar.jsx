import { useFormContext } from 'react-hook-form'
import styled from 'styled-components'

import { SearchIcon } from '@/shared/ui/icons/NonPropIcons'

export const SearchBar = ({ section, onSubmit }) => {
  const { register, handleSubmit } = useFormContext()

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <Input {...register(section)} placeholder="폰트 이름을 입력해주세요." />
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
