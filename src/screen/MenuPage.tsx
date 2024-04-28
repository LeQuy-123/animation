import React from 'react';
import { View, Text } from 'react-native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { TabNavParamList } from '../navigation/ScreenName';


export type MenuScreenProps = BottomTabScreenProps<TabNavParamList, 'MenuPage'>;

function MenuPage({ navigation, route }: MenuScreenProps): JSX.Element {
  return (
    <View>
      <Text>Menu</Text>
    </View>
  );
}

export default MenuPage;
