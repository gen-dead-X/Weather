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
        {rotateX: '15deg'},
        {rotateY: '15deg'},
        {perspective: 1000},
      ],
      opacity: opacity.value,
      // shadowColor: 'gray',
      // shadowOffset: {width: 0, height: 4},
      // shadowOpacity: 1,
      // shadowRadius: 10,
      // elevation: 10,
    };
  });

  return (
    <Animated.View style={animatedStyle}>
      <TextRighteous className="text-[20rem]">{digit}</TextRighteous>
    </Animated.View>
  );
}
