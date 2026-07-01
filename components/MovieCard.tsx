import { Image } from 'expo-image'
import React from 'react'
import { ImageSourcePropType, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Colors from '../constants/colors'
import { hs, ms, vs } from '../screen-dimensions'

interface MovieCardProps{
    image?:ImageSourcePropType | undefined
    title:string
    genre:string
}

const MovieCard = ({genre,title,image}:MovieCardProps) => {
  return (
    <TouchableOpacity activeOpacity={.8} style={styles.container}>
      <Image style={styles.image} source={image}/>
      <View>
        <Text numberOfLines={1} style={{color:Colors.text,fontWeight:"600",fontSize:ms(14)}}>{title}</Text>
        <Text numberOfLines={1} style={{color:Colors.gray,fontSize:ms(10)}}>{genre} </Text>
      </View>
    </TouchableOpacity>
  )
} 

export default MovieCard

const styles = StyleSheet.create({
    container:{
        width:hs(90),
        marginHorizontal:8,
        marginBottom:14,
    },
    image:{
        height:vs(200),
        width:"150%",
        borderRadius:10,
    }
})