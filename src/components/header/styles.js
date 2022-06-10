import Colors from '../../constants/colors'
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 90,
        backgroundColor: Colors.orange,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        color:Colors.textColorPrimary,
        fontSize:32,
        fontFamily:"urbanistBold",
        //Nunca poner una fuente personalizada con un fontWeight:bold. 
        //En caso de terer una fuente por default, no hay problema en usarlo
    },
});
