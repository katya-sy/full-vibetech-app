import cl from "./Modal.module.css";
import close from "../../../assets/img/close.svg";

function Modal({ modalVisible, setModalVisible, children }) {
  const closeModal = () => {
    setModalVisible(false);
  };

  {
    if (modalVisible) {
      return (
        <div className={cl.modal} onClick={() => closeModal()}>
          <div
            className={cl.modal__content}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={cl.modal__close} onClick={() => closeModal()}>
              <img src={close} />
            </div>
            {children}
          </div>
        </div>
      );
    }
  }
}

export default Modal;
