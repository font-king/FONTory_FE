import { SectionLayout } from '@/shared/ui/SectionLayout'
import { FontProgressTable } from '@/widgets/font-progress-table/ui/FontProgressTable'

export const FontDesignProgress = () => {
  return (
    <SectionLayout>
      <SectionLayout.TitleContainer>
        <SectionLayout.Title>폰트 제작 상황</SectionLayout.Title>
      </SectionLayout.TitleContainer>

      <FontProgressTable />
    </SectionLayout>
  )
}
