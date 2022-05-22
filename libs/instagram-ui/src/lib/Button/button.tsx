import * as React from 'react';

import { StyleSheet, View, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

export interface ButtonProps extends TouchableOpacityProps {
  size?: string;
  title: string;
  variant?: 'contained' | 'outlined';
}

const styles = StyleSheet.create({
  buttonBase: {
    height: 30,
    borderRadius: 3,
  },
  buttonContained: {
    backgroundColor: '#1FA1FF',
  },
  buttonOutlined: {
    backgroundColor: 'white',
    border: '0.7px solid #CBCBCB',
  },
  textBase: {
    color: 'white',
    fontWeight: '700',
  },
  textContained: {
    color: 'white',
  },
  textOutlined: {
    color: 'black',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export const Button = (props: ButtonProps) => {
  const {title, variant='contained'} = props;
  return (
    <TouchableOpacity {...props} style={[styles.buttonBase, variant === 'contained' ? styles.buttonContained : styles.buttonOutlined]}>
      <View style={styles.textContainer}>
        <Text style={[styles.textBase, variant === 'contained' ? styles.textContained : styles.textOutlined]}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

export default Button;
