import { NavigationActions, StackActions} from "@react-navigation/native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { connect, useSelector } from "react-redux";

const Preload = (props) => {

    //alert("[DEBUG]")
    const navigation = useNavigation();
    const route = useRoute();
    const user = useSelector(state => state.user);
    console.log("[DEBUG]" + user.name);

    // TEMPORARIO
    // props.navigation.dispatch(StackActions.reset({
    //     index: 0,
    //     actions: [
    //         NavigationActions.navigate({routeName:'StarterStack'})
    //     ]
    // }));

    if(!user.name) {
        navigation.navigate('StarterStack')
        // mandar para StarterStack
        // props.navigation.dispatch(StackActions.reset({
        //     index: 0,
        //     actions: [
                
        //     ]
        // }));
    } else {
        navigation.navigate('AppTab')
        //mandar para AppTab
        // props.navigation.dispatch(StackActions.reset({
        //     index: 0,
        //     actions: [
        //         navigation.navigate('AppTab')
        //     ]
        // }));
    }

    mapStateToProps(user)
    //alert(user.name)
    return null;
}



const mapStateToProps = (user) => {
    
    //alert(user.name)
    return {
        user    
    };
}

export default connect(mapStateToProps)(Preload);