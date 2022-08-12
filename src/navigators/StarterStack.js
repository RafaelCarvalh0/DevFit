import React from "react";
import { Text } from 'react-native';

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import StarterIntro from '../screens/StarterIntro';
import StarterName from '../screens/StarterName';
import StarterDays from '../screens/StarterDays';
import StarterLevel from '../screens/StarterLevel';

const StarterStack = createNativeStackNavigator();

export default () => {
    return (
        <StarterStack.Navigator initialRouteName='StarterIntro'>
            
            <StarterStack.Screen name="StarterIntro" component={StarterIntro} options={{headerShown: false}} />
            <StarterStack.Screen name="StarterName" component={StarterName} />
            <StarterStack.Screen name="StarterDays" component={StarterDays} />
            <StarterStack.Screen name="StarterLevel" component={StarterLevel} />

        </StarterStack.Navigator>
    );
}
