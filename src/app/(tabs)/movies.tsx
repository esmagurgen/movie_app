import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons'
import React from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import MovieCard from '../../../components/MovieCard'
import Colors from '../../../constants/colors'
import { movies } from '../../../mock-data'
const FilterItem=({title}:{title:string})=>{
 return(
  <TouchableOpacity activeOpacity={.8} style={styles.categoryWrapper}>
   <Text style={{color:Colors.text,marginRight:6,fontSize:13,paddingLeft:12}}>
    {title}
   </Text>
   <Entypo name="chevron-small-down" size={20} color={Colors.text}></Entypo>
  </TouchableOpacity>
 )
}
const MoviesScreen = () => {
  const RenderHeader = () => (
    <View style={styles.headerContainer}>
      <FilterItem title="Category" />
      <FilterItem title="Region" />
      <FilterItem title="Release Year" />
      <TouchableOpacity activeOpacity={0.8} style={{ padding: 10 }}>
        <MaterialCommunityIcons name="filter-outline" size={20} color={Colors.text} />
      </TouchableOpacity>
    </View>
  )
  return (
    <FlatList
      style={styles.container}
      data={movies}
      keyExtractor={(item, index) => String(index)} 
      numColumns={3}
      ListHeaderComponent={RenderHeader} 
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.listContent}
      columnWrapperStyle={styles.columnWrapper} 
      renderItem={({ item }) => (
        <View style={styles.cardContainer}>
          <MovieCard genre={item.genre} title={item.title} image={item.image} />
        </View>
      )}
    />

  )
}

export default MoviesScreen;

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:Colors.background,
  },
  categoryWrapper:{
    borderWidth:1,
    borderColor:Colors.gray,
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
    marginRight:5,
    borderRadius:18,
    marginLeft:5
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
    paddingHorizontal: 6,
  },
  cardContainer: {
    flex: 1 / 3, 
    marginHorizontal: 4,

  },
  listContent: {
    paddingHorizontal: 12,
    paddingBottom: 20,
  },
  columnWrapper: {
    justifyContent: 'space-between', 
    marginBottom: 10, 
  },
})