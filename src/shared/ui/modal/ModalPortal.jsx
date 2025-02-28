import ReactDOM from 'react-dom'

export const ModalPortal = ({ children }) => {
  const modalRoot = document.getElementById('modal')
  if (!modalRoot) return null

  return ReactDOM.createPortal(children, modalRoot)
}
