import * as React from 'react';
import styled from '@emotion/styled';
import { PropsWithChildren } from 'react';
import HdsColor from '../HdsColor';

export enum Type {
  BUTTON = 'button',
  SUBMIT = 'submit',
  RESET = 'reset',
}

export enum Size {
  LARGE = 'large',
  MEDIUM = 'medium',
  SMALL = 'small',
}

export enum Color {
  BASIC = 'basic',
  PRIMARY = 'primary',
}

type Props = {
  type?: Type;
  isBlock?: boolean;
  height?: Size;
  borderColor?: string;
  borderRadius?: number;
  fontSize?: Size;
  color?: Color;
  background?: Color;
  isDisabled?: boolean;
  onClick?(): void;
};

const ComponentHeight = (size: Size = Size.SMALL): string => ({
  small: '44',
  medium: '68',
  large: '83',
}[size]);

const ComponentFontSize = (size: Size = Size.SMALL): string => ({
  large: '24',
  medium: '24',
  small: '16',
}[size]);

const ComponentBackground = (color: Color = Color.BASIC): string => ({
  basic: HdsColor.HDSGRAY100,
  primary: HdsColor.HDSBLUE500,
}[color]);

const ComponentColor = (color: Color = Color.BASIC): string => ({
  basic: '#fff',
  primary: '#fff',
}[color]);

const ButtonComponent = styled.button<Props>`
  appearance: none;
  display: ${props => props.isBlock ? 'flex' : 'inline-flex'};
  align-items: center;
  justify-content: center;
  height: ${props => `${ComponentHeight(props.height)}px`};
  ${props => props.borderColor
    ? `border: 1px solid ${props.borderColor}`
    : `border: 0`};
  ${props => props.borderRadius && `border-radius: ${props.borderRadius}px;`};
  box-sizing: border-box;
  background: ${props => props.background ? `${ComponentBackground(props.background)}` : `${ComponentBackground()}`};
  font-size: ${props => props.fontSize ? `${ComponentFontSize(props.fontSize)}px` : `${ComponentFontSize()}px`};
  color: ${props => props.color ? `${ComponentColor(props.color)}` : `${ComponentColor()}`}
`;

const Button = ({
  type,
  isBlock,
  height,
  borderColor,
  borderRadius,
  fontSize,
  color,
  background,
  isDisabled,
  
  children,
  onClick,
}: PropsWithChildren<Props>) => (
  <ButtonComponent
    type={type}
    isBlock={isBlock}
    height={height}
    borderColor={borderColor}
    borderRadius={borderRadius}
    fontSize={fontSize}
    color={color}
    background={background}
    isDisabled={isDisabled}
    onClick={onClick}
  >
    {children}
  </ButtonComponent>
);

export default Button;
