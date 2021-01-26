import * as React from "react";
import "./Modal.scss";
import { ReactNode, useCallback, useEffect } from "react";
import classNames from "classnames";

interface Props {
  isOpen: boolean;

  hasDimmed?: boolean;
  footer?: ReactNode;
  closeableDimmed?: boolean;

  toggleModal(isOpen: boolean): void;
}

const Modal: React.FunctionComponent<Props> = ({
  children,
  footer,
  isOpen,
  toggleModal,
  closeableDimmed = true,
  hasDimmed = true,
}) => {
  const onClickDimmedHandler = useCallback(
    function () {
      closeableDimmed && toggleModal(!isOpen);
    },
    [isOpen, closeableDimmed, toggleModal]
  );

  useEffect(
    function () {
      isOpen ? document.body.classList.add("is-open-modal") : document.body.classList.remove("is-open-modal");
      return () => {
        document.body.classList.remove("is-open-modal");
      };
    },
    [isOpen]
  );
  return isOpen ? (
    <div
      className={classNames([
        {
          "has-dimmed": hasDimmed,
        },
        "modal-wrapper",
      ])}
      onClick={onClickDimmedHandler}>
      <div className="modal-wrapper__contents" onClick={e => e.stopPropagation()}>
        <div className="modal-wrapper__contents--body">{children}</div>

        <div className="modal-wrapper__contents--footer">{footer}</div>
      </div>
    </div>
  ) : null;
};

export default Modal;
