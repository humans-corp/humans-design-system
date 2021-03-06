import * as React from "react";
import classNames from "classnames";
import "./Input.scss";
import { useCallback } from "react";

export enum InputComponentSize {
  SMALL = "SMALL",
  MEDIUM = "MEDIUM",
  LARGE = "LARGE",
}
interface Props extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  type?: "text" | "password";
  autoComplete?: "off" | "on" | "new-password";
  icon?: JSX.Element;
  componentSize?: InputComponentSize;
  errorMessage?: string;
  disableEnterPressed?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, Props>(
  (
    {
      className,
      componentSize = InputComponentSize.SMALL,
      placeholder,
      autoComplete,
      readOnly,
      type = "text",
      onChange,
      icon,
      errorMessage,
      disableEnterPressed = true,
      ...props
    },
    ref
  ) => {
    const onKeyDownHandler = useCallback(
      (e: React.KeyboardEvent<HTMLInputElement>) => {
        e.keyCode === 13 && disableEnterPressed && e.preventDefault();
      },
      [disableEnterPressed]
    );
    return (
      <div
        className={classNames([
          className,
          "input-wrapper",
          {
            "has-error": !!errorMessage?.length,
            "is-small": componentSize === InputComponentSize.SMALL,
            "is-medium": componentSize === InputComponentSize.MEDIUM,
            "is-large": componentSize === InputComponentSize.LARGE,
          },
        ])}>
        <label>
          <input
            onKeyDown={onKeyDownHandler}
            ref={ref}
            placeholder={placeholder}
            autoComplete={autoComplete}
            readOnly={readOnly}
            type={type}
            onChange={onChange}
            {...props}
          />
          {icon && <span className="input-wrapper__icon">{icon}</span>}
          {errorMessage && <p className="input-wrapper__error-paragraph">{errorMessage}</p>}
        </label>
      </div>
    );
  }
);

export default React.memo(Input);
