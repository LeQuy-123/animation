import React from 'react';
import { View, Text } from 'react-native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { TabNavParamList } from '../navigation/ScreenName';


export type HomeScreenProps = BottomTabScreenProps<TabNavParamList, 'HomePage'>;

function HomePage({ navigation, route }: HomeScreenProps): JSX.Element {
  return (
    <View>
      <Text>HOME</Text>
    </View>
  );
}

export default HomePage;
