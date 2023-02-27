import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Easing} from 'react-native';
import fonts from '../constants/fonts';
import {moderateScale} from '../constants/scaling';
import colors from '../constants/theme';
import CartDetailsScreen from '../screens/CartDetailsScreen';
import CheckCartScreen from '../screens/CheckCartScreen';
import HomeScreen from '../screens/HomeScreen';
import ShopingCartScreen from '../screens/ShopingCartScreen';
import SupportDetailsScreen from '../screens/SupportDetailsScreen';
import SupportDetailsScreen2 from '../screens/SupportDetailsScreen2';
import SupportDetailsScreen3 from '../screens/SupportDetailsScreen3';
const Stack = createNativeStackNavigator();

function MainStack() {
  return (
    <Stack.Navigator
      screenOptions={() => ({
        headerTitleAlign: 'center',
        headerTintColor: colors.white,
        headerTitleStyle: {
          color: colors.white,
          fontFamily: fonts.Bold,
          fontSize: moderateScale(14),
        },
        headerStyle: {
          backgroundColor: colors.primaryColor,
        },
        headerShown: true,
        headerBackTitleVisible: false,
        headerMode: 'float',
        transitionSpec: {
          open: {
            animation: 'timing',
            config: {duration: 500, easing: Easing.inOut(Easing.ease)},
          },
          close: {
            animation: 'timing',
            config: {duration: 500, easing: Easing.inOut(Easing.ease)},
          },
        },
        cardStyleInterpolator: ({current: {progress}}) => {
          return {
            cardStyle: {
              opacity: progress,
            },
          };
        },
      })}
      independent={true}>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: true,
          title: 'Dashboard',
        }}
      />
      <Stack.Screen
        name="ShopingCartScreen"
        component={ShopingCartScreen}
        options={{
          headerShown: true,
          title: 'Shopping cart',
        }}
      />
      <Stack.Screen
        name="SupportDetailsScreen"
        component={SupportDetailsScreen}
        options={{
          headerShown: true,
          title: 'Support Details',
        }}
      />

      <Stack.Screen
        name="SupportDetailsScreen2"
        component={SupportDetailsScreen2}
        options={{
          headerShown: true,
          title: 'Support Details',
        }}
      />

      <Stack.Screen
        name="SupportDetailsScreen3"
        component={SupportDetailsScreen3}
        options={{
          headerShown: true,
          title: 'Support Details',
        }}
      />

      <Stack.Screen
        name="CheckCartScreen"
        component={CheckCartScreen}
        options={{
          headerShown: true,
          title: 'Check Cart',
        }}
      />

      <Stack.Screen
        name="CartDetailsScreen"
        component={CartDetailsScreen}
        options={{
          headerShown: true,
          title: 'Check Cart',
        }}
      />
    </Stack.Navigator>
  );
}

export default MainStack;
