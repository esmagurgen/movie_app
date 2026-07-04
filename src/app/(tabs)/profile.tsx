import React from 'react'
import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import MovieCard from '../../../components/MovieCard'
import Colors from '../../../constants/colors'
import { movies } from '../../../mock-data'
import { ms } from '../../../screen-dimensions'
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
const ProfileScreen = () => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
     <View style={{alignItems:"center",justifyContent:"center",marginVertical:20}}>
       <Image source={require("@/assets/images/profile.jpg")} style={styles.profile}/>
       <Text style={styles.name}>Kelvin</Text>
       <Text style={{color:Colors.gray,textAlign:"center"}}>sowahkelvin640@gmail.com</Text>
     </View>
     <Text style={{color:Colors.primary,fontWeight:"600",fontSize:16,marginHorizontal:12}}>Watch History</Text>
    <View style={{marginBottom:12}}>
    <SectionHeader title='Yesterday'/>
    <FlatList 
    horizontal
    showsHorizontalScrollIndicator={false}
    data={[...movies].reverse()}
    contentContainerStyle={{paddingHorizontal:12, paddingBottom:10}}
     keyExtractor={(item,index) => index.toString()}
      renderItem={({item}) =>(
        <View style={styles.cardContainer}>
        <MovieCard genre={item.genre} title={item.title} image={item.image}/>
        </View>
      )}
    />
   </View>
   <View style={{marginBottom:12}}>
    <SectionHeader title='14th October,2025'/>
    <FlatList 
    horizontal
    showsHorizontalScrollIndicator={false}
    data={movies}
    contentContainerStyle={{paddingHorizontal:12, paddingBottom:10}}
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

export default ProfileScreen;

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:Colors.background,
    padding:6
  },
  profile:{
    height:ms(150),
    width:ms(150),
    borderRadius:ms(150)/2,
  },
  name:{
    color:Colors.text,
    fontWeight:"600",
    fontSize:ms(22),
    marginTop:12,
    textAlign:"center"
  },
    cardContainer:{
 width:150,
 marginRight:15,
 backgroundColor:Colors.background,
 borderRadius:15,
 overflow:"hidden",
  },
  sectionHeader:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
    marginBottom:14,
    paddingHorizontal:14,
  },
})