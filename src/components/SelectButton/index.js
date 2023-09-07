import React from "react";
import { 
  Button 
} from 'native-base';
import Colors from "../../theme/Colors";

const SelectButton = ({ label, isSelected, onPress, color }) => {
  return (
      <Button
        mt="2" p="8px"
        bg={Colors.base.primaryShape}
        _text={{ color: (isSelected ? color : Colors.base.placeholder) }}
        borderColor={isSelected && color}
        borderWidth={isSelected ? 1 : 0}
        _pressed={{
          bg: Colors.base.primaryShape
        }}
        onPress={onPress}
      >
        {label}
      </Button>
  );
};

export default SelectButton;