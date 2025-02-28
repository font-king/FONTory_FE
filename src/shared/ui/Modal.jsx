import ReactDOM from 'react-dom'
import styled from 'styled-components'

import { useIsModalOpen, useModalActions } from '@/shared/model/modal.store'

const ModalPortal = ({ children }) => {
  const modalRoot = document.getElementById('modal')
  if (!modalRoot) return null

  return ReactDOM.createPortal(children, modalRoot)
}

export const Modal = ({ onSubmit, title, children }) => {
  const isModalOpen = useIsModalOpen()
  const { closeModal } = useModalActions()

  if (!isModalOpen) return null

  return (
    <ModalPortal>
      <ModalOverlay>
        <ModalBackdrop onClick={closeModal} aria-label="모달 닫기" />
        <ModalContent onSubmit={onSubmit}>
          <Header>
            <button type="button">취소</button>
            <h5>{title}</h5>
            <button type="submit">완료</button>
          </Header>
          {children}
        </ModalContent>
      </ModalOverlay>
    </ModalPortal>
  )
}

const ModalOverlay = styled.div`
  ${({ theme }) => theme.gridBox(undefined, undefined, 'center', 'center')};
  position: fixed;
  inset: 0;
  z-index: 500;
`

const ModalBackdrop = styled.button`
  position: fixed;
  inset: 0;
  background-color: ${({ theme }) => theme.colors.ect.dimmed};
`

const ModalContent = styled.form`
  ${({ theme }) => `
    ${theme.flexBox('column', undefined, undefined, '4xl')}
    ${theme.padding('modal')}
    ${theme.borderRadius('lg')}
  `}
  position: absolute;
  min-width: 61rem;
  background-color: white;
  z-index: 600;
`

const Header = styled.div`
  ${({ theme }) => theme.flexBox('row', 'center', 'space-between')}

  & > h5 {
    ${({ theme }) => theme.font(200, theme.colors.grey[700])};
  }

  & > button {
    ${({ theme }) => `
      ${theme.font(500, theme.colors.grey[600])}
      ${theme.padding('sm', 'md')}
    `}
  }
`
