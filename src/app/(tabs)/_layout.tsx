import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import Colors from '../../../constants/colors'

const TabLayout = () => {
  return (
    <Tabs
    screenOptions={{
        tabBarInactiveTintColor:Colors.gray,
        tabBarActiveTintColor:Colors.primary
    }}
     >
     <Tabs.Screen name="(home)/index"/>
     <Tabs.Screen name="movies"/>
     <Tabs.Screen name="series"/>
     <Tabs.Screen name="profile"/>
    </Tabs>
  )
}

export default TabLayout;

const styles = StyleSheet.create({})