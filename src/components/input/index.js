import React from "react";
import { TextInput } from "react-native";
import { styles } from "./styles";

const Input = ({ style, ...props }) => {
  return <TextInput {...props} style={[styles.input, { ...style }]} />; // Le pedimos que concatene, los estilos que yo le estoy enviando al input. 
};

export default Input;