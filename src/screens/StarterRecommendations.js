import React, { useState, useEffect, useLayoutEffect } from "react";
import { Alert } from 'react-native';

import styled from "styled-components/native";
import { useSelector, useDispatch } from "react-redux";
import { CommonActions, useNavigation, useRoute } from "@react-navigation/native";
import { ADD_WORKOUT, DEL_WORKOUT } from "../reducers/userReducer";
import workoutJson from '../presetWorkouts.json';
import Workout from "../components/Workout";


const PageStarterDays = (props) => {

    const navigation = useNavigation();
    const route = useRoute();
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();

    useLayoutEffect(() => {

        props.navigation.setParams({ myWorkouts: user.myWorkouts });
        //console.log(route.params.level);
        let btnNext = 'Ignorar';
        if (route.params.level && user.myWorkouts.length > 0) {
            btnNext = 'Concluir';
        }

        navigation.setOptions({
            title: '',
            headerRight: () => {
                return (
                    <NextButton title={btnNext} onPress={nextAction} />
                );
            },
        })
    }, [user.myWorkouts]);

    const nextAction = () => {

        navigation.dispatch(CommonActions.reset({
            index: 0,
            routes: [
                {name: 'AppTab'}
            ]
        })); 
        
        //navigation.popToTop();
    }

    const addWorkout = (item) => {

        //Se findIndex não encontrar um id ele retorna -1
        if(user.myWorkouts.findIndex(i => i.id == item.id) < 0) {
            //Não encontrando nenhum workout eu adiciono 1
            dispatch(ADD_WORKOUT({               
                myWorkouts: item
            }));
        } else {
            //Caso contrário eu deleto
            dispatch(DEL_WORKOUT({               
                myWorkouts: item
            }));
        }
    }

    return (
        <Container>
            <HeaderText>Opções de treino pré-criados com base no seu nível</HeaderText>
            <HeaderText>Você selecionou <BoldText>{user.myWorkouts.length}</BoldText> treino(s)</HeaderText>

            <WorkoutList 
            data={workoutJson}
            renderItem={({item}) => <Workout 
                data={item} 
                addAction={() => addWorkout(item)}
                />}
            keyExtractor={item => item.id}
            />

        </Container>
    );

}


const Container = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    background-color: #FFF;
    padding: 0 30px 0 30px;
    padding-top: 50px;
`;

const HeaderText = styled.Text`
    font-size: 15px;
    color: #333;
    text-align: center;
    margin-bottom: 30px;
`;

const BoldText = styled.Text`
    font-weight: bold;
`;

const NextButton = styled.Button`

`;

const WorkoutList = styled.FlatList`
    width: 100%;
`;

const Area = styled.View`
    flex: 1;

`;

const Choose = styled.Text`
    font-size: 20px;
`;

export default PageStarterDays;
