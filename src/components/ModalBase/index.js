import React from 'react'
import PropTypes from 'prop-types'
import { ModalContainer } from './styles'

export function ModalBase({ isOpen, onClose, children }) {
  return (
    <ModalContainer
      open={isOpen}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      {children}
    </ModalContainer>
  )
}

ModalBase.propTypes = {
  /** Tells if the modal is open */
  isOpen: PropTypes.bool.isRequired,
  /** Function called on modal close */
  onClose: PropTypes.func.isRequired,
  /** Children content */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}
