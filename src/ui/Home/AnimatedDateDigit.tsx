import React, {useEffect, useState} from 'react';
import {TextRighteous} from '../Global/Texts/CustomTexts';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
  runOnJS,
} from 'react-native-reanimated';

export default function AnimatedDateDigit({digit}: {digit: string}) {
  const [prevDigit, setPrevDigit] = useState(digit);
  const translateY = useSharedValue(0);
  const opacity = useSharedValue(1);

  useEffect(() => {
    if (digit !== prevDigit) {
      translateY.value = withTiming(-1, {duration: 100}, () => {
        runOnJS(setPrevDigit)(digit);
        translateY.value = 1;
        translateY.value = withSpring(0);
      });
    }
  }, [digit]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateY: translateY.value}],
      opacity: opacity.value,
    };
  });

  return (
    <Animated.View style={animatedStyle}>
      <TextRighteous className="text-2xl">{prevDigit}</TextRighteous>
    </Animated.View>
  );
}
