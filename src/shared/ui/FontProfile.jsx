import styled from 'styled-components'

export const FontProfile = ({ fontName, authorName, size = 'md' }) => {
  return (
    <Container $size={size}>
      {/* 프로필 이미지 변경 예정 */}
      <ProfileImage className="profile" $size={size} />

      <ProfileInformation $size={size}>
        <FontName $size={size}>{fontName}</FontName>
        <AuthorName $size={size}>{authorName}</AuthorName>
      </ProfileInformation>
    </Container>
  )
}

const sizeStyles = {
  md: {
    profileSize: '5.6rem',
    containerGap: 'lg',
    textGap: 'xs',
    fontSizeFontName: 400,
    fontSizeAuthorName: 800,
  },
  lg: {
    profileSize: '10rem',
    containerGap: '4rem',
    textGap: 'md',
    fontSizeFontName: 200,
    fontSizeAuthorName: 400,
  },
}

const Container = styled.div`
  ${({ theme, $size }) => theme.flexBox('row', 'center', undefined, sizeStyles[$size].containerGap)}
`

const ProfileImage = styled.div`
  ${({ theme, $size }) => `
      ${theme.borderRadius('full')}
      ${theme.border('divider')}
      width: ${sizeStyles[$size].profileSize};
      height: ${sizeStyles[$size].profileSize};
    `}
  flex-shrink: 0;
`

const ProfileInformation = styled.div`
  ${({ theme, $size }) => theme.flexBox('column', undefined, undefined, sizeStyles[$size].textGap)}
  overflow: hidden;
`

const FontName = styled.h6`
  ${({ theme, $size }) => theme.font(sizeStyles[$size].fontSizeFontName)}
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

const AuthorName = styled.p`
  ${({ theme, $size }) => theme.font(sizeStyles[$size].fontSizeAuthorName, theme.colors.grey[400])}
`
