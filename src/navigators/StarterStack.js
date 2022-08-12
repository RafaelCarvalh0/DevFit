import React from "react";
import { Text } from 'react-native';

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import StarterIntro from '../screens/StarterIntro';
import StarterName from '../screens/StarterName';

const StarterStack = createNativeStackNavigator();

export default () => {
    return (
        <StarterStack.Navigator>
            
            <StarterStack.Screen name="StarterIntro" component={StarterIntro} options={{headerShown: false}} />
            <StarterStack.Screen name="StarterName" component={StarterName} />

        </StarterStack.Navigator>
    );
}
