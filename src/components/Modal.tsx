import React, { ReactNode, useRef } from 'react';

interface ModalProps {
  children: ReactNode,
  label: string
  color?: string
}

const Modal: React.FC<ModalProps> = ({ children, color, label }) => {
  const ref = useRef<HTMLDialogElement>(null);

  const handleClick = () => {
    ref.current?.showModal();
  }

  return (
    <>
      <button className={`btn btn-sm ${color}`} onClick={() => handleClick()}>{label}</button>
      <dialog ref={ref} className="modal flex justify-center">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
          {children}
        </div>
      </dialog>
    </>
  );
}

export default Modal;