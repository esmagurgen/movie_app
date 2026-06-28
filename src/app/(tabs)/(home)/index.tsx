import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../../../../constants/colors'
import { ScrollView } from 'react-native'
import OverviewSection from '../../../../components/OverviewSection'

const HomeScreen = () => {
  return (
    <View style={styles.container}>
     <ScrollView>
      <OverviewSection/>
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
})    

