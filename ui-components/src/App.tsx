import React from "react";
import ButtonComponent, { ButtonSize, ButtonColor } from "./Button/ButtonComponent";

function Button() {
  return (
    <>
      {/* NOTE prefix 는 vscode COMMENT ANCHOR extension 입니다. */}
      <h1>BLOCK BUTTON</h1>
      <div className="App">
        {/* NOTE PRIMARY LARGE BLOCK BUTTON */}
        <ButtonComponent
          type='button'
          size={ButtonSize.LARGE}
          isBlock={true}
          colors={ButtonColor.PRIMARY}
        >
          PRIMARY LARGE BLOCK BUTTON
        </ButtonComponent>

        {/* NOTE BASIC LARGE BLOCK BUTTON */}
        <ButtonComponent
          type='button'
          size={ButtonSize.LARGE}
          isBlock={true}
          colors={ButtonColor.BASIC}
        >
          BASIC LARGE BLOCK BUTTON
        </ButtonComponent>

        {/* NOTE BASIC LARGE BLOCK DISABLED BUTTON */}
        <ButtonComponent
          type='button'
          size={ButtonSize.LARGE}
          isBlock={true}
          disabled={true}
          colors={ButtonColor.BASIC}
        >
          BASIC LARGE BLOCK BUTTON
        </ButtonComponent>

        {/* NOTE PRIMARY MEDIUM BLOCK BUTTON */}
        <ButtonComponent
          type='button'
          size={ButtonSize.MEDIUM}
          isBlock={true}
          colors={ButtonColor.PRIMARY}
        >
          PRIMARY MEDIUM BLOCK BUTTON
        </ButtonComponent>

        {/* NOTE BASIC MEDIUM BLOCK BUTTON */}
        <ButtonComponent
          type='button'
          size={ButtonSize.MEDIUM}
          isBlock={true}
          colors={ButtonColor.BASIC}
        >
          BASIC MEDIUM BLOCK BUTTON
        </ButtonComponent>

        {/* NOTE BASIC MEDIUM BLOCK DISABLED BUTTON */}
        <ButtonComponent
          type='button'
          size={ButtonSize.MEDIUM}
          isBlock={true}
          disabled={true}
          colors={ButtonColor.BASIC}
        >
          BASIC MEDIUM BLOCK BUTTON
        </ButtonComponent>

        {/* NOTE PRIMARY SMALL BLOCK BUTTON */}
        <ButtonComponent
          type='button'
          size={ButtonSize.SMALL}
          isBlock={true}
          colors={ButtonColor.PRIMARY}
        >
          PRIMARY SMALL BLOCK BUTTON
        </ButtonComponent>

        {/* NOTE BASIC SMALL BLOCK BUTTON */}
        <ButtonComponent
          type='button'
          size={ButtonSize.SMALL}
          isBlock={true}
          colors={ButtonColor.BASIC}
        >
          BASIC SMALL BLOCK BUTTON
        </ButtonComponent>

        {/* NOTE BASIC SMALL BLOCK DISABLED BUTTON */}
        <ButtonComponent
          type='button'
          size={ButtonSize.SMALL}
          isBlock={true}
          disabled={true}
          colors={ButtonColor.BASIC}
        >
          BASIC SMALL BLOCK BUTTON
        </ButtonComponent>
      </div>

      <h1>NON-BLOCK BUTTON</h1>
      <div className="App">
        {/* NOTE PRIMARY LARGE NON-BLOCK BUTTON */}
        <ButtonComponent
          type='button'
          size={ButtonSize.LARGE}
          colors={ButtonColor.PRIMARY}
        >
          PRIMARY LARGE NON-BLOCK BUTTON
        </ButtonComponent>

        {/* NOTE BASIC LARGE NON-BLOCK BUTTON */}
        <ButtonComponent
          type='button'
          size={ButtonSize.LARGE}
          colors={ButtonColor.BASIC}
        >
          BASIC LARGE NON-BLOCK BUTTON
        </ButtonComponent>

        {/* NOTE BASIC LARGE NON-BLOCK DISABLED BUTTON */}
        <ButtonComponent
          type='button'
          size={ButtonSize.LARGE}
          disabled={true}
          colors={ButtonColor.BASIC}
        >
          BASIC LARGE NON-BLOCK BUTTON
        </ButtonComponent>

        {/* NOTE PRIMARY MEDIUM NON-BLOCK BUTTON */}
        <ButtonComponent
          type='button'
          size={ButtonSize.MEDIUM}
          colors={ButtonColor.PRIMARY}
        >
          PRIMARY MEDIUM NON-BLOCK BUTTON
        </ButtonComponent>

        {/* NOTE BASIC MEDIUM NON-BLOCK BUTTON */}
        <ButtonComponent
          type='button'
          size={ButtonSize.MEDIUM}
          colors={ButtonColor.BASIC}
        >
          BASIC MEDIUM NON-BLOCK BUTTON
        </ButtonComponent>

        {/* NOTE BASIC MEDIUM NON-BLOCK DISABLED BUTTON */}
        <ButtonComponent
          type='button'
          size={ButtonSize.MEDIUM}
          disabled={true}
          colors={ButtonColor.BASIC}
        >
          BASIC MEDIUM NON-BLOCK BUTTON
        </ButtonComponent>

        {/* NOTE PRIMARY SMALL NON-BLOCK BUTTON */}
        <ButtonComponent
          type='button'
          size={ButtonSize.SMALL}
          colors={ButtonColor.PRIMARY}
        >
          PRIMARY SMALL NON-BLOCK BUTTON
        </ButtonComponent>

        {/* NOTE BASIC SMALL NON-BLOCK BUTTON */}
        <ButtonComponent
          type='button'
          size={ButtonSize.SMALL}
          colors={ButtonColor.BASIC}
        >
          BASIC SMALL NON-BLOCK BUTTON
        </ButtonComponent>

        {/* NOTE BASIC SMALL NON-BLOCK DISABLED BUTTON */}
        <ButtonComponent
          type='button'
          size={ButtonSize.SMALL}
          disabled={true}
          colors={ButtonColor.BASIC}
        >
          BASIC SMALL NON-BLOCK BUTTON
        </ButtonComponent>
      </div>
    </>
  );
}

export default Button;
