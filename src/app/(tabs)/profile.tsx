import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../../../constants/colors'
const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Text>profile</Text>
    </View>
  )
}

export default ProfileScreen;

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:Colors.background
  },
})