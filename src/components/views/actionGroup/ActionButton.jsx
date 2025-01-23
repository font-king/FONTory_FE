import { useContext } from 'react'
import styled from 'styled-components'

import { ActionGroupContext } from '@/hooks/useActionGroupContext'

import { SquareCloseIcon, TrashIcon, WrenchIcon } from '../icons/NonPropIcons'
import {
  DownloadIcon,
  FilledBookmarkIcon,
  SquareCheckIcon,
  UnfilledBookmarkIcon,
} from '../icons/PropIcons'

export const Download = (props) => {
  const { size } = useContext(ActionGroupContext)
  return (
    <ButtonContainer size={size} {...props}>
      <DownloadIcon size={size} /> 다운로드
    </ButtonContainer>
  )
}

export const Save = ({ isSaved, ...rest }) => {
  const { size } = useContext(ActionGroupContext)
  return (
    <ButtonContainer size={size} {...rest}>
      {isSaved ? (
        <>
          <FilledBookmarkIcon size={size} /> 저장취소
        </>
      ) : (
        <>
          <UnfilledBookmarkIcon size={size} /> 저장하기
        </>
      )}
    </ButtonContainer>
  )
}

export const Cancel = (props) => {
  const { size } = useContext(ActionGroupContext)
  return (
    <ButtonContainer size={size} {...props}>
      <SquareCloseIcon /> 취소하기
    </ButtonContainer>
  )
}

export const Delete = (props) => {
  const { size } = useContext(ActionGroupContext)
  return (
    <ButtonContainer size={size} {...props}>
      <TrashIcon /> 삭제하기
    </ButtonContainer>
  )
}

export const Edit = (props) => {
  const { size } = useContext(ActionGroupContext)
  return (
    <ButtonContainer size={size} {...props}>
      <WrenchIcon /> 수정하기
    </ButtonContainer>
  )
}

export const Complete = (props) => {
  const { size } = useContext(ActionGroupContext)
  return (
    <ButtonContainer size={size} {...props}>
      <SquareCheckIcon isActive size={size} /> 수정완료
    </ButtonContainer>
  )
}

const ButtonContainer = styled.button`
  ${({ theme, size }) => theme.flexBox('row', 'center', undefined, size === 'sm' ? 'xs' : 'md')};
  ${({ theme, size }) => theme.font(size === 'sm' ? 900 : 500, theme.colors.grey[600])};
  ${({ theme, size }) => theme.padding(size === 'sm' ? 'sm' : 'lg', 0, 0)};
  background: white;
`
