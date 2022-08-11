import React from "react";
import { Text } from 'react-native';

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import StarterIntro from '../screens/StarterIntro';

const StarterStack = createNativeStackNavigator();

export default () => {
    return (
        <StarterStack.Navigator screenOptions={{
            headerShown: false
        }}>
            <StarterStack.Screen name="StarterIntro" component={StarterIntro} />

        </StarterStack.Navigator>
    );
}
