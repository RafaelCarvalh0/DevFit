import React, { useState, useEffect, useLayoutEffect } from "react";
import { Alert, Text } from 'react-native';

import styled from "styled-components/native";
import { connect, useSelector, useDispatch } from "react-redux";
import { useNavigation, useRoute } from "@react-navigation/native";
import DefaultButton from "../components/DefaultButton";
import { SET_NAME, SET_WORKOUTDAYS, SET_LEVEL } from "../reducers/userReducer";


const PageStarterDays = () => {

    const navigation = useNavigation();
    const route = useRoute();
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();
    const [name, setName] = useState('');

    useLayoutEffect(() => {

        //Se o usuário já cadastrou os dias eu pulo essa tela, e ja envio ele pra próxima
        // if (user.workoutDays) {
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
    }, [user.level]);


    const nextAction = () => {
        if (!user.workoutDays.length || !user.level) {
            Alert.alert("Você precisa selecionar um nivel!");
            return
        }

        //Passando o parametro workoutDays via route.params.workoutDays lá na próxima pagina
        navigation.navigate('StarterRecommendations', {
            level: user.level
        });
    }

    const setLevel = (level) => {
        dispatch(SET_LEVEL({               
            level: level
        }));
    }

    let funnyPhrase = '';

    switch(user.workoutDays.length) {
        case 1:
            funnyPhrase = "Só 1 dia não vai adiantar muito, mas...";
            break;
        case 2:
            funnyPhrase = "2 dias eu acho pouco, mas quem sou eu pra te julgar?";
            break;    
        case 3:
            funnyPhrase = "Legal, 3 dias dá pro gasto...";
            break;
        case 4:
            funnyPhrase = "Legal, 4 dias vai ser TOP!";
            break;
        case 5:
            funnyPhrase = "É isso ai, 5 dias é o mínimo, lets GO!";
            break;    
        case 6:
            funnyPhrase = "É, 6 dias não é pra todo mundo...";
            break; 
        case 7:
            funnyPhrase = "Wooow! Todo dia?! WTF?!";
            break;   
    }

    return (
        <Container>
            <HeaderText>{funnyPhrase}</HeaderText>
            <HeaderText><BoldText>Qual seu nivel hoje?</BoldText></HeaderText>

            <LevelArea>
                <DefaultButton bgColor={user.level=='beginner'?'#A5E8BC':false} style={{marginBottom: 20}} underlayColor="#CCC" onPress={() => setLevel('beginner')}>
                    <Text>Iniciante / Um frango</Text>
                </DefaultButton>
                <DefaultButton bgColor={user.level=='intermediate'?'#A5E8BC':false} style={{marginBottom: 20}} underlayColor="#CCC" onPress={() => setLevel('intermediate')} >
                    <Text>Intermediário / Me viro bem</Text>
                </DefaultButton>
                <DefaultButton bgColor={user.level=='advanced'?'#A5E8BC':false} style={{marginBottom: 20}} underlayColor="#CCC" onPress={() => setLevel('advanced')} >
                    <Text>Avançado / Primo do The Rock</Text>
                </DefaultButton>
            </LevelArea>

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

const LevelArea = styled.View`
    width: 100%;
`;


export default PageStarterDays;
