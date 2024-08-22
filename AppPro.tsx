import React from 'react'
import { SafeAreaView,View,Text,StyleSheet,useColorScheme } from 'react-native'

const AppPro = () : JSX.Element =>{
    const isDarkmode = useColorScheme() === 'dark'
    return(
        <SafeAreaView style={styles.container}>
      <View >
        <Text style={isDarkmode?styles.whiteText:styles.darkText}>Welcome to React Native</Text>
      </View>
    </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        // backgroundColor:'#f0f0f0',
        justifyContent:'center',
        alignItems:'center'
    },
    whiteText:{
        color:'#ffffff'
    },
    darkText:{
        color:'#000000'
    }
})
export default AppPro