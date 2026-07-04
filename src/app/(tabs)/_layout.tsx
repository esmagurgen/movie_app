import { Feather, MaterialCommunityIcons, Octicons } from "@expo/vector-icons"
import { Tabs } from 'expo-router'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import Colors from '../../../constants/colors'

const RightIcon=({icon}:{icon?:any}) =>{
    return(
        <TouchableOpacity activeOpacity={.8} style={styles.rightIconWrapper}>
            {icon? icon : <Feather name="search" size={24} color={Colors.text}/> }
        </TouchableOpacity>
    )
}

const TabLayout = () => {
  return (
    <Tabs
    screenOptions={{
        tabBarInactiveTintColor:Colors.gray,
        tabBarActiveTintColor:Colors.primary,
        tabBarStyle:{
            backgroundColor:Colors.background,
            borderColor:Colors.background
        },
    }}
     >
     <Tabs.Screen
     name="(home)/index" 
     options={{
        tabBarIcon:({color}) =>
             (
         <Feather name="home" size={20} color={color}/>
                  ),
     tabBarLabel:"Home",
    headerShown:false
     }}/>
      <Tabs.Screen
      name="movies"
       options={{
        tabBarIcon:({color}) =>
             (
         <Feather name="play-circle" size={20} color={color}/>
           ),
          tabBarLabel:"Movies",
        headerShown:false
     }}/>
      <Tabs.Screen 
     name="series" 
     options={{
        tabBarIcon:({color}) => 
            (
         <Feather name="folder" size={20} color={color}/>
            ),
         tabBarLabel:"Series",
        headerShown:false
     }}/>
     <Tabs.Screen 
     name="profile"
      options={{
        tabBarIcon:({color}) => 
            (
         <Octicons name="person" size={20} color={color}/>
            ),
        tabBarLabel:"Me",
      headerStyle:{backgroundColor:Colors.background},
      headerTitle:"",
      headerRight:()=>{
        return <RightIcon icon={<MaterialCommunityIcons size={25} name="cog-outline" color={Colors.text}/>}/>
      },
      headerLeft:()=>{
      return <Text style={styles.title}>Profile</Text>
      }
     }}/>
    </Tabs>      
    )
}       

export default TabLayout;

const styles = StyleSheet.create({
    rightIconWrapper:{
        height:45,
        width:45,
        backgroundColor:"#202020",
        borderRadius:"50%",
        alignItems:"center",
        justifyContent:"center",
        marginRight:14
    },
    title:{
        color:Colors.text,
        marginLeft:14,
        fontWeight:"600",
        fontSize:24
    }, 
})   
        
     
     
   
   


