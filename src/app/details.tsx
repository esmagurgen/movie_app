import { AntDesign, Feather, FontAwesome5 } from "@expo/vector-icons"
import { Image } from 'expo-image'
import { LinearGradient } from "expo-linear-gradient"
import { useRouter } from 'expo-router'
import React from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import AddButton from "../../components/AddButton"
import Colors from '../../constants/colors'
const DetailsScreen = () => {
  const insets=useSafeAreaInsets()
  const router=useRouter()
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
    <View style={styles.overview}>
    <Image style={styles.overviewImage} source={require("@/assets/images/overview.png")} />
    <View style={[
      styles.cover,{ paddingTop: insets.top}]}>
      <View style={{flex:1,paddingHorizontal:14}}>
      <TouchableOpacity onPress={()=> router.back()} style={styles.backbtnwrapper} activeOpacity={.8}>
        <Feather name="chevron-left" size={26} color={Colors.text}/>
      </TouchableOpacity>
      </View>
      <LinearGradient style={styles.blur}colors={["transparent",Colors.background]}>
        <Text numberOfLines={1} style={{fontSize:26,fontWeight:"600",color:Colors.text}}>The Sandman</Text>
        <Text style={{color:Colors.gray}}>2025 | Monster Horror | Sci-fi Epic</Text>
        <View style={{flexDirection:"row",alignItems:"center"}}>
          <AntDesign name="star" size={16} color={"#FF891B"}/>
          <Text style={{color:"#ff891b",fontWeight:"600",marginLeft:6}}>9.5</Text>
        </View>
      </LinearGradient>
    </View>
    </View>
    <View style={{padding:14}}>
     <View style={{flexDirection:"row",alignItems:"center"}}>
      <AddButton 
      title="Watch Now"
      style={{backgroundColor:Colors.primary}}
      icon={<FontAwesome5 name="play" size={16} color={Colors.text}/>} />
      <AddButton
      title="Download"
      icon={<Feather name="download" size={16} color={Colors.text}/>}/>
     </View>
    </View>
    </ScrollView>
  )
}

export default DetailsScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:Colors.background
  },
  overview:{
    height:400,
    position:"relative"
  },
  overviewImage:{
    height:"100%",
    width:"100%"
  },
  cover:{
    position:"absolute",
    top:0,
    bottom:0,
    left:0,
    right:0,
    zIndex:9999,
    backgroundColor:"rgba(0,0,0,0.2)",
    justifyContent:"space-between"
  },
  backbtnwrapper:{
    height:40,
    width:40,
    backgroundColor:"#151515",
    borderRadius:50,
    alignItems:"center",
    justifyContent:"center"
  },
  blur:{
    height:120,
    width:"100%",
    padding:14,
    justifyContent:"space-between",
  }
})