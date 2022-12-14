import React from "react";
import styled from "styled-components/native";
import DefaultButton from "../components/DefaultButton";

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

const WelcomeImage = styled.View`
    flex: 1;
    justify-content: center;
`;

const WelcomeLogo = styled.Image`
    width: 200px;
    height: 200px;
`;

const BeginConfigArea = styled.View`
    width: 100%;
    margin-bottom: 50px;
`;

const ButtonText = styled.Text`
    color: #FFF;
`;

const PageStarterIntro = (props) => {

    const start = () => {
        props.navigation.navigate('StarterName');
    }

    return (
        <Container>
            <WelcomeText>Bem vindo(a) ao DevFit</WelcomeText>
            <WelcomeImage>
                <WelcomeLogo source={require('../assets/boneco.png')} />
            </WelcomeImage>
            <BeginConfigArea>
                <DefaultButton underlayColor="#0B7AC6" width="100%" bgColor="#0072C0" onPress={start}>
                    <ButtonText>Iniciar Configuração</ButtonText>
                </DefaultButton>
            </BeginConfigArea>
        </Container>
    );
}

export default PageStarterIntro;