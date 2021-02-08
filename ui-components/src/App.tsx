import React from "react";
import ButtonComponent, { Size, Color, Type } from "./Button/ButtonComponent";

function Button() {
  return (
    <div className="App">
      <ButtonComponent
        type={Type.BUTTON}
        height={Size.MEDIUM}
        fontSize={Size.SMALL}
        borderRadius={4}
        background={Color.PRIMARY}
        isDisabled={true}
      >
        TESTBUTTON
      </ButtonComponent>
    </div>
  );
}

export default Button;
