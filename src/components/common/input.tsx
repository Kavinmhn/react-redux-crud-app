import React from "react";
import { InputHandlerParam } from "../../types";
import Input from '@mui/material/Input'

// Define prop types for this component
export interface InputProps {
  type: string;
  label: string;
  inputHandler: (hEvent: InputHandlerParam) => void;
  placeholder: string
}

const InputT: React.FC<InputProps> = ({ type, label, inputHandler, placeholder }) => {
  return (
    <div >
      <Input type={type} name={label} onChange={inputHandler} placeholder={placeholder} style={{ width: "100%" }}/>
    </div>
  );
};

export default InputT;