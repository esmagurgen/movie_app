import React from 'react'
import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import MovieCard from '../../../../components/MovieCard'
import OverviewSection from '../../../../components/OverviewSection'
import Colors from '../../../../constants/colors'
import { movies } from '../../../../mock-data'
import ContinueWatchingMovieCard from '../../../../components/ContinueWatchingMovieCard'


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
     <ScrollView style={styles.container}  showsVerticalScrollIndicator={false}>
      <OverviewSection/> 
      <SectionHeader title='Trending'/>
      <View style={styles.sectionHeader}>
      <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
     contentContainerStyle={{paddingHorizontal:12, paddingBottom:10}}
      data={movies}
      keyExtractor={(item,index) => index.toString()}
      renderItem={({item}) =>(
        <View style={styles.cardContainer}>
        <MovieCard genre={item.genre} title={item.title} image={item.image}/>
        </View>
      )}
      
    />
     </View>
     <SectionHeader title="Continue watching"/>
     <ContinueWatchingMovieCard
      genre="Action | Drama " 
      title="Sandman" 
      image={require("@/assets/images/movie1.png")}/>
     </ScrollView>
    
  )
    
} 
    
export default HomeScreen;

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:Colors.background
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

    
       
       
      
  
