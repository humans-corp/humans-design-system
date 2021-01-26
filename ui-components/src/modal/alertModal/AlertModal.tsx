import * as React from "react";
import Modal from "../Modal";
import Button, { ButtonComponentColor, ButtonComponentSize } from "../../Button/Button";
import "./AlertModal.scss";

interface Props {
  isOpen: boolean;
  title: string;
  description: string;
  buttonText?: string;

  onClickHandler(): void;
}

export default function AlertModal({
  title,
  description,
  isOpen,
  onClickHandler,
  buttonText = "확인",
}: React.PropsWithChildren<Props>) {
  return (
    <div className="alert-modal-wrapper">
      <Modal
        isOpen={isOpen}
        toggleModal={onClickHandler}
        footer={
          <Button
            type="submit"
            isBlock={true}
            buttonSizeType={ButtonComponentSize.LARGE}
            buttonColorType={ButtonComponentColor.PRIMARY}
            onClick={onClickHandler}>
            {buttonText}
          </Button>
        }>
        <strong className="title">{title}</strong>
        <p className="paragraph">{description}</p>
      </Modal>
    </div>
  );
}
