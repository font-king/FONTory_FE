import styled from 'styled-components'

import { useToggle } from '@/shared/hook/useToggle'

import { FontCardWithArrow } from './fontCard/FontCardWithArrow'
import { ActionGroup } from './actionGroup'
import { SectionLayout } from './SectionLayout'

const RecommendedSection = ({ recommendList }) => {
  return (
    <div>
      <Label>제작자의 다른 폰트</Label>
      <RecommendFontList>
        {recommendList.map((font, index) => (
          <FontCardWithArrow key={index} font={font} />
        ))}
      </RecommendFontList>
    </div>
  )
}

const ActionGroupSection = ({ bookmarkState, isMyFont, onEdit }) => {
  const [isBookmarked, toggleBookmark] = useToggle(bookmarkState)
  const handleDownload = () => {}

  const handleBookmark = () => {
    toggleBookmark()
  }

  return (
    <ActionGroup size="lg">
      <ActionGroup.Download onClick={handleDownload} />
      {isMyFont && <ActionGroup.Edit onClick={onEdit} />}
      <ActionGroup.Save isSaved={isBookmarked} onClick={handleBookmark} />
    </ActionGroup>
  )
}

export const FontDetail = ({ font, isMyFont, onEdit }) => {
  return (
    <SectionLayout>
      <ProfileSection>
        <div className="profile" />

        <FontInfo>
          <h6 className="font-name">{font.profile.name}</h6>
          <p className="designer-name">{font.profile.designer}</p>
        </FontInfo>
      </ProfileSection>

      <Content>
        <StatisticsSection>
          <div className="statistics-item">
            <Label>북마크 수</Label>
            <p>{font.bookmark}회</p>
          </div>

          <div className="statistics-item">
            <Label>다운로드 수</Label>
            <p>{font.bookmark}회</p>
          </div>
        </StatisticsSection>

        <div>
          <Label>예시 문구</Label>
          <TextArea readOnly value={font.preview} />
        </div>

        <div>
          <Label>미리보기</Label>
          <TextArea id="example" placeholder="원하는 내용을 입력해보세요." />
        </div>

        {!isMyFont && <RecommendedSection recommendList={font.recommend} />}
      </Content>

      <ActionGroupSection bookmarkState={font.isBookmarked} isMyFont={isMyFont} onEdit={onEdit} />
    </SectionLayout>
  )
}

const ProfileSection = styled.section`
  ${({ theme }) => theme.flexBox('row', 'center', undefined, 'lg')};
  ${({ theme }) => theme.margin(0, 0, '4xl')};

  .profile {
    ${({ theme }) => theme.borderRadius('full')};
    ${({ theme }) => theme.border('divider')};
    width: 10rem;
    height: 10rem;
  }
`

const FontInfo = styled.div`
  ${({ theme }) => theme.flexBox('column', undefined, undefined, 'sm')};

  .font-name {
    ${({ theme }) => theme.font(300)};
  }

  .designer-name {
    ${({ theme }) => theme.font(500, theme.colors.grey[400])};
  }
`

const Content = styled.div`
  ${({ theme }) => theme.flexBox('column', undefined, undefined, '4xl')};
  ${({ theme }) => theme.margin(0, 0, '2xl')};
  ${({ theme }) => theme.font(500, theme.colors.grey[600])};
`

const StatisticsSection = styled.section`
  ${({ theme }) => theme.gridBox('1fr 1fr')};

  .statistics-item {
    ${({ theme }) => theme.flexBox('row', 'center', undefined, 'lg')};
    & > p {
      ${({ theme }) => theme.margin(0)};
    }
  }
`

const Label = styled.p`
  ${({ theme }) => theme.margin(0, 0, 'md')};
  ${({ theme }) => theme.font(500, theme.colors.blue[500])};
`

const TextArea = styled.textarea`
  ${({ theme }) => theme.padding('xl', '2xl')};
  ${({ theme }) => theme.border('input')};
  ${({ theme }) => theme.borderRadius('lg')};
  ${({ theme }) => theme.font(500, theme.colors.grey[700])};
  width: 100%;
  box-sizing: border-box;
  resize: none;
`

const RecommendFontList = styled.div`
  ${({ theme }) => theme.gridBox('1fr 1fr 1fr', undefined, undefined, undefined, 'md')}
`
