import React from 'react';
import { 
  Input, 
  TextArea 
} from 'native-base';
import Colors from "../../theme/Colors";

const CustomInput = ({
  errorInput,
  isFilled,
  handleInputChange,
  placeholder,
  setErrorInput,
  leftIcon, // Nova prop para o ícone esquerdo
  type,
  ...restProps
}) => {
  return (
    type === 'textArea' 
    ? <TextArea  
        placeholder={placeholder}
        borderWidth={errorInput ? 1 : 0}
        borderColor={errorInput && Colors.base.error}
        bg={Colors.base.background}
        color={isFilled ? Colors.base.textBase : Colors.base.placeholder}
        fontSize="16px"
        _focus={{
            borderColor: Colors.product.secondary1,
            borderWidth: 1,
            bg: Colors.base.background,
            color: Colors.base.textBase,
        }}
        onChangeText={handleInputChange}
        onFocus={() => {errorInput && setErrorInput(false)}}
        {...restProps}
    />
    : <Input
      borderWidth={errorInput ? 1 : 0}
      borderColor={errorInput && Colors.base.error}
      bg={Colors.base.background}
      color={isFilled ? Colors.base.textBase : Colors.base.placeholder}
      fontSize="16px"
      _focus={{
        borderColor: errorInput ? Colors.base.error : Colors.product.secondary1,
        borderWidth: 1,
        bg: Colors.base.background,
        color: Colors.base.textBase,
      }}
      InputLeftElement={leftIcon}
      placeholder={placeholder}
      onChangeText={handleInputChange}
      onFocus={() => { errorInput && setErrorInput(false) }}
      type={type}
      {...restProps}
    />
  );
};

export default CustomInput;
