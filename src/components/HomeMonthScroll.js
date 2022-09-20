import React, { useState, useEffect, useRef } from "react";
import { Dimensions } from "react-native";
import styled from "styled-components/native";

let months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
const screenWidth = Math.round(Dimensions.get('window').width);
let thirdWidth = screenWidth / 3;

export default (props) => {

    const MonthRef = useRef();

    const [selectedMonth, setSelectedMonth] = useState(props.selectedMonth);

    const handleScrollEnd = (e) => {
        let posX = e.nativeEvent.contentOffset.x;
        let targetMonth = Math.round(posX / thirdWidth);
        setSelectedMonth(targetMonth);
    }

    const scrollToMonth = (month) => {
        let posX = month * thirdWidth;
        MonthRef.current.scrollTo({x:posX, y:0, animated:true});
    }

    useEffect(() => {
        props.setSelectedMonth(selectedMonth);
    }, [selectedMonth]);

    useEffect(() => {
        setTimeout(() => {
            scrollToMonth(selectedMonth);
        }, 10);
    }, [props.selectedMonth]);

    return (
        <MonthScroll
            ref={MonthRef}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            decelerationRate="fast"
            snapToInterval={thirdWidth}
            contentContainerStyle={{paddingLeft: thirdWidth, paddingRight: thirdWidth}}
            onMomentumScrollEnd={handleScrollEnd}
       >
            {months.map((month, key) => {
                return (
                    <MonthButton key={key} width={thirdWidth} underlayColor="transparent" onPress={() => setSelectedMonth(key)}>
                        <MonthItem style={key == selectedMonth? {
                            backgroundColor: '#CCC',
                            width: '100%',
                            height: 40
                        } : {}}>
                            <MonthText>{month}</MonthText>
                        </MonthItem>
                    </MonthButton>
                );
            })}
        </MonthScroll>
    );
}

const MonthScroll = styled.ScrollView`
    margin: 5px 0;
    padding: 5px;
    width: 100%;
`;

const MonthButton = styled.TouchableHighlight`
    width:${ props => props.width};
    justify-content: center;
    align-items: center;
`;

const MonthItem = styled.View`
    width: 90%;
    height: 30px;
    background-color: #EEE;
    border-radius: 15px;
    justify-content: center;
    align-items: center;
`;

const MonthText = styled.Text`
    font-weight: bold;
`;

