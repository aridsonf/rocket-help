// Styles.js
import { StyleSheet } from 'react-native';
import Colors from './Colors'
import Font  from './Font'

export default StyleSheet.create({
  // button
  button: {
    backgroundColor: Colors.product.primary,
    paddingHorizontal: '24px',
    paddingVertical: '16px',
  },
  buttonText: {
    color: Colors.base.white,
    fontSize: Font.fontSize.sm,
  },
  buttonPressed: {
    backgroundColor: Colors.product.secondary1,
  },

  // select
  selectButton: {
    backgroundColor: Colors.base.primaryShape,
    paddingHorizontal: 8,
    paddingVertical: 12,
  },
  selectButtonText: {
    color: Colors.base.placeholder,
    lineHeight: Font.lineHeight,
    fontSize: Font.fontSize.sm,
  },
  selectButtonPressed: {
    borderColor: Colors.support.primary,
    borderRadius: '4px'
  },
  selectButtonPressedText: {
    color: Colors.support.primary,
    lineHeight: Font.lineHeight,
    fontSize: Font.fontSize.sm,
  },
  
  // input
  input: {
    backgroundColor: Colors.base.background,
    paddingHorizontal: '16px',
    paddingVertical: '16px',
    borderColor: Colors.product.background,
    borderWidth: 0
  },
  inputText: {
    color: Colors.base.placeholder,
    lineHeight: Font.lineHeight,
    fontSize: Font.fontSize.sm,
  },
  inputIcon: {
    color: Colors.base.placeholder,
  },
  inputActive: {
    backgroundColor: Colors.base.background,
    borderColor: Colors.product.secondary1,
    borderRadius: '6px',
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  inputTextActive: {
    color: Colors.base.textBase,
    lineHeight: Font.lineHeight,
    fontSize: Font.fontSize.sm,
  },
  inputIconActive: {
    color: Colors.base.placeholder,
  },
  inputFilled: {
    backgroundColor: Colors.base.background,
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  inputTextFilled: {
    color: Colors.base.textBase,
    lineHeight: Font.lineHeight,
    fontSize: Font.fontSize.sm,
  },
  inputIconFilled: {
    color: Colors.product.primary,
  },
  inputError: {
    backgroundColor: Colors.base.background,
    borderColor: Colors.base.error,
    borderRadius: '6px',
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  inputTextError: {
    color: Colors.base.textBase,
    lineHeight: Font.lineHeight,
    fontSize: Font.fontSize.sm,
  },
  inputIconError: {
    color: Colors.base.error,
  }
});