import { SectionLayout } from '@/shared/ui/SectionLayout'
import { FontProgressTable } from '@/widgets/table/FontProgressTable'

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
