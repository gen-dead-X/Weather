import React, {useEffect} from 'react';
import {TextRighteous} from '../Global/Texts/CustomTexts';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
  withDelay,
} from 'react-native-reanimated';

export default function AnimatedDigit({
  digit,
  index,
}: {
  digit: string;
  index: number;
}) {
  const translateY = useSharedValue(50);
  const opacity = useSharedValue(0);

  useEffect(() => {
    translateY.value = withDelay(index * 100, withSpring(0));
    opacity.value = withDelay(index * 100, withTiming(1, {duration: 500}));
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {translateY: translateY.value},
        {rotateX: '20deg'},
        {rotateY: '20deg'},
        {perspective: 1000},
      ],
      opacity: opacity.value,
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 4},
      shadowOpacity: 0.5,
      shadowRadius: 5,
      elevation: 10, // For Android
    };
  });

  return (
    <Animated.View style={animatedStyle}>
      <TextRighteous className="text-[20rem]">{digit}</TextRighteous>
    </Animated.View>
  );
}
