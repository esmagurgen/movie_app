import React from 'react';
import { StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import AppTextInput from '../../../components/AppTextInput';
import Colors from '../../../constants/colors';
const LoginScreen = () =>{
    const insets = useSafeAreaInsets();
    return (
      
            <View style={[
      styles.container, 
     { paddingTop: insets.top, paddingBottom: insets.bottom , backgroundColor:Colors.background}
    ]}>
                <Text style={styles.text}>
                    Ready to Stream ?      
                </Text>
                <View style = {styles.inputwrapper}>
                 <AppTextInput/>
                </View>
            </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
       padding:14,
       justifyContent:"center",
       alignItems:"center"
    },
    text:{
    fontWeight:"600",
    color:Colors.text,
    fontSize:26
    },
    inputwrapper:{
     width:"100%",
     marginVertical:26,

    },
});