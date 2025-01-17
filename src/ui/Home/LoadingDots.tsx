import React from 'react';
import {Animated, Easing} from 'react-native';

const LoadingDots = () => {
  const dots = [
    React.useRef(new Animated.Value(0)).current,
    React.useRef(new Animated.Value(0)).current,
    React.useRef(new Animated.Value(0)).current,
  ];

  const animateDot = (dot, delay) => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(dot, {
          toValue: 1,
          duration: 500,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(dot, {
          toValue: 0,
          duration: 500,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
      ]),
      {
        delay,
      },
    ).start();
  };

  React.useEffect(() => {
    dots.forEach((dot, index) => animateDot(dot, index * 200));
  }, [dots]);

  const dotStyle = dot => ({
    opacity: dot.interpolate({
      inputRange: [0, 1],
      outputRange: [0.2, 1],
    }),
    transform: [
      {
        translateY: dot.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -5],
        }),
      },
    ],
  });

  return (
    <>
      {dots.map((dot, index) => (
        <Animated.Text key={index} style={dotStyle(dot)}>
          .
        </Animated.Text>
      ))}
    </>
  );
};

export default LoadingDots;
