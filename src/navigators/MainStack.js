import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Preload from '../screens/Preload';
import StarterStack from './StarterStack';
import AppTab from './AppTab';

const MainStack = createNativeStackNavigator();

    export default () => {
        return (
            <MainStack.Navigator initialRouteName='Preload' screenOptions={{
                headerShown: false
            }}>
                <MainStack.Screen name="Preload" component={Preload} />
                <MainStack.Screen name="StarterStack" component={StarterStack} />
                <MainStack.Screen name="AppTab" component={AppTab} />
                
            </MainStack.Navigator>
        );
    }
