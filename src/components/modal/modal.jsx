import React from "react";
import Modal from "react-modal";
import { GrClose } from "react-icons/gr";

const customStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1000,
    overflowY: "auto",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    overflowX: 'hidden'
  },
  content: {
    width: "450px",
    overflowX: 'hidden',
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    fontFamily: "Oxygen",
  },
};

const CustomModal = ({ children, isOpen, closeModal }) => {
  // const [modalIsOpen, setIsOpen] = React.useState(true);

  // function openModal() {
  //   setIsOpen(true);
  // }

  // function closeModal() {
  //   setIsOpen(false);
  // }
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      // contentLabel="Example Modal"
      shouldCloseOnOverlayClick={false}
      ariaHideApp={false}
    >
      <header
        style={{
          paddingRight: "10px",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <GrClose
          style={{ fontSize: "20px" }}
          onClick={closeModal}
          cursor="pointer"
        />
      </header>
      {children}
    </Modal>
  );
};

export default CustomModal;
