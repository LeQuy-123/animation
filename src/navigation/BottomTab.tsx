import React from 'react';
import {
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import { TabNavParamList } from './ScreenName';
import BookingPage from '@screen/BookingPage';
import SavedPage from '@screen/SavedPage';
import UpdatePage from '@screen/UpdatePage';
import MenuPage from '@screen/MenuPage';
import HomePage from '@screen/HomePage';


const Tab = createBottomTabNavigator<TabNavParamList>();

export default function () {
  return (
    <Tab.Navigator>
      <Tab.Screen name={'HomePage'} component={HomePage} />
      <Tab.Screen name={'BookingPage'} component={BookingPage} />
      <Tab.Screen name={'SavedPage'} component={SavedPage} />
      <Tab.Screen name={'UpdatePage'} component={UpdatePage} />
      <Tab.Screen name={'MenuPage'} component={MenuPage} />
    </Tab.Navigator>
  );
}
