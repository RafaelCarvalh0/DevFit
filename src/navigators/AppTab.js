import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

import HomeStack from "./HomeStack";
import TmpScreen from "../screens/TmpScreen";
//import WorkoutStack from './WorkoutStack';
//import MyWorkoutsStack from './MyWorkoutsStack';

export default function AppTab() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="HomeStack" component={HomeStack}/>
            {/* <Tab.Screen name="WorkoutStack" component={WorkoutStack}/>
            <Tab.Screen name="MyWorkoutStack" component={MyWorkoutStack}/> */}
            <Tab.Screen name="TmpScreen" component={TmpScreen}/>
        </Tab.Navigator>
    );
};