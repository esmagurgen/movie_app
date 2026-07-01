import { FontAwesome5 } from '@expo/vector-icons'
import { Image } from 'expo-image'
import React from 'react'
import { DimensionValue, ImageSourcePropType, StyleSheet, TouchableOpacity, View,Text } from 'react-native'
import Colors from '../constants/colors'
import { hs, vs } from '../screen-dimensions'
interface ContinueWatchingMovieCardProps{
    image?:ImageSourcePropType | undefined
    title:string
    genre:string
}

const ContinueWatchingMovieCard = ({genre,title,image}:ContinueWatchingMovieCardProps) => {
    const getRandomPercantage=():DimensionValue => {
    const min=10;
    const max=100;
    const value=Math.floor(Math.random() * (max - min + 1)) + min ;
    return `${value}%`;
    }
    const randomPercentage=getRandomPercantage()
    return (
    <View style={styles.container}>
   <View style={{position:"relative"}}>
    <TouchableOpacity style={styles.pressPlay}>
   <FontAwesome5  name="play" size={24} color="#202020" />
    </TouchableOpacity>
    <Image source={image} style={styles.image}/>
    <View style={styles.progressbarContainer}>
  <View style={[styles.progress, {width:randomPercentage}]}></View>
  </View>
  <Text numberOfLines={1} style={{color:Colors.text,fontWeight:"600",fontSize:16}}>{title}</Text>
  <Text numberOfLines={1} style={{ color:Colors.gray,fontSize:12}}>{genre}</Text>
   </View>
    </View>
  )
} 
  
  

export default ContinueWatchingMovieCard

const styles = StyleSheet.create({
    container:{
        width:hs(150),
        marginHorizontal:8,
    },
    image:{
        height:vs(190),
        width:"150%",
        borderRadius:6,
    },
    pressPlay:{
        position:"absolute",
        top:0,
        bottom:30,
        left:0,
        right:-70,
        zIndex:9999,
        alignItems:"center",
        justifyContent:"center"
    },
    progressbarContainer:{
        marginTop:8,
        height:3,
        width:"150%",
        backgroundColor:Colors.text,
        borderRadius:4,
        overflow:"hidden"
    },
    progress:{
        height:"100%",
        backgroundColor:Colors.primary,
        borderRadius:4
    }
})