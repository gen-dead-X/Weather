import React from 'react';
import {ActivityIndicator, ScrollView, View} from 'react-native';

import ThemeToggler from '../../ui/ThemeToggler/ThemeToggler';
import {useWeatherStore} from '../../store/store';
import {
  TextBarlow,
  TextJakarta,
  TextRighteous,
} from '../../ui/Global/Texts/CustomTexts';

export default function Home() {
  const weather = useWeatherStore(state => state.weather);
  const weatherLoading = useWeatherStore(state => state.weatherLoading);

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}} className="flex-1">
      <View
        className={
          'flex flex-1 items-center justify-center gap-14 bg-white dark:bg-gray-900'
        }>
        {/* <ZustandDemo />
        <FormPaperInput />
        <VectorIconsDemo />
        <NavigationTester />
         */}
        <ThemeToggler />

        {weatherLoading ? (
          <ActivityIndicator />
        ) : (
          <View>
            <TextRighteous className="text-6xl">
              {weather.currentConditions.feelslike}
            </TextRighteous>
          </View>
        )}
      </View>
    </ScrollView>
  );
}
