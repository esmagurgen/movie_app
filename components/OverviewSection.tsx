import { Feather, FontAwesome } from "@expo/vector-icons"
import { Image } from 'expo-image'
import { LinearGradient } from "expo-linear-gradient"
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Colors from '../constants/colors'
const OverviewSection = () => {
    const insets=useSafeAreaInsets()
  return (
    <View style={styles.overview}>
    <Image source={require("../assets/images/overview.png")} style={styles.overViewImage} contentFit='cover'/>
    {/*Overview Cover*/}
    <View style={styles.cover}>
        <View style={{paddingTop: insets.top, paddingBottom: insets.bottom,flex:1}}>
            <View style={styles.header}>
                <View style={{flexDirection:"row",alignItems:"center"}}>
                    <Image style={styles.profile} source={require("../assets/images/profile.jpg")} contentFit='cover'/>
                    <View style={{marginLeft:8}}>
                        <Text style={styles.greeting}>Hi,Kevin</Text>
                        <Text style={{color:Colors.text,fontSize:16}}>Welcome Back</Text>
                    </View>
                </View>
                <TouchableOpacity style={styles.searchWrapper} activeOpacity={0.8}>
                    <Feather name="search" size={24} style={{color:Colors.text}}></Feather>
                </TouchableOpacity>
            </View>
        </View>
        <LinearGradient style={styles.blur} colors={["transparent",Colors.background]}>
            <View style={styles.categoryBadge}>
                <Text style={{color:Colors.text,fontWeight:"500",fontSize:16}}>Series</Text>
            </View>
            <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
               <Text numberOfLines={1} style={{fontSize:26,fontWeight:"600",color:Colors.text,flex:1 }}>The Sandman</Text>
               <TouchableOpacity activeOpacity={0.8} style={styles.playbtn}>
                <FontAwesome name="play" size={24} color={Colors.text}/>
               </TouchableOpacity>
            </View> 
            <Text style={{color:Colors.gray}}>2025 | Monster Horror | Sci-fi epic </Text>
        </LinearGradient>
    </View>
    </View>
  )
}

export default OverviewSection

const styles = StyleSheet.create({
    overview:{
        height:400,
       position:"relative"
    },
    overViewImage:{
        width:"100%",
        height:"100%",
       
    },
    cover:{
        position:"absolute",
        top:0,
        bottom:0,
        left:0,
        right:0,
        backgroundColor:"rgba(0,0,0,0.6)"
    },
    header:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        padding:14
    },
    profile:{
        height:45,
        width:45,
        borderRadius:50
    },
    greeting:{
        color:Colors.text,
        fontWeight:"600",
        fontSize:22,
    },
    searchWrapper:{
        height:50,
        width:50,
        backgroundColor:"#535456",
        borderRadius:50, 
        alignItems:"center",
        justifyContent:"center"
    },
    blur:{
        height:150,
        width:"100%",
        padding:14,
        justifyContent:"space-around"
    },
    categoryBadge:{
        padding:8,
        backgroundColor:Colors.surface,
        borderRadius:14,
        alignItems:"center",
        width:100
    },
    playbtn:{
        height:60,
        width:60,
        borderRadius:"50%",
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:Colors.surface
    }
});  
