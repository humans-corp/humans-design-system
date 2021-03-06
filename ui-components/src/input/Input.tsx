import * as React from "react";
import styled from '@emotion/styled';
import HdsColor from '../HdsColor';
import { useCallback } from "react";
import { useForm } from "react-hook-form";

interface Props extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  type?: "text" | "password";
  disabled?: boolean;
  isBlock?: boolean;
  name?: string;
  autoComplete?: "off" | "on" | "new-password";
  icon?: JSX.Element;
  disabledEnterPressed?: boolean;
}

const Input = styled.div<Props>`
  position: relative;
  display: ${props => props.isBlock ? 'flex' : 'inline-flex'};
  align-items: center;
  justify-content: space-between;
  
  > input {
    appearance: none;
    width: 100%;
    height: 44px;
    padding: ${props => props.icon ? '0 14px' : '0 50px 0 14px'};
    border: 2px solid ${props => props.disabled ? `${HdsColor.HDSGRAY200}` : `${HdsColor.HDSGRAY400}`};
    border-radius: 4px;
    box-sizing: border-box;
    background: ${props => props.disabled ? `${HdsColor.HDSGRAY100}` : `${HdsColor.HDSWHITE}`};
    font-size: 14px;
    color: ${HdsColor.HDSGRAY900};
    letter-spacing: -.2px;
    transition: all .3s ease;

    &:focus {
      outline: none;
      border-color: ${HdsColor.HDSBLUE300};
      transition: all .3s ease;
    }
    &::-webkit-input-placeholder {
      color: ${HdsColor.HDSGRAY400};
    }
    &:-ms-input-placeholder {
      color: ${HdsColor.HDSGRAY400};
    }
  }
  > button {
    appearance: none;
    position: absolute;
    top: 2px;
    right: 6px;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    padding: 0;
    border: 0;
    background: transparent;
    cursor: pointer;
    ${props => props.disabled && 'opacity: .3'};

    &:focus {
      outline: none;
    }
  }
`;

const InputComponent = React.forwardRef<HTMLInputElement, Props>(
  (
    {
      placeholder,
      isBlock,
      name,
      autoComplete,
      readOnly,
      disabled,
      type = "text",
      onChange,
      icon,
      disabledEnterPressed = true,
      ...props
    },
    ref
  ) => {
    const { register, errors, handleSubmit } = useForm();

    const onKeyDownHandler = useCallback(
      (e: React.KeyboardEvent<HTMLInputElement>) => {
        e.key === 'Enter' && disabledEnterPressed && e.preventDefault();
      },
      [disabledEnterPressed]
    );
    return (
      <Input
        isBlock={isBlock}
        disabled={disabled}
      >
        <input
          onKeyDown={onKeyDownHandler}
          ref={ref}
          name={name}
          placeholder={placeholder}
          autoComplete={autoComplete}
          readOnly={readOnly}
          disabled={disabled}
          type={type}
          onChange={onChange}
          {...props}
        />
        {icon && <button type="button">{icon}</button>}
        {errors.name && <span>This field is required</span>}
      </Input>
    );
  }
);

export default React.memo(InputComponent);
