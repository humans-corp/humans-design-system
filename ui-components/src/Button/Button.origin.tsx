/* eslint-disable import/no-anonymous-default-export */
import * as React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { PropsWithChildren } from "react";
import classNames from "classnames";

export enum ButtonComponentSize {
  SMALL = "small",
  MEDIUM = "medium",
  LARGE = "large",
}

export enum ButtonComponentColor {
  BASIC = "basic",
  PRIMARY = "primary",
  SECONDARY = "secondary",
  TERTIARY = "tertiary",
}

type Props = {
  type?: "submit" | "button" | "reset";
  disabled?: boolean;
  isBlock?: boolean;
  buttonSizeType?: ButtonComponentSize;
  buttonColorType?: ButtonComponentColor;
  variant: "contained" | "text" | "outline";
  isRoundly?: boolean;

  onClick?(): void;
};

const SmallSizeButton = css`
  height: 30px;
`;

const MediumSizeButton = css`
  height: 36px;
  font-size: 14px;
  padding: 8px 16px;
`;

const LargeSizeButton = css`
  padding: 16px 120px;
  font-size: 24px;
`;
const BasicContainedButton = {
  contained: css`
    color: #212529;
    background-color: #f8f9fa;
    border-color: #f8f9fa;
    &:focus,
    &:hover {
      background-color: #e2e6ea;
      border-color: #dae0e5;
    }
  `,
  text: css`
    background: transparent;
    color: #212529;
    border-color: transparent;
    &:focus,
    &:hover {
      background-color: rgb(248, 249, 250);
    }
  `,
  outline: css`
    background: transparent;
    color: #212529;
    border-color: #212529;
    &:focus,
    &:hover {
      background-color: rgba(33, 37, 41, 0.04);
    }
  `,
};
const PrimaryContainedButton = {
  contained: css`
    color: #fff;
    background-color: #0052cc;
    border-color: #0052cc;
    &:focus,
    &:hover {
      background-color: #0069d9;
      border-color: #0062cc;
    }
    &.is-disabled {
      background-color: #ccc;
      border-color: #ccc;
    }
    &.is-roundly {
      border-radius: 0.3rem;
    }
  `,
  text: css`
    background: transparent;
    color: #007bff;
    border-color: transparent;
    &:focus,
    &:hover {
      background-color: rgba(0, 123, 255, 0.04);
    }
  `,
  outline: css`
    background: transparent;
    color: #007bff;
    border-color: #007bff;
    &:focus,
    &:hover {
      background-color: rgba(0, 123, 255, 0.04);
    }
  `,
};

const SecondaryContainedButton = css`
  color: #fff;
  background-color: #6c757d;
  border-color: #6c757d;
  &:focus,
  &:hover {
    background-color: #5a6268;
    border-color: #545b62;
  }
`;

const TertiaryContainedButton = css`
  color: #fff;
  background-color: #6c757d;
  border-color: #6c757d;
  &:focus,
  &:hover {
    background-color: #5a6268;
    border-color: #545b62;
  }
`;

const Button = styled("button")<Props>`
  composes: ${(props) =>
    // @ts-ignore
    PrimaryContainedButton[props.variant]};
  ${(props: Props) =>
    props.buttonColorType === ButtonComponentColor.BASIC &&
    css`
      // @ts-ignore
      composes: ${BasicContainedButton[props.variant]};
    `}
  ${(props: Props) =>
    props.buttonColorType === ButtonComponentColor.PRIMARY && {
      // @ts-ignore
      composes: PrimaryContainedButton[props.variant],
    }}
  ${(props: Props) =>
    props.buttonColorType === ButtonComponentColor.SECONDARY &&
    SecondaryContainedButton}
  ${(props: Props) =>
    props.buttonColorType === ButtonComponentColor.TERTIARY &&
    TertiaryContainedButton}
  ${(props: Props) =>
    props.buttonSizeType === ButtonComponentSize.SMALL && SmallSizeButton}
  ${(props: Props) =>
    props.buttonSizeType === ButtonComponentSize.MEDIUM && MediumSizeButton}
  ${(props: Props) =>
    props.buttonSizeType === ButtonComponentSize.LARGE && LargeSizeButton}
  ${(props: Props) =>
    props.isBlock &&
    css`
      width: 100%;
    `}
  ${(props: Props) =>
    props.disabled &&
    css`
      width: 100%;
    `}
  ${(props: Props) =>
    props.isRoundly &&
    css`
      border-radius: 0.3rem;
    `}
`;

export default function ({
  type = "button",
  buttonColorType = ButtonComponentColor.PRIMARY,
  disabled,
  onClick,
  children,
  variant = "contained",
  buttonSizeType = ButtonComponentSize.MEDIUM,
  isBlock = false,
  isRoundly = true,
}: PropsWithChildren<Props>) {

  return (
    <Button
      type={type}
      buttonSizeType={buttonSizeType}
      buttonColorType={buttonColorType}
      variant={variant}
      isBlock={isBlock}
      disabled={disabled}
      onClick={onClick}
      className={classNames([
        "button",
        `button-${variant}-${buttonColorType}`,
        {
          "is-small": buttonSizeType === ButtonComponentSize.SMALL,
          "is-medium": buttonSizeType === ButtonComponentSize.MEDIUM,
          "is-large": buttonSizeType === ButtonComponentSize.LARGE,
        },
        {
          "is-disabled": !!disabled,
        },
        {
          "is-roundly": !!isRoundly,
        },
      ])}
    >
      {children}
    </Button>
  );
}
