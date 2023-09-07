import React from 'react';
import { Button } from 'native-base';
import Colors from "../../theme/Colors";

const CustomButton = ({
  onPress,
  text,
  ...restProps
}) => {
  return (
    <Button 
        my="2" p="16px" 
        bg={Colors.product.primary} 
        _pressed={{
            bg: Colors.product.secondary1,
        }}
        _text={{
            fontWeight: "bold"
        }}
        onPress={onPress}
        {...restProps}
    >
        {text}
    </Button>
  );
};

export default CustomButton;
