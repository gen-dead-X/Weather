import {View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {format} from 'date-fns';
import AnimatedDateDigit from './AnimatedDateDigit';

export default function DateContainer() {
  const [timeString, setTimeString] = useState(format(new Date(), 'hh:mm a'));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeString(format(new Date(), 'hh:mm a'));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <View className="flex flex-row justify-end">
      {timeString.split('').map((char, index) => (
        <AnimatedDateDigit key={index} digit={char} />
      ))}
    </View>
  );
}
