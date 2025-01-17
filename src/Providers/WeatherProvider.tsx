import React, {useEffect} from 'react';
import {differenceInHours} from 'date-fns';
import axios from 'axios';
import {WeatherData} from '../types/weather.types';
import {useWeatherStore} from '../store/store';
import config from '../config/config';
import storage from '../storage/storage';

export default function WeatherProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const setWeather = useWeatherStore(state => state.setWeather);
  const setWeatherLoading = useWeatherStore(state => state.setWeatherLoading);

  useEffect(() => {
    async function getWeather() {
      setWeatherLoading(true);
      try {
        const cachedWeather = storage.getString('weather');

        if (cachedWeather) {
          const weatherTime = storage.getString('weatherTime');

          if (weatherTime) {
            const cachedTime = new Date(weatherTime);
            const currentTime = new Date();

            if (differenceInHours(currentTime, cachedTime) < 4) {
              console.log(
                'Using cached weather data.',
                JSON.parse(cachedWeather),
              );
              setWeather(JSON.parse(cachedWeather));
              return;
            }
          }
        }

        const res = (
          await axios.get(
            `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/22.577410089467445%2C%2088.43149364671405?unitGroup=metric&key=${config.WEATHER_API_KEY}&contentType=json`,
          )
        ).data;

        console.log({res});

        setWeather(res as WeatherData);
        storage.set('weather', JSON.stringify(res));
        storage.set('weatherTime', new Date().toISOString());
      } catch (e) {
        console.log(e);
      } finally {
        setWeatherLoading(false);
      }
    }

    getWeather();
  }, []);

  return <>{children}</>;
}
