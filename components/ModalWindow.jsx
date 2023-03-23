import React from "react";
import Modal from "react-native-modal";

const ModalWindow = ({ toggleModal, isModalVisible, children }) => {
  return (
    <Modal
      isVisible={isModalVisible}
      onBackButtonPress={toggleModal}
      onBackdropPress={toggleModal}
      animationIn={"zoomIn"}
      animationOut={"zoomOut"}
      animationInTiming={50}
      animationOutTiming={50}
    >
      {children}
    </Modal>
  );
};

export default ModalWindow;
