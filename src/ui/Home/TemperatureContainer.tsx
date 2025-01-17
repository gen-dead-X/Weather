import {View, ActivityIndicator, Animated, Easing} from 'react-native';
import React from 'react';
import {useWeatherStore} from '../../store/store';
import AnimatedDigit from './AnimatedDigit';
import {TextRighteous} from '../Global/Texts/CustomTexts';
import DateContainer from './DateContainer';
import LoadingDots from './LoadingDots';

export default function TemperatureContainer() {
  const weather = useWeatherStore(state => state.weather);
  const weatherLoading = useWeatherStore(state => state.weatherLoading);

  return (
    <View>
      {weatherLoading ? (
        <ActivityIndicator />
      ) : (
        <View>
          <TextRighteous className="text-xl">
            Feels Like <LoadingDots />
          </TextRighteous>
          <Animated.View className="flex flex-row">
            {weather.currentConditions.feelslike
              .toString()
              .split('')
              .map((item, index) => (
                <AnimatedDigit key={index} digit={item} index={index} />
              ))}
          </Animated.View>
        </View>
      )}

      <DateContainer />
    </View>
  );
}
