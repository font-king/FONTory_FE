import { FormProvider } from 'react-hook-form'
import styled from 'styled-components'

import { useBoolean } from '@/shared/hook/useBoolean'
import { useFontEditForm } from '@/shared/hook/useForms'
import { FORM_ATTRIBUTE } from '@/shared/lib/constants'
import { Button } from '@/shared/ui/Button'
import { InputGroup } from '@/shared/ui/inputGroup'
import { Modal } from '@/shared/ui/Modal'
import { FontDetailContent } from '@/widgets/font/ui/FontDetailContent'

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

const FontEditModal = ({ closeModal, fontName, preview }) => {
  const formMethod = useFontEditForm({
    defaultValues: {
      name: fontName,
      preview,
    },
  })
  const { handleSubmit } = formMethod

  const submitForm = (formData) => {
    console.log(formData)
    closeModal()
  }

  return (
    <FormProvider {...formMethod}>
      <Modal onSubmit={handleSubmit(submitForm)} title="내 폰트 수정">
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
  )
}

export const MyFontsDetail = () => {
  const [isModalOpen, openModal, closeModal] = useBoolean(false)

  return (
    <>
      <FontDetailContent isMyFont font={dummyFont} onEdit={openModal} />
      <FontEditModal
        isOpen={isModalOpen}
        closeModal={closeModal}
        fontName={dummyFont.profile.name}
        preview={dummyFont.preview}
      />
    </>
  )
}

const GridContainer = styled.div`
  ${({ theme }) => theme.flexBox('row', 'flex-end', undefined, 'md')};
`
