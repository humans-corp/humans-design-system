import React from "react";
import Button, { ButtonSize, ButtonVariant } from "./Button/Button";
// import HdsColor from './HdsColor';

function Buttons() {
  return (
    <>
      {/* test */}
      <div>
        <Button
          isBlock={false}
          isRounded={true}
          disabled={true}
          variant={ButtonVariant.PRIMARY}
          size={ButtonSize.MEDIUM}
        >
          TEST  
        </Button>
      </div>
      {/* NOTE prefix 는 vscode COMMENT ANCHOR extension 입니다. */}
      <h1>NON BLOCK BUTTON</h1>
      <div className="App">
        {/* NOTE PRIMARY LARGE BLOCK BUTTON */}
        <Button
          size={ButtonSize.LARGE}
          variant={ButtonVariant.PRIMARY}
        >
          PRIMARY LARGE BLOCK BUTTON
        </Button>

        {/* NOTE BASIC LARGE BLOCK BUTTON */}
        <Button
          size={ButtonSize.LARGE}
          isBlock={false}
          variant={ButtonVariant.BASIC}
        >
          BASIC LARGE BLOCK BUTTON
        </Button>

        {/* NOTE BASIC LARGE BLOCK DISABLED BUTTON */}
        <Button
          size={ButtonSize.LARGE}
          isBlock={false}
          disabled={true}
          variant={ButtonVariant.BASIC}
        >
          BASIC LARGE BLOCK BUTTON
        </Button>

        {/* NOTE PRIMARY MEDIUM BLOCK BUTTON */}
        <Button
          size={ButtonSize.MEDIUM}
          isBlock={false}
          variant={ButtonVariant.PRIMARY}
        >
          PRIMARY MEDIUM BLOCK BUTTON
        </Button>

        {/* NOTE BASIC MEDIUM BLOCK BUTTON */}
        <Button
          size={ButtonSize.MEDIUM}
          isBlock={false}
          variant={ButtonVariant.BASIC}
        >
          BASIC MEDIUM BLOCK BUTTON
        </Button>

        {/* NOTE BASIC MEDIUM BLOCK DISABLED BUTTON */}
        <Button
          size={ButtonSize.MEDIUM}
          isBlock={false}
          disabled={true}
          variant={ButtonVariant.BASIC}
        >
          BASIC MEDIUM BLOCK BUTTON
        </Button>

        {/* NOTE PRIMARY SMALL BLOCK BUTTON */}
        <Button
          size={ButtonSize.SMALL}
          isBlock={false}
          variant={ButtonVariant.PRIMARY}
        >
          PRIMARY SMALL BLOCK BUTTON
        </Button>

        {/* NOTE BASIC SMALL BLOCK BUTTON */}
        <Button
          size={ButtonSize.SMALL}
          isBlock={false}
          variant={ButtonVariant.BASIC}
        >
          BASIC SMALL BLOCK BUTTON
        </Button>

        {/* NOTE BASIC SMALL BLOCK DISABLED BUTTON */}
        <Button
          size={ButtonSize.SMALL}
          isBlock={false}
          disabled={true}
          variant={ButtonVariant.BASIC}
        >
          BASIC SMALL BLOCK BUTTON
        </Button>
      </div>

      <h1>BLOCK BUTTON</h1>
      <div className="App">
        {/* NOTE PRIMARY LARGE NON-BLOCK BUTTON */}
        <Button
          size={ButtonSize.LARGE}
          variant={ButtonVariant.PRIMARY}
        >
          PRIMARY LARGE NON-BLOCK BUTTON
        </Button>

        {/* NOTE BASIC LARGE NON-BLOCK BUTTON */}
        <Button
          size={ButtonSize.LARGE}
          variant={ButtonVariant.BASIC}
        >
          BASIC LARGE NON-BLOCK BUTTON
        </Button>

        {/* NOTE BASIC LARGE NON-BLOCK DISABLED BUTTON */}
        <Button
          size={ButtonSize.LARGE}
          disabled={true}
          variant={ButtonVariant.BASIC}
        >
          BASIC LARGE NON-BLOCK BUTTON
        </Button>

        {/* NOTE PRIMARY MEDIUM NON-BLOCK BUTTON */}
        <Button
          size={ButtonSize.MEDIUM}
          variant={ButtonVariant.PRIMARY}
        >
          PRIMARY MEDIUM NON-BLOCK BUTTON
        </Button>

        {/* NOTE BASIC MEDIUM NON-BLOCK BUTTON */}
        <Button
          size={ButtonSize.MEDIUM}
          variant={ButtonVariant.BASIC}
        >
          BASIC MEDIUM NON-BLOCK BUTTON
        </Button>

        {/* NOTE BASIC MEDIUM NON-BLOCK DISABLED BUTTON */}
        <Button
          size={ButtonSize.MEDIUM}
          disabled={true}
          variant={ButtonVariant.BASIC}
        >
          BASIC MEDIUM NON-BLOCK BUTTON
        </Button>

        {/* NOTE PRIMARY SMALL NON-BLOCK BUTTON */}
        <Button
          size={ButtonSize.SMALL}
          variant={ButtonVariant.PRIMARY}
        >
          PRIMARY SMALL NON-BLOCK BUTTON
        </Button>

        {/* NOTE BASIC SMALL NON-BLOCK BUTTON */}
        <Button
          size={ButtonSize.SMALL}
          variant={ButtonVariant.BASIC}
        >
          BASIC SMALL NON-BLOCK BUTTON
        </Button>

        {/* NOTE BASIC SMALL NON-BLOCK DISABLED BUTTON */}
        <Button
          size={ButtonSize.SMALL}
          disabled={true}
          variant={ButtonVariant.BASIC}
        >
          BASIC SMALL NON-BLOCK BUTTON
        </Button>
      </div>
    </>
  );
}

export default Buttons;
