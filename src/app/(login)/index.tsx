import React from 'react';
import { StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Colors from '../../../constants/colors';
const LoginScreen = () =>{
    const insets = useSafeAreaInsets();
    return (
      
            <View style={[
      styles.container, 
     { paddingTop: insets.top, paddingBottom: insets.bottom , backgroundColor:Colors.background}
    ]}>
                <Text>
                    Hello     
                </Text>
            </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
});