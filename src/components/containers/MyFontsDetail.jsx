import { FormProvider } from 'react-hook-form'
import styled from 'styled-components'

import { useBoolean } from '@/hooks/useBoolean'
import { useFontEditForm } from '@/hooks/useForms'
import { FORM_ATTRIBUTE } from '@/utils/constants'

import { FontDetail } from '../domains/FontDetail'
import { Button } from '../views/Button'
import { InputGroup } from '../views/inputGroup'
import { Modal } from '../views/modal/modal'

const dummyFont = {
  profile: {
    name: '가나다체',
    designer: '고로케',
  },
  bookmark: 32,
  download: 422,
  preview: '동해물과 백두산이 마르고 닳도록',
  isBookmarked: false,
}

export const MyFontsDetail = () => {
  const [isModalOpen, openModal, closeModal] = useBoolean(false)
  const formMethod = useFontEditForm()
  const { handleSubmit } = formMethod

  const submitForm = (formData) => {
    console.log(formData)
    closeModal()
  }

  return (
    <>
      <FontDetail isMyFont font={dummyFont} onEdit={openModal} />

      <FormProvider {...formMethod}>
        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          onSubmit={handleSubmit(submitForm)}
          title="내 폰트 수정"
        >
          <GridContainer>
            <InputGroup section={FORM_ATTRIBUTE.NAME.section}>
              <InputGroup.Label label={FORM_ATTRIBUTE.NAME.label} />
              <InputGroup.Input {...FORM_ATTRIBUTE.NAME.input} />
            </InputGroup>

            <Button size="lg">중복 검사</Button>
          </GridContainer>

          <InputGroup section={FORM_ATTRIBUTE.PREVIEW.section}>
            <InputGroup.Label label={FORM_ATTRIBUTE.PREVIEW.label} />
            <InputGroup.TextArea {...FORM_ATTRIBUTE.PREVIEW.input} />
          </InputGroup>
        </Modal>
      </FormProvider>
    </>
  )
}

const GridContainer = styled.div`
  ${({ theme }) => theme.flexBox('row', 'flex-end', undefined, 'md')};
`
