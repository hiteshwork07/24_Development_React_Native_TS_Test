import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

//style
import styles from './style';
import { Props } from './types';

const Button: React.FC<Props> = ({
  disabled,
  active,
  selected,
  text,
  onPress,
  isRight,
  isWrong,
  buttonStyle,
}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[
        styles.container,
        !active && styles.disableButton,
        isRight && styles.rightButton,
        isWrong && styles.wrongButton,
        buttonStyle,
        selected&&styles.selectedBackground,
      ]}>
      <Text
        style={[styles.buttonText, (isRight || isWrong) && styles.textColor,
        selected&& styles.selectedColor
        ]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
