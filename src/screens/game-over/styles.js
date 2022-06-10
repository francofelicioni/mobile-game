import { Dimensions, StyleSheet } from 'react-native';

const {width, height} = Dimensions.get("window"); 

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection:'column',
        justifyContent:"center",
        alignItems: "center",
        padding:10,
        marginBottom:200,
    },
    resultContainer:{
        marginBottom:20,
        paddingVertical:30,
        width:220,
        maxWidth:"80%",
        alignItems:"center",
    },
    resultContainerLandscape: {
        // marginBottom:10,
        padding:20,
        width:200,
        maxWidth:"80%",
        alignItems:"center",
    },
    image: {
        width:"80%",
        height:height*0.3,
    },
    containerLandscape: {
        flex: 1,
        // flexDirection:"row",
        padding:20,
        marginBottom:100,
        justifyContent:"space-between",
        alignItems: "center",
    },
    imageLandscape: {
        width:"30%",
        height:300*0.4,
    },
    restultText: {
        fontSize:18,
    }
});