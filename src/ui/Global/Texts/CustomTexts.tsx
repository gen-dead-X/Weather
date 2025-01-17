import React from 'react';
import {StyleSheet, Text, TextProps} from 'react-native';

export function TextJakarta({children, style, ...props}: TextProps) {
  return (
    <Text
      maxFontSizeMultiplier={1}
      allowFontScaling={false}
      adjustsFontSizeToFit={false}
      className={`text-black dark:text-white ${props.className}`}
      style={[styles.jakarta, style]}
      {...props}>
      {children}
    </Text>
  );
}

export function TextBarlow({children, style, ...props}: TextProps) {
  return (
    <Text
      maxFontSizeMultiplier={1}
      allowFontScaling={false}
      adjustsFontSizeToFit={false}
      className={`text-black dark:text-white ${props.className}`}
      style={[styles.jakarta, style]}
      {...props}>
      {children}
    </Text>
  );
}

export function TextRighteous({children, style, ...props}: TextProps) {
  return (
    <Text
      maxFontSizeMultiplier={1}
      allowFontScaling={false}
      adjustsFontSizeToFit={false}
      className={`text-black dark:text-white ${props.className}`}
      style={[styles.jakarta, style]}
      {...props}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  jakarta: {
    fontFamily: 'PlusJakarta-Sans',
  },
  barlow: {
    fontFamily: 'Barlow-Condensed',
  },
  righteous: {
    fontFamily: 'Righteous',
  },
});
