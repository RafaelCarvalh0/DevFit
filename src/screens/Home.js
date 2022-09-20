import React, { useState, useLayoutEffect } from "react";

import styled from "styled-components/native";
import { useSelector, useDispatch } from "react-redux";
import { CommonActions, useNavigation, useRoute } from "@react-navigation/native";
import { ADD_WORKOUT, DEL_WORKOUT } from "../reducers/userReducer";

import HomeMonthScroll from "../components/HomeMonthScroll";
import HomeDaysScroll from "../components/HomeDaysScroll";
import HomeDayStatus from "../components/HomeDayStatus";

const PageStarterDays = (props) => {

    const navigation = useNavigation();
    const route = useRoute();
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();

    const ConfigButton = () => {

        const btnAction = () => {
            navigation.navigate('HomeConfig');
        }

        return (
            <ConfigButtonArea onPress={btnAction} underlayColor="transparent">
                <ConfigButtonImage source={require('../assets/config.png')} />
            </ConfigButtonArea>
        );
    }

    useLayoutEffect(() => {

        navigation.setOptions({
            title: "Seu progresso diário",
            headerTitleAlign: 'center',
            headerRight: () => (
            <ConfigButton />
            )
        });

    }, []); 

    let today = new Date();

    const [selectedMonth, setSelectedMonth] = useState(today.getMonth());
    const [selectedDay, setSelectedDay] = useState(today.getDate());

    return (
        <Container>
            <HomeMonthScroll 
                selectedMonth={selectedMonth}
                setSelectedMonth={setSelectedMonth}
            />
            <HomeDaysScroll
                selectedMonth={selectedMonth}
                selectedDay={selectedDay}
                setSelectedDay={setSelectedDay}
                
                dailyProgress={user?.dailyProgress}
                workoutDays={user?.workoutDays}
            />
            <HomeDayStatus />

            <LegendText>Mês: {selectedMonth}</LegendText>
            <LegendText>Dia: {selectedDay}</LegendText>

            <Legend>
                <LegendText>Legenda:</LegendText>
                <LegendItem>
                    <LegendBox style={{backgroundColor: '#B5EEFF'}}></LegendBox>
                    <LegendText>Hoje</LegendText>
                </LegendItem>
                <LegendItem>
                    <LegendBox style={{backgroundColor: '#B5FFB8'}}></LegendBox>
                    <LegendText>Treino feito</LegendText>
                </LegendItem>
                <LegendItem>
                    <LegendBox style={{backgroundColor: '#FFB5B5'}}></LegendBox>
                    <LegendText>Treino perdido</LegendText>
                </LegendItem>
                <LegendItem>
                    <LegendBox style={{backgroundColor: '#F4F4F4'}}></LegendBox>
                    <LegendText>Dia de descanso</LegendText>
                </LegendItem>
                <LegendItem>
                    <LegendBox style={{backgroundColor: '#FFEAA7'}}></LegendBox>
                    <LegendText>Dia futuro</LegendText>
                </LegendItem>
            </Legend>
        </Container>
    );

}


const Container = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    background-color: #FFF;
`;

const ConfigButtonArea = styled.TouchableHighlight`
    width: 30px;
    height: 30px;
    justify-content: center;
    align-items: center;
`;

const ConfigButtonImage = styled.Image`
    width: 25px;
    height: 25px;
`;

const Legend = styled.View`
    width: 90%;
    height: 75%;
    align-items: flex-start;
    margin-top: 30px;
`;

const LegendText = styled.Text`
    color: #555;
`;

const LegendItem = styled.View`
    flex-direction: row;
    align-items: center;
    margin-top: 5px;
`;

const LegendBox = styled.View`
    width: 15px;
    height: 15px;
    background-color: #CCC;
    margin-right: 5px;
`;

export default PageStarterDays;
