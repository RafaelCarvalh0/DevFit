import React, { useState, useEffect, useLayoutEffect } from "react";
import { Alert } from 'react-native';

import styled from "styled-components/native";
import { connect, useSelector, useDispatch } from "react-redux";
import { useNavigation, useRoute } from "@react-navigation/native";
import DefaultButton from "../components/DefaultButton";
import { SET_NAME } from "../reducers/userReducer";


const PageStarterName = () => {

    const navigation = useNavigation();
    const route = useRoute();
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();
    const [name, setName] = useState('');


    useLayoutEffect(() => {

        //Se o usuário já cadastrou o nome eu pulo essa tela, e ja envio ele pra próxima
        // if (user.name) {
        //     navigation.navigate('StarterDays', {
        //         name: user.name
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
    }, [name]);

    const nextAction = () => {

        if (!name) {
            Alert.alert("Você precisa de um nome!");
            return
        }

        //console.log("Salvei o " + name)
        //Despacho o nome pro redux
        dispatch(SET_NAME({
            name: name
        }));

        //Passando o parametro name via route.params.name lá na próxima pagina
        navigation.navigate('StarterDays', {
            name: name
        });
    }

    return (
        <Container>
            <HeaderText>Qual é o seu nome?</HeaderText>
            <NameInput
                defaultValue={name}
                onChangeText={texto => setName(texto)}
                autoFocus={true}
                autoCapitalize="words"
                onSubmitEditing={nextAction}
            />
        </Container>
    );
}


const Container = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    background-color: #FFF;
    padding: 0 30px 0 30px;
`;

const HeaderText = styled.Text`
    font-size: 22px;
    color: #333;
    margin-top: 50px;
    margin-bottom: 30px;
`;

const NameInput = styled.TextInput`
    border: 1px solid #CCC;
    width: 100%;
    height: 50px;
    border-radius: 10px;
    font-size: 16px;
    padding: 10px;
`;

const NextButton = styled.Button`

`;


export default PageStarterName;


/* MODELO
const handleSaveButton = () => {
    if(title != '' && body != '') {

        if(status == 'edit') {
            dispatch(EDIT_NOTE({
                key: route.params.key,
                title,
                body    //Como tem o mesmo nome posso usar somente o body
            }));
        } else {
            dispatch(ADD_NOTE({
                title: title,
                body: body //Tem o mesmo nome, mas preferi usar dessa forma (tanto faz)
            }));
        }

        navigation.goBack();

    } else{
        alert('Preencha título e corpo');
    }
}

const handleDeleteNoteButton = () => {
    dispatch(DEL_NOTE({
        key: route.params.key
    }));

    navigation.goBack();
} */
