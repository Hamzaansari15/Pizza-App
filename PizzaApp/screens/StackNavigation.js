import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen from './MainScreen';
import SecondScreen from './SecondScreen';
import ThirdScreen from './ThirdScreen';
import ForthScreen from './ForthScreen';

const Stack = createNativeStackNavigator();


const StackNavigation = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name='hhh' component={MainScreen} options={{headerShown: false}} />
            <Stack.Screen name="SecondScreen" component={SecondScreen} options={{title: 'Uncle Jhon Pizzas'}} />
            <Stack.Screen name="ThirdScreen" component={ThirdScreen} options={{title: 'Uncle Jhon Pizzas'}} />
            <Stack.Screen name="ForthScreen" component={ForthScreen} options={{title: 'Uncle Jhon Pizzas'}} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigation

const styles = StyleSheet.create({})

