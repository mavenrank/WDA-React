import React from 'react'

const Modal = ({modalcontent}) => {
  return (
    <div className='modal'>
        <span className='modal-name'>{modalcontent}</span>
    </div>
  )
}

export default Modal
