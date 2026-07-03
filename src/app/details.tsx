import { AntDesign, Feather, FontAwesome5, Ionicons } from "@expo/vector-icons"
import { Image } from 'expo-image'
import { LinearGradient } from "expo-linear-gradient"
import { useRouter } from 'expo-router'
import React from 'react'
import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import AddButton from "../../components/AddButton"
import MovieCard from "../../components/MovieCard"
import Colors from '../../constants/colors'
import { movies } from "../../mock-data"
const SectionHeader = ({title}:{title:string})=>{
   return(
    <View style={styles.sectionHeader}>
      <Text style={{color:Colors.text,fontWeight:"600",fontSize:16}}>{title}</Text>
      <TouchableOpacity activeOpacity={.8} style={{padding:10}}>
        <Text style={{color:Colors.primary}}>See More</Text>
      </TouchableOpacity>
    </View>
    )
} 

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
    <View style={styles.btnwrapper}>
      <TouchableOpacity activeOpacity={.8} style={{alignItems:"center",marginLeft:18}}>
     <Feather name="bookmark" size={16} color={Colors.text}/>
     <Text style={{fontSize:10,color:Colors.text}}>Save</Text>
      </TouchableOpacity>
     <TouchableOpacity activeOpacity={.8} style={{alignItems:"center",marginLeft:18}}>
     <Ionicons name="paper-plane-outline" size={16} color={Colors.text}/>
     <Text style={{fontSize:10,color:Colors.text}}>Share</Text>
      </TouchableOpacity>
    </View>
    <View>
      <Text style={{color:Colors.primary,fontWeight:"600",fontSize:18,marginLeft:12}}>OverView</Text>
      <Text style={{color:Colors.text,marginTop:10,fontSize:12,marginLeft:12}}>
      In a world ravaged by a fungal outbreak that turns people into monsters,a hardened smuggler,Joel,is tasked with escorting a teenage girl,Ellie - who may hold the key to humanity's survival - across the ruins of the United States. 
      </Text>
    </View>
      <SectionHeader title='You may also like'/>
      <View style={styles.sectionHeader}>
      <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
     contentContainerStyle={{paddingHorizontal:12, paddingBottom:10}}
      data={movies.reverse()}
      keyExtractor={(item,index) => index.toString()}
      renderItem={({item}) =>(
        <View style={styles.cardContainer}>
        <MovieCard genre={item.genre} title={item.title} image={item.image}/>
        </View>
      )}
       />
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
  },
  btnwrapper:{
    flexDirection:"row",
    alignItems:"center",
    marginVertical:16
  },
  sectionHeader:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
    marginBottom:14,
    paddingHorizontal:14,
  },
   cardContainer:{
 width:150,
 marginRight:15,
 backgroundColor:Colors.background,
 borderRadius:15,
 overflow:"hidden",
  },
})