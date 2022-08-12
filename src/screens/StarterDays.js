import React from "react";
import styled from "styled-components/native";
import DefaultButton from "../components/DefaultButton";
import { useNavigation, useRoute } from "@react-navigation/native";

const Container = styled.SafeAreaView`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: #FFF;
    padding: 0 30px 0 30px;
`;

const WelcomeText = styled.Text`
    font-size: 22px;
    color: #333;
    margin-top: 50px;
`;

const PageStarterDays = (props) => {

    const navigation = useNavigation();
    const route = useRoute();   

    alert(route.params?.name)
    return (
        <Container>
            <WelcomeText>{route.params?.name}</WelcomeText>
        </Container>
    );
}


export default PageStarterDays;