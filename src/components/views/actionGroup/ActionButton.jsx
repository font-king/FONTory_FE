import { useContext } from 'react'
import styled from 'styled-components'

import { ActionGroupContext } from '@/hooks/useActionGroupContext'
import { font } from '@/styles/font'
import { colors } from '@/styles/palette'

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
  display: flex;
  align-items: center;
  gap: ${({ size }) => (size === 'sm' ? '0.4rem' : '0.8rem')};
  padding-top: ${({ size }) => (size === 'sm' ? '0.8rem' : '1.6rem')};
  background: white;
  outline: none;
  border: none;
  font: inherit;
  color: ${colors.grey[600]};
  font-size: ${({ size }) => (size === 'sm' ? font.fontSize[900] : font.fontSize[500])};
  line-height: ${({ size }) => (size === 'sm' ? font.lineHeight[900] : font.lineHeight[500])};
  cursor: pointer;
`
