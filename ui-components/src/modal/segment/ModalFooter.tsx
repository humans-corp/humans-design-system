import * as React from "react";
import "./ModalFooter.scss";

const ModalFooter: React.FunctionComponent = ({ children }) => {
  return <div className="modal-footer">{children}</div>;
};

export default ModalFooter;
