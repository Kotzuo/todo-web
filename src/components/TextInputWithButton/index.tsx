import React, { useRef } from "react";
import {
  TextInputWithButtonButton,
  TextInputWithButtonContainer,
  TextInputWithButtonInput,
} from "./styles";

const TextInputWithButton: React.FC<TextInputWithButtonProps> = ({
  dontResetValueOnEnter,
  buttonIcon,
  onEnter,
  ...inputProps
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleInputKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleButtonClicked();
    }
  };

  const handleButtonClicked = () => {
    if (inputRef.current && inputRef.current.value !== "") {
      onEnter?.(inputRef.current.value);
      if (!dontResetValueOnEnter) {
        inputRef.current.value = "";
      }
    }
  };

  return (
    <TextInputWithButtonContainer>
      <TextInputWithButtonInput
        {...inputProps}
        ref={inputRef}
        onKeyUp={handleInputKeyUp}
      />
      <TextInputWithButtonButton onClick={handleButtonClicked}>
        {buttonIcon}
      </TextInputWithButtonButton>
    </TextInputWithButtonContainer>
  );
};

export default TextInputWithButton;
