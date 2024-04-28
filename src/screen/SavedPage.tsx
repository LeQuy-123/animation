import React from 'react';
import { View, Text } from 'react-native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { TabNavParamList } from '../navigation/ScreenName';


export type SavedScreenProps = BottomTabScreenProps<TabNavParamList, 'SavedPage'>;

function SavedPage({ navigation, route }: SavedScreenProps): JSX.Element {
  return (
    <View>
      <Text>SavedPage</Text>
    </View>
  );
}

export default SavedPage;
