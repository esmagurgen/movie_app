import React from 'react'
import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import MovieCard from '../../../../components/MovieCard'
import OverviewSection from '../../../../components/OverviewSection'
import Colors from '../../../../constants/colors'
import { movies } from '../../../../mock-data'

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
  

const HomeScreen = () => {
  return (
    <View style={styles.container}>
     <ScrollView style={styles.scrollContainer}>
      <OverviewSection/>
      <View style={{flex:1}}>
        <View style={{marginVertical:20}}>
          <SectionHeader title='Trending'/>
        </View>
        <FlatList data={movies} renderItem = {( {item} ) => (
        <MovieCard genre={item.genre} title={item.title} image={item.image} />
  )}/>
       </View>
     </ScrollView>
    </View> 
    )
} 
      
  
export default HomeScreen;

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:Colors.background
  },
  scrollContainer:{
    flexGrow:1
  },
  sectionHeader:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
    marginBottom:14,
    paddingHorizontal:14,
  },
})    

