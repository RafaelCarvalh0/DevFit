import React from "react";

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

import HomeStack from "./HomeStack";
import WorkoutStack from './WorkoutStack';
import MyWorkoutsStack from './MyWorkoutsStack';

import TabBarIcon from "../components/TabBarIcon";

export default function AppTab() {
    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            tabBarIcon: () => <TabBarIcon name={route.name} />,
            tabBarStyle: {
                height: 50,
            }
        })}>

            <Tab.Screen name="HomeStack" component={HomeStack} options={{
                title:'Inicio',
                headerShown: false,
                tabBarLabel: "Inicio"
            }}/>

            <Tab.Screen name="WorkoutStack" component={WorkoutStack} options={{
                tabBarLabel: '',
                headerShown: false
            }}/>

            <Tab.Screen name="MyWorkoutsStack" component={MyWorkoutsStack} options={{
                //title:'Meus Treinos',
                tabBarLabel: "Meus Treinos",
                headerShown: false
            }}/>

        </Tab.Navigator>
    );
};

/*
options={{
    tabBarLabel: 'Home',
    //tabBarShowLabel: false,
    tabBarActiveTintColor: '#00FF00',
    tabBarActiveBackgroundColor: '#FF0000',
    tabBarLabelStyle: {
        fontSize: 20,
    },
    tabBarLabelPosition: 'beside-icon',
    tabBarStyle: {
        height: 120,
    },
    tabBarHideOnKeyboard: false,
}} />*/