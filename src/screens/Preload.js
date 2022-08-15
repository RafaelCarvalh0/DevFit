import { NavigationActions, StackActions} from "@react-navigation/native";
import { CommonActions, useNavigation, useRoute } from "@react-navigation/native";
import { connect, useSelector } from "react-redux";

const Preload = (props) => {

    //alert("[DEBUG]")
    const navigation = useNavigation();
    const route = useRoute();
    const user = useSelector(state => state.user);
    //console.log("[DEBUG]" + user.name);

    // TEMPORARIO
    // navigation.navigate('StarterStack')

    // const nextAction = () => {
    //     navigation.dispatch(CommonActions.reset({
    //         index: 0,
    //         routes: [
    //             {name: 'AppTab'}
    //         ]
    //     }));       
    // }


    if(!props.name) {
        //navigation.navigate('StarterStack')

        navigation.dispatch(CommonActions.reset({
            index: 0,
            routes: [
                {name: 'StarterStack'}
            ]
        }));   
        // mandar para StarterStack
        // props.navigation.dispatch(StackActions.reset({
        //     index: 0,
        //     actions: [
                
        //     ]
        // }));
    } else {
        //navigation.navigate('AppTab')
        navigation.dispatch(CommonActions.reset({
            index: 0,
            routes: [
                {name: 'AppTab'}
            ]
        }));   
    }
    

    mapStateToProps(user);
    return null;
}



const mapStateToProps = (user) => {
    
    //alert(user.name)
    return {
        user    
    };
}

export default connect(mapStateToProps)(Preload);