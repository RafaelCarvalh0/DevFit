import { CommonActions, useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

const Preload = (props) => {

    const navigation = useNavigation();
    const user = useSelector(state => state.user);
    console.log("[DEBUG]" + user.name);

    //Todo - Persistir usuário já cadastrado!
    if (user.name == ""  && user.workoutDays == "") {
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