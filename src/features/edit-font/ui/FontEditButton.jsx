import { useModal } from '@/shared/hook/useModal'
import { Button } from '@/shared/ui/Button'

import { EditFontModal } from './EditFontModal'

export const FontEditButton = () => {
  const { isModalOpen, openModal, closeModal } = useModal()

  return (
    <>
      <Button size="lg" onClick={openModal}>
        수정하기
      </Button>
      <EditFontModal isModalOpen={isModalOpen} closeModal={closeModal} />
    </>
  )
}
