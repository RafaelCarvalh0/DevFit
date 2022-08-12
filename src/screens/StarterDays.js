import React, { useState, useEffect, useLayoutEffect } from "react";
import { Alert, Text } from 'react-native';

import styled from "styled-components/native";
import { connect, useSelector, useDispatch } from "react-redux";
import { useNavigation, useRoute } from "@react-navigation/native";
import DefaultButton from "../components/DefaultButton";
import { SET_NAME, SET_WORKOUTDAYS } from "../reducers/userReducer";


const PageStarterDays = (props) => {

    const navigation = useNavigation();
    const route = useRoute();
    //const user = useSelector(state => state.user);
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();
    const [name, setName] = useState('');

    useLayoutEffect((flag) => {
        //Se o usuário já cadastrou os dias eu pulo essa tela, e ja envio ele pra próxima
       
        //Tratar esse trecho depois para pular essa parte
        //caso ja tenha dias preenchidos

        // if (user.workoutDays.length) {
        //     alert(user.workoutDays)
        //     navigation.navigate('StarterLevel', {
        //         workoutDays: user.workoutDays
        //     });
        // }

            navigation.setOptions({
                title: '',
                headerRight: () => {
                    return (
                        <NextButton title="Próximo" onPress={nextAction} />
                    );
                },
            })

    }, [user.workoutDays.length > 0]);


    const nextAction = () => {

        if (!route.params.name || !user.workoutDays.length) {
            Alert.alert("Você precisa treinar pelomenos 1 dia!");
            return
        }

        //Passando o parametro workoutDays via route.params.workoutDays lá na próxima pagina
        navigation.navigate('StarterLevel', {
            workoutDays: user.workoutDays
        });
    }


    const toggleDay = (dia) => {
        let newWorkoutDays = [...user.workoutDays];

        if(!user.workoutDays.includes(dia)) {
            //inserir
            newWorkoutDays.push(dia);
        } else {
            //remover
            newWorkoutDays = newWorkoutDays.filter(i=>i!=dia);
        }

        dispatch(SET_WORKOUTDAYS({               
            workoutDays: newWorkoutDays
        }));
    }

    let firstName = route.params.name.split(' ')[0];

    return (
        <Container>
            <HeaderText>Opa, <BoldText>{firstName}</BoldText>, tudo bem?</HeaderText>
            <HeaderText>Quais <BoldText>dias da semana</BoldText> você pretende treinar?</HeaderText>
            <DaysArea>
                <DefaultButton bgColor={user.workoutDays.includes(1)?'#A5E8BC':false} width={100+'px'} style={{marginBottom: 20}} underlayColor="#CCC" onPress={() => toggleDay(1)}>
                    <Text>Segunda</Text>
                </DefaultButton>
                <DefaultButton bgColor={user.workoutDays.includes(2)?'#A5E8BC':false} width={100+'px'} style={{marginBottom: 20}} underlayColor="#CCC" onPress={() => toggleDay(2)} >
                    <Text>Terça</Text>
                </DefaultButton>
                <DefaultButton bgColor={user.workoutDays.includes(3)?'#A5E8BC':false} width={100+'px'} style={{marginBottom: 20}} underlayColor="#CCC" onPress={() => toggleDay(3)} >
                    <Text>Quarta</Text>
                </DefaultButton>
                <DefaultButton bgColor={user.workoutDays.includes(4)?'#A5E8BC':false} width={100+'px'} style={{marginBottom: 20}} underlayColor="#CCC" onPress={() => toggleDay(4)} >
                    <Text>Quinta</Text>
                </DefaultButton>
                <DefaultButton bgColor={user.workoutDays.includes(5)?'#A5E8BC':false} width={100+'px'} style={{marginBottom: 20}} underlayColor="#CCC" onPress={() => toggleDay(5)} >
                    <Text>Sexta</Text>
                </DefaultButton>
                <DefaultButton bgColor={user.workoutDays.includes(6)?'#A5E8BC':false} width={100+'px'} style={{marginBottom: 20}} underlayColor="#CCC" onPress={() => toggleDay(6)} >
                    <Text>Sábado</Text>
                </DefaultButton>
                <DefaultButton bgColor={user.workoutDays.includes(0)?'#A5E8BC':false} width={100+'px'} style={{marginBottom: 20}} underlayColor="#CCC" onPress={() => toggleDay(0)} >
                    <Text>Domingo</Text>
                </DefaultButton>
            </DaysArea>
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

const DaysArea = styled.View`
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
`;


export default PageStarterDays;
