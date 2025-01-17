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
      style={[styles.barlow, style]}
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
      style={[styles.righteous, style]}
      {...props}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  jakarta: {
    fontFamily: 'PlusJakartaSans-Regular',
  },
  barlow: {
    fontFamily: 'BarlowCondensed-Regular',
  },
  righteous: {
    fontFamily: 'Righteous-Regular',
  },
});
