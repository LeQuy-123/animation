import React from 'react';
import { View, Text } from 'react-native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { TabNavParamList } from '../navigation/ScreenName';


export type BookingScreenProps = BottomTabScreenProps<TabNavParamList, 'BookingPage'>;

function BookingPage({ navigation, route }: BookingScreenProps): JSX.Element {
  return (
    <View>
      <Text>Booking</Text>
    </View>
  );
}

export default BookingPage;
