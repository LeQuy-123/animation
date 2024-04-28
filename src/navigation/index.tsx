import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTab from './BottomTab';
import OnBoarding from '../screen/OnBoarding';
import { RootStackParamList } from './ScreenName';

const Stack = createStackNavigator<RootStackParamList>();

function MyStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="OnBoarding" component={OnBoarding} />
            <Stack.Screen options={{ headerShown: false }} name="BottomTab" component={BottomTab} />
        </Stack.Navigator>
    );
}

export default MyStack;
