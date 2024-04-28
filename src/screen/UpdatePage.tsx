import React from 'react';
import { View, Text } from 'react-native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { TabNavParamList } from '../navigation/ScreenName';


export type UpdateScreenProps = BottomTabScreenProps<TabNavParamList, 'UpdatePage'>;

function UpdatePage({ navigation, route }: UpdateScreenProps): JSX.Element {
  return (
    <View>
      <Text>Update</Text>
    </View>
  );
}

export default UpdatePage;
