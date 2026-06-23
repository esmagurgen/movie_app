import { useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import AddButton from '../../../components/AddButton';
import AppTextInput from '../../../components/AppTextInput';
import Colors from '../../../constants/colors';
const LoginScreen = () =>{
    const insets = useSafeAreaInsets();
    const router = useRouter();
    return (
      <View style={[
      styles.container,{ paddingTop: insets.top, paddingBottom: insets.bottom , backgroundColor:Colors.background}]}>
    <Text style={styles.text}>
                  Ready to Stream? 
                </Text>
                <View style = {styles.inputwrapper}>
                 <AppTextInput placeholder='Your Email'/>
                 <AppTextInput placeholder='Password' secureTextEntry/> 
                 <Text style={styles.forget}>Forget Password?</Text>
                 <AddButton style={{backgroundColor:Colors.primary,width:"100%",height:50}} title='Login'/>
                </View>
                <Text style={styles.createAccount}>Haven't signed up yet ?</Text>
                <Text onPress={()=>router.push("/sign-up")} style={{color:Colors.primary}}>
                    Create Account
                    </Text>
            </View>
    )
}    

export default LoginScreen;

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
    createAccount:{
       color:Colors.gray,
      fontSize:14,
      marginTop:14
    },
    forget:{
        fontSize:12,
        color:Colors.gray,
        alignSelf:"flex-end",
        marginBottom:16
    }
});



