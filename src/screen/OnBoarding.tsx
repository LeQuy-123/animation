import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/ScreenName';


export type OnBoardingScreenProps = StackScreenProps<RootStackParamList, 'OnBoarding'>;

function OnBoarding({ navigation, route }: OnBoardingScreenProps): JSX.Element {
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.replace('BottomTab')}>
        <Text>HOME</Text>
      </TouchableOpacity>
    </View>
  );
}

export default OnBoarding;
