import * as React from "react";
import classNames from "classnames";
import "./Textarea.scss";

interface Props
  extends React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
  errorMessage?: string;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, Props>(
  ({ value, className, errorMessage, readOnly, placeholder, onChange, ...props }, ref) => {
    return (
      <div className={classNames([className, "textarea-wrapper"])}>
        <textarea
          ref={ref}
          onChange={onChange}
          readOnly={readOnly}
          placeholder={placeholder}
          value={value}
          {...props}
        />
        {errorMessage && <p className="input-wrapper__error-paragraph">{errorMessage}</p>}
      </div>
    );
  }
);

export default Textarea;
