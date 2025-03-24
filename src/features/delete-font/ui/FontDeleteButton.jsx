import { Button } from '@/shared/ui/Button'

import { useDeleteFont } from '../hook/useDeleteFont'

export const FontDeleteButton = () => {
  const { handleDeleteFont } = useDeleteFont()

  return (
    <Button size="lg" onClick={handleDeleteFont}>
      삭제하기
    </Button>
  )
}
