import { useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import AddButton from '../../components/AddButton';
import AppTextInput from '../../components/AppTextInput';
import Colors from '../../constants/colors';
const SignUpScreen = () =>{
    const router = useRouter()
    const insets = useSafeAreaInsets();
    return (
       <View style={[ styles.container,{ paddingTop: insets.top, paddingBottom: insets.bottom , backgroundColor:Colors.background}
      ]}> 
      <Text style={styles.text}>
                  Start Streaming Now? 
                </Text>
                <Text style={styles.sub}>Join thousands of movie lovers</Text>
                <View style = {styles.inputwrapper}>
                 <AppTextInput placeholder='Your Email'/>
                 <AppTextInput placeholder='Password' secureTextEntry/> 
                 <Text style={styles.sub}>I agree to the terms of service and privacy policy</Text>
                 <AddButton style={{backgroundColor:Colors.primary,width:"100%",height:50,marginTop:20}} title='Create Account'/>
                   </View>
                <Text style={styles.createAccount}>Already have an account ?</Text>
                <Text onPress={()=>router.push("/(login)")} style={{color:Colors.primary}}>Log in</Text>
            </View>
    )
}                

export default SignUpScreen;

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
    
 sub:{
      fontSize:12,
      color:Colors.gray
 }  
});    

    


