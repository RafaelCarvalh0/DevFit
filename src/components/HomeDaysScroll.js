import React, { useState, useEffect, useRef } from "react";
import { Dimensions, Text } from "react-native";
import styled from "styled-components/native";

const screenWidth = Math.round(Dimensions.get('window').width);
let dayWidth = Math.round(screenWidth / 9);
let offsetWidth = Math.round((screenWidth - dayWidth) / 2);

const Day = ({day, month, dailyProgress, workoutDays, onPress}) => {
    let bgColor = '#FFEAA7';
    
    let today = new Date();
    today.setHours(0);
    today.setMinutes(0);
    today.setSeconds(0);
    today.setMilliseconds(0);

    let thisDate = new Date(today.getFullYear(), month, day);

    if(workoutDays.includes(thisDate.getDay())) {

        if(thisDate.getTime() < today.getTime()) {
            let thisYear = thisDate.getFullYear();
            let thisMonth = thisDate.getMonth();
            let thisDay = thisDate.getDate();
            thisMonth = (thisMonth < 10) ? '0' + thisMonth : thisMonth + 1;
            thisMonth = (thisDay < 10) ? '0' + thisDay : thisDay;

            let dFormated = `${thisYear}-${thisMonth}-${thisDay}`;

            //alert(thisMonth)
            // console.log("---------- THIS YEAR --- ", thisYear);
            // console.log("---------- THIS MONTH --- ", thisMonth);
            // console.log("---------- THIS DAY --- ", thisDay);
            // console.log("---------- DFORMATED --- ", dFormated);

            if(dailyProgress.includes(dFormated)) {
                bgColor = '#B5FFB8'; //Treinou
            } else {
                bgColor = '#FFB5B5'; // Não treinou
            }

        }

    } else {
        bgColor = '#F4F4F4';
    }

    if(thisDate.getTime() == today.getTime()) {
        bgColor = '#B5EEFF';
    }

    return (
        <DayButton width={dayWidth} onPress={onPress} underlayColor="transparent">
            <DayItem style={{backgroundColor: bgColor}}>
                <DayText>{day}</DayText>
            </DayItem>
        </DayButton>
    );
}

const DayButton = styled.TouchableHighlight`
    width:${props=>props.width};
    justify-content: center;
    align-items: center;
`;

const DayItem = styled.View`
    width: 30px;
    height: 30px;
    border-radius: 15px;
    background-color: #EEE;
    justify-content: center;
    align-items: center;
`;

const DayText = styled.Text`

`;


//---------------------------------------------------------------------

export default (props) => {

    const DayRef = useRef();

    const [selectedDay, setSelectedDay] = useState(props.selectedDay);

    const handleScrollEnd = (e) => {
        let posX = e.nativeEvent.contentOffset.x;
        let targetDay = Math.round(posX / dayWidth) + 1;
        setSelectedDay(targetDay);

    }

    const scrollToDay = (day) => {
        let posX = (day - 1) * dayWidth;
        DayRef.current.scrollTo({x:posX, y:0, animated:true});

    }

    useEffect(() => {
        props.setSelectedDay(selectedDay);
    }, [selectedDay]);

    useEffect(() => {
        setTimeout(() => {
            if(props.selectedMonth == new Date().getMonth()) {
                scrollToDay(new Date().getDate());
            } else {
                scrollToDay(1);
            }
        }, 10);
    }, [props.selectedMonth]);

    let days = [];
    //Isso tudo é para saber quantos dias eu tenho no mês atual
    let daysInMonth = new Date(new Date().getFullYear(), (props.selectedMonth + 1), 0).getDate();
    for(let i = 1; i <= daysInMonth; i++) {
        days.push(i);
    }

    return (
        <DaysScroll
            ref={DayRef}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            decelerationRate="fast"
            snapToInterval={dayWidth}
            contentContainerStyle={{paddingLeft: offsetWidth, paddingRight: offsetWidth}}
            onMomentumScrollEnd={handleScrollEnd}
       >
            {days.map((day, key) => {
                return (
                    <Day
                        key={key}
                        day={day}
                        month={props.selectedMonth}
                        dailyProgress={props.dailyProgress}
                        workoutDays={props.workoutDays}
                        onPress={() => scrollToDay(day)}
                    />
                );
            })}
        </DaysScroll>
    );
}

const DaysScroll = styled.ScrollView`
    width: 100%;
    height: 50px;
`;


