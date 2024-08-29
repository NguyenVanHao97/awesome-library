/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  type GestureResponderEvent,
  type TextStyle,
  type ViewStyle,
} from 'react-native';

interface Props {
  disabled?: boolean;
  color?: string;
  buttonStyles?: ViewStyle;
  textStyles?: TextStyle;
  accessibilityLabel?: string;
  onPress: (event: GestureResponderEvent) => void;
  children?: string;
}
const AppButton: React.FC<Props> = (props) => {
  return (
    <TouchableOpacity
      style={[
        {
          backgroundColor: props.disabled ? '#ccc' : 'red',
        },
        styles.container,
        props.buttonStyles,
      ]}
      disabled={props.disabled}
      onPress={props.onPress}
      accessible
      accessibilityLabel={props.accessibilityLabel || 'A Button'}
    >
      <Text style={[styles.text, props.textStyles]}>
        {props.children || 'Press Me'}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 8,
    alignItems: 'center',
    borderRadius: 8,
  },
  text: { color: 'white' },
});

export default AppButton;
