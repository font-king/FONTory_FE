import styled from 'styled-components'

import { ModalPortal } from './ModalPortal'

export const Modal = ({ isOpen, onClose, onSubmit, title, children }) => {
  if (!isOpen) return null

  return (
    <ModalPortal>
      <ModalOverlay>
        <ModalBackdrop onClick={onClose} aria-label="모달 닫기" />
        <ModalContent onSubmit={onSubmit}>
          <Header>
            <Title>{title}</Title>
            <button type="submit" className="submit-button">
              완료
            </button>
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
  ${({ theme }) => theme.flexBox('column', undefined, undefined, '4xl')};
  ${({ theme }) => theme.borderRadius('lg')};
  ${({ theme }) => theme.padding('modal')};
  position: absolute;
  min-width: 61rem;
  background-color: white;
  z-index: 600;
`

const Header = styled.div`
  position: relative;

  .submit-button {
    ${({ theme }) => theme.font(500, theme.colors.grey[600])};
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
  }
`

const Title = styled.h5`
  ${({ theme }) => theme.font(200, theme.colors.grey[700])};
  text-align: center;
`
