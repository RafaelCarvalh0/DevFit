import { executeReducerBuilderCallback } from "@reduxjs/toolkit/dist/mapBuilders";
import React from "react";
import { View, Text, Image, StyleSheet, TouchableHighlight } from "react-native";

import { useNavigation } from "@react-navigation/native";

function TabBarIcon(props) {

    const navigation = useNavigation();

    let srcImageRegular = null;
    let srcImageBig = null;
    //let badgeCount = 8;

    switch (props.name) {
        case 'HomeStack':
            srcImageRegular = require('../assets/home.png');
            //badgeCount = 0;
            break;
        case 'WorkoutStack':
            srcImageBig = require('../assets/dumbbell.png');
            //badgeCount = 13;
            break;
        case 'MyWorkoutsStack':
            srcImageRegular = require('../assets/myworkouts.png');
            break;
    }

    return (
        <View>
            { srcImageRegular != null &&
            <TouchableHighlight underlayColor="transparent" onPress={() => navigation.navigate(props.name)}>               
                <Image source={srcImageRegular} style={estilos.iconRegular} />
            </TouchableHighlight>
            }

            { srcImageBig != null &&
            <TouchableHighlight style={estilos.iconBig} underlayColor="#00FF00" onPress={() => navigation.navigate(props.name)}>               
                <Image source={srcImageBig} style={estilos.ballImg} />
            </TouchableHighlight>
            }
        </View>
    )
}

const estilos = StyleSheet.create({
    iconRegular: {
        width: 25,
        height: 25,
        marginTop: 10,
        marginBottom: 5
    },
    iconBig: {
        width: 90,
        height: 90,
        backgroundColor: '#3BA237',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 5,
        borderColor: '#FFF',
        marginTop: -40
    },
    ballImg: {
        width: 60,
        height: 60
    },
    badge: {
        position: 'absolute',
        right: - 7,
        top: -4,
        backgroundColor: '#FF0000',
        width: 16,
        height: 16,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    badgeText: {
        color: '#FFF',
        fontSize: 10,
    }
});

export default TabBarIcon;