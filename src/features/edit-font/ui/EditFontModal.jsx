import { FormProvider } from 'react-hook-form'

import { useFontDetail } from '@/entities/font/model/fontDetail.store'
import { useCustomForm } from '@/shared/hook/useCustomForm'
import { InputGroup } from '@/shared/ui/inputGroup'
import { Modal } from '@/shared/ui/Modal'

import { editFontAttribute, editFontSchema } from '../config/editFont.schema'
import { useEditFont } from '../hook/useEditFont'

export const EditFontModal = ({ isModalOpen, closeModal }) => {
  const font = useFontDetail()

  const formMethods = useCustomForm(editFontSchema, { defaultValues: { ...font } })

  const { handleSubmit } = formMethods

  const { handleEditFont } = useEditFont(closeModal)

  const { NAME, EXAMPLE } = editFontAttribute

  return (
    <Modal
      title="내 폰트 수정"
      onSubmit={handleSubmit(handleEditFont)}
      isModalOpen={isModalOpen}
      closeModal={closeModal}
    >
      <FormProvider {...formMethods}>
        <InputGroup section={NAME.section}>
          <InputGroup.Label label={NAME.label} />
          <InputGroup.Input {...NAME.input} />
        </InputGroup>

        <InputGroup section={EXAMPLE.section}>
          <InputGroup.Label label={EXAMPLE.label} />
          <InputGroup.TextArea {...EXAMPLE.input} />
        </InputGroup>
      </FormProvider>
    </Modal>
  )
}
