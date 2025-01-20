import {View} from 'react-native';
import React from 'react';
import ThemeToggler from '../../ui/ThemeToggler/ThemeToggler';

export default function BottomTabDemoScreenA() {
  return (
    <View className="flex-1 items-center justify-center">
      <ThemeToggler />
    </View>
  );
}
