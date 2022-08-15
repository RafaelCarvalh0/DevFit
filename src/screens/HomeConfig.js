import React from "react";
import styled from 'styled-components/native';

export default () => {
    return (
        <Container>
            <Texto>Página Home Config</Texto>
        </Container>
    );
}

const Container = styled.View`
    flex: 1;
`;

const Texto = styled.Text`
    font-size: 20px;
`;