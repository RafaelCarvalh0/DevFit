import { CommonActions, useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

const Preload = () => {

    const navigation = useNavigation();
    const user = useSelector(state => state.user);
    //console.log("[DEBUG]" + user.name);
    console.log("estou em Preload")
    if (!props.name) {
        console.log("Primeiro if " + props.name)
        navigation.dispatch(CommonActions.reset({
            index: 0,
            routes: [
                { name: 'StarterStack' }
            ]
        }));

    } else {
        console.log("Segundo if " + props.name)
        navigation.dispatch(CommonActions.reset({
            index: 0,
            routes: [
                { name: 'AppTab' }
            ]
        }));

        return {
            name: user.name
        };
    }

    return null;
}



export default Preload;