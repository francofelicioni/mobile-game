import { Text, View }  from 'react-native';

import React from 'react-native';
import  { styles } from './styles';

const NumberContainer = ({ children }) => {
    return(
            <View style={styles.container}>
                <Text style={styles.number}>{children}</Text>
            </View>
    )
}

export default NumberContainer;