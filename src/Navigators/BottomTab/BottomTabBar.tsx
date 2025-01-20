import React from 'react';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Animated, TouchableOpacity} from 'react-native';
import storage from '../../storage/storage';

export default function BottomTabBar({
  state,
  descriptors,
  navigation,
}: Readonly<BottomTabBarProps>) {
  const appTheme = storage.getString('theme');

  function getThemedColor(isFocused = false, className = true) {
    if (className) {
      if (appTheme === 'dark') {
        return isFocused ? 'text-gray-200' : 'text-gray-400';
      }

      return isFocused ? 'text-black' : 'text-gray-400';
    }

    if (appTheme === 'dark') {
      return isFocused ? 'white' : '#9ca3af';
    }

    return isFocused ? 'black' : '#9ca3af';
  }

  return (
    <Animated.View className="absolute bottom-5 left-5 right-5 z-10 flex-row items-center justify-around rounded-xl bg-white shadow-lg dark:border-gray-700 dark:bg-[#1e1e1e]">
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        const iconName = {
          BottomHome: 'home',
          DemoA: 'settings',
          DemoB: 'person',
        }[route.name];

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            className="flex items-center justify-center p-2.5">
            <MaterialIcons
              name={iconName ?? 'home'}
              size={30}
              color={getThemedColor(isFocused, false)}
            />
            <Animated.Text
              className={`mt-1 text-xs ${getThemedColor(isFocused)}`}>
              {typeof label === 'string'
                ? label
                : label({
                    focused: isFocused,
                    color: getThemedColor(isFocused, false),
                    position: 'below-icon',
                    children: '',
                  })}
            </Animated.Text>
          </TouchableOpacity>
        );
      })}
    </Animated.View>
  );
}
