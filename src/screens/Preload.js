import { CommonActions, useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

const Preload = (props) => {

    const navigation = useNavigation();
    const user = useSelector(state => state.user);
    //console.log("[DEBUG]" + user.name);

    //Deixar WorkoutDays == null faz com que o App já saiba que esse usuário 
    //Já passou pelas etapas de configurações
    if (!user.name && !user.workoutDays == null) {
        navigation.dispatch(CommonActions.reset({
            index: 0,
            routes: [
                { name: 'StarterStack' }
            ]
        }));

    } else {
        navigation.dispatch(CommonActions.reset({
            index: 0,
            routes: [
                { name: 'AppTab' }
            ]
        }));
    }
}



export default Preload;