import React from 'react';
import { StyleSheet, Text, View } from "react-native";
import Colors from '../constants/colors';

const AppInputText = () =>{
    return (
   <View style={styles.wrapper}>
    <Text>
        AppInputText
    </Text>
   </View>
    )
}

export default AppInputText ;

const styles = StyleSheet.create({
    wrapper:{
    height:50,
    width : "100%",
    borderWidth:1,
    borderColor:Colors.darkBorder,
    borderRadius:8,
    backgroundColor:"#131313",
    paddingHorizontal:10,
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"center",
    marginBottom:16,



    }
})