import React from 'react';
import {ScrollView, View} from 'react-native';
import TemperatureContainer from '../../ui/Home/TemperatureContainer';

export default function Home() {
  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}} className="flex-1">
      <View
        className={
          'flex flex-1 items-center justify-center gap-14 bg-white dark:bg-gray-900'
        }>
        <TemperatureContainer />
      </View>
    </ScrollView>
  );
}
