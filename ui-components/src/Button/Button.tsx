import * as React from 'react';
import styled from '@emotion/styled';
import { PropsWithChildren } from 'react';
import HdsColor from '../HdsColor';

export enum ButtonSize {
  LARGE = 'large',
  MEDIUM = 'medium',
  SMALL = 'small',
}

export enum ButtonVariant {
  BASIC = 'basic',
  PRIMARY = 'primary',
  TINT = 'tint',
  OUTLINE = 'outline',
}

type Props = {
  type?: 'button' | 'submit' | 'reset';
  isBlock?: boolean;
  size?: ButtonSize;
  isRounded?: boolean;
  variant?: ButtonVariant;
  disabled?: boolean;
  onClick?(): void;
};

const ComponentSize = (size: ButtonSize = ButtonSize.SMALL): string => ({
  small: '32',
  medium: '40',
  large: '52',
}[size]);

const ComponentTextSize = (size: ButtonSize = ButtonSize.SMALL): string => ({
  small: '12',
  medium: '14',
  large: '16',
}[size]);

const ComponentBackground = (variant: ButtonVariant = ButtonVariant.BASIC, disabled: boolean = false): string => ({
  basic: disabled ? HdsColor.HDSGRAY100 : HdsColor.HDSGRAY200,
  primary: disabled ? HdsColor.HDSGRAY100 : HdsColor.HDSBLUE400,
  tint: disabled ? HdsColor.HDSGRAY100 : HdsColor.HDSBLUE50,
  outline: HdsColor.HDSWHITE,
}[variant]);

const ComponentTextColor = (variant: ButtonVariant = ButtonVariant.BASIC, disabled: boolean = false): string => ({
  basic: disabled ? HdsColor.HDSGRAY500 : HdsColor.HDSGRAY700,
  primary: disabled ? HdsColor.HDSGRAY500 : HdsColor.HDSWHITE,
  tint: disabled ? HdsColor.HDSGRAY500 : HdsColor.HDSBLUE400,
  outline: disabled ? HdsColor.HDSGRAY400 : HdsColor.HDSBLUE400,
}[variant]);

const ComponentBorder = (variant: ButtonVariant = ButtonVariant.BASIC, disabled: boolean = false) => {
  if (variant === ButtonVariant.OUTLINE) {
    if (disabled) {
      return `border: 1px solid ${HdsColor.HDSGRAY300}`;
    } else {
      return `border: 1px solid ${HdsColor.HDSBLUE400}`;
    }
  } else {
    return 'border: 0';
  }
}

const ComponentHover = (variant: ButtonVariant = ButtonVariant.BASIC): string => ({
  basic: HdsColor.HDSGRAY300,
  primary: HdsColor.HDSBLUE500,
  tint: HdsColor.HDSBLUE100,
  outline: HdsColor.HDSBLUE50,
}[variant]);


const Button = styled.button<Props>`
  appearance: none;
  display: ${props => props.isBlock ? 'flex' : 'inline-flex'};
  width: ${props => props.isBlock ? '100%' : 'auto'};
  min-width: 50px;
  align-items: center;
  justify-content: center;
  height: ${props => `${ComponentSize(props.size)}px`};
  ${props => `${ComponentBorder(props.variant, props.disabled)}`};
  ${props => props.isRounded && `border-radius: 4px;`};
  padding: 0 12px;
  box-sizing: border-box;
  background: ${props => `${ComponentBackground(props.variant, props.disabled)}`};
  font-weight: normal;
  font-size: ${props => `${ComponentTextSize(props.size)}px`};
  color: ${props => props.variant ? `${ComponentTextColor(props.variant, props.disabled)}` : `${ComponentTextColor()}`};
  ${props => props.size !== ButtonSize.SMALL && 'letter-spacing: -.3'}px;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};

  ${props => !props.disabled
    && `&:hover {
       background: ${ComponentHover(props.variant)};
    }`
  }
`;

const ButtonComponent = ({
  type,
  isBlock,
  size,
  isRounded,
  variant,
  disabled,
  children,
  onClick,
}: PropsWithChildren<Props>) => (
  // NOTE disabled 를 isDisabled 로 사용하지 않는 이유는
  // isDisabled 로 쓰면 button 의 attribute 인 disabled 할당이 안되기 때문
  <Button
    type={type ? type : 'button'}
    isBlock={isBlock ?? true}
    size={size}
    isRounded={isRounded}
    variant={variant}
    disabled={disabled}
    onClick={onClick}
  >
    {children}
  </Button>
);

export default ButtonComponent;
