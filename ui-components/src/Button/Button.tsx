import * as React from 'react';
import styled from '@emotion/styled';
import { PropsWithChildren } from 'react';
import HdsColor from '../HdsColor';

export enum ButtonSize {
  LARGE = 'large',
  MEDIUM = 'medium',
  SMALL = 'small',
}

export enum ButtonColor {
  BASIC = 'basic',
  PRIMARY = 'primary',
}

type Props = {
  type?: 'button' | 'submit' | 'reset';
  isBlock?: boolean;
  size?: ButtonSize;
  borderColor?: string;
  isRounded?: boolean;
  colors?: ButtonColor;
  disabled?: boolean;
  onClick?(): void;
};

const ComponentSize = (size: ButtonSize = ButtonSize.SMALL): string => ({
  small: '44',
  medium: '68',
  large: '83',
}[size]);

const ComponentTextSize = (size: ButtonSize = ButtonSize.SMALL): string => ({
  small: '16',
  medium: '24',
  large: '24',
}[size]);

const ComponentBackground = (color: ButtonColor = ButtonColor.BASIC, disabled: boolean = false): string => ({
  basic: disabled ? HdsColor.HDSGRAY400 : HdsColor.HDSGRAY100,
  primary: disabled ? HdsColor.HDSGRAY400 : HdsColor.HDSBLUE500,
}[color]);

const ComponentTextColor = (color: ButtonColor = ButtonColor.BASIC, disabled: boolean = false): string => ({
  basic: disabled ? HdsColor.HDSWHITE : HdsColor.HDSGRAY900,
  primary: disabled ? HdsColor.HDSWHITE : HdsColor.HDSWHITE,
}[color]);

const Button = styled.button<Props>`
  appearance: none;
  display: ${props => props.isBlock ? 'flex' : 'inline-flex'};
  width: ${props => props.isBlock ? '100%' : 'auto'};
  min-width: 68px;
  align-items: center;
  justify-content: center;
  height: ${props => `${ComponentSize(props.size)}px`};
  ${props => props.borderColor
    ? `border: 1px solid ${props.borderColor}`
    : `border: 0`};
  ${props => props.isRounded && `border-radius: 4px;`};
  padding: 5px 15px;
  box-sizing: border-box;
  background: ${props => `${ComponentBackground(props.colors, props.disabled)}`};
  font-size: ${props => `${ComponentTextSize(props.size)}px`};
  color: ${props => props.colors ? `${ComponentTextColor(props.colors, props.disabled)}` : `${ComponentTextColor()}`};
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'}
`;

const ButtonComponent = ({
  type,
  isBlock,
  size,
  borderColor,
  isRounded,
  colors,
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
    borderColor={borderColor}
    isRounded={isRounded}
    colors={colors}
    disabled={disabled}
    onClick={onClick}
  >
    {children}
  </Button>
);

export default ButtonComponent;
