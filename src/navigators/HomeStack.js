import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/Home';
import HomeConfig from '../screens/HomeConfig';

const HomeStack = createNativeStackNavigator();

export default () => {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="Home" component={Home}/>
            <HomeStack.Screen name="HomeConfig" component={HomeConfig}/>
        </HomeStack.Navigator>
    );
}