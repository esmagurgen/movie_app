import React from 'react'
import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import ContinueWatchingMovieCard from '../../../../components/ContinueWatchingMovieCard'
import MovieCard from '../../../../components/MovieCard'
import OverviewSection from '../../../../components/OverviewSection'
import Colors from '../../../../constants/colors'
import { useFetch } from '../../../../hooks/useFetch'
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
  const currentYear=new Date().getFullYear();
   const params={
    include_adult:false,
    include_video:false,
    language:"en-US",
    page:1,
    sort_by:"popularity.desc"
  };
  const {data:trendingData,loading:trendingLoading} = useFetch("/discover/movie",params)
  const {data:newReleasesData,loading:newReleasesLoading} = useFetch("/discover/movie",{
    ...params,
    primary_release_year:currentYear,
  })
  const {data:internationalPickData,loading:internationalPickLoading} = useFetch("/discover/tv",params)
  const {data:continueWatchingData,loading:continueWatchingLoading} = useFetch("/discover/tv",{
    ...params,
    page:2,
  })
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
     <FlatList 
     horizontal
     showsHorizontalScrollIndicator={false}
    contentContainerStyle={{paddingHorizontal:12, paddingBottom:10,gap:80}}
     data={[...movies].reverse()}
     renderItem={({item})=>(
     <ContinueWatchingMovieCard
      genre={item.genre} 
      title={item.title}
      image={item.image}/>
     )}>
    </FlatList>
    <View>
        <SectionHeader title='New Releases'/>
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
    </View> 
     <View>
        <SectionHeader title='International Picks'/>
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
    </View>     
     </ScrollView>
  );     
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

    
       
       
      
  
