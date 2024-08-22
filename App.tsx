import React from 'react'
import {View,Text,SafeAreaView} from 'react-native'

const App =()=>{
  return(
    <SafeAreaView style={{flex:1, backgroundColor:'#f0f0f0'}}>
      <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <Text style={{fontSize:20, fontWeight:'bold', color:'#333'}}>Welcome to React Native</Text>
      </View>
    </SafeAreaView>
  )
} 

export default App;