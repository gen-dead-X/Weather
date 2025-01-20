import {View, ActivityIndicator, Animated} from 'react-native';
import React from 'react';
import {useWeatherStore} from '../../store/store';
import AnimatedDigit from './AnimatedDigit';
import {TextRighteous} from '../Global/Texts/CustomTexts';
import DateContainer from './DateContainer';
import LoadingDots from './LoadingDots';
// import WebView from 'react-native-webview';

export default function TemperatureContainer() {
  // const htmlContent = require('../../../assets/html/temperature.html');

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

          {/* <WebView
            source={htmlContent}
            style={{height: 400, width: Dimensions.get('screen').width /2}}
          /> */}
        </View>
      )}

      <DateContainer />
    </View>
  );
}
