import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegisterScreen from '../page/Register/RegisterScreen';
import LoginScreen from '../page/Login/LoginScreen';
import OnboardingScreen from '../page/Login/OnboardingScreen';

const Stack = createNativeStackNavigator();

export default function AuthStack(){
    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Onboarding" component={OnboardingScreen}/>
            {/* <Stack.Screen name="Login" component={LoginScreen}/> */}
        </Stack.Navigator>
    );
};