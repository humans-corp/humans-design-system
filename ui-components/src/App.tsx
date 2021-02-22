import React from "react";
import Button, { ButtonSize, ButtonColor } from "./Button/Button";

const App = () => {
  return (
    <>
      {/* NOTE prefix 는 vscode COMMENT ANCHOR extension 입니다. */}
      <h1>BLOCK BUTTON</h1>
      <div className="App">
        {/* NOTE PRIMARY LARGE BLOCK BUTTON */}
        <Button
          size={ButtonSize.LARGE}
          colors={ButtonColor.PRIMARY}
        >
          PRIMARY LARGE BLOCK BUTTON
        </Button>

        {/* NOTE BASIC LARGE BLOCK BUTTON */}
        <Button
          size={ButtonSize.LARGE}
          isBlock={true}
          colors={ButtonColor.BASIC}
        >
          BASIC LARGE BLOCK BUTTON
        </Button>

        {/* NOTE BASIC LARGE BLOCK DISABLED BUTTON */}
        <Button
          size={ButtonSize.LARGE}
          isBlock={true}
          disabled={true}
          colors={ButtonColor.BASIC}
        >
          BASIC LARGE BLOCK BUTTON
        </Button>

        {/* NOTE PRIMARY MEDIUM BLOCK BUTTON */}
        <Button
          size={ButtonSize.MEDIUM}
          isBlock={true}
          colors={ButtonColor.PRIMARY}
        >
          PRIMARY MEDIUM BLOCK BUTTON
        </Button>

        {/* NOTE BASIC MEDIUM BLOCK BUTTON */}
        <Button
          size={ButtonSize.MEDIUM}
          isBlock={true}
          colors={ButtonColor.BASIC}
        >
          BASIC MEDIUM BLOCK BUTTON
        </Button>

        {/* NOTE BASIC MEDIUM BLOCK DISABLED BUTTON */}
        <Button
          size={ButtonSize.MEDIUM}
          isBlock={true}
          disabled={true}
          colors={ButtonColor.BASIC}
        >
          BASIC MEDIUM BLOCK BUTTON
        </Button>

        {/* NOTE PRIMARY SMALL BLOCK BUTTON */}
        <Button
          size={ButtonSize.SMALL}
          isBlock={true}
          colors={ButtonColor.PRIMARY}
        >
          PRIMARY SMALL BLOCK BUTTON
        </Button>

        {/* NOTE BASIC SMALL BLOCK BUTTON */}
        <Button
          size={ButtonSize.SMALL}
          isBlock={true}
          colors={ButtonColor.BASIC}
        >
          BASIC SMALL BLOCK BUTTON
        </Button>

        {/* NOTE BASIC SMALL BLOCK DISABLED BUTTON */}
        <Button
          size={ButtonSize.SMALL}
          isBlock={true}
          disabled={true}
          colors={ButtonColor.BASIC}
        >
          BASIC SMALL BLOCK BUTTON
        </Button>
      </div>

      <h1>NON-BLOCK BUTTON</h1>
      <div className="App">
        {/* NOTE PRIMARY LARGE NON-BLOCK BUTTON */}
        <Button
          size={ButtonSize.LARGE}
          colors={ButtonColor.PRIMARY}
        >
          PRIMARY LARGE NON-BLOCK BUTTON
        </Button>

        {/* NOTE BASIC LARGE NON-BLOCK BUTTON */}
        <Button
          size={ButtonSize.LARGE}
          colors={ButtonColor.BASIC}
        >
          BASIC LARGE NON-BLOCK BUTTON
        </Button>

        {/* NOTE BASIC LARGE NON-BLOCK DISABLED BUTTON */}
        <Button
          size={ButtonSize.LARGE}
          disabled={true}
          colors={ButtonColor.BASIC}
        >
          BASIC LARGE NON-BLOCK BUTTON
        </Button>

        {/* NOTE PRIMARY MEDIUM NON-BLOCK BUTTON */}
        <Button
          size={ButtonSize.MEDIUM}
          colors={ButtonColor.PRIMARY}
        >
          PRIMARY MEDIUM NON-BLOCK BUTTON
        </Button>

        {/* NOTE BASIC MEDIUM NON-BLOCK BUTTON */}
        <Button
          size={ButtonSize.MEDIUM}
          colors={ButtonColor.BASIC}
        >
          BASIC MEDIUM NON-BLOCK BUTTON
        </Button>

        {/* NOTE BASIC MEDIUM NON-BLOCK DISABLED BUTTON */}
        <Button
          size={ButtonSize.MEDIUM}
          disabled={true}
          colors={ButtonColor.BASIC}
        >
          BASIC MEDIUM NON-BLOCK BUTTON
        </Button>

        {/* NOTE PRIMARY SMALL NON-BLOCK BUTTON */}
        <Button
          size={ButtonSize.SMALL}
          colors={ButtonColor.PRIMARY}
        >
          PRIMARY SMALL NON-BLOCK BUTTON
        </Button>

        {/* NOTE BASIC SMALL NON-BLOCK BUTTON */}
        <Button
          size={ButtonSize.SMALL}
          colors={ButtonColor.BASIC}
        >
          BASIC SMALL NON-BLOCK BUTTON
        </Button>

        {/* NOTE BASIC SMALL NON-BLOCK DISABLED BUTTON */}
        <Button
          size={ButtonSize.SMALL}
          disabled={true}
          colors={ButtonColor.BASIC}
        >
          BASIC SMALL NON-BLOCK BUTTON
        </Button>
      </div>
    </>
  );
}

export default App;
