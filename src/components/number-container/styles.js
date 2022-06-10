import Colors from "../../constants/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        borderWidth:2,
        borderColor: Colors.orange,
        padding:10,
        borderRadius:10,
        marginVertical:20,
        alignItems: "center",
        justifyContent: "center",
    }, 
    number: {
        color: Colors.shadow, 
        fontSize:20,
    }
})