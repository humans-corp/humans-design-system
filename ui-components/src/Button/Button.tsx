import * as React from "react";
// import "./Button.scss";
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
  variant?: "contained" | "text" | "outline";
  isRoundly?: boolean;

  onClick?(): void;
};

const SmallButton = styled.button`
  height: 30px;
`;

const MediumButton = styled.button`
  height: 36px;
  font-size: 14px;
  padding: 8px 16px;
`;

const LargeButton = styled.button`
  padding: 16px 120px;
  font-size: 24px;
`;
const Button = styled("button")<Props>`
  ${(props: Props) =>
    props.buttonSizeType === ButtonComponentSize.SMALL && SmallButton}
  ${(props: Props) =>
    props.buttonSizeType === ButtonComponentSize.MEDIUM && MediumButton}
  ${(props: Props) =>
    props.buttonSizeType === ButtonComponentSize.LARGE && LargeButton}
`;
// const Button = styled("button")<Props>((props: Props) => ({
//   display: 'flex',
// [SmallButton]: props.buttonSizeType === ButtonComponentSize.SMALL
// }));

export default function ({
  type = "button",
  buttonColorType = ButtonComponentColor.BASIC,
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
      type="button"
      buttonSizeType={"small" as any}
      isBlock={true}
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
          "is-block": !!isBlock,
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
