import {View, ActivityIndicator} from 'react-native';
import React from 'react';
import {useWeatherStore} from '../../store/store';
import {TextRighteous} from '../Global/Texts/CustomTexts';

export default function TemperatureContainer() {
  const weather = useWeatherStore(state => state.weather);
  const weatherLoading = useWeatherStore(state => state.weatherLoading);
  return (
    <View>
      {weatherLoading ? (
        <ActivityIndicator />
      ) : (
        <View>
          <TextRighteous className="text-[20rem]">
            {weather.currentConditions.feelslike}
          </TextRighteous>
        </View>
      )}
    </View>
  );
}
