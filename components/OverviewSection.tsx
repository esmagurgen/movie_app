import { Image } from 'expo-image'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const OverviewSection = () => {
    const insets=useSafeAreaInsets()
  return (
    <View style={styles.overview}>
    <Image source={require("../assets/images/overview.png")} style={styles.overViewImage} contentFit='cover'/>
    {/*Overview Cover*/}
    <View style={styles.cover}>
        <View style={{paddingTop: insets.top, paddingBottom: insets.bottom,flex:1}}>
            <View style={styles.header}>
                <View style={{flexDirection:"row",alignItems:"center"}}>
                    <Image style={styles.profile} source={require("../assets/images/profile.jpg")} contentFit='cover'/>
                </View>
            </View>
        </View>
    </View>
    </View>
  )
}

export default OverviewSection

const styles = StyleSheet.create({
    overview:{
        height:400,
       position:"relative"
    },
    overViewImage:{
        width:"100%",
        height:"100%",
       
    },
    cover:{
        position:"absolute",
        top:0,
        bottom:0,
        left:0,
        right:0,
        backgroundColor:"rgba(0,0,0,0.6)"
    },
    header:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        padding:14
    },
    profile:{
        height:45,
        width:45,
        borderRadius:50
    }
});